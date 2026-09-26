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
  it('15 — |m|a²/2 = 9a²/(2|m|), m² = 9, m = −3 → B', () => expect(answerOf('lines-15')).toBe('B'));
  it('16 — 6/(2/3) + 6/(3/2) = 9 + 4 = 13 → C', () => expect(answerOf('lines-16')).toBe('C'));
  it('17 — corner (4, 6), 10·6/2 + 2·4/2 = 30 + 4 = 34 → C', () =>
    expect(answerOf('lines-17')).toBe('C'));
  it('18 — 4x + 3y = 36, x + 3y = 18, P(6, 4), √52 = 2√13 → C', () =>
    expect(answerOf('lines-18')).toBe('C'));

  it('19 — A(0, 8), B(0, −4), E(4, 0), x/4 + y/8 = 1, 2x + y − 8 = 0 → B', () =>
    expect(answerOf('lines-19')).toBe('B'));
  it('20 — (2, 0) → (6, −2), 2x − 5y − 22 = 0, x = 11 → C', () =>
    expect(answerOf('lines-20')).toBe('C'));
  it('21 — 16 + h² = 25, D(−5, 3), m = 3/4, 3x − 4y + 27 = 0 → D', () =>
    expect(answerOf('lines-21')).toBe('D'));
  it('22 — inner bisector through (3, 0), m = −2, outer −1/(−2) = 1/2 → A', () =>
    expect(answerOf('lines-22')).toBe('A'));
  it('23 — 3/9 + (a + 3)/12 = 1, a + 3 = 8, a = 5 → C', () =>
    expect(answerOf('lines-23')).toBe('C'));
  it('24 — |OB| = 15, M(15, r), (r − 9)/3 = −4/3, r = 5 → D', () =>
    expect(answerOf('lines-24')).toBe('D'));

  it('25 — (3 − (−5))/(t − 2) = 2, t − 2 = 4, t = 6 → C', () =>
    expect(answerOf('lines-25')).toBe('C'));
  it('26 — x = 0, −y/3 = 1, y = −3 → A', () => expect(answerOf('lines-26')).toBe('A'));
  it('27 — m = −4/(−2) = 2 → D', () => expect(answerOf('lines-27')).toBe('D'));
  it('28 — y = −2(x − 3), y + 2x − 6 = 0 → B', () => expect(answerOf('lines-28')).toBe('B'));
  it('29 — m = 6/(−2) = −3, y = −3x → E', () => expect(answerOf('lines-29')).toBe('E'));
  it('30 — 5y = 2(x + 1), 2x − 5y + 2 = 0 → C', () => expect(answerOf('lines-30')).toBe('C'));
  it('31 — −3/(b + 2) = −3/4, b + 2 = 4, b = 2 → B', () => expect(answerOf('lines-31')).toBe('B'));

  it('32 — x/(−2) + y/4 = 1, y = 2x + 4 → B', () => expect(answerOf('lines-32')).toBe('B'));
  it('33 — m = 12/6 = 2, (n − 1)/3 = 2, n = 7 → A', () => expect(answerOf('lines-33')).toBe('A'));
  it('34 — 12 − 2a − 6 = 0, a = 3; −6 − 2b − 6 = 0, b = −6; 3 + 6 = 9 → E', () =>
    expect(answerOf('lines-34')).toBe('E'));
  it('35 — 6·|a|/2 = 27, |a| = 9 → B', () => expect(answerOf('lines-35')).toBe('B'));
  it('36 — m = −6/(−3) = 2, y − 3 = 2(x − 2), 2x − y − 1 = 0 → D', () =>
    expect(answerOf('lines-36')).toBe('D'));
  it('37 — a = tan 120° = −√3, b = tan 150° = −√3/3, b/a = 1/3 → A', () =>
    expect(answerOf('lines-37')).toBe('A'));
  it('38 — A(0, 6), B(2√7, 0), √(28 + 36) = 8 → C', () => expect(answerOf('lines-38')).toBe('C'));

  it('39 — 3 − 3m + 9 = 0, m = 4, slope 4/3 → C', () => expect(answerOf('lines-39')).toBe('C'));
  it('40 — m(d) = 1/3, A(1, 0), B = A + (3, 1) = (4, 1) → B', () =>
    expect(answerOf('lines-40')).toBe('B'));
  it('41 — (1 − 3, 1 + 3) = (−2, 4) → A', () => expect(answerOf('lines-41')).toBe('A'));
  it('42 — tan 135° = −1, y − 3 = −(x − 1), y = −x + 4 → B', () =>
    expect(answerOf('lines-42')).toBe('B'));
  it('43 — E(−6, 0), F(0, 4), (1/2)·2√13·16/√13 = 16 → C', () =>
    expect(answerOf('lines-43')).toBe('C'));
  it('44 — 6 − b = 2b + 12, b = −2, A(2, 4√3), (1/2)·2·4√3 = 4√3 → C', () =>
    expect(answerOf('lines-44')).toBe('C'));

  it('45 — (m − 1)/(2m + 1) = 3/2, 2m − 2 = 6m + 3, m = −5/4 → C', () =>
    expect(answerOf('lines-45')).toBe('C'));
  it('46 — M(2, 4), 4 = 6 + n, n = −2 → B', () => expect(answerOf('lines-46')).toBe('B'));
  it('47 — y − 2 = 2(x − 4), y = 2x − 6, x = 3 → D', () => expect(answerOf('lines-47')).toBe('D'));
  it('48 — M(3, 5), m(AB) = 1, y − 5 = −(x − 3), x + y − 8 = 0 → C', () =>
    expect(answerOf('lines-48')).toBe('C'));
  it('49 — C = (−2 + 4, 1 + 2) = (2, 3), 2a − 3 + 5 = 0, a = −1 → B', () =>
    expect(answerOf('lines-49')).toBe('B'));
  it('50 — d₁ ∩ x axis = (−2, 0), −6 + k = 0, k = 6 → D', () =>
    expect(answerOf('lines-50')).toBe('D'));
  it('51 — m′ = −4/3, 3y + 6 = −4x + 4, 4x + 3y + 2 = 0 → E', () =>
    expect(answerOf('lines-51')).toBe('E'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
