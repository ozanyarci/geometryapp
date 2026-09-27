import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 10 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'spheres')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  it('1 — 4πR² = 100π, R = 5, r = √(25 − 9) = 4, 16π → C', () =>
    expect(answerOf('spheres-1')).toBe('C'));
  it('2 — hemisphere (2/3)π·6³ = 144π → C', () => expect(answerOf('spheres-2')).toBe('C'));
  it('3 — r = 9, (2/3)π·729 = 486π, 486/81 = 6 → D', () => expect(answerOf('spheres-3')).toBe('D'));
  it('4 — A = (a, 3a), (1/3)π(3a)²·a = 3πa³ = 24π, a = 2, 3a = 6 → C', () =>
    expect(answerOf('spheres-4')).toBe('C'));
  it('5 — (4/3)π·27 = 36π = 16πh, h = 9/4 → C', () => expect(answerOf('spheres-5')).toBe('C'));
  it('6 — h = 9, r = 108/27 = 4, 4π·16 = 64π → C', () => expect(answerOf('spheres-6')).toBe('C'));
  it('7 — r = √(169 − 25) = 12, (1/3)π·144·5 = 240π → C', () =>
    expect(answerOf('spheres-7')).toBe('C'));
  it('8 — frustum (4π/3)(36 + 18 + 9) = 84π, half = 42π → B', () =>
    expect(answerOf('spheres-8')).toBe('B'));
  it('9 — 12 + √(144 + h²) = 3h, h = 9, (1/3)·576·9 = 1728 → C', () =>
    expect(answerOf('spheres-9')).toBe('C'));
  it('10 — 6πr² = 96π, r = 4, R = √(16 + 9) = 5, (4/3)π·125 = 500π/3 → C', () =>
    expect(answerOf('spheres-10')).toBe('C'));
  it('11 — r = 12, d = 5, h = 18, (1/3)π·144·18 = 864π → D', () =>
    expect(answerOf('spheres-11')).toBe('D'));
  it('12 — cone r = 4, h = 6, (1/3)π·16·6 = 32π → C', () => expect(answerOf('spheres-12')).toBe('C'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
