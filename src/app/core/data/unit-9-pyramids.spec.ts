import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 9 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'pyramids')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  it('1 — (1/3)·8·6·9 = 144 → D', () => expect(answerOf('pyramids-1')).toBe('D'));
  it('2 — h = 3·256/64 = 12, (9/12)² · 64 = 36 → C', () =>
    expect(answerOf('pyramids-2')).toBe('C'));
  it('3 — (1/3)·(a²/2)·(2a/3) = a³/9 → 1/9 → B', () => expect(answerOf('pyramids-3')).toBe('B'));
  it('4 — 27/64 = (3/4)³, empty 16·3/4 = 12, 16 − 12 = 4 → B', () =>
    expect(answerOf('pyramids-4')).toBe('B'));
  it('5 — a² + 20a = 384, a = 12, h = √(100 − 36) = 8, 144·8/3 = 384 → E', () =>
    expect(answerOf('pyramids-5')).toBe('E'));
  it('6 — |TB| = 2·5 = 10, h = √(100 − 36) = 8, 36·8/3 = 96 → D', () =>
    expect(answerOf('pyramids-6')).toBe('D'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
