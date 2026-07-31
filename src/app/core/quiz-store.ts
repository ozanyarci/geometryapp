import { Injectable, computed, inject, signal, DestroyRef } from '@angular/core';
import { ChoiceKey, Module, Question, QuizMode, Unit } from './models';
import { ProgressStore } from './progress-store';

/** Per-question summary used by the result screen. */
export interface QuestionResult {
  question: Question;
  selected?: ChoiceKey;
  isCorrect: boolean;
  isBlank: boolean;
}

@Injectable({ providedIn: 'root' })
export class QuizStore {
  private readonly progress = inject(ProgressStore);

  private readonly _unit = signal<Unit | null>(null);
  private readonly _module = signal<Module | null>(null);
  private readonly _mode = signal<QuizMode>('practice');
  private readonly _index = signal(0);
  private readonly _answers = signal<Record<string, ChoiceKey>>({});
  private readonly _revealedSolutions = signal<ReadonlySet<string>>(new Set());
  private readonly _revealedHints = signal<ReadonlySet<string>>(new Set());
  private readonly _finished = signal(false);
  private readonly _elapsedSeconds = signal(0);

  private timerId: ReturnType<typeof setInterval> | null = null;

  // ---- Readable state -----------------------------------------------------

  readonly unit = this._unit.asReadonly();
  readonly module = this._module.asReadonly();
  readonly mode = this._mode.asReadonly();
  readonly index = this._index.asReadonly();
  readonly finished = this._finished.asReadonly();
  readonly elapsedSeconds = this._elapsedSeconds.asReadonly();

  /** A run covers one module, never the whole unit. */
  readonly questions = computed<readonly Question[]>(() => this._module()?.questions ?? []);
  readonly total = computed(() => this.questions().length);
  readonly currentQuestion = computed<Question | undefined>(() => this.questions()[this._index()]);
  readonly isLastQuestion = computed(() => this._index() === this.total() - 1);
  readonly isFirstQuestion = computed(() => this._index() === 0);

  /** Lets guards redirect when the page is reloaded before a run was started. */
  readonly ready = computed(() => this._module() !== null);

  readonly currentAnswer = computed<ChoiceKey | undefined>(() => {
    const question = this.currentQuestion();
    return question ? this._answers()[question.id] : undefined;
  });

  /**
   * Practice mode locks a choice once answered; test mode lets the student
   * change their mind until they submit.
   */
  readonly currentLocked = computed(
    () => this._mode() === 'practice' && this.currentAnswer() !== undefined,
  );

  readonly solutionRevealed = computed(() => {
    const question = this.currentQuestion();
    return question ? this._revealedSolutions().has(question.id) : false;
  });

  readonly hintRevealed = computed(() => {
    const question = this.currentQuestion();
    return question ? this._revealedHints().has(question.id) : false;
  });

  readonly answeredCount = computed(() => Object.keys(this._answers()).length);

  readonly results = computed<readonly QuestionResult[]>(() => {
    const answers = this._answers();
    return this.questions().map((question) => {
      const selected = answers[question.id];
      return {
        question,
        selected,
        isCorrect: selected === question.answer,
        isBlank: selected === undefined,
      };
    });
  });

  readonly correctCount = computed(() => this.results().filter((r) => r.isCorrect).length);
  readonly wrongCount = computed(
    () => this.results().filter((r) => !r.isCorrect && !r.isBlank).length,
  );
  readonly blankCount = computed(() => this.results().filter((r) => r.isBlank).length);

  /** Turkish university exam scoring: four wrong answers cancel one correct. */
  readonly net = computed(() => this.correctCount() - this.wrongCount() / 4);

  readonly percentage = computed(() => {
    const total = this.total();
    return total === 0 ? 0 : Math.round((this.correctCount() / total) * 100);
  });

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stopTimer());
  }

  // ---- Actions ------------------------------------------------------------

  start(unit: Unit, module: Module, mode: QuizMode): void {
    this.stopTimer();
    this._unit.set(unit);
    this._module.set(module);
    this._mode.set(mode);
    this._index.set(0);
    this._answers.set({});
    this._revealedSolutions.set(new Set());
    this._revealedHints.set(new Set());
    this._finished.set(false);
    this._elapsedSeconds.set(0);
    this.startTimer();
  }

  answer(choice: ChoiceKey): void {
    const question = this.currentQuestion();
    if (!question || this._finished() || this.currentLocked()) return;

    this._answers.update((current) => ({ ...current, [question.id]: choice }));

    // In practice mode the solution opens as soon as an answer is given.
    if (this._mode() === 'practice') {
      this._revealedSolutions.update((current) => new Set(current).add(question.id));
    }
  }

  toggleHint(): void {
    const question = this.currentQuestion();
    if (!question) return;
    this._revealedHints.update((current) => {
      const next = new Set(current);
      if (next.has(question.id)) {
        next.delete(question.id);
      } else {
        next.add(question.id);
      }
      return next;
    });
  }

  next(): void {
    if (this._index() < this.total() - 1) {
      this._index.update((i) => i + 1);
    }
  }

  previous(): void {
    if (this._index() > 0) {
      this._index.update((i) => i - 1);
    }
  }

  goToQuestion(index: number): void {
    if (index >= 0 && index < this.total()) {
      this._index.set(index);
    }
  }

  finish(): void {
    if (this._finished()) return;
    this.stopTimer();
    this._finished.set(true);

    const module = this._module();
    if (module) {
      this.progress.saveResult(
        module.id,
        this._mode(),
        this.correctCount(),
        this.total(),
        this._elapsedSeconds(),
      );
    }
  }

  /** Restarts the same module in the same mode. */
  retry(): void {
    const unit = this._unit();
    const module = this._module();
    if (unit && module) this.start(unit, module, this._mode());
  }

  clear(): void {
    this.stopTimer();
    this._unit.set(null);
    this._module.set(null);
    this._finished.set(false);
  }

  // ---- Timer --------------------------------------------------------------

  private startTimer(): void {
    this.timerId = setInterval(() => {
      this._elapsedSeconds.update((s) => s + 1);
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

/** Renders 125 seconds as "02:05". */
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}
