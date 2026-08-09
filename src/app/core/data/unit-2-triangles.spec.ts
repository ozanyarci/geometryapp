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

  // Runs last, once every line above has claimed its question.
  it('checks every question in the unit', () => {
    const missing = unitQuestions(unit)
      .map((question) => question.id)
      .filter((id) => !checked.has(id));
    expect(missing).toEqual([]);
  });
});
