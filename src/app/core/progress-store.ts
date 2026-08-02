import { Injectable, signal } from '@angular/core';
import { ModuleRecord, QuizMode, Unit } from './models';

// v1 was keyed by unit; progress is per module since the split into modules.
const STORAGE_KEY = 'geometry.progress.v2';

/** Records are keyed by `moduleId::mode`. */
type Records = Record<string, ModuleRecord>;

function recordKey(moduleId: string, mode: QuizMode): string {
  return `${moduleId}::${mode}`;
}

/**
 * Persists each student's best result per module in localStorage. When storage
 * is unavailable (private windows, for example) it silently falls back to
 * in-memory state for the current session.
 *
 * Writes are deliberately synchronous: a result must survive the student
 * closing the app immediately after finishing a test.
 */
@Injectable({ providedIn: 'root' })
export class ProgressStore {
  private readonly records = signal<Records>(this.read());

  record(moduleId: string, mode: QuizMode): ModuleRecord | undefined {
    return this.records()[recordKey(moduleId, mode)];
  }

  /** Highest correct count across both modes for a module. */
  bestCorrect(moduleId: string): number {
    const records = this.records();
    const practice = records[recordKey(moduleId, 'practice')]?.bestCorrect ?? 0;
    const test = records[recordKey(moduleId, 'test')]?.bestCorrect ?? 0;
    return Math.max(practice, test);
  }

  /** Best correct answers across every module of a unit. */
  unitBestCorrect(unit: Unit): number {
    return unit.modules.reduce((sum, module) => sum + this.bestCorrect(module.id), 0);
  }

  /** Whether the student has finished the module at least once, in either mode. */
  isAttempted(moduleId: string): boolean {
    return (
      this.record(moduleId, 'practice') !== undefined || this.record(moduleId, 'test') !== undefined
    );
  }

  /** How many modules the student has finished at least once. */
  attemptedModuleCount(unit: Unit): number {
    return unit.modules.filter((module) => this.isAttempted(module.id)).length;
  }

  /**
   * Questions the student has actually faced — modules never opened are left
   * out, so success rates are measured against attempted work only.
   */
  attemptedQuestionCount(unit: Unit): number {
    return unit.modules
      .filter((module) => this.isAttempted(module.id))
      .reduce((sum, module) => sum + module.questions.length, 0);
  }

  saveResult(
    moduleId: string,
    mode: QuizMode,
    correct: number,
    total: number,
    seconds: number,
  ): void {
    const key = recordKey(moduleId, mode);
    const previous = this.records()[key];

    const updated: ModuleRecord = {
      bestCorrect: Math.max(previous?.bestCorrect ?? 0, correct),
      total,
      attempts: (previous?.attempts ?? 0) + 1,
      lastPlayedAt: Date.now(),
      bestSeconds:
        mode === 'test'
          ? previous?.bestSeconds === undefined
            ? seconds
            : Math.min(previous.bestSeconds, seconds)
          : previous?.bestSeconds,
    };

    this.records.update((current) => ({ ...current, [key]: updated }));
    this.write();
  }

  reset(): void {
    this.records.set({});
    this.write();
  }

  private write(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.records()));
    } catch {
      // Storage unavailable — progress stays in memory for this session only.
    }
  }

  private read(): Records {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as unknown;
      // Corrupted or hand-edited data must not break the app.
      return parsed && typeof parsed === 'object' ? (parsed as Records) : {};
    } catch {
      return {};
    }
  }
}
