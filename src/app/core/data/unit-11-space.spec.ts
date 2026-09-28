import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 11 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'space')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  it('1 — ABF equilateral, |BF| = 6, EF ⊥ FB, √(36 + 36) = 6√2 → B', () =>
    expect(answerOf('space-1')).toBe('B'));
  it('2 — two lines perpendicular to one plane are parallel → D', () =>
    expect(answerOf('space-2')).toBe('D'));
  it('3 — infinitely many lines through a point are parallel to a plane → B', () =>
    expect(answerOf('space-3')).toBe('B'));
  it('4 — two parallel lines lie in exactly one plane → E', () =>
    expect(answerOf('space-4')).toBe('E'));
  it('5 — 16√3 · cos 30° = 16√3 · √3/2 = 24 → B', () => expect(answerOf('space-5')).toBe('B'));
  it('6 — |AK|² = a² + a²/4 + a² = 9a²/4, 3a/2 = 18, a = 12 → C', () =>
    expect(answerOf('space-6')).toBe('C'));
  it('7 — |HK| = √(100 − 36) = 8, √(64 + 225) = 17 → C', () =>
    expect(answerOf('space-7')).toBe('C'));
  it('8 — a line perpendicular to a plane is perpendicular to every line in it → D', () =>
    expect(answerOf('space-8')).toBe('D'));
  it('9 — |BC| = √(100 − 64) = 6, BC ⊥ CD, 6 · 5 / 2 = 15 → B', () =>
    expect(answerOf('space-9')).toBe('B'));
  it('10 — AD ⊥ BC, |AD| = 16 · cos 60° = 8, √(36 + 64) = 10 → C', () =>
    expect(answerOf('space-10')).toBe('C'));
  it('11 — cos = 12/13, 26 · 12/13 = 24 → E', () => expect(answerOf('space-11')).toBe('E'));
  it('12 — 10√2 · sin 45° = 10 → B', () => expect(answerOf('space-12')).toBe('B'));
  it('13 — long side 36√2/6 = 6√2, cos α = 6/(6√2), α = 45° → C', () =>
    expect(answerOf('space-13')).toBe('C'));
  it('14 — a line parallel to a plane can be skew to lines in it → C', () =>
    expect(answerOf('space-14')).toBe('C'));
  it('15 — in a plane, a line cutting one of two parallels cuts the other → C', () =>
    expect(answerOf('space-15')).toBe('C'));
  it('16 — I and III true, skew lines determine no plane → D', () =>
    expect(answerOf('space-16')).toBe('D'));
  it('17 — infinitely many perpendiculars through a point on a line → B', () =>
    expect(answerOf('space-17')).toBe('B'));
  it('18 — a line in one of two parallel planes is parallel to the other → C', () =>
    expect(answerOf('space-18')).toBe('C'));
  it('19 — |KC| = 6√2, |KE| = 6, |AK|² = 100 − 72 = 28, √(28 + 36) = 8 → C', () =>
    expect(answerOf('space-19')).toBe('C'));
  it('20 — in a plane, non-intersecting lines are parallel, not skew → B', () =>
    expect(answerOf('space-20')).toBe('B'));
  it('21 — two planes parallel to one line may intersect → D', () =>
    expect(answerOf('space-21')).toBe('D'));
  it('22 — |PH| = 6 / sin 30° = 12, |TH| = √(144 − 36) = 6√3 → C', () =>
    expect(answerOf('space-22')).toBe('C'));
  it('23 — I and II true, two lines parallel to a plane may cross → C', () =>
    expect(answerOf('space-23')).toBe('C'));
  it('24 — exactly one plane through a point is parallel to a plane → E', () =>
    expect(answerOf('space-24')).toBe('E'));
  it('25 — area(ADE) = 8 · 6 / 2 = 24, 24 / cos 45° = 24√2 → C', () =>
    expect(answerOf('space-25')).toBe('C'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
