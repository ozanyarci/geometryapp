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

  it('15 — D(0, 6), K = ((8 + 0)/2, (0 + 6)/2) = (4, 3) → D', () =>
    expect(answerOf('analytic-15')).toBe('D'));
  it('16 — |AC| = 3/7·|AB|, (−2 + 6, 7 − 6) = (4, 1) → A', () =>
    expect(answerOf('analytic-16')).toBe('A'));
  it('17 — |AB| = 5, |BE| = 5·4/3 = 20/3, 5·(20/3)/2 = 50/3 → B', () =>
    expect(answerOf('analytic-17')).toBe('B'));
  it('18 — (b + 2)² + 36 + 5 = b² + 25, 4b = −20, b = −5 → C', () =>
    expect(answerOf('analytic-18')).toBe('C'));
  it('19 — |OA| = 4, 60° + 165° = 225°, 4·sin 225° = −2√2 → D', () =>
    expect(answerOf('analytic-19')).toBe('D'));
  it('20 — |OD|² = 2·8, D(0, 4), B = (−2 + 8 − 0, 0 − 4) = (6, −4) → E', () =>
    expect(answerOf('analytic-20')).toBe('E'));
  it('21 — C = (2 − 6, −3 + 9) = (−4, 6), √(16 + 36) = 2√13 → C', () =>
    expect(answerOf('analytic-21')).toBe('C'));

  it('22 — √(6² + 8²) = √100 = 10 → C', () => expect(answerOf('analytic-22')).toBe('C'));
  it('23 — |OA| = 2√3, 12 = 2·|OC|, |OC| = 6 → C', () =>
    expect(answerOf('analytic-23')).toBe('C'));
  it('24 — a > 0, b < 0, ab < 0, a − b > 0 → II → C', () =>
    expect(answerOf('analytic-24')).toBe('C'));
  it('25 — G(6/3, 9/3) = (2, 3), 3 + 2 = 5 → C', () => expect(answerOf('analytic-25')).toBe('C'));
  it('26 — a < 0, b < 0, (−2, −3) → D', () => expect(answerOf('analytic-26')).toBe('D'));
  it('27 — k² − 6k + 3 = 0, sum of roots 6 → D', () =>
    expect(answerOf('analytic-27')).toBe('D'));
  it('28 — |AB| = 5, (a − 4)² = 16, a = 8 → C', () => expect(answerOf('analytic-28')).toBe('C'));
  it('29 — |AB| = 4, h = 9 − 2 = 7, 4·7/2 = 14 → B', () =>
    expect(answerOf('analytic-29')).toBe('B'));

  it('30 — D = A + C − B = (−2, 1), −2 + 1 = −1 → B', () =>
    expect(answerOf('analytic-30')).toBe('B'));
  it('31 — a > −4, a < 3, {−3..2} = 6 values → C', () =>
    expect(answerOf('analytic-31')).toBe('C'));
  it('32 — a = 2 + 5 = 7, b = −4 − 4 = −8, −8 − 7 = −15 → A', () =>
    expect(answerOf('analytic-32')).toBe('A'));
  it('33 — (4 − r)² + 64 = r², 8r = 80, r = 10, 100π → E', () =>
    expect(answerOf('analytic-33')).toBe('E'));
  it('34 — D(6, 0), G(4, 2), 6·2/2 = 6 → B', () => expect(answerOf('analytic-34')).toBe('B'));
  it('35 — |BC| = 8, 8·y/2 = 28, y = 7 → D', () => expect(answerOf('analytic-35')).toBe('D'));
  it('36 — G(6/3, 9/3) = (2, 3), 2·3 = 6 → D', () => expect(answerOf('analytic-36')).toBe('D'));
  it('37 — D(6, 3), √(49 + 1) = 5√2 → C', () => expect(answerOf('analytic-37')).toBe('C'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
