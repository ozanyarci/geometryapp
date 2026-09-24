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
  it('13 — A = 180 − 40 = 140, B + C = 360 − 236 = 124, α = 180 − 62 = 118 → D', () =>
    expect(answerOf('quadrilaterals-13')).toBe('D'));
  it('14 — AE/EC = 30/20 = 3/2, BEC = 60·2/5 = 24 → D', () =>
    expect(answerOf('quadrilaterals-14')).toBe('D'));
  it('15 — AFE + CKL = (ABD + CBD)/4 = 64/4 = 16 → C', () =>
    expect(answerOf('quadrilaterals-15')).toBe('C'));
  it('16 — x² + 16 = 25 + 49, x² = 58 → B', () => expect(answerOf('quadrilaterals-16')).toBe('B'));
  it('17 — A + C = 250, AKC = 360 − 125 − 70 = 165, α = 15 → B', () =>
    expect(answerOf('quadrilaterals-17')).toBe('B'));
  it('18 — hexagon = ¾·ABCD = 45, ABCD = 60 → C', () =>
    expect(answerOf('quadrilaterals-18')).toBe('C'));
  it('19 — ½·9·4·sin 120° = 9√3 → D', () => expect(answerOf('quadrilaterals-19')).toBe('D'));
  it('20 — AEB = 60, A + B = 240, C + D = 120, α = 120 − 70 = 50 → C', () =>
    expect(answerOf('quadrilaterals-20')).toBe('C'));
  it('21 — KL = 7, KN = 4, KLMN = 7·4 = 28 = ½·(½·14·8) → B', () =>
    expect(answerOf('quadrilaterals-21')).toBe('B'));
  it('22 — C = 90, BD² = 16 + 25 = 41, x² = 41 − 5 = 36, x = 6 → C', () =>
    expect(answerOf('quadrilaterals-22')).toBe('C'));
  it('23 — A + B = 2·65 = 130, C + D = 230, α = 180 − 115 = 65 → C', () =>
    expect(answerOf('quadrilaterals-23')).toBe('C'));
  it('24 — all sides 3 from K, ½·3·30 = 45 → C', () => expect(answerOf('quadrilaterals-24')).toBe('C'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
