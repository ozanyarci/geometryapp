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
  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
