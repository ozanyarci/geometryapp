import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 6 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'analytic')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  it('1 — |OB| = 6, h = 5, 6·5/2 = 15 → D', () => expect(answerOf('analytic-1')).toBe('D'));
  it('2 — IV. bölge: m > 0, n < 0, (2, −5) → E', () => expect(answerOf('analytic-2')).toBe('E'));
  it('3 — C(2, −3), √(4 + 9) = √13 → E', () => expect(answerOf('analytic-3')).toBe('E'));
  it('4 — 6 + 5 + 5 = 16, 2·16 = 32 → D', () => expect(answerOf('analytic-4')).toBe('D'));
  it('5 — |OA| = 5, B(5, 0), √(1 + 9) = √10 → B', () => expect(answerOf('analytic-5')).toBe('B'));
  it('6 — 3r = 18, r = 6, D(3, 3√3) → C', () => expect(answerOf('analytic-6')).toBe('C'));
  it('7 — D(1, 1), √(1 + 25) = √26 → A', () => expect(answerOf('analytic-7')).toBe('A'));
  it('8 — (a − 1)² + 16 = 25, a = 4 → D', () => expect(answerOf('analytic-8')).toBe('D'));
  it('9 — (x − 2)² + 25 = (x − 6)² + 1, 8x = 8, x = 1 → B', () =>
    expect(answerOf('analytic-9')).toBe('B'));
  it('10 — D = A + C − B = (3, 6), 3 + 6 = 9 → A', () => expect(answerOf('analytic-10')).toBe('A'));
  it('11 — 30 − 6 − 6 − 5 = 13 → B', () => expect(answerOf('analytic-11')).toBe('B'));
  it('12 — B(−3, 5), C(3, 5), 10·6/2 = 30 → E', () => expect(answerOf('analytic-12')).toBe('E'));
  it('13 — G(2, 1), √(4 + 1) = √5 → D', () => expect(answerOf('analytic-13')).toBe('D'));
  it('14 — C = (−2 + 6, 1 + 6) = (4, 7), 4 + 7 = 11 → C', () =>
    expect(answerOf('analytic-14')).toBe('C'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
