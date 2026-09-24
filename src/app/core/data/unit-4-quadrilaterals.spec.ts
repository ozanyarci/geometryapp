import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 4 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'quadrilaterals')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  // Worked through by hand and checked against the drawn-to-scale coordinates.
  it('1 — D = 125, C = 115, B = 70, α = 360 − 310 = 50 → C', () =>
    expect(answerOf('quadrilaterals-1')).toBe('C'));
  it('2 — b + d = 360 − 100 − 158 = 102, (260 − x)/2 = 102, x = 56 → C', () =>
    expect(answerOf('quadrilaterals-2')).toBe('C'));
  it('3 — 64 + 36 = 25 + x², x² = 75, x = 5√3 → C', () =>
    expect(answerOf('quadrilaterals-3')).toBe('C'));
  it('4 — m(AED) = 135, ½·12·10·√2/2 = 30√2 → B', () =>
    expect(answerOf('quadrilaterals-4')).toBe('B'));
  it('5 — 16 + 64 = 49 + x², x² = 31 → B', () => expect(answerOf('quadrilaterals-5')).toBe('B'));
  it('6 — cos(DEC) = 3/6, 60°, ½·10·12·√3/2 = 30√3 → C', () =>
    expect(answerOf('quadrilaterals-6')).toBe('C'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
