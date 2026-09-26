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

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
