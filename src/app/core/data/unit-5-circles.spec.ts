import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 5 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'circles')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  // Worked through by hand and checked against the drawn-to-scale coordinates.
  it('1 — TA yayı 68, TB yayı 180 − 68 = 112, x = 56 → B', () =>
    expect(answerOf('circles-1')).toBe('B'));
  it('2 — m(AOB) = 150 − x, x = (150 − x)/2, x = 50 → A', () =>
    expect(answerOf('circles-2')).toBe('A'));
  it('3 — m(BOC) = 56, m(COA) = 34, x = (180 − 34)/2 = 73 → E', () =>
    expect(answerOf('circles-3')).toBe('E'));
  it('4 — CD 100, BC 50, AB + AD = 210, AD = 140, 140/2 = 70 → C', () =>
    expect(answerOf('circles-4')).toBe('C'));
  it('5 — 3x = (180 + x)/2, 5x = 180, x = 36 → B', () => expect(answerOf('circles-5')).toBe('B'));
  it('6 — DE 36, BC 124, 2·BD = 200, BD 100, x = 50 → C', () =>
    expect(answerOf('circles-6')).toBe('C'));
  it('7 — m(ACB) = 38, x = 27 + 38 = 65 → D', () => expect(answerOf('circles-7')).toBe('D'));
  it('8 — 55 = x + 20, x = 35 → B', () => expect(answerOf('circles-8')).toBe('B'));
  it('9 — m(PAB) = 34, m(ABP) = 72, x = 180 − 106 = 74 → D', () =>
    expect(answerOf('circles-9')).toBe('D'));
  it('10 — CB 52, AD 76, x = (52 + 76)/2 = 64 → C', () => expect(answerOf('circles-10')).toBe('C'));
  it('11 — 48 + 80 + 2x = 180, x = 26 → A', () => expect(answerOf('circles-11')).toBe('A'));
  it('12 — m(TOA) = 180 − 90 − 34 = 56, x = 28 → D', () =>
    expect(answerOf('circles-12')).toBe('D'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
