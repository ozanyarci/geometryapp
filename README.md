# Geometri · YKS Hazırlık

A solved-question geometry bank for students preparing for the Turkish university
entrance exam (YKS / TYT / AYT). Phone and tablet first, installable as a PWA,
works offline.

Angular 22 · standalone components · signal-based state · zoneless change detection

> **Language split:** everything the student sees is Turkish; everything a developer
> touches — identifiers, comments, file names, CSS classes, route paths — is English.
> Turkish strings live only in template text, `aria-label`s, and the question data files.

## Running

```bash
npm start
```

The app opens at http://localhost:4200.

Production build:

```bash
npm run build
```

Tests:

```bash
npm test
```

> Requires Node.js ≥ 22.22.3 (or 24.15+). Angular 22 will not run on older versions.

## Modes

| Mode | Behaviour |
| --- | --- |
| **practice** (`Çalışma Modu`) | Feedback and the step-by-step solution appear the moment an answer is given. A hint is available per question. The choice locks once answered. |
| **test** (`Test Modu`) | A timer runs and solutions stay hidden. Answers stay editable until submission. Scored with the YKS net rule: four wrong cancel one correct. |

Progress is stored in `localStorage` under `geometry.progress.v1`.

## Layout

```
src/app/
  core/
    models.ts              Question, Choice, Unit, Figure, SolutionStep types
    data/
      unit-1-angles.ts     Unit 1 questions, SVG figures and solutions (Turkish content)
      unit-2-triangles.ts  Unit 2 questions, SVG figures and solutions (Turkish content)
    curriculum.ts          Unit registry
    quiz-store.ts          Signal-based quiz engine (mode, answers, scoring, timer)
    progress-store.ts      Durable progress via localStorage
    quiz-guard.ts          Guards that redirect when state is lost on reload
  ui/
    figure/                Renders question diagrams from SVG data
    _shell.scss            SCSS mixins shared across pages
  pages/
    home/                  Unit list and overall progress
    unit-detail/           Unit blurb and mode selection
    quiz/                  Question screen
    result/                Score summary and question-by-question review
```

Routes: `/`, `/unit/:id`, `/unit/:id/question`, `/unit/:id/result`.

## Adding a unit

1. Create a file such as `src/app/core/data/unit-3-polygons.ts` exporting a `Unit`.
2. Append it to the `UNITS` array in `src/app/core/curriculum.ts`, in curriculum order.

Nothing else needs changing — routing, progress tracking and the result screen pick
the unit up automatically.

The suite in `unit-1-angles.spec.ts` automatically validates every unit: five choices
lettered A–E, an answer key that matches one of them, and a non-empty solution and
hint on each question. New units are covered without writing new tests.

### Figures

A `Figure` holds a `viewBox`, an accessibility `label`, a `caption`, and the
*contents* of the `<svg>` element. The drawing classes (`.ln`, `.arc`, `.tick`,
`.par`, `.pt`, `text.val`) are declared globally in `src/styles.scss` — required,
because content injected via `innerHTML` falls outside component style encapsulation.

Arrowheads use `stroke="currentColor"` so they stay visible in dark mode. Each
figure needs a unique `marker` id (`arrow-q3`, `arrow-q4`, `arrow-q6`).

The SVG is passed through `bypassSecurityTrustHtml` in `ui/figure/figure.ts`. That is
safe because figures are compile-time constants from our own data files — never user
input. Angular's sanitizer would otherwise strip `<marker>` and `<defs>` and drop
every arrowhead.

## PWA

`@angular/pwa` provides the service worker and manifest. The service worker is only
active in production builds; when a new version is ready the app shows a "Güncelle"
bar at the bottom of the screen.

To try a production build locally:

```bash
npx http-server dist/geometry-app/browser -p 8080
```
