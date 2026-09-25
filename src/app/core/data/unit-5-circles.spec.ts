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
  it('91 — CD yayı 3π/2, AB yayı 9π/2, KB = 9π/2 − 3π/2 = 3π → C', () =>
    expect(answerOf('circles-91')).toBe('C'));
  it('92 — OB = AC/2 = 9, AC = 18, C = 30, BOD = 30, 2π·9/12 = 3π/2 → B', () =>
    expect(answerOf('circles-92')).toBe('B'));
  it('93 — BC² = 3·12 = 36, AB = 6√3, A = 30, OE = 3√3/√3 = 3, çevre 12 → E', () =>
    expect(answerOf('circles-93')).toBe('E'));
  it('94 — AO₁O₂ 30°, AO₂ = 20/2 = 10, 2π·10/4 = 5π → D', () =>
    expect(answerOf('circles-94')).toBe('D'));
  it('95 — OH = r/2, OK = r√3/2, (√3 − 1)/(2 − √3) = √3 + 1 → D', () =>
    expect(answerOf('circles-95')).toBe('D'));
  it('96 — AH = 12, O₁H = 16, HO₂ = 144/16 = 9, r = √(144 + 81) = 15 → A', () =>
    expect(answerOf('circles-96')).toBe('A'));
  it('97 — 144 = x(x + 10), x = 8 → C', () => expect(answerOf('circles-97')).toBe('C'));
  it('98 — CE = 8, OE = √(100 − 64) = 6, EB = 10 − 6 = 4 → C', () =>
    expect(answerOf('circles-98')).toBe('C'));
  it('99 — AB = AE, CD = CE, çevre = PB + PD = 30 → D', () =>
    expect(answerOf('circles-99')).toBe('D'));
  it('100 — 6(x + 2) = 4·9, x = 4 → C', () => expect(answerOf('circles-100')).toBe('C'));
  it('101 — 4·24 = a·3a, a = 4√2, AE = 12√2 → D', () => expect(answerOf('circles-101')).toBe('D'));
  it('102 — OH = √(169 − 144) = 5, OK = √(169 − 25) = 12, 12 − 5 = 7 → B', () =>
    expect(answerOf('circles-102')).toBe('B'));
  it('103 — AK = 9, (9 − d)² = d² + 9, d = 4, r = 5 → C', () =>
    expect(answerOf('circles-103')).toBe('C'));
  it('104 — BH = 13, HC = 5, x = √(169 − 25) = 12 → D', () =>
    expect(answerOf('circles-104')).toBe('D'));
  it('105 — BC = 29, u = 35, DC = 35 − 20 = 15 → D', () =>
    expect(answerOf('circles-105')).toBe('D'));
  it('106 — EB = 10, x·10 = 2·14, x = 14/5 → C', () => expect(answerOf('circles-106')).toBe('C'));
  it('107 — AT yayı 90, AOT ikizkenar dik, r√2 = 8, r = 4√2 → B', () =>
    expect(answerOf('circles-107')).toBe('B'));
  it('108 — OL = 6, m(OPL) = 30, PL = 6·√3 = 6√3 → D', () =>
    expect(answerOf('circles-108')).toBe('D'));
  it('109 — 8·20 = 10·AC, AC = 16, DC = 6, BD² = 144 + 36 = 180, BD = 6√5 → C', () =>
    expect(answerOf('circles-109')).toBe('C'));
  it('110 — (r + 5)² = (r + 2)² + 81, 6r = 60, r = 10, çevre 20π → D', () =>
    expect(answerOf('circles-110')).toBe('D'));
  it('111 — 16 = BD(BD + 6), BD = 2, AE = 3, AG² = 3·9 = 27, AG = 3√3 → D', () =>
    expect(answerOf('circles-111')).toBe('D'));
  it('112 — 5·4 = 2·(2x + 2), x = 4 → C', () => expect(answerOf('circles-112')).toBe('C'));
  it('113 — AB² = 2·8 = 16, BC² = 64 − 16 = 48, OC = 2√3 → C', () =>
    expect(answerOf('circles-113')).toBe('C'));
  it('114 — PB = 9 + 5 = 14 = PA, PD = 14 − 3 = 11 → C', () =>
    expect(answerOf('circles-114')).toBe('C'));
  it('115 — BA² = 4·9 = 36, BA = 6, x/y = BA/BD = 6/9 = 2/3 → B', () =>
    expect(answerOf('circles-115')).toBe('B'));
  it('116 — AB + CD = 8 + 10 = 18, u = 18, A = 4·18 = 72 → B', () =>
    expect(answerOf('circles-116')).toBe('B'));
  it('117 — kenar 6, AE = 8, DE² = 36 + 64 = 100, r = 5 → C', () =>
    expect(answerOf('circles-117')).toBe('C'));
  it('118 — FB² = 5·20 = 100, FB = 10, FC = 4·5/10 = 2, BC = 12 → C', () =>
    expect(answerOf('circles-118')).toBe('C'));
  it('119 — yan kenar (16 + 4)/2 = 10, AH = 6, h = 8, r = 4 → B', () =>
    expect(answerOf('circles-119')).toBe('B'));
  it('120 — (r + 4)² = 144 + (r − 4)², 16r = 144, r = 9 → D', () =>
    expect(answerOf('circles-120')).toBe('D'));
  it('121 — kenar 16, r² = (16 − r)² + 64, 32r = 320, r = 10 → D', () =>
    expect(answerOf('circles-121')).toBe('D'));
  it('122 — m(FOE) = 60, m(D) = 120, 2r = 16·sin 60, r = 4√3, x = r/√3 = 4 → D', () =>
    expect(answerOf('circles-122')).toBe('D'));
  it('123 — FE² = 4·16 = 64, FE = 8, 225 = BF(BF + 16), BF = 9, BE = 17 → C', () =>
    expect(answerOf('circles-123')).toBe('C'));
  it('124 — AH = 3, HC = 1, OH² = 9 − 1 = 8, r² = 8 + 9 = 17 → E', () =>
    expect(answerOf('circles-124')).toBe('E'));
  it('125 — 64 = 4·CB, CB = 16, (x + 8)² = x² + 256, 16x = 192, x = 12 → B', () =>
    expect(answerOf('circles-125')).toBe('B'));
  it('126 — r = 6, HC = 6, OH² = 100 − 36 = 64, AB = 8 + 6 = 14 → C', () =>
    expect(answerOf('circles-126')).toBe('C'));
  it('127 — AB² = 10² − 6² = 64, AB = 8, CK = AB/2 = 4 → C', () =>
    expect(answerOf('circles-127')).toBe('C'));
  it('128 — (r₂ − 2)² = 289 − 225 = 64, r₂ = 10, CD = 17 − 2 − 10 = 5 → B', () =>
    expect(answerOf('circles-128')).toBe('B'));
  it('129 — AD = √(20 − 16) = 2, 4·DC′ = 2·2, DC′ = 1, x = 4 − 1 = 3 → E', () =>
    expect(answerOf('circles-129')).toBe('E'));
  it('130 — r² = (r − 1)² + (r − 8)², r² − 18r + 65 = 0, r = 13 → B', () =>
    expect(answerOf('circles-130')).toBe('B'));
  it('131 — AT² = 1·9 = 9, AT = 3, BN = AT = 3, BD = 6 → D', () =>
    expect(answerOf('circles-131')).toBe('D'));
  it('132 — AB + 4 = 10 + 10, AB = 16, çevre = 2(16 + 10) = 52 → C', () =>
    expect(answerOf('circles-132')).toBe('C'));
  it('133 — |OT| = 13/2 = (AD + BC)/2, 78 = (13/2)·AB, AB = 12 → D', () =>
    expect(answerOf('circles-133')).toBe('D'));
  it('134 — O₁O₂² = 15² + (5 + 3)² = 289, O₁O₂ = 17, EF = 17 − 8 = 9 → D', () =>
    expect(answerOf('circles-134')).toBe('D'));
  it('135 — OH² = 100 − 36 = 64, OH = 8, x² = (10 − 6)² + 8² = 80, x = 4√5 → A', () =>
    expect(answerOf('circles-135')).toBe('A'));
  it('136 — düz parçalar 4·(2·2) = 16, yaylar 2·3·2 = 12, ip = 28 → C', () =>
    expect(answerOf('circles-136')).toBe('C'));
  it('137 — R = 10, cos = 6/10, D(6, 8), M(5, 0), DM² = 1 + 64 = 65 → C', () =>
    expect(answerOf('circles-137')).toBe('C'));
  it('138 — AF = 5, 5·4 = x(x + 8), x² + 8x − 20 = 0, x = 2 → A', () =>
    expect(answerOf('circles-138')).toBe('A'));
  it('139 — EA² = EK·EM, 16 = x(x + 6), x = 2, EF = 2 + 6 + 2 = 10 → C', () =>
    expect(answerOf('circles-139')).toBe('C'));
  it('140 — OH² = 90 − 81 = 9, CH = 9/9 = 1, AC = 9 − 1 = 8 → D', () =>
    expect(answerOf('circles-140')).toBe('D'));
  it('141 — DB = 4 + 16 = 20, AD² = 400 − 256 = 144, alan = 10·12 = 120 → E', () =>
    expect(answerOf('circles-141')).toBe('E'));
  it('142 — cos = 9/15 = 3/5, tan = 4/3, AB = 15·4/3 = 20 → C', () =>
    expect(answerOf('circles-142')).toBe('C'));
  it('143 — O₁O₂ = 17, HO₁² = 289 − 225 = 64, BO₁ = 13, BC = 13 − 12 = 1 → A', () =>
    expect(answerOf('circles-143')).toBe('A'));
  it('144 — ED² = 64 − 16 = 48, ED = 4√3, DC = 12 − 4√3 → B', () =>
    expect(answerOf('circles-144')).toBe('B'));
  it('145 — BG = 2 + 8 = 10, x² = 100 − 64 = 36, x = 6 → C', () =>
    expect(answerOf('circles-145')).toBe('C'));
  it('146 — BA² = 2·8 = 16, BA = 4, AK = 8, KE = 4, AE² = 64 + 16 = 80, AE = 4√5 → B', () =>
    expect(answerOf('circles-146')).toBe('B'));
  it('147 — r = 10, EH² = 4·16 = 64, FH = 6, MD² = 100 − 36 = 64, FD = 6 + 8 = 14 → C', () =>
    expect(answerOf('circles-147')).toBe('C'));
  it('148 — O₁O₂ = 13, O₁H = 5, EF = √(169 − 25) = 12, AB = 9 + 12 + 4 = 25 → C', () =>
    expect(answerOf('circles-148')).toBe('C'));
  it('149 — (8 + t/2)² + 3t²/4 = 169, t² + 8t − 105 = 0, t = 7 → C', () =>
    expect(answerOf('circles-149')).toBe('C'));
  it('150 — BA = BE = x + 4, (x + 4)² = x(x + 10), x = 8, BA = 12 → C', () =>
    expect(answerOf('circles-150')).toBe('C'));
  it('151 — BC = AD = 80°, AB + CD = 200° ↔ 40 cm, BC = 80 · 0,2 = 16 → D', () =>
    expect(answerOf('circles-151')).toBe('D'));
  it('152 — KD² = 100 − 64 = 36, AK² = 24 · 6 = 144, FE · 10 = 4 · 20, FD = 8 + 10 = 18 → C', () =>
    expect(answerOf('circles-152')).toBe('C'));
  it('153 — BD ⊥ AC ⇒ AB = BC = 9, 9x = 6 · 12 = 72, x = 8 → D', () =>
    expect(answerOf('circles-153')).toBe('D'));
  it('154 — AB + DC = 2a, h = a / 2, a² / 2 = 72, a = 12, 2r = h = 6, r = 3 → C', () =>
    expect(answerOf('circles-154')).toBe('C'));
  it('155 — (R + r)² = 625 − 400 = 225, R + r = 15, R − r = 3, r = 6 → C', () =>
    expect(answerOf('circles-155')).toBe('C'));
  it('156 — PT² = 4 · 9 = 36, PT = 6, x / 12 = 6 / 9, x = 8 → D', () =>
    expect(answerOf('circles-156')).toBe('D'));
  it('157 — DB = CD = 12, AB² = 100 + 576 = 676, r = 13, OD = 10/2 = 5, DE = 8 → C', () =>
    expect(answerOf('circles-157')).toBe('C'));
  it('158 — 8/a = 12/(a + 5), a = 10, AC = 15, DC² = 225 − 144 = 81, DC = 9 → C', () =>
    expect(answerOf('circles-158')).toBe('C'));
  it('159 — O₁H² = 25 − 16 = 9, O₁O₂ = 6, 16 × 10, çevre = 52 → C', () =>
    expect(answerOf('circles-159')).toBe('C'));
  it('160 — CB = 10, CD = 64/10, DB = 3,6, AD = 4,8, EB = 3,6 · 6/10,8 = 2 → B', () =>
    expect(answerOf('circles-160')).toBe('B'));
  it('161 — AE = 10, 3/AC = 4/10, AC = 7,5, BC = 4,5 = 9/2 → B', () =>
    expect(answerOf('circles-161')).toBe('B'));
  it('162 — DA = 16/2 = 8, AE = 6, EF = 4 · 6/8 = 3, x = 6 → C', () =>
    expect(answerOf('circles-162')).toBe('C'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
