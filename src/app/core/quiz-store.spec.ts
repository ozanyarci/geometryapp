import { TestBed } from '@angular/core/testing';
import { QuizStore, formatDuration } from './quiz-store';
import { UNIT_1_ANGLES } from './data/unit-1-angles';

describe('QuizStore', () => {
  /** A run covers one module, so the counts below are module-sized. */
  const firstModule = UNIT_1_ANGLES.modules[0];
  const total = firstModule.questions.length;
  const lastIndex = total - 1;

  let store: QuizStore;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    store = TestBed.inject(QuizStore);
  });

  it('is not ready before a run starts', () => {
    expect(store.ready()).toBe(false);
  });

  it('lands on the first question of the module when started', () => {
    store.start(UNIT_1_ANGLES, firstModule, 'practice');
    expect(store.ready()).toBe(true);
    expect(store.index()).toBe(0);
    expect(store.total()).toBe(total);
    expect(store.currentQuestion()?.id).toBe(firstModule.questions[0].id);
  });

  it('serves only its own module, not the whole unit', () => {
    const second = UNIT_1_ANGLES.modules[1];
    store.start(UNIT_1_ANGLES, second, 'practice');

    expect(store.questions().map((q) => q.id)).toEqual(second.questions.map((q) => q.id));
    expect(store.total()).toBeLessThan(
      UNIT_1_ANGLES.modules.reduce((sum, m) => sum + m.questions.length, 0),
    );
  });

  it('locks the answer and opens the solution in practice mode', () => {
    store.start(UNIT_1_ANGLES, firstModule, 'practice');
    const correct = firstModule.questions[0].answer;
    const other = correct === 'A' ? 'B' : 'A';

    store.answer(correct);

    expect(store.currentAnswer()).toBe(correct);
    expect(store.currentLocked()).toBe(true);
    expect(store.solutionRevealed()).toBe(true);

    // A locked answer must not change.
    store.answer(other);
    expect(store.currentAnswer()).toBe(correct);
  });

  it('allows changing the answer until the test is submitted', () => {
    store.start(UNIT_1_ANGLES, firstModule, 'test');
    store.answer('A');
    expect(store.currentLocked()).toBe(false);
    expect(store.solutionRevealed()).toBe(false);

    store.answer('B');
    expect(store.currentAnswer()).toBe('B');
  });

  it('counts correct, wrong and blank answers', () => {
    store.start(UNIT_1_ANGLES, firstModule, 'test');

    // First question correct, second deliberately wrong, rest blank.
    store.answer(firstModule.questions[0].answer);
    store.next();
    const wrong = firstModule.questions[1].answer === 'A' ? 'B' : 'A';
    store.answer(wrong);

    expect(store.correctCount()).toBe(1);
    expect(store.wrongCount()).toBe(1);
    expect(store.blankCount()).toBe(total - 2);
    expect(store.net()).toBeCloseTo(0.75);
  });

  it('reports 100 percent when every answer is correct', () => {
    store.start(UNIT_1_ANGLES, firstModule, 'test');
    for (const question of firstModule.questions) {
      store.answer(question.answer);
      store.next();
    }

    expect(store.correctCount()).toBe(total);
    expect(store.percentage()).toBe(100);
    expect(store.net()).toBe(total);
  });

  it('writes the result to progress storage under the module id', () => {
    store.start(UNIT_1_ANGLES, firstModule, 'test');
    store.answer(firstModule.questions[0].answer);
    store.finish();

    expect(store.finished()).toBe(true);
    const raw = localStorage.getItem('geometry.progress.v2');
    expect(raw).toContain(`${firstModule.id}::test`);
    expect(JSON.parse(raw!)[`${firstModule.id}::test`].bestCorrect).toBe(1);
  });

  it('ignores out-of-range navigation', () => {
    store.start(UNIT_1_ANGLES, firstModule, 'practice');
    store.previous();
    expect(store.index()).toBe(0);

    store.goToQuestion(99);
    expect(store.index()).toBe(0);

    store.goToQuestion(lastIndex);
    expect(store.index()).toBe(lastIndex);
    expect(store.isLastQuestion()).toBe(true);
    store.next();
    expect(store.index()).toBe(lastIndex);
  });
});

describe('formatDuration', () => {
  it('renders seconds as mm:ss', () => {
    expect(formatDuration(0)).toBe('00:00');
    expect(formatDuration(65)).toBe('01:05');
    expect(formatDuration(600)).toBe('10:00');
  });
});
