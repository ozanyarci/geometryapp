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

describe('unit 1 modules', () => {
  const unit = UNITS.find((u) => u.id === 'angles')!;

  it('splits seventy-four questions into thirteen modules', () => {
    expect(unit.modules.length).toBe(13);
    expect(unitQuestions(unit).length).toBe(74);
  });

  it('uses every question in the bank exactly once', () => {
    const ids = unitQuestions(unit).map((question) => question.id);
    const expected = Array.from({ length: 74 }, (_, i) => `angles-${i + 1}`);
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
  it('26 — x + 128 + 147 = 360 → C', () => expect(answerOf('angles-26')).toBe('C'));
  it('27 — 270 − 2x = 190, x = 40 → A', () => expect(answerOf('angles-27')).toBe('A'));
  it('28 — x = 20, 70 − 20 = 50 → D', () => expect(answerOf('angles-28')).toBe('D'));
  it('29 — a = 72, b = 36, a/b = 2 → E', () => expect(answerOf('angles-29')).toBe('E'));
  it('30 — 9x − 20 = 5x + 8, m(FCD) = 43 → B', () => expect(answerOf('angles-30')).toBe('B'));
  it('31 — m(BAC) = 35, x = 55 → D', () => expect(answerOf('angles-31')).toBe('D'));
  it('32 — açı = iki ışının birleşimi → B', () => expect(answerOf('angles-32')).toBe('B'));
  it('33 — 180 − 55 − 40 = 85 → A', () => expect(answerOf('angles-33')).toBe('A'));
  it('34 — 3y = 105, α = 180 − 4y = 40 → D', () => expect(answerOf('angles-34')).toBe('D'));
  it('35 — α = 125 + 20 = 145 → C', () => expect(answerOf('angles-35')).toBe('C'));
  it('36 — m(ACD) = 360 − 145 − 135 = 80, α = 100 → E', () =>
    expect(answerOf('angles-36')).toBe('E'));
  it('37 — x + y = 90, α = 180 − 90 − 38 = 52 → B', () => expect(answerOf('angles-37')).toBe('B'));
  it('38 — m(ACF) = 65, α = 180 − 65 = 115 → D', () => expect(answerOf('angles-38')).toBe('D'));
  it('39 — 15x + 30 = 180, m(BAC) = 40 → C', () => expect(answerOf('angles-39')).toBe('C'));
  it('40 — m(FCD) = 55, m(FDC) = 35, 180 − 35 = 145 → C', () =>
    expect(answerOf('angles-40')).toBe('C'));
  it('41 — m(BDF) = 120, α = 180 − 120 = 60 → C', () => expect(answerOf('angles-41')).toBe('C'));
  it('42 — 90 − 52 = 38 → C', () => expect(answerOf('angles-42')).toBe('C'));
  it('43 — 3x = 90, α = 360 − 120 − 90 = 150 → C', () => expect(answerOf('angles-43')).toBe('C'));
  it('44 — a = 60, b = 30, x = 180 − 30 = 150 → C', () => expect(answerOf('angles-44')).toBe('C'));
  it('45 — x = 70 − 40 = 30 → B', () => expect(answerOf('angles-45')).toBe('B'));
  it('46 — m(BAC) = 40, 4x = 140, x = 35 → A', () => expect(answerOf('angles-46')).toBe('A'));
  it('47 — m(FBE) = 125, x = 360 − 230 = 130 → D', () => expect(answerOf('angles-47')).toBe('D'));
  it('48 — 35 + α + 70 = 180, α = 75 → B', () => expect(answerOf('angles-48')).toBe('B'));
  it('49 — m(CEd) = 75, α = 180 − 75 = 105 → E', () => expect(answerOf('angles-49')).toBe('E'));
  it('50 — m(BAD) = 60, m(FAd) = 100 → D', () => expect(answerOf('angles-50')).toBe('D'));
  it('51 — m(KAL) = 105, α = 180 − 105 = 75 → C', () => expect(answerOf('angles-51')).toBe('C'));
  it('52 — a = 2b, 3b = 126, a = 84 → B', () => expect(answerOf('angles-52')).toBe('B'));
  it('53 — m(AKE) = 30, m(CKd) = 55, 180 − 55 = 125 → D', () =>
    expect(answerOf('angles-53')).toBe('D'));
  it('54 — 2t + 40 = t + 85, α = 130 → A', () => expect(answerOf('angles-54')).toBe('A'));
  it('55 — a sadeleşir, m(EFC) = 30 → C', () => expect(answerOf('angles-55')).toBe('C'));
  it('56 — 144 − 132 = 12 → E', () => expect(answerOf('angles-56')).toBe('E'));
  it('57 — m(ABC) = 53, x = 180 − 74 − 53 = 53 → D', () => expect(answerOf('angles-57')).toBe('D'));
  it('58 — 2a + 2b = 540, a = 150 → B', () => expect(answerOf('angles-58')).toBe('B'));
  it('59 — m(BAC) = 50, m(AFB) = 90 − 25 = 65 → E', () => expect(answerOf('angles-59')).toBe('E'));
  it('60 — x sadeleşir, m(BCM) = 135 → C', () => expect(answerOf('angles-60')).toBe('C'));
  it('61 — x = 30, y = 30 + 55 = 85 → A', () => expect(answerOf('angles-61')).toBe('A'));
  it('62 — t sadeleşir, α = 90 → D', () => expect(answerOf('angles-62')).toBe('D'));
  it('63 — (225 − α)/2 + 25 + α = 180, α = 85 → D', () => expect(answerOf('angles-63')).toBe('D'));
  it('64 — a + b = 115, α = 180 − 115 = 65 → B', () => expect(answerOf('angles-64')).toBe('B'));
  it('65 — y = 130, x = 60, fark 70 → E', () => expect(answerOf('angles-65')).toBe('E'));
  it('66 — m(PAB) + m(KDC) = 200, α = 100 → C', () => expect(answerOf('angles-66')).toBe('C'));
  it('67 — y − x = 180 − 40 − 95 = 45 → A', () => expect(answerOf('angles-67')).toBe('A'));
  it('68 — 65 + 85 = 150, α = 180 − 150 = 30 → D', () => expect(answerOf('angles-68')).toBe('D'));
  it('69 — 880 − 2x = 720, x = 80 → B', () => expect(answerOf('angles-69')).toBe('B'));
  it('70 — β = 230 − 2α → D', () => expect(answerOf('angles-70')).toBe('D'));
  it('71 — a/2 + b/2 = 55, a + b = 110 → E', () => expect(answerOf('angles-71')).toBe('E'));
  it('72 — 25 = 80 − (180 − α), α = 125 → C', () => expect(answerOf('angles-72')).toBe('C'));
  it('73 — m(DKA) = 44, m(KAD) = 68, x = 68 → A', () => expect(answerOf('angles-73')).toBe('A'));
  it('74 — m(BCE) = 120, m(CED) = 75, α = 25 → D', () => expect(answerOf('angles-74')).toBe('D'));
});
