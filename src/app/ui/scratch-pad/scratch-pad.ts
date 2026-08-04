import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  effect,
  inject,
  input,
  signal,
  untracked,
  viewChild,
} from '@angular/core';

/**
 * A point on a stroke. Coordinates are stored as fractions of the surface
 * *width* — both axes — so scribbles keep their shape and stay aligned with the
 * diagram when the tablet is rotated or the surface grows.
 */
interface Point {
  x: number;
  y: number;
  pressure: number;
}

interface Stroke {
  points: Point[];
  erase: boolean;
}

const PEN_WIDTH = 2.2;
const ERASER_WIDTH = 24;

/**
 * Wraps the body of a question in a surface a student can scribble on with a
 * tablet pen while working the problem out.
 *
 * Drawing is behind an explicit toggle rather than reacting to `pointerType`
 * alone: pen-versus-finger handling differs enough between iPadOS and Android
 * that letting the pen draw at all times would either swallow taps on some
 * devices or scroll the page mid-stroke on others. With the toggle the surface
 * only intercepts input while the student asked for it, and the answer choices
 * — which sit outside this component — stay tappable throughout.
 */
@Component({
  selector: 'app-scratch-pad',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.pad--active]': 'active()',
    '[class.pad--erasing]': "tool() === 'eraser'",
  },
  template: `
    <div class="pad__surface" #surface>
      <div class="pad__content"><ng-content /></div>

      @if (active()) {
        <div class="pad__space" aria-hidden="true"></div>
      }

      <canvas
        #canvas
        class="pad__canvas"
        aria-hidden="true"
        (pointerdown)="onPointerDown($event)"
        (pointermove)="onPointerMove($event)"
        (pointerup)="onPointerUp($event)"
        (pointercancel)="onPointerUp($event)"
      ></canvas>
    </div>

    <div class="pad__tools">
      @if (active()) {
        <button
          type="button"
          class="pad__tool"
          [class.pad__tool--on]="tool() === 'eraser'"
          [attr.aria-pressed]="tool() === 'eraser'"
          (click)="toggleEraser()"
        >
          Silgi
        </button>

        <button type="button" class="pad__tool" [disabled]="isEmpty()" (click)="undo()">
          Geri al
        </button>

        <button type="button" class="pad__tool" [disabled]="isEmpty()" (click)="clear()">
          Temizle
        </button>
      }

      <button
        type="button"
        class="pad__tool pad__tool--toggle"
        [class.pad__tool--on]="active()"
        [attr.aria-pressed]="active()"
        (click)="toggle()"
      >
        {{ active() ? 'Bitir' : 'Karala' }}
      </button>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .pad__surface {
      position: relative;
    }

    /* Blank room to work the problem out, opened up only while drawing. */
    .pad__space {
      height: 320px;
      margin-top: 12px;
      border: 1px dashed var(--hair);
      background-color: var(--figure-bg);
      background-image:
        linear-gradient(var(--grid-line) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
      background-size: 16px 16px;
    }

    .pad__canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    /* While active the surface swallows input so a stroke never scrolls the
       page or lands on whatever sits under the pen. */
    :host(.pad--active) .pad__canvas {
      pointer-events: auto;
      touch-action: none;
      cursor: crosshair;
    }

    /* An eraser glyph drawn white-on-dark so it stays visible over the diagram
       in both themes. The hotspot sits at its centre, which is where the
       erased circle is actually centred. */
    :host(.pad--active.pad--erasing) .pad__canvas {
      cursor:
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Cg transform='rotate(-45 14 14)'%3E%3Crect x='5' y='9.5' width='18' height='9' rx='1.5' fill='%23ffffff' stroke='%2313212c' stroke-width='1.6'/%3E%3Cpath d='M14 9.5V18.5' stroke='%2313212c' stroke-width='1.4'/%3E%3C/g%3E%3C/svg%3E")
          14 14,
        cell;
    }

    /* Preventing the pointer event stops selection for pen and touch but not
       for a mouse, where a stroke would otherwise select the text underneath
       and auto-scroll the page. */
    :host(.pad--active) .pad__surface {
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }

    .pad__tools {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
      margin-top: 10px;
    }

    .pad__tool {
      min-height: 34px;
      padding: 0 12px;
      background: transparent;
      border: 1px solid var(--hair);
      border-radius: var(--radius);
      color: var(--ink-soft);
      font-family: var(--mono);
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      cursor: pointer;

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      &--toggle {
        color: var(--blueprint);
        border-color: var(--blueprint);
      }

      &--on {
        background: var(--blueprint);
        border-color: var(--blueprint);
        color: var(--card);
      }
    }
  `,
})
export class ScratchPad implements AfterViewInit, OnDestroy {
  /** Identifies what is being drawn on; strokes are kept per key. */
  readonly key = input.required<string>();

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly surface = viewChild.required<ElementRef<HTMLElement>>('surface');
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  protected readonly active = signal(false);
  protected readonly tool = signal<'pen' | 'eraser'>('pen');

  private readonly strokes = signal<Stroke[]>([]);
  protected readonly isEmpty = () => this.strokes().length === 0;

