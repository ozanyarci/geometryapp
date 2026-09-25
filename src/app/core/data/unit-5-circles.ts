import { Question, Unit } from '../models';

/**
 * Unit 5 — Angles in a circle.
 * Original questions written in the style of the "Çemberde Açılar — Çözümlü Test"
 * source: central and inscribed angles, tangent-chord angles, tangents from an
 * outside point, and angles formed by intersecting chords and secants.
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
  title: 'Çemberde Açılar',
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
  ],
};
