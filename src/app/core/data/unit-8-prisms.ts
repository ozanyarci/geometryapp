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
  ],
};
