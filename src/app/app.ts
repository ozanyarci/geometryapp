import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly swUpdate = inject(SwUpdate);

  protected readonly updateReady = signal(false);

  constructor() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
        .pipe(
          filter((event) => event.type === 'VERSION_READY'),
          takeUntilDestroyed(),
        )
        .subscribe(() => this.updateReady.set(true));
    }
  }

  protected reloadApp(): void {
    document.location.reload();
  }
}
