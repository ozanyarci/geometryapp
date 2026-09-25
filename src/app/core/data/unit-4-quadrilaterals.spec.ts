import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 4 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'quadrilaterals')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  // Worked through by hand and checked against the drawn-to-scale coordinates.
  it('1 — D = 125, C = 115, B = 70, α = 360 − 310 = 50 → C', () =>
    expect(answerOf('quadrilaterals-1')).toBe('C'));
  it('2 — b + d = 360 − 100 − 158 = 102, (260 − x)/2 = 102, x = 56 → C', () =>
    expect(answerOf('quadrilaterals-2')).toBe('C'));
  it('3 — 64 + 36 = 25 + x², x² = 75, x = 5√3 → C', () =>
    expect(answerOf('quadrilaterals-3')).toBe('C'));
  it('4 — m(AED) = 135, ½·12·10·√2/2 = 30√2 → B', () =>
    expect(answerOf('quadrilaterals-4')).toBe('B'));
  it('5 — 16 + 64 = 49 + x², x² = 31 → B', () => expect(answerOf('quadrilaterals-5')).toBe('B'));
  it('6 — cos(DEC) = 3/6, 60°, ½·10·12·√3/2 = 30√3 → C', () =>
    expect(answerOf('quadrilaterals-6')).toBe('C'));
  it('7 — DC ⊥ BD, 36 = a·3a, BD² = 72, BH = 4√2, HD = 2√2, AH² = 49 − 32 = 17, x² = 25 → B', () =>
    expect(answerOf('quadrilaterals-7')).toBe('B'));
  it('8 — a + 130 + 90 + c/2 + 55 = 360, 2a + c = 170, α = 360 − 130 − 170 = 60 → D', () =>
    expect(answerOf('quadrilaterals-8')).toBe('D'));
  it('9 — 5S·S = 30·15, S² = 90, S = 3√10 → C', () =>
    expect(answerOf('quadrilaterals-9')).toBe('C'));
  it('10 — Â + Ĉ = 180, (5·6)/(4·9) = 30/36 = 5/6 → D', () =>
    expect(answerOf('quadrilaterals-10')).toBe('D'));
  it('11 — BD = 10, AC = 14, ½·14·10·sin 120° = 35√3 → B', () =>
    expect(answerOf('quadrilaterals-11')).toBe('B'));
  it('12 — ABCD = 4·5 + 4·7 = 48, KLMN = 48/2 = 24 → C', () =>
    expect(answerOf('quadrilaterals-12')).toBe('C'));
  it('13 — A = 180 − 40 = 140, B + C = 360 − 236 = 124, α = 180 − 62 = 118 → D', () =>
    expect(answerOf('quadrilaterals-13')).toBe('D'));
  it('14 — AE/EC = 30/20 = 3/2, BEC = 60·2/5 = 24 → D', () =>
    expect(answerOf('quadrilaterals-14')).toBe('D'));
  it('15 — AFE + CKL = (ABD + CBD)/4 = 64/4 = 16 → C', () =>
    expect(answerOf('quadrilaterals-15')).toBe('C'));
  it('16 — x² + 16 = 25 + 49, x² = 58 → B', () => expect(answerOf('quadrilaterals-16')).toBe('B'));
  it('17 — A + C = 250, AKC = 360 − 125 − 70 = 165, α = 15 → B', () =>
    expect(answerOf('quadrilaterals-17')).toBe('B'));
  it('18 — hexagon = ¾·ABCD = 45, ABCD = 60 → C', () =>
    expect(answerOf('quadrilaterals-18')).toBe('C'));
  it('19 — ½·9·4·sin 120° = 9√3 → D', () => expect(answerOf('quadrilaterals-19')).toBe('D'));
  it('20 — AEB = 60, A + B = 240, C + D = 120, α = 120 − 70 = 50 → C', () =>
    expect(answerOf('quadrilaterals-20')).toBe('C'));
  it('21 — KL = 7, KN = 4, KLMN = 7·4 = 28 = ½·(½·14·8) → B', () =>
    expect(answerOf('quadrilaterals-21')).toBe('B'));
  it('22 — C = 90, BD² = 16 + 25 = 41, x² = 41 − 5 = 36, x = 6 → C', () =>
    expect(answerOf('quadrilaterals-22')).toBe('C'));
  it('23 — A + B = 2·65 = 130, C + D = 230, α = 180 − 115 = 65 → C', () =>
    expect(answerOf('quadrilaterals-23')).toBe('C'));
  it('24 — all sides 3 from K, ½·3·30 = 45 → C', () => expect(answerOf('quadrilaterals-24')).toBe('C'));
  it('25 — BCD = A + b + d, b + d = 110, α = 2·110 − 145 = 75 → E', () =>
    expect(answerOf('quadrilaterals-25')).toBe('E'));
  it('26 — Çevre(KLMN) = AC + BD, 24 = 10 + BD, BD = 14 → B', () =>
    expect(answerOf('quadrilaterals-26')).toBe('B'));
  it('27 — 49 − 81 = 16 − x², x² = 48, x = 4√3 → C', () =>
    expect(answerOf('quadrilaterals-27')).toBe('C'));
  it('28 — 70 + 180 − 2b + 130 + 2a = 360, b − a = 10, x = 70 − 10 = 60 → D', () =>
    expect(answerOf('quadrilaterals-28')).toBe('D'));
  it('29 — ABE = 1, AED = 4, CBE = 3, CED = 12, total 20 → C', () =>
    expect(answerOf('quadrilaterals-29')).toBe('C'));
  it('30 — GH = 9, HE = 6, FG = 7, EF = 25 − 22 = 3 → D', () =>
    expect(answerOf('quadrilaterals-30')).toBe('D'));
  it('31 — B = 180 − 65 = 115, BEK = 180 − 115 − 20 = 45, α = 45 → C', () =>
    expect(answerOf('quadrilaterals-31')).toBe('C'));
  it('32 — AO = 10, EO = 8, OB² = 100 − 64 = 36, BD = 12, 20·12/2 = 120 → D', () =>
    expect(answerOf('quadrilaterals-32')).toBe('D'));
  it('33 — AH = BG = 4, HF = AH = 4, x = 11 − 4 = 7 → C', () =>
    expect(answerOf('quadrilaterals-33')).toBe('C'));
  it('34 — AT = 5, TB = 5, DC = 10, DTC = 90, TC² = 100 − 64 = 36 → B', () =>
    expect(answerOf('quadrilaterals-34')).toBe('B'));
  it('35 — AD = 8, 8/2x = x/5, x² = 20, DF = 2x = 4√5 → D', () =>
    expect(answerOf('quadrilaterals-35')).toBe('D'));
  it('36 — A(BAK) = A(BCK) = 27, 9·KF/2 = 27, KF = 6 → C', () =>
    expect(answerOf('quadrilaterals-36')).toBe('C'));
  it('37 — A(DEC) = 32, EC = 8, DF = 8, DC² = 64 + 36 = 100, AB = 10 → D', () =>
    expect(answerOf('quadrilaterals-37')).toBe('D'));
  it('38 — 25(1 − k²) = 16, k = 3/5, 2(25 + 15) = 80 → C', () =>
    expect(answerOf('quadrilaterals-38')).toBe('C'));
  it('39 — DF/FB = 2/3, DFA = 3S/2, ABF = 9S/4, ABD = 15S/4, ABCD = 15S/2 → D', () =>
    expect(answerOf('quadrilaterals-39')).toBe('D'));
  it('40 — side 17, AK = 14 − 6 = 8, DK² = 289 − 64 = 225, 17·15 = 255 → D', () =>
    expect(answerOf('quadrilaterals-40')).toBe('D'));
  it('41 — BC = 3x, AC = 3x/2, 12 + 9x/2 = 30, x = 4 → C', () =>
    expect(answerOf('quadrilaterals-41')).toBe('C'));
  it('42 — ABCD = 12S, AKD = 6S/3 = 2S, EBC = 3S, 5S/12S = 5/12 → C', () =>
    expect(answerOf('quadrilaterals-42')).toBe('C'));
  it('43 — EF = DK = 12, EL = 3, DE = 4, 4/12 = 5/DC, DC = 15, x² = 225 − 144 = 81 → B', () =>
    expect(answerOf('quadrilaterals-43')).toBe('B'));
  it('44 — AD = 10, AP = 10, ADP = 12·8/2 = 48, h = 48/5, 15·48/5 = 144 → E', () =>
    expect(answerOf('quadrilaterals-44')).toBe('E'));
  it('45 — AC = 2·13 = 26, AH = 24, CH² = 676 − 576 = 100, 14·10 = 140 → D', () =>
    expect(answerOf('quadrilaterals-45')).toBe('D'));
  it('46 — AL = 24/3 = 8, CK = 24/4 = 6, KL = 24 − 14 = 10 → C', () =>
    expect(answerOf('quadrilaterals-46')).toBe('C'));
  it('47 — ABE = 60°, AH = 5√3, 2·(7·5√3/2) = 35√3 → A', () =>
    expect(answerOf('quadrilaterals-47')).toBe('A'));
  it('48 — y + 16 = P/2, y + 4 = P/3, 12 = P/6, P = 72 → D', () =>
    expect(answerOf('quadrilaterals-48')).toBe('D'));
  it('49 — AEB = 90, AB² = 256 + 144, AB = 20, AD = DE = EC = 10, 2·(20 + 10) = 60 → D', () =>
    expect(answerOf('quadrilaterals-49')).toBe('D'));
  it('50 — A = 64, DEA = 32, FEC = 180 − 32 − 110 = 38, x = 180 − 64 − 38 = 78 → C', () =>
    expect(answerOf('quadrilaterals-50')).toBe('C'));
  it('51 — ADE = 3·6 = 18, ADC = 24, ABCD = 48 → B', () =>
    expect(answerOf('quadrilaterals-51')).toBe('B'));
  it('52 — DE = 6, EC = 9, S₁ = 3h, S₂ = (15 + 9)h/2 = 12h, 1/4 → B', () =>
    expect(answerOf('quadrilaterals-52')).toBe('B'));
  it('53 — 115 = 30 + B + 20, B = 65, C = 115, x = 115 − 20 = 95 → C', () =>
    expect(answerOf('quadrilaterals-53')).toBe('C'));
  it('54 — ABCD = 2·32 = 64, AED + EBC = 32, AED = 32·3/4 = 24 → A', () =>
    expect(answerOf('quadrilaterals-54')).toBe('A'));
  it('55 — AE = AD = 6, ADE = 9√3, ABCD = 10·6·√3/2 = 30√3, 9/21 = 3/7 → B', () =>
    expect(answerOf('quadrilaterals-55')).toBe('B'));
  it('56 — A = 60, AC = a√3 = 8√3, a = 8, ABD equilateral, BD = 8 → C', () =>
    expect(answerOf('quadrilaterals-56')).toBe('C'));
  it('57 — both bisectors, DE = AD = EC, 2·AD = 14, AD = 7, 2·(14 + 7) = 42 → D', () =>
    expect(answerOf('quadrilaterals-57')).toBe('D'));
  it('58 — AD/FC = DE/EF = 3, FC = 12/3 = 4, x = 12 − 4 = 8 → D', () =>
    expect(answerOf('quadrilaterals-58')).toBe('D'));
  it('59 — AE² = 169 − 144 = 25, AC = 10, BD = 24, 10·24/2 = 120 → C', () =>
    expect(answerOf('quadrilaterals-59')).toBe('C'));
  it('60 — KD = 5, sin D = sin C, (5·8)/(6·4) = 40/24 = 5/3 → C', () =>
    expect(answerOf('quadrilaterals-60')).toBe('C'));
  it('61 — AC = 16, BD = 12, AD = 10, area 96, h = 96/10 = 48/5 → B', () =>
    expect(answerOf('quadrilaterals-61')).toBe('B'));
  it('62 — 15·8 = 120 = BC·10, BC = 12 → C', () =>
    expect(answerOf('quadrilaterals-62')).toBe('C'));
  it('63 — EBFK = ABC/3, ABC = 27, ABCD = 54 → D', () =>
    expect(answerOf('quadrilaterals-63')).toBe('D'));
  it('64 — AE = AD = 8, DC = 14, DF = DE = 9, FC = 14 − 9 = 5 → A', () =>
    expect(answerOf('quadrilaterals-64')).toBe('A'));
  it('65 — EAF = 90 − 75 = 15, EAD = 60, ADE = 30, α = 2·30 = 60 → C', () =>
    expect(answerOf('quadrilaterals-65')).toBe('C'));
  it('66 — DFC = 90, EG = BC = 14, FG = DC/2 = 4, x = 14 − 4 = 10 → E', () =>
    expect(answerOf('quadrilaterals-66')).toBe('E'));
  it('67 — C = 80, DCE = 80 − 60 = 20, CDE = 160/2 = 80, x = 100 − 80 = 20 → C', () =>
    expect(answerOf('quadrilaterals-67')).toBe('C'));
  it('68 — BAF = 40, AFB = AFD = 70, FBE = 100 − 70 = 30, BFE = 75, x = 360 − 215 = 145 → E', () =>
    expect(answerOf('quadrilaterals-68')).toBe('E'));
  it('69 — AF = AD = BE, 13 = 2·AD − 3, AD = 8, 2·(13 + 8) = 42 → D', () =>
    expect(answerOf('quadrilaterals-69')).toBe('D'));
  it('70 — DE² = EF·EK, 36 = 4·EK, EK = 9, FK = 9 − 4 = 5 → C', () =>
    expect(answerOf('quadrilaterals-70')).toBe('C'));
  it('71 — AF = a, AB = 4a, DE = 8a/3, AK/KE = AF/DE = 3/8 → C', () =>
    expect(answerOf('quadrilaterals-71')).toBe('C'));
  it('72 — DE = AD = 10, EC = 6, BE² = 100 − 36 = 64, 16·8 = 128 → C', () =>
    expect(answerOf('quadrilaterals-72')).toBe('C'));
  it('73 — BC = 5a, BE = 3a, (AF + 3a)/10a = 27/60, AF = 1.5a, DF = 3.5a, 7/3 → B', () =>
    expect(answerOf('quadrilaterals-73')).toBe('B'));
  it('74 — AK/KC = 1/4, AC = 5t, KF = 5t/2 − t = 3t/2 = 6, t = 4, AC = 20 → C', () =>
    expect(answerOf('quadrilaterals-74')).toBe('C'));
  it('75 — 90 + θ = 120, θ = 30, DE = CE = 6, DC = 6√3, AC = 18, AE = 18 − 6 = 12 → C', () =>
    expect(answerOf('quadrilaterals-75')).toBe('C'));
  it('76 — AK/KC = 3/4, AC = 16·7/4 = 28, EF = AC/4 = 7 → C', () =>
    expect(answerOf('quadrilaterals-76')).toBe('C'));
  it('77 — 48 − 12 − 16 − 4 = 16 → C', () => expect(answerOf('quadrilaterals-77')).toBe('C'));
  it('78 — AD = 10, DH = 8, AC² = 16² + 8² = 320, AC = 8√5 → D', () =>
    expect(answerOf('quadrilaterals-78')).toBe('D'));
  it('79 — FH = FE = 3, CH² = 25 − 9 = 16, CH = 4, x = DH = 10 + 4 = 14 → E', () =>
    expect(answerOf('quadrilaterals-79')).toBe('E'));
  it('80 — AB = 12, AF² = 9·12 = 108, BF² = 3·12 = 36, 12√3·12/2 = 72√3 → D', () =>
    expect(answerOf('quadrilaterals-80')).toBe('D'));
  it('81 — 9y = 36 − y², y = 3, DF/AB = 1/2, ADK = S/6, DKF = (3/6)·S/6 = S/12 → A', () =>
    expect(answerOf('quadrilaterals-81')).toBe('A'));
  it('82 — AE = 6, tan A = 4/3, CT = 12, BT = 12·3/4 = 9, HB = 14 − 9 = 5 → D', () =>
    expect(answerOf('quadrilaterals-82')).toBe('D'));
  it('83 — DE·DM = BF·NB, 3·10 = 5·NB, NB = 6 → B', () =>
    expect(answerOf('quadrilaterals-83')).toBe('B'));
  it('84 — AK/AE = 3/4, FK = 3a/4 = 3, a = 4, side 12, 4·12 = 48 → C', () =>
    expect(answerOf('quadrilaterals-84')).toBe('C'));
  it('85 — BD = BF = AB, A = 60, AB·√3/2 = 6, AB = 4√3, 4√3·6 = 24√3 → C', () =>
    expect(answerOf('quadrilaterals-85')).toBe('C'));
  it('86 — AK + CP = DL + BN, 4 + x = 9 + 3, x = 8 → D', () =>
    expect(answerOf('quadrilaterals-86')).toBe('D'));
  it('87 — AB = BD = 10, AD = 16, AC² = 2·(100 + 256) − 100 = 612, AC = 6√17 → B', () =>
    expect(answerOf('quadrilaterals-87')).toBe('B'));
  it('88 — 14² = 106 + 2·DH·BC, DH·BC = 45 → E', () =>
    expect(answerOf('quadrilaterals-88')).toBe('E'));
  it('89 — DBC = 30, ABE = 20, FBE = 20·2/5 = 8, 30 − 8 = 22 → B', () =>
    expect(answerOf('quadrilaterals-89')).toBe('B'));
  it('90 — AED = 90, AD = 20, EG = 12·16/20 = 48/5, x = 96/5 − 48/5 = 48/5 → A', () =>
    expect(answerOf('quadrilaterals-90')).toBe('A'));
  it('91 — a/6 and a/8 similarity ratios, S1/S2 = 64/36 = 16/9 → D', () =>
    expect(answerOf('quadrilaterals-91')).toBe('D'));
  it('92 — HM = 6, EM = 10, EN = 16/2 = 8, AD = 18, 2·(16 + 18) = 68 → B', () =>
    expect(answerOf('quadrilaterals-92')).toBe('B'));
  it('93 — BD² = 98 + 50 − 36 = 112, AC² = 272 − 112 = 160, AC = 4√10 → A', () =>
    expect(answerOf('quadrilaterals-93')).toBe('A'));
  it('94 — FB = FE = 5, BC = 10, EC = 8, 16·12/2 = 96 → B', () =>
    expect(answerOf('quadrilaterals-94')).toBe('B'));
  it('95 — x/6 = 8/10, x = 4,8 → D', () => expect(answerOf('quadrilaterals-95')).toBe('D'));
  it('96 — OL = 14/2 = 7, DE = 14 − 5 = 9, KE = 9 − 6 = 3 → C', () =>
    expect(answerOf('quadrilaterals-96')).toBe('C'));
  it('97 — BP = AB = 7, |EF| = |AD| − |AB|, 4 = |AD| − 7, |AD| = 11 → C', () =>
    expect(answerOf('quadrilaterals-97')).toBe('C'));
  it('98 — DBC equilateral, L centroid, KL = CO/6, KLF = S/48, 48·2 = 96 → D', () =>
    expect(answerOf('quadrilaterals-98')).toBe('D'));
  it('99 — CK = AC/3, OK = AC/6, OEC = S/8, OKE = S/24, 24·5 = 120 → D', () =>
    expect(answerOf('quadrilaterals-99')).toBe('D'));
  it('100 — CQ = AD = 3a, FQ = 4a, AK/KQ = 3/4, AK/AE = (3/7)/(1/2) = 6/7 → D', () =>
    expect(answerOf('quadrilaterals-100')).toBe('D'));
  it('101 — BKC = shaded = 30, BEK + FKC = 96 − 2·30 = 36 → C', () =>
    expect(answerOf('quadrilaterals-101')).toBe('C'));
  it('102 — DK/DE = DL/DF = 2/3, DKL : KEFL = 4 : 5, 25·4/5 = 20 → C', () =>
    expect(answerOf('quadrilaterals-102')).toBe('C'));
  it('103 — AF/FC = 4/12, F at AC/4, distance to AD = 3, 12 − 3 = 9 → D', () =>
    expect(answerOf('quadrilaterals-103')).toBe('D'));
  it('104 — AD = 6, EC = 2√3, BE² = 12 + 36 = 48, EF = BE/4 = √3 → B', () =>
    expect(answerOf('quadrilaterals-104')).toBe('B'));
  it('105 — 100 − (8 + 12 + 15 + 15) = 50 → D', () => expect(answerOf('quadrilaterals-105')).toBe('D'));
  it('106 — DEA = 30, AD = 2√3, EB = 2, AB = 8, 2·(8 + 2√3) = 16 + 4√3 → C', () =>
    expect(answerOf('quadrilaterals-106')).toBe('C'));
  it('107 — AC = 8, BO = 4, OE = 6, BE² = 16 + 36 = 52, 2√13 → D', () =>
    expect(answerOf('quadrilaterals-107')).toBe('D'));
  it('108 — max AEB = 12·6/2 = 36, 144 − 36 = 108 → D', () =>
    expect(answerOf('quadrilaterals-108')).toBe('D'));
  it('109 — AO = 6, OC = 15, 21·16/2 = 168 → C', () =>
    expect(answerOf('quadrilaterals-109')).toBe('C'));
  it('110 — AH = 2, HB = 8, EH² = 16, EF = 6, FC = 8, x² = 100, x = 10 → E', () =>
    expect(answerOf('quadrilaterals-110')).toBe('E'));
  it('111 — AC = 2·90/12 = 15, AO² = 45 − 36 = 9, OC = 12, DC² = 36 + 144 = 180, 6√5 → B', () =>
    expect(answerOf('quadrilaterals-111')).toBe('B'));
  it('112 — AEK = S − S/3 − S/12 − S/4 = S/3, AEF = S/9 = 12, S = 108 → D', () =>
    expect(answerOf('quadrilaterals-112')).toBe('D'));
  it('113 — ACF = 60, x = AC·√3/2, AC = 2x/√3, BC = AC/√2 = x√6/3 → A', () =>
    expect(answerOf('quadrilaterals-113')).toBe('A'));
  it('114 — AD = 18, AD′ = 6, 8/BD′ = 6/18, BD′ = 24, AB = 30 → B', () =>
    expect(answerOf('quadrilaterals-114')).toBe('B'));
  it('115 — FH = 17/√2, AH² = 169 − 289/2 = 49/2, BF = √2·7/√2 = 7 → C', () =>
    expect(answerOf('quadrilaterals-115')).toBe('C'));
  it('116 — (a − 3)/2 = a/3, a = 9, 81 → C', () =>
    expect(answerOf('quadrilaterals-116')).toBe('C'));
  it('117 — AE = 15, AB = 20, x/12 = 20/15, x = 16 → D', () =>
    expect(answerOf('quadrilaterals-117')).toBe('D'));
  it('118 — side 12, BF = DE = 4, BK = 8·4/16 = 2, CK = 10, 10·12/2 = 60 → E', () =>
    expect(answerOf('quadrilaterals-118')).toBe('E'));
  it('119 — AD = 10, EH = 4,8, AH = 3,6, x² = 5,2² + 3,6² = 40, 2√10 → B', () =>
    expect(answerOf('quadrilaterals-119')).toBe('B'));
  it('120 — DB = 20, h = 12·16/20 = 9,6, 15·9,6 = 144 → D', () =>
    expect(answerOf('quadrilaterals-120')).toBe('D'));
  it('121 — (b + 4)² + b² = 400, b = 12, side² = 16 + 144 = 160, 4√10 → C', () =>
    expect(answerOf('quadrilaterals-121')).toBe('C'));
  it('122 — AE = 20/2 = 10, AD² = 100 − 36 = 64, AD = 8, 12·8 = 96 → E', () =>
    expect(answerOf('quadrilaterals-122')).toBe('E'));
  it('123 — EH = 8, FH = HB = 6, AB = 120/8 = 15, x = 15 − 12 = 3 → B', () =>
    expect(answerOf('quadrilaterals-123')).toBe('B'));
  it('124 — side 3a, DE = 2a, 3a² = 24, a² = 8, 9·8 = 72 → C', () =>
    expect(answerOf('quadrilaterals-124')).toBe('C'));
  it('125 — DE = 13 − 8 = 5, AD² = 169 − 25 = 144, 13·12 = 156 → D', () =>
    expect(answerOf('quadrilaterals-125')).toBe('D'));
  it('126 — KC = 6√3, x² + 108 = 36 + 100, x² = 28, 2√7 → D', () =>
    expect(answerOf('quadrilaterals-126')).toBe('D'));
  it('127 — ADE isosceles, DAE = 75, FAB = 15, AFB = 75, α = 180 − 75 = 105 → C', () =>
    expect(answerOf('quadrilaterals-127')).toBe('C'));
  it('128 — AE = 6, BE = 3 + 6 = 9, 36 = 9·x, x = 4 → C', () =>
    expect(answerOf('quadrilaterals-128')).toBe('C'));
  it('129 — interior 135, AKF = 45, FKE = 45/2 = 22,5, AKE = 67,5, x = 180 − 67,5 = 112,5 → D', () =>
    expect(answerOf('quadrilaterals-129')).toBe('D'));
  it('130 — BE = 6, AE² = 100 − 36 = 64, ED² = 52 − 36 = 16, AD = 12, 12·12/2 = 72 → C', () =>
    expect(answerOf('quadrilaterals-130')).toBe('C'));
  it('131 — side 13, EK² = 9·4 = 36, EK = 6, x = 13 − 6 = 7 → C', () =>
    expect(answerOf('quadrilaterals-131')).toBe('C'));
  it('132 — AB = 9, x/9 = 3/6, x = 4,5 → C', () =>
    expect(answerOf('quadrilaterals-132')).toBe('C'));
  it('133 — 90/3 = 30, AD = 10√3·√3/2 = 15, FC = 12/2 = 6, x = 15 − 6 = 9 → D', () =>
    expect(answerOf('quadrilaterals-133')).toBe('D'));
  it('134 — DH² = 4·16 = 64, DH = 8, 16·8/2 = 64 → D', () =>
    expect(answerOf('quadrilaterals-134')).toBe('D'));
  it('135 — DAE ≅ DCF, EDF = 90 − 40 = 50, α = (180 − 50)/2 = 65 → C', () =>
    expect(answerOf('quadrilaterals-135')).toBe('C'));
  it('136 — CH² = 18·8 = 144, CH = 12, 26·12 = 312 → D', () =>
    expect(answerOf('quadrilaterals-136')).toBe('D'));
  it('137 — 6/EB = 4/6, EB = 9, 13·6 = 78 → B', () =>
    expect(answerOf('quadrilaterals-137')).toBe('B'));
  it('138 — ABC = 30, PC = 2/5·AC, 30·2/5 = 12 → C', () =>
    expect(answerOf('quadrilaterals-138')).toBe('C'));
  it('139 — BK = KE = 2, AK = 6, x² = 36 + 4 = 40, 2√10 → B', () =>
    expect(answerOf('quadrilaterals-139')).toBe('B'));
  it('140 — BD = AC = BE, ABD = 28, DBE = 152, BED = 14, α = 90 − 14 = 76 → D', () =>
    expect(answerOf('quadrilaterals-140')).toBe('D'));
  it('141 — (3a/4)·a/2 = 24, 3a² = 192, a² = 64 → B', () =>
    expect(answerOf('quadrilaterals-141')).toBe('B'));
  it('142 — CH = AE, 5·CH/2 = 20, CH = 8 → C', () =>
    expect(answerOf('quadrilaterals-142')).toBe('C'));
  it('143 — a − 1 + 5 = 2(1 + a − 5), a = 12, x = 7, y = 11, 18 → D', () =>
    expect(answerOf('quadrilaterals-143')).toBe('D'));
  it('144 — DAB = 30, DH = 6, ABD = 36, BCD = 36/3 = 12, 48 → E', () =>
    expect(answerOf('quadrilaterals-144')).toBe('E'));
  it('145 — 4k/12 = 4/3k, k = 2, BC = 8, DC² = 144 − 36 = 108, 8·6√3 = 48√3 → B', () =>
    expect(answerOf('quadrilaterals-145')).toBe('B'));
  it('146 — BE = 10, ED = 2, x/10 = 2/8, x = 2,5 → C', () =>
    expect(answerOf('quadrilaterals-146')).toBe('C'));
  it('147 — ACD = 72, AKC = 72/3 = 24, 72 + 24 = 96 → C', () =>
    expect(answerOf('quadrilaterals-147')).toBe('C'));
  it('148 — BE = BC = a, DC = 2a, 6a = 36, a = 6, 6√2 → D', () =>
    expect(answerOf('quadrilaterals-148')).toBe('D'));
  it('149 — BK = 3a/4, KG = a/4, 17a²/16 = 17, a² = 16 → C', () =>
    expect(answerOf('quadrilaterals-149')).toBe('C'));
  it('150 — DF = 9, BD = 25, AE² = 9·16 = 144, AE = 12, 25·12 = 300 → C', () =>
    expect(answerOf('quadrilaterals-150')).toBe('C'));
  it('151 — MN = BD/3, BD = 30, AB² = 900 − 324 = 576, AB = 24, 24·18 = 432 → C', () =>
    expect(answerOf('quadrilaterals-151')).toBe('C'));
  it('152 — E on AC, E = (3, 3), DE² = 3² + 4² = 25 → C', () =>
    expect(answerOf('quadrilaterals-152')).toBe('C'));
  it('153 — a = 7, (7 + k)² + k² = 169, k = 5, 12 + 12 + 5 + 5 + 7 + 7 = 48 → D', () =>
    expect(answerOf('quadrilaterals-153')).toBe('D'));
  it('154 — BC² = 225 − 81 = 144, DC = CE = 15, 12·15/2 = 90 → C', () =>
    expect(answerOf('quadrilaterals-154')).toBe('C'));
  it('155 — square side 3√2, BC = 6, 6·3√2 = 18√2 → B', () =>
    expect(answerOf('quadrilaterals-155')).toBe('B'));
  it('156 — AE = 10, BF = 80/10 = 8, AF = 4, x = 10 − 4 = 6 → C', () =>
    expect(answerOf('quadrilaterals-156')).toBe('C'));
  it('157 — DLC = 90, r = 10, 6² + h² = 100, h = 8, x = 20 − 8 = 12 → C', () =>
    expect(answerOf('quadrilaterals-157')).toBe('C'));
  it('158 — DA/DB = 4/8, ABD = 30, AD = 12/√3 = 4√3, 48√3 − 8√3 = 40√3 → C', () =>
    expect(answerOf('quadrilaterals-158')).toBe('C'));
  it('159 — AD = 15 = DE, AFD ≅ DCE, CE = DF = 9, x = 15 − 9 = 6 → C', () =>
    expect(answerOf('quadrilaterals-159')).toBe('C'));
  it('160 — DK/CE = 2, F to BC = a/3, (b/4)(a/3)/2 = ab/24 = 3, ab = 72 → C', () =>
    expect(answerOf('quadrilaterals-160')).toBe('C'));
  it('161 — a/15 = (10 − a)/10, a = 6, 4·6 = 24 → C', () =>
    expect(answerOf('quadrilaterals-161')).toBe('C'));
  it('162 — EB = 9, (2h + h)·9/2 = 54, h = 4, 12·4 = 48 → D', () =>
    expect(answerOf('quadrilaterals-162')).toBe('D'));
  it('163 — DP = 3·3k = 9k, CP = 5k, CE/EB = 5/4, x = 8 → B', () =>
    expect(answerOf('quadrilaterals-163')).toBe('B'));
  it('164 — AD = 20, DH = 16, x² = 64 + (16 − x)², x = 10 → C', () =>
    expect(answerOf('quadrilaterals-164')).toBe('C'));
  it('165 — EK/KC = 1/3, EC = 4√10, 10a²/9 = 160, a² = 144 → C', () =>
    expect(answerOf('quadrilaterals-165')).toBe('C'));
  it('166 — 8a = 64, a = 8, EC = 8√3, ECK = 120, ½·8√3·8·√3/2 = 48 → D', () =>
    expect(answerOf('quadrilaterals-166')).toBe('D'));
  it('167 — BM = AE = 4, BE = 8, 16 + 64 = 80 → C', () =>
    expect(answerOf('quadrilaterals-167')).toBe('C'));
  it('168 — AE = 8, DC = 12, EB = 4, AD² = 32, 12·4√2 = 48√2 → C', () =>
    expect(answerOf('quadrilaterals-168')).toBe('C'));
  it('169 — 2p²/q² = 18, p = 3q, AB = 7, (4 + 1)/2, 7/(5/2) = 14/5 → B', () =>
    expect(answerOf('quadrilaterals-169')).toBe('B'));
  it('170 — FE/AB = EA/BC, 6/AB = 4/6, AB = 9, 9·6 = 54 → C', () =>
    expect(answerOf('quadrilaterals-170')).toBe('C'));
  it('171 — A(ALEK) = A(AEB) = a²/4 = 9, a² = 36, a = 6 → B', () =>
    expect(answerOf('quadrilaterals-171')).toBe('B'));
  it('172 — S = 2R + 16, S − R − 4 = 52, R + 12 = 52, R = 40 → C', () =>
    expect(answerOf('quadrilaterals-172')).toBe('C'));
  it('173 — CH = HF, ECF = 135, FEC = 28, x = 180 − 135 − 28 = 17 → D', () =>
    expect(answerOf('quadrilaterals-173')).toBe('D'));
  it('174 — DK = 48/4 = 12, 12/18 = 10/AB, AB = 15, DB = 5, x² = 25 − 16 = 9 → B', () =>
    expect(answerOf('quadrilaterals-174')).toBe('B'));
  it('175 — rotate BFC about B, FG = 4√2, FGA = 90, AF² = 32 + 4 = 36, AF = 6 → D', () =>
    expect(answerOf('quadrilaterals-175')).toBe('D'));
  it('176 — AE = 6, CEB = ECB = 75, EB = 10, 6 + 10 = 16 → D', () =>
    expect(answerOf('quadrilaterals-176')).toBe('D'));
  it('177 — E at 3h/4, 10·(3h/4)/2 = 15h/4 = (10 + x)h/4, x = 5 → C', () =>
    expect(answerOf('quadrilaterals-177')).toBe('C'));
  it('178 — AF = DC = 7, FB = 25, FC² = 625 − 225 = 400, FC = 20, EC = 10 → C', () =>
    expect(answerOf('quadrilaterals-178')).toBe('C'));
  it('179 — S(k + 1)² = 48, S(k² − 1) = 24, (k − 1)/(k + 1) = 1/2, k = 3, S = 3, 3·3 = 9 → C', () =>
    expect(answerOf('quadrilaterals-179')).toBe('C'));
  it('180 — EH = 14/2 = 7, EK = 4/2 = 2, h = 9, (14 + 4)·9/2 = 81 → C', () =>
    expect(answerOf('quadrilaterals-180')).toBe('C'));
  it('181 — AH = a, HB = 3a − a = 2a, cos α = 2a/4a = 1/2, α = 60 → D', () =>
    expect(answerOf('quadrilaterals-181')).toBe('D'));
  it('182 — EF = (6 + 12)/2 = 9, (6 + 9)/(9 + 12) = 15/21 = 5/7 → C', () =>
    expect(answerOf('quadrilaterals-182')).toBe('C'));
  it('183 — 8h/2 = 24, h = 6, (4 + x)·6/2 = 30, x = 6 → C', () =>
    expect(answerOf('quadrilaterals-183')).toBe('C'));
  it('184 — EN = 18/2 = 9 = 3EM, EM = 3, DC = 6, KL = 18·6/(6 + 18) = 9/2 → C', () =>
    expect(answerOf('quadrilaterals-184')).toBe('C'));
  it('185 — AH = (21 − 11)/2 = 5, h = 12, HB = 16, x² = 144 + 256 = 400, x = 20 → D', () =>
    expect(answerOf('quadrilaterals-185')).toBe('D'));
  it('186 — ADE = KEL = 8, CFB = KFL = 20 − 8 = 12 → C', () =>
    expect(answerOf('quadrilaterals-186')).toBe('C'));
  it('187 — GF = 10 − 6 = 4, AB = 4·3/2 = 6, HC = 6, BC = 12, (6 + 12)·6/2 = 54 → B', () =>
    expect(answerOf('quadrilaterals-187')).toBe('B'));
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
