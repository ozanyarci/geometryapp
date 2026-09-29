import { Injectable, computed, signal } from '@angular/core';

const OUTCOMES_KEY = 'geometry.question-outcomes.v1';
const PROMPT_KEY = 'geometry.review-prompt.v1';

/** The prompt only appears once at least this many questions are missed. */
export const REVIEW_MIN_MISSED = 15;
/** ...and the overall success rate is below this share. */
export const REVIEW_SUCCESS_THRESHOLD = 0.5;
/** Questions drawn at random from the missed ones for a review run. */
export const REVIEW_SIZE = 5;

const MINUTE = 60 * 1000;
/**
 * Minimum gap between two prompts, indexed by how many times in a row the
 * student has said no: 30 min at first, then 1 h, 2 h and finally 3 h.
 */
export const PROMPT_INTERVALS_MS: readonly number[] = [
  30 * MINUTE,
  60 * MINUTE,
  120 * MINUTE,
  180 * MINUTE,
];

/** Latest outcome per question id: true when it was answered correctly. */
type Outcomes = Record<string, boolean>;

interface PromptState {
  lastShownAt?: number;
  declines: number;
}

/** One answered question from a finished run. */
export interface QuestionOutcome {
  questionId: string;
  correct: boolean;
}

/**
 * Tracks which questions the student got wrong (or left blank) on their latest
 * try, and decides when to offer a short review run of those questions.
 *
 * Deliberately knows ids only: importing the curriculum here would pull the
 * whole question bank into the initial bundle.
 *
 * When storage is unavailable (private windows, for example) it falls back to
 * in-memory state for the current session.
 */
@Injectable({ providedIn: 'root' })
export class ReviewStore {
  private readonly outcomes = signal<Outcomes>(readOutcomes());
  private readonly prompt = signal<PromptState>(readPrompt());

  /** Question ids whose latest answer was wrong or blank. */
  readonly missedIds = computed(() =>
    Object.entries(this.outcomes())
      .filter(([, correct]) => !correct)
      .map(([id]) => id),
  );

  readonly answeredCount = computed(() => Object.keys(this.outcomes()).length);

  /** Share of answered questions whose latest answer was correct, 0..1. */
  readonly successRate = computed(() => {
    const answered = this.answeredCount();
    if (answered === 0) return 1;
    return Object.values(this.outcomes()).filter(Boolean).length / answered;
  });

  /** Declines in a row since the last "yes"; drives the prompt interval. */
  readonly declines = computed(() => this.prompt().declines);

  recordRun(results: readonly QuestionOutcome[]): void {
    if (results.length === 0) return;
    this.outcomes.update((current) => {
      const next = { ...current };
      for (const { questionId, correct } of results) next[questionId] = correct;
      return next;
    });
    write(OUTCOMES_KEY, this.outcomes());
  }

  /** Whether the review prompt may be shown at `now`. */
  shouldPrompt(now = Date.now()): boolean {
    if (this.missedIds().length < REVIEW_MIN_MISSED) return false;
    if (this.successRate() >= REVIEW_SUCCESS_THRESHOLD) return false;

    const { lastShownAt, declines } = this.prompt();
    if (lastShownAt === undefined) return true;
    const interval = PROMPT_INTERVALS_MS[Math.min(declines, PROMPT_INTERVALS_MS.length - 1)];
    return now - lastShownAt >= interval;
  }

  /** Starts the cool-down; called as soon as the prompt appears. */
  markShown(now = Date.now()): void {
    this.setPrompt({ ...this.prompt(), lastShownAt: now });
  }

  /** "No" stretches the gap before the next prompt. */
  decline(): void {
    this.setPrompt({ ...this.prompt(), declines: this.prompt().declines + 1 });
  }

  /** "Yes" puts the gap back to its shortest. */
  accept(): void {
    this.setPrompt({ ...this.prompt(), declines: 0 });
  }

  /** Ids of up to REVIEW_SIZE missed questions, in random order. */
  pickReviewIds(random: () => number = Math.random): string[] {
    const pool = [...this.missedIds()];
    // Fisher–Yates, stopping once enough ids are drawn.
    const count = Math.min(REVIEW_SIZE, pool.length);
    for (let i = 0; i < count; i++) {
      const j = i + Math.floor(random() * (pool.length - i));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count);
  }

  private setPrompt(state: PromptState): void {
    this.prompt.set(state);
    write(PROMPT_KEY, state);
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable — state stays in memory for this session only.
  }
}

function readJson(key: string): unknown {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as unknown) : undefined;
  } catch {
    return undefined;
  }
}

function readOutcomes(): Outcomes {
  const parsed = readJson(OUTCOMES_KEY);
  // Corrupted or hand-edited data must not break the app.
  if (!parsed || typeof parsed !== 'object') return {};
  return Object.fromEntries(
    Object.entries(parsed as Record<string, unknown>).filter(
      ([, correct]) => typeof correct === 'boolean',
    ),
  ) as Outcomes;
}

function readPrompt(): PromptState {
  const parsed = readJson(PROMPT_KEY) as Partial<PromptState> | undefined;
  if (!parsed || typeof parsed !== 'object') return { declines: 0 };
  return {
    lastShownAt: typeof parsed.lastShownAt === 'number' ? parsed.lastShownAt : undefined,
    declines: typeof parsed.declines === 'number' && parsed.declines >= 0 ? parsed.declines : 0,
  };
}
