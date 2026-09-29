import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs';
import { QuizStore } from './core/quiz-store';
import { ReviewStore } from './core/review-store';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(document:keydown.escape)': 'onEscape()' },
})
export class App {
  private readonly swUpdate = inject(SwUpdate);
  private readonly router = inject(Router);
  private readonly quiz = inject(QuizStore);
  private readonly review = inject(ReviewStore);

  protected readonly updateReady = signal(false);
  protected readonly reviewPromptOpen = signal(false);

  constructor() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
        .pipe(
          filter((event) => event.type === 'VERSION_READY'),
          takeUntilDestroyed(),
        )
        .subscribe(() => this.updateReady.set(true));
    }

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.maybePromptReview(event.urlAfterRedirects));
  }

  protected reloadApp(): void {
    document.location.reload();
  }

  protected async acceptReview(): Promise<void> {
    this.reviewPromptOpen.set(false);
    this.review.accept();
    // Loaded on demand so the question bank stays out of the initial bundle.
    const { findQuestion } = await import('./core/curriculum');
    const questions = this.review
      .pickReviewIds()
      .map((id) => findQuestion(id))
      .filter((question) => question !== undefined);
    if (questions.length === 0) return;
    this.quiz.startReview(questions);
    void this.router.navigate(['/review', 'question']);
  }

  protected declineReview(): void {
    this.reviewPromptOpen.set(false);
    this.review.decline();
  }

  protected onEscape(): void {
    if (this.reviewPromptOpen()) this.declineReview();
  }

  /** Never interrupts a run in progress; the question screen is left alone. */
  private maybePromptReview(url: string): void {
    if (this.reviewPromptOpen() || url.split('?')[0].endsWith('/question')) return;
    if (!this.review.shouldPrompt()) return;
    this.review.markShown();
    this.reviewPromptOpen.set(true);
  }
}
