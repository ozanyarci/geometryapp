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

  it('7 — |CA| = √(100 − 64) = 6, |CB| = √(289 − 64) = 15, (1/3)·45·8 = 120 → C', () =>
    expect(answerOf('pyramids-7')).toBe('C'));
  it('8 — h = 3·720/180 = 12, slants 13 and 15, 180 + 234 + 150 = 564 → A', () =>
    expect(answerOf('pyramids-8')).toBe('A'));
  it('9 — h = √(144 − 72) = 6√2, (1/3)·144·6√2 = 288√2 → E', () =>
    expect(answerOf('pyramids-9')).toBe('E'));
  it('10 — a = 6, |KD| = √(121 − 72) = 7, (1/3)·36·7 = 84 → B', () =>
    expect(answerOf('pyramids-10')).toBe('B'));
  it('11 — 2πr = 2π·15·144/360 = 12π, r = 6 → C', () => expect(answerOf('pyramids-11')).toBe('C'));
  it('12 — water (26/27)·(1/3)·9 = 26/9 of πr², h₂ = 26/9 → D', () =>
    expect(answerOf('pyramids-12')).toBe('D'));

  it('13 — 2πr = 10π, r = 5, h = √(169 − 25) = 12, (1/3)·25·12 = 100 → A', () =>
    expect(answerOf('pyramids-13')).toBe('A'));
  it('14 — |DB| = √(100 − 36) = 8, |DC| = √(100 − 64) = 6, (1/3)·24·6 = 48 → C', () =>
    expect(answerOf('pyramids-14')).toBe('C'));
  it('15 — a = 2·5 = 10, h = √(169 − 25) = 12, (1/3)·100·12 = 400 → D', () =>
    expect(answerOf('pyramids-15')).toBe('D'));
  it('16 — a = 4, h = 3·(16√5/3)/16 = √5, √(5 + 4) = 3 → B', () =>
    expect(answerOf('pyramids-16')).toBe('B'));
  it('17 — ℓ = 2r, h = r√3, (√3/3)r³ = 9√3, r = 3, h = 3√3 → E', () =>
    expect(answerOf('pyramids-17')).toBe('E'));
  it('18 — r = 6, h = 6·tan 30° = 2√3, (1/3)·36·2√3 = 24√3 → C', () =>
    expect(answerOf('pyramids-18')).toBe('C'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
