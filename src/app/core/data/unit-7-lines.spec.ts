import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 7 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'lines')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  it('1 — −(a − 1)/2 = 3, a − 1 = −6, a = −5 → B', () => expect(answerOf('lines-1')).toBe('B'));
  it('2 — B(−3, −2), C(2, −3), √(25 + 1) = √26 → D', () => expect(answerOf('lines-2')).toBe('D'));
  it('3 — P(0.5, 2.5): x ≥ 0, 3 − 4 < 0, 0.5 − 5 + 2 < 0 → A', () =>
    expect(answerOf('lines-3')).toBe('A'));
  it('4 — B(3, 4 − (−1)) = (3, 5), 3p − 10 = 2, p = 4 → E', () =>
    expect(answerOf('lines-4')).toBe('E'));
  it('5 — m = (22 − 30)/4 = −2, 30/2 = 15 → C', () => expect(answerOf('lines-5')).toBe('C'));
  it('6 — 3x − 4y + 1 = −(4x + 3y − 7), 7x − y − 6 = 0 → E', () =>
    expect(answerOf('lines-6')).toBe('E'));

  it('7 — 3·2 + (m − 2)(−3) = 0, 12 = 3m, m = 4 → E', () => expect(answerOf('lines-7')).toBe('E'));
  it('8 — |−2 − 11/2| / 5 = (15/2)/5 = 3/2 → B', () => expect(answerOf('lines-8')).toBe('B'));
  it('9 — m = 2, −6/(k − 1) = 2, k = −2 → A', () => expect(answerOf('lines-9')).toBe('A'));
  it('10 — y = 2x + 4, y = −2x + 8, apex (1, 6), 6·6/2 = 18 → D', () =>
    expect(answerOf('lines-10')).toBe('D'));
  it('11 — |13 − 12k| = 13, k = 0 or 13/6, sum 13/6 → D', () =>
    expect(answerOf('lines-11')).toBe('D'));
  it('12 — b = 2a − 1, a + 2b = 13, (3, 5), 3 + 5 = 8 → C', () =>
    expect(answerOf('lines-12')).toBe('C'));

  it('13 — 3·(−a/3) = −1, a = 1, A(1, 2), √(1 + 4) = √5 → B', () =>
    expect(answerOf('lines-13')).toBe('B'));
  it('14 — B(4, 0), A(0, −3), x/4 − y/3 = 1, 3x − 4y − 12 = 0 → A', () =>
    expect(answerOf('lines-14')).toBe('A'));
  it('15 — |m|a²/2 = 9a²/(2|m|), m² = 9, m = −3 → B', () =>
    expect(answerOf('lines-15')).toBe('B'));
  it('16 — 6/(2/3) + 6/(3/2) = 9 + 4 = 13 → C', () => expect(answerOf('lines-16')).toBe('C'));
  it('17 — corner (4, 6), 10·6/2 + 2·4/2 = 30 + 4 = 34 → C', () =>
    expect(answerOf('lines-17')).toBe('C'));
  it('18 — 4x + 3y = 36, x + 3y = 18, P(6, 4), √52 = 2√13 → C', () =>
    expect(answerOf('lines-18')).toBe('C'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
