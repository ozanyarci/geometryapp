import { TestBed } from '@angular/core/testing';
import { findQuestion, unitQuestions } from './curriculum';
import { UNIT_2_TRIANGLES } from './data/unit-2-triangles';
import { ProgressStore } from './progress-store';
import { QuizStore } from './quiz-store';
import {
  PROMPT_INTERVALS_MS,
  QuestionOutcome,
  REVIEW_MIN_MISSED,
  REVIEW_SIZE,
  ReviewStore,
} from './review-store';

const MINUTE = 60 * 1000;
const ids = unitQuestions(UNIT_2_TRIANGLES).map((question) => question.id);

function outcomes(correct: number, wrong: number): QuestionOutcome[] {
  return [
    ...ids.slice(0, correct).map((questionId) => ({ questionId, correct: true })),
    ...ids.slice(correct, correct + wrong).map((questionId) => ({ questionId, correct: false })),
  ];
}

describe('ReviewStore', () => {
  let store: ReviewStore;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    store = TestBed.inject(ReviewStore);
  });

  it('does not prompt with fewer than 15 missed questions', () => {
    store.recordRun(outcomes(0, REVIEW_MIN_MISSED - 1));
    expect(store.shouldPrompt()).toBe(false);
  });

  it('does not prompt at a success rate of 50% or more', () => {
    store.recordRun(outcomes(20, 20));
    expect(store.missedIds().length).toBe(20);
    expect(store.shouldPrompt()).toBe(false);
  });

  it('prompts below 50% with at least 15 missed questions', () => {
    store.recordRun(outcomes(10, REVIEW_MIN_MISSED));
    expect(store.shouldPrompt()).toBe(true);
  });

  it('keeps only the latest outcome of a question', () => {
    store.recordRun(outcomes(0, REVIEW_MIN_MISSED));
    store.recordRun([{ questionId: ids[0], correct: true }]);
    expect(store.missedIds()).not.toContain(ids[0]);
    expect(store.shouldPrompt()).toBe(false);
  });

  it('waits 30 min, then 1 h, 2 h and 3 h after each "no"', () => {
    store.recordRun(outcomes(0, 20));
    let now = 0;
    const expected = [30, 60, 120, 180, 180].map((minutes) => minutes * MINUTE);

    store.markShown(now);
    expect(store.shouldPrompt(now + PROMPT_INTERVALS_MS[0] - 1)).toBe(false);
    expect(store.shouldPrompt(now + PROMPT_INTERVALS_MS[0])).toBe(true);

    for (const gap of expected.slice(1)) {
      store.decline();
      expect(store.shouldPrompt(now + gap - 1)).toBe(false);
      expect(store.shouldPrompt(now + gap)).toBe(true);
      now += gap;
      store.markShown(now);
    }
  });

  it('goes back to 30 min after a "yes"', () => {
    store.recordRun(outcomes(0, 20));
    store.markShown(0);
    store.decline();
    store.decline();
    store.accept();
    expect(store.shouldPrompt(30 * MINUTE)).toBe(true);
  });

  it('draws five distinct missed questions', () => {
    store.recordRun(outcomes(3, 20));
    const picked = store.pickReviewIds();
    expect(picked.length).toBe(REVIEW_SIZE);
    expect(new Set(picked).size).toBe(REVIEW_SIZE);
    for (const id of picked) expect(store.missedIds()).toContain(id);
  });

  it('survives a reload through localStorage', () => {
    store.recordRun(outcomes(0, 20));
    store.markShown(1000);
    store.decline();

    TestBed.resetTestingModule();
    const reloaded = TestBed.inject(ReviewStore);
    expect(reloaded.missedIds().length).toBe(20);
    expect(reloaded.declines()).toBe(1);
    expect(reloaded.shouldPrompt(1000 + 59 * MINUTE)).toBe(false);
  });

  it('records a finished run and leaves module progress alone for a review', () => {
    const quiz = TestBed.inject(QuizStore);
    store.recordRun(outcomes(0, 20));
    const questions = store.pickReviewIds().map((id) => findQuestion(id)!);

    quiz.startReview(questions);
    expect(quiz.isReview()).toBe(true);
    expect(quiz.runPath()).toEqual(['/review']);
    for (const question of questions) {
      quiz.answer(question.answer);
      quiz.next();
    }
    quiz.finish();

    expect(store.missedIds().length).toBe(20 - REVIEW_SIZE);
    expect(localStorage.getItem('geometry.progress.v2')).toBeNull();
  });

  it('raises the module and unit correct counts after a review', () => {
    const quiz = TestBed.inject(QuizStore);
    const progress = TestBed.inject(ProgressStore);
    const module = UNIT_2_TRIANGLES.modules[0];
    const wrong = (answer: string) => (answer === 'A' ? 'B' : 'A');

    quiz.start(UNIT_2_TRIANGLES, module, 'test');
    for (const question of module.questions) {
      quiz.answer(wrong(question.answer));
      quiz.next();
    }
    quiz.finish();
    expect(progress.bestCorrect(module)).toBe(0);

    // Four of the five review questions right, one wrong.
    const reviewed = module.questions.slice(0, 5);
    quiz.startReview(reviewed);
    reviewed.forEach((question, i) => {
      quiz.answer(i < 4 ? question.answer : wrong(question.answer));
      quiz.next();
    });
    quiz.finish();

    expect(progress.bestCorrect(module)).toBe(4);
    expect(progress.unitBestCorrect(UNIT_2_TRIANGLES)).toBe(4);
  });
});
