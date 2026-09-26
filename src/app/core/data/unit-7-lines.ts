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
        detail:
          'a = −5 bulunur. Sabit terimler orantılı olmadığından doğrular çakışık değil, paraleldir.',
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
        detail:
          '(0, 30) ve K(4, 22) noktalarından eğim m = (22 − 30)/(4 − 0) = −2 dir; mum saatte 2 cm kısalır.',
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
        detail:
          'y = 3x − 1 ikinci denklemde yerine yazılırsa x + 9x − 3 − 7 = 0 ⇒ x = 1, y = 2. A(1, 2) dir.',
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
        detail:
          'A nın yüksekliği 6 dır. d₁ boyunca 6 birim inmek için 6 / (2/3) = 9 birim sola gidilir.',
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
        detail:
          'y = x + 2 ifadesi x + y = 10 da yerine yazılırsa 2x + 2 = 10 ⇒ x = 4, y = 6. Köşe (4, 6) dır.',
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
        detail:
          'O, (4, 6), (0, 2) üçgeni: y eksenindeki taban 2, yükseklik 4 ⇒ alan 2 · 4 / 2 = 4.',
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
        detail:
          'C den y eksenine indirilen dikmenin ayağı H(0, 2), |CH| = 6. ACH ve CBH eş dik üçgenlerdir, bu yüzden |AH| = |BH| = 6. A(0, 8) ve B(0, −4) tür.',
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
        detail:
          'Bir doğrunun noktaya göre simetriği ona paraleldir, yani 2x − 5y + c = 0 biçimindedir.',
      },
      {
        title: 'Bir noktanın simetriği',
        detail:
          'P(2, 0) verilen doğru üzerindedir. A(4, −1) orta nokta olduğundan simetriği P′(2·4 − 2, 2·(−1) − 0) = (6, −2) dir.',
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
        detail:
          'A daki iç açıortay [OB] kenarını |OA| : |AB| = 6 : 10 oranında böler; kestiği noktanın O ya uzaklığı 8 · 6/16 = 3, yani (3, 0) noktasından geçer. Eğimi (0 − 6) / (3 − 0) = −2 dir.',
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
        detail:
          '|OB| = √(12² + 9²) = 15. O dan çizilen teğet parçaları eşit olduğundan |OA| = 15, yani A(15, 0).',
      },
      {
        title: 'Merkez',
        detail: 'Çember x eksenine A da teğet olduğundan M, A nın tam üstündedir: M(15, r).',
      },
      {
        title: 'Yarıçap teğete dik',
        detail:
          'd nin eğimi 9/12 = 3/4 tür; MB ⊥ d olduğundan (r − 9) / (15 − 12) = −4/3 ⇒ r − 9 = −4.',
      },
      {
        title: 'Sonuç',
        detail: 'r = 5 birimdir. (Kontrol: |MB| = √(3² + 4²) = 5.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 25
  {
    id: 'lines-25',
    topic: 'İki noktadan geçen doğrunun eğimi',
    stem: [],
    ask: 'Analitik düzlemde verilen A(2, −5) ve B(t, 3) noktalarından geçen doğrunun eğimi 2 olduğuna göre, t kaçtır?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '7' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'Eğim, ordinatlar farkının apsisler farkına oranıdır: m = (y₂ − y₁)/(x₂ − x₁).',
    solution: [
      {
        title: 'Eğim formülü',
        detail: 'm = (3 − (−5)) / (t − 2) = 8 / (t − 2).',
      },
      {
        title: 'Eğimi 2 ye eşitle',
        detail: '8 / (t − 2) = 2 ⇒ t − 2 = 4.',
      },
      {
        title: 'Sonuç',
        detail: 't = 6 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26
  {
    id: 'lines-26',
    topic: 'Doğrunun y eksenini kestiği nokta',
    stem: [],
    ask: 'Analitik düzlemde 2x − y/3 = 1 denklemi ile verilen doğrunun y eksenini kestiği noktanın ordinatı kaçtır?',
    choices: [
      { key: 'A', text: '−3' },
      { key: 'B', text: '−1/3' },
      { key: 'C', text: '1/3' },
      { key: 'D', text: '1' },
      { key: 'E', text: '3' },
    ],
    answer: 'A',
    hint: 'y eksenindeki her noktanın apsisi 0 dır; denklemde x = 0 yaz.',
    solution: [
      {
        title: 'x = 0 al',
        detail: 'y ekseni üzerindeki noktalar için x = 0 olduğundan 2·0 − y/3 = 1 olur.',
      },
      {
        title: 'Denklemi çöz',
        detail: '−y/3 = 1 ⇒ y = −3.',
      },
      {
        title: 'Sonuç',
        detail: 'Doğru y eksenini (0, −3) noktasında keser; ordinat −3 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27
  {
    id: 'lines-27',
    topic: 'Genel denklemden eğim',
    stem: [],
    ask: 'Analitik düzlemde 4x − 2y + 7 = 0 denklemi ile verilen doğrunun eğimi kaçtır?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '−1/2' },
      { key: 'C', text: '1/2' },
      { key: 'D', text: '2' },
      { key: 'E', text: '4' },
    ],
    answer: 'D',
    hint: 'Denklemi y yalnız kalacak biçimde düzenle; x in katsayısı eğimdir.',
    solution: [
      {
        title: 'y yi yalnız bırak',
        detail: '4x − 2y + 7 = 0 ⇒ 2y = 4x + 7 ⇒ y = 2x + 7/2.',
      },
      {
        title: 'Eğimi oku',
        detail:
          'y = mx + n biçiminde x in katsayısı m = 2 dir. (Kısa yol: ax + by + c = 0 için m = −a/b = −4/(−2) = 2.)',
      },
      {
        title: 'Sonuç',
        detail: 'Doğrunun eğimi 2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 28
  {
    id: 'lines-28',
    topic: 'Eğimi ve x kesimi verilen doğru',
    stem: [],
    ask: 'Eğimi −2 olan ve x eksenini apsisi 3 olan noktada kesen doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'y − 2x + 6 = 0' },
      { key: 'B', text: 'y + 2x − 6 = 0' },
      { key: 'C', text: '2y + x − 3 = 0' },
      { key: 'D', text: 'y + 2x + 6 = 0' },
      { key: 'E', text: 'y − 2x − 6 = 0' },
    ],
    answer: 'B',
    hint: 'Doğru (3, 0) noktasından geçer; y − y₁ = m(x − x₁) formülünü kullan.',
    solution: [
      {
        title: 'Geçtiği nokta',
        detail: 'x eksenini apsisi 3 olan noktada kestiğinden doğru (3, 0) noktasından geçer.',
      },
      {
        title: 'Nokta-eğim formülü',
        detail: 'y − 0 = −2(x − 3) ⇒ y = −2x + 6.',
      },
      {
        title: 'Sonuç',
        detail: 'Terimleri bir tarafa toplarsak y + 2x − 6 = 0 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 29
  {
    id: 'lines-29',
    topic: 'Orijinden geçen doğrunun denklemi',
    given: ['A(−2, 6)', 'A ∈ d'],
    // Origin (200, 200), 24 px per unit; d is y = −3x.
    figure: {
      viewBox: '0 0 400 320',
      caption: 'Şekil 14',
      label:
        'Koordinat düzleminde başlangıç noktasından ve ikinci bölgedeki A(−2, 6) noktasından geçen d doğrusu.',
      svg: `
          <path class="ln" d="M30,200 L385,200"/>
          <path class="ln" d="M375,194 L385,200 L375,206"/>
          <path class="ln" d="M200,315 L200,8"/>
          <path class="ln" d="M194,18 L200,8 L206,18"/>
          <text x="382" y="220" text-anchor="middle">x</text>
          <text x="212" y="20">y</text>
          <path class="ln" d="M137.6,12.8 L233.6,300.8"/>
          <circle class="pt" cx="152" cy="56" r="3.2"/>
          <circle class="pt" cx="200" cy="200" r="3.2"/>
          <text x="140" y="60" text-anchor="end">A</text>
          <text x="192" y="218" text-anchor="end">O</text>
          <text x="128" y="26" text-anchor="end">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki dik koordinat sisteminde A(−2, 6) noktasından ve başlangıç noktasından geçen d doğrusunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'y = −x' },
      { key: 'B', text: 'y = −2x' },
      { key: 'C', text: 'y = 3x' },
      { key: 'D', text: 'y = −4x' },
      { key: 'E', text: 'y = −3x' },
    ],
    answer: 'E',
    hint: 'Orijinden geçen doğrunun denklemi y = mx biçimindedir; m yi A noktasından bul.',
    solution: [
      {
        title: 'Denklemin biçimi',
        detail: 'd doğrusu O(0, 0) dan geçtiği için denklemi y = mx tir.',
      },
      {
        title: 'Eğim',
        detail: 'm = (6 − 0) / (−2 − 0) = −3.',
      },
      {
        title: 'Sonuç',
        detail: 'd doğrusunun denklemi y = −3x tir. (Kontrol: x = −2 için y = 6.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 30
  {
    id: 'lines-30',
    topic: 'Eğimi ve bir noktası verilen doğru',
    stem: [],
    ask: 'Eğimi 2/5 olan ve (−1, 0) noktasından geçen doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '2x − 5y − 2 = 0' },
      { key: 'B', text: '5x − 2y + 5 = 0' },
      { key: 'C', text: '2x − 5y + 2 = 0' },
      { key: 'D', text: '2x + 5y + 2 = 0' },
      { key: 'E', text: '5y − 2x + 2 = 0' },
    ],
    answer: 'C',
    hint: 'y − y₁ = m(x − x₁) yaz, sonra paydadan kurtulmak için iki tarafı 5 ile çarp.',
    solution: [
      {
        title: 'Nokta-eğim formülü',
        detail: 'y − 0 = (2/5)(x − (−1)) ⇒ y = (2/5)(x + 1).',
      },
      {
        title: 'Paydayı yok et',
        detail: 'İki tarafı 5 ile çarparsak 5y = 2x + 2 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Terimleri bir tarafa toplarsak 2x − 5y + 2 = 0 bulunur. (Kontrol: (−1, 0) için −2 − 0 + 2 = 0.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'lines-31',
    topic: 'Eğimden eksen kesim noktası',
    // Origin (200, 230), 40 px per unit; d is y = −3x/4 + 3/2 through A(−2, 3) and B(2, 0).
    figure: {
      viewBox: '0 0 400 320',
      caption: 'Şekil 15',
      label:
        'Koordinat düzleminde A(−2, 3) noktasından geçen ve x eksenini pozitif tarafta B noktasında kesen d doğrusu.',
      svg: `
          <path class="ln" d="M30,230 L385,230"/>
          <path class="ln" d="M375,224 L385,230 L375,236"/>
          <path class="ln" d="M200,310 L200,15"/>
          <path class="ln" d="M194,25 L200,15 L206,25"/>
          <text x="382" y="250" text-anchor="middle">x</text>
          <text x="212" y="27">y</text>
          <path class="ln" d="M80,80 L350,282.5"/>
          <circle class="pt" cx="120" cy="110" r="3.2"/>
          <circle class="pt" cx="280" cy="230" r="3.2"/>
          <circle class="pt" cx="200" cy="230" r="3.2"/>
          <text x="128" y="100">A(−2, 3)</text>
          <text x="192" y="248" text-anchor="end">O</text>
          <text x="280" y="215" text-anchor="middle">B</text>
          <text x="72" y="78" text-anchor="end">d</text>
        `,
    },
    stem: [],
    ask: 'Analitik düzlemde verilen yukarıdaki şekilde A(−2, 3) noktasından geçen d doğrusunun eğimi −3/4 tür. Buna göre, B noktasının apsisi kaçtır?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4' },
      { key: 'E', text: '5' },
    ],
    answer: 'B',
    hint: 'B x ekseni üzerinde olduğundan B(b, 0) yaz ve A ile B arasındaki eğimi −3/4 e eşitle.',
    solution: [
      {
        title: 'B nin koordinatları',
        detail: 'B, x ekseni üzerinde olduğundan B(b, 0) dır.',
      },
      {
        title: 'Eğim eşitliği',
        detail: '(0 − 3) / (b − (−2)) = −3/4 ⇒ −3 / (b + 2) = −3/4.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'b + 2 = 4 ⇒ b = 2.',
      },
      {
        title: 'Sonuç',
        detail: 'B noktasının apsisi 2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 32
  {
    id: 'lines-32',
    topic: 'Eksen kesim noktalarından doğru denklemi',
    // Origin (200, 220), 40 px per unit; d is y = 2x + 4 through (−2, 0) and (0, 4).
    figure: {
      viewBox: '0 0 400 320',
      caption: 'Şekil 16',
      label: 'Koordinat düzleminde x eksenini −2 de, y eksenini 4 te kesen d doğrusu.',
      svg: `
          <path class="ln" d="M30,220 L385,220"/>
          <path class="ln" d="M375,214 L385,220 L375,226"/>
          <path class="ln" d="M200,310 L200,15"/>
          <path class="ln" d="M194,25 L200,15 L206,25"/>
          <text x="382" y="240" text-anchor="middle">x</text>
          <text x="212" y="27">y</text>
          <path class="ln" d="M80,300 L220,20"/>
          <circle class="pt" cx="120" cy="220" r="3.2"/>
          <circle class="pt" cx="200" cy="60" r="3.2"/>
          <text x="128" y="240" text-anchor="middle">−2</text>
          <text x="210" y="66">4</text>
          <text x="192" y="238" text-anchor="end">O</text>
          <text x="230" y="30">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki dik koordinat sisteminde verilen d doğrusunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'y = −2x − 4' },
      { key: 'B', text: 'y = 2x + 4' },
      { key: 'C', text: 'y = x/2 + 4' },
      { key: 'D', text: 'x/2 + y/4 = 1' },
      { key: 'E', text: '2y = x − 2' },
    ],
    answer: 'B',
    hint: 'Eksenleri (a, 0) ve (0, b) noktalarında kesen doğrunun denklemi x/a + y/b = 1 dir.',
    solution: [
      {
        title: 'Kesim noktaları',
        detail: 'd doğrusu x eksenini (−2, 0), y eksenini (0, 4) noktasında keser.',
      },
      {
        title: 'Eksen kesim formu',
        detail: 'x/(−2) + y/4 = 1 yazılır.',
      },
      {
        title: 'Düzenle',
        detail: 'İki tarafı 4 ile çarparsak −2x + y = 4 ⇒ y = 2x + 4 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'd doğrusunun denklemi y = 2x + 4 tür. (Kontrol: x = −2 için y = 0.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 33
  {
    id: 'lines-33',
    topic: 'Doğrusal noktalar',
    stem: [],
    ask: 'Analitik düzlemde verilen A(−2, 1), B(1, n) ve C(4, 13) noktalarının doğrusal olması için n kaç olmalıdır?',
    choices: [
      { key: 'A', text: '7' },
      { key: 'B', text: '9' },
      { key: 'C', text: '11' },
      { key: 'D', text: '13' },
      { key: 'E', text: '15' },
    ],
    answer: 'A',
    hint: 'Üç nokta doğrusal ise AB ve AC doğrularının eğimleri eşittir.',
    solution: [
      {
        title: 'AC nin eğimi',
        detail: 'm(AC) = (13 − 1) / (4 − (−2)) = 12/6 = 2.',
      },
      {
        title: 'AB nin eğimi',
        detail: 'm(AB) = (n − 1) / (1 − (−2)) = (n − 1)/3.',
      },
      {
        title: 'Eğimleri eşitle',
        detail: '(n − 1)/3 = 2 ⇒ n − 1 = 6.',
      },
      {
        title: 'Sonuç',
        detail: 'n = 7 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  {
    id: 'lines-34',
    topic: 'Doğru üzerindeki nokta',
    stem: [],
    ask: '3y − 2x − 6 = 0 doğrusu üzerinde alınan iki nokta A(a, 4) ve B(b, −2) olduğuna göre, a − b farkı kaçtır?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '3' },
      { key: 'C', text: '5' },
      { key: 'D', text: '7' },
      { key: 'E', text: '9' },
    ],
    answer: 'E',
    hint: 'Doğru üzerindeki bir nokta doğrunun denklemini sağlar; koordinatları denklemde yerine yaz.',
    solution: [
      {
        title: 'A noktasını yerine yaz',
        detail: '3·4 − 2a − 6 = 0 ⇒ 6 − 2a = 0 ⇒ a = 3.',
      },
      {
        title: 'B noktasını yerine yaz',
        detail: '3·(−2) − 2b − 6 = 0 ⇒ −12 − 2b = 0 ⇒ b = −6.',
      },
      {
        title: 'Sonuç',
        detail: 'a − b = 3 − (−6) = 9 dur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 35
  {
    id: 'lines-35',
    topic: 'Doğru ile eksenlerin oluşturduğu üçgenin alanı',
    stem: [],
    ask: 'Denklemi −x/6 + y/a = 1 olan doğru ve koordinat eksenlerinin oluşturduğu üçgenin alanı 27 birimkare olduğuna göre, a nın pozitif değeri kaçtır?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '9' },
      { key: 'C', text: '12' },
      { key: 'D', text: '15' },
      { key: 'E', text: '18' },
    ],
    answer: 'B',
    hint: 'Denklemi x/(−6) + y/a = 1 biçiminde oku; doğrunun eksenleri kestiği noktalar hemen görünür.',
    solution: [
      {
        title: 'Kesim noktaları',
        detail:
          '−x/6 + y/a = 1 ⇔ x/(−6) + y/a = 1; doğru eksenleri (−6, 0) ve (0, a) noktalarında keser.',
      },
      {
        title: 'Üçgenin alanı',
        detail: 'Dik kenarlar 6 ve |a| olduğundan alan = 6·|a|/2 = 3|a| dır.',
      },
      {
        title: 'Alanı eşitle',
        detail: '3|a| = 27 ⇒ |a| = 9.',
      },
      {
        title: 'Sonuç',
        detail: 'a nın pozitif değeri 9 dur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 36
  {
    id: 'lines-36',
    topic: 'İki noktadan geçen doğrunun denklemi',
    stem: [],
    ask: 'A(2, 3) ve B(−1, −3) noktalarından geçen doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'x − 2y + 4 = 0' },
      { key: 'B', text: '2x + y − 7 = 0' },
      { key: 'C', text: '2x − y + 1 = 0' },
      { key: 'D', text: '2x − y − 1 = 0' },
      { key: 'E', text: 'x − y + 1 = 0' },
    ],
    answer: 'D',
    hint: 'Önce iki noktadan eğimi bul, sonra y − y₁ = m(x − x₁) yaz.',
    solution: [
      {
        title: 'Eğim',
        detail: 'm = (−3 − 3) / (−1 − 2) = (−6)/(−3) = 2.',
      },
      {
        title: 'Nokta-eğim formülü',
        detail: 'A(2, 3) noktasını kullanırsak y − 3 = 2(x − 2) ⇒ y = 2x − 1.',
      },
      {
        title: 'Genel biçim',
        detail: 'Terimleri bir tarafa toplarsak 2x − y − 1 = 0 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'Kontrol: B için 2·(−1) − (−3) − 1 = 0. Doğrunun denklemi 2x − y − 1 = 0 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 37
  {
    id: 'lines-37',
    topic: 'Eğim açısı ve eğim',
    // Origin (240, 200); y = ax at 120°, y = bx at 150°, both drawn through the origin.
    figure: {
      viewBox: '0 0 400 320',
      caption: 'Şekil 17',
      label:
        'Orijinden geçen y = ax ve y = bx doğruları, y ekseninin pozitif yönü ile x ekseninin negatif yönü arasındaki açıyı üç eş parçaya bölüyor.',
      svg: `
          <path class="ln" d="M40,200 L385,200"/>
          <path class="ln" d="M375,194 L385,200 L375,206"/>
          <path class="ln" d="M240,310 L240,15"/>
          <path class="ln" d="M234,25 L240,15 L246,25"/>
          <text x="382" y="220" text-anchor="middle">x</text>
          <text x="252" y="27">y</text>
          <path class="ln" d="M155,52.8 L295,295.3"/>
          <path class="ln" d="M92.8,115 L326.6,250"/>
          <path class="arc" d="M240,170 A30,30 0 0 0 210,200"/>
          <path class="tick" d="M233.53,175.85 L230.94,166.19"/>
          <path class="tick" d="M222.32,182.32 L215.25,175.25"/>
          <path class="tick" d="M215.85,193.53 L206.19,190.94"/>
          <circle class="pt" cx="240" cy="200" r="3.2"/>
          <text x="250" y="218">O</text>
          <text x="150" y="48" text-anchor="end">y = ax</text>
          <text x="86" y="112" text-anchor="end">y = bx</text>
        `,
    },
    stem: [],
    ask: 'Analitik düzlemde verilen y = ax ve y = bx doğruları, y ekseninin pozitif yönü ile x ekseninin negatif yönü arasındaki açıyı üç eş parçaya böldüğüne göre, b/a oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/3' },
      { key: 'B', text: '√3/3' },
      { key: 'C', text: '1' },
      { key: 'D', text: '√3' },
      { key: 'E', text: '3' },
    ],
    answer: 'A',
    hint: '90° lik açı üç eş parçaya bölünür; her doğrunun x ekseninin pozitif yönüyle yaptığı açıyı bul ve eğim = tan(açı) kullan.',
    solution: [
      {
        title: 'Eş parçalar',
        detail: '90° lik açı üç eş parçaya bölündüğünden her parça 30° dir.',
      },
      {
        title: 'y = ax doğrusu',
        detail:
          'y eksenine yakın olan doğru x ekseninin pozitif yönüyle 90° + 30° = 120° yapar; a = tan 120° = −√3.',
      },
      {
        title: 'y = bx doğrusu',
        detail: 'Diğer doğru 90° + 60° = 150° yapar; b = tan 150° = −√3/3.',
      },
      {
        title: 'Sonuç',
        detail: 'b/a = (−√3/3) / (−√3) = 1/3 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 38
  {
    id: 'lines-38',
    topic: 'Orta nokta ve uzunluk',
    // Origin (100, 280), 40 px per unit; A(0, 6), B(2√7, 0), C(√7, 3).
    figure: {
      viewBox: '0 0 400 320',
      caption: 'Şekil 18',
      label:
        'Koordinat düzleminde A noktası y ekseni, B noktası x ekseni üzerinde; C noktası [AB] üzerinde ve AC ile CB eşit uzunlukta.',
      svg: `
          <path class="ln" d="M60,280 L385,280"/>
          <path class="ln" d="M375,274 L385,280 L375,286"/>
          <path class="ln" d="M100,310 L100,15"/>
          <path class="ln" d="M94,25 L100,15 L106,25"/>
          <text x="382" y="300" text-anchor="middle">x</text>
          <text x="112" y="27">y</text>
          <path class="ln" d="M100,40 L311.66,280"/>
          <path class="tick" d="M147.66,104.63 L158.16,95.37"/>
          <path class="tick" d="M253.5,224.63 L264,215.37"/>
          <circle class="pt" cx="100" cy="40" r="3.2"/>
          <circle class="pt" cx="205.83" cy="160" r="3.2"/>
          <circle class="pt" cx="311.66" cy="280" r="3.2"/>
          <text x="92" y="44" text-anchor="end">A</text>
          <text x="214" y="156">C</text>
          <text x="311.66" y="300" text-anchor="middle">B</text>
          <text x="92" y="298" text-anchor="end">O</text>
        `,
    },
    given: ['|AC| = |BC|', 'C(√7, 3)', 'A, C ve B doğrusal'],
    stem: [],
    ask: 'Dik koordinat sistemindeki verilere göre, |AB| kaç birimdir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '8' },
      { key: 'D', text: '10' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'C, [AB] nin orta noktasıdır; A(0, y) ve B(x, 0) yazıp orta nokta formülünü kullan.',
    solution: [
      {
        title: 'A ve B nin koordinatları',
        detail:
          'A y ekseni üzerinde olduğundan A(0, p), B x ekseni üzerinde olduğundan B(q, 0) dır.',
      },
      {
        title: 'Orta nokta',
        detail: 'C orta nokta olduğundan q/2 = √7 ve p/2 = 3 ⇒ B(2√7, 0), A(0, 6).',
      },
      {
        title: 'Uzunluk',
        detail: '|AB|² = (2√7)² + 6² = 28 + 36 = 64.',
      },
      {
        title: 'Sonuç',
        detail: '|AB| = 8 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39
  {
    id: 'lines-39',
    topic: 'Noktadan geçen doğrunun eğimi',
    stem: [],
    ask: '3y − mx + 9 = 0 doğrusu P(3, 1) noktasından geçtiğine göre, eğimi kaçtır?',
    choices: [
      { key: 'A', text: '−4/3' },
      { key: 'B', text: '1' },
      { key: 'C', text: '4/3' },
      { key: 'D', text: '2' },
      { key: 'E', text: '3' },
    ],
    answer: 'C',
    hint: 'Önce P noktasının koordinatlarını denklemde yerine yazarak m yi bul.',
    solution: [
      {
        title: 'Noktayı yerine yaz',
        detail: 'x = 3, y = 1 için 3·1 − 3m + 9 = 0 ⇒ 12 = 3m ⇒ m = 4.',
      },
      {
        title: 'Doğrunun denklemi',
        detail: '3y − 4x + 9 = 0 ⇒ 3y = 4x − 9 ⇒ y = (4/3)x − 3.',
      },
      {
        title: 'Sonuç',
        detail: 'Doğrunun eğimi 4/3 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'lines-40',
    topic: 'Kare ve dik doğrular',
    // Origin (255, 170), 25 px per unit; d is y = x/3 + 3, A(1, 0), B(4, 1), C(3, 4), D(0, 3).
    figure: {
      viewBox: '0 0 400 200',
      caption: 'Şekil 19',
      label:
        'Koordinat düzleminde eksenleri E ve D noktalarında kesen d doğrusu; ABCD karesinin A köşesi x ekseni üzerinde, DC kenarı d doğrusu üzerinde.',
      svg: `
          <path class="ln" d="M10,170 L385,170"/>
          <path class="ln" d="M375,164 L385,170 L375,176"/>
          <path class="ln" d="M255,195 L255,15"/>
          <path class="ln" d="M249,25 L255,15 L261,25"/>
          <text x="382" y="190" text-anchor="middle">x</text>
          <text x="267" y="27">y</text>
          <path class="ln" d="M15,175 L370,56.67"/>
          <path class="ln" d="M255,95 L280,170 L355,145 L330,70"/>
          <circle class="pt" cx="30" cy="170" r="3.2"/>
          <circle class="pt" cx="255" cy="95" r="3.2"/>
          <circle class="pt" cx="280" cy="170" r="3.2"/>
          <circle class="pt" cx="355" cy="145" r="3.2"/>
          <circle class="pt" cx="330" cy="70" r="3.2"/>
          <text x="30" y="190" text-anchor="middle">E</text>
          <text x="247" y="84" text-anchor="end">D</text>
          <text x="280" y="190" text-anchor="middle">A</text>
          <text x="362" y="150">B</text>
          <text x="324" y="62" text-anchor="end">C</text>
          <text x="374" y="72">d</text>
        `,
    },
    given: ['ABCD bir kare', 'E(−9, 0)', 'D(0, 3)'],
    stem: [
      'Dik koordinat sisteminde verilen ABCD karesinin A köşesi x ekseni üzerinde, [DC] kenarı d doğrusu üzerindedir.',
    ],
    ask: 'd doğrusu eksenleri E(−9, 0) ve D(0, 3) noktalarında kestiğine göre, B köşesinin koordinatları aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(3, 1)' },
      { key: 'B', text: '(4, 1)' },
      { key: 'C', text: '(4, 2)' },
      { key: 'D', text: '(5, 1)' },
      { key: 'E', text: '(3, 4)' },
    ],
    answer: 'B',
    hint: '[DA] kenarı d doğrusuna diktir; önce d nin eğimini, sonra DA nın eğimini bul.',
    solution: [
      {
        title: 'd nin eğimi',
        detail: 'm(d) = (3 − 0) / (0 − (−9)) = 3/9 = 1/3.',
      },
      {
        title: 'A köşesi',
        detail:
          '[DA] ⊥ d olduğundan m(DA) = −3. D(0, 3) den geçen y = −3x + 3 doğrusu x eksenini x = 1 de keser ⇒ A(1, 0).',
      },
      {
        title: 'Kenar vektörleri',
        detail:
          'D den A ya gidiş (1, −3) tür. Buna dik ve eşit uzunluktaki, d boyunca giden kenar (3, 1) olur ⇒ C = D + (3, 1) = (3, 4).',
      },
      {
        title: 'B köşesi',
        detail: 'B = A + (3, 1) = (1 + 3, 0 + 1) = (4, 1).',
      },
      {
        title: 'Sonuç',
        detail: 'B köşesinin koordinatları (4, 1) dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 41
  {
    id: 'lines-41',
    topic: 'Noktanın doğruya göre simetriği',
    stem: [],
    ask: 'Analitik düzlemde verilen A(1, 1) noktasının y = x + 3 doğrusuna göre simetriği olan nokta aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(−2, 4)' },
      { key: 'B', text: '(4, −2)' },
      { key: 'C', text: '(−4, 2)' },
      { key: 'D', text: '(2, −4)' },
      { key: 'E', text: '(−3, 4)' },
    ],
    answer: 'A',
    hint: 'y = x + c doğrusuna göre simetride (x, y) noktası (y − c, x + c) noktasına gider.',
    solution: [
      {
        title: 'Kural',
        detail: 'y = x + 3 doğrusuna göre (x, y) noktasının simetriği (y − 3, x + 3) tür.',
      },
      {
        title: 'Uygula',
        detail: 'A(1, 1) için (1 − 3, 1 + 3) = (−2, 4).',
      },
      {
        title: 'Kontrol',
        detail:
          'Orta nokta (−1/2, 5/2) doğrunun üzerindedir (−1/2 + 3 = 5/2); iki noktayı birleştiren doğrunun eğimi 3/(−3) = −1 dir, yani doğruya diktir.',
      },
      {
        title: 'Sonuç',
        detail: 'Simetrik nokta (−2, 4) tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 42
  {
    id: 'lines-42',
    topic: 'Eğim açısı ve noktadan doğru denklemi',
    // Origin (140, 250), 40 px per unit; d is y = −x + 4 through P(1, 3), cutting the x axis at (4, 0).
    figure: {
      viewBox: '0 0 400 320',
      caption: 'Şekil 20',
      label:
        'Koordinat düzleminde P(1, 3) noktasından geçen, azalan d doğrusu; d ile x ekseni arasındaki dar açı 45 derece.',
      svg: `
          <path class="ln" d="M60,250 L385,250"/>
          <path class="ln" d="M375,244 L385,250 L375,256"/>
          <path class="ln" d="M140,305 L140,15"/>
          <path class="ln" d="M134,25 L140,15 L146,25"/>
          <text x="382" y="270" text-anchor="middle">x</text>
          <text x="152" y="27">y</text>
          <path class="ln" d="M108,58 L348,298"/>
          <path class="arc" d="M328,250 A28,28 0 0 1 319.8,269.8"/>
          <text class="val" x="336" y="272">45°</text>
          <circle class="pt" cx="180" cy="130" r="3.2"/>
          <text x="190" y="124">P(1, 3)</text>
          <text x="132" y="268" text-anchor="end">O</text>
          <text x="96" y="58" text-anchor="end">d</text>
        `,
    },
    stem: [],
    ask: 'Dik koordinat sisteminde verilen d doğrusunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'y = −x + 2' },
      { key: 'B', text: 'y = −x + 4' },
      { key: 'C', text: 'y = x + 2' },
      { key: 'D', text: 'y = −x + 3' },
      { key: 'E', text: 'y = x − 4' },
    ],
    answer: 'B',
    hint: 'd azalan bir doğru; x ekseniyle pozitif yönde yaptığı açı 180° − 45° dir.',
    solution: [
      {
        title: 'Eğim açısı',
        detail:
          'd azalan olduğundan x ekseninin pozitif yönüyle yaptığı açı 180° − 45° = 135° dir.',
      },
      {
        title: 'Eğim',
        detail: 'm = tan 135° = −1.',
      },
      {
        title: 'Noktadan geçen doğru',
        detail: 'y − 3 = −1·(x − 1) ⇒ y = −x + 4.',
      },
      {
        title: 'Sonuç',
        detail: 'd doğrusunun denklemi y = −x + 4 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 43
  {
    id: 'lines-43',
    topic: 'Doğru ve nokta ile oluşan üçgenin alanı',
    stem: ['Analitik düzlemde A(5, 2) noktası ile 2x − 3y + 12 = 0 doğrusu veriliyor.'],
    ask: 'Doğrunun eksenleri kestiği noktalar ile A(5, 2) noktasının oluşturduğu üçgenin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '16' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'C',
    hint: 'Doğrunun eksenleri kestiği iki nokta tabanı verir; yükseklik A nın doğruya uzaklığıdır.',
    solution: [
      {
        title: 'Eksen kesim noktaları',
        detail: 'y = 0 için x = −6, x = 0 için y = 4 ⇒ E(−6, 0) ve F(0, 4).',
      },
      {
        title: 'Taban',
        detail: '|EF| = √(6² + 4²) = √52 = 2√13.',
      },
      {
        title: 'Yükseklik',
        detail: 'A nın doğruya uzaklığı |2·5 − 3·2 + 12| / √(4 + 9) = 16/√13.',
      },
      {
        title: 'Alan',
        detail: 'Alan = (1/2) · 2√13 · 16/√13 = 16.',
      },
      {
        title: 'Sonuç',
        detail: 'Üçgenin alanı 16 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 44
  {
    id: 'lines-44',
    topic: 'Eşkenar üçgen ve doğru',
    // Origin (140, 250), 30 px per unit; B(−2, 0), C(6, 0), A(2, 4√3), line y = 2√3x.
    figure: {
      viewBox: '0 0 400 310',
      caption: 'Şekil 21',
      label:
        'Koordinat düzleminde B ve C köşeleri x ekseni üzerinde olan ABC eşkenar üçgeni; y = 2√3x doğrusu başlangıç noktasından ve A köşesinden geçiyor, ABO üçgeni taralı.',
      svg: `
          <path class="shade" d="M80,250 L200,42.15 L140,250 Z"/>
          <path class="ln" d="M40,250 L385,250"/>
          <path class="ln" d="M375,244 L385,250 L375,256"/>
          <path class="ln" d="M140,295 L140,15"/>
          <path class="ln" d="M134,25 L140,15 L146,25"/>
          <text x="382" y="270" text-anchor="middle">x</text>
          <text x="128" y="27" text-anchor="end">y</text>
          <path class="ln" d="M80,250 L200,42.15 L320,250"/>
          <path class="ln" d="M131.34,280 L205.82,22"/>
          <circle class="pt" cx="80" cy="250" r="3.2"/>
          <circle class="pt" cx="200" cy="42.15" r="3.2"/>
          <circle class="pt" cx="320" cy="250" r="3.2"/>
          <text x="80" y="270" text-anchor="middle">B</text>
          <text x="152" y="270">O</text>
          <text x="320" y="270" text-anchor="middle">C</text>
          <text x="190" y="44" text-anchor="end">A</text>
          <text x="214" y="30">y = 2√3x</text>
        `,
    },
    given: ['ABC eşkenar üçgen', 'C(6, 0)', 'B(b, 0)'],
    stem: [
      'Analitik düzlemde verilen y = 2√3x doğrusu eşkenar üçgenin A köşesinden ve başlangıç noktasından geçmektedir.',
    ],
    ask: 'Buna göre, Alan(ABO) kaç birim karedir?',
    choices: [
      { key: 'A', text: '2√3' },
      { key: 'B', text: '3√3' },
      { key: 'C', text: '4√3' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '8√3' },
    ],
    answer: 'C',
    hint: 'Eşkenar üçgende A köşesi [BC] nin orta noktasının tam üstündedir; A yı b cinsinden yaz.',
    solution: [
      {
        title: 'A köşesi',
        detail:
          '|BC| = 6 − b ve A, [BC] nin orta noktasının üstünde olduğundan A((b + 6)/2, (6 − b)√3/2) dir.',
      },
      {
        title: 'Doğruya yerleştir',
        detail: '(6 − b)√3/2 = 2√3 · (b + 6)/2 ⇒ 6 − b = 2b + 12 ⇒ b = −2.',
      },
      {
        title: 'Koordinatlar',
        detail: 'B(−2, 0) ve A(2, 4√3) bulunur; |BO| = 2.',
      },
      {
        title: 'Alan',
        detail: 'Alan(ABO) = (1/2) · |BO| · 4√3 = (1/2) · 2 · 4√3 = 4√3.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(ABO) = 4√3 birim karedir.',
      },
    ],
  },
  // ---------------------------------------------------------------- 45
  {
    id: 'lines-45',
    topic: 'Paralel doğruların eğimleri',
    stem: ['(m − 1)x + (2m + 1)y − 3 = 0 doğrusu 3x + 2y + 1 = 0 doğrusuna paraleldir.'],
    ask: 'Buna göre, m kaçtır?',
    choices: [
      { key: 'A', text: '5/4' },
      { key: 'B', text: '−4/5' },
      { key: 'C', text: '−5/4' },
      { key: 'D', text: '1/4' },
      { key: 'E', text: '−1/4' },
    ],
    answer: 'C',
    hint: 'Paralel doğruların eğimleri eşittir; ax + by + c = 0 doğrusunun eğimi −a/b dir.',
    solution: [
      {
        title: 'Eğimler',
        detail: 'Birinci doğrunun eğimi −(m − 1)/(2m + 1), ikincisinin eğimi −3/2 dir.',
      },
      {
        title: 'Eşitle',
        detail: '(m − 1)/(2m + 1) = 3/2 ⇒ 2m − 2 = 6m + 3.',
      },
      {
        title: 'Çöz',
        detail: '−4m = 5 ⇒ m = −5/4.',
      },
      {
        title: 'Sonuç',
        detail: 'm = −5/4 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 46
  {
    id: 'lines-46',
    topic: 'Orta noktadan geçen doğru',
    stem: [
      'Analitik düzlemde A(−1, 6) ve B(5, 2) noktaları veriliyor.',
      'y = 3x + n doğrusu [AB] doğru parçasının orta noktasından geçmektedir.',
    ],
    ask: 'Buna göre, n kaçtır?',
    choices: [
      { key: 'A', text: '−4' },
      { key: 'B', text: '−2' },
      { key: 'C', text: '0' },
      { key: 'D', text: '2' },
      { key: 'E', text: '4' },
    ],
    answer: 'B',
    hint: 'Önce [AB] nin orta noktasını bul, sonra doğru denkleminde yerine yaz.',
    solution: [
      {
        title: 'Orta nokta',
        detail: 'M((−1 + 5)/2, (6 + 2)/2) = M(2, 4).',
      },
      {
        title: 'Denklemde yerine yaz',
        detail: '4 = 3 · 2 + n ⇒ 4 = 6 + n.',
      },
      {
        title: 'Sonuç',
        detail: 'n = −2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 47
  {
    id: 'lines-47',
    topic: 'Paralel doğrunun eksen kesim noktası',
    stem: [],
    ask: 'A(4, 2) noktasından geçen ve y = 2x + 1 doğrusuna paralel olan doğrunun x eksenini kestiği noktanın apsisi kaçtır?',
    choices: [
      { key: 'A', text: '−3' },
      { key: 'B', text: '1' },
      { key: 'C', text: '2' },
      { key: 'D', text: '3' },
      { key: 'E', text: '6' },
    ],
    answer: 'D',
    hint: 'Paralel doğrunun eğimi de 2 dir; A noktasını kullanarak denklemi yaz.',
    solution: [
      {
        title: 'Eğim',
        detail: 'Paralel doğruların eğimi eşit olduğundan m = 2.',
      },
      {
        title: 'Doğru denklemi',
        detail: 'y − 2 = 2(x − 4) ⇒ y = 2x − 6.',
      },
      {
        title: 'x eksenini kestiği nokta',
        detail: 'y = 0 için 2x − 6 = 0 ⇒ x = 3.',
      },
      {
        title: 'Sonuç',
        detail: 'Kesim noktasının apsisi 3 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 48
  {
    id: 'lines-48',
    topic: 'Doğru parçasının orta dikmesi',
    stem: [],
    ask: 'A(1, 3) ve B(5, 7) noktalarının orta noktasından geçen ve AB doğrusuna dik olan doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'x − y + 2 = 0' },
      { key: 'B', text: '2x + y − 11 = 0' },
      { key: 'C', text: 'x + y − 8 = 0' },
      { key: 'D', text: 'x + y − 6 = 0' },
      { key: 'E', text: 'x + y + 8 = 0' },
    ],
    answer: 'C',
    hint: 'Dik doğruların eğimleri çarpımı −1 dir; önce AB nin eğimini ve orta noktayı bul.',
    solution: [
      {
        title: 'Orta nokta',
        detail: 'M((1 + 5)/2, (3 + 7)/2) = M(3, 5).',
      },
      {
        title: 'AB nin eğimi',
        detail: 'm(AB) = (7 − 3)/(5 − 1) = 1.',
      },
      {
        title: 'Dik doğrunun eğimi',
        detail: 'm · 1 = −1 ⇒ m = −1.',
      },
      {
        title: 'Denklem',
        detail: 'y − 5 = −1 · (x − 3) ⇒ x + y − 8 = 0.',
      },
      {
        title: 'Sonuç',
        detail: 'Aranan doğru x + y − 8 = 0 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 49
  {
    id: 'lines-49',
    topic: 'Doğru parçasını verilen oranda bölen nokta',
    stem: [
      'Analitik düzlemde A(−2, 1) ve B(8, 6) noktaları veriliyor.',
      'ax − y + 5 = 0 doğrusu, [AB] doğru parçasını |AC| / |CB| = 2/3 oranında bölen bir C noktasından geçmektedir.',
    ],
    ask: 'Buna göre, a sayısı kaçtır?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '−1' },
      { key: 'C', text: '0' },
      { key: 'D', text: '1' },
      { key: 'E', text: '2' },
    ],
    answer: 'B',
    hint: 'C noktası A dan B ye giden yolun 2/5 i kadar ilerisindedir.',
    solution: [
      {
        title: 'Oran',
        detail: '|AC| / |CB| = 2/3 ise |AC| = (2/5) · |AB| dir.',
      },
      {
        title: 'C noktası',
        detail: 'C = (−2 + (2/5) · 10, 1 + (2/5) · 5) = (2, 3).',
      },
      {
        title: 'Denklemde yerine yaz',
        detail: 'a · 2 − 3 + 5 = 0 ⇒ 2a = −2.',
      },
      {
        title: 'Sonuç',
        detail: 'a = −1 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 50
  {
    id: 'lines-50',
    topic: 'x ekseni üzerinde kesişen doğrular',
    // Origin (220, 200), 30 px per unit; d₁: y = x + 2 and d₂: y = 3x + 6 meet at (−2, 0).
    figure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 22',
      label:
        'Dik koordinat sisteminde d₁ ve d₂ doğruları; iki doğru x ekseninin negatif tarafında aynı noktada kesişiyor, d₂ daha dik.',
      svg: `
          <path class="ln" d="M40,200 L385,200"/>
          <path class="ln" d="M375,194 L385,200 L375,206"/>
          <path class="ln" d="M220,290 L220,15"/>
          <path class="ln" d="M214,25 L220,15 L226,25"/>
          <text x="382" y="220" text-anchor="middle">x</text>
          <text x="232" y="27">y</text>
          <text x="212" y="218" text-anchor="end">O</text>
          <path class="ln" d="M85,275 L325,35"/>
          <path class="ln" d="M136,272 L215,35"/>
          <text x="333" y="40">d₁</text>
          <text x="196" y="38" text-anchor="end">d₂</text>
        `,
    },
    given: ['d₁: y = x + 2', 'd₂: 3x − y + k = 0'],
    stem: [],
    ask: 'Yukarıdaki dik koordinat sisteminde verilen d₁ ve d₂ doğruları x ekseni üzerinde kesiştiklerine göre, k kaçtır?',
    choices: [
      { key: 'A', text: '−6' },
      { key: 'B', text: '−2' },
      { key: 'C', text: '2' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: 'd₁ in x eksenini kestiği noktayı bul; d₂ de bu noktadan geçmelidir.',
    solution: [
      {
        title: 'd₁ in x eksenini kestiği nokta',
        detail: 'y = 0 için 0 = x + 2 ⇒ x = −2; nokta (−2, 0).',
      },
      {
        title: 'd₂ bu noktadan geçer',
        detail: '3 · (−2) − 0 + k = 0 ⇒ −6 + k = 0.',
      },
      {
        title: 'Sonuç',
        detail: 'k = 6 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 51
  {
    id: 'lines-51',
    topic: 'Noktadan geçen dik doğru',
    stem: [],
    ask: 'Analitik düzlemde P(1, −2) noktasından geçen ve 3x − 4y + 2 = 0 doğrusuna dik olan doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '4x + 3y − 2 = 0' },
      { key: 'B', text: '4x − 3y − 10 = 0' },
      { key: 'C', text: '3x − 4y − 11 = 0' },
      { key: 'D', text: '4x + 3y + 10 = 0' },
      { key: 'E', text: '4x + 3y + 2 = 0' },
    ],
    answer: 'E',
    hint: 'Verilen doğrunun eğimini bul; dik doğrunun eğimi onun negatif tersidir.',
    solution: [
      {
        title: 'Verilen doğrunun eğimi',
        detail: 'm = −3/(−4) = 3/4.',
      },
      {
        title: 'Dik doğrunun eğimi',
        detail: '(3/4) · m′ = −1 ⇒ m′ = −4/3.',
      },
      {
        title: 'Denklem',
        detail: 'y + 2 = −(4/3)(x − 1) ⇒ 3y + 6 = −4x + 4 ⇒ 4x + 3y + 2 = 0.',
      },
      {
        title: 'Sonuç',
        detail: 'Aranan doğru 4x + 3y + 2 = 0 dır.',
      },
    ],
  },
  // ---------------------------------------------------------------- 52
  {
    id: 'lines-52',
    topic: 'Noktanın doğruya uzaklığı',
    given: ['[DB] ⊥ d', 'D(8, 0)', '|BD| = 2√2 birim'],
    // Origin (80, 200), 30 px per unit; drawn with n = −4: C(4, 0), B(6, 2).
    figure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 23',
      label:
        'Dik koordinat düzleminde d doğrusu x eksenini C noktasında kesiyor. x ekseni üzerinde C nin sağındaki D noktasından d doğrusuna çizilen dikme d yi B noktasında kesiyor; |BD| = 2√2 birim.',
      svg: `
          <path class="ln" d="M40,200 L385,200"/>
          <path class="ln" d="M375,194 L385,200 L375,206"/>
          <path class="ln" d="M80,295 L80,15"/>
          <path class="ln" d="M74,25 L80,15 L86,25"/>
          <text x="382" y="220" text-anchor="middle">x</text>
          <text x="92" y="27">y</text>
          <text x="72" y="218" text-anchor="end">O</text>
          <path class="ln" d="M110,290 L365,35"/>
          <path class="ln" d="M260,140 L320,200"/>
          <path class="ln" d="M252.93,147.07 L260,154.14 L267.07,147.07"/>
          <circle class="pt" cx="200" cy="200" r="3.2"/>
          <circle class="pt" cx="320" cy="200" r="3.2"/>
          <circle class="pt" cx="260" cy="140" r="3.2"/>
          <text x="206" y="218">C</text>
          <text x="320" y="220" text-anchor="middle">D</text>
          <text x="248" y="132" text-anchor="end">B</text>
          <text class="val" x="296" y="166">2√2</text>
          <text x="348" y="40" text-anchor="end">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki dik koordinat düzleminde d doğrusunun denklemi y = x + n olduğuna göre, n kaçtır?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '−3' },
      { key: 'C', text: '−4' },
      { key: 'D', text: '−5' },
      { key: 'E', text: '−6' },
    ],
    answer: 'C',
    hint: '|BD|, D noktasının d doğrusuna olan uzaklığıdır.',
    solution: [
      {
        title: 'Genel denklem',
        detail: 'y = x + n ⇒ x − y + n = 0.',
      },
      {
        title: 'Uzaklık formülü',
        detail: '|BD| = |8 − 0 + n| / √(1² + 1²) = |8 + n| / √2 = 2√2 ⇒ |8 + n| = 4.',
      },
      {
        title: 'İki durum',
        detail: '8 + n = 4 ⇒ n = −4 ya da 8 + n = −4 ⇒ n = −12.',
      },
      {
        title: 'Şekle göre seç',
        detail:
          'd, x eksenini C(−n, 0) da keser ve C, D nin solundadır: −n < 8. n = −12 için C(12, 0) olurdu, bu yüzden n = −4 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 53
  {
    id: 'lines-53',
    topic: 'x ekseni üzerinde kesişen doğrular',
    stem: ['3x + 2y + a = 0', 'x − y + 2a − 5 = 0'],
    ask: 'doğrularının x ekseni üzerinde kesişmeleri için a kaç olmalıdır?',
    choices: [
      { key: 'A', text: '−3' },
      { key: 'B', text: '−1' },
      { key: 'C', text: '1' },
      { key: 'D', text: '3' },
      { key: 'E', text: '5' },
    ],
    answer: 'D',
    hint: 'x ekseni üzerindeki noktalarda y = 0 dır; iki doğrunun x eksenini kestiği apsisleri eşitle.',
    solution: [
      {
        title: 'Birinci doğru',
        detail: 'y = 0 için 3x + a = 0 ⇒ x = −a/3.',
      },
      {
        title: 'İkinci doğru',
        detail: 'y = 0 için x + 2a − 5 = 0 ⇒ x = 5 − 2a.',
      },
      {
        title: 'Apsisleri eşitle',
        detail: '−a/3 = 5 − 2a ⇒ −a = 15 − 6a ⇒ 5a = 15.',
      },
      {
        title: 'Sonuç',
        detail: 'a = 3 tür; doğrular x ekseninde (−1, 0) noktasında kesişir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 54
  {
    id: 'lines-54',
    topic: 'Eşkenar dörtgen ve köşegen doğrusu',
    given: ['ABCD eşkenar dörtgen', 'B(9, 0)', 'D(0, 3)', 'E(0, n)'],
    // Origin (140, 90), 20 px per unit; A(4, 0), C(5, 3), d: y = 3x − 12, E(0, −12).
    figure: {
      viewBox: '0 -20 400 380',
      caption: 'Şekil 24',
      label:
        'Dik koordinat düzleminde ABCD eşkenar dörtgeni; A ve B köşeleri x ekseni üzerinde, D köşesi y ekseni üzerinde, [DC] kenarı x eksenine paralel. [AC] köşegeninin taşıyıcısı olan d doğrusu y eksenini E noktasında kesiyor.',
      svg: `
          <path class="ln" d="M60,90 L385,90"/>
          <path class="ln" d="M375,84 L385,90 L375,96"/>
          <path class="ln" d="M140,350 L140,-5"/>
          <path class="ln" d="M134,5 L140,-5 L146,5"/>
          <text x="382" y="110" text-anchor="middle">x</text>
          <text x="152" y="2">y</text>
          <text x="132" y="108" text-anchor="end">O</text>
          <path class="ln" d="M220,90 L320,90 L240,30 L140,30 Z"/>
          <path class="ln" d="M133.33,350 L250,0"/>
          <circle class="pt" cx="220" cy="90" r="3.2"/>
          <circle class="pt" cx="320" cy="90" r="3.2"/>
          <circle class="pt" cx="240" cy="30" r="3.2"/>
          <circle class="pt" cx="140" cy="30" r="3.2"/>
          <circle class="pt" cx="140" cy="330" r="3.2"/>
          <text x="228" y="108">A</text>
          <text x="320" y="108" text-anchor="middle">B</text>
          <text x="248" y="26">C</text>
          <text x="132" y="26" text-anchor="end">D</text>
          <text x="148" y="334">E</text>
          <text x="236" y="8" text-anchor="end">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki şekilde d doğrusu [AC] köşegeninin taşıyıcı doğrusu olduğuna göre, E(0, n) noktasının ordinatı (n) kaçtır?',
    choices: [
      { key: 'A', text: '−9' },
      { key: 'B', text: '−10' },
      { key: 'C', text: '−12' },
      { key: 'D', text: '−14' },
      { key: 'E', text: '−15' },
    ],
    answer: 'C',
    hint: 'A(a, 0) de; eşkenar dörtgende |AB| = |AD| eşitliğinden a yı bul.',
    solution: [
      {
        title: 'A köşesi',
        detail:
          'A(a, 0) olsun. |AB| = |AD| ⇒ (9 − a)² = a² + 3² ⇒ 81 − 18a = 9 ⇒ a = 4. Kenar 5 birimdir.',
      },
      {
        title: 'C köşesi',
        detail: '[DC] kenarı x eksenine paraleldir ve |DC| = 5 ⇒ C(5, 3).',
      },
      {
        title: 'd doğrusu',
        detail: 'm = (3 − 0) / (5 − 4) = 3 ⇒ y = 3(x − 4) = 3x − 12.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 0 için y = −12 ⇒ n = −12 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 55
  {
    id: 'lines-55',
    topic: 'Dik doğrunun denklemi',
    given: ['d₁: 2x + y − 8 = 0', 'A(3, p)', 'd₁ ⊥ d₂'],
    // Origin (150, 270), 30 px per unit; A(3, 2), d₂: y = (x + 1)/2.
    figure: {
      viewBox: '0 0 400 310',
      caption: 'Şekil 25',
      label:
        'Dik koordinat düzleminde azalan d₁ doğrusu ile artan d₂ doğrusu birinci bölgedeki A(3, p) noktasında dik kesişiyor.',
      svg: `
          <path class="ln" d="M40,270 L385,270"/>
          <path class="ln" d="M375,264 L385,270 L375,276"/>
          <path class="ln" d="M150,305 L150,10"/>
          <path class="ln" d="M144,20 L150,10 L156,20"/>
          <text x="382" y="290" text-anchor="middle">x</text>
          <text x="162" y="22">y</text>
          <text x="142" y="288" text-anchor="end">O</text>
          <path class="ln" d="M142.5,15 L285,300"/>
          <path class="ln" d="M90,285 L330,165"/>
          <path class="ln" d="M235.53,201.06 L244.47,196.59 L248.94,205.53"/>
          <circle class="pt" cx="240" cy="210" r="3.2"/>
          <text x="256" y="228">A(3, p)</text>
          <text x="292" y="298">d₁</text>
          <text x="336" y="165">d₂</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki verilere göre, d₂ doğrusunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'x + 2y − 7 = 0' },
      { key: 'B', text: 'x − 2y + 1 = 0' },
      { key: 'C', text: '2x − y − 4 = 0' },
      { key: 'D', text: 'x − 2y − 1 = 0' },
      { key: 'E', text: 'x − 2y + 3 = 0' },
    ],
    answer: 'B',
    hint: 'A noktası d₁ üzerindedir; önce p yi, sonra d₂ nin eğimini bul.',
    solution: [
      {
        title: 'p değeri',
        detail: 'A, d₁ üzerinde: 2 · 3 + p − 8 = 0 ⇒ p = 2; A(3, 2).',
      },
      {
        title: 'd₁ in eğimi',
        detail: 'm₁ = −2/1 = −2.',
      },
      {
        title: 'd₂ nin eğimi',
        detail: 'm₁ · m₂ = −1 ⇒ m₂ = 1/2.',
      },
      {
        title: 'Denklem',
        detail: 'y − 2 = (1/2)(x − 3) ⇒ 2y − 4 = x − 3 ⇒ x − 2y + 1 = 0.',
      },
    ],
  },

  // ---------------------------------------------------------------- 56
  {
    id: 'lines-56',
    topic: 'Doğrular arasında kalan bölgenin alanı',
    // Origin (160, 250), 30 px per unit; shaded triangle (0, 2), (0, 5), (3, 5).
    figure: {
      viewBox: '0 20 400 290',
      caption: 'Şekil 26',
      label:
        'Dik koordinat düzleminde y = 5 doğrusu, x − y + 2 = 0 doğrusu ve y ekseni arasında kalan üçgensel bölge taralı.',
      svg: `
          <path class="shade" d="M160,190 L160,100 L250,100 Z"/>
          <path class="ln" d="M40,250 L385,250"/>
          <path class="ln" d="M375,244 L385,250 L375,256"/>
          <path class="ln" d="M160,300 L160,30"/>
          <path class="ln" d="M154,40 L160,30 L166,40"/>
          <text x="382" y="270" text-anchor="middle">x</text>
          <text x="172" y="42">y</text>
          <text x="152" y="268" text-anchor="end">O</text>
          <path class="ln" d="M60,100 L355,100"/>
          <path class="ln" d="M70,280 L280,70"/>
          <text x="355" y="120" text-anchor="end">y = 5</text>
          <text x="288" y="74">x − y + 2 = 0</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki dik koordinat düzleminde y = 5, x − y + 2 = 0 ve x = 0 doğruları arasında kalan taralı bölgenin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '9/2' },
      { key: 'D', text: '6' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'Taralı bölge bir dik üçgendir; üç doğrunun ikişer ikişer kesim noktalarını bul.',
    solution: [
      {
        title: 'y eksenini kestiği nokta',
        detail: 'x = 0 için y = 2 ⇒ (0, 2).',
      },
      {
        title: 'y = 5 ile kesişim',
        detail: 'x − 5 + 2 = 0 ⇒ x = 3 ⇒ (3, 5).',
      },
      {
        title: 'Dik kenarlar',
        detail: 'Üçüncü köşe (0, 5). Dik kenarlar 5 − 2 = 3 ve 3 birimdir.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = (3 · 3) / 2 = 9/2 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 57
  {
    id: 'lines-57',
    topic: 'Kesim noktasından geçen eksene dik doğru',
    stem: [
      'Analitik düzlemde verilen d₁: x + y − 5 = 0 ve d₂: 2x − y − 1 = 0 doğruları veriliyor.',
    ],
    ask: 'Bu doğruların kesim noktasından geçen ve y eksenine dik olan doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'y = −3' },
      { key: 'B', text: 'x = 2' },
      { key: 'C', text: 'y = 2' },
      { key: 'D', text: 'y = 3' },
      { key: 'E', text: 'x = 3' },
    ],
    answer: 'D',
    hint: 'y eksenine dik doğru yataydır; denklemi y = k biçimindedir.',
    solution: [
      {
        title: 'Denklemleri topla',
        detail: '(x + y − 5) + (2x − y − 1) = 0 ⇒ 3x − 6 = 0 ⇒ x = 2.',
      },
      {
        title: 'y değeri',
        detail: '2 + y − 5 = 0 ⇒ y = 3; kesim noktası (2, 3).',
      },
      {
        title: 'Eksene dik doğru',
        detail: 'y eksenine dik doğru x eksenine paraleldir: y = k. (2, 3) ten geçtiği için k = 3.',
      },
      {
        title: 'Sonuç',
        detail: 'Aranan doğru y = 3 tür.',
      },
    ],
  },
  // ---------------------------------------------------------------- 58
  {
    id: 'lines-58',
    topic: 'Paralel doğrularla oluşan yamuğun alanı',
    given: ['BC: y = 2x + 8', 'A(2, 8) noktası DE doğrusu üzerinde', '[CA] ∥ x ekseni', 'DE ∥ BC'],
    // Origin (215, 250), 25 px per unit; B(−4, 0), D(−2, 0), E(0, 4), C(0, 8), A(2, 8).
    figure: {
      viewBox: '0 -10 400 320',
      caption: 'Şekil 27',
      label:
        'Dik koordinat düzleminde y = 2x + 8 denklemli BC doğrusu ve ona paralel DE doğrusu. B ve D x ekseni üzerinde, C ve E y ekseni üzerinde; DE doğrusu A(2, 8) noktasından geçiyor ve BDEC yamuğu taralı.',
      svg: `
          <path class="shade" d="M115,250 L165,250 L215,150 L215,50 Z"/>
          <path class="ln" d="M30,250 L385,250"/>
          <path class="ln" d="M375,244 L385,250 L375,256"/>
          <path class="ln" d="M215,300 L215,0"/>
          <path class="ln" d="M209,10 L215,0 L221,10"/>
          <text x="382" y="270" text-anchor="middle">x</text>
          <text x="227" y="8">y</text>
          <path class="ln" d="M96.25,287.5 L233.75,12.5"/>
          <path class="ln" d="M146.25,287.5 L283.75,12.5"/>
          <path class="ln" d="M215,50 L265,50 L265,250" stroke-dasharray="2 5"/>
          <circle class="pt" cx="115" cy="250" r="3.2"/>
          <circle class="pt" cx="165" cy="250" r="3.2"/>
          <circle class="pt" cx="215" cy="150" r="3.2"/>
          <circle class="pt" cx="215" cy="50" r="3.2"/>
          <circle class="pt" cx="265" cy="50" r="3.2"/>
          <text x="109" y="270" text-anchor="end">B</text>
          <text x="178" y="270" text-anchor="middle">D</text>
          <text x="223" y="156">E</text>
          <text x="207" y="44" text-anchor="end">C</text>
          <text x="273" y="46">A(2, 8)</text>
          <text x="207" y="270" text-anchor="end">O</text>
          <text x="265" y="270" text-anchor="middle">2</text>
          <text x="130" y="196" text-anchor="end">y = 2x + 8</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki şekilde A(2, 8) noktası DE doğrusu üzerinde olduğuna göre, BDEC yamuğunun alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '14' },
      { key: 'D', text: '16' },
      { key: 'E', text: '18' },
    ],
    answer: 'B',
    hint: 'DE doğrusu BC ye paralel olduğundan eğimi de 2 dir; A noktasını kullanarak denklemini yaz.',
    solution: [
      {
        title: 'B ve C noktaları',
        detail: 'y = 2x + 8 doğrusunda y = 0 ⇒ B(−4, 0); x = 0 ⇒ C(0, 8).',
      },
      {
        title: 'DE doğrusu',
        detail: 'Eğim 2, A(2, 8) den geçer: y − 8 = 2(x − 2) ⇒ y = 2x + 4.',
      },
      {
        title: 'D ve E noktaları',
        detail: 'y = 0 ⇒ D(−2, 0); x = 0 ⇒ E(0, 4).',
      },
      {
        title: 'Üçgenlerin farkı',
        detail: 'Alan(BOC) = 4 · 8 / 2 = 16, Alan(DOE) = 2 · 4 / 2 = 4.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(BDEC) = 16 − 4 = 12 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 59
  {
    id: 'lines-59',
    topic: 'Kesim noktasından geçen, eğimi verilen doğru',
    stem: [
      'Dik koordinat sisteminde x − 2y = 0 ve x + y − 3 = 0 doğrularının kesim noktasından geçen ve eğimi −2 olan bir doğru veriliyor.',
    ],
    ask: 'Bu doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'x + 2y − 4 = 0' },
      { key: 'B', text: '2x − y − 3 = 0' },
      { key: 'C', text: '2x + y − 3 = 0' },
      { key: 'D', text: 'x − 2y = 0' },
      { key: 'E', text: '2x + y − 5 = 0' },
    ],
    answer: 'E',
    hint: 'Önce iki denklemi birlikte çözerek kesim noktasını bul.',
    solution: [
      {
        title: 'Kesim noktası',
        detail: 'x = 2y yi ikinci denklemde yaz: 2y + y − 3 = 0 ⇒ y = 1, x = 2. Nokta (2, 1).',
      },
      {
        title: 'Nokta-eğim denklemi',
        detail: 'y − 1 = −2(x − 2) ⇒ y = −2x + 5.',
      },
      {
        title: 'Sonuç',
        detail: 'Düzenlersek 2x + y − 5 = 0 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 60
  {
    id: 'lines-60',
    topic: 'Dik doğrular ve eksen kesim noktası',
    given: ['d₁ ⊥ d₂', 'A(−6, 0)', 'B(a, 0)', 'C(x, 4)', 'D(0, 3)'],
    // Origin (230, 250), 30 px per unit; A(−6, 0), D(0, 3), C(2, 4), B(4, 0).
    figure: {
      viewBox: '0 10 400 300',
      caption: 'Şekil 28',
      label:
        'Analitik düzlemde d₂ doğrusu x eksenini A noktasında, y eksenini D noktasında kesiyor. d₁ doğrusu d₂ ye C noktasında dik ve x eksenini B noktasında kesiyor.',
      svg: `
          <path class="ln" d="M10,250 L385,250"/>
          <path class="ln" d="M375,244 L385,250 L375,256"/>
          <path class="ln" d="M230,300 L230,20"/>
          <path class="ln" d="M224,30 L230,20 L236,30"/>
          <text x="382" y="270" text-anchor="middle">x</text>
          <text x="242" y="30">y</text>
          <path class="ln" d="M20,265 L380,85"/>
          <path class="ln" d="M245,40 L372.5,295"/>
          <path class="ln" d="M279.27,135.37 L284.64,146.1 L295.37,140.73"/>
          <circle class="pt" cx="50" cy="250" r="3.2"/>
          <circle class="pt" cx="230" cy="160" r="3.2"/>
          <circle class="pt" cx="290" cy="130" r="3.2"/>
          <circle class="pt" cx="350" cy="250" r="3.2"/>
          <text x="46" y="270" text-anchor="end">A</text>
          <text x="222" y="270" text-anchor="end">O</text>
          <text x="344" y="270" text-anchor="end">B</text>
          <text x="222" y="156" text-anchor="end">D</text>
          <text x="300" y="118" text-anchor="middle">C</text>
          <text x="254" y="42">d₁</text>
          <text x="368" y="78" text-anchor="end">d₂</text>
        `,
    },
    stem: [],
    ask: 'd₁ doğrusu x eksenini B(a, 0) noktasında; d₂ doğrusu x eksenini A(−6, 0), y eksenini D(0, 3) noktasında kesmektedir. Buna göre, d₁ doğrusunun x eksenini kestiği noktanın apsisi (a) kaçtır?',
    choices: [
      { key: 'A', text: '5/2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '7/2' },
      { key: 'D', text: '4' },
      { key: 'E', text: '9/2' },
    ],
    answer: 'D',
    hint: 'A ve D noktalarından d₂ nin eğimini bul; d₁ in eğimi bunun negatif tersidir.',
    solution: [
      {
        title: 'd₂ doğrusu',
        detail: 'm₂ = (3 − 0) / (0 − (−6)) = 1/2 ⇒ y = x/2 + 3.',
      },
      {
        title: 'C noktası',
        detail: 'y = 4 için 4 = x/2 + 3 ⇒ x = 2 ⇒ C(2, 4).',
      },
      {
        title: 'd₁ in eğimi',
        detail: 'd₁ ⊥ d₂ ⇒ m₁ · (1/2) = −1 ⇒ m₁ = −2.',
      },
      {
        title: 'Sonuç',
        detail: 'd₁: y − 4 = −2(x − 2). y = 0 için −4 = −2(a − 2) ⇒ a − 2 = 2 ⇒ a = 4.',
      },
    ],
  },

  // ---------------------------------------------------------------- 61
  {
    id: 'lines-61',
    topic: 'Kenarortayın bulunduğu doğru',
    stem: ['Analitik düzlemde verilen bir ABC üçgeninin C köşesi orijindedir.'],
    ask: 'A(5, 1) ve B(−1, −7) olduğuna göre, [AB] kenarına ait kenarortayın üzerinde bulunduğu doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '3x + 2y = 0' },
      { key: 'B', text: '2x + 3y = 0' },
      { key: 'C', text: '3x − 2y = 0' },
      { key: 'D', text: '2x − 3y = 0' },
      { key: 'E', text: 'x + y = 0' },
    ],
    answer: 'A',
    hint: 'Kenarortay C köşesini [AB] nin orta noktasına birleştirir.',
    solution: [
      {
        title: 'Orta nokta',
        detail: 'M = ((5 + (−1)) / 2, (1 + (−7)) / 2) = (2, −3).',
      },
      {
        title: 'Eğim',
        detail: 'Doğru orijinden ve M den geçer: m = −3 / 2.',
      },
      {
        title: 'Sonuç',
        detail: 'y = −3x/2 ⇒ 2y = −3x ⇒ 3x + 2y = 0.',
      },
    ],
  },

  // ---------------------------------------------------------------- 62
  {
    id: 'lines-62',
    topic: 'Doğru üzerinde köşesi olan dikdörtgen',
    given: ['d: y = −x/2 + 5', 'OABC dikdörtgen'],
    // Origin (60, 220), 30 px per unit; A(6, 0), B(6, 2), C(0, 2).
    figure: {
      viewBox: '0 10 400 260',
      caption: 'Şekil 29',
      label:
        'Dik koordinat düzleminde d doğrusu ve OABC dikdörtgeni; A köşesi x ekseni, C köşesi y ekseni üzerinde, B köşesi d doğrusu üzerinde.',
      svg: `
          <path class="ln" d="M20,220 L385,220"/>
          <path class="ln" d="M375,214 L385,220 L375,226"/>
          <path class="ln" d="M60,260 L60,20"/>
          <path class="ln" d="M54,30 L60,20 L66,30"/>
          <text x="382" y="240" text-anchor="middle">x</text>
          <text x="72" y="30">y</text>
          <path class="ln" d="M30,55 L378,229"/>
          <path class="ln" d="M60,220 L240,220 L240,160 L60,160 Z"/>
          <circle class="pt" cx="60" cy="220" r="3.2"/>
          <circle class="pt" cx="240" cy="220" r="3.2"/>
          <circle class="pt" cx="240" cy="160" r="3.2"/>
          <circle class="pt" cx="60" cy="160" r="3.2"/>
          <text x="52" y="238" text-anchor="end">O</text>
          <text x="240" y="240" text-anchor="middle">A</text>
          <text x="248" y="154">B</text>
          <text x="52" y="164" text-anchor="end">C</text>
          <text x="366" y="250">d</text>
        `,
    },
    stem: [],
    ask: 'OABC dikdörtgeninin çevresi 16 birim olduğuna göre, alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '9' },
      { key: 'C', text: '12' },
      { key: 'D', text: '15' },
      { key: 'E', text: '18' },
    ],
    answer: 'C',
    hint: 'B köşesini B(a, b) al; b yi d doğrusunun denkleminden a cinsinden yaz.',
    solution: [
      {
        title: 'B köşesi',
        detail: 'B(a, b) d üzerinde ⇒ b = −a/2 + 5. Kenarlar a ve b dir.',
      },
      {
        title: 'Çevre',
        detail: '2(a + b) = 16 ⇒ a + (−a/2 + 5) = 8 ⇒ a/2 = 3 ⇒ a = 6.',
      },
      {
        title: 'Diğer kenar',
        detail: 'b = −3 + 5 = 2.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = 6 · 2 = 12 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 63
  {
    id: 'lines-63',
    topic: 'Diklik koşulu',
    stem: [
      'Analitik düzlemde verilen d₁: 3x + ay − 6 = 0 ve d₂: 2x − y + 4 = 0 doğruları dik olarak kesişmektedir.',
    ],
    ask: 'Buna göre, a kaçtır?',
    choices: [
      { key: 'A', text: '−6' },
      { key: 'B', text: '−3/2' },
      { key: 'C', text: '3/2' },
      { key: 'D', text: '3' },
      { key: 'E', text: '6' },
    ],
    answer: 'E',
    hint: 'Dik doğruların eğimlerinin çarpımı −1 dir.',
    solution: [
      {
        title: 'Eğimler',
        detail: 'm₁ = −3/a, m₂ = −2/(−1) = 2.',
      },
      {
        title: 'Diklik koşulu',
        detail: 'm₁ · m₂ = −1 ⇒ (−3/a) · 2 = −1 ⇒ −6/a = −1.',
      },
      {
        title: 'Sonuç',
        detail: 'a = 6 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 64
  {
    id: 'lines-64',
    topic: 'Kesim noktasından ve orijinden geçen doğru',
    stem: ['Analitik düzlemde d₁: 2x + y − 7 = 0 ve d₂: x − 2y + 4 = 0 doğruları veriliyor.'],
    ask: 'd₁ ile d₂ doğrularının kesim noktasından ve orijinden geçen doğrunun eğimi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '1/2' },
      { key: 'B', text: '2/3' },
      { key: 'C', text: '1' },
      { key: 'D', text: '3/2' },
      { key: 'E', text: '2' },
    ],
    answer: 'D',
    hint: 'd₂ den x = 2y − 4 yazıp d₁ de yerine koy.',
    solution: [
      {
        title: 'Yerine koyma',
        detail: 'x = 2y − 4 ⇒ 2(2y − 4) + y − 7 = 0 ⇒ 5y = 15 ⇒ y = 3.',
      },
      {
        title: 'Kesim noktası',
        detail: 'x = 2 · 3 − 4 = 2 ⇒ (2, 3).',
      },
      {
        title: 'Sonuç',
        detail: 'Orijinden ve (2, 3) ten geçen doğrunun eğimi 3 / 2 dir.',
      },
    ],
  },
  // ---------------------------------------------------------------- 65
  {
    id: 'lines-65',
    topic: 'Eksen kesim noktalarından kesişim noktası',
    given: [
      'd₁ doğrusu x eksenini −3, y eksenini 2 noktasında keser',
      'd₂ doğrusu x eksenini 4, y eksenini 4 noktasında keser',
      'P(x, y) = d₁ ∩ d₂',
    ],
    // Origin (190, 230), 40 px per unit; d₁ through (−3, 0), (0, 2); d₂ through (4, 0), (0, 4); P(6/5, 14/5).
    figure: {
      viewBox: '0 10 400 280',
      caption: 'Şekil 30',
      label:
        'Analitik düzlemde d₁ doğrusu x eksenini −3, y eksenini 2 noktasında; d₂ doğrusu x eksenini 4, y eksenini 4 noktasında kesiyor. İki doğru P(x, y) noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M10,230 L390,230"/>
          <path class="ln" d="M380,224 L390,230 L380,236"/>
          <path class="ln" d="M190,280 L190,20"/>
          <path class="ln" d="M184,30 L190,20 L196,30"/>
          <text x="386" y="220" text-anchor="middle">x</text>
          <text x="202" y="30">y</text>
          <path class="ln" d="M46,246 L298,78"/>
          <path class="ln" d="M170,50 L374,254"/>
          <circle class="pt" cx="70" cy="230" r="3.2"/>
          <circle class="pt" cx="190" cy="150" r="3.2"/>
          <circle class="pt" cx="190" cy="70" r="3.2"/>
          <circle class="pt" cx="350" cy="230" r="3.2"/>
          <circle class="pt" cx="238" cy="118" r="3.2"/>
          <text x="70" y="254" text-anchor="middle">−3</text>
          <text x="344" y="250" text-anchor="end">4</text>
          <text x="198" y="168">2</text>
          <text x="198" y="62">4</text>
          <text x="182" y="248" text-anchor="end">O</text>
          <text x="242" y="100" text-anchor="middle">P</text>
          <text x="306" y="76">d₁</text>
          <text x="162" y="50" text-anchor="end">d₂</text>
        `,
    },
    stem: [],
    ask: 'Buna göre, kesişme noktası P nin apsisi (x) kaçtır?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '6/5' },
      { key: 'C', text: '4/3' },
      { key: 'D', text: '3/2' },
      { key: 'E', text: '8/5' },
    ],
    answer: 'B',
    hint: 'Eksenleri kestiği noktalar bilinen bir doğrunun denklemi x/a + y/b = 1 biçiminde yazılır.',
    solution: [
      {
        title: 'd₁ doğrusu',
        detail: 'x/(−3) + y/2 = 1 ⇒ y = (2/3)x + 2.',
      },
      {
        title: 'd₂ doğrusu',
        detail: 'x/4 + y/4 = 1 ⇒ y = 4 − x.',
      },
      {
        title: 'Eşitleme',
        detail: '(2/3)x + 2 = 4 − x ⇒ (5/3)x = 2.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 6/5 bulunur (y = 14/5).',
      },
    ],
  },

  // ---------------------------------------------------------------- 66
  {
    id: 'lines-66',
    topic: 'Dik doğrunun katsayıları',
    stem: [
      'Analitik düzlemde 2x − y + 5 = 0 doğrusuna dik olan x + ay + c = 0 doğrusu P(3, −2) noktasından geçmektedir.',
    ],
    ask: 'Buna göre, a + c toplamı kaçtır?',
    choices: [
      { key: 'A', text: '−1' },
      { key: 'B', text: '1' },
      { key: 'C', text: '2' },
      { key: 'D', text: '3' },
      { key: 'E', text: '5' },
    ],
    answer: 'D',
    hint: 'Dik doğruların eğimlerinin çarpımı −1 dir.',
    solution: [
      {
        title: 'Verilen doğrunun eğimi',
        detail: '2x − y + 5 = 0 ⇒ y = 2x + 5, eğim 2.',
      },
      {
        title: 'Dik doğrunun eğimi',
        detail: 'x + ay + c = 0 doğrusunun eğimi −1/a dır; −1/a = −1/2 ⇒ a = 2.',
      },
      {
        title: 'Noktayı yerine koyma',
        detail: '3 + 2 · (−2) + c = 0 ⇒ c = 1.',
      },
      {
        title: 'Sonuç',
        detail: 'a + c = 2 + 1 = 3 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 67
  {
    id: 'lines-67',
    topic: 'İki doğrunun kesim noktası',
    given: ['d: x/3 + y/4 = 1', 'K(x, y) = d ∩ (y = 2x)'],
    // Origin (150, 260), 50 px per unit; d through (3, 0), (0, 4); K(6/5, 12/5).
    figure: {
      viewBox: '0 10 400 300',
      caption: 'Şekil 31',
      label:
        'Analitik düzlemde x eksenini 3, y eksenini 4 noktasında kesen d doğrusu ile orijinden geçen y = 2x doğrusu K noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M20,260 L390,260"/>
          <path class="ln" d="M380,254 L390,260 L380,266"/>
          <path class="ln" d="M150,300 L150,20"/>
          <path class="ln" d="M144,30 L150,20 L156,30"/>
          <text x="386" y="250" text-anchor="middle">x</text>
          <text x="162" y="30">y</text>
          <path class="ln" d="M130,33.33 L325,293.33"/>
          <path class="ln" d="M135,290 L245,70"/>
          <circle class="pt" cx="300" cy="260" r="3.2"/>
          <circle class="pt" cx="150" cy="60" r="3.2"/>
          <circle class="pt" cx="210" cy="140" r="3.2"/>
          <text x="296" y="280" text-anchor="end">3</text>
          <text x="142" y="66" text-anchor="end">4</text>
          <text x="158" y="280">O</text>
          <text x="200" y="136" text-anchor="end">K</text>
          <text x="253" y="74">y = 2x</text>
          <text x="334" y="298">d</text>
        `,
    },
    stem: [],
    ask: 'Analitik düzlemde verilen d doğrusu ile y = 2x doğrusunun kesim noktası K(x, y) olduğuna göre, K noktasının ordinatı (y) kaçtır?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '12/5' },
      { key: 'C', text: '5/2' },
      { key: 'D', text: '8/3' },
      { key: 'E', text: '3' },
    ],
    answer: 'B',
    hint: 'd doğrusunun denkleminde y yerine 2x yaz.',
    solution: [
      {
        title: 'Yerine koyma',
        detail: 'x/3 + 2x/4 = 1 ⇒ x/3 + x/2 = 1.',
      },
      {
        title: 'Apsis',
        detail: '5x/6 = 1 ⇒ x = 6/5.',
      },
      {
        title: 'Sonuç',
        detail: 'y = 2x = 12/5 tir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 68
  {
    id: 'lines-68',
    topic: 'Üçüncü doğru üzerinde kesişen doğrular',
    stem: [
      'Dik koordinat sisteminde verilen x + y − 6 = 0 ve 3x + my + 2 = 0 doğruları, y − 2x = 0 doğrusu üzerinde kesişiyor.',
    ],
    ask: 'Buna göre, m kaçtır?',
    choices: [
      { key: 'A', text: '−3' },
      { key: 'B', text: '−2' },
      { key: 'C', text: '−1/2' },
      { key: 'D', text: '1/2' },
      { key: 'E', text: '2' },
    ],
    answer: 'B',
    hint: 'Önce parametre içermeyen iki doğrunun kesim noktasını bul.',
    solution: [
      {
        title: 'Ortak nokta',
        detail: 'y = 2x i x + y − 6 = 0 da yaz: 3x = 6 ⇒ x = 2, y = 4.',
      },
      {
        title: 'Üçüncü doğruda yerine koyma',
        detail: '3 · 2 + m · 4 + 2 = 0 ⇒ 4m = −8.',
      },
      {
        title: 'Sonuç',
        detail: 'm = −2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 69
  {
    id: 'lines-69',
    topic: 'Paralel doğru ve eksen üzerinde kesişim',
    stem: [
      '2x + 3y − 6 = 0 doğrusuna paralel olan ve x − y + 4 = 0 doğrusu ile y ekseni üzerinde kesişen bir doğru veriliyor.',
    ],
    ask: 'Bu doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '2x + 3y − 4 = 0' },
      { key: 'B', text: '2x + 3y + 12 = 0' },
      { key: 'C', text: '2x + 3y − 12 = 0' },
      { key: 'D', text: '2x + 3y − 8 = 0' },
      { key: 'E', text: '2x + 3y + 4 = 0' },
    ],
    answer: 'C',
    hint: 'y ekseni üzerindeki noktaların apsisi 0 dır.',
    solution: [
      {
        title: 'Kesişim noktası',
        detail: 'x − y + 4 = 0 da x = 0 ⇒ y = 4; nokta (0, 4).',
      },
      {
        title: 'Paralel doğru',
        detail: 'Paralel doğru 2x + 3y + c = 0 biçimindedir.',
      },
      {
        title: 'Noktayı yerine koyma',
        detail: '2 · 0 + 3 · 4 + c = 0 ⇒ c = −12.',
      },
      {
        title: 'Sonuç',
        detail: 'Doğrunun denklemi 2x + 3y − 12 = 0 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 70
  {
    id: 'lines-70',
    topic: 'Dik üçgende kenarın eğimi',
    given: ['ABC dik üçgen', '[AB] ⊥ [BC]', 'A(−7, 0)', 'B(2, y)', 'C(6, 0)'],
    // Origin (215, 250), 25 px per unit; A(−7, 0), B(2, 6), C(6, 0).
    figure: {
      viewBox: '0 20 400 285',
      caption: 'Şekil 32',
      label:
        'Dik koordinat sisteminde A ve C noktaları x ekseni üzerinde; B noktası birinci bölgede ve ABC üçgeninin B köşesindeki açı dik.',
      svg: `
          <path class="ln" d="M15,250 L390,250"/>
          <path class="ln" d="M380,244 L390,250 L380,256"/>
          <path class="ln" d="M215,290 L215,30"/>
          <path class="ln" d="M209,40 L215,30 L221,40"/>
          <text x="386" y="240" text-anchor="middle">x</text>
          <text x="227" y="40">y</text>
          <path class="ln" d="M40,250 L265,100 L365,250"/>
          <path class="ln" d="M255.02,106.66 L261.68,116.64 L271.66,109.98"/>
          <circle class="pt" cx="40" cy="250" r="3.2"/>
          <circle class="pt" cx="265" cy="100" r="3.2"/>
          <circle class="pt" cx="365" cy="250" r="3.2"/>
          <text x="40" y="270" text-anchor="middle">A</text>
          <text x="273" y="94">B</text>
          <text x="365" y="270" text-anchor="middle">C</text>
          <text x="207" y="268" text-anchor="end">O</text>
        `,
    },
    stem: [],
    ask: 'Dik koordinat sistemindeki verilere göre, [AB] kenarının taşıyıcı doğrusunun eğimi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '1/2' },
      { key: 'B', text: '2/3' },
      { key: 'C', text: '3/4' },
      { key: 'D', text: '3/2' },
      { key: 'E', text: '2' },
    ],
    answer: 'B',
    hint: 'AB ve BC eğimlerini y cinsinden yaz; dik olduklarından çarpımları −1 dir.',
    solution: [
      {
        title: 'Eğimler',
        detail: 'm(AB) = (y − 0)/(2 − (−7)) = y/9, m(BC) = (0 − y)/(6 − 2) = −y/4.',
      },
      {
        title: 'Diklik koşulu',
        detail: '(y/9) · (−y/4) = −1 ⇒ y² = 36 ⇒ y = 6 (B birinci bölgede).',
      },
      {
        title: 'Sonuç',
        detail: 'm(AB) = 6/9 = 2/3 tür.',
      },
    ],
  },
  // ---------------------------------------------------------------- 71
  {
    id: 'lines-71',
    topic: 'Noktanın doğruya uzaklığı',
    given: ['d: 3x − 4y = 0', '[BA] ⊥ d', 'B(0, 5)'],
    // Origin (150, 250), 40 px per unit; B(0, 5), foot A(12/5, 9/5) on d.
    figure: {
      viewBox: '0 20 400 320',
      caption: 'Şekil 33',
      label:
        'Dik koordinat sisteminde orijinden geçen d doğrusu ve y ekseni üzerindeki B noktası; B den d doğrusuna çizilen dikmenin ayağı A noktası.',
      svg: `
          <path class="ln" d="M20,250 L390,250"/>
          <path class="ln" d="M380,244 L390,250 L380,256"/>
          <path class="ln" d="M150,335 L150,30"/>
          <path class="ln" d="M144,40 L150,30 L156,40"/>
          <text x="386" y="240" text-anchor="middle">x</text>
          <text x="162" y="40">y</text>
          <path class="ln" d="M50,325 L370,85"/>
          <path class="ln" d="M150,50 L246,178"/>
          <path class="ln" d="M238,184 L232,176 L240,170"/>
          <circle class="pt" cx="150" cy="50" r="3.2"/>
          <circle class="pt" cx="246" cy="178" r="3.2"/>
          <text x="142" y="56" text-anchor="end">B</text>
          <text x="254" y="198">A</text>
          <text x="142" y="268" text-anchor="end">O</text>
          <text x="366" y="112">d</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| kaç birimdir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '16/5' },
      { key: 'C', text: '4' },
      { key: 'D', text: '5' },
      { key: 'E', text: '6' },
    ],
    answer: 'C',
    hint: '|AB|, B noktasının d doğrusuna olan uzaklığıdır.',
    solution: [
      {
        title: 'Uzaklık formülü',
        detail: '|AB| = |3 · 0 − 4 · 5| / √(3² + 4²) bağıntısıyla bulunur.',
      },
      {
        title: 'Hesap',
        detail: '|AB| = |−20| / √25 = 20/5.',
      },
      {
        title: 'Sonuç',
        detail: '|AB| = 4 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 72
  {
    id: 'lines-72',
    topic: 'Kesişen doğrularla üçgen alanları oranı',
    given: ['d₁: x/6 + y/4 = 1', 'd₂: y − 2x = 0', 'd₁ ∩ d₂ = {C}'],
    // Origin (100, 270), 40 px per unit; A(0, 4), B(6, 0), C(3/2, 3).
    figure: {
      viewBox: '0 50 400 280',
      caption: 'Şekil 34',
      label:
        'Dik koordinat sisteminde d₁ doğrusu y eksenini A, x eksenini B noktasında kesiyor; orijinden geçen d₂ doğrusu d₁ i C noktasında kesiyor. OCB üçgeni taralı.',
      svg: `
          <path class="shade" d="M100,270 L160,150 L340,270 Z"/>
          <path class="ln" d="M20,270 L390,270"/>
          <path class="ln" d="M380,264 L390,270 L380,276"/>
          <path class="ln" d="M100,325 L100,60"/>
          <path class="ln" d="M94,70 L100,60 L106,70"/>
          <text x="386" y="260" text-anchor="middle">x</text>
          <text x="112" y="70">y</text>
          <path class="ln" d="M60,83.33 L380,296.67"/>
          <path class="ln" d="M80,310 L200,70"/>
          <circle class="pt" cx="100" cy="110" r="3.2"/>
          <circle class="pt" cx="340" cy="270" r="3.2"/>
          <circle class="pt" cx="160" cy="150" r="3.2"/>
          <text x="92" y="115" text-anchor="end">A</text>
          <text x="340" y="292" text-anchor="middle">B</text>
          <text x="172" y="150">C</text>
          <text x="92" y="288" text-anchor="end">O</text>
          <text x="52" y="80" text-anchor="end">d₁</text>
          <text x="208" y="76">d₂</text>
        `,
    },
    stem: [],
    ask: 'Dik koordinat sistemindeki verilere göre, Alan(OCB) / Alan(OCA) oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/2' },
      { key: 'B', text: '2/3' },
      { key: 'C', text: '3/2' },
      { key: 'D', text: '3' },
      { key: 'E', text: '4' },
    ],
    answer: 'D',
    hint: 'Önce d₂ nin denklemindeki y = 2x ifadesini d₁ de yerine yazarak C noktasını bul.',
    solution: [
      {
        title: 'Eksen noktaları',
        detail: 'd₁ eksenleri A(0, 4) ve B(6, 0) noktalarında keser.',
      },
      {
        title: 'C noktası',
        detail: 'x/6 + 2x/4 = 1 ⇒ 2x/3 = 1 ⇒ x = 3/2, y = 3; C(3/2, 3).',
      },
      {
        title: 'Alan(OCB)',
        detail: 'Taban |OB| = 6, yükseklik C nin ordinatı 3: Alan = 6 · 3 / 2 = 9.',
      },
      {
        title: 'Alan(OCA)',
        detail: 'Taban |OA| = 4, yükseklik C nin apsisi 3/2: Alan = 4 · (3/2) / 2 = 3.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(OCB) / Alan(OCA) = 9/3 = 3 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 73
  {
    id: 'lines-73',
    topic: 'Doğruların y ekseni ile oluşturduğu alan',
    stem: [
      'Dik koordinat düzleminde denklemleri 2x + y − 7 = 0 ve x − y + 1 = 0 olan doğrular veriliyor.',
    ],
    ask: 'Bu doğruların y ekseni ile oluşturduğu kapalı bölgenin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '7' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'Her doğrunun y eksenini kestiği noktayı ve iki doğrunun kesim noktasını bul.',
    solution: [
      {
        title: 'y ekseni kesim noktaları',
        detail:
          'x = 0 için 2x + y − 7 = 0 ⇒ y = 7; x − y + 1 = 0 ⇒ y = 1. Noktalar (0, 7) ve (0, 1).',
      },
      {
        title: 'Kesim noktası',
        detail: 'y = x + 1 i yerine yaz: 2x + x + 1 − 7 = 0 ⇒ x = 2, y = 3; nokta (2, 3).',
      },
      {
        title: 'Taban ve yükseklik',
        detail: 'Taban y ekseni üzerinde 7 − 1 = 6, yükseklik kesim noktasının apsisi 2 dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = 6 · 2 / 2 = 6 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 74
  {
    id: 'lines-74',
    topic: 'İki doğrunun kesim noktası',
    given: ['d₁: y = x + 1', 'd₂: x/8 + y/4 = 1'],
    // Origin (60, 250), 35 px per unit; d₂ through (8, 0), (0, 4); P(2, 3).
    figure: {
      viewBox: '0 25 400 270',
      caption: 'Şekil 35',
      label:
        'Analitik düzlemde eğimi pozitif olan d₁ doğrusu ile eksenleri kesen, eğimi negatif olan d₂ doğrusu birinci bölgede P noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M20,250 L390,250"/>
          <path class="ln" d="M380,244 L390,250 L380,256"/>
          <path class="ln" d="M60,285 L60,35"/>
          <path class="ln" d="M54,45 L60,35 L66,45"/>
          <text x="386" y="240" text-anchor="middle">x</text>
          <text x="72" y="45">y</text>
          <path class="ln" d="M25,250 L235,40"/>
          <path class="ln" d="M42.5,101.25 L375,267.5"/>
          <circle class="pt" cx="130" cy="145" r="3.2"/>
          <text x="130" y="168" text-anchor="middle">P</text>
          <text x="52" y="268" text-anchor="end">O</text>
          <text x="243" y="50">d₁</text>
          <text x="352" y="282">d₂</text>
        `,
    },
    stem: [],
    ask: 'Analitik düzlemde verilen d₁ ve d₂ doğruları P noktasında kesiştiğine göre, P noktasının koordinatları aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(1, 2)' },
      { key: 'B', text: '(2, 3)' },
      { key: 'C', text: '(3, 4)' },
      { key: 'D', text: '(4, 2)' },
      { key: 'E', text: '(2, 4)' },
    ],
    answer: 'B',
    hint: 'd₂ nin denkleminde y yerine x + 1 yaz.',
    solution: [
      {
        title: 'Yerine koyma',
        detail: 'x/8 + (x + 1)/4 = 1; her iki tarafı 8 ile çarp: x + 2x + 2 = 8.',
      },
      {
        title: 'Apsis',
        detail: '3x = 6 ⇒ x = 2.',
      },
      {
        title: 'Ordinat',
        detail: 'y = x + 1 = 3.',
      },
      {
        title: 'Sonuç',
        detail: 'P noktası (2, 3) tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 75
  {
    id: 'lines-75',
    topic: 'Dik doğruların eğimleri',
    stem: [
      'Dik koordinat sisteminde A(2, 5) noktasından geçen bir d doğrusu, denklemi mx + 2y − 3 = 0 olan doğruya diktir.',
    ],
    ask: 'Bu d doğrusu (−2, 3) noktasından da geçtiğine göre, m kaçtır?',
    choices: [
      { key: 'A', text: '−4' },
      { key: 'B', text: '−2' },
      { key: 'C', text: '2' },
      { key: 'D', text: '4' },
      { key: 'E', text: '6' },
    ],
    answer: 'D',
    hint: 'd nin eğimini iki noktasından bul; dik doğruların eğimleri çarpımı −1 dir.',
    solution: [
      {
        title: 'd nin eğimi',
        detail: 'm(d) = (5 − 3) / (2 − (−2)) = 2/4 = 1/2.',
      },
      {
        title: 'Diğer doğrunun eğimi',
        detail: 'mx + 2y − 3 = 0 ⇒ y = −(m/2)x + 3/2; eğim −m/2.',
      },
      {
        title: 'Diklik koşulu',
        detail: '(1/2) · (−m/2) = −1 ⇒ −m/4 = −1.',
      },
      {
        title: 'Sonuç',
        detail: 'm = 4 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 76
  {
    id: 'lines-76',
    topic: 'Dikme ayağının koordinatları',
    given: ['[AB] ⊥ d', 'A(0, 10)', 'B ∈ d'],
    // Origin (170, 300), 25 px per unit; d: y = 3x, A(0, 10), B(3, 9).
    figure: {
      viewBox: '0 5 400 355',
      caption: 'Şekil 36',
      label:
        'Analitik düzlemde orijinden geçen d doğrusu; y ekseni üzerindeki A noktasından d doğrusuna çizilen dikmenin ayağı B noktası.',
      svg: `
          <path class="ln" d="M20,300 L390,300"/>
          <path class="ln" d="M380,294 L390,300 L380,306"/>
          <path class="ln" d="M170,355 L170,15"/>
          <path class="ln" d="M164,25 L170,15 L176,25"/>
          <text x="386" y="290" text-anchor="middle">x</text>
          <text x="182" y="25">y</text>
          <path class="ln" d="M155,345 L260,30"/>
          <path class="ln" d="M170,50 L245,75"/>
          <path class="ln" d="M235.51,71.84 L232.35,81.33 L241.84,84.49"/>
          <circle class="pt" cx="170" cy="50" r="3.2"/>
          <circle class="pt" cx="245" cy="75" r="3.2"/>
          <text x="162" y="55" text-anchor="end">A</text>
          <text x="254" y="82">B</text>
          <text x="162" y="318" text-anchor="end">O</text>
          <text x="266" y="45">d</text>
        `,
    },
    stem: [],
    ask: 'Analitik düzlemde verilen d doğrusunun denklemi y = 3x olduğuna göre, B noktasının koordinatları aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(3, 9)' },
      { key: 'B', text: '(2, 6)' },
      { key: 'C', text: '(1, 3)' },
      { key: 'D', text: '(9, 3)' },
      { key: 'E', text: '(3, 8)' },
    ],
    answer: 'A',
    hint: '[AB] doğrusunun eğimi, d nin eğimiyle çarpıldığında −1 verir.',
    solution: [
      {
        title: 'AB doğrusunun eğimi',
        detail: 'd nin eğimi 3 olduğundan AB nin eğimi −1/3 tür.',
      },
      {
        title: 'AB nin denklemi',
        detail: 'A(0, 10) dan geçtiği için y = −x/3 + 10.',
      },
      {
        title: 'Kesim noktası',
        detail: '3x = −x/3 + 10 ⇒ 10x/3 = 10 ⇒ x = 3, y = 9.',
      },
      {
        title: 'Sonuç',
        detail: 'B noktası (3, 9) dur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 77
  {
    id: 'lines-77',
    topic: 'Dik kesişen doğrularla yamuk alanı',
    given: ['[CD] ⊥ [AB]', 'AB: x + y − 8 = 0', '[EF] ⊥ Ox', 'C(−2, 0)'],
    // Origin (110, 290), 30 px per unit; CD: y = x + 2, D(0, 2), E(3, 5), F(3, 0).
    figure: {
      viewBox: '0 5 400 325',
      caption: 'Şekil 37',
      label:
        'Dik koordinat sisteminde AB doğrusu eksenleri A ve B noktalarında kesiyor; x ekseni üzerindeki C noktasından geçen doğru y eksenini D noktasında kesiyor ve AB ye E noktasında dik. E den x eksenine inen dikmenin ayağı F; DOFE dörtgeni taralı.',
      svg: `
          <path class="shade" d="M110,230 L110,290 L200,290 L200,140 Z"/>
          <path class="ln" d="M15,290 L390,290"/>
          <path class="ln" d="M380,284 L390,290 L380,296"/>
          <path class="ln" d="M110,320 L110,15"/>
          <path class="ln" d="M104,25 L110,15 L116,25"/>
          <text x="386" y="280" text-anchor="middle">x</text>
          <text x="122" y="25">y</text>
          <path class="ln" d="M95,35 L380,320"/>
          <path class="ln" d="M20,320 L260,80"/>
          <path class="ln" d="M200,140 L200,290"/>
          <path class="ln" d="M192.93,147.07 L200,154.14 L207.07,147.07"/>
          <path class="ln" d="M190,290 L190,280 L200,280"/>
          <circle class="pt" cx="110" cy="50" r="3.2"/>
          <circle class="pt" cx="350" cy="290" r="3.2"/>
          <circle class="pt" cx="50" cy="290" r="3.2"/>
          <circle class="pt" cx="110" cy="230" r="3.2"/>
          <circle class="pt" cx="200" cy="140" r="3.2"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>
          <text x="102" y="55" text-anchor="end">A</text>
          <text x="345" y="310" text-anchor="end">B</text>
          <text x="50" y="310" text-anchor="middle">C</text>
          <text x="102" y="228" text-anchor="end">D</text>
          <text x="208" y="134">E</text>
          <text x="208" y="308">F</text>
          <text x="102" y="308" text-anchor="end">O</text>
        `,
    },
    stem: [],
    ask: 'Dik koordinat sisteminde verilen şekilde doğrular E noktasında dik kesiştiğine göre, Alan(DOFE) kaç birim karedir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '21/2' },
      { key: 'D', text: '12' },
      { key: 'E', text: '25/2' },
    ],
    answer: 'C',
    hint: 'AB nin eğimi −1 olduğundan CD nin eğimi 1 dir; C den geçen bu doğrunun denklemini yaz.',
    solution: [
      {
        title: 'CD doğrusu',
        detail:
          'AB nin eğimi −1, dik doğrunun eğimi 1; C(−2, 0) dan geçtiği için y = x + 2. D(0, 2).',
      },
      {
        title: 'E noktası',
        detail: 'x + 2 = 8 − x ⇒ x = 3, y = 5; E(3, 5), dolayısıyla F(3, 0).',
      },
      {
        title: 'Yamuk',
        detail:
          'DOFE, paralel kenarları |OD| = 2 ve |FE| = 5, yüksekliği |OF| = 3 olan dik yamuktur.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = (2 + 5) / 2 · 3 = 21/2 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 78
  {
    id: 'lines-78',
    topic: 'Bir noktadan geçen dik doğru denklemi',
    stem: [],
    ask: 'x − 3y + 6 = 0 doğrusuna dik olan ve A(2, 1) noktasından geçen doğrunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'x − 3y + 1 = 0' },
      { key: 'B', text: '3x − y − 5 = 0' },
      { key: 'C', text: 'x + 3y − 5 = 0' },
      { key: 'D', text: '3x + y − 7 = 0' },
      { key: 'E', text: '3x + y + 7 = 0' },
    ],
    answer: 'D',
    hint: 'Verilen doğrunun eğimini bul; dik doğrunun eğimi bunun ters işaretlisinin tersidir.',
    solution: [
      {
        title: 'Verilen doğrunun eğimi',
        detail: 'x − 3y + 6 = 0 ⇒ y = x/3 + 2; eğim 1/3.',
      },
      {
        title: 'Dik doğrunun eğimi',
        detail: '(1/3) · m = −1 ⇒ m = −3.',
      },
      {
        title: 'Denklem',
        detail: 'y − 1 = −3(x − 2) ⇒ y = −3x + 7.',
      },
      {
        title: 'Sonuç',
        detail: 'Doğrunun denklemi 3x + y − 7 = 0 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 79
  {
    id: 'lines-79',
    topic: 'Dik doğru denklemi',
    given: ['A(2, 4)', '[OA] ⊥ [AB]'],
    // Origin (45, 230), 30 px per unit; AB: x + 2y − 10 = 0, B(10, 0).
    figure: {
      viewBox: '0 40 400 235',
      caption: 'Şekil 38',
      label:
        'Dik koordinat sisteminde orijin ile A noktası birleştirilmiş; A dan geçen ve OA ya dik olan doğru x eksenini B noktasında kesiyor.',
      svg: `
          <path class="ln" d="M15,230 L390,230"/>
          <path class="ln" d="M380,224 L390,230 L380,236"/>
          <path class="ln" d="M45,260 L45,50"/>
          <path class="ln" d="M39,60 L45,50 L51,60"/>
          <text x="386" y="220" text-anchor="middle">x</text>
          <text x="57" y="60">y</text>
          <path class="ln" d="M45,80 L375,245"/>
          <path class="ln" d="M45,230 L105,110"/>
          <path class="ln" d="M100.53,118.94 L109.47,123.41 L113.94,114.47"/>
          <circle class="pt" cx="105" cy="110" r="3.2"/>
          <circle class="pt" cx="345" cy="230" r="3.2"/>
          <text x="108" y="96">A(2, 4)</text>
          <text x="340" y="250" text-anchor="end">B</text>
          <text x="37" y="248" text-anchor="end">O</text>
        `,
    },
    stem: [],
    ask: 'Dik koordinat sistemindeki verilere göre, AB doğrusunun denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '2x − y = 0' },
      { key: 'B', text: 'x + 2y − 10 = 0' },
      { key: 'C', text: 'x − 2y + 6 = 0' },
      { key: 'D', text: '2x + y − 8 = 0' },
      { key: 'E', text: 'x + 2y − 8 = 0' },
    ],
    answer: 'B',
    hint: 'OA nın eğimini bul; AB nin eğimiyle çarpımı −1 olmalı.',
    solution: [
      {
        title: 'OA nın eğimi',
        detail: 'm(OA) = 4/2 = 2.',
      },
      {
        title: 'AB nin eğimi',
        detail: '2 · m(AB) = −1 ⇒ m(AB) = −1/2.',
      },
      {
        title: 'Denklem',
        detail: 'y − 4 = −(x − 2)/2 ⇒ 2y − 8 = −x + 2.',
      },
      {
        title: 'Sonuç',
        detail: 'AB: x + 2y − 10 = 0 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 80
  {
    id: 'lines-80',
    topic: 'Diklik koşuluyla üçgen alanı',
    given: ['[BA] ⊥ [AC]', 'C(3, 4)', 'B(−4, 0)', 'A(0, y), y < 0'],
    // Origin (200, 190), 32 px per unit; A(0, −2).
    figure: {
      viewBox: '0 10 400 300',
      caption: 'Şekil 39',
      label:
        'Dik koordinat sisteminde x ekseni üzerindeki B, birinci bölgedeki C ve y ekseninin negatif tarafındaki A noktaları bir üçgen oluşturuyor; A daki açı dik. AOB üçgeni taralı.',
      svg: `
          <path class="shade" d="M200,190 L72,190 L200,254 Z"/>
          <path class="ln" d="M15,190 L390,190"/>
          <path class="ln" d="M380,184 L390,190 L380,196"/>
          <path class="ln" d="M200,295 L200,20"/>
          <path class="ln" d="M194,30 L200,20 L206,30"/>
          <text x="386" y="180" text-anchor="middle">x</text>
          <text x="212" y="30">y</text>
          <path class="ln" d="M72,190 L296,62 L200,254 Z"/>
          <path class="ln" d="M191.06,249.53 L195.53,240.59 L204.47,245.06"/>
          <circle class="pt" cx="72" cy="190" r="3.2"/>
          <circle class="pt" cx="296" cy="62" r="3.2"/>
          <circle class="pt" cx="200" cy="254" r="3.2"/>
          <text x="64" y="185" text-anchor="end">B</text>
          <text x="304" y="60">C</text>
          <text x="208" y="272">A</text>
          <text x="192" y="182" text-anchor="end">O</text>
        `,
    },
    stem: [],
    ask: 'Dik koordinat sistemindeki verilere göre, AOB üçgeninin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'BA ve AC doğrularının eğimlerini y cinsinden yaz; çarpımları −1 dir.',
    solution: [
      {
        title: 'Eğimler',
        detail: 'm(BA) = (y − 0)/(0 + 4) = y/4, m(AC) = (4 − y)/(3 − 0) = (4 − y)/3.',
      },
      {
        title: 'Diklik koşulu',
        detail: '(y/4) · (4 − y)/3 = −1 ⇒ y(4 − y) = −12 ⇒ y² − 4y − 12 = 0.',
      },
      {
        title: 'A noktası',
        detail: '(y − 6)(y + 2) = 0; y < 0 olduğundan y = −2, A(0, −2).',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(AOB) = |OB| · |OA| / 2 = 4 · 2 / 2 = 4 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 81
  {
    id: 'lines-81',
    topic: 'Doğruların sınırladığı bölgenin alanı',
    stem: [
      'Analitik düzlemde verilen y + 2 = 0, x − 2y + 4 = 0 ve x − 6 = 0 doğruları ile y ekseni bir bölge sınırlıyor.',
    ],
    ask: 'Bu bölgenin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '27' },
      { key: 'B', text: '30' },
      { key: 'C', text: '33' },
      { key: 'D', text: '36' },
      { key: 'E', text: '42' },
    ],
    answer: 'C',
    hint: 'Bölge, paralel kenarları y eksenine paralel olan bir dik yamuktur; x = 0 ve x = 6 daki kenar uzunluklarını bul.',
    solution: [
      {
        title: 'Doğrular',
        detail: 'y = −2 yatay, y = x/2 + 2 eğik, x = 0 ve x = 6 düşey doğrulardır.',
      },
      {
        title: 'x = 0 daki kenar',
        detail: 'Eğik doğru (0, 2) den geçer; kenar 2 − (−2) = 4.',
      },
      {
        title: 'x = 6 daki kenar',
        detail: 'Eğik doğru (6, 5) ten geçer; kenar 5 − (−2) = 7.',
      },
      {
        title: 'Sonuç',
        detail: 'Yamuğun yüksekliği 6: Alan = (4 + 7) / 2 · 6 = 33 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 82
  {
    id: 'lines-82',
    topic: 'Orta dikme denklemi',
    stem: [],
    ask: 'Dik koordinat sisteminde A(1, −2) ve B(5, 4) noktalarından eşit uzaklıktaki noktaların geometrik yerinin denklemi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '3x − 2y − 7 = 0' },
      { key: 'B', text: '2x + 3y − 9 = 0' },
      { key: 'C', text: '2x + 3y − 5 = 0' },
      { key: 'D', text: '3x + 2y − 11 = 0' },
      { key: 'E', text: '2x − 3y − 3 = 0' },
    ],
    answer: 'B',
    hint: 'Aranan doğru [AB] nin orta dikmesidir: orta noktadan geçer ve AB ye diktir.',
    solution: [
      {
        title: 'Orta nokta',
        detail: '((1 + 5)/2, (−2 + 4)/2) = (3, 1).',
      },
      {
        title: 'AB nin eğimi',
        detail: 'm(AB) = (4 − (−2)) / (5 − 1) = 6/4 = 3/2; orta dikmenin eğimi −2/3.',
      },
      {
        title: 'Denklem',
        detail: 'y − 1 = −(2/3)(x − 3) ⇒ 3y − 3 = −2x + 6.',
      },
      {
        title: 'Sonuç',
        detail: 'Geometrik yer 2x + 3y − 9 = 0 doğrusudur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 83
  {
    id: 'lines-83',
    topic: 'Eksen kesim noktalarıyla üçgen alanı',
    stem: [
      'a ≠ 0 olmak üzere denklemi x/a + y/3 = 1 olan doğru koordinat eksenlerini P ve T noktalarında kesmektedir.',
    ],
    ask: 'K(7, 0) noktası için PKT üçgeninin alanı 15 birim kare olduğuna göre, a nın alabileceği değerler toplamı kaçtır?',
    choices: [
      { key: 'A', text: '7' },
      { key: 'B', text: '10' },
      { key: 'C', text: '14' },
      { key: 'D', text: '17' },
      { key: 'E', text: '20' },
    ],
    answer: 'C',
    hint: 'P ve K ikisi de x ekseni üzerindedir; T nin ordinatı üçgenin yüksekliğidir.',
    solution: [
      {
        title: 'Kesim noktaları',
        detail: 'y = 0 için x = a: P(a, 0); x = 0 için y = 3: T(0, 3).',
      },
      {
        title: 'Alan',
        detail: 'Taban |PK| = |7 − a|, yükseklik 3: 3 · |7 − a| / 2 = 15 ⇒ |7 − a| = 10.',
      },
      {
        title: 'a nın değerleri',
        detail: '7 − a = 10 ⇒ a = −3; 7 − a = −10 ⇒ a = 17.',
      },
      {
        title: 'Sonuç',
        detail: 'Toplam −3 + 17 = 14 tür.',
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
    {
      id: 'lines-m5',
      order: 5,
      title: 'Eğim ve doğru denklemi',
      summary:
        'İki noktadan eğim, genel denklemden eğim, eksen kesim noktaları ve eğimi ile bir noktası bilinen doğrunun denklemi.',
      questions: pick(
        'lines-25',
        'lines-26',
        'lines-27',
        'lines-28',
        'lines-29',
        'lines-30',
        'lines-31',
      ),
    },
    {
      id: 'lines-m6',
      order: 6,
      title: 'Doğrusallık ve doğru denklemi',
      summary:
        'Grafikten doğru denklemi, doğrusal noktalar, doğru üzerindeki nokta, eksenlerle oluşan üçgenin alanı, eğim açısı ve orta nokta.',
      questions: pick(
        'lines-32',
        'lines-33',
        'lines-34',
        'lines-35',
        'lines-36',
        'lines-37',
        'lines-38',
      ),
    },
    {
      id: 'lines-m7',
      order: 7,
      title: 'Eğim, simetri ve alan',
      summary:
        'Noktadan geçen doğrunun eğimi, kare ve dik doğrular, doğruya göre simetri, eğim açısı, doğruyla üçgen alanı ve eşkenar üçgen.',
      questions: pick('lines-39', 'lines-40', 'lines-41', 'lines-42', 'lines-43', 'lines-44'),
    },
    {
      id: 'lines-m8',
      order: 8,
      title: 'Paralel ve dik doğrular',
      summary:
        'Paralellik koşulu, orta noktadan ve oranla bölen noktadan geçen doğru, orta dikme, eksen üzerinde kesişen doğrular ve dik doğru denklemi.',
      questions: pick(
        'lines-45',
        'lines-46',
        'lines-47',
        'lines-48',
        'lines-49',
        'lines-50',
        'lines-51',
      ),
    },
    {
      id: 'lines-m9',
      order: 9,
      title: 'Uzaklık, kesişim ve alan',
      summary:
        'Noktanın doğruya uzaklığı, eksen üzerinde kesişen doğrular, eşkenar dörtgen köşegeni, dik doğru, taralı alan ve eksene dik doğru.',
      questions: pick('lines-52', 'lines-53', 'lines-54', 'lines-55', 'lines-56', 'lines-57'),
    },
    {
      id: 'lines-m10',
      order: 10,
      title: 'Kesişim, diklik ve alan',
      summary:
        'Paralel doğrularla yamuk alanı, kesim noktasından geçen doğru, dik doğrular, kenarortay doğrusu, doğru üzerinde köşesi olan dikdörtgen ve diklik koşulu.',
      questions: pick(
        'lines-58',
        'lines-59',
        'lines-60',
        'lines-61',
        'lines-62',
        'lines-63',
        'lines-64',
      ),
    },
    {
      id: 'lines-m11',
      order: 11,
      title: 'Kesişim, paralellik ve diklik',
      summary:
        'Eksen kesim noktalarıyla kesişim, dik doğrunun katsayıları, doğrunun y = 2x ile kesimi, üçüncü doğru üzerinde kesişme, paralel doğru ve dik üçgende eğim.',
      questions: pick('lines-65', 'lines-66', 'lines-67', 'lines-68', 'lines-69', 'lines-70'),
    },
    {
      id: 'lines-m12',
      order: 12,
      title: 'Uzaklık, alan ve dikme ayağı',
      summary:
        'Noktanın doğruya uzaklığı, kesişen doğrularla alan oranı, y ekseniyle kapalı bölge, kesim noktası, diklik koşulu ve dikme ayağı.',
      questions: pick('lines-71', 'lines-72', 'lines-73', 'lines-74', 'lines-75', 'lines-76'),
    },
    {
      id: 'lines-m13',
      order: 13,
      title: 'Diklik, orta dikme ve alanlar',
      summary:
        'Dik kesişen doğrularla yamuk alanı, dik doğru denklemi, diklik koşuluyla üçgen alanı, doğruların sınırladığı bölge, orta dikme ve eksen kesimleriyle alan.',
      questions: pick(
        'lines-77',
        'lines-78',
        'lines-79',
        'lines-80',
        'lines-81',
        'lines-82',
        'lines-83',
      ),
    },
  ],
};
