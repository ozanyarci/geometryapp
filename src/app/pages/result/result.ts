import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { nextModule } from '../../core/curriculum';
import { QuizStore, formatDuration } from '../../core/quiz-store';
import { FigureView } from '../../ui/figure/figure';

@Component({
  selector: 'app-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DecimalPipe, FigureView],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {
  private readonly router = inject(Router);

  protected readonly store = inject(QuizStore);
  protected readonly formatDuration = formatDuration;

  /** Expanded solution panels; wrong answers start open. */
  private readonly openSolutions = signal<ReadonlySet<string>>(
    new Set(
      this.store
        .results()
        .filter((result) => !result.isCorrect)
        .map((result) => result.question.id),
    ),
  );

  protected readonly unitId = computed(() => this.store.unit()?.id ?? '');
  protected readonly moduleId = computed(() => this.store.module()?.id ?? '');

  /** Offered at the bottom so the student can chain straight into module n+1. */
  protected readonly next = computed(() => {
    const unit = this.store.unit();
    const module = this.store.module();
    return unit && module ? nextModule(unit, module.id) : undefined;
  });

  protected readonly message = computed(() => {
    const percentage = this.store.percentage();
    if (percentage === 100) return 'Tam isabet. Bu modülü bitirdin.';
    if (percentage >= 80) return 'Çok iyi. Birkaç ayrıntıya daha dikkat et.';
    if (percentage >= 50) return 'Fena değil. Yanlışlarının çözümünü mutlaka oku.';
    return 'Konuyu bir daha gözden geçirmende fayda var.';
  });

  protected isOpen(questionId: string): boolean {
    return this.openSolutions().has(questionId);
  }

  protected toggleSolution(questionId: string): void {
    this.openSolutions.update((current) => {
      const next = new Set(current);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  }

  protected retry(): void {
    const unitId = this.unitId();
    const moduleId = this.moduleId();
    this.store.retry();
    void this.router.navigate(['/unit', unitId, 'module', moduleId, 'question']);
  }
}
