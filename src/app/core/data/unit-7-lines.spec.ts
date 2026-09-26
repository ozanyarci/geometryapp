import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 7 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'lines')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  it('1 — −(a − 1)/2 = 3, a − 1 = −6, a = −5 → B', () => expect(answerOf('lines-1')).toBe('B'));
  it('2 — B(−3, −2), C(2, −3), √(25 + 1) = √26 → D', () => expect(answerOf('lines-2')).toBe('D'));
  it('3 — P(0.5, 2.5): x ≥ 0, 3 − 4 < 0, 0.5 − 5 + 2 < 0 → A', () =>
    expect(answerOf('lines-3')).toBe('A'));
  it('4 — B(3, 4 − (−1)) = (3, 5), 3p − 10 = 2, p = 4 → E', () =>
    expect(answerOf('lines-4')).toBe('E'));
  it('5 — m = (22 − 30)/4 = −2, 30/2 = 15 → C', () => expect(answerOf('lines-5')).toBe('C'));
  it('6 — 3x − 4y + 1 = −(4x + 3y − 7), 7x − y − 6 = 0 → E', () =>
    expect(answerOf('lines-6')).toBe('E'));

  it('7 — 3·2 + (m − 2)(−3) = 0, 12 = 3m, m = 4 → E', () => expect(answerOf('lines-7')).toBe('E'));
  it('8 — |−2 − 11/2| / 5 = (15/2)/5 = 3/2 → B', () => expect(answerOf('lines-8')).toBe('B'));
  it('9 — m = 2, −6/(k − 1) = 2, k = −2 → A', () => expect(answerOf('lines-9')).toBe('A'));
  it('10 — y = 2x + 4, y = −2x + 8, apex (1, 6), 6·6/2 = 18 → D', () =>
    expect(answerOf('lines-10')).toBe('D'));
  it('11 — |13 − 12k| = 13, k = 0 or 13/6, sum 13/6 → D', () =>
    expect(answerOf('lines-11')).toBe('D'));
  it('12 — b = 2a − 1, a + 2b = 13, (3, 5), 3 + 5 = 8 → C', () =>
    expect(answerOf('lines-12')).toBe('C'));

  it('13 — 3·(−a/3) = −1, a = 1, A(1, 2), √(1 + 4) = √5 → B', () =>
    expect(answerOf('lines-13')).toBe('B'));
  it('14 — B(4, 0), A(0, −3), x/4 − y/3 = 1, 3x − 4y − 12 = 0 → A', () =>
    expect(answerOf('lines-14')).toBe('A'));
  it('15 — |m|a²/2 = 9a²/(2|m|), m² = 9, m = −3 → B', () => expect(answerOf('lines-15')).toBe('B'));
  it('16 — 6/(2/3) + 6/(3/2) = 9 + 4 = 13 → C', () => expect(answerOf('lines-16')).toBe('C'));
  it('17 — corner (4, 6), 10·6/2 + 2·4/2 = 30 + 4 = 34 → C', () =>
    expect(answerOf('lines-17')).toBe('C'));
  it('18 — 4x + 3y = 36, x + 3y = 18, P(6, 4), √52 = 2√13 → C', () =>
    expect(answerOf('lines-18')).toBe('C'));

  it('19 — A(0, 8), B(0, −4), E(4, 0), x/4 + y/8 = 1, 2x + y − 8 = 0 → B', () =>
    expect(answerOf('lines-19')).toBe('B'));
  it('20 — (2, 0) → (6, −2), 2x − 5y − 22 = 0, x = 11 → C', () =>
    expect(answerOf('lines-20')).toBe('C'));
  it('21 — 16 + h² = 25, D(−5, 3), m = 3/4, 3x − 4y + 27 = 0 → D', () =>
    expect(answerOf('lines-21')).toBe('D'));
  it('22 — inner bisector through (3, 0), m = −2, outer −1/(−2) = 1/2 → A', () =>
    expect(answerOf('lines-22')).toBe('A'));
  it('23 — 3/9 + (a + 3)/12 = 1, a + 3 = 8, a = 5 → C', () =>
    expect(answerOf('lines-23')).toBe('C'));
  it('24 — |OB| = 15, M(15, r), (r − 9)/3 = −4/3, r = 5 → D', () =>
    expect(answerOf('lines-24')).toBe('D'));

  it('25 — (3 − (−5))/(t − 2) = 2, t − 2 = 4, t = 6 → C', () =>
    expect(answerOf('lines-25')).toBe('C'));
  it('26 — x = 0, −y/3 = 1, y = −3 → A', () => expect(answerOf('lines-26')).toBe('A'));
  it('27 — m = −4/(−2) = 2 → D', () => expect(answerOf('lines-27')).toBe('D'));
  it('28 — y = −2(x − 3), y + 2x − 6 = 0 → B', () => expect(answerOf('lines-28')).toBe('B'));
  it('29 — m = 6/(−2) = −3, y = −3x → E', () => expect(answerOf('lines-29')).toBe('E'));
  it('30 — 5y = 2(x + 1), 2x − 5y + 2 = 0 → C', () => expect(answerOf('lines-30')).toBe('C'));
  it('31 — −3/(b + 2) = −3/4, b + 2 = 4, b = 2 → B', () => expect(answerOf('lines-31')).toBe('B'));

  it('32 — x/(−2) + y/4 = 1, y = 2x + 4 → B', () => expect(answerOf('lines-32')).toBe('B'));
  it('33 — m = 12/6 = 2, (n − 1)/3 = 2, n = 7 → A', () => expect(answerOf('lines-33')).toBe('A'));
  it('34 — 12 − 2a − 6 = 0, a = 3; −6 − 2b − 6 = 0, b = −6; 3 + 6 = 9 → E', () =>
    expect(answerOf('lines-34')).toBe('E'));
  it('35 — 6·|a|/2 = 27, |a| = 9 → B', () => expect(answerOf('lines-35')).toBe('B'));
  it('36 — m = −6/(−3) = 2, y − 3 = 2(x − 2), 2x − y − 1 = 0 → D', () =>
    expect(answerOf('lines-36')).toBe('D'));
  it('37 — a = tan 120° = −√3, b = tan 150° = −√3/3, b/a = 1/3 → A', () =>
    expect(answerOf('lines-37')).toBe('A'));
  it('38 — A(0, 6), B(2√7, 0), √(28 + 36) = 8 → C', () => expect(answerOf('lines-38')).toBe('C'));

  it('39 — 3 − 3m + 9 = 0, m = 4, slope 4/3 → C', () => expect(answerOf('lines-39')).toBe('C'));
  it('40 — m(d) = 1/3, A(1, 0), B = A + (3, 1) = (4, 1) → B', () =>
    expect(answerOf('lines-40')).toBe('B'));
  it('41 — (1 − 3, 1 + 3) = (−2, 4) → A', () => expect(answerOf('lines-41')).toBe('A'));
  it('42 — tan 135° = −1, y − 3 = −(x − 1), y = −x + 4 → B', () =>
    expect(answerOf('lines-42')).toBe('B'));
  it('43 — E(−6, 0), F(0, 4), (1/2)·2√13·16/√13 = 16 → C', () =>
    expect(answerOf('lines-43')).toBe('C'));
  it('44 — 6 − b = 2b + 12, b = −2, A(2, 4√3), (1/2)·2·4√3 = 4√3 → C', () =>
    expect(answerOf('lines-44')).toBe('C'));

  it('45 — (m − 1)/(2m + 1) = 3/2, 2m − 2 = 6m + 3, m = −5/4 → C', () =>
    expect(answerOf('lines-45')).toBe('C'));
  it('46 — M(2, 4), 4 = 6 + n, n = −2 → B', () => expect(answerOf('lines-46')).toBe('B'));
  it('47 — y − 2 = 2(x − 4), y = 2x − 6, x = 3 → D', () => expect(answerOf('lines-47')).toBe('D'));
  it('48 — M(3, 5), m(AB) = 1, y − 5 = −(x − 3), x + y − 8 = 0 → C', () =>
    expect(answerOf('lines-48')).toBe('C'));
  it('49 — C = (−2 + 4, 1 + 2) = (2, 3), 2a − 3 + 5 = 0, a = −1 → B', () =>
    expect(answerOf('lines-49')).toBe('B'));
  it('50 — d₁ ∩ x axis = (−2, 0), −6 + k = 0, k = 6 → D', () =>
    expect(answerOf('lines-50')).toBe('D'));
  it('51 — m′ = −4/3, 3y + 6 = −4x + 4, 4x + 3y + 2 = 0 → E', () =>
    expect(answerOf('lines-51')).toBe('E'));

  it('52 — |8 + n|/√2 = 2√2, |8 + n| = 4, C left of D so n = −4 → C', () =>
    expect(answerOf('lines-52')).toBe('C'));
  it('53 — −a/3 = 5 − 2a, 5a = 15, a = 3 → D', () => expect(answerOf('lines-53')).toBe('D'));
  it('54 — (9 − a)² = a² + 9, a = 4, C(5, 3), y = 3x − 12, n = −12 → C', () =>
    expect(answerOf('lines-54')).toBe('C'));
  it('55 — p = 2, m₂ = 1/2, 2y − 4 = x − 3, x − 2y + 1 = 0 → B', () =>
    expect(answerOf('lines-55')).toBe('B'));
  it('56 — (0, 2), (0, 5), (3, 5), 3·3/2 = 9/2 → C', () => expect(answerOf('lines-56')).toBe('C'));
  it('57 — 3x = 6, x = 2, y = 3, horizontal y = 3 → D', () =>
    expect(answerOf('lines-57')).toBe('D'));

  it('58 — B(−4, 0), C(0, 8), DE: y = 2x + 4, 16 − 4 = 12 → B', () =>
    expect(answerOf('lines-58')).toBe('B'));
  it('59 — (2, 1), y − 1 = −2(x − 2), 2x + y − 5 = 0 → E', () =>
    expect(answerOf('lines-59')).toBe('E'));
  it('60 — m₂ = 1/2, C(2, 4), m₁ = −2, −4 = −2(a − 2), a = 4 → D', () =>
    expect(answerOf('lines-60')).toBe('D'));
  it('61 — M(2, −3), y = −3x/2, 3x + 2y = 0 → A', () => expect(answerOf('lines-61')).toBe('A'));
  it('62 — a + (−a/2 + 5) = 8, a = 6, b = 2, 6·2 = 12 → C', () =>
    expect(answerOf('lines-62')).toBe('C'));
  it('63 — (−3/a)·2 = −1, a = 6 → E', () => expect(answerOf('lines-63')).toBe('E'));
  it('64 — 5y = 15, (2, 3), m = 3/2 → D', () => expect(answerOf('lines-64')).toBe('D'));

  it('65 — y = 2x/3 + 2, y = 4 − x, 5x/3 = 2, x = 6/5 → B', () =>
    expect(answerOf('lines-65')).toBe('B'));
  it('66 — −1/a = −1/2, a = 2, 3 − 4 + c = 0, c = 1, 3 → D', () =>
    expect(answerOf('lines-66')).toBe('D'));
  it('67 — x/3 + x/2 = 1, x = 6/5, y = 12/5 → B', () => expect(answerOf('lines-67')).toBe('B'));
  it('68 — (2, 4), 6 + 4m + 2 = 0, m = −2 → B', () => expect(answerOf('lines-68')).toBe('B'));
  it('69 — (0, 4), 12 + c = 0, 2x + 3y − 12 = 0 → C', () => expect(answerOf('lines-69')).toBe('C'));
  it('70 — (y/9)(−y/4) = −1, y = 6, m = 6/9 = 2/3 → B', () =>
    expect(answerOf('lines-70')).toBe('B'));

  it('71 — |3·0 − 4·5|/√25 = 20/5 = 4 → C', () => expect(answerOf('lines-71')).toBe('C'));
  it('72 — x/6 + 2x/4 = 1, C(3/2, 3), (6·3/2)/(4·(3/2)/2) = 9/3 = 3 → D', () =>
    expect(answerOf('lines-72')).toBe('D'));
  it('73 — (0, 7), (0, 1), (2, 3), 6·2/2 = 6 → C', () => expect(answerOf('lines-73')).toBe('C'));
  it('74 — x/8 + (x + 1)/4 = 1, 3x = 6, P(2, 3) → B', () => expect(answerOf('lines-74')).toBe('B'));
  it('75 — m(d) = 2/4 = 1/2, (1/2)(−m/2) = −1, m = 4 → D', () =>
    expect(answerOf('lines-75')).toBe('D'));
  it('76 — 3x = −x/3 + 10, x = 3, B(3, 9) → A', () => expect(answerOf('lines-76')).toBe('A'));

  it('77 — CD: y = x + 2, x + 2 = 8 − x, E(3, 5), (2 + 5)/2 · 3 = 21/2 → C', () =>
    expect(answerOf('lines-77')).toBe('C'));
  it('78 — m = 1/3, m⊥ = −3, y − 1 = −3(x − 2), 3x + y − 7 = 0 → D', () =>
    expect(answerOf('lines-78')).toBe('D'));
  it('79 — m(OA) = 2, m(AB) = −1/2, 2y − 8 = −x + 2, x + 2y − 10 = 0 → B', () =>
    expect(answerOf('lines-79')).toBe('B'));
  it('80 — (y/4)(4 − y)/3 = −1, y = −2, 4 · 2 / 2 = 4 → C', () =>
    expect(answerOf('lines-80')).toBe('C'));
  it('81 — sides 2 + 2 = 4 and 5 + 2 = 7, (4 + 7)/2 · 6 = 33 → C', () =>
    expect(answerOf('lines-81')).toBe('C'));
  it('82 — M(3, 1), m = 3/2, m⊥ = −2/3, 2x + 3y − 9 = 0 → B', () =>
    expect(answerOf('lines-82')).toBe('B'));
  it('83 — 3|7 − a|/2 = 15, a = −3 or 17, sum 14 → C', () =>
    expect(answerOf('lines-83')).toBe('C'));

  it('84 — B(3, −4), C(−3, 4), √(36 + 64) = 10 → D', () => expect(answerOf('lines-84')).toBe('D'));
  it('85 — x = 1 and x = 15, 7x = 21, (3, 4), 14 · 4 / 2 = 28 → C', () =>
    expect(answerOf('lines-85')).toBe('C'));
  it('86 — x + 2y = 0, −3x + y − 7 = 0, (−2, 1), 6/3 = 2 → D', () =>
    expect(answerOf('lines-86')).toBe('D'));
  it('87 — |8 + 15 + c|/5 = 2, c = −13 or −33 → B', () => expect(answerOf('lines-87')).toBe('B'));
  it('88 — A(−6, 0), B(0, 4), C(6, 8), m = 8/6 = 4/3 → D', () =>
    expect(answerOf('lines-88')).toBe('D'));
  it("89 — B'(9, −5), y = −x + 4, x = 4 → B", () => expect(answerOf('lines-89')).toBe('B'));
  it('90 — 3x = 9, (3, 3), |9 + 12 + 4|/5 = 5 → C', () => expect(answerOf('lines-90')).toBe('C'));

  it('91 — (a + 7)/2 = 2, a = −3 → A', () => expect(answerOf('lines-91')).toBe('A'));
  it('92 — B = A reflected in y = x = (1, 7), √(1 + 49) = 5√2 → C', () =>
    expect(answerOf('lines-92')).toBe('C'));
  it('93 — m = 4/3, Δy = (4/3) · 12 = 16 → D', () => expect(answerOf('lines-93')).toBe('D'));
  it('94 — 5x − 12y − 18 = 0, |8 + 18|/13 = 2, r = 1 → B', () =>
    expect(answerOf('lines-94')).toBe('B'));
  it('95 — D(12 − a, a), 12 − 3a − 3 = 0, a = 3, 3² = 9 → C', () =>
    expect(answerOf('lines-95')).toBe('C'));
  it('96 — P(0, 5), 13/√(m² + 1) = 5, m² = 144/25, m = 12/5 → D', () =>
    expect(answerOf('lines-96')).toBe('D'));
  it('97 — (3 − m)/(1 + 3m) = 1, m = 1/2, y = x/2 + 1, x = −2 → C', () =>
    expect(answerOf('lines-97')).toBe('C'));

  it('98 — 3x − 4y + c = 0, |c − 2|/5 = 2, c = 12 or −8 → A', () =>
    expect(answerOf('lines-98')).toBe('A'));
  it('99 — y = −2x + 20, c² + (20 − 2c)² = 100, C(6, 8), B(16, 8) → D', () =>
    expect(answerOf('lines-99')).toBe('D'));
  it('100 — 2x − y + 3, 2x − y − 5, (3 − 5)/2 = −1, 4x − 2y − 2 = 0 → E', () =>
    expect(answerOf('lines-100')).toBe('E'));
  it('101 — |n + 7|/13 = 2, n = 19 or −33 → B', () => expect(answerOf('lines-101')).toBe('B'));
  it('102 — B(−4, 2), C(4, 2), 8 · 2 / 2 = 8 → C', () => expect(answerOf('lines-102')).toBe('C'));
  it('103 — M(1, 3), m(AB) = −1, y = x + 2, x − y + 2 = 0 → D', () =>
    expect(answerOf('lines-103')).toBe('D'));
  it('104 — 4 · x_K / 2 = 4, K(2, 3), y = −3x/2 + 6, x = 4 → B', () =>
    expect(answerOf('lines-104')).toBe('B'));

  it('105 — k(x + y − 3) + (2x − y) = 0, y = 2x, 3x = 3, (1, 2) → B', () =>
    expect(answerOf('lines-105')).toBe('B'));
  it('106 — x − y − 5 = 0, 8/√2 = 4√2, (4√2)² = 32 → C', () =>
    expect(answerOf('lines-106')).toBe('C'));
  it('107 — m₁ = 3, m₂ = −1/2, |(7/2)/(−1/2)| = 7 → D', () =>
    expect(answerOf('lines-107')).toBe('D'));
  it('108 — |2a − 2| = 2√(a² + 9), −8a = 32, a = −4 → B', () =>
    expect(answerOf('lines-108')).toBe('B'));
  it('109 — m₁ = 1 (45°), m₂ = 1/√3 (30°), 45 − 30 = 15 → A', () =>
    expect(answerOf('lines-109')).toBe('A'));
  it('110 — 4x − 3y + 12 = 0, |c|/5 = 2, c = ±10 → B', () =>
    expect(answerOf('lines-110')).toBe('B'));
  it('111 — x + y = 8, (2, 6), (6, 2), |4 − 36|/2 = 16 → C', () =>
    expect(answerOf('lines-111')).toBe('C'));

  it('112 — y = 2x − 1, y = −x/2 + 4, x = 2, y = 3 → D', () =>
    expect(answerOf('lines-112')).toBe('D'));
  it('113 — 2a + b = 7, a − b = 5, (4, −1), 4 − m − 2 = 0, m = 2 → B', () =>
    expect(answerOf('lines-113')).toBe('B'));
  it('114 — k = y − 3, x = 2y − 7, x − 2y + 7 = 0 → A', () =>
    expect(answerOf('lines-114')).toBe('A'));
  it('115 — |BC| = 5, |OD| = 3 · 4/9 = 4/3, m = 1/3, y = 8/3 → C', () =>
    expect(answerOf('lines-115')).toBe('C'));
  it('116 — (6 − n)²/4 + (n + 2)²/4 = 10, 2n(n − 4) = 0, n = 4 → D', () =>
    expect(answerOf('lines-116')).toBe('D'));
  it('117 — |4 + 26|/10 = 3, a = 6/√3 = 2√3 → C', () => expect(answerOf('lines-117')).toBe('C'));
  it('118 — m(AC) = −2/3, S₁/S₂ = (2/3)² = 4/9 → B', () => expect(answerOf('lines-118')).toBe('B'));

  it('119 — image (−5, 2p − 5), −10 + 2p − 5 − 1 = 0, p = 8 → D', () =>
    expect(answerOf('lines-119')).toBe('D'));
  it('120 — widths 7 and 3, height 4, (7 + 3)/2 · 4 = 20 → C', () =>
    expect(answerOf('lines-120')).toBe('C'));
  it('121 — m = (90 − 120)/5 = −6, 120/6 = 20 → C', () => expect(answerOf('lines-121')).toBe('C'));
  it('122 — (2 + c)/2 = 8, c = 14, 3x − y + 14 = 0 → D', () =>
    expect(answerOf('lines-122')).toBe('D'));
  it('123 — (1, 0): 0 ≤ 2, 1 + 0 ≥ 0 → y ≤ 2x, x + y ≥ 0 → B', () =>
    expect(answerOf('lines-123')).toBe('B'));
  it('124 — image (−3, −m), −6 + m + 1 = 0, m = 5 → E', () =>
    expect(answerOf('lines-124')).toBe('E'));
  it('125 — 5x + 2y − 20 = 0, x = 0, y = 10 → E', () => expect(answerOf('lines-125')).toBe('E'));
  it('126 — (−1, 5), slope −3, y = −3x + 2, 3x + y − 2 = 0 → B', () =>
    expect(answerOf('lines-126')).toBe('B'));
  it('127 — B(−3, −2), base 6, height 3, 6 · 3/2 = 9 → C', () =>
    expect(answerOf('lines-127')).toBe('C'));
  it('128 — y = 2x − 4, 5x = 15, (3, 2) → (2, 3) → B', () =>
    expect(answerOf('lines-128')).toBe('B'));
  it('129 — x ≥ 0, (0, 1) above y = 2x, O below x + y = 6 → IV → D', () =>
    expect(answerOf('lines-129')).toBe('D'));
  it('130 — m = (60 − 30)/3 = 10, 30 + 10 = 40 → A', () => expect(answerOf('lines-130')).toBe('A'));
  it('131 — (2 − x) − 2(6 − y) + 3 = 0, x − 2y + 7 = 0 → E', () =>
    expect(answerOf('lines-131')).toBe('E'));
  it('132 — 3(4 − x) + (2 − y) − 4 = 0, 3x + y − 10 = 0, 3/2 + 1/2 = 2 → B', () =>
    expect(answerOf('lines-132')).toBe('B'));
  it('133 — I: 1 m/yıl, II: 1/3 m/yıl, 4 ÷ (2/3) = 6 → C', () =>
    expect(answerOf('lines-133')).toBe('C'));
  it('134 — (4 − x) − 2y + 6 = 0, x + 2y − 10 = 0 → D', () =>
    expect(answerOf('lines-134')).toBe('D'));
  it('135 — (−1, 2), (7, 2), (7, −4), (−1, −4), −1 + 7 + 7 − 1 = 12 → C', () =>
    expect(answerOf('lines-135')).toBe('C'));
  it('136 — (−2 + c)/2 = 4, c = 10, 3x + y + 10 = 0 → C', () =>
    expect(answerOf('lines-136')).toBe('C'));
  it('137 — (1 + n)/2 = −5, n = −11, 2x − y − 11 = 0 → D', () =>
    expect(answerOf('lines-137')).toBe('D'));
  it('138 — m(x − 2) − x + 3y − 1 = 0, (2, 1), 2 + 2 − t = 0, t = 4 → C', () =>
    expect(answerOf('lines-138')).toBe('C'));
  it('139 — |3n + 7|/5 = 4, n = 13/3 or n = −9 → A', () => expect(answerOf('lines-139')).toBe('A'));
  it('140 — B(−1, 3), |(m + 3)/(1 − 3m)| = 1, m = −1/2, x + 1 = 6, x = 5 → C', () =>
    expect(answerOf('lines-140')).toBe('C'));
  it('141 — B(2, 0), d: 2x + y = 4, (1, 0): 2 ≤ 4, x ≥ 0, x ≤ 2 → B', () =>
    expect(answerOf('lines-141')).toBe('B'));
  it('142 — slope −1/2 ⊥ 2, midpoint (2, 3), 3 = 4 + n, n = −1 → C', () =>
    expect(answerOf('lines-142')).toBe('C'));
  it('143 — centre y = 6, r = 6, a² + 4² = 36, a = 2√5 → B', () =>
    expect(answerOf('lines-143')).toBe('B'));
  it('144 — (k/2 + (k − 6)/2) · 3 = 3k − 9 = 27, k = 12 → E', () =>
    expect(answerOf('lines-144')).toBe('E'));
  it('145 — A(6, 0), B(0, −3), T(2, −2), slope −2, 2x + y − 2 = 0 → D', () =>
    expect(answerOf('lines-145')).toBe('D'));
  it('146 — y = −3x/4 + 6 meets x-axis at 8, 12 · 3/2 = 18 → D', () =>
    expect(answerOf('lines-146')).toBe('D'));
  it('147 — foot of perpendicular from T(6, 1): H(2, 3), 2 + 3 = 5 → C', () =>
    expect(answerOf('lines-147')).toBe('C'));
  it('148 — image y + mx + 6 = 0, 3m + 6 = 0, m = −2 → B', () =>
    expect(answerOf('lines-148')).toBe('B'));
  it('149 — 3(4 − x) − (−2 − y) + m = 0, 14 + m = 5, m = −9 → B', () =>
    expect(answerOf('lines-149')).toBe('B'));
  it('150 — 2(6 − x) − y − 4 = 0, y = −2x + 8, −2 + 8 = 6 → C', () =>
    expect(answerOf('lines-150')).toBe('C'));
  it('151 — y-intercept −2 reflected in y = 1: 2 − (−2) = 4 → E', () =>
    expect(answerOf('lines-151')).toBe('E'));
  it('152 — vertices (±4, 0), (0, ±10), 8 · 20/2 = 80 → C', () =>
    expect(answerOf('lines-152')).toBe('C'));
  it('153 — tan 2α = (4/3)/(1 − 4/9) = 12/5 → B', () => expect(answerOf('lines-153')).toBe('B'));
  it('154 — foot H(1, 0), A′(−2, −3), −4 + 3 + a − 1 = 0, a = 2 → B', () =>
    expect(answerOf('lines-154')).toBe('B'));
  it('155 — midpoint (3, 3) on line, 9 − 12 + n = 0, n = 3 → E', () =>
    expect(answerOf('lines-155')).toBe('E'));
  it('156 — A′(2, −3), √(6² + 8²) = 10 → C', () => expect(answerOf('lines-156')).toBe('C'));
  it('157 — C(r, r), |17r − 60| = 13r, r = 15 → D', () => expect(answerOf('lines-157')).toBe('D'));
  it('158 — (3a + 4)(4 − a) < 0, a < −4/3 or a > 4, a = −2 → E', () =>
    expect(answerOf('lines-158')).toBe('E'));
  it('159 — 40t − 15t = 100, t = 4 → A', () => expect(answerOf('lines-159')).toBe('A'));
  it('160 — AB: y − 3 = −(x − 4)/3, y = 0 → x = 13 → C', () =>
    expect(answerOf('lines-160')).toBe('C'));
  it('161 — B(2, 5), C(−5, −2), −5 − 2 = −7 → D', () => expect(answerOf('lines-161')).toBe('D'));
  it('162 — n = 8, base 64/8 = 8, x-intercept 4 + 8 = 12, m = −8/12 = −2/3 → B', () =>
    expect(answerOf('lines-162')).toBe('B'));
  it('163 — AB: y − 2 = 2(x − 3), x = 0 → y = −4 → D', () =>
    expect(answerOf('lines-163')).toBe('D'));
  it('164 — foot H(5, 5) on y = x, |OH| = √50 = 5√2 → C', () =>
    expect(answerOf('lines-164')).toBe('C'));
  it('165 — C′(8, −3), slope −4/3, x = 2 + 15/4 = 23/4 → E', () =>
    expect(answerOf('lines-165')).toBe('E'));
  it('166 — a(1/10 + 1/6) = 1, a = 15/4, a² = 225/16 → D', () =>
    expect(answerOf('lines-166')).toBe('D'));
  it('167 — D(−2, 0), E(2, 6), C(0, 3), 6 · 2/2 = 6 → B', () =>
    expect(answerOf('lines-167')).toBe('B'));
  it('168 — midpoint (1, 1), slope 3/4, 3x − 4y + 1 = 0 → D', () =>
    expect(answerOf('lines-168')).toBe('D'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
