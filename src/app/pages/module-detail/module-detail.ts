import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { findModule } from '../../core/curriculum';
import { QuizMode } from '../../core/models';
import { ProgressStore } from '../../core/progress-store';
import { QuizStore, formatDuration } from '../../core/quiz-store';

interface ModeOption {
  mode: QuizMode;
  name: string;
  description: string;
}

const MODE_OPTIONS: readonly ModeOption[] = [
  {
    mode: 'practice',
    name: 'Çalışma Modu',
    description:
      'Her sorudan sonra doğru cevabı ve adım adım çözümü görürsün. Takılırsan ipucu alabilirsin.',
  },
  {
    mode: 'test',
    name: 'Test Modu',
    description:
      'Süre işler, çözümler gizlidir. Modülü tamamlayınca netini ve tüm çözümleri görürsün.',
  },
];

@Component({
  selector: 'app-module-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './module-detail.html',
  styleUrl: './module-detail.scss',
})
export class ModuleDetail {
  private readonly router = inject(Router);
  private readonly quiz = inject(QuizStore);
  private readonly progress = inject(ProgressStore);

  private readonly params = inject(ActivatedRoute).snapshot.paramMap;

  protected readonly found = findModule(
    this.params.get('id') ?? '',
    this.params.get('moduleId') ?? '',
  );

  protected readonly selectedMode = signal<QuizMode>('practice');
  protected readonly modes = MODE_OPTIONS;

  /** Distinct topics covered by this module's questions. */
  protected readonly topics = computed(() => [
    ...new Set(this.found?.module.questions.map((question) => question.topic) ?? []),
  ]);

  protected readonly record = computed(() => {
    if (!this.found) return undefined;
    return this.progress.record(this.found.module.id, this.selectedMode());
  });

  protected readonly formatDuration = formatDuration;

  protected selectMode(mode: QuizMode): void {
    this.selectedMode.set(mode);
  }

  protected start(): void {
    if (!this.found) return;
    const { unit, module } = this.found;
    this.quiz.start(unit, module, this.selectedMode());
    void this.router.navigate(['/unit', unit.id, 'module', module.id, 'question']);
  }
}