  /** Scribbles of questions the student already visited in this run. */
  private readonly archive = new Map<string, Stroke[]>();
  private currentKey: string | null = null;

  private context: CanvasRenderingContext2D | null = null;
  private observer?: ResizeObserver;
  private scheme?: MediaQueryList;
  private readonly onSchemeChange = () => this.resize();

  private width = 0;
  private ink = '#a2382a';
  private pointerId: number | null = null;
  private live: Stroke | null = null;

  constructor() {
    effect(() => {
      const key = this.key();
      untracked(() => this.switchTo(key));
    });
  }

  ngAfterViewInit(): void {
    this.context = this.canvas().nativeElement.getContext('2d');

    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(this.surface().nativeElement);

    this.scheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.scheme.addEventListener('change', this.onSchemeChange);

    this.resize();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.scheme?.removeEventListener('change', this.onSchemeChange);
  }

  protected toggle(): void {
    this.active.update((on) => !on);
    if (!this.active()) this.tool.set('pen');
  }

  protected toggleEraser(): void {
    this.tool.update((tool) => (tool === 'eraser' ? 'pen' : 'eraser'));
  }

  protected undo(): void {
    this.strokes.update((strokes) => strokes.slice(0, -1));
    this.repaint();
  }

  protected clear(): void {
    this.strokes.set([]);
    this.repaint();
  }

  /* --- Drawing ----------------------------------------------------------- */

  protected onPointerDown(event: PointerEvent): void {
    if (this.pointerId !== null) return;

    event.preventDefault();
    this.pointerId = event.pointerId;
    this.canvas().nativeElement.setPointerCapture(event.pointerId);

    // A pen's eraser end (button 5) erases without touching the toolbar.
    const erase = this.tool() === 'eraser' || event.buttons === 32;
    this.live = { points: [this.toPoint(event)], erase };
    this.strokes.update((strokes) => [...strokes, this.live!]);
    this.paint(this.live);
  }

  protected onPointerMove(event: PointerEvent): void {
    const stroke = this.live;
    if (stroke === null || event.pointerId !== this.pointerId) return;

    event.preventDefault();
    const from = stroke.points.length - 1;

    // High-rate pens report several positions per frame; using them all keeps
    // fast strokes smooth instead of polygonal.
    const moves = event.getCoalescedEvents?.() ?? [];
    for (const move of moves.length > 0 ? moves : [event]) {
      stroke.points.push(this.toPoint(move));
    }

    this.paint(stroke, from);
  }

  protected onPointerUp(event: PointerEvent): void {
    if (event.pointerId !== this.pointerId) return;

    this.canvas().nativeElement.releasePointerCapture(event.pointerId);
    this.pointerId = null;
    this.live = null;
  }

  private toPoint(event: PointerEvent): Point {
    const rect = this.canvas().nativeElement.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.width,
      // Fingers and mice report no pressure; draw those at a steady width.
      pressure: event.pressure > 0 ? event.pressure : 0.5,
    };
  }

  /** Draws a stroke, or only the segments added since `from`. */
  private paint(stroke: Stroke, from = 0): void {
    const ctx = this.context;
    if (ctx === null || this.width === 0) return;

    ctx.globalCompositeOperation = stroke.erase ? 'destination-out' : 'source-over';
    ctx.strokeStyle = this.ink;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const points = stroke.points;
    const base = stroke.erase ? ERASER_WIDTH : PEN_WIDTH;

    // A tap that never moved marks a point rather than leaving nothing behind.
    if (points.length === 1) {
      const point = points[0];
      ctx.fillStyle = this.ink;
      ctx.beginPath();
      ctx.arc(point.x * this.width, point.y * this.width, base * 0.6, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    for (let i = Math.max(from, 1); i < points.length; i++) {
      const previous = points[i - 1];
      const point = points[i];

      ctx.beginPath();
      ctx.moveTo(previous.x * this.width, previous.y * this.width);
      ctx.lineTo(point.x * this.width, point.y * this.width);
      // Pressure gives the pen its weight; the eraser stays a constant size.
      ctx.lineWidth = stroke.erase ? base : base * (0.45 + point.pressure);
      ctx.stroke();
    }
  }

  private repaint(): void {
    const ctx = this.context;
    if (ctx === null) return;

    const canvas = this.canvas().nativeElement;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    for (const stroke of this.strokes()) this.paint(stroke);
  }

  private resize(): void {
    const canvas = this.canvas().nativeElement;
    const rect = this.surface().nativeElement.getBoundingClientRect();
    if (rect.width === 0) return;

    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);

    this.width = rect.width;
    this.context?.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.ink = getComputedStyle(this.host.nativeElement).getPropertyValue('--danger').trim() || this.ink;

    this.repaint();
  }

  /** Parks the current scribbles and brings back the ones for `key`. */
  private switchTo(key: string): void {
    if (this.currentKey !== null) this.archive.set(this.currentKey, this.strokes());
    this.currentKey = key;
    this.pointerId = null;
    this.live = null;
    this.strokes.set(this.archive.get(key) ?? []);
    this.repaint();
  }
}
