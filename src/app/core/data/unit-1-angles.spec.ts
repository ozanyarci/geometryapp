import { UNITS, unitQuestions } from '../curriculum';
import { CHOICE_KEYS } from '../models';

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
        it(`${module.id} holds five questions and a summary`, () => {
          expect(module.questions.length).toBe(5);
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

describe('unit 1 modules', () => {
  const unit = UNITS.find((u) => u.id === 'angles')!;

  it('splits twenty-five questions into five modules of five', () => {
    expect(unit.modules.length).toBe(5);
    expect(unitQuestions(unit).length).toBe(25);
  });

  it('uses every question in the bank exactly once', () => {
    const ids = unitQuestions(unit).map((question) => question.id);
    const expected = Array.from({ length: 25 }, (_, i) => `angles-${i + 1}`);
    expect([...ids].sort()).toEqual([...expected].sort());
  });
});

describe('unit 1 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'angles')!;
  const answerOf = (id: string) => unitQuestions(unit).find((q) => q.id === id)?.answer;

  // Worked through by hand and verified against the source tests.
  it('1 — 138295″ = 38° 24′ 55″ → B', () => expect(answerOf('angles-1')).toBe('B'));
  it('2 — supplements differ by 60 → D', () => expect(answerOf('angles-2')).toBe('D'));
  it('3 — bisectors are perpendicular, y = 57 → C', () => expect(answerOf('angles-3')).toBe('C'));
  it('4 — zigzag, x = 65 → C', () => expect(answerOf('angles-4')).toBe('C'));
  it('5 — supplementary difference 112 → D', () => expect(answerOf('angles-5')).toBe('D'));
  it('6 — x + y = 64 → C', () => expect(answerOf('angles-6')).toBe('C'));
  it('7 — zigzag, α = 55 + 65 = 120 → C', () => expect(answerOf('angles-7')).toBe('C'));
  it('8 — 6x = 120, α = 4x = 80 → A', () => expect(answerOf('angles-8')).toBe('A'));
  it('9 — 9x = 234, x = 26 → B', () => expect(answerOf('angles-9')).toBe('B'));
  it('10 — 108 − 38 = 70 → D', () => expect(answerOf('angles-10')).toBe('D'));
  it('11 — 180 − 65 = 115 → D', () => expect(answerOf('angles-11')).toBe('D'));
  it('12 — 58 + 46 = 104 → C', () => expect(answerOf('angles-12')).toBe('C'));
  it('13 — 8x + 20 = 180, m(TAC) = 125 → A', () => expect(answerOf('angles-13')).toBe('A'));
  it('14 — m + n = 28, 28 + 96 = 124 → C', () => expect(answerOf('angles-14')).toBe('C'));
  it('15 — 150 − 102,5 = 47,5 → B', () => expect(answerOf('angles-15')).toBe('B'));
  it('16 — α = 10, x = 80 → D', () => expect(answerOf('angles-16')).toBe('D'));
  it('17 — 180 − 115 − 30 = 35 → E', () => expect(answerOf('angles-17')).toBe('E'));
  it('18 — 3a = 180, x = 180 − 60 = 120 → C', () => expect(answerOf('angles-18')).toBe('C'));
  it('19 — 2x = 116, x = 58 → A', () => expect(answerOf('angles-19')).toBe('A'));
  it('20 — 270 − x = 214, x = 56 → D', () => expect(answerOf('angles-20')).toBe('D'));
  it('21 — 2x = 40, m(ABC) = 60 → C', () => expect(answerOf('angles-21')).toBe('C'));
  it('22 — 76 : 2 = 38 → E', () => expect(answerOf('angles-22')).toBe('E'));
  it('23 — x + 90 + 28 = 180, x = 62 → B', () => expect(answerOf('angles-23')).toBe('B'));
  it('24 — 5x = 90, m(CAD) = 54 → D', () => expect(answerOf('angles-24')).toBe('D'));
  it('25 — 70 grad = 63°, π/10 = 18°, α = 135 → C', () => expect(answerOf('angles-25')).toBe('C'));
});
