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
  ],
};
