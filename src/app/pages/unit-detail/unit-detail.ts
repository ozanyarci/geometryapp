import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findUnit, unitQuestionCount } from '../../core/curriculum';
import { ProgressStore } from '../../core/progress-store';

@Component({
  selector: 'app-unit-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './unit-detail.html',
  styleUrl: './unit-detail.scss',
})
export class UnitDetail {
  private readonly progress = inject(ProgressStore);

  protected readonly unit = findUnit(inject(ActivatedRoute).snapshot.paramMap.get('id') ?? '');

  protected readonly questionCount = computed(() => (this.unit ? unitQuestionCount(this.unit) : 0));

  /** One row per module, with the student's best score on it. */
  protected readonly rows = computed(() =>
    (this.unit?.modules ?? []).map((module) => ({
      module,
      total: module.questions.length,
      best: this.progress.bestCorrect(module.id),
      attempted: this.progress.isAttempted(module.id),
    })),
  );

  protected readonly doneCount = computed(() =>
    this.unit ? this.progress.attemptedModuleCount(this.unit) : 0,
  );

  protected percentage(correct: number, total: number): number {
    return total === 0 ? 0 : Math.round((correct / total) * 100);
  }
}
