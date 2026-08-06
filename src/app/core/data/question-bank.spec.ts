import { UNITS, unitQuestions } from '../curriculum';
import { CHOICE_KEYS, Question } from '../models';
import { ANGLES_BANK } from './unit-1-angles';
import { TRIANGLES_BANK } from './unit-2-triangles';

/**
 * As the question bank grows, the most common mistake is mistyping an answer
 * key. These checks run automatically against every unit that gets added.
 */
describe('question bank integrity', () => {
  const allQuestions = UNITS.flatMap((unit) => unitQuestions(unit));

  it('has unique question ids', () => {
    const ids = allQuestions.map((question) => question.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const unit of UNITS) {
    describe(`unit: ${unit.id}`, () => {
      it('numbers its modules from one, in order', () => {
        expect(unit.modules.map((module) => module.order)).toEqual(
          unit.modules.map((_, index) => index + 1),
        );
      });

      it('has unique module ids', () => {
        const ids = unit.modules.map((module) => module.id);
        expect(new Set(ids).size).toBe(ids.length);
      });

      for (const module of unit.modules) {
        // Modules are five questions by default; a closing set may run longer,
        // but never long enough to be a sitting of its own.
        it(`${module.id} holds a short run of questions and a summary`, () => {
          expect(module.questions.length).toBeGreaterThanOrEqual(5);
          expect(module.questions.length).toBeLessThanOrEqual(8);
          expect(module.title.trim()).not.toBe('');
          expect(module.summary.trim()).not.toBe('');
        });
      }

      for (const question of unitQuestions(unit)) {
        describe(question.id, () => {
          it('has five choices lettered A through E', () => {
            expect(question.choices.length).toBe(5);
            expect(question.choices.map((choice) => choice.key)).toEqual([...CHOICE_KEYS]);
          });

          it('has an answer key matching one of its choices', () => {
            expect(question.choices.some((choice) => choice.key === question.answer)).toBe(true);
          });

          it('has a step-by-step solution and a hint', () => {
            expect(question.solution.length).toBeGreaterThan(0);
            for (const step of question.solution) {
              expect(step.title.trim()).not.toBe('');
              expect(step.detail.trim()).not.toBe('');
            }
            expect(question.hint.trim()).not.toBe('');
          });

          it('has either a stem or an ask sentence', () => {
            expect(question.stem.length > 0 || !!question.ask).toBe(true);
          });

          if (question.figure) {
            it('has a populated viewBox, label and svg body', () => {
              expect(question.figure!.viewBox).toMatch(/^[\d.\s-]+$/);
              expect(question.figure!.label.trim()).not.toBe('');
              expect(question.figure!.svg.trim()).not.toBe('');
            });

            it('keeps construction lines out of the question figure', () => {
              expect(question.figure!.svg).not.toContain('class="aux');
            });
          }

          if (question.solutionFigure) {
            it('draws the solution figure on top of the question figure', () => {
              expect(question.solutionFigure!.viewBox).toBe(question.figure?.viewBox);
              expect(question.solutionFigure!.label.trim()).not.toBe('');
              expect(question.solutionFigure!.svg).toContain('class="aux');
            });
          }
        });
      }
    });
  }
});

/**
 * The banks hold every question ever written for a unit, in id order, while the
 * modules decide which of them a student meets. Questions are only ever appended
 * — renumbering one would silently change what a saved module result refers to.
 */
describe('question banks', () => {
  const banks: readonly { unitId: string; questions: readonly Question[] }[] = [
    { unitId: 'angles', questions: ANGLES_BANK },
    { unitId: 'triangles', questions: TRIANGLES_BANK },
  ];

  for (const bank of banks) {
    describe(bank.unitId, () => {
      it('numbers its questions from one, in order, with no gaps', () => {
        expect(bank.questions.map((question) => question.id)).toEqual(
          bank.questions.map((_, index) => `${bank.unitId}-${index + 1}`),
        );
      });

      it('gives every question in the bank exactly one module', () => {
        const unit = UNITS.find((candidate) => candidate.id === bank.unitId)!;
        const used = unitQuestions(unit).map((question) => question.id);
        expect([...used].sort()).toEqual(bank.questions.map((question) => question.id).sort());
      });
    });
  }
});

/**
 * Shape checks for the parts a question is easiest to get wrong when it is being
 * transcribed from a photographed workbook page.
 */
describe('question shape', () => {
  const allQuestions = UNITS.flatMap((unit) => unitQuestions(unit));

  for (const question of allQuestions) {
    describe(question.id, () => {
      it('names the topic it drills', () => {
        expect(question.topic.trim()).not.toBe('');
      });

      it('writes out every choice', () => {
        const texts = question.choices.map((choice) => choice.text.trim());
        expect(texts.every((text) => text !== '')).toBe(true);
        expect(new Set(texts).size).toBe(texts.length);
      });

      it('has no empty paragraph in the stem', () => {
        expect(question.stem.every((paragraph) => paragraph.trim() !== '')).toBe(true);
      });

      it('does not carry a solution figure without a question figure', () => {
        if (question.solutionFigure) expect(question.figure).toBeDefined();
      });

      for (const [name, figure] of [
        ['figure', question.figure],
        ['solutionFigure', question.solutionFigure],
      ] as const) {
        if (!figure) continue;

        describe(name, () => {
          // Diagram text is a fixed pixel size, so a narrow viewBox scales the
          // labels up until they swamp the drawing: 400 units wide is the house
          // style, and anything much below that renders unreadably large.
          it('is drawn on a canvas of a usable width', () => {
            const box = figure.viewBox.trim().split(/\s+/);
            expect(box).toHaveLength(4);
            const width = Number(box[2]);
            expect(width).toBeGreaterThanOrEqual(320);
            expect(width).toBeLessThanOrEqual(480);
          });

          // The Figure component supplies the wrapper. A pasted-in <svg> element
          // would nest inside it and its viewBox would be ignored.
          it('stores the contents of the svg element, not the element', () => {
            expect(figure.svg).not.toContain('<svg');
          });

          // Solution figures repeat their question's number and say what they add.
          it('is captioned as a numbered figure', () => {
            expect(figure.caption).toMatch(/^Şekil \d+( — .+)?$/);
          });
        });
      }
    });
  }
});
