import { UNITS, unitQuestions } from '../curriculum';

/**
 * One line per question, stating the arithmetic that reaches the answer. Adding
 * a question means adding a line here, which is the point: the key gets worked
 * out a second time, away from the data file it was typed into.
 */
describe('unit 2 answer key', () => {
  const unit = UNITS.find((u) => u.id === 'triangles')!;
  const checked = new Set<string>();
  const answerOf = (id: string) => {
    checked.add(id);
    return unitQuestions(unit).find((q) => q.id === id)?.answer;
  };

  // Worked through by hand and verified against the source test.
  it('1 — β = 30 + α ve α + 2β = 180, α = 40 → B', () => expect(answerOf('triangles-1')).toBe('B'));
  it('2 — 2x − 70 = x, x = 70 → D', () => expect(answerOf('triangles-2')).toBe('D'));
  it('3 — m(ABC) = 360 − 2·140 = 80, x = 50 → A', () => expect(answerOf('triangles-3')).toBe('A'));
  it('4 — 42 + (58 + α) + α = 180, α = 40 → C', () => expect(answerOf('triangles-4')).toBe('C'));
  it('5 — 3β = 120, m(BAC) = 100 → E', () => expect(answerOf('triangles-5')).toBe('E'));
  it('6 — 150 − 2β = β + 30, β = 40, α = 110 → D', () => expect(answerOf('triangles-6')).toBe('D'));
  it('7 — taban açıları 50, α = 180 − 80 − 35 = 65 → D', () =>
    expect(answerOf('triangles-7')).toBe('D'));
  it('8 — m(BCD) = 72, α = 72 − 60 = 12 → B', () => expect(answerOf('triangles-8')).toBe('B'));
  it('9 — m(C) = 50, x = 90 + 25 = 115 → E', () => expect(answerOf('triangles-9')).toBe('E'));
  it('10 — α = 2θ ve θ = 2α − 45, α = 30 → C', () => expect(answerOf('triangles-10')).toBe('C'));
  it('11 — α = 90 + (A − B)/2 = 105 → A', () => expect(answerOf('triangles-11')).toBe('A'));
  it('12 — m(BAE) = 70, α = (180 − 70)/2 = 55 → D', () =>
    expect(answerOf('triangles-12')).toBe('D'));
  it('13 — |FA| = |FB| = |AE|, α = (180 − 40)/2 = 70 → D', () =>
    expect(answerOf('triangles-13')).toBe('D'));
  it('14 — m(CDE) = 50, α = 50/2 = 25 → B', () => expect(answerOf('triangles-14')).toBe('B'));
  it('15 — m(C) = 50, x = (180 − 50)/2 = 65 → E', () => expect(answerOf('triangles-15')).toBe('E'));
  it('16 — 2(x + 35 + 25) = 180, x = 30 → C', () => expect(answerOf('triangles-16')).toBe('C'));
  it('17 — merkez açı 130, çevre açı 65 → A', () => expect(answerOf('triangles-17')).toBe('A'));
  it('18 — m(ABC) = 40, α = 2·40 = 80 → D', () => expect(answerOf('triangles-18')).toBe('D'));
  it('19 — c sadeleşir, α = 180 − 118 = 62 → E', () => expect(answerOf('triangles-19')).toBe('E'));
  it('20 — m(BAC) = 84, α = 84 − 66 = 18 → B', () => expect(answerOf('triangles-20')).toBe('B'));
  it('21 — 180 − 2β = β − 18, β = 66, α = 96 → D', () =>
    expect(answerOf('triangles-21')).toBe('D'));
  it('22 — x − 30 = 90 − x/2, x = 80 → A', () => expect(answerOf('triangles-22')).toBe('A'));
  it('23 — m(CBA) = 35, α = 90 − 35 = 55 → C', () => expect(answerOf('triangles-23')).toBe('C'));
  it('24 — m(ACB) = 65, m(DCB) = 50, α = 40 → D', () => expect(answerOf('triangles-24')).toBe('D'));
  it('25 — 4x = 90 + x, x = 30 → C', () => expect(answerOf('triangles-25')).toBe('C'));
  it('26 — x = 90 − x, x = 45 → D', () => expect(answerOf('triangles-26')).toBe('D'));
  it('27 — 5x + 10 = 3x + 40, x = 15 → C', () => expect(answerOf('triangles-27')).toBe('C'));
  it('28 — 3(180 − x)/4 = 105, x = 40 → C', () => expect(answerOf('triangles-28')).toBe('C'));
  it('29 — m(BEC) = 90 + x, 180 − 2x = 90 + x, x = 30 → D', () =>
    expect(answerOf('triangles-29')).toBe('D'));
  it('30 — 5x = 180 − 4x, x = 20 → C', () => expect(answerOf('triangles-30')).toBe('C'));
  it('31 — t = 540 − x − y − z, toplam 540 → B', () => expect(answerOf('triangles-31')).toBe('B'));
  it('32 — m(DBC) = 90 − β, x = 90 → C', () => expect(answerOf('triangles-32')).toBe('C'));
  it('33 — m(EBC) = 17, 219 − x/2 = 180, x = 78 → D', () =>
    expect(answerOf('triangles-33')).toBe('D'));
  it('34 — c = 45, a = 55, α = 180 − 110 = 70 → E', () =>
    expect(answerOf('triangles-34')).toBe('E'));
  it('35 — 180 − 4α = 64, α = 29 → A', () => expect(answerOf('triangles-35')).toBe('A'));
  it('36 — m(ABC) = m(ADB) = 68 → B', () => expect(answerOf('triangles-36')).toBe('B'));
  it('37 — m(ACE) = x + (90 − x) = 90 → E', () => expect(answerOf('triangles-37')).toBe('E'));
  it('38 — m(BAC) = 30, m(BCA) = 80, x = 70 → A', () => expect(answerOf('triangles-38')).toBe('A'));
  it('39 — m(BDC) = 110, x + 65 + 70 = 180, x = 45 → B', () =>
    expect(answerOf('triangles-39')).toBe('B'));
  it('40 — x = 90 + 64/2 = 122 → D', () => expect(answerOf('triangles-40')).toBe('D'));
  it('41 — CD, [AB]’nin orta dikmesi, x = 60/2 = 30 → C', () =>
    expect(answerOf('triangles-41')).toBe('C'));
  it('42 — m(ACB) = 52 + 32 = 84, α = 96 → A', () => expect(answerOf('triangles-42')).toBe('A'));
  it('43 — m(ABD) = 40, α = (180 − 40)/2 = 70 → D', () =>
    expect(answerOf('triangles-43')).toBe('D'));
  it('44 — β sadeleşir, α = 180 − 50 − 65 = 65 → B', () =>
    expect(answerOf('triangles-44')).toBe('B'));
  it('45 — a sadeleşir, m(ADB) = 55, m(BAE) = 70 → A', () =>
    expect(answerOf('triangles-45')).toBe('A'));
  it('46 — a + b = 50, m(BAC) = 180 − 100 = 80 → D', () =>
    expect(answerOf('triangles-46')).toBe('D'));
  it('47 — |DA| = |DB| = |DC|, m(DAC) = 10, m(BAC) = 70 → E', () =>
    expect(answerOf('triangles-47')).toBe('E'));
  it('48 — 2·m(BAC) = 216, m(BAC) = 108 → B', () => expect(answerOf('triangles-48')).toBe('B'));
  it('49 — a sadeleşir, x = m(BAC) = 70 → E', () => expect(answerOf('triangles-49')).toBe('E'));
  it('50 — m(BCD) = 70, m(BDC) = 90, m(DBC) = 20 → B', () =>
    expect(answerOf('triangles-50')).toBe('B'));
  it('51 — 130 − (x + y) = 70, x + y = 60 → D', () => expect(answerOf('triangles-51')).toBe('D'));
  it('52 — m(ADC) = 360 − 2·140 = 80 → C', () => expect(answerOf('triangles-52')).toBe('C'));
  it('53 — m(ADC) = 114, α = 33 → A', () => expect(answerOf('triangles-53')).toBe('A'));
  it('54 — m(BAD) = 140, x = 140 − 60 = 80 → B', () => expect(answerOf('triangles-54')).toBe('B'));
  it('55 — 125 = 90 + A/2, A = 70, α = 35 → C', () => expect(answerOf('triangles-55')).toBe('C'));
  it('56 — β sadeleşir, α = 2 · 35 = 70 → C', () => expect(answerOf('triangles-56')).toBe('C'));
  it('57 — α = 2β − 70 ve β + α = 80, β = 50, α = 30 → C', () =>
    expect(answerOf('triangles-57')).toBe('C'));
  it('58 — m(BED) = C/2, C = 2 · 25 = 50 → D', () => expect(answerOf('triangles-58')).toBe('D'));
  it('59 — m(AEB) = 66 = 2α, α = 33 → C', () => expect(answerOf('triangles-59')).toBe('C'));
  it('60 — m(BNC) = 105, m(BAC) = 75, x = 90 − 75 = 15 → C', () =>
    expect(answerOf('triangles-60')).toBe('C'));
  it('61 — m(BAH) = 20, m(BAN) = 74/2 = 37, α = 17 → B', () =>
    expect(answerOf('triangles-61')).toBe('B'));
  it('62 — y sadeleşir, α = 90 + 40/2 = 110 → D', () => expect(answerOf('triangles-62')).toBe('D'));
  it('63 — α = (m(BAC) + m(CDE))/2 = 150/2 = 75 → A', () =>
    expect(answerOf('triangles-63')).toBe('A'));
  it('64 — 3x + 30 = 180, x = 50, α = 180 − 77 − 27 = 76 → C', () =>
    expect(answerOf('triangles-64')).toBe('C'));
  it('65 — m(ABD) = 3x = 66, x = 22 → D', () => expect(answerOf('triangles-65')).toBe('D'));
  it('66 — 64 + 90 + 90 + α = 360, α = 116 → E', () => expect(answerOf('triangles-66')).toBe('E'));
  it('67 — |BE| = |BC|, m(BCE) = (180 − 60)/2 = 60, x = 80 − 60 = 20 → C', () =>
    expect(answerOf('triangles-67')).toBe('C'));
  it('68 — β = 45 − γ/4 ve 2β + γ = 110, γ = 40, α = 180 − 35 − 40 = 105 → C', () =>
    expect(answerOf('triangles-68')).toBe('C'));
  it('69 — m(ACB) + m(DBC) = 80 ve farkları 14, m(ACB) = 47, x = 110 − 47 = 63 → C', () =>
    expect(answerOf('triangles-69')).toBe('C'));
  it('70 — |AH| = |BH| = |HC| = |AD|, 2α + α = 90, α = 30 → E', () =>
    expect(answerOf('triangles-70')).toBe('E'));
  it('71 — 2α = 90 + b/2 ve b = 80 − α, 5α = 260, α = 52 → C', () =>
    expect(answerOf('triangles-71')).toBe('C'));
  it('72 — m(DFE) = 35, x + 35 + 65 = 180, x = 80 → C', () =>
    expect(answerOf('triangles-72')).toBe('C'));
  it('73 — m(ABC) = 90 − x, m(BAC) = 90, m(AFD) = 90 − x = 68, x = 22 → C', () =>
    expect(answerOf('triangles-73')).toBe('C'));
  it('74 — m(DAB) = 90 + x/2, (90 + x/2) + 27 + 28 = 180, x = 70 → C', () =>
    expect(answerOf('triangles-74')).toBe('C'));
  it('75 — m(ADC) = m(DAC) = 50, |CD| = |CA| = |CB|, x = (180 − 140)/2 = 20 → B', () =>
    expect(answerOf('triangles-75')).toBe('B'));
  it('76 — c − b = (70 − 34)/2 = 18, x = 34 + 18 = 52 → D', () =>
    expect(answerOf('triangles-76')).toBe('D'));
  it('77 — |EA| = |EC|, m(FAC) = 25, m(ACF) = 60, x = 180 − 85 = 95 → C', () =>
    expect(answerOf('triangles-77')).toBe('C'));
  it('78 — α = (a + b)/2 = 140/2 = 70 → D', () => expect(answerOf('triangles-78')).toBe('D'));
  it('79 — açıortay = kenarortay, |AB| = |AC|, m(BAC) = 40, α = 180 − 40 − 25 = 115 → C', () =>
    expect(answerOf('triangles-79')).toBe('C'));
  it('80 — A − C < 140 − A − C, C sadeleşir, 2A < 140, A ≤ 69 → D', () =>
    expect(answerOf('triangles-80')).toBe('D'));
  it('81 — α + γ = 80 ve β + 2γ = 125 ve α + β = 55, 3α = 90, α = 30 → A', () =>
    expect(answerOf('triangles-81')).toBe('A'));
  it('82 — m(DBC) = 50, m(BDC) = 105, α = 180 − 105 − 50 = 25 → B', () =>
    expect(answerOf('triangles-82')).toBe('B'));
  it('83 — (180 − 2x) + 36 + (90 − x) = 180, 3x = 126, x = 42 → D', () =>
    expect(answerOf('triangles-83')).toBe('D'));
  it('84 — m(BAD) = (180 − 2x) − x = 24, 3x = 156, x = 52 → B', () =>
    expect(answerOf('triangles-84')).toBe('B'));
  it('85 — AKE üçgeninde m(AKE) = 180 − A − C = B = 80, x = 180 − 80 = 100 → E', () =>
    expect(answerOf('triangles-85')).toBe('E'));
  it('86 — |HD| = |AD| = |DC| = |BH|, m(BHD) = 180 − 50 = 130, α = (180 − 130)/2 = 25 → B', () =>
    expect(answerOf('triangles-86')).toBe('B'));
  it('87 — |DF| = |FE| ⇒ [AF] açıortay ve yükseklik, B = C = 70, 110 − α = 70, α = 40 → C', () =>
    expect(answerOf('triangles-87')).toBe('C'));
  it('88 — m(BEC) = 144, c/2 + 180 − 2c = 144, c = 24, α = 180 − 24 = 156 → D', () =>
    expect(answerOf('triangles-88')).toBe('D'));
  it('89 — |AD| = |AB| = |AE|, m(AED) = (180 − 50)/2 = 65, α = 65 − 60 = 5 → A', () =>
    expect(answerOf('triangles-89')).toBe('A'));
  it('90 — B, E, D, C aynı çember üzerinde, α = m(ECB) = 90 − 70 = 20 → B', () =>
    expect(answerOf('triangles-90')).toBe('B'));
  it('91 — AH² = 100 − 36 = 64, x² = 289 − 64 = 225, x = 15 → A', () =>
    expect(answerOf('triangles-91')).toBe('A'));
  it('92 — b² − c² = 121 − 25 = 96, b − c = 96/24 = 4, c = 10 → C', () =>
    expect(answerOf('triangles-92')).toBe('C'));
  it('93 — BH = √(169 − 144) = 5, HC = √(400 − 144) = 16, BC = 21 → B', () =>
    expect(answerOf('triangles-93')).toBe('B'));
  it('94 — AC² = AB² + 65 ve AB² + AC² = 169, AB² = 52, x = 2√13 → D', () =>
    expect(answerOf('triangles-94')).toBe('D'));
  it('95 — AC = 25, 25x/2 = 15·20/2 = 150, x = 12 → A', () =>
    expect(answerOf('triangles-95')).toBe('A'));
  it('96 — x² + (x+7)² = (x+8)², x² − 2x − 15 = 0, x = 5, BC = 13 → D', () =>
    expect(answerOf('triangles-96')).toBe('D'));
  it('97 — m(BAD) = 45, AB = 8√2/√2 = 8, x = 2·8 = 16 → C', () =>
    expect(answerOf('triangles-97')).toBe('C'));
  it('98 — AC = 2·6 = 12, DC = 6/2 = 3, x = 12 − 3 = 9 → E', () =>
    expect(answerOf('triangles-98')).toBe('E'));
  it('99 — AC² = 64 + 36 = 100, x² = 100 − 25 = 75, x = 5√3 → B', () =>
    expect(answerOf('triangles-99')).toBe('B'));
  it('100 — AH = 6, CH = 8, HB = 12 − 6 = 6, x² = 64 + 36 = 100, x = 10 → C', () =>
    expect(answerOf('triangles-100')).toBe('C'));
  it('101 — (a+2)² + a² = (a+4)², a = 6, BC = 8√5, x² = 100 − 80 = 20, x = 2√5 → B', () =>
    expect(answerOf('triangles-101')).toBe('B'));
  it('102 — (x+2)² = x² + (x−2)², x = 8, BE = 16, AB² = 64 + 256 = 320, AB = 8√5 → E', () =>
    expect(answerOf('triangles-102')).toBe('E'));
  it('103 — AD = √(400 − 144) = 16, DC = 16, AC = 16√2, BC = 28, EC = 14√2, x = 2√2 → B', () =>
    expect(answerOf('triangles-103')).toBe('B'));
  it('104 — BD² = 225 + 400 = 625, x² = 625 − 576 = 49, x = 7 → C', () =>
    expect(answerOf('triangles-104')).toBe('C'));
  it('105 — BH = 6√3, HC = 6, x = 6√3 + 6 → D', () => expect(answerOf('triangles-105')).toBe('D'));
  it('106 — m(BDC) = 90, AC = 16, AB² = 4·16 = 64, BC² = 12·16 = 192, 8 + 8√3 → B', () =>
    expect(answerOf('triangles-106')).toBe('B'));
  it('107 — DB = DC = x, 36 + (8 − x)² = x², 16x = 100, x = 25/4 → C', () =>
    expect(answerOf('triangles-107')).toBe('C'));
  it('108 — BD = 4√2, m(BDC) = 75 − 45 = 30, BC = 2√2, x² = 32 − 8 = 24, x = 2√6 → D', () =>
    expect(answerOf('triangles-108')).toBe('D'));

  it('109 — |DA| = |DC| ⇒ m(ADB) = 30, AD = 4, BD = 2√3, x = 4 + 2√3 → B', () =>
    expect(answerOf('triangles-109')).toBe('B'));
  it('110 — (a+9)² − a² = 289 − 100, a = 6, x² = 100 − 36 = 64, x = 8 → C', () =>
    expect(answerOf('triangles-110')).toBe('C'));
  it('111 — m(BAC) = 90, BD = 2·6 = 12, m(DBC) = m(DCB) = 30 ⇒ DC = DB = 12 → E', () =>
    expect(answerOf('triangles-111')).toBe('E'));
  it('112 — dik açı C’de: hipotenüs 8; dik açı A’da: hipotenüs 2·8 = 16, 16/8 = 2 → D', () =>
    expect(answerOf('triangles-112')).toBe('D'));
  it('113 — yeni uzaklık 12 + 4 = 16, h² = 400 − 256 = 144, h = 12 → B', () =>
    expect(answerOf('triangles-113')).toBe('B'));
  it('114 — AD = BD ⇒ m(BAD) = x, m(BAH) = 90 − x, 2x − 90 = 20, x = 55 → C', () =>
    expect(answerOf('triangles-114')).toBe('C'));

  it('115 — x² + 4x² = 225, x² = 45, x = 3√5, BC = 2x = 6√5 → D', () =>
    expect(answerOf('triangles-115')).toBe('D'));
  it('116 — AB = 3√2/√2 = 3, ABD’de 3 = x·√3/2, x = 6/√3 = 2√3 → B', () =>
    expect(answerOf('triangles-116')).toBe('B'));
  it('117 — a² + (a+3)² = (a+6)², a² − 6a − 27 = 0, a = 9, 9 + 12 + 15 = 36 → C', () =>
    expect(answerOf('triangles-117')).toBe('C'));
  it('118 — AH² = 25 − 9 = 16, x² = 16 + 64 = 80, x = 4√5 → C', () =>
    expect(answerOf('triangles-118')).toBe('C'));
  it('119 — x + 2 = 3x/2, x = 4, AC = 3x = 12 → D', () =>
    expect(answerOf('triangles-119')).toBe('D'));
  it('120 — AB² = 841 − 441 = 400, AD² = 400 − 256 = 144, AD = 12 → C', () =>
    expect(answerOf('triangles-120')).toBe('C'));

  it('121 — (2x)² + (2x+7)² = (2x+9)², x² − 2x − 8 = 0, x = 4, BC = 17 → C', () =>
    expect(answerOf('triangles-121')).toBe('C'));
  it('122 — AC² = 64 + 36 = 100, x² = 100 − 25 = 75, x = 5√3 → D', () =>
    expect(answerOf('triangles-122')).toBe('D'));
  it('123 — x² = BD·DC = 4 · 16 = 64, x = 8 → B', () =>
    expect(answerOf('triangles-123')).toBe('B'));
  it('124 — AM = 12/2 = 6, MD = 6 + 2 = 8, x² = 36 + 64 = 100, x = 10 → D', () =>
    expect(answerOf('triangles-124')).toBe('D'));
  it('125 — a² + 144 = (a+4)², a = 16, BC = 20, çevre 16 + 12 + 20 = 48 → E', () =>
    expect(answerOf('triangles-125')).toBe('E'));
  it('126 — AH² = 100 − 36 = 64, x² = 64 + 225 = 289, x = 17 → A', () =>
    expect(answerOf('triangles-126')).toBe('A'));

  it('127 — (x+2)² + (x−3)² = (x+7)², x² − 16x − 36 = 0, x = 18, BC = 25 → D', () =>
    expect(answerOf('triangles-127')).toBe('D'));
  it('128 — AC² = 49 + 576 = 625, x² = 625 − 400 = 225, x = 15 → C', () =>
    expect(answerOf('triangles-128')).toBe('C'));
  it('129 — BC = 4 + 12 = 16, x² = BH·BC = 4 · 16 = 64, x = 8 → A', () =>
    expect(answerOf('triangles-129')).toBe('A'));
  it('130 — BC = 10, AM = 5, MD = 8 − 5 = 3, x² = 25 + 9 = 34, x = √34 → C', () =>
    expect(answerOf('triangles-130')).toBe('C'));
  it('131 — BH² = 225 − 144 = 81, HC² = 169 − 144 = 25, BC = 9 + 5 = 14 → E', () =>
    expect(answerOf('triangles-131')).toBe('E'));
  it('132 — 81 + a² = (a+1)², a = 40, çevre 9 + 40 + 41 = 90 → D', () =>
    expect(answerOf('triangles-132')).toBe('D'));

  it('133 — 6² = 3·AC, AC = 12, x² = 144 − 36 = 108, x = 6√3 → C', () =>
    expect(answerOf('triangles-133')).toBe('C'));
  it('134 — AB² = 169 − 144 = 25, x² = 25 − 16 = 9, x = 3 → B', () =>
    expect(answerOf('triangles-134')).toBe('B'));
  it('135 — BD² = 169 − 144 = 25, BC = 5 + 11 = 16, AC² = 144 + 256 = 400, 20 − 5 = 15 → D', () =>
    expect(answerOf('triangles-135')).toBe('D'));
  it('136 — AD = DC → A = 2C, 3C = 90, C = 30, BD = 6/2 = 3, BC = 3 + 6 = 9 → D', () =>
    expect(answerOf('triangles-136')).toBe('D'));
  it('137 — AC = 2x, 64 + (2x−4)² = 4x², 80 = 16x, x = 5 → E', () =>
    expect(answerOf('triangles-137')).toBe('E'));
  it('138 — c = 25 − a, 225 + a² = 625 − 50a + a², a = 8 → C', () =>
    expect(answerOf('triangles-138')).toBe('C'));

  it('139 — 64 = AH(AH+12), AH = 4, AC = 16 = 2·AB, α = 30 → C', () =>
    expect(answerOf('triangles-139')).toBe('C'));
  it('140 — BD² = 25 − 16 = 9, x² = 9 − 4 = 5, x = √5 → C', () =>
    expect(answerOf('triangles-140')).toBe('C'));
  it('141 — AE = BE√2 ve DE = EC√2, toplam = √2·BC = 14√2 → D', () =>
    expect(answerOf('triangles-141')).toBe('D'));
  it('142 — x² = 4 + k² ve 36 = x² + k², 2k² = 32, k = 4, x² = 20, x = 2√5 → C', () =>
    expect(answerOf('triangles-142')).toBe('C'));
  it('143 — yollar 16 ve 30, x² = 256 + 900 = 1156, x = 34 → C', () =>
    expect(answerOf('triangles-143')).toBe('C'));
  it('144 — DH = 5√3/2 + 2√3 = 9√3/2, HC = 9/2, BH = 5/2, x = 7 → C', () =>
    expect(answerOf('triangles-144')).toBe('C'));

  it('145 — BC² = 25 − 9 = 16, BC = 4, AB = 1 + 3 = 4, x² = 16 + 16 = 32, x = 4√2 → A', () =>
    expect(answerOf('triangles-145')).toBe('A'));
  it('146 — AB = 10, BD² = 8·10 = 80, x² = 144 − 80 = 64, x = 8 → C', () =>
    expect(answerOf('triangles-146')).toBe('C'));
  it('147 — BD = 2·5 = 10, x = 10/√2 = 5√2 → B', () => expect(answerOf('triangles-147')).toBe('B'));
  it('148 — 169 − a² = 225 − (14−a)², a = 5, x² = 169 − 25 = 144, x = 12 → C', () =>
    expect(answerOf('triangles-148')).toBe('C'));
  it('149 — 36 = a(a+5), a = 4, BC = 9, x² = 5·9 = 45, x = 3√5 → A', () =>
    expect(answerOf('triangles-149')).toBe('A'));
  it('150 — BC = 30, AB = 30/√3 = 10√3, BD = 18/√3 = 6√3, x = 4√3 → C', () =>
    expect(answerOf('triangles-150')).toBe('C'));

  it('151 — AH = BH = 3√2/√2 = 3, HC = 7 − 3 = 4, x² = 9 + 16 = 25, x = 5 → B', () =>
    expect(answerOf('triangles-151')).toBe('B'));
  it('152 — AC = 10, BH² = 2·8 = 16, BH = 4, AB·BC = 10·4 = 40 → E', () =>
    expect(answerOf('triangles-152')).toBe('E'));
  it('153 — B = 60, AH = 4√3/√2 = 2√6, x = 2√6/(√3/2) = 4√2 → C', () =>
    expect(answerOf('triangles-153')).toBe('C'));
  it('154 — C = 30, AH = 6/√2 = 3√2, x = 2·3√2 = 6√2 → B', () =>
    expect(answerOf('triangles-154')).toBe('B'));
  it('155 — BH = 3√3/√3 = 3, C = 30, HC = 3√3·√3 = 9, x = 3 + 9 = 12 → C', () =>
    expect(answerOf('triangles-155')).toBe('C'));
  it('156 — 144 = BH·9, BH = 16, BC = 25, x² = 16·25 = 400, x = 20 → D', () =>
    expect(answerOf('triangles-156')).toBe('D'));

  it('157 — m(HBC) = 60, BH = 10·cos60 = 5, AH = 3 + 5 = 8, sin α = 8/(8√2), α = 45 → C', () =>
    expect(answerOf('triangles-157')).toBe('C'));
  it('158 — BD = 10 = AD, AE² = 100 − 36 = 64, x² = 64 + 16 = 80, x = 4√5 → B', () =>
    expect(answerOf('triangles-158')).toBe('B'));
  it('159 — AD = BD = 25, AC = AD = 25, DH = 7, AH = 24, BH = 32, x² = 1024 + 576 = 1600 → D', () =>
    expect(answerOf('triangles-159')).toBe('D'));
  it('160 — 2α + 2β = 180 → m(DBE) = 90, 36 = 4·DE, DE = 9, HE = 5, x² = 5·9 = 45 → B', () =>
    expect(answerOf('triangles-160')).toBe('B'));
  it('161 — AC = 4√2, m(DAC) = 45 + 45 = 90, m(DCA) = 15 + 45 = 60, x = 4√2·√3 = 4√6 → D', () =>
    expect(answerOf('triangles-161')).toBe('D'));
  it('162 — parçalar 30°, B = 60, C = 30, AH = (a/2·a√3/2)/a = a√3/4, oran √3/4 → B', () =>
    expect(answerOf('triangles-162')).toBe('B'));

  it('163 — 36 = 3m·4m, m² = 3, x² = m·4m = 12, x = 2√3 → C', () =>
    expect(answerOf('triangles-163')).toBe('C'));
  it('164 — 36 + 25 = 16 + x², x² = 45, x = 3√5 → C', () =>
    expect(answerOf('triangles-164')).toBe('C'));
  it('165 — PA = 10√3/3, PB = 10√3/3 + 4√3 = 22√3/3, x = √3·PB = 22 → C', () =>
    expect(answerOf('triangles-165')).toBe('C'));
  it('166 — BH² = 48, BH = 4√3, HC = 4, AH = 12, x = 16 → C', () =>
    expect(answerOf('triangles-166')).toBe('C'));
  it('167 — AC = 2·17 = 34, x² = 1156 − 256 = 900, x = 30 → D', () =>
    expect(answerOf('triangles-167')).toBe('D'));
  it('168 — 121 − 4x² = 25 − x², 3x² = 96, x² = 32, x = 4√2 → B', () =>
    expect(answerOf('triangles-168')).toBe('B'));

  it('169 — orta dikme: DC = DA = 25, x² = 625 − 576 = 49, x = 7 → C', () =>
    expect(answerOf('triangles-169')).toBe('C'));
  it('170 — KC = KA = 25 − x, HC = 15, (25 − x)² = x² + 225, 50x = 400, x = 8 → C', () =>
    expect(answerOf('triangles-170')).toBe('C'));
  it('171 — AF = 20, FD = 9 + 6 = 15, AD² = 400 + 225 = 625, AD = 25 → C', () =>
    expect(answerOf('triangles-171')).toBe('C'));
  it('172 — AH = 20/2 = 10, m(ABH) = 45, x = 10√2 → C', () =>
    expect(answerOf('triangles-172')).toBe('C'));
  it('173 — 16 = 2·EC, EC = 8, 64 = 4·x, x = 16 → D', () =>
    expect(answerOf('triangles-173')).toBe('D'));
  it('174 — BC = 12, BF = 6, DF = 4, 32 = 16 + x²/4, x² = 64, x = 8 → C', () =>
    expect(answerOf('triangles-174')).toBe('C'));

  it('175 — HD² = 169 − 25 = 144, HD = 12, en az |A′B| = √(144 + 81) = 15 → D', () =>
    expect(answerOf('triangles-175')).toBe('D'));
  it('176 — AH = HC = 8, HD = 14 − 8 = 6, x² = 64 + 36 = 100, x = 10 → A', () =>
    expect(answerOf('triangles-176')).toBe('A'));
  it('177 — AF² = 2·18 = 36, DK² = 10·10 = 100, x² = 8² + 4² = 80, x = 4√5 → B', () =>
    expect(answerOf('triangles-177')).toBe('B'));
  it('178 — AH = 5√3·√3 = 15, AC² = 225 + 64 = 289, x² = 289 − 225 = 64, x = 8 → D', () =>
    expect(answerOf('triangles-178')).toBe('D'));
  it('179 — BD² = 5·15 = 75, BD = 5√3, DC/BD = 15/(5√3) = √3, α = 60 → C', () =>
    expect(answerOf('triangles-179')).toBe('C'));
  it('180 — BC = 50, AH = 24, BH = 18, HD = 18 − 8 = 10, x² = 576 + 100 = 676, x = 26 → C', () =>
    expect(answerOf('triangles-180')).toBe('C'));

  it('181 — ADHE dikdörtgen, x² = 4y ve y² = 32x, x³ = 512, x = 8, y = 16, x + y = 24 → C', () =>
    expect(answerOf('triangles-181')).toBe('C'));
  it('182 — DK = 7, AK = 7√3, KC = 23, AC² = 147 + 529 = 676, x² = 676 − 576 = 100, x = 10 → C', () =>
    expect(answerOf('triangles-182')).toBe('C'));
  it('183 — DB = DC = 10, AD = 5√3, x = 10 + 5√3 → C', () =>
    expect(answerOf('triangles-183')).toBe('C'));
  it('184 — m(AMH) = 30, AM = 2·4 = 8, x = 2·8 = 16 → D', () =>
    expect(answerOf('triangles-184')).toBe('D'));
  it('185 — xy = 36, (x + y)² = 97 + 72 = 169, AC = 13, alan = 13·6/2 = 39 → C', () =>
    expect(answerOf('triangles-185')).toBe('C'));
  it('186 — m(APC) = 45, CT = TP = 6, AT = 4, x² = 16 + 36 = 52, x = 2√13 → B', () =>
    expect(answerOf('triangles-186')).toBe('B'));

  it('187 — (x + 4)² − x² = 225 − 169 = 56, 8x = 40, x = 5 → D', () =>
    expect(answerOf('triangles-187')).toBe('D'));
  it('188 — yatay 5 + 7 = 12, düşey 9 − 4 = 5, x² = 144 + 25 = 169, x = 13 → C', () =>
    expect(answerOf('triangles-188')).toBe('C'));
  it('189 — D′ simetriği, AD′² = 16² + (9 + 3)² = 256 + 144 = 400, en kısa 20 → B', () =>
    expect(answerOf('triangles-189')).toBe('B'));
  it('190 — (5 + x)·√3/2 = 6√3, 5 + x = 12, x = 7 → A', () =>
    expect(answerOf('triangles-190')).toBe('A'));
  it('191 — BM = 24/2 = 12, m(BMH) = 2·15 = 30, x = 12/2 = 6 → D', () =>
    expect(answerOf('triangles-191')).toBe('D'));
  it('192 — m(C) = 30, DC = √3·FC = 3·AB − √3·BF, AB − AE = DC/2 = 7, x = 14 → E', () =>
    expect(answerOf('triangles-192')).toBe('E'));

  it('193 — AH = HC = 7, DH = 2, (BH² + 4) + (BH² + 49) = 81, BH² = 14, x² = 18, x = 3√2 → B', () =>
    expect(answerOf('triangles-193')).toBe('B'));
  it('194 — tan B = 12/5, BE − EC = 6·5/12 = 5/2, EC = 15/4, x = 15/4 · 12/5 = 9 → D', () =>
    expect(answerOf('triangles-194')).toBe('D'));
  it('195 — BE = BD/2, AF = AD/2, AD = 3BD, BD = a/4, EC/FC = (7a/8)/(5a/8) = 7/5 → B', () =>
    expect(answerOf('triangles-195')).toBe('B'));
  it('196 — m(ECD) = 30, EC = (5√3/2)/cos30 = 5, m(ACE) = 90, AE² = 144 + 25 = 169 → C', () =>
    expect(answerOf('triangles-196')).toBe('C'));
  it('197 — DF = EF = 8, BD = 2a/3, a√3/3 = 8, a = 8√3, alan = 192√3/4 = 48√3 → E', () =>
    expect(answerOf('triangles-197')).toBe('E'));
  it('198 — 2 + 3 + 4 = h = 9, a√3/2 = 9, a = 6√3 → B', () =>
    expect(answerOf('triangles-198')).toBe('B'));

  it('199 — m(EDC) = 60, m(FDE) = 60, m(FDB) = 60, DF = BF = 10, x = 10·cos60 = 5 → B', () =>
    expect(answerOf('triangles-199')).toBe('B'));
  it('200 — F’nin BC’ye uzaklığı 3√3, A’nınki 7√3, AF ≥ 7√3 − 3√3 = 4√3 → C', () =>
    expect(answerOf('triangles-200')).toBe('C'));
  it('201 — BH = 3/2, DH² = 27/4, 27/2 + (31/2 − a)² + (a − 3/2)² = 196, a = 15, x = 12 → D', () =>
    expect(answerOf('triangles-201')).toBe('D'));
  it('202 — BH = 7/2, HE = 23/2, DE² = 147/4 + 529/4 = 169, AB = 13 + 7 = 20, çevre 60 → E', () =>
    expect(answerOf('triangles-202')).toBe('E'));
  it('203 — AEPD dikdörtgen, AE = 7, BE = PE = 5, AB = 12, toplam 24 → D', () =>
    expect(answerOf('triangles-203')).toBe('D'));
  it('204 — m(ABD) = x, m(BDC) = 2x, m(BCD) = 2x, 5x = 180, x = 36 → A', () =>
    expect(answerOf('triangles-204')).toBe('A'));

  it('205 — çevre = 22·4 = 88, x = 88 − 2·30 = 28 → C', () =>
    expect(answerOf('triangles-205')).toBe('C'));
  it('206 — eşit yükseklikler ⇒ AB = AC = x + 8, (x + 8)² = x² + 144, 16x = 80, x = 5 → A', () =>
    expect(answerOf('triangles-206')).toBe('A'));
  it('207 — h = 4 + 5 + 6 = 15, a = 30/√3 = 10√3, alan = 300√3/4 = 75√3 → B', () =>
    expect(answerOf('triangles-207')).toBe('B'));
  it('208 — a²√3/4 = 48√3, a = 8√3, h = 12, r = h/3 = 4 → D', () =>
    expect(answerOf('triangles-208')).toBe('D'));
  it('209 — h = 13 + 7 − 2 = 18, a = 36/√3 = 12√3 → D', () =>
    expect(answerOf('triangles-209')).toBe('D'));
  it('210 — DG = 8(8 + p)/b, BG = 8|p − 8|/b, BD² = 128(p² + 64)/b² = 128, BD = 8√2 → C', () =>
    expect(answerOf('triangles-210')).toBe('C'));

  it('211 — |BH| = 4, |AH| = 4√3, |HC| = 4 + 7 = 11, x² = 48 + 121 = 169, x = 13 → C', () =>
    expect(answerOf('triangles-211')).toBe('C'));
  it('212 — BDE eşkenar, |BE| = 4, a = 6, 9√3 − 4√3 = 5√3 → C', () =>
    expect(answerOf('triangles-212')).toBe('C'));
  it('213 — |CH| = 5, |AH| = 12, |BH| = √(400 − 144) = 16, x = 16 − 5 = 11 → D', () =>
    expect(answerOf('triangles-213')).toBe('D'));
  it('214 — a = 12, |BG| = |CF|/2 ve |BG| = |AF| = x, 3x = 12, x = 4 → C', () =>
    expect(answerOf('triangles-214')).toBe('C'));
  it('215 — 11 + |DC|/2 = 6 + |DC|, |DC| = 10, |DH|² = 75, x² = 121 + 75 = 196, x = 14 → C', () =>
    expect(answerOf('triangles-215')).toBe('C'));
  it('216 — |HC| = 6, |AH| = 8, Alan(AHC) = 24 = 10x/2, x = 24/5 → B', () =>
    expect(answerOf('triangles-216')).toBe('B'));

  it('217 — m(A) = 30, |AD| = 6·√3/2 = 3√3, x = 6 − 3√3 → B', () =>
    expect(answerOf('triangles-217')).toBe('B'));
  it('218 — a√3/2 = 9, a = 6√3, |AH| = 9, |DH| = 6√3 + 3√3 = 9√3, x² = 81 + 243 = 324, x = 18 → D', () =>
    expect(answerOf('triangles-218')).toBe('D'));
  it('219 — m(DAC) = 30, |DC| = 6, m(DCE) = 60, x = 6·√3/2 = 3√3 → A', () =>
    expect(answerOf('triangles-219')).toBe('A'));
  it('220 — |AM| = |MP| = 5 + 4 = 9, |MB| = |KN| = 3, a = 12, çevre 36 → E', () =>
    expect(answerOf('triangles-220')).toBe('E'));
  it('221 — |EC| = 2√3/√3 = 2, |BE| = 5√3/(√3/2) = 10, a = 12, alan = 144√3/4 = 36√3 → C', () =>
    expect(answerOf('triangles-221')).toBe('C'));
  it('222 — |AE| = 12, |EH| = 9·12/15 = 7,2, |BH| = 5,4, |DH|² = 9,6·5,4 = 51,84, x = 7,2 + 7,2 = 14,4 → A', () =>
    expect(answerOf('triangles-222')).toBe('A'));
  it('223 — |BD| = 4, |BH| = 3, |HD| = 1, |AH| = 3√3, x² = 27 + 1 = 28, x = 2√7 → C', () =>
    expect(answerOf('triangles-223')).toBe('C'));

  it('224 — [DE] orta dikme ⇒ |DB| = |DC| = x, x² = 8² + 6² = 100, x = 10 → D', () =>
    expect(answerOf('triangles-224')).toBe('D'));
  it('225 — |GD| = 6/√2 = 3√2, |BG| = |DF| = 8/√2 = 4√2, x² = 18 + 32 = 50, x = 5√2 → B', () =>
    expect(answerOf('triangles-225')).toBe('B'));
  it('226 — |FC| = 2√3/√3 = 2, |DF| = 6√3 + 2√3 = 8√3 = x√3, x = 8 → A', () =>
    expect(answerOf('triangles-226')).toBe('A'));
  it('227 — m(EBD) = 60, |BH| = 4, |DH| = 4√3, |EH| = 5 − 4 = 1, x² = 1 + 48 = 49, x = 7 → C', () =>
    expect(answerOf('triangles-227')).toBe('C'));
  it('228 — 5a/2 + 7a/2 = a²√3/4, a = 24/√3 = 8√3, çevre 24√3 → C', () =>
    expect(answerOf('triangles-228')).toBe('C'));
  it('229 — |BH| = 6, |DH| = 6 − 2 = 4, m(ADH) = 60, x = 2·4 = 8 → D', () =>
    expect(answerOf('triangles-229')).toBe('D'));

  it('230 — 9a/2 = a²√3/4, a = 18/√3 = 6√3 → D', () => expect(answerOf('triangles-230')).toBe('D'));
  it('231 — 2c + 3c = c·|BH|/2, |BH| = 10, 45°-45°-90°, |AB| = 10√2 → B', () =>
    expect(answerOf('triangles-231')).toBe('B'));
  it('232 — 3 + a = (a + 9)/2, a = 3, |AB| = 6, |BC| = 12, x² = 108, x = 6√3 → C', () =>
    expect(answerOf('triangles-232')).toBe('C'));
  it('233 — |AD| = 6, |DE| = 3√3, (a − 3)² = 196 − 27 = 169, a = 16, x = 16 − 6 = 10 → C', () =>
    expect(answerOf('triangles-233')).toBe('C'));
  it('234 — |AB| = |BD|, m(ABD) = 90 + 60 = 150, α = (180 − 150)/2 = 15 → A', () =>
    expect(answerOf('triangles-234')).toBe('A'));
  it('235 — |AD| = 8, |AE| = 5, |AH| = 2,5, |EH| = 5√3/2, x² = 30,25 + 18,75 = 49, x = 7 → B', () =>
    expect(answerOf('triangles-235')).toBe('B'));

  it('236 — |PD| + |PE| = |BD| + |AD| = |AB| = 13, |BH| = √(169 − 144) = 5, |BC| = 10, alan = 10·12/2 = 60 → C', () =>
    expect(answerOf('triangles-236')).toBe('C'));
  it('237 — alan = 15·9/2 + 15·3/2 = 67,5 + 22,5 = 90 → D', () =>
    expect(answerOf('triangles-237')).toBe('D'));
  it('238 — a²√3/4 = 27√3, a = 6√3, h = 9, 2 + 2 + x = 9, x = 5 → C', () =>
    expect(answerOf('triangles-238')).toBe('C'));
  it('239 — |AD|² = |DH|·|DC|: 108 = (m − 6)(2m − 6), m = 12, x² = 12·18 = 216, x = 6√6 → D', () =>
    expect(answerOf('triangles-239')).toBe('D'));
  it('240 — |BD| = 8, |BH| = 7,5, |HD| = 0,5, x² = 675/4 + 1/4 = 169, x = 13 → C', () =>
    expect(answerOf('triangles-240')).toBe('C'));
  it('241 — |BK| = (20 − 2x)(20 − x)/20, |AK| = x(20 − x)/10, 10/(20 − x) = (20 − 2x)/(20 − x), x = 5 → B', () =>
    expect(answerOf('triangles-241')).toBe('B'));

  it('242 — [AB] ⊥ [DE], |DB| = 20, |AD|/|AB| = 40/24 = 5/3, 25m²/9 = m² + 400, m = 15, çevre = 54 → C', () =>
    expect(answerOf('triangles-242')).toBe('C'));
  it('243 — |HC| = √(40 − 4) = 6, x² = (x − 2)² + 36, 4x = 40, x = 10 → C', () =>
    expect(answerOf('triangles-243')).toBe('C'));
  it('244 — |PD| + |PE| = 2A/a = c/2 → A = ac/4, (c/2)√(a² − c²/4) = ac/4, c² = 3a², (4, 4, 4√3) → C', () =>
    expect(answerOf('triangles-244')).toBe('C'));
  it('245 — m(DBC) = 45, |BH| = h, |HC| = h√3/3, h(3 + √3)/3 = 6 + 2√3, h = 6, x = 6√2 → B', () =>
    expect(answerOf('triangles-245')).toBe('B'));
  it('246 — |BC| = 12, |AH| = |BH| = 6, |HD| = 9 − 6 = 3, x² = 36 + 9 = 45, x = 3√5 → C', () =>
    expect(answerOf('triangles-246')).toBe('C'));
  it('247 — |BH| = |HD| = 4, |AH| = 20/2 = 10, |HC| = 10√3, x = 10√3 − 4 → B', () =>
    expect(answerOf('triangles-247')).toBe('B'));

  it('248 — [DF] orta dikme ⇒ |DA| = |DC| = 13, |AB|² = 169 − 25 = 144, |AC|² = 144 + 64 = 208, |FC| = 4√13/2 = 2√13 → C', () =>
    expect(answerOf('triangles-248')).toBe('C'));
  it('249 — |BH| = 6, |HD| = 6 − 3 = 3, x² − y² = (h² + 36) − (h² + 9) = 27 → D', () =>
    expect(answerOf('triangles-249')).toBe('D'));
  it('250 — |DE| = 2√3/√3 = 2 = |AE|, |FC| = 2, |EC| = 4, |AC| = 6, çevre = 18 → C', () =>
    expect(answerOf('triangles-250')).toBe('C'));
  it('251 — |AB| = |AC| = 12, |BH|² = 144 − 81 = 63, x² = 63 + 9 = 72, x = 6√2 → C', () =>
    expect(answerOf('triangles-251')).toBe('C'));
  it('252 — uzaklıklar 2·sin60 = √3, 6·sin60 = 3√3 ve 4√3; toplam 8√3 = a√3/2, a = 16, alan = 64√3 → D', () =>
    expect(answerOf('triangles-252')).toBe('D'));
  it('253 — M, [FE] orta noktası ⇒ |MA| = |MF| = 6, m(AMC) = 2α = m(ACM), |AC| = 6, alan = 9√3 → C', () =>
    expect(answerOf('triangles-253')).toBe('C'));
  it('254 — DAC ≅ ECB (K.A.K.) ⇒ m(PBC) + m(PCB) = θ + (60 − θ) = 60, x = 120 → C', () =>
    expect(answerOf('triangles-254')).toBe('C'));

  it('255 — m(ADC) = 75, |DH| = |HC| = 6, |AH| = 6·tan75 = 12 + 6√3 = |BH|, x = |BH| − 6 = 6 + 6√3 → C', () =>
    expect(answerOf('triangles-255')).toBe('C'));
  it('256 — |KM| = x/2, |AM| = x√3/2, |AK| = x(√3 − 1)/2 = 7(√3 − 1), x = 14 → C', () =>
    expect(answerOf('triangles-256')).toBe('C'));
  it('257 — AP // BC ⇒ |PD| = |PE| = 3, |AP| = √(25 − 9) = 4 = |HF|, |BH| = 10, |BC| = 20, x = 6 → D', () =>
    expect(answerOf('triangles-257')).toBe('D'));
  it('258 — m(AEB) = 75, m(BED) = 105, |AE|/|ED| = sin45/sin15 = 2√2/(√6 − √2) = √3 + 1 → C', () =>
    expect(answerOf('triangles-258')).toBe('C'));
  it('259 — (a₁ + a₂ + a₃)√3/2 = 12√3 ⇒ a₁ + a₂ + a₃ = 24, çevreler toplamı = 3·24 = 72 → D', () =>
    expect(answerOf('triangles-259')).toBe('D'));
  it('260 — BED eşkenar ⇒ |ED| = |DF| = t, m(FDC) = 30, m(DFC) = 90, t = (a − t)√3/2, a = 4 + 2√3, t = 2√3, alan = t²/2 = 6 → B', () =>
    expect(answerOf('triangles-260')).toBe('B'));

  it('261 — |CE| = 4 + 5 = 9 = |BD| ⇒ |AB| = |AC|, BEF ≅ CDF, |BE| = √(25 − 16) = 3, (x + 3)² = x² + 81, x = 12 → C', () =>
    expect(answerOf('triangles-261')).toBe('C'));
  it('262 — a = x + 5, |AE| = 2x, |BP| = 5/2, |BR| = (3x + 5)/2, |BF| = (3x + 10)/4 = 4, x = 2 → C', () =>
    expect(answerOf('triangles-262')).toBe('C'));
  it('263 — m·x/2 + m·5/2 = m·12/2 ⇒ |KF| + |KL| = |BC| = 12, x = 7 → C', () =>
    expect(answerOf('triangles-263')).toBe('C'));
  it('264 — P ∈ [AC] orta dikmesi, t² + 36 = (10 − t)², t = 16/5; m(BTM) > 90° ⇒ min |PB| = 16/5 → D', () =>
    expect(answerOf('triangles-264')).toBe('D'));
  it('265 — paraleller arası uzaklık 4√3, |CT| = 4√3, |TD| = 8 − 4√3, x = (8 − 4√3) + 4 = 12 − 4√3 → A', () =>
    expect(answerOf('triangles-265')).toBe('A'));
  it('266 — m(ABE) = 30 + 60 = 90, |BE| = 8, x² = 36 + 64 = 100, x = 10 → C', () =>
    expect(answerOf('triangles-266')).toBe('C'));

  it('267 — A(ABC) = 18·4/2 = 36 = 9x/2, x = |AH| = 8 → C', () =>
    expect(answerOf('triangles-267')).toBe('C'));
  it('268 — A(ABDC) = |AD|(|BH| + |HC|)/2 = 4·14/2 = 28 → D', () =>
    expect(answerOf('triangles-268')).toBe('D'));
  it('269 — m² + h² = 225 ve (14 − m)² + h² = 169, m = 9, h = 12, A(ADC) = 6·12/2 = 36 → A', () =>
    expect(answerOf('triangles-269')).toBe('A'));
  it('270 — 36 = |HC|(9 + |HC|), |HC| = 3, |BC| = 12, |AH| = √27 = 3√3, alan = 12·3√3/2 = 18√3 → E', () =>
    expect(answerOf('triangles-270')).toBe('E'));
  it('271 — m(ACB) = 60, |BC| = 8√3/√3 = 8, A(ABC) = 32√3, A(BCD) = 16√3, toplam 48√3 → B', () =>
    expect(answerOf('triangles-271')).toBe('B'));
  it('272 — A(ACD) = 18·2/3 = 12, [AD] üç eş parça ⇒ A(CEF) = 12/3 = 4 → C', () =>
    expect(answerOf('triangles-272')).toBe('C'));

  it('273 — A(ABD) = 48/4 = 12, |AE|/|AD| = 2/3, A(ABE) = 12·2/3 = 8 → B', () =>
    expect(answerOf('triangles-273')).toBe('B'));
  it('274 — |CH| = |AC|/2 = 5, alan = 12·5/2 = 30 → D', () =>
    expect(answerOf('triangles-274')).toBe('D'));
  it('275 — |AD|/|AB| = 4/12 = 1/3, alan oranı 1/9, A(ABC) = 9·12 = 108 → E', () =>
    expect(answerOf('triangles-275')).toBe('E'));
  it('276 — |BC| = 15, alan = 9·12/2 = 54 = 15x/2, x = 108/15 = 36/5 → A', () =>
    expect(answerOf('triangles-276')).toBe('A'));
  it('277 — |AE|/|AD| = 3/4, A(ABD) = 12·4/3 = 16, kenarortay ⇒ A(ABC) = 32 → C', () =>
    expect(answerOf('triangles-277')).toBe('C'));
  it('278 — m(ABH) = 30, |AH| = 8/2 = 4, alan = 10·4/2 = 20 → D', () =>
    expect(answerOf('triangles-278')).toBe('D'));

  it('279 — |AH| = 10·sin45 = 5√2, A(ADC) = 6·5√2/2 = 15√2 → C', () =>
    expect(answerOf('triangles-279')).toBe('C'));
  it('280 — m(BAC) = 90, A(ABC) = 9·6√3/2 = 27√3; |DK| = d/2, |DL| = d√3/2 ⇒ A(ABD) = 9d/4, A(ADC) = 9d/2, A(ABD) = 27√3/3 = 9√3 → B', () =>
    expect(answerOf('triangles-280')).toBe('B'));
  it('281 — A(ABD) = |AD|·6/2 = 3|BD|, A(ADC) = A(ABD)·|DC|/|BD| = 3|BD|·8/|BD| = 24 → D', () =>
    expect(answerOf('triangles-281')).toBe('D'));
  it('282 — A(BNC) = 8·10/2 = 40, |BE|/|BC| = 3/4, A(BEN) = 40·3/4 = 30 → D', () =>
    expect(answerOf('triangles-282')).toBe('D'));
  it('283 — [AD] // [EC] ⇒ A(EAD) = A(CAD) = 7·6/2 = 21 → C', () =>
    expect(answerOf('triangles-283')).toBe('C'));
  it('284 — |HC| = h, A(DHC) = (9h/2)/2 = 9h/4, |EC| = 3h/4, A(EBC) = (3h/4)·4/2 = 3h/2, oran = 3/2 → E', () =>
    expect(answerOf('triangles-284')).toBe('E'));

  it('285 — |BE| = |DE| = 6, h = 108·2/18 = 12, A(ABE) = 36, A(BDE) = 18, fark 18 → D', () =>
    expect(answerOf('triangles-285')).toBe('D'));
  it('286 — |HC| = 6, |BC| = 12, h = 8·15/10 = 12, A(ABC) = 72, A(DHC) = 24, fark 48 → C', () =>
    expect(answerOf('triangles-286')).toBe('C'));
  it('287 — |AK| = |AL| = 10, m(KAL) = 2·75 = 150, yükseklik 10·sin30 = 5, alan = 10·5/2 = 25 → B', () =>
    expect(answerOf('triangles-287')).toBe('B'));
  it('288 — |AC| = 10, benzerlik oranı 15/10, |DF| = 6·3/2 = 9, alan = 6·9/2 = 27 → E', () =>
    expect(answerOf('triangles-288')).toBe('E'));
  it('289 — |AC| = 15, m(DAB) = m(ACB), oran 25/15, |DF| = 12·5/3 = 20, alan = 12·20/2 = 120 → A', () =>
    expect(answerOf('triangles-289')).toBe('A'));
  it('290 — m(EDC) = 180 − α − β = 30, |EF| = 4/2 = 2, alan = 10·2/2 = 10 → C', () =>
    expect(answerOf('triangles-290')).toBe('C'));

  it('291 — A(AEC) = 4S/9, A(DEC) = (1/2)(4S/9) = 2S/9, S₂ = 7S/9, oran = 2/7 → B', () =>
    expect(answerOf('triangles-291')).toBe('B'));
  it('292 — A(ABD)/A(ABC) = 2/8 = 1/4, A(ABE)/A(ABD) = 2/5, çarpım = 1/10 → D', () =>
    expect(answerOf('triangles-292')).toBe('D'));
  it('293 — |AD|/|AC| = 2/7, A(ABC) = 24·7/2 = 84 → C', () =>
    expect(answerOf('triangles-293')).toBe('C'));
  it('294 — A(ABC) = 8·9/2 = 36, [BD] kenarortay ⇒ A(DBC) = 36/2 = 18 → A', () =>
    expect(answerOf('triangles-294')).toBe('A'));
  it('295 — |CD|/|CA| = 3/5, h = 6·5/3 = 10, A(ABC) = 9·10/2 = 45 → E', () =>
    expect(answerOf('triangles-295')).toBe('E'));
  it('296 — |AD| = √(169 − 25) = 12, |DC| = √(400 − 144) = 16, alan = 16·12/2 = 96 → D', () =>
    expect(answerOf('triangles-296')).toBe('D'));

  it('297 — |AD| = √(625 − 400) = 15, h = 15·20/25 = 12, |BC| = 30, alan = 30·12/2 = 180 → D', () =>
    expect(answerOf('triangles-297')).toBe('D'));
  it('298 — A(ABE) = 12·5/2 = 30, A(EBC) = 9·4/2 = 18, toplam 48 → B', () =>
    expect(answerOf('triangles-298')).toBe('B'));
  it('299 — |AH| = 9/2 = 4,5, alan = 12·4,5/2 = 27 → C', () =>
    expect(answerOf('triangles-299')).toBe('C'));
  it('300 — |BC| = √(81 + 144) = 15, h = 9·12/15 = 7,2, alan = 5·7,2/2 = 18 → E', () =>
    expect(answerOf('triangles-300')).toBe('E'));
  it('301 — |AH| = √(225 − 144) = 9, A(ABC) = 15·4/2 = 30, |BC| = 60/9 = 20/3, |HC| = 12 − 20/3 = 16/3, alan = (16/3)·9/2 = 24 → A', () =>
    expect(answerOf('triangles-301')).toBe('A'));
  it('302 — A(DBC) = 7·16/2 = 56, [DE] kenarortay ⇒ A(DEC) = 56/2 = 28 → C', () =>
    expect(answerOf('triangles-302')).toBe('C'));

  it('303 — [DE]∥[BC] ⇒ |AB|·|AE| = 6·14 = 84, A(ABE) = 84/2 = 42 → C', () =>
    expect(answerOf('triangles-303')).toBe('C'));
  it('304 — A(ADE)/A(ABC) = (2/5)·(3/4) = 3/10, dörtgen 7/10, A(ABC) = 35·10/7 = 50 → E', () =>
    expect(answerOf('triangles-304')).toBe('E'));
  it('305 — |AB| = √(225 − 144) = 9, A(ABC) = 12·9/2 = 54, oran (9/12)·(10/15) = 1/2, alan 27 → B', () =>
    expect(answerOf('triangles-305')).toBe('B'));
  it('306 — 6² = 3·|EC| ⇒ |EC| = 12, A(DEC) = 12·5/2 = 30 → D', () =>
    expect(answerOf('triangles-306')).toBe('D'));
  it('307 — h = 10√2·(√2/2) = 10, A(ABC) = 9·10/2 = 45, |DC|/|AC| = 2/5, alan = 18 → A', () =>
    expect(answerOf('triangles-307')).toBe('A'));
  it('308 — [AB]∥[DC] ⇒ A(DCB) = A(DCA) = |AD|·|EC|/2 = 8·5/2 = 20 → C', () =>
    expect(answerOf('triangles-308')).toBe('C'));

  it('309 — |AD|=|DC| ⇒ m(ADB) = 2γ, 180 − 4γ = 2γ ⇒ γ = 30, |AC| = 6√3, alan = 6·6√3/2 = 18√3 → C', () =>
    expect(answerOf('triangles-309')).toBe('C'));
  it('310 — |DE| = √(8·2) = 4, A(BDC) = 10·4/2 = 20, |AD|/|DC| = 1/2 ⇒ A(ABD) = 10, toplam 30 → C', () =>
    expect(answerOf('triangles-310')).toBe('C'));
  it('311 — ortak taban [BC], h/k = |AE|/|DE| = 14/4 = 7/2 → C', () =>
    expect(answerOf('triangles-311')).toBe('C'));
  it('312 — A(ADE) = √3(a − 3)²/4 = 4√3 ⇒ (a − 3)² = 16, a = 7 → C', () =>
    expect(answerOf('triangles-312')).toBe('C'));
  it('313 — A(BFD)/A(BAC) = (10/15)·(12/6) = 4/3, alan = 30·4/3 = 40 → D', () =>
    expect(answerOf('triangles-313')).toBe('D'));
  it('314 — h = 12/2 = 6, A(ADC) = 5·6/2 = 15 → B', () =>
    expect(answerOf('triangles-314')).toBe('B'));

  it('315 — a² = b² + c², (b − c)² = a² − 2bc = a² − 84 ⇒ bc = 42, alan = 42/2 = 21 → A', () =>
    expect(answerOf('triangles-315')).toBe('A'));
  it('316 — A(ABD) = 3S/4, D’nin yüksekliği h/4 ⇒ A(DCE) = |BC|·(h/4)/2 = S/4, oran 3 → C', () =>
    expect(answerOf('triangles-316')).toBe('C'));
  it('317 — |AC| = √(225 + 64) = 17, x + r = 15, y + r = 8, x + y = 17 ⇒ r = 3, |AE| = x = 12 → C', () =>
    expect(answerOf('triangles-317')).toBe('C'));
  it('318 — |AB|² = 12, |BC|² = 48, |AC|² = 48 − 12 = 36, A(DAC) = 36√3/4 = 9√3 → D', () =>
    expect(answerOf('triangles-318')).toBe('D'));
  it('319 — A(DEC)/A(ABC) = (|CD|/|CA|)·(|CF|/|CD|) = |CF|/|CA| = 1/3, alan = 45/3 = 15 → C', () =>
    expect(answerOf('triangles-319')).toBe('C'));
  it('320 — |AH| = 4√3·(√3/2) = 6, |BC| = 9 + 5 = 14, alan = 14·6/2 = 42 → C', () =>
    expect(answerOf('triangles-320')).toBe('C'));

  it('321 — m(HBC) = 180 − 135 = 45, |CH| = 4√2·(√2/2) = 4, A(AEC) = 5·4/2 = 10 → B', () =>
    expect(answerOf('triangles-321')).toBe('B'));
  it('322 — 54 = u·3 ⇒ u = 18, a + b − c = 2r = 6, 2c = 36 − 6 = 30, c = 15 → C', () =>
    expect(answerOf('triangles-322')).toBe('C'));
  it('323 — h = 5·12/|BC|, |EF| = |BC|/3, alan = (|BC|/3)·(60/|BC|)/2 = 10 → D', () =>
    expect(answerOf('triangles-323')).toBe('D'));
  it('324 — m(ABD) = 60, |AD| = 2√3·√3 = 6, alan = 2·(2√3·6/2) = 12√3 → C', () =>
    expect(answerOf('triangles-324')).toBe('C'));
  it('325 — A(ABD) = 6·(5/2) = 15, A(ADC) = 25 − 15 = 10, |BD|/|DC| = 15/10 = 3/2 → B', () =>
    expect(answerOf('triangles-325')).toBe('B'));
  it('326 — |FK|² = 3·9 = 27 ⇒ |FK| = 3√3, |AD| = |DE| = 12, |DB| = 6, |FC| = 18 − 6 = 12, alan = 12·3√3/2 = 18√3 → E', () =>
    expect(answerOf('triangles-326')).toBe('E'));

  it('327 — ABD ~ ACE (dik açı + α), oran |AB|/|AC| = 1/2, alan oranı (1/2)² = 1/4 → C', () =>
    expect(answerOf('triangles-327')).toBe('C'));
  it('328 — a² = 324 ⇒ a = 18, (18 − k)/2 = k ⇒ k = 6, |DH| = 12√3, |EH| = 6√3, |DE| = 6√3, |MH| = 3, alan = 6√3·3/2 = 9√3 → C', () =>
    expect(answerOf('triangles-328')).toBe('C'));
  it('329 — alan = 12h/2 ≤ 12·5/2 = 30, eşitlik m(BAC) = 90° ⇒ |BC| = √(25 + 144) = 13 → B', () =>
    expect(answerOf('triangles-329')).toBe('B'));
  it('330 — m(BKC) = 90 + 90/2 = 135, |CH| = 4·(√2/2) = 2√2, alan = 5·2√2/2 = 5√2 → B', () =>
    expect(answerOf('triangles-330')).toBe('B'));
  it('331 — m(ADH) = 60 ⇒ |DH| = 1, |AH| = √3; 19 = 3 + |BH|² ⇒ |BH| = 4, |BD| = 3, |BC| = 6, alan = 6√3/2 = 3√3 → B', () =>
    expect(answerOf('triangles-331')).toBe('B'));
  it('332 — |AC| = 8, |BC| = 10, DEC ~ BAC oran 1/2 ⇒ |DE| = 3, |EC| = 4, |BE| = 6, alan = 6·3/2 = 9 → C', () =>
    expect(answerOf('triangles-332')).toBe('C'));

  it('333 — alanlar r/2 ortak çarpanıyla kenarlarla orantılı: 5 : 12 : 13, 90·13/30 = 39 → D', () =>
    expect(answerOf('triangles-333')).toBe('D'));
  it('334 — |BC| = 5·tan15 + 5/tan15 = 5(2 − √3) + 5(2 + √3) = 20, alan = 20·5/2 = 50 → C', () =>
    expect(answerOf('triangles-334')).toBe('C'));
  it('335 — E’de ortak/ters açı: AED = 6sinθ, AEF = 12sinθ, EFC = 24sinθ, ABF = (3/9)·36sinθ = 12sinθ, oran 6/24 = 1/4 → B', () =>
    expect(answerOf('triangles-335')).toBe('B'));
  it('336 — S₁ = 15sinθ, S₂ = 45sinθ, 30sinθ = 24 ⇒ sinθ = 4/5, S₂ = 36 → C', () =>
    expect(answerOf('triangles-336')).toBe('C'));
  it('337 — |AD| = |BD| = |DC| ⇒ m(A) = 90, |AC| = 16, |AM| = 8, |ME| = 2, |DM|² = 16 ⇒ |AB| = 8, alan = 8·16/2 = 64 → D', () =>
    expect(answerOf('triangles-337')).toBe('D'));
  it('338 — |DE| = |BE| = |EC| = 5 ⇒ m(BDC) = 90, |BD| = 8, A(BDC) = 24, A(ABD) = 24·4/6 = 16, A(BDE) = 12, toplam 28 → D', () =>
    expect(answerOf('triangles-338')).toBe('D'));

  it('339 — |AF| = √(100 − 36) = 8, |AD| = |DB| ⇒ h = |AF| = 8, A(BCE) = 3·8/2 = 12 → A', () =>
    expect(answerOf('triangles-339')).toBe('A'));
  it('340 — |BC| = √(625 − 225) = 20, |DH| = 225/25 = 9, [BH] ∥ [AD] ⇒ alan = 16·9/2 = 72 → D', () =>
    expect(answerOf('triangles-340')).toBe('D'));
  it('341 — A(ADC) = 8·5/2 = 20, A(ABC) = 50 − 20 = 30 = 12·|CH|/2 ⇒ |CH| = 5 → B', () =>
    expect(answerOf('triangles-341')).toBe('B'));
  it('342 — 2α + 2β = 180 ⇒ m(FBD) = 90, |FD| = √(36 + 64) = 10, |AF| = 5, A(FBD) = 24, alan = 24/2 = 12 → C', () =>
    expect(answerOf('triangles-342')).toBe('C'));
  it('343 — her açı 360/3 = 120, alan = (2·4 + 4·8 + 2·8)·sin120/2 = 56·(√3/2)/2 = 14√3 → D', () =>
    expect(answerOf('triangles-343')).toBe('D'));
  it('344 — m(ACD) = 30, A(ADC) = 8·8·(1/2)/2 = 16, A(ABC) = 4·16 = 64, A(DBC) = 48, alan = 48/3 = 16 → B', () =>
    expect(answerOf('triangles-344')).toBe('B'));

  it('345 — |BC| = √(100 − 64) = 6, sin(BAC) = 6/10 = 3/5 = sin(ACD), alan = 10·8·(3/5)/2 = 24 → C', () =>
    expect(answerOf('triangles-345')).toBe('C'));
  it('346 — 49 = c² + 25 − 5c ⇒ c = |AB| = |DC| = 8, h = 8·(√3/2) = 4√3, alan = 8·4√3/2 = 16√3 → D', () =>
    expect(answerOf('triangles-346')).toBe('D'));
  it('347 — |AB| = 2·5 = 10, |AC| = 2·12 = 24, [BC] çap ⇒ m(A) = 90, alan = 10·24/2 = 120 → D', () =>
    expect(answerOf('triangles-347')).toBe('D'));
  it('348 — x² = |AB|² + 16, y² = |AB|² + 100, 2|AB|² + 116 = 244 ⇒ |AB| = 8, alan = 6·8/2 = 24 → C', () =>
    expect(answerOf('triangles-348')).toBe('C'));
  it('349 — diklik merkezi köşede ⇒ dik üçgen, hipotenüs 12, h ≤ 6, alan = 12·6/2 = 36 → C', () =>
    expect(answerOf('triangles-349')).toBe('C'));
  it('350 — ortak açı θ: 10(8 + x) = 15·8 = 120 ⇒ 8 + x = 12 ⇒ x = 4 → C', () =>
    expect(answerOf('triangles-350')).toBe('C'));

  it('351 — h² = m(12 − m), 196 = (4 + m)² + m(12 − m) = 16 + 20m ⇒ m = 9, h = 3√3, alan = 16·3√3/2 = 24√3 → C', () =>
    expect(answerOf('triangles-351')).toBe('C'));
  it('352 — |BE|/|ED| = 24/12 = 2, |AE|/|AF| = |ED|/(|BD|/2) = 2/3, A(ABF) = 24·3/2 = 36, alan = 2·36 = 72 → C', () =>
    expect(answerOf('triangles-352')).toBe('C'));
  it('353 — A(ABC)/A(ACD) = 1/2, A(ACD) = 45·2/3 = 30 = |AC|·10·(1/2)/2 ⇒ |AC| = 12 → C', () =>
    expect(answerOf('triangles-353')).toBe('C'));
  it('354 — köşeler (2·4 + 4·3 + 3·2)/36 = 26/36, orta 10/36, oran 10/26 = 5/13 → C', () =>
    expect(answerOf('triangles-354')).toBe('C'));
  it('355 — α + γ = 180 − 120 = 60, m(B) = 180 − 120 = 60, alan = 8·5·(√3/2)/2 = 10√3 → B', () =>
    expect(answerOf('triangles-355')).toBe('B'));
  it('356 — |BE| = √(100 − 64) = 6, sin C = 6/10 = 3/5, 2R = 12/(3/5) = 20 ⇒ R = 10 → D', () =>
    expect(answerOf('triangles-356')).toBe('D'));

  it('357 — A(ADC) = 4 · 3 = 12 (|DE|/|DA| = 1/4), A(ABC) = 3 · 12 = 36 → D', () =>
    expect(answerOf('triangles-357')).toBe('D'));
  it('358 — A(ABC) = 8 · 6/2 = 24, A(ACD) = 24 · (1/3) = 8, toplam = 32 → C', () =>
    expect(answerOf('triangles-358')).toBe('C'));
  it('359 — |BD|² = 196 + 72 − 168 = 100, A(ABD) = 14 · 6/2 = 42, 6² + 8² = 10² ⇒ A(BCD) = 24, toplam = 66 → C', () =>
    expect(answerOf('triangles-359')).toBe('C'));
  it('360 — m(DBF) = m(BAD) = α, |AB|·sinα = 8·sin60 = 4√3, alan = 8 · 4√3/2 = 16√3 → C', () =>
    expect(answerOf('triangles-360')).toBe('C'));
  it('361 — |BD|/|DC| = 5/20 = 1/4, |AD| = 2k, k² = 5, |AB|² = k · 5k = 25 ⇒ |AB| = 5 → C', () =>
    expect(answerOf('triangles-361')).toBe('C'));
  it('362 — |DE| = |BC|/2 = m, |AD| = m/3, alan = |AD|·m = m²/3 = 27 ⇒ m = 9, |BC| = 18 → D', () =>
    expect(answerOf('triangles-362')).toBe('D'));

  it('363 — |AB|/|AC| = 3/5 ⇒ (3k)² + 8² = (5k)², k = 2, x = √(6² + 3²) = 3√5 → C', () =>
    expect(answerOf('triangles-363')).toBe('C'));
  it('364 — |BD|/|CD| = 8/5 ⇒ |BD| = 16, x = 16 − 10 = 6 → B', () =>
    expect(answerOf('triangles-364')).toBe('B'));
  it('365 — |AD| = 2·36/12 = 6, |DE| = |AD| = 6, A(DEC) = 8·6/2 = 24 → D', () =>
    expect(answerOf('triangles-365')).toBe('D'));
  it('366 — |BD| = 6·10/18 = 10/3, |AI|/|ID| = |AB|/|BD| = 10/(10/3) = 3 → E', () =>
    expect(answerOf('triangles-366')).toBe('E'));
  it('367 — |BD| = 6, |DC| = 4, x² = 12·8 − 6·4 = 72 ⇒ x = 6√2 → C', () =>
    expect(answerOf('triangles-367')).toBe('C'));
  it('368 — |AD| = √(81 + 144) = 15, A(ADC) = 10·9/2 = 45, |AE|/|EC| = 15/10 ⇒ A(DEC) = 45·2/5 = 18 → B', () =>
    expect(answerOf('triangles-368')).toBe('B'));

  it('369 — |BN|/|NC| = |AB|/|AC| = sin60/sin45 = √3/√2 = √6/2 → B', () =>
    expect(answerOf('triangles-369')).toBe('B'));
  it('370 — |DE| = 9, 9(a − c)/2 = 54 ⇒ a − c = 12; 12(a + c) = (9 + x)² ve a + c = 12(x + 9)/(x − 9) ⇒ x² = 225, x = 15 → D', () =>
    expect(answerOf('triangles-370')).toBe('D'));
  it('371 — |AC| = 10, |CE| = |CB| = 8 ⇒ |AE| = 6 ve [AE] ⊥ [CE], |ED| = 3, |AD| = √(36 + 9) = 3√5 → A', () =>
    expect(answerOf('triangles-371')).toBe('A'));
  it('372 — |EC| = 6·5/3 = 10, |BC| = 16; |DB|/(|DB| + 16) = 3/5 ⇒ |DB| = 24, |DC| = 40 → C', () =>
    expect(answerOf('triangles-372')).toBe('C'));
  it('373 — |AD|/|DC| = 24/12 = 2 = |AB|/|BC|, |AB|·|BC| = 2·36 = 72 ⇒ 2|BC|² = 72, |BC| = 6 → E', () =>
    expect(answerOf('triangles-373')).toBe('E'));
  it('374 — (6 − 4) + (|AC| − |AB|) = 5 ⇒ |AC| − |AB| = 3, |AC| = 3|AB|/2 ⇒ |AB| = 6, |AC| = 9, Ç = 6 + 9 + 10 = 25 → C', () =>
    expect(answerOf('triangles-374')).toBe('C'));

  it('375 — Ç = 2r + 2|BC| ⇒ 40 = 6 + 2|BC|, |BC| = 17 → C', () =>
    expect(answerOf('triangles-375')).toBe('C'));
  it('376 — |AH| = 6, |BD|/|DH| = 10/6 ⇒ |DH| = 3, |AD| = 3√5, 3/x = 3√5/√(36 + x²) ⇒ x = 3 → B', () =>
    expect(answerOf('triangles-376')).toBe('B'));
  it('377 — |AB| = 8·3/4 = 6, x/(6 − x) = 8/7 ⇒ 15x = 48, x = 16/5 → B', () =>
    expect(answerOf('triangles-377')).toBe('B'));
  it('378 — |AE|/|AC| = 2/5 ⇒ h(E) = 3|AH|/5; |BE|/|BD| = 4/5 ⇒ h(E) = 4|DK|/5, |AH|/|DK| = 4/3 → D', () =>
    expect(answerOf('triangles-378')).toBe('D'));
  it('379 — m(BAD) = m(BCA) ⇒ ABD ~ CBA, 12/|BC| = 8/12, |BC| = 18, x = 18 − 8 = 10 → C', () =>
    expect(answerOf('triangles-379')).toBe('C'));
  it('380 — m(ABC) = m(ACB) ⇒ |AB| = |AC| = 10, |AD| = 4, oran = 4/10 = 2/5 → D', () =>
    expect(answerOf('triangles-380')).toBe('D'));

  it('381 — 5/6 = x/9 ⇒ 6x = 45, x = 15/2 → D', () => expect(answerOf('triangles-381')).toBe('D'));
  it('382 — 3/6 = x/(x + 5) ⇒ 2x = x + 5, x = 5 → C', () =>
    expect(answerOf('triangles-382')).toBe('C'));
  it('383 — [AH] orta dikme ⇒ |AC| = |AB| = 6, |EC| = 2, 4/2 = 6/|BC| ⇒ |BC| = 3 → A', () =>
    expect(answerOf('triangles-383')).toBe('A'));
  it('384 — |CA| = 2|CB|, 4|CB|² = 36 + |CB|² ⇒ |CB|² = 12, x = √(4 + 12) = 4 → B', () =>
    expect(answerOf('triangles-384')).toBe('B'));
  it('385 — |BD| = 20, |BH| = 144/20, |HD| = 256/20 ⇒ 9/x = 9/16, x = 16 → D', () =>
    expect(answerOf('triangles-385')).toBe('D'));
  it('386 — (5 + x)/x = 9/6 ⇒ 10 + 2x = 3x, x = 10 → C', () =>
    expect(answerOf('triangles-386')).toBe('C'));

  it('387 — 4/6 = |CA|/|CB| = 2/3, 10 + 2k + 3k = 40 ⇒ k = 6, |BC| = 18 → D', () =>
    expect(answerOf('triangles-387')).toBe('D'));
  it('388 — |DB|/|DC| = 3/2 ⇒ |CD| = 2|BC|, A(ADC) = 2·6 = 12 → C', () =>
    expect(answerOf('triangles-388')).toBe('C'));
  it('389 — 24/18 = 16/x ⇒ 4x = 48, x = 12 → D', () => expect(answerOf('triangles-389')).toBe('D'));
  it('390 — |BD| = 15, |BE|/|BC| = 3/5, A(DBC) = 10·12/2 = 60, A(DBE) = 36 → B', () =>
    expect(answerOf('triangles-390')).toBe('B'));
  it('391 — (20 + x)/12 = 8/x ⇒ x² + 20x − 96 = 0, x = 4 → B', () =>
    expect(answerOf('triangles-391')).toBe('B'));
  it('392 — |BD| = 15, |BE| = 9, |AB| = 225/9 = 25, |AD| = 20, alan = 30·20/2 = 300 → D', () =>
    expect(answerOf('triangles-392')).toBe('D'));

  it('393 — |AC| = √(81 + 144) = 15, x/(x + 12) = 9/15 ⇒ 5x = 3x + 36, x = 18 → C', () =>
    expect(answerOf('triangles-393')).toBe('C'));
  it('394 — 6/4 = |AB|/8 ⇒ |AB| = 12, |BD|² = 12·8 − 6·4 = 72, x = 6√2 → C', () =>
    expect(answerOf('triangles-394')).toBe('C'));
  it('395 — |AC| = 2x, |BD|/|DC| = 1/2 ⇒ |BD| = 4, |BC| = 12 = x√3, x = 4√3 → C', () =>
    expect(answerOf('triangles-395')).toBe('C'));
  it('396 — |AB| = √(400 − 256) = 12, y/(y + 16) = 3/5 ⇒ y = 24, x = √(576 + 144) = 12√5 → D', () =>
    expect(answerOf('triangles-396')).toBe('D'));
  it('397 — |BD|/|DC| = 9/6 = 3/2, A(ADC) = 2·15/3 = 10, A(ABC) = 25 → D', () =>
    expect(answerOf('triangles-397')).toBe('D'));
  it('398 — 6/3 = |AB|/4 ⇒ |AB| = 8, |BF|² = 8·4 − 6·3 = 14, x = √14 → C', () =>
    expect(answerOf('triangles-398')).toBe('C'));

  it('399 — |BM| = 12, |IM| = √(160 − 144) = 4, (h − 4)/4 = |AB|/12 ve |AB|² = h² + 144 ⇒ h = 9, |AB| = 15, Ç = 54 → C', () =>
    expect(answerOf('triangles-399')).toBe('C'));
  it('400 — |AC| = 25, r = (15 + 20 − 25)/2 = 5, |AP| = 10, |AI| = √(100 + 25) = 5√5 → C', () =>
    expect(answerOf('triangles-400')).toBe('C'));
  it('401 — |BD| = 10, |BH| = |BA| = 8, |DH| = |DA| = 6, |HC| = 15, x = √(64 + 225) = 17 → C', () =>
    expect(answerOf('triangles-401')).toBe('C'));
  it('402 — m(B) = 60, m(ABE) = 30, m(AEB) = 75 ⇒ |BE| = |AB| = 10, x = 10·sin30/sin45 = 5√2 → B', () =>
    expect(answerOf('triangles-402')).toBe('B'));
  it('403 — |EH| = |ED| = 12, |HC| = √(169 − 144) = 5, |HF| = 16, x = √(144 + 256) = 20 → C', () =>
    expect(answerOf('triangles-403')).toBe('C'));
  it('404 — A(EDC)/A(BEC) = b/(a + c) = 5/8, |AB|/|AD| = (a + c)/b = 8/5 → A', () =>
    expect(answerOf('triangles-404')).toBe('A'));

  it('405 — |DC| = 60, |AB|/|AC| = 45/60 = 3/4, 25k² = 225 ⇒ |AB| = 9, |AC| = 12, A(ABC) = 54, A(ABD) = 3·54 = 162 → C', () =>
    expect(answerOf('triangles-405')).toBe('C'));
  it('406 — |AE|² = |AB|·|AD| = 16·20 = 320, x = √(320 − 256) = 8 → B', () =>
    expect(answerOf('triangles-406')).toBe('B'));
  it('407 — |AD|² = 2·6 = 12, |AD| = 2√3, 6k = 2k + 8 ⇒ k = 2, x = 2·2√3 = 4√3 → D', () =>
    expect(answerOf('triangles-407')).toBe('D'));
  it('408 — Menelaus: (|BA|/|AD|)·1·(3/4) = 1 ⇒ |AB| = 12, |AC| = 9, |AF|² = 108 − 12 = 96, |AF| = 4√6 → C', () =>
    expect(answerOf('triangles-408')).toBe('C'));
  it('409 — A(ABD)/A(EDC) = |AB|/|EC| = 4/3 ⇒ x = 12·3/4 = 9 → D', () =>
    expect(answerOf('triangles-409')).toBe('D'));
  it('410 — |BD| = 4, |DC| = 6, |AD|² = 96 − 24 = 72 ⇒ |AD| = 6√2, |AI|/|ID| = 8/4 = 2, x = (2/3)·6√2 = 4√2 → B', () =>
    expect(answerOf('triangles-410')).toBe('B'));

  it('411 — h = √(100 − 36) = 8, A = 48, u = 16, r = 48/16 = 3, A(ABD) = 12·3/2 = 18 → D', () =>
    expect(answerOf('triangles-411')).toBe('D'));
  it('412 — |AB|/|AC| = 5/3, 3(|DC| + 8) = 5|DC| ⇒ |DC| = 12, S₁/S₂ = 5/12 → B', () =>
    expect(answerOf('triangles-412')).toBe('B'));
  it('413 — [BE] ⊥ [AC] ⇒ |BC| = |AB| = 12, C deki dış açı 2α ⇒ [CD dış açıortay, 6/18 = x/12, x = 4 → B', () =>
    expect(answerOf('triangles-413')).toBe('B'));
  it('414 — |BD| = 8·9/20 = 18/5, |AK|/|KD| = |BA|/|BD| = 9/(18/5) = 5/2 → E', () =>
    expect(answerOf('triangles-414')).toBe('E'));
  it('415 — |AC| = 15 = |AD|, |AD|/|BC| = 5/4, E nin [BC] ye uzaklığı 9·4/9 = 4, A(BEC) = 12·4/2 = 24 → A', () =>
    expect(answerOf('triangles-415')).toBe('A'));
  it('416 — |AH| = |AB| = 8, |OC| = |CA| = 10, |CH| = √(100 − 64) = 6, |OB| = 16, 64 + 40 = 104 → D', () =>
    expect(answerOf('triangles-416')).toBe('D'));

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
