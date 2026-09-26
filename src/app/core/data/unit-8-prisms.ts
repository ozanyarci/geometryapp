import { Question, Unit } from '../models';

/**
 * Unit 8 — Prisms.
 * Original questions written in the style of the "Prizmalar — Çözümlü Test"
 * source: space diagonals of a cube, a cube cut by a plane, the dimensions of a
 * rectangular prism from its volume, the shortest path on a cylinder, displaced
 * liquid, a minimum perimeter found by unfolding faces, and surface area.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Solids are drawn in cabinet oblique projection: width and height at full
 * scale, depth at half scale along 45°. Hidden edges use the `.hid` class. Every
 * figure notes its pixel-per-unit scale beside it.
 */
const QUESTIONS: Question[] = [
  // ---------------------------------------------------------------- 1
  // Cube of edge 6 at 30 px per cm.
  {
    id: 'prisms-1',
    topic: 'Küpte dik üçgenle uzunluk',
    stem: [],
    given: ['ABCDEFGH bir küptür.', '|ET| = |TH| = 3 cm'],
    ask: 'Yukarıdaki verilere göre, |BT| kaç cm dir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '3√10' },
      { key: 'C', text: '10' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '12' },
    ],
    answer: 'A',
    hint: '[BE] yüz köşegenini çiz; [ET] ayrıtı ABFE yüzüne diktir.',
    solution: [
      {
        title: 'Küpün ayrıtı',
        detail: 'T, [EH] ayrıtının orta noktasıdır; küpün ayrıtı |EH| = 3 + 3 = 6 cm olur.',
      },
      {
        title: 'Yüz köşegeni',
        detail: 'ABFE karesinin köşegeni |BE| = 6√2 cm, yani |BE|² = 72 olur.',
      },
      {
        title: 'Dik üçgen',
        detail:
          '[EH] ayrıtı ABFE yüzüne dik olduğundan [ET] ⟂ [BE] dir; BET üçgeni E açısı dik olan bir dik üçgendir.',
      },
      {
        title: 'Sonuç',
        detail: '|BT|² = |BE|² + |ET|² = 72 + 9 = 81, dolayısıyla |BT| = 9 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 -10 400 300',
      caption: 'Şekil 1',
      label:
        'ABCDEFGH küpü; alt yüz ABCD, üst yüz EFGH. T noktası [EH] ayrıtının orta noktası, |ET| = |TH|, ve B ile T birleştirilmiş.',
      svg: `
          <path class="hid" d="M78.2,262.0 L141.8,198.4 L321.8,198.4"/>
          <path class="hid" d="M141.8,198.4 L141.8,18.4"/>
          <path class="ln" d="M78.2,262.0 L258.2,262.0 L321.8,198.4 L321.8,18.4 L141.8,18.4 L78.2,82.0 Z"/>
          <path class="ln" d="M78.2,82.0 L258.2,82.0 L321.8,18.4"/>
          <path class="ln" d="M258.2,262.0 L258.2,82.0"/>
          <path class="ln" d="M258.2,262.0 L110.0,50.2"/>
          <path class="tick" d="M89.2,61.2 L99.0,71.0"/>
          <path class="tick" d="M121.0,29.4 L130.8,39.2"/>
          <circle class="pt" cx="78.2" cy="262.0" r="3.2"/>
          <circle class="pt" cx="258.2" cy="262.0" r="3.2"/>
          <circle class="pt" cx="321.8" cy="198.4" r="3.2"/>
          <circle class="pt" cx="141.8" cy="198.4" r="3.2"/>
          <circle class="pt" cx="78.2" cy="82.0" r="3.2"/>
          <circle class="pt" cx="258.2" cy="82.0" r="3.2"/>
          <circle class="pt" cx="321.8" cy="18.4" r="3.2"/>
          <circle class="pt" cx="141.8" cy="18.4" r="3.2"/>
          <circle class="pt" cx="110.0" cy="50.2" r="3.2"/>
          <text x="70.2" y="278.0" text-anchor="end">A</text>
          <text x="266.2" y="278.0">B</text>
          <text x="331.8" y="204.4">C</text>
          <text x="131.8" y="190.4" text-anchor="end">D</text>
          <text x="68.2" y="88.0" text-anchor="end">E</text>
          <text x="266.2" y="100.0">F</text>
          <text x="331.8" y="12.4">G</text>
          <text x="141.8" y="6.4" text-anchor="middle">H</text>
          <text x="100.0" y="40.2" text-anchor="end">T</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -10 400 300',
      caption: 'Şekil 1',
      label:
        'Aynı küpte ABFE yüzünün [BE] köşegeni kesikli çizilmiş; BET üçgeni E de dik açılıdır.',
      svg: `
          <path class="hid" d="M78.2,262.0 L141.8,198.4 L321.8,198.4"/>
          <path class="hid" d="M141.8,198.4 L141.8,18.4"/>
          <path class="ln" d="M78.2,262.0 L258.2,262.0 L321.8,198.4 L321.8,18.4 L141.8,18.4 L78.2,82.0 Z"/>
          <path class="ln" d="M78.2,82.0 L258.2,82.0 L321.8,18.4"/>
          <path class="ln" d="M258.2,262.0 L258.2,82.0"/>
          <path class="ln" d="M258.2,262.0 L110.0,50.2"/>
          <path class="tick" d="M89.2,61.2 L99.0,71.0"/>
          <path class="tick" d="M121.0,29.4 L130.8,39.2"/>
          <circle class="pt" cx="78.2" cy="262.0" r="3.2"/>
          <circle class="pt" cx="258.2" cy="262.0" r="3.2"/>
          <circle class="pt" cx="321.8" cy="198.4" r="3.2"/>
          <circle class="pt" cx="141.8" cy="198.4" r="3.2"/>
          <circle class="pt" cx="78.2" cy="82.0" r="3.2"/>
          <circle class="pt" cx="258.2" cy="82.0" r="3.2"/>
          <circle class="pt" cx="321.8" cy="18.4" r="3.2"/>
          <circle class="pt" cx="141.8" cy="18.4" r="3.2"/>
          <circle class="pt" cx="110.0" cy="50.2" r="3.2"/>
          <text x="70.2" y="278.0" text-anchor="end">A</text>
          <text x="266.2" y="278.0">B</text>
          <text x="331.8" y="204.4">C</text>
          <text x="131.8" y="190.4" text-anchor="end">D</text>
          <text x="68.2" y="88.0" text-anchor="end">E</text>
          <text x="266.2" y="100.0">F</text>
          <text x="331.8" y="12.4">G</text>
          <text x="141.8" y="6.4" text-anchor="middle">H</text>
          <text x="100.0" y="40.2" text-anchor="end">T</text>
          <path class="aux" d="M258.2,262.0 L78.2,82.0"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 2
  // Cube of edge 12 at 16 px per cm; |FK| = |GL| = 5.
  {
    id: 'prisms-2',
    topic: 'Düzlemle kesilen küpün hacmi',
    stem: [
      'Bir ayrıtı 12 cm olan ABCDEFGH küpü, arakesiti KBCL dikdörtgeni olacak biçimde bir düzlemle iki parçaya ayrılıyor.',
    ],
    given: ['|AB| = 12 cm', '|BK| = |CL| = 13 cm'],
    ask: 'Buna göre, parçalardan büyük olanının hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '1008' },
      { key: 'B', text: '1152' },
      { key: 'C', text: '1296' },
      { key: 'D', text: '1368' },
      { key: 'E', text: '1440' },
    ],
    answer: 'D',
    hint: 'Küçük parça, tabanı KFB dik üçgeni olan bir üçgen prizmadır.',
    solution: [
      {
        title: '|FK| uzunluğu',
        detail: 'KFB üçgeni F de diktir: |FK|² = 13² − 12² = 169 − 144 = 25, yani |FK| = 5 cm.',
      },
      {
        title: 'Küçük parçanın hacmi',
        detail:
          'Küçük parça tabanı KFB üçgeni, yüksekliği |BC| = 12 cm olan üçgen prizmadır: (5 · 12 / 2) · 12 = 360 cm³.',
      },
      {
        title: 'Küpün hacmi',
        detail: '12³ = 1728 cm³.',
      },
      {
        title: 'Sonuç',
        detail: 'Büyük parçanın hacmi 1728 − 360 = 1368 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -22 400 320',
      caption: 'Şekil 2',
      label:
        'ABCDEFGH küpü; K noktası üst ön ayrıt [EF] üzerinde, L noktası üst arka ayrıt [HG] üzerinde. KBCL dikdörtgeni taralı; |AB| = 12 cm.',
      svg: `
          <path class="shade" d="M182.1,76.0 L262.1,268.0 L329.9,200.1 L249.9,8.1 Z"/>
          <path class="hid" d="M70.1,268.0 L137.9,200.1 L329.9,200.1"/>
          <path class="hid" d="M137.9,200.1 L137.9,8.1"/>
          <path class="ln" d="M70.1,268.0 L262.1,268.0 L329.9,200.1 L329.9,8.1 L137.9,8.1 L70.1,76.0 Z"/>
          <path class="ln" d="M70.1,76.0 L262.1,76.0 L329.9,8.1"/>
          <path class="ln" d="M262.1,268.0 L262.1,76.0"/>
          <path class="ln" d="M262.1,268.0 L182.1,76.0"/>
          <path class="ln" d="M182.1,76.0 L249.9,8.1"/>
          <path class="ln" d="M249.9,8.1 L329.9,200.1"/>
          <circle class="pt" cx="70.1" cy="268.0" r="3.2"/>
          <circle class="pt" cx="262.1" cy="268.0" r="3.2"/>
          <circle class="pt" cx="329.9" cy="200.1" r="3.2"/>
          <circle class="pt" cx="137.9" cy="200.1" r="3.2"/>
          <circle class="pt" cx="70.1" cy="76.0" r="3.2"/>
          <circle class="pt" cx="262.1" cy="76.0" r="3.2"/>
          <circle class="pt" cx="329.9" cy="8.1" r="3.2"/>
          <circle class="pt" cx="137.9" cy="8.1" r="3.2"/>
          <circle class="pt" cx="182.1" cy="76.0" r="3.2"/>
          <circle class="pt" cx="249.9" cy="8.1" r="3.2"/>
          <text x="62.1" y="284.0" text-anchor="end">A</text>
          <text x="270.1" y="284.0">B</text>
          <text x="339.9" y="206.1">C</text>
          <text x="127.9" y="192.1" text-anchor="end">D</text>
          <text x="60.1" y="82.0" text-anchor="end">E</text>
          <text x="256.1" y="96.0" text-anchor="end">F</text>
          <text x="339.9" y="2.1">G</text>
          <text x="137.9" y="-3.9" text-anchor="middle">H</text>
          <text x="176.1" y="68.0" text-anchor="end">K</text>
          <text x="249.9" y="-3.9" text-anchor="middle">L</text>
          <text class="val" x="166.1" y="288.0" text-anchor="middle">12</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'prisms-3',
    topic: 'Hacimden prizmanın boyutları',
    stem: ['Boyutları a, b ve c olan dikdörtgenler prizmasının hacmi 216 cm³ tür.'],
    given: ['a / b = b / c = 2 / 3'],
    ask: 'Buna göre, a + b + c toplamı kaç cm dir?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '19' },
      { key: 'C', text: '21' },
      { key: 'D', text: '24' },
      { key: 'E', text: '26' },
    ],
    answer: 'B',
    hint: 'b ve c yi a cinsinden yaz, hacmi tek bilinmeyenli bir denklem yap.',
    solution: [
      {
        title: 'Boyutları a cinsinden yaz',
        detail: 'b = 3a / 2 ve c = 3b / 2 = 9a / 4 olur.',
      },
      {
        title: 'Hacim denklemi',
        detail: 'a · (3a / 2) · (9a / 4) = 27a³ / 8 = 216, buradan a³ = 64 ve a = 4 cm.',
      },
      {
        title: 'Diğer boyutlar',
        detail: 'b = 3 · 4 / 2 = 6 cm ve c = 9 · 4 / 4 = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'a + b + c = 4 + 6 + 9 = 19 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  // Cylinder of radius 12 and height 20 at 11 px per cm; ellipses at 0.3 aspect.
  {
    id: 'prisms-4',
    topic: 'Silindir yüzeyinde en kısa yol',
    stem: [],
    given: [
      'Dik silindir biçimindeki borunun taban yarıçapı 12 cm dir.',
      '[AB] alt tabanın bir çapı, [BC] bir ana doğrudur.',
      '|BE| = 5π cm',
    ],
    ask: 'Borunun A noktasından harekete başlayan bir karınca, borunun yan yüzeyi üzerinde yürüyerek [BC] üzerindeki E noktasına gidiyor. Karıncanın aldığı en kısa yol kaç cm dir?',
    choices: [
      { key: 'A', text: '11π' },
      { key: 'B', text: '12π' },
      { key: 'C', text: '13π' },
      { key: 'D', text: '14π' },
      { key: 'E', text: '17π' },
    ],
    answer: 'C',
    hint: 'Yan yüzeyi açarak bir dikdörtgen elde et; en kısa yol bu dikdörtgende bir doğru parçasıdır.',
    solution: [
      {
        title: 'Yan yüzeyi aç',
        detail:
          'Silindirin yan yüzeyi açıldığında dikdörtgen olur; A ile B arasındaki yay, taban çevresinin yarısıdır.',
      },
      {
        title: 'Yatay uzaklık',
        detail: 'Yarım çevre π · r = 12π cm.',
      },
      {
        title: 'Dik üçgen',
        detail: 'Açılımda A ile E arasındaki yatay uzaklık 12π, düşey uzaklık 5π cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'En kısa yol √((12π)² + (5π)²) = √169 · π = 13π cm dir.',
      },
    ],
    figure: {
      viewBox: '0 30 400 324',
      caption: 'Şekil 3',
      label:
        'Dik silindir; alt tabanda A ve B bir çapın uç noktaları, üst tabanda D ve C. E noktası [BC] ana doğrusu üzerinde.',
      svg: `
          <path class="hid" d="M68,300 A132,39.6 0 0 1 332,300"/>
          <path class="ln" d="M68,300 A132,39.6 0 0 0 332,300"/>
          <ellipse class="ln" cx="200" cy="80" rx="132" ry="39.6"/>
          <path class="ln" d="M68,300 L68,80"/>
          <path class="ln" d="M332,300 L332,80"/>
          <circle class="pt" cx="68" cy="300" r="3.2"/>
          <circle class="pt" cx="332" cy="300" r="3.2"/>
          <circle class="pt" cx="332" cy="80" r="3.2"/>
          <circle class="pt" cx="68" cy="80" r="3.2"/>
          <circle class="pt" cx="332" cy="127.2" r="3.2"/>
          <text x="60" y="306" text-anchor="end">A</text>
          <text x="340" y="306">B</text>
          <text x="340" y="74">C</text>
          <text x="60" y="74" text-anchor="end">D</text>
          <text x="340" y="132.2">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 30 400 324',
      caption: 'Şekil 3',
      label:
        'Aynı silindirde karıncanın A dan E ye ön yüzey üzerinden izlediği en kısa yol kesikli eğri olarak çizilmiş.',
      svg: `
          <path class="hid" d="M68,300 A132,39.6 0 0 1 332,300"/>
          <path class="ln" d="M68,300 A132,39.6 0 0 0 332,300"/>
          <ellipse class="ln" cx="200" cy="80" rx="132" ry="39.6"/>
          <path class="ln" d="M68,300 L68,80"/>
          <path class="ln" d="M332,300 L332,80"/>
          <circle class="pt" cx="68" cy="300" r="3.2"/>
          <circle class="pt" cx="332" cy="300" r="3.2"/>
          <circle class="pt" cx="332" cy="80" r="3.2"/>
          <circle class="pt" cx="68" cy="80" r="3.2"/>
          <circle class="pt" cx="332" cy="127.2" r="3.2"/>
          <text x="60" y="306" text-anchor="end">A</text>
          <text x="340" y="306">B</text>
          <text x="340" y="74">C</text>
          <text x="60" y="74" text-anchor="end">D</text>
          <text x="340" y="132.2">E</text>
          <path class="aux" d="M68.0,300.0 L68.4,298.8 L69.6,297.6 L71.6,296.3 L74.5,295.0 L78.0,293.6 L82.4,292.1 L87.5,290.5 L93.2,288.7 L99.6,286.8 L106.7,284.8 L114.3,282.6 L122.4,280.2 L131.0,277.6 L140.1,274.8 L149.5,271.8 L159.2,268.5 L169.2,265.1 L179.4,261.4 L189.6,257.4 L200.0,253.2 L210.4,248.8 L220.6,244.1 L230.8,239.2 L240.8,234.0 L250.5,228.6 L259.9,223.0 L269.0,217.1 L277.6,211.1 L285.7,204.8 L293.3,198.4 L300.4,191.8 L306.8,185.0 L312.5,178.1 L317.6,171.1 L322.0,164.0 L325.5,156.7 L328.4,149.4 L330.4,142.0 L331.6,134.6 L332.0,127.2"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'prisms-5',
    topic: 'Batan cismin yükselttiği sıvı',
    stem: [
      'Taban ayrıtları 6 cm ve 8 cm olan dikdörtgenler prizması biçimindeki bir kapta yeteri kadar su vardır.',
      'Bu kaba bir ayrıtı 4 cm olan küp biçiminde bir metal atıldığında metal tamamen suya batıyor.',
    ],
    ask: 'Buna göre, su seviyesi kaç cm yükselmiştir?',
    choices: [
      { key: 'A', text: '2/3' },
      { key: 'B', text: '1' },
      { key: 'C', text: '7/6' },
      { key: 'D', text: '5/4' },
      { key: 'E', text: '4/3' },
    ],
    answer: 'E',
    hint: 'Yükselen suyun hacmi, batan küpün hacmine eşittir.',
    solution: [
      {
        title: 'Küpün hacmi',
        detail: 'Batan metal küpün hacmi 4³ = 64 cm³ tür.',
      },
      {
        title: 'Kabın taban alanı',
        detail: '6 · 8 = 48 cm².',
      },
      {
        title: 'Hacim eşitliği',
        detail: 'Su seviyesi h cm yükselirse 48 · h = 64 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'h = 64 / 48 = 4/3 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  // Square prism 4 × 4 × 6 at 36 px per unit; K drawn at |DK| = 3, the minimum.
  {
    id: 'prisms-6',
    topic: 'Yüzleri açarak en kısa çevre',
    stem: [
      'Taban ayrıtları 4 birim, yüksekliği 6 birim olan ABCDA′B′C′D′ kare dik prizmasının [DD′] ayrıtı üzerinde bir K noktası alınıyor.',
      'A, K ve C′ noktaları birleştirilerek bir üçgen oluşturuluyor.',
    ],
    ask: 'Buna göre, AKC′ üçgeninin çevresinin en küçük değeri kaç birimdir?',
    choices: [
      { key: 'A', text: '8 + 2√17' },
      { key: 'B', text: '10 + 2√17' },
      { key: 'C', text: '12 + 2√17' },
      { key: 'D', text: '10 + 4√5' },
      { key: 'E', text: '2√13 + 2√17' },
    ],
    answer: 'B',
    hint: '|AC′| sabittir; |AK| + |KC′| toplamını en küçük yapmak için ADD′A′ ve DCC′D′ yüzlerini aynı düzleme aç.',
    solution: [
      {
        title: 'Sabit kenar',
        detail: '|AC′| cisim köşegenidir: √(4² + 4² + 6²) = √68 = 2√17 birim.',
      },
      {
        title: 'Yüzleri aç',
        detail:
          'ADD′A′ ve DCC′D′ yüzleri [DD′] boyunca tek düzleme açılırsa A ile C′ arasında yatay 4 + 4 = 8, düşey 6 birim olur.',
      },
      {
        title: 'En küçük toplam',
        detail: '|AK| + |KC′| ≥ √(8² + 6²) = √100 = 10 birim; eşitlik |DK| = 3 iken sağlanır.',
      },
      {
        title: 'Sonuç',
        detail: 'Çevrenin en küçük değeri 10 + 2√17 birimdir.',
      },
    ],
    figure: {
      viewBox: '0 -6 400 324',
      caption: 'Şekil 4',
      label:
        'ABCDA′B′C′D′ kare dik prizması; taban ayrıtları 4, yüksekliği 6 birim. K noktası [DD′] üzerinde ve AKC′ üçgeni taralı.',
      svg: `
          <path class="shade" d="M102.5,290.0 L153.5,131.1 L297.5,23.1 Z"/>
          <path class="hid" d="M102.5,290.0 L153.5,239.1 L297.5,239.1"/>
          <path class="hid" d="M153.5,239.1 L153.5,23.1"/>
          <path class="ln" d="M102.5,290.0 L246.5,290.0 L297.5,239.1 L297.5,23.1 L153.5,23.1 L102.5,74.0 Z"/>
          <path class="ln" d="M102.5,74.0 L246.5,74.0 L297.5,23.1"/>
          <path class="ln" d="M246.5,290.0 L246.5,74.0"/>
          <path class="ln" d="M102.5,290.0 L153.5,131.1 L297.5,23.1 Z"/>
          <circle class="pt" cx="102.5" cy="290.0" r="3.2"/>
          <circle class="pt" cx="246.5" cy="290.0" r="3.2"/>
          <circle class="pt" cx="297.5" cy="239.1" r="3.2"/>
          <circle class="pt" cx="153.5" cy="239.1" r="3.2"/>
          <circle class="pt" cx="102.5" cy="74.0" r="3.2"/>
          <circle class="pt" cx="246.5" cy="74.0" r="3.2"/>
          <circle class="pt" cx="297.5" cy="23.1" r="3.2"/>
          <circle class="pt" cx="153.5" cy="23.1" r="3.2"/>
          <circle class="pt" cx="153.5" cy="131.1" r="3.2"/>
          <text x="94.5" y="306.0" text-anchor="end">A</text>
          <text x="254.5" y="306.0">B</text>
          <text x="307.5" y="245.1">C</text>
          <text x="143.5" y="231.1" text-anchor="end">D</text>
          <text x="92.5" y="80.0" text-anchor="end">A′</text>
          <text x="256.5" y="88.0">B′</text>
          <text x="307.5" y="17.1">C′</text>
          <text x="153.5" y="11.1" text-anchor="middle">D′</text>
          <text x="143.5" y="135.1" text-anchor="end">K</text>
          <text class="val" x="174.5" y="310.0" text-anchor="middle">4</text>
          <text class="val" x="284.0" y="278.6">4</text>
          <text class="val" x="256.5" y="187.0">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 7
  {
    id: 'prisms-7',
    topic: 'Ayrıtlar toplamı, alan ve cisim köşegeni',
    stem: [
      'Bir dikdörtgenler prizmasının bütün ayrıtlarının uzunlukları toplamı 48 cm, yüzey alanı 94 cm² dir.',
    ],
    ask: 'Buna göre, bu prizmanın cisim köşegeninin uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '2√10' },
      { key: 'D', text: '5√2' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: '(a + b + c)² = a² + b² + c² + 2(ab + bc + ca) özdeşliğini kullan.',
    solution: [
      {
        title: 'Ayrıtlar toplamı',
        detail: 'Prizmanın 12 ayrıtı vardır: 4(a + b + c) = 48, yani a + b + c = 12.',
      },
      {
        title: 'Yüzey alanı',
        detail: '2(ab + bc + ca) = 94.',
      },
      {
        title: 'Kareler toplamı',
        detail: 'a² + b² + c² = 12² − 94 = 144 − 94 = 50.',
      },
      {
        title: 'Sonuç',
        detail: 'Cisim köşegeni √(a² + b² + c²) = √50 = 5√2 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  // Equilateral triangular prism, side 6 and height 10, at 25 px per cm.
  {
    id: 'prisms-8',
    topic: 'Üçgen dik prizmada yanal alan ve hacim',
    stem: [],
    given: ['ABCDEF eşkenar üçgen dik prizmadır.', '|AB| = 6 cm', 'Yanal alan = 180 cm²'],
    ask: 'Buna göre, prizmanın hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '60√3' },
      { key: 'B', text: '72√3' },
      { key: 'C', text: '90√3' },
      { key: 'D', text: '108√3' },
      { key: 'E', text: '120√3' },
    ],
    answer: 'C',
    hint: 'Yanal alan, taban çevresi ile yüksekliğin çarpımıdır.',
    solution: [
      {
        title: 'Yükseklik',
        detail: 'Taban çevresi 3 · 6 = 18 cm; 18 · h = 180, yani h = 10 cm.',
      },
      {
        title: 'Taban alanı',
        detail: 'Kenarı 6 olan eşkenar üçgenin alanı 6²√3 / 4 = 9√3 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Hacim = 9√3 · 10 = 90√3 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -24 400 352',
      caption: 'Şekil 5',
      label:
        'Eşkenar üçgen dik prizma; alt taban ABC, üst taban DEF. D, A nın; E, B nin; F, C nin üstündedir. |AB| = 6 cm.',
      svg: `
          <path class="hid" d="M102.0,300.0 L223.0,254.1 L252.0,300.0"/>
          <path class="hid" d="M223.0,254.1 L223.0,4.1"/>
          <path class="ln" d="M102.0,300.0 L252.0,300.0 L252.0,50.0 L223.0,4.1 L102.0,50.0 Z"/>
          <path class="ln" d="M102.0,50.0 L252.0,50.0"/>
          <circle class="pt" cx="102.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="252.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="223.0" cy="254.1" r="3.2"/>
          <circle class="pt" cx="102.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="252.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="223.0" cy="4.1" r="3.2"/>
          <text x="94.0" y="316.0" text-anchor="end">A</text>
          <text x="260.0" y="316.0">B</text>
          <text x="233.0" y="258.1">C</text>
          <text x="92.0" y="54.0" text-anchor="end">D</text>
          <text x="262.0" y="54.0">E</text>
          <text x="223.0" y="-7.9" text-anchor="middle">F</text>
          <text class="val" x="177.0" y="320.0" text-anchor="middle">6</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 9
  // Dimensions 1, 2 and 4: diagonal √21, pairwise products 2 + 8 + 4 = 14.
  {
    id: 'prisms-9',
    topic: 'Cisim köşegeni ve yüz alanlarından ayrıtlar toplamı',
    stem: [
      'Bir dikdörtgenler prizmasının cisim köşegeni √21 cm, farklı yüzlerinin alanları toplamı 14 cm² dir.',
    ],
    ask: 'Buna göre, bir köşeye ait üç farklı ayrıtın uzunlukları toplamı kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '3√6' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'B',
    hint: '(a + b + c)² = a² + b² + c² + 2(ab + bc + ca) özdeşliğini kullan.',
    solution: [
      {
        title: 'Cisim köşegeni',
        detail: 'Ayrıtlar a, b, c ise a² + b² + c² = (√21)² = 21 olur.',
      },
      {
        title: 'Farklı yüzlerin alanları',
        detail: 'Üç farklı yüzün alanları ab, bc ve ca dır: ab + bc + ca = 14.',
      },
      {
        title: 'Özdeşlik',
        detail: '(a + b + c)² = 21 + 2 · 14 = 49.',
      },
      {
        title: 'Sonuç',
        detail: 'a + b + c = √49 = 7 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  // Cylinder r = 4, h = 12 at 14 px per cm, tilted so its base makes 45° with
  // the ground; the water surface runs through the lowest point of the top rim.
  {
    id: 'prisms-10',
    topic: 'Eğilen silindirden dökülen su',
    stem: [
      'Taban yarıçapı 4 cm, yüksekliği 12 cm olan dik silindir biçimindeki bir kap ağzına kadar su ile doludur.',
      'Kap, tabanı yerle 45° lik açı yapacak biçimde eğildiğinde bir miktar su dökülüyor.',
    ],
    ask: 'Buna göre, kapta kalan suyun hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '96π' },
      { key: 'B', text: '112π' },
      { key: 'C', text: '128π' },
      { key: 'D', text: '144π' },
      { key: 'E', text: '160π' },
    ],
    answer: 'C',
    hint: 'Su yüzeyi yatay kalır ve kabın ağzının en alçak noktasından geçer; dökülen kısım silindirin eğik bir düzlemle kesilen parçasıdır.',
    solution: [
      {
        title: 'Su yüzeyi',
        detail:
          'Su yüzeyi yataydır ve taban düzlemiyle 45° lik açı yapar; ağzın en alçak noktasından geçer.',
      },
      {
        title: 'Dökülen kısmın yüksekliği',
        detail:
          'Bir çap boyunca su yüksekliği 2r · tan 45° = 8 cm değişir: bir yanda su 12 cm, karşı yanda 12 − 8 = 4 cm yüksekliğe kadar çıkar.',
      },
      {
        title: 'Dökülen su',
        detail:
          'Dökülen kısım, yüksekliği 8 cm olan silindirin tam yarısıdır: π · 4² · 8 / 2 = 64π cm³.',
      },
      {
        title: 'Sonuç',
        detail: 'Kabın hacmi π · 4² · 12 = 192π; kalan su 192π − 64π = 128π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 84 400 240',
      caption: 'Şekil 6',
      label:
        'Tabanı yerle 45° lik açı yapacak biçimde eğilmiş silindir biçiminde kap; kaptaki su taralı, su yüzeyi yatay ve kabın ağzının en alçak noktasından geçiyor.',
      svg: `
          <path class="shade" d="M180.0,300.0 L298.8,181.2 L298.5,182.7 L297.6,184.1 L296.1,185.6 L294.0,187.0 L291.4,188.3 L288.2,189.6 L284.5,190.8 L280.3,192.0 L275.6,193.1 L270.5,194.1 L265.0,195.0 L259.2,195.8 L253.1,196.4 L246.7,197.0 L240.1,197.4 L233.4,197.8 L226.5,197.9 L219.6,198.0 L212.7,197.9 L205.8,197.8 L199.1,197.4 L192.5,197.0 L186.1,196.4 L180.0,195.8 L174.2,195.0 L168.7,194.1 L163.6,193.1 L158.9,192.0 L154.7,190.8 L151.0,189.6 L147.8,188.3 L145.2,187.0 L143.1,185.6 L141.6,184.1 L140.7,182.7 L140.4,181.2 L100.8,220.8 L99.9,222.0 L99.3,223.5 L99.1,225.2 L99.1,227.3 L99.5,229.5 L100.2,232.0 L101.2,234.8 L102.4,237.7 L104.0,240.8 L105.8,244.0 L108.0,247.4 L110.3,250.9 L112.9,254.4 L115.7,258.0 L118.7,261.6 L121.8,265.2 L125.1,268.8 L128.5,272.3 L132.0,275.7 L135.6,279.0 L139.2,282.1 L142.8,285.1 L146.4,287.9 L149.9,290.5 L153.4,292.8 L156.8,295.0 L160.0,296.8 L163.1,298.4 L166.0,299.7 L168.8,300.6 L171.3,301.3 L173.5,301.7 L175.6,301.7 L177.3,301.5 L178.8,300.9 L180.0,300.0 Z"/>
          <path class="hid" d="M100.8,220.8 L102.0,219.9 L103.5,219.3 L105.2,219.1 L107.3,219.1 L109.5,219.5 L112.0,220.2 L114.8,221.2 L117.7,222.4 L120.8,224.0 L124.0,225.8 L127.4,228.0 L130.9,230.3 L134.4,232.9 L138.0,235.7 L141.6,238.7 L145.2,241.8 L148.8,245.1 L152.3,248.5 L155.7,252.0 L159.0,255.6 L162.1,259.2 L165.1,262.8 L167.9,266.4 L170.5,269.9 L172.8,273.4 L175.0,276.8 L176.8,280.0 L178.4,283.1 L179.7,286.0 L180.6,288.8 L181.3,291.3 L181.7,293.5 L181.7,295.6 L181.5,297.3 L180.9,298.8 L180.0,300.0"/>
          <path class="ln" d="M180.0,300.0 L178.8,300.9 L177.3,301.5 L175.6,301.7 L173.5,301.7 L171.3,301.3 L168.8,300.6 L166.0,299.7 L163.1,298.4 L160.0,296.8 L156.8,295.0 L153.4,292.8 L149.9,290.5 L146.4,287.9 L142.8,285.1 L139.2,282.1 L135.6,279.0 L132.0,275.7 L128.5,272.3 L125.1,268.8 L121.8,265.2 L118.7,261.6 L115.7,258.0 L112.9,254.4 L110.3,250.9 L108.0,247.4 L105.8,244.0 L104.0,240.8 L102.4,237.7 L101.2,234.8 L100.2,232.0 L99.5,229.5 L99.1,227.3 L99.1,225.2 L99.3,223.5 L99.9,222.0 L100.8,220.8"/>
          <path class="ln" d="M219.6,102.0 L220.8,101.1 L222.3,100.5 L224.0,100.3 L226.0,100.3 L228.3,100.7 L230.8,101.4 L233.6,102.4 L236.5,103.6 L239.6,105.2 L242.8,107.1 L246.2,109.2 L249.7,111.5 L253.2,114.1 L256.8,116.9 L260.4,119.9 L264.0,123.0 L267.6,126.3 L271.1,129.7 L274.5,133.2 L277.8,136.8 L280.9,140.4 L283.9,144.0 L286.7,147.6 L289.3,151.1 L291.6,154.6 L293.7,158.0 L295.6,161.2 L297.2,164.3 L298.4,167.2 L299.4,170.0 L300.1,172.5 L300.5,174.8 L300.5,176.8 L300.3,178.5 L299.7,180.0 L298.8,181.2 L297.6,182.1 L296.1,182.7 L294.4,182.9 L292.3,182.9 L290.1,182.5 L287.5,181.8 L284.8,180.9 L281.9,179.6 L278.8,178.0 L275.5,176.2 L272.2,174.1 L268.7,171.7 L265.2,169.1 L261.6,166.3 L258.0,163.3 L254.4,160.2 L250.8,156.9 L247.3,153.5 L243.9,150.0 L240.6,146.4 L237.5,142.8 L234.5,139.2 L231.7,135.6 L229.1,132.1 L226.8,128.6 L224.6,125.3 L222.8,122.0 L221.2,118.9 L219.9,116.0 L219.0,113.3 L218.3,110.7 L217.9,108.5 L217.9,106.4 L218.1,104.7 L218.7,103.2 L219.6,102.0 Z"/>
          <path class="ln" d="M180.0,300.0 L298.8,181.2"/>
          <path class="ln" d="M100.8,220.8 L219.6,102.0"/>
          <path class="hid" d="M140.4,181.2 L140.7,179.7 L141.6,178.3 L143.1,176.9 L145.2,175.5 L147.8,174.1 L151.0,172.8 L154.7,171.6 L158.9,170.4 L163.6,169.3 L168.7,168.3 L174.2,167.4 L180.0,166.7 L186.1,166.0 L192.5,165.4 L199.1,165.0 L205.8,164.7 L212.7,164.5 L219.6,164.4 L226.5,164.5 L233.4,164.7 L240.1,165.0 L246.7,165.4 L253.1,166.0 L259.2,166.7 L265.0,167.4 L270.5,168.3 L275.6,169.3 L280.3,170.4 L284.5,171.6 L288.2,172.8 L291.4,174.1 L294.0,175.5 L296.1,176.9 L297.6,178.3 L298.5,179.7 L298.8,181.2"/>
          <path class="ln" d="M298.8,181.2 L298.5,182.7 L297.6,184.1 L296.1,185.6 L294.0,187.0 L291.4,188.3 L288.2,189.6 L284.5,190.8 L280.3,192.0 L275.6,193.1 L270.5,194.1 L265.0,195.0 L259.2,195.8 L253.1,196.4 L246.7,197.0 L240.1,197.4 L233.4,197.8 L226.5,197.9 L219.6,198.0 L212.7,197.9 L205.8,197.8 L199.1,197.4 L192.5,197.0 L186.1,196.4 L180.0,195.8 L174.2,195.0 L168.7,194.1 L163.6,193.1 L158.9,192.0 L154.7,190.8 L151.0,189.6 L147.8,188.3 L145.2,187.0 L143.1,185.6 L141.6,184.1 L140.7,182.7 L140.4,181.2"/>
          <path class="ln" d="M60.0,300.0 L240.0,300.0"/>
          <path class="arc" d="M150.0,300.0 L150.1,298.0 L150.3,296.1 L150.6,294.1 L151.0,292.2 L151.6,290.4 L152.3,288.5 L153.1,286.7 L154.0,285.0 L155.1,283.3 L156.2,281.7 L157.4,280.2 L158.8,278.8"/>
          <text class="val" x="116.0" y="289.0" text-anchor="middle">45°</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 11
  // Kite base, top view at 24 px per cm: |AB| = |AD| = 4, |CB| = |CD| = 12,
  // right angles at B and D; the incircle has radius 48 / 16 = 3.
  {
    id: 'prisms-11',
    topic: 'Deltoid tabanlı prizmaya yerleşen silindir',
    stem: [
      'Tabanları ABCD deltoidi olan bir dik prizmanın içine, taban çemberleri deltoidin kenarlarına teğet olacak biçimde bir dik silindir yerleştiriliyor.',
      'Şekilde prizmanın tabanı ve silindirin taban çemberi görülmektedir.',
    ],
    given: [
      'm(ADC) = m(ABC) = 90°',
      '|AD| = |AB| = 4 cm',
      '|DC| = |BC| = 12 cm',
      'Prizmanın yüksekliği 10 cm',
    ],
    ask: 'Buna göre, silindirin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '60π' },
      { key: 'B', text: '72π' },
      { key: 'C', text: '81π' },
      { key: 'D', text: '90π' },
      { key: 'E', text: '108π' },
    ],
    answer: 'D',
    hint: 'Deltoidin alanını iki yoldan yaz: dik üçgenlerden ve Alan = r · u (u yarı çevre) bağıntısından.',
    solution: [
      {
        title: 'Deltoidin alanı',
        detail: 'ABC ve ADC dik üçgenlerdir: Alan = 2 · (4 · 12 / 2) = 48 cm².',
      },
      {
        title: 'Yarı çevre',
        detail: 'u = (4 + 4 + 12 + 12) / 2 = 16 cm.',
      },
      {
        title: 'İç teğet çemberin yarıçapı',
        detail: 'Alan = r · u ⇒ 48 = 16r, yani r = 3 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Silindirin hacmi π · 3² · 10 = 90π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 44 400 236',
      caption: 'Şekil 7',
      label:
        'Prizmanın tabanı ABCD deltoidi; B ve D açıları dik, |AD| = |AB| ve |DC| = |BC|. Merkezi O olan silindir taban çemberi deltoidin dört kenarına teğet.',
      svg: `
          <path class="ln" d="M48.2,160.0 L78.6,251.1 L351.8,160.0 L78.6,68.9 Z"/>
          <circle class="ln" cx="124.1" cy="160.0" r="72.0" fill="none"/>
          <path class="tick" d="M74.8,80.3 L86.2,84.1 L90.0,72.7"/>
          <path class="tick" d="M74.8,239.7 L86.2,235.9 L90.0,247.3"/>
          <path class="tick" d="M57.7,112.6 L69.1,116.4"/>
          <path class="tick" d="M69.1,203.6 L57.7,207.4"/>
          <path class="tick" d="M214.2,107.8 L210.4,119.2"/>
          <path class="tick" d="M219.9,109.7 L216.1,121.1"/>
          <path class="tick" d="M210.4,200.8 L214.2,212.2"/>
          <path class="tick" d="M216.1,198.9 L219.9,210.3"/>
          <circle class="pt" cx="48.2" cy="160.0" r="3.2"/>
          <circle class="pt" cx="78.6" cy="251.1" r="3.2"/>
          <circle class="pt" cx="351.8" cy="160.0" r="3.2"/>
          <circle class="pt" cx="78.6" cy="68.9" r="3.2"/>
          <circle class="pt" cx="124.1" cy="160.0" r="3.2"/>
          <text x="40.2" y="165.0" text-anchor="end">A</text>
          <text x="359.8" y="165.0">C</text>
          <text x="78.6" y="58.9" text-anchor="middle">D</text>
          <text x="78.6" y="273.1" text-anchor="middle">B</text>
          <text x="130.1" y="154.0">O</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 12
  // Hollow cylinder R = 6, r = 3, h = 8 at 20 px per cm.
  {
    id: 'prisms-12',
    topic: 'Delinmiş silindirin yüzey alanı',
    stem: [
      'Yarıçapı 6 cm, yüksekliği 8 cm olan dik silindir biçimindeki bir tahta bloktan, şekildeki gibi aynı eksenli ve taban yarıçapı 3 cm olan bir dik silindir çıkartılıyor.',
    ],
    ask: 'Buna göre, kalan cismin yüzey alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '162π' },
      { key: 'B', text: '180π' },
      { key: 'C', text: '198π' },
      { key: 'D', text: '216π' },
      { key: 'E', text: '234π' },
    ],
    answer: 'C',
    hint: 'Kalan cismin yüzeyi dış yanal yüz, iç yanal yüz ve iki halkadan oluşur.',
    solution: [
      {
        title: 'Dış yanal alan',
        detail: '2π · 6 · 8 = 96π cm².',
      },
      {
        title: 'İç yanal alan',
        detail: 'Çıkarılan silindirin yan yüzü artık kalan cismin yüzeyidir: 2π · 3 · 8 = 48π cm².',
      },
      {
        title: 'İki halka',
        detail: 'Her tabanda π(6² − 3²) = 27π; iki taban 54π cm².',
      },
      {
        title: 'Sonuç',
        detail: '96π + 48π + 54π = 198π cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 20 400 260',
      caption: 'Şekil 8',
      label:
        'Yarıçapı 6 cm, yüksekliği 8 cm olan dik silindirin ortasından, aynı eksenli ve yarıçapı 3 cm olan dik silindir çıkarılmış.',
      svg: `
          <path class="hid" d="M80.0,230.0 L80.5,226.9 L81.8,223.7 L84.1,220.7 L87.2,217.7 L91.2,214.8 L96.1,212.0 L101.7,209.4 L108.1,206.9 L115.1,204.5 L122.9,202.4 L131.2,200.5 L140.0,198.8 L149.3,197.4 L159.0,196.2 L168.9,195.2 L179.2,194.5 L189.5,194.1 L200.0,194.0 L210.5,194.1 L220.8,194.5 L231.1,195.2 L241.0,196.2 L250.7,197.4 L260.0,198.8 L268.8,200.5 L277.1,202.4 L284.9,204.5 L291.9,206.9 L298.3,209.4 L303.9,212.0 L308.8,214.8 L312.8,217.7 L315.9,220.7 L318.2,223.7 L319.5,226.9 L320.0,230.0"/>
          <path class="ln" d="M320.0,230.0 L319.5,233.1 L318.2,236.3 L315.9,239.3 L312.8,242.3 L308.8,245.2 L303.9,248.0 L298.3,250.6 L291.9,253.1 L284.9,255.5 L277.1,257.6 L268.8,259.5 L260.0,261.2 L250.7,262.6 L241.0,263.8 L231.1,264.8 L220.8,265.5 L210.5,265.9 L200.0,266.0 L189.5,265.9 L179.2,265.5 L168.9,264.8 L159.0,263.8 L149.3,262.6 L140.0,261.2 L131.2,259.5 L122.9,257.6 L115.1,255.5 L108.1,253.1 L101.7,250.6 L96.1,248.0 L91.2,245.2 L87.2,242.3 L84.1,239.3 L81.8,236.3 L80.5,233.1 L80.0,230.0"/>
          <ellipse class="ln" cx="200" cy="70" rx="120" ry="36.0"/>
          <ellipse class="ln" cx="200" cy="70" rx="60" ry="18.0"/>
          <ellipse class="hid" cx="200" cy="230" rx="60" ry="18.0"/>
          <path class="hid" d="M140,70 L140,230"/>
          <path class="hid" d="M260,70 L260,230"/>
          <path class="ln" d="M80,70 L80,230"/>
          <path class="ln" d="M320,70 L320,230"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'prisms-13',
    topic: 'Hacmi eşit küpün cisim köşegeni',
    stem: [
      'Ayrıtları 4 cm, 8 cm ve 16 cm olan bir dikdörtgenler prizmasının hacmine sayıca eşit hacimde bir küp yapılıyor.',
    ],
    ask: 'Buna göre, bu küpün cisim köşegeni kaç cm dir?',
    choices: [
      { key: 'A', text: '4√6' },
      { key: 'B', text: '6√3' },
      { key: 'C', text: '8√2' },
      { key: 'D', text: '8√3' },
      { key: 'E', text: '12√2' },
    ],
    answer: 'D',
    hint: 'Önce prizmanın hacminden küpün ayrıtını bul.',
    solution: [
      {
        title: 'Prizmanın hacmi',
        detail: '4 · 8 · 16 = 512 cm³.',
      },
      {
        title: 'Küpün ayrıtı',
        detail: 'a³ = 512 ⇒ a = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Küpün cisim köşegeni a√3 = 8√3 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  // Open box 4 m × 3 m × 2 m at 50 px per m; depth at half scale along 45°.
  {
    id: 'prisms-14',
    topic: 'Üstü açık kutunun boya maliyeti',
    stem: [
      'Bir kartondan şekildeki gibi üstü açık bir kutu yapılacaktır. Bu kutunun taban ayrıtları 4 m ve 3 m, yüksekliği 2 m dir.',
    ],
    ask: 'Bu kutunun 1 m² lik yüzeyi 3 TL ye boyandığına göre, iç ve dış tüm yüzeyi kaç TL ye boyanır?',
    choices: [
      { key: 'A', text: '180' },
      { key: 'B', text: '204' },
      { key: 'C', text: '216' },
      { key: 'D', text: '240' },
      { key: 'E', text: '264' },
    ],
    answer: 'D',
    hint: 'Üstü açık kutunun bir yüzü eksiktir; iç ve dış yüzey aynı alana sahiptir.',
    solution: [
      {
        title: 'Taban',
        detail: '4 · 3 = 12 m².',
      },
      {
        title: 'Yan yüzler',
        detail: '2 · (4 + 3) · 2 = 28 m².',
      },
      {
        title: 'İç ve dış yüzey',
        detail: 'Kutunun bir yüzeyi 12 + 28 = 40 m²; iç ve dış birlikte 2 · 40 = 80 m².',
      },
      {
        title: 'Sonuç',
        detail: 'Maliyet 80 · 3 = 240 TL dir.',
      },
    ],
    figure: {
      viewBox: '0 92 400 206',
      caption: 'Şekil 9',
      label:
        'Üstü açık dikdörtgenler prizması biçiminde kutu; taban ayrıtları 4 m ve 3 m, yüksekliği 2 m.',
      svg: `
          <path class="hid" d="M74.0,260.0 L127.0,207.0 L327.0,207.0"/>
          <path class="hid" d="M127.0,207.0 L127.0,160.0"/>
          <path class="ln" d="M127.0,160.0 L127.0,107.0"/>
          <path class="ln" d="M74.0,260.0 L274.0,260.0 L327.0,207.0 L327.0,107.0 L127.0,107.0 L74.0,160.0 Z"/>
          <path class="ln" d="M74.0,160.0 L274.0,160.0 L327.0,107.0"/>
          <path class="ln" d="M274.0,260.0 L274.0,160.0"/>
          <text class="val" x="174.0" y="282.0" text-anchor="middle">4 m</text>
          <text class="val" x="66.0" y="215.0" text-anchor="end">2 m</text>
          <text class="val" x="308.5" y="247.5">3 m</text>
        `,
    },
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
export const PRISMS_BANK: readonly Question[] = QUESTIONS;

export const UNIT_8_PRISMS: Unit = {
  id: 'prisms',
  order: 8,
  title: 'Prizmalar',
  subtitle: 'Ünite 8',
  description:
    'Küp, dikdörtgenler prizması, üçgen prizma ve silindir: köşegenler, kesitler, hacim, yüzey alanı ve yüzey üzerinde en kısa yol.',
  modules: [
    {
      id: 'prisms-m1',
      order: 1,
      title: 'Küp, prizma ve silindir',
      summary:
        'Küpte köşegen, düzlemle kesilen küp, orandan boyutlar, silindirde en kısa yol, taşan sıvı, yüz açınımı, cisim köşegeni ve üçgen prizmanın hacmi.',
      questions: pick(
        'prisms-1',
        'prisms-2',
        'prisms-3',
        'prisms-4',
        'prisms-5',
        'prisms-6',
        'prisms-7',
        'prisms-8',
      ),
    },
    {
      id: 'prisms-m2',
      order: 2,
      title: 'Hacim, yüzey alanı ve iç içe cisimler',
      summary:
        'Köşegenden ayrıtlar toplamı, eğilen silindirden dökülen su, deltoid prizmaya yerleşen silindir, delinmiş silindir, eş hacimli küp ve üstü açık kutu.',
      questions: pick('prisms-9', 'prisms-10', 'prisms-11', 'prisms-12', 'prisms-13', 'prisms-14'),
    },
  ],
};
