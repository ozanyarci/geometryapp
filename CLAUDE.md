# GeometryApp

An Angular study app for Turkish high-school geometry. A student picks a unit,
works through it one short module at a time, and gets a worked solution for every
question. Runs offline as a PWA; deployed at
<https://ozanyarci.github.io/geometryapp/>.

Angular 22 (standalone components, signals, zoneless), TypeScript, SCSS, Vitest.

```bash
npm start        # dev server on http://localhost:4200
npm test         # Vitest — includes the question-bank integrity suite
npm run build
```

## Language rule

Turkish appears **only** in strings the student reads: question text, choices,
hints, solution steps, figure captions and `aria-label`s, module and unit titles,
template copy. Everything else — identifiers, types, comments, commit messages,
this file — is English. Never mix the two inside one sentence.

## Where the content lives

```
src/app/core/models.ts              Question / Module / Unit types
src/app/core/curriculum.ts          UNITS registry + lookup helpers
src/app/core/data/unit-1-angles.ts  Unit 1 — Doğruda açılar
src/app/core/data/unit-2-triangles.ts  Unit 2 — Üçgenler
src/app/core/data/unit-1-angles.spec.ts  integrity checks for ALL units
src/app/ui/figure/figure.ts         renders a Figure's SVG
src/styles.scss                     figure SVG classes live here
```

Each unit file has the same shape:

1. `const QUESTIONS: Question[]` — the bank, in id order.
2. `function pick(...ids)` — resolves ids, throws on a typo.
3. `export const UNIT_N_X: Unit` — modules, each `pick`ing its question ids.

**The bank is append-only.** Add new questions at the end with the next id
(`triangles-55`, `triangles-56`, …); never renumber, reorder, or delete existing
entries — a student's saved progress is keyed on module ids and the modules are
keyed on question ids. Which questions a student meets, and in what order, is
decided purely by the module list at the bottom of the file.

Modules hold **5 to 8 questions** (5 is the default; the test suite enforces the
range), are numbered `order: 1..n` with no gaps, and need both a `title` and a
one-line `summary` in Turkish.

## Adding questions from photos

This is the common task: a batch of 6–7 photographed questions from a workbook.
For each one, in order:

1. Read the question, the choices and the figure off the photo. Work the problem
   yourself and confirm the answer key matches one of the five choices — the
   printed key is sometimes wrong, and a wrong key is the single most damaging
   mistake in this repo.
2. Append a `Question` to `QUESTIONS` with the next free id.
   - `given` — the facts listed beside the figure, each its own string.
   - `stem` — prose paragraphs; usually `[]` when `given` + `ask` carry it.
   - `ask` — the actual question sentence ("Buna göre, x kaç derecedir?").
   - `choices` — always exactly five, keyed A–E, in the printed order.
   - `hint` — one sentence pointing at the first move, not the answer.
   - `solution` — 3–6 `{ title, detail }` steps that reach the answer
     arithmetically; the last step states the result.
   - `topic` — short Turkish phrase naming the skill.
3. Draw the figure (below).
4. Add one line to the unit's `*.spec.ts` answer key stating the arithmetic that
   reaches the answer — this is where the key gets checked a second time, and a
   question with no line there fails the suite.
5. Add the questions to a module. Prefer appending a new module at the end of the
   unit rather than growing an existing one, so past results stay comparable.
   Every question in the bank must belong to exactly one module; a batch smaller
   than 5 cannot form a module of its own, so hold it back and say so rather than
   leaving the questions stranded.
6. Run `npm test`.

## Drawing figures

`Figure.svg` holds only the **contents** of the `<svg>` element; the wrapper,
`viewBox`, `role` and `aria-label` are applied by `FigureView`.

- **Draw to scale.** A 30° angle in the data must measure 30° on screen. Compute
  real coordinates; do not eyeball them.
- **Size the viewBox to ~400 units wide.** Text is a fixed 16px inside the SVG,
  so a narrower viewBox renders oversized labels. Widen the box (and centre the
  drawing in it) rather than shrinking the figure. Adjust the y-range to fit,
  e.g. `'0 -6 400 332'`.
- Keep vertex labels *outside* the shape, and leave ~18 units of margin for them
  — `text-anchor="end"` on the left, default on the right, `middle` on top.
- **A hash mark means the piece it sits on.** If another line cuts the side, the
  mark no longer says what the whole side measures — it says what that piece
  measures. So mark a divided side only when the equality really is about the
  piece (`|BD| = |DC|` on the two halves of `[BC]` is fine); when the equality is
  about the whole side, leave the ticks off both sides of the pair and let
  `given` carry it. A lone mark asserts nothing, so a pair always goes together.
- `label` is what a screen reader says: one Turkish sentence describing the
  construction and the given equalities.
- `caption` is `'Şekil N'`, numbered within the unit.

Classes, all defined in `src/styles.scss`:

| class | use |
| --- | --- |
| `.ln` | the figure's own lines and polygons (`<path fill="none">`) |
| `.pt` | vertex dots, `r="3.2"` |
| `.tick` | equal-length hash marks |
| `.arc` | angle arcs |
| `text.val` | angle values and unknowns (`30°`, `α`, `x`) |
| `.par` | parallel-direction chevrons |
| `.aux`, `.aux-head` | construction lines — **solution figures only** |

`solutionFigure` is optional and shown only after the student answers. It repeats
the question figure with the construction the solution relies on drawn on top,
and must reuse the question figure's exact `viewBox`. The test suite enforces
both halves of the rule: no `class="aux` in `figure`, at least one in
`solutionFigure`.

## Tests

`question-bank.spec.ts` validates every unit in `UNITS` — id uniqueness, module
numbering and size, five A–E choices, an answer key that exists, a non-empty
solution and hint, the aux-line rule, bank ids running `unit-1..n` with no gaps,
every banked question sitting in exactly one module, and figure shape (four-number
`viewBox` of a usable width, SVG *contents* rather than a nested `<svg>` element,
`Şekil N` caption). Adding a unit to `curriculum.ts` puts it under these checks
automatically.

`unit-1-angles.spec.ts` and `unit-2-triangles.spec.ts` hold one answer-key line
per question, each restating the arithmetic, plus a check that no question in the
unit is missing its line.

Run `npm test` before every push — a push is a publish, and these checks catch
exactly the mistakes this content is prone to.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main` — no manual step. It builds with `--base-href /geometryapp/` and copies
`index.html` to `404.html` so deep links survive a refresh. A push is a publish:
run the tests first.
