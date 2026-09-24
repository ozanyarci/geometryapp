import { Question, Unit } from '../models';

/**
 * Unit 4 — Quadrilaterals.
 * Original questions written in the style of the "Genel Dörtgenler — Çözümlü
 * Test" source: interior angle sums, angle bisectors, quadrilaterals with
 * perpendicular diagonals or two right angles, and areas from the diagonals.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Diagrams store the *contents* of the <svg> element, with viewBox and the
 * accessibility label kept as separate fields. Every figure is drawn to scale.
 */
const QUESTIONS: Question[] = [
  // ---------------------------------------------------------------- 1
  {
    id: 'quadrilaterals-1',
    topic: 'Dörtgende iç açılar toplamı',
    figure: {
      viewBox: '0 0 400 206',
      caption: 'Şekil 1',
      label:
        'ABCD dörtgeninde [DC] kenarı iki yönde K ve L noktalarına, [AB] kenarı B’den F noktasına uzatılmış; m(ADK) = 55°, m(BCL) = 65°, m(CBF) = 110° ve A köşesindeki iç açı α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M88.5,34 L313.1,53.7"/>
          <path class="ln" d="M40,175.9 L360,175.9"/>
          <path class="ln" d="M40,175.9 L154.3,39.8"/>
          <path class="ln" d="M294,175.9 L247.4,47.9"/>
          <path class="arc" d="M70,175.9 A30,30 0 0 0 59.3,152.9"/>
          <text class="val" x="80.8" y="161.9" text-anchor="middle">α</text>
          <path class="arc" d="M128.4,37.5 A26,26 0 0 0 137.6,59.7"/>
          <text class="val" x="113.6" y="61.6" text-anchor="middle">55°</text>
          <path class="arc" d="M273.3,50.2 A26,26 0 0 1 256.3,72.3"/>
          <text class="val" x="282.3" y="79.7" text-anchor="middle">65°</text>
          <path class="arc" d="M318,175.9 A24,24 0 0 0 285.8,153.3"/>
          <text class="val" x="319.2" y="144.9" text-anchor="middle">110°</text>
          <circle class="pt" cx="40" cy="175.9" r="3.2"/>
          <circle class="pt" cx="294" cy="175.9" r="3.2"/>
          <circle class="pt" cx="247.4" cy="47.9" r="3.2"/>
          <circle class="pt" cx="154.3" cy="39.8" r="3.2"/>
          <text x="26.3" y="189.6" text-anchor="end">A</text>
          <text x="289.4" y="196.7" text-anchor="middle">B</text>
          <text x="363.1" y="197.1" text-anchor="middle">F</text>
          <text x="250.5" y="37.7" text-anchor="middle">C</text>
          <text x="151.2" y="29.6" text-anchor="middle">D</text>
          <text x="86.9" y="23.6" text-anchor="middle">K</text>
          <text x="314.7" y="43.3" text-anchor="middle">L</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'K, D, C, L doğrusal',
      'A, B, F doğrusal',
      'm(ADK) = 55°',
      'm(BCL) = 65°',
      'm(CBF) = 110°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DAB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'Verilen her dış açının bütünlerini alarak dörtgenin D, C ve B köşelerindeki iç açıları bul.',
    solution: [
      {
        title: 'D köşesindeki iç açı',
        detail: 'K, D, C doğrusal olduğundan m(ADC) = 180 − 55 = 125° olur.',
      },
      {
        title: 'C köşesindeki iç açı',
        detail: 'D, C, L doğrusal olduğundan m(BCD) = 180 − 65 = 115° olur.',
      },
      {
        title: 'B köşesindeki iç açı',
        detail: 'A, B, F doğrusal olduğundan m(ABC) = 180 − 110 = 70° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Dörtgenin iç açıları toplamı 360° olduğundan α = 360 − (125 + 115 + 70) = 360 − 310 = 50° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'quadrilaterals-2',
    topic: 'Dörtgende açıortaylar arasındaki açı',
    figure: {
      viewBox: '0 0 400 390',
      caption: 'Şekil 2',
      label:
        'ABCD dörtgeninde B köşesinden çizilen [BE ve D köşesinden çizilen [DK açıortayları T noktasında kesişiyor; m(BCD) = 100°, m(BTD) = 158° ve A köşesindeki açı x ile gösterilmiş.',
      svg: `
          <path class="ln" d="M184.6,30 L77.7,259.2 L178.4,360 L322.3,259.2 Z"/>
          <path class="ln" d="M77.7,259.2 L264.4,226.3"/>
          <path class="ln" d="M322.3,259.2 L158.8,224.5"/>
          <path class="arc" d="M171.9,57.2 A30,30 0 0 0 200.0,55.7"/>
          <text class="val" x="187" y="80.9" text-anchor="middle">x</text>
          <path class="arc" d="M161.4,343.0 A24,24 0 0 1 198.1,346.2"/>
          <text class="val" x="182.1" y="323.2" text-anchor="middle">100°</text>
          <path class="arc" d="M195.6,238.5 A16,16 0 0 0 227.1,239.0"/>
          <text class="val" x="210.9" y="270.7" text-anchor="middle">158°</text>
          <circle class="pt" cx="184.6" cy="30" r="3.2"/>
          <circle class="pt" cx="77.7" cy="259.2" r="3.2"/>
          <circle class="pt" cx="178.4" cy="360" r="3.2"/>
          <circle class="pt" cx="322.3" cy="259.2" r="3.2"/>
          <circle class="pt" cx="211.4" cy="235.7" r="3.2"/>
          <text x="184.6" y="19.5" text-anchor="middle">A</text>
          <text x="61.7" y="264.7" text-anchor="end">B</text>
          <text x="178.4" y="381.5" text-anchor="middle">C</text>
          <text x="338.3" y="264.7">D</text>
          <text x="211.4" y="225.2" text-anchor="middle">T</text>
          <text x="267.1" y="218.1" text-anchor="middle">E</text>
          <text x="156.1" y="216.3" text-anchor="middle">K</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[BE ve [DK açıortay', 'm(BCD) = 100°', 'm(BTD) = 158°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '52' },
      { key: 'C', text: '56' },
      { key: 'D', text: '60' },
      { key: 'E', text: '64' },
    ],
    answer: 'C',
    hint: 'B ve D köşelerindeki açıların yarılarının toplamını x cinsinden yaz, sonra BCDT dörtgenine bak.',
    solution: [
      {
        title: 'Açıların yarıları',
        detail:
          'm(ABC) = 2b ve m(CDA) = 2d olsun. Dörtgende x + 2b + 100 + 2d = 360 olduğundan b + d = (260 − x) / 2 olur.',
      },
      {
        title: 'BCDT dörtgeni',
        detail:
          'T noktasının C tarafında kalan BCDT dörtgeninin açıları m(TBC) = b, m(BCD) = 100°, m(CDT) = d ve m(DTB) = 158° olur.',
      },
      {
        title: 'Denklemi kur',
        detail: 'b + 100 + d + 158 = 360 olduğundan b + d = 102 bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '(260 − x) / 2 = 102 ⇒ 260 − x = 204 ⇒ x = 56° bulunur. (Kısa yol: 180 − 158 = (100 − x) / 2.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'quadrilaterals-3',
    topic: 'Köşegenleri dik dörtgen',
    figure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 3',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında dik kesişiyor; |AD| = 5, |DC| = 6, |AB| = 8 ve |BC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M108.4,128.1 L181.9,310 L291.6,128.1 L181.9,30 Z"/>
          <path class="ln" d="M108.4,128.1 L291.6,128.1"/>
          <path class="ln" d="M181.9,310 L181.9,30"/>
          <path class="ln" d="M191.9,128.1 L191.9,118.1 L181.9,118.1"/>
          <circle class="pt" cx="108.4" cy="128.1" r="3.2"/>
          <circle class="pt" cx="181.9" cy="310" r="3.2"/>
          <circle class="pt" cx="291.6" cy="128.1" r="3.2"/>
          <circle class="pt" cx="181.9" cy="30" r="3.2"/>
          <circle class="pt" cx="181.9" cy="128.1" r="3.2"/>
          <text x="92.4" y="133.6" text-anchor="end">A</text>
          <text x="181.9" y="331.5" text-anchor="middle">B</text>
          <text x="307.6" y="133.6">C</text>
          <text x="181.9" y="19.5" text-anchor="middle">D</text>
          <text x="171.3" y="144.2" text-anchor="end">E</text>
          <text class="val" x="134.8" y="76.3" text-anchor="middle">5</text>
          <text class="val" x="245.5" y="74.4" text-anchor="middle">6</text>
          <text class="val" x="133.1" y="229" text-anchor="middle">8</text>
          <text class="val" x="247.9" y="230.8" text-anchor="middle">x</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[AC] ⊥ [BD]', '|AD| = 5 cm', '|AB| = 8 cm', '|DC| = 6 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√69' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '5√3' },
      { key: 'D', text: '√78' },
      { key: 'E', text: '4√5' },
    ],
    answer: 'C',
    hint: 'E etrafındaki dört dik üçgende Pisagor bağıntısını yaz; karşılıklı kenarların karelerinin toplamlarını karşılaştır.',
    solution: [
      {
        title: 'Parçalara ad ver',
        detail:
          '|EA| = a, |EB| = b, |EC| = c, |ED| = d olsun. Köşegenler dik olduğundan E etrafında dört dik üçgen oluşur.',
      },
      {
        title: 'Pisagor bağıntıları',
        detail: '|AD|² = a² + d², |BC|² = b² + c², |AB|² = a² + b², |DC|² = c² + d² olur.',
      },
      {
        title: 'Karşılıklı kenarlar',
        detail: 'Buradan |AB|² + |DC|² = |AD|² + |BC|² = a² + b² + c² + d² bulunur.',
      },
      {
        title: 'Sonuç',
        detail: '8² + 6² = 5² + x² ⇒ 64 + 36 = 25 + x² ⇒ x² = 75 ⇒ x = 5√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'quadrilaterals-4',
    topic: 'Köşegenlerle dörtgenin alanı',
    figure: {
      viewBox: '0 0 400 315',
      caption: 'Şekil 4',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında kesişiyor; m(CAD) = 25° ve m(ADB) = 20° olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M70.9,30 L50,131.6 L325.5,284.6 L350,131.6 Z"/>
          <path class="ln" d="M70.9,30 L325.5,284.6"/>
          <path class="ln" d="M50,131.6 L350,131.6"/>
          <path class="arc" d="M103.4,62.5 A46,46 0 0 0 114.1,45.7"/>
          <text class="val" x="124.9" y="69.4" text-anchor="middle">25°</text>
          <path class="arc" d="M301.1,113.8 A52,52 0 0 0 298.0,131.6"/>
          <text class="val" x="279.1" y="124.1" text-anchor="middle">20°</text>
          <circle class="pt" cx="70.9" cy="30" r="3.2"/>
          <circle class="pt" cx="50" cy="131.6" r="3.2"/>
          <circle class="pt" cx="325.5" cy="284.6" r="3.2"/>
          <circle class="pt" cx="350" cy="131.6" r="3.2"/>
          <circle class="pt" cx="172.5" cy="131.6" r="3.2"/>
          <text x="70.9" y="19.5" text-anchor="middle">A</text>
          <text x="34" y="137.1" text-anchor="end">B</text>
          <text x="325.5" y="306.1" text-anchor="middle">C</text>
          <text x="366" y="137.1">D</text>
          <text x="163.8" y="151.7" text-anchor="end">E</text>
        `,
    },
    given: ['ABCD bir dörtgen', '|BD| = 10 cm', '|AC| = 12 cm', 'm(CAD) = 25°', 'm(ADB) = 20°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '30√2' },
      { key: 'C', text: '30√3' },
      { key: 'D', text: '60' },
      { key: 'E', text: '60√2' },
    ],
    answer: 'B',
    hint: 'AED üçgeninde köşegenler arasındaki açıyı bul; dörtgenin alanı ½·|AC|·|BD|·sin(köşegenler arası açı)’dır.',
    solution: [
      {
        title: 'Köşegenler arasındaki açı',
        detail: 'AED üçgeninde m(AED) = 180 − (25 + 20) = 135° olur.',
      },
      {
        title: 'Alan formülü',
        detail:
          'Köşegenleri e ve f olan dörtgenin alanı ½·e·f·sin θ’dır; sin 135° = sin 45° = √2/2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABCD) = ½ · 12 · 10 · √2/2 = 30√2 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'quadrilaterals-5',
    topic: 'Karşılıklı iki açısı dik dörtgen',
    figure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 5',
      label:
        'ABCD dörtgeninde A ve C köşelerindeki açılar dik; [BD] köşegeni çizilmiş, |AD| = 4, |AB| = 8, |DC| = 7 ve |BC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M86,66.3 L158.5,310 L314,225.6 L207.9,30 Z"/>
          <path class="ln" d="M158.5,310 L207.9,30"/>
          <path class="ln" d="M89.1,76.8 L99.7,73.7 L96.5,63.2"/>
          <path class="ln" d="M304.3,230.8 L299.1,221.2 L308.8,215.9"/>
          <circle class="pt" cx="86" cy="66.3" r="3.2"/>
          <circle class="pt" cx="158.5" cy="310" r="3.2"/>
          <circle class="pt" cx="314" cy="225.6" r="3.2"/>
          <circle class="pt" cx="207.9" cy="30" r="3.2"/>
          <text x="70.3" y="68.7" text-anchor="end">A</text>
          <text x="158.5" y="331.5" text-anchor="middle">B</text>
          <text x="329.7" y="234.2">C</text>
          <text x="207.9" y="19.5" text-anchor="middle">D</text>
          <text class="val" x="150.6" y="65.6" text-anchor="middle">4</text>
          <text class="val" x="249.5" y="139" text-anchor="middle">7</text>
          <text class="val" x="134.7" y="189.4" text-anchor="middle">8</text>
          <text class="val" x="230.1" y="261.4" text-anchor="middle">x</text>
        `,
    },
    given: ['ABCD bir dörtgen', 'm(Â) = m(Ĉ) = 90°', '|AD| = 4 cm', '|AB| = 8 cm', '|DC| = 7 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√29' },
      { key: 'B', text: '√31' },
      { key: 'C', text: '√33' },
      { key: 'D', text: '√35' },
      { key: 'E', text: '√37' },
    ],
    answer: 'B',
    hint: '[BD] köşegeni iki dik üçgenin ortak hipotenüsüdür.',
    solution: [
      {
        title: 'ABD üçgeni',
        detail: 'A açısı dik olduğundan |BD|² = |AD|² + |AB|² = 16 + 64 = 80 olur.',
      },
      {
        title: 'CBD üçgeni',
        detail: 'C açısı dik olduğundan |BD|² = |DC|² + |BC|² = 49 + x² olur.',
      },
      {
        title: 'Sonuç',
        detail: '49 + x² = 80 ⇒ x² = 31 ⇒ x = √31 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'quadrilaterals-6',
    topic: 'Köşegen parçalarıyla alan',
    figure: {
      viewBox: '0 0 400 221',
      caption: 'Şekil 6',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında kesişiyor; |AE| = 4, |EC| = 6, |ED| = 3, |BE| = 9 ve D köşesinde m(BDC) = 90° olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M137.8,30.7 L50,191.2 L350,129.7 L280.2,30 Z"/>
          <path class="ln" d="M137.8,30.7 L350,129.7"/>
          <path class="ln" d="M50,191.2 L280.2,30"/>
          <path class="ln" d="M271.2,36.3 L277.5,45.3 L286.5,39.0"/>
          <circle class="pt" cx="137.8" cy="30.7" r="3.2"/>
          <circle class="pt" cx="50" cy="191.2" r="3.2"/>
          <circle class="pt" cx="350" cy="129.7" r="3.2"/>
          <circle class="pt" cx="280.2" cy="30" r="3.2"/>
          <circle class="pt" cx="222.7" cy="70.3" r="3.2"/>
          <text x="130.6" y="21.9" text-anchor="end">A</text>
          <text x="35.1" y="202.6" text-anchor="end">B</text>
          <text x="357.2" y="149.5">C</text>
          <text x="284.8" y="20.2" text-anchor="middle">D</text>
          <text x="222.7" y="59.8" text-anchor="middle">E</text>
          <text class="val" x="174.7" y="67.3" text-anchor="middle">4</text>
          <text class="val" x="280.8" y="116.8" text-anchor="middle">6</text>
          <text class="val" x="258.9" y="65.7" text-anchor="middle">3</text>
          <text class="val" x="143.8" y="146.3" text-anchor="middle">9</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '|AE| = 4 cm',
      '|EC| = 6 cm',
      '|ED| = 3 cm',
      '|BE| = 9 cm',
      'm(BDC) = 90°',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde [AC] ve [BD] köşegen olduğuna göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '24√3' },
      { key: 'B', text: '30' },
      { key: 'C', text: '30√3' },
      { key: 'D', text: '36√3' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'EDC dik üçgeninde |ED| ile |EC| arasındaki oran, köşegenler arasındaki açıyı verir.',
    solution: [
      {
        title: 'Köşegenler arasındaki açı',
        detail:
          'EDC üçgeninde D açısı dik ve |ED| = 3, |EC| = 6 olduğundan cos(DEC) = 3/6 = 1/2, yani m(DEC) = 60° olur.',
      },
      {
        title: 'Köşegen uzunlukları',
        detail: '|AC| = 4 + 6 = 10 cm ve |BD| = 9 + 3 = 12 cm olur.',
      },
      {
        title: 'Alan formülü',
        detail: 'A(ABCD) = ½·|AC|·|BD|·sin 60° = ½ · 10 · 12 · √3/2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABCD) = 30√3 cm² bulunur.',
      },
    ],
  },
];

/** Resolves question ids to their bank entries, failing loudly on a typo. */
function pick(...ids: readonly string[]): Question[] {
  return ids.map((id) => {
    const question = QUESTIONS.find((candidate) => candidate.id === id);
    if (!question) throw new Error(`Unknown question id: ${id}`);
    return question;
  });
}

/**
 * The whole bank, exported for the integrity tests: they check that the ids run
 * in sequence and that no question was left behind without a module to sit in.
 */
export const QUADRILATERALS_BANK: readonly Question[] = QUESTIONS;

export const UNIT_4_QUADRILATERALS: Unit = {
  id: 'quadrilaterals',
  order: 4,
  title: 'Dörtgenler',
  subtitle: 'Ünite 4',
  description:
    'Dörtgende iç ve dış açılar, açıortaylar, köşegenleri dik ya da karşılıklı iki açısı dik dörtgenler ve köşegenlerle alan.',
  modules: [
    {
      id: 'quadrilaterals-m1',
      order: 1,
      title: 'Genel dörtgende açı, uzunluk ve alan',
      summary:
        'İç açılar toplamı, açıortaylar arasındaki açı, dik köşegenler ve dik açılarla uzunluk, köşegenlerle dörtgenin alanı.',
      questions: pick(
        'quadrilaterals-1',
        'quadrilaterals-2',
        'quadrilaterals-3',
        'quadrilaterals-4',
        'quadrilaterals-5',
        'quadrilaterals-6',
      ),
    },
  ],
};
