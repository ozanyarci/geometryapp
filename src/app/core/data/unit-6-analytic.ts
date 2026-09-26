import { Question, Unit } from '../models';

/**
 * Unit 6 — Analytic study of the point.
 * Original questions written in the style of the "Noktanın Analitik İncelenmesi —
 * Çözümlü Test" source: quadrants, distance between two points, midpoint, the area
 * of a triangle from its vertex coordinates, medians and centroids.
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
    id: 'analytic-1',
    topic: 'Koordinatları verilen üçgenin alanı',
    stem: [],
    ask: 'Analitik düzlemde verilen A(−2, 5), B(6, 0) ve O(0, 0) noktalarının oluşturduğu üçgensel bölgenin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '14' },
      { key: 'D', text: '15' },
      { key: 'E', text: '30' },
    ],
    answer: 'D',
    hint: 'Tabanı x ekseni üzerindeki [OB] al; yükseklik A noktasının x eksenine uzaklığıdır.',
    solution: [
      {
        title: 'Tabanı seç',
        detail: 'O(0, 0) ve B(6, 0) x ekseni üzerinde olduğundan |OB| = 6 birimdir.',
      },
      {
        title: 'Yüksekliği bul',
        detail:
          'A(−2, 5) noktasının x eksenine uzaklığı ordinatının mutlak değeridir: h = 5 birim.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = (6 · 5) / 2 = 15 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'analytic-2',
    topic: 'Koordinat düzleminin bölgeleri',
    stem: [],
    ask: 'Dik koordinat sisteminde verilen A(m, n) noktası koordinat düzleminin IV. bölgesinde bulunduğuna göre, (m, n) ikilisi aşağıdakilerden hangisi olabilir?',
    choices: [
      { key: 'A', text: '(3, 2)' },
      { key: 'B', text: '(−1, 4)' },
      { key: 'C', text: '(−3, −1)' },
      { key: 'D', text: '(0, −2)' },
      { key: 'E', text: '(2, −5)' },
    ],
    answer: 'E',
    hint: 'IV. bölgede apsis pozitif, ordinat negatiftir.',
    solution: [
      {
        title: 'IV. bölgenin işaretleri',
        detail: 'IV. bölgedeki bir noktada m > 0 ve n < 0 olmalıdır.',
      },
      {
        title: 'Seçenekleri ele',
        detail:
          '(3, 2) I. bölgede, (−1, 4) II. bölgede, (−3, −1) III. bölgededir; (0, −2) ise y ekseni üzerindedir, hiçbir bölgeye ait değildir.',
      },
      {
        title: 'Sonuç',
        detail: '(2, −5) noktasında 2 > 0 ve −5 < 0 olduğundan nokta IV. bölgededir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'analytic-3',
    topic: 'Orta nokta ve orijine uzaklık',
    stem: [],
    ask: 'Analitik düzlemde verilen A(5, −8) ve B(−1, 2) noktalarının orta noktası C(x, y) olduğuna göre, C noktasının orijine uzaklığı kaç birimdir?',
    choices: [
      { key: 'A', text: '√5' },
      { key: 'B', text: '2√2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '√10' },
      { key: 'E', text: '√13' },
    ],
    answer: 'E',
    hint: 'Orta noktanın koordinatları uç noktaların koordinatlarının aritmetik ortalamasıdır.',
    solution: [
      {
        title: 'Orta noktayı bul',
        detail: 'x = (5 + (−1)) / 2 = 2 ve y = (−8 + 2) / 2 = −3, yani C(2, −3).',
      },
      {
        title: 'Orijine uzaklık',
        detail: '|OC| = √(2² + (−3)²) = √(4 + 9).',
      },
      {
        title: 'Sonuç',
        detail: '|OC| = √13 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'analytic-4',
    topic: 'Kenar orta noktalarından çevre',
    stem: [],
    ask: 'Analitik düzlemde verilen bir ABC üçgeninin kenarlarının orta noktalarının koordinatları (3, 0), (−3, 0) ve (0, 4) tür. Buna göre, bu üçgenin çevresi kaç birimdir?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '24' },
      { key: 'C', text: '28' },
      { key: 'D', text: '32' },
      { key: 'E', text: '36' },
    ],
    answer: 'D',
    hint: 'Orta noktaları birleştiren üçgenin her kenarı, büyük üçgenin bir kenarının yarısıdır.',
    solution: [
      {
        title: 'Orta taban üçgeninin kenarları',
        detail:
          '(3, 0) ile (−3, 0) arası 6 birim; (3, 0) ile (0, 4) arası √(9 + 16) = 5 birim; (−3, 0) ile (0, 4) arası da 5 birimdir.',
      },
      {
        title: 'Küçük üçgenin çevresi',
        detail: '6 + 5 + 5 = 16 birim.',
      },
      {
        title: 'Orta taban teoremi',
        detail:
          'Her orta taban karşısındaki kenarın yarısı olduğundan ABC’nin kenarları 12, 10 ve 10 birimdir.',
      },
      {
        title: 'Sonuç',
        detail: 'Çevre(ABC) = 2 · 16 = 32 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  // Origin (90, 220), 45 px per unit: A(4, 3) → (270, 85), B(5, 0) → (315, 220).
  {
    id: 'analytic-5',
    topic: 'İki nokta arası uzaklık',
    figure: {
      viewBox: '0 20 400 250',
      caption: 'Şekil 1',
      label:
        'Koordinat düzleminde O başlangıç noktası, birinci bölgede A(4, 3) noktası ve x ekseninin pozitif yönünde B noktası; OAB üçgeninde |OA| = |OB|.',
      svg: `
          <path class="ln" d="M45,220 L375,220"/>
          <path class="ln" d="M365,214 L375,220 L365,226"/>
          <path class="ln" d="M90,255 L90,35"/>
          <path class="ln" d="M84,45 L90,35 L96,45"/>
          <text x="370" y="244" text-anchor="middle">x</text>
          <text x="102" y="44">y</text>
          <path class="ln" d="M90,220 L270,85 L315,220"/>
          <path class="tick" d="M176.4,147.7 L183.6,157.3"/>
          <path class="tick" d="M202.5,213 L202.5,227"/>
          <circle class="pt" cx="90" cy="220" r="3.2"/>
          <circle class="pt" cx="270" cy="85" r="3.2"/>
          <circle class="pt" cx="315" cy="220" r="3.2"/>
          <text x="82" y="240" text-anchor="end">O</text>
          <text x="270" y="72" text-anchor="middle">A(4, 3)</text>
          <text x="315" y="242" text-anchor="middle">B</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 250',
      caption: 'Şekil 1',
      label: 'Aynı şekilde A noktasından x eksenine inilen dikme kesikli çizilmiş; ayağı H(4, 0).',
      svg: `
          <path class="ln" d="M45,220 L375,220"/>
          <path class="ln" d="M365,214 L375,220 L365,226"/>
          <path class="ln" d="M90,255 L90,35"/>
          <path class="ln" d="M84,45 L90,35 L96,45"/>
          <text x="370" y="244" text-anchor="middle">x</text>
          <text x="102" y="44">y</text>
          <path class="ln" d="M90,220 L270,85 L315,220"/>
          <path class="tick" d="M176.4,147.7 L183.6,157.3"/>
          <path class="tick" d="M202.5,213 L202.5,227"/>
          <path class="aux" d="M270,85 L270,220"/>
          <path class="aux-head" d="M270,208 L282,208 L282,220"/>
          <circle class="pt" cx="90" cy="220" r="3.2"/>
          <circle class="pt" cx="270" cy="85" r="3.2"/>
          <circle class="pt" cx="315" cy="220" r="3.2"/>
          <circle class="pt" cx="270" cy="220" r="3.2"/>
          <text x="82" y="240" text-anchor="end">O</text>
          <text x="270" y="72" text-anchor="middle">A(4, 3)</text>
          <text x="315" y="242" text-anchor="middle">B</text>
          <text x="262" y="242" text-anchor="middle">H</text>
        `,
    },
    given: ['A(4, 3)', '|OA| = |OB|', 'B noktası x ekseni üzerinde'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| kaç birimdir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '√10' },
      { key: 'C', text: '2√3' },
      { key: 'D', text: '√13' },
      { key: 'E', text: '4' },
    ],
    answer: 'B',
    hint: 'Önce |OA| uzunluğunu bul; B noktası x ekseninde bu uzaklıktadır.',
    solution: [
      {
        title: '|OA| uzunluğu',
        detail: '|OA| = √(4² + 3²) = √25 = 5 birimdir.',
      },
      {
        title: 'B noktasını bul',
        detail: '|OB| = |OA| = 5 ve B pozitif x ekseninde olduğundan B(5, 0) olur.',
      },
      {
        title: 'Uzaklık formülü',
        detail: '|AB| = √((5 − 4)² + (0 − 3)²) = √(1 + 9).',
      },
      {
        title: 'Sonuç',
        detail: '|AB| = √10 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  // Origin (146, 150), 18 px per unit: A(−6, 0) → (38, 150), B(6, 0) → (254, 150),
  // C(12, 0) → (362, 150), D(3, 3√3) → (200, 56.5); both radii are 6 → 108 px.
  {
    id: 'analytic-6',
    topic: 'Kesişen yarım çemberler',
    figure: {
      viewBox: '0 16 400 170',
      caption: 'Şekil 2',
      label:
        'x ekseni üzerinde sırasıyla A, O, B, C noktaları; O merkezli yarım çember A ile B arasında, B merkezli yarım çember O ile C arasında çizilmiş ve iki yarım çember D noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M20,150 L385,150"/>
          <path class="ln" d="M375,144 L385,150 L375,156"/>
          <path class="ln" d="M146,165 L146,26"/>
          <path class="ln" d="M140,36 L146,26 L152,36"/>
          <text x="390" y="140" text-anchor="middle">x</text>
          <text x="156" y="36">y</text>
          <path class="ln" d="M38,150 A108,108 0 0 1 254,150"/>
          <path class="ln" d="M146,150 A108,108 0 0 1 362,150"/>
          <circle class="pt" cx="38" cy="150" r="3.2"/>
          <circle class="pt" cx="146" cy="150" r="3.2"/>
          <circle class="pt" cx="254" cy="150" r="3.2"/>
          <circle class="pt" cx="362" cy="150" r="3.2"/>
          <circle class="pt" cx="200" cy="56.5" r="3.2"/>
          <text x="38" y="170" text-anchor="middle">A</text>
          <text x="138" y="170" text-anchor="end">O</text>
          <text x="254" y="170" text-anchor="middle">B</text>
          <text x="362" y="170" text-anchor="middle">C</text>
          <text x="200" y="42" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 16 400 170',
      caption: 'Şekil 2',
      label:
        'Aynı şekilde [OD] ve [BD] yarıçapları ile D noktasından x eksenine inilen dikme kesikli çizilmiş; dikmenin ayağı H.',
      svg: `
          <path class="ln" d="M20,150 L385,150"/>
          <path class="ln" d="M375,144 L385,150 L375,156"/>
          <path class="ln" d="M146,165 L146,26"/>
          <path class="ln" d="M140,36 L146,26 L152,36"/>
          <text x="390" y="140" text-anchor="middle">x</text>
          <text x="156" y="36">y</text>
          <path class="ln" d="M38,150 A108,108 0 0 1 254,150"/>
          <path class="ln" d="M146,150 A108,108 0 0 1 362,150"/>
          <path class="aux" d="M146,150 L200,56.5 L254,150"/>
          <path class="aux" d="M200,56.5 L200,150"/>
          <path class="aux-head" d="M200,140 L210,140 L210,150"/>
          <circle class="pt" cx="38" cy="150" r="3.2"/>
          <circle class="pt" cx="146" cy="150" r="3.2"/>
          <circle class="pt" cx="254" cy="150" r="3.2"/>
          <circle class="pt" cx="362" cy="150" r="3.2"/>
          <circle class="pt" cx="200" cy="56.5" r="3.2"/>
          <circle class="pt" cx="200" cy="150" r="3.2"/>
          <text x="38" y="170" text-anchor="middle">A</text>
          <text x="138" y="170" text-anchor="end">O</text>
          <text x="254" y="170" text-anchor="middle">B</text>
          <text x="362" y="170" text-anchor="middle">C</text>
          <text x="200" y="42" text-anchor="middle">D</text>
          <text x="200" y="170" text-anchor="middle">H</text>
        `,
    },
    given: ['O ve B merkezli yarım çemberler D noktasında kesişiyor', '|AC| = 18 birim'],
    stem: [],
    ask: 'Buna göre, D noktasının ordinatı kaçtır?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '2√6' },
      { key: 'C', text: '3√3' },
      { key: 'D', text: '4√2' },
      { key: 'E', text: '6' },
    ],
    answer: 'C',
    hint: 'İki yarım çemberin yarıçapları eşittir; |AC| üç yarıçapa bölünür.',
    solution: [
      {
        title: 'Yarıçapı bul',
        detail:
          'O merkezli çemberin yarıçapı |OA| = |OB| = r, B merkezli çember O’dan geçtiğinden yarıçapı |BO| = |BC| = r. |AC| = 3r = 18, r = 6.',
      },
      {
        title: 'Eşkenar üçgeni gör',
        detail: '|OD| = 6 ve |BD| = 6, ayrıca |OB| = 6 olduğundan ODB eşkenar üçgendir.',
      },
      {
        title: 'Yüksekliği hesapla',
        detail: 'D’den x eksenine inilen dikme bu eşkenar üçgenin yüksekliğidir: 6 · √3 / 2 = 3√3.',
      },
      {
        title: 'Sonuç',
        detail: 'D(3, 3√3) olduğundan D noktasının ordinatı 3√3’tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 7
  // Origin (168, 250), 32 px per unit: A(2, 6) → (232, 58), B(−3, 1) → (72, 218),
  // C(5, 1) → (328, 218), D(1, 1) → (200, 218).
  {
    id: 'analytic-7',
    topic: 'Kenarortay uzunluğu',
    figure: {
      viewBox: '0 30 400 250',
      caption: 'Şekil 3',
      label:
        'Koordinat düzleminde ABC üçgeni; [BC] kenarının orta noktası D ve A köşesinden D noktasına çizilen kenarortay, |BD| = |DC|.',
      svg: `
          <path class="ln" d="M40,250 L380,250"/>
          <path class="ln" d="M370,244 L380,250 L370,256"/>
          <path class="ln" d="M168,268 L168,40"/>
          <path class="ln" d="M162,50 L168,40 L174,50"/>
          <text x="376" y="272" text-anchor="middle">x</text>
          <text x="178" y="50">y</text>
          <path class="ln" d="M232,58 L72,218 L328,218 Z"/>
          <path class="ln" d="M232,58 L200,218"/>
          <path class="tick" d="M136,211 L136,225"/>
          <path class="tick" d="M264,211 L264,225"/>
          <circle class="pt" cx="168" cy="250" r="3.2"/>
          <circle class="pt" cx="232" cy="58" r="3.2"/>
          <circle class="pt" cx="72" cy="218" r="3.2"/>
          <circle class="pt" cx="328" cy="218" r="3.2"/>
          <circle class="pt" cx="200" cy="218" r="3.2"/>
          <text x="160" y="268" text-anchor="end">O</text>
          <text x="232" y="46" text-anchor="middle">A</text>
          <text x="62" y="223" text-anchor="end">B</text>
          <text x="338" y="223">C</text>
          <text x="206" y="238" text-anchor="middle">D</text>
        `,
    },
    given: ['A(2, 6), B(−3, 1), C(5, 1)', '|BD| = |DC|'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABC üçgeninin BC kenarına ait kenarortayının uzunluğu |AD| kaç birimdir?',
    choices: [
      { key: 'A', text: '√26' },
      { key: 'B', text: '3√3' },
      { key: 'C', text: '4√2' },
      { key: 'D', text: '6' },
      { key: 'E', text: '2√10' },
    ],
    answer: 'A',
    hint: 'Önce [BC] kenarının orta noktasını bul.',
    solution: [
      {
        title: 'Orta noktayı bul',
        detail: 'D = ((−3 + 5) / 2, (1 + 1) / 2) = (1, 1).',
      },
      {
        title: 'Uzaklık formülü',
        detail: '|AD| = √((2 − 1)² + (6 − 1)²) = √(1 + 25).',
      },
      {
        title: 'Sonuç',
        detail: '|AD| = √26 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'analytic-8',
    topic: 'Uzaklıktan bilinmeyen koordinat',
    stem: [],
    ask: 'Analitik düzlemde A(a, 3) ve B(1, −1) noktaları arasındaki uzaklık 5 birimdir. a > 0 olduğuna göre, a kaçtır?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4' },
      { key: 'E', text: '5' },
    ],
    answer: 'D',
    hint: 'Uzaklık formülünü yaz ve iki tarafın karesini al.',
    solution: [
      {
        title: 'Uzaklık formülü',
        detail: '|AB|² = (a − 1)² + (3 − (−1))² = (a − 1)² + 16 = 25.',
      },
      {
        title: 'Denklemi çöz',
        detail: '(a − 1)² = 9 olduğundan a − 1 = 3 ya da a − 1 = −3; a = 4 ya da a = −2.',
      },
      {
        title: 'Sonuç',
        detail: 'a > 0 koşulundan a = 4 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'analytic-9',
    topic: 'İki noktaya eşit uzaklıktaki nokta',
    stem: [],
    ask: 'x ekseni üzerindeki bir P noktası A(2, 5) ve B(6, 1) noktalarına eşit uzaklıkta olduğuna göre, P noktasının koordinatları aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(−1, 0)' },
      { key: 'B', text: '(1, 0)' },
      { key: 'C', text: '(2, 0)' },
      { key: 'D', text: '(3, 0)' },
      { key: 'E', text: '(4, 0)' },
    ],
    answer: 'B',
    hint: 'P(x, 0) al ve |PA|² = |PB|² eşitliğini kur.',
    solution: [
      {
        title: 'Noktayı adlandır',
        detail: 'P x ekseni üzerinde olduğundan P(x, 0) yazılır.',
      },
      {
        title: 'Uzaklıkları eşitle',
        detail: '(x − 2)² + 5² = (x − 6)² + 1², yani x² − 4x + 29 = x² − 12x + 37.',
      },
      {
        title: 'Denklemi çöz',
        detail: '8x = 8 olduğundan x = 1.',
      },
      {
        title: 'Sonuç',
        detail: 'P(1, 0) olur; kontrol: |PA|² = 1 + 25 = 26 ve |PB|² = 25 + 1 = 26.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  // Origin (70, 290), 38 px per unit: A(1, 2) → (108, 214), B(5, 3) → (260, 176),
  // C(7, 7) → (336, 24), D(3, 6) → (184, 62).
  {
    id: 'analytic-10',
    topic: 'Paralelkenarın dördüncü köşesi',
    figure: {
      viewBox: '0 10 400 300',
      caption: 'Şekil 4',
      label: 'Koordinat düzleminin birinci bölgesinde ABCD paralelkenarı.',
      svg: `
          <path class="ln" d="M40,290 L385,290"/>
          <path class="ln" d="M375,284 L385,290 L375,296"/>
          <path class="ln" d="M70,305 L70,22"/>
          <path class="ln" d="M64,32 L70,22 L76,32"/>
          <text x="382" y="308" text-anchor="middle">x</text>
          <text x="80" y="32">y</text>
          <path class="ln" d="M108,214 L260,176 L336,24 L184,62 Z"/>
          <circle class="pt" cx="70" cy="290" r="3.2"/>
          <circle class="pt" cx="108" cy="214" r="3.2"/>
          <circle class="pt" cx="260" cy="176" r="3.2"/>
          <circle class="pt" cx="336" cy="24" r="3.2"/>
          <circle class="pt" cx="184" cy="62" r="3.2"/>
          <text x="62" y="306" text-anchor="end">O</text>
          <text x="100" y="232" text-anchor="end">A</text>
          <text x="270" y="190">B</text>
          <text x="346" y="30">C</text>
          <text x="174" y="58" text-anchor="end">D</text>
        `,
    },
    given: ['ABCD paralelkenar', 'A(1, 2), B(5, 3), C(7, 7)', 'D(x, y)'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x + y toplamı kaçtır?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '11' },
      { key: 'D', text: '12' },
      { key: 'E', text: '13' },
    ],
    answer: 'A',
    hint: 'Paralelkenarın köşegenleri birbirini ortalar: [AC] ile [BD] aynı orta noktaya sahiptir.',
    solution: [
      {
        title: 'Köşegenlerin orta noktası',
        detail: 'Paralelkenarda köşegenler birbirini ortaladığından A + C = B + D olur.',
      },
      {
        title: 'Apsisi bul',
        detail: '1 + 7 = 5 + x, x = 3.',
      },
      {
        title: 'Ordinatı bul',
        detail: '2 + 7 = 3 + y, y = 6.',
      },
      {
        title: 'Sonuç',
        detail: 'D(3, 6) olduğundan x + y = 9.',
      },
    ],
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'analytic-11',
    topic: 'Koordinatları verilen üçgenin alanı',
    stem: [],
    ask: 'Köşe koordinatları A(1, 1), B(7, 3) ve C(3, 6) olan ABC üçgeninin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '13' },
      { key: 'C', text: '14' },
      { key: 'D', text: '15' },
      { key: 'E', text: '16' },
    ],
    answer: 'B',
    hint: 'Üçgeni bir dikdörtgenin içine yerleştir ve dışarıda kalan dik üçgenleri çıkar.',
    solution: [
      {
        title: 'Çevreleyen dikdörtgen',
        detail: 'x değerleri 1 ile 7, y değerleri 1 ile 6 arasında: dikdörtgenin alanı 6 · 5 = 30.',
      },
      {
        title: 'Dışarıda kalan üçgenler',
        detail:
          'A ile B arasındaki dik üçgen (6 · 2) / 2 = 6, B ile C arasındaki (4 · 3) / 2 = 6, C ile A arasındaki (2 · 5) / 2 = 5.',
      },
      {
        title: 'Çıkar',
        detail: '30 − (6 + 6 + 5) = 30 − 17.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(ABC) = 13 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'analytic-12',
    topic: 'Simetrik noktalar',
    stem: [],
    ask: 'A(3, −5) noktasının orijine göre simetriği B, x eksenine göre simetriği C noktasıdır. Buna göre, ABC üçgeninin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '15' },
      { key: 'C', text: '18' },
      { key: 'D', text: '24' },
      { key: 'E', text: '30' },
    ],
    answer: 'E',
    hint: 'Orijine göre simetride iki koordinatın da, x eksenine göre simetride yalnız ordinatın işareti değişir.',
    solution: [
      {
        title: 'Simetrik noktaları yaz',
        detail: 'B(−3, 5) ve C(3, 5).',
      },
      {
        title: 'Dik açıyı gör',
        detail:
          'A ile C’nin apsisleri aynı, [AC] düşeydir ve |AC| = 5 − (−5) = 10; B ile C’nin ordinatları aynı, [BC] yataydır ve |BC| = 3 − (−3) = 6. C köşesindeki açı diktir.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(ABC) = (10 · 6) / 2 = 30 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'analytic-13',
    topic: 'Ağırlık merkezi',
    stem: [],
    ask: 'Köşe koordinatları A(−1, 4), B(5, 2) ve C(2, −3) olan ABC üçgeninin ağırlık merkezi G noktasıdır. Buna göre, G noktasının orijine uzaklığı kaç birimdir?',
    choices: [
      { key: 'A', text: '√2' },
      { key: 'B', text: '√3' },
      { key: 'C', text: '2' },
      { key: 'D', text: '√5' },
      { key: 'E', text: '√6' },
    ],
    answer: 'D',
    hint: 'Ağırlık merkezinin koordinatları köşe koordinatlarının ortalamasıdır.',
    solution: [
      {
        title: 'Apsisi bul',
        detail: '(−1 + 5 + 2) / 3 = 6 / 3 = 2.',
      },
      {
        title: 'Ordinatı bul',
        detail: '(4 + 2 + (−3)) / 3 = 3 / 3 = 1.',
      },
      {
        title: 'Sonuç',
        detail: 'G(2, 1) olduğundan |OG| = √(2² + 1²) = √5 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'analytic-14',
    topic: 'Doğru parçasını verilen oranda bölen nokta',
    stem: [],
    ask: 'A(−2, 1) ve B(7, 10) noktaları veriliyor. [AB] üzerindeki C(x, y) noktası için |AC| = 2·|CB| olduğuna göre, x + y toplamı kaçtır?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '11' },
      { key: 'D', text: '12' },
      { key: 'E', text: '13' },
    ],
    answer: 'C',
    hint: '|AC| = 2·|CB| ise C noktası A’dan B’ye giderken yolun 2/3’ündedir.',
    solution: [
      {
        title: 'Oranı yorumla',
        detail: '|AC| : |AB| = 2 : 3 olduğundan C = A + (2/3)·(B − A).',
      },
      {
        title: 'Farkı bul',
        detail: 'B − A = (7 − (−2), 10 − 1) = (9, 9); bunun 2/3’ü (6, 6).',
      },
      {
        title: 'Noktayı bul',
        detail: 'C = (−2 + 6, 1 + 6) = (4, 7).',
      },
      {
        title: 'Sonuç',
        detail: 'x + y = 4 + 7 = 11.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  // Origin (120, 180), 20 px per unit: A(−4, 0) → (40, 180), B(8, 0) → (280, 180),
  // C(12, 6) → (360, 60), D(0, 6) → (120, 60), K(4, 3) → (200, 120).
  {
    id: 'analytic-15',
    topic: 'Paralelkenarda köşegenlerin kesişimi',
    figure: {
      viewBox: '0 20 400 190',
      caption: 'Şekil 5',
      label:
        'Koordinat düzleminde ABCD paralelkenarı; A ve B x ekseni üzerinde, D y ekseni üzerinde, köşegenler çizilmiş ve bir noktada kesişiyor.',
      svg: `
          <path class="ln" d="M20,180 L390,180"/>
          <path class="ln" d="M380,174 L390,180 L380,186"/>
          <path class="ln" d="M120,200 L120,34"/>
          <path class="ln" d="M114,44 L120,34 L126,44"/>
          <text x="386" y="200" text-anchor="middle">x</text>
          <text x="130" y="44">y</text>
          <path class="ln" d="M40,180 L280,180 L360,60 L120,60 Z"/>
          <path class="ln" d="M40,180 L360,60"/>
          <path class="ln" d="M280,180 L120,60"/>
          <circle class="pt" cx="40" cy="180" r="3.2"/>
          <circle class="pt" cx="280" cy="180" r="3.2"/>
          <circle class="pt" cx="360" cy="60" r="3.2"/>
          <circle class="pt" cx="120" cy="60" r="3.2"/>
          <circle class="pt" cx="200" cy="120" r="3.2"/>
          <text x="36" y="200" text-anchor="end">A</text>
          <text x="112" y="200" text-anchor="end">O</text>
          <text x="280" y="202" text-anchor="middle">B(8, 0)</text>
          <text x="360" y="46" text-anchor="middle">C(12, 6)</text>
          <text x="112" y="56" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'B(8, 0), C(12, 6)',
      'A noktası x ekseni, D noktası y ekseni üzerinde',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, paralelkenarın köşegenlerinin kesişim noktasının koordinatları aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(3, 4)' },
      { key: 'B', text: '(4, 2)' },
      { key: 'C', text: '(5, 3)' },
      { key: 'D', text: '(4, 3)' },
      { key: 'E', text: '(6, 3)' },
    ],
    answer: 'D',
    hint: '[AB] x ekseni üzerinde olduğundan [DC] de x eksenine paraleldir; önce D noktasını bul.',
    solution: [
      {
        title: 'D noktasını bul',
        detail:
          '[DC] ∥ [AB] ve [AB] x ekseni üzerinde olduğundan D ile C’nin ordinatları eşittir. D y ekseni üzerinde olduğundan D(0, 6).',
      },
      {
        title: 'Köşegenler birbirini ortalar',
        detail: 'Kesişim noktası K, [BD] köşegeninin orta noktasıdır.',
      },
      {
        title: 'Orta noktayı hesapla',
        detail: 'K = ((8 + 0) / 2, (0 + 6) / 2) = (4, 3).',
      },
      {
        title: 'Sonuç',
        detail:
          'Kontrol: A = B + D − C = (−4, 0) ve [AC]’nin orta noktası ((−4 + 12) / 2, (0 + 6) / 2) = (4, 3). Kesişim noktası (4, 3)’tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'analytic-16',
    topic: 'Doğru parçasını verilen oranda bölen nokta',
    stem: [],
    ask: 'A(−2, 7), B(12, −7) ve C ∈ [AB] olmak üzere, 4|AC| = 3|CB| bağıntısını sağlayan C noktasının koordinatları aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(4, 1)' },
      { key: 'B', text: '(6, −1)' },
      { key: 'C', text: '(1, 4)' },
      { key: 'D', text: '(4, −1)' },
      { key: 'E', text: '(5, 0)' },
    ],
    answer: 'A',
    hint: '4|AC| = 3|CB| eşitliğini |AC| : |CB| oranına çevir.',
    solution: [
      {
        title: 'Oranı yorumla',
        detail: '4|AC| = 3|CB| ise |AC| : |CB| = 3 : 4, yani |AC| = (3/7)·|AB| olur.',
      },
      {
        title: 'Farkı bul',
        detail: 'B − A = (12 − (−2), −7 − 7) = (14, −14); bunun 3/7’si (6, −6).',
      },
      {
        title: 'Noktayı bul',
        detail: 'C = A + (6, −6) = (−2 + 6, 7 − 6).',
      },
      {
        title: 'Sonuç',
        detail: 'C(4, 1).',
      },
    ],
  },

  // ---------------------------------------------------------------- 17
  // Origin (40, 230), 26 px per unit: A(4, 0) → (144, 230), D(0, 3) → (40, 152),
  // B(7, 4) → (222, 126), C(3, 7) → (118, 48), E(37/3, 0) → (360.7, 230).
  {
    id: 'analytic-17',
    topic: 'Karede benzerlikle üçgen alanı',
    figure: {
      viewBox: '0 20 400 240',
      caption: 'Şekil 6',
      label:
        'Koordinat düzleminde ABCD karesi; A x ekseni üzerinde, D y ekseni üzerinde. C ve B’den geçen doğru x eksenini E noktasında kesiyor; ABE üçgeni taralı ve B’de dik açı var.',
      svg: `
          <path class="shade" d="M144,230 L222,126 L360.7,230 Z"/>
          <path class="ln" d="M20,230 L390,230"/>
          <path class="ln" d="M380,224 L390,230 L380,236"/>
          <path class="ln" d="M40,245 L40,30"/>
          <path class="ln" d="M34,40 L40,30 L46,40"/>
          <text x="386" y="250" text-anchor="middle">x</text>
          <text x="50" y="40">y</text>
          <path class="ln" d="M144,230 L222,126 L118,48 L40,152 Z"/>
          <path class="ln" d="M222,126 L360.7,230"/>
          <path class="arc" d="M216,134 L224,140 L230,132"/>
          <circle class="pt" cx="40" cy="230" r="3.2"/>
          <circle class="pt" cx="144" cy="230" r="3.2"/>
          <circle class="pt" cx="40" cy="152" r="3.2"/>
          <circle class="pt" cx="222" cy="126" r="3.2"/>
          <circle class="pt" cx="118" cy="48" r="3.2"/>
          <circle class="pt" cx="360.7" cy="230" r="3.2"/>
          <text x="32" y="250" text-anchor="end">O</text>
          <text x="144" y="250" text-anchor="middle">A</text>
          <text x="32" y="157" text-anchor="end">D</text>
          <text x="232" y="122">B</text>
          <text x="118" y="36" text-anchor="middle">C</text>
          <text x="360.7" y="250" text-anchor="middle">E</text>
        `,
    },
    given: ['ABCD kare', 'A(4, 0), D(0, 3)', 'E noktası x ekseni üzerinde', '[AB] ⊥ [CE]'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABE üçgeninin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '50/3' },
      { key: 'C', text: '15' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'B',
    hint: 'DOA ve ABE dik üçgenlerindeki açıları karşılaştır; iki üçgen benzerdir.',
    solution: [
      {
        title: 'Karenin kenarı',
        detail: '|AD| = √(4² + 3²) = 5, dolayısıyla |AB| = 5 birimdir.',
      },
      {
        title: 'Benzerliği gör',
        detail:
          'A noktasında m(OAD) + m(DAB) + m(BAE) = 180° ve m(DAB) = 90° olduğundan m(BAE) = 90° − m(OAD) = m(ODA). O ve B’deki açılar dik olduğundan DOA ∼ ABE.',
      },
      {
        title: 'Oranı kur',
        detail: '|BE| / |AB| = |OA| / |OD| ⇒ |BE| / 5 = 4 / 3 ⇒ |BE| = 20/3.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(ABE) = (5 · 20/3) / 2 = 50/3 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  // Origin (260, 290), 40 px per unit: A(−2, 6) → (180, 50), B(−5, 0) → (60, 290),
  // C(0, 5) → (260, 90).
  {
    id: 'analytic-18',
    topic: 'Dik açıdan bilinmeyen apsis',
    figure: {
      viewBox: '0 24 400 290',
      caption: 'Şekil 7',
      label:
        'Koordinat düzleminde ikinci bölgede A(−2, 6) noktası, y ekseni üzerinde C(0, 5) noktası ve x ekseninin negatif yönünde B noktası; ABC üçgeninde A açısı dik.',
      svg: `
          <path class="ln" d="M25,290 L390,290"/>
          <path class="ln" d="M380,284 L390,290 L380,296"/>
          <path class="ln" d="M260,305 L260,34"/>
          <path class="ln" d="M254,44 L260,34 L266,44"/>
          <text x="386" y="310" text-anchor="middle">x</text>
          <text x="270" y="44">y</text>
          <path class="ln" d="M60,290 L180,50 L260,90 Z"/>
          <path class="arc" d="M174.6,60.7 L185.4,66.1 L190.7,55.4"/>
          <circle class="pt" cx="60" cy="290" r="3.2"/>
          <circle class="pt" cx="180" cy="50" r="3.2"/>
          <circle class="pt" cx="260" cy="90" r="3.2"/>
          <circle class="pt" cx="260" cy="290" r="3.2"/>
          <text x="180" y="40" text-anchor="middle">A(−2, 6)</text>
          <text x="270" y="94">C(0, 5)</text>
          <text x="60" y="310" text-anchor="middle">B</text>
          <text x="252" y="310" text-anchor="end">O</text>
        `,
    },
    given: ['A(−2, 6)', 'C(0, 5)', 'B noktası x ekseni üzerinde', '[BA] ⊥ [AC]'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, B noktasının apsisi kaçtır?',
    choices: [
      { key: 'A', text: '−3' },
      { key: 'B', text: '−4' },
      { key: 'C', text: '−5' },
      { key: 'D', text: '−6' },
      { key: 'E', text: '−7' },
    ],
    answer: 'C',
    hint: 'B(b, 0) de ve ABC dik üçgeninde Pisagor bağıntısını uzaklık formülüyle yaz.',
    solution: [
      {
        title: 'Noktayı adlandır',
        detail: 'B(b, 0) olsun. A açısı dik olduğundan |AB|² + |AC|² = |BC|² olur.',
      },
      {
        title: 'Uzaklıkları yaz',
        detail: '|AB|² = (b + 2)² + 36, |AC|² = 2² + 1² = 5, |BC|² = b² + 25.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'b² + 4b + 4 + 36 + 5 = b² + 25 ⇒ 4b = −20.',
      },
      {
        title: 'Sonuç',
        detail: 'b = −5, yani B noktasının apsisi −5’tir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 19
  // Origin (200, 170), 30 px per unit: A(2, 2√3) → (260, 66.1); arc radius 26.
  {
    id: 'analytic-19',
    topic: 'Orijin etrafında döndürme',
    figure: {
      viewBox: '0 20 400 200',
      caption: 'Şekil 8',
      label:
        'Koordinat düzleminde birinci bölgede A(2, b) noktası; [OA] doğru parçası x ekseninin pozitif yönü ile 60 derecelik açı yapıyor.',
      svg: `
          <path class="ln" d="M20,170 L390,170"/>
          <path class="ln" d="M380,164 L390,170 L380,176"/>
          <path class="ln" d="M200,210 L200,32"/>
          <path class="ln" d="M194,42 L200,32 L206,42"/>
          <text x="386" y="190" text-anchor="middle">x</text>
          <text x="210" y="42">y</text>
          <path class="ln" d="M200,170 L260,66.1"/>
          <path class="arc" d="M226,170 A26,26 0 0 0 213,147.5"/>
          <text class="val" x="236" y="160">60°</text>
          <circle class="pt" cx="200" cy="170" r="3.2"/>
          <circle class="pt" cx="260" cy="66.1" r="3.2"/>
          <text x="192" y="190" text-anchor="end">O</text>
          <text x="268" y="62">A(2, b)</text>
        `,
    },
    given: ['[OA] doğru parçası x ekseni ile 60° lik açı yapar', 'A(2, b)'],
    stem: [],
    ask: '[OA] doğru parçası O etrafında pozitif yönde 165° döndürülürse A noktasının yeni konumunun ordinatı kaç olur?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '−√2' },
      { key: 'C', text: '−2√3' },
      { key: 'D', text: '−2√2' },
      { key: 'E', text: '−4' },
    ],
    answer: 'D',
    hint: 'Önce |OA| uzunluğunu bul; döndürme uzunluğu değiştirmez, yalnızca açıyı değiştirir.',
    solution: [
      {
        title: '|OA| uzunluğu',
        detail:
          'A’dan x eksenine dikme inilirse 30°–60°–90° üçgeni oluşur: apsis 2 olduğundan |OA| = 4 ve b = 2√3.',
      },
      {
        title: 'Yeni açı',
        detail:
          'Döndürmeden sonra [OA’] x ekseninin pozitif yönü ile 60° + 165° = 225° lik açı yapar; nokta III. bölgededir.',
      },
      {
        title: 'Ordinatı hesapla',
        detail:
          '225° − 180° = 45° olduğundan A’, x ekseni ile 45° yapan ve uzunluğu 4 olan doğru parçasının ucudur: ordinat −4 · (√2 / 2).',
      },
      {
        title: 'Sonuç',
        detail: 'A’(−2√2, −2√2); ordinat −2√2’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 20
  // Origin (122, 130), 26 px per unit: A(−2, 0) → (70, 130), C(8, 0) → (330, 130),
  // D(0, 4) → (122, 26), B(6, −4) → (278, 234).
  {
    id: 'analytic-20',
    topic: 'Dikdörtgenin bilinmeyen köşesi',
    figure: {
      viewBox: '0 6 400 256',
      caption: 'Şekil 9',
      label:
        'Koordinat düzleminde ABCD dikdörtgeni; A ve C x ekseni üzerinde, D y ekseninin pozitif kısmında, B dördüncü bölgede.',
      svg: `
          <path class="ln" d="M20,130 L390,130"/>
          <path class="ln" d="M380,124 L390,130 L380,136"/>
          <path class="ln" d="M122,255 L122,12"/>
          <path class="ln" d="M116,22 L122,12 L128,22"/>
          <text x="386" y="150" text-anchor="middle">x</text>
          <text x="132" y="22">y</text>
          <path class="ln" d="M70,130 L278,234 L330,130 L122,26 Z"/>
          <circle class="pt" cx="70" cy="130" r="3.2"/>
          <circle class="pt" cx="278" cy="234" r="3.2"/>
          <circle class="pt" cx="330" cy="130" r="3.2"/>
          <circle class="pt" cx="122" cy="26" r="3.2"/>
          <text x="62" y="150" text-anchor="end">A</text>
          <text x="114" y="122" text-anchor="end">O</text>
          <text x="338" y="150">C</text>
          <text x="278" y="254" text-anchor="middle">B</text>
          <text x="114" y="30" text-anchor="end">D</text>
        `,
    },
    given: ['ABCD dikdörtgen', 'A(−2, 0), C(8, 0)', 'D noktası y ekseni üzerinde'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABCD dikdörtgeninin B köşesinin koordinatları aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '(5, −4)' },
      { key: 'B', text: '(4, −6)' },
      { key: 'C', text: '(6, −5)' },
      { key: 'D', text: '(8, −4)' },
      { key: 'E', text: '(6, −4)' },
    ],
    answer: 'E',
    hint: 'ADC dik üçgeninde [DO] hipotenüse ait yüksekliktir; Öklid bağıntısıyla D’yi bul.',
    solution: [
      {
        title: 'Öklid bağıntısı',
        detail: 'm(ADC) = 90° ve [DO] ⊥ [AC] olduğundan |OD|² = |AO| · |OC| = 2 · 8 = 16.',
      },
      {
        title: 'D noktası',
        detail: '|OD| = 4 ve D pozitif y ekseninde olduğundan D(0, 4).',
      },
      {
        title: 'Köşegenler birbirini ortalar',
        detail: 'Dikdörtgende A + C = B + D olduğundan B = A + C − D = (−2 + 8 − 0, 0 + 0 − 4).',
      },
      {
        title: 'Sonuç',
        detail: 'B(6, −4).',
      },
    ],
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'analytic-21',
    topic: 'Bölen noktanın orijine uzaklığı',
    stem: [],
    ask: 'A(2, −3), B(−8, 12) ve C ∈ [AB] olmak üzere, 2|AC| = 3|CB| bağıntısını sağlayan C noktasının orijine uzaklığı kaç birimdir?',
    choices: [
      { key: 'A', text: '√13' },
      { key: 'B', text: '2√10' },
      { key: 'C', text: '2√13' },
      { key: 'D', text: '3√5' },
      { key: 'E', text: '5√2' },
    ],
    answer: 'C',
    hint: '2|AC| = 3|CB| eşitliğinden |AC|’nin |AB|’nin kaçta kaçı olduğunu bul.',
    solution: [
      {
        title: 'Oranı yorumla',
        detail: '2|AC| = 3|CB| ise |AC| : |CB| = 3 : 2, yani |AC| = (3/5)·|AB|.',
      },
      {
        title: 'Farkı bul',
        detail: 'B − A = (−8 − 2, 12 − (−3)) = (−10, 15); bunun 3/5’i (−6, 9).',
      },
      {
        title: 'Noktayı bul',
        detail: 'C = (2 − 6, −3 + 9) = (−4, 6).',
      },
      {
        title: 'Sonuç',
        detail: '|OC| = √(16 + 36) = √52 = 2√13 birimdir.',
      },
    ],
  },
  // ---------------------------------------------------------------- 22
  {
    id: 'analytic-22',
    topic: 'İki nokta arası uzaklık',
    stem: [],
    ask: 'Analitik düzlemde verilen A(−2, 5) ve B(4, −3) noktaları arasındaki uzaklık kaç birimdir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '2√17' },
      { key: 'C', text: '10' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'Apsisler farkının ve ordinatlar farkının karelerini topla.',
    solution: [
      {
        title: 'Farkları bul',
        detail: 'Apsisler farkı 4 − (−2) = 6, ordinatlar farkı −3 − 5 = −8.',
      },
      {
        title: 'Uzaklık formülü',
        detail: '|AB| = √(6² + (−8)²) = √(36 + 64) = √100.',
      },
      {
        title: 'Sonuç',
        detail: '|AB| = 10 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  // Origin (128, 170), 36 px per unit: B(−2, 0) → (56, 170), C(6, 0) → (344, 170),
  // A(0, 2√3) → (128, 45.3).
  {
    id: 'analytic-23',
    topic: 'Dik üçgende köşenin apsisi',
    figure: {
      viewBox: '0 0 400 210',
      caption: 'Şekil 10',
      label:
        'Koordinat düzleminde ABC üçgeni; B x ekseninin negatif kısmında, C pozitif kısmında, A y ekseni üzerinde. A köşesinde dik açı, B köşesinde 60 derecelik açı var.',
      svg: `
          <path class="ln" d="M20,170 L390,170"/>
          <path class="ln" d="M380,164 L390,170 L380,176"/>
          <path class="ln" d="M128,200 L128,14"/>
          <path class="ln" d="M122,24 L128,14 L134,24"/>
          <text x="386" y="158" text-anchor="middle">x</text>
          <text x="138" y="24">y</text>
          <path class="ln" d="M56,170 L128,45.3 L344,170"/>
          <path class="arc" d="M122,55.7 L132.4,61.7 L138.4,51.3"/>
          <path class="arc" d="M80,170 A24,24 0 0 0 68,149.2"/>
          <text class="val" x="86" y="162">60°</text>
          <circle class="pt" cx="56" cy="170" r="3.2"/>
          <circle class="pt" cx="128" cy="45.3" r="3.2"/>
          <circle class="pt" cx="344" cy="170" r="3.2"/>
          <text x="56" y="192" text-anchor="middle">B(−2, 0)</text>
          <text x="120" y="190" text-anchor="end">O</text>
          <text x="344" y="192" text-anchor="middle">C(x, 0)</text>
          <text x="118" y="42" text-anchor="end">A</text>
        `,
    },
    given: ['[BA] ⊥ [CA]', 'm(ABC) = 60°', 'B(−2, 0)'],
    stem: [],
    ask: 'Yukarıdaki dik koordinat sisteminde verilenlere göre, C noktasının apsisi kaçtır?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '4√3' },
      { key: 'C', text: '6' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'AOB dik üçgeninde 60° lik açıdan |OA|’yı bul; sonra [AO] hipotenüse ait yüksekliktir.',
    solution: [
      {
        title: '|OA| uzunluğu',
        detail: 'AOB dik üçgeninde |OB| = 2 ve m(ABO) = 60° olduğundan |OA| = 2 · tan 60° = 2√3.',
      },
      {
        title: 'Öklid bağıntısı',
        detail: 'BAC dik üçgeninde [AO] ⊥ [BC] olduğundan |OA|² = |OB| · |OC|.',
      },
      {
        title: '|OC| uzunluğu',
        detail: '(2√3)² = 2 · |OC| ⇒ 12 = 2 · |OC| ⇒ |OC| = 6.',
      },
      {
        title: 'Sonuç',
        detail: 'C pozitif x ekseninde olduğundan C(6, 0); apsis 6’dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24
  {
    id: 'analytic-24',
    topic: 'İşaretlerden bölge bulma',
    stem: [],
    ask: 'A(−a, b) noktası dik koordinat sisteminde III. bölgede ise B(a · b, a − b) noktası hangi bölgededir?',
    choices: [
      { key: 'A', text: 'Orijinde' },
      { key: 'B', text: 'I' },
      { key: 'C', text: 'II' },
      { key: 'D', text: 'III' },
      { key: 'E', text: 'IV' },
    ],
    answer: 'C',
    hint: 'III. bölgede apsis de ordinat da negatiftir; buradan a ve b’nin işaretini bul.',
    solution: [
      {
        title: 'a ve b’nin işareti',
        detail: 'A(−a, b) III. bölgede olduğundan −a < 0 ve b < 0, yani a > 0 ve b < 0.',
      },
      {
        title: 'Apsisin işareti',
        detail: 'a · b: pozitif ile negatifin çarpımı olduğundan a · b < 0.',
      },
      {
        title: 'Ordinatın işareti',
        detail: 'a − b: pozitif sayıdan negatif sayı çıkarıldığından a − b > 0.',
      },
      {
        title: 'Sonuç',
        detail: 'Apsisi negatif, ordinatı pozitif olan B noktası II. bölgededir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 25
  {
    id: 'analytic-25',
    topic: 'Ağırlık merkezinin eksenlere uzaklığı',
    stem: [],
    ask: 'Bir üçgenin köşe koordinatları A(−3, 7), B(2, −1) ve C(7, 3) noktalarıdır. Bu üçgenin ağırlık merkezinin x ve y eksenlerine olan uzaklıklarının toplamı kaç birimdir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' },
      { key: 'E', text: '7' },
    ],
    answer: 'C',
    hint: 'Ağırlık merkezinin koordinatları köşe koordinatlarının aritmetik ortalamasıdır.',
    solution: [
      {
        title: 'Ağırlık merkezi',
        detail: 'G = ((−3 + 2 + 7) / 3, (7 + (−1) + 3) / 3) = (6 / 3, 9 / 3) = (2, 3).',
      },
      {
        title: 'Eksenlere uzaklıklar',
        detail: 'G’nin x eksenine uzaklığı |3| = 3, y eksenine uzaklığı |2| = 2 birimdir.',
      },
      {
        title: 'Sonuç',
        detail: '3 + 2 = 5 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26
  {
    id: 'analytic-26',
    topic: 'Koordinat düzleminin bölgeleri',
    stem: [],
    ask: 'Analitik düzlemde verilen A(a, −b) noktası II. bölgede olduğuna göre, (a, b) ikilisi aşağıdakilerden hangisi olabilir?',
    choices: [
      { key: 'A', text: '(2, 3)' },
      { key: 'B', text: '(−2, 3)' },
      { key: 'C', text: '(2, −3)' },
      { key: 'D', text: '(−2, −3)' },
      { key: 'E', text: '(0, −1)' },
    ],
    answer: 'D',
    hint: 'II. bölgede apsis negatif, ordinat pozitiftir.',
    solution: [
      {
        title: 'II. bölgenin işaretleri',
        detail: 'A(a, −b) II. bölgede olduğundan a < 0 ve −b > 0 olmalıdır.',
      },
      {
        title: 'b’nin işareti',
        detail: '−b > 0 ise b < 0; yani a ve b’nin ikisi de negatiftir.',
      },
      {
        title: 'Sonuç',
        detail: 'İkisi de negatif olan tek seçenek (−2, −3) tür; A(−2, 3) gerçekten II. bölgededir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27
  {
    id: 'analytic-27',
    topic: 'Uzaklıktan bilinmeyen koordinat',
    stem: [],
    ask: 'A(1, k) ve B(k, 5) noktaları arasındaki uzaklık 2√5 birim ise k’nin alabileceği değerler toplamı kaçtır?',
    choices: [
      { key: 'A', text: '−6' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: 'Uzaklık formülünün iki tarafının karesini al ve k’ye göre ikinci dereceden denklem kur.',
    solution: [
      {
        title: 'Denklemi kur',
        detail: '(k − 1)² + (5 − k)² = (2√5)² = 20.',
      },
      {
        title: 'Aç ve düzenle',
        detail: 'k² − 2k + 1 + k² − 10k + 25 = 20 ⇒ 2k² − 12k + 6 = 0 ⇒ k² − 6k + 3 = 0.',
      },
      {
        title: 'Köklerin varlığı',
        detail: 'Diskriminant 36 − 12 = 24 > 0 olduğundan iki farklı gerçek kök vardır.',
      },
      {
        title: 'Sonuç',
        detail: 'Kökler toplamı −(−6) / 1 = 6’dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 28
  {
    id: 'analytic-28',
    topic: 'Eşit uzaklıktan bilinmeyen apsis',
    stem: [],
    ask: 'Analitik düzlemde A(1, 2), B(4, 6) ve C(a, 3) noktaları veriliyor. A ile B arasındaki uzaklık, B ile C arasındaki uzaklığa eşit ise a aşağıdakilerden hangisi olabilir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '−4' },
      { key: 'C', text: '8' },
      { key: 'D', text: '6' },
      { key: 'E', text: '3' },
    ],
    answer: 'C',
    hint: 'Önce |AB|’yi hesapla, sonra |BC|² için denklem kur.',
    solution: [
      {
        title: '|AB| uzunluğu',
        detail: '|AB| = √((4 − 1)² + (6 − 2)²) = √(9 + 16) = 5.',
      },
      {
        title: 'Denklemi kur',
        detail: '|BC|² = (a − 4)² + (3 − 6)² = 25 ⇒ (a − 4)² = 16.',
      },
      {
        title: 'Çöz',
        detail: 'a − 4 = 4 veya a − 4 = −4, yani a = 8 veya a = 0.',
      },
      {
        title: 'Sonuç',
        detail: 'Seçeneklerde yer alan değer a = 8’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 29
  // Origin (40, 240), 36 px per unit: A(2, 6) → (112, 24), B(2, 2) → (112, 168),
  // C(9, 3) → (364, 132); C is drawn at y = 3, which the question leaves open.
  {
    id: 'analytic-29',
    topic: 'Koordinatları verilen üçgenin alanı',
    figure: {
      viewBox: '0 4 400 270',
      caption: 'Şekil 11',
      label:
        'Koordinat düzleminde ABC üçgeni taralı; A ve B aynı dikey doğru üzerinde, A’nın ordinatı 6, B’nin ordinatı 2, apsisleri 2; C sağda.',
      svg: `
          <path class="shade" d="M112,24 L112,168 L364,132 Z"/>
          <path class="ln" d="M20,240 L392,240"/>
          <path class="ln" d="M382,234 L392,240 L382,246"/>
          <path class="ln" d="M40,255 L40,12"/>
          <path class="ln" d="M34,22 L40,12 L46,22"/>
          <text x="386" y="262" text-anchor="middle">x</text>
          <text x="50" y="22">y</text>
          <path class="ln" d="M34,24 L46,24"/>
          <path class="ln" d="M34,168 L46,168"/>
          <path class="ln" d="M112,234 L112,246"/>
          <text x="28" y="29" text-anchor="end">6</text>
          <text x="28" y="173" text-anchor="end">2</text>
          <text x="112" y="262" text-anchor="middle">2</text>
          <path class="ln" d="M112,24 L112,168 L364,132 Z"/>
          <circle class="pt" cx="112" cy="24" r="3.2"/>
          <circle class="pt" cx="112" cy="168" r="3.2"/>
          <circle class="pt" cx="364" cy="132" r="3.2"/>
          <text x="32" y="260" text-anchor="end">O</text>
          <text x="104" y="22" text-anchor="end">A</text>
          <text x="120" y="188">B</text>
          <text x="372" y="137">C</text>
        `,
    },
    given: ['A(2, 6)', 'B(2, 2)', 'C(9, y)'],
    stem: [],
    ask: 'Analitik düzlemdeki verilere göre, A(ABC) kaç birim karedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '16' },
      { key: 'D', text: '18' },
      { key: 'E', text: '28' },
    ],
    answer: 'B',
    hint: '[AB] y eksenine paraleldir; onu taban al, yükseklik C’nin bu doğruya yatay uzaklığıdır.',
    solution: [
      {
        title: 'Taban',
        detail: 'A ve B’nin apsisleri eşit olduğundan [AB] dikeydir: |AB| = 6 − 2 = 4.',
      },
      {
        title: 'Yükseklik',
        detail: 'C’nin x = 2 doğrusuna uzaklığı 9 − 2 = 7’dir; y ne olursa olsun değişmez.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABC) = (4 · 7) / 2 = 14 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 30
  {
    id: 'analytic-30',
    topic: 'Paralelkenarın dördüncü köşesi',
    stem: [],
    ask: 'Analitik düzlemde verilen bir ABCD paralelkenarının köşe noktalarının koordinatları sırası ile A(2, −1), B(5, 4) ve C(1, 6) olduğuna göre, D köşesinin koordinatları toplamı kaçtır?',
    choices: [
      { key: 'A', text: '−3' },
      { key: 'B', text: '−1' },
      { key: 'C', text: '0' },
      { key: 'D', text: '1' },
      { key: 'E', text: '3' },
    ],
    answer: 'B',
    hint: 'Paralelkenarda köşegenler birbirini ortalar; [AC] ile [BD]’nin orta noktası aynıdır.',
    solution: [
      {
        title: 'Köşegenlerin orta noktası',
        detail: 'A + C = B + D olduğundan D = A + C − B yazılır.',
      },
      {
        title: 'Apsis',
        detail: 'x = 2 + 1 − 5 = −2.',
      },
      {
        title: 'Ordinat',
        detail: 'y = −1 + 6 − 4 = 1, yani D(−2, 1).',
      },
      {
        title: 'Sonuç',
        detail: '−2 + 1 = −1’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'analytic-31',
    topic: 'Bölgeden tamsayı değerleri',
    stem: [],
    ask: 'A(a + 4, a − 3) noktası koordinat sisteminde IV. bölgede olduğuna göre, a’nın alabileceği kaç tamsayı değeri vardır?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '7' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'IV. bölgede apsis pozitif, ordinat negatiftir; iki eşitsizliği ayrı ayrı kur.',
    solution: [
      {
        title: 'Apsis pozitif',
        detail: 'a + 4 > 0 ⇒ a > −4.',
      },
      {
        title: 'Ordinat negatif',
        detail: 'a − 3 < 0 ⇒ a < 3.',
      },
      {
        title: 'Aralık',
        detail: '−4 < a < 3 aralığındaki tamsayılar −3, −2, −1, 0, 1, 2’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'a’nın 6 tamsayı değeri vardır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 32
  {
    id: 'analytic-32',
    topic: 'Orta noktadan uç nokta',
    stem: [],
    ask: 'Dik koordinat sisteminde A(−5, 4) ve B(a, b) noktalarını uç nokta kabul eden AB doğru parçasının orta noktası P(1, −2) olduğuna göre, b − a farkı kaçtır?',
    choices: [
      { key: 'A', text: '−15' },
      { key: 'B', text: '−9' },
      { key: 'C', text: '−1' },
      { key: 'D', text: '1' },
      { key: 'E', text: '15' },
    ],
    answer: 'A',
    hint: 'Orta noktanın her koordinatı, uç noktaların karşılık gelen koordinatlarının ortalamasıdır.',
    solution: [
      {
        title: 'Apsis',
        detail: '(−5 + a) / 2 = 1 ⇒ −5 + a = 2 ⇒ a = 7.',
      },
      {
        title: 'Ordinat',
        detail: '(4 + b) / 2 = −2 ⇒ 4 + b = −4 ⇒ b = −8.',
      },
      {
        title: 'Sonuç',
        detail: 'b − a = −8 − 7 = −15’tir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 33
  // Origin (70, 150), 12 px per unit: centre (10, 0) → (190, 150), r = 10 → 120 px,
  // B(20, 0) → (310, 150), A(4, 8) → (118, 54).
  {
    id: 'analytic-33',
    topic: 'Eksene teğet çemberin alanı',
    figure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 12',
      label:
        'Koordinat düzleminde çapı [OB] olan çember; O orijinde, B x ekseni üzerinde; çember y eksenine orijinde teğet ve A(4, 8) noktasından geçiyor.',
      svg: `
          <path class="ln" d="M30,150 L385,150"/>
          <path class="ln" d="M375,144 L385,150 L375,156"/>
          <path class="ln" d="M70,285 L70,12"/>
          <path class="ln" d="M64,22 L70,12 L76,22"/>
          <text x="385" y="172" text-anchor="middle">x</text>
          <text x="80" y="22">y</text>
          <circle class="ln" cx="190" cy="150" r="120"/>
          <circle class="pt" cx="70" cy="150" r="3.2"/>
          <circle class="pt" cx="310" cy="150" r="3.2"/>
          <circle class="pt" cx="118" cy="54" r="3.2"/>
          <text x="62" y="170" text-anchor="end">O</text>
          <text x="318" y="170">B</text>
          <text x="110" y="44" text-anchor="end">A</text>
        `,
    },
    given: ['[OB] çaplı çember y eksenine orijinde teğet', 'A(4, 8)'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, dairenin alanı kaç π birim karedir?',
    choices: [
      { key: 'A', text: '25' },
      { key: 'B', text: '50' },
      { key: 'C', text: '64' },
      { key: 'D', text: '80' },
      { key: 'E', text: '100' },
    ],
    answer: 'E',
    hint: 'Çember y eksenine orijinde teğet olduğundan merkezi x ekseni üzerinde, (r, 0) noktasındadır.',
    solution: [
      {
        title: 'Merkez',
        detail: 'Çember y eksenine O’da teğet ve [OB] çap olduğundan merkez M(r, 0), yarıçap r’dir.',
      },
      {
        title: 'A noktası çember üzerinde',
        detail: '|MA| = r ⇒ (4 − r)² + 8² = r².',
      },
      {
        title: 'Çöz',
        detail: '16 − 8r + r² + 64 = r² ⇒ 8r = 80 ⇒ r = 10.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = π · 10² = 100π birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  {
    id: 'analytic-34',
    topic: 'Kenarortaylar ve ağırlık merkezi',
    stem: [],
    ask: 'Köşe koordinatları O(0, 0), A(0, 6) ve B(12, 0) olan üçgende A ve O noktalarından geçen kenarortaylar ile x ekseni arasında kalan alan kaç birim karedir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '12' },
    ],
    answer: 'B',
    hint: 'İki kenarortay ağırlık merkezinde kesişir; A’dan çıkan kenarortay x eksenini [OB]’nin orta noktasında keser.',
    solution: [
      {
        title: 'A’dan çıkan kenarortay',
        detail: '[OB]’nin orta noktası D(6, 0)’dır; kenarortay x eksenini burada keser.',
      },
      {
        title: 'Ağırlık merkezi',
        detail: 'G = ((0 + 0 + 12) / 3, (0 + 6 + 0) / 3) = (4, 2).',
      },
      {
        title: 'Aranan bölge',
        detail: 'Bölge ODG üçgenidir: tabanı |OD| = 6, yüksekliği G’nin ordinatı 2.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = (6 · 2) / 2 = 6 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 35
  // Origin (160, 250), 30 px per unit: B(−3, 0) → (70, 250), C(5, 0) → (310, 250),
  // A(2, 7) → (220, 40); A's ordinate is the unknown.
  {
    id: 'analytic-35',
    topic: 'Alandan ordinat',
    figure: {
      viewBox: '0 0 400 290',
      caption: 'Şekil 13',
      label:
        'Koordinat düzleminde ABC üçgeni; B ve C x ekseni üzerinde, B orijinin solunda, C sağında; A birinci bölgede.',
      svg: `
          <path class="ln" d="M30,250 L385,250"/>
          <path class="ln" d="M375,244 L385,250 L375,256"/>
          <path class="ln" d="M160,275 L160,12"/>
          <path class="ln" d="M154,22 L160,12 L166,22"/>
          <text x="385" y="272" text-anchor="middle">x</text>
          <text x="170" y="22">y</text>
          <path class="ln" d="M70,250 L220,40 L310,250"/>
          <circle class="pt" cx="70" cy="250" r="3.2"/>
          <circle class="pt" cx="310" cy="250" r="3.2"/>
          <circle class="pt" cx="220" cy="40" r="3.2"/>
          <text x="152" y="270" text-anchor="end">O</text>
          <text x="70" y="272" text-anchor="middle">B</text>
          <text x="310" y="272" text-anchor="middle">C</text>
          <text x="220" y="30" text-anchor="middle">A</text>
        `,
    },
    given: ['B(−3, 0)', 'C(5, 0)'],
    stem: [],
    ask: 'Yukarıdaki şekilde verilen ABC üçgeninin alanı 28 birim kare olduğuna göre, A noktasının ordinatı kaçtır?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '7' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: 'Taban [BC] x ekseni üzerindedir; yükseklik A’nın ordinatıdır.',
    solution: [
      {
        title: 'Taban',
        detail: '|BC| = 5 − (−3) = 8 birim.',
      },
      {
        title: 'Yükseklik',
        detail: 'A’nın x eksenine uzaklığı ordinatı y’dir.',
      },
      {
        title: 'Denklem',
        detail: '(8 · y) / 2 = 28 ⇒ 4y = 28.',
      },
      {
        title: 'Sonuç',
        detail: 'y = 7’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 36
  {
    id: 'analytic-36',
    topic: 'Orta noktalardan ağırlık merkezi',
    stem: [],
    ask: 'ABC üçgeninin kenarlarının orta noktaları D(5, 4), E(−1, 6) ve F(2, −1) dir. ABC üçgeninin ağırlık merkezinin koordinatları çarpımı kaçtır?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: 'Bir üçgenin ağırlık merkezi, kenar orta noktalarının oluşturduğu üçgenin ağırlık merkeziyle aynıdır.',
    solution: [
      {
        title: 'Köşe toplamları',
        detail: 'D + E + F = (A + B)/2 + (B + C)/2 + (A + C)/2 = A + B + C olur.',
      },
      {
        title: 'Apsis',
        detail: 'x = (5 + (−1) + 2) / 3 = 6 / 3 = 2.',
      },
      {
        title: 'Ordinat',
        detail: 'y = (4 + 6 + (−1)) / 3 = 9 / 3 = 3, yani G(2, 3).',
      },
      {
        title: 'Sonuç',
        detail: '2 · 3 = 6’dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 37
  {
    id: 'analytic-37',
    topic: 'Paralelkenarın köşegen uzunluğu',
    stem: [],
    ask: 'Köşe koordinatları A(2, 1), B(−1, 4), C(3, 6), D(x, y) olan ABCD paralelkenarının [BD] köşegeninin uzunluğu kaç birimdir?',
    choices: [
      { key: 'A', text: '2√10' },
      { key: 'B', text: '3√5' },
      { key: 'C', text: '5√2' },
      { key: 'D', text: '2√13' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'Önce D’yi bul: köşegenlerin orta noktası ortak olduğundan D = A + C − B.',
    solution: [
      {
        title: 'D köşesi',
        detail: 'D = (2 + 3 − (−1), 1 + 6 − 4) = (6, 3).',
      },
      {
        title: 'Uzaklık formülü',
        detail: '|BD| = √((6 − (−1))² + (3 − 4)²) = √(49 + 1).',
      },
      {
        title: 'Sonuç',
        detail: '|BD| = √50 = 5√2 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 38
  {
    id: 'analytic-38',
    topic: 'Alandan bilinmeyen koordinat',
    given: ['A(2, 1)', 'B(4, 5)', 'C(2, b)', 'Alan(ABC) = 6 birim kare'],
    stem: [],
    ask: 'Buna göre, b aşağıdakilerden hangisi olabilir?',
    choices: [
      { key: 'A', text: '−3' },
      { key: 'B', text: '−1' },
      { key: 'C', text: '3' },
      { key: 'D', text: '5' },
      { key: 'E', text: '7' },
    ],
    answer: 'E',
    hint: 'A ile C’nin apsisleri aynı; [AC]’yi taban al, B’nin x = 2 doğrusuna uzaklığı yükseklik olur.',
    solution: [
      {
        title: 'Taban',
        detail: 'A ve C, x = 2 doğrusu üzerindedir; |AC| = |b − 1|.',
      },
      {
        title: 'Yükseklik',
        detail: 'B’nin x = 2 doğrusuna uzaklığı 4 − 2 = 2 birimdir.',
      },
      {
        title: 'Denklem',
        detail: '|b − 1| · 2 / 2 = 6 ⇒ |b − 1| = 6 ⇒ b = 7 ya da b = −5.',
      },
      {
        title: 'Sonuç',
        detail: 'Seçeneklerde yer alan değer b = 7’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39
  {
    id: 'analytic-39',
    topic: 'Düzgün altıgenin köşe koordinatları',
    // Scale 22 px per unit, origin at (70, 270); side a = 6.
    figure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 14',
      label:
        'Koordinat düzleminde ABCDEF düzgün altıgeni; A ve B x ekseni üzerinde, F y ekseni üzerinde, C sağda, D ve E üstte.',
      svg: `
          <path class="ln" d="M40,270 L385,270"/>
          <path class="ln" d="M375,264 L385,270 L375,276"/>
          <path class="ln" d="M70,292 L70,12"/>
          <path class="ln" d="M64,22 L70,12 L76,22"/>
          <text x="385" y="292" text-anchor="middle">x</text>
          <text x="80" y="22">y</text>
          <path class="ln" d="M136,270 L268,270 L334,155.7 L268,41.4 L136,41.4 L70,155.7 Z"/>
          <circle class="pt" cx="136" cy="270" r="3.2"/>
          <circle class="pt" cx="268" cy="270" r="3.2"/>
          <circle class="pt" cx="334" cy="155.7" r="3.2"/>
          <circle class="pt" cx="268" cy="41.4" r="3.2"/>
          <circle class="pt" cx="136" cy="41.4" r="3.2"/>
          <circle class="pt" cx="70" cy="155.7" r="3.2"/>
          <text x="62" y="288" text-anchor="end">O</text>
          <text x="136" y="292" text-anchor="middle">A</text>
          <text x="268" y="292" text-anchor="middle">B</text>
          <text x="342" y="161">C</text>
          <text x="268" y="31" text-anchor="middle">D</text>
          <text x="136" y="31" text-anchor="middle">E</text>
          <text x="62" y="161" text-anchor="end">F</text>
        `,
    },
    stem: [],
    ask: 'Yukarıda verilen ABCDEF düzgün altıgeninde D noktasının apsisi 9 olduğuna göre, C noktasının ordinatı kaçtır?',
    choices: [
      { key: 'A', text: '2√3' },
      { key: 'B', text: '3√3' },
      { key: 'C', text: '4√3' },
      { key: 'D', text: '6' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'B',
    hint: 'Kenara a de; OAF, 30°-60°-90° üçgenidir ve |FA| = a hipotenüstür.',
    solution: [
      {
        title: 'OAF üçgeni',
        detail: 'Altıgenin iç açısı 120° olduğundan OAF’de A açısı 60°’dir: |OA| = a/2, |OF| = a√3/2.',
      },
      {
        title: 'D’nin apsisi',
        detail: 'D, B’nin tam üstündedir; apsisi |OA| + |AB| = a/2 + a = 3a/2.',
      },
      {
        title: 'Kenar',
        detail: '3a/2 = 9 ⇒ a = 6.',
      },
      {
        title: 'Sonuç',
        detail: 'C, F ile aynı yüksekliktedir: ordinatı a√3/2 = 6√3/2 = 3√3’tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'analytic-40',
    topic: 'Dıştan bölen nokta',
    given: ['A(1, −4)', 'B(4, 2)'],
    stem: [],
    ask: '|AB| / |BC| = 3/2 oranını sağlayan ve [AB]’yi dıştan bölen C(x, y) noktasının koordinatları toplamı kaçtır?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '10' },
      { key: 'C', text: '12' },
      { key: 'D', text: '14' },
      { key: 'E', text: '16' },
    ],
    answer: 'C',
    hint: '|BC| < |AB| olduğundan C, B’nin ötesindedir; A’dan B’ye gidiş vektörünün 2/3’ü kadar daha ilerle.',
    solution: [
      {
        title: 'C’nin yeri',
        detail: '|BC| = (2/3)|AB| < |AB| olduğundan sıra A, B, C’dir; C, B’nin ötesindedir.',
      },
      {
        title: 'A’dan B’ye',
        detail: 'B − A = (4 − 1, 2 − (−4)) = (3, 6).',
      },
      {
        title: 'C noktası',
        detail: 'C = B + (2/3)(3, 6) = (4 + 2, 2 + 4) = (6, 6).',
      },
      {
        title: 'Sonuç',
        detail: 'x + y = 6 + 6 = 12’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 41
  {
    id: 'analytic-41',
    topic: 'Dik açıdan köşe ve alan',
    // Scale 36 px per unit, origin at (60, 230); A(0, 3), B(3, 0), C(8, 5).
    figure: {
      viewBox: '0 0 400 270',
      caption: 'Şekil 15',
      label:
        'Koordinat düzleminde ABC üçgeni; A y ekseni üzerinde, B x ekseni üzerinde, B köşesinde dik açı var ve |OA| = |OB|.',
      svg: `
          <path class="ln" d="M30,230 L385,230"/>
          <path class="ln" d="M375,224 L385,230 L375,236"/>
          <path class="ln" d="M60,252 L60,12"/>
          <path class="ln" d="M54,22 L60,12 L66,22"/>
          <text x="385" y="252" text-anchor="middle">x</text>
          <text x="70" y="22">y</text>
          <path class="ln" d="M60,122 L168,230 L348,50 Z"/>
          <path class="arc" d="M160.9,222.9 L168,215.9 L175.1,222.9"/>
          <path class="tick" d="M53,176 L67,176"/>
          <path class="tick" d="M114,223 L114,237"/>
          <circle class="pt" cx="60" cy="122" r="3.2"/>
          <circle class="pt" cx="168" cy="230" r="3.2"/>
          <circle class="pt" cx="348" cy="50" r="3.2"/>
          <text x="52" y="248" text-anchor="end">O</text>
          <text x="52" y="127" text-anchor="end">A</text>
          <text x="168" y="252" text-anchor="middle">B</text>
          <text x="356" y="46">C</text>
        `,
    },
    given: ['[AB] ⊥ [BC]', '|OA| = |OB|', 'B(3, 0)', 'C(x, 5)'],
    stem: [],
    ask: 'Analitik düzlemdeki verilere göre, ABC üçgeninin alanı kaç birim karedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '15' },
      { key: 'C', text: '18' },
      { key: 'D', text: '20' },
      { key: 'E', text: '24' },
    ],
    answer: 'B',
    hint: 'OAB ikizkenar dik üçgen olduğundan [AB] eksenlerle 45° yapar; [BC] de öyle.',
    solution: [
      {
        title: 'A noktası',
        detail: '|OA| = |OB| = 3 ⇒ A(0, 3); ABO açısı 45°’dir.',
      },
      {
        title: 'C noktası',
        detail: 'ABC = 90° olduğundan [BC] x ekseniyle 45° yapar: 5 birim yukarı, 5 birim sağa, C(8, 5).',
      },
      {
        title: 'Dik kenarlar',
        detail: '|AB| = √(9 + 9) = 3√2, |BC| = √(25 + 25) = 5√2.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan = 3√2 · 5√2 / 2 = 30 / 2 = 15 birim karedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 42
  {
    id: 'analytic-42',
    topic: 'Eşit uzaklıktaki nokta',
    stem: [],
    ask: 'Analitik düzlemde A(5, −1) ve B(−2, 3) noktalarına eşit uzaklıkta bulunan ve y ekseni üzerinde olan T(0, y) noktasının ordinatı kaçtır?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '−13/8' },
      { key: 'C', text: '−3/2' },
      { key: 'D', text: '13/8' },
      { key: 'E', text: '2' },
    ],
    answer: 'B',
    hint: '|TA|² = |TB|² yaz; y² terimleri sadeleşir.',
    solution: [
      {
        title: 'Eşitlik',
        detail: '|TA|² = |TB|² ⇒ 5² + (y + 1)² = (−2)² + (y − 3)².',
      },
      {
        title: 'Açılım',
        detail: '25 + y² + 2y + 1 = 4 + y² − 6y + 9.',
      },
      {
        title: 'Sadeleştirme',
        detail: '26 + 2y = 13 − 6y ⇒ 8y = −13.',
      },
      {
        title: 'Sonuç',
        detail: 'y = −13/8’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 43
  {
    id: 'analytic-43',
    topic: 'Dikdörtgenin köşesinin orijine uzaklığı',
    // Scale 30 px per unit, origin at (160, 180); x from −3 to 6, y from −2 to 4.
    figure: {
      viewBox: '0 0 400 280',
      caption: 'Şekil 16',
      label:
        'Dik koordinat düzleminde kenarları eksenlere paralel ABCD dikdörtgeni; D(−3, 4) sol üstte, A(−3, −2) sol altta, C sağ üstte, B sağ altta.',
      svg: `
          <path class="ln" d="M30,180 L385,180"/>
          <path class="ln" d="M375,174 L385,180 L375,186"/>
          <path class="ln" d="M160,268 L160,14"/>
          <path class="ln" d="M154,24 L160,14 L166,24"/>
          <text x="385" y="202" text-anchor="middle">x</text>
          <text x="170" y="24">y</text>
          <path class="ln" d="M70,240 L340,240 L340,60 L70,60 Z"/>
          <circle class="pt" cx="70" cy="240" r="3.2"/>
          <circle class="pt" cx="340" cy="240" r="3.2"/>
          <circle class="pt" cx="340" cy="60" r="3.2"/>
          <circle class="pt" cx="70" cy="60" r="3.2"/>
          <text x="152" y="198" text-anchor="end">O</text>
          <text x="70" y="262" text-anchor="middle">A(−3, −2)</text>
          <text x="348" y="258">B</text>
          <text x="348" y="54">C</text>
          <text x="70" y="50" text-anchor="middle">D(−3, 4)</text>
        `,
    },
    stem: [],
    ask: 'Yukarıdaki dik koordinat düzleminde ABCD dikdörtgeninin alanı 54 birim kare olduğuna göre, |OB| kaç birimdir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '2√10' },
      { key: 'C', text: '3√5' },
      { key: 'D', text: '7' },
      { key: 'E', text: '5√2' },
    ],
    answer: 'B',
    hint: '|AD| iki ordinatın farkıdır; alandan |AB|’yi bul.',
    solution: [
      {
        title: 'Kısa kenar',
        detail: '|AD| = 4 − (−2) = 6 birim.',
      },
      {
        title: 'Uzun kenar',
        detail: '|AB| · 6 = 54 ⇒ |AB| = 9.',
      },
      {
        title: 'B noktası',
        detail: 'B, A’nın 9 birim sağındadır: B(−3 + 9, −2) = (6, −2).',
      },
      {
        title: 'Sonuç',
        detail: '|OB| = √(6² + (−2)²) = √40 = 2√10 birimdir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 44
  {
    id: 'analytic-44',
    topic: 'Alandan bilinmeyenin değerleri',
    given: ['A(1, 1)', 'B(5, 4)', 'C(k, 1)', 'Alan(ABC) = 9 birim kare'],
    stem: [],
    ask: 'Buna göre, k’nin alabileceği değerlerin toplamı kaçtır?',
    choices: [
      { key: 'A', text: '−2' },
      { key: 'B', text: '0' },
      { key: 'C', text: '2' },
      { key: 'D', text: '6' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'A ile C aynı yatay doğru üzerinde; [AC]’yi taban al.',
    solution: [
      {
        title: 'Taban',
        detail: 'A ve C, y = 1 doğrusu üzerindedir; |AC| = |k − 1|.',
      },
      {
        title: 'Yükseklik',
        detail: 'B’nin y = 1 doğrusuna uzaklığı 4 − 1 = 3 birimdir.',
      },
      {
        title: 'Denklem',
        detail: '|k − 1| · 3 / 2 = 9 ⇒ |k − 1| = 6 ⇒ k = 7 ya da k = −5.',
      },
      {
        title: 'Sonuç',
        detail: '7 + (−5) = 2’dir.',
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
export const ANALYTIC_BANK: readonly Question[] = QUESTIONS;

export const UNIT_6_ANALYTIC: Unit = {
  id: 'analytic',
  order: 6,
  title: 'Noktanın Analitik İncelenmesi',
  subtitle: 'Ünite 6',
  description:
    'Koordinat düzleminin bölgeleri, iki nokta arası uzaklık, orta nokta, koordinatları verilen üçgenin alanı, kenarortay ve ağırlık merkezi.',
  modules: [
    {
      id: 'analytic-m1',
      order: 1,
      title: 'Uzaklık, orta nokta ve alan',
      summary:
        'Koordinatlardan üçgen alanı, bölgeler, orta noktanın orijine uzaklığı, orta tabanlardan çevre, ikizkenar üçgen, kesişen yarım çemberler ve kenarortay.',
      questions: pick(
        'analytic-1',
        'analytic-2',
        'analytic-3',
        'analytic-4',
        'analytic-5',
        'analytic-6',
        'analytic-7',
      ),
    },
    {
      id: 'analytic-m2',
      order: 2,
      title: 'Simetri, paralelkenar ve ağırlık merkezi',
      summary:
        'Uzaklıktan bilinmeyen koordinat, eşit uzaklıktaki nokta, paralelkenarın dördüncü köşesi, üçgen alanı, simetrik noktalar, ağırlık merkezi ve bölen nokta.',
      questions: pick(
        'analytic-8',
        'analytic-9',
        'analytic-10',
        'analytic-11',
        'analytic-12',
        'analytic-13',
        'analytic-14',
      ),
    },
    {
      id: 'analytic-m3',
      order: 3,
      title: 'Döndürme, bölen nokta ve dörtgen köşeleri',
      summary:
        'Paralelkenarda köşegenlerin kesişimi, oranla bölen nokta, karede benzerlik, dik açıdan apsis, orijin etrafında döndürme ve dikdörtgenin köşesi.',
      questions: pick(
        'analytic-15',
        'analytic-16',
        'analytic-17',
        'analytic-18',
        'analytic-19',
        'analytic-20',
        'analytic-21',
      ),
    },
    {
      id: 'analytic-m4',
      order: 4,
      title: 'Uzaklık, bölgeler ve ağırlık merkezi',
      summary:
        'İki nokta arası uzaklık, işaretlerden bölge, ağırlık merkezinin eksenlere uzaklığı, uzaklıktan bilinmeyen, dik üçgende apsis ve üçgen alanı.',
      questions: pick(
        'analytic-22',
        'analytic-23',
        'analytic-24',
        'analytic-25',
        'analytic-26',
        'analytic-27',
        'analytic-28',
        'analytic-29',
      ),
    },
    {
      id: 'analytic-m5',
      order: 5,
      title: 'Paralelkenar, kenarortay ve teğet çember',
      summary:
        'Paralelkenarın dördüncü köşesi ve köşegeni, bölgeden tamsayılar, orta noktadan uç nokta, teğet çember, kenarortaylar ve alandan ordinat.',
      questions: pick(
        'analytic-30',
        'analytic-31',
        'analytic-32',
        'analytic-33',
        'analytic-34',
        'analytic-35',
        'analytic-36',
        'analytic-37',
      ),
    },
    {
      id: 'analytic-m6',
      order: 6,
      title: 'Alan, altıgen ve dıştan bölme',
      summary:
        'Alandan bilinmeyen koordinat, düzgün altıgenin köşesi, dıştan bölen nokta, dik açıdan üçgen alanı, eşit uzaklıktaki nokta ve dikdörtgenin köşesi.',
      questions: pick(
        'analytic-38',
        'analytic-39',
        'analytic-40',
        'analytic-41',
        'analytic-42',
        'analytic-43',
        'analytic-44',
      ),
    },
  ],
};
