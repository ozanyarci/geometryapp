import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 3 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'polygons')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  // Worked through by hand and checked against the drawn-to-scale coordinates.
  it('1 — m(EAL) = 84, m(AEK) = 96, m(DEK) = 12, x = 180 − 108 − 12 = 60 → D', () =>
    expect(answerOf('polygons-1')).toBe('D'));
  it('2 — dış 30, iç 150, 30/150 = 1/5 → B', () => expect(answerOf('polygons-2')).toBe('B'));
  it('3 — 2d = 180 − 100, d = 40, n = 360/40 = 9 → B', () =>
    expect(answerOf('polygons-3')).toBe('B'));
  it('4 — 80 + 70 + 30 = 180, 180/20 = 9, n = 12 → D', () =>
    expect(answerOf('polygons-4')).toBe('D'));
  it('5 — A(ABCDEF) = 6S, A(ACDF) = 6S − 2S = 4S → D', () =>
    expect(answerOf('polygons-5')).toBe('D'));
  it('6 — 3R² = 147, R = 7 → C', () => expect(answerOf('polygons-6')).toBe('C'));
  it('7 — n(n − 3) = 70, n = 10, 180 − 36 = 144 → E', () =>
    expect(answerOf('polygons-7')).toBe('E'));
  it('8 — m(FBC) = 48, m(BCF) = 66, x = 108 − 66 = 42 → D', () =>
    expect(answerOf('polygons-8')).toBe('D'));
  it('9 — m(FAH) = 360 − 120 − 90 = 150, x = 15 → B', () =>
    expect(answerOf('polygons-9')).toBe('B'));
  it('10 — (n − 2)·180 = 1440, n = 10, 10 − 3 = 7 → C', () =>
    expect(answerOf('polygons-10')).toBe('C'));
  it('11 — m(BAC) = 36, m(ABD) = 72, x = 72 → C', () => expect(answerOf('polygons-11')).toBe('C'));
  it('12 — m(EAL) = 18, x = (180 − 18)/2 = 81 → D', () =>
    expect(answerOf('polygons-12')).toBe('D'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
