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
  // ---------------------------------------------------------------- 13
  {
    id: 'lines-13',
    topic: 'Dik doğruların kesişim noktası',
    stem: [],
    ask: 'Analitik düzlemde 3x − y − 1 = 0 ve ax + 3y − 7 = 0 doğruları bir A noktasında dik kesişiyor. Buna göre, A noktasının orijine olan uzaklığı kaç birimdir?',
    choices: [
      { key: 'A', text: '√2' },
      { key: 'B', text: '√5' },
      { key: 'C', text: '2√2' },
      { key: 'D', text: '√13' },
      { key: 'E', text: '3' },
    ],
    answer: 'B',
    hint: 'Önce diklik koşulundan a yı bul; dik doğruların eğimlerinin çarpımı −1 dir.',
    solution: [
      {
        title: 'Eğimler',
        detail: '3x − y − 1 = 0 doğrusunun eğimi 3, ax + 3y − 7 = 0 doğrusunun eğimi −a/3 tür.',
      },
      {
        title: 'Diklik koşulu',
        detail: '3 · (−a/3) = −1 ⇒ a = 1. İkinci doğru x + 3y − 7 = 0 olur.',
      },
      {
        title: 'Kesişim noktası',
        detail: 'y = 3x − 1 ikinci denklemde yerine yazılırsa x + 9x − 3 − 7 = 0 ⇒ x = 1, y = 2. A(1, 2) dir.',
      },
      {
        title: 'Sonuç',
        detail: '|OA| = √(1² + 2²) = √5 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'lines-14',
    topic: 'İki noktası bilinen doğrunun denklemi',
    // Origin (140, 220), 30 px per unit on both axes; the ky + 3x = 12 line is drawn with k = 2.
    figure: {
      viewBox: '0 0 400 345',
      caption: 'Şekil 4',
      label:
        'Koordinat düzleminde ky + 3x = 12 doğrusu x eksenini B noktasında kesiyor. AB doğrusu y eksenini −3 ordinatlı A noktasında kesiyor ve B noktasından geçiyor.',
      svg: `
          <path class="ln" d="M30,220 L390,220"/>
          <path class="ln" d="M380,214 L390,220 L380,226"/>
          <path class="ln" d="M140,340 L140,8"/>
          <path class="ln" d="M134,18 L140,8 L146,18"/>
          <text x="386" y="242" text-anchor="middle">x</text>
          <text x="152" y="18">y</text>
          <path class="ln" d="M125,17.5 L305,287.5"/>
          <path class="ln" d="M110,332.5 L335,163.75"/>
          <circle class="pt" cx="260" cy="220" r="3.2"/>
          <circle class="pt" cx="140" cy="310" r="3.2"/>
          <text x="132" y="238" text-anchor="end">O</text>
          <text x="260" y="206" text-anchor="middle">B</text>
          <text x="150" y="332">A</text>
          <text x="132" y="302" text-anchor="end">−3</text>
          <text x="312" y="310" text-anchor="middle">ky + 3x = 12</text>
        `,
    },
    stem: [],
    ask: 'Şekildeki dik koordinat düzleminde AB doğrusu ile ky + 3x = 12 doğrusu x ekseni üzerindeki B noktasında kesiştiğine göre, AB doğrusunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '3x − 4y − 12 = 0' },
      { key: 'B', text: '3x + 4y − 12 = 0' },
      { key: 'C', text: '4x − 3y − 12 = 0' },
      { key: 'D', text: '3x − 4y + 12 = 0' },
      { key: 'E', text: '4x + 3y + 12 = 0' },
    ],
    answer: 'A',
    hint: 'B noktası x ekseni üzerinde olduğundan ordinatı 0 dır; ky + 3x = 12 denkleminde y = 0 yaz.',
    solution: [
      {
        title: 'B noktası',
        detail: 'y = 0 için 3x = 12 ⇒ x = 4. B(4, 0) dır; k nin değeri gerekmez.',
      },
      {
        title: 'A noktası',
        detail: 'A, y ekseni üzerinde ve ordinatı −3 olduğundan A(0, −3) tür.',
      },
      {
        title: 'Eksenleri kestiği noktalardan denklem',
        detail: 'x/4 + y/(−3) = 1 ⇒ 3x − 4y = 12.',
      },
      {
        title: 'Sonuç',
        detail: 'AB doğrusunun denklemi 3x − 4y − 12 = 0 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'lines-15',
    topic: 'Kare ve doğrunun eğimi',
    given: ['OABC bir kare', 'Alan(BCK) = 9 · Alan(BAL)'],
    // Origin (160, 300), 30 px per unit; square side 2, d drawn with slope −3.
    figure: {
      viewBox: '0 15 400 360',
      caption: 'Şekil 5',
      label:
        'Koordinat düzleminde OABC karesinin A köşesi x ekseni, C köşesi y ekseni üzerinde. d doğrusu karenin B köşesinden geçiyor; y eksenini K, x eksenini L noktasında kesiyor.',
      svg: `
          <path class="ln" d="M60,300 L390,300"/>
          <path class="ln" d="M380,294 L390,300 L380,306"/>
          <path class="ln" d="M160,335 L160,23"/>
          <path class="ln" d="M154,33 L160,23 L166,33"/>
          <text x="386" y="322" text-anchor="middle">x</text>
          <text x="172" y="34">y</text>
          <path class="ln" d="M160,240 L220,240 L220,300"/>
          <path class="ln" d="M151,33 L259,357"/>
          <circle class="pt" cx="160" cy="60" r="3.2"/>
          <circle class="pt" cx="220" cy="240" r="3.2"/>
          <circle class="pt" cx="240" cy="300" r="3.2"/>
          <text x="152" y="318" text-anchor="end">O</text>
          <text x="214" y="320" text-anchor="end">A</text>
          <text x="226" y="234">B</text>
          <text x="152" y="246" text-anchor="end">C</text>
          <text x="152" y="66" text-anchor="end">K</text>
          <text x="248" y="292">L</text>
          <text x="266" y="360">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki şekilde Alan(BCK) = 9 · Alan(BAL) olduğuna göre, d doğrusunun eğimi kaçtır?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '−3' },
      { key: 'C', text: '−4' },
      { key: 'D', text: '−6' },
      { key: 'E', text: '−9' },
    ],
    answer: 'B',
    hint: 'Karenin kenarına a, d nin eğimine m de; iki dik üçgenin dik kenarlarını a ve m cinsinden yaz.',
    solution: [
      {
        title: 'Değişkenler',
        detail: 'Karenin kenarı a, d nin eğimi m (m < 0) olsun. B(a, a) dır.',
      },
      {
        title: 'BCK üçgeni',
        detail: '|CB| = a ve |CK| = |m| · a olduğundan Alan(BCK) = |m| · a² / 2.',
      },
      {
        title: 'BAL üçgeni',
        detail: '|BA| = a ve |AL| = a / |m| olduğundan Alan(BAL) = a² / (2|m|).',
      },
      {
        title: 'Oranı kur',
        detail: '|m| · a² / 2 = 9 · a² / (2|m|) ⇒ m² = 9 ⇒ |m| = 3.',
      },
      {
        title: 'Sonuç',
        detail: 'd doğrusu azalan olduğundan eğimi −3 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'lines-16',
    topic: 'Dik doğrular ve eksen üzerindeki uzunluk',
    given: ['d₁ ⊥ d₂', 'd₁ doğrusunun eğimi 2/3', 'A(x, 6)'],
    // Origin (185, 290), 22 px per unit; drawn with A(3, 6), C(−6, 0), B(7, 0).
    figure: {
      viewBox: '0 100 400 225',
      caption: 'Şekil 6',
      label:
        'Koordinat düzleminde d₁ ve d₂ doğruları A(x, 6) noktasında dik kesişiyor. d₁ doğrusu x eksenini C noktasında, d₂ doğrusu x eksenini B noktasında kesiyor; C orijinin solunda, B sağında.',
      svg: `
          <path class="ln" d="M20,290 L390,290"/>
          <path class="ln" d="M380,284 L390,290 L380,296"/>
          <path class="ln" d="M185,318 L185,108"/>
          <path class="ln" d="M179,118 L185,108 L191,118"/>
          <text x="386" y="312" text-anchor="middle">x</text>
          <text x="197" y="118">y</text>
          <path class="ln" d="M31,304.7 L295,128.7"/>
          <path class="ln" d="M229,125 L356.6,316.4"/>
          <path class="ln" d="M242.68,163.55 L248.23,171.87 L256.55,166.32"/>
          <circle class="pt" cx="251" cy="158" r="3.2"/>
          <circle class="pt" cx="53" cy="290" r="3.2"/>
          <circle class="pt" cx="339" cy="290" r="3.2"/>
          <text x="177" y="308" text-anchor="end">O</text>
          <text x="266" y="170">A(x, 6)</text>
          <text x="47" y="282" text-anchor="end">C</text>
          <text x="345" y="282">B</text>
          <text x="300" y="130">d₁</text>
          <text x="236" y="122">d₂</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki şekilde d₁ doğrusunun eğimi 2/3 olduğuna göre, |BC| kaç birimdir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '13' },
      { key: 'D', text: '15' },
      { key: 'E', text: '16' },
    ],
    answer: 'C',
    hint: 'A dan x eksenine bir dikme indir; eğim, dikey değişimin yatay değişime oranıdır.',
    solution: [
      {
        title: 'd₂ nin eğimi',
        detail: 'd₁ ⊥ d₂ olduğundan m₂ = −1 / (2/3) = −3/2 dir.',
      },
      {
        title: 'C ye olan yatay uzaklık',
        detail: 'A nın yüksekliği 6 dır. d₁ boyunca 6 birim inmek için 6 / (2/3) = 9 birim sola gidilir.',
      },
      {
        title: 'B ye olan yatay uzaklık',
        detail: 'd₂ boyunca 6 birim inmek için 6 / (3/2) = 4 birim sağa gidilir.',
      },
      {
        title: 'Sonuç',
        detail: '|BC| = 9 + 4 = 13 birimdir; x in değeri sonucu etkilemez.',
      },
    ],
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'lines-17',
    topic: 'Doğrular ve eksenlerle sınırlı bölgenin alanı',
    // Origin (90, 290), 26 px per unit on both axes.
    figure: {
      viewBox: '0 40 400 290',
      caption: 'Şekil 7',
      label:
        'Koordinat düzleminde y − x = 2 doğrusu y eksenini (0, 2) noktasında, x + y = 10 doğrusu x eksenini (10, 0) noktasında kesiyor; iki doğru (4, 6) noktasında kesişiyor. Bu iki doğru ile eksenler arasında kalan dörtgensel bölge taralı.',
      svg: `
          <path class="shade" d="M90,290 L350,290 L194,134 L90,238 Z"/>
          <path class="ln" d="M20,290 L390,290"/>
          <path class="ln" d="M380,284 L390,290 L380,296"/>
          <path class="ln" d="M90,310 L90,50"/>
          <path class="ln" d="M84,60 L90,50 L96,60"/>
          <text x="386" y="280" text-anchor="middle">x</text>
          <text x="102" y="60">y</text>
          <path class="ln" d="M25,303 L246,82"/>
          <path class="ln" d="M129,69 L376,316"/>
          <text x="82" y="308" text-anchor="end">O</text>
          <text x="82" y="228" text-anchor="end">2</text>
          <text x="340" y="308" text-anchor="middle">10</text>
          <text x="254" y="90">y − x = 2</text>
          <text x="370" y="328" text-anchor="end">x + y = 10</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki şekilde y − x = 2 ve x + y = 10 doğruları ile eksenler arasında kalan taralı bölgenin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '32' },
      { key: 'C', text: '34' },
      { key: 'D', text: '36' },
      { key: 'E', text: '40' },
    ],
    answer: 'C',
    hint: 'İki doğrunun kesişim noktasını bul, sonra taralı dörtgeni O dan geçen bir köşegenle iki üçgene ayır.',
    solution: [
      {
        title: 'Kesişim noktası',
        detail: 'y = x + 2 ifadesi x + y = 10 da yerine yazılırsa 2x + 2 = 10 ⇒ x = 4, y = 6. Köşe (4, 6) dır.',
      },
      {
        title: 'Köşeler',
        detail: 'Taralı dörtgenin köşeleri O(0, 0), (10, 0), (4, 6) ve (0, 2) dir.',
      },
      {
        title: 'Birinci üçgen',
        detail: 'O, (10, 0), (4, 6) üçgeni: taban 10, yükseklik 6 ⇒ alan 10 · 6 / 2 = 30.',
      },
      {
        title: 'İkinci üçgen',
        detail: 'O, (4, 6), (0, 2) üçgeni: y eksenindeki taban 2, yükseklik 4 ⇒ alan 2 · 4 / 2 = 4.',
      },
      {
        title: 'Sonuç',
        detail: 'Taralı alan 30 + 4 = 34 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'lines-18',
    topic: 'İki doğrunun kesişim noktası',
    given: ['A(0, 12)', 'B(0, 6)', 'C(9, 0)', 'D(18, 0)'],
    // Origin (45, 260), 18 px per unit on both axes.
    figure: {
      viewBox: '0 10 400 290',
      caption: 'Şekil 8',
      label:
        'Koordinat düzleminde A ve B noktaları y ekseni, C ve D noktaları x ekseni üzerinde. AC ve BD doğruları P noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M15,260 L395,260"/>
          <path class="ln" d="M385,254 L395,260 L385,266"/>
          <path class="ln" d="M45,285 L45,18"/>
          <path class="ln" d="M39,28 L45,18 L51,28"/>
          <text x="388" y="282" text-anchor="middle">x</text>
          <text x="35" y="28" text-anchor="end">y</text>
          <path class="ln" d="M36,32 L225,284"/>
          <path class="ln" d="M27,146 L390.6,267.2"/>
          <circle class="pt" cx="45" cy="44" r="3.2"/>
          <circle class="pt" cx="45" cy="152" r="3.2"/>
          <circle class="pt" cx="207" cy="260" r="3.2"/>
          <circle class="pt" cx="369" cy="260" r="3.2"/>
          <circle class="pt" cx="153" cy="188" r="3.2"/>
          <text x="37" y="278" text-anchor="end">O</text>
          <text x="53" y="42">A</text>
          <text x="53" y="148">B</text>
          <text x="201" y="280" text-anchor="end">C</text>
          <text x="365" y="280" text-anchor="end">D</text>
          <text x="158" y="176">P</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki verilere göre, P noktasının orijine uzaklığı kaç birimdir?',
    choices: [
      { key: 'A', text: '2√10' },
      { key: 'B', text: '7' },
      { key: 'C', text: '2√13' },
      { key: 'D', text: '3√6' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'Eksenleri kestiği noktalardan AC ve BD doğrularının denklemlerini x/a + y/b = 1 biçiminde yaz.',
    solution: [
      {
        title: 'AC doğrusu',
        detail: 'x/9 + y/12 = 1 ⇒ 4x + 3y = 36.',
      },
      {
        title: 'BD doğrusu',
        detail: 'x/18 + y/6 = 1 ⇒ x + 3y = 18.',
      },
      {
        title: 'Kesişim noktası',
        detail: 'Denklemler taraf tarafa çıkarılırsa 3x = 18 ⇒ x = 6, y = 4. P(6, 4) tür.',
      },
      {
        title: 'Sonuç',
        detail: '|OP| = √(6² + 4²) = √52 = 2√13 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 19
  {
    id: 'lines-19',
    topic: 'İkizkenar dik üçgen ve doğru denklemi',
    given: ['[AC] ⊥ [CB]', 'C(6, 2)', '|AC| = |BC|'],
    // Origin (140, 200), 22 px per unit; drawn with A(0, 8), B(0, −4), E(4, 0).
    figure: {
      viewBox: '0 -6 400 316',
      caption: 'Şekil 9',
      label:
        'Koordinat düzleminde A ve B noktaları y ekseni üzerinde, C(6, 2) noktası birinci bölgede. ACB açısı dik ve |AC| = |BC|. BC doğru parçası x eksenini E noktasında kesiyor; d doğrusu A ve E noktalarından geçiyor.',
      svg: `
          <path class="ln" d="M100,200 L390,200"/>
          <path class="ln" d="M380,194 L390,200 L380,206"/>
          <path class="ln" d="M140,305 L140,0"/>
          <path class="ln" d="M134,10 L140,0 L146,10"/>
          <text x="386" y="220" text-anchor="middle">x</text>
          <text x="152" y="10">y</text>
          <path class="ln" d="M140,24 L272,156 L140,288"/>
          <path class="ln" d="M140,24 L270,284"/>
          <path class="ln" d="M264.93,148.93 L257.86,156 L264.93,163.07"/>
          <circle class="pt" cx="140" cy="24" r="3.2"/>
          <circle class="pt" cx="140" cy="288" r="3.2"/>
          <circle class="pt" cx="272" cy="156" r="3.2"/>
          <circle class="pt" cx="228" cy="200" r="3.2"/>
          <text x="132" y="218" text-anchor="end">O</text>
          <text x="132" y="30" text-anchor="end">A</text>
          <text x="132" y="294" text-anchor="end">B</text>
          <text x="280" y="152">C(6, 2)</text>
          <text x="228" y="226" text-anchor="middle">E</text>
          <text x="278" y="290">d</text>
        `,
    },
    stem: [],
    ask: 'Dik koordinat sistemindeki verilere göre, A ve E noktalarından geçen d doğrusunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'x + 2y − 8 = 0' },
      { key: 'B', text: '2x + y − 8 = 0' },
      { key: 'C', text: '2x − y + 8 = 0' },
      { key: 'D', text: 'x + y − 4 = 0' },
      { key: 'E', text: '2x + y − 4 = 0' },
    ],
    answer: 'B',
    hint: 'C den y eksenine bir dikme indir; oluşan iki dik üçgen eş olduğundan A ve B nin ordinatlarını bulabilirsin.',
    solution: [
      {
        title: 'A ve B nin yeri',
        detail: 'C den y eksenine indirilen dikmenin ayağı H(0, 2), |CH| = 6. ACH ve CBH eş dik üçgenlerdir, bu yüzden |AH| = |BH| = 6. A(0, 8) ve B(0, −4) tür.',
      },
      {
        title: 'BC doğrusu',
        detail: 'Eğim (2 − (−4)) / 6 = 1, denklem y = x − 4 tür. y = 0 için x = 4, yani E(4, 0).',
      },
      {
        title: 'AE doğrusu',
        detail: 'Eksenleri (4, 0) ve (0, 8) de kestiğinden x/4 + y/8 = 1 dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Her iki taraf 8 ile çarpılırsa 2x + y − 8 = 0 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 20
  {
    id: 'lines-20',
    topic: 'Doğrunun noktaya göre simetriği',
    stem: [
      'Analitik düzlemde denklemi 2x − 5y − 4 = 0 olan doğrunun A(4, −1) noktasına göre simetriği olan doğru çiziliyor.',
    ],
    ask: 'Buna göre, simetrik doğrunun x eksenini kestiği noktanın apsisi kaçtır?',
    choices: [
      { key: 'A', text: '7' },
      { key: 'B', text: '9' },
      { key: 'C', text: '11' },
      { key: 'D', text: '13' },
      { key: 'E', text: '15' },
    ],
    answer: 'C',
    hint: 'Doğru üzerinde bir nokta seç ve A ya göre simetriğini al; simetrik doğru verilen doğruya paraleldir.',
    solution: [
      {
        title: 'Paralel doğru',
        detail: 'Bir doğrunun noktaya göre simetriği ona paraleldir, yani 2x − 5y + c = 0 biçimindedir.',
      },
      {
        title: 'Bir noktanın simetriği',
        detail: 'P(2, 0) verilen doğru üzerindedir. A(4, −1) orta nokta olduğundan simetriği P′(2·4 − 2, 2·(−1) − 0) = (6, −2) dir.',
      },
      {
        title: 'c nin bulunması',
        detail: '2·6 − 5·(−2) + c = 0 ⇒ 22 + c = 0 ⇒ c = −22. Simetrik doğru 2x − 5y − 22 = 0 dır.',
      },
      {
        title: 'Sonuç',
        detail: 'y = 0 için 2x = 22 ⇒ x = 11 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'lines-21',
    topic: 'Eşkenar dörtgen ve doğru denklemi',
    given: ['ABCD eşkenar dörtgen', 'A(−9, 0)', 'B(−4, 0)', 'C noktası y ekseni üzerinde'],
    // Origin (340, 260), 30 px per unit; drawn with C(0, 3), D(−5, 3), E(0, 27/4).
    figure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 10',
      label:
        'Koordinat düzleminde A ve B noktaları x ekseninin negatif tarafında, C noktası y ekseni üzerinde olan ABCD eşkenar dörtgeni; dört kenar da eşit işaretli. AD kenarının uzantısı y eksenini E noktasında kesiyor.',
      svg: `
          <path class="ln" d="M30,260 L395,260"/>
          <path class="ln" d="M385,254 L395,260 L385,266"/>
          <path class="ln" d="M340,290 L340,10"/>
          <path class="ln" d="M334,20 L340,10 L346,20"/>
          <text x="390" y="282" text-anchor="middle">x</text>
          <text x="352" y="22">y</text>
          <path class="ln" d="M70,260 L220,260 L340,170 L190,170 Z"/>
          <path class="ln" d="M50,275 L380,27.5"/>
          <path class="tick" d="M145,253 L145,267"/>
          <path class="tick" d="M265,163 L265,177"/>
          <path class="tick" d="M125.8,209.4 L134.2,220.6"/>
          <path class="tick" d="M275.8,209.4 L284.2,220.6"/>
          <circle class="pt" cx="70" cy="260" r="3.2"/>
          <circle class="pt" cx="220" cy="260" r="3.2"/>
          <circle class="pt" cx="340" cy="170" r="3.2"/>
          <circle class="pt" cx="190" cy="170" r="3.2"/>
          <circle class="pt" cx="340" cy="57.5" r="3.2"/>
          <text x="70" y="282" text-anchor="middle">A</text>
          <text x="220" y="282" text-anchor="middle">B</text>
          <text x="332" y="280" text-anchor="end">O</text>
          <text x="348" y="166">C</text>
          <text x="184" y="162" text-anchor="end">D</text>
          <text x="322" y="50" text-anchor="end">E</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki dik koordinat sisteminde verilenlere göre, A ve E noktalarından geçen doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '4x − 3y + 36 = 0' },
      { key: 'B', text: '3x + 4y + 27 = 0' },
      { key: 'C', text: '3x − 4y − 27 = 0' },
      { key: 'D', text: '3x − 4y + 27 = 0' },
      { key: 'E', text: '4x − 3y + 27 = 0' },
    ],
    answer: 'D',
    hint: 'Eşkenar dörtgenin kenarı |AB| = 5 tir; |BC| = 5 eşitliğinden C nin ordinatını bul.',
    solution: [
      {
        title: 'C noktası',
        detail: '|AB| = 5 tir. C(0, h) için |BC|² = 4² + h² = 25 ⇒ h = 3, yani C(0, 3).',
      },
      {
        title: 'D noktası',
        detail: 'DC ∥ AB ve |DC| = 5 olduğundan D(−5, 3) tür.',
      },
      {
        title: 'AD doğrusunun eğimi',
        detail: 'm = (3 − 0) / (−5 − (−9)) = 3/4. E noktası AD doğrusu üzerindedir.',
      },
      {
        title: 'Sonuç',
        detail: 'y = (3/4)(x + 9) ⇒ 4y = 3x + 27 ⇒ 3x − 4y + 27 = 0 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 22
  {
    id: 'lines-22',
    topic: 'Dış açıortay doğrusunun eğimi',
    given: ['A(0, 6)', 'B(8, 0)'],
    // Origin (70, 270), 26 px per unit; d has slope 1/2 through A.
    figure: {
      viewBox: '0 -30 400 330',
      caption: 'Şekil 11',
      label:
        'Koordinat düzleminde A(0, 6) y ekseni, B(8, 0) x ekseni üzerinde; AOB dik üçgeni çizili. A dan geçen d doğrusu, y ekseninin A nın üstünde kalan parçası ile AB kenarı arasındaki dış açıyı iki eş α açısına bölüyor.',
      svg: `
          <path class="ln" d="M20,270 L390,270"/>
          <path class="ln" d="M380,264 L390,270 L380,276"/>
          <path class="ln" d="M70,295 L70,-24"/>
          <path class="ln" d="M64,-14 L70,-24 L76,-14"/>
          <text x="386" y="292" text-anchor="middle">x</text>
          <text x="82" y="-12">y</text>
          <path class="ln" d="M70,114 L278,270"/>
          <path class="ln" d="M30,134 L330,-16"/>
          <path class="arc" d="M70,92 A22,22 0 0 1 89.68,104.16"/>
          <path class="arc" d="M89.68,104.16 A22,22 0 0 1 87.6,127.2"/>
          <circle class="pt" cx="70" cy="114" r="3.2"/>
          <circle class="pt" cx="278" cy="270" r="3.2"/>
          <text class="val" x="84" y="80">α</text>
          <text class="val" x="104" y="122">α</text>
          <text x="62" y="290" text-anchor="end">O</text>
          <text x="62" y="106" text-anchor="end">A</text>
          <text x="278" y="292" text-anchor="middle">B</text>
          <text x="300" y="-10">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki dik koordinat sisteminde AOB üçgeninin A köşesindeki dış açıortayı olan d doğrusunun eğimi kaçtır?',
    choices: [
      { key: 'A', text: '1/2' },
      { key: 'B', text: '2/3' },
      { key: 'C', text: '1' },
      { key: 'D', text: '3/2' },
      { key: 'E', text: '2' },
    ],
    answer: 'A',
    hint: 'Dış açıortay, iç açıortaya diktir; önce A daki iç açıortayın eğimini bul.',
    solution: [
      {
        title: 'Kenar uzunlukları',
        detail: '|OA| = 6, |OB| = 8 ⇒ |AB| = 10 dur.',
      },
      {
        title: 'İç açıortay',
        detail: 'A daki iç açıortay [OB] kenarını |OA| : |AB| = 6 : 10 oranında böler; kestiği noktanın O ya uzaklığı 8 · 6/16 = 3, yani (3, 0) noktasından geçer. Eğimi (0 − 6) / (3 − 0) = −2 dir.',
      },
      {
        title: 'Dış açıortay',
        detail: 'İç ve dış açıortaylar birbirine diktir; eğimler çarpımı −1 olmalıdır.',
      },
      {
        title: 'Sonuç',
        detail: 'm_d = −1 / (−2) = 1/2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  {
    id: 'lines-23',
    topic: 'Doğru ve kare',
    given: ['d: x/9 + y/12 = 1', 'Alan(ABCD) = 9 birim kare'],
    // Origin (110, 290), 22 px per unit; drawn with A(0, 5), C(3, 8), K(0, 12), L(9, 0).
    figure: {
      viewBox: '0 -10 400 350',
      caption: 'Şekil 12',
      label:
        'Koordinat düzleminde d doğrusu y eksenini K, x eksenini L noktasında kesiyor. A ve D köşeleri y ekseni üzerinde olan ABCD karesi taralı; karenin C köşesi d doğrusu üzerinde.',
      svg: `
          <path class="shade" d="M110,180 L176,180 L176,114 L110,114 Z"/>
          <path class="ln" d="M40,290 L390,290"/>
          <path class="ln" d="M380,284 L390,290 L380,296"/>
          <path class="ln" d="M110,320 L110,-4"/>
          <path class="ln" d="M104,6 L110,-4 L116,6"/>
          <text x="386" y="310" text-anchor="middle">x</text>
          <text x="122" y="4">y</text>
          <path class="ln" d="M110,180 L176,180 L176,114 L110,114 Z"/>
          <path class="ln" d="M95,6 L338,330"/>
          <circle class="pt" cx="110" cy="26" r="3.2"/>
          <circle class="pt" cx="308" cy="290" r="3.2"/>
          <circle class="pt" cx="176" cy="114" r="3.2"/>
          <text x="100" y="36" text-anchor="end">K</text>
          <text x="102" y="194" text-anchor="end">A</text>
          <text x="182" y="198">B</text>
          <text x="184" y="110">C</text>
          <text x="102" y="110" text-anchor="end">D</text>
          <text x="102" y="308" text-anchor="end">O</text>
          <text x="300" y="308" text-anchor="end">L</text>
          <text x="345" y="322">d</text>
        `,
    },
    stem: [],
    ask: 'Denklemi x/9 + y/12 = 1 olan d doğrusu, alanı 9 birim kare olan ABCD karesinin C köşesinden geçtiğine göre, karenin B köşesinin ordinatı kaçtır?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '9/2' },
      { key: 'C', text: '5' },
      { key: 'D', text: '11/2' },
      { key: 'E', text: '6' },
    ],
    answer: 'C',
    hint: 'Karenin kenarı 3 tür; A(0, a) dersen C nin koordinatlarını a cinsinden yazıp doğruda yerine koy.',
    solution: [
      {
        title: 'Karenin kenarı',
        detail: 'Alan 9 olduğundan kenar 3 tür.',
      },
      {
        title: 'Köşeler',
        detail: 'A(0, a) dersek B(3, a), D(0, a + 3) ve C(3, a + 3) olur.',
      },
      {
        title: 'C doğru üzerinde',
        detail: '3/9 + (a + 3)/12 = 1 ⇒ (a + 3)/12 = 2/3 ⇒ a + 3 = 8 ⇒ a = 5.',
      },
      {
        title: 'Sonuç',
        detail: 'B(3, 5) olduğundan B nin ordinatı 5 tir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24
  {
    id: 'lines-24',
    topic: 'Doğruya ve eksene teğet çember',
    given: ['B(12, 9)'],
    // Origin (35, 260), 17 px per unit; drawn with A(15, 0), M(15, 5), r = 5.
    figure: {
      viewBox: '0 -10 400 300',
      caption: 'Şekil 13',
      label:
        'Koordinat düzleminde orijinden geçen d doğrusu ve M merkezli bir çember. Çember x eksenine A noktasında, d doğrusuna B(12, 9) noktasında teğet.',
      svg: `
          <path class="ln" d="M15,260 L395,260"/>
          <path class="ln" d="M385,254 L395,260 L385,266"/>
          <path class="ln" d="M35,285 L35,-5"/>
          <path class="ln" d="M29,5 L35,-5 L41,5"/>
          <text x="390" y="280" text-anchor="middle">x</text>
          <text x="47" y="4">y</text>
          <path class="ln" d="M35,260 L375,5"/>
          <circle class="ln" cx="290" cy="175" r="85"/>
          <circle class="pt" cx="239" cy="107" r="3.2"/>
          <circle class="pt" cx="290" cy="260" r="3.2"/>
          <circle class="pt" cx="290" cy="175" r="3.2"/>
          <text x="27" y="278" text-anchor="end">O</text>
          <text x="228" y="100" text-anchor="end">B(12, 9)</text>
          <text x="290" y="280" text-anchor="middle">A</text>
          <text x="298" y="180">M</text>
          <text x="384" y="22">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki şekilde M merkezli çember A noktasında x eksenine ve B(12, 9) noktasında da d doğrusuna teğettir. Buna göre, M merkezli çemberin yarıçapı kaç birimdir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '9/2' },
      { key: 'D', text: '5' },
      { key: 'E', text: '6' },
    ],
    answer: 'D',
    hint: 'Dışarıdaki bir noktadan çembere çizilen teğet parçaları eşittir: |OA| = |OB|.',
    solution: [
      {
        title: 'Teğet uzunluğu',
        detail: '|OB| = √(12² + 9²) = 15. O dan çizilen teğet parçaları eşit olduğundan |OA| = 15, yani A(15, 0).',
      },
      {
        title: 'Merkez',
        detail: 'Çember x eksenine A da teğet olduğundan M, A nın tam üstündedir: M(15, r).',
      },
      {
        title: 'Yarıçap teğete dik',
        detail: 'd nin eğimi 9/12 = 3/4 tür; MB ⊥ d olduğundan (r − 9) / (15 − 12) = −4/3 ⇒ r − 9 = −4.',
      },
      {
        title: 'Sonuç',
        detail: 'r = 5 birimdir. (Kontrol: |MB| = √(3² + 4²) = 5.)',
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
    {
      id: 'lines-m3',
      order: 3,
      title: 'Kesişim noktaları ve alanlar',
      summary:
        'Dik doğruların kesişimi, eksen noktalarından doğru denklemi, kare ve eğim, dik doğrularla uzunluk, taralı alan ve kesişim noktasının uzaklığı.',
      questions: pick('lines-13', 'lines-14', 'lines-15', 'lines-16', 'lines-17', 'lines-18'),
    },
    {
      id: 'lines-m4',
      order: 4,
      title: 'Teğetler, açıortaylar ve simetri',
      summary:
        'İkizkenar dik üçgenle doğru denklemi, doğrunun noktaya göre simetriği, eşkenar dörtgen, dış açıortayın eğimi, doğru ile kare ve teğet çember.',
      questions: pick('lines-19', 'lines-20', 'lines-21', 'lines-22', 'lines-23', 'lines-24'),
    },
  ],
};
