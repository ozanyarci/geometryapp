import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Figure } from '../../core/models';

/** Escapes text so it can be embedded safely inside an HTML attribute. */
function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Renders a question diagram.
 *
 * The SVG is passed through `bypassSecurityTrustHtml`. That is safe here because
 * diagrams come from our own compile-time data files and never from user input.
 * Angular's HTML sanitizer strips <marker> and <defs>, which would otherwise
 * remove every arrowhead from the figures.
 */
@Component({
  selector: 'app-figure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="figure">
      <div class="figure__canvas" [innerHTML]="markup()"></div>
      <figcaption>{{ figure().caption }}</figcaption>
    </figure>
  `,
  styles: `
    .figure {
      margin: 16px 0 0;
      padding: 10px 6px 4px;
      background-color: var(--figure-bg);
      background-image:
        linear-gradient(var(--grid-line) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
      background-size: 16px 16px;
      border: 1px solid var(--hair);
    }

    .figure__canvas {
      display: block;
    }

    figcaption {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--blueprint);
      padding: 4px 2px 0;
    }
  `,
})
export class FigureView {
  readonly figure = input.required<Figure>();

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly markup = computed<SafeHtml>(() => {
    const figure = this.figure();
    const svg =
      `<svg class="figure-svg" viewBox="${escapeAttribute(figure.viewBox)}" role="img" ` +
      `aria-label="${escapeAttribute(figure.label)}" xmlns="http://www.w3.org/2000/svg">` +
      `${figure.svg}</svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  });
}
