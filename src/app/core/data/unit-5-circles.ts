import { Question, Unit } from '../models';

/**
 * Unit 5 — Circle and disc.
 * Original questions written in the style of the "Çemberde Açılar — Çözümlü Test"
 * source: central and inscribed angles, tangent-chord angles, tangents from an
 * outside point, and angles formed by intersecting chords and secants; later
 * modules add lengths in the style of "Çemberde Uzunluklar".
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
    id: 'circles-1',
    topic: 'Teğet-kiriş açı ve çap',
    figure: {
      viewBox: '0 25 400 284',
      caption: 'Şekil 1',
      label:
        'O merkezli çemberde [AB] çap; d doğrusu çembere T noktasında teğet, P noktası d üzerinde. [TA], [TC] ve [CB] kirişleri çizilmiş, m(PTA) = 34°, m(TCB) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="170.0" r="115.0"/>
          <path class="ln" d="M50.0,55.0 L350.0,55.0"/>
          <path class="ln" d="M93.4,126.9 L306.6,213.1"/>
          <path class="ln" d="M200.0,55.0 L93.4,126.9"/>
          <path class="ln" d="M200.0,55.0 L160.7,278.1 L306.6,213.1"/>
          <path class="arc" d="M178.0,55.0 A22,22 0 0 0 181.8,67.3"/>
          <text class="val" x="154.1" y="74.0" text-anchor="middle">34°</text>
          <path class="arc" d="M164.5,256.4 A22,22 0 0 1 180.8,269.1"/>
          <text class="val" x="182.2" y="255.5" text-anchor="middle">x</text>
          <circle class="pt" cx="200.0" cy="170.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="55.0" r="3.2"/>
          <circle class="pt" cx="93.4" cy="126.9" r="3.2"/>
          <circle class="pt" cx="306.6" cy="213.1" r="3.2"/>
          <circle class="pt" cx="160.7" cy="278.1" r="3.2"/>
          <circle class="pt" cx="70.0" cy="55.0" r="3.2"/>
          <text x="204.0" y="161.0">O</text>
          <text x="200.0" y="44.0" text-anchor="middle">T</text>
          <text x="78.5" y="125.9" text-anchor="end">A</text>
          <text x="321.5" y="226.1">B</text>
          <text x="155.2" y="300.1" text-anchor="middle">C</text>
          <text x="70.0" y="43.0" text-anchor="middle">P</text>
          <text x="352" y="47.0">d</text>
        `,
    },
    given: ['d doğrusu çembere T noktasında teğet', '[AB] çap', 'm(PTA) = 34°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(TCB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '34' },
      { key: 'B', text: '56' },
      { key: 'C', text: '62' },
      { key: 'D', text: '68' },
      { key: 'E', text: '72' },
    ],
    answer: 'B',
    hint: 'Teğet-kiriş açısı, gördüğü yayın yarısıdır; önce TA yayını bul.',
    solution: [
      {
        title: 'Teğet-kiriş açısı',
        detail: 'm(PTA) = 34° teğet-kiriş açısı olduğundan gördüğü TA yayı 2·34 = 68°’dir.',
      },
      {
        title: 'Çapı kullan',
        detail:
          '[AB] çap olduğundan A’dan B’ye T üzerinden giden yay 180°’dir; m(TB) yayı = 180 − 68 = 112° olur.',
      },
      {
        title: 'Çevre açı',
        detail: 'x = m(TCB), TB yayını gören çevre açıdır: x = 112 : 2 = 56° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'circles-2',
    topic: 'Dış noktadan çizilen teğetler',
    figure: {
      viewBox: '0 42 400 236',
      caption: 'Şekil 2',
      label:
        'O merkezli çembere dışındaki P noktasından çizilen iki teğet çembere A ve B noktalarında değiyor; C noktası büyük yay üzerinde ve [CA], [CB] kirişleri çizilmiş, m(ACB) = x.',
      svg: `
          <circle class="ln" cx="150.0" cy="160.0" r="110.0"/>
          <path class="ln" d="M220.7,75.7 L321.1,160.0 L220.7,244.3"/>
          <path class="ln" d="M220.7,75.7 L40.0,160.0 L220.7,244.3"/>
          <path class="arc" d="M63.6,149.0 A26,26 0 0 1 63.6,171.0"/>
          <text class="val" x="79.0" y="165.0" text-anchor="middle">x</text>
          <circle class="pt" cx="150.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="220.7" cy="75.7" r="3.2"/>
          <circle class="pt" cx="220.7" cy="244.3" r="3.2"/>
          <circle class="pt" cx="40.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="321.1" cy="160.0" r="3.2"/>
          <text x="158.0" y="165.0">O</text>
          <text x="231.0" y="68.5">A</text>
          <text x="231.0" y="263.5">B</text>
          <text x="24.0" y="165.0" text-anchor="end">C</text>
          <text x="331.1" y="165.0">P</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 42 400 236',
      caption: 'Şekil 2',
      label: 'Aynı şekilde [OA] ve [OB] yarıçapları kesikli çizilmiş; yarıçaplar teğetlere dik.',
      svg: `
          <circle class="ln" cx="150.0" cy="160.0" r="110.0"/>
          <path class="ln" d="M220.7,75.7 L321.1,160.0 L220.7,244.3"/>
          <path class="ln" d="M220.7,75.7 L40.0,160.0 L220.7,244.3"/>
          <path class="aux" d="M220.7,75.7 L150.0,160.0 L220.7,244.3"/>
          <path class="ln" d="M214.3,83.4 L221.9,89.8 L228.4,82.2"/>
          <path class="ln" d="M214.3,236.6 L221.9,230.2 L228.4,237.8"/>
          <path class="arc" d="M63.6,149.0 A26,26 0 0 1 63.6,171.0"/>
          <text class="val" x="79.0" y="165.0" text-anchor="middle">x</text>
          <circle class="pt" cx="150.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="220.7" cy="75.7" r="3.2"/>
          <circle class="pt" cx="220.7" cy="244.3" r="3.2"/>
          <circle class="pt" cx="40.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="321.1" cy="160.0" r="3.2"/>
          <text x="158.0" y="165.0">O</text>
          <text x="231.0" y="68.5">A</text>
          <text x="231.0" y="263.5">B</text>
          <text x="24.0" y="165.0" text-anchor="end">C</text>
          <text x="331.1" y="165.0">P</text>
        `,
    },
    given: ['[PA ve [PB çembere A ve B noktalarında teğet', 'm(APB) = x + 30°', 'm(ACB) = x'],
    stem: [],
    ask: 'Buna göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '80' },
    ],
    answer: 'A',
    hint: 'O merkezini A ve B’ye birleştir; OAPB dörtgeninde iki dik açı vardır.',
    solution: [
      {
        title: 'Yarıçapları çiz',
        detail: 'Teğet, değme noktasındaki yarıçapa diktir: m(OAP) = m(OBP) = 90°.',
      },
      {
        title: 'Merkez açı',
        detail: 'OAPB dörtgeninde m(AOB) = 360 − 90 − 90 − (x + 30) = 150 − x olur.',
      },
      {
        title: 'Çevre açı',
        detail: 'C büyük yay üzerinde olduğundan m(ACB) = m(AOB) : 2 → x = (150 − x) : 2.',
      },
      { title: 'Sonuç', detail: '2x = 150 − x → 3x = 150 → x = 50° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'circles-3',
    topic: 'Çeyrek çemberde ikizkenar üçgenler',
    figure: {
      viewBox: '0 20 400 298',
      caption: 'Şekil 3',
      label:
        'O merkezli çeyrek çemberde [OA] ile [OB] dik; C noktası AB yayı üzerinde, [BC] ve [CA] çizilmiş, m(OBC) = 62°, m(OAC) = x.',
      svg: `
          <path class="ln" d="M80.0,50.0 L80.0,290.0 L320.0,290.0"/>
          <path class="ln" d="M80.0,50.0 A240,240 0 0 1 320.0,290.0"/>
          <path class="ln" d="M80.0,50.0 L279.0,155.8 L320.0,290.0"/>
          <path class="ln" d="M92.0,290.0 L92.0,278.0 L80.0,278.0"/>
          <path class="arc" d="M80.0,80.0 A30,30 0 0 0 106.5,64.1"/>
          <text class="val" x="103.7" y="94.4" text-anchor="middle">62°</text>
          <path class="arc" d="M294.0,290.0 A26,26 0 0 1 312.4,265.1"/>
          <text class="val" x="287.8" y="271.2" text-anchor="middle">x</text>
          <circle class="pt" cx="80.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="279.0" cy="155.8" r="3.2"/>
          <text x="72.0" y="308.0" text-anchor="end">O</text>
          <text x="324.0" y="310.0" text-anchor="middle">A</text>
          <text x="80.0" y="38.0" text-anchor="middle">B</text>
          <text x="292.2" y="151.8">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 298',
      caption: 'Şekil 3',
      label: 'Aynı şekilde [OC] yarıçapı kesikli çizilmiş; OBC ve OCA ikizkenar üçgenler.',
      svg: `
          <path class="ln" d="M80.0,50.0 L80.0,290.0 L320.0,290.0"/>
          <path class="ln" d="M80.0,50.0 A240,240 0 0 1 320.0,290.0"/>
          <path class="ln" d="M80.0,50.0 L279.0,155.8 L320.0,290.0"/>
          <path class="aux" d="M80.0,290.0 L279.0,155.8"/>
          <path class="ln" d="M92.0,290.0 L92.0,278.0 L80.0,278.0"/>
          <path class="arc" d="M80.0,80.0 A30,30 0 0 0 106.5,64.1"/>
          <text class="val" x="103.7" y="94.4" text-anchor="middle">62°</text>
          <path class="arc" d="M294.0,290.0 A26,26 0 0 1 312.4,265.1"/>
          <text class="val" x="287.8" y="271.2" text-anchor="middle">x</text>
          <circle class="pt" cx="80.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="279.0" cy="155.8" r="3.2"/>
          <text x="72.0" y="308.0" text-anchor="end">O</text>
          <text x="324.0" y="310.0" text-anchor="middle">A</text>
          <text x="80.0" y="38.0" text-anchor="middle">B</text>
          <text x="292.2" y="151.8">C</text>
        `,
    },
    given: ['O, çeyrek çemberin merkezi', 'C, AB yayı üzerinde', 'm(OBC) = 62°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(OAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '62' },
      { key: 'B', text: '65' },
      { key: 'C', text: '68' },
      { key: 'D', text: '70' },
      { key: 'E', text: '73' },
    ],
    answer: 'E',
    hint: '[OC] yarıçapını çiz: |OB| = |OC| = |OA| olduğundan iki ikizkenar üçgen oluşur.',
    solution: [
      {
        title: 'Yarıçapı çiz',
        detail: '|OB| = |OC| olduğundan OBC ikizkenardır: m(OCB) = 62°, m(BOC) = 180 − 124 = 56°.',
      },
      { title: 'Kalan merkez açı', detail: 'm(AOB) = 90° olduğundan m(COA) = 90 − 56 = 34° olur.' },
      {
        title: 'İkinci ikizkenar',
        detail:
          '|OC| = |OA| olduğundan OCA üçgeninde taban açıları eşittir: x = (180 − 34) : 2 = 73° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'circles-4',
    topic: 'Aynı yayı gören çevre açılar',
    figure: {
      viewBox: '0 11 400 287',
      caption: 'Şekil 4',
      label:
        'Çember üzerinde A, B, C, D noktaları; ABD ve ACD üçgenleri çizilmiş, m(CAD) = 50°, m(BDC) = 25°.',
      svg: `
          <circle class="ln" cx="200.0" cy="165.0" r="125.0"/>
          <path class="ln" d="M200.0,40.0 L82.5,122.2 L280.3,260.8 L200.0,40.0"/>
          <path class="ln" d="M200.0,40.0 L91.7,227.5 L280.3,260.8"/>
          <path class="arc" d="M183.0,69.4 A34,34 0 0 0 211.6,71.9"/>
          <text class="val" x="195.5" y="96.8" text-anchor="middle">50°</text>
          <path class="arc" d="M247.6,237.8 A40,40 0 0 0 241.0,253.8"/>
          <text class="val" x="226.8" y="243.6" text-anchor="middle">25°</text>
          <circle class="pt" cx="200.0" cy="40.0" r="3.2"/>
          <circle class="pt" cx="82.5" cy="122.2" r="3.2"/>
          <circle class="pt" cx="91.7" cy="227.5" r="3.2"/>
          <circle class="pt" cx="280.3" cy="260.8" r="3.2"/>
          <text x="200.0" y="29.0" text-anchor="middle">A</text>
          <text x="67.5" y="121.8" text-anchor="end">B</text>
          <text x="77.9" y="242.5" text-anchor="end">C</text>
          <text x="290.6" y="280.0">D</text>
        `,
    },
    given: ['ABD ve ACD birer üçgen', 'm(CAD) = 50°', 'm(BDC) = 25°'],
    stem: [],
    ask: 'Yukarıdaki şekilde m(ABD) = 2·m(ADB) olduğuna göre, m(ABD) kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'Her çevre açı gördüğü yayın yarısıdır; bilinen açılardan CD ve BC yaylarını bul.',
    solution: [
      {
        title: 'Bilinen yaylar',
        detail: 'm(CAD) = 50° → CD yayı 100°; m(BDC) = 25° → BC yayı 50°.',
      },
      { title: 'Kalan yaylar', detail: 'AB yayı + AD yayı = 360 − 100 − 50 = 210° olur.' },
      {
        title: 'Oranı kullan',
        detail:
          'm(ABD), AD yayını; m(ADB), AB yayını görür. m(ABD) = 2·m(ADB) olduğundan AD yayı = 2·AB yayı.',
      },
      {
        title: 'Sonuç',
        detail: '3·AB yayı = 210 → AB yayı = 70°, AD yayı = 140°; m(ABD) = 140 : 2 = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'circles-5',
    topic: 'Teğetler ve çevre açı',
    figure: {
      viewBox: '0 65 400 192',
      caption: 'Şekil 5',
      label:
        'O merkezli çembere dışındaki P noktasından çizilen iki teğet çembere A ve B noktalarında değiyor; D noktası küçük AB yayı üzerinde, [DA] ve [DB] çizilmiş, m(APB) = x, m(ADB) = 3x.',
      svg: `
          <circle class="ln" cx="290.0" cy="160.0" r="70.0"/>
          <path class="ln" d="M268.4,93.4 L63.5,160.0 L268.4,226.6"/>
          <path class="ln" d="M268.4,93.4 L220.0,160.0 L268.4,226.6"/>
          <path class="arc" d="M101.5,147.6 A40,40 0 0 1 101.5,172.4"/>
          <text class="val" x="121.5" y="165.0" text-anchor="middle">x</text>
          <path class="arc" d="M229.4,147.1 A16,16 0 0 1 229.4,172.9"/>
          <text class="val" x="252.0" y="165.0" text-anchor="middle">3x</text>
          <circle class="pt" cx="290.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="268.4" cy="93.4" r="3.2"/>
          <circle class="pt" cx="268.4" cy="226.6" r="3.2"/>
          <circle class="pt" cx="220.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="63.5" cy="160.0" r="3.2"/>
          <text x="298.0" y="165.0">O</text>
          <text x="263.4" y="83.2" text-anchor="middle">A</text>
          <text x="263.4" y="248.8" text-anchor="middle">B</text>
          <text x="212.0" y="180.0" text-anchor="end">D</text>
          <text x="53.5" y="165.0" text-anchor="end">P</text>
        `,
    },
    given: [
      '[PA ve [PB çembere A ve B noktalarında teğet',
      'D, küçük AB yayı üzerinde',
      'm(APB) = x',
      'm(ADB) = 3x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '36' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '54' },
    ],
    answer: 'B',
    hint: 'Dış noktadan çizilen iki teğet arasındaki açı ile küçük yay bütünlerdir.',
    solution: [
      {
        title: 'Küçük yay',
        detail: 'Teğetler arasındaki açı ile küçük AB yayı bütünlerdir: küçük AB yayı = 180 − x.',
      },
      { title: 'Büyük yay', detail: 'Büyük AB yayı = 360 − (180 − x) = 180 + x olur.' },
      {
        title: 'Çevre açı',
        detail: 'D küçük yay üzerinde olduğundan m(ADB) büyük yayı görür: 3x = (180 + x) : 2.',
      },
      { title: 'Sonuç', detail: '6x = 180 + x → 5x = 180 → x = 36° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'circles-6',
    topic: 'Dış açı ve eşit kirişler',
    figure: {
      viewBox: '0 40 400 252',
      caption: 'Şekil 6',
      label:
        'A noktası çemberin dışında; A’dan çıkan iki doğru çemberi D, B ve E, C noktalarında kesiyor. [DC] ve [BC] çizilmiş, |EC| = |BD|, m(CAB) = 44°, m(ACD) = 18°, m(DCB) = x.',
      svg: `
          <circle class="ln" cx="265.0" cy="165.0" r="110.0"/>
          <path class="ln" d="M316.6,67.9 L76.3,165.0 L316.6,262.1 L316.6,67.9"/>
          <path class="ln" d="M160.4,199.0 L316.6,67.9"/>
          <path class="tick" d="M233.9,94.8 L238.4,105.9"/>
          <path class="tick" d="M238.6,92.9 L243.1,104.1"/>
          <path class="tick" d="M238.4,224.1 L233.9,235.2"/>
          <path class="tick" d="M243.1,225.9 L238.6,237.1"/>
          <path class="arc" d="M107.8,152.3 A34,34 0 0 1 107.8,177.7"/>
          <text class="val" x="130.3" y="170.0" text-anchor="middle">44°</text>
          <path class="arc" d="M277.7,83.6 A42,42 0 0 0 284.5,94.9"/>
          <text class="val" x="263.5" y="104.8" text-anchor="middle">18°</text>
          <path class="arc" d="M299.8,82.0 A22,22 0 0 0 316.6,89.9"/>
          <text class="val" x="301.4" y="105.5" text-anchor="middle">x</text>
          <circle class="pt" cx="76.3" cy="165.0" r="3.2"/>
          <circle class="pt" cx="160.4" cy="131.0" r="3.2"/>
          <circle class="pt" cx="160.4" cy="199.0" r="3.2"/>
          <circle class="pt" cx="316.6" cy="262.1" r="3.2"/>
          <circle class="pt" cx="316.6" cy="67.9" r="3.2"/>
          <text x="66.3" y="170.0" text-anchor="end">A</text>
          <text x="145.2" y="131.1" text-anchor="end">E</text>
          <text x="145.2" y="210.9" text-anchor="end">D</text>
          <text x="324.2" y="283.3">B</text>
          <text x="324.2" y="58.7">C</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D, B, C, E noktaları çember üzerinde',
      '|EC| = |BD|',
      'm(CAB) = 44°',
      'm(ACD) = 18°',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde m(DCB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'Eşit kirişlerin gördüğü yaylar eşittir; A açısını yaylar cinsinden yaz.',
    solution: [
      { title: 'DE yayı', detail: 'm(ACD) = 18° çevre açı olduğundan DE yayı 36°’dir.' },
      {
        title: 'Dış açı',
        detail:
          'A çemberin dışında olduğundan m(A) = (BC yayı − DE yayı) : 2 → 44 = (BC yayı − 36) : 2, BC yayı = 124°.',
      },
      {
        title: 'Eşit kirişler',
        detail:
          '|EC| = |BD| olduğundan EC ve BD yayları eşittir: 2·BD yayı = 360 − 124 − 36 = 200 → BD yayı = 100°.',
      },
      {
        title: 'Sonuç',
        detail: 'x = m(DCB), BD yayını gören çevre açıdır: x = 100 : 2 = 50° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 7
  {
    id: 'circles-7',
    topic: 'Kesişen kirişler arasındaki açı',
    figure: {
      viewBox: '0 25 400 294',
      caption: 'Şekil 7',
      label:
        'Çember üzerinde A, B, C, D noktaları; [AC] ve [BD] kirişleri E noktasında kesişiyor. [AB], [BC] ve [DA] çizilmiş, m(ADB) = 38°, m(DBC) = 27°, m(AEB) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="165.0" r="125.0"/>
          <path class="ln" d="M104.2,84.7 L286.8,254.9"/>
          <path class="ln" d="M254.8,52.7 L178.3,288.1"/>
          <path class="ln" d="M178.3,288.1 L104.2,84.7"/>
          <path class="ln" d="M254.8,52.7 L286.8,254.9"/>
          <path class="ln" d="M104.2,84.7 L254.8,52.7"/>
          <path class="arc" d="M164.6,250.5 A40,40 0 0 1 190.7,250.1"/>
          <text class="val" x="177.3" y="235.1" text-anchor="middle">38°</text>
          <path class="arc" d="M244.3,85.0 A34,34 0 0 0 260.1,86.2"/>
          <text class="val" x="250.7" y="109.5" text-anchor="middle">27°</text>
          <path class="arc" d="M198.6,172.7 A18,18 0 0 1 217.4,167.8"/>
          <text class="val" x="203.8" y="159.0" text-anchor="middle">x</text>
          <circle class="pt" cx="104.2" cy="84.7" r="3.2"/>
          <circle class="pt" cx="254.8" cy="52.7" r="3.2"/>
          <circle class="pt" cx="286.8" cy="254.9" r="3.2"/>
          <circle class="pt" cx="178.3" cy="288.1" r="3.2"/>
          <circle class="pt" cx="211.8" cy="185.0" r="3.2"/>
          <text x="92.0" y="79.4" text-anchor="end">A</text>
          <text x="261.8" y="43.3">B</text>
          <text x="297.9" y="273.4">C</text>
          <text x="175.5" y="310.9" text-anchor="middle">D</text>
          <text x="211.8" y="209.0" text-anchor="middle">E</text>
        `,
    },
    given: ['[AC] ∩ [BD] = {E}', 'm(ADB) = 38°', 'm(DBC) = 27°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AEB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '70' },
    ],
    answer: 'D',
    hint: 'Aynı yayı gören çevre açılar eşittir: m(ACB) = m(ADB).',
    solution: [
      {
        title: 'Aynı yayı gören açılar',
        detail: 'm(ACB) ve m(ADB) ikisi de AB yayını görür: m(ACB) = 38°.',
      },
      {
        title: 'Dış açı',
        detail: 'x = m(AEB), BEC üçgeninin E’deki dış açısıdır: x = m(EBC) + m(ECB).',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 27 + 38 = 65° bulunur. (Yaylarla: (AB yayı + DC yayı) : 2 = (76 + 54) : 2 = 65°.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'circles-8',
    topic: 'Kesenler arasındaki açı',
    figure: {
      viewBox: '0 47 400 228',
      caption: 'Şekil 8',
      label:
        'P noktası çemberin dışında; P’den çıkan iki kesen çemberi A, B ve D, C noktalarında kesiyor. [BD] kirişi çizilmiş, m(ABD) = 20°, m(BDC) = 55°, m(APD) = x.',
      svg: `
          <circle class="ln" cx="280.0" cy="160.0" r="105.0"/>
          <path class="ln" d="M67.4,160.0 L340.2,74.0"/>
          <path class="ln" d="M67.4,160.0 L340.2,246.0"/>
          <path class="ln" d="M340.2,74.0 L181.3,195.9"/>
          <path class="arc" d="M200.4,181.3 A24,24 0 0 1 204.2,203.1"/>
          <text class="val" x="222.7" y="193.6" text-anchor="middle">55°</text>
          <path class="arc" d="M302.1,86.0 A40,40 0 0 0 308.5,98.3"/>
          <text class="val" x="288.8" y="105.8" text-anchor="middle">20°</text>
          <path class="arc" d="M99.9,149.8 A34,34 0 0 1 99.9,170.2"/>
          <text class="val" x="117.4" y="165.0" text-anchor="middle">x</text>
          <circle class="pt" cx="67.4" cy="160.0" r="3.2"/>
          <circle class="pt" cx="181.3" cy="124.1" r="3.2"/>
          <circle class="pt" cx="340.2" cy="74.0" r="3.2"/>
          <circle class="pt" cx="340.2" cy="246.0" r="3.2"/>
          <circle class="pt" cx="181.3" cy="195.9" r="3.2"/>
          <text x="57.4" y="165.0" text-anchor="end">P</text>
          <text x="166.3" y="123.6" text-anchor="end">A</text>
          <text x="349.4" y="65.9">B</text>
          <text x="349.4" y="266.1">C</text>
          <text x="166.3" y="208.4" text-anchor="end">D</text>
        `,
    },
    given: ['P, A, B doğrusal', 'P, D, C doğrusal', 'm(ABD) = 20°', 'm(BDC) = 55°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(APD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '35' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '55' },
    ],
    answer: 'B',
    hint: 'm(BDC), PBD üçgeninin D köşesindeki dış açıdır.',
    solution: [
      {
        title: 'Dış açıyı gör',
        detail: 'P, D, C doğrusal olduğundan m(BDC), PBD üçgeninin D’deki dış açısıdır.',
      },
      {
        title: 'Denklemi kur',
        detail: 'Dış açı, komşu olmayan iki iç açının toplamıdır: 55 = x + 20.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 55 − 20 = 35° bulunur. (Yaylarla: (BC yayı − AD yayı) : 2 = (110 − 40) : 2 = 35°.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'circles-9',
    topic: 'Teğet ile kesenin oluşturduğu açı',
    figure: {
      viewBox: '0 43 400 269',
      caption: 'Şekil 9',
      label:
        'O merkezli çembere ABC üçgeni çizilmiş; A noktasındaki teğet ile [CB] kenarının uzantısı P noktasında kesişiyor. m(ACB) = 34°, m(ABC) = 108°, m(APB) = x.',
      svg: `
          <circle class="ln" cx="260.0" cy="175.0" r="110.0"/>
          <path class="ln" d="M222.4,71.6 L150.1,171.2 L229.7,280.7 L222.4,71.6"/>
          <path class="ln" d="M108.0,113.3 L222.4,71.6"/>
          <path class="ln" d="M108.0,113.3 L150.1,171.2"/>
          <path class="arc" d="M228.5,246.8 A34,34 0 0 0 209.7,253.2"/>
          <text class="val" x="212.8" y="236.6" text-anchor="middle">34°</text>
          <path class="arc" d="M159.5,158.2 A16,16 0 0 1 159.5,184.1"/>
          <text class="val" x="188.1" y="176.2" text-anchor="middle">108°</text>
          <path class="arc" d="M124.9,107.1 A18,18 0 0 1 118.6,127.8"/>
          <text class="val" x="137.6" y="127.3" text-anchor="middle">x</text>
          <circle class="pt" cx="108.0" cy="113.3" r="3.2"/>
          <circle class="pt" cx="222.4" cy="71.6" r="3.2"/>
          <circle class="pt" cx="229.7" cy="280.7" r="3.2"/>
          <circle class="pt" cx="150.1" cy="171.2" r="3.2"/>
          <circle class="pt" cx="260.0" cy="175.0" r="3.2"/>
          <text x="98.0" y="118.3" text-anchor="end">P</text>
          <text x="216.9" y="61.6" text-anchor="middle">A</text>
          <text x="225.3" y="303.1" text-anchor="middle">C</text>
          <text x="140.1" y="189.2" text-anchor="end">B</text>
          <text x="268.0" y="180.0">O</text>
        `,
    },
    given: ['[PA çembere A noktasında teğet', 'P, B, C doğrusal', 'm(ACB) = 34°', 'm(ABC) = 108°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(APB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '68' },
      { key: 'C', text: '70' },
      { key: 'D', text: '74' },
      { key: 'E', text: '76' },
    ],
    answer: 'D',
    hint: 'Teğet-kiriş açısı m(PAB), aynı AB yayını gören çevre açı m(ACB)’ye eşittir.',
    solution: [
      {
        title: 'Teğet-kiriş açısı',
        detail: 'm(PAB) ile m(ACB) ikisi de AB yayını görür: m(PAB) = 34°.',
      },
      {
        title: 'B’deki komşu açı',
        detail: 'P, B, C doğrusal olduğundan m(ABP) = 180 − 108 = 72° olur.',
      },
      { title: 'Sonuç', detail: 'PAB üçgeninde x = 180 − 34 − 72 = 74° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 10
  {
    id: 'circles-10',
    topic: 'Çember içinde kesişen kirişler',
    figure: {
      viewBox: '0 27 400 295',
      caption: 'Şekil 10',
      label:
        'O merkezli çemberde [AB] çap; C ve D noktaları çapın iki yanında. [AC], [CD] ve [DB] çizilmiş, [CD] çapı E noktasında kesiyor. m(CAB) = 26°, m(ABD) = 38°, m(CEB) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="165.0" r="130.0"/>
          <path class="ln" d="M70.0,165.0 L330.0,165.0"/>
          <path class="ln" d="M70.0,165.0 L280.0,62.6 L168.6,291.1 L330.0,165.0"/>
          <path class="arc" d="M114.0,165.0 A44,44 0 0 0 109.5,145.7"/>
          <text class="val" x="132.4" y="155.6" text-anchor="middle">26°</text>
          <path class="arc" d="M290.0,165.0 A40,40 0 0 0 298.5,189.6"/>
          <text class="val" x="275.2" y="188.9" text-anchor="middle">38°</text>
          <path class="arc" d="M238.0,148.8 A18,18 0 0 1 248.1,165.0"/>
          <text class="val" x="257.2" y="153.0" text-anchor="middle">x</text>
          <circle class="pt" cx="70.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="62.6" r="3.2"/>
          <circle class="pt" cx="168.6" cy="291.1" r="3.2"/>
          <circle class="pt" cx="200.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="230.1" cy="165.0" r="3.2"/>
          <text x="54.0" y="170.0" text-anchor="end">A</text>
          <text x="346.0" y="170.0">B</text>
          <text x="289.9" y="55.0">C</text>
          <text x="164.7" y="313.7" text-anchor="middle">D</text>
          <text x="194.0" y="156.0" text-anchor="end">O</text>
          <text x="220.1" y="157.0" text-anchor="end">E</text>
        `,
    },
    given: ['[AB] çap', '[CD] ∩ [AB] = {E}', 'm(CAB) = 26°', 'm(ABD) = 38°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CEB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '52' },
      { key: 'B', text: '56' },
      { key: 'C', text: '64' },
      { key: 'D', text: '72' },
      { key: 'E', text: '76' },
    ],
    answer: 'C',
    hint: 'Çember içinde kesişen iki kirişin arasındaki açı, gördüğü iki yayın toplamının yarısıdır.',
    solution: [
      { title: 'CB yayı', detail: 'm(CAB) = 26° çevre açı olduğundan CB yayı 52°’dir.' },
      { title: 'AD yayı', detail: 'm(ABD) = 38° çevre açı olduğundan AD yayı 76°’dir.' },
      { title: 'Sonuç', detail: 'x = (CB yayı + AD yayı) : 2 = (52 + 76) : 2 = 64° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'circles-11',
    topic: 'Merkez açı ve ikizkenar üçgenler',
    figure: {
      viewBox: '0 28 400 294',
      caption: 'Şekil 11',
      label:
        'O merkezli çembere ABC üçgeni çizilmiş, O üçgenin içinde; [OA], [OB], [OC] yarıçapları çizilmiş. m(OAB) = 24°, m(OCB) = 40°, m(OAC) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="168.0" r="130.0"/>
          <path class="ln" d="M135.0,55.4 L159.8,291.6 L328.7,186.1 L135.0,55.4"/>
          <path class="ln" d="M135.0,55.4 L200.0,168.0"/>
          <path class="ln" d="M159.8,291.6 L200.0,168.0"/>
          <path class="ln" d="M328.7,186.1 L200.0,168.0"/>
          <path class="arc" d="M148.0,77.9 A26,26 0 0 1 137.7,81.3"/>
          <text class="val" x="149.8" y="106.1" text-anchor="middle">24°</text>
          <path class="arc" d="M183.1,87.8 A58,58 0 0 1 164.0,105.6"/>
          <text class="val" x="186.8" y="116.0" text-anchor="middle">x</text>
          <path class="arc" d="M293.1,181.1 A36,36 0 0 0 298.2,205.2"/>
          <text class="val" x="275.9" y="202.3" text-anchor="middle">40°</text>
          <circle class="pt" cx="135.0" cy="55.4" r="3.2"/>
          <circle class="pt" cx="159.8" cy="291.6" r="3.2"/>
          <circle class="pt" cx="328.7" cy="186.1" r="3.2"/>
          <circle class="pt" cx="200.0" cy="168.0" r="3.2"/>
          <text x="127.0" y="46.6" text-anchor="end">A</text>
          <text x="154.9" y="313.9" text-anchor="middle">B</text>
          <text x="344.6" y="193.3">C</text>
          <text x="204.0" y="158.0">O</text>
        `,
    },
    given: ['O, çemberin merkezi', 'm(OAB) = 24°', 'm(OCB) = 40°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(OAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '26' },
      { key: 'B', text: '28' },
      { key: 'C', text: '30' },
      { key: 'D', text: '32' },
      { key: 'E', text: '34' },
    ],
    answer: 'A',
    hint: 'Yarıçaplar eşit olduğundan OAB, OBC ve OCA üçgenlerinin üçü de ikizkenardır.',
    solution: [
      {
        title: 'İkizkenar üçgenler',
        detail: '|OA| = |OB| = |OC| olduğundan m(OBA) = 24°, m(OBC) = 40° ve m(OCA) = x olur.',
      },
      { title: 'Açıları topla', detail: 'ABC üçgeninin iç açıları: 2·24 + 2·40 + 2x = 180.' },
      { title: 'Sonuç', detail: '128 + 2x = 180 → 2x = 52 → x = 26° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'circles-12',
    topic: 'Teğet ve çap',
    figure: {
      viewBox: '0 90 400 218',
      caption: 'Şekil 12',
      label:
        'O merkezli çemberde [AB] çap; P noktası AB doğrusu üzerinde, çemberin dışında. [PT çembere T noktasında teğet; [TA] ve [TB] çizilmiş, m(TPA) = 34°, m(TBA) = x.',
      svg: `
          <circle class="ln" cx="270.0" cy="200.0" r="100.0"/>
          <path class="ln" d="M91.2,200.0 L370.0,200.0"/>
          <path class="ln" d="M91.2,200.0 L214.1,117.1"/>
          <path class="ln" d="M170.0,200.0 L214.1,117.1 L370.0,200.0"/>
          <path class="arc" d="M129.2,200.0 A38,38 0 0 0 122.7,178.8"/>
          <text class="val" x="144.7" y="188.6" text-anchor="middle">34°</text>
          <path class="arc" d="M330.0,200.0 A40,40 0 0 1 334.7,181.2"/>
          <text class="val" x="315.7" y="191.5" text-anchor="middle">x</text>
          <circle class="pt" cx="91.2" cy="200.0" r="3.2"/>
          <circle class="pt" cx="170.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="370.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="214.1" cy="117.1" r="3.2"/>
          <circle class="pt" cx="270.0" cy="200.0" r="3.2"/>
          <text x="81.2" y="205.0" text-anchor="end">P</text>
          <text x="164.0" y="220.0" text-anchor="end">A</text>
          <text x="378.0" y="205.0">B</text>
          <text x="205.1" y="108.8" text-anchor="end">T</text>
          <text x="270.0" y="220.0" text-anchor="middle">O</text>
        `,
    },
    given: ['[PT çembere T noktasında teğet', 'P, A, O, B doğrusal', 'm(TPA) = 34°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(TBA) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '24' },
      { key: 'C', text: '26' },
      { key: 'D', text: '28' },
      { key: 'E', text: '34' },
    ],
    answer: 'D',
    hint: '[OT] yarıçapı teğete diktir; POT üçgeninden merkez açıyı bul.',
    solution: [
      {
        title: 'Yarıçap teğete dik',
        detail: 'm(OTP) = 90° olduğundan POT üçgeninde m(TOA) = 180 − 90 − 34 = 56°.',
      },
      { title: 'Merkez açı ve yay', detail: 'm(TOA) merkez açı olduğundan TA yayı 56°’dir.' },
      {
        title: 'Sonuç',
        detail: 'x = m(TBA), TA yayını gören çevre açıdır: x = 56 : 2 = 28° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'circles-13',
    topic: 'Kiriş uzunluğu ve merkez açı',
    figure: {
      viewBox: '0 28 400 272',
      caption: 'Şekil 13',
      label:
        'O merkezli çemberde E, D ve C noktaları çember üzerinde; [OE], [OD], [OC] yarıçapları ile [ED] ve [DC] kirişleri çizilmiş, m(EDC) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="165.0" r="110.0"/>
          <path class="ln" d="M90.0,165.0 L200.0,165.0 L295.3,220.0"/>
          <path class="ln" d="M200.0,165.0 L200.0,55.0"/>
          <path class="ln" d="M90.0,165.0 L200.0,55.0 L295.3,220.0"/>
          <path class="arc" d="M183.0,72.0 A24,24 0 0 0 212.0,75.8"/>
          <text class="val" x="194.8" y="99.7" text-anchor="middle">α</text>
          <circle class="pt" cx="200.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="55.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="295.3" cy="220.0" r="3.2"/>
          <text x="206.0" y="183.0">O</text>
          <text x="200.0" y="44.0" text-anchor="middle">D</text>
          <text x="74.0" y="170.0" text-anchor="end">E</text>
          <text x="309.1" y="233.0">C</text>
        `,
    },
    given: ['O, çemberin merkezi', '|ED| = r√2', '|DC| = r√3'],
    stem: [],
    ask: 'Yukarıdaki şekilde çemberin yarıçapı r olduğuna göre, m(EDC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'D',
    hint: 'OED ve ODC üçgenlerinin kenarlarını yarıçap cinsinden yaz; hangi özel üçgenler olduklarına bak.',
    solution: [
      {
        title: 'OED üçgeni',
        detail:
          '|OE| = |OD| = r ve |ED| = r√2 olduğundan OED ikizkenar dik üçgendir: m(EOD) = 90°, m(ODE) = 45°.',
      },
      {
        title: 'ODC üçgeni',
        detail:
          '|OD| = |OC| = r ve |DC| = r√3 olduğundan tepe açısı m(DOC) = 120°, taban açıları (180 − 120) : 2 = 30°’dir; m(ODC) = 30°.',
      },
      { title: 'Sonuç', detail: 'α = m(ODE) + m(ODC) = 45 + 30 = 75° bulunur.' },
      {
        title: 'Kontrol',
        detail: 'D’yi içermeyen EC yayı 360 − 90 − 120 = 150°’dir; çevre açı 150 : 2 = 75°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'circles-14',
    topic: 'Çevrel çemberde çevre açılar',
    figure: {
      viewBox: '0 22 400 262',
      caption: 'Şekil 14',
      label:
        'ABC üçgeninin çevrel çemberi çizilmiş; D noktası AB yayı, E noktası AC yayı üzerinde. [DA], [DC], [EA] ve [EB] çizilmiş, m(ADC) = 64°, m(AEB) = 48°, m(BAC) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="165.0" r="115.0"/>
          <path class="ln" d="M200.0,50.0 L85.6,177.0 L290.6,235.8 L200.0,50.0"/>
          <path class="ln" d="M200.0,50.0 L105.8,99.0 L290.6,235.8"/>
          <path class="ln" d="M200.0,50.0 L299.6,107.5 L85.6,177.0"/>
          <path class="arc" d="M123.5,112.1 A22,22 0 0 0 125.3,88.9"/>
          <text class="val" x="147.7" y="107.3" text-anchor="middle">64°</text>
          <path class="arc" d="M280.5,96.5 A22,22 0 0 0 278.7,114.3"/>
          <text class="val" x="257.8" y="108.1" text-anchor="middle">48°</text>
          <path class="arc" d="M185.3,66.3 A22,22 0 0 0 209.6,69.8"/>
          <text class="val" x="195.0" y="90.6" text-anchor="middle">α</text>
          <circle class="pt" cx="200.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="85.6" cy="177.0" r="3.2"/>
          <circle class="pt" cx="290.6" cy="235.8" r="3.2"/>
          <circle class="pt" cx="105.8" cy="99.0" r="3.2"/>
          <circle class="pt" cx="299.6" cy="107.5" r="3.2"/>
          <text x="200.0" y="39.0" text-anchor="middle">A</text>
          <text x="69.7" y="183.7" text-anchor="end">B</text>
          <text x="303.2" y="250.7">C</text>
          <text x="92.7" y="94.9" text-anchor="end">D</text>
          <text x="313.4" y="104.5">E</text>
        `,
    },
    given: [
      'Şekilde ABC üçgeninin çevrel çemberi çizilmiştir.',
      'D ve E noktaları çember üzerinde',
      'm(ADC) = 64°',
      'm(AEB) = 48°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '68' },
      { key: 'C', text: '72' },
      { key: 'D', text: '76' },
      { key: 'E', text: '80' },
    ],
    answer: 'B',
    hint: 'Her çevre açı, gördüğü yayın yarısıdır; önce AC ve AB yaylarını bul.',
    solution: [
      {
        title: 'AC yayı',
        detail: 'm(ADC) = 64° çevre açısı AC yayını görür: m(AC) = 2·64 = 128°.',
      },
      { title: 'AB yayı', detail: 'm(AEB) = 48° çevre açısı AB yayını görür: m(AB) = 2·48 = 96°.' },
      {
        title: 'BC yayı',
        detail: 'Çemberin tamamı 360° olduğundan m(BC) = 360 − 128 − 96 = 136°.',
      },
      {
        title: 'Sonuç',
        detail: 'α = m(BAC), BC yayını gören çevre açıdır: α = 136 : 2 = 68° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'circles-15',
    topic: 'Teğet-kiriş açı ve ikizkenar üçgen',
    figure: {
      viewBox: '0 96 400 272',
      caption: 'Şekil 15',
      label:
        'ABC üçgeninde |AB| = |AC|; [BA ışını A, D ve C noktalarından geçen çembere A noktasında teğet. D noktası [BC] üzerinde, [AD] çizilmiş, m(ADC) = 64°, m(DAC) = α.',
      svg: `
          <circle class="ln" cx="253.9" cy="254.4" r="101.7"/>
          <path class="ln" d="M45.0,265.0 L355.0,265.0"/>
          <path class="ln" d="M45.0,265.0 L280.6,117.8"/>
          <path class="ln" d="M200.0,168.1 L152.8,265.0"/>
          <path class="ln" d="M200.0,168.1 L355.0,265.0"/>
          <path class="tick" d="M117.2,212.8 L123.6,223.0"/>
          <path class="tick" d="M121.4,210.2 L127.8,220.3"/>
          <path class="tick" d="M278.6,210.2 L272.2,220.3"/>
          <path class="tick" d="M282.8,212.8 L276.4,223.0"/>
          <path class="arc" d="M172.8,265.0 A20,20 0 0 0 161.5,247.0"/>
          <text class="val" x="185.0" y="249.9" text-anchor="middle">64°</text>
          <path class="arc" d="M188.6,191.5 A26,26 0 0 0 222.0,181.9"/>
          <text class="val" x="211.0" y="211.6" text-anchor="middle">α</text>
          <circle class="pt" cx="200.0" cy="168.1" r="3.2"/>
          <circle class="pt" cx="45.0" cy="265.0" r="3.2"/>
          <circle class="pt" cx="355.0" cy="265.0" r="3.2"/>
          <circle class="pt" cx="152.8" cy="265.0" r="3.2"/>
          <text x="194.0" y="158.1" text-anchor="end">A</text>
          <text x="37.0" y="270.0" text-anchor="end">B</text>
          <text x="363.0" y="283.0">C</text>
          <text x="146.8" y="285.0" text-anchor="end">D</text>
        `,
    },
    given: ['[BA, çembere A noktasında teğet', '|AB| = |AC|', 'm(ADC) = 64°', 'm(DAC) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '76' },
      { key: 'B', text: '80' },
      { key: 'C', text: '84' },
      { key: 'D', text: '88' },
      { key: 'E', text: '92' },
    ],
    answer: 'C',
    hint: 'Teğet-kiriş açısı m(BAD), aynı AD yayını gören çevre açı m(ACD)’ye eşittir.',
    solution: [
      {
        title: 'İkizkenar üçgen',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB); bu açıya y diyelim.',
      },
      {
        title: 'Teğet-kiriş açısı',
        detail: 'm(BAD) teğet-kiriş açısı ve m(ACD) çevre açısı aynı AD yayını görür: m(BAD) = y.',
      },
      {
        title: 'Dış açı',
        detail: 'ABD üçgeninde D’deki dış açı: m(ADC) = y + y = 2y = 64° → y = 32°.',
      },
      { title: 'Sonuç', detail: 'ADC üçgeninde α = 180 − 64 − 32 = 84° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'circles-16',
    topic: 'Dış noktadan teğetler ve yay',
    figure: {
      viewBox: '0 28 400 280',
      caption: 'Şekil 16',
      label:
        'O merkezli çembere P noktasından çizilen [PE ışını çembere A, [PF ışını B noktasında teğet; [AB] kirişi çizilmiş, T noktası büyük yay üzerinde. m(EAB) = 3x + 20°, m(EPF) = 2x.',
      svg: `
          <circle class="ln" cx="165.0" cy="165.0" r="88.0"/>
          <path class="ln" d="M158.1,52.8 L318.4,165.0 L158.1,277.2"/>
          <path class="ln" d="M215.5,92.9 L215.5,237.1"/>
          <path class="arc" d="M199.1,81.4 A20,20 0 0 0 215.5,112.9"/>
          <text class="val" x="171.1" y="121.0" text-anchor="middle">3x + 20°</text>
          <path class="arc" d="M293.8,147.8 A30,30 0 0 0 293.8,182.2"/>
          <text class="val" x="272.4" y="170.0" text-anchor="middle">2x</text>
          <circle class="pt" cx="165.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="215.5" cy="92.9" r="3.2"/>
          <circle class="pt" cx="215.5" cy="237.1" r="3.2"/>
          <circle class="pt" cx="77.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="318.4" cy="165.0" r="3.2"/>
          <circle class="pt" cx="158.1" cy="52.8" r="3.2"/>
          <circle class="pt" cx="158.1" cy="277.2" r="3.2"/>
          <text x="171.0" y="183.0">O</text>
          <text x="221.5" y="84.9">A</text>
          <text x="221.5" y="257.1">B</text>
          <text x="61.0" y="170.0" text-anchor="end">T</text>
          <text x="328.4" y="170.0">P</text>
          <text x="152.1" y="52.8" text-anchor="end">E</text>
          <text x="152.1" y="289.2" text-anchor="end">F</text>
        `,
    },
    given: [
      '[PE, A noktasında; [PF, B noktasında O merkezli çembere teğet',
      'm(EAB) = 3x + 20°',
      'm(EPF) = 2x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, T noktasını içeren ATB yayının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '220' },
      { key: 'B', text: '230' },
      { key: 'C', text: '240' },
      { key: 'D', text: '250' },
      { key: 'E', text: '260' },
    ],
    answer: 'D',
    hint: 'Dış noktadan çizilen teğet parçaları eşittir, yani PAB üçgeni ikizkenardır.',
    solution: [
      {
        title: 'İkizkenar üçgen',
        detail: '|PA| = |PB| olduğundan m(PAB) = m(PBA) = (180 − 2x) : 2 = 90 − x.',
      },
      {
        title: 'Denklemi kur',
        detail:
          'E, A, P doğrusal: m(EAB) = 180 − (90 − x) = 90 + x. Buna göre 90 + x = 3x + 20 → x = 35.',
      },
      {
        title: 'Küçük AB yayı',
        detail: 'm(PAB) = 90 − 35 = 55° teğet-kiriş açısıdır; T’yi içermeyen AB yayı 2·55 = 110°.',
      },
      { title: 'Sonuç', detail: 'ATB yayı = 360 − 110 = 250° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'circles-17',
    topic: 'Teğete paralel kiriş',
    figure: {
      viewBox: '0 40 400 256',
      caption: 'Şekil 17',
      label:
        'O merkezli yarım çemberde [AB] çap; KL doğrusu yarım çembere T noktasında teğet. C noktası yay üzerinde, [BC] kirişi KL’ye paralel, [TB] çizilmiş, m(BTL) = 35°, m(ABC) = x.',
      svg: `
          <path class="ln" d="M50.0,245.0 A150,150 0 0 1 350.0,245.0 Z"/>
          <path class="ln" d="M143.2,64.7 L340.6,136.5"/>
          <path class="ln" d="M85.1,148.6 L350.0,245.0"/>
          <path class="ln" d="M251.3,104.0 L350.0,245.0"/>
          <path class="arc" d="M266.2,125.3 A26,26 0 0 0 275.7,112.9"/>
          <text class="val" x="286.2" y="135.8" text-anchor="middle">35°</text>
          <path class="arc" d="M303.0,227.9 A50,50 0 0 0 300.0,245.0"/>
          <text class="val" x="285.0" y="238.5" text-anchor="middle">x</text>
          <circle class="pt" cx="50.0" cy="245.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="245.0" r="3.2"/>
          <circle class="pt" cx="85.1" cy="148.6" r="3.2"/>
          <circle class="pt" cx="251.3" cy="104.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="245.0" r="3.2"/>
          <circle class="pt" cx="143.2" cy="64.7" r="3.2"/>
          <circle class="pt" cx="340.6" cy="136.5" r="3.2"/>
          <text x="44.0" y="263.0" text-anchor="end">A</text>
          <text x="356.0" y="263.0">B</text>
          <text x="200.0" y="265.0" text-anchor="middle">O</text>
          <text x="72.8" y="143.3" text-anchor="end">C</text>
          <text x="256.8" y="94.0" text-anchor="middle">T</text>
          <text x="143.2" y="54.7" text-anchor="middle">K</text>
          <text x="340.6" y="158.5" text-anchor="middle">L</text>
        `,
    },
    given: [
      'O merkezli yarım çemberde KL, T noktasında yarım çembere teğettir.',
      '[BC] // KL',
      'm(BTL) = 35°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' },
      { key: 'E', text: '35' },
    ],
    answer: 'B',
    hint: 'Teğete paralel olan kiriş, değme noktasında ikiye bölünen bir yay keser.',
    solution: [
      { title: 'Teğet-kiriş açısı', detail: 'm(BTL) = 35° olduğundan TB yayı 2·35 = 70°’dir.' },
      {
        title: 'Paralellik',
        detail:
          '[BC] // KL olduğundan m(TBC) = m(BTL) = 35° (iç ters açılar); bu çevre açı CT yayını görür: m(CT) = 70°.',
      },
      { title: 'AC yayı', detail: 'AB çap olduğundan m(AC) = 180 − 70 − 70 = 40°.' },
      {
        title: 'Sonuç',
        detail: 'x = m(ABC), AC yayını gören çevre açıdır: x = 40 : 2 = 20° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'circles-18',
    topic: 'Çapı gören açı ve yay',
    figure: {
      viewBox: '0 32 400 272',
      caption: 'Şekil 18',
      label:
        'ABC üçgeninde [BC] çaplı O merkezli yarım çember [AB] kenarını E, [AC] kenarını D noktasında kesiyor; |AE| = |EB|, m(ABC) = 66°.',
      svg: `
          <path class="ln" d="M60.0,272.0 A140,140 0 0 1 340.0,272.0"/>
          <path class="ln" d="M152.6,63.9 L60.0,272.0 L340.0,272.0 L152.6,63.9"/>
          <path class="tick" d="M135.0,118.4 L124.0,113.5"/>
          <path class="tick" d="M88.6,222.4 L77.7,217.5"/>
          <path class="arc" d="M86.0,272.0 A26,26 0 0 0 70.6,248.2"/>
          <text class="val" x="96.9" y="253.0" text-anchor="middle">66°</text>
          <circle class="pt" cx="152.6" cy="63.9" r="3.2"/>
          <circle class="pt" cx="60.0" cy="272.0" r="3.2"/>
          <circle class="pt" cx="340.0" cy="272.0" r="3.2"/>
          <circle class="pt" cx="214.6" cy="132.8" r="3.2"/>
          <circle class="pt" cx="106.3" cy="168.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="272.0" r="3.2"/>
          <text x="152.6" y="53.9" text-anchor="middle">A</text>
          <text x="52.0" y="290.0" text-anchor="end">B</text>
          <text x="348.0" y="290.0">C</text>
          <text x="200.0" y="292.0" text-anchor="middle">O</text>
          <text x="96.3" y="168.0" text-anchor="end">E</text>
          <text x="224.6" y="130.8">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 32 400 272',
      caption: 'Şekil 18',
      label:
        'Aynı şekilde [EC] kesikli çizilmiş; [BC] çap olduğundan E’deki açı dik ve m(ECD) işaretli.',
      svg: `
          <path class="ln" d="M60.0,272.0 A140,140 0 0 1 340.0,272.0"/>
          <path class="ln" d="M152.6,63.9 L60.0,272.0 L340.0,272.0 L152.6,63.9"/>
          <path class="tick" d="M135.0,118.4 L124.0,113.5"/>
          <path class="tick" d="M88.6,222.4 L77.7,217.5"/>
          <path class="arc" d="M86.0,272.0 A26,26 0 0 0 70.6,248.2"/>
          <text class="val" x="96.9" y="253.0" text-anchor="middle">66°</text>
          <path class="aux" d="M106.3,168.0 L340.0,272.0"/>
          <path class="aux-head" d="M102.3,177.1 L111.4,181.2 L115.5,172.0"/>
          <path class="arc" d="M306.5,234.8 A50,50 0 0 0 294.3,251.7"/>
          <circle class="pt" cx="152.6" cy="63.9" r="3.2"/>
          <circle class="pt" cx="60.0" cy="272.0" r="3.2"/>
          <circle class="pt" cx="340.0" cy="272.0" r="3.2"/>
          <circle class="pt" cx="214.6" cy="132.8" r="3.2"/>
          <circle class="pt" cx="106.3" cy="168.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="272.0" r="3.2"/>
          <text x="152.6" y="53.9" text-anchor="middle">A</text>
          <text x="52.0" y="290.0" text-anchor="end">B</text>
          <text x="348.0" y="290.0">C</text>
          <text x="200.0" y="292.0" text-anchor="middle">O</text>
          <text x="96.3" y="168.0" text-anchor="end">E</text>
          <text x="224.6" y="130.8">D</text>
        `,
    },
    given: ['ABC bir üçgen', '|AE| = |EB|', 'm(ABC) = 66°'],
    stem: [],
    ask: 'Yukarıdaki O merkezli çemberde ED yayının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '52' },
      { key: 'C', text: '56' },
      { key: 'D', text: '60' },
      { key: 'E', text: '66' },
    ],
    answer: 'A',
    hint: 'E’yi C’ye birleştir: çapı gören çevre açı 90°’dir.',
    solution: [
      { title: 'Çapı gören açı', detail: '[BC] çap olduğundan m(BEC) = 90°, yani [CE] ⊥ [AB].' },
      {
        title: 'İkizkenar üçgen',
        detail:
          '[CE] hem yükseklik hem kenarortay olduğundan |CA| = |CB|; m(BAC) = 66°, m(ACB) = 180 − 132 = 48°.',
      },
      { title: 'Açıortay', detail: '[CE] aynı zamanda açıortaydır: m(ECD) = 48 : 2 = 24°.' },
      {
        title: 'Sonuç',
        detail: 'm(ECD), ED yayını gören çevre açıdır: m(ED) = 2·24 = 48° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 19
  {
    id: 'circles-19',
    topic: 'Teğet-kiriş açısı ve üçgen',
    figure: {
      viewBox: '19 36 400 270',
      caption: 'Şekil 19',
      label:
        'Çembere T, A, P doğrusu A noktasında, [PB] kenarı C noktasında teğet; A, D, B noktaları doğrusal ve PAB bir üçgen. [AC] ve [CD] kirişleri çizilmiş, m(ACD) = 70°, m(TPB) = 40°, m(ABP) = α.',
      svg: `
          <circle class="ln" cx="170.0" cy="134.0" r="64.0"/>
          <path class="ln" d="M56.0,70.0 L345.8,70.0"/>
          <path class="ln" d="M345.8,70.0 L92.7,282.4 L170.0,70.0"/>
          <path class="ln" d="M170.0,70.0 L211.1,183.0 L128.9,183.0"/>
          <path class="arc" d="M189.1,183.0 A22,22 0 0 1 203.6,162.4"/>
          <text class="val" x="180.0" y="166.2" text-anchor="middle">70°</text>
          <path class="arc" d="M322.9,89.3 A30,30 0 0 1 315.8,70.0"/>
          <text class="val" x="304.5" y="90.0" text-anchor="middle">40°</text>
          <path class="arc" d="M104.3,250.5 A34,34 0 0 1 118.7,260.6"/>
          <text class="val" x="119.6" y="248.9" text-anchor="middle">α</text>
          <circle class="pt" cx="170.0" cy="70.0" r="3.2"/>
          <circle class="pt" cx="211.1" cy="183.0" r="3.2"/>
          <circle class="pt" cx="128.9" cy="183.0" r="3.2"/>
          <circle class="pt" cx="92.7" cy="282.4" r="3.2"/>
          <circle class="pt" cx="345.8" cy="70.0" r="3.2"/>
          <circle class="pt" cx="74.0" cy="70.0" r="3.2"/>
          <text x="74.0" y="57.0" text-anchor="middle">T</text>
          <text x="170.0" y="57.0" text-anchor="middle">A</text>
          <text x="358.6" y="71.5">P</text>
          <text x="223.9" y="191.6">C</text>
          <text x="115.9" y="189.8" text-anchor="end">D</text>
          <text x="80.6" y="294.1" text-anchor="end">B</text>
        `,
    },
    given: [
      '[PB], C noktasında ve [PT, A noktasında çembere teğet',
      'PAB bir üçgen',
      'm(ACD) = 70°',
      'm(TPB) = 40°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABP) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '25' },
      { key: 'B', text: '30' },
      { key: 'C', text: '35' },
      { key: 'D', text: '40' },
      { key: 'E', text: '45' },
    ],
    answer: 'B',
    hint: 'ACD çevre açısının gördüğü AD yayını bul; aynı yayı A’daki teğet-kiriş açısı da görür.',
    solution: [
      {
        title: 'Çevre açı',
        detail: 'm(ACD) = 70° çevre açı olduğundan C’yi içermeyen AD yayı 2·70 = 140°’dir.',
      },
      {
        title: 'Teğet-kiriş açısı',
        detail: 'Aynı AD yayını T tarafındaki teğet-kiriş açısı görür: m(TAD) = 140 : 2 = 70°.',
      },
      { title: 'Doğru açı', detail: 'T, A, P doğrusal olduğundan m(PAB) = 180 − 70 = 110°.' },
      { title: 'Sonuç', detail: 'PAB üçgeninde α = 180 − 40 − 110 = 30° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 20
  {
    id: 'circles-20',
    topic: 'Kesişen çemberlerde kirişler dörtgeni',
    figure: {
      viewBox: '-6 36 400 227',
      caption: 'Şekil 20',
      label:
        'İki çember K ve L noktalarında kesişiyor; A ve B birinci, C ve D ikinci çember üzerinde. A, K, D ve B, L, C noktaları doğrusal; ABCD dörtgeninde m(ABC) = 72°, m(BCD) = α.',
      svg: `
          <circle class="ln" cx="130.0" cy="160.0" r="95.0"/>
          <circle class="ln" cx="248.0" cy="160.0" r="72.0"/>
          <path class="ln" d="M103.2,68.9 L59.4,223.6 L295.1,214.5 L316.6,138.2 L103.2,68.9"/>
          <path class="arc" d="M65.9,200.5 A24,24 0 0 1 83.4,222.6"/>
          <text class="val" x="90.8" y="203.8" text-anchor="middle">72°</text>
          <path class="arc" d="M275.1,215.3 A20,20 0 0 1 300.5,195.3"/>
          <text class="val" x="274.6" y="193.6" text-anchor="middle">α</text>
          <circle class="pt" cx="103.2" cy="68.9" r="3.2"/>
          <circle class="pt" cx="59.4" cy="223.6" r="3.2"/>
          <circle class="pt" cx="295.1" cy="214.5" r="3.2"/>
          <circle class="pt" cx="316.6" cy="138.2" r="3.2"/>
          <circle class="pt" cx="205.3" cy="102.0" r="3.2"/>
          <circle class="pt" cx="205.3" cy="218.0" r="3.2"/>
          <text x="99.5" y="56.6" text-anchor="middle">A</text>
          <text x="49.7" y="240.6" text-anchor="end">B</text>
          <text x="303.5" y="233.1">C</text>
          <text x="329.0" y="137.8">D</text>
          <text x="205.3" y="89.0" text-anchor="middle">K</text>
          <text x="205.3" y="243.0" text-anchor="middle">L</text>
        `,
    },
    solutionFigure: {
      viewBox: '-6 36 400 227',
      caption: 'Şekil 20',
      label: 'Aynı şekilde [KL] ortak kirişi kesikli çizilmiş; K noktasında m(LKD) = 72° işaretli.',
      svg: `
          <circle class="ln" cx="130.0" cy="160.0" r="95.0"/>
          <circle class="ln" cx="248.0" cy="160.0" r="72.0"/>
          <path class="ln" d="M103.2,68.9 L59.4,223.6 L295.1,214.5 L316.6,138.2 L103.2,68.9"/>
          <path class="aux" d="M205.3,102.0 L205.3,218.0"/>
          <path class="arc" d="M222.4,107.6 A18,18 0 0 1 205.3,120.0"/>
          <text class="val" x="226.4" y="136.2" text-anchor="middle">72°</text>
          <path class="arc" d="M65.9,200.5 A24,24 0 0 1 83.4,222.6"/>
          <text class="val" x="90.8" y="203.8" text-anchor="middle">72°</text>
          <path class="arc" d="M275.1,215.3 A20,20 0 0 1 300.5,195.3"/>
          <text class="val" x="274.6" y="193.6" text-anchor="middle">α</text>
          <circle class="pt" cx="103.2" cy="68.9" r="3.2"/>
          <circle class="pt" cx="59.4" cy="223.6" r="3.2"/>
          <circle class="pt" cx="295.1" cy="214.5" r="3.2"/>
          <circle class="pt" cx="316.6" cy="138.2" r="3.2"/>
          <circle class="pt" cx="205.3" cy="102.0" r="3.2"/>
          <circle class="pt" cx="205.3" cy="218.0" r="3.2"/>
          <text x="99.5" y="56.6" text-anchor="middle">A</text>
          <text x="49.7" y="240.6" text-anchor="end">B</text>
          <text x="303.5" y="233.1">C</text>
          <text x="329.0" y="137.8">D</text>
          <text x="205.3" y="89.0" text-anchor="middle">K</text>
          <text x="205.3" y="243.0" text-anchor="middle">L</text>
        `,
    },
    given: [
      'K ve L noktalarında kesişen iki çember üzerinde A, B, C, D noktaları verilmiştir',
      'A, K, D ve B, L, C doğrusal',
      'm(ABC) = 72°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '90' },
      { key: 'C', text: '108' },
      { key: 'D', text: '116' },
      { key: 'E', text: '124' },
    ],
    answer: 'C',
    hint: '[KL] ortak kirişini çiz: iki kirişler dörtgeni elde edersin.',
    solution: [
      { title: 'Ortak kiriş', detail: '[KL] çizilince ABLK ve KLCD birer kirişler dörtgeni olur.' },
      {
        title: 'Birinci dörtgen',
        detail: 'ABLK’da karşılıklı açılar toplamı 180°: m(AKL) = 180 − 72 = 108°.',
      },
      { title: 'Doğru açı', detail: 'A, K, D doğrusal olduğundan m(LKD) = 180 − 108 = 72°.' },
      {
        title: 'İkinci dörtgen',
        detail: 'KLCD’de α = m(LCD) = 180 − 72 = 108° bulunur (bu yüzden [AB] ∥ [DC]).',
      },
    ],
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'circles-21',
    topic: 'Dıştan teğet çemberler ve ortak teğet',
    figure: {
      viewBox: '-14 -4 400 297',
      caption: 'Şekil 21',
      label:
        'İki çember B noktasında dıştan teğet; P noktasından çizilen [PB] ortak teğet, [PA birinci çembere A, [PC ikinci çembere C noktasında teğet. ABC üçgeni çizilmiş, m(APC) = 110°, m(BAC) = 20°, m(ACB) = x.',
      svg: `
          <circle class="ln" cx="120.0" cy="180.0" r="105.0"/>
          <circle class="ln" cx="279.6" cy="180.0" r="54.6"/>
          <path class="ln" d="M225.0,30.0 L46.5,95.0"/>
          <path class="ln" d="M225.0,30.0 L347.1,175.5"/>
          <path class="ln" d="M225.0,30.0 L225.0,220.0"/>
          <path class="ln" d="M84.0,81.3 L225.0,180.0 L321.4,144.9 L84.0,81.3"/>
          <path class="arc" d="M240.4,48.4 A24,24 0 0 1 202.4,38.2"/>
          <text class="val" x="214.6" y="73.6" text-anchor="middle">110°</text>
          <path class="arc" d="M126.5,92.7 A44,44 0 0 1 120.1,106.5"/>
          <text class="val" x="136.6" y="110.8" text-anchor="middle">20°</text>
          <path class="arc" d="M293.2,155.2 A30,30 0 0 1 292.4,137.1"/>
          <text class="val" x="279.5" y="151.7" text-anchor="middle">x</text>
          <circle class="pt" cx="84.0" cy="81.3" r="3.2"/>
          <circle class="pt" cx="225.0" cy="180.0" r="3.2"/>
          <circle class="pt" cx="321.4" cy="144.9" r="3.2"/>
          <circle class="pt" cx="225.0" cy="30.0" r="3.2"/>
          <text x="225.0" y="17.0" text-anchor="middle">P</text>
          <text x="71.6" y="81.1" text-anchor="end">A</text>
          <text x="333.9" y="144.7">C</text>
          <text x="216.8" y="203.0" text-anchor="end">B</text>
        `,
    },
    solutionFigure: {
      viewBox: '-14 -4 400 297',
      caption: 'Şekil 21',
      label: 'Aynı şekilde A, B, C noktalarından geçen P merkezli çemberin yayı kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="120.0" cy="180.0" r="105.0"/>
          <circle class="ln" cx="279.6" cy="180.0" r="54.6"/>
          <path class="aux" d="M84.0,81.3 A150,150 0 0 0 321.4,144.9"/>
          <path class="ln" d="M225.0,30.0 L46.5,95.0"/>
          <path class="ln" d="M225.0,30.0 L347.1,175.5"/>
          <path class="ln" d="M225.0,30.0 L225.0,220.0"/>
          <path class="ln" d="M84.0,81.3 L225.0,180.0 L321.4,144.9 L84.0,81.3"/>
          <path class="arc" d="M240.4,48.4 A24,24 0 0 1 202.4,38.2"/>
          <text class="val" x="214.6" y="73.6" text-anchor="middle">110°</text>
          <path class="arc" d="M126.5,92.7 A44,44 0 0 1 120.1,106.5"/>
          <text class="val" x="136.6" y="110.8" text-anchor="middle">20°</text>
          <path class="arc" d="M293.2,155.2 A30,30 0 0 1 292.4,137.1"/>
          <text class="val" x="279.5" y="151.7" text-anchor="middle">x</text>
          <circle class="pt" cx="84.0" cy="81.3" r="3.2"/>
          <circle class="pt" cx="225.0" cy="180.0" r="3.2"/>
          <circle class="pt" cx="321.4" cy="144.9" r="3.2"/>
          <circle class="pt" cx="225.0" cy="30.0" r="3.2"/>
          <text x="225.0" y="17.0" text-anchor="middle">P</text>
          <text x="71.6" y="81.1" text-anchor="end">A</text>
          <text x="333.9" y="144.7">C</text>
          <text x="216.8" y="203.0" text-anchor="end">B</text>
        `,
    },
    given: [
      'B noktasında dıştan teğet iki çemberin ortak teğetleri [PB, [PA ve [PC teğetleri şekildeki gibidir',
      'm(APC) = 110°',
      'm(BAC) = 20°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '25' },
      { key: 'C', text: '30' },
      { key: 'D', text: '35' },
      { key: 'E', text: '40' },
    ],
    answer: 'D',
    hint: 'Bir dış noktadan çizilen teğet parçaları eşittir: |PA|, |PB| ve |PC| arasındaki ilişkiye bak.',
    solution: [
      {
        title: 'Eşit teğetler',
        detail:
          '|PA| = |PB| ve |PB| = |PC| olduğundan A, B, C noktaları P merkezli bir çember üzerindedir.',
      },
      {
        title: 'Merkez açı',
        detail: 'm(BAC) = 20° bu çemberde BC yayını gören çevre açıdır: m(BPC) = 2·20 = 40°.',
      },
      { title: 'Kalan açı', detail: 'm(APB) = 110 − 40 = 70°.' },
      {
        title: 'Sonuç',
        detail: 'x = m(ACB), AB yayını gören çevre açıdır: x = 70 : 2 = 35° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 22
  {
    id: 'circles-22',
    topic: 'Teğet ve kesen',
    figure: {
      viewBox: '-27 11 400 268',
      caption: 'Şekil 22',
      label:
        '[PE ışını çembere T noktasında teğet; P noktasından çizilen kesen çemberi A ve B noktalarında kesiyor. [TA] ve [TB] kirişleri çizilmiş, m(TAB) = 100°, m(BPE) = 40°, m(PTA) = x.',
      svg: `
          <circle class="ln" cx="265.0" cy="150.0" r="95.0"/>
          <path class="ln" d="M-1.8,112.5 L302.7,44.2"/>
          <path class="ln" d="M-1.8,112.5 L284.8,260.8"/>
          <path class="ln" d="M195.1,214.4 L244.2,57.3 L252.8,244.2"/>
          <path class="arc" d="M31.4,105.1 A34,34 0 0 1 28.4,128.1"/>
          <text class="val" x="47.8" y="123.9" text-anchor="middle">40°</text>
          <path class="arc" d="M200.5,197.2 A18,18 0 0 1 211.1,222.6"/>
          <text class="val" x="230.2" y="204.7" text-anchor="middle">100°</text>
          <path class="arc" d="M235.3,85.9 A30,30 0 0 1 214.9,63.9"/>
          <text class="val" x="212.6" y="91.4" text-anchor="middle">x</text>
          <circle class="pt" cx="-1.8" cy="112.5" r="3.2"/>
          <circle class="pt" cx="244.2" cy="57.3" r="3.2"/>
          <circle class="pt" cx="195.1" cy="214.4" r="3.2"/>
          <circle class="pt" cx="252.8" cy="244.2" r="3.2"/>
          <circle class="pt" cx="302.7" cy="44.2" r="3.2"/>
          <text x="-14.8" y="117.5" text-anchor="end">P</text>
          <text x="241.4" y="44.7" text-anchor="middle">T</text>
          <text x="198.1" y="239.0" text-anchor="middle">A</text>
          <text x="251.2" y="267.1" text-anchor="middle">B</text>
          <text x="299.0" y="31.9" text-anchor="middle">E</text>
        `,
    },
    given: ['[PE, T noktasında çembere teğet', 'P, A, B doğrusal', 'm(TAB) = 100°', 'm(BPE) = 40°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(PTA) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'E',
    hint: 'TAB açısı A’yı içermeyen TB yayını görür; teğet ile kesen arasındaki açı iki yayın farkının yarısıdır.',
    solution: [
      {
        title: 'Çevre açı',
        detail: 'm(TAB) = 100° olduğundan A’yı içermeyen TB yayı 2·100 = 200°’dir.',
      },
      {
        title: 'Teğet ile kesen',
        detail: 'm(BPE) = (TB yayı − TA yayı) : 2 → 40 = (200 − TA) : 2 → TA yayı = 120°.',
      },
      { title: 'Teğet-kiriş açısı', detail: 'x = m(PTA), TA yayını görür: x = 120 : 2 = 60°.' },
      {
        title: 'Kontrol',
        detail: 'PTA üçgeninde m(PAT) = 180 − 100 = 80°; 40 + 80 + 60 = 180 ✓. Sonuç: x = 60°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  {
    id: 'circles-23',
    topic: 'Merkez açı ve paralel kiriş',
    figure: {
      viewBox: '15 4 400 269',
      caption: 'Şekil 23',
      label:
        'O merkezli çemberde A, B, C noktaları çember üzerinde; [AO] ile [BC] paralel, [AB] ile [OC] E noktasında kesişiyor. m(AEC) = 72°, m(OCB) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="115.0"/>
          <path class="ln" d="M100.4,92.5 L200.0,150.0 L176.1,37.5 L309.4,114.5 L100.4,92.5"/>
          <path class="par" d="M144.6,124.9 L152.8,122.8 L150.6,114.6"/>
          <path class="par" d="M237.1,79.7 L245.3,77.5 L243.1,69.3"/>
          <path class="arc" d="M171.9,100.0 A18,18 0 0 1 186.0,84.3"/>
          <text class="val" x="166.0" y="85.5" text-anchor="middle">72°</text>
          <path class="arc" d="M202.1,52.5 A30,30 0 0 1 182.3,66.9"/>
          <text class="val" x="200.8" y="76.5" text-anchor="middle">x</text>
          <circle class="pt" cx="100.4" cy="92.5" r="3.2"/>
          <circle class="pt" cx="309.4" cy="114.5" r="3.2"/>
          <circle class="pt" cx="176.1" cy="37.5" r="3.2"/>
          <circle class="pt" cx="200.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="189.8" cy="101.9" r="3.2"/>
          <text x="89.1" y="88.5" text-anchor="end">A</text>
          <text x="321.7" y="113.9">B</text>
          <text x="173.4" y="24.9" text-anchor="middle">C</text>
          <text x="200.0" y="174.0" text-anchor="middle">O</text>
          <text x="198.4" y="110.9">E</text>
        `,
    },
    given: ['A, B, C noktaları O merkezli çember üzerinde', '[AO] ∥ [BC]', 'm(AEC) = 72°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(OCB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '52' },
      { key: 'C', text: '56' },
      { key: 'D', text: '60' },
      { key: 'E', text: '64' },
    ],
    answer: 'A',
    hint: 'Paralellikten m(AOC)’yi x cinsinden yaz; ABC çevre açısı da aynı AC yayını görür.',
    solution: [
      {
        title: 'İç ters açılar',
        detail: '[AO] ∥ [BC] ve [OC] kesen olduğundan m(AOC) = m(OCB) = x.',
      },
      { title: 'Çevre açı', detail: 'm(ABC), AC yayını gören çevre açıdır: m(ABC) = x : 2.' },
      { title: 'Dış açı', detail: 'EBC üçgeninde m(AEC) dış açıdır: 72 = x + x : 2 = 3x : 2.' },
      { title: 'Sonuç', detail: 'x = 72·2 : 3 = 48° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 24
  {
    id: 'circles-24',
    topic: 'Teğetler ve ikizkenar üçgen',
    figure: {
      viewBox: '-2 14 400 215',
      caption: 'Şekil 24',
      label:
        'Çembere B ve C noktalarında çizilen teğetler D noktasında kesişiyor; P noktası BD doğrusu üzerinde ve |CD| = |DP|. A çember üzerinde, A, C, P doğrusal; m(BAP) = 56°, m(APB) = α.',
      svg: `
          <circle class="ln" cx="110.0" cy="120.0" r="72.0"/>
          <path class="ln" d="M70.0,192.0 L353.5,192.0"/>
          <path class="ln" d="M216.7,192.0 L159.9,51.3"/>
          <path class="ln" d="M110.0,48.0 L323.5,192.0"/>
          <path class="ln" d="M110.0,48.0 L110.0,192.0"/>
          <path class="tick" d="M191.2,144.8 L202.3,140.3"/>
          <path class="tick" d="M270.1,198.0 L270.1,186.0"/>
          <path class="arc" d="M131.6,62.5 A26,26 0 0 1 110.0,74.0"/>
          <text class="val" x="128.8" y="88.3" text-anchor="middle">56°</text>
          <path class="arc" d="M289.5,192.0 A34,34 0 0 1 295.3,173.0"/>
          <text class="val" x="279.5" y="183.6" text-anchor="middle">α</text>
          <circle class="pt" cx="110.0" cy="48.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="192.0" r="3.2"/>
          <circle class="pt" cx="176.8" cy="93.0" r="3.2"/>
          <circle class="pt" cx="216.7" cy="192.0" r="3.2"/>
          <circle class="pt" cx="323.5" cy="192.0" r="3.2"/>
          <text x="110.0" y="35.0" text-anchor="middle">A</text>
          <text x="110.0" y="217.0" text-anchor="middle">B</text>
          <text x="183.4" y="82.6">C</text>
          <text x="216.7" y="217.0" text-anchor="middle">D</text>
          <text x="333.6" y="208.2">P</text>
        `,
    },
    given: ['Şekildeki çemberde B ve C teğetlerin değme noktaları', '|CD| = |DP|', 'm(BAP) = 56°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(APB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '26' },
      { key: 'B', text: '30' },
      { key: 'C', text: '34' },
      { key: 'D', text: '38' },
      { key: 'E', text: '42' },
    ],
    answer: 'C',
    hint: 'BAC çevre açısından BC yayını, oradan da iki teğet arasındaki açıyı bul.',
    solution: [
      {
        title: 'Çevre açı',
        detail: 'm(BAC) = 56° olduğundan A’yı içermeyen BC yayı 2·56 = 112°’dir.',
      },
      {
        title: 'Teğetler arası açı',
        detail: 'D’den çizilen iki teğet arasındaki açı: m(BDC) = 180 − 112 = 68°.',
      },
      { title: 'İkizkenar üçgen', detail: '|CD| = |DP| olduğundan m(DCP) = m(DPC) = α.' },
      { title: 'Sonuç', detail: 'm(BDC), CDP üçgeninin dış açısıdır: 2α = 68 → α = 34° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 25
  {
    id: 'circles-25',
    topic: 'Teğete paralel kiriş',
    figure: {
      viewBox: '10 20 400 267',
      caption: 'Şekil 25',
      label:
        'A, B, C ve T noktaları çember üzerinde; EF doğrusu çembere T noktasında teğet ve [BC] ile EF paralel. [AB], [AC] ve [BT] kirişleri çizilmiş, m(BAC) = 44°, m(BTF) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="160.0" r="110.0"/>
          <path class="ln" d="M310.0,45.0 L310.0,275.0"/>
          <path class="ln" d="M120.9,83.6 L219.1,51.7 L120.9,236.4 L120.9,83.6"/>
          <path class="ln" d="M120.9,83.6 L310.0,160.0"/>
          <path class="par" d="M126.9,163.0 L120.9,156.0 L114.9,163.0"/>
          <path class="par" d="M316.0,112.4 L310.0,105.4 L304.0,112.4"/>
          <path class="arc" d="M205.0,78.2 A30,30 0 0 1 190.6,60.9"/>
          <text class="val" x="183.9" y="86.2" text-anchor="middle">44°</text>
          <path class="arc" d="M310.0,184.0 A24,24 0 0 1 287.7,151.0"/>
          <text class="val" x="278.5" y="186.2" text-anchor="middle">α</text>
          <circle class="pt" cx="219.1" cy="51.7" r="3.2"/>
          <circle class="pt" cx="120.9" cy="83.6" r="3.2"/>
          <circle class="pt" cx="120.9" cy="236.4" r="3.2"/>
          <circle class="pt" cx="310.0" cy="160.0" r="3.2"/>
          <text x="219.1" y="41.7" text-anchor="middle">A</text>
          <text x="111.9" y="79.6" text-anchor="end">B</text>
          <text x="111.9" y="252.4" text-anchor="end">C</text>
          <text x="318.0" y="154.0">T</text>
          <text x="318.0" y="57.0">E</text>
          <text x="318.0" y="275.0">F</text>
        `,
    },
    given: [
      'A, B, C ve T noktaları çemberin üzerinde',
      'EF doğrusu çembere T noktasında teğet',
      '[BC] ∥ EF',
      'm(BAC) = 44°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BTF) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '104' },
      { key: 'C', text: '108' },
      { key: 'D', text: '112' },
      { key: 'E', text: '116' },
    ],
    answer: 'D',
    hint: 'Teğet, kendisine paralel kirişin iki yanındaki yayları eşit böler; önce BC yayını bul.',
    solution: [
      {
        title: 'Çevre açı',
        detail: 'm(BAC) = 44° olduğundan A’yı içermeyen BC yayı 2·44 = 88°’dir.',
      },
      {
        title: 'Paralel kiriş',
        detail:
          '[BC] ∥ EF ve EF, T’de teğet olduğundan T, BC kirişinin karşısındaki yayın ortasıdır: BT yayı = TC yayı = (360 − 88) : 2 = 136°.',
      },
      {
        title: 'Teğet-kiriş açısı',
        detail:
          'm(BTF), T’den F tarafına dönerek C üzerinden B’ye giden yayı görür: 136 + 88 = 224°.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 224 : 2 = 112° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26
  {
    id: 'circles-26',
    topic: 'Teğetler ve kesişen kirişler',
    figure: {
      viewBox: '-16 20 400 264',
      caption: 'Şekil 26',
      label:
        'Çembere C noktasından çizilen iki teğet çembere A ve B noktalarında değiyor; D ve E çember üzerinde, [AE] ile [BD] F noktasında kesişiyor. [AD] çizilmiş, m(ACB) = 80°, m(EFB) = 110°, m(DAE) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="100.0"/>
          <path class="ln" d="M100.4,141.3 L90.0,260.0 L208.7,249.6"/>
          <path class="ln" d="M100.4,141.3 L250.0,63.4"/>
          <path class="ln" d="M208.7,249.6 L182.6,51.5"/>
          <path class="ln" d="M100.4,141.3 L182.6,51.5"/>
          <path class="arc" d="M92.3,234.1 A26,26 0 0 1 115.9,257.7"/>
          <text class="val" x="119.7" y="235.3" text-anchor="middle">80°</text>
          <path class="arc" d="M204.4,87.1 A18,18 0 0 1 190.8,113.3"/>
          <text class="val" x="220.4" y="117.1" text-anchor="middle">110°</text>
          <path class="arc" d="M123.4,116.2 A34,34 0 0 1 130.5,125.6"/>
          <text class="val" x="136.9" y="118.3" text-anchor="middle">α</text>
          <circle class="pt" cx="100.4" cy="141.3" r="3.2"/>
          <circle class="pt" cx="208.7" cy="249.6" r="3.2"/>
          <circle class="pt" cx="90.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="182.6" cy="51.5" r="3.2"/>
          <circle class="pt" cx="250.0" cy="63.4" r="3.2"/>
          <circle class="pt" cx="188.4" cy="95.5" r="3.2"/>
          <text x="91.4" y="146.3" text-anchor="end">A</text>
          <text x="212.7" y="271.6" text-anchor="middle">B</text>
          <text x="82.0" y="272.0" text-anchor="end">C</text>
          <text x="178.6" y="41.5" text-anchor="middle">D</text>
          <text x="258.0" y="59.4">E</text>
          <text x="180.4" y="115.5" text-anchor="end">F</text>
        `,
    },
    given: [
      'A ve B teğetlerin değme noktaları',
      'D ve E çember üzerinde',
      '[AE] ∩ [BD] = {F}',
      'm(ACB) = 80°',
      'm(EFB) = 110°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DAE) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' },
      { key: 'E', text: '35' },
    ],
    answer: 'B',
    hint: 'İki teğet arasındaki açıdan AB yayını bul; F’deki açı iki karşılıklı yayın toplamının yarısıdır.',
    solution: [
      {
        title: 'Teğetler arası açı',
        detail: 'm(ACB) = 180 − (küçük AB yayı) olduğundan küçük AB yayı = 180 − 80 = 100°.',
      },
      {
        title: 'Komşu açı',
        detail: 'm(AFB) = 180 − m(EFB) = 180 − 110 = 70°.',
      },
      {
        title: 'Kesişen kirişler',
        detail: 'm(AFB) = (AB yayı + DE yayı) : 2 → 70 = (100 + DE) : 2 → DE yayı = 40°.',
      },
      {
        title: 'Sonuç',
        detail: 'α = m(DAE), DE yayını gören çevre açıdır: α = 40 : 2 = 20° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27
  {
    id: 'circles-27',
    topic: 'Yarım çemberde paralel kiriş',
    figure: {
      viewBox: '-1 66 400 216',
      caption: 'Şekil 27',
      label:
        'O merkezli yarım çemberde [AB] çap; E, D, C noktaları yay üzerinde. [AD] ile [OC] paralel; [OE] ve [EC] çizilmiş, m(ECO) = α.',
      svg: `
          <path class="ln" d="M40.0,250.0 A160,160 0 0 1 360.0,250.0 Z"/>
          <path class="ln" d="M40.0,250.0 L249.4,97.8"/>
          <path class="ln" d="M200.0,250.0 L329.4,156.0"/>
          <path class="ln" d="M200.0,250.0 L70.6,156.0"/>
          <path class="ln" d="M70.6,156.0 L329.4,156.0"/>
          <path class="par" d="M135.3,188.1 L137.5,179.2 L128.3,178.4"/>
          <path class="par" d="M272.3,204.9 L274.4,195.9 L265.2,195.2"/>
          <path class="arc" d="M305.2,173.6 A30,30 0 0 1 299.4,156.0"/>
          <text class="val" x="287.6" y="174.6" text-anchor="middle">α</text>
          <circle class="pt" cx="40.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="70.6" cy="156.0" r="3.2"/>
          <circle class="pt" cx="249.4" cy="97.8" r="3.2"/>
          <circle class="pt" cx="329.4" cy="156.0" r="3.2"/>
          <text x="32.0" y="256.0" text-anchor="end">A</text>
          <text x="368.0" y="256.0">B</text>
          <text x="200.0" y="270.0" text-anchor="middle">O</text>
          <text x="62.6" y="152.0" text-anchor="end">E</text>
          <text x="251.4" y="87.8" text-anchor="middle">D</text>
          <text x="338.4" y="152.0">C</text>
        `,
    },
    given: [
      'O merkezli yarım çemberde [AB] çap',
      '[AD] ∥ [OC]',
      'AE yayı ile DC yayının ölçüleri eşit',
      'ED yayının ölçüsü AE yayınınkinin 2 katı',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ECO) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '32' },
      { key: 'C', text: '34' },
      { key: 'D', text: '36' },
      { key: 'E', text: '40' },
    ],
    answer: 'D',
    hint: 'Yayları t cinsinden yaz; paralellikten m(DAB) = m(COB) eşitliğini kur.',
    solution: [
      {
        title: 'Yayları adlandır',
        detail: 'AE yayı = DC yayı = t, ED yayı = 2t ise CB yayı = 180 − 4t olur.',
      },
      {
        title: 'Açıları yaz',
        detail:
          'm(DAB), DB yayını gören çevre açı: (t + 180 − 4t) : 2 = (180 − 3t) : 2. m(COB) merkez açı: 180 − 4t.',
      },
      {
        title: 'Paralellik',
        detail:
          '[AD] ∥ [OC] olduğundan yöndeş açılar eşit: (180 − 3t) : 2 = 180 − 4t → 5t = 180 → t = 36°.',
      },
      {
        title: 'Merkez açı',
        detail: 'm(EOC) = ED yayı + DC yayı = 72 + 36 = 108°.',
      },
      {
        title: 'Sonuç',
        detail: '|OE| = |OC| olduğundan EOC ikizkenar: α = (180 − 108) : 2 = 36° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 28
  {
    id: 'circles-28',
    topic: 'Çap ve dış noktadan kesen',
    figure: {
      viewBox: '-14 20 400 258',
      caption: 'Şekil 28',
      label:
        'O merkezli çemberde [BC] çap; A noktası CB doğrusu üzerinde çemberin dışında. A’dan çizilen kesen çemberi E ve D noktalarında kesiyor ve [DC] çizilmiş; |ED| = |DC|, m(ADC) = 100°, m(DAC) = α.',
      svg: `
          <circle class="ln" cx="215.0" cy="160.0" r="110.0"/>
          <path class="ln" d="M46.5,160.0 L325.0,160.0"/>
          <path class="ln" d="M46.5,160.0 L234.1,51.7 L325.0,160.0"/>
          <path class="tick" d="M169.9,81.8 L175.9,92.2"/>
          <path class="tick" d="M284.1,102.0 L275.0,109.7"/>
          <path class="arc" d="M81.1,140.0 A40,40 0 0 1 86.5,160.0"/>
          <text class="val" x="98.6" y="151.0" text-anchor="middle">α</text>
          <path class="arc" d="M249.5,70.1 A24,24 0 0 1 213.3,63.7"/>
          <text class="val" x="226.5" y="100.0" text-anchor="middle">100°</text>
          <circle class="pt" cx="46.5" cy="160.0" r="3.2"/>
          <circle class="pt" cx="105.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="215.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="325.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="234.1" cy="51.7" r="3.2"/>
          <circle class="pt" cx="111.6" cy="122.4" r="3.2"/>
          <text x="40.5" y="180.0" text-anchor="end">A</text>
          <text x="109.0" y="180.0" text-anchor="middle">B</text>
          <text x="215.0" y="180.0" text-anchor="middle">O</text>
          <text x="333.0" y="166.0">C</text>
          <text x="236.1" y="41.7" text-anchor="middle">D</text>
          <text x="105.6" y="116.4" text-anchor="end">E</text>
        `,
    },
    given: [
      'DAC bir üçgen',
      'E ve D noktaları O merkezli [BC] çaplı çember üzerinde',
      '|ED| = |DC|',
      'm(ADC) = 100°',
    ],
    stem: [],
    ask: 'Buna göre, m(DAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '32' },
      { key: 'C', text: '34' },
      { key: 'D', text: '36' },
      { key: 'E', text: '38' },
    ],
    answer: 'A',
    hint: 'Eşit kirişler eşit yaylar gösterir; A’daki açı iki kesen arasındaki açıdır.',
    solution: [
      {
        title: 'Üçgen',
        detail: 'ADC üçgeninde m(DCA) = 180 − 100 − α = 80 − α.',
      },
      {
        title: 'Yaylar',
        detail:
          'm(DCB) çevre açı olduğundan DB yayı = 160 − 2α; [BC] çap olduğundan DC yayı = 180 − (160 − 2α) = 20 + 2α. |ED| = |DC| → ED yayı = 20 + 2α.',
      },
      {
        title: 'Kalan yay',
        detail: 'BE yayı = 180 − 2·(20 + 2α) = 140 − 4α.',
      },
      {
        title: 'Kesenler arası açı',
        detail: 'α = (DC yayı − BE yayı) : 2 = (20 + 2α − 140 + 4α) : 2 = 3α − 60 → 2α = 60.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 30° bulunur (DC = ED = 80°, BE = 20°).',
      },
    ],
  },

  // ---------------------------------------------------------------- 29
  {
    id: 'circles-29',
    topic: 'Eşit kirişler ve yay oranı',
    figure: {
      viewBox: '7 13 400 270',
      caption: 'Şekil 29',
      label:
        'A, B, C, D noktaları çember üzerinde; [BA], [BC] ve [BD] kirişleri çizilmiş, |AB| = |BC|. m(ABD) = 3x, m(DBC) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="160.0" r="115.0"/>
          <path class="ln" d="M126.1,71.9 L200.0,45.0 L273.9,71.9"/>
          <path class="ln" d="M200.0,45.0 L308.1,199.3"/>
          <path class="tick" d="M161.0,52.8 L165.1,64.1"/>
          <path class="tick" d="M239.0,52.8 L234.9,64.1"/>
          <path class="arc" d="M217.2,69.6 A30,30 0 0 1 171.8,55.3"/>
          <text class="val" x="186.2" y="93.9" text-anchor="middle">3x</text>
          <path class="arc" d="M256.4,65.5 A60,60 0 0 1 234.4,94.1"/>
          <text class="val" x="257.1" y="93.8" text-anchor="middle">x</text>
          <circle class="pt" cx="126.1" cy="71.9" r="3.2"/>
          <circle class="pt" cx="200.0" cy="45.0" r="3.2"/>
          <circle class="pt" cx="273.9" cy="71.9" r="3.2"/>
          <circle class="pt" cx="308.1" cy="199.3" r="3.2"/>
          <text x="117.1" y="67.9" text-anchor="end">A</text>
          <text x="200.0" y="35.0" text-anchor="middle">B</text>
          <text x="282.9" y="67.9">C</text>
          <text x="317.1" y="213.3">D</text>
        `,
    },
    given: [
      'A, B, C, D noktaları çember üzerinde',
      '|AB| = |BC|',
      'm(ABD) = 3·m(DBC)',
      'AB yayının ölçüsü 40°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, DC yayının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '70' },
    ],
    answer: 'E',
    hint: 'Eşit kirişler eşit yayları gördüğünden BC yayını hemen yazabilirsin; kalan yayları x cinsinden ifade et.',
    solution: [
      {
        title: 'Eşit kirişler',
        detail: '|AB| = |BC| olduğundan BC yayı = AB yayı = 40°.',
      },
      {
        title: 'Çevre açılar',
        detail: 'm(DBC) = x → DC yayı = 2x; m(ABD) = 3x → AD yayı = 6x.',
      },
      {
        title: 'Tam çember',
        detail: '40 + 40 + 2x + 6x = 360 → 8x = 280 → x = 35°.',
      },
      {
        title: 'Sonuç',
        detail: 'DC yayı = 2·35 = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 30
  {
    id: 'circles-30',
    topic: 'Teğetler ve küçük yayda eşit kirişler',
    figure: {
      viewBox: '2 44 400 214',
      caption: 'Şekil 30',
      label:
        'Çembere B noktasından çizilen iki teğet çembere A ve C noktalarında değiyor; D noktası küçük AC yayı üzerinde ve |AD| = |DC|. [AD] ve [DC] çizilmiş, m(ABC) = 44°, m(BAD) = α.',
      svg: `
          <circle class="ln" cx="125.0" cy="150.0" r="80.0"/>
          <path class="ln" d="M155.0,75.8 L338.6,150.0 L155.0,224.2"/>
          <path class="ln" d="M155.0,75.8 L205.0,150.0 L155.0,224.2"/>
          <path class="tick" d="M185.0,109.6 L175.0,116.3"/>
          <path class="tick" d="M185.0,190.4 L175.0,183.7"/>
          <path class="arc" d="M301.5,165.0 A40,40 0 0 1 301.5,135.0"/>
          <text class="val" x="280.6" y="155.0" text-anchor="middle">44°</text>
          <path class="arc" d="M180.9,86.3 A28,28 0 0 1 170.6,99.0"/>
          <text class="val" x="187.6" y="107.3" text-anchor="middle">α</text>
          <circle class="pt" cx="155.0" cy="75.8" r="3.2"/>
          <circle class="pt" cx="155.0" cy="224.2" r="3.2"/>
          <circle class="pt" cx="338.6" cy="150.0" r="3.2"/>
          <circle class="pt" cx="205.0" cy="150.0" r="3.2"/>
          <text x="155.0" y="65.8" text-anchor="middle">A</text>
          <text x="155.0" y="246.2" text-anchor="middle">C</text>
          <text x="347.6" y="156.0">B</text>
          <text x="198.0" y="155.0" text-anchor="end">D</text>
        
`,
    },
    given: [
      'Şekildeki çemberde A ve C teğet noktalarıdır',
      'D, küçük AC yayı üzerinde',
      '|AD| = |DC|',
      'm(ABC) = 44°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '22' },
      { key: 'B', text: '28' },
      { key: 'C', text: '34' },
      { key: 'D', text: '38' },
      { key: 'E', text: '46' },
    ],
    answer: 'C',
    hint: 'İki teğet arasındaki açıdan küçük AC yayını bul; BAD teğet-kiriş açısıdır.',
    solution: [
      {
        title: 'Teğetler arası açı',
        detail: 'Küçük AC yayı = 180 − m(ABC) = 180 − 44 = 136°.',
      },
      {
        title: 'Eşit kirişler',
        detail: '|AD| = |DC| olduğundan AD yayı = DC yayı = 136 : 2 = 68°.',
      },
      {
        title: 'Teğet-kiriş açısı',
        detail: 'α = m(BAD), AD yayını görür: α = 68 : 2 = 34° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'circles-31',
    topic: 'Merkez açı ve ikizkenar üçgen',
    figure: {
      viewBox: '0 10 400 277',
      caption: 'Şekil 31',
      label:
        'O merkezli çemberde ABC üçgeni çembere içten çizilmiş; [OB] çizilmiş, m(BAC) = 62°, m(OBC) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="160.0" r="115.0"/>
          <path class="ln" d="M180.0,46.7 L98.5,214.0 L301.5,214.0 L180.0,46.7"/>
          <path class="ln" d="M98.5,214.0 L200.0,160.0"/>
          <path class="arc" d="M169.5,68.3 A24,24 0 0 0 194.1,66.2"/>
          <text class="val" x="183.3" y="89.6" text-anchor="middle">62°</text>
          <path class="arc" d="M132.5,214.0 A34,34 0 0 0 128.5,198.0"/>
          <text class="val" x="143.1" y="207.9" text-anchor="middle">x</text>
          <circle class="pt" cx="200.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="180.0" cy="46.7" r="3.2"/>
          <circle class="pt" cx="98.5" cy="214.0" r="3.2"/>
          <circle class="pt" cx="301.5" cy="214.0" r="3.2"/>
          <text x="206.0" y="157.0">O</text>
          <text x="177.3" y="36.0" text-anchor="middle">A</text>
          <text x="84.3" y="226.5" text-anchor="end">B</text>
          <text x="315.7" y="226.5">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 10 400 277',
      caption: 'Şekil 31',
      label: 'Aynı şekilde [OC] yarıçapı kesikli çizilmiş; OBC ikizkenar üçgen.',
      svg: `
          <circle class="ln" cx="200.0" cy="160.0" r="115.0"/>
          <path class="ln" d="M180.0,46.7 L98.5,214.0 L301.5,214.0 L180.0,46.7"/>
          <path class="ln" d="M98.5,214.0 L200.0,160.0"/>
          <path class="arc" d="M169.5,68.3 A24,24 0 0 0 194.1,66.2"/>
          <text class="val" x="183.3" y="89.6" text-anchor="middle">62°</text>
          <path class="arc" d="M132.5,214.0 A34,34 0 0 0 128.5,198.0"/>
          <text class="val" x="143.1" y="207.9" text-anchor="middle">x</text>
          <path class="aux" d="M200.0,160.0 L301.5,214.0"/>
          <circle class="pt" cx="200.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="180.0" cy="46.7" r="3.2"/>
          <circle class="pt" cx="98.5" cy="214.0" r="3.2"/>
          <circle class="pt" cx="301.5" cy="214.0" r="3.2"/>
          <text x="206.0" y="157.0">O</text>
          <text x="177.3" y="36.0" text-anchor="middle">A</text>
          <text x="84.3" y="226.5" text-anchor="end">B</text>
          <text x="315.7" y="226.5">C</text>
        `,
    },
    given: ['O, çemberin merkezi', 'm(BAC) = 62°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(OBC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '26' },
      { key: 'C', text: '28' },
      { key: 'D', text: '31' },
      { key: 'E', text: '34' },
    ],
    answer: 'C',
    hint: 'BAC çevre açısının gördüğü BC yayını gören merkez açıyı bul; OB = OC olduğunu unutma.',
    solution: [
      {
        title: 'Merkez açı',
        detail: 'm(BOC), BC yayını gören merkez açıdır: m(BOC) = 2·62 = 124°.',
      },
      {
        title: 'İkizkenar üçgen',
        detail: '|OB| = |OC| yarıçap olduğundan OBC üçgeninde taban açıları eşittir.',
      },
      { title: 'Sonuç', detail: 'x = (180 − 124) : 2 = 28° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 32
  {
    id: 'circles-32',
    topic: 'Yarım çemberde çevre açı ve merkez açı',
    figure: {
      viewBox: '0 58 400 208',
      caption: 'Şekil 32',
      label:
        'O merkezli yarım çemberde [AB] çap; D ve C noktaları yay üzerinde, [DC], [CB] ve [OD] çizilmiş, m(DCB) = 110°, m(DOB) = α.',
      svg: `
          <path class="ln" d="M50.0,230.0 A150.0,150.0 0 0 1 350.0,230.0"/>
          <path class="ln" d="M50.0,230.0 L350.0,230.0"/>
          <path class="ln" d="M85.1,133.6 L263.4,94.1 L350.0,230.0"/>
          <path class="ln" d="M85.1,133.6 L200.0,230.0"/>
          <path class="arc" d="M241.9,98.8 A22,22 0 0 0 275.2,112.6"/>
          <text class="val" x="248.1" y="136.0" text-anchor="middle">110°</text>
          <path class="arc" d="M181.6,214.6 A24,24 0 0 1 224.0,230.0"/>
          <text class="val" x="213.0" y="199.3" text-anchor="middle">α</text>
          <circle class="pt" cx="200.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="263.4" cy="94.1" r="3.2"/>
          <circle class="pt" cx="85.1" cy="133.6" r="3.2"/>
          <text x="200.0" y="251.0" text-anchor="middle">O</text>
          <text x="50.0" y="251.0" text-anchor="middle">A</text>
          <text x="350.0" y="251.0" text-anchor="middle">B</text>
          <text x="270.2" y="84.6">C</text>
          <text x="72.8" y="128.3" text-anchor="end">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 58 400 208',
      caption: 'Şekil 32',
      label: 'Aynı şekilde [AD] kesikli çizilmiş; ABCD kirişler dörtgeni.',
      svg: `
          <path class="ln" d="M50.0,230.0 A150.0,150.0 0 0 1 350.0,230.0"/>
          <path class="aux" d="M50.0,230.0 L85.1,133.6"/>
          <path class="ln" d="M50.0,230.0 L350.0,230.0"/>
          <path class="ln" d="M85.1,133.6 L263.4,94.1 L350.0,230.0"/>
          <path class="ln" d="M85.1,133.6 L200.0,230.0"/>
          <path class="arc" d="M241.9,98.8 A22,22 0 0 0 275.2,112.6"/>
          <text class="val" x="248.1" y="136.0" text-anchor="middle">110°</text>
          <path class="arc" d="M181.6,214.6 A24,24 0 0 1 224.0,230.0"/>
          <text class="val" x="213.0" y="199.3" text-anchor="middle">α</text>
          <circle class="pt" cx="200.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="263.4" cy="94.1" r="3.2"/>
          <circle class="pt" cx="85.1" cy="133.6" r="3.2"/>
          <text x="200.0" y="251.0" text-anchor="middle">O</text>
          <text x="50.0" y="251.0" text-anchor="middle">A</text>
          <text x="350.0" y="251.0" text-anchor="middle">B</text>
          <text x="270.2" y="84.6">C</text>
          <text x="72.8" y="128.3" text-anchor="end">D</text>
        `,
    },
    given: ['O, yarım çemberin merkezi', 'm(DCB) = 110°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DOB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '120' },
      { key: 'B', text: '130' },
      { key: 'C', text: '140' },
      { key: 'D', text: '150' },
      { key: 'E', text: '160' },
    ],
    answer: 'C',
    hint: 'A’yı D’ye birleştir: ABCD kirişler dörtgeninde karşılıklı açılar bütünlerdir.',
    solution: [
      {
        title: 'Kirişler dörtgeni',
        detail: 'ABCD çembere içten çizilmiş dörtgen olduğundan m(DAB) = 180 − 110 = 70°.',
      },
      {
        title: 'Çevre açı ve merkez açı',
        detail: 'm(DAB), DB yayını gören çevre açıdır; DB yayı = 2·70 = 140°.',
      },
      { title: 'Sonuç', detail: 'α = m(DOB), DB yayını gören merkez açıdır: α = 140° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 33
  {
    id: 'circles-33',
    topic: 'Kirişler dörtgeninde dış açı',
    figure: {
      viewBox: '-13 35 400 248',
      caption: 'Şekil 33',
      label:
        'O merkezli çemberde A, B, C noktaları çember üzerinde; B, C, D doğrusal, D çemberin dışında. [OA], [OB], [AC] çizilmiş, m(ACD) = 55°, m(AOB) = α.',
      svg: `
          <circle class="ln" cx="165.0" cy="160.0" r="110.0"/>
          <path class="ln" d="M228.1,69.9 L165.0,160.0 L228.1,250.1"/>
          <path class="ln" d="M228.1,69.9 L273.3,140.9"/>
          <path class="ln" d="M228.1,250.1 L273.3,140.9 L302.0,71.6"/>
          <path class="arc" d="M177.6,142.0 A22,22 0 0 1 177.6,178.0"/>
          <text class="val" x="201.0" y="165.0" text-anchor="middle">α</text>
          <path class="arc" d="M260.4,120.7 A24,24 0 0 1 282.5,118.7"/>
          <text class="val" x="269.7" y="104.1" text-anchor="middle">55°</text>
          <circle class="pt" cx="165.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="228.1" cy="69.9" r="3.2"/>
          <circle class="pt" cx="228.1" cy="250.1" r="3.2"/>
          <circle class="pt" cx="273.3" cy="140.9" r="3.2"/>
          <circle class="pt" cx="302.0" cy="71.6" r="3.2"/>
          <text x="157.0" y="165.0" text-anchor="end">O</text>
          <text x="237.3" y="61.8">A</text>
          <text x="237.3" y="268.2">B</text>
          <text x="283.3" y="159.9">C</text>
          <text x="310.0" y="76.6">D</text>
        `,
    },
    given: ['O, çemberin merkezi', 'B, C, D doğrusal', 'm(ACD) = 55°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AOB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '110' },
      { key: 'C', text: '120' },
      { key: 'D', text: '125' },
      { key: 'E', text: '130' },
    ],
    answer: 'B',
    hint: 'Önce ACB açısını bul; bu çevre açı hangi yayı görüyor?',
    solution: [
      { title: 'Bütünler açı', detail: 'B, C, D doğrusal olduğundan m(ACB) = 180 − 55 = 125°.' },
      {
        title: 'Çevre açının yayı',
        detail: 'm(ACB), C’yi içermeyen büyük AB yayını görür: büyük AB yayı = 2·125 = 250°.',
      },
      { title: 'Küçük yay', detail: 'Küçük AB yayı = 360 − 250 = 110°.' },
      {
        title: 'Sonuç',
        detail: 'α = m(AOB), küçük AB yayını gören merkez açıdır: α = 110° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  {
    id: 'circles-34',
    topic: 'Çemberin içinde kesişen kirişler',
    figure: {
      viewBox: '0 43 400 223',
      caption: 'Şekil 34',
      label:
        'O merkezli yarım çemberde [AB] çap; C ve D noktaları yay üzerinde, [AD] ile [BC] E noktasında kesişiyor. AC yayı 3x, CD yayı 2x, DB yayı 4x; m(AEB) soruluyor.',
      svg: `
          <path class="ln" d="M50.0,230.0 A150.0,150.0 0 0 1 350.0,230.0"/>
          <path class="ln" d="M50.0,230.0 L350.0,230.0"/>
          <path class="ln" d="M50.0,230.0 L226.0,82.3"/>
          <path class="ln" d="M350.0,230.0 L125.0,100.1"/>
          <path class="arc" d="M158.5,139.0 A18,18 0 0 0 187.9,136.4"/>
          <text class="val" x="175.1" y="164.3" text-anchor="middle">?</text>
          <text class="val" x="54.5" y="151.0" text-anchor="middle">3x</text>
          <text class="val" x="170.8" y="69.6" text-anchor="middle">2x</text>
          <text class="val" x="328.7" y="127.0" text-anchor="middle">4x</text>
          <circle class="pt" cx="200.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="125.0" cy="100.1" r="3.2"/>
          <circle class="pt" cx="226.0" cy="82.3" r="3.2"/>
          <circle class="pt" cx="172.3" cy="127.4" r="3.2"/>
          <text x="200.0" y="251.0" text-anchor="middle">O</text>
          <text x="50.0" y="251.0" text-anchor="middle">A</text>
          <text x="350.0" y="251.0" text-anchor="middle">B</text>
          <text x="118.0" y="93.0" text-anchor="end">C</text>
          <text x="228.5" y="73.5" text-anchor="middle">D</text>
          <text x="168.3" y="118.4" text-anchor="middle">E</text>
        `,
    },
    given: [
      'O, yarım çemberin merkezi',
      '[AD] ∩ [BC] = {E}',
      'AC yayının ölçüsü 3x',
      'CD yayının ölçüsü 2x',
      'DB yayının ölçüsü 4x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, AEB açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '105' },
      { key: 'C', text: '110' },
      { key: 'D', text: '115' },
      { key: 'E', text: '120' },
    ],
    answer: 'C',
    hint: 'Yarım çemberin yayları toplamı 180°’dir; önce x’i bul.',
    solution: [
      {
        title: 'Yayları bul',
        detail: '3x + 2x + 4x = 180 → 9x = 180 → x = 20°; AC = 60°, CD = 40°, DB = 80°.',
      },
      { title: 'Çevre açılar', detail: 'm(EAB) = DB : 2 = 40°, m(EBA) = AC : 2 = 30°.' },
      { title: 'Üçgende açılar', detail: 'AEB üçgeninde m(AEB) = 180 − 40 − 30 = 110°.' },
      { title: 'Kontrol', detail: 'İç açı formülüyle de m(AEB) = (180 + 40) : 2 = 110° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 35
  {
    id: 'circles-35',
    topic: 'Teğetler ve merkez açı',
    figure: {
      viewBox: '-19 44 400 230',
      caption: 'Şekil 35',
      label:
        'O merkezli çembere dışındaki A noktasından çizilen [AB ve [AC ışınları çembere B ve C noktalarında teğet; [BC] ve [OC] çizilmiş, m(BAC) = 64°, m(OCB) = α.',
      svg: `
          <circle class="ln" cx="130.0" cy="160.0" r="95.0"/>
          <path class="ln" d="M180.3,79.4 L309.3,160.0 L180.3,240.6"/>
          <path class="ln" d="M180.3,79.4 L180.3,240.6"/>
          <path class="ln" d="M130.0,160.0 L180.3,240.6"/>
          <path class="arc" d="M283.8,144.1 A30,30 0 0 0 283.8,175.9"/>
          <text class="val" x="263.3" y="165.0" text-anchor="middle">64°</text>
          <path class="arc" d="M166.6,218.5 A26,26 0 0 1 180.3,214.6"/>
          <text class="val" x="169.9" y="209.0" text-anchor="middle">α</text>
          <circle class="pt" cx="130.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="309.3" cy="160.0" r="3.2"/>
          <circle class="pt" cx="180.3" cy="79.4" r="3.2"/>
          <circle class="pt" cx="180.3" cy="240.6" r="3.2"/>
          <text x="124.0" y="165.0" text-anchor="end">O</text>
          <text x="317.3" y="165.0">A</text>
          <text x="188.8" y="70.9">B</text>
          <text x="188.8" y="259.1">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '-19 44 400 230',
      caption: 'Şekil 35',
      label: 'Aynı şekilde [OB] yarıçapı kesikli çizilmiş; yarıçaplar teğetlere dik.',
      svg: `
          <circle class="ln" cx="130.0" cy="160.0" r="95.0"/>
          <path class="ln" d="M180.3,79.4 L309.3,160.0 L180.3,240.6"/>
          <path class="ln" d="M180.3,79.4 L180.3,240.6"/>
          <path class="ln" d="M130.0,160.0 L180.3,240.6"/>
          <path class="aux" d="M130.0,160.0 L180.3,79.4"/>
          <path class="arc" d="M283.8,144.1 A30,30 0 0 0 283.8,175.9"/>
          <text class="val" x="263.3" y="165.0" text-anchor="middle">64°</text>
          <path class="arc" d="M166.6,218.5 A26,26 0 0 1 180.3,214.6"/>
          <text class="val" x="169.9" y="209.0" text-anchor="middle">α</text>
          <circle class="pt" cx="130.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="309.3" cy="160.0" r="3.2"/>
          <circle class="pt" cx="180.3" cy="79.4" r="3.2"/>
          <circle class="pt" cx="180.3" cy="240.6" r="3.2"/>
          <text x="124.0" y="165.0" text-anchor="end">O</text>
          <text x="317.3" y="165.0">A</text>
          <text x="188.8" y="70.9">B</text>
          <text x="188.8" y="259.1">C</text>
        `,
    },
    given: [
      'O merkezli çemberde [AB ve [AC ışınları çembere B ve C noktalarında teğet',
      'm(BAC) = 64°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(OCB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '26' },
      { key: 'B', text: '28' },
      { key: 'C', text: '30' },
      { key: 'D', text: '32' },
      { key: 'E', text: '36' },
    ],
    answer: 'D',
    hint: 'Teğet, değme noktasındaki yarıçapa diktir; OBAC dörtgenine bak.',
    solution: [
      {
        title: 'Dik açılar',
        detail:
          'm(OBA) = m(OCA) = 90° olduğundan OBAC dörtgeninde m(BOC) = 360 − 90 − 90 − 64 = 116°.',
      },
      { title: 'İkizkenar üçgen', detail: '|OB| = |OC| olduğundan OBC üçgeni ikizkenardır.' },
      { title: 'Sonuç', detail: 'α = (180 − 116) : 2 = 32° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 36
  {
    id: 'circles-36',
    topic: 'Kesenler ve içte kesişen kirişler',
    figure: {
      viewBox: '3 53 400 214',
      caption: 'Şekil 36',
      label:
        'Çemberin dışındaki P noktasından çizilen iki kesen çemberi B, A ve C, D noktalarında kesiyor; [AC] ile [BD] K noktasında kesişiyor. m(APD) = 24°, m(AKD) = 60°, m(BDC) = α.',
      svg: `
          <circle class="ln" cx="275.0" cy="160.0" r="95.0"/>
          <path class="ln" d="M48.1,179.2 L376.8,91.2"/>
          <path class="ln" d="M48.1,179.2 L373.0,230.7"/>
          <path class="ln" d="M347.8,98.9 L189.6,201.6"/>
          <path class="ln" d="M181.4,143.5 L343.3,226.0"/>
          <path class="arc" d="M80.9,170.4 A34,34 0 0 1 81.7,184.6"/>
          <text class="val" x="98.0" y="181.6" text-anchor="middle">24°</text>
          <path class="arc" d="M254.6,159.4 A22,22 0 0 1 255.8,181.4"/>
          <text class="val" x="274.1" y="174.4" text-anchor="middle">60°</text>
          <path class="arc" d="M307.7,207.8 A40,40 0 0 0 303.8,219.7"/>
          <text class="val" x="293.9" y="214.9" text-anchor="middle">α</text>
          <circle class="pt" cx="347.8" cy="98.9" r="3.2"/>
          <circle class="pt" cx="181.4" cy="143.5" r="3.2"/>
          <circle class="pt" cx="189.6" cy="201.6" r="3.2"/>
          <circle class="pt" cx="343.3" cy="226.0" r="3.2"/>
          <circle class="pt" cx="48.1" cy="179.2" r="3.2"/>
          <circle class="pt" cx="236.2" cy="171.4" r="3.2"/>
          <text x="360.0" y="93.7">A</text>
          <text x="177.4" y="134.5" text-anchor="end">B</text>
          <text x="187.6" y="224.6" text-anchor="middle">C</text>
          <text x="354.8" y="242.1">D</text>
          <text x="40.1" y="184.2" text-anchor="end">P</text>
          <text x="236.2" y="162.4" text-anchor="middle">K</text>
        `,
    },
    given: ['P, B, A ve P, C, D doğrusal', '[AC] ∩ [BD] = {K}', 'm(APD) = 24°', 'm(AKD) = 60°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BDC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '15' },
      { key: 'C', text: '18' },
      { key: 'D', text: '21' },
      { key: 'E', text: '24' },
    ],
    answer: 'C',
    hint: 'AD ve BC yaylarını bilinmeyen al: dıştaki açı farklarının, içteki açı toplamlarının yarısıdır.',
    solution: [
      { title: 'Dış açı', detail: 'm(APD) = (AD − BC) : 2 → AD − BC = 48°.' },
      { title: 'İç açı', detail: 'm(AKD) = (AD + BC) : 2 → AD + BC = 120°.' },
      { title: 'Yayları bul', detail: 'Taraf tarafa toplayınca 2·AD = 168 → AD = 84°, BC = 36°.' },
      {
        title: 'Sonuç',
        detail: 'α = m(BDC), BC yayını gören çevre açıdır: α = 36 : 2 = 18° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 37
  {
    id: 'circles-37',
    topic: 'Teğet ve çaptan geçen doğru',
    figure: {
      viewBox: '-17 57 400 224',
      caption: 'Şekil 37',
      label:
        'O merkezli çemberde [AD] çap; A, O, D, B doğrusal ve B çemberin dışında. [BC, çembere T noktasında teğet; [DT] çizilmiş, m(ADT) = 62°, m(ABC) = α.',
      svg: `
          <circle class="ln" cx="150.0" cy="150.0" r="85.0"/>
          <path class="ln" d="M65.0,150.0 L302.0,150.0"/>
          <path class="ln" d="M302.0,150.0 L139.5,259.6"/>
          <path class="ln" d="M235.0,150.0 L197.5,220.5"/>
          <path class="arc" d="M215.0,150.0 A20,20 0 0 0 225.6,167.7"/>
          <text class="val" x="204.1" y="173.5" text-anchor="middle">62°</text>
          <path class="arc" d="M268.0,150.0 A34,34 0 0 0 273.8,169.0"/>
          <text class="val" x="256.1" y="169.0" text-anchor="middle">α</text>
          <circle class="pt" cx="150.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="65.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="235.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="197.5" cy="220.5" r="3.2"/>
          <circle class="pt" cx="302.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="139.5" cy="259.6" r="3.2"/>
          <text x="150.0" y="141.0" text-anchor="middle">O</text>
          <text x="57.0" y="155.0" text-anchor="end">A</text>
          <text x="241.0" y="141.0">D</text>
          <text x="310.0" y="155.0">B</text>
          <text x="206.5" y="238.7">T</text>
          <text x="131.5" y="269.6" text-anchor="end">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '-17 57 400 224',
      caption: 'Şekil 37',
      label: 'Aynı şekilde [OT] yarıçapı kesikli çizilmiş; yarıçap teğete dik.',
      svg: `
          <circle class="ln" cx="150.0" cy="150.0" r="85.0"/>
          <path class="aux" d="M150.0,150.0 L197.5,220.5"/>
          <path class="ln" d="M65.0,150.0 L302.0,150.0"/>
          <path class="ln" d="M302.0,150.0 L139.5,259.6"/>
          <path class="ln" d="M235.0,150.0 L197.5,220.5"/>
          <path class="arc" d="M215.0,150.0 A20,20 0 0 0 225.6,167.7"/>
          <text class="val" x="204.1" y="173.5" text-anchor="middle">62°</text>
          <path class="arc" d="M268.0,150.0 A34,34 0 0 0 273.8,169.0"/>
          <text class="val" x="256.1" y="169.0" text-anchor="middle">α</text>
          <circle class="pt" cx="150.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="65.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="235.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="197.5" cy="220.5" r="3.2"/>
          <circle class="pt" cx="302.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="139.5" cy="259.6" r="3.2"/>
          <text x="150.0" y="141.0" text-anchor="middle">O</text>
          <text x="57.0" y="155.0" text-anchor="end">A</text>
          <text x="241.0" y="141.0">D</text>
          <text x="310.0" y="155.0">B</text>
          <text x="206.5" y="238.7">T</text>
          <text x="131.5" y="269.6" text-anchor="end">C</text>
        `,
    },
    given: [
      'O, çemberin merkezi',
      'A, O, D, B doğrusal',
      '[BC, çembere T noktasında teğet',
      'm(ADT) = 62°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '28' },
      { key: 'C', text: '30' },
      { key: 'D', text: '34' },
      { key: 'E', text: '38' },
    ],
    answer: 'D',
    hint: 'O’yu T’ye birleştir: OT yarıçapı teğete diktir ve ODT üçgeni ikizkenardır.',
    solution: [
      { title: 'İkizkenar üçgen', detail: '|OD| = |OT| olduğundan m(OTD) = m(ODT) = 62°.' },
      { title: 'Merkez açı', detail: 'ODT üçgeninde m(DOT) = 180 − 62 − 62 = 56°.' },
      { title: 'Teğet dikliği', detail: 'OT ⟂ BC olduğundan m(OTB) = 90°.' },
      { title: 'Sonuç', detail: 'OTB üçgeninde α = 180 − 90 − 56 = 34° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 38
  {
    id: 'circles-38',
    topic: 'Teğetler ve çevre açı',
    figure: {
      viewBox: '-28 40 400 221',
      caption: 'Şekil 38',
      label:
        'Çember; A köşesinden çizilen iki teğete B ve F noktalarında, E köşesinden çizilen iki teğete D ve F noktalarında değiyor. C noktası çemberin üst yayında; [BC] ve [CD] çizilmiş, m(EAB) = 50°, m(DEA) = 70°, m(BCD) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="80.0"/>
          <path class="ln" d="M164.4,67.9 L28.4,230.0 L314.3,230.0 L261.5,85.1"/>
          <path class="ln" d="M138.7,98.6 L216.6,71.7 L275.2,122.6"/>
          <path class="arc" d="M45.2,210.1 A26,26 0 0 1 54.4,230.0"/>
          <text class="val" x="68.3" y="216.4" text-anchor="middle">50°</text>
          <path class="arc" d="M305.4,205.6 A26,26 0 0 0 288.3,230.0"/>
          <text class="val" x="278.2" y="209.8" text-anchor="middle">70°</text>
          <path class="arc" d="M199.6,77.6 A18,18 0 0 0 230.2,83.6"/>
          <text class="val" x="210.5" y="108.2" text-anchor="middle">α</text>
          <circle class="pt" cx="28.4" cy="230.0" r="3.2"/>
          <circle class="pt" cx="314.3" cy="230.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="138.7" cy="98.6" r="3.2"/>
          <circle class="pt" cx="275.2" cy="122.6" r="3.2"/>
          <circle class="pt" cx="216.6" cy="71.7" r="3.2"/>
          <text x="20.4" y="244.0" text-anchor="end">A</text>
          <text x="322.3" y="244.0">E</text>
          <text x="200.0" y="250.0" text-anchor="middle">F</text>
          <text x="128.7" y="104.6" text-anchor="end">B</text>
          <text x="285.2" y="128.6">D</text>
          <text x="219.5" y="63.1" text-anchor="middle">C</text>
        `,
    },
    given: ['B, D ve F teğet noktaları', 'm(EAB) = 50°', 'm(DEA) = 70°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '110' },
      { key: 'C', text: '115' },
      { key: 'D', text: '120' },
      { key: 'E', text: '130' },
    ],
    answer: 'D',
    hint: 'Dış noktadan çizilen iki teğet arasındaki açı ile küçük yay bütünlerdir.',
    solution: [
      {
        title: 'A noktasından teğetler',
        detail: 'm(EAB) = 180 − BF yayı → BF yayı = 180 − 50 = 130°.',
      },
      {
        title: 'E noktasından teğetler',
        detail: 'm(DEA) = 180 − FD yayı → FD yayı = 180 − 70 = 110°.',
      },
      {
        title: 'Gördüğü yay',
        detail: 'α çevre açısı, F’yi içeren BD yayını görür: 130 + 110 = 240°.',
      },
      { title: 'Sonuç', detail: 'α = 240 : 2 = 120° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 39
  {
    id: 'circles-39',
    topic: 'Teğetler ve kesenler',
    figure: {
      viewBox: '-32 34 400 289',
      caption: 'Şekil 39',
      label:
        'Çembere D noktasından çizilen [DC ve [DE ışınları C ve E noktalarında teğet. A noktasından çizilen iki kesen çemberi B, C ve F, E noktalarında kesiyor; m(EDC) = 70°, m(EAC) = 25°.',
      svg: `
          <circle class="ln" cx="215.0" cy="150.0" r="80.0"/>
          <path class="ln" d="M21.1,305.9 L219.4,47.4"/>
          <path class="ln" d="M21.1,305.9 L320.4,150.0"/>
          <path class="ln" d="M201.1,71.2 L313.6,51.4 L293.8,163.9"/>
          <path class="arc" d="M39.3,282.1 A30,30 0 0 1 47.7,292.0"/>
          <text class="val" x="57.8" y="280.0" text-anchor="middle">25°</text>
          <path class="arc" d="M292.0,55.2 A22,22 0 0 0 309.8,73.0"/>
          <text class="val" x="285.3" y="84.7" text-anchor="middle">70°</text>
          <circle class="pt" cx="21.1" cy="305.9" r="3.2"/>
          <circle class="pt" cx="135.3" cy="157.0" r="3.2"/>
          <circle class="pt" cx="201.1" cy="71.2" r="3.2"/>
          <circle class="pt" cx="313.6" cy="51.4" r="3.2"/>
          <circle class="pt" cx="293.8" cy="163.9" r="3.2"/>
          <circle class="pt" cx="181.2" cy="222.5" r="3.2"/>
          <text x="13.1" y="310.9" text-anchor="end">A</text>
          <text x="121.4" y="163.2" text-anchor="end">B</text>
          <text x="198.7" y="62.4" text-anchor="middle">C</text>
          <text x="321.6" y="56.4">D</text>
          <text x="307.6" y="171.3">E</text>
          <text x="175.3" y="240.2" text-anchor="end">F</text>
        `,
    },
    given: [
      '[DC ve [DE çembere teğet',
      'A, B, C ve A, F, E doğrusal',
      'm(EDC) = 70°',
      'm(EAC) = 25°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, BF yayının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '70' },
    ],
    answer: 'D',
    hint: 'Önce D’deki teğetlerden CE yayını bul, sonra A’daki dış açı formülünü kullan.',
    solution: [
      {
        title: 'Teğetler arası açı',
        detail: 'm(EDC) = 180 − CE yayı → CE yayı = 180 − 70 = 110°.',
      },
      { title: 'Dış açı', detail: 'm(EAC) = (CE − BF) : 2 → 25 = (110 − BF) : 2.' },
      { title: 'Sonuç', detail: '110 − BF = 50 → BF yayı = 60° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'circles-40',
    topic: 'Aynı yayı gören çevre açılar',
    figure: {
      viewBox: '-12 18 400 255',
      caption: 'Şekil 40',
      label:
        'A, B, C, D noktaları çember üzerinde; [AB], [BC], [CA], [BD], [CD] ve [AD] çizilmiş, m(ABC) = 136°, m(BDC) = 18°, m(ACB) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="100.0"/>
          <path class="ln" d="M200.0,50.0 L121.2,88.4 L100.1,146.5 L200.0,50.0"/>
          <path class="ln" d="M121.2,88.4 L234.2,244.0 L100.1,146.5"/>
          <path class="ln" d="M200.0,50.0 L234.2,244.0"/>
          <path class="arc" d="M118.8,128.4 A26,26 0 0 0 109.0,122.1"/>
          <text class="val" x="121.8" y="118.0" text-anchor="middle">x</text>
          <path class="arc" d="M210.7,211.6 A40,40 0 0 0 201.8,220.5"/>
          <text class="val" x="193.2" y="208.0" text-anchor="middle">18°</text>
          <circle class="pt" cx="200.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="121.2" cy="88.4" r="3.2"/>
          <circle class="pt" cx="100.1" cy="146.5" r="3.2"/>
          <circle class="pt" cx="234.2" cy="244.0" r="3.2"/>
          <text x="200.0" y="41.0" text-anchor="middle">A</text>
          <text x="110.2" y="84.8" text-anchor="end">B</text>
          <text x="86.1" y="151.0" text-anchor="end">C</text>
          <text x="239.0" y="262.1" text-anchor="middle">D</text>
        `,
    },
    given: ['A, B, C ve D çember üzerinde', 'm(ABC) = 136°', 'm(BDC) = 18°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '22' },
      { key: 'B', text: '24' },
      { key: 'C', text: '26' },
      { key: 'D', text: '28' },
      { key: 'E', text: '32' },
    ],
    answer: 'C',
    hint: 'm(ABC) çevre açısının gördüğü yayı bul; kalan yay AB ile BC yaylarının toplamıdır.',
    solution: [
      { title: 'Büyük yay', detail: 'm(ABC) = 136° olduğundan B’yi içermeyen AC yayı = 272°.' },
      { title: 'Küçük yaylar', detail: 'AB yayı + BC yayı = 360 − 272 = 88°.' },
      {
        title: 'BC yayı',
        detail: 'm(BDC) = 18° çevre açı: BC yayı = 36°, dolayısıyla AB yayı = 88 − 36 = 52°.',
      },
      { title: 'Sonuç', detail: 'x = m(ACB), AB yayını görür: x = 52 : 2 = 26° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 41
  {
    id: 'circles-41',
    topic: 'Çap ve paralel doğrular',
    figure: {
      viewBox: '0 42 400 216',
      caption: 'Şekil 41',
      label:
        'O merkezli çemberde [AB] çap; E noktası [OB] üzerinde, D ve C çemberin üst yayında. [AD] ile [EC] paralel, m(BEC) = 64°.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="100.0"/>
          <path class="ln" d="M100.0,150.0 L300.0,150.0"/>
          <path class="ln" d="M100.0,150.0 L138.4,71.2"/>
          <path class="ln" d="M245.3,150.0 L276.6,85.7"/>
          <path class="arc" d="M265.3,150.0 A20,20 0 0 0 254.0,132.0"/>
          <text class="val" x="275.8" y="135.9" text-anchor="middle">64°</text>
          <circle class="pt" cx="200.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="100.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="300.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="276.6" cy="85.7" r="3.2"/>
          <circle class="pt" cx="138.4" cy="71.2" r="3.2"/>
          <circle class="pt" cx="245.3" cy="150.0" r="3.2"/>
          <text x="200.0" y="170.0" text-anchor="middle">O</text>
          <text x="245.3" y="170.0" text-anchor="middle">E</text>
          <text x="92.0" y="155.0" text-anchor="end">A</text>
          <text x="308.0" y="155.0">B</text>
          <text x="287.3" y="81.7">C</text>
          <text x="129.8" y="65.2" text-anchor="end">D</text>
        `,
    },
    given: ['O, çemberin merkezi', '[AB], çap', '[AD] // [EC]', 'm(BEC) = 64°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, AD yayının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '52' },
      { key: 'C', text: '56' },
      { key: 'D', text: '58' },
      { key: 'E', text: '64' },
    ],
    answer: 'B',
    hint: 'Paralellikten m(DAB) açısını bul; bu çevre açı DB yayını görür.',
    solution: [
      { title: 'Yöndeş açılar', detail: '[AD] // [EC] olduğundan m(DAB) = m(CEB) = 64°.' },
      { title: 'DB yayı', detail: 'm(DAB) çevre açıdır: DB yayı = 2·64 = 128°.' },
      { title: 'Sonuç', detail: 'Yarım çember 180° olduğundan AD yayı = 180 − 128 = 52° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 42
  {
    id: 'circles-42',
    topic: 'Çeyrek çemberde ikizkenar üçgen',
    figure: {
      viewBox: '0 32 400 243',
      caption: 'Şekil 42',
      label:
        'O merkezli çeyrek çemberde A ve C yayın uçları, B yay üzerinde; [OB] ile [AC] D noktasında kesişiyor. [AB] çizilmiş, |AB| = |AD|, m(BAC) = α.',
      svg: `
          <path class="ln" d="M100.0,50.0 A200,200 0 0 1 300.0,250.0"/>
          <path class="ln" d="M100.0,50.0 L100.0,250.0 L300.0,250.0"/>
          <path class="ln" d="M100.0,50.0 L300.0,250.0"/>
          <path class="ln" d="M100.0,250.0 L200.0,76.8"/>
          <path class="ln" d="M100.0,50.0 L200.0,76.8"/>
          <path class="tick" d="M158.5,71.9 L161.6,60.3"/>
          <path class="tick" d="M162.4,72.9 L165.5,61.3"/>
          <path class="tick" d="M139.7,98.2 L148.2,89.7"/>
          <path class="tick" d="M142.6,101.0 L151.0,92.6"/>
          <path class="arc" d="M142.5,61.4 A44,44 0 0 1 131.1,81.1"/>
          <text class="val" x="126.0" y="70.0" text-anchor="middle">α</text>
          <circle class="pt" cx="100.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="100.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="76.8" r="3.2"/>
          <circle class="pt" cx="300.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="173.2" cy="123.2" r="3.2"/>
          <text x="92.0" y="264.0" text-anchor="end">O</text>
          <text x="92.0" y="55.0" text-anchor="end">A</text>
          <text x="207.0" y="69.7">B</text>
          <text x="308.0" y="264.0">C</text>
          <text x="163.2" y="125.2" text-anchor="end">D</text>
        `,
    },
    given: ['O, çeyrek çemberin merkezi', '[OB] ∩ [AC] = {D}', '|AB| = |AD|'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '22,5' },
      { key: 'C', text: '30' },
      { key: 'D', text: '36' },
      { key: 'E', text: '45' },
    ],
    answer: 'C',
    hint: 'α çevre açısı BC yayını görür; m(BOC) = 2α yazıp OAB ve ABD üçgenlerine bak.',
    solution: [
      {
        title: 'Merkez açı',
        detail: 'α, BC yayını gören çevre açı olduğundan m(BOC) = 2α, m(AOB) = 90 − 2α.',
      },
      {
        title: 'OAB üçgeni',
        detail: '|OA| = |OB| olduğundan m(OBA) = (180 − (90 − 2α)) : 2 = 45 + α.',
      },
      { title: 'ABD üçgeni', detail: '|AB| = |AD| olduğundan m(ADB) = m(ABD) = 45 + α.' },
      { title: 'Denklem', detail: 'α + 2(45 + α) = 180 → 3α = 90.' },
      { title: 'Sonuç', detail: 'α = 30° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 43
  {
    id: 'circles-43',
    topic: 'Yarım çemberde ikizkenar üçgenler',
    figure: {
      viewBox: '6.1 68.4 400 165.6',
      caption: 'Şekil 43',
      label:
        'O merkezli yarım çemberde [BC] çap; A noktası CB doğrusu üzerinde B’nin dışında. A’dan çizilen doğru çemberi E ve D noktalarında kesiyor, |AE| = |OC|, m(DOC) = 78°.',
      svg: `
          <path class="ln" d="M140.0,200.0 A110.0,110.0 0 0 1 360.0,200.0"/>
          <path class="ln" d="M52.3,200.0 L360.0,200.0"/>
          <path class="ln" d="M52.3,200.0 L272.9,92.4"/>
          <path class="ln" d="M250.0,200.0 L272.9,92.4"/>
          <path class="tick" d="M97.3,171.4 L102.5,182.2"/>
          <path class="tick" d="M100.9,169.6 L106.1,180.4"/>
          <path class="tick" d="M303.0,194.0 L303.0,206.0"/>
          <path class="tick" d="M307.0,194.0 L307.0,206.0"/>
          <path class="arc" d="M274.0,200.0 A24,24 0 0 0 255.0,176.5"/>
          <text class="val" x="282.6" y="178.6" text-anchor="middle">78°</text>
          <circle class="pt" cx="52.3" cy="200.0" r="3.2"/>
          <circle class="pt" cx="140.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="250.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="272.9" cy="92.4" r="3.2"/>
          <circle class="pt" cx="151.1" cy="151.8" r="3.2"/>
          <text x="52.3" y="222.0" text-anchor="middle">A</text>
          <text x="140.0" y="222.0" text-anchor="middle">B</text>
          <text x="250.0" y="222.0" text-anchor="middle">O</text>
          <text x="360.0" y="222.0" text-anchor="middle">C</text>
          <text x="272.9" y="82.4" text-anchor="middle">D</text>
          <text x="145.1" y="142.8" text-anchor="end">E</text>
        `,
    },
    given: ['O merkezli yarım çember', '|AE| = |OC|', 'm(DOC) = 78°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADO) kaç derecedir?',
    choices: [
      { key: 'A', text: '44' },
      { key: 'B', text: '48' },
      { key: 'C', text: '50' },
      { key: 'D', text: '52' },
      { key: 'E', text: '56' },
    ],
    answer: 'D',
    hint: '|AE| = |OC| = |OE| olduğundan AEO üçgeni ikizkenardır; m(EAO) = a de.',
    solution: [
      { title: 'İkizkenar AEO', detail: '|AE| = |OE| = r olduğundan m(EAO) = m(EOA) = a.' },
      { title: 'Dış açı', detail: 'm(OED), AEO üçgeninin dış açısıdır: m(OED) = 2a.' },
      { title: 'İkizkenar OED', detail: '|OE| = |OD| olduğundan m(ODE) = m(OED) = 2a.' },
      { title: 'ADO üçgeni', detail: 'm(DOC) dış açıdır: a + 2a = 78 → a = 26.' },
      { title: 'Sonuç', detail: 'm(ADO) = 2a = 52° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 44
  {
    id: 'circles-44',
    topic: 'Teğet ve orta taban',
    figure: {
      viewBox: '-6.4 89.5 400 267.3',
      caption: 'Şekil 44',
      label:
        'ABC üçgeninde çember B ve K noktalarından geçiyor, [AC] kenarına E noktasında teğet; K noktası [AB] üzerinde, |BK| = |AK|, |AE| = |CE|, KE yayı 76°, m(ACB) = α.',
      svg: `
          <circle class="ln" cx="185.2" cy="211.3" r="97.8"/>
          <path class="ln" d="M300.0,123.8 L150.0,120.0 L263.1,332.7 L300.0,123.8"/>
          <path class="tick" d="M185.6,114.9 L185.3,126.9"/>
          <path class="tick" d="M189.6,115.0 L189.3,127.0"/>
          <path class="tick" d="M260.6,116.8 L260.3,128.8"/>
          <path class="tick" d="M264.6,116.9 L264.3,128.9"/>
          <path class="tick" d="M296.7,177.1 L284.8,175.0"/>
          <path class="tick" d="M278.2,281.6 L266.4,279.5"/>
          <path class="arc" d="M247.2,302.7 A34,34 0 0 1 269.0,299.3"/>
          <text class="val" x="255.6" y="290.3" text-anchor="middle">α</text>
          <circle class="pt" cx="300.0" cy="123.8" r="3.2"/>
          <circle class="pt" cx="150.0" cy="120.0" r="3.2"/>
          <circle class="pt" cx="263.1" cy="332.7" r="3.2"/>
          <circle class="pt" cx="225.0" cy="121.9" r="3.2"/>
          <circle class="pt" cx="281.5" cy="228.3" r="3.2"/>
          <text x="306.0" y="117.8">A</text>
          <text x="141.0" y="124.0" text-anchor="end">B</text>
          <text x="263.1" y="354.7" text-anchor="middle">C</text>
          <text x="221.0" y="111.9" text-anchor="end">K</text>
          <text x="290.5" y="236.3">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'B, K ve E çember üzerinde',
      '[AC], E noktasında teğet',
      '|BK| = |AK|',
      '|AE| = |CE|',
      'm(KE) = 76°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCA) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '38' },
      { key: 'B', text: '40' },
      { key: 'C', text: '44' },
      { key: 'D', text: '48' },
      { key: 'E', text: '52' },
    ],
    answer: 'A',
    hint: 'K ve E kenarların orta noktalarıdır; [KE] ile [BC] arasındaki ilişkiyi düşün.',
    solution: [
      {
        title: 'Orta taban',
        detail: 'K, [AB]’nin; E, [AC]’nin orta noktası olduğundan [KE] // [BC].',
      },
      {
        title: 'Teğet-kiriş açısı',
        detail: 'm(AEK), KE yayını gören teğet-kiriş açısıdır: m(AEK) = 76 : 2 = 38°.',
      },
      { title: 'Yöndeş açılar', detail: '[KE] // [BC] olduğundan m(BCA) = m(KEA).' },
      { title: 'Sonuç', detail: 'α = 38° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 45
  {
    id: 'circles-45',
    topic: 'Çembersel ikizkenar yamuk',
    figure: {
      viewBox: '0.0 16.0 400 288.0',
      caption: 'Şekil 45',
      label:
        'Çember üzerinde A, P, B, C ve D noktaları; ABCD dörtgeninde [DC] // [AB], |AD| = |DC|, m(DAB) = 4α, m(ADC) = 5α. [CP] ve [PB] çizilmiş, m(CPB) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="160.0" r="120.0"/>
          <path class="ln" d="M96.1,220.0 L303.9,220.0 L277.1,68.1 L122.9,68.1 L96.1,220.0"/>
          <path class="ln" d="M277.1,68.1 L168.9,275.9 L303.9,220.0"/>
          <path class="tick" d="M103.2,145.0 L115.0,147.0"/>
          <path class="tick" d="M103.9,141.0 L115.7,143.1"/>
          <path class="tick" d="M198.0,62.1 L198.0,74.1"/>
          <path class="tick" d="M202.0,62.1 L202.0,74.1"/>
          <path class="arc" d="M122.1,220.0 A26,26 0 0 0 100.6,194.4"/>
          <text class="val" x="131.3" y="195.4" text-anchor="middle">4α</text>
          <path class="arc" d="M118.7,91.7 A24,24 0 0 0 146.9,68.1"/>
          <text class="val" x="149.9" y="105.2" text-anchor="middle">5α</text>
          <path class="arc" d="M182.8,249.3 A30,30 0 0 1 196.7,264.4"/>
          <text class="val" x="201.4" y="251.2" text-anchor="middle">x</text>
          <circle class="pt" cx="96.1" cy="220.0" r="3.2"/>
          <circle class="pt" cx="303.9" cy="220.0" r="3.2"/>
          <circle class="pt" cx="277.1" cy="68.1" r="3.2"/>
          <circle class="pt" cx="122.9" cy="68.1" r="3.2"/>
          <circle class="pt" cx="168.9" cy="275.9" r="3.2"/>
          <text x="87.1" y="224.0" text-anchor="end">A</text>
          <text x="312.9" y="224.0">B</text>
          <text x="284.1" y="62.1">C</text>
          <text x="115.9" y="62.1" text-anchor="end">D</text>
          <text x="168.9" y="297.9" text-anchor="middle">P</text>
        `,
    },
    given: [
      'A, P, B, C ve D çember üzerindeki noktalar',
      '|AD| = |DC|',
      'm(DAB) = 4α',
      'm(ADC) = 5α',
    ],
    stem: [],
    ask: 'Yukarıdaki çemberde; [DC] // [AB] olduğuna göre, m(CPB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '36' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '50' },
    ],
    answer: 'C',
    hint: '[DC] // [AB] olduğundan m(DAB) + m(ADC) = 180°; önce α’yı bul.',
    solution: [
      { title: 'α', detail: '[DC] // [AB] olduğundan 4α + 5α = 180 → α = 20, m(DAB) = 80°.' },
      { title: 'DB yayı', detail: 'm(DAB) çevre açı: DC yayı + CB yayı = 160°.' },
      {
        title: 'Eşit yaylar',
        detail: 'Çemberdeki yamuk ikizkenardır, |CB| = |AD| = |DC|; her yay 80°.',
      },
      { title: 'Sonuç', detail: 'x = m(CPB), CB yayını görür: x = 80 : 2 = 40° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 46
  {
    id: 'circles-46',
    topic: 'Yarım çemberde eşit yaylar',
    figure: {
      viewBox: '13.1 76.0 400 158.0',
      caption: 'Şekil 46',
      label:
        'O merkezli yarım çemberde [EC] çap; B noktası CE doğrusu üzerinde E’nin dışında, D ve A yay üzerinde. |BD| = |DC|, m(DBC) = 24°, AD yayı ile AC yayı eşit, m(ACE) = α.',
      svg: `
          <path class="ln" d="M180.0,200.0 A100.0,100.0 0 0 1 380.0,200.0"/>
          <path class="ln" d="M46.2,200.0 L380.0,200.0"/>
          <path class="ln" d="M46.2,200.0 L213.1,125.7 L380.0,200.0"/>
          <path class="ln" d="M320.7,108.6 L380.0,200.0"/>
          <path class="tick" d="M125.4,158.2 L130.2,169.1"/>
          <path class="tick" d="M129.0,156.5 L133.9,167.5"/>
          <path class="tick" d="M297.2,156.5 L292.3,167.5"/>
          <path class="tick" d="M300.8,158.2 L295.9,169.1"/>
          <path class="arc" d="M86.2,200.0 A40,40 0 0 0 82.7,183.7"/>
          <text class="val" x="104.9" y="192.5" text-anchor="middle">24°</text>
          <path class="arc" d="M346.0,200.0 A34,34 0 0 1 361.5,171.5"/>
          <text class="val" x="336.1" y="181.1" text-anchor="middle">α</text>
          <circle class="pt" cx="320.7" cy="108.6" r="3.2"/>
          <circle class="pt" cx="46.2" cy="200.0" r="3.2"/>
          <circle class="pt" cx="380.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="213.1" cy="125.7" r="3.2"/>
          <circle class="pt" cx="180.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="200.0" r="3.2"/>
          <text x="46.2" y="222.0" text-anchor="middle">B</text>
          <text x="180.0" y="222.0" text-anchor="middle">E</text>
          <text x="280.0" y="222.0" text-anchor="middle">O</text>
          <text x="380.0" y="222.0" text-anchor="middle">C</text>
          <text x="207.1" y="116.7" text-anchor="end">D</text>
          <text x="324.7" y="98.6" text-anchor="middle">A</text>
        `,
    },
    given: ['[EC] çap', '|BD| = |DC|', 'm(DBC) = 24°', 'm(AD) = m(AC)'],
    stem: [],
    ask: 'Şekildeki O merkezli yarım çemberde m(ACE) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '54' },
      { key: 'B', text: '57' },
      { key: 'C', text: '60' },
      { key: 'D', text: '63' },
      { key: 'E', text: '66' },
    ],
    answer: 'B',
    hint: '|BD| = |DC| olduğundan m(DCB) = 24°; bu çevre açının gördüğü DE yayını bul.',
    solution: [
      { title: 'İkizkenar BDC', detail: '|BD| = |DC| olduğundan m(DCE) = m(DBC) = 24°.' },
      { title: 'DE yayı', detail: 'm(DCE) çevre açı: DE yayı = 48°, DC yayı = 180 − 48 = 132°.' },
      { title: 'Eşit yaylar', detail: 'AD yayı = AC yayı = 132 : 2 = 66°.' },
      { title: 'AE yayı', detail: 'α, AE yayını görür: AE yayı = 48 + 66 = 114°.' },
      { title: 'Sonuç', detail: 'α = 114 : 2 = 57° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 47
  {
    id: 'circles-47',
    topic: 'Teğet ve merkezden geçen kesen',
    figure: {
      viewBox: '18.1 68.1 400 245.9',
      caption: 'Şekil 47',
      label:
        'O merkezli çemberde [AD] K noktasında, [AB] L noktasında teğet; B, C, O, E, D doğrusal, C ve E çember üzerinde. [KC] ve [KO] çizilmiş, m(BAD) = 110°, m(ABD) = 46°.',
      svg: `
          <circle class="ln" cx="170.0" cy="200.0" r="90.0"/>
          <path class="ln" d="M44.9,200.0 L391.3,200.0"/>
          <path class="ln" d="M44.9,200.0 L149.0,92.1 L391.3,200.0"/>
          <path class="ln" d="M80.0,200.0 L206.6,117.8 L170.0,200.0"/>
          <path class="arc" d="M135.1,106.5 A20,20 0 0 0 167.3,100.3"/>
          <text class="val" x="156.7" y="136.4" text-anchor="middle">110°</text>
          <path class="arc" d="M74.9,200.0 A30,30 0 0 0 65.7,178.4"/>
          <text class="val" x="89.1" y="186.2" text-anchor="middle">46°</text>
          <circle class="pt" cx="149.0" cy="92.1" r="3.2"/>
          <circle class="pt" cx="44.9" cy="200.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="391.3" cy="200.0" r="3.2"/>
          <circle class="pt" cx="260.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="206.6" cy="117.8" r="3.2"/>
          <circle class="pt" cx="105.3" cy="137.5" r="3.2"/>
          <circle class="pt" cx="170.0" cy="200.0" r="3.2"/>
          <text x="149.0" y="82.1" text-anchor="middle">A</text>
          <text x="36.9" y="206.0" text-anchor="end">B</text>
          <text x="88.0" y="218.0">C</text>
          <text x="252.0" y="218.0" text-anchor="end">E</text>
          <text x="399.3" y="205.0">D</text>
          <text x="208.6" y="107.8" text-anchor="middle">K</text>
          <text x="96.3" y="137.5" text-anchor="end">L</text>
          <text x="170.0" y="220.0" text-anchor="middle">O</text>
        `,
    },
    given: ['O merkezli çember', 'K ve L teğet noktaları', 'm(BAD) = 110°', 'm(ABD) = 46°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CKO) kaç derecedir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '27' },
      { key: 'C', text: '30' },
      { key: 'D', text: '33' },
      { key: 'E', text: '36' },
    ],
    answer: 'D',
    hint: 'ABD üçgeninden m(ADB)’yi bul; [OK] teğete diktir.',
    solution: [
      { title: 'ABD üçgeni', detail: 'm(ADB) = 180 − 110 − 46 = 24°.' },
      { title: 'Teğet', detail: '[OK] ⊥ [AD] olduğundan KOD üçgeninde m(KOD) = 90 − 24 = 66°.' },
      { title: 'Komşu açı', detail: 'm(KOC) = 180 − 66 = 114°.' },
      {
        title: 'İkizkenar OKC',
        detail: '|OK| = |OC| olduğundan m(CKO) = (180 − 114) : 2 = 33° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 48
  {
    id: 'circles-48',
    topic: 'Kirişe dik yarıçap',
    figure: {
      viewBox: '0.0 26.0 400 288.0',
      caption: 'Şekil 48',
      label:
        'O merkezli çemberde [AB] kirişi; C çember üzerinde, [CD] ⊥ [AB], D noktası [AB] üzerinde ve |AD| = |DB|. [CB] ve [OB] çizilmiş, m(ABO) = 28°, m(CBA) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="170.0" r="120.0"/>
          <path class="ln" d="M94.0,113.7 L306.0,113.7"/>
          <path class="ln" d="M200.0,50.0 L200.0,113.7"/>
          <path class="ln" d="M200.0,50.0 L306.0,113.7 L200.0,170.0"/>
          <path class="tick" d="M145.0,107.7 L145.0,119.7"/>
          <path class="tick" d="M149.0,107.7 L149.0,119.7"/>
          <path class="tick" d="M251.0,107.7 L251.0,119.7"/>
          <path class="tick" d="M255.0,107.7 L255.0,119.7"/>
          <path class="arc" d="M209.0,113.7 L209.0,104.7 L200.0,104.7"/>
          <path class="arc" d="M266.0,113.7 A40,40 0 0 0 270.6,132.4"/>
          <text class="val" x="249.7" y="132.7" text-anchor="middle">28°</text>
          <path class="arc" d="M283.7,100.3 A26,26 0 0 0 280.0,113.7"/>
          <text class="val" x="267.4" y="108.0" text-anchor="middle">x</text>
          <circle class="pt" cx="94.0" cy="113.7" r="3.2"/>
          <circle class="pt" cx="306.0" cy="113.7" r="3.2"/>
          <circle class="pt" cx="200.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="113.7" r="3.2"/>
          <circle class="pt" cx="200.0" cy="170.0" r="3.2"/>
          <text x="85.0" y="117.7" text-anchor="end">A</text>
          <text x="315.0" y="111.7">B</text>
          <text x="194.0" y="41.0" text-anchor="end">C</text>
          <text x="192.0" y="133.7" text-anchor="end">D</text>
          <text x="210.0" y="186.0">O</text>
        `,
    },
    given: ['[CD] ⊥ [AB]', '|AD| = |DB|', 'm(ABO) = 28°'],
    stem: [],
    ask: 'A, B ve C noktaları O merkezli çember üzerinde olduğuna göre, m(CBA) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '22' },
      { key: 'B', text: '24' },
      { key: 'C', text: '26' },
      { key: 'D', text: '28' },
      { key: 'E', text: '31' },
    ],
    answer: 'E',
    hint: 'Kirişin orta dikmesi merkezden geçer; C, D ve O doğrusaldır.',
    solution: [
      {
        title: 'Orta dikme',
        detail:
          '[CD], [AB]’nin orta dikmesidir; merkezden geçer, C küçük AB yayının orta noktasıdır.',
      },
      {
        title: 'Merkez açı',
        detail: '|OA| = |OB| olduğundan m(AOB) = 180 − 2·28 = 124°, AB yayı = 124°.',
      },
      { title: 'AC yayı', detail: 'AC yayı = CB yayı = 124 : 2 = 62°.' },
      { title: 'Sonuç', detail: 'x = m(CBA), AC yayını görür: x = 62 : 2 = 31° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 49
  {
    id: 'circles-49',
    topic: 'Yarım çembere dış noktadan teğetler',
    figure: {
      viewBox: '0 88 400 186',
      caption: 'Şekil 49',
      label:
        'O merkezli yarım çemberin çapı [DE], K ve L noktaları DE doğrusu üzerinde. [AK ve [AL yarım çembere sırasıyla B ve C noktalarında teğet; [DB] çizilmiş, m(BDE) = 70°, m(KAL) = α.',
      svg: `
          <path class="ln" d="M64.0,240.0 A95,95 0 0 1 254.0,240.0 Z"/>
          <path class="ln" d="M24.9,252.0 L137.5,117.9 L369.8,252.0"/>
          <path class="ln" d="M64.0,240.0 L86.2,178.9"/>
          <path class="arc" d="M128.5,128.6 A14,14 0 0 0 149.6,124.9"/>
          <text class="val" x="141.8" y="147.5" text-anchor="middle">α</text>
          <path class="arc" d="M90.0,240.0 A26,26 0 0 0 72.9,215.6"/>
          <text class="val" x="100.0" y="219.8" text-anchor="middle">70°</text>
          <circle class="pt" cx="137.5" cy="117.9" r="3.2"/>
          <circle class="pt" cx="86.2" cy="178.9" r="3.2"/>
          <circle class="pt" cx="206.5" cy="157.7" r="3.2"/>
          <circle class="pt" cx="64.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="254.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="159.0" cy="240.0" r="3.2"/>
          <text x="137.5" y="107.9" text-anchor="middle">A</text>
          <text x="78.2" y="174.9" text-anchor="end">B</text>
          <text x="214.5" y="153.7">C</text>
          <text x="64.0" y="260.0" text-anchor="middle">D</text>
          <text x="254.0" y="260.0" text-anchor="middle">E</text>
          <text x="159.0" y="260.0" text-anchor="middle">O</text>
          <text x="18.9" y="256.0" text-anchor="end">K</text>
          <text x="375.8" y="256.0">L</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 88 400 186',
      caption: 'Şekil 49',
      label: 'Aynı şekilde [OB] ve [OC] yarıçapları kesikli çizilmiş; yarıçaplar teğetlere dik.',
      svg: `
          <path class="ln" d="M64.0,240.0 A95,95 0 0 1 254.0,240.0 Z"/>
          <path class="ln" d="M24.9,252.0 L137.5,117.9 L369.8,252.0"/>
          <path class="ln" d="M64.0,240.0 L86.2,178.9"/>
          <path class="aux" d="M86.2,178.9 L159.0,240.0 L206.5,157.7"/>
          <path class="arc" d="M128.5,128.6 A14,14 0 0 0 149.6,124.9"/>
          <text class="val" x="141.8" y="147.5" text-anchor="middle">α</text>
          <path class="arc" d="M90.0,240.0 A26,26 0 0 0 72.9,215.6"/>
          <text class="val" x="100.0" y="219.8" text-anchor="middle">70°</text>
          <circle class="pt" cx="137.5" cy="117.9" r="3.2"/>
          <circle class="pt" cx="86.2" cy="178.9" r="3.2"/>
          <circle class="pt" cx="206.5" cy="157.7" r="3.2"/>
          <circle class="pt" cx="64.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="254.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="159.0" cy="240.0" r="3.2"/>
          <text x="137.5" y="107.9" text-anchor="middle">A</text>
          <text x="78.2" y="174.9" text-anchor="end">B</text>
          <text x="214.5" y="153.7">C</text>
          <text x="64.0" y="260.0" text-anchor="middle">D</text>
          <text x="254.0" y="260.0" text-anchor="middle">E</text>
          <text x="159.0" y="260.0" text-anchor="middle">O</text>
          <text x="18.9" y="256.0" text-anchor="end">K</text>
          <text x="375.8" y="256.0">L</text>
        `,
    },
    given: [
      '[AK ve [AL yarım çembere sırasıyla B ve C noktalarında teğet',
      'm(BDE) = 70°',
      'm(CE) = 60°',
    ],
    stem: [],
    ask: 'Buna göre, m(KAL) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' },
      { key: 'E', text: '110' },
    ],
    answer: 'D',
    hint: 'm(BDE) çevre açıdır; önce BE yayını, sonra BC yayını bul.',
    solution: [
      { title: 'BE yayı', detail: 'm(BDE) = 70° çevre açı olduğundan BE yayı 2·70 = 140°’dir.' },
      { title: 'BC yayı', detail: 'm(CE) = 60° olduğundan BC yayı = 140 − 60 = 80°.' },
      {
        title: 'Merkez açı',
        detail:
          '[OB] ve [OC] teğetlere dik; m(BOC) = 80° olduğundan ABOC dörtgeninde m(BAC) = 360 − 90 − 90 − 80.',
      },
      { title: 'Sonuç', detail: 'α = 180 − 80 = 100° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 50
  {
    id: 'circles-50',
    topic: 'Kirişler dörtgeninde karşı açılar',
    figure: {
      viewBox: '0 25 400 282',
      caption: 'Şekil 50',
      label:
        'Çember üzerindeki A, B, C, D noktalarıyla ABCD kirişler dörtgeni; [AC] ve [BD] köşegenleri çizilmiş, m(BAC) = 48°, m(DBC) = 34°.',
      svg: `
          <circle class="ln" cx="200.0" cy="165.0" r="118.0"/>
          <path class="ln" d="M141.0,62.8 L104.5,234.4 L279.0,252.7 L310.9,124.6 L141.0,62.8"/>
          <path class="ln" d="M141.0,62.8 L279.0,252.7"/>
          <path class="ln" d="M104.5,234.4 L310.9,124.6"/>
          <path class="arc" d="M133.9,96.1 A34,34 0 0 0 161.0,90.3"/>
          <text class="val" x="151.8" y="118.7" text-anchor="middle">48°</text>
          <path class="arc" d="M139.9,215.6 A40,40 0 0 1 144.3,238.5"/>
          <text class="val" x="161.5" y="228.3" text-anchor="middle">34°</text>
          <circle class="pt" cx="141.0" cy="62.8" r="3.2"/>
          <circle class="pt" cx="104.5" cy="234.4" r="3.2"/>
          <circle class="pt" cx="279.0" cy="252.7" r="3.2"/>
          <circle class="pt" cx="310.9" cy="124.6" r="3.2"/>
          <text x="135.0" y="56.8" text-anchor="end">A</text>
          <text x="96.5" y="246.4" text-anchor="end">B</text>
          <text x="285.0" y="268.7">C</text>
          <text x="319.9" y="128.6">D</text>
        `,
    },
    given: ['m(DBC) = 34°', 'm(BAC) = 48°'],
    stem: [],
    ask: 'ABCD kirişler dörtgenindeki verilere göre, m(BCD) kaç derecedir?',
    choices: [
      { key: 'A', text: '90' },
      { key: 'B', text: '98' },
      { key: 'C', text: '104' },
      { key: 'D', text: '110' },
      { key: 'E', text: '116' },
    ],
    answer: 'B',
    hint: 'Aynı yayı gören çevre açılar eşittir: m(DBC) = m(DAC).',
    solution: [
      { title: 'Aynı yay', detail: 'm(DAC) ile m(DBC) ikisi de DC yayını görür: m(DAC) = 34°.' },
      { title: 'A açısı', detail: 'm(BAD) = m(BAC) + m(CAD) = 48 + 34 = 82°.' },
      {
        title: 'Karşı açılar',
        detail: 'Kirişler dörtgeninde karşı açıların toplamı 180°’dir: m(BCD) = 180 − 82.',
      },
      { title: 'Sonuç', detail: 'm(BCD) = 98° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 51
  {
    id: 'circles-51',
    topic: 'Teğet-kiriş açısı ve ikizkenar üçgen',
    figure: {
      viewBox: '0 30 400 262',
      caption: 'Şekil 51',
      label:
        'Çembere A noktasında teğet olan doğru üzerinde B noktası; B, D ve C doğrusal, D ile C çember üzerinde. [AD] ve [AC] çizilmiş, |AB| = |AC|, m(BAD) = α.',
      svg: `
          <circle class="ln" cx="262.0" cy="150.0" r="108.0"/>
          <path class="ln" d="M38.0,237.4 L208.5,48.0"/>
          <path class="ln" d="M38.0,237.4 L325.5,237.4 L181.7,77.7"/>
          <path class="ln" d="M181.7,77.7 L198.5,237.4"/>
          <path class="tick" d="M104.1,155.0 L113.0,163.1"/>
          <path class="tick" d="M106.7,152.1 L115.7,160.1"/>
          <path class="tick" d="M256.7,152.1 L247.8,160.1"/>
          <path class="tick" d="M259.4,155.0 L250.5,163.1"/>
          <path class="arc" d="M161.7,100.0 A30,30 0 0 0 184.9,107.6"/>
          <text class="val" x="168.1" y="124.6" text-anchor="middle">α</text>
          <circle class="pt" cx="181.7" cy="77.7" r="3.2"/>
          <circle class="pt" cx="38.0" cy="237.4" r="3.2"/>
          <circle class="pt" cx="325.5" cy="237.4" r="3.2"/>
          <circle class="pt" cx="198.5" cy="237.4" r="3.2"/>
          <text x="169.7" y="69.7" text-anchor="end">A</text>
          <text x="32.0" y="257.4" text-anchor="end">B</text>
          <text x="194.5" y="259.4" text-anchor="middle">D</text>
          <text x="333.5" y="255.4">C</text>
        `,
    },
    given: ['A teğet noktası', '|AB| = |AC|', 'm(DC) = 72°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '44' },
      { key: 'C', text: '48' },
      { key: 'D', text: '52' },
      { key: 'E', text: '56' },
    ],
    answer: 'C',
    hint: 'Teğet-kiriş açısı α ile m(ACD) aynı AD yayını görür.',
    solution: [
      {
        title: 'Aynı yay',
        detail: 'α, AD yayını gören teğet-kiriş açısıdır; m(ACD) da AD yayını görür: m(ACB) = α.',
      },
      { title: 'İkizkenar ABC', detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = α.' },
      { title: 'DAC açısı', detail: 'm(DAC), DC yayını gören çevre açı: 72 : 2 = 36°.' },
      { title: 'Üçgenin açıları', detail: 'α + α + (α + 36) = 180 → 3α = 144.' },
      { title: 'Sonuç', detail: 'α = 48° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 52
  {
    id: 'circles-52',
    topic: 'Dış noktada kesişen kesenler',
    figure: {
      viewBox: '0 10 400 385',
      caption: 'Şekil 52',
      label:
        'B, E, D, F noktaları çember üzerinde. A noktasında B, E, A ve F, D, A; C noktasında B, F, C ve E, D, C doğrusal. m(BAF) = 28°, m(BCE) = 36°, m(EBF) = α.',
      svg: `
          <circle class="ln" cx="150.0" cy="165.0" r="105.0"/>
          <path class="ln" d="M45.0,165.0 L377.7,37.3 L178.9,265.9"/>
          <path class="ln" d="M45.0,165.0 L310.7,365.2 L228.0,94.7"/>
          <path class="arc" d="M349.7,48.0 A30,30 0 0 0 358.0,59.9"/>
          <text class="val" x="336.7" y="71.0" text-anchor="middle">28°</text>
          <path class="arc" d="M283.6,344.8 A34,34 0 0 1 300.8,332.7"/>
          <text class="val" x="279.8" y="326.0" text-anchor="middle">36°</text>
          <path class="arc" d="M71.1,155.0 A28,28 0 0 1 67.4,181.9"/>
          <text class="val" x="86.6" y="175.8" text-anchor="middle">α</text>
          <circle class="pt" cx="377.7" cy="37.3" r="3.2"/>
          <circle class="pt" cx="45.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="310.7" cy="365.2" r="3.2"/>
          <circle class="pt" cx="254.0" cy="179.6" r="3.2"/>
          <circle class="pt" cx="228.0" cy="94.7" r="3.2"/>
          <circle class="pt" cx="178.9" cy="265.9" r="3.2"/>
          <text x="385.7" y="35.3">A</text>
          <text x="37.0" y="170.0" text-anchor="end">B</text>
          <text x="318.7" y="377.2">C</text>
          <text x="266.0" y="183.6">D</text>
          <text x="226.0" y="82.7" text-anchor="middle">E</text>
          <text x="172.9" y="283.9" text-anchor="end">F</text>
        `,
    },
    given: ['B, E, D, F çemberin üzerinde', 'm(BAF) = 28°', 'm(BCE) = 36°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EBF) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '52' },
      { key: 'C', text: '54' },
      { key: 'D', text: '56' },
      { key: 'E', text: '58' },
    ],
    answer: 'E',
    hint: 'Dışta kesişen iki kesenin açısı, gördüğü iki yayın farkının yarısıdır; iki denklemi topla.',
    solution: [
      { title: 'A noktası', detail: 'm(BAF) = (BF yayı − ED yayı) : 2 → BF − ED = 56°.' },
      { title: 'C noktası', detail: 'm(BCE) = (BE yayı − DF yayı) : 2 → BE − DF = 72°.' },
      {
        title: 'Topla',
        detail:
          '(BF + BE) − (ED + DF) = 128; dört yayın toplamı 360 olduğundan 360 − 2(ED + DF) = 128.',
      },
      { title: 'EF yayı', detail: 'ED + DF = 116°; α bu EDF yayını görür.' },
      { title: 'Sonuç', detail: 'α = 116 : 2 = 58° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 53
  {
    id: 'circles-53',
    topic: 'Dıştan teğet çemberler ve ortak teğet',
    figure: {
      viewBox: '0 22 400 256',
      caption: 'Şekil 53',
      label:
        'İki çember D noktasında dıştan teğet; ortak teğet büyük çembere A, O merkezli küçük çembere B noktasında değiyor. C büyük çember üzerinde, [AC], [CD], [OD] ve [OB] çizilmiş, m(ACD) = 35°, m(DOB) = α.',
      svg: `
          <circle class="ln" cx="180.0" cy="150.0" r="100.0"/>
          <circle class="ln" cx="320.0" cy="99.0" r="49.0"/>
          <path class="ln" d="M130.0,50.0 L370.0,50.0"/>
          <path class="ln" d="M180.0,50.0 L154.1,246.6 L274.0,115.8"/>
          <path class="ln" d="M274.0,115.8 L320.0,99.0 L320.0,50.0"/>
          <path class="arc" d="M158.3,214.9 A32,32 0 0 1 175.7,223.0"/>
          <text class="val" x="174.4" y="208.1" text-anchor="middle">35°</text>
          <path class="arc" d="M303.1,105.2 A18,18 0 0 1 320.0,81.0"/>
          <text class="val" x="293.8" y="85.7" text-anchor="middle">α</text>
          <circle class="pt" cx="180.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="154.1" cy="246.6" r="3.2"/>
          <circle class="pt" cx="274.0" cy="115.8" r="3.2"/>
          <circle class="pt" cx="320.0" cy="99.0" r="3.2"/>
          <text x="180.0" y="40.0" text-anchor="middle">A</text>
          <text x="320.0" y="40.0" text-anchor="middle">B</text>
          <text x="154.1" y="268.6" text-anchor="middle">C</text>
          <text x="274.0" y="141.8" text-anchor="middle">D</text>
          <text x="326.0" y="117.0">O</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 22 400 256',
      caption: 'Şekil 53',
      label:
        'Aynı şekilde D noktasındaki ortak iç teğet kesikli çizilmiş; AB doğrusunu M noktasında kesiyor.',
      svg: `
          <circle class="ln" cx="180.0" cy="150.0" r="100.0"/>
          <circle class="ln" cx="320.0" cy="99.0" r="49.0"/>
          <path class="ln" d="M130.0,50.0 L370.0,50.0"/>
          <path class="ln" d="M180.0,50.0 L154.1,246.6 L274.0,115.8"/>
          <path class="ln" d="M274.0,115.8 L320.0,99.0 L320.0,50.0"/>
          <path class="aux" d="M250.0,50.0 L274.0,115.8"/>
          <circle class="pt" cx="250.0" cy="50.0" r="3.2"/>
          <path class="arc" d="M158.3,214.9 A32,32 0 0 1 175.7,223.0"/>
          <text class="val" x="174.4" y="208.1" text-anchor="middle">35°</text>
          <path class="arc" d="M303.1,105.2 A18,18 0 0 1 320.0,81.0"/>
          <text class="val" x="293.8" y="85.7" text-anchor="middle">α</text>
          <circle class="pt" cx="180.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="154.1" cy="246.6" r="3.2"/>
          <circle class="pt" cx="274.0" cy="115.8" r="3.2"/>
          <circle class="pt" cx="320.0" cy="99.0" r="3.2"/>
          <text x="180.0" y="40.0" text-anchor="middle">A</text>
          <text x="320.0" y="40.0" text-anchor="middle">B</text>
          <text x="154.1" y="268.6" text-anchor="middle">C</text>
          <text x="274.0" y="141.8" text-anchor="middle">D</text>
          <text x="326.0" y="117.0">O</text>
          <text x="250.0" y="40.0" text-anchor="middle">M</text>
        `,
    },
    given: ['A, B ve D teğet noktaları', 'O, küçük çemberin merkezi', 'm(ACD) = 35°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DOB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '110' },
      { key: 'B', text: '120' },
      { key: 'C', text: '130' },
      { key: 'D', text: '140' },
      { key: 'E', text: '150' },
    ],
    answer: 'A',
    hint: 'D noktasından iki çembere ortak teğeti çiz; AB’yi kestiği M noktasından çizilen teğet parçaları eşittir.',
    solution: [
      {
        title: 'Ortak iç teğet',
        detail: 'D’deki ortak teğet AB’yi M’de kessin: |MA| = |MD| = |MB|.',
      },
      {
        title: 'Teğet-kiriş açısı',
        detail: 'm(ACD) = 35° olduğundan AD yayı 70°, m(MAD) = m(MDA) = 35°.',
      },
      { title: 'M açıları', detail: 'm(AMD) = 180 − 70 = 110°, m(DMB) = 180 − 110 = 70°.' },
      {
        title: 'Sonuç',
        detail:
          'MDOB dörtgeninde D ve B açıları 90° olduğundan α = 360 − 90 − 90 − 70 = 110° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 54
  {
    id: 'circles-54',
    topic: 'Yarım çemberde çevre açılar',
    figure: {
      viewBox: '0 60 400 196',
      caption: 'Şekil 54',
      label:
        'O merkezli yarım çemberde [AE] çap; B, C, D yay üzerinde ve [AB], [BC], [CD], [DE] kirişleri çizilmiş, m(CDE) = 125°, m(CBA) = α.',
      svg: `
          <path class="ln" d="M50.0,230.0 A150,150 0 0 1 350.0,230.0 Z"/>
          <path class="ln" d="M50.0,230.0 L70.1,155.0 L148.7,89.0 L314.9,133.6 L350.0,230.0"/>
          <path class="arc" d="M86.9,140.9 A22,22 0 0 1 64.4,176.3"/>
          <text class="val" x="103.8" y="181.5" text-anchor="middle">α</text>
          <path class="arc" d="M291.7,127.4 A24,24 0 0 0 323.1,156.1"/>
          <text class="val" x="285.2" y="171.0" text-anchor="middle">125°</text>
          <circle class="pt" cx="50.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="70.1" cy="155.0" r="3.2"/>
          <circle class="pt" cx="148.7" cy="89.0" r="3.2"/>
          <circle class="pt" cx="314.9" cy="133.6" r="3.2"/>
          <circle class="pt" cx="350.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="230.0" r="3.2"/>
          <text x="44.0" y="236.0" text-anchor="end">A</text>
          <text x="356.0" y="236.0">E</text>
          <text x="200.0" y="250.0" text-anchor="middle">O</text>
          <text x="62.1" y="153.0" text-anchor="end">B</text>
          <text x="148.7" y="79.0" text-anchor="middle">C</text>
          <text x="322.9" y="129.6">D</text>
        `,
    },
    given: ['O merkezli yarım çember', 'm(CDE) = 125°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CBA) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '125' },
      { key: 'B', text: '135' },
      { key: 'C', text: '140' },
      { key: 'D', text: '145' },
      { key: 'E', text: '155' },
    ],
    answer: 'D',
    hint: 'Yarım çemberi tam çembere tamamla; m(CDE)’nin gördüğü yay alt yarıyı da içerir.',
    solution: [
      {
        title: 'CDE açısı',
        detail: 'm(CDE) = 125°, D’yi içermeyen CE yayını görür: bu yay 250°’dir.',
      },
      { title: 'CE yayı', detail: 'D üzerinden geçen CE yayı = 360 − 250 = 110°.' },
      { title: 'AC yayı', detail: 'Üst yarım çember 180° olduğundan AC yayı = 180 − 110 = 70°.' },
      {
        title: 'Sonuç',
        detail: 'α, B’yi içermeyen CA yayını görür: (360 − 70) : 2 = 145° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 55
  {
    id: 'circles-55',
    topic: 'Teğet-kiriş açısı ve paralel kirişler',
    figure: {
      viewBox: '0 18 400 272',
      caption: 'Şekil 55',
      label:
        'A, B, C, D çember üzerinde; KL doğrusu çembere B noktasında teğet, [AB] // [DC], m(ABL) = 70°, m(CAB) = 36° ve m(DAC) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="110.0"/>
          <path class="ln" d="M96.6,187.6 L303.4,187.6 L267.7,63.3 L132.3,63.3 Z"/>
          <path class="ln" d="M96.6,187.6 L267.7,63.3"/>
          <path class="ln" d="M335.9,98.4 L276.0,262.8"/>
          <path class="arc" d="M294.5,212.1 A26,26 0 0 1 277.4,187.6"/>
          <text class="val" x="264.0" y="220.2" text-anchor="middle">70°</text>
          <path class="arc" d="M129.0,164.1 A40,40 0 0 1 136.6,187.6"/>
          <text class="val" x="151.8" y="174.7" text-anchor="middle">36°</text>
          <path class="arc" d="M104.9,158.8 A30,30 0 0 1 120.9,170.0"/>
          <text class="val" x="125.3" y="151.7" text-anchor="middle">α</text>
          <circle class="pt" cx="96.6" cy="187.6" r="3.2"/>
          <circle class="pt" cx="303.4" cy="187.6" r="3.2"/>
          <circle class="pt" cx="267.7" cy="63.3" r="3.2"/>
          <circle class="pt" cx="132.3" cy="63.3" r="3.2"/>
          <text x="83.5" y="197.4" text-anchor="end">A</text>
          <text x="123.7" y="57.3" text-anchor="end">D</text>
          <text x="276.3" y="57.3">C</text>
          <text x="313.4" y="201.6">B</text>
          <text x="341.9" y="102.4">K</text>
          <text x="270.0" y="274.8" text-anchor="end">L</text>
        `,
    },
    given: [
      'A, B, C, D çember üzerinde',
      'KL, B noktasında çembere teğet',
      '[AB] // [DC]',
      'm(ABL) = 70°',
      'm(CAB) = 36°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '26' },
      { key: 'B', text: '30' },
      { key: 'C', text: '34' },
      { key: 'D', text: '38' },
      { key: 'E', text: '42' },
    ],
    answer: 'D',
    hint: 'Teğet-kiriş açısı gördüğü yayın yarısıdır; önce AB yayını bul.',
    solution: [
      {
        title: 'AB yayı',
        detail: 'm(ABL) = 70° teğet-kiriş açısı olduğundan AB yayı 2 · 70 = 140°’dir.',
      },
      { title: 'BC yayı', detail: 'm(CAB) = 36° çevre açı olduğundan BC yayı 72°’dir.' },
      {
        title: 'AD yayı',
        detail:
          '[AB] // [DC] olduğundan paralel kirişler arasındaki yaylar eşittir: AD yayı = BC yayı = 72°.',
      },
      { title: 'DC yayı', detail: 'DC yayı = 360 − 140 − 72 − 72 = 76°.' },
      { title: 'Sonuç', detail: 'α çevre açısı DC yayını görür: α = 76 : 2 = 38° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 56
  {
    id: 'circles-56',
    topic: 'Merkez açı ve ikizkenar üçgen',
    figure: {
      viewBox: '0 12 400 276',
      caption: 'Şekil 56',
      label:
        'O merkezli çembere ABC üçgeni içten çizilmiş, [AO] çizilmiş; m(BAO) = x ve m(ACB) = 2x + 15°.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="115.0"/>
          <path class="ln" d="M200.0,35.0 L111.9,223.9 L308.1,189.3 Z"/>
          <path class="ln" d="M200.0,35.0 L200.0,150.0"/>
          <path class="arc" d="M200.0,65.0 A30,30 0 0 1 187.3,62.2"/>
          <text class="val" x="190.0" y="84.9" text-anchor="middle">x</text>
          <path class="arc" d="M282.5,193.8 A26,26 0 0 1 293.2,168.0"/>
          <text class="val" x="247.1" y="169.1" text-anchor="middle">2x + 15°</text>
          <circle class="pt" cx="200.0" cy="35.0" r="3.2"/>
          <circle class="pt" cx="111.9" cy="223.9" r="3.2"/>
          <circle class="pt" cx="308.1" cy="189.3" r="3.2"/>
          <circle class="pt" cx="200.0" cy="150.0" r="3.2"/>
          <text x="200.0" y="26.0" text-anchor="middle">A</text>
          <text x="101.2" y="237.9" text-anchor="end">B</text>
          <text x="321.2" y="199.1">C</text>
          <text x="192.0" y="156.0" text-anchor="end">O</text>
        `,
    },
    given: ['O, çemberin merkezi', 'm(BAO) = x', 'm(ACB) = 2x + 15°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '25' },
      { key: 'B', text: '30' },
      { key: 'C', text: '35' },
      { key: 'D', text: '40' },
      { key: 'E', text: '45' },
    ],
    answer: 'A',
    hint: '[OB]’yi çiz; AOB merkez açısı ile ACB çevre açısını karşılaştır.',
    solution: [
      {
        title: 'Merkez açı',
        detail: 'm(AOB), ACB çevre açısıyla aynı yayı görür: m(AOB) = 2(2x + 15) = 4x + 30.',
      },
      { title: 'İkizkenar üçgen', detail: '|OA| = |OB| olduğundan m(OBA) = m(OAB) = x.' },
      { title: 'AOB üçgeni', detail: 'x + x + 4x + 30 = 180, yani 6x = 150.' },
      { title: 'Sonuç', detail: 'x = 25° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 57
  {
    id: 'circles-57',
    topic: 'Dış noktadan çizilen teğetler',
    figure: {
      viewBox: '0 0 400 230',
      caption: 'Şekil 57',
      label:
        '[AB] ve [AD], O merkezli çembere C ve D noktalarında teğet; B, AC doğrusu üzerinde, |AD| = |BC| eşitliği çentiklerle gösterilmiş, m(BAD) = 64° ve m(ABO) = α.',
      svg: `
          <circle class="ln" cx="230.0" cy="140.0" r="70.0"/>
          <path class="ln" d="M98.9,123.9 L301.9,29.2 L300.0,141.2"/>
          <path class="ln" d="M98.9,123.9 L230.0,140.0"/>
          <path class="tick" d="M307.0,85.3 L295.0,85.1"/>
          <path class="tick" d="M147.1,94.8 L152.2,105.7"/>
          <path class="arc" d="M301.4,59.2 A30,30 0 0 1 274.8,41.9"/>
          <text class="val" x="274.7" y="76.1" text-anchor="middle">64°</text>
          <path class="arc" d="M135.1,107.0 A40,40 0 0 1 138.6,128.8"/>
          <text class="val" x="154.2" y="120.1" text-anchor="middle">α</text>
          <circle class="pt" cx="301.9" cy="29.2" r="3.2"/>
          <circle class="pt" cx="98.9" cy="123.9" r="3.2"/>
          <circle class="pt" cx="200.4" cy="76.6" r="3.2"/>
          <circle class="pt" cx="300.0" cy="141.2" r="3.2"/>
          <circle class="pt" cx="230.0" cy="140.0" r="3.2"/>
          <text x="301.9" y="19.2" text-anchor="middle">A</text>
          <text x="90.9" y="129.9" text-anchor="end">B</text>
          <text x="194.4" y="68.6" text-anchor="end">C</text>
          <text x="310.0" y="147.2">D</text>
          <text x="230.0" y="162.0" text-anchor="middle">O</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 230',
      caption: 'Şekil 57',
      label: 'Aynı şekilde [OC], [OD] ve [OA] kesikli çizilmiş; [OC] ve [OD] teğetlere dik.',
      svg: `
          <circle class="ln" cx="230.0" cy="140.0" r="70.0"/>
          <path class="ln" d="M98.9,123.9 L301.9,29.2 L300.0,141.2"/>
          <path class="ln" d="M98.9,123.9 L230.0,140.0"/>
          <path class="aux" d="M230.0,140.0 L200.4,76.6"/>
          <path class="aux" d="M230.0,140.0 L301.9,29.2"/>
          <path class="aux" d="M230.0,140.0 L300.0,141.2"/>
          <path class="tick" d="M307.0,85.3 L295.0,85.1"/>
          <path class="tick" d="M147.1,94.8 L152.2,105.7"/>
          <path class="arc" d="M301.4,59.2 A30,30 0 0 1 274.8,41.9"/>
          <text class="val" x="274.7" y="76.1" text-anchor="middle">64°</text>
          <path class="arc" d="M135.1,107.0 A40,40 0 0 1 138.6,128.8"/>
          <text class="val" x="154.2" y="120.1" text-anchor="middle">α</text>
          <circle class="pt" cx="301.9" cy="29.2" r="3.2"/>
          <circle class="pt" cx="98.9" cy="123.9" r="3.2"/>
          <circle class="pt" cx="200.4" cy="76.6" r="3.2"/>
          <circle class="pt" cx="300.0" cy="141.2" r="3.2"/>
          <circle class="pt" cx="230.0" cy="140.0" r="3.2"/>
          <text x="301.9" y="19.2" text-anchor="middle">A</text>
          <text x="90.9" y="129.9" text-anchor="end">B</text>
          <text x="194.4" y="68.6" text-anchor="end">C</text>
          <text x="310.0" y="147.2">D</text>
          <text x="230.0" y="162.0" text-anchor="middle">O</text>
        `,
    },
    given: [
      '[AB] ve [AD], O merkezli çembere C ve D noktalarında teğet',
      '|AD| = |BC|',
      'm(BAD) = 64°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABO) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '26' },
      { key: 'C', text: '28' },
      { key: 'D', text: '30' },
      { key: 'E', text: '32' },
    ],
    answer: 'E',
    hint: 'Dış noktadan çizilen teğet parçaları eşittir; C noktasının [AB] üzerindeki yerine bak.',
    solution: [
      { title: 'Teğet parçaları', detail: 'A’dan çizilen teğetler eşit olduğundan |AC| = |AD|.' },
      {
        title: 'C orta nokta',
        detail: '|AD| = |BC| verildiğinden |AC| = |BC|; C, [AB]’nin orta noktasıdır.',
      },
      {
        title: 'OAB üçgeni',
        detail:
          '[OC] ⊥ [AB] ve C orta nokta olduğundan [OC] orta dikmedir; |OA| = |OB|, üçgen ikizkenardır.',
      },
      { title: 'A açısı', detail: '[AO], BAD açısının açıortayıdır: m(OAB) = 64 : 2 = 32°.' },
      { title: 'Sonuç', detail: 'İkizkenar üçgende taban açıları eşit: α = m(OAB) = 32° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 58
  {
    id: 'circles-58',
    topic: 'İçte kesişen kirişler',
    figure: {
      viewBox: '0 12 400 276',
      caption: 'Şekil 58',
      label:
        'A, B, C, D, E çember üzerinde; [AD] ve [CE] kirişleri K noktasında kesişiyor, [BA] ve [BC] çizilmiş, m(ABC) = 124° ve m(AKC) = 70°.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="115.0"/>
          <path class="ln" d="M142.5,50.4 L86.7,170.0 L129.2,240.6"/>
          <path class="ln" d="M142.5,50.4 L313.9,166.0"/>
          <path class="ln" d="M129.2,240.6 L308.1,110.7"/>
          <path class="arc" d="M97.7,146.4 A26,26 0 0 1 100.1,192.3"/>
          <text class="val" x="136.7" y="172.4" text-anchor="middle">124°</text>
          <path class="arc" d="M252.0,151.4 A24,24 0 0 1 251.5,123.9"/>
          <text class="val" x="225.4" y="143.1" text-anchor="middle">70°</text>
          <circle class="pt" cx="142.5" cy="50.4" r="3.2"/>
          <circle class="pt" cx="86.7" cy="170.0" r="3.2"/>
          <circle class="pt" cx="129.2" cy="240.6" r="3.2"/>
          <circle class="pt" cx="313.9" cy="166.0" r="3.2"/>
          <circle class="pt" cx="308.1" cy="110.7" r="3.2"/>
          <circle class="pt" cx="271.4" cy="137.3" r="3.2"/>
          <text x="135.5" y="43.3" text-anchor="end">A</text>
          <text x="73.0" y="177.4" text-anchor="end">B</text>
          <text x="120.6" y="256.7" text-anchor="end">C</text>
          <text x="327.7" y="173.0">D</text>
          <text x="321.2" y="110.9">E</text>
          <text x="275.4" y="127.3">K</text>
        `,
    },
    given: ['A, B, C, D, E çember üzerinde', '[AD] ∩ [CE] = {K}', 'm(ABC) = 124°', 'm(AKC) = 70°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ED yayının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '24' },
      { key: 'C', text: '28' },
      { key: 'D', text: '32' },
      { key: 'E', text: '36' },
    ],
    answer: 'C',
    hint: 'ABC çevre açısından B’yi içeren AC yayını bul, sonra kesişen kirişler kuralını kullan.',
    solution: [
      {
        title: 'Büyük AC yayı',
        detail: 'm(ABC) = 124° çevre açı olduğundan B’yi içermeyen AC yayı 248°’dir.',
      },
      { title: 'Küçük AC yayı', detail: 'B’yi içeren AC yayı = 360 − 248 = 112°.' },
      {
        title: 'Kesişen kirişler',
        detail: 'm(AKC) = (AC yayı + ED yayı) : 2, yani 70 = (112 + ED) : 2.',
      },
      { title: 'Sonuç', detail: '112 + ED = 140, ED yayı = 28° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 59
  {
    id: 'circles-59',
    topic: 'Teğet-kiriş açısı ve merkez açı',
    figure: {
      viewBox: '0 52 400 280',
      caption: 'Şekil 59',
      label:
        'O merkezli çemberde A, B, C çember üzerinde; DE doğrusu çembere C noktasında teğet, [OB] ve [OC] çizilmiş, m(ABO) = x, m(BAC) = 3x, m(BOC) = 156° ve m(ACD) soruluyor.',
      svg: `
          <circle class="ln" cx="185.0" cy="190.0" r="120.0"/>
          <path class="ln" d="M302.4,165.1 L67.6,165.1 L252.1,90.5 L302.4,165.1"/>
          <path class="ln" d="M67.6,165.1 L185.0,190.0 L302.4,165.1"/>
          <path class="ln" d="M285.7,86.8 L319.0,243.3"/>
          <path class="arc" d="M95.4,153.8 A30,30 0 0 1 97.0,171.3"/>
          <text class="val" x="117.4" y="165.7" text-anchor="middle">x</text>
          <path class="arc" d="M265.5,110.4 A24,24 0 0 1 229.9,99.5"/>
          <text class="val" x="239.2" y="137.6" text-anchor="middle">3x</text>
          <path class="arc" d="M165.4,185.8 A20,20 0 0 1 204.6,185.8"/>
          <text class="val" x="185.0" y="155.0" text-anchor="middle">156°</text>
          <path class="arc" d="M285.6,140.2 A30,30 0 0 1 296.1,135.7"/>
          <text class="val" x="281.3" y="120.3" text-anchor="middle">?</text>
          <circle class="pt" cx="252.1" cy="90.5" r="3.2"/>
          <circle class="pt" cx="67.6" cy="165.1" r="3.2"/>
          <circle class="pt" cx="302.4" cy="165.1" r="3.2"/>
          <circle class="pt" cx="185.0" cy="190.0" r="3.2"/>
          <text x="259.9" y="83.9">A</text>
          <text x="59.6" y="167.1" text-anchor="end">B</text>
          <text x="312.4" y="179.1">C</text>
          <text x="185.0" y="212.0" text-anchor="middle">O</text>
          <text x="293.7" y="90.8">D</text>
          <text x="327.0" y="251.3">E</text>
        `,
    },
    given: [
      'DE, C noktasında O merkezli çembere teğet',
      'm(ABO) = x',
      'm(BAC) = 3x',
      'm(BOC) = 156°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACD) kaç derecedir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '16' },
      { key: 'C', text: '18' },
      { key: 'D', text: '22' },
      { key: 'E', text: '26' },
    ],
    answer: 'D',
    hint: 'O, [BC]’nin A ile ters tarafında; BAC açısının gördüğü yay 360 − 156 = 204°’dir.',
    solution: [
      {
        title: 'BAC açısı',
        detail:
          'A, 156°’lik BC yayı üzerinde; BAC açısı öbür yayı görür: 3x = (360 − 156) : 2 = 102°, x = 34°.',
      },
      { title: 'OBC açısı', detail: '|OB| = |OC| olduğundan m(OBC) = (180 − 156) : 2 = 12°.' },
      { title: 'ABC açısı', detail: '[BC], BA ile BO arasında kalır: m(ABC) = 34 − 12 = 22°.' },
      {
        title: 'Sonuç',
        detail:
          'Teğet-kiriş açısı ACD, AC yayını görür ve bu yayı gören ABC çevre açısına eşittir: m(ACD) = 22° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 60
  {
    id: 'circles-60',
    topic: 'Yarım çemberde eşit yaylar',
    figure: {
      viewBox: '0 72 400 196',
      caption: 'Şekil 60',
      label:
        'O merkezli yarım çemberde [AB] çap; D ve C yay üzerinde, BC ve CD yayları eşit ve çentiklerle gösterilmiş, [AC] ile [DB] E noktasında kesişiyor, m(AEB) = 110°.',
      svg: `
          <path class="ln" d="M50.0,240.0 A150,150 0 0 1 350.0,240.0 Z"/>
          <path class="ln" d="M50.0,240.0 L314.9,143.6 L350.0,240.0"/>
          <path class="ln" d="M226.0,92.3 L350.0,240.0"/>
          <path class="tick" d="M272.0,115.3 L278.0,104.9"/>
          <path class="tick" d="M335.3,190.7 L346.6,186.6"/>
          <path class="arc" d="M294.0,173.2 A22,22 0 0 1 259.1,163.9"/>
          <text class="val" x="268.4" y="203.9" text-anchor="middle">110°</text>
          <circle class="pt" cx="50.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="314.9" cy="143.6" r="3.2"/>
          <circle class="pt" cx="226.0" cy="92.3" r="3.2"/>
          <circle class="pt" cx="279.8" cy="156.4" r="3.2"/>
          <circle class="pt" cx="200.0" cy="240.0" r="3.2"/>
          <text x="44.0" y="246.0" text-anchor="end">A</text>
          <text x="356.0" y="246.0">B</text>
          <text x="200.0" y="260.0" text-anchor="middle">O</text>
          <text x="325.6" y="139.6">C</text>
          <text x="228.5" y="83.5">D</text>
          <text x="275.8" y="146.4" text-anchor="middle">E</text>
        `,
    },
    given: ['O, yarım çemberin merkezi', 'm(BC) = m(CD)', 'm(AEB) = 110°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABD) kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'B',
    hint: 'BC = CD = t yayı de; AEB açısı AB ile DC yaylarının toplamının yarısıdır.',
    solution: [
      {
        title: 'Yaylar',
        detail: 'BC = CD = t olsun; alt yarım çember de AB yayı olarak 180°’dir.',
      },
      { title: 'Kesişen kirişler', detail: 'm(AEB) = (180 + t) : 2 = 110, yani t = 40°.' },
      { title: 'AD yayı', detail: 'AD yayı = 180 − 40 − 40 = 100°.' },
      {
        title: 'Sonuç',
        detail: 'ABD çevre açısı AD yayını görür: m(ABD) = 100 : 2 = 50° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 61
  {
    id: 'circles-61',
    topic: 'Kesişen çemberlerde kirişler dörtgeni',
    figure: {
      viewBox: '0 42 400 218',
      caption: 'Şekil 61',
      label:
        'K ve L noktalarında kesişen iki çember; A, B, K, L birinci, K, D, C, L ikinci çember üzerinde. A, K, D ve B, L, C doğrusal; ABCD dörtgeni çizilmiş, m(BAD) = 70° ve m(ABC) = 95°.',
      svg: `
          <circle class="ln" cx="155.0" cy="150.0" r="85.0"/>
          <circle class="ln" cx="251.2" cy="158.4" r="77.4"/>
          <path class="ln" d="M147.6,234.7 L94.9,89.9 L287.2,89.9 L322.8,187.7 L147.6,234.7"/>
          <path class="arc" d="M102.4,110.6 A22,22 0 0 0 116.9,89.9"/>
          <text class="val" x="127.7" y="117.8" text-anchor="middle">70°</text>
          <path class="arc" d="M140.1,214.0 A22,22 0 0 1 168.8,229.0"/>
          <text class="val" x="167.0" y="202.4" text-anchor="middle">95°</text>
          <circle class="pt" cx="94.9" cy="89.9" r="3.2"/>
          <circle class="pt" cx="147.6" cy="234.7" r="3.2"/>
          <circle class="pt" cx="322.8" cy="187.7" r="3.2"/>
          <circle class="pt" cx="287.2" cy="89.9" r="3.2"/>
          <circle class="pt" cx="215.1" cy="89.9" r="3.2"/>
          <circle class="pt" cx="203.8" cy="219.6" r="3.2"/>
          <text x="87.9" y="83.9" text-anchor="end">A</text>
          <text x="140.6" y="248.7" text-anchor="end">B</text>
          <text x="329.8" y="199.7">C</text>
          <text x="294.2" y="83.9">D</text>
          <text x="215.1" y="79.9" text-anchor="middle">K</text>
          <text x="205.8" y="239.6" text-anchor="middle">L</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 42 400 218',
      caption: 'Şekil 61',
      label: 'Aynı şekilde ortak kiriş [KL] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="155.0" cy="150.0" r="85.0"/>
          <circle class="ln" cx="251.2" cy="158.4" r="77.4"/>
          <path class="ln" d="M147.6,234.7 L94.9,89.9 L287.2,89.9 L322.8,187.7 L147.6,234.7"/>
          <path class="arc" d="M102.4,110.6 A22,22 0 0 0 116.9,89.9"/>
          <text class="val" x="127.7" y="117.8" text-anchor="middle">70°</text>
          <path class="arc" d="M140.1,214.0 A22,22 0 0 1 168.8,229.0"/>
          <text class="val" x="167.0" y="202.4" text-anchor="middle">95°</text>
          <circle class="pt" cx="94.9" cy="89.9" r="3.2"/>
          <circle class="pt" cx="147.6" cy="234.7" r="3.2"/>
          <circle class="pt" cx="322.8" cy="187.7" r="3.2"/>
          <circle class="pt" cx="287.2" cy="89.9" r="3.2"/>
          <circle class="pt" cx="215.1" cy="89.9" r="3.2"/>
          <circle class="pt" cx="203.8" cy="219.6" r="3.2"/>
          <text x="87.9" y="83.9" text-anchor="end">A</text>
          <text x="140.6" y="248.7" text-anchor="end">B</text>
          <text x="329.8" y="199.7">C</text>
          <text x="294.2" y="83.9">D</text>
          <text x="215.1" y="79.9" text-anchor="middle">K</text>
          <text x="205.8" y="239.6" text-anchor="middle">L</text>
          <path class="aux" d="M215.1,89.9 L203.8,219.6"/>
        `,
    },
    given: [
      'Çemberler K ve L noktalarında kesişiyor',
      'A, B, C, D noktaları çemberler üzerinde',
      'm(BAD) = 70°',
      'm(ABC) = 95°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADC) − m(BCD) farkı kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '25' },
      { key: 'C', text: '30' },
      { key: 'D', text: '35' },
      { key: 'E', text: '40' },
    ],
    answer: 'B',
    hint: 'Ortak kiriş [KL]’yi çiz; iki kirişler dörtgeni oluşur.',
    solution: [
      {
        title: 'Birinci dörtgen',
        detail: 'ABLK kirişler dörtgeni: m(KLB) = 180 − 70 = 110°, m(AKL) = 180 − 95 = 85°.',
      },
      {
        title: 'Komşu bütünler',
        detail:
          'B, L, C doğrusal olduğundan m(KLC) = 180 − 110 = 70°; A, K, D doğrusal olduğundan m(LKD) = 180 − 85 = 95°.',
      },
      {
        title: 'İkinci dörtgen',
        detail: 'KLCD kirişler dörtgeni: m(ADC) = 180 − 70 = 110°, m(BCD) = 180 − 95 = 85°.',
      },
      { title: 'Sonuç', detail: 'm(ADC) − m(BCD) = 110 − 85 = 25° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 62
  {
    id: 'circles-62',
    topic: 'Yarım çemberde eşkenar üçgen',
    figure: {
      viewBox: '0 62 400 210',
      caption: 'Şekil 62',
      label:
        'O merkezli yarım çemberde [DE] çap; A ve F yay üzerinde, C [DO] üzerinde, B [OF] üzerinde. ABC eşkenar üçgen, [AD] çizilmiş, |OC| = |OB| çentiklerle gösterilmiş, m(DAC) = α.',
      svg: `
          <path class="ln" d="M50.0,240.0 A150,150 0 0 1 350.0,240.0 Z"/>
          <path class="ln" d="M85.1,143.6 L186.1,161.4 L120.2,240.0 L85.1,143.6"/>
          <path class="ln" d="M50.0,240.0 L85.1,143.6"/>
          <path class="ln" d="M200.0,240.0 L174.0,92.3"/>
          <path class="tick" d="M157.7,246.0 L157.7,234.0"/>
          <path class="tick" d="M162.5,246.0 L162.5,234.0"/>
          <path class="tick" d="M199.4,202.0 L187.6,204.1"/>
          <path class="tick" d="M198.6,197.3 L186.7,199.4"/>
          <path class="arc" d="M76.2,168.0 A26,26 0 0 0 94.0,168.0"/>
          <text class="val" x="85.1" y="186.6" text-anchor="middle">α</text>
          <circle class="pt" cx="85.1" cy="143.6" r="3.2"/>
          <circle class="pt" cx="186.1" cy="161.4" r="3.2"/>
          <circle class="pt" cx="120.2" cy="240.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="174.0" cy="92.3" r="3.2"/>
          <circle class="pt" cx="200.0" cy="240.0" r="3.2"/>
          <text x="79.1" y="135.6" text-anchor="end">A</text>
          <text x="194.1" y="165.4">B</text>
          <text x="120.2" y="260.0" text-anchor="middle">C</text>
          <text x="44.0" y="246.0" text-anchor="end">D</text>
          <text x="356.0" y="246.0">E</text>
          <text x="170.0" y="82.3" text-anchor="middle">F</text>
          <text x="200.0" y="260.0" text-anchor="middle">O</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 62 400 210',
      caption: 'Şekil 62',
      label: 'Aynı şekilde [OA] kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M50.0,240.0 A150,150 0 0 1 350.0,240.0 Z"/>
          <path class="ln" d="M85.1,143.6 L186.1,161.4 L120.2,240.0 L85.1,143.6"/>
          <path class="ln" d="M50.0,240.0 L85.1,143.6"/>
          <path class="ln" d="M200.0,240.0 L174.0,92.3"/>
          <path class="tick" d="M157.7,246.0 L157.7,234.0"/>
          <path class="tick" d="M162.5,246.0 L162.5,234.0"/>
          <path class="tick" d="M199.4,202.0 L187.6,204.1"/>
          <path class="tick" d="M198.6,197.3 L186.7,199.4"/>
          <path class="arc" d="M76.2,168.0 A26,26 0 0 0 94.0,168.0"/>
          <text class="val" x="85.1" y="186.6" text-anchor="middle">α</text>
          <circle class="pt" cx="85.1" cy="143.6" r="3.2"/>
          <circle class="pt" cx="186.1" cy="161.4" r="3.2"/>
          <circle class="pt" cx="120.2" cy="240.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="174.0" cy="92.3" r="3.2"/>
          <circle class="pt" cx="200.0" cy="240.0" r="3.2"/>
          <text x="79.1" y="135.6" text-anchor="end">A</text>
          <text x="194.1" y="165.4">B</text>
          <text x="120.2" y="260.0" text-anchor="middle">C</text>
          <text x="44.0" y="246.0" text-anchor="end">D</text>
          <text x="356.0" y="246.0">E</text>
          <text x="170.0" y="82.3" text-anchor="middle">F</text>
          <text x="200.0" y="260.0" text-anchor="middle">O</text>
          <path class="aux" d="M200.0,240.0 L85.1,143.6"/>
        `,
    },
    given: ['O, yarım çemberin merkezi', 'ABC eşkenar üçgen', '|OC| = |OB|', 'm(FE) = 100°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '25' },
      { key: 'B', text: '30' },
      { key: 'C', text: '35' },
      { key: 'D', text: '40' },
      { key: 'E', text: '45' },
    ],
    answer: 'D',
    hint: '[OA]’yı çiz; OAC ve OAB üçgenlerinin kenarlarını karşılaştır.',
    solution: [
      {
        title: 'OCB üçgeni',
        detail: 'm(COB) = 180 − 100 = 80°; |OC| = |OB| olduğundan m(OCB) = (180 − 80) : 2 = 50°.',
      },
      {
        title: 'Eş üçgenler',
        detail:
          '|AC| = |AB|, |OC| = |OB| ve [OA] ortak: OAC ≅ OAB, bu yüzden m(OAC) = 60 : 2 = 30°.',
      },
      { title: 'AOC açısı', detail: 'm(ACO) = 60 + 50 = 110°, m(AOC) = 180 − 110 − 30 = 40°.' },
      { title: 'OAD üçgeni', detail: '|OA| = |OD| olduğundan m(OAD) = (180 − 40) : 2 = 70°.' },
      { title: 'Sonuç', detail: 'α = m(OAD) − m(OAC) = 70 − 30 = 40° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 63
  {
    id: 'circles-63',
    topic: 'Çeyrek çemberde eşit yaylar',
    figure: {
      viewBox: '0 40 400 245',
      caption: 'Şekil 63',
      label:
        'O merkezli çeyrek çemberde A ve D yayın uçları, B ve C yay üzerinde; [DC], [CB], [BA] kirişleri çizilmiş, AB ve DC yayları eşit olduğundan kirişleri çentikli, m(OAB) = 75°, m(CBA) = α.',
      svg: `
          <path class="ln" d="M110.0,60.0 A200,200 0 0 1 310.0,260.0"/>
          <path class="ln" d="M110.0,60.0 L110.0,260.0 L310.0,260.0"/>
          <path class="ln" d="M110.0,60.0 L210.0,86.8 L283.2,160.0 L310.0,260.0"/>
          <path class="ln" d="M122.0,260.0 L122.0,248.0 L110.0,248.0"/>
          <path class="tick" d="M158.4,79.2 L161.6,67.6"/>
          <path class="tick" d="M290.8,211.6 L302.4,208.4"/>
          <path class="arc" d="M284.0,260.0 A26,26 0 0 1 303.3,234.9"/>
          <text class="val" x="275.1" y="238.2" text-anchor="middle">75°</text>
          <path class="arc" d="M269.1,145.9 A20,20 0 0 0 288.4,179.3"/>
          <text class="val" x="252.0" y="183.0" text-anchor="middle">α</text>
          <circle class="pt" cx="110.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="283.2" cy="160.0" r="3.2"/>
          <circle class="pt" cx="210.0" cy="86.8" r="3.2"/>
          <circle class="pt" cx="110.0" cy="60.0" r="3.2"/>
          <text x="102.0" y="274.0" text-anchor="end">O</text>
          <text x="318.0" y="274.0">A</text>
          <text x="291.2" y="160.0">B</text>
          <text x="216.0" y="78.8">C</text>
          <text x="102.0" y="64.0" text-anchor="end">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 40 400 245',
      caption: 'Şekil 63',
      label: 'Aynı şekilde [OB] ve [OC] kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M110.0,60.0 A200,200 0 0 1 310.0,260.0"/>
          <path class="ln" d="M110.0,60.0 L110.0,260.0 L310.0,260.0"/>
          <path class="ln" d="M110.0,60.0 L210.0,86.8 L283.2,160.0 L310.0,260.0"/>
          <path class="ln" d="M122.0,260.0 L122.0,248.0 L110.0,248.0"/>
          <path class="tick" d="M158.4,79.2 L161.6,67.6"/>
          <path class="tick" d="M290.8,211.6 L302.4,208.4"/>
          <path class="arc" d="M284.0,260.0 A26,26 0 0 1 303.3,234.9"/>
          <text class="val" x="275.1" y="238.2" text-anchor="middle">75°</text>
          <path class="arc" d="M269.1,145.9 A20,20 0 0 0 288.4,179.3"/>
          <text class="val" x="252.0" y="183.0" text-anchor="middle">α</text>
          <circle class="pt" cx="110.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="283.2" cy="160.0" r="3.2"/>
          <circle class="pt" cx="210.0" cy="86.8" r="3.2"/>
          <circle class="pt" cx="110.0" cy="60.0" r="3.2"/>
          <text x="102.0" y="274.0" text-anchor="end">O</text>
          <text x="318.0" y="274.0">A</text>
          <text x="291.2" y="160.0">B</text>
          <text x="216.0" y="78.8">C</text>
          <text x="102.0" y="64.0" text-anchor="end">D</text>
          <path class="aux" d="M110.0,260.0 L283.2,160.0"/>
          <path class="aux" d="M110.0,260.0 L210.0,86.8"/>
        `,
    },
    given: ['O, çeyrek çemberin merkezi', 'm(AB) = m(DC)', 'm(OAB) = 75°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CBA) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '130' },
      { key: 'B', text: '140' },
      { key: 'C', text: '145' },
      { key: 'D', text: '150' },
      { key: 'E', text: '160' },
    ],
    answer: 'D',
    hint: '[OB]’yi çiz; OAB ikizkenar üçgeninden AB yayını bul.',
    solution: [
      {
        title: 'AB yayı',
        detail: '|OA| = |OB| olduğundan m(OBA) = 75°, m(AOB) = 180 − 150 = 30°; AB yayı 30°.',
      },
      { title: 'Diğer yaylar', detail: 'DC yayı da 30°; CB yayı = 90 − 30 − 30 = 30°.' },
      {
        title: 'α’nın gördüğü yay',
        detail: 'α çevre açısı, B’yi içermeyen CA yayını görür: 360 − (30 + 30) = 300°.',
      },
      { title: 'Sonuç', detail: 'α = 300 : 2 = 150° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 64
  {
    id: 'circles-64',
    topic: 'Kirişler dörtgeninde çevre açılar',
    figure: {
      viewBox: '0 20 400 262',
      caption: 'Şekil 64',
      label:
        'Çembere içten çizilmiş ABCD dörtgeni; [AC] ve [BD] köşegenleri çizilmiş, m(DAB) = 75°, m(ABD) = 40°, m(ACB) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="150.0" r="110.0"/>
          <path class="ln" d="M91.7,169.1 L284.3,220.7 L303.4,112.4 L162.4,46.6 L91.7,169.1"/>
          <path class="ln" d="M91.7,169.1 L303.4,112.4"/>
          <path class="ln" d="M162.4,46.6 L284.3,220.7"/>
          <path class="arc" d="M106.7,143.1 A30,30 0 0 1 120.6,176.9"/>
          <text class="val" x="137.9" y="155.0" text-anchor="middle">75°</text>
          <path class="arc" d="M251.4,211.9 A34,34 0 0 1 264.8,192.9"/>
          <text class="val" x="241.7" y="195.9" text-anchor="middle">40°</text>
          <path class="arc" d="M280.2,118.6 A24,24 0 0 0 299.2,136.0"/>
          <text class="val" x="276.3" y="146.9" text-anchor="middle">α</text>
          <circle class="pt" cx="91.7" cy="169.1" r="3.2"/>
          <circle class="pt" cx="284.3" cy="220.7" r="3.2"/>
          <circle class="pt" cx="303.4" cy="112.4" r="3.2"/>
          <circle class="pt" cx="162.4" cy="46.6" r="3.2"/>
          <text x="83.7" y="175.1" text-anchor="end">A</text>
          <text x="290.3" y="234.7">B</text>
          <text x="311.4" y="116.4">C</text>
          <text x="158.4" y="36.6" text-anchor="middle">D</text>
        `,
    },
    given: ['ABCD kirişler dörtgeni', 'm(DAB) = 75°', 'm(ABD) = 40°'],
    stem: [],
    ask: 'Yukarıdaki şekilde ABCD kirişler dörtgeni olduğuna göre, m(ACB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'E',
    hint: 'α ile aynı yayı gören başka bir çevre açı ara.',
    solution: [
      { title: 'ABD üçgeni', detail: 'm(ADB) = 180 − 75 − 40 = 65°.' },
      { title: 'Aynı yay', detail: 'ADB ve ACB çevre açılarının ikisi de AB yayını görür.' },
      { title: 'Sonuç', detail: 'α = m(ADB) = 65° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 65
  {
    id: 'circles-65',
    topic: 'Kesişen çemberler ve dış açı',
    figure: {
      viewBox: '0 28 400 290',
      caption: 'Şekil 65',
      label:
        'D ve E noktalarında kesişen iki çember; A ve B büyük çember, C küçük çember üzerinde. A, D, C ve B, E, C doğrusal; m(BAC) = 65°, m(ACB) = α.',
      svg: `
          <circle class="ln" cx="161.7" cy="170.0" r="121.2"/>
          <circle class="ln" cx="298.1" cy="145.9" r="52.6"/>
          <path class="ln" d="M145.0,290.0 L145.0,50.0 L350.7,145.9 L145.0,290.0"/>
          <path class="arc" d="M145.0,72.0 A22,22 0 0 0 164.9,59.3"/>
          <text class="val" x="166.5" y="88.7" text-anchor="middle">65°</text>
          <path class="arc" d="M332.6,137.5 A20,20 0 0 0 334.4,157.4"/>
          <text class="val" x="314.9" y="154.1" text-anchor="middle">α</text>
          <circle class="pt" cx="145.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="145.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="350.7" cy="145.9" r="3.2"/>
          <circle class="pt" cx="264.3" cy="105.6" r="3.2"/>
          <circle class="pt" cx="280.2" cy="195.4" r="3.2"/>
          <text x="145.0" y="40.0" text-anchor="middle">A</text>
          <text x="145.0" y="312.0" text-anchor="middle">B</text>
          <text x="358.7" y="151.9">C</text>
          <text x="268.3" y="95.6">D</text>
          <text x="282.2" y="215.4">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 28 400 290',
      caption: 'Şekil 65',
      label: 'Aynı şekilde ortak kiriş [DE] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="161.7" cy="170.0" r="121.2"/>
          <circle class="ln" cx="298.1" cy="145.9" r="52.6"/>
          <path class="ln" d="M145.0,290.0 L145.0,50.0 L350.7,145.9 L145.0,290.0"/>
          <path class="arc" d="M145.0,72.0 A22,22 0 0 0 164.9,59.3"/>
          <text class="val" x="166.5" y="88.7" text-anchor="middle">65°</text>
          <path class="arc" d="M332.6,137.5 A20,20 0 0 0 334.4,157.4"/>
          <text class="val" x="314.9" y="154.1" text-anchor="middle">α</text>
          <circle class="pt" cx="145.0" cy="50.0" r="3.2"/>
          <circle class="pt" cx="145.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="350.7" cy="145.9" r="3.2"/>
          <circle class="pt" cx="264.3" cy="105.6" r="3.2"/>
          <circle class="pt" cx="280.2" cy="195.4" r="3.2"/>
          <text x="145.0" y="40.0" text-anchor="middle">A</text>
          <text x="145.0" y="312.0" text-anchor="middle">B</text>
          <text x="358.7" y="151.9">C</text>
          <text x="268.3" y="95.6">D</text>
          <text x="282.2" y="215.4">E</text>
          <path class="aux" d="M264.3,105.6 L280.2,195.4"/>
        `,
    },
    given: ['D, E çemberlerin kesişim noktası', 'm(BAC) = 65°', 'm(EC) = 110°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'A',
    hint: '[DE]’yi çiz; küçük çemberde EDC çevre açısı EC yayını görür.',
    solution: [
      {
        title: 'EDC açısı',
        detail: 'Küçük çemberde EDC çevre açısı EC yayını görür: m(EDC) = 110 : 2 = 55°.',
      },
      {
        title: 'Kirişler dörtgeni',
        detail:
          'ABED kirişler dörtgeni olduğundan D’deki dış açı karşı iç açıya eşittir: m(ABC) = m(EDC) = 55°.',
      },
      { title: 'Sonuç', detail: 'ABC üçgeninde α = 180 − 65 − 55 = 60° bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 66
  {
    id: 'circles-66',
    topic: 'Teğet ve paralelkenar',
    figure: {
      viewBox: '0 22 400 250',
      caption: 'Şekil 66',
      label:
        'O merkezli çember; KP doğrusu çembere C noktasında teğet. A ve B çember üzerinde, AOCB paralelkenar, P, B, A doğrusal, m(BCP) = x.',
      svg: `
          <circle class="ln" cx="185.0" cy="140.0" r="100.0"/>
          <path class="ln" d="M60.0,240.0 L320.0,240.0"/>
          <path class="ln" d="M185.0,140.0 L271.6,90.0 L271.6,240.0"/>
          <path class="ln" d="M185.0,140.0 L185.0,240.0 L271.6,190.0"/>
          <path class="arc" d="M214.4,223.0 A34,34 0 0 1 219.0,240.0"/>
          <text class="val" x="233.3" y="232.1" text-anchor="middle">x</text>
          <circle class="pt" cx="185.0" cy="140.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="90.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="190.0" r="3.2"/>
          <circle class="pt" cx="185.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="240.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="240.0" r="3.2"/>
          <text x="177.0" y="136.0" text-anchor="end">O</text>
          <text x="279.6" y="86.0">A</text>
          <text x="279.6" y="202.0">B</text>
          <text x="185.0" y="262.0" text-anchor="middle">C</text>
          <text x="271.6" y="262.0" text-anchor="middle">P</text>
          <text x="60.0" y="262.0" text-anchor="middle">K</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 22 400 250',
      caption: 'Şekil 66',
      label: 'Aynı şekilde [OB] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="185.0" cy="140.0" r="100.0"/>
          <path class="ln" d="M60.0,240.0 L320.0,240.0"/>
          <path class="ln" d="M185.0,140.0 L271.6,90.0 L271.6,240.0"/>
          <path class="ln" d="M185.0,140.0 L185.0,240.0 L271.6,190.0"/>
          <path class="arc" d="M214.4,223.0 A34,34 0 0 1 219.0,240.0"/>
          <text class="val" x="233.3" y="232.1" text-anchor="middle">x</text>
          <circle class="pt" cx="185.0" cy="140.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="90.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="190.0" r="3.2"/>
          <circle class="pt" cx="185.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="240.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="240.0" r="3.2"/>
          <text x="177.0" y="136.0" text-anchor="end">O</text>
          <text x="279.6" y="86.0">A</text>
          <text x="279.6" y="202.0">B</text>
          <text x="185.0" y="262.0" text-anchor="middle">C</text>
          <text x="271.6" y="262.0" text-anchor="middle">P</text>
          <text x="60.0" y="262.0" text-anchor="middle">K</text>
          <path class="aux" d="M185.0,140.0 L271.6,190.0"/>
        `,
    },
    given: ['[PK, C noktasında O merkezli çembere teğet', 'AOCB paralelkenar', 'P, B, A doğrusal'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCP) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '25' },
      { key: 'C', text: '30' },
      { key: 'D', text: '35' },
      { key: 'E', text: '40' },
    ],
    answer: 'C',
    hint: 'Paralelkenarın karşılıklı kenarları eşittir; [OB]’yi çizip kenarları yarıçapla karşılaştır.',
    solution: [
      { title: 'Kenarlar', detail: 'AOCB paralelkenar: |CB| = |OA| = r ve |AB| = |OC| = r.' },
      {
        title: 'OBC üçgeni',
        detail: '|OB| = |OC| = r ve |CB| = r olduğundan OBC eşkenar üçgendir: m(BOC) = 60°.',
      },
      { title: 'BC yayı', detail: 'Merkez açı 60° olduğundan BC yayı 60°.' },
      {
        title: 'Sonuç',
        detail: 'Teğet-kiriş açısı BC yayının yarısıdır: x = 60 : 2 = 30° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 67
  {
    id: 'circles-67',
    topic: 'Eşit kirişler ve merkez açı',
    figure: {
      viewBox: '0 28 400 272',
      caption: 'Şekil 67',
      label:
        'O merkezli çemberde [AD] çap; B ve C çember üzerinde, [AB] ve [BC] kirişleri eşit uzunlukta, H noktası [BC] üzerinde ve [OH] ⊥ [BC], m(ABC) = 100°, m(AOH) = α.',
      svg: `
          <circle class="ln" cx="200.0" cy="175.0" r="115.0"/>
          <path class="ln" d="M85.0,175.0 L315.0,175.0"/>
          <path class="ln" d="M85.0,175.0 L180.0,61.7 L308.1,135.7"/>
          <path class="ln" d="M200.0,175.0 L244.0,98.7"/>
          <path class="ln" d="M239.0,107.4 L247.7,112.4 L252.7,103.7"/>
          <path class="arc" d="M199.1,72.7 A22,22 0 0 1 165.9,78.6"/>
          <text class="val" x="187.0" y="106.1" text-anchor="middle">100°</text>
          <path class="arc" d="M180.0,175.0 A20,20 0 0 1 210.0,157.7"/>
          <text class="val" x="183.0" y="150.6" text-anchor="middle">α</text>
          <circle class="pt" cx="85.0" cy="175.0" r="3.2"/>
          <circle class="pt" cx="180.0" cy="61.7" r="3.2"/>
          <circle class="pt" cx="308.1" cy="135.7" r="3.2"/>
          <circle class="pt" cx="315.0" cy="175.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="175.0" r="3.2"/>
          <circle class="pt" cx="244.0" cy="98.7" r="3.2"/>
          <text x="71.0" y="180.0" text-anchor="end">A</text>
          <text x="180.0" y="50.7" text-anchor="middle">B</text>
          <text x="321.2" y="135.2">C</text>
          <text x="329.0" y="180.0">D</text>
          <text x="200.0" y="200.0" text-anchor="middle">O</text>
          <text x="251.0" y="89.9">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 28 400 272',
      caption: 'Şekil 67',
      label: 'Aynı şekilde [OB] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="200.0" cy="175.0" r="115.0"/>
          <path class="ln" d="M85.0,175.0 L315.0,175.0"/>
          <path class="ln" d="M85.0,175.0 L180.0,61.7 L308.1,135.7"/>
          <path class="ln" d="M200.0,175.0 L244.0,98.7"/>
          <path class="ln" d="M239.0,107.4 L247.7,112.4 L252.7,103.7"/>
          <path class="arc" d="M199.1,72.7 A22,22 0 0 1 165.9,78.6"/>
          <text class="val" x="187.0" y="106.1" text-anchor="middle">100°</text>
          <path class="arc" d="M180.0,175.0 A20,20 0 0 1 210.0,157.7"/>
          <text class="val" x="183.0" y="150.6" text-anchor="middle">α</text>
          <circle class="pt" cx="85.0" cy="175.0" r="3.2"/>
          <circle class="pt" cx="180.0" cy="61.7" r="3.2"/>
          <circle class="pt" cx="308.1" cy="135.7" r="3.2"/>
          <circle class="pt" cx="315.0" cy="175.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="175.0" r="3.2"/>
          <circle class="pt" cx="244.0" cy="98.7" r="3.2"/>
          <text x="71.0" y="180.0" text-anchor="end">A</text>
          <text x="180.0" y="50.7" text-anchor="middle">B</text>
          <text x="321.2" y="135.2">C</text>
          <text x="329.0" y="180.0">D</text>
          <text x="200.0" y="200.0" text-anchor="middle">O</text>
          <text x="251.0" y="89.9">H</text>
          <path class="aux" d="M200.0,175.0 L180.0,61.7"/>
        `,
    },
    given: ['O, çemberin merkezi', '[AD] çap', '[OH] ⊥ [BC]', 'm(ABC) = 100°', '|AB| = |BC|'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AOH) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '105' },
      { key: 'C', text: '110' },
      { key: 'D', text: '115' },
      { key: 'E', text: '120' },
    ],
    answer: 'E',
    hint: 'ABC çevre açısının gördüğü AC yayını bul; eşit kirişler eşit yaylar ayırır.',
    solution: [
      {
        title: 'AC yayı',
        detail: 'ABC çevre açısı, B’yi içermeyen AC yayını görür: m(AC) = 2 · 100 = 200°.',
      },
      {
        title: 'AB ve BC yayları',
        detail: 'Kalan yay 360 − 200 = 160°; |AB| = |BC| olduğundan m(AB) = m(BC) = 80°.',
      },
      {
        title: 'Merkez açılar',
        detail:
          'm(AOB) = 80° ve m(BOC) = 80°. [OH] ⊥ [BC] olduğundan [OH], BOC açısını ikiye böler: m(BOH) = 40°.',
      },
      { title: 'Sonuç', detail: 'α = m(AOB) + m(BOH) = 80 + 40 = 120° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 68
  {
    id: 'circles-68',
    topic: 'İçten teğet çemberler',
    figure: {
      viewBox: '0 10 400 296',
      caption: 'Şekil 68',
      label:
        'İki çember D noktasında içten teğet; D’den çıkan iki doğru küçük çemberi K ve M’de, büyük çemberi A ve B’de kesiyor. [MK] ve [BA] çizilmiş, m(MDK) = 45°, m(DKM) = 70°, m(DBA) = x.',
      svg: `
          <circle class="ln" cx="200.0" cy="170.0" r="125.0"/>
          <circle class="ln" cx="200.0" cy="107.5" r="62.5"/>
          <path class="ln" d="M295.8,250.3 L200.0,45.0 L119.7,265.8"/>
          <path class="ln" d="M247.9,147.7 L159.8,155.4"/>
          <path class="ln" d="M295.8,250.3 L119.7,265.8"/>
          <path class="arc" d="M229.9,149.2 A18,18 0 0 1 240.3,131.4"/>
          <text class="val" x="218.4" y="135.7" text-anchor="middle">70°</text>
          <path class="arc" d="M212.7,72.2 A30,30 0 0 1 189.7,73.2"/>
          <text class="val" x="201.9" y="94.0" text-anchor="middle">45°</text>
          <path class="arc" d="M127.9,243.2 A24,24 0 0 1 143.6,263.7"/>
          <text class="val" x="148.2" y="248.8" text-anchor="middle">x</text>
          <circle class="pt" cx="200.0" cy="45.0" r="3.2"/>
          <circle class="pt" cx="247.9" cy="147.7" r="3.2"/>
          <circle class="pt" cx="159.8" cy="155.4" r="3.2"/>
          <circle class="pt" cx="295.8" cy="250.3" r="3.2"/>
          <circle class="pt" cx="119.7" cy="265.8" r="3.2"/>
          <text x="200.0" y="34.0" text-anchor="middle">D</text>
          <text x="261.6" y="155.8">K</text>
          <text x="146.1" y="163.5" text-anchor="end">M</text>
          <text x="306.5" y="265.6">A</text>
          <text x="110.7" y="283.0" text-anchor="end">B</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 10 400 296',
      caption: 'Şekil 68',
      label: 'Aynı şekilde D noktasındaki ortak teğet kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="200.0" cy="170.0" r="125.0"/>
          <circle class="ln" cx="200.0" cy="107.5" r="62.5"/>
          <path class="ln" d="M295.8,250.3 L200.0,45.0 L119.7,265.8"/>
          <path class="ln" d="M247.9,147.7 L159.8,155.4"/>
          <path class="ln" d="M295.8,250.3 L119.7,265.8"/>
          <path class="arc" d="M229.9,149.2 A18,18 0 0 1 240.3,131.4"/>
          <text class="val" x="218.4" y="135.7" text-anchor="middle">70°</text>
          <path class="arc" d="M212.7,72.2 A30,30 0 0 1 189.7,73.2"/>
          <text class="val" x="201.9" y="94.0" text-anchor="middle">45°</text>
          <path class="arc" d="M127.9,243.2 A24,24 0 0 1 143.6,263.7"/>
          <text class="val" x="148.2" y="248.8" text-anchor="middle">x</text>
          <circle class="pt" cx="200.0" cy="45.0" r="3.2"/>
          <circle class="pt" cx="247.9" cy="147.7" r="3.2"/>
          <circle class="pt" cx="159.8" cy="155.4" r="3.2"/>
          <circle class="pt" cx="295.8" cy="250.3" r="3.2"/>
          <circle class="pt" cx="119.7" cy="265.8" r="3.2"/>
          <text x="200.0" y="34.0" text-anchor="middle">D</text>
          <text x="261.6" y="155.8">K</text>
          <text x="146.1" y="163.5" text-anchor="end">M</text>
          <text x="306.5" y="265.6">A</text>
          <text x="110.7" y="283.0" text-anchor="end">B</text>
          <path class="aux" d="M110.0,45.0 L290.0,45.0"/>
        `,
    },
    given: [
      'Çemberler D noktasında içten teğet',
      'D, M, B ve D, K, A doğrusal',
      'm(MDK) = 45°',
      'm(DKM) = 70°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DBA) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '70' },
    ],
    answer: 'D',
    hint: 'D’deki ortak teğeti çiz; teğet-kiriş açısı iki çemberde de aynı açıdır.',
    solution: [
      { title: 'DMK açısı', detail: 'DMK üçgeninde m(DMK) = 180 − 45 − 70 = 65°.' },
      {
        title: 'Küçük çember',
        detail:
          'Ortak teğet ile [DK] arasındaki açı, DK yayını gören DMK çevre açısına eşittir: 65°.',
      },
      {
        title: 'Büyük çember',
        detail:
          'Aynı teğet ile [DA] arasındaki açı, büyük çemberde DA yayını gören DBA çevre açısına eşittir.',
      },
      { title: 'Sonuç', detail: 'x = 65° bulunur; bu yüzden [MK] // [BA].' },
    ],
  },
  // ---------------------------------------------------------------- 69
  {
    id: 'circles-69',
    topic: 'Dışta kesişen kesenler',
    figure: {
      viewBox: '0 48 400 224',
      caption: 'Şekil 69',
      label:
        'O merkezli çember ve dışındaki A noktası; A’dan çizilen iki kesen çemberi C, B ve E, D noktalarında kesiyor, m(BAD) = 20°.',
      svg: `
          <circle class="ln" cx="250.0" cy="160.0" r="100.0"/>
          <path class="ln" d="M326.6,95.7 L54.4,156.1 L344.0,194.2"/>
          <path class="arc" d="M83.7,149.6 A30,30 0 0 1 84.1,160.0"/>
          <text class="val" x="114.3" y="158.5" text-anchor="middle">20°</text>
          <circle class="pt" cx="54.4" cy="156.1" r="3.2"/>
          <circle class="pt" cx="326.6" cy="95.7" r="3.2"/>
          <circle class="pt" cx="153.4" cy="134.1" r="3.2"/>
          <circle class="pt" cx="344.0" cy="194.2" r="3.2"/>
          <circle class="pt" cx="150.4" cy="168.7" r="3.2"/>
          <circle class="pt" cx="250.0" cy="160.0" r="3.2"/>
          <text x="40.4" y="161.1" text-anchor="end">A</text>
          <text x="337.3" y="90.4">B</text>
          <text x="156.2" y="123.4" text-anchor="middle">C</text>
          <text x="357.1" y="204.7">D</text>
          <text x="153.1" y="189.4" text-anchor="middle">E</text>
          <text x="250.0" y="183.0" text-anchor="middle">O</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 48 400 224',
      caption: 'Şekil 69',
      label: 'Aynı şekilde [CD] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="250.0" cy="160.0" r="100.0"/>
          <path class="ln" d="M326.6,95.7 L54.4,156.1 L344.0,194.2"/>
          <path class="arc" d="M83.7,149.6 A30,30 0 0 1 84.1,160.0"/>
          <text class="val" x="114.3" y="158.5" text-anchor="middle">20°</text>
          <circle class="pt" cx="54.4" cy="156.1" r="3.2"/>
          <circle class="pt" cx="326.6" cy="95.7" r="3.2"/>
          <circle class="pt" cx="153.4" cy="134.1" r="3.2"/>
          <circle class="pt" cx="344.0" cy="194.2" r="3.2"/>
          <circle class="pt" cx="150.4" cy="168.7" r="3.2"/>
          <circle class="pt" cx="250.0" cy="160.0" r="3.2"/>
          <text x="40.4" y="161.1" text-anchor="end">A</text>
          <text x="337.3" y="90.4">B</text>
          <text x="156.2" y="123.4" text-anchor="middle">C</text>
          <text x="357.1" y="204.7">D</text>
          <text x="153.1" y="189.4" text-anchor="middle">E</text>
          <text x="250.0" y="183.0" text-anchor="middle">O</text>
          <path class="aux" d="M153.4,134.1 L344.0,194.2"/>
        `,
    },
    given: ['A, C, B ve A, E, D doğrusal', 'm(BAD) = 20°', 'm(BD) = 3 · m(CE)'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BD) kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '50' },
      { key: 'C', text: '60' },
      { key: 'D', text: '70' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'Dışta kesişen iki kesen arasındaki açı, uzak yay ile yakın yayın farkının yarısıdır.',
    solution: [
      {
        title: 'Çevre açılar',
        detail: '[CD]’yi çiz. m(CE) = t dersen m(BD) = 3t; m(CDE) = t : 2 ve m(BCD) = 3t : 2.',
      },
      { title: 'Dış açı', detail: 'ACD üçgeninde BCD dış açıdır: 3t : 2 = t : 2 + 20.' },
      { title: 'CE yayı', detail: 't = 20° bulunur.' },
      { title: 'Sonuç', detail: 'm(BD) = 3 · 20 = 60° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 70
  {
    id: 'circles-70',
    topic: 'Teğet, kesen ve açıortay',
    figure: {
      viewBox: '40 30 400 242',
      caption: 'Şekil 70',
      label:
        'O merkezli çember; [PD, A noktasında çembere teğet, P, F, O, B doğrusal, [PC, DPB açısının açıortayı ve [AB] kirişini E’de kesiyor, m(ABP) = 26°, m(AEP) = α.',
      svg: `
          <circle class="ln" cx="270.0" cy="165.0" r="95.0"/>
          <path class="ln" d="M115.7,165.0 L365.0,165.0"/>
          <path class="ln" d="M115.7,165.0 L245.0,63.9"/>
          <path class="ln" d="M115.7,165.0 L329.9,91.2"/>
          <path class="ln" d="M211.5,90.1 L365.0,165.0"/>
          <path class="arc" d="M170.5,146.1 A58,58 0 0 1 173.7,165.0"/>
          <path class="arc" d="M166.1,125.6 A64,64 0 0 1 176.2,144.2"/>
          <path class="arc" d="M339.0,165.0 A26,26 0 0 1 341.6,153.6"/>
          <text class="val" x="324.1" y="160.6" text-anchor="middle">26°</text>
          <path class="arc" d="M248.6,119.2 A14,14 0 0 1 249.2,108.5"/>
          <text class="val" x="233.9" y="118.0" text-anchor="middle">α</text>
          <circle class="pt" cx="115.7" cy="165.0" r="3.2"/>
          <circle class="pt" cx="211.5" cy="90.1" r="3.2"/>
          <circle class="pt" cx="175.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="270.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="365.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="329.9" cy="91.2" r="3.2"/>
          <circle class="pt" cx="261.8" cy="114.7" r="3.2"/>
          <circle class="pt" cx="245.0" cy="63.9" r="3.2"/>
          <text x="102.3" y="174.6" text-anchor="end">P</text>
          <text x="206.3" y="80.3" text-anchor="end">A</text>
          <text x="167.8" y="183.7" text-anchor="end">F</text>
          <text x="270.0" y="188.0" text-anchor="middle">O</text>
          <text x="378.7" y="173.1">B</text>
          <text x="338.7" y="83.8">C</text>
          <text x="265.6" y="105.3" text-anchor="middle">E</text>
          <text x="250.2" y="54.1">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '40 30 400 242',
      caption: 'Şekil 70',
      label: 'Aynı şekilde [AF] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="270.0" cy="165.0" r="95.0"/>
          <path class="ln" d="M115.7,165.0 L365.0,165.0"/>
          <path class="ln" d="M115.7,165.0 L245.0,63.9"/>
          <path class="ln" d="M115.7,165.0 L329.9,91.2"/>
          <path class="ln" d="M211.5,90.1 L365.0,165.0"/>
          <path class="arc" d="M170.5,146.1 A58,58 0 0 1 173.7,165.0"/>
          <path class="arc" d="M166.1,125.6 A64,64 0 0 1 176.2,144.2"/>
          <path class="arc" d="M339.0,165.0 A26,26 0 0 1 341.6,153.6"/>
          <text class="val" x="324.1" y="160.6" text-anchor="middle">26°</text>
          <path class="arc" d="M248.6,119.2 A14,14 0 0 1 249.2,108.5"/>
          <text class="val" x="233.9" y="118.0" text-anchor="middle">α</text>
          <circle class="pt" cx="115.7" cy="165.0" r="3.2"/>
          <circle class="pt" cx="211.5" cy="90.1" r="3.2"/>
          <circle class="pt" cx="175.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="270.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="365.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="329.9" cy="91.2" r="3.2"/>
          <circle class="pt" cx="261.8" cy="114.7" r="3.2"/>
          <circle class="pt" cx="245.0" cy="63.9" r="3.2"/>
          <text x="102.3" y="174.6" text-anchor="end">P</text>
          <text x="206.3" y="80.3" text-anchor="end">A</text>
          <text x="167.8" y="183.7" text-anchor="end">F</text>
          <text x="270.0" y="188.0" text-anchor="middle">O</text>
          <text x="378.7" y="173.1">B</text>
          <text x="338.7" y="83.8">C</text>
          <text x="265.6" y="105.3" text-anchor="middle">E</text>
          <text x="250.2" y="54.1">D</text>
          <path class="aux" d="M211.5,90.1 L175.0,165.0"/>
        `,
    },
    given: [
      '[PD, A noktasında O merkezli çembere teğet',
      'P, F, O, B doğrusal',
      '[PC, DPB açısının açıortayı',
      'm(ABP) = 26°',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde [PC] ∩ [AB] = {E} olduğuna göre, m(AEP) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'B',
    hint: '[AF]’yi çiz; PAF teğet-kiriş açısı, ABF çevre açısına eşittir.',
    solution: [
      { title: 'Teğet-kiriş açısı', detail: 'm(PAF) = m(ABF) = 26°.' },
      {
        title: 'Çapı gören açı',
        detail: '[FB] çap olduğundan m(FAB) = 90°; m(PAB) = 26 + 90 = 116°.',
      },
      {
        title: 'APB açısı',
        detail: 'APB üçgeninde m(APB) = 180 − 116 − 26 = 38°; açıortay olduğundan m(EPB) = 19°.',
      },
      {
        title: 'Sonuç',
        detail: 'AEP açısı PEB üçgeninin dış açısıdır: α = 19 + 26 = 45° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 71
  {
    id: 'circles-71',
    topic: 'Dıştan teğet çemberler',
    figure: {
      viewBox: '-9 102 400 252',
      caption: 'Şekil 71',
      label:
        'A ve B merkezli çemberler P noktasında dıştan teğet; [TC], B merkezli çemberin çapı ve CE doğrusu A merkezli çembere K noktasında teğet. [KP] ve [PC] çizilmiş, m(PKC) = 35°, m(ECP) = α.',
      svg: `
          <circle class="ln" cx="78.0" cy="172.0" r="58.0"/>
          <circle class="ln" cx="237.4" cy="230.0" r="111.6"/>
          <path class="ln" d="M40.0,230.0 L348.9,230.0"/>
          <path class="ln" d="M78.0,230.0 L132.5,191.8 L348.9,230.0"/>
          <path class="arc" d="M94.4,218.5 A20,20 0 0 1 98.0,230.0"/>
          <text class="val" x="104.0" y="252.0" text-anchor="middle">35°</text>
          <path class="arc" d="M288.9,230.0 A60,60 0 0 1 289.8,219.6"/>
          <text class="val" x="275.2" y="228.6" text-anchor="middle">α</text>
          <circle class="pt" cx="78.0" cy="172.0" r="3.2"/>
          <circle class="pt" cx="237.4" cy="230.0" r="3.2"/>
          <circle class="pt" cx="132.5" cy="191.8" r="3.2"/>
          <circle class="pt" cx="78.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="125.8" cy="230.0" r="3.2"/>
          <circle class="pt" cx="348.9" cy="230.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="230.0" r="3.2"/>
          <text x="78.0" y="163.0" text-anchor="middle">A</text>
          <text x="237.4" y="253.0" text-anchor="middle">B</text>
          <text x="138.0" y="179.9" text-anchor="middle">P</text>
          <text x="68.8" y="249.7" text-anchor="end">K</text>
          <text x="132.9" y="251.1">T</text>
          <text x="362.3" y="239.6">C</text>
          <text x="40.0" y="253.0" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '-9 102 400 252',
      caption: 'Şekil 71',
      label: 'Aynı şekilde P noktasındaki ortak teğet ve [TP] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="78.0" cy="172.0" r="58.0"/>
          <circle class="ln" cx="237.4" cy="230.0" r="111.6"/>
          <path class="ln" d="M40.0,230.0 L348.9,230.0"/>
          <path class="ln" d="M78.0,230.0 L132.5,191.8 L348.9,230.0"/>
          <path class="arc" d="M94.4,218.5 A20,20 0 0 1 98.0,230.0"/>
          <text class="val" x="104.0" y="252.0" text-anchor="middle">35°</text>
          <path class="arc" d="M288.9,230.0 A60,60 0 0 1 289.8,219.6"/>
          <text class="val" x="275.2" y="228.6" text-anchor="middle">α</text>
          <circle class="pt" cx="78.0" cy="172.0" r="3.2"/>
          <circle class="pt" cx="237.4" cy="230.0" r="3.2"/>
          <circle class="pt" cx="132.5" cy="191.8" r="3.2"/>
          <circle class="pt" cx="78.0" cy="230.0" r="3.2"/>
          <circle class="pt" cx="125.8" cy="230.0" r="3.2"/>
          <circle class="pt" cx="348.9" cy="230.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="230.0" r="3.2"/>
          <text x="78.0" y="163.0" text-anchor="middle">A</text>
          <text x="237.4" y="253.0" text-anchor="middle">B</text>
          <text x="138.0" y="179.9" text-anchor="middle">P</text>
          <text x="68.8" y="249.7" text-anchor="end">K</text>
          <text x="132.9" y="251.1">T</text>
          <text x="362.3" y="239.6">C</text>
          <text x="40.0" y="253.0" text-anchor="middle">E</text>
          <path class="aux" d="M118.6,230.0 L146.2,154.2"/>
          <path class="aux" d="M125.8,230.0 L132.5,191.8"/>
        `,
    },
    given: [
      'A ve B merkezli çemberler P noktasında dıştan teğet',
      '[TC] çap',
      '[CE, A merkezli çembere K noktasında teğet',
      'm(PKC) = 35°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ECP) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '15' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'A',
    hint: 'P’deki ortak teğeti çiz; bir noktadan çembere çizilen iki teğet parçası eşittir.',
    solution: [
      {
        title: 'Ortak teğet',
        detail:
          'P’deki ortak teğet [KT]’yi bir noktada keser; bu noktadan küçük çembere çizilen iki teğet parçası eşit olduğundan ortak teğet ile [PK] arasındaki açı da 35°.',
      },
      { title: 'Çapı gören açı', detail: '[TC] çap olduğundan m(TPC) = 90°.' },
      {
        title: 'Büyük çember',
        detail:
          'Ortak teğet ile [PT] arasındaki açı, TP yayını gören TCP çevre açısına eşittir: α.',
      },
      {
        title: 'KPC üçgeni',
        detail: 'm(KPC) = 35 + α + 90 olduğundan 35 + (125 + α) + α = 180, 2α = 20.',
      },
      { title: 'Sonuç', detail: 'α = 10° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 72
  {
    id: 'circles-72',
    topic: 'Kenarlara teğet çember',
    figure: {
      viewBox: '5 106 400 244',
      caption: 'Şekil 72',
      label:
        'ABC üçgeni; merkezi [BC] üzerindeki O noktası olan çember [AB]’ye E, [AC]’ye D noktasında teğet. [AH] ⊥ [BC], D noktası [AC]’nin orta noktası olduğundan iki parçası çentikli, m(ABC) = 24°, m(HAC) = α.',
      svg: `
          <circle class="ln" cx="257.7" cy="250.0" r="88.5"/>
          <path class="ln" d="M40.0,250.0 L284.8,141.0 L370.0,250.0 L40.0,250.0"/>
          <path class="ln" d="M284.8,141.0 L284.8,250.0"/>
          <path class="ln" d="M284.8,240.0 L294.8,240.0 L294.8,250.0"/>
          <path class="tick" d="M301.4,171.9 L310.9,164.6"/>
          <path class="tick" d="M344.0,226.4 L353.4,219.1"/>
          <path class="arc" d="M76.5,233.7 A40,40 0 0 1 80.0,250.0"/>
          <text class="val" x="94.8" y="243.4" text-anchor="middle">24°</text>
          <path class="arc" d="M300.8,161.5 A26,26 0 0 1 284.8,167.0"/>
          <text class="val" x="297.2" y="181.9" text-anchor="middle">α</text>
          <circle class="pt" cx="284.8" cy="141.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="370.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="257.7" cy="250.0" r="3.2"/>
          <circle class="pt" cx="284.8" cy="250.0" r="3.2"/>
          <circle class="pt" cx="327.4" cy="195.5" r="3.2"/>
          <circle class="pt" cx="221.6" cy="169.1" r="3.2"/>
          <text x="284.8" y="130.0" text-anchor="middle">A</text>
          <text x="26.6" y="259.6" text-anchor="end">B</text>
          <text x="383.4" y="259.6">C</text>
          <text x="257.7" y="273.0" text-anchor="middle">O</text>
          <text x="284.8" y="273.0" text-anchor="middle">H</text>
          <text x="340.8" y="195.9">D</text>
          <text x="216.4" y="159.3" text-anchor="end">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '5 106 400 244',
      caption: 'Şekil 72',
      label: 'Aynı şekilde [OA] ve [OD] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="257.7" cy="250.0" r="88.5"/>
          <path class="ln" d="M40.0,250.0 L284.8,141.0 L370.0,250.0 L40.0,250.0"/>
          <path class="ln" d="M284.8,141.0 L284.8,250.0"/>
          <path class="ln" d="M284.8,240.0 L294.8,240.0 L294.8,250.0"/>
          <path class="tick" d="M301.4,171.9 L310.9,164.6"/>
          <path class="tick" d="M344.0,226.4 L353.4,219.1"/>
          <path class="arc" d="M76.5,233.7 A40,40 0 0 1 80.0,250.0"/>
          <text class="val" x="94.8" y="243.4" text-anchor="middle">24°</text>
          <path class="arc" d="M300.8,161.5 A26,26 0 0 1 284.8,167.0"/>
          <text class="val" x="297.2" y="181.9" text-anchor="middle">α</text>
          <circle class="pt" cx="284.8" cy="141.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="370.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="257.7" cy="250.0" r="3.2"/>
          <circle class="pt" cx="284.8" cy="250.0" r="3.2"/>
          <circle class="pt" cx="327.4" cy="195.5" r="3.2"/>
          <circle class="pt" cx="221.6" cy="169.1" r="3.2"/>
          <text x="284.8" y="130.0" text-anchor="middle">A</text>
          <text x="26.6" y="259.6" text-anchor="end">B</text>
          <text x="383.4" y="259.6">C</text>
          <text x="257.7" y="273.0" text-anchor="middle">O</text>
          <text x="284.8" y="273.0" text-anchor="middle">H</text>
          <text x="340.8" y="195.9">D</text>
          <text x="216.4" y="159.3" text-anchor="end">E</text>
          <path class="aux" d="M284.8,141.0 L257.7,250.0"/>
          <path class="aux" d="M257.7,250.0 L327.4,195.5"/>
        `,
    },
    given: [
      'O merkezli çember [AB]’ye E, [AC]’ye D noktasında teğet',
      'O ∈ [BC]',
      '[AH] ⊥ [BC]',
      'm(ABC) = 24°',
      '|AD| = |DC|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(HAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '34' },
      { key: 'B', text: '36' },
      { key: 'C', text: '38' },
      { key: 'D', text: '40' },
      { key: 'E', text: '42' },
    ],
    answer: 'C',
    hint: '[OA] ve [OD]’yi çiz; merkez iki kenara eşit uzaklıkta olduğundan [AO] açıortaydır.',
    solution: [
      {
        title: 'Açıortay',
        detail:
          '|OE| = |OD| ve [OE] ⊥ [AB], [OD] ⊥ [AC] olduğundan [AO], BAC açısının açıortayıdır.',
      },
      {
        title: 'İkizkenar üçgen',
        detail: '[OD] ⊥ [AC] ve |AD| = |DC| olduğundan |OA| = |OC|; m(OAC) = m(ACB).',
      },
      {
        title: 'Açılar',
        detail: 'm(BAC) = 2 · m(ACB) olduğundan 24 + 3 · m(ACB) = 180, m(ACB) = 52°.',
      },
      { title: 'Sonuç', detail: 'AHC dik üçgeninde α = 90 − 52 = 38° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 73
  {
    id: 'circles-73',
    topic: 'Teğet, kesen ve paralel kiriş',
    figure: {
      viewBox: '-113 -133 400 265',
      caption: 'Şekil 73',
      label:
        'O merkezli çember; [PE, T noktasında çembere teğet, P noktasından çizilen kesen çemberi A ve B noktalarında kesiyor, [OB] // [TA], m(EPB) = 45°, m(TOB) = α.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="95.0"/>
          <path class="ln" d="M241.6,34.0 L12.1,-103.5"/>
          <path class="ln" d="M241.6,34.0 L-1.5,95.0"/>
          <path class="ln" d="M48.8,-81.5 L46.2,83.0"/>
          <path class="ln" d="M0.0,-0.0 L-1.5,95.0"/>
          <path class="ln" d="M0.0,-0.0 L48.8,-81.5"/>
          <path class="arc" d="M207.3,13.4 A40,40 0 0 0 202.9,43.7"/>
          <text class="val" x="186.3" y="30.8" text-anchor="middle">45°</text>
          <path class="arc" d="M-0.3,18.0 A18,18 0 0 0 9.2,-15.4"/>
          <text class="val" x="28.9" y="13.2" text-anchor="middle">α</text>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="48.8" cy="-81.5" r="3.2"/>
          <circle class="pt" cx="46.2" cy="83.0" r="3.2"/>
          <circle class="pt" cx="-1.5" cy="95.0" r="3.2"/>
          <circle class="pt" cx="241.6" cy="34.0" r="3.2"/>
          <text x="-15.4" y="1.1" text-anchor="end">O</text>
          <text x="54.5" y="-91.0">T</text>
          <text x="48.7" y="104.3" text-anchor="middle">A</text>
          <text x="-4.5" y="116.2" text-anchor="middle">B</text>
          <text x="257.6" y="39.5">P</text>
          <text x="5.1" y="-105.0" text-anchor="end">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '-113 -133 400 265',
      caption: 'Şekil 73',
      label: 'Aynı şekilde [OA] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="95.0"/>
          <path class="ln" d="M241.6,34.0 L12.1,-103.5"/>
          <path class="ln" d="M241.6,34.0 L-1.5,95.0"/>
          <path class="ln" d="M48.8,-81.5 L46.2,83.0"/>
          <path class="ln" d="M0.0,-0.0 L-1.5,95.0"/>
          <path class="ln" d="M0.0,-0.0 L48.8,-81.5"/>
          <path class="arc" d="M207.3,13.4 A40,40 0 0 0 202.9,43.7"/>
          <text class="val" x="186.3" y="30.8" text-anchor="middle">45°</text>
          <path class="arc" d="M-0.3,18.0 A18,18 0 0 0 9.2,-15.4"/>
          <text class="val" x="28.9" y="13.2" text-anchor="middle">α</text>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="48.8" cy="-81.5" r="3.2"/>
          <circle class="pt" cx="46.2" cy="83.0" r="3.2"/>
          <circle class="pt" cx="-1.5" cy="95.0" r="3.2"/>
          <circle class="pt" cx="241.6" cy="34.0" r="3.2"/>
          <text x="-15.4" y="1.1" text-anchor="end">O</text>
          <text x="54.5" y="-91.0">T</text>
          <text x="48.7" y="104.3" text-anchor="middle">A</text>
          <text x="-4.5" y="116.2" text-anchor="middle">B</text>
          <text x="257.6" y="39.5">P</text>
          <text x="5.1" y="-105.0" text-anchor="end">E</text>
          <path class="aux" d="M0.0,-0.0 L46.2,83.0"/>
        `,
    },
    given: ['[PE, O merkezli çembere T noktasında teğet', '[OB] // [TA]', 'm(EPB) = 45°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(TOB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '140' },
      { key: 'B', text: '145' },
      { key: 'C', text: '150' },
      { key: 'D', text: '155' },
      { key: 'E', text: '160' },
    ],
    answer: 'C',
    hint: '[OA]’yı çiz; OAB ikizkenar üçgeninde taban açılarına β de ve paralellikten TAB açısını β cinsinden yaz.',
    solution: [
      {
        title: 'İkizkenar üçgen',
        detail:
          '|OA| = |OB| olduğundan m(OBA) = m(OAB) = β; m(AOB) = 180 − 2β, yani AB yayı 180 − 2β.',
      },
      {
        title: 'Paralellik',
        detail:
          '[OB] // [TA] olduğundan karşı durumlu açılar: m(TAB) = 180 − β. Bu çevre açı, A’yı içermeyen TB yayını görür: 360 − 2β.',
      },
      { title: 'TA yayı', detail: 'TA yayı = 360 − (180 − 2β) − (360 − 2β) = 4β − 180.' },
      {
        title: 'Teğet-kesen açısı',
        detail:
          '45 = [(360 − 2β) − (4β − 180)] : 2 = 270 − 3β, β = 75°. TA yayı 120°, AB yayı 30°.',
      },
      { title: 'Sonuç', detail: 'α = m(TOB) = 120 + 30 = 150° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 74
  {
    id: 'circles-74',
    topic: 'Dış noktadan teğetler',
    figure: {
      viewBox: '-106 -113 400 226',
      caption: 'Şekil 74',
      label:
        'O merkezli çember; [PE, T noktasında, [PF, S noktasında çembere teğet. [AB], C noktasında çembere teğet, A ∈ [PT], B ∈ [PS]. m(EPF) = x, m(AOB) = 2x.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="72.0"/>
          <path class="ln" d="M233.0,-0.0 L-12.0,-79.6"/>
          <path class="ln" d="M233.0,-0.0 L-12.0,79.6"/>
          <path class="ln" d="M61.8,-55.6 L83.9,48.4"/>
          <path class="ln" d="M0.0,-0.0 L61.8,-55.6"/>
          <path class="ln" d="M0.0,-0.0 L83.9,48.4"/>
          <path class="arc" d="M198.8,-11.1 A36,36 0 0 0 198.8,11.1"/>
          <text class="val" x="185.0" y="5.0" text-anchor="middle">x</text>
          <path class="arc" d="M19.1,11.0 A22,22 0 0 0 16.3,-14.7"/>
          <text class="val" x="41.8" y="0.6" text-anchor="middle">2x</text>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="22.2" cy="-68.5" r="3.2"/>
          <circle class="pt" cx="22.2" cy="68.5" r="3.2"/>
          <circle class="pt" cx="70.4" cy="-15.0" r="3.2"/>
          <circle class="pt" cx="61.8" cy="-55.6" r="3.2"/>
          <circle class="pt" cx="83.9" cy="48.4" r="3.2"/>
          <circle class="pt" cx="233.0" cy="-0.0" r="3.2"/>
          <text x="-16.0" y="5.5" text-anchor="end">O</text>
          <text x="22.2" y="-79.0" text-anchor="middle">T</text>
          <text x="19.5" y="89.7" text-anchor="middle">S</text>
          <text x="82.0" y="-6.4">C</text>
          <text x="64.6" y="-65.9" text-anchor="middle">A</text>
          <text x="86.7" y="69.7" text-anchor="middle">B</text>
          <text x="249.0" y="5.5">P</text>
          <text x="-16.1" y="-85.4" text-anchor="middle">E</text>
          <text x="-16.1" y="96.4" text-anchor="middle">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '-106 -113 400 226',
      caption: 'Şekil 74',
      label: 'Aynı şekilde [OT], [OC] ve [OS] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="72.0"/>
          <path class="ln" d="M233.0,-0.0 L-12.0,-79.6"/>
          <path class="ln" d="M233.0,-0.0 L-12.0,79.6"/>
          <path class="ln" d="M61.8,-55.6 L83.9,48.4"/>
          <path class="ln" d="M0.0,-0.0 L61.8,-55.6"/>
          <path class="ln" d="M0.0,-0.0 L83.9,48.4"/>
          <path class="arc" d="M198.8,-11.1 A36,36 0 0 0 198.8,11.1"/>
          <text class="val" x="185.0" y="5.0" text-anchor="middle">x</text>
          <path class="arc" d="M19.1,11.0 A22,22 0 0 0 16.3,-14.7"/>
          <text class="val" x="41.8" y="0.6" text-anchor="middle">2x</text>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="22.2" cy="-68.5" r="3.2"/>
          <circle class="pt" cx="22.2" cy="68.5" r="3.2"/>
          <circle class="pt" cx="70.4" cy="-15.0" r="3.2"/>
          <circle class="pt" cx="61.8" cy="-55.6" r="3.2"/>
          <circle class="pt" cx="83.9" cy="48.4" r="3.2"/>
          <circle class="pt" cx="233.0" cy="-0.0" r="3.2"/>
          <text x="-16.0" y="5.5" text-anchor="end">O</text>
          <text x="22.2" y="-79.0" text-anchor="middle">T</text>
          <text x="19.5" y="89.7" text-anchor="middle">S</text>
          <text x="82.0" y="-6.4">C</text>
          <text x="64.6" y="-65.9" text-anchor="middle">A</text>
          <text x="86.7" y="69.7" text-anchor="middle">B</text>
          <text x="249.0" y="5.5">P</text>
          <text x="-16.1" y="-85.4" text-anchor="middle">E</text>
          <text x="-16.1" y="96.4" text-anchor="middle">F</text>
          <path class="aux" d="M0.0,-0.0 L22.2,-68.5"/>
          <path class="aux" d="M0.0,-0.0 L70.4,-15.0"/>
          <path class="aux" d="M0.0,-0.0 L22.2,68.5"/>
        `,
    },
    given: [
      'O, çemberin merkezi',
      '[PE, T noktasında teğet',
      '[PF, S noktasında teğet',
      '[AB], C noktasında teğet',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde m(EPF) = x ve m(AOB) = 2x olduğuna göre, m(AOB) kaç derecedir?',
    choices: [
      { key: 'A', text: '56' },
      { key: 'B', text: '60' },
      { key: 'C', text: '64' },
      { key: 'D', text: '68' },
      { key: 'E', text: '72' },
    ],
    answer: 'E',
    hint: '[OT], [OC] ve [OS]’yi çiz; bir noktadan çizilen teğet parçaları eşit olduğundan [OA] ve [OB] açıortaydır.',
    solution: [
      {
        title: 'Açıortaylar',
        detail:
          '|AT| = |AC| ve |BC| = |BS| olduğundan [OA], TOC; [OB], COS açısının açıortayıdır. Bu yüzden m(AOB) = m(TOS) : 2.',
      },
      { title: 'OTPS dörtgeni', detail: 'm(OTP) = m(OSP) = 90° olduğundan m(TOS) = 180 − x.' },
      { title: 'Denklem', detail: '2x = (180 − x) : 2, 4x = 180 − x, x = 36°.' },
      { title: 'Sonuç', detail: 'm(AOB) = 2x = 72° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 75
  {
    id: 'circles-75',
    topic: 'Çap ve içte kesişen kirişler',
    figure: {
      viewBox: '-200 -141 400 286',
      caption: 'Şekil 75',
      label:
        'O merkezli, [BD] çaplı çember; A ve C çember üzerinde, [AC] çapı E noktasında kesiyor. [BA] ve [OC] çizilmiş, m(OCA) = 15°, m(DEA) = 85°, m(ABD) = x.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="110.0"/>
          <path class="ln" d="M-110.0,-0.0 L110.0,-0.0"/>
          <path class="ln" d="M-110.0,-0.0 L37.6,-103.4 L19.1,108.3"/>
          <path class="ln" d="M0.0,-0.0 L19.1,108.3"/>
          <path class="arc" d="M-70.0,-0.0 A40,40 0 0 0 -77.2,-22.9"/>
          <text class="val" x="-60.4" y="-10.6" text-anchor="middle">x</text>
          <path class="arc" d="M22.9,64.5 A44,44 0 0 0 11.5,65.0"/>
          <text class="val" x="-6.9" y="68.3" text-anchor="middle">15°</text>
          <path class="arc" d="M48.6,-0.0 A20,20 0 0 0 30.3,-19.9"/>
          <text class="val" x="56.6" y="-20.7" text-anchor="middle">85°</text>
          <circle class="pt" cx="-110.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="37.6" cy="-103.4" r="3.2"/>
          <circle class="pt" cx="19.1" cy="108.3" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="28.6" cy="-0.0" r="3.2"/>
          <text x="-126.0" y="5.5" text-anchor="end">B</text>
          <text x="126.0" y="5.5">D</text>
          <text x="43.1" y="-112.9" text-anchor="middle">A</text>
          <text x="21.9" y="129.6" text-anchor="middle">C</text>
          <text x="0.0" y="19.5" text-anchor="middle">O</text>
          <text x="41.7" y="14.7">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '-200 -141 400 286',
      caption: 'Şekil 75',
      label: 'Aynı şekilde [OA] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="110.0"/>
          <path class="ln" d="M-110.0,-0.0 L110.0,-0.0"/>
          <path class="ln" d="M-110.0,-0.0 L37.6,-103.4 L19.1,108.3"/>
          <path class="ln" d="M0.0,-0.0 L19.1,108.3"/>
          <path class="arc" d="M-70.0,-0.0 A40,40 0 0 0 -77.2,-22.9"/>
          <text class="val" x="-60.4" y="-10.6" text-anchor="middle">x</text>
          <path class="arc" d="M22.9,64.5 A44,44 0 0 0 11.5,65.0"/>
          <text class="val" x="-6.9" y="68.3" text-anchor="middle">15°</text>
          <path class="arc" d="M48.6,-0.0 A20,20 0 0 0 30.3,-19.9"/>
          <text class="val" x="56.6" y="-20.7" text-anchor="middle">85°</text>
          <circle class="pt" cx="-110.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="37.6" cy="-103.4" r="3.2"/>
          <circle class="pt" cx="19.1" cy="108.3" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="28.6" cy="-0.0" r="3.2"/>
          <text x="-126.0" y="5.5" text-anchor="end">B</text>
          <text x="126.0" y="5.5">D</text>
          <text x="43.1" y="-112.9" text-anchor="middle">A</text>
          <text x="21.9" y="129.6" text-anchor="middle">C</text>
          <text x="0.0" y="19.5" text-anchor="middle">O</text>
          <text x="41.7" y="14.7">E</text>
          <path class="aux" d="M0.0,-0.0 L37.6,-103.4"/>
        `,
    },
    given: ['m(OCA) = 15°', 'm(DEA) = 85°'],
    stem: [],
    ask: 'Yukarıdaki şekilde A ve C noktaları O merkezli [BD] çaplı çember üzerinde olduğuna göre, m(ABD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '35' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '50' },
    ],
    answer: 'B',
    hint: '[OA]’yı çiz; OAC ikizkenar üçgeninden AOC merkez açısını bul.',
    solution: [
      {
        title: 'Merkez açı',
        detail:
          '|OA| = |OC| olduğundan m(OAC) = 15°, m(AOC) = 180 − 30 = 150°; AD + DC yayları 150°.',
      },
      { title: 'Yarım çember', detail: 'DC + CB = 180° olduğundan CB − AD = 180 − 150 = 30°.' },
      {
        title: 'İçte kesişen kirişler',
        detail: 'm(DEA) = (AD + BC) : 2 = 85° olduğundan AD + BC = 170°.',
      },
      { title: 'AD yayı', detail: 'İki denklemden AD = (170 − 30) : 2 = 70°.' },
      { title: 'Sonuç', detail: 'x = m(ABD) = 70 : 2 = 35° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 76
  {
    id: 'circles-76',
    topic: 'Teğet, kesen ve eşit parçalar',
    figure: {
      viewBox: '-231 -222 400 257',
      caption: 'Şekil 76',
      label:
        'Çember; [PF, A noktasında çembere teğet, P noktasından çizilen kesen çemberi D ve B noktalarında kesiyor, [CA] kirişi [DB]’yi E noktasında kesiyor. [CE] ile [DE] eşit, m(BPF) = 30°, m(CAB) = 35°, m(BAF) = α.',
      svg: `
          <circle class="ln" cx="0.0" cy="-95.0" r="95.0"/>
          <path class="ln" d="M-197.5,-0.0 L128.2,-0.0"/>
          <path class="ln" d="M-197.5,-0.0 L72.8,-156.1"/>
          <path class="ln" d="M-32.5,-184.3 L0.0,-0.0 L72.8,-156.1"/>
          <path class="tick" d="M-20.1,-148.4 L-31.4,-143.3"/>
          <path class="tick" d="M-19.4,-144.4 L-30.7,-139.4"/>
          <path class="tick" d="M-59.8,-86.5 L-51.2,-77.6"/>
          <path class="tick" d="M-56.3,-88.5 L-47.7,-79.6"/>
          <path class="arc" d="M-147.5,-0.0 A50,50 0 0 0 -154.2,-25.0"/>
          <text class="val" x="-133.8" y="-12.1" text-anchor="middle">30°</text>
          <path class="arc" d="M12.7,-27.2 A30,30 0 0 0 -5.2,-29.5"/>
          <text class="val" x="6.3" y="-42.6" text-anchor="middle">35°</text>
          <path class="arc" d="M22.0,-0.0 A22,22 0 0 0 9.3,-19.9"/>
          <text class="val" x="28.7" y="-13.3" text-anchor="middle">α</text>
          <circle class="pt" cx="-197.5" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="128.2" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-89.3" cy="-62.5" r="3.2"/>
          <circle class="pt" cx="-32.5" cy="-184.3" r="3.2"/>
          <circle class="pt" cx="72.8" cy="-156.1" r="3.2"/>
          <circle class="pt" cx="-18.3" cy="-103.5" r="3.2"/>
          <text x="-202.3" y="18.7" text-anchor="middle">P</text>
          <text x="0.0" y="19.5" text-anchor="middle">A</text>
          <text x="128.2" y="19.5" text-anchor="middle">F</text>
          <text x="-104.3" y="-62.5" text-anchor="end">D</text>
          <text x="-38.0" y="-193.8" text-anchor="middle">C</text>
          <text x="85.0" y="-160.8">B</text>
          <text x="-11.3" y="-110.1">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '-231 -222 400 257',
      caption: 'Şekil 76',
      label: 'Aynı şekilde [CD] kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="0.0" cy="-95.0" r="95.0"/>
          <path class="ln" d="M-197.5,-0.0 L128.2,-0.0"/>
          <path class="ln" d="M-197.5,-0.0 L72.8,-156.1"/>
          <path class="ln" d="M-32.5,-184.3 L0.0,-0.0 L72.8,-156.1"/>
          <path class="tick" d="M-20.1,-148.4 L-31.4,-143.3"/>
          <path class="tick" d="M-19.4,-144.4 L-30.7,-139.4"/>
          <path class="tick" d="M-59.8,-86.5 L-51.2,-77.6"/>
          <path class="tick" d="M-56.3,-88.5 L-47.7,-79.6"/>
          <path class="arc" d="M-147.5,-0.0 A50,50 0 0 0 -154.2,-25.0"/>
          <text class="val" x="-133.8" y="-12.1" text-anchor="middle">30°</text>
          <path class="arc" d="M12.7,-27.2 A30,30 0 0 0 -5.2,-29.5"/>
          <text class="val" x="6.3" y="-42.6" text-anchor="middle">35°</text>
          <path class="arc" d="M22.0,-0.0 A22,22 0 0 0 9.3,-19.9"/>
          <text class="val" x="28.7" y="-13.3" text-anchor="middle">α</text>
          <circle class="pt" cx="-197.5" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="128.2" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-89.3" cy="-62.5" r="3.2"/>
          <circle class="pt" cx="-32.5" cy="-184.3" r="3.2"/>
          <circle class="pt" cx="72.8" cy="-156.1" r="3.2"/>
          <circle class="pt" cx="-18.3" cy="-103.5" r="3.2"/>
          <text x="-202.3" y="18.7" text-anchor="middle">P</text>
          <text x="0.0" y="19.5" text-anchor="middle">A</text>
          <text x="128.2" y="19.5" text-anchor="middle">F</text>
          <text x="-104.3" y="-62.5" text-anchor="end">D</text>
          <text x="-38.0" y="-193.8" text-anchor="middle">C</text>
          <text x="85.0" y="-160.8">B</text>
          <text x="-11.3" y="-110.1">E</text>
          <path class="aux" d="M-32.5,-184.3 L-89.3,-62.5"/>
        `,
    },
    given: ['[PF, A noktasında çembere teğet', 'm(BPF) = 30°', 'm(CAB) = 35°', '|CE| = |DE|'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAF) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'B',
    hint: '[CD]’yi çiz; CED ikizkenar üçgeninin taban açıları iki yayı eşitler.',
    solution: [
      { title: 'Çevre açı', detail: 'm(CAB) = 35° olduğundan CB yayı 70°.' },
      {
        title: 'İkizkenar üçgen',
        detail:
          '|CE| = |DE| olduğundan m(ACD) = m(CDB); bu çevre açılar AD ve CB yaylarını gördüğünden AD yayı da 70°.',
      },
      {
        title: 'Teğet-kesen açısı',
        detail: 'm(BPA) = (AB − AD) : 2 = 30° olduğundan AB − 70 = 60, AB yayı 130°.',
      },
      { title: 'Sonuç', detail: 'α teğet-kiriş açısıdır: α = 130 : 2 = 65° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 77
  {
    id: 'circles-77',
    topic: 'Paralel kiriş ve eşit kirişler',
    figure: {
      viewBox: '-212 -122 400 263',
      caption: 'Şekil 77',
      label:
        'O merkezli çember; [AB] kirişi [OC] yarıçapına paralel, [AB] ile [BD] eşit, [OB], [CD] ve [BD] çizilmiş, m(CDB) = 72°, m(DCO) = α.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="110.0"/>
          <path class="ln" d="M-89.0,-64.7 L89.0,-64.7"/>
          <path class="ln" d="M-110.0,-0.0 L0.0,-0.0 L89.0,-64.7"/>
          <path class="ln" d="M-110.0,-0.0 L34.0,104.6 L89.0,-64.7"/>
          <path class="tick" d="M-3.5,-70.7 L-0.5,-58.7"/>
          <path class="tick" d="M0.5,-70.7 L3.5,-58.7"/>
          <path class="tick" d="M68.3,18.5 L55.9,17.7"/>
          <path class="tick" d="M67.0,22.3 L54.7,21.5"/>
          <path class="arc" d="M42.0,79.9 A26,26 0 0 0 13.0,89.3"/>
          <text class="val" x="20.4" y="67.8" text-anchor="middle">72°</text>
          <path class="arc" d="M-82.5,20.0 A34,34 0 0 0 -76.0,-0.0"/>
          <text class="val" x="-66.3" y="19.2" text-anchor="middle">α</text>
          <circle class="pt" cx="-89.0" cy="-64.7" r="3.2"/>
          <circle class="pt" cx="89.0" cy="-64.7" r="3.2"/>
          <circle class="pt" cx="-110.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="34.0" cy="104.6" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <text x="-101.9" y="-68.6" text-anchor="end">A</text>
          <text x="101.9" y="-68.6">B</text>
          <text x="-126.0" y="5.5" text-anchor="end">C</text>
          <text x="38.9" y="125.3" text-anchor="middle">D</text>
          <text x="0.0" y="-6.5" text-anchor="middle">O</text>
        `,
    },
    solutionFigure: {
      viewBox: '-212 -122 400 263',
      caption: 'Şekil 77',
      label: 'Aynı şekilde [CO] kesikli uzatılarak çap çizilmiş.',
      svg: `
          <circle class="ln" cx="0.0" cy="-0.0" r="110.0"/>
          <path class="ln" d="M-89.0,-64.7 L89.0,-64.7"/>
          <path class="ln" d="M-110.0,-0.0 L0.0,-0.0 L89.0,-64.7"/>
          <path class="ln" d="M-110.0,-0.0 L34.0,104.6 L89.0,-64.7"/>
          <path class="tick" d="M-3.5,-70.7 L-0.5,-58.7"/>
          <path class="tick" d="M0.5,-70.7 L3.5,-58.7"/>
          <path class="tick" d="M68.3,18.5 L55.9,17.7"/>
          <path class="tick" d="M67.0,22.3 L54.7,21.5"/>
          <path class="arc" d="M42.0,79.9 A26,26 0 0 0 13.0,89.3"/>
          <text class="val" x="20.4" y="67.8" text-anchor="middle">72°</text>
          <path class="arc" d="M-82.5,20.0 A34,34 0 0 0 -76.0,-0.0"/>
          <text class="val" x="-66.3" y="19.2" text-anchor="middle">α</text>
          <circle class="pt" cx="-89.0" cy="-64.7" r="3.2"/>
          <circle class="pt" cx="89.0" cy="-64.7" r="3.2"/>
          <circle class="pt" cx="-110.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="34.0" cy="104.6" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <text x="-101.9" y="-68.6" text-anchor="end">A</text>
          <text x="101.9" y="-68.6">B</text>
          <text x="-126.0" y="5.5" text-anchor="end">C</text>
          <text x="38.9" y="125.3" text-anchor="middle">D</text>
          <text x="0.0" y="-6.5" text-anchor="middle">O</text>
          <path class="aux" d="M0.0,-0.0 L110.0,-0.0"/>
        `,
    },
    given: ['O, çemberin merkezi', '[AB] // [OC]', '|AB| = |BD|', 'm(CDB) = 72°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DCO) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '24' },
      { key: 'C', text: '30' },
      { key: 'D', text: '36' },
      { key: 'E', text: '42' },
    ],
    answer: 'D',
    hint: '[CO]’yu uzatıp [CK] çapını çiz; paralel kirişler arasında kalan yaylar eşittir.',
    solution: [
      { title: 'Çevre açı', detail: 'm(CDB) = 72° olduğundan A’dan geçen CB yayı 144°.' },
      {
        title: 'Paralel kirişler',
        detail:
          '[CK] çap olsun. [AB] // [CK] olduğundan CA = BK; CA + AB + BK = 180° ve CA + AB = 144° olduğundan BK = 36°, CA = 36° ve AB = 144 − 36 = 108°.',
      },
      {
        title: 'Eşit kirişler',
        detail: '|AB| = |BD| olduğundan BD yayı 108°; DK yayı 108 − 36 = 72°.',
      },
      {
        title: 'Sonuç',
        detail: 'α = m(DCK), DK yayını gören çevre açıdır: α = 72 : 2 = 36° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 78
  {
    id: 'circles-78',
    topic: 'Yarım çemberde kare',
    figure: {
      viewBox: '-200 -184 400 220',
      caption: 'Şekil 78',
      label:
        'O merkezli yarım çember; OABC karesinin C ve O köşeleri çapta, B köşesi yay üzerinde. [OA] uzatılarak yay üzerindeki D noktasına çizilmiş, K ∈ [CO]. [CK] ile [AD] eşit, [KB] ve [KD] çizilmiş, m(BKD) = α.',
      svg: `
          <path class="ln" d="M-149.9,-0.0 A149.9,149.9 0 0 1 149.9,-0.0"/>
          <path class="ln" d="M-149.9,0.0 L149.9,0.0"/>
          <path class="ln" d="M-106.0,-0.0 L-106.0,-106.0 L0.0,-106.0 L0.0,-0.0"/>
          <path class="ln" d="M0.0,-106.0 L0.0,-149.9"/>
          <path class="ln" d="M-106.0,-106.0 L-62.1,-0.0 L0.0,-149.9"/>
          <path class="ln" d="M-106.0,-10.0 L-96.0,-10.0 L-96.0,-0.0"/>
          <path class="ln" d="M0.0,-10.0 L-10.0,-10.0 L-10.0,-0.0"/>
          <path class="tick" d="M-85.5,-6.0 L-82.5,6.0"/>
          <path class="tick" d="M-6.0,-126.5 L6.0,-129.5"/>
          <path class="arc" d="M-52.9,-22.2 A24,24 0 0 0 -71.3,-22.2"/>
          <text class="val" x="-62.1" y="-31.0" text-anchor="middle">α</text>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-106.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-62.1" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-106.0" cy="-106.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-106.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-149.9" r="3.2"/>
          <text x="0.0" y="19.5" text-anchor="middle">O</text>
          <text x="-110.8" y="18.7" text-anchor="middle">C</text>
          <text x="-55.1" y="17.6">K</text>
          <text x="-117.3" y="-111.8" text-anchor="end">B</text>
          <text x="13.2" y="-105.3">A</text>
          <text x="0.0" y="-156.4" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '-200 -184 400 220',
      caption: 'Şekil 78',
      label: 'Aynı şekilde [OB] kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M-149.9,-0.0 A149.9,149.9 0 0 1 149.9,-0.0"/>
          <path class="ln" d="M-149.9,0.0 L149.9,0.0"/>
          <path class="ln" d="M-106.0,-0.0 L-106.0,-106.0 L0.0,-106.0 L0.0,-0.0"/>
          <path class="ln" d="M0.0,-106.0 L0.0,-149.9"/>
          <path class="ln" d="M-106.0,-106.0 L-62.1,-0.0 L0.0,-149.9"/>
          <path class="ln" d="M-106.0,-10.0 L-96.0,-10.0 L-96.0,-0.0"/>
          <path class="ln" d="M0.0,-10.0 L-10.0,-10.0 L-10.0,-0.0"/>
          <path class="tick" d="M-85.5,-6.0 L-82.5,6.0"/>
          <path class="tick" d="M-6.0,-126.5 L6.0,-129.5"/>
          <path class="arc" d="M-52.9,-22.2 A24,24 0 0 0 -71.3,-22.2"/>
          <text class="val" x="-62.1" y="-31.0" text-anchor="middle">α</text>
          <circle class="pt" cx="0.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-106.0" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-62.1" cy="-0.0" r="3.2"/>
          <circle class="pt" cx="-106.0" cy="-106.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-106.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-149.9" r="3.2"/>
          <text x="0.0" y="19.5" text-anchor="middle">O</text>
          <text x="-110.8" y="18.7" text-anchor="middle">C</text>
          <text x="-55.1" y="17.6">K</text>
          <text x="-117.3" y="-111.8" text-anchor="end">B</text>
          <text x="13.2" y="-105.3">A</text>
          <text x="0.0" y="-156.4" text-anchor="middle">D</text>
          <path class="aux" d="M0.0,-0.0 L-106.0,-106.0"/>
        `,
    },
    given: [
      'O merkezli yarım çemberde OABC kare',
      'D yay üzerinde, O, A, D doğrusal',
      '|CK| = |AD|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BKD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '52,5' },
      { key: 'D', text: '60' },
      { key: 'E', text: '67,5' },
    ],
    answer: 'A',
    hint: '[OB]’yi çiz; karenin köşegeni yarıçaptır. Kenara a de ve iki dik üçgenin kenar oranlarını karşılaştır.',
    solution: [
      {
        title: 'Yarıçap',
        detail: 'Karenin kenarı a olsun. |OB| = a√2 = r olduğundan |OD| = a√2, |AD| = a√2 − a.',
      },
      {
        title: 'KO uzunluğu',
        detail: '|CK| = a√2 − a olduğundan |KO| = a − (a√2 − a) = 2a − a√2 = a√2(√2 − 1).',
      },
      {
        title: 'Oranlar',
        detail:
          'BCK üçgeninde |CK| : |BC| = √2 − 1, DOK üçgeninde |KO| : |DO| = √2 − 1. Dik kenarları oranı √2 − 1 olan dik üçgenin dar açıları 22,5° ve 67,5°’dir.',
      },
      { title: 'Açılar', detail: 'Bu yüzden m(BKC) = m(DKO) = 67,5°.' },
      { title: 'Sonuç', detail: 'α = 180 − 67,5 − 67,5 = 45° bulunur.' },
    ],
  },
  // ---------------------------------------------------------------- 79
  {
    id: 'circles-79',
    topic: 'Eş merkezli çemberlerde teğet kiriş',
    figure: {
      viewBox: '-200 -164 400 336',
      caption: 'Şekil 79',
      label:
        'O merkezli iki eş merkezli çember; büyük çemberin [AB] kirişi içteki çembere E noktasında teğet. E, O, C, D noktaları aynı doğru üzerinde; C içteki, D dıştaki çember üzerinde.',
      svg: `
          <circle class="ln" cx="0.0" cy="0.0" r="143.0"/>
          <circle class="ln" cx="0.0" cy="0.0" r="55.0"/>
          <path class="ln" d="M-132.0,-55.0 L132.0,-55.0"/>
          <path class="ln" d="M0.0,-55.0 L0.0,143.0"/>
          <path class="ln" d="M10.0,-55.0 L10.0,-45.0 L0.0,-45.0"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-55.0" r="3.2"/>
          <circle class="pt" cx="-132.0" cy="-55.0" r="3.2"/>
          <circle class="pt" cx="132.0" cy="-55.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="55.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="143.0" r="3.2"/>
          <text x="8.0" y="5.0">O</text>
          <text x="0.0" y="-65.0" text-anchor="middle">E</text>
          <text x="-138.0" y="-63.0" text-anchor="end">A</text>
          <text x="138.0" y="-63.0">B</text>
          <text x="8.0" y="71.0">C</text>
          <text x="0.0" y="162.0" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '-200 -164 400 336',
      caption: 'Şekil 79',
      label: 'Aynı şekilde [OB] yarıçapı kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="0.0" cy="0.0" r="143.0"/>
          <circle class="ln" cx="0.0" cy="0.0" r="55.0"/>
          <path class="ln" d="M-132.0,-55.0 L132.0,-55.0"/>
          <path class="ln" d="M0.0,-55.0 L0.0,143.0"/>
          <path class="ln" d="M10.0,-55.0 L10.0,-45.0 L0.0,-45.0"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-55.0" r="3.2"/>
          <circle class="pt" cx="-132.0" cy="-55.0" r="3.2"/>
          <circle class="pt" cx="132.0" cy="-55.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="55.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="143.0" r="3.2"/>
          <text x="8.0" y="5.0">O</text>
          <text x="0.0" y="-65.0" text-anchor="middle">E</text>
          <text x="-138.0" y="-63.0" text-anchor="end">A</text>
          <text x="138.0" y="-63.0">B</text>
          <text x="8.0" y="71.0">C</text>
          <text x="0.0" y="162.0" text-anchor="middle">D</text>
          <path class="aux" d="M0.0,0.0 L132.0,-55.0"/>
        `,
    },
    given: [
      'O, çemberlerin ortak merkezi',
      '[AB], E noktasında içteki çembere teğet',
      '|OC| = 5 cm',
      '|CD| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| kaç cm dir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '22' },
      { key: 'D', text: '24' },
      { key: 'E', text: '26' },
    ],
    answer: 'D',
    hint: 'İçteki çemberin yarıçapı |OC|, dıştakinin yarıçapı |OD|’dir; [OB]’yi çizerek bir dik üçgen kur.',
    solution: [
      {
        title: 'Yarıçaplar',
        detail:
          'İçteki çemberin yarıçapı |OE| = |OC| = 5 cm, dıştakinin yarıçapı |OB| = |OD| = 5 + 8 = 13 cm’dir.',
      },
      {
        title: 'Teğet ve yarıçap',
        detail:
          '[AB], E noktasında teğet olduğundan [OE] ⊥ [AB]’dir; merkezden kirişe inen dikme kirişi ortalar, yani |AE| = |EB|.',
      },
      {
        title: 'Pisagor',
        detail: 'OEB dik üçgeninde |EB|² = 13² − 5² = 169 − 25 = 144, |EB| = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|AB| = 2 · 12 = 24 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 80
  {
    id: 'circles-80',
    topic: 'Teğet, çap ve kesen',
    figure: {
      viewBox: '-200 -170 400 340',
      caption: 'Şekil 80',
      label:
        'O merkezli çemberde [BD] çap; [AE ışını çembere B noktasında teğet. A noktasından çizilen kesen çemberi C ve D noktalarında kesiyor, [BC] kirişi çizilmiş.',
      svg: `
          <circle class="ln" cx="20.0" cy="-1.4" r="138.6"/>
          <path class="ln" d="M-140.0,-140.0 L124.0,-140.0"/>
          <path class="ln" d="M20.0,-140.0 L20.0,137.1"/>
          <path class="ln" d="M-140.0,-140.0 L20.0,137.1"/>
          <path class="ln" d="M20.0,-140.0 L-100.0,-70.7"/>
          <path class="ln" d="M30.0,-140.0 L30.0,-130.0 L20.0,-130.0"/>
          <path class="ln" d="M114.0,-145.0 L124.0,-140.0 L114.0,-135.0"/>
          <circle class="pt" cx="-140.0" cy="-140.0" r="3.2"/>
          <circle class="pt" cx="20.0" cy="-140.0" r="3.2"/>
          <circle class="pt" cx="-100.0" cy="-70.7" r="3.2"/>
          <circle class="pt" cx="20.0" cy="137.1" r="3.2"/>
          <circle class="pt" cx="20.0" cy="-1.4" r="3.2"/>
          <text x="-146.0" y="-135.0" text-anchor="end">A</text>
          <text x="16.0" y="-149.0" text-anchor="end">B</text>
          <text x="124.0" y="-149.0" text-anchor="middle">E</text>
          <text x="-109.0" y="-58.7" text-anchor="end">C</text>
          <text x="20.0" y="157.1" text-anchor="middle">D</text>
          <text x="28.0" y="3.6">O</text>
          <text class="val" x="-130.0" y="-91.4" text-anchor="end">2</text>
          <text class="val" x="-50.0" y="49.2" text-anchor="end">6</text>
        `,
    },
    solutionFigure: {
      viewBox: '-200 -170 400 340',
      caption: 'Şekil 80',
      label: 'Aynı şekilde [OC] yarıçapı kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="20.0" cy="-1.4" r="138.6"/>
          <path class="ln" d="M-140.0,-140.0 L124.0,-140.0"/>
          <path class="ln" d="M20.0,-140.0 L20.0,137.1"/>
          <path class="ln" d="M-140.0,-140.0 L20.0,137.1"/>
          <path class="ln" d="M20.0,-140.0 L-100.0,-70.7"/>
          <path class="ln" d="M30.0,-140.0 L30.0,-130.0 L20.0,-130.0"/>
          <path class="ln" d="M114.0,-145.0 L124.0,-140.0 L114.0,-135.0"/>
          <circle class="pt" cx="-140.0" cy="-140.0" r="3.2"/>
          <circle class="pt" cx="20.0" cy="-140.0" r="3.2"/>
          <circle class="pt" cx="-100.0" cy="-70.7" r="3.2"/>
          <circle class="pt" cx="20.0" cy="137.1" r="3.2"/>
          <circle class="pt" cx="20.0" cy="-1.4" r="3.2"/>
          <text x="-146.0" y="-135.0" text-anchor="end">A</text>
          <text x="16.0" y="-149.0" text-anchor="end">B</text>
          <text x="124.0" y="-149.0" text-anchor="middle">E</text>
          <text x="-109.0" y="-58.7" text-anchor="end">C</text>
          <text x="20.0" y="157.1" text-anchor="middle">D</text>
          <text x="28.0" y="3.6">O</text>
          <text class="val" x="-130.0" y="-91.4" text-anchor="end">2</text>
          <text class="val" x="-50.0" y="49.2" text-anchor="end">6</text>
          <path class="aux" d="M20.0,-1.4 L-100.0,-70.7"/>
        `,
    },
    given: [
      '[AE, O merkezli çembere B noktasında teğet',
      '[BD] çap',
      'A, C, D doğrusal',
      '|AC| = 2 cm',
      '|CD| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, çemberin yarıçapı kaç cm dir?',
    choices: [
      { key: 'A', text: '√6' },
      { key: 'B', text: '2√3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '3√2' },
      { key: 'E', text: '2√6' },
    ],
    answer: 'B',
    hint: 'Teğet, değme noktasındaki çapa diktir; ABD dik üçgeninde [BC] hangi rolü oynar?',
    solution: [
      {
        title: 'Dik üçgen',
        detail: 'Teğet, B’deki yarıçapa dik olduğundan m(ABD) = 90°’dir.',
      },
      {
        title: 'Çapı gören açı',
        detail:
          '[BD] çap olduğundan m(BCD) = 90°; yani [BC], ABD dik üçgeninin hipotenüse ait yüksekliğidir.',
      },
      {
        title: 'Öklid bağıntısı',
        detail: '|BD|² = |DC| · |DA| = 6 · (6 + 2) = 48, |BD| = 4√3 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Yarıçap |BD| : 2 = 2√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 81
  {
    id: 'circles-81',
    topic: 'Çeyrek çemberde dikdörtgen',
    figure: {
      viewBox: '-60 -306 400 334',
      caption: 'Şekil 81',
      label:
        'O merkezli çeyrek çember; OABC dikdörtgeninin B köşesi yay üzerinde, A ve E noktaları [OE] yarıçapı üzerinde, C ve D noktaları [OD] yarıçapı üzerinde. [BE] kirişi çizilmiş, |OC| = 12.',
      svg: `
          <path class="ln" d="M0.0,-286.0 A286.0,286.0 0 0 1 286.0,0.0"/>
          <path class="ln" d="M0.0,-286.0 L0.0,0.0 L286.0,0.0"/>
          <path class="ln" d="M0.0,0.0 L110.0,0.0 L110.0,-264.0 L0.0,-264.0 Z"/>
          <path class="ln" d="M110.0,-264.0 L286.0,0.0"/>
          <path class="ln" d="M10.0,0.0 L10.0,-10.0 L0.0,-10.0"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="-264.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-264.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-286.0" r="3.2"/>
          <circle class="pt" cx="286.0" cy="0.0" r="3.2"/>
          <text x="-8.0" y="16.0" text-anchor="end">O</text>
          <text x="110.0" y="20.0" text-anchor="middle">A</text>
          <text x="286.0" y="20.0" text-anchor="middle">E</text>
          <text x="115.0" y="-273.0">B</text>
          <text x="-8.0" y="-258.0" text-anchor="end">C</text>
          <text x="-8.0" y="-284.0" text-anchor="end">D</text>
          <text class="val" x="-8.0" y="-126.0" text-anchor="end">12</text>
        `,
    },
    solutionFigure: {
      viewBox: '-60 -306 400 334',
      caption: 'Şekil 81',
      label: 'Aynı şekilde [OB] köşegeni kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M0.0,-286.0 A286.0,286.0 0 0 1 286.0,0.0"/>
          <path class="ln" d="M0.0,-286.0 L0.0,0.0 L286.0,0.0"/>
          <path class="ln" d="M0.0,0.0 L110.0,0.0 L110.0,-264.0 L0.0,-264.0 Z"/>
          <path class="ln" d="M110.0,-264.0 L286.0,0.0"/>
          <path class="ln" d="M10.0,0.0 L10.0,-10.0 L0.0,-10.0"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="-264.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-264.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="-286.0" r="3.2"/>
          <circle class="pt" cx="286.0" cy="0.0" r="3.2"/>
          <text x="-8.0" y="16.0" text-anchor="end">O</text>
          <text x="110.0" y="20.0" text-anchor="middle">A</text>
          <text x="286.0" y="20.0" text-anchor="middle">E</text>
          <text x="115.0" y="-273.0">B</text>
          <text x="-8.0" y="-258.0" text-anchor="end">C</text>
          <text x="-8.0" y="-284.0" text-anchor="end">D</text>
          <text class="val" x="-8.0" y="-126.0" text-anchor="end">12</text>
          <path class="aux" d="M0.0,0.0 L110.0,-264.0"/>
        `,
    },
    given: [
      'O, çeyrek çemberin merkezi',
      'OABC bir dikdörtgen',
      '|OC| = 12 cm',
      'A(OABC) = 60 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BE| kaç cm dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '4√10' },
      { key: 'C', text: '6√5' },
      { key: 'D', text: '14' },
      { key: 'E', text: '4√13' },
    ],
    answer: 'E',
    hint: 'Alandan |OA|’yı bul; [OB] köşegeni çeyrek çemberin yarıçapıdır.',
    solution: [
      {
        title: 'Dikdörtgenin kenarı',
        detail: 'A(OABC) = |OA| · |OC| olduğundan |OA| = 60 : 12 = 5 cm, |AB| = |OC| = 12 cm.',
      },
      {
        title: 'Yarıçap',
        detail: '[OB] köşegeni yarıçaptır: |OB|² = 5² + 12² = 169, r = 13 cm.',
      },
      {
        title: 'AE uzunluğu',
        detail: '|OE| = 13 olduğundan |AE| = 13 − 5 = 8 cm.',
      },
      {
        title: 'Pisagor',
        detail:
          'BAE dik üçgeninde |BE|² = 8² + 12² = 64 + 144 = 208, |BE| = √208 = 4√13 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 82
  {
    id: 'circles-82',
    topic: 'Kenara teğet yay',
    figure: {
      viewBox: '-134 -190 400 222',
      caption: 'Şekil 82',
      label:
        'ABC üçgeninde A merkezli EDF yayı [BC] kenarına D noktasında teğet; E noktası [AB], F noktası [AC] üzerinde. |BD| = 8, |DC| = 20, |EB| = 2.',
      svg: `
          <path class="ln" d="M0.0,-165.0 L-88.0,0.0 L220.0,0.0 Z"/>
          <path class="ln" d="M132.0,-66.0 A165.0,165.0 0 0 1 -77.6,-19.4"/>
          <circle class="pt" cx="0.0" cy="-165.0" r="3.2"/>
          <circle class="pt" cx="-88.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="220.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="-77.6" cy="-19.4" r="3.2"/>
          <circle class="pt" cx="132.0" cy="-66.0" r="3.2"/>
          <text x="0.0" y="-175.0" text-anchor="middle">A</text>
          <text x="-94.0" y="16.0" text-anchor="end">B</text>
          <text x="226.0" y="16.0">C</text>
          <text x="0.0" y="20.0" text-anchor="middle">D</text>
          <text x="-85.6" y="-27.4" text-anchor="end">E</text>
          <text x="140.0" y="-70.0">F</text>
          <text class="val" x="-44.0" y="20.0" text-anchor="middle">8</text>
          <text class="val" x="110.0" y="20.0" text-anchor="middle">20</text>
          <text class="val" x="-92.8" y="-5.7" text-anchor="end">2</text>
        `,
    },
    solutionFigure: {
      viewBox: '-134 -190 400 222',
      caption: 'Şekil 82',
      label: 'Aynı şekilde [AD] yarıçapı kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M0.0,-165.0 L-88.0,0.0 L220.0,0.0 Z"/>
          <path class="ln" d="M132.0,-66.0 A165.0,165.0 0 0 1 -77.6,-19.4"/>
          <circle class="pt" cx="0.0" cy="-165.0" r="3.2"/>
          <circle class="pt" cx="-88.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="220.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="-77.6" cy="-19.4" r="3.2"/>
          <circle class="pt" cx="132.0" cy="-66.0" r="3.2"/>
          <text x="0.0" y="-175.0" text-anchor="middle">A</text>
          <text x="-94.0" y="16.0" text-anchor="end">B</text>
          <text x="226.0" y="16.0">C</text>
          <text x="0.0" y="20.0" text-anchor="middle">D</text>
          <text x="-85.6" y="-27.4" text-anchor="end">E</text>
          <text x="140.0" y="-70.0">F</text>
          <text class="val" x="-44.0" y="20.0" text-anchor="middle">8</text>
          <text class="val" x="110.0" y="20.0" text-anchor="middle">20</text>
          <text class="val" x="-92.8" y="-5.7" text-anchor="end">2</text>
          <path class="aux" d="M0.0,-165.0 L0.0,0.0"/>
        `,
    },
    given: [
      'ABC bir üçgen',
      'A merkezli EDF yayı, [BC] kenarına D noktasında teğet',
      '|BD| = 8 cm',
      '|DC| = 20 cm',
      '|EB| = 2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |FC| kaç cm dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '10' },
      { key: 'C', text: '12' },
      { key: 'D', text: '13' },
      { key: 'E', text: '15' },
    ],
    answer: 'B',
    hint: '[AD]’yi çiz: teğet noktasındaki yarıçap kenara diktir ve |AD| = |AE| = |AF|’dir.',
    solution: [
      {
        title: 'Teğet ve yarıçap',
        detail:
          '[AD] yarıçapı teğete dik olduğundan [AD] ⊥ [BC]; yarıçapa r dersek |AD| = |AE| = |AF| = r.',
      },
      {
        title: 'ABD dik üçgeni',
        detail: '|AB| = r + 2 olduğundan (r + 2)² = r² + 8², 4r + 4 = 64, r = 15 cm.',
      },
      {
        title: 'ADC dik üçgeni',
        detail: '|AC|² = 15² + 20² = 625, |AC| = 25 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|FC| = |AC| − |AF| = 25 − 15 = 10 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 83
  {
    id: 'circles-83',
    topic: 'Çevrel çemberde açıortay',
    figure: {
      viewBox: '-200 -180.2 400 360.4',
      caption: 'Şekil 83',
      label:
        'ABC üçgeninin çevrel çemberi çizilmiş; A açısının açıortayı [BC]’yi N noktasında, çemberi E noktasında kesiyor. |AB| = 12, |AC| = 15.',
      svg: `
          <circle class="ln" cx="0.0" cy="0.0" r="154.2"/>
          <path class="ln" d="M-38.2,-149.4 L-153.0,19.3 L153.0,19.3 Z"/>
          <path class="ln" d="M-38.2,-149.4 L0.0,154.2"/>
          <path class="arc" d="M-15.8,-129.5 A30.0,30.0 0 0 1 -34.5,-119.6"/>
          <path class="arc" d="M-34.5,-119.6 A30.0,30.0 0 0 1 -55.1,-124.6"/>
          <path class="tick" d="M-26.1,-126.4 L-22.3,-119.3"/>
          <path class="tick" d="M-44.3,-124.1 L-46.2,-116.3"/>
          <circle class="pt" cx="-38.2" cy="-149.4" r="3.2"/>
          <circle class="pt" cx="-153.0" cy="19.3" r="3.2"/>
          <circle class="pt" cx="153.0" cy="19.3" r="3.2"/>
          <circle class="pt" cx="-17.0" cy="19.3" r="3.2"/>
          <circle class="pt" cx="0.0" cy="154.2" r="3.2"/>
          <text x="-38.2" y="-159.4" text-anchor="middle">A</text>
          <text x="-161.0" y="24.3" text-anchor="end">B</text>
          <text x="161.0" y="24.3">C</text>
          <text x="-10.0" y="12.3">N</text>
          <text x="0.0" y="174.2" text-anchor="middle">E</text>
          <text class="val" x="-105.6" y="-65.1" text-anchor="end">12</text>
          <text class="val" x="67.4" y="-65.1">15</text>
        `,
    },
    solutionFigure: {
      viewBox: '-200 -180.2 400 360.4',
      caption: 'Şekil 83',
      label: 'Aynı şekilde [EC] kirişi kesikli çizilmiş.',
      svg: `
          <circle class="ln" cx="0.0" cy="0.0" r="154.2"/>
          <path class="ln" d="M-38.2,-149.4 L-153.0,19.3 L153.0,19.3 Z"/>
          <path class="ln" d="M-38.2,-149.4 L0.0,154.2"/>
          <path class="arc" d="M-15.8,-129.5 A30.0,30.0 0 0 1 -34.5,-119.6"/>
          <path class="arc" d="M-34.5,-119.6 A30.0,30.0 0 0 1 -55.1,-124.6"/>
          <path class="tick" d="M-26.1,-126.4 L-22.3,-119.3"/>
          <path class="tick" d="M-44.3,-124.1 L-46.2,-116.3"/>
          <circle class="pt" cx="-38.2" cy="-149.4" r="3.2"/>
          <circle class="pt" cx="-153.0" cy="19.3" r="3.2"/>
          <circle class="pt" cx="153.0" cy="19.3" r="3.2"/>
          <circle class="pt" cx="-17.0" cy="19.3" r="3.2"/>
          <circle class="pt" cx="0.0" cy="154.2" r="3.2"/>
          <text x="-38.2" y="-159.4" text-anchor="middle">A</text>
          <text x="-161.0" y="24.3" text-anchor="end">B</text>
          <text x="161.0" y="24.3">C</text>
          <text x="-10.0" y="12.3">N</text>
          <text x="0.0" y="174.2" text-anchor="middle">E</text>
          <text class="val" x="-105.6" y="-65.1" text-anchor="end">12</text>
          <text class="val" x="67.4" y="-65.1">15</text>
          <path class="aux" d="M0.0,154.2 L153.0,19.3"/>
        `,
    },
    given: ['[AE] açıortay', '|AB| = 12 cm', '|AC| = 15 cm', '|BC| = 18 cm'],
    stem: ['Yukarıdaki şekilde ABC üçgeninin çevrel çemberi veriliyor.'],
    ask: 'Buna göre, |AE| kaç cm dir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '21' },
      { key: 'D', text: '24' },
      { key: 'E', text: '27' },
    ],
    answer: 'A',
    hint: 'Önce açıortay teoremiyle |BN| ve |NC|’yi, sonra açıortay uzunluğunu bul.',
    solution: [
      {
        title: 'Açıortay teoremi',
        detail: '|BN| : |NC| = 12 : 15 ve |BN| + |NC| = 18 olduğundan |BN| = 8 cm, |NC| = 10 cm.',
      },
      {
        title: 'Açıortay uzunluğu',
        detail: '|AN|² = |AB| · |AC| − |BN| · |NC| = 180 − 80 = 100, |AN| = 10 cm.',
      },
      {
        title: 'Benzer üçgenler',
        detail:
          'm(ABC) = m(AEC) (aynı yayı gören çevre açılar) ve m(BAN) = m(EAC) olduğundan ABN ~ AEC; |AB| : |AE| = |AN| : |AC|.',
      },
      {
        title: 'Sonuç',
        detail: '|AE| = 12 · 15 : 10 = 18 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 84
  {
    id: 'circles-84',
    topic: 'Eşkenar üçgende teğet yay',
    figure: {
      viewBox: '-200 -236 400 262',
      caption: 'Şekil 84',
      label:
        'ABC eşkenar üçgeninde A merkezli çember yayı [BC] kenarına T noktasında teğet; D ve E noktaları yay üzerinde, [AD] ve [AE] çizilmiş, m(DAE) = 90°, [DE] kirişi çizilmiş. |AB| = 8.',
      svg: `
          <path class="ln" d="M0.0,-207.8 L-120.0,0.0 L120.0,0.0 Z"/>
          <path class="ln" d="M170.3,-88.6 A207.8,207.8 0 0 1 -170.3,-88.6"/>
          <path class="ln" d="M-147.0,-60.9 L0.0,-207.8 L147.0,-60.9"/>
          <path class="ln" d="M-147.0,-60.9 L147.0,-60.9"/>
          <path class="ln" d="M-7.1,-200.8 L0.0,-193.7 L7.1,-200.8"/>
          <circle class="pt" cx="0.0" cy="-207.8" r="3.2"/>
          <circle class="pt" cx="-120.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="120.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="-147.0" cy="-60.9" r="3.2"/>
          <circle class="pt" cx="147.0" cy="-60.9" r="3.2"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <text x="0.0" y="-217.8" text-anchor="middle">A</text>
          <text x="-126.0" y="16.0" text-anchor="end">B</text>
          <text x="126.0" y="16.0">C</text>
          <text x="0.0" y="20.0" text-anchor="middle">T</text>
          <text x="-155.0" y="-56.9" text-anchor="end">D</text>
          <text x="155.0" y="-56.9">E</text>
          <text class="val" x="-46.0" y="-98.0">8</text>
        `,
    },
    solutionFigure: {
      viewBox: '-200 -236 400 262',
      caption: 'Şekil 84',
      label: 'Aynı şekilde [AT] yarıçapı kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M0.0,-207.8 L-120.0,0.0 L120.0,0.0 Z"/>
          <path class="ln" d="M170.3,-88.6 A207.8,207.8 0 0 1 -170.3,-88.6"/>
          <path class="ln" d="M-147.0,-60.9 L0.0,-207.8 L147.0,-60.9"/>
          <path class="ln" d="M-147.0,-60.9 L147.0,-60.9"/>
          <path class="ln" d="M-7.1,-200.8 L0.0,-193.7 L7.1,-200.8"/>
          <circle class="pt" cx="0.0" cy="-207.8" r="3.2"/>
          <circle class="pt" cx="-120.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="120.0" cy="0.0" r="3.2"/>
          <circle class="pt" cx="-147.0" cy="-60.9" r="3.2"/>
          <circle class="pt" cx="147.0" cy="-60.9" r="3.2"/>
          <circle class="pt" cx="0.0" cy="0.0" r="3.2"/>
          <text x="0.0" y="-217.8" text-anchor="middle">A</text>
          <text x="-126.0" y="16.0" text-anchor="end">B</text>
          <text x="126.0" y="16.0">C</text>
          <text x="0.0" y="20.0" text-anchor="middle">T</text>
          <text x="-155.0" y="-56.9" text-anchor="end">D</text>
          <text x="155.0" y="-56.9">E</text>
          <text class="val" x="-46.0" y="-98.0">8</text>
          <path class="aux" d="M0.0,-207.8 L0.0,0.0"/>
          <path class="ln" d="M10.0,0.0 L10.0,-10.0 L0.0,-10.0"/>
        `,
    },
    given: [
      'ABC eşkenar üçgen',
      'A merkezli çember yayı T noktasında [BC]’ye teğet',
      '|AB| = 8 cm',
      'm(DAE) = 90°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DE| kaç cm dir?',
    choices: [
      { key: 'A', text: '4√3' },
      { key: 'B', text: '8' },
      { key: 'C', text: '4√6' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'Yarıçap [AT], eşkenar üçgenin yüksekliğidir.',
    solution: [
      {
        title: 'Yarıçap',
        detail:
          'Teğet noktasındaki yarıçap kenara dik olduğundan [AT] eşkenar üçgenin yüksekliğidir: |AT| = 8√3 : 2 = 4√3 cm.',
      },
      {
        title: 'İkizkenar dik üçgen',
        detail: '|AD| = |AE| = 4√3 cm ve m(DAE) = 90° olduğundan DAE ikizkenar dik üçgendir.',
      },
      {
        title: 'Sonuç',
        detail: '|DE| = 4√3 · √2 = 4√6 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 85
  {
    id: 'circles-85',
    topic: 'Çeyrek çemberde teğet çember',
    figure: {
      viewBox: '0 4 400 320',
      caption: 'Şekil 85',
      label:
        'O merkezli çeyrek çemberin içinde C merkezli çember [OA]’ya D, [OK]’ya F noktasında teğet ve çeyrek çembere E noktasında içten teğet. |OF| = 6, |FK| = 4.',
      svg: `
          <path class="ln" d="M340.0,300.0 A280.0,280.0 0 0 0 60.0,20.0"/>
          <path class="ln" d="M60.0,20.0 L60.0,300.0 L340.0,300.0"/>
          <path class="ln" d="M60.0,300.0 L292.5,144.0"/>
          <circle class="ln" cx="149.6" cy="132.0" r="89.6"/>
          <circle class="pt" cx="60.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="340.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="149.6" cy="132.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="132.0" r="3.2"/>
          <circle class="pt" cx="191.8" cy="52.9" r="3.2"/>
          <circle class="pt" cx="199.5" cy="206.4" r="3.2"/>
          <circle class="pt" cx="292.5" cy="144.0" r="3.2"/>
          <text x="52.0" y="24.0" text-anchor="end">A</text>
          <text x="340.0" y="320.0" text-anchor="middle">B</text>
          <text x="52.0" y="316.0" text-anchor="end">O</text>
          <text x="155.6" y="126.0">C</text>
          <text x="52.0" y="137.0" text-anchor="end">D</text>
          <text x="195.8" y="44.9">E</text>
          <text x="299.5" y="140.0">K</text>
          <text x="207.5" y="218.4">F</text>
          <text class="val" x="137.6" y="269.8" text-anchor="middle">6</text>
          <text class="val" x="253.8" y="191.8" text-anchor="middle">4</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 4 400 320',
      caption: 'Şekil 85',
      label: 'Aynı şekilde [CD] yarıçapı ile O, C ve E noktalarından geçen doğru kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M340.0,300.0 A280.0,280.0 0 0 0 60.0,20.0"/>
          <path class="ln" d="M60.0,20.0 L60.0,300.0 L340.0,300.0"/>
          <path class="ln" d="M60.0,300.0 L292.5,144.0"/>
          <circle class="ln" cx="149.6" cy="132.0" r="89.6"/>
          <path class="aux" d="M149.6,132.0 L60.0,132.0"/>
          <path class="aux" d="M60.0,300.0 L191.8,52.9"/>
          <path class="ln" d="M69.0,132.0 L69.0,141.0 L60.0,141.0"/>
          <circle class="pt" cx="60.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="340.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="149.6" cy="132.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="132.0" r="3.2"/>
          <circle class="pt" cx="191.8" cy="52.9" r="3.2"/>
          <circle class="pt" cx="199.5" cy="206.4" r="3.2"/>
          <circle class="pt" cx="292.5" cy="144.0" r="3.2"/>
          <text x="52.0" y="24.0" text-anchor="end">A</text>
          <text x="340.0" y="320.0" text-anchor="middle">B</text>
          <text x="52.0" y="316.0" text-anchor="end">O</text>
          <text x="155.6" y="126.0">C</text>
          <text x="52.0" y="137.0" text-anchor="end">D</text>
          <text x="195.8" y="44.9">E</text>
          <text x="299.5" y="140.0">K</text>
          <text x="207.5" y="218.4">F</text>
          <text class="val" x="137.6" y="269.8" text-anchor="middle">6</text>
          <text class="val" x="253.8" y="191.8" text-anchor="middle">4</text>
        `,
    },
    given: [
      '[OK] F noktasında ve [OA] D noktasında C merkezli çembere teğettir.',
      '|OF| = 6 cm',
      '|FK| = 4 cm',
    ],
    stem: ['O merkezli çeyrek çember ile C merkezli çember E noktasında içten teğettir.'],
    ask: 'Yukarıdaki verilere göre, C merkezli çemberin yarıçapı kaç cm dir?',
    choices: [
      { key: 'A', text: '5/2' },
      { key: 'B', text: '8/3' },
      { key: 'C', text: '3' },
      { key: 'D', text: '16/5' },
      { key: 'E', text: '10/3' },
    ],
    answer: 'D',
    hint: 'O’dan çizilen iki teğet parçası eşittir; |OD| = |OF| olur.',
    solution: [
      {
        title: 'Teğet parçaları',
        detail:
          'O noktasından çembere çizilen teğet parçaları eşit olduğundan |OD| = |OF| = 6 cm. Çeyrek çemberin yarıçapı |OK| = 6 + 4 = 10 cm.',
      },
      {
        title: 'İçten teğetlik',
        detail: 'O, C ve E doğrusaldır; küçük çemberin yarıçapı r ise |OC| = 10 − r olur.',
      },
      {
        title: 'Dik üçgen',
        detail: '[CD] ⊥ [OA] olduğundan ODC dik üçgendir: |OD| = 6, |DC| = r, |OC| = 10 − r.',
      },
      {
        title: 'Pisagor',
        detail: 'r² + 36 = (10 − r)² = 100 − 20r + r², buradan 20r = 64.',
      },
      {
        title: 'Sonuç',
        detail: 'r = 64 : 20 = 16/5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 86
  {
    id: 'circles-86',
    topic: 'Yarım çemberde kesen uzunluğu',
    figure: {
      viewBox: '-16 -6 400 186',
      caption: 'Şekil 86',
      label:
        'O merkezli, [AB] çaplı yarım çember; E ve D yay üzerinde, ED doğrusu AB doğrusunu C noktasında kesiyor. m(BD) = 15°, |ED| = 6√2, yarıçap 6.',
      svg: `
          <path class="ln" d="M276.0,146.0 A126.0,126.0 0 0 0 24.0,146.0"/>
          <path class="ln" d="M24.0,146.0 L345.0,146.0"/>
          <path class="ln" d="M117.4,24.3 L328.2,146.0"/>
          <circle class="pt" cx="24.0" cy="146.0" r="3.2"/>
          <circle class="pt" cx="276.0" cy="146.0" r="3.2"/>
          <circle class="pt" cx="150.0" cy="146.0" r="3.2"/>
          <circle class="pt" cx="271.7" cy="113.4" r="3.2"/>
          <circle class="pt" cx="117.4" cy="24.3" r="3.2"/>
          <circle class="pt" cx="328.2" cy="146.0" r="3.2"/>
          <text x="24.0" y="166.0" text-anchor="middle">A</text>
          <text x="150.0" y="166.0" text-anchor="middle">O</text>
          <text x="276.0" y="166.0" text-anchor="middle">B</text>
          <text x="328.2" y="166.0" text-anchor="middle">C</text>
          <text x="117.4" y="14.3" text-anchor="middle">E</text>
          <text x="279.7" y="107.4">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '-16 -6 400 186',
      caption: 'Şekil 86',
      label:
        'Aynı şekilde [OE], [OD] yarıçapları ve O’dan [ED] kirişine dik [OH] kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M276.0,146.0 A126.0,126.0 0 0 0 24.0,146.0"/>
          <path class="ln" d="M24.0,146.0 L345.0,146.0"/>
          <path class="ln" d="M117.4,24.3 L328.2,146.0"/>
          <path class="aux" d="M150.0,146.0 L117.4,24.3"/>
          <path class="aux" d="M150.0,146.0 L271.7,113.4"/>
          <path class="aux" d="M150.0,146.0 L194.5,68.8"/>
          <path class="ln" d="M202.3,73.3 L197.8,81.1 L190.0,76.6"/>
          <circle class="pt" cx="24.0" cy="146.0" r="3.2"/>
          <circle class="pt" cx="276.0" cy="146.0" r="3.2"/>
          <circle class="pt" cx="150.0" cy="146.0" r="3.2"/>
          <circle class="pt" cx="271.7" cy="113.4" r="3.2"/>
          <circle class="pt" cx="117.4" cy="24.3" r="3.2"/>
          <circle class="pt" cx="328.2" cy="146.0" r="3.2"/>
          <circle class="pt" cx="194.5" cy="68.8" r="3.2"/>
          <text x="190.5" y="58.8" text-anchor="end">H</text>
          <text x="24.0" y="166.0" text-anchor="middle">A</text>
          <text x="150.0" y="166.0" text-anchor="middle">O</text>
          <text x="276.0" y="166.0" text-anchor="middle">B</text>
          <text x="328.2" y="166.0" text-anchor="middle">C</text>
          <text x="117.4" y="14.3" text-anchor="middle">E</text>
          <text x="279.7" y="107.4">D</text>
        `,
    },
    given: ['m(BD) = 15°', '|ED| = 6√2 cm'],
    stem: ['Yukarıdaki şekilde O, yarım çemberin merkezidir.'],
    ask: 'Yarım çemberin yarıçapı 6 cm olduğuna göre, |DC| kaç cm dir?',
    choices: [
      { key: 'A', text: '3√3 − 3' },
      { key: 'B', text: '3√6 − 3√2' },
      { key: 'C', text: '6√3 − 6' },
      { key: 'D', text: '3√6 − 2√2' },
      { key: 'E', text: '6√2 − 6' },
    ],
    answer: 'B',
    hint: '|OE| = |OD| = 6 ve |ED| = 6√2 olduğunu fark et; ODE üçgeni nasıl bir üçgen?',
    solution: [
      {
        title: 'ODE üçgeni',
        detail:
          '|OE| = |OD| = 6 ve |ED| = 6√2 olduğundan 6² + 6² = (6√2)²; ODE ikizkenar dik üçgendir, m(ODE) = 45°.',
      },
      {
        title: 'ODC üçgeni',
        detail:
          'm(ODC) = 180° − 45° = 135° ve m(DOC) = m(BD) = 15° olduğundan m(OCD) = 180° − 135° − 15° = 30°.',
      },
      {
        title: 'Dikme',
        detail:
          'O’dan [ED] kirişine dikme [OH] çizilirse H kirişin orta noktasıdır: |OH| = |HD| = 3√2 cm.',
      },
      {
        title: '30° açı',
        detail: 'OHC dik üçgeninde m(C) = 30° olduğundan |HC| = |OH| · √3 = 3√6 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|DC| = |HC| − |HD| = 3√6 − 3√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 87
  {
    id: 'circles-87',
    topic: 'Teğet ve Öklid bağıntısı',
    figure: {
      viewBox: '0 78 400 226',
      caption: 'Şekil 87',
      label:
        'ABC üçgeninde [AB] çaplı, O merkezli yarım çember [BC] kenarını D noktasında kesiyor; [CA] yarım çembere A noktasında teğet. |BD| = 4, |AC| = 3√5.',
      svg: `
          <path class="ln" d="M182.0,101.0 L38.0,262.0 L362.0,262.0 Z"/>
          <path class="ln" d="M38.0,262.0 A108.0,108.0 0 0 0 182.0,101.0"/>
          <circle class="pt" cx="182.0" cy="101.0" r="3.2"/>
          <circle class="pt" cx="38.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="362.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="182.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="181.5" r="3.2"/>
          <text x="182.0" y="91.0" text-anchor="middle">A</text>
          <text x="30.0" y="278.0" text-anchor="end">B</text>
          <text x="370.0" y="278.0">C</text>
          <text x="188.0" y="280.0">D</text>
          <text x="102.0" y="181.5" text-anchor="end">O</text>
          <text class="val" x="110.0" y="254.0" text-anchor="middle">4</text>
          <text class="val" x="280.0" y="175.5">3√5</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 78 400 226',
      caption: 'Şekil 87',
      label: 'Aynı şekilde [AD] kesikli çizilmiş ve [BC]’ye dik işaretlenmiş.',
      svg: `
          <path class="ln" d="M182.0,101.0 L38.0,262.0 L362.0,262.0 Z"/>
          <path class="ln" d="M38.0,262.0 A108.0,108.0 0 0 0 182.0,101.0"/>
          <path class="aux" d="M182.0,101.0 L182.0,262.0"/>
          <path class="ln" d="M191.0,262.0 L191.0,253.0 L182.0,253.0"/>
          <circle class="pt" cx="182.0" cy="101.0" r="3.2"/>
          <circle class="pt" cx="38.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="362.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="182.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="181.5" r="3.2"/>
          <text x="182.0" y="91.0" text-anchor="middle">A</text>
          <text x="30.0" y="278.0" text-anchor="end">B</text>
          <text x="370.0" y="278.0">C</text>
          <text x="188.0" y="280.0">D</text>
          <text x="102.0" y="181.5" text-anchor="end">O</text>
          <text class="val" x="110.0" y="254.0" text-anchor="middle">4</text>
          <text class="val" x="280.0" y="175.5">3√5</text>
        `,
    },
    given: [],
    stem: ['ABC bir üçgen ve [CA], [AB] çaplı ve O merkezli yarım çembere A noktasında teğettir.'],
    ask: '|BD| = 4 cm, |AC| = 3√5 cm olduğuna göre, çemberin yarıçapı kaç cm dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '2√3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '3√2' },
      { key: 'E', text: '5' },
    ],
    answer: 'A',
    hint: 'Çapı gören çevre açı 90° dir; [AD] çizince ABC dik üçgeninde yükseklik elde edersin.',
    solution: [
      {
        title: 'Dik açılar',
        detail:
          'Teğet, yarıçapa diktir: m(BAC) = 90°. D çember üzerinde ve [AB] çap olduğundan m(ADB) = 90°; [AD], ABC dik üçgeninin yüksekliğidir.',
      },
      {
        title: 'Öklid bağıntısı',
        detail: '|AC|² = |CD| · |CB|: 45 = |CD| · (|CD| + 4), buradan |CD| = 5 ve |BC| = 9 cm.',
      },
      {
        title: 'Çap',
        detail: '|AB|² = |BD| · |BC| = 4 · 9 = 36, |AB| = 6 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Yarıçap |AB| : 2 = 3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 88
  {
    id: 'circles-88',
    topic: 'Teğet-kiriş açısı ve uzunluk',
    figure: {
      viewBox: '4 126 400 162',
      caption: 'Şekil 88',
      label:
        'O merkezli, [BC] çaplı yarım çember; D, BC doğrusu üzerinde C’nin ötesinde; [DA yarım çembere A noktasında teğet; [AB] çizilmiş, E noktası [AB] üzerinde ve [EO] ⊥ [BD]. |EO| = 2.',
      svg: `
          <path class="ln" d="M255.8,262.0 A103.9,103.9 0 0 0 48.0,262.0"/>
          <path class="ln" d="M48.0,262.0 L359.8,262.0"/>
          <path class="ln" d="M48.0,262.0 L203.9,172.0"/>
          <path class="ln" d="M359.8,262.0 L146.7,139.0"/>
          <path class="ln" d="M151.9,202.0 L151.9,262.0"/>
          <path class="ln" d="M160.9,262.0 L160.9,253.0 L151.9,253.0"/>
          <circle class="pt" cx="203.9" cy="172.0" r="3.2"/>
          <circle class="pt" cx="48.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="151.9" cy="262.0" r="3.2"/>
          <circle class="pt" cx="255.8" cy="262.0" r="3.2"/>
          <circle class="pt" cx="359.8" cy="262.0" r="3.2"/>
          <circle class="pt" cx="151.9" cy="202.0" r="3.2"/>
          <text x="205.9" y="160.0" text-anchor="middle">A</text>
          <text x="48.0" y="282.0" text-anchor="middle">B</text>
          <text x="151.9" y="282.0" text-anchor="middle">O</text>
          <text x="255.8" y="282.0" text-anchor="middle">C</text>
          <text x="359.8" y="282.0" text-anchor="middle">D</text>
          <text x="147.9" y="192.0" text-anchor="end">E</text>
          <text class="val" x="143.9" y="238.0" text-anchor="end">2</text>
        `,
    },
    solutionFigure: {
      viewBox: '4 126 400 162',
      caption: 'Şekil 88',
      label: 'Aynı şekilde [OA] yarıçapı kesikli çizilmiş ve teğete dik işaretlenmiş.',
      svg: `
          <path class="ln" d="M255.8,262.0 A103.9,103.9 0 0 0 48.0,262.0"/>
          <path class="ln" d="M48.0,262.0 L359.8,262.0"/>
          <path class="ln" d="M48.0,262.0 L203.9,172.0"/>
          <path class="ln" d="M359.8,262.0 L146.7,139.0"/>
          <path class="ln" d="M151.9,202.0 L151.9,262.0"/>
          <path class="ln" d="M160.9,262.0 L160.9,253.0 L151.9,253.0"/>
          <path class="aux" d="M151.9,262.0 L203.9,172.0"/>
          <path class="ln" d="M199.4,179.8 L207.2,184.3 L211.7,176.5"/>
          <circle class="pt" cx="203.9" cy="172.0" r="3.2"/>
          <circle class="pt" cx="48.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="151.9" cy="262.0" r="3.2"/>
          <circle class="pt" cx="255.8" cy="262.0" r="3.2"/>
          <circle class="pt" cx="359.8" cy="262.0" r="3.2"/>
          <circle class="pt" cx="151.9" cy="202.0" r="3.2"/>
          <text x="205.9" y="160.0" text-anchor="middle">A</text>
          <text x="48.0" y="282.0" text-anchor="middle">B</text>
          <text x="151.9" y="282.0" text-anchor="middle">O</text>
          <text x="255.8" y="282.0" text-anchor="middle">C</text>
          <text x="359.8" y="282.0" text-anchor="middle">D</text>
          <text x="147.9" y="192.0" text-anchor="end">E</text>
          <text class="val" x="143.9" y="238.0" text-anchor="end">2</text>
        `,
    },
    given: [
      '[DA, O merkezli yarım çembere A noktasında teğet',
      '[EO] ⊥ [BD]',
      '|AB| = |AD|',
      '|EO| = 2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '4√3' },
      { key: 'C', text: '8' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '12' },
    ],
    answer: 'D',
    hint: '|AB| = |AD| olduğundan m(ABD) = m(ADB); teğet-kiriş açısını ve merkez açıyı bu açı cinsinden yaz.',
    solution: [
      {
        title: 'İkizkenar üçgen',
        detail: '|AB| = |AD| olduğundan m(ABD) = m(ADB) = β.',
      },
      {
        title: 'Merkez açı',
        detail: 'm(ABC) = β çevre açısı AC yayını gördüğünden m(AOC) = 2β.',
      },
      {
        title: 'Teğet',
        detail: '[OA] ⊥ [AD] olduğundan OAD üçgeninde 2β + β = 90°, β = 30°.',
      },
      {
        title: 'Yarıçap',
        detail: 'EOB dik üçgeninde m(B) = 30° olduğundan |OB| = |EO| · √3 = 2√3 cm.',
      },
      {
        title: 'OAD üçgeni',
        detail: 'm(D) = 30° karşısındaki |OA| = 2√3 olduğundan |OD| = 2 · 2√3 = 4√3 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|BD| = |BO| + |OD| = 2√3 + 4√3 = 6√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 89
  {
    id: 'circles-89',
    topic: 'Teğet parçaları ve benzerlik',
    figure: {
      viewBox: '6 50 400 224',
      caption: 'Şekil 89',
      label:
        'P noktasından çembere çizilen [PA ve [PB ışınları çembere A ve B noktalarında teğet; [CD], E noktasında çembere teğet ve [AB]’ye paralel. |AC| = 3, |PC| = 9.',
      svg: `
          <circle class="ln" cx="116.6" cy="166.0" r="84.9"/>
          <path class="ln" d="M144.9,86.0 L144.9,246.0"/>
          <path class="ln" d="M371.2,166.0 L103.4,71.3"/>
          <path class="ln" d="M371.2,166.0 L103.4,260.7"/>
          <path class="ln" d="M201.5,106.0 L201.5,226.0"/>
          <circle class="pt" cx="144.9" cy="86.0" r="3.2"/>
          <circle class="pt" cx="144.9" cy="246.0" r="3.2"/>
          <circle class="pt" cx="201.5" cy="106.0" r="3.2"/>
          <circle class="pt" cx="201.5" cy="226.0" r="3.2"/>
          <circle class="pt" cx="201.5" cy="166.0" r="3.2"/>
          <circle class="pt" cx="371.2" cy="166.0" r="3.2"/>
          <text x="140.9" y="76.0" text-anchor="middle">A</text>
          <text x="140.9" y="268.0" text-anchor="middle">B</text>
          <text x="205.5" y="96.0">C</text>
          <text x="205.5" y="246.0">D</text>
          <text x="208.5" y="171.0">E</text>
          <text x="380.2" y="171.0">P</text>
          <text class="val" x="173.2" y="86.0" text-anchor="middle">3</text>
          <text class="val" x="288.4" y="126.0" text-anchor="middle">9</text>
        `,
    },
    given: ['[CD], E noktasında çembere teğet', '[CD] // [AB]', '|AC| = 3 cm', '|PC| = 9 cm'],
    stem: ['Şekilde [PA ve [PB ışınları çembere A ve B noktalarında teğettir.'],
    ask: 'Yukarıdaki verilere göre, PAB üçgeninin çevresi kaç cm dir?',
    choices: [
      { key: 'A', text: '28' },
      { key: 'B', text: '30' },
      { key: 'C', text: '32' },
      { key: 'D', text: '34' },
      { key: 'E', text: '36' },
    ],
    answer: 'C',
    hint: 'Aynı noktadan çizilen teğet parçaları eşittir: |CE| = |CA|, |DE| = |DB|.',
    solution: [
      {
        title: 'Teğet parçaları',
        detail: '|PA| = |PB| = 9 + 3 = 12 cm, |PD| = |PC| = 9 cm ve |DB| = |CA| = 3 cm.',
      },
      {
        title: '[CD] uzunluğu',
        detail: '|CE| = |CA| = 3 ve |DE| = |DB| = 3 olduğundan |CD| = 6 cm.',
      },
      {
        title: 'Benzerlik',
        detail: '[CD] // [AB] olduğundan PCD ~ PAB: |CD| : |AB| = |PC| : |PA| = 9 : 12.',
      },
      {
        title: '[AB] uzunluğu',
        detail: '|AB| = 6 · 12 : 9 = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Çevre(PAB) = 12 + 12 + 8 = 32 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 90
  {
    id: 'circles-90',
    topic: 'Çeyrek çemberde kiriş ve kesen',
    figure: {
      viewBox: '0 44 400 216',
      caption: 'Şekil 90',
      label:
        'AOB dik üçgeninde O merkezli, [OA] yarıçaplı çeyrek çember [AB]’yi D, [OB]’yi C noktasında kesiyor; [DC] çizilmiş. |BC| = 5, |DC| = √10, |BD| = x.',
      svg: `
          <path class="ln" d="M365.0,67.0 L35.0,232.0 L365.0,232.0 Z"/>
          <path class="ln" d="M365.0,67.0 A165.0,165.0 0 0 0 200.0,232.0"/>
          <path class="ln" d="M233.0,133.0 L200.0,232.0"/>
          <path class="ln" d="M356.0,232.0 L356.0,223.0 L365.0,223.0"/>
          <circle class="pt" cx="365.0" cy="67.0" r="3.2"/>
          <circle class="pt" cx="35.0" cy="232.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="232.0" r="3.2"/>
          <circle class="pt" cx="233.0" cy="133.0" r="3.2"/>
          <circle class="pt" cx="365.0" cy="232.0" r="3.2"/>
          <text x="365.0" y="57.0" text-anchor="middle">A</text>
          <text x="27.0" y="248.0" text-anchor="end">B</text>
          <text x="373.0" y="248.0">O</text>
          <text x="200.0" y="252.0" text-anchor="middle">C</text>
          <text x="231.0" y="121.0" text-anchor="middle">D</text>
          <text class="val" x="117.5" y="252.0" text-anchor="middle">5</text>
          <text class="val" x="128.0" y="172.5" text-anchor="middle">x</text>
          <text class="val" x="224.5" y="186.5">√10</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 44 400 216',
      caption: 'Şekil 90',
      label: 'Aynı şekilde C’den [AB]’ye dik [CH] kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M365.0,67.0 L35.0,232.0 L365.0,232.0 Z"/>
          <path class="ln" d="M365.0,67.0 A165.0,165.0 0 0 0 200.0,232.0"/>
          <path class="ln" d="M233.0,133.0 L200.0,232.0"/>
          <path class="ln" d="M356.0,232.0 L356.0,223.0 L365.0,223.0"/>
          <path class="aux" d="M200.0,232.0 L167.0,166.0"/>
          <path class="ln" d="M175.0,162.0 L179.1,170.0 L171.0,174.0"/>
          <circle class="pt" cx="365.0" cy="67.0" r="3.2"/>
          <circle class="pt" cx="35.0" cy="232.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="232.0" r="3.2"/>
          <circle class="pt" cx="233.0" cy="133.0" r="3.2"/>
          <circle class="pt" cx="365.0" cy="232.0" r="3.2"/>
          <circle class="pt" cx="167.0" cy="166.0" r="3.2"/>
          <text x="161.0" y="158.0" text-anchor="end">H</text>
          <text x="365.0" y="57.0" text-anchor="middle">A</text>
          <text x="27.0" y="248.0" text-anchor="end">B</text>
          <text x="373.0" y="248.0">O</text>
          <text x="200.0" y="252.0" text-anchor="middle">C</text>
          <text x="231.0" y="121.0" text-anchor="middle">D</text>
          <text class="val" x="117.5" y="252.0" text-anchor="middle">5</text>
          <text class="val" x="128.0" y="172.5" text-anchor="middle">x</text>
          <text class="val" x="224.5" y="186.5">√10</text>
        `,
    },
    given: ['AOB dik üçgen', 'O, çeyrek çemberin merkezi', '|DC| = √10 cm', '|BC| = 5 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '2√5' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' },
      { key: 'E', text: '3√5' },
    ],
    answer: 'E',
    hint: '[AC] kirişi 90° lik yayı görür; D’deki çevre açıyı bulup m(BDC)’yi hesapla.',
    solution: [
      {
        title: 'Çevre açı',
        detail:
          'A, D, C aynı çember üzerinde ve AC yayı 90° olduğundan m(ADC) = 180° − 45° = 135°, m(BDC) = 45°.',
      },
      {
        title: 'Dikme',
        detail:
          'C’den [AB]’ye dikme [CH] çizilirse CHD ikizkenar dik üçgen olur: |CH| = |HD| = √10 : √2 = √5 cm.',
      },
      {
        title: 'BHC dik üçgeni',
        detail: '|BH|² = |BC|² − |CH|² = 25 − 5 = 20, |BH| = 2√5 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'x = |BH| + |HD| = 2√5 + √5 = 3√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 91
  {
    id: 'circles-91',
    topic: 'Eş merkezli yaylarda yol',
    figure: {
      viewBox: '0 0 400 328',
      caption: 'Şekil 91',
      label:
        'O merkezli iki çeyrek çember; iç yay C’den D’ye, dış yay A’dan B’ye uzanıyor. C ve A, [OA] üzerinde; K, AB yayı üzerinde. |OC| = 3, |CA| = 6.',
      svg: `
          <path class="ln" d="M70.0,30.0 L70.0,300.0 L340.0,300.0"/>
          <path class="ln" d="M70.0,30.0 A270.0,270.0 0 0 1 340.0,300.0"/>
          <path class="ln" d="M70.0,210.0 A90.0,90.0 0 0 1 160.0,300.0"/>
          <path class="ln" d="M79.0,300.0 L79.0,291.0 L70.0,291.0"/>
          <circle class="pt" cx="70.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="340.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="205.0" cy="66.2" r="3.2"/>
          <text x="62.0" y="318.0" text-anchor="end">O</text>
          <text x="70.0" y="20.0" text-anchor="middle">A</text>
          <text x="340.0" y="320.0" text-anchor="middle">B</text>
          <text x="62.0" y="215.0" text-anchor="end">C</text>
          <text x="160.0" y="320.0" text-anchor="middle">D</text>
          <text x="211.0" y="58.2">K</text>
          <text class="val" x="62.0" y="260.0" text-anchor="end">3</text>
          <text class="val" x="62.0" y="170.0" text-anchor="end">6</text>
        `,
    },
    given: ['|OC| = 3 birim', '|CA| = 6 birim'],
    stem: [
      'C ve A noktalarındaki iki karınca, O merkezli CD ve AB çeyrek yayları üzerinde aynı hızla hareket etmektedir.',
      'C noktasından yola çıkan karınca D noktasına geldiğinde, A noktasından yola çıkan karınca K noktasına gelmektedir.',
    ],
    ask: 'Buna göre, |KB| yayının uzunluğu kaç π birimdir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '5/2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '7/2' },
      { key: 'E', text: '4' },
    ],
    answer: 'C',
    hint: 'İki karınca aynı sürede eşit yol alır; önce küçük çeyrek yayın uzunluğunu bul.',
    solution: [
      { title: 'Küçük yay', detail: 'Yarıçap 3 olduğundan CD yayı = 2π · 3 / 4 = 3π/2 birim.' },
      {
        title: 'Büyük yay',
        detail: 'Yarıçap 3 + 6 = 9 olduğundan AB yayı = 2π · 9 / 4 = 9π/2 birim.',
      },
      { title: 'Eşit yol', detail: 'A’dan çıkan karınca da 3π/2 birim yol alır: AK yayı = 3π/2.' },
      { title: 'Sonuç', detail: '|KB| = 9π/2 − 3π/2 = 3π birim bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 92
  {
    id: 'circles-92',
    topic: 'Yay uzunluğu ve dik üçgende kenarortay',
    figure: {
      viewBox: '-4 36 400 254',
      caption: 'Şekil 92',
      label:
        'O merkezli, [OA] ve [OD] yarıçaplı çeyrek çember; C, OD doğrusu üzerinde D’nin ötesinde; [AC] yayı B noktasında kesiyor. |AB| = |BC|.',
      svg: `
          <path class="ln" d="M20.0,64.0 L20.0,262.0 L362.9,262.0"/>
          <path class="ln" d="M20.0,64.0 A198.0,198.0 0 0 1 218.0,262.0"/>
          <path class="ln" d="M20.0,64.0 L362.9,262.0"/>
          <path class="ln" d="M29.0,262.0 L29.0,253.0 L20.0,253.0"/>
          <path class="tick" d="M104.8,106.1 L102.3,118.4"/>
          <path class="tick" d="M109.2,108.6 L106.6,120.9"/>
          <path class="tick" d="M276.3,205.1 L273.8,217.4"/>
          <path class="tick" d="M280.6,207.6 L278.1,219.9"/>
          <circle class="pt" cx="20.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="20.0" cy="64.0" r="3.2"/>
          <circle class="pt" cx="191.5" cy="163.0" r="3.2"/>
          <circle class="pt" cx="218.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="362.9" cy="262.0" r="3.2"/>
          <text x="16.0" y="282.0" text-anchor="middle">O</text>
          <text x="12.0" y="68.0" text-anchor="end">A</text>
          <text x="193.5" y="149.0">B</text>
          <text x="218.0" y="282.0" text-anchor="middle">D</text>
          <text x="362.9" y="282.0" text-anchor="middle">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '-4 36 400 254',
      caption: 'Şekil 92',
      label: 'Aynı şekilde [OB] yarıçapı kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M20.0,64.0 L20.0,262.0 L362.9,262.0"/>
          <path class="ln" d="M20.0,64.0 A198.0,198.0 0 0 1 218.0,262.0"/>
          <path class="ln" d="M20.0,64.0 L362.9,262.0"/>
          <path class="ln" d="M29.0,262.0 L29.0,253.0 L20.0,253.0"/>
          <path class="tick" d="M104.8,106.1 L102.3,118.4"/>
          <path class="tick" d="M109.2,108.6 L106.6,120.9"/>
          <path class="tick" d="M276.3,205.1 L273.8,217.4"/>
          <path class="tick" d="M280.6,207.6 L278.1,219.9"/>
          <path class="aux" d="M20.0,262.0 L191.5,163.0"/>
          <circle class="pt" cx="20.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="20.0" cy="64.0" r="3.2"/>
          <circle class="pt" cx="191.5" cy="163.0" r="3.2"/>
          <circle class="pt" cx="218.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="362.9" cy="262.0" r="3.2"/>
          <text x="16.0" y="282.0" text-anchor="middle">O</text>
          <text x="12.0" y="68.0" text-anchor="end">A</text>
          <text x="193.5" y="149.0">B</text>
          <text x="218.0" y="282.0" text-anchor="middle">D</text>
          <text x="362.9" y="282.0" text-anchor="middle">C</text>
        `,
    },
    given: ['AOC bir dik üçgen', '|AB| = |BC|'],
    stem: ['Yukarıdaki şekilde, O merkezli çeyrek çemberin yarıçapı 9 cm dir.'],
    ask: 'Buna göre, BD yayının uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: 'π' },
      { key: 'B', text: '3π/2' },
      { key: 'C', text: '2π' },
      { key: 'D', text: '3π' },
      { key: 'E', text: '9π/2' },
    ],
    answer: 'B',
    hint: 'Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısıdır; [OB]’yi çiz.',
    solution: [
      { title: 'Kenarortay', detail: 'B, [AC]’nin orta noktası olduğundan |OB| = |AC| / 2.' },
      { title: 'Hipotenüs', detail: '|OB| = 9 yarıçap olduğundan |AC| = 18 = 2 · |OA|.' },
      {
        title: 'Açılar',
        detail:
          'Karşısındaki kenar hipotenüsün yarısı olduğundan m(OCA) = 30°; |OB| = |BC| ile m(BOC) = 30°.',
      },
      { title: 'Sonuç', detail: 'BD yayı = 2π · 9 · 30 / 360 = 3π/2 cm bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 93
  {
    id: 'circles-93',
    topic: 'Teğet, kesen ve yarım çemberde kare',
    figure: {
      viewBox: '8 80 400 224',
      caption: 'Şekil 93',
      label:
        'O merkezli, [AB] çaplı yarım çember; [BC] B noktasında teğet; [AC] yarım çemberi D noktasında kesiyor ve E üzerinde; EOFG karesinin O ve F köşeleri [AB] üzerinde.',
      svg: `
          <path class="ln" d="M32.1,280.0 A155.9,155.9 0 0 1 343.9,280.0"/>
          <path class="ln" d="M32.1,280.0 L343.9,280.0 L343.9,100.0"/>
          <path class="ln" d="M32.1,280.0 L343.9,100.0"/>
          <path class="ln" d="M188.0,280.0 L188.0,190.0 L278.0,190.0 L278.0,280.0"/>
          <path class="ln" d="M197.0,280.0 L197.0,271.0 L188.0,271.0"/>
          <path class="ln" d="M334.9,280.0 L334.9,271.0 L343.9,271.0"/>
          <circle class="pt" cx="32.1" cy="280.0" r="3.2"/>
          <circle class="pt" cx="343.9" cy="280.0" r="3.2"/>
          <circle class="pt" cx="343.9" cy="100.0" r="3.2"/>
          <circle class="pt" cx="265.9" cy="145.0" r="3.2"/>
          <circle class="pt" cx="188.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="188.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="278.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="278.0" cy="190.0" r="3.2"/>
          <text x="26.1" y="298.0" text-anchor="end">A</text>
          <text x="349.9" y="298.0">B</text>
          <text x="351.9" y="100.0">C</text>
          <text x="263.9" y="133.0" text-anchor="middle">D</text>
          <text x="180.0" y="184.0" text-anchor="end">E</text>
          <text x="188.0" y="300.0" text-anchor="middle">O</text>
          <text x="278.0" y="300.0" text-anchor="middle">F</text>
          <text x="282.0" y="182.0">G</text>
          <text class="val" x="329.9" y="130.0" text-anchor="end">3</text>
        `,
    },
    solutionFigure: {
      viewBox: '8 80 400 224',
      caption: 'Şekil 93',
      label: 'Aynı şekilde [BD] kesikli çizilmiş; çapı gören çevre açı dik.',
      svg: `
          <path class="ln" d="M32.1,280.0 A155.9,155.9 0 0 1 343.9,280.0"/>
          <path class="ln" d="M32.1,280.0 L343.9,280.0 L343.9,100.0"/>
          <path class="ln" d="M32.1,280.0 L343.9,100.0"/>
          <path class="ln" d="M188.0,280.0 L188.0,190.0 L278.0,190.0 L278.0,280.0"/>
          <path class="ln" d="M197.0,280.0 L197.0,271.0 L188.0,271.0"/>
          <path class="ln" d="M334.9,280.0 L334.9,271.0 L343.9,271.0"/>
          <path class="aux" d="M265.9,145.0 L343.9,280.0"/>
          <path class="ln" d="M258.1,149.5 L262.6,157.3 L270.4,152.8"/>
          <circle class="pt" cx="32.1" cy="280.0" r="3.2"/>
          <circle class="pt" cx="343.9" cy="280.0" r="3.2"/>
          <circle class="pt" cx="343.9" cy="100.0" r="3.2"/>
          <circle class="pt" cx="265.9" cy="145.0" r="3.2"/>
          <circle class="pt" cx="188.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="188.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="278.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="278.0" cy="190.0" r="3.2"/>
          <text x="26.1" y="298.0" text-anchor="end">A</text>
          <text x="349.9" y="298.0">B</text>
          <text x="351.9" y="100.0">C</text>
          <text x="263.9" y="133.0" text-anchor="middle">D</text>
          <text x="180.0" y="184.0" text-anchor="end">E</text>
          <text x="188.0" y="300.0" text-anchor="middle">O</text>
          <text x="278.0" y="300.0" text-anchor="middle">F</text>
          <text x="282.0" y="182.0">G</text>
          <text class="val" x="329.9" y="130.0" text-anchor="end">3</text>
        `,
    },
    given: ['[BC], B noktasında yarım çembere teğet', 'EOFG kare', '|AD| = 9 cm', '|DC| = 3 cm'],
    stem: ['Yukarıdaki şekilde A, E, D ve C noktaları doğrusaldır.'],
    ask: 'Buna göre, EOFG karesinin çevresi kaç cm dir?',
    choices: [
      { key: 'A', text: '4√3' },
      { key: 'B', text: '8' },
      { key: 'C', text: '9' },
      { key: 'D', text: '10' },
      { key: 'E', text: '12' },
    ],
    answer: 'E',
    hint: 'Dış noktadan çizilen teğetin karesi, kesenin dış ve tüm parçalarının çarpımına eşittir.',
    solution: [
      { title: 'Teğet-kesen', detail: '|BC|² = |CD| · |CA| = 3 · 12 = 36, |BC| = 6 cm.' },
      {
        title: 'Çap',
        detail: 'ABC dik üçgeninde |AB|² = 12² − 6² = 108, |AB| = 6√3 cm; yarıçap 3√3 cm.',
      },
      { title: 'Açı', detail: '|BC| = |AC| / 2 olduğundan m(BAC) = 30°.' },
      { title: 'Karenin kenarı', detail: 'AOE dik üçgeninde |OE| = |AO| / √3 = 3√3 / √3 = 3 cm.' },
      { title: 'Sonuç', detail: 'Çevre(EOFG) = 4 · 3 = 12 cm bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 94
  {
    id: 'circles-94',
    topic: 'İç içe çeyrek çemberlerde yay',
    figure: {
      viewBox: '-30 18 400 310',
      caption: 'Şekil 94',
      label:
        'O₁ merkezli, [O₁D] ve [O₁B] yarıçaplı çeyrek çember; O₂, [O₁B] üzerinde; O₂ merkezli çeyrek çemberin yayı A’dan C’ye uzanıyor, A büyük yay üzerinde ve [AO₂] ⊥ [O₁B]. m(AB) = 30°, |O₁D| = 20.',
      svg: `
          <path class="ln" d="M40.0,30.0 L40.0,300.0 L310.0,300.0"/>
          <path class="ln" d="M40.0,30.0 A270.0,270.0 0 0 1 310.0,300.0"/>
          <path class="ln" d="M138.8,300.0 A135.0,135.0 0 0 1 273.8,165.0"/>
          <path class="ln" d="M273.8,165.0 L273.8,300.0"/>
          <path class="ln" d="M49.0,300.0 L49.0,291.0 L40.0,291.0"/>
          <path class="ln" d="M264.8,300.0 L264.8,291.0 L273.8,291.0"/>
          <circle class="pt" cx="40.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="273.8" cy="165.0" r="3.2"/>
          <circle class="pt" cx="273.8" cy="300.0" r="3.2"/>
          <circle class="pt" cx="138.8" cy="300.0" r="3.2"/>
          <text x="40.0" y="320.0" text-anchor="middle">O₁</text>
          <text x="32.0" y="36.0" text-anchor="end">D</text>
          <text x="310.0" y="320.0" text-anchor="middle">B</text>
          <text x="279.8" y="157.0">A</text>
          <text x="273.8" y="320.0" text-anchor="middle">O₂</text>
          <text x="138.8" y="320.0" text-anchor="middle">C</text>
          <text class="val" x="32.0" y="170.0" text-anchor="end">20</text>
          <text class="val" x="303.8" y="213.0">30°</text>
        `,
    },
    solutionFigure: {
      viewBox: '-30 18 400 310',
      caption: 'Şekil 94',
      label: 'Aynı şekilde [O₁A] yarıçapı kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M40.0,30.0 L40.0,300.0 L310.0,300.0"/>
          <path class="ln" d="M40.0,30.0 A270.0,270.0 0 0 1 310.0,300.0"/>
          <path class="ln" d="M138.8,300.0 A135.0,135.0 0 0 1 273.8,165.0"/>
          <path class="ln" d="M273.8,165.0 L273.8,300.0"/>
          <path class="ln" d="M49.0,300.0 L49.0,291.0 L40.0,291.0"/>
          <path class="ln" d="M264.8,300.0 L264.8,291.0 L273.8,291.0"/>
          <path class="aux" d="M40.0,300.0 L273.8,165.0"/>
          <circle class="pt" cx="40.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="273.8" cy="165.0" r="3.2"/>
          <circle class="pt" cx="273.8" cy="300.0" r="3.2"/>
          <circle class="pt" cx="138.8" cy="300.0" r="3.2"/>
          <text x="40.0" y="320.0" text-anchor="middle">O₁</text>
          <text x="32.0" y="36.0" text-anchor="end">D</text>
          <text x="310.0" y="320.0" text-anchor="middle">B</text>
          <text x="279.8" y="157.0">A</text>
          <text x="273.8" y="320.0" text-anchor="middle">O₂</text>
          <text x="138.8" y="320.0" text-anchor="middle">C</text>
          <text class="val" x="32.0" y="170.0" text-anchor="end">20</text>
          <text class="val" x="303.8" y="213.0">30°</text>
        `,
    },
    given: ['m(AB) = 30°', '|O₁D| = 20 cm', '[AO₂] ⊥ [O₁B]'],
    stem: [
      'O₁ merkezli çeyrek çemberin içine şekildeki gibi O₂ merkezli çeyrek çember yerleştirilmiştir.',
    ],
    ask: 'Buna göre, O₂ merkezli çeyrek çemberin AC yayının uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '2π' },
      { key: 'B', text: '3π' },
      { key: 'C', text: '4π' },
      { key: 'D', text: '5π' },
      { key: 'E', text: '10π' },
    ],
    answer: 'D',
    hint: '[O₁A]’yı çiz: m(AO₁B) = 30° olan bir dik üçgen elde edersin.',
    solution: [
      { title: 'Merkez açı', detail: 'm(AB) = 30° olduğundan m(AO₁O₂) = 30° ve |O₁A| = 20 cm.' },
      {
        title: '30-60-90 üçgeni',
        detail: 'AO₁O₂ dik üçgeninde 30° karşısındaki kenar |AO₂| = 20 / 2 = 10 cm.',
      },
      { title: 'Küçük yarıçap', detail: 'O₂ merkezli çemberin yarıçapı |O₂A| = 10 cm.' },
      { title: 'Sonuç', detail: 'AC yayı = 2π · 10 / 4 = 5π cm bulunur.' },
    ],
  },

  // ---------------------------------------------------------------- 95
  {
    id: 'circles-95',
    topic: 'Çeyrek çemberde eşit yaylar ve dikmeler',
    figure: {
      viewBox: '-5 18 400 310',
      caption: 'Şekil 95',
      label:
        'O merkezli çeyrek çemberin AB yayı D ve C noktalarıyla üç eşit parçaya ayrılmış; [DH] ⊥ [OB], [CK] ⊥ [OB].',
      svg: `
          <path class="ln" d="M60.0,30.0 L60.0,300.0 L330.0,300.0"/>
          <path class="ln" d="M60.0,30.0 A270.0,270.0 0 0 1 330.0,300.0"/>
          <path class="ln" d="M195.0,66.2 L195.0,300.0"/>
          <path class="ln" d="M293.8,165.0 L293.8,300.0"/>
          <path class="ln" d="M69.0,300.0 L69.0,291.0 L60.0,291.0"/>
          <path class="ln" d="M204.0,300.0 L204.0,291.0 L195.0,291.0"/>
          <path class="ln" d="M302.8,300.0 L302.8,291.0 L293.8,291.0"/>
          <circle class="pt" cx="60.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="195.0" cy="66.2" r="3.2"/>
          <circle class="pt" cx="293.8" cy="165.0" r="3.2"/>
          <circle class="pt" cx="195.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="293.8" cy="300.0" r="3.2"/>
          <text x="54.0" y="320.0" text-anchor="middle">O</text>
          <text x="52.0" y="36.0" text-anchor="end">A</text>
          <text x="330.0" y="320.0" text-anchor="middle">B</text>
          <text x="201.0" y="58.2">D</text>
          <text x="301.8" y="159.0">C</text>
          <text x="195.0" y="320.0" text-anchor="middle">H</text>
          <text x="293.8" y="320.0" text-anchor="middle">K</text>
        `,
    },
    solutionFigure: {
      viewBox: '-5 18 400 310',
      caption: 'Şekil 95',
      label: 'Aynı şekilde [OD] ve [OC] yarıçapları kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M60.0,30.0 L60.0,300.0 L330.0,300.0"/>
          <path class="ln" d="M60.0,30.0 A270.0,270.0 0 0 1 330.0,300.0"/>
          <path class="ln" d="M195.0,66.2 L195.0,300.0"/>
          <path class="ln" d="M293.8,165.0 L293.8,300.0"/>
          <path class="ln" d="M69.0,300.0 L69.0,291.0 L60.0,291.0"/>
          <path class="ln" d="M204.0,300.0 L204.0,291.0 L195.0,291.0"/>
          <path class="ln" d="M302.8,300.0 L302.8,291.0 L293.8,291.0"/>
          <path class="aux" d="M60.0,300.0 L195.0,66.2"/>
          <path class="aux" d="M60.0,300.0 L293.8,165.0"/>
          <circle class="pt" cx="60.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="195.0" cy="66.2" r="3.2"/>
          <circle class="pt" cx="293.8" cy="165.0" r="3.2"/>
          <circle class="pt" cx="195.0" cy="300.0" r="3.2"/>
          <circle class="pt" cx="293.8" cy="300.0" r="3.2"/>
          <text x="54.0" y="320.0" text-anchor="middle">O</text>
          <text x="52.0" y="36.0" text-anchor="end">A</text>
          <text x="330.0" y="320.0" text-anchor="middle">B</text>
          <text x="201.0" y="58.2">D</text>
          <text x="301.8" y="159.0">C</text>
          <text x="195.0" y="320.0" text-anchor="middle">H</text>
          <text x="293.8" y="320.0" text-anchor="middle">K</text>
        `,
    },
    given: ['AB yayı D ve C ile üç eşit parçaya ayrılmış', '[DH] ⊥ [OB]', '[CK] ⊥ [OB]'],
    stem: [],
    ask: 'Buna göre, |HK| / |KB| oranı kaçtır?',
    choices: [
      { key: 'A', text: '√3 − 1' },
      { key: 'B', text: '√3' },
      { key: 'C', text: '(√3 + 1) / 2' },
      { key: 'D', text: '√3 + 1' },
      { key: 'E', text: '2 + √3' },
    ],
    answer: 'D',
    hint: 'Her yay 30° dir; [OD] ve [OC] yarıçaplarını çizip H ve K’nin O’ya uzaklığını yarıçap cinsinden yaz.',
    solution: [
      {
        title: 'Açılar',
        detail: 'Her yay 90° / 3 = 30° olduğundan m(DOB) = 60°, m(COB) = 30°. Yarıçap r olsun.',
      },
      { title: 'H ve K', detail: '|OH| = r · cos 60° = r/2, |OK| = r · cos 30° = r√3/2.' },
      { title: 'Parçalar', detail: '|HK| = r(√3 − 1)/2 ve |KB| = r − r√3/2 = r(2 − √3)/2.' },
      {
        title: 'Oran',
        detail: '|HK| / |KB| = (√3 − 1) / (2 − √3) = (√3 − 1)(2 + √3) = √3 + 1 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 96
  {
    id: 'circles-96',
    topic: 'Dik kesişen çemberler',
    figure: {
      viewBox: '-40 26 400 278',
      caption: 'Şekil 96',
      label: 'O₁ ve O₂ merkezli iki çember A ve B noktalarında dik kesişiyor; [AB] ortak kiriş.',
      svg: `
          <circle class="ln" cx="95.0" cy="165.0" r="124.0"/>
          <circle class="ln" cx="250.0" cy="165.0" r="93.0"/>
          <path class="ln" d="M194.2,90.6 L194.2,239.4"/>
          <circle class="pt" cx="95.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="250.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="194.2" cy="90.6" r="3.2"/>
          <circle class="pt" cx="194.2" cy="239.4" r="3.2"/>
          <text x="95.0" y="185.0" text-anchor="middle">O₁</text>
          <text x="250.0" y="185.0" text-anchor="middle">O₂</text>
          <text x="196.2" y="80.6" text-anchor="middle">A</text>
          <text x="196.2" y="261.4" text-anchor="middle">B</text>
        `,
    },
    solutionFigure: {
      viewBox: '-40 26 400 278',
      caption: 'Şekil 96',
      label: 'Aynı şekilde [O₁A], [O₂A] yarıçapları ve [O₁O₂] kesikli çizilmiş; A’daki açı dik.',
      svg: `
          <circle class="ln" cx="95.0" cy="165.0" r="124.0"/>
          <circle class="ln" cx="250.0" cy="165.0" r="93.0"/>
          <path class="ln" d="M194.2,90.6 L194.2,239.4"/>
          <path class="aux" d="M95.0,165.0 L194.2,90.6"/>
          <path class="aux" d="M250.0,165.0 L194.2,90.6"/>
          <path class="aux" d="M95.0,165.0 L250.0,165.0"/>
          <path class="ln" d="M186.2,96.6 L192.2,104.6 L200.2,98.6"/>
          <circle class="pt" cx="95.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="250.0" cy="165.0" r="3.2"/>
          <circle class="pt" cx="194.2" cy="90.6" r="3.2"/>
          <circle class="pt" cx="194.2" cy="239.4" r="3.2"/>
          <text x="95.0" y="185.0" text-anchor="middle">O₁</text>
          <text x="250.0" y="185.0" text-anchor="middle">O₂</text>
          <text x="196.2" y="80.6" text-anchor="middle">A</text>
          <text x="196.2" y="261.4" text-anchor="middle">B</text>
        `,
    },
    given: ['Çemberler dik kesişiyor', 'O₁ merkezli çemberin yarıçapı 20 cm', '|AB| = 24 cm'],
    stem: ['Düzlemde O₁ ve O₂ merkezli iki çember A ve B noktalarında dik kesişmektedir.'],
    ask: 'Buna göre, O₂ merkezli çemberin yarıçapı kaç cm dir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '16' },
      { key: 'C', text: '18' },
      { key: 'D', text: '20' },
      { key: 'E', text: '25' },
    ],
    answer: 'A',
    hint: 'Dik kesişmede kesişim noktasındaki yarıçaplar birbirine diktir; O₁AO₂ bir dik üçgendir.',
    solution: [
      {
        title: 'Dik üçgen',
        detail:
          'Dik kesişmede [O₁A] ⊥ [O₂A] olduğundan O₁AO₂ dik üçgen; [AB], [O₁O₂]’ye diktir ve H’de ikiye bölünür.',
      },
      {
        title: 'Yükseklik',
        detail: '|AH| = 24 / 2 = 12 cm; O₁AH dik üçgeninde |O₁H| = √(400 − 144) = 16 cm.',
      },
      { title: 'Öklid', detail: '|AH|² = |O₁H| · |HO₂| ⇒ 144 = 16 · |HO₂|, |HO₂| = 9 cm.' },
      { title: 'Sonuç', detail: '|O₂A| = √(144 + 81) = 15 cm bulunur.' },
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
 * The whole bank, exported for the integrity tests: they check that the ids run
 * in sequence and that no question was left behind without a module to sit in.
 */
export const CIRCLES_BANK: readonly Question[] = QUESTIONS;

export const UNIT_5_CIRCLES: Unit = {
  id: 'circles',
  order: 5,
  title: 'Çember ve Daire',
  subtitle: 'Ünite 5',
  description:
    'Merkez açı ve çevre açı, teğet-kiriş açısı, dış noktadan çizilen teğetler, çemberin içinde ve dışında kesişen kiriş ve kesenlerin oluşturduğu açılar.',
  modules: [
    {
      id: 'circles-m1',
      order: 1,
      title: 'Çevre açı ve teğetler',
      summary:
        'Teğet-kiriş açısı, dış noktadan çizilen teğetler, çeyrek çemberde ikizkenar üçgenler, aynı yayı gören çevre açılar ve eşit kirişler.',
      questions: pick('circles-1', 'circles-2', 'circles-3', 'circles-4', 'circles-5', 'circles-6'),
    },
    {
      id: 'circles-m2',
      order: 2,
      title: 'Kiriş ve kesen açıları',
      summary:
        'Çemberin içinde kesişen kirişler, dış noktadan çizilen kesenler, teğet ile kesen, merkez açıyla ikizkenar üçgenler ve çapa teğet.',
      questions: pick(
        'circles-7',
        'circles-8',
        'circles-9',
        'circles-10',
        'circles-11',
        'circles-12',
      ),
    },
    {
      id: 'circles-m3',
      order: 3,
      title: 'Yay, teğet ve kiriş karışık',
      summary:
        'Kiriş uzunluğundan merkez açı, çevrel çemberde yaylar, teğet-kiriş açısıyla ikizkenar üçgen, dış noktadan teğetler, teğete paralel kiriş ve çapı gören açı.',
      questions: pick(
        'circles-13',
        'circles-14',
        'circles-15',
        'circles-16',
        'circles-17',
        'circles-18',
      ),
    },
    {
      id: 'circles-m4',
      order: 4,
      title: 'Teğet, kesen ve kesişen çemberler',
      summary:
        'Teğet-kiriş açısıyla üçgen, kesişen çemberlerde kirişler dörtgeni, dıştan teğet çemberlerin ortak teğeti, teğet ile kesen, paralel kiriş ve teğetlerle ikizkenar üçgen.',
      questions: pick(
        'circles-19',
        'circles-20',
        'circles-21',
        'circles-22',
        'circles-23',
        'circles-24',
      ),
    },
    {
      id: 'circles-m5',
      order: 5,
      title: 'Teğetler, paralel kirişler ve eşit yaylar',
      summary:
        'Teğete paralel kiriş, teğetlerle kesişen kirişler, yarım çemberde paralel kiriş, çap ve kesen, eşit kirişlerle yay oranı ve küçük yayda eşit kirişler.',
      questions: pick(
        'circles-25',
        'circles-26',
        'circles-27',
        'circles-28',
        'circles-29',
        'circles-30',
      ),
    },
    {
      id: 'circles-m6',
      order: 6,
      title: 'Merkez açı, kirişler ve kesenler',
      summary:
        'Merkez açıyla ikizkenar üçgen, yarım çemberde kirişler dörtgeni, dış açıdan merkez açı, içte kesişen kirişler, teğetler arası açı ve iki kesenle kesişen kirişler.',
      questions: pick(
        'circles-31',
        'circles-32',
        'circles-33',
        'circles-34',
        'circles-35',
        'circles-36',
      ),
    },
    {
      id: 'circles-m7',
      order: 7,
      title: 'Teğetler, kesenler ve çeyrek çember',
      summary:
        'Çaptan geçen doğruya teğet, iki teğet arasında çevre açı, teğetlerle kesenler, aynı yayı gören çevre açılar, çapa paralel kirişler ve çeyrek çemberde ikizkenar üçgen.',
      questions: pick(
        'circles-37',
        'circles-38',
        'circles-39',
        'circles-40',
        'circles-41',
        'circles-42',
      ),
    },
    {
      id: 'circles-m8',
      order: 8,
      title: 'İkizkenar üçgenler, teğetler ve eşit yaylar',
      summary:
        'Yarım çemberde yarıçapa eşit parça, teğet ve orta taban, çembersel ikizkenar yamuk, eşit yaylar, merkezden geçen kesen ve kirişin orta dikmesi.',
      questions: pick(
        'circles-43',
        'circles-44',
        'circles-45',
        'circles-46',
        'circles-47',
        'circles-48',
      ),
    },
    {
      id: 'circles-m9',
      order: 9,
      title: 'Teğetler, kesenler ve kirişler dörtgeni',
      summary:
        'Yarım çembere dış noktadan teğetler, kirişler dörtgeninde karşı açılar, teğet-kiriş açısıyla ikizkenar üçgen, dışta kesişen kesenler, dıştan teğet çemberler ve yarım çemberde çevre açılar.',
      questions: pick(
        'circles-49',
        'circles-50',
        'circles-51',
        'circles-52',
        'circles-53',
        'circles-54',
      ),
    },
    {
      id: 'circles-m10',
      order: 10,
      title: 'Teğetler, kesişen kirişler ve eşit yaylar',
      summary:
        'Teğet-kiriş açısıyla paralel kirişler, merkez açıyla ikizkenar üçgen, dış noktadan teğetler, içte kesişen kirişler, teğet-kiriş açısıyla merkez açı ve yarım çemberde eşit yaylar.',
      questions: pick(
        'circles-55',
        'circles-56',
        'circles-57',
        'circles-58',
        'circles-59',
        'circles-60',
      ),
    },
    {
      id: 'circles-m11',
      order: 11,
      title: 'Kesişen çemberler ve kirişler dörtgeni',
      summary:
        'Kesişen çemberlerde iki kirişler dörtgeni, yarım çemberde eşkenar üçgen, çeyrek çemberde eşit yaylar, aynı yayı gören çevre açılar, kesişen çemberlerde dış açı ve teğetle paralelkenar.',
      questions: pick(
        'circles-61',
        'circles-62',
        'circles-63',
        'circles-64',
        'circles-65',
        'circles-66',
      ),
    },
    {
      id: 'circles-m12',
      order: 12,
      title: 'Eşit kirişler, teğet çemberler ve kesenler',
      summary:
        'Eşit kirişlerle merkez açı, içten teğet çemberler, dışta kesişen kesenler, teğet ve açıortay, dıştan teğet çemberler ve kenarlara teğet çember.',
      questions: pick(
        'circles-67',
        'circles-68',
        'circles-69',
        'circles-70',
        'circles-71',
        'circles-72',
      ),
    },
    {
      id: 'circles-m13',
      order: 13,
      title: 'Teğetler, paralel kirişler ve yarım çemberde kare',
      summary:
        'Teğet ve kesenle paralel kiriş, dış noktadan teğetlerle merkez açı, çapla içte kesişen kirişler, teğet-kesen açısı ve eşit parçalar, paralel ve eşit kirişler, yarım çemberde kare.',
      questions: pick(
        'circles-73',
        'circles-74',
        'circles-75',
        'circles-76',
        'circles-77',
        'circles-78',
      ),
    },
    {
      id: 'circles-m14',
      order: 14,
      title: 'Çemberde uzunluklar',
      summary:
        'Eş merkezli çemberlerde teğet kiriş, teğet ve çapla Öklid bağıntısı, çeyrek çemberde dikdörtgen, kenara teğet yay, çevrel çemberde açıortay ve eşkenar üçgende teğet yay.',
      questions: pick(
        'circles-79',
        'circles-80',
        'circles-81',
        'circles-82',
        'circles-83',
        'circles-84',
      ),
    },
    {
      id: 'circles-m15',
      order: 15,
      title: 'Çemberde uzunluklar II',
      summary:
        'Çeyrek çemberde teğet çember, yarım çemberde kesen, teğet ve Öklid bağıntısı, teğet-kiriş açısıyla uzunluk, teğet parçalarıyla benzerlik ve çeyrek çemberde kiriş.',
      questions: pick(
        'circles-85',
        'circles-86',
        'circles-87',
        'circles-88',
        'circles-89',
        'circles-90',
      ),
    },
    {
      id: 'circles-m16',
      order: 16,
      title: 'Çemberde uzunluklar III',
      summary:
        'Eş merkezli yaylarda yol, dik üçgende kenarortay ve yay, teğet-kesenle yarım çemberde kare, iç içe çeyrek çemberler, eşit yaylarda dikmeler ve dik kesişen çemberler.',
      questions: pick(
        'circles-91',
        'circles-92',
        'circles-93',
        'circles-94',
        'circles-95',
        'circles-96',
      ),
    },
  ],
};
