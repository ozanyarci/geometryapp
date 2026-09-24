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
  it('7 — DC ⊥ BD, 36 = a·3a, BD² = 72, BH = 4√2, HD = 2√2, AH² = 49 − 32 = 17, x² = 25 → B', () =>
    expect(answerOf('quadrilaterals-7')).toBe('B'));
  it('8 — a + 130 + 90 + c/2 + 55 = 360, 2a + c = 170, α = 360 − 130 − 170 = 60 → D', () =>
    expect(answerOf('quadrilaterals-8')).toBe('D'));
  it('9 — 5S·S = 30·15, S² = 90, S = 3√10 → C', () =>
    expect(answerOf('quadrilaterals-9')).toBe('C'));
  it('10 — Â + Ĉ = 180, (5·6)/(4·9) = 30/36 = 5/6 → D', () =>
    expect(answerOf('quadrilaterals-10')).toBe('D'));
  it('11 — BD = 10, AC = 14, ½·14·10·sin 120° = 35√3 → B', () =>
    expect(answerOf('quadrilaterals-11')).toBe('B'));
  it('12 — ABCD = 4·5 + 4·7 = 48, KLMN = 48/2 = 24 → C', () =>
    expect(answerOf('quadrilaterals-12')).toBe('C'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
