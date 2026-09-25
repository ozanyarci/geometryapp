import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 5 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'circles')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  // Worked through by hand and checked against the drawn-to-scale coordinates.
  it('1 — TA yayı 68, TB yayı 180 − 68 = 112, x = 56 → B', () =>
    expect(answerOf('circles-1')).toBe('B'));
  it('2 — m(AOB) = 150 − x, x = (150 − x)/2, x = 50 → A', () =>
    expect(answerOf('circles-2')).toBe('A'));
  it('3 — m(BOC) = 56, m(COA) = 34, x = (180 − 34)/2 = 73 → E', () =>
    expect(answerOf('circles-3')).toBe('E'));
  it('4 — CD 100, BC 50, AB + AD = 210, AD = 140, 140/2 = 70 → C', () =>
    expect(answerOf('circles-4')).toBe('C'));
  it('5 — 3x = (180 + x)/2, 5x = 180, x = 36 → B', () => expect(answerOf('circles-5')).toBe('B'));
  it('6 — DE 36, BC 124, 2·BD = 200, BD 100, x = 50 → C', () =>
    expect(answerOf('circles-6')).toBe('C'));
  it('7 — m(ACB) = 38, x = 27 + 38 = 65 → D', () => expect(answerOf('circles-7')).toBe('D'));
  it('8 — 55 = x + 20, x = 35 → B', () => expect(answerOf('circles-8')).toBe('B'));
  it('9 — m(PAB) = 34, m(ABP) = 72, x = 180 − 106 = 74 → D', () =>
    expect(answerOf('circles-9')).toBe('D'));
  it('10 — CB 52, AD 76, x = (52 + 76)/2 = 64 → C', () => expect(answerOf('circles-10')).toBe('C'));
  it('11 — 48 + 80 + 2x = 180, x = 26 → A', () => expect(answerOf('circles-11')).toBe('A'));
  it('12 — m(TOA) = 180 − 90 − 34 = 56, x = 28 → D', () =>
    expect(answerOf('circles-12')).toBe('D'));
  it('13 — m(ODE) = 45, m(ODC) = 30, α = 75 → D', () => expect(answerOf('circles-13')).toBe('D'));
  it('14 — AC 128, AB 96, BC 360 − 224 = 136, α = 68 → B', () =>
    expect(answerOf('circles-14')).toBe('B'));
  it('15 — 2y = 64, y = 32, α = 180 − 64 − 32 = 84 → C', () =>
    expect(answerOf('circles-15')).toBe('C'));
  it('16 — 90 + x = 3x + 20, x = 35, AB 110, ATB 250 → D', () =>
    expect(answerOf('circles-16')).toBe('D'));
  it('17 — TB 70, CT 70, AC 40, x = 20 → B', () => expect(answerOf('circles-17')).toBe('B'));
  it('18 — C = 48, m(ECD) = 24, ED yayı 48 → A', () => expect(answerOf('circles-18')).toBe('A'));
  it('19 — AD yayı 140, m(TAD) = 70, m(PAB) = 110, α = 180 − 40 − 110 = 30 → B', () =>
    expect(answerOf('circles-19')).toBe('B'));
  it('20 — m(AKL) = 108, m(LKD) = 72, α = 180 − 72 = 108 → C', () =>
    expect(answerOf('circles-20')).toBe('C'));
  it('21 — PA = PB = PC, m(BPC) = 40, m(APB) = 70, x = 35 → D', () =>
    expect(answerOf('circles-21')).toBe('D'));
  it('22 — TB yayı 200, (200 − TA)/2 = 40, TA 120, x = 60 → E', () =>
    expect(answerOf('circles-22')).toBe('E'));
  it('23 — m(AOC) = x, m(ABC) = x/2, 3x/2 = 72, x = 48 → A', () =>
    expect(answerOf('circles-23')).toBe('A'));
  it('24 — BC yayı 112, m(BDC) = 68, 2α = 68, α = 34 → C', () =>
    expect(answerOf('circles-24')).toBe('C'));
  it('25 — BC yayı 88, BT = TC = 136, α = (136 + 88)/2 = 112 → D', () =>
    expect(answerOf('circles-25')).toBe('D'));
  it('26 — AB yayı 100, m(AFB) = 70, DE = 40, α = 20 → B', () =>
    expect(answerOf('circles-26')).toBe('B'));
  it('27 — (180 − 3t)/2 = 180 − 4t, t = 36, m(EOC) = 108, α = 36 → D', () =>
    expect(answerOf('circles-27')).toBe('D'));
  it('28 — DC = ED = 20 + 2α, BE = 140 − 4α, α = 3α − 60, α = 30 → A', () =>
    expect(answerOf('circles-28')).toBe('A'));
  it('29 — 40 + 40 + 2x + 6x = 360, x = 35, DC yayı 70 → E', () =>
    expect(answerOf('circles-29')).toBe('E'));
  it('30 — küçük AC yayı 136, AD yayı 68, α = 34 → C', () =>
    expect(answerOf('circles-30')).toBe('C'));
  it('31 — m(BOC) = 124, x = (180 − 124)/2 = 28 → C', () =>
    expect(answerOf('circles-31')).toBe('C'));
  it('32 — m(DAB) = 70, DB yayı 140, α = 140 → C', () => expect(answerOf('circles-32')).toBe('C'));
  it('33 — m(ACB) = 125, büyük AB 250, küçük AB 110, α = 110 → B', () =>
    expect(answerOf('circles-33')).toBe('B'));
  it('34 — 9x = 180, x = 20, m(AEB) = (180 + 40)/2 = 110 → C', () =>
    expect(answerOf('circles-34')).toBe('C'));
  it('35 — m(BOC) = 180 − 64 = 116, α = (180 − 116)/2 = 32 → D', () =>
    expect(answerOf('circles-35')).toBe('D'));
  it('36 — AD − BC = 48, AD + BC = 120, BC 36, α = 18 → C', () =>
    expect(answerOf('circles-36')).toBe('C'));
  it('37 — m(DOT) = 180 − 124 = 56, α = 90 − 56 = 34 → D', () =>
    expect(answerOf('circles-37')).toBe('D'));
  it('38 — BF 130, FD 110, α = 240/2 = 120 → D', () => expect(answerOf('circles-38')).toBe('D'));
  it('39 — CE 110, (110 − BF)/2 = 25, BF = 60 → D', () => expect(answerOf('circles-39')).toBe('D'));
  it('40 — AB + BC = 88, BC 36, AB 52, x = 26 → C', () => expect(answerOf('circles-40')).toBe('C'));
  it('41 — m(DAB) = 64, DB 128, AD = 180 − 128 = 52 → B', () =>
    expect(answerOf('circles-41')).toBe('B'));
  it('42 — α + 2(45 + α) = 180, 3α = 90, α = 30 → C', () =>
    expect(answerOf('circles-42')).toBe('C'));
  it('43 — a + 2a = 78, a = 26, m(ADO) = 2a = 52 → D', () =>
    expect(answerOf('circles-43')).toBe('D'));
  it('44 — [KE] // [BC], m(AEK) = 76/2 = 38, α = 38 → A', () =>
    expect(answerOf('circles-44')).toBe('A'));
  it('45 — 9α = 180, α = 20, DB yayı 160, CB 80, x = 40 → C', () =>
    expect(answerOf('circles-45')).toBe('C'));
  it('46 — DE 48, DC 132, AD = AC = 66, α = (48 + 66)/2 = 57 → B', () =>
    expect(answerOf('circles-46')).toBe('B'));
  it('47 — m(D) = 24, m(KOD) = 66, m(KOC) = 114, (180 − 114)/2 = 33 → D', () =>
    expect(answerOf('circles-47')).toBe('D'));
  it('48 — m(AOB) = 124, AC yayı 62, x = 31 → E', () => expect(answerOf('circles-48')).toBe('E'));
  it('49 — BE yayı 140, BC 80, α = 180 − 80 = 100 → D', () =>
    expect(answerOf('circles-49')).toBe('D'));
  it('50 — m(DAC) = 34, m(BAD) = 82, m(BCD) = 180 − 82 = 98 → B', () =>
    expect(answerOf('circles-50')).toBe('B'));
  it('51 — m(DAC) = 36, 3α + 36 = 180, α = 48 → C', () => expect(answerOf('circles-51')).toBe('C'));
  it('52 — BF − ED = 56, BE − DF = 72, 360 − 2·EF = 128, EF 116, α = 58 → E', () =>
    expect(answerOf('circles-52')).toBe('E'));
  it('53 — m(MAD) = 35, m(AMD) = 110, m(DMB) = 70, α = 180 − 70 = 110 → A', () =>
    expect(answerOf('circles-53')).toBe('A'));
  it('54 — CE (A yanı) 250, CE 110, AC 70, α = (360 − 70)/2 = 145 → D', () =>
    expect(answerOf('circles-54')).toBe('D'));
  it('55 — AB yayı 140, BC 72, AD = BC = 72, DC = 76, α = 38 → D', () =>
    expect(answerOf('circles-55')).toBe('D'));
  it('56 — m(AOB) = 4x + 30, 6x + 30 = 180, x = 25 → A', () =>
    expect(answerOf('circles-56')).toBe('A'));
  it('57 — |AC| = |AD| = |BC|, |OA| = |OB|, α = 64/2 = 32 → E', () =>
    expect(answerOf('circles-57')).toBe('E'));
  it('58 — AC yayı 360 − 248 = 112, (112 + ED)/2 = 70, ED = 28 → C', () =>
    expect(answerOf('circles-58')).toBe('C'));
  it('59 — 3x = 102, x = 34, m(OBC) = 12, m(ABC) = 22 → D', () =>
    expect(answerOf('circles-59')).toBe('D'));
  it('60 — (180 + t)/2 = 110, t = 40, AD yayı 100, m(ABD) = 50 → B', () =>
    expect(answerOf('circles-60')).toBe('B'));
  it('61 — m(KLC) = 70, m(LKD) = 95, ADC 110, BCD 85, fark 25 → B', () =>
    expect(answerOf('circles-61')).toBe('B'));
  it('62 — m(OCB) = 50, m(OAC) = 30, m(AOC) = 40, m(OAD) = 70, α = 40 → D', () =>
    expect(answerOf('circles-62')).toBe('D'));
  it('63 — AB = DC = CB = 30, CA yayı 300, α = 150 → D', () =>
    expect(answerOf('circles-63')).toBe('D'));
  it('64 — m(ADB) = 180 − 75 − 40 = 65, α = 65 → E', () =>
    expect(answerOf('circles-64')).toBe('E'));
  it('65 — m(EDC) = 55 = m(ABC), α = 180 − 65 − 55 = 60 → A', () =>
    expect(answerOf('circles-65')).toBe('A'));
  it('66 — OBC eşkenar, BC yayı 60, x = 30 → C', () => expect(answerOf('circles-66')).toBe('C'));
  it('67 — AC yayı 200, AB = BC = 80, α = 80 + 40 = 120 → E', () =>
    expect(answerOf('circles-67')).toBe('E'));
  it('68 — m(DMK) = 180 − 45 − 70 = 65, ortak teğet, x = 65 → D', () =>
    expect(answerOf('circles-68')).toBe('D'));
  it('69 — (3t − t)/2 = 20, t = 20, BD = 60 → C', () => expect(answerOf('circles-69')).toBe('C'));
  it('70 — PAB = 90 + 26 = 116, APB = 38, α = 19 + 26 = 45 → B', () =>
    expect(answerOf('circles-70')).toBe('B'));
  it('71 — 35 + (35 + α + 90) + α = 180, α = 10 → A', () =>
    expect(answerOf('circles-71')).toBe('A'));
  it('72 — 24 + 3C = 180, C = 52, α = 90 − 52 = 38 → C', () =>
    expect(answerOf('circles-72')).toBe('C'));
  it('73 — 270 − 3β = 45, β = 75, TA 120, AB 30, α = 150 → C', () =>
    expect(answerOf('circles-73')).toBe('C'));
  it('74 — 2x = (180 − x)/2, x = 36, 2x = 72 → E', () => expect(answerOf('circles-74')).toBe('E'));
  it('75 — AD + BC = 170, BC − AD = 30, AD = 70, x = 35 → B', () =>
    expect(answerOf('circles-75')).toBe('B'));
  it('76 — CB = AD = 70, (AB − 70)/2 = 30, AB = 130, α = 65 → B', () =>
    expect(answerOf('circles-76')).toBe('B'));
  it('77 — CAB 144, CA = BK = 36, AB = BD = 108, DK 72, α = 36 → D', () =>
    expect(answerOf('circles-77')).toBe('D'));
  it('78 — m(BKC) = m(DKO) = 67,5, α = 180 − 135 = 45 → A', () =>
    expect(answerOf('circles-78')).toBe('A'));
  it('79 — OE = 5, OB = 13, EB = √(169 − 25) = 12, AB = 24 → D', () =>
    expect(answerOf('circles-79')).toBe('D'));
  it('80 — BD² = DC·DA = 6·8 = 48, BD = 4√3, r = 2√3 → B', () =>
    expect(answerOf('circles-80')).toBe('B'));
  it('81 — OA = 60/12 = 5, r = 13, AE = 8, BE² = 64 + 144 = 208, BE = 4√13 → E', () =>
    expect(answerOf('circles-81')).toBe('E'));
  it('82 — (r + 2)² = r² + 64, r = 15, AC = √(225 + 400) = 25, FC = 10 → B', () =>
    expect(answerOf('circles-82')).toBe('B'));
  it('83 — BN = 8, NC = 10, AN² = 180 − 80 = 100, AE = 180/10 = 18 → A', () =>
    expect(answerOf('circles-83')).toBe('A'));
  it('84 — AT = 8√3/2 = 4√3, DE = 4√3·√2 = 4√6 → C', () =>
    expect(answerOf('circles-84')).toBe('C'));
  it('85 — OD = OF = 6, r² + 36 = (10 − r)², 20r = 64, r = 16/5 → D', () =>
    expect(answerOf('circles-85')).toBe('D'));
  it('86 — ODE ikizkenar dik, ODC 135, C = 30, OH = HD = 3√2, HC = 3√6, DC = 3√6 − 3√2 → B', () =>
    expect(answerOf('circles-86')).toBe('B'));
  it('87 — 45 = CD(CD + 4), CD = 5, BC = 9, AB² = 4·9 = 36, r = 3 → A', () =>
    expect(answerOf('circles-87')).toBe('A'));
  it('88 — 3β = 90, β = 30, r = 2√3, OD = 4√3, BD = 6√3 → D', () =>
    expect(answerOf('circles-88')).toBe('D'));
  it('89 — PA = 12, CD = 3 + 3 = 6, AB = 6·12/9 = 8, çevre 32 → C', () =>
    expect(answerOf('circles-89')).toBe('C'));
  it('90 — BDC = 45, CH = HD = √5, BH = √(25 − 5) = 2√5, x = 3√5 → E', () =>
    expect(answerOf('circles-90')).toBe('E'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
