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
  // ---------------------------------------------------------------- 15
  {
    id: 'prisms-15',
    topic: 'Dikdörtgenler prizmasının hacmi',
    stem: [],
    ask: 'Ayrıtları 3 cm, 4 cm ve 7 cm olan dikdörtgenler prizmasının hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '84' },
      { key: 'C', text: '96' },
      { key: 'D', text: '108' },
      { key: 'E', text: '112' },
    ],
    answer: 'B',
    hint: 'Dikdörtgenler prizmasının hacmi üç ayrıtının çarpımıdır.',
    solution: [
      {
        title: 'Hacim bağıntısı',
        detail: 'Ayrıtları a, b, c olan dikdörtgenler prizmasında V = a · b · c dir.',
      },
      {
        title: 'Taban alanı',
        detail: '3 · 4 = 12 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'V = 12 · 7 = 84 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  // Cube of edge 2√2 at 60 px per cm; the section BCHE is shaded.
  {
    id: 'prisms-16',
    topic: 'Küpün köşegen kesitinden hacim',
    stem: [],
    given: ['ABCDEFGH bir küptür.', 'A(BCHE) = 8√2 cm²'],
    ask: 'Yukarıdaki verilere göre, küpün hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '8√2' },
      { key: 'B', text: '12√2' },
      { key: 'C', text: '16' },
      { key: 'D', text: '16√2' },
      { key: 'E', text: '24√2' },
    ],
    answer: 'D',
    hint: 'BCHE bir dikdörtgendir; kenarlarından biri küpün ayrıtı, diğeri bir yüz köşegenidir.',
    solution: [
      {
        title: 'Kesitin kenarları',
        detail:
          'Küpün ayrıtı a olsun. |BC| = a, [CH] ise DCGH yüzünün köşegeni olduğundan |CH| = a√2 dir.',
      },
      {
        title: 'Alan denklemi',
        detail: 'A(BCHE) = a · a√2 = a²√2 = 8√2 ⇒ a² = 8.',
      },
      {
        title: 'Ayrıt',
        detail: 'a = √8 = 2√2 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = a³ = (2√2)³ = 16√2 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -8 400 284',
      caption: 'Şekil 10',
      label:
        'ABCDEFGH küpü; alt yüz ABCD, üst yüz EFGH. B, C, H ve E köşelerinden geçen BCHE dikdörtgeni taralı.',
      svg: `
          <path class="shade" d="M254.9,252.0 L314.9,192.0 L145.1,22.3 L85.1,82.3 Z"/>
          <path class="hid" d="M85.1,252.0 L145.1,192.0 L314.9,192.0"/>
          <path class="hid" d="M145.1,192.0 L145.1,22.3"/>
          <path class="ln" d="M85.1,252.0 L254.9,252.0 L314.9,192.0 L314.9,22.3 L145.1,22.3 L85.1,82.3 Z"/>
          <path class="ln" d="M85.1,82.3 L254.9,82.3 L314.9,22.3"/>
          <path class="ln" d="M254.9,252.0 L254.9,82.3"/>
          <path class="ln" d="M254.9,252.0 L85.1,82.3"/>
          <path class="hid" d="M314.9,192.0 L145.1,22.3"/>
          <circle class="pt" cx="85.1" cy="252.0" r="3.2"/>
          <circle class="pt" cx="254.9" cy="252.0" r="3.2"/>
          <circle class="pt" cx="314.9" cy="192.0" r="3.2"/>
          <circle class="pt" cx="145.1" cy="192.0" r="3.2"/>
          <circle class="pt" cx="85.1" cy="82.3" r="3.2"/>
          <circle class="pt" cx="254.9" cy="82.3" r="3.2"/>
          <circle class="pt" cx="314.9" cy="22.3" r="3.2"/>
          <circle class="pt" cx="145.1" cy="22.3" r="3.2"/>
          <text x="77.1" y="268.0" text-anchor="end">A</text>
          <text x="262.9" y="268.0">B</text>
          <text x="324.9" y="198.0">C</text>
          <text x="135.1" y="184.0" text-anchor="end">D</text>
          <text x="75.1" y="88.3" text-anchor="end">E</text>
          <text x="262.9" y="100.3">F</text>
          <text x="324.9" y="16.3">G</text>
          <text x="145.1" y="10.3" text-anchor="middle">H</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 17
  // Regular hexagonal prism, base edge 2, height 6, at 36 px per cm; the base
  // is shaded.
  {
    id: 'prisms-17',
    topic: 'Düzgün altıgen dik prizmanın hacmi',
    stem: [],
    ask: 'Yukarıda verilen taban ayrıtı 2 cm ve yüksekliği 6 cm olan düzgün altıgen dik prizmanın hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '24√3' },
      { key: 'B', text: '30√3' },
      { key: 'C', text: '36√3' },
      { key: 'D', text: '42√3' },
      { key: 'E', text: '48√3' },
    ],
    answer: 'C',
    hint: 'Düzgün altıgen, kenarı altıgenin kenarına eşit altı eşkenar üçgenden oluşur.',
    solution: [
      {
        title: 'Bir eşkenar üçgenin alanı',
        detail: 'Kenarı 2 cm olan eşkenar üçgenin alanı 2²√3 / 4 = √3 cm².',
      },
      {
        title: 'Taban alanı',
        detail: 'Düzgün altıgen altı eşkenar üçgenden oluşur: 6 · √3 = 6√3 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'V = taban alanı · yükseklik = 6√3 · 6 = 36√3 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 38 400 302',
      caption: 'Şekil 11',
      label: 'Düzgün altıgen dik prizma; taban ayrıtı 2 cm, yüksekliği 6 cm. Alt taban taralı.',
      svg: `
          <path class="shade" d="M272.0,292.0 L258.0,270.0 L186.0,270.0 L128.0,292.0 L142.0,314.0 L214.0,314.0 Z"/>
          <path class="hid" d="M272.0,292.0 L258.0,270.0 L186.0,270.0 L128.0,292.0"/>
          <path class="hid" d="M258.0,270.0 L258.0,54.0"/>
          <path class="hid" d="M186.0,270.0 L186.0,54.0"/>
          <path class="ln" d="M128.0,292.0 L142.0,314.0 L214.0,314.0 L272.0,292.0"/>
          <path class="ln" d="M272.0,76.0 L258.0,54.0 L186.0,54.0 L128.0,76.0 L142.0,98.0 L214.0,98.0 Z"/>
          <path class="ln" d="M272.0,292.0 L272.0,76.0"/>
          <path class="ln" d="M128.0,292.0 L128.0,76.0"/>
          <path class="ln" d="M142.0,314.0 L142.0,98.0"/>
          <path class="ln" d="M214.0,314.0 L214.0,98.0"/>
          <text class="val" x="178.0" y="334.0" text-anchor="middle">2</text>
          <text class="val" x="280.0" y="190.0">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 18
  // Box 12 × 6 × 4 at 20 px per cm; depth at half scale along 45°.
  {
    id: 'prisms-18',
    topic: 'Dikdörtgenler prizmasında uzaklık',
    stem: [],
    given: [
      'ABCDEFGH bir dikdörtgenler prizmasıdır.',
      '|AB| = 12 cm, |BC| = 6 cm, |AE| = 4 cm',
      '|ET| = |TH|',
    ],
    ask: 'Yukarıdaki verilere göre, |BT| kaç cm dir?',
    choices: [
      { key: 'A', text: '11' },
      { key: 'B', text: '12' },
      { key: 'C', text: '4√10' },
      { key: 'D', text: '13' },
      { key: 'E', text: '15' },
    ],
    answer: 'D',
    hint: '[BE] köşegenini çiz; [EH] ayrıtı ABFE yüzüne diktir.',
    solution: [
      {
        title: 'Yüz köşegeni',
        detail: 'ABFE dikdörtgeninde |BE|² = 12² + 4² = 160.',
      },
      {
        title: '|ET|',
        detail: '|EH| = |BC| = 6 cm ve T orta nokta olduğundan |ET| = 3 cm.',
      },
      {
        title: 'Dik üçgen',
        detail: '[EH] ayrıtı ABFE yüzüne dik olduğundan BET üçgeni E de dik açılıdır.',
      },
      {
        title: 'Sonuç',
        detail: '|BT|² = 160 + 3² = 169, dolayısıyla |BT| = 13 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 14 400 180',
      caption: 'Şekil 12',
      label:
        'ABCDEFGH dikdörtgenler prizması; |AB| = 12 cm, |BC| = 6 cm, |AE| = 4 cm. T noktası [EH] ayrıtının orta noktası, |ET| = |TH|, ve B ile T birleştirilmiş.',
      svg: `
          <path class="hid" d="M58.8,160.0 L101.2,117.6 L341.2,117.6"/>
          <path class="hid" d="M101.2,117.6 L101.2,37.6"/>
          <path class="ln" d="M58.8,160.0 L298.8,160.0 L341.2,117.6 L341.2,37.6 L101.2,37.6 L58.8,80.0 Z"/>
          <path class="ln" d="M58.8,80.0 L298.8,80.0 L341.2,37.6"/>
          <path class="ln" d="M298.8,160.0 L298.8,80.0"/>
          <path class="ln" d="M298.8,160.0 L80.0,58.8"/>
          <path class="tick" d="M65.9,65.9 L72.9,72.9"/>
          <path class="tick" d="M87.1,44.6 L94.1,51.7"/>
          <circle class="pt" cx="58.8" cy="160.0" r="3.2"/>
          <circle class="pt" cx="298.8" cy="160.0" r="3.2"/>
          <circle class="pt" cx="341.2" cy="117.6" r="3.2"/>
          <circle class="pt" cx="101.2" cy="117.6" r="3.2"/>
          <circle class="pt" cx="58.8" cy="80.0" r="3.2"/>
          <circle class="pt" cx="298.8" cy="80.0" r="3.2"/>
          <circle class="pt" cx="341.2" cy="37.6" r="3.2"/>
          <circle class="pt" cx="101.2" cy="37.6" r="3.2"/>
          <circle class="pt" cx="80.0" cy="58.8" r="3.2"/>
          <text x="50.8" y="176.0" text-anchor="end">A</text>
          <text x="306.8" y="176.0">B</text>
          <text x="351.2" y="123.6">C</text>
          <text x="109.2" y="133.6">D</text>
          <text x="48.8" y="86.0" text-anchor="end">E</text>
          <text x="306.8" y="98.0">F</text>
          <text x="351.2" y="31.6">G</text>
          <text x="101.2" y="25.6" text-anchor="middle">H</text>
          <text x="70.0" y="48.8" text-anchor="end">T</text>
          <text class="val" x="178.8" y="182.0" text-anchor="middle">12</text>
          <text class="val" x="328.0" y="152.0">6</text>
          <text class="val" x="50.8" y="126.0" text-anchor="end">4</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 14 400 180',
      caption: 'Şekil 12',
      label:
        'Aynı prizmada ABFE yüzünün [BE] köşegeni kesikli çizilmiş; BET üçgeni E de dik açılıdır.',
      svg: `
          <path class="hid" d="M58.8,160.0 L101.2,117.6 L341.2,117.6"/>
          <path class="hid" d="M101.2,117.6 L101.2,37.6"/>
          <path class="ln" d="M58.8,160.0 L298.8,160.0 L341.2,117.6 L341.2,37.6 L101.2,37.6 L58.8,80.0 Z"/>
          <path class="ln" d="M58.8,80.0 L298.8,80.0 L341.2,37.6"/>
          <path class="ln" d="M298.8,160.0 L298.8,80.0"/>
          <path class="ln" d="M298.8,160.0 L80.0,58.8"/>
          <path class="tick" d="M65.9,65.9 L72.9,72.9"/>
          <path class="tick" d="M87.1,44.6 L94.1,51.7"/>
          <circle class="pt" cx="58.8" cy="160.0" r="3.2"/>
          <circle class="pt" cx="298.8" cy="160.0" r="3.2"/>
          <circle class="pt" cx="341.2" cy="117.6" r="3.2"/>
          <circle class="pt" cx="101.2" cy="117.6" r="3.2"/>
          <circle class="pt" cx="58.8" cy="80.0" r="3.2"/>
          <circle class="pt" cx="298.8" cy="80.0" r="3.2"/>
          <circle class="pt" cx="341.2" cy="37.6" r="3.2"/>
          <circle class="pt" cx="101.2" cy="37.6" r="3.2"/>
          <circle class="pt" cx="80.0" cy="58.8" r="3.2"/>
          <text x="50.8" y="176.0" text-anchor="end">A</text>
          <text x="306.8" y="176.0">B</text>
          <text x="351.2" y="123.6">C</text>
          <text x="109.2" y="133.6">D</text>
          <text x="48.8" y="86.0" text-anchor="end">E</text>
          <text x="306.8" y="98.0">F</text>
          <text x="351.2" y="31.6">G</text>
          <text x="101.2" y="25.6" text-anchor="middle">H</text>
          <text x="70.0" y="48.8" text-anchor="end">T</text>
          <text class="val" x="178.8" y="182.0" text-anchor="middle">12</text>
          <text class="val" x="328.0" y="152.0">6</text>
          <text class="val" x="50.8" y="126.0" text-anchor="end">4</text>
          <path class="aux" d="M298.8,160.0 L58.8,80.0"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 19
  {
    id: 'prisms-19',
    topic: 'Küpte cisim köşegeni ile ayrıt',
    stem: [],
    ask: 'Bir küpün cisim köşegeni bir ayrıtından 4 cm uzun ise, küpün cisim köşegeni kaç cm dir?',
    choices: [
      { key: 'A', text: '2 + 2√3' },
      { key: 'B', text: '4 + 2√3' },
      { key: 'C', text: '3 + 3√3' },
      { key: 'D', text: '4 + 4√3' },
      { key: 'E', text: '6 + 2√3' },
    ],
    answer: 'E',
    hint: 'Ayrıtı a olan küpün cisim köşegeni a√3 tür; farkı a cinsinden yaz.',
    solution: [
      {
        title: 'Denklem',
        detail: 'Ayrıt a ise a√3 − a = 4, yani a(√3 − 1) = 4.',
      },
      {
        title: 'Ayrıt',
        detail: 'a = 4 / (√3 − 1) = 4(√3 + 1) / 2 = 2√3 + 2 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Cisim köşegeni a√3 = (2√3 + 2)√3 = 6 + 2√3 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 20
  {
    id: 'prisms-20',
    topic: 'Eşkenar üçgen prizmanın yanal alanı',
    stem: ['Tabanı eşkenar üçgen olan bir dik prizmanın yüksekliği 6 cm ve hacmi 54√3 cm³ tür.'],
    ask: 'Buna göre, prizmanın yanal alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '108' },
      { key: 'B', text: '120' },
      { key: 'C', text: '126' },
      { key: 'D', text: '144' },
      { key: 'E', text: '162' },
    ],
    answer: 'A',
    hint: 'Hacimden taban alanını, taban alanından da taban kenarını bul.',
    solution: [
      {
        title: 'Taban alanı',
        detail: '54√3 / 6 = 9√3 cm².',
      },
      {
        title: 'Taban kenarı',
        detail: 'a²√3 / 4 = 9√3 ⇒ a² = 36 ⇒ a = 6 cm.',
      },
      {
        title: 'Yanal yüzler',
        detail: 'Yanal yüzler, kenarları 6 cm ve 6 cm olan üç dikdörtgendir.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanal alan 3 · 6 · 6 = 108 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'prisms-21',
    topic: 'Hacimden ayrıt, yüzey köşegeni',
    stem: ['Ayrıtları 5 cm, 12 cm ve a cm olan bir dikdörtgenler prizmasının hacmi 540 cm³ tür.'],
    ask: 'Buna göre, prizmanın yüzey köşegenlerinden biri aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '11' },
      { key: 'B', text: '12' },
      { key: 'C', text: '14' },
      { key: 'D', text: '15' },
      { key: 'E', text: '17' },
    ],
    answer: 'D',
    hint: 'Önce hacimden a yı bul; sonra her yüzün köşegenini Pisagor ile hesapla.',
    solution: [
      {
        title: 'Üçüncü ayrıt',
        detail: '5 · 12 · a = 540 ⇒ 60a = 540 ⇒ a = 9 cm.',
      },
      {
        title: 'Yüz köşegenleri',
        detail: '√(5² + 12²) = 13, √(5² + 9²) = √106, √(12² + 9²) = √225 = 15.',
      },
      {
        title: 'Sonuç',
        detail: 'Seçeneklerde yalnızca 15 yer alır; cevap 15 tir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 22
  {
    id: 'prisms-22',
    topic: 'Kare dik prizmanın yanal alanı',
    stem: [],
    ask: 'Taban çevresi 20 cm olan bir kare dik prizmanın yüksekliği 9 cm ise prizmanın yanal alanları toplamı kaç cm² dir?',
    choices: [
      { key: 'A', text: '90' },
      { key: 'B', text: '120' },
      { key: 'C', text: '135' },
      { key: 'D', text: '150' },
      { key: 'E', text: '180' },
    ],
    answer: 'E',
    hint: 'Dik prizmada yanal alan, taban çevresi ile yüksekliğin çarpımıdır.',
    solution: [
      {
        title: 'Taban kenarı',
        detail: 'Kare tabanın çevresi 20 cm olduğundan bir kenarı 20 / 4 = 5 cm dir.',
      },
      {
        title: 'Yanal yüzler',
        detail: 'Yanal yüzler, kenarları 5 cm ve 9 cm olan dört eş dikdörtgendir.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanal alan 4 · 5 · 9 = 20 · 9 = 180 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  {
    id: 'prisms-23',
    topic: 'Küpün içindeki en büyük silindir',
    stem: [],
    ask: 'Bir küpün içine yerleştirilebilecek en büyük dik silindirin tüm alanının küpün tüm alanına oranı kaçtır?',
    choices: [
      { key: 'A', text: 'π/2' },
      { key: 'B', text: 'π/3' },
      { key: 'C', text: 'π/4' },
      { key: 'D', text: 'π/6' },
      { key: 'E', text: 'π/8' },
    ],
    answer: 'C',
    hint: 'En büyük silindirin tabanı küpün bir yüzüne içten teğet çemberdir, yüksekliği de küpün ayrıtıdır.',
    solution: [
      {
        title: 'Silindirin boyutları',
        detail: 'Küpün ayrıtı a ise silindirin yarıçapı a / 2, yüksekliği a dır.',
      },
      {
        title: 'Silindirin tüm alanı',
        detail: '2 · π(a / 2)² + 2π(a / 2) · a = πa² / 2 + πa² = 3πa² / 2.',
      },
      {
        title: 'Küpün tüm alanı',
        detail: 'Küpün altı yüzü vardır: 6a².',
      },
      {
        title: 'Sonuç',
        detail: 'Oran (3πa² / 2) / 6a² = 3π / 12 = π / 4 tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24
  // Box 6 × 5 × 4 at 30 px per metre, depth drawn at half scale along 45°;
  // the water reaches 3 of the 4 metres.
  {
    id: 'prisms-24',
    topic: 'Kısmen dolu deponun yüksekliği',
    given: ['|AB| = 6 metre', '|BC| = 5 metre', '|AA′| = h'],
    stem: [
      'Yukarıdaki şekilde dikdörtgenler prizması biçiminde bir su deposu görülmektedir. Depoda 90 metreküp su vardır ve su, deponun 3/4 ünü doldurmaktadır.',
    ],
    ask: 'Buna göre, |AA′| = h kaç metredir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'B',
    hint: 'Önce deponun tamamının hacmini bul.',
    solution: [
      {
        title: 'Deponun hacmi',
        detail: 'Su deponun 3/4 ü olduğundan deponun hacmi 90 · 4 / 3 = 120 m³ tür.',
      },
      {
        title: 'Taban alanı',
        detail: 'Taban alanı |AB| · |BC| = 6 · 5 = 30 m² dir.',
      },
      {
        title: 'Sonuç',
        detail: '30 · h = 120 ⇒ h = 4 metredir.',
      },
    ],
    figure: {
      viewBox: '0 20 400 222',
      caption: 'Şekil 13',
      label:
        'ABCDA′B′C′D′ dikdörtgenler prizması biçiminde bir su deposu; |AB| = 6 metre, |BC| = 5 metre, |AA′| = h. Deponun alt kısmı suyla dolu olarak taranmış.',
      svg: `
          <path class="shade" d="M90.0,215.0 L270.0,215.0 L323.0,162.0 L323.0,72.0 L270.0,125.0 L90.0,125.0 Z"/>
          <path class="hid" d="M90.0,215.0 L143.0,162.0 L323.0,162.0"/>
          <path class="hid" d="M143.0,162.0 L143.0,42.0"/>
          <path class="ln" d="M90.0,215.0 L270.0,215.0 L323.0,162.0 L323.0,42.0 L143.0,42.0 L90.0,95.0 Z"/>
          <path class="ln" d="M90.0,95.0 L270.0,95.0 L323.0,42.0"/>
          <path class="ln" d="M270.0,215.0 L270.0,95.0"/>
          <path class="ln" d="M90.0,125.0 L270.0,125.0 L323.0,72.0"/>
          <circle class="pt" cx="90.0" cy="215.0" r="3.2"/>
          <circle class="pt" cx="270.0" cy="215.0" r="3.2"/>
          <circle class="pt" cx="323.0" cy="162.0" r="3.2"/>
          <circle class="pt" cx="143.0" cy="162.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="95.0" r="3.2"/>
          <circle class="pt" cx="270.0" cy="95.0" r="3.2"/>
          <circle class="pt" cx="323.0" cy="42.0" r="3.2"/>
          <circle class="pt" cx="143.0" cy="42.0" r="3.2"/>
          <text x="82.0" y="231.0" text-anchor="end">A</text>
          <text x="278.0" y="231.0">B</text>
          <text x="333.0" y="168.0">C</text>
          <text x="151.0" y="178.0">D</text>
          <text x="80.0" y="101.0" text-anchor="end">A′</text>
          <text x="278.0" y="111.0">B′</text>
          <text x="333.0" y="36.0">C′</text>
          <text x="143.0" y="30.0" text-anchor="middle">D′</text>
          <text class="val" x="180.0" y="237.0" text-anchor="middle">6</text>
          <text class="val" x="306.5" y="202.5">5</text>
          <text class="val" x="80.0" y="161.0" text-anchor="end">h</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 25
  {
    id: 'prisms-25',
    topic: 'Taban alanından silindirin yanal alanı',
    stem: ['Yüksekliği 6 cm olan bir dik silindirin taban alanı 25π cm² dir.'],
    ask: 'Buna göre, bu silindirin yanal alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '60π' },
      { key: 'B', text: '65π' },
      { key: 'C', text: '70π' },
      { key: 'D', text: '75π' },
      { key: 'E', text: '80π' },
    ],
    answer: 'A',
    hint: 'Taban alanından yarıçapı bul; yanal alan 2πr · h dir.',
    solution: [
      {
        title: 'Yarıçap',
        detail: 'πr² = 25π ⇒ r² = 25 ⇒ r = 5 cm.',
      },
      {
        title: 'Taban çevresi',
        detail: '2πr = 2π · 5 = 10π cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanal alan 10π · 6 = 60π cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26
  // Square prism with base edge 4√2 and height 4 at 30 px per cm, depth drawn
  // at half scale along 45°. L is the centre of ABCD and K the centre of EFGH.
  {
    id: 'prisms-26',
    topic: 'Kare prizmada kesit alanından cisim köşegeni',
    given: [
      'Şekildeki kare prizmanın hacmi 128 cm³ tür.',
      '|AL| = |LC|',
      'K ∈ [EG]',
      '[KL] ⊥ [AC]',
      'A(KLC) = 8 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, prizmanın cisim köşegeni kaç cm dir?',
    choices: [
      { key: 'A', text: '2√5' },
      { key: 'B', text: '3√5' },
      { key: 'C', text: '4√5' },
      { key: 'D', text: '5√5' },
      { key: 'E', text: '6√5' },
    ],
    answer: 'C',
    hint: '[KL] prizmanın yüksekliğine, [LC] de taban köşegeninin yarısına eşittir.',
    solution: [
      {
        title: 'Üçgenin kenarları',
        detail:
          'ACGE dikdörtgeninde [KL] ⊥ [AC] olduğundan |KL| = h dir. Taban kenarı a ise |AC| = a√2, |LC| = a√2 / 2 olur.',
      },
      {
        title: 'Alan denklemi',
        detail: 'A(KLC) = h · (a√2 / 2) / 2 = 8 ⇒ a · h = 16√2.',
      },
      {
        title: 'Hacim denklemi',
        detail: 'a² · h = 128 ⇒ a = 128 / (16√2) = 4√2 cm ve h = 16√2 / (4√2) = 4 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Cisim köşegeni √(a² + a² + h²) = √(32 + 32 + 16) = √80 = 4√5 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 50 400 226',
      caption: 'Şekil 14',
      label:
        'ABCDEFGH kare prizması; L noktası [AC] taban köşegeninin orta noktası, |AL| = |LC|. K noktası [EG] üst yüz köşegeni üzerinde, [KL] ⊥ [AC] ve KLC üçgeni taranmış.',
      svg: `
          <path class="shade" d="M194.9,100.0 L194.9,220.0 L309.7,190.0 Z"/>
          <path class="hid" d="M80.0,250.0 L140.0,190.0 L309.7,190.0"/>
          <path class="hid" d="M140.0,190.0 L140.0,70.0"/>
          <path class="hid" d="M80.0,250.0 L309.7,190.0"/>
          <path class="hid" d="M194.9,100.0 L194.9,220.0"/>
          <path class="hid" d="M194.9,100.0 L309.7,190.0"/>
          <path class="ln" d="M80.0,250.0 L249.7,250.0 L309.7,190.0 L309.7,70.0 L140.0,70.0 L80.0,130.0 Z"/>
          <path class="ln" d="M80.0,130.0 L249.7,130.0 L309.7,70.0"/>
          <path class="ln" d="M249.7,250.0 L249.7,130.0"/>
          <path class="ln" d="M80.0,130.0 L309.7,70.0"/>
          <path class="tick" d="M136.2,230.2 L138.7,239.8"/>
          <path class="tick" d="M251.0,200.2 L253.5,209.8"/>
          <circle class="pt" cx="80.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="249.7" cy="250.0" r="3.2"/>
          <circle class="pt" cx="309.7" cy="190.0" r="3.2"/>
          <circle class="pt" cx="140.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="130.0" r="3.2"/>
          <circle class="pt" cx="249.7" cy="130.0" r="3.2"/>
          <circle class="pt" cx="309.7" cy="70.0" r="3.2"/>
          <circle class="pt" cx="140.0" cy="70.0" r="3.2"/>
          <circle class="pt" cx="194.9" cy="220.0" r="3.2"/>
          <circle class="pt" cx="194.9" cy="100.0" r="3.2"/>
          <text x="72.0" y="266.0" text-anchor="end">A</text>
          <text x="257.7" y="266.0">B</text>
          <text x="319.7" y="196.0">C</text>
          <text x="132.0" y="184.0" text-anchor="end">D</text>
          <text x="72.0" y="136.0" text-anchor="end">E</text>
          <text x="257.7" y="146.0">F</text>
          <text x="317.7" y="64.0">G</text>
          <text x="140.0" y="58.0" text-anchor="middle">H</text>
          <text x="194.9" y="238.0" text-anchor="middle">L</text>
          <text x="194.9" y="90.0" text-anchor="middle">K</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 50 400 226',
      caption: 'Şekil 14',
      label: 'Aynı prizmada [AG] cisim köşegeni kesikli çizilmiş.',
      svg: `
          <path class="shade" d="M194.9,100.0 L194.9,220.0 L309.7,190.0 Z"/>
          <path class="hid" d="M80.0,250.0 L140.0,190.0 L309.7,190.0"/>
          <path class="hid" d="M140.0,190.0 L140.0,70.0"/>
          <path class="hid" d="M80.0,250.0 L309.7,190.0"/>
          <path class="hid" d="M194.9,100.0 L194.9,220.0"/>
          <path class="hid" d="M194.9,100.0 L309.7,190.0"/>
          <path class="ln" d="M80.0,250.0 L249.7,250.0 L309.7,190.0 L309.7,70.0 L140.0,70.0 L80.0,130.0 Z"/>
          <path class="ln" d="M80.0,130.0 L249.7,130.0 L309.7,70.0"/>
          <path class="ln" d="M249.7,250.0 L249.7,130.0"/>
          <path class="ln" d="M80.0,130.0 L309.7,70.0"/>
          <path class="tick" d="M136.2,230.2 L138.7,239.8"/>
          <path class="tick" d="M251.0,200.2 L253.5,209.8"/>
          <circle class="pt" cx="80.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="249.7" cy="250.0" r="3.2"/>
          <circle class="pt" cx="309.7" cy="190.0" r="3.2"/>
          <circle class="pt" cx="140.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="130.0" r="3.2"/>
          <circle class="pt" cx="249.7" cy="130.0" r="3.2"/>
          <circle class="pt" cx="309.7" cy="70.0" r="3.2"/>
          <circle class="pt" cx="140.0" cy="70.0" r="3.2"/>
          <circle class="pt" cx="194.9" cy="220.0" r="3.2"/>
          <circle class="pt" cx="194.9" cy="100.0" r="3.2"/>
          <text x="72.0" y="266.0" text-anchor="end">A</text>
          <text x="257.7" y="266.0">B</text>
          <text x="319.7" y="196.0">C</text>
          <text x="132.0" y="184.0" text-anchor="end">D</text>
          <text x="72.0" y="136.0" text-anchor="end">E</text>
          <text x="257.7" y="146.0">F</text>
          <text x="317.7" y="64.0">G</text>
          <text x="140.0" y="58.0" text-anchor="middle">H</text>
          <text x="194.9" y="238.0" text-anchor="middle">L</text>
          <text x="194.9" y="90.0" text-anchor="middle">K</text>
          <path class="aux" d="M80.0,250.0 L309.7,70.0"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 27
  // Right triangular prism, right angle at C: |AC| = 5 (depth), |CB| = 12,
  // height 6, at 22 px per cm with depth drawn at half scale along 45°.
  {
    id: 'prisms-27',
    topic: 'Dik üçgen prizmada hacimden kenar',
    stem: ['Şekildeki dik üçgen prizmanın hacmi 180 cm³ tür. Taban üçgeninde m(ACB) = 90° dir.'],
    ask: '|AC| = 5 cm ve |CF| = 6 cm olduğuna göre, |AB| kaç cm dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '13' },
      { key: 'C', text: '5√7' },
      { key: 'D', text: '14' },
      { key: 'E', text: '15' },
    ],
    answer: 'B',
    hint: 'Hacmi yüksekliğe bölerek taban alanını bul.',
    solution: [
      {
        title: 'Taban alanı',
        detail: 'Yükseklik |CF| = 6 cm olduğundan taban alanı 180 / 6 = 30 cm² dir.',
      },
      {
        title: '|BC|',
        detail:
          'Taban C de dik açılı olduğundan |AC| · |BC| / 2 = 30 ⇒ 5 · |BC| = 60 ⇒ |BC| = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|AB|² = 5² + 12² = 169 ⇒ |AB| = 13 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 44 400 220',
      caption: 'Şekil 15',
      label:
        'ABCDEF dik üçgen prizması; taban üçgeni ABC, C köşesinde dik açılı. |AC| = 5 cm ve yan ayrıt |CF| = 6 cm.',
      svg: `
          <path class="hid" d="M62.0,238.0 L100.9,199.1 L364.9,199.1"/>
          <path class="hid" d="M100.9,199.1 L100.9,67.1"/>
          <path class="hid" d="M93.9,206.1 L113.7,206.1 L120.7,199.1"/>
          <path class="ln" d="M62.0,238.0 L364.9,199.1 L364.9,67.1 L100.9,67.1 L62.0,106.0 Z"/>
          <path class="ln" d="M62.0,106.0 L364.9,67.1"/>
          <circle class="pt" cx="62.0" cy="238.0" r="3.2"/>
          <circle class="pt" cx="364.9" cy="199.1" r="3.2"/>
          <circle class="pt" cx="100.9" cy="199.1" r="3.2"/>
          <circle class="pt" cx="62.0" cy="106.0" r="3.2"/>
          <circle class="pt" cx="364.9" cy="67.1" r="3.2"/>
          <circle class="pt" cx="100.9" cy="67.1" r="3.2"/>
          <text x="54.0" y="254.0" text-anchor="end">A</text>
          <text x="374.9" y="215.1">B</text>
          <text x="110.9" y="217.1">C</text>
          <text x="54.0" y="112.0" text-anchor="end">D</text>
          <text x="374.9" y="67.1">E</text>
          <text x="100.9" y="55.1" text-anchor="middle">F</text>
          <text class="val" x="73.4" y="218.6" text-anchor="end">5</text>
          <text class="val" x="108.9" y="139.1">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 28
  // Oblique cylinder, radius 3 and generator 4√3 at 60° to the base, at
  // 24 px per cm; the bases are drawn as ellipses flattened to 0.3.
  {
    id: 'prisms-28',
    topic: 'Eğik silindirin hacmi',
    given: ['Şekil eğik silindirdir.', 'C ∈ [DE]', 'm(BCE) = 60°', '|AD| = 4√3 cm'],
    stem: [],
    ask: 'Yukarıdaki şekilde verilen eğik silindirin taban yarıçapı 3 cm olduğuna göre, hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '27π' },
      { key: 'B', text: '36π' },
      { key: 'C', text: '45π' },
      { key: 'D', text: '54π' },
      { key: 'E', text: '72π' },
    ],
    answer: 'D',
    hint: 'Eğik silindirin hacmi taban alanı ile dik yüksekliğin çarpımıdır; yüksekliği ana doğrudan bul.',
    solution: [
      {
        title: 'Ana doğru',
        detail: '[AD] ve [BC] ana doğrulardır: |BC| = |AD| = 4√3 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'B den taban düzlemine inilen dikmenin uzunluğu h = 4√3 · sin 60° = 4√3 · √3 / 2 = 6 cm.',
      },
      {
        title: 'Taban alanı',
        detail: 'π · 3² = 9π cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Hacim 9π · 6 = 54π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 106 400 206',
      caption: 'Şekil 16',
      label:
        'Eğik silindir; alt tabanın merkezi O, çapı [DC] ve C noktası [DE] üzerinde. Ana doğrular [DA] ve [CB], |AD| = 4√3 cm ve m(BCE) = 60°.',
      svg: `
          <path class="hid" d="M53.0,280.0 L53.3,278.1 L54.1,276.2 L55.5,274.4 L57.3,272.6 L59.7,270.9 L62.6,269.2 L66.0,267.6 L69.8,266.1 L74.1,264.7 L78.7,263.5 L83.7,262.3 L89.0,261.3 L94.6,260.4 L100.4,259.7 L106.4,259.1 L112.5,258.7 L118.7,258.5 L125.0,258.4 L131.3,258.5 L137.5,258.7 L143.6,259.1 L149.6,259.7 L155.4,260.4 L161.0,261.3 L166.3,262.3 L171.3,263.5 L175.9,264.7 L180.2,266.1 L184.0,267.6 L187.4,269.2 L190.3,270.9 L192.7,272.6 L194.5,274.4 L195.9,276.2 L196.7,278.1 L197.0,280.0"/>
          <path class="ln" d="M197.0,280.0 L196.7,281.9 L195.9,283.8 L194.5,285.6 L192.7,287.4 L190.3,289.1 L187.4,290.8 L184.0,292.4 L180.2,293.9 L175.9,295.3 L171.3,296.5 L166.3,297.7 L161.0,298.7 L155.4,299.6 L149.6,300.3 L143.6,300.9 L137.5,301.3 L131.3,301.5 L125.0,301.6 L118.7,301.5 L112.5,301.3 L106.4,300.9 L100.4,300.3 L94.6,299.6 L89.0,298.7 L83.7,297.7 L78.7,296.5 L74.1,295.3 L69.8,293.9 L66.0,292.4 L62.6,290.8 L59.7,289.1 L57.3,287.4 L55.5,285.6 L54.1,283.8 L53.3,281.9 L53.0,280.0"/>
          <path class="ln" d="M280.1,136.0 L279.0,139.8 L275.8,143.4 L270.5,146.8 L263.3,149.9 L254.4,152.5 L244.1,154.7 L232.8,156.3 L220.6,157.3 L208.1,157.6 L195.6,157.3 L183.5,156.3 L172.1,154.7 L161.9,152.5 L153.0,149.9 L145.8,146.8 L140.5,143.4 L137.2,139.8 L136.1,136.0 L137.2,132.2 L140.5,128.6 L145.8,125.2 L153.0,122.1 L161.9,119.5 L172.1,117.3 L183.5,115.7 L195.6,114.7 L208.1,114.4 L220.6,114.7 L232.8,115.7 L244.1,117.3 L254.4,119.5 L263.3,122.1 L270.5,125.2 L275.8,128.6 L279.0,132.2 Z"/>
          <path class="ln" d="M53.0,280.0 L136.1,136.0"/>
          <path class="ln" d="M197.0,280.0 L280.1,136.0"/>
          <path class="ln" d="M197.0,280.0 L237.0,280.0"/>
          <path class="hid" d="M53.0,280.0 L197.0,280.0"/>
          <path class="arc" d="M221.0,280.0 L220.9,277.9 L220.6,275.8 L220.2,273.8 L219.6,271.8 L218.8,269.9 L217.8,268.0 L216.7,266.2 L215.4,264.6 L214.0,263.0 L212.4,261.6 L210.8,260.3 L209.0,259.2"/>
          <circle class="pt" cx="136.1" cy="136.0" r="3.2"/>
          <circle class="pt" cx="280.1" cy="136.0" r="3.2"/>
          <circle class="pt" cx="197.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="53.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="237.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="125.0" cy="280.0" r="3.2"/>
          <text x="136.1" y="124.0" text-anchor="middle">A</text>
          <text x="280.1" y="124.0" text-anchor="middle">B</text>
          <text x="197.0" y="302.0" text-anchor="middle">C</text>
          <text x="45.0" y="286.0" text-anchor="end">D</text>
          <text x="237.0" y="300.0" text-anchor="middle">E</text>
          <text x="125.0" y="272.0" text-anchor="middle">O</text>
          <text class="val" x="86.6" y="208.0" text-anchor="end">4√3</text>
          <text class="val" x="227.0" y="270.0">60°</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 106 400 206',
      caption: 'Şekil 16',
      label:
        'Aynı silindirde B den [DE] doğrusuna inilen dikme kesikli çizilmiş; bu dikme silindirin yüksekliğidir.',
      svg: `
          <path class="hid" d="M53.0,280.0 L53.3,278.1 L54.1,276.2 L55.5,274.4 L57.3,272.6 L59.7,270.9 L62.6,269.2 L66.0,267.6 L69.8,266.1 L74.1,264.7 L78.7,263.5 L83.7,262.3 L89.0,261.3 L94.6,260.4 L100.4,259.7 L106.4,259.1 L112.5,258.7 L118.7,258.5 L125.0,258.4 L131.3,258.5 L137.5,258.7 L143.6,259.1 L149.6,259.7 L155.4,260.4 L161.0,261.3 L166.3,262.3 L171.3,263.5 L175.9,264.7 L180.2,266.1 L184.0,267.6 L187.4,269.2 L190.3,270.9 L192.7,272.6 L194.5,274.4 L195.9,276.2 L196.7,278.1 L197.0,280.0"/>
          <path class="ln" d="M197.0,280.0 L196.7,281.9 L195.9,283.8 L194.5,285.6 L192.7,287.4 L190.3,289.1 L187.4,290.8 L184.0,292.4 L180.2,293.9 L175.9,295.3 L171.3,296.5 L166.3,297.7 L161.0,298.7 L155.4,299.6 L149.6,300.3 L143.6,300.9 L137.5,301.3 L131.3,301.5 L125.0,301.6 L118.7,301.5 L112.5,301.3 L106.4,300.9 L100.4,300.3 L94.6,299.6 L89.0,298.7 L83.7,297.7 L78.7,296.5 L74.1,295.3 L69.8,293.9 L66.0,292.4 L62.6,290.8 L59.7,289.1 L57.3,287.4 L55.5,285.6 L54.1,283.8 L53.3,281.9 L53.0,280.0"/>
          <path class="ln" d="M280.1,136.0 L279.0,139.8 L275.8,143.4 L270.5,146.8 L263.3,149.9 L254.4,152.5 L244.1,154.7 L232.8,156.3 L220.6,157.3 L208.1,157.6 L195.6,157.3 L183.5,156.3 L172.1,154.7 L161.9,152.5 L153.0,149.9 L145.8,146.8 L140.5,143.4 L137.2,139.8 L136.1,136.0 L137.2,132.2 L140.5,128.6 L145.8,125.2 L153.0,122.1 L161.9,119.5 L172.1,117.3 L183.5,115.7 L195.6,114.7 L208.1,114.4 L220.6,114.7 L232.8,115.7 L244.1,117.3 L254.4,119.5 L263.3,122.1 L270.5,125.2 L275.8,128.6 L279.0,132.2 Z"/>
          <path class="ln" d="M53.0,280.0 L136.1,136.0"/>
          <path class="ln" d="M197.0,280.0 L280.1,136.0"/>
          <path class="ln" d="M197.0,280.0 L237.0,280.0"/>
          <path class="hid" d="M53.0,280.0 L197.0,280.0"/>
          <path class="arc" d="M221.0,280.0 L220.9,277.9 L220.6,275.8 L220.2,273.8 L219.6,271.8 L218.8,269.9 L217.8,268.0 L216.7,266.2 L215.4,264.6 L214.0,263.0 L212.4,261.6 L210.8,260.3 L209.0,259.2"/>
          <circle class="pt" cx="136.1" cy="136.0" r="3.2"/>
          <circle class="pt" cx="280.1" cy="136.0" r="3.2"/>
          <circle class="pt" cx="197.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="53.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="237.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="125.0" cy="280.0" r="3.2"/>
          <text x="136.1" y="124.0" text-anchor="middle">A</text>
          <text x="280.1" y="124.0" text-anchor="middle">B</text>
          <text x="197.0" y="302.0" text-anchor="middle">C</text>
          <text x="45.0" y="286.0" text-anchor="end">D</text>
          <text x="237.0" y="300.0" text-anchor="middle">E</text>
          <text x="125.0" y="272.0" text-anchor="middle">O</text>
          <text class="val" x="86.6" y="208.0" text-anchor="end">4√3</text>
          <text class="val" x="227.0" y="270.0">60°</text>
          <path class="aux" d="M237.0,280.0 L280.1,280.0"/>
          <path class="aux" d="M280.1,136.0 L280.1,280.0"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 29
  // Square right prism, base edge 3√6 and height 6, at 26 px per cm.
  {
    id: 'prisms-29',
    topic: 'Cisim köşegeninin taban ile yaptığı açı',
    stem: [],
    given: [
      'ABCDEFGH bir kare dik prizmadır.',
      'Cisim köşegeni |BH| = 12 cm',
      'Cisim köşegeninin taban düzlemi ile yaptığı açı m(HBD) = 30°',
    ],
    ask: 'Yukarıdaki verilere göre, prizmanın hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '243' },
      { key: 'B', text: '288' },
      { key: 'C', text: '300' },
      { key: 'D', text: '324' },
      { key: 'E', text: '360' },
    ],
    answer: 'D',
    hint: 'HDB üçgeni D de dik açılıdır; 30° lik açıyla |HD| ve |BD| yi bul.',
    solution: [
      {
        title: 'Dik üçgen',
        detail: '[HD] taban düzlemine dik olduğundan HDB üçgeni D de dik açılıdır.',
      },
      {
        title: 'Yükseklik',
        detail: '|HD| = 12 · sin 30° = 6 cm.',
      },
      {
        title: 'Taban köşegeni',
        detail: '|BD| = 12 · cos 30° = 6√3 cm.',
      },
      {
        title: 'Taban ayrıtı',
        detail: 'Taban kenarı a ise a√2 = 6√3 ⇒ a² = 108 / 2 = 54 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'V = a² · h = 54 · 6 = 324 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -256 400 280',
      caption: 'Şekil 17',
      label:
        'ABCDEFGH kare dik prizması; alt yüz ABCD, üst yüz EFGH. [BH] cisim köşegeni 12 cm, [BD] taban köşegeni ve m(HBD) = 30°.',
      svg: `
          <path class="hid" d="M70.7,0.0 L138.2,-67.5 L329.3,-67.5"/>
          <path class="hid" d="M138.2,-67.5 L138.2,-223.5"/>
          <path class="hid" d="M261.8,0.0 L138.2,-67.5"/>
          <path class="ln" d="M70.7,0.0 L261.8,0.0 L329.3,-67.5 L329.3,-223.5 L138.2,-223.5 L70.7,-156.0 Z"/>
          <path class="ln" d="M70.7,-156.0 L261.8,-156.0 L329.3,-223.5"/>
          <path class="ln" d="M261.8,0.0 L261.8,-156.0"/>
          <path class="ln" d="M261.8,0.0 L138.2,-223.5"/>
          <path class="arc" d="M238.9,-12.5 L239.6,-13.5 L240.2,-14.6 L240.9,-15.6 L241.7,-16.5 L242.5,-17.5 L243.3,-18.3 L244.2,-19.2 L245.1,-20.0 L246.1,-20.8 L247.1,-21.5 L248.1,-22.1 L249.2,-22.8"/>
          <circle class="pt" cx="70.7" cy="0.0" r="3.2"/>
          <circle class="pt" cx="261.8" cy="0.0" r="3.2"/>
          <circle class="pt" cx="329.3" cy="-67.5" r="3.2"/>
          <circle class="pt" cx="138.2" cy="-67.5" r="3.2"/>
          <circle class="pt" cx="70.7" cy="-156.0" r="3.2"/>
          <circle class="pt" cx="261.8" cy="-156.0" r="3.2"/>
          <circle class="pt" cx="329.3" cy="-223.5" r="3.2"/>
          <circle class="pt" cx="138.2" cy="-223.5" r="3.2"/>
          <text x="62.7" y="16.0" text-anchor="end">A</text>
          <text x="269.8" y="16.0">B</text>
          <text x="339.3" y="-61.5">C</text>
          <text x="128.2" y="-73.5" text-anchor="end">D</text>
          <text x="60.7" y="-150.0" text-anchor="end">E</text>
          <text x="269.8" y="-138.0">F</text>
          <text x="339.3" y="-229.5">G</text>
          <text x="138.2" y="-235.5" text-anchor="middle">H</text>
          <text class="val" x="208.0" y="-107.8">12</text>
          <text class="val" x="230.6" y="-26.0" text-anchor="middle">30°</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 30
  // Cube of edge 8 at 22 px per cm; P is the midpoint of [CG].
  {
    id: 'prisms-30',
    topic: 'Küpte uzunluktan tüm alan',
    stem: [],
    given: ['ABCDEFGH bir küptür.', 'P ∈ [CG] ve |GP| = |PC|', '|AP| = 12 cm'],
    ask: 'Yukarıdaki şekilde verilenlere göre, küpün tüm alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '256' },
      { key: 'B', text: '320' },
      { key: 'C', text: '384' },
      { key: 'D', text: '432' },
      { key: 'E', text: '512' },
    ],
    answer: 'C',
    hint: '[AC] taban köşegenini çiz; [PC] ayrıtı tabana dik olduğundan ACP üçgeni C de dik açılıdır.',
    solution: [
      {
        title: 'Uzunluklar',
        detail: 'Küpün ayrıtı a olsun. |AC| = a√2 ve P orta nokta olduğundan |PC| = a / 2 dir.',
      },
      {
        title: 'Pisagor',
        detail: '|AP|² = |AC|² + |PC|² = 2a² + a² / 4 = 9a² / 4 ⇒ |AP| = 3a / 2.',
      },
      {
        title: 'Ayrıt',
        detail: '3a / 2 = 12 ⇒ a = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Tüm alan 6a² = 6 · 64 = 384 cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 -270 400 294',
      caption: 'Şekil 18',
      label:
        'ABCDEFGH küpü; P noktası [CG] ayrıtının orta noktası, |GP| = |PC|. A ile P birleştirilmiş ve |AP| = 12 cm.',
      svg: `
          <path class="hid" d="M80.9,0.0 L143.1,-62.2 L319.1,-62.2"/>
          <path class="hid" d="M143.1,-62.2 L143.1,-238.2"/>
          <path class="ln" d="M80.9,0.0 L256.9,0.0 L319.1,-62.2 L319.1,-238.2 L143.1,-238.2 L80.9,-176.0 Z"/>
          <path class="ln" d="M80.9,-176.0 L256.9,-176.0 L319.1,-238.2"/>
          <path class="ln" d="M256.9,0.0 L256.9,-176.0"/>
          <path class="hid" d="M80.9,0.0 L319.1,-150.2"/>
          <path class="tick" d="M324.1,-194.2 L314.1,-194.2"/>
          <path class="tick" d="M324.1,-106.2 L314.1,-106.2"/>
          <circle class="pt" cx="80.9" cy="0.0" r="3.2"/>
          <circle class="pt" cx="256.9" cy="0.0" r="3.2"/>
          <circle class="pt" cx="319.1" cy="-62.2" r="3.2"/>
          <circle class="pt" cx="143.1" cy="-62.2" r="3.2"/>
          <circle class="pt" cx="80.9" cy="-176.0" r="3.2"/>
          <circle class="pt" cx="256.9" cy="-176.0" r="3.2"/>
          <circle class="pt" cx="319.1" cy="-238.2" r="3.2"/>
          <circle class="pt" cx="143.1" cy="-238.2" r="3.2"/>
          <circle class="pt" cx="319.1" cy="-150.2" r="3.2"/>
          <text x="72.9" y="16.0" text-anchor="end">A</text>
          <text x="264.9" y="16.0">B</text>
          <text x="329.1" y="-56.2">C</text>
          <text x="133.1" y="-68.2" text-anchor="end">D</text>
          <text x="70.9" y="-170.0" text-anchor="end">E</text>
          <text x="264.9" y="-158.0">F</text>
          <text x="329.1" y="-244.2">G</text>
          <text x="143.1" y="-250.2" text-anchor="middle">H</text>
          <text x="329.1" y="-144.2">P</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -270 400 294',
      caption: 'Şekil 18',
      label: 'Aynı küpte [AC] taban köşegeni kesikli çizilmiş; ACP üçgeni C de dik açılıdır.',
      svg: `
          <path class="hid" d="M80.9,0.0 L143.1,-62.2 L319.1,-62.2"/>
          <path class="hid" d="M143.1,-62.2 L143.1,-238.2"/>
          <path class="ln" d="M80.9,0.0 L256.9,0.0 L319.1,-62.2 L319.1,-238.2 L143.1,-238.2 L80.9,-176.0 Z"/>
          <path class="ln" d="M80.9,-176.0 L256.9,-176.0 L319.1,-238.2"/>
          <path class="ln" d="M256.9,0.0 L256.9,-176.0"/>
          <path class="hid" d="M80.9,0.0 L319.1,-150.2"/>
          <path class="tick" d="M324.1,-194.2 L314.1,-194.2"/>
          <path class="tick" d="M324.1,-106.2 L314.1,-106.2"/>
          <circle class="pt" cx="80.9" cy="0.0" r="3.2"/>
          <circle class="pt" cx="256.9" cy="0.0" r="3.2"/>
          <circle class="pt" cx="319.1" cy="-62.2" r="3.2"/>
          <circle class="pt" cx="143.1" cy="-62.2" r="3.2"/>
          <circle class="pt" cx="80.9" cy="-176.0" r="3.2"/>
          <circle class="pt" cx="256.9" cy="-176.0" r="3.2"/>
          <circle class="pt" cx="319.1" cy="-238.2" r="3.2"/>
          <circle class="pt" cx="143.1" cy="-238.2" r="3.2"/>
          <circle class="pt" cx="319.1" cy="-150.2" r="3.2"/>
          <text x="72.9" y="16.0" text-anchor="end">A</text>
          <text x="264.9" y="16.0">B</text>
          <text x="329.1" y="-56.2">C</text>
          <text x="133.1" y="-68.2" text-anchor="end">D</text>
          <text x="70.9" y="-170.0" text-anchor="end">E</text>
          <text x="264.9" y="-158.0">F</text>
          <text x="329.1" y="-244.2">G</text>
          <text x="143.1" y="-250.2" text-anchor="middle">H</text>
          <text x="329.1" y="-144.2">P</text>
          <path class="aux" d="M80.9,0.0 L319.1,-62.2"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'prisms-31',
    topic: 'Ayrıtlar toplamı ve alandan cisim köşegeni',
    stem: [],
    ask: 'Ayrıtları a, b, c olan dikdörtgenler prizmasının alanı 52 cm² ve a + b + c = 9 cm olduğuna göre, bu dikdörtgenler prizmasının cisim köşegeninin uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '√26' },
      { key: 'B', text: '√29' },
      { key: 'C', text: '4√2' },
      { key: 'D', text: '√31' },
      { key: 'E', text: '6' },
    ],
    answer: 'B',
    hint: '(a + b + c)² açılımında 2(ab + bc + ca) terimi prizmanın alanıdır.',
    solution: [
      {
        title: 'Bağıntılar',
        detail: 'Alan 2(ab + bc + ca) = 52, cisim köşegeni d = √(a² + b² + c²) dir.',
      },
      {
        title: 'Kare açılımı',
        detail: '(a + b + c)² = a² + b² + c² + 2(ab + bc + ca) ⇒ 81 = a² + b² + c² + 52.',
      },
      {
        title: 'Kareler toplamı',
        detail: 'a² + b² + c² = 81 − 52 = 29.',
      },
      {
        title: 'Sonuç',
        detail: 'd = √29 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 32
  {
    id: 'prisms-32',
    topic: 'Silindirin alanlarından hacim',
    stem: [],
    ask: 'Bir silindirin yanal alanı 48π cm² ve tüm alanı 80π cm² ise, silindirin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '72π' },
      { key: 'B', text: '84π' },
      { key: 'C', text: '90π' },
      { key: 'D', text: '96π' },
      { key: 'E', text: '112π' },
    ],
    answer: 'D',
    hint: 'Tüm alandan yanal alanı çıkarınca iki taban alanı kalır.',
    solution: [
      {
        title: 'Taban alanları',
        detail: '2πr² = 80π − 48π = 32π ⇒ r² = 16 ⇒ r = 4 cm.',
      },
      {
        title: 'Yükseklik',
        detail: '2πrh = 48π ⇒ 2 · 4 · h = 48 ⇒ h = 6 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = πr²h = π · 16 · 6 = 96π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 33
  {
    id: 'prisms-33',
    topic: 'Orantılı ayrıtlar ve cisim köşegeni',
    stem: [],
    ask: 'Ayrıtları 2, 3, 6 sayıları ile orantılı olan dikdörtgenler prizmasının cisim köşegeni 14 cm ise hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '216' },
      { key: 'B', text: '240' },
      { key: 'C', text: '256' },
      { key: 'D', text: '272' },
      { key: 'E', text: '288' },
    ],
    answer: 'E',
    hint: 'Ayrıtları 2k, 3k, 6k al ve cisim köşegenini k cinsinden yaz.',
    solution: [
      {
        title: 'Ayrıtlar',
        detail: 'Ayrıtlar 2k, 3k ve 6k olsun.',
      },
      {
        title: 'Cisim köşegeni',
        detail: '√(4k² + 9k² + 36k²) = √(49k²) = 7k = 14 ⇒ k = 2.',
      },
      {
        title: 'Ayrıt uzunlukları',
        detail: '4 cm, 6 cm ve 12 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 4 · 6 · 12 = 288 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  {
    id: 'prisms-34',
    topic: 'Orantılı ayrıtlar ve hacimden ayrıt',
    stem: [],
    ask: 'Ayrıtları 2, 3, 4 ile orantılı olan bir dikdörtgenler prizmasının hacmi 648 cm³ olduğuna göre, bu prizmanın en uzun ayrıtının uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '10' },
      { key: 'C', text: '9' },
      { key: 'D', text: '8' },
      { key: 'E', text: '6' },
    ],
    answer: 'A',
    hint: 'Ayrıtları 2k, 3k, 4k alıp çarpımlarını hacme eşitle.',
    solution: [
      {
        title: 'Ayrıtlar',
        detail: 'Ayrıtlar 2k, 3k ve 4k olsun.',
      },
      {
        title: 'Hacim denklemi',
        detail: '2k · 3k · 4k = 24k³ = 648 ⇒ k³ = 27 ⇒ k = 3.',
      },
      {
        title: 'Sonuç',
        detail: 'En uzun ayrıt 4k = 12 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 35
  // Right triangular prism lying on the square face ABCD (edge 6), with the
  // right angles at A and D and |AF| = |DE| = 8, at 22 px per cm.
  {
    id: 'prisms-35',
    topic: 'Dik üçgen prizmanın hacmi',
    stem: [],
    given: [
      'Şekil, ABCD yüzü kare olan dik üçgen prizmadır.',
      'm(FAB) = m(EDC) = 90°',
      '|BC| = 6 cm ve |EC| = 10 cm',
    ],
    ask: 'Yukarıdaki verilere göre, prizmanın hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '120' },
      { key: 'C', text: '144' },
      { key: 'D', text: '192' },
      { key: 'E', text: '288' },
    ],
    answer: 'C',
    hint: 'EDC dik üçgeninde |DC| = |BC| olduğunu kullanarak |ED| yi bul.',
    solution: [
      {
        title: 'Kare yüz',
        detail: 'ABCD kare olduğundan |DC| = |AB| = |AD| = 6 cm.',
      },
      {
        title: 'Pisagor',
        detail: 'EDC üçgeni D de dik açılı: |ED|² = 10² − 6² = 64 ⇒ |ED| = 8 cm.',
      },
      {
        title: 'Taban alanı',
        detail: 'Üçgen taban EDC nin alanı 8 · 6 / 2 = 24 cm² dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Prizmanın yüksekliği |AD| = 6 cm olduğundan V = 24 · 6 = 144 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -256 400 280',
      caption: 'Şekil 19',
      label:
        'ABCDEF dik üçgen prizması; ABCD karesi alt yüz, F noktası A nın, E noktası D nin üstünde. FAB ve EDC üçgenleri A ve D de dik açılı, |BC| = 6 cm ve |EC| = 10 cm.',
      svg: `
          <path class="hid" d="M110.7,0.0 L157.3,-46.7 L289.3,-46.7"/>
          <path class="hid" d="M157.3,-46.7 L157.3,-222.7"/>
          <path class="hid" d="M157.3,-56.7 L167.3,-56.7 L167.3,-46.7"/>
          <path class="ln" d="M110.7,0.0 L242.7,0.0 L289.3,-46.7 L157.3,-222.7 L110.7,-176.0 Z"/>
          <path class="ln" d="M110.7,-176.0 L242.7,0.0"/>
          <path class="ln" d="M110.7,-10.0 L120.7,-10.0 L120.7,0.0"/>
          <circle class="pt" cx="110.7" cy="0.0" r="3.2"/>
          <circle class="pt" cx="242.7" cy="0.0" r="3.2"/>
          <circle class="pt" cx="289.3" cy="-46.7" r="3.2"/>
          <circle class="pt" cx="157.3" cy="-46.7" r="3.2"/>
          <circle class="pt" cx="157.3" cy="-222.7" r="3.2"/>
          <circle class="pt" cx="110.7" cy="-176.0" r="3.2"/>
          <text x="102.7" y="16.0" text-anchor="end">A</text>
          <text x="250.7" y="16.0">B</text>
          <text x="299.3" y="-40.7">C</text>
          <text x="167.3" y="-28.7">D</text>
          <text x="157.3" y="-234.7" text-anchor="middle">E</text>
          <text x="100.7" y="-176.0" text-anchor="end">F</text>
          <text class="val" x="276.0" y="-15.3">6</text>
          <text class="val" x="233.3" y="-134.7">10</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 36
  {
    id: 'prisms-36',
    topic: 'Ayrıtlar toplamı ve köşegenden alan',
    stem: [
      'Bir dikdörtgenler prizmasının 3 farklı ayrıtının toplamı 11 cm, cisim köşegeni ise 7 cm dir.',
    ],
    ask: 'Buna göre, prizmanın tüm alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '64' },
      { key: 'C', text: '68' },
      { key: 'D', text: '72' },
      { key: 'E', text: '76' },
    ],
    answer: 'D',
    hint: '(a + b + c)² açılımında hem a² + b² + c² hem de tüm alan görünür.',
    solution: [
      {
        title: 'Bilinenler',
        detail: 'Ayrıtlar a, b, c olsun: a + b + c = 11 ve a² + b² + c² = 7² = 49.',
      },
      {
        title: 'Kare açılımı',
        detail: '(a + b + c)² = a² + b² + c² + 2(ab + bc + ac) ⇒ 121 = 49 + 2(ab + bc + ac).',
      },
      {
        title: 'Sonuç',
        detail: 'Tüm alan 2(ab + bc + ac) = 121 − 49 = 72 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 37
  // Open-top cylinder with radius 3 and height 5 at 30 px per cm.
  {
    id: 'prisms-37',
    topic: 'Üstü açık silindirin boyanan yüzeyi',
    stem: [
      'Taban çapı 6 cm ve yüksekliği 5 cm olan, üstü açık kova şeklindeki metalden yapılmış bir dik silindir boya kazanına atılıp çıkarılıyor.',
    ],
    ask: 'Silindirin boyanan toplam yüzey alanı kaç cm² dir? (Kovanın yapıldığı sacın kalınlığı önemsenmeyecektir.)',
    choices: [
      { key: 'A', text: '96π' },
      { key: 'B', text: '87π' },
      { key: 'C', text: '78π' },
      { key: 'D', text: '69π' },
      { key: 'E', text: '39π' },
    ],
    answer: 'C',
    hint: 'Kova kazana atılınca sacın hem içi hem dışı boyanır; üst taban yoktur.',
    solution: [
      {
        title: 'Yanal alan',
        detail: 'r = 3 cm olduğundan yanal alan 2πrh = 2π · 3 · 5 = 30π cm² dir.',
      },
      {
        title: 'Taban alanı',
        detail: 'Kovanın yalnızca alt tabanı vardır: πr² = 9π cm².',
      },
      {
        title: 'İki yüz',
        detail: 'Sacın bir yüzünün alanı 30π + 9π = 39π cm²; iç ve dış yüzler boyanır.',
      },
      {
        title: 'Sonuç',
        detail: 'Boyanan alan 2 · 39π = 78π cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 0 400 244',
      caption: 'Şekil 20',
      label:
        'Üstü açık dik silindir biçiminde kova; üst ağız çapı [DC], alt taban çapı [AB]. Taban çapı 6 cm, yüksekliği 5 cm.',
      svg: `
          <path class="shade" d="M110,40 L110,190 A90,22 0 0 0 290,190 L290,40 A90,22 0 0 1 110,40 Z"/>
          <path class="hid" d="M110,190 A90,22 0 0 1 290,190"/>
          <path class="hid" d="M110,190 L290,190"/>
          <path class="ln" d="M110,190 A90,22 0 0 0 290,190"/>
          <ellipse class="ln" cx="200" cy="40" rx="90" ry="22"/>
          <path class="ln" d="M110,40 L290,40"/>
          <path class="ln" d="M110,40 L110,190"/>
          <path class="ln" d="M290,40 L290,190"/>
          <circle class="pt" cx="110" cy="40" r="3.2"/>
          <circle class="pt" cx="290" cy="40" r="3.2"/>
          <circle class="pt" cx="110" cy="190" r="3.2"/>
          <circle class="pt" cx="290" cy="190" r="3.2"/>
          <text x="102" y="36" text-anchor="end">D</text>
          <text x="298" y="36">C</text>
          <text x="102" y="198" text-anchor="end">A</text>
          <text x="298" y="198">B</text>
          <text class="val" x="298" y="120">5</text>
          <text class="val" x="200" y="236" text-anchor="middle">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 38
  {
    id: 'prisms-38',
    topic: 'Eğik prizmada dik kesitten taban alanı',
    stem: [],
    ask: 'Bir eğik prizmanın dik kesit alanı 12√3 cm², bir yanal ayrıtının taban düzlemiyle yaptığı açının ölçüsü 60° olduğuna göre, bu prizmanın taban alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '24' },
      { key: 'C', text: '30' },
      { key: 'D', text: '36' },
      { key: 'E', text: '48' },
    ],
    answer: 'B',
    hint: 'Dik kesit, tabanın yanal ayrıtlara dik düzlem üzerindeki dik izdüşümüdür.',
    solution: [
      {
        title: 'Düzlemler arasındaki açı',
        detail:
          'Dik kesit düzlemi yanal ayrıtlara diktir. Ayrıt tabanla 60° yaptığından taban düzlemi ile dik kesit düzlemi arasındaki açı 90° − 60° = 30° dir.',
      },
      {
        title: 'İzdüşüm bağıntısı',
        detail: 'Dik kesit alanı = taban alanı · cos 30° ⇒ 12√3 = T · (√3 / 2).',
      },
      {
        title: 'Sonuç',
        detail: 'T = 12√3 · 2 / √3 = 24 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39
  // Right cylinder with r = 6 and h = 8 at 18 px per cm; C lies directly above B.
  {
    id: 'prisms-39',
    topic: 'Silindirde merkezden üst çembere uzaklık',
    given: [
      'Taban dairesinin merkezi O olan şekildeki dik silindirin yanal alanı 96π cm² ve hacmi 288π cm³ tür.',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |OC| kaç cm dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '4√5' },
      { key: 'D', text: '4√6' },
      { key: 'E', text: '10' },
    ],
    answer: 'E',
    hint: 'Hacmi yanal alana bölünce yarıçap kolayca çıkar.',
    solution: [
      {
        title: 'İki denklem',
        detail: '2πrh = 96π ⇒ rh = 48 ve πr²h = 288π ⇒ r²h = 288.',
      },
      {
        title: 'Yarıçap ve yükseklik',
        detail: 'r = 288 / 48 = 6 cm, h = 48 / 6 = 8 cm.',
      },
      {
        title: 'Dik üçgen',
        detail: 'C, B nin tam üstündedir; OBC üçgeni B de dik açılı, |OB| = 6 ve |BC| = 8.',
      },
      {
        title: 'Sonuç',
        detail: '|OC| = √(6² + 8²) = √100 = 10 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 0 400 224',
      caption: 'Şekil 21',
      label:
        'Dik silindir; alt tabanda merkezi O olan [AB] çapı, üst tabanda A nın üstünde D, B nin üstünde C. [OC] kesikli çizgiyle gösterilmiş.',
      svg: `
          <path class="hid" d="M92,174 A108,24 0 0 1 308,174"/>
          <path class="hid" d="M92,174 L308,174"/>
          <path class="hid" d="M200,174 L308,30"/>
          <path class="ln" d="M92,174 A108,24 0 0 0 308,174"/>
          <ellipse class="ln" cx="200" cy="30" rx="108" ry="24"/>
          <path class="ln" d="M92,30 L92,174"/>
          <path class="ln" d="M308,30 L308,174"/>
          <circle class="pt" cx="92" cy="30" r="3.2"/>
          <circle class="pt" cx="308" cy="30" r="3.2"/>
          <circle class="pt" cx="92" cy="174" r="3.2"/>
          <circle class="pt" cx="308" cy="174" r="3.2"/>
          <circle class="pt" cx="200" cy="174" r="3.2"/>
          <text x="84" y="26" text-anchor="end">D</text>
          <text x="316" y="26">C</text>
          <text x="84" y="182" text-anchor="end">A</text>
          <text x="316" y="182">B</text>
          <text x="200" y="192" text-anchor="middle">O</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'prisms-40',
    topic: 'Yükseklik–yarıçap oranından silindirin hacmi',
    stem: [],
    ask: 'Yüksekliği taban yarıçapının 3 katı olan bir dik silindirin yanal alanı 54π cm² olduğuna göre, hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '108π' },
      { key: 'B', text: '90π' },
      { key: 'C', text: '81π' },
      { key: 'D', text: '72π' },
      { key: 'E', text: '54π' },
    ],
    answer: 'C',
    hint: 'Yüksekliği 3r yazıp yanal alanı r cinsinden kur.',
    solution: [
      {
        title: 'Yükseklik',
        detail: 'Yarıçap r ise yükseklik h = 3r dir.',
      },
      {
        title: 'Yanal alan',
        detail: '2πr · 3r = 6πr² = 54π ⇒ r² = 9 ⇒ r = 3 cm, h = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = πr²h = π · 9 · 9 = 81π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 41
  // Box split 4 × 3 × 2 into equal cells, one cell drawn at corner A. Cells are
  // 55 px wide, depth drawn at half scale along 45°.
  {
    id: 'prisms-41',
    topic: 'Eş parçalara bölünen prizmanın hacmi',
    given: [
      'Şekildeki büyük dikdörtgenler prizmasının [AB] kenarı 4 eşit, [BC] kenarı 3 eşit, [AE] kenarı 2 eşit parçaya ayrılıyor.',
      'A köşesindeki küçük dikdörtgenler prizmasının ayrıtları bu parçaların birer tanesine eşittir.',
    ],
    stem: [],
    ask: 'İçteki küçük dikdörtgenler prizmasının hacmi 6 cm³ ise, büyük dikdörtgenler prizmasının hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '96' },
      { key: 'C', text: '120' },
      { key: 'D', text: '144' },
      { key: 'E', text: '168' },
    ],
    answer: 'D',
    hint: 'Büyük prizma, küçük prizmanın eşlerinden kaç tanesiyle doldurulur?',
    solution: [
      {
        title: 'Ayrıtlar',
        detail: 'Küçük prizmanın ayrıtları a, b, c ise büyük prizmanın ayrıtları 4a, 3b ve 2c dir.',
      },
      {
        title: 'Hacim oranı',
        detail:
          'Büyük hacim = 4a · 3b · 2c = 24 · abc; yani büyük prizma 24 küçük prizmadan oluşur.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 24 · 6 = 144 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -6 400 226',
      caption: 'Şekil 22',
      label:
        'ABCDEFGH dikdörtgenler prizması; [AB] 4, [BC] 3, [AE] 2 eş parçaya bölünmüş ve bölme çizgileri kesikli çizilmiş. A köşesinde bir parçalık küçük dikdörtgenler prizması var.',
      svg: `
          <path class="hid" d="M61.0,190.0 L119.3,131.7 M119.3,131.7 L339.3,131.7 M119.3,131.7 L119.3,21.7"/>
          <path class="hid" d="M135.4,170.6 L174.3,131.7 M171.0,190.0 L229.3,131.7 M226.0,190.0 L284.3,131.7 M135.4,170.6 L300.4,170.6 M99.9,151.1 L319.9,151.1 M116.0,135.0 L281.0,135.0 M281.0,135.0 L339.3,76.7"/>
          <path class="hid" d="M80.4,170.6 L80.4,115.6 M80.4,170.6 L135.4,170.6"/>
          <path class="ln" d="M61.0,190.0 L281.0,190.0 L281.0,80.0 L61.0,80.0 Z M281.0,190.0 L339.3,131.7 L339.3,21.7 L281.0,80.0 Z M61.0,80.0 L119.3,21.7 L339.3,21.7"/>
          <path class="ln" d="M61.0,135.0 L116.0,135.0 L116.0,190.0 M116.0,135.0 L135.4,115.6 L135.4,170.6 L116.0,190.0 M61.0,135.0 L80.4,115.6 L135.4,115.6"/>
          <circle class="pt" cx="61.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="281.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="339.3" cy="131.7" r="3.2"/>
          <circle class="pt" cx="119.3" cy="131.7" r="3.2"/>
          <circle class="pt" cx="61.0" cy="80.0" r="3.2"/>
          <circle class="pt" cx="281.0" cy="80.0" r="3.2"/>
          <circle class="pt" cx="339.3" cy="21.7" r="3.2"/>
          <circle class="pt" cx="119.3" cy="21.7" r="3.2"/>
          <text x="53.0" y="206.0" text-anchor="end">A</text>
          <text x="289.0" y="206.0">B</text>
          <text x="347.3" y="137.7">C</text>
          <text x="113.3" y="109.7" text-anchor="end">D</text>
          <text x="53.0" y="84.0" text-anchor="end">E</text>
          <text x="289.0" y="96.0">F</text>
          <text x="347.3" y="17.7">G</text>
          <text x="119.3" y="9.7" text-anchor="middle">H</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 42
  // Square prism, base edge 6 and height 18 at 12 px per cm; depth drawn at half
  // scale along 45°. T, P, S sit at 4.5, 9 and 13.5 cm, where the unfolded
  // straight path from A to E crosses [BF], [CG] and [DH].
  {
    id: 'prisms-42',
    topic: 'Prizmanın yanal yüzünde en kısa yol',
    given: ['ABCDEFGH kare tabanlı bir dik prizmadır.', '|AB| = 6 cm', '|AE| = 18 cm'],
    stem: [
      'A noktasındaki bir böcek, yanal yüzeyler üzerinde dolaşarak sırasıyla [BF], [CG] ve [DH] ayrıtları üzerindeki T, P ve S noktalarına uğradıktan sonra E noktasına ulaşıyor.',
    ],
    ask: 'Buna göre, en kısa |AT| + |TP| + |PS| + |SE| yolu kaç cm dir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '6√13' },
      { key: 'C', text: '30' },
      { key: 'D', text: '18√2' },
      { key: 'E', text: '6√29' },
    ],
    answer: 'C',
    hint: 'Dört yanal yüzü bir düzleme açınca yol bir dikdörtgenin köşegenine dönüşür.',
    solution: [
      {
        title: 'Yanal yüzlerin açınımı',
        detail:
          'Dört yanal yüz yan yana açılınca eni 4 · 6 = 24 cm, boyu 18 cm olan bir dikdörtgen elde edilir; A ve E bu dikdörtgenin karşı köşeleri olur.',
      },
      {
        title: 'En kısa yol',
        detail:
          'Düzlemde iki nokta arasındaki en kısa yol doğru parçasıdır; yol dikdörtgenin köşegenidir.',
      },
      {
        title: 'Pisagor',
        detail: '√(24² + 18²) = √(576 + 324) = √900.',
      },
      {
        title: 'Sonuç',
        detail: 'En kısa yol 30 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 -20 400 300',
      caption: 'Şekil 23',
      label:
        'ABCDEFGH kare tabanlı dik prizma; alt taban ABCD, üst taban EFGH. [BF] üzerinde T, [CG] üzerinde P, [DH] üzerinde S noktası; A dan T, P, S üzerinden E ye giden yol çizilmiş. |AB| = 6 cm, |AE| = 18 cm.',
      svg: `
          <path class="hid" d="M164,250 L189.5,224.5 L261.5,224.5 M189.5,224.5 L189.5,8.5"/>
          <path class="hid" d="M261.5,116.5 L189.5,62.5 L164,34"/>
          <path class="ln" d="M164,250 L236,250 L236,34 L164,34 Z M236,250 L261.5,224.5 L261.5,8.5 L236,34 M164,34 L189.5,8.5 L261.5,8.5"/>
          <path class="ln" d="M164,250 L236,196 L261.5,116.5"/>
          <circle class="pt" cx="164" cy="250" r="3.2"/>
          <circle class="pt" cx="236" cy="250" r="3.2"/>
          <circle class="pt" cx="261.5" cy="224.5" r="3.2"/>
          <circle class="pt" cx="189.5" cy="224.5" r="3.2"/>
          <circle class="pt" cx="164" cy="34" r="3.2"/>
          <circle class="pt" cx="236" cy="34" r="3.2"/>
          <circle class="pt" cx="261.5" cy="8.5" r="3.2"/>
          <circle class="pt" cx="189.5" cy="8.5" r="3.2"/>
          <circle class="pt" cx="236" cy="196" r="3.2"/>
          <circle class="pt" cx="261.5" cy="116.5" r="3.2"/>
          <circle class="pt" cx="189.5" cy="62.5" r="3.2"/>
          <text x="156" y="266" text-anchor="end">A</text>
          <text x="244" y="266">B</text>
          <text x="269.5" y="230">C</text>
          <text x="196" y="220">D</text>
          <text x="156" y="38" text-anchor="end">E</text>
          <text x="242" y="50">F</text>
          <text x="269.5" y="6">G</text>
          <text x="189.5" y="-4" text-anchor="middle">H</text>
          <text x="244" y="200">T</text>
          <text x="269.5" y="122">P</text>
          <text x="196" y="60">S</text>
          <text class="val" x="200" y="270" text-anchor="middle">6</text>
          <text class="val" x="156" y="146" text-anchor="end">18</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 43
  // Cube of edge 12 at 16 px per cm, depth at half scale along 45°. The wall sits
  // 4 cm from the left face; compartment I holds water 9 cm deep.
  {
    id: 'prisms-43',
    topic: 'Bölmeli kapta su seviyesi',
    given: [
      'Bir ayrıtı 12 cm olan küp biçimindeki kap, bir yan yüzüne paralel bir ara duvarla I ve II numaralı iki bölmeye ayrılmıştır.',
      'I. bölmenin genişliği 4 cm, II. bölmenin genişliği 8 cm dir.',
      'I. bölme tabandan 9 cm yüksekliğe kadar su ile doludur, II. bölme boştur.',
    ],
    stem: [],
    ask: 'Ara duvarın tabanına açılan bir delikten su II. bölmeye geçip iki bölmedeki su seviyeleri eşitlendiğinde, suyun yüksekliği kaç cm olur? (Ara duvarın kalınlığı önemsenmeyecektir.)',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '2,5' },
      { key: 'C', text: '3' },
      { key: 'D', text: '3,5' },
      { key: 'E', text: '4' },
    ],
    answer: 'C',
    hint: 'Suyun hacmi değişmez; seviyeler eşitlenince su kabın tüm tabanına yayılır.',
    solution: [
      {
        title: 'Suyun hacmi',
        detail: 'I. bölmenin tabanı 4 · 12 = 48 cm² olduğundan su hacmi 48 · 9 = 432 cm³ tür.',
      },
      {
        title: 'Yeni taban',
        detail: 'Seviyeler eşitlenince su kabın tüm tabanını kaplar: 12 · 12 = 144 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Su yüksekliği 432 / 144 = 3 cm olur.',
      },
    ],
    figure: {
      viewBox: '0 -4 400 300',
      caption: 'Şekil 24',
      label:
        'Ayrıtı 12 cm olan küp biçiminde kap, yan yüze paralel bir ara duvarla 4 cm genişliğindeki I. bölme ve 8 cm genişliğindeki II. bölmeye ayrılmış. I. bölmede 9 cm yüksekliğinde su var.',
      svg: `
          <path class="shade" d="M70,270 L134,270 L134,126 L202,58 L138,58 L70,126 Z"/>
          <path class="hid" d="M70,270 L138,202 L330,202 M138,202 L138,10 M134,270 L202,202 L202,10"/>
          <path class="ln" d="M70,270 L262,270 L262,78 L70,78 Z M262,270 L330,202 L330,10 L262,78 M70,78 L138,10 L330,10"/>
          <path class="ln" d="M134,270 L134,78 L202,10"/>
          <path class="ln" d="M70,126 L134,126 L202,58 L138,58 Z"/>
          <text x="102" y="210" text-anchor="middle">I</text>
          <text x="240" y="170" text-anchor="middle">II</text>
          <text class="val" x="62" y="204" text-anchor="end">9</text>
          <text class="val" x="102" y="290" text-anchor="middle">4</text>
          <text class="val" x="198" y="290" text-anchor="middle">8</text>
          <text class="val" x="338" y="110">12</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 44
  {
    id: 'prisms-44',
    topic: 'Düzgün altıgen prizmanın tüm alanı',
    stem: [],
    ask: 'Taban çevresi 36 cm ve hacmi 324 cm³ olan bir düzgün altıgen dik prizmanın tüm alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '144√3' },
      { key: 'B', text: '162√3' },
      { key: 'C', text: '180√3' },
      { key: 'D', text: '198√3' },
      { key: 'E', text: '216√3' },
    ],
    answer: 'C',
    hint: 'Önce taban ayrıtını, sonra altı eşkenar üçgenden taban alanını bul.',
    solution: [
      {
        title: 'Taban ayrıtı',
        detail: '6a = 36 ⇒ a = 6 cm.',
      },
      {
        title: 'Taban alanı',
        detail: 'Düzgün altıgen 6 eşkenar üçgendir: 6 · (6²√3 / 4) = 54√3 cm².',
      },
      {
        title: 'Yükseklik',
        detail: '54√3 · h = 324 ⇒ h = 6 / √3 = 2√3 cm.',
      },
      {
        title: 'Alanlar',
        detail: 'İki taban 2 · 54√3 = 108√3 cm², yanal alan 36 · 2√3 = 72√3 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Tüm alan 108√3 + 72√3 = 180√3 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 45
  {
    id: 'prisms-45',
    topic: 'Dikdörtgenden bükülen silindirlerin hacim oranı',
    stem: [
      'Kenar uzunlukları 12 cm ve 20 cm olan dikdörtgen biçimindeki bir kartondan iki farklı dik silindirin yanal yüzeyi yapılıyor.',
      'Birinci silindirde 12 cm lik kenar taban çemberini, ikinci silindirde 20 cm lik kenar taban çemberini oluşturuyor. Silindirlerin hacimleri sırasıyla V₁ ve V₂ dir.',
    ],
    ask: 'Buna göre, V₁ / V₂ oranı kaçtır?',
    choices: [
      { key: 'A', text: '9/25' },
      { key: 'B', text: '3/5' },
      { key: 'C', text: '1' },
      { key: 'D', text: '5/3' },
      { key: 'E', text: '25/9' },
    ],
    answer: 'B',
    hint: 'Taban çevresi c olan silindirin yarıçapı c / 2π dir; hacmi c ve h cinsinden yaz.',
    solution: [
      {
        title: 'Genel hacim',
        detail: 'Çevre c ⇒ r = c / 2π, V = πr²h = c²h / 4π.',
      },
      {
        title: 'İki silindir',
        detail: 'V₁ = 12² · 20 / 4π, V₂ = 20² · 12 / 4π.',
      },
      {
        title: 'Oran',
        detail: 'V₁ / V₂ = (144 · 20) / (400 · 12) = 2880 / 4800.',
      },
      {
        title: 'Sonuç',
        detail: 'V₁ / V₂ = 3/5 tir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 46
  // Cylinder r = 4, h = 8 at 25 px per cm. E is on the base circle with |AE| = 6,
  // so E = (0.5, 3.97) in cm from the centre, drawn toward the viewer.
  {
    id: 'prisms-46',
    topic: 'Silindirde dik üçgenlerden hacim',
    given: [
      'Şekildeki dik silindirde [AB] alt taban dairesinin çapı, E alt taban çemberi üzerinde bir noktadır.',
      'D noktası üst taban çemberi üzerinde, A nın tam üstündedir.',
      '|AE| = 6 cm',
      '|EB| = 2√7 cm',
      '|ED| = 10 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, silindirin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '96π' },
      { key: 'B', text: '112π' },
      { key: 'C', text: '128π' },
      { key: 'D', text: '144π' },
      { key: 'E', text: '160π' },
    ],
    answer: 'C',
    hint: 'Çapı gören çevre açı diktir; [DA] ise tabana diktir.',
    solution: [
      {
        title: 'Çap',
        detail:
          '[AB] çap olduğundan AEB açısı 90° dir: |AB|² = 6² + (2√7)² = 36 + 28 = 64 ⇒ |AB| = 8, r = 4 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          '[DA] tabana dik olduğundan DAE üçgeni A da dik açılıdır: h² = 10² − 6² = 64 ⇒ h = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = πr²h = π · 16 · 8 = 128π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 0 400 280',
      caption: 'Şekil 25',
      label:
        'Dik silindir; alt tabanda [AB] çapı ve çember üzerinde E noktası, A nın üstünde üst tabanda D, B nin üstünde C. [AE], [EB] ve [ED] çizilmiş.',
      svg: `
          <path class="hid" d="M100,230 A100,24 0 0 1 300,230"/>
          <path class="ln" d="M100,230 A100,24 0 0 0 300,230"/>
          <ellipse class="ln" cx="200" cy="30" rx="100" ry="24"/>
          <path class="ln" d="M100,30 L100,230 M300,30 L300,230"/>
          <path class="ln" d="M100,230 L300,230 M100,230 L212.5,253.8 L300,230 M100,30 L212.5,253.8"/>
          <circle class="pt" cx="100" cy="30" r="3.2"/>
          <circle class="pt" cx="300" cy="30" r="3.2"/>
          <circle class="pt" cx="100" cy="230" r="3.2"/>
          <circle class="pt" cx="300" cy="230" r="3.2"/>
          <circle class="pt" cx="212.5" cy="253.8" r="3.2"/>
          <text x="92" y="26" text-anchor="end">D</text>
          <text x="308" y="26">C</text>
          <text x="92" y="238" text-anchor="end">A</text>
          <text x="308" y="238">B</text>
          <text x="212.5" y="274" text-anchor="middle">E</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 47
  {
    id: 'prisms-47',
    topic: 'Küplerden oluşan prizmanın en küçük yüzey alanı',
    stem: [
      'Her birinin yüzey alanı x cm² olan 4 eş küp, yüzleri tam çakışacak biçimde bir araya getirilerek bir dikdörtgenler prizması oluşturuluyor.',
    ],
    ask: 'Oluşan prizmanın yüzey alanı en az kaç x cm² dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '8/3' },
      { key: 'C', text: '7/3' },
      { key: 'D', text: '2' },
      { key: 'E', text: '10/3' },
    ],
    answer: 'B',
    hint: 'Küplerin dizilişini karşılaştır: 4 × 1 × 1 mi, 2 × 2 × 1 mi?',
    solution: [
      {
        title: 'Küpün ayrıtı',
        detail: 'Küpün ayrıtı a ise 6a² = x dir.',
      },
      {
        title: 'Olası prizmalar',
        detail:
          '4 küp ya 4a × a × a ya da 2a × 2a × a prizması oluşturur. İlkinin alanı 2(4a² + 4a² + a²) = 18a², ikincisinin 2(4a² + 2a² + 2a²) = 16a² dir.',
      },
      {
        title: 'En küçük alan',
        detail: 'En az alan 16a² = 16 · (x / 6) dır.',
      },
      {
        title: 'Sonuç',
        detail: '16x / 6 = 8x/3; yüzey alanı en az 8/3 x cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 48
  // Cube of edge 8 at 24 px per cm, depth at half scale along 45°. The 3 × 3
  // square prism cut along the front-right vertical edge is outlined dashed.
  {
    id: 'prisms-48',
    topic: 'Küpten prizma çıkarılınca kalan alan',
    stem: [
      'Şekildeki küpün bir ayrıtı boyunca, tabanı kare olan bir dik prizma kesilip çıkartılmıştır. Kesilmeden önce küpün tüm alanı 384 cm² dir.',
    ],
    ask: 'Kalan kısmın hacmi 440 cm³ olduğuna göre, kalan kısmın tüm alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '348' },
      { key: 'B', text: '354' },
      { key: 'C', text: '360' },
      { key: 'D', text: '366' },
      { key: 'E', text: '384' },
    ],
    answer: 'D',
    hint: 'Çıkarılan prizmanın yan yüzleri yerine aynı büyüklükte iç yüzler açılır; değişen yalnızca alt ve üst yüzdür.',
    solution: [
      {
        title: 'Küpün ayrıtı',
        detail: '6a² = 384 ise a² = 64, a = 8 cm; küpün hacmi 8³ = 512 cm³ tür.',
      },
      {
        title: 'Çıkarılan prizma',
        detail:
          'Çıkarılan hacim 512 − 440 = 72 cm³ tür. Prizmanın yüksekliği 8 cm olduğundan taban alanı 72 / 8 = 9 cm², taban ayrıtı 3 cm dir.',
      },
      {
        title: 'Alan değişimi',
        detail:
          'İki yan yüzden 3 · 8 lik şeritler gider, yerine aynı büyüklükte iki iç yüz gelir. Alt ve üst yüzlerin her birinden 3² = 9 cm² eksilir.',
      },
      {
        title: 'Sonuç',
        detail: 'Kalan kısmın tüm alanı 384 − 2 · 9 = 366 cm² dir.',
      },
    ],
    figure: {
      viewBox: '20 20 400 290',
      caption: 'Şekil 26',
      label:
        'Bir küpün ön sağ düşey ayrıtı boyunca kare tabanlı bir dik prizma kesilip çıkarılmış; çıkarılan parçanın ayrıtları kesikli çizilmiş.',
      svg: `
          <path class="hid" d="M90.0,290.0 L157.9,222.1 L349.9,222.1 M157.9,222.1 L157.9,30.1"/>
          <path class="hid" d="M210.0,290.0 L282.0,290.0 L307.5,264.5 M210.0,98.0 L282.0,98.0 L307.5,72.5 M282.0,290.0 L282.0,98.0"/>
          <path class="ln" d="M90.0,290.0 L210.0,290.0 L210.0,98.0 L90.0,98.0 Z"/>
          <path class="ln" d="M210.0,290.0 L235.5,264.5 L235.5,72.5 L210.0,98.0"/>
          <path class="ln" d="M235.5,264.5 L307.5,264.5 L349.9,222.1 L349.9,30.1 L307.5,72.5 L235.5,72.5"/>
          <path class="ln" d="M307.5,264.5 L307.5,72.5"/>
          <path class="ln" d="M90.0,98.0 L157.9,30.1 L349.9,30.1"/>
        `,
    },
  },

  // ---------------------------------------------------------------- 49
  // Cylinder of radius 4 at 18 px per cm, bases flattened to 0.3. The slanted top
  // runs from 6 cm on the left generator to 12 cm on the right one.
  {
    id: 'prisms-49',
    topic: 'Eğik kesilmiş silindiri hacimce ikiye bölme',
    stem: [
      'Üst yüzeyi eğik olan dik silindir biçimindeki bir kütük, tabana paralel bir düzlemle kesilerek hacimce iki eş parçaya ayrılmak isteniyor.',
    ],
    given: [
      'Eğik yüzeyin tabana en yakın noktası 6 cm',
      'Eğik yüzeyin tabana en uzak noktası 12 cm',
    ],
    ask: 'Buna göre, kütük tabandan kaç cm yükseklikten kesilmelidir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '9/2' },
      { key: 'D', text: '5' },
      { key: 'E', text: '6' },
    ],
    answer: 'C',
    hint: 'Eğik kesilmiş silindirin hacmi, yüksekliği en kısa ve en uzun ana doğruların ortalaması olan silindirin hacmine eşittir.',
    solution: [
      {
        title: 'Kütüğün hacmi',
        detail:
          'Eş iki kütük ters çevrilip üst üste konursa yüksekliği 6 + 12 = 18 cm olan bir silindir oluşur; bir kütüğün hacmi πr² · 18 / 2 = 9πr² dir.',
      },
      {
        title: 'Kesilen alt parça',
        detail:
          'Kesim 6 cm den alçakta yapılırsa alt parça yüksekliği k olan düz bir silindirdir; hacmi πr² · k dır.',
      },
      {
        title: 'Denklem',
        detail:
          'πr² · k = 9πr² / 2 ise k = 9/2 dir; bu değer 6 dan küçük olduğundan kesim eğik yüzeye değmez.',
      },
      {
        title: 'Sonuç',
        detail: 'Kütük tabandan 9/2 = 4,5 cm yükseklikten kesilmelidir.',
      },
    ],
    figure: {
      viewBox: '0 56 400 264',
      caption: 'Şekil 27',
      label:
        'Üst yüzeyi eğik kesilmiş dik silindir biçiminde kütük; eğik yüzeyin tabana en yakın noktası 6 cm, en uzak noktası 12 cm yükseklikte.',
      svg: `
          <path class="hid" d="M128,290 A72,21.6 0 0 1 272,290"/>
          <path class="ln" d="M128,290 A72,21.6 0 0 0 272,290"/>
          <path class="ln" d="M128,290 L128,182 M272,290 L272,74"/>
          <path class="ln" d="M272.0,74.0 L271.7,76.1 L270.9,78.6 L269.5,81.4 L267.7,84.6 L265.3,88.2 L262.4,92.0 L259.0,96.2 L255.2,100.5 L250.9,105.1 L246.3,109.8 L241.3,114.7 L236.0,119.7 L230.4,124.8 L224.6,129.8 L218.6,134.9 L212.5,139.9 L206.3,144.8 L200.0,149.6 L193.7,154.2 L187.5,158.6 L181.4,162.8 L175.4,166.8 L169.6,170.4 L164.0,173.7 L158.7,176.7 L153.7,179.3 L149.1,181.5 L144.8,183.3 L141.0,184.6 L137.6,185.6 L134.7,186.1 L132.3,186.1 L130.5,185.8 L129.1,184.9 L128.3,183.7 L128.0,182.0 L128.3,179.9 L129.1,177.4 L130.5,174.6 L132.3,171.4 L134.7,167.8 L137.6,164.0 L141.0,159.8 L144.8,155.5 L149.1,150.9 L153.7,146.2 L158.7,141.3 L164.0,136.3 L169.6,131.2 L175.4,126.2 L181.4,121.1 L187.5,116.1 L193.7,111.2 L200.0,106.4 L206.3,101.8 L212.5,97.4 L218.6,93.2 L224.6,89.2 L230.4,85.6 L236.0,82.3 L241.3,79.3 L246.3,76.7 L250.9,74.5 L255.2,72.7 L259.0,71.4 L262.4,70.4 L265.3,69.9 L267.7,69.9 L269.5,70.2 L270.9,71.1 L271.7,72.3 Z"/>
          <text class="val" x="118" y="242" text-anchor="end">6 cm</text>
          <text class="val" x="282" y="188">12 cm</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 50
  {
    id: 'prisms-50',
    topic: 'Aynı kartondan yapılan küplerin hacim oranı',
    stem: [
      'Bir ayrıtının uzunluğu 12 cm olan küp biçimindeki bir karton kutunun tamamı kullanılarak özdeş 9 tane küp yapılacaktır.',
    ],
    ask: 'Yapılan bu küplerden birinin hacminin ilk küpün hacmine oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/81' },
      { key: 'B', text: '1/27' },
      { key: 'C', text: '1/18' },
      { key: 'D', text: '1/9' },
      { key: 'E', text: '1/3' },
    ],
    answer: 'B',
    hint: 'Karton aynı kaldığı için paylaşılan şey hacim değil, yüzey alanıdır.',
    solution: [
      {
        title: 'Kartonun alanı',
        detail: 'İlk küpün tüm alanı 6 · 12² = 864 cm² dir.',
      },
      {
        title: 'Küçük küpün ayrıtı',
        detail: 'Her küçük küpün alanı 864 / 9 = 96 cm² dir; 6b² = 96 ise b² = 16, b = 4 cm dir.',
      },
      {
        title: 'Hacimler',
        detail: 'Küçük küpün hacmi 4³ = 64 cm³, ilk küpün hacmi 12³ = 1728 cm³ tür.',
      },
      {
        title: 'Sonuç',
        detail: 'Oran 64 / 1728 = 1/27 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 51
  {
    id: 'prisms-51',
    topic: 'Eğik silindirdeki su dik konumda',
    stem: [
      'Yüksekliği 8 cm olan dik silindir biçimindeki bir kap, ağzından su dökülmeye başlayacak kadar eğilmiştir: su yüzeyi kabın ağzının en alçak noktasından geçmektedir.',
      'Bu durumda kabın en üstte kalan ana doğrusu boyunca su, tabandan 3 cm yüksekliğe kadar çıkmaktadır.',
      'Kap, içindeki su dökülmeden dik konuma getiriliyor.',
    ],
    ask: 'Buna göre, kabın ağzı ile su yüzeyi arasındaki uzaklık kaç cm dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '5/2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '7/2' },
      { key: 'E', text: '11/2' },
    ],
    answer: 'B',
    hint: 'Su yüzeyi tabanı kesmiyorsa, suyun hacmi karşılıklı iki ana doğru üzerindeki su yüksekliklerinin ortalaması kadar yüksek bir silindirin hacmidir.',
    solution: [
      {
        title: 'Ana doğrulardaki su',
        detail:
          'Eğik durumda su, alttaki ana doğru boyunca ağza kadar yani 8 cm, üstteki ana doğru boyunca 3 cm yükselir.',
      },
      {
        title: 'Suyun hacmi',
        detail:
          'Su, üst yüzü eğik kesilmiş bir silindir oluşturur; hacmi πr² · (8 + 3) / 2 = πr² · 11/2 dir.',
      },
      {
        title: 'Dik konumda su yüksekliği',
        detail: 'Kap dik durunca su yüksekliği 11/2 cm olur.',
      },
      {
        title: 'Sonuç',
        detail: 'Ağız ile su yüzeyi arasındaki uzaklık 8 − 11/2 = 5/2 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 52
  {
    id: 'prisms-52',
    topic: 'Alanlardan dikdörtgenler prizmasının hacmi',
    stem: [],
    ask: 'Tüm alanı 208 cm², yanal alanlar toplamı 160 cm² ve taban ayrıtlarından biri 6 cm olan bir dikdörtgenler prizmasının hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '128' },
      { key: 'C', text: '144' },
      { key: 'D', text: '160' },
      { key: 'E', text: '192' },
    ],
    answer: 'E',
    hint: 'Tüm alandan yanal alanı çıkarınca iki tabanın alanı kalır.',
    solution: [
      {
        title: 'Taban alanı',
        detail: 'İki tabanın alanı 208 − 160 = 48 cm², bir tabanın alanı 24 cm² dir.',
      },
      {
        title: 'Diğer taban ayrıtı',
        detail: '6 · b = 24 ise b = 4 cm; taban çevresi 2 · (6 + 4) = 20 cm dir.',
      },
      {
        title: 'Yükseklik',
        detail: 'Yanal alan = taban çevresi · h: 20 · h = 160 ise h = 8 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Hacim 24 · 8 = 192 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 53
  {
    id: 'prisms-53',
    topic: 'Silindiri iki kez dolanan en kısa yol',
    stem: [
      'Yarıçapı 5 cm, yüksekliği 15π cm olan dik silindir biçimindeki bir kutunun alt tabanının çemberi üzerindeki A noktasından hareket eden bir karınca, silindirin yan yüzeyi üzerinde yürüyerek silindirin çevresini tam iki kez dolanıyor ve A nın tam üstünde, üst taban çemberi üzerindeki B noktasına ulaşıyor.',
    ],
    ask: 'Buna göre, karıncanın aldığı en kısa yol kaç cm dir?',
    choices: [
      { key: 'A', text: '15π' },
      { key: 'B', text: '5√13 π' },
      { key: 'C', text: '25π' },
      { key: 'D', text: '30π' },
      { key: 'E', text: '35π' },
    ],
    answer: 'C',
    hint: 'Yan yüzeyi iki kez yan yana açarak yolu tek bir doğru parçasına çevir.',
    solution: [
      {
        title: 'Yan yüzeyin açınımı',
        detail:
          'Yan yüzey açılınca eni taban çevresi 2π · 5 = 10π, boyu 15π olan bir dikdörtgen elde edilir.',
      },
      {
        title: 'İki tur',
        detail:
          'İki tur için iki açınım yan yana konur: eni 2 · 10π = 20π, boyu 15π olan dikdörtgen. A ve B bu dikdörtgenin karşı köşeleridir.',
      },
      {
        title: 'Pisagor',
        detail: '√((20π)² + (15π)²) = √(400π² + 225π²) = √(625π²).',
      },
      {
        title: 'Sonuç',
        detail: 'En kısa yol 25π cm dir.',
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
    {
      id: 'prisms-m3',
      order: 3,
      title: 'Hacim, köşegen ve kesit',
      summary:
        'Dikdörtgenler prizmasında hacim, küpün köşegen kesiti, düzgün altıgen prizma, prizmada uzaklık, cisim köşegeni, eşkenar üçgen prizma ve yüzey köşegeni.',
      questions: pick(
        'prisms-15',
        'prisms-16',
        'prisms-17',
        'prisms-18',
        'prisms-19',
        'prisms-20',
        'prisms-21',
      ),
    },
    {
      id: 'prisms-m4',
      order: 4,
      title: 'Yanal alan, hacim ve eğik silindir',
      summary:
        'Kare prizmanın yanal alanı, küpteki en büyük silindir, kısmen dolu depo, silindirin yanal alanı, kesit alanından cisim köşegeni, dik üçgen prizma ve eğik silindir.',
      questions: pick(
        'prisms-22',
        'prisms-23',
        'prisms-24',
        'prisms-25',
        'prisms-26',
        'prisms-27',
        'prisms-28',
      ),
    },
    {
      id: 'prisms-m5',
      order: 5,
      title: 'Köşegen, orantılı ayrıtlar ve silindir',
      summary:
        'Cisim köşegeninin taban ile açısı, küpte uzunluktan tüm alan, ayrıtlar toplamından köşegen, silindirin alanları, orantılı ayrıtlar ve dik üçgen prizma.',
      questions: pick(
        'prisms-29',
        'prisms-30',
        'prisms-31',
        'prisms-32',
        'prisms-33',
        'prisms-34',
        'prisms-35',
      ),
    },
    {
      id: 'prisms-m6',
      order: 6,
      title: 'Silindir, eğik prizma ve bölünen prizma',
      summary:
        'Ayrıtlar toplamından alan, üstü açık kovanın boyanan yüzeyi, eğik prizmada dik kesit, silindirde uzaklık, orandan hacim ve eş parçalara bölünen prizma.',
      questions: pick('prisms-36', 'prisms-37', 'prisms-38', 'prisms-39', 'prisms-40', 'prisms-41'),
    },
    {
      id: 'prisms-m7',
      order: 7,
      title: 'En kısa yol, bölmeli kap ve küp dizilişi',
      summary:
        'Yanal yüzde en kısa yol, bölmeli kapta su seviyesi, altıgen prizmanın alanı, dikdörtgenden silindir, dik üçgenlerle silindir hacmi ve küplerden prizma.',
      questions: pick('prisms-42', 'prisms-43', 'prisms-44', 'prisms-45', 'prisms-46', 'prisms-47'),
    },
    {
      id: 'prisms-m8',
      order: 8,
      title: 'Kesilen küp, eğik kütük ve alanlardan hacim',
      summary:
        'Küpten prizma çıkarınca kalan alan, eğik kütüğü ikiye bölme, kartondan küpler, eğik kaptaki su, alanlardan hacim ve silindirde iki turluk en kısa yol.',
      questions: pick('prisms-48', 'prisms-49', 'prisms-50', 'prisms-51', 'prisms-52', 'prisms-53'),
    },
  ],
};
