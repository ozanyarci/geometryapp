import { Question, Unit } from '../models';

/**
 * Unit 7 — Analytic study of the line.
 * Original questions written in the style of the "Doğrunun Analitik İncelenmesi —
 * Çözümlü Test" source: parallel and perpendicular lines, symmetry, regions given by
 * inequalities, linear graphs, angle bisectors and the distance from a point to a line.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Diagrams store the *contents* of the <svg> element, with viewBox and the
 * accessibility label kept as separate fields. Every figure is drawn to scale:
 * each one fixes an origin and a pixel-per-unit scale, noted beside it.
 */
const QUESTIONS: Question[] = [
  // ---------------------------------------------------------------- 1
  {
    id: 'lines-1',
    topic: 'Paralel doğruların eğimi',
    stem: [],
    ask: 'Analitik düzlemde (a − 1)x + 2y − 5 = 0 ve 3x − y + 4 = 0 doğruları paralel olduğuna göre, a kaçtır?',
    choices: [
      { key: 'A', text: '−7' },
      { key: 'B', text: '−5' },
      { key: 'C', text: '−3' },
      { key: 'D', text: '3' },
      { key: 'E', text: '5' },
    ],
    answer: 'B',
    hint: 'Paralel doğruların eğimleri eşittir; ax + by + c = 0 doğrusunun eğimi −a/b dir.',
    solution: [
      {
        title: 'Birinci doğrunun eğimi',
        detail: '(a − 1)x + 2y − 5 = 0 doğrusunun eğimi m₁ = −(a − 1)/2 dir.',
      },
      {
        title: 'İkinci doğrunun eğimi',
        detail: '3x − y + 4 = 0 doğrusu y = 3x + 4 biçiminde yazılır, eğimi m₂ = 3 tür.',
      },
      {
        title: 'Eğimleri eşitle',
        detail: '−(a − 1)/2 = 3 ⇒ a − 1 = −6.',
      },
      {
        title: 'Sonuç',
        detail: 'a = −5 bulunur. Sabit terimler orantılı olmadığından doğrular çakışık değil, paraleldir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'lines-2',
    topic: 'Eksene ve doğruya göre simetri',
    stem: [],
    ask: 'A(3, −2) noktasının y eksenine göre simetriği B, aynı A noktasının y = −x doğrusuna göre simetriği C olduğuna göre, |BC| kaç birimdir?',
    choices: [
      { key: 'A', text: '√10' },
      { key: 'B', text: '4' },
      { key: 'C', text: '2√5' },
      { key: 'D', text: '√26' },
      { key: 'E', text: '6' },
    ],
    answer: 'D',
    hint: 'y eksenine göre simetride apsisin işareti değişir; y = −x doğrusuna göre simetride (x, y) noktası (−y, −x) olur.',
    solution: [
      {
        title: 'y eksenine göre simetri',
        detail: '(x, y) → (−x, y) olduğundan B(−3, −2) dir.',
      },
      {
        title: 'y = −x doğrusuna göre simetri',
        detail: '(x, y) → (−y, −x) olduğundan C(2, −3) tür.',
      },
      {
        title: 'Uzaklığı hesapla',
        detail: '|BC| = √((2 − (−3))² + (−3 − (−2))²) = √(25 + 1).',
      },
      {
        title: 'Sonuç',
        detail: '|BC| = √26 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'lines-3',
    topic: 'Eşitsizlik sisteminin belirttiği bölge',
    // Origin (160, 250), 40 px per unit on both axes.
    figure: {
      viewBox: '0 20 400 295',
      caption: 'Şekil 1',
      label:
        'Koordinat düzleminde x + y − 4 = 0 doğrusu eksenleri (4, 0) ve (0, 4) noktalarında, x − 2y + 2 = 0 doğrusu eksenleri (−2, 0) ve (0, 1) noktalarında kesiyor; iki doğru (2, 2) noktasında kesişiyor. y ekseni ile bu iki doğru arasında kalan üçgensel bölge taralı.',
      svg: `
          <path class="shade" d="M160,210 L160,90 L240,170 Z"/>
          <path class="ln" d="M30,250 L385,250"/>
          <path class="ln" d="M375,244 L385,250 L375,256"/>
          <path class="ln" d="M160,290 L160,32"/>
          <path class="ln" d="M154,42 L160,32 L166,42"/>
          <text x="382" y="272" text-anchor="middle">x</text>
          <text x="172" y="42">y</text>
          <path class="ln" d="M130,60 L350,280"/>
          <path class="ln" d="M40,270 L360,110"/>
          <circle class="pt" cx="240" cy="170" r="3.2"/>
          <text x="152" y="270" text-anchor="end">O</text>
          <text x="320" y="270" text-anchor="middle">4</text>
          <text x="80" y="244" text-anchor="middle">−2</text>
          <text x="150" y="100" text-anchor="end">4</text>
          <text x="168" y="228">1</text>
          <text x="345" y="304" text-anchor="end">x + y − 4 = 0</text>
          <text x="388" y="98" text-anchor="end">x − 2y + 2 = 0</text>
        `,
    },
    stem: [],
    ask: 'Şekildeki taralı bölge aşağıdaki eşitsizlik sistemlerinden hangisiyle belirlenir?',
    choices: [
      { key: 'A', text: 'x ≥ 0, x + y − 4 ≤ 0, x − 2y + 2 ≤ 0' },
      { key: 'B', text: 'x ≥ 0, x + y − 4 ≤ 0, x − 2y + 2 ≥ 0' },
      { key: 'C', text: 'x ≥ 0, x + y − 4 ≥ 0, x − 2y + 2 ≤ 0' },
      { key: 'D', text: 'x ≤ 0, x + y − 4 ≤ 0, x − 2y + 2 ≤ 0' },
      { key: 'E', text: 'x ≤ 0, x + y − 4 ≥ 0, x − 2y + 2 ≥ 0' },
    ],
    answer: 'A',
    hint: 'Taralı bölgenin içinden bir nokta seç, örneğin (0,5; 2,5), ve her doğrunun denkleminde işaretine bak.',
    solution: [
      {
        title: 'Bölgeden bir nokta seç',
        detail: 'P(0,5; 2,5) noktası taralı üçgenin içindedir.',
      },
      {
        title: 'y ekseni',
        detail: 'Bölge y ekseninin sağında kaldığından x ≥ 0 dır.',
      },
      {
        title: 'x + y − 4 = 0 doğrusu',
        detail: 'P için 0,5 + 2,5 − 4 = −1 < 0 olduğundan x + y − 4 ≤ 0 dır.',
      },
      {
        title: 'x − 2y + 2 = 0 doğrusu',
        detail: 'P için 0,5 − 5 + 2 = −2,5 < 0 olduğundan x − 2y + 2 ≤ 0 dır.',
      },
      {
        title: 'Sonuç',
        detail: 'Taralı bölge x ≥ 0, x + y − 4 ≤ 0, x − 2y + 2 ≤ 0 sistemiyle belirlenir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'lines-4',
    topic: 'Yatay doğruya göre simetri',
    stem: [],
    ask: 'Analitik düzlemde A(3, −1) noktasının y = 2 doğrusuna göre simetriği olan B noktası px − 2y = 2 doğrusu üzerinde olduğuna göre, p kaçtır?',
    choices: [
      { key: 'A', text: '−4' },
      { key: 'B', text: '−2' },
      { key: 'C', text: '2' },
      { key: 'D', text: '3' },
      { key: 'E', text: '4' },
    ],
    answer: 'E',
    hint: 'y = 2 doğrusuna göre simetride apsis değişmez; y = 2, A ile B nin ordinatlarının ortalamasıdır.',
    solution: [
      {
        title: 'Simetrik noktanın ordinatı',
        detail: 'B(3, y) için (−1 + y)/2 = 2 ⇒ y = 5, yani B(3, 5).',
      },
      {
        title: 'Doğruda yerine yaz',
        detail: 'p · 3 − 2 · 5 = 2 ⇒ 3p = 12.',
      },
      {
        title: 'Sonuç',
        detail: 'p = 4 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'lines-5',
    topic: 'Doğrusal grafik yorumu',
    // Origin (70, 230); 18 px per hour on x, 5 px per cm on y.
    figure: {
      viewBox: '0 20 400 250',
      caption: 'Şekil 2',
      label:
        'Yatay eksen x (saat), düşey eksen y (cm). Doğru (0, 30) noktasından başlayıp aşağı doğru iniyor ve K(4, 22) noktasından geçiyor; K noktasından eksenlere noktalı dikmeler çizilmiş.',
      svg: `
          <path class="ln" d="M55,230 L385,230"/>
          <path class="ln" d="M375,224 L385,230 L375,236"/>
          <path class="ln" d="M70,245 L70,32"/>
          <path class="ln" d="M64,42 L70,32 L76,42"/>
          <text x="80" y="42">y (cm)</text>
          <text x="385" y="220" text-anchor="end">x (saat)</text>
          <path class="ln" d="M70,80 L232,170"/>
          <path class="ln" stroke-dasharray="3 4" d="M70,120 L142,120"/>
          <path class="ln" stroke-dasharray="3 4" d="M142,120 L142,230"/>
          <circle class="pt" cx="70" cy="80" r="3.2"/>
          <circle class="pt" cx="142" cy="120" r="3.2"/>
          <text x="62" y="85" text-anchor="end">30</text>
          <text x="62" y="125" text-anchor="end">22</text>
          <text x="142" y="250" text-anchor="middle">4</text>
          <text x="62" y="250" text-anchor="end">O</text>
          <text x="150" y="112">K</text>
        `,
    },
    stem: [
      'Yukarıdaki grafik, sabit hızla eriyen bir mumun yakıldıktan sonra geçen süreye göre boyunu göstermektedir.',
    ],
    ask: 'Buna göre, mum yakıldıktan kaç saat sonra tamamen erir?',
    choices: [
      { key: 'A', text: '11' },
      { key: 'B', text: '13' },
      { key: 'C', text: '15' },
      { key: 'D', text: '16' },
      { key: 'E', text: '18' },
    ],
    answer: 'C',
    hint: 'Doğrunun eğimi, mumun bir saatte ne kadar kısaldığını verir.',
    solution: [
      {
        title: 'Eğimi bul',
        detail: '(0, 30) ve K(4, 22) noktalarından eğim m = (22 − 30)/(4 − 0) = −2 dir; mum saatte 2 cm kısalır.',
      },
      {
        title: 'Doğrunun denklemi',
        detail: 'y = −2x + 30.',
      },
      {
        title: 'Mumun bittiği an',
        detail: 'y = 0 için −2x + 30 = 0 ⇒ x = 15.',
      },
      {
        title: 'Sonuç',
        detail: 'Mum 15 saat sonra tamamen erir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'lines-6',
    topic: 'Açıortay doğrusunun denklemi',
    stem: [],
    ask: 'Analitik düzlemde denklemleri 3x − 4y + 1 = 0 ve 4x + 3y − 7 = 0 olan doğruların açıortay doğrularından birinin denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'y = 7x + 6' },
      { key: 'B', text: 'x − 7y + 6 = 0' },
      { key: 'C', text: 'y = x' },
      { key: 'D', text: '7x + y − 8 = 0' },
      { key: 'E', text: '7x − y − 6 = 0' },
    ],
    answer: 'E',
    hint: 'Açıortay üzerindeki her nokta iki doğruya eşit uzaklıktadır.',
    solution: [
      {
        title: 'Eşit uzaklık',
        detail:
          'Her iki doğruda da √(a² + b²) = 5 olduğundan açıortaylar |3x − 4y + 1| = |4x + 3y − 7| eşitliğinden gelir.',
      },
      {
        title: 'Birinci açıortay',
        detail: '3x − 4y + 1 = 4x + 3y − 7 ⇒ x + 7y − 8 = 0.',
      },
      {
        title: 'İkinci açıortay',
        detail: '3x − 4y + 1 = −(4x + 3y − 7) ⇒ 7x − y − 6 = 0.',
      },
      {
        title: 'Sonuç',
        detail: 'Seçeneklerde yer alan açıortay 7x − y − 6 = 0 doğrusudur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 7
  {
    id: 'lines-7',
    topic: 'Dik doğrular',
    stem: [],
    ask: 'Analitik düzlemde 3x + (m − 2)y + 1 = 0 ve 2x − 3y = 0 doğruları birbirine dik olduğuna göre, m kaçtır?',
    choices: [
      { key: 'A', text: '−4' },
      { key: 'B', text: '−2' },
      { key: 'C', text: '2' },
      { key: 'D', text: '3' },
      { key: 'E', text: '4' },
    ],
    answer: 'E',
    hint: 'a₁x + b₁y + c₁ = 0 ve a₂x + b₂y + c₂ = 0 doğruları dik ise a₁a₂ + b₁b₂ = 0 dır.',
    solution: [
      {
        title: 'Diklik koşulu',
        detail: 'a₁a₂ + b₁b₂ = 0 ⇒ 3 · 2 + (m − 2) · (−3) = 0.',
      },
      {
        title: 'Denklemi çöz',
        detail: '6 − 3m + 6 = 0 ⇒ 3m = 12.',
      },
      {
        title: 'Sonuç',
        detail: 'm = 4 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'lines-8',
    topic: 'Paralel doğrular arası uzaklık',
    stem: [],
    ask: 'Analitik düzlemde 3x + 4y − 2 = 0 ve 6x + 8y + 11 = 0 doğruları arasındaki uzaklık kaç birimdir?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '3/2' },
      { key: 'C', text: '2' },
      { key: 'D', text: '5/2' },
      { key: 'E', text: '3' },
    ],
    answer: 'B',
    hint: 'Önce iki denklemin x ve y katsayılarını aynı yap.',
    solution: [
      {
        title: 'Katsayıları eşitle',
        detail: '6x + 8y + 11 = 0 denklemi 2 ye bölünürse 3x + 4y + 11/2 = 0 olur.',
      },
      {
        title: 'Uzaklık formülü',
        detail: 'd = |c₁ − c₂| / √(a² + b²) = |−2 − 11/2| / √(9 + 16) = (15/2) / 5.',
      },
      {
        title: 'Sonuç',
        detail: 'd = 3/2 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'lines-9',
    topic: 'Doğrusal noktalar',
    stem: [],
    ask: 'Analitik düzlemde A(1, 2), B(3, 6) ve C(k, −4) noktaları aynı doğru üzerinde olduğuna göre, k kaçtır?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '−1' },
      { key: 'C', text: '0' },
      { key: 'D', text: '2' },
      { key: 'E', text: '3' },
    ],
    answer: 'A',
    hint: 'Doğrusal noktalarda AB ve AC doğrularının eğimleri eşittir.',
    solution: [
      {
        title: 'AB nin eğimi',
        detail: 'm_AB = (6 − 2)/(3 − 1) = 2.',
      },
      {
        title: 'AC nin eğimi',
        detail: 'm_AC = (−4 − 2)/(k − 1) = −6/(k − 1).',
      },
      {
        title: 'Eğimleri eşitle',
        detail: '−6/(k − 1) = 2 ⇒ k − 1 = −3.',
      },
      {
        title: 'Sonuç',
        detail: 'k = −2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  {
    id: 'lines-10',
    topic: 'Doğrular ve eksenle oluşan üçgenin alanı',
    // Origin (150, 290), 30 px per unit on both axes.
    figure: {
      viewBox: '0 5 400 320',
      caption: 'Şekil 3',
      label:
        'Koordinat düzleminde d₁ doğrusu eksenleri (−2, 0) ve (0, 4) noktalarında, d₂ doğrusu eksenleri (4, 0) ve (0, 8) noktalarında kesiyor. İki doğru ile x ekseni arasında kalan üçgensel bölge taralı.',
      svg: `
          <path class="shade" d="M90,290 L270,290 L180,110 Z"/>
          <path class="ln" d="M40,290 L385,290"/>
          <path class="ln" d="M375,284 L385,290 L375,296"/>
          <path class="ln" d="M150,310 L150,15"/>
          <path class="ln" d="M144,25 L150,15 L156,25"/>
          <text x="382" y="312" text-anchor="middle">x</text>
          <text x="162" y="26">y</text>
          <path class="ln" d="M82.5,305 L225,20"/>
          <path class="ln" d="M142.5,35 L277.5,305"/>
          <text x="143" y="310" text-anchor="end">O</text>
          <text x="84" y="282" text-anchor="end">−2</text>
          <text x="280" y="282">4</text>
          <text x="144" y="176" text-anchor="end">4</text>
          <text x="144" y="58" text-anchor="end">8</text>
          <text x="232" y="32">d₁</text>
          <text x="286" y="318">d₂</text>
        `,
    },
    stem: [],
    ask: 'Şekildeki d₁ ve d₂ doğruları ile x ekseni arasında kalan taralı üçgensel bölgenin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '12' },
      { key: 'C', text: '15' },
      { key: 'D', text: '18' },
      { key: 'E', text: '24' },
    ],
    answer: 'D',
    hint: 'Eksenleri kestiği noktalardan iki doğrunun denklemini yaz, sonra kesişim noktasını bul.',
    solution: [
      {
        title: 'd₁ in denklemi',
        detail: '(−2, 0) ve (0, 4) noktalarından geçer: x/(−2) + y/4 = 1, yani y = 2x + 4.',
      },
      {
        title: 'd₂ nin denklemi',
        detail: '(4, 0) ve (0, 8) noktalarından geçer: x/4 + y/8 = 1, yani y = −2x + 8.',
      },
      {
        title: 'Kesişim noktası',
        detail: '2x + 4 = −2x + 8 ⇒ x = 1, y = 6. Üçgenin tepesi (1, 6) dır.',
      },
      {
        title: 'Taban ve yükseklik',
        detail: 'Taban (−2, 0) ile (4, 0) arası 6 birim, yükseklik 6 birimdir.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = (6 · 6)/2 = 18 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'lines-11',
    topic: 'Noktanın doğruya uzaklığı',
    stem: [],
    ask: 'Analitik düzlemde P(2, k) noktasının 5x − 12y + 3 = 0 doğrusuna uzaklığı 1 birim olduğuna göre, k nin alabileceği değerlerin toplamı kaçtır?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '13/12' },
      { key: 'C', text: '2' },
      { key: 'D', text: '13/6' },
      { key: 'E', text: '13/3' },
    ],
    answer: 'D',
    hint: 'P(x₀, y₀) noktasının ax + by + c = 0 doğrusuna uzaklığı |ax₀ + by₀ + c| / √(a² + b²) dir.',
    solution: [
      {
        title: 'Uzaklık formülü',
        detail: '|5 · 2 − 12k + 3| / √(25 + 144) = 1 ⇒ |13 − 12k| / 13 = 1.',
      },
      {
        title: 'Mutlak değeri aç',
        detail: '13 − 12k = 13 ⇒ k = 0 ya da 13 − 12k = −13 ⇒ k = 26/12 = 13/6.',
      },
      {
        title: 'Sonuç',
        detail: 'Değerlerin toplamı 0 + 13/6 = 13/6 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'lines-12',
    topic: 'Noktanın doğruya göre simetriği',
    stem: [],
    ask: 'Analitik düzlemde A(1, 1) noktasının x + 2y − 8 = 0 doğrusuna göre simetriği B(a, b) olduğuna göre, a + b kaçtır?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'C',
    hint: '[AB] doğruya diktir ve orta noktası doğrunun üzerindedir.',
    solution: [
      {
        title: 'Diklik',
        detail:
          'Doğrunun eğimi −1/2 olduğundan AB nin eğimi 2 dir: (b − 1)/(a − 1) = 2 ⇒ b = 2a − 1.',
      },
      {
        title: 'Orta nokta doğru üzerinde',
        detail: '((1 + a)/2, (1 + b)/2) noktası için (1 + a)/2 + (1 + b) − 8 = 0 ⇒ a + 2b = 13.',
      },
      {
        title: 'Sistemi çöz',
        detail: 'a + 2(2a − 1) = 13 ⇒ 5a = 15 ⇒ a = 3, b = 5.',
      },
      {
        title: 'Sonuç',
        detail: 'a + b = 3 + 5 = 8 dir.',
      },
    ],
  },
];

function pick(...ids: string[]): Question[] {
  return ids.map((id) => {
    const question = QUESTIONS.find((candidate) => candidate.id === id);
    if (!question) throw new Error(`Unknown question id: ${id}`);
    return question;
  });
}

/**
 * Every question written for this unit, in id order. Exported so the tests can
 * check that each one is placed in exactly one module.
 */
export const LINES_BANK: readonly Question[] = QUESTIONS;

export const UNIT_7_LINES: Unit = {
  id: 'lines',
  order: 7,
  title: 'Doğrunun Analitik İncelenmesi',
  subtitle: 'Ünite 7',
  description:
    'Paralel ve dik doğrular, simetri, eşitsizliklerin belirttiği bölgeler, doğrusal grafikler, açıortaylar ve noktanın doğruya uzaklığı.',
  modules: [
    {
      id: 'lines-m1',
      order: 1,
      title: 'Paralellik, simetri ve bölgeler',
      summary:
        'Paralel doğrular, eksene ve doğruya göre simetri, eşitsizlik sistemiyle bölge, doğrusal grafik ve açıortay denklemi.',
      questions: pick('lines-1', 'lines-2', 'lines-3', 'lines-4', 'lines-5', 'lines-6'),
    },
    {
      id: 'lines-m2',
      order: 2,
      title: 'Diklik, uzaklık ve alan',
      summary:
        'Dik doğrular, paralel doğrular arası uzaklık, doğrusal noktalar, doğrularla oluşan üçgenin alanı ve noktanın doğruya göre simetriği.',
      questions: pick('lines-7', 'lines-8', 'lines-9', 'lines-10', 'lines-11', 'lines-12'),
    },
  ],
};
