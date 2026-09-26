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
  ],
};
