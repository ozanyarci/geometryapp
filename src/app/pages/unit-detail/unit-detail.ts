import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { findUnit, unitQuestionCount } from '../../core/curriculum';
import { LastModuleStore } from '../../core/last-module-store';
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
  private readonly lastModules = inject(LastModuleStore);
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly unit = findUnit(inject(ActivatedRoute).snapshot.paramMap.get('id') ?? '');

  /** The module the student opened last, marked and scrolled to on arrival. */
  protected readonly lastModuleId = this.unit
    ? this.lastModules.lastModuleId(this.unit.id)
    : undefined;

  protected readonly questionCount = computed(() => (this.unit ? unitQuestionCount(this.unit) : 0));

  /** One row per module, with the student's best score on it. */
  protected readonly rows = computed(() =>
    (this.unit?.modules ?? []).map((module) => ({
      module,
      total: module.questions.length,
      best: this.progress.bestCorrect(module.id),
      attempted: this.progress.isAttempted(module.id),
      isLast: module.id === this.lastModuleId,
    })),
  );

  protected readonly doneCount = computed(() =>
    this.unit ? this.progress.attemptedModuleCount(this.unit) : 0,
  );

  constructor() {
    afterNextRender(() => this.revealLastModule());
  }

  protected percentage(correct: number, total: number): number {
    return total === 0 ? 0 : Math.round((correct / total) * 100);
  }

  /**
   * Brings the module the student left back into view. The browser restores the
   * old scroll position by itself when its own back button is used, so only
   * in-app navigation needs the nudge.
   */
  private revealLastModule(): void {
    if (!this.lastModuleId) return;
    if (this.router.lastSuccessfulNavigation()?.trigger === 'popstate') return;

    const target = this.host.nativeElement.querySelector<HTMLElement>(
      `[data-module-id="${this.lastModuleId}"]`,
    );
    if (typeof target?.scrollIntoView !== 'function') return;

    // Runs after the router's own scroll-to-top for this navigation.
    setTimeout(() => {
      const box = target.getBoundingClientRect();
      const fullyVisible = box.top >= 0 && box.bottom <= window.innerHeight;
      if (!fullyVisible) target.scrollIntoView({ block: 'center' });
    });
  }
}
