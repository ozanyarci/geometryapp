import { Question, Unit } from '../models';

/**
 * Unit 5 — Circle and disc.
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
        
C 79.99999999999999
F 110.00000000000001
A 20.0
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
        
C 36.0
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
        
A 29.999999999999996
D 100.0
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
        
ABD 105.0
DBC 35.0
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
        
B 44.0
A 34.0
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
  ],
};
