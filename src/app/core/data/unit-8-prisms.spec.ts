import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 8 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'prisms')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  it('1 — edge 6, |BE|² = 72, 72 + 3² = 81, |BT| = 9 → A', () =>
    expect(answerOf('prisms-1')).toBe('A'));
  it('2 — |FK| = √(169 − 144) = 5, 1728 − (5·12/2)·12 = 1368 → D', () =>
    expect(answerOf('prisms-2')).toBe('D'));
  it('3 — 27a³/8 = 216, a = 4, b = 6, c = 9, 4 + 6 + 9 = 19 → B', () =>
    expect(answerOf('prisms-3')).toBe('B'));
  it('4 — √((12π)² + (5π)²) = 13π → C', () => expect(answerOf('prisms-4')).toBe('C'));
  it('5 — 4³ = 64, 64 / (6·8) = 4/3 → E', () => expect(answerOf('prisms-5')).toBe('E'));
  it('6 — |AC′| = √68 = 2√17, √(8² + 6²) = 10, 10 + 2√17 → B', () =>
    expect(answerOf('prisms-6')).toBe('B'));
  it('7 — a + b + c = 12, 144 − 94 = 50, √50 = 5√2 → D', () =>
    expect(answerOf('prisms-7')).toBe('D'));
  it('8 — h = 180/18 = 10, 9√3·10 = 90√3 → C', () => expect(answerOf('prisms-8')).toBe('C'));
  it('9 — 21 + 2·14 = 49, √49 = 7 → B', () => expect(answerOf('prisms-9')).toBe('B'));
  it('10 — 192π − π·4²·8/2 = 192π − 64π = 128π → C', () => expect(answerOf('prisms-10')).toBe('C'));
  it('11 — area 48, u = 16, r = 3, π·9·10 = 90π → D', () =>
    expect(answerOf('prisms-11')).toBe('D'));
  it('12 — 96π + 48π + 2·27π = 198π → C', () => expect(answerOf('prisms-12')).toBe('C'));
  it('13 — 4·8·16 = 512 = 8³, 8√3 → D', () => expect(answerOf('prisms-13')).toBe('D'));
  it('14 — 2·(12 + 28) = 80, 80·3 = 240 → D', () => expect(answerOf('prisms-14')).toBe('D'));
  it('15 — 3·4·7 = 84 → B', () => expect(answerOf('prisms-15')).toBe('B'));
  it('16 — a·a√2 = 8√2, a = 2√2, a³ = 16√2 → D', () => expect(answerOf('prisms-16')).toBe('D'));
  it('17 — 6·(2²√3/4)·6 = 36√3 → C', () => expect(answerOf('prisms-17')).toBe('C'));
  it('18 — 12² + 4² + 3² = 169, √169 = 13 → D', () => expect(answerOf('prisms-18')).toBe('D'));
  it('19 — a(√3 − 1) = 4, a = 2√3 + 2, a√3 = 6 + 2√3 → E', () =>
    expect(answerOf('prisms-19')).toBe('E'));
  it('20 — 54√3/6 = 9√3, a = 6, 3·6·6 = 108 → A', () => expect(answerOf('prisms-20')).toBe('A'));
  it('21 — a = 540/60 = 9, √(12² + 9²) = 15 → D', () => expect(answerOf('prisms-21')).toBe('D'));
  it('22 — edge 20/4 = 5, 4·5·9 = 180 → E', () => expect(answerOf('prisms-22')).toBe('E'));
  it('23 — (πa²/2 + πa²) / 6a² = (3/2)/6 · π = π/4 → C', () =>
    expect(answerOf('prisms-23')).toBe('C'));
  it('24 — 90·4/3 = 120, 120 / (6·5) = 4 → B', () => expect(answerOf('prisms-24')).toBe('B'));
  it('25 — r = 5, 2π·5·6 = 60π → A', () => expect(answerOf('prisms-25')).toBe('A'));
  it('26 — ah = 16√2, a²h = 128, a = 4√2, h = 4, √(32 + 32 + 16) = 4√5 → C', () =>
    expect(answerOf('prisms-26')).toBe('C'));
  it('27 — 180/6 = 30, BC = 12, √(25 + 144) = 13 → B', () =>
    expect(answerOf('prisms-27')).toBe('B'));
  it('28 — h = 4√3·√3/2 = 6, π·9·6 = 54π → D', () => expect(answerOf('prisms-28')).toBe('D'));
  it('29 — h = 12·sin30 = 6, |BD| = 6√3, a² = 54, 54·6 = 324 → D', () =>
    expect(answerOf('prisms-29')).toBe('D'));
  it('30 — 2a² + a²/4 = 144, 3a/2 = 12, a = 8, 6·64 = 384 → C', () =>
    expect(answerOf('prisms-30')).toBe('C'));
  it('31 — 9² − 52 = 29, √29 → B', () => expect(answerOf('prisms-31')).toBe('B'));
  it('32 — 2πr² = 32π, r = 4, h = 48/8 = 6, π·16·6 = 96π → D', () =>
    expect(answerOf('prisms-32')).toBe('D'));
  it('33 — 7k = 14, k = 2, 4·6·12 = 288 → E', () => expect(answerOf('prisms-33')).toBe('E'));
  it('34 — 24k³ = 648, k = 3, 4k = 12 → A', () => expect(answerOf('prisms-34')).toBe('A'));
  it('35 — |ED| = √(100 − 36) = 8, (8·6/2)·6 = 144 → C', () =>
    expect(answerOf('prisms-35')).toBe('C'));
  it('36 — 11² − 7² = 121 − 49 = 72 → D', () => expect(answerOf('prisms-36')).toBe('D'));
  it('37 — 2·(2π·3·5 + π·3²) = 2·39π = 78π → C', () => expect(answerOf('prisms-37')).toBe('C'));
  it('38 — 12√3 / cos30 = 12√3 · 2/√3 = 24 → B', () => expect(answerOf('prisms-38')).toBe('B'));
  it('39 — rh = 48, r²h = 288, r = 6, h = 8, √(36 + 64) = 10 → E', () =>
    expect(answerOf('prisms-39')).toBe('E'));
  it('40 — 6πr² = 54π, r = 3, h = 9, π·9·9 = 81π → C', () =>
    expect(answerOf('prisms-40')).toBe('C'));
  it('41 — 4·3·2 = 24 cells, 24·6 = 144 → D', () => expect(answerOf('prisms-41')).toBe('D'));
  it('42 — 4·6 = 24, √(24² + 18²) = √900 = 30 → C', () => expect(answerOf('prisms-42')).toBe('C'));
  it('43 — 4·12·9 = 432, 432 / 144 = 3 → C', () => expect(answerOf('prisms-43')).toBe('C'));
  it('44 — a = 6, base 54√3, h = 2√3, 108√3 + 72√3 = 180√3 → C', () =>
    expect(answerOf('prisms-44')).toBe('C'));
  it('45 — (12²·20)/(20²·12) = 12/20 = 3/5 → B', () => expect(answerOf('prisms-45')).toBe('B'));
  it('46 — |AB|² = 36 + 28 = 64, r = 4, h² = 100 − 36, h = 8, π·16·8 = 128π → C', () =>
    expect(answerOf('prisms-46')).toBe('C'));
  it('47 — 2×2×1 block: 16a² = 16x/6 = 8x/3 → B', () => expect(answerOf('prisms-47')).toBe('B'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
