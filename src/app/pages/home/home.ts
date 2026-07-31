import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UNITS, unitQuestionCount } from '../../core/curriculum';
import { ProgressStore } from '../../core/progress-store';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly progress = inject(ProgressStore);

  protected readonly units = computed(() =>
    UNITS.map((unit) => ({
      unit,
      moduleCount: unit.modules.length,
      questionCount: unitQuestionCount(unit),
      best: this.progress.unitBestCorrect(unit),
    })),
  );

  protected readonly totalQuestions = computed(() =>
    UNITS.reduce((sum, unit) => sum + unitQuestionCount(unit), 0),
  );

  protected readonly solvedQuestions = computed(() =>
    UNITS.reduce((sum, unit) => sum + this.progress.unitBestCorrect(unit), 0),
  );

  /** Denominator for the success rate: only the questions actually attempted. */
  protected readonly attemptedQuestions = computed(() =>
    UNITS.reduce((sum, unit) => sum + this.progress.attemptedQuestionCount(unit), 0),
  );

  protected percentage(correct: number, total: number): number {
    return total === 0 ? 0 : Math.round((correct / total) * 100);
  }
}
