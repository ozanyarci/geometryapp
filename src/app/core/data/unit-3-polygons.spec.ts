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

  it('13 — m(AOC) = 90, R√2 = 10, R² = 50, 2√2·50 = 100√2 → D', () =>
    expect(answerOf('polygons-13')).toBe('D'));
  it('14 — 3a/2 = 12, a = 8, |EK|² = 192 + 16 = 208, |EK| = 4√13 → B', () =>
    expect(answerOf('polygons-14')).toBe('B'));
  it('15 — iç = 360 − 180 − 30 = 150, n = 12, 10·180 = 1800 → C', () =>
    expect(answerOf('polygons-15')).toBe('C'));
  it('16 — 30 + 135 + 135 + α = 360, α = 60 → E', () => expect(answerOf('polygons-16')).toBe('E'));
  it('17 — S/2 + S + S/3 = 11S/6 = 44, S = 24, 6S = 144 → D', () =>
    expect(answerOf('polygons-17')).toBe('D'));
  it('18 — 32 + 32√2 − 4·4√2 = 32 + 16√2 → B', () => expect(answerOf('polygons-18')).toBe('B'));

  it('19 — m(AOC) = 2·72 = 144, α = (180 − 144)/2 = 18 → B', () =>
    expect(answerOf('polygons-19')).toBe('B'));
  it('20 — a√3 = 6√3, a = 6, 6·6 = 36 → A', () => expect(answerOf('polygons-20')).toBe('A'));
  it('21 — 5d = 180, d = 36, n = 10, 10·7/2 = 35 → C', () =>
    expect(answerOf('polygons-21')).toBe('C'));
  it('22 — A + B = 2·(180 − 100) = 160, 720 − 160 = 560 → D', () =>
    expect(answerOf('polygons-22')).toBe('D'));
  it('23 — m(CDA) = 40, m(FBC) = 60, α = 360 − 60 − 140 − 40 = 120 → E', () =>
    expect(answerOf('polygons-23')).toBe('E'));
  it('24 — n = 360/24 = 15, 13·180 = 2340 → C', () => expect(answerOf('polygons-24')).toBe('C'));

  it('25 — |AD| = 2a, |AK| = a·cos 60 = a/2, |KD| = 3a/2, oran 3 → C', () =>
    expect(answerOf('polygons-25')).toBe('C'));
  it('26 — 9k = 180, dış 40, n = 9, 9·6/2 = 27 → B', () =>
    expect(answerOf('polygons-26')).toBe('B'));
  it('27 — m(DEL) = 360 − 135 − 90 = 135, α = 45/2 = 22,5 → D', () =>
    expect(answerOf('polygons-27')).toBe('D'));
  it('28 — n = 360/24 = 15, 15·12/2 = 90 → D', () => expect(answerOf('polygons-28')).toBe('D'));
  it('29 — (n − 3)/2 = 3, n = 9, 180 − 40 = 140 → C', () =>
    expect(answerOf('polygons-29')).toBe('C'));
  it('30 — 2d = 180 − 108 = 72, d = 36, n = 10 → D', () =>
    expect(answerOf('polygons-30')).toBe('D'));
  it('31 — n − 2 = 10, n = 12, 12·9/2 = 54 → C', () => expect(answerOf('polygons-31')).toBe('C'));
  it('32 — 6S − S − S/2 − 2S = 5S/2, (5S/2)/6S = 5/12 → C', () =>
    expect(answerOf('polygons-32')).toBe('C'));
  it('33 — 360 − 70 − 40 = 250, 250/25 = 10, n = 12 → B', () =>
    expect(answerOf('polygons-33')).toBe('B'));
  it('34 — m(KBC) = 30, m(BCK) = 75, α = 120 − 75 = 45 → C', () =>
    expect(answerOf('polygons-34')).toBe('C'));
  it('35 — n(n − 3) = 40, n = 8, 6·180 = 1080 → C', () =>
    expect(answerOf('polygons-35')).toBe('C'));
  it('36 — 6a²√3/4 = 96√3, a = 8, 6·8 = 48 → D', () => expect(answerOf('polygons-36')).toBe('D'));
  it('37 — n − 2 = 11, n = 13, 13·10/2 = 65 → B', () => expect(answerOf('polygons-37')).toBe('B'));
  it('38 — n − 2 = 16, n = 18, 180 − 20 = 160 → D', () =>
    expect(answerOf('polygons-38')).toBe('D'));
  it('39 — m(DCL) = 162, m(CLD) = 9, x = 45 + 9 = 54 → D', () =>
    expect(answerOf('polygons-39')).toBe('D'));
  it('40 — ½·12·30 = 180 → C', () => expect(answerOf('polygons-40')).toBe('C'));
  it('41 — m(KAB) = 72, m(KBC) = 54, α = 54 − 36 = 18 → B', () =>
    expect(answerOf('polygons-41')).toBe('B'));
  it('42 — m(CBK) = 90, m(BCK) = 60, ½·6·6√3 = 18√3 → D', () =>
    expect(answerOf('polygons-42')).toBe('D'));
  it('43 — R = 3, 2√2·9 = 18√2 → C', () => expect(answerOf('polygons-43')).toBe('C'));
  it('44 — 60 + 3d + 180 = 360, d = 40, n = 9 → C', () =>
    expect(answerOf('polygons-44')).toBe('C'));
  it('45 — ½·10·S = 240, S = 48 → E', () => expect(answerOf('polygons-45')).toBe('E'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
