import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChoiceKey } from '../../core/models';
import { QuizStore, formatDuration } from '../../core/quiz-store';
import { FigureView } from '../../ui/figure/figure';

@Component({
  selector: 'app-quiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FigureView],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz {
  private readonly router = inject(Router);
  private readonly params = inject(ActivatedRoute).snapshot.paramMap;
  private readonly unitId = this.params.get('id') ?? '';
  private readonly moduleId = this.params.get('moduleId') ?? '';

  protected readonly store = inject(QuizStore);
  protected readonly formatDuration = formatDuration;

  /** Confirmation sheets for leaving early and for submitting with blanks. */
  protected readonly exitDialogOpen = signal(false);
  protected readonly finishDialogOpen = signal(false);

  protected readonly practiceMode = computed(() => this.store.mode() === 'practice');

  /** Practice mode reveals correct/incorrect as soon as an answer is given. */
  protected readonly feedbackVisible = computed(
    () => this.practiceMode() && this.store.currentAnswer() !== undefined,
  );

  protected readonly answerIsCorrect = computed(() => {
    const question = this.store.currentQuestion();
    return question !== undefined && this.store.currentAnswer() === question.answer;
  });

  protected readonly blankCount = computed(() => this.store.total() - this.store.answeredCount());

  protected choiceClass(choice: ChoiceKey): string {
    const question = this.store.currentQuestion();
    const selected = this.store.currentAnswer();
    if (!question) return '';

    // In test mode the correct answer stays hidden until the run is submitted.
    if (this.practiceMode() && selected !== undefined) {
      if (choice === question.answer) return 'choice--correct';
      if (choice === selected) return 'choice--wrong';
      return 'choice--dimmed';
    }
    return selected === choice ? 'choice--selected' : '';
  }

  protected answer(choice: ChoiceKey): void {
    this.store.answer(choice);
  }

  protected forward(): void {
    if (this.store.isLastQuestion()) {
      this.requestFinish();
    } else {
      this.store.next();
    }
  }

  protected requestFinish(): void {
    if (this.blankCount() > 0) {
      this.finishDialogOpen.set(true);
    } else {
      this.finish();
    }
  }

  protected finish(): void {
    this.finishDialogOpen.set(false);
    this.store.finish();
    void this.router.navigate(['/unit', this.unitId, 'module', this.moduleId, 'result']);
  }

  protected confirmExit(): void {
    this.exitDialogOpen.set(false);
    this.store.clear();
    void this.router.navigate(['/unit', this.unitId, 'module', this.moduleId]);
  }

  protected dotClass(index: number): string {
    const question = this.store.questions()[index];
    if (!question) return '';
    const active = index === this.store.index() ? ' dot--active' : '';
    const result = this.store.results()[index];

    if (this.practiceMode() && !result.isBlank) {
      return (result.isCorrect ? 'dot--correct' : 'dot--wrong') + active;
    }
    return (result.isBlank ? '' : 'dot--answered') + active;
  }
}
