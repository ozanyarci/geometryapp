import { Question, Unit } from '../models';

/**
 * Unit 11 — Lines and planes in space.
 * Original questions written in the style of the "Uzay Geometri — Çözümlü Test"
 * source: two square cards hinged along a common edge, true/false statements
 * about lines and planes, the plane axioms, the area of an orthogonal
 * projection, two perpendicular squares and the theorem of three perpendiculars.
 * Questions 8–13 follow a second workbook page: "always true" statements, the
 * three-perpendiculars theorem used for an area and a length, the projection of
 * a segment, a point's distance to a plane and the angle between two planes.
 * Questions 14–19 follow a third page ("Uzay Geometri — Test 1"): statements
 * about lines and planes, three lines in one plane, numbered premises, and a
 * perpendicular raised on the plane of a right isosceles triangle.
 * Questions 20–25 follow a fourth page ("Uzay Geometri — Test 1", p. 620):
 * premises in the plane and in space, the distance of a projected point to the
 * line of intersection, and the area of a triangle tilted over a rectangle.
 * Questions 26–31 follow a fifth page ("Uzay Geometri — Test 1", p. 621):
 * counting true statements, the three perpendiculars for a length, premises,
 * regions cut out by lines, and the shortest path across two planes.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Solids are drawn in cabinet oblique projection as in unit 8: width and height
 * at full scale, depth at half scale along 45°. Every figure notes its
 * pixel-per-unit scale beside it.
 */
const QUESTIONS: Question[] = [
  // ---------------------------------------------------------------- 1
  // Spine AD runs into the page; AB (straight up) and AF (at 150°) lie in the
  // front plane, so the 60° opening is drawn true. 30 px per cm.
  {
    id: 'space-1',
    topic: 'Ortak kenarlı iki karede uzaklık',
    stem: [
      'Kenar uzunlukları 6 cm olan kare şeklindeki ABCD ve ADEF eş kartonları, [AD] kenarları ortak ve aralarındaki açının ölçüsü 60° olacak şekilde birleştiriliyor.',
    ],
    ask: 'Buna göre, E ve B noktaları arasındaki uzaklık kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '6√3' },
      { key: 'D', text: '12' },
      { key: 'E', text: '6√5' },
    ],
    answer: 'B',
    hint: '[AD] hem [AB] ye hem [AF] ye diktir; önce ABF üçgenine bak.',
    solution: [
      {
        title: 'Düzlemler arasındaki açı',
        detail:
          '[AB] ⊥ [AD] ve [AF] ⊥ [AD] olduğundan iki karton arasındaki açı BAF açısıdır: m(BAF) = 60°.',
      },
      {
        title: 'ABF üçgeni',
        detail: '|AB| = |AF| = 6 ve aradaki açı 60° olduğundan ABF eşkenar üçgendir: |BF| = 6 cm.',
      },
      {
        title: 'EFB dik üçgeni',
        detail:
          '[AD], ABF düzlemine diktir; [EF] ∥ [AD] olduğundan [EF] de bu düzleme diktir. Buna göre [EF] ⊥ [FB].',
      },
      {
        title: 'Sonuç',
        detail: '|EB|² = 6² + 6² = 72 ⇒ |EB| = 6√2 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 20 400 290',
      caption: 'Şekil 1',
      label:
        'ABCD ve ADEF kareleri [AD] kenarı boyunca birleşmiş, açık bir kitap gibi duruyor; A daki BAF açısı 60°, |AB| = 6.',
      svg: `
          <path class="ln" d="M246,285 L246,105 L309.6,41.4 L309.6,221.4 Z"/>
          <path class="ln" d="M246,285 L90.1,195 L153.8,131.4 L309.6,221.4"/>
          <path class="arc" d="M246,257 A28,28 0 0 0 221.8,271"/>
          <circle class="pt" cx="246" cy="285" r="3.2"/>
          <circle class="pt" cx="246" cy="105" r="3.2"/>
          <circle class="pt" cx="309.6" cy="41.4" r="3.2"/>
          <circle class="pt" cx="309.6" cy="221.4" r="3.2"/>
          <circle class="pt" cx="90.1" cy="195" r="3.2"/>
          <circle class="pt" cx="153.8" cy="131.4" r="3.2"/>
          <text x="246" y="303" text-anchor="middle">A</text>
          <text x="238" y="108" text-anchor="end">B</text>
          <text x="318" y="40">C</text>
          <text x="318" y="228">D</text>
          <text x="82" y="200" text-anchor="end">F</text>
          <text x="146" y="126" text-anchor="end">E</text>
          <text class="val" x="224" y="252" text-anchor="middle">60°</text>
          <text class="val" x="238" y="160" text-anchor="end">6</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 290',
      caption: 'Şekil 1',
      label:
        'Aynı şekilde [BF] ve [EB] çizilmiş: ABF eşkenar üçgen, EFB üçgeni F de dik.',
      svg: `
          <path class="ln" d="M246,285 L246,105 L309.6,41.4 L309.6,221.4 Z"/>
          <path class="ln" d="M246,285 L90.1,195 L153.8,131.4 L309.6,221.4"/>
          <path class="arc" d="M246,257 A28,28 0 0 0 221.8,271"/>
          <circle class="pt" cx="246" cy="285" r="3.2"/>
          <circle class="pt" cx="246" cy="105" r="3.2"/>
          <circle class="pt" cx="309.6" cy="41.4" r="3.2"/>
          <circle class="pt" cx="309.6" cy="221.4" r="3.2"/>
          <circle class="pt" cx="90.1" cy="195" r="3.2"/>
          <circle class="pt" cx="153.8" cy="131.4" r="3.2"/>
          <text x="246" y="303" text-anchor="middle">A</text>
          <text x="238" y="108" text-anchor="end">B</text>
          <text x="318" y="40">C</text>
          <text x="318" y="228">D</text>
          <text x="82" y="200" text-anchor="end">F</text>
          <text x="146" y="126" text-anchor="end">E</text>
          <text class="val" x="224" y="252" text-anchor="middle">60°</text>
          <text class="val" x="238" y="160" text-anchor="end">6</text>
          <path class="aux" d="M246,105 L90.1,195 M153.8,131.4 L246,105"/>
          <text class="val" x="140" y="180" text-anchor="middle">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'space-2',
    topic: 'Uzayda doğru ve düzlemlerin durumları',
    stem: [],
    ask: 'Aşağıdaki önermelerden hangisi doğrudur?',
    choices: [
      { key: 'A', text: 'Uzayda aynı doğruya dik olan iki doğru birbirine paraleldir.' },
      { key: 'B', text: 'Aynı düzleme paralel olan iki doğru birbirine paraleldir.' },
      {
        key: 'C',
        text: 'Paralel iki düzlemden birindeki her doğru, diğerindeki her doğruya paraleldir.',
      },
      { key: 'D', text: 'Aynı düzleme dik olan farklı iki doğru birbirine paraleldir.' },
      { key: 'E', text: 'Kesişmeyen iki doğru birbirine paraleldir.' },
    ],
    answer: 'D',
    hint: 'Her seçenek için bir küpün ayrıtlarından bir karşı örnek aramayı dene.',
    solution: [
      {
        title: 'A ve B',
        detail:
          'Bir küpte bir köşeden çıkan iki ayrıt, üçüncü ayrıta diktir ama birbirini keser; tavandaki kesişen iki ayrıt da tabana paraleldir. İkisi de yanlıştır.',
      },
      {
        title: 'C ve E',
        detail:
          'Küpün tavanındaki bir ayrıt ile tabanındaki ona dik bir ayrıt paralel düzlemlerdedir, kesişmez ama paralel de değildir; bunlar aykırı doğrulardır. İkisi de yanlıştır.',
      },
      {
        title: 'D',
        detail:
          'Bir düzleme dik olan iki doğru aynı doğrultudadır; farklıysalar birbirine paraleldir. Bu önerme doğrudur.',
      },
      {
        title: 'Sonuç',
        detail: 'Doğru önerme D seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'space-3',
    topic: 'Düzlem ve doğruya ilişkin önermeler',
    stem: [],
    ask: 'Aşağıdaki önermelerden hangisi yanlıştır?',
    choices: [
      { key: 'A', text: 'Bir doğru ile dışındaki bir nokta bir tek düzlem belirtir.' },
      {
        key: 'B',
        text: 'Bir düzlemin dışındaki bir noktadan bu düzleme paralel olan yalnız bir doğru çizilebilir.',
      },
      {
        key: 'C',
        text: 'Bir düzlemin dışındaki bir noktadan bu düzleme yalnız bir dik doğru çizilebilir.',
      },
      { key: 'D', text: 'Kesişen farklı iki düzlemin ara kesiti bir doğrudur.' },
      {
        key: 'E',
        text: 'Paralel iki düzlemi kesen bir düzlemin bu düzlemlerle ara kesitleri birbirine paraleldir.',
      },
    ],
    answer: 'B',
    hint: 'Noktadan geçen ve düzleme paralel olan başka bir düzlem düşün; o düzlemdeki doğrular ne olur?',
    solution: [
      {
        title: 'A, C, D ve E',
        detail:
          'Bunların dördü de uzay geometrisinin temel özellikleridir ve doğrudur.',
      },
      {
        title: 'B nin karşı örneği',
        detail:
          'Noktadan geçen ve verilen düzleme paralel olan bir düzlem vardır. Bu düzlemin içinde noktadan geçen her doğru, verilen düzleme paraleldir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Böyle sonsuz sayıda doğru çizilebildiğinden yanlış önerme B seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'space-4',
    topic: 'Düzlem belirten durumlar',
    stem: [],
    ask: 'Aşağıdakilerden hangisi uzayda bir tek düzlem belirtir?',
    choices: [
      { key: 'A', text: 'Aykırı iki doğru' },
      { key: 'B', text: 'Aynı doğru üzerindeki üç nokta' },
      { key: 'C', text: 'Bir doğru ve üzerindeki bir nokta' },
      { key: 'D', text: 'Farklı iki nokta' },
      { key: 'E', text: 'Paralel iki doğru' },
    ],
    answer: 'E',
    hint: 'Bir düzlemi belirlemek için doğrusal olmayan üç nokta gerekir; her seçenekte böyle üç nokta bulunabilir mi, bak.',
    solution: [
      {
        title: 'B, C ve D',
        detail:
          'Bu seçeneklerdeki bütün noktalar tek bir doğru üzerindedir. Bir doğrudan sonsuz sayıda düzlem geçer.',
      },
      {
        title: 'A',
        detail: 'Aykırı iki doğru aynı düzlemde bulunmaz, dolayısıyla hiçbir düzlem belirtmez.',
      },
      {
        title: 'E',
        detail:
          'Paralel iki doğru tanım gereği aynı düzlemdedir; birinden iki, diğerinden bir nokta doğrusal olmayan üç nokta verir.',
      },
      {
        title: 'Sonuç',
        detail: 'Bir tek düzlem belirten E seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'space-5',
    topic: 'Dik izdüşümün alanı',
    stem: ['Bir E düzleminin içinde bulunan eşkenar üçgenin bir kenarı 8 cm dir.'],
    ask: 'Bu üçgenin, E düzlemiyle ölçek açısı 30° olan bir P düzlemi üzerindeki dik izdüşümünün alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '24' },
      { key: 'C', text: '12√3' },
      { key: 'D', text: '16√3' },
      { key: 'E', text: '32' },
    ],
    answer: 'B',
    hint: 'Bir düzlemsel bölgenin dik izdüşümünün alanı, bölgenin alanı ile düzlemler arasındaki açının kosinüsünün çarpımıdır.',
    solution: [
      {
        title: 'Üçgenin alanı',
        detail: 'S = (√3 / 4) · 8² = 16√3 cm².',
      },
      {
        title: 'İzdüşüm kuralı',
        detail: "S' = S · cos 30° = 16√3 · (√3 / 2).",
      },
      {
        title: 'Sonuç',
        detail: "S' = 16 · 3 / 2 = 24 cm² dir.",
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  // A (0,0,0), B (8,0,0), C and D at depth 8, E and F 8 above them; 22 px per cm.
  {
    id: 'space-6',
    topic: 'Dik kesişen iki karede uzaklık',
    stem: [],
    given: [
      'ABCD ve DCFE kareleri [DC] boyunca dik kesişmektedir.',
      'K, [EF] üzerinde bir noktadır.',
      '|EK| = |KF|',
      '|AK| = 18 cm',
    ],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '10' },
      { key: 'C', text: '12' },
      { key: 'D', text: '14' },
      { key: 'E', text: '16' },
    ],
    answer: 'C',
    hint: 'K den ABCD düzlemine bir dikme in; ayağı [DC] nin orta noktasına düşer.',
    solution: [
      {
        title: 'Dikme',
        detail:
          'Karenin kenarı a olsun. K den [DC] ye inen [KH] dikmesi, düzlemler dik olduğundan ABCD düzlemine de diktir; |KH| = a ve H, [DC] nin orta noktasıdır.',
      },
      {
        title: 'ADH dik üçgeni',
        detail: '|AD| = a, |DH| = a / 2 ⇒ |AH|² = a² + a² / 4 = 5a² / 4.',
      },
      {
        title: 'AHK dik üçgeni',
        detail: '|AK|² = |AH|² + |KH|² = 5a² / 4 + a² = 9a² / 4 ⇒ |AK| = 3a / 2.',
      },
      {
        title: 'Sonuç',
        detail: '3a / 2 = 18 ⇒ a = 12, yani |BC| = 12 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 20 400 295',
      caption: 'Şekil 2',
      label:
        'Yatay ABCD karesi ile arkadaki dik DCFE karesi [DC] boyunca birleşiyor; K, [EF] nin orta noktası ve A ile birleştirilmiş, |AK| = 18.',
      svg: `
          <path class="ln" d="M81,290 L257,290 L319.2,227.8 L143.2,227.8 Z"/>
          <path class="ln" d="M143.2,227.8 L143.2,51.8 L319.2,51.8 L319.2,227.8"/>
          <path class="ln" d="M81,290 L231.2,51.8"/>
          <path class="tick" d="M187.2,45 L187.2,58.6 M275.2,45 L275.2,58.6"/>
          <circle class="pt" cx="81" cy="290" r="3.2"/>
          <circle class="pt" cx="257" cy="290" r="3.2"/>
          <circle class="pt" cx="319.2" cy="227.8" r="3.2"/>
          <circle class="pt" cx="143.2" cy="227.8" r="3.2"/>
          <circle class="pt" cx="143.2" cy="51.8" r="3.2"/>
          <circle class="pt" cx="319.2" cy="51.8" r="3.2"/>
          <circle class="pt" cx="231.2" cy="51.8" r="3.2"/>
          <text x="73" y="304" text-anchor="end">A</text>
          <text x="265" y="306">B</text>
          <text x="327" y="236">C</text>
          <text x="150" y="220">D</text>
          <text x="136" y="50" text-anchor="end">E</text>
          <text x="327" y="50">F</text>
          <text x="231.2" y="40" text-anchor="middle">K</text>
          <text class="val" x="176" y="150">18</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 295',
      caption: 'Şekil 2',
      label:
        'Aynı şekilde K den [DC] ye [KH] dikmesi ve [AH] çizilmiş; H, [DC] nin orta noktası, AHK üçgeni H de dik.',
      svg: `
          <path class="ln" d="M81,290 L257,290 L319.2,227.8 L143.2,227.8 Z"/>
          <path class="ln" d="M143.2,227.8 L143.2,51.8 L319.2,51.8 L319.2,227.8"/>
          <path class="ln" d="M81,290 L231.2,51.8"/>
          <path class="tick" d="M187.2,45 L187.2,58.6 M275.2,45 L275.2,58.6"/>
          <path class="aux" d="M231.2,51.8 L231.2,227.8 M81,290 L231.2,227.8"/>
          <circle class="pt" cx="81" cy="290" r="3.2"/>
          <circle class="pt" cx="257" cy="290" r="3.2"/>
          <circle class="pt" cx="319.2" cy="227.8" r="3.2"/>
          <circle class="pt" cx="143.2" cy="227.8" r="3.2"/>
          <circle class="pt" cx="143.2" cy="51.8" r="3.2"/>
          <circle class="pt" cx="319.2" cy="51.8" r="3.2"/>
          <circle class="pt" cx="231.2" cy="51.8" r="3.2"/>
          <circle class="pt" cx="231.2" cy="227.8" r="3.2"/>
          <text x="73" y="304" text-anchor="end">A</text>
          <text x="265" y="306">B</text>
          <text x="327" y="236">C</text>
          <text x="150" y="220">D</text>
          <text x="136" y="50" text-anchor="end">E</text>
          <text x="327" y="50">F</text>
          <text x="231.2" y="40" text-anchor="middle">K</text>
          <text x="238" y="222">H</text>
          <text class="val" x="176" y="150">18</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 7
  // Plane E is z = 0; H at the origin, P 6 above it, K 8 to the right of H and
  // d the line through K running into the page, with A 15 along it. 16 px per cm.
  {
    id: 'space-7',
    topic: 'Üç dikme teoremi',
    stem: [
      'E düzleminin dışındaki bir P noktasından E düzlemine [PH] dikmesi, E düzlemindeki d doğrusuna da [PK] dikmesi çiziliyor. A noktası d doğrusu üzerindedir.',
    ],
    given: ['[PH] ⊥ E, [PK] ⊥ d', '|PH| = 6 cm', '|PK| = 10 cm', '|KA| = 15 cm'],
    ask: 'Buna göre, |HA| kaç cm dir?',
    choices: [
      { key: 'A', text: '13' },
      { key: 'B', text: '15' },
      { key: 'C', text: '17' },
      { key: 'D', text: '19' },
      { key: 'E', text: '21' },
    ],
    answer: 'C',
    hint: '[HK] yi çiz: üç dikme teoremine göre [HK] de d doğrusuna diktir.',
    solution: [
      {
        title: 'PHK dik üçgeni',
        detail: '[PH] ⊥ E olduğundan [PH] ⊥ [HK]: |HK|² = 10² − 6² = 64 ⇒ |HK| = 8 cm.',
      },
      {
        title: 'Üç dikme teoremi',
        detail: '[PH] ⊥ E ve [PK] ⊥ d olduğundan [HK] ⊥ d dir.',
      },
      {
        title: 'HKA dik üçgeni',
        detail: '|HA|² = |HK|² + |KA|² = 8² + 15² = 64 + 225 = 289.',
      },
      {
        title: 'Sonuç',
        detail: '|HA| = 17 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 118 400 160',
      caption: 'Şekil 3',
      label:
        'Yatay E düzlemi ve üzerinde d doğrusu. Düzlemin dışındaki P noktasından düzleme [PH], d doğrusuna [PK] dikmeleri inmiş; A, d üzerinde. |PH| = 6, |PK| = 10, |KA| = 15.',
      svg: `
          <path class="ln" d="M29.4,262.6 L253.4,262.6 L366.5,149.5 L142.5,149.5 Z"/>
          <path class="ln" d="M211,257 L317.4,150.6"/>
          <path class="ln" d="M100,144 L100,240 M100,144 L228,240"/>
          <path class="ln" d="M235.1,232.9 L227.1,226.9 L220,234"/>
          <circle class="pt" cx="100" cy="144" r="3.2"/>
          <circle class="pt" cx="100" cy="240" r="3.2"/>
          <circle class="pt" cx="228" cy="240" r="3.2"/>
          <circle class="pt" cx="312.8" cy="155.1" r="3.2"/>
          <text x="100" y="134" text-anchor="middle">P</text>
          <text x="92" y="256" text-anchor="end">H</text>
          <text x="236" y="258">K</text>
          <text x="322" y="170">A</text>
          <text x="300" y="162" text-anchor="end">d</text>
          <text x="56" y="256">E</text>
          <text class="val" x="92" y="172" text-anchor="end">6</text>
          <text class="val" x="172" y="186">10</text>
          <text class="val" x="282" y="212">15</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 118 400 160',
      caption: 'Şekil 3',
      label:
        'Aynı şekilde [HK] ve [HA] çizilmiş: PHK üçgeni H de, HKA üçgeni K de dik.',
      svg: `
          <path class="ln" d="M29.4,262.6 L253.4,262.6 L366.5,149.5 L142.5,149.5 Z"/>
          <path class="ln" d="M211,257 L317.4,150.6"/>
          <path class="ln" d="M100,144 L100,240 M100,144 L228,240"/>
          <path class="ln" d="M235.1,232.9 L227.1,226.9 L220,234"/>
          <circle class="pt" cx="100" cy="144" r="3.2"/>
          <circle class="pt" cx="100" cy="240" r="3.2"/>
          <circle class="pt" cx="228" cy="240" r="3.2"/>
          <circle class="pt" cx="312.8" cy="155.1" r="3.2"/>
          <text x="100" y="134" text-anchor="middle">P</text>
          <text x="92" y="256" text-anchor="end">H</text>
          <text x="236" y="258">K</text>
          <text x="322" y="170">A</text>
          <text x="300" y="162" text-anchor="end">d</text>
          <text x="56" y="256">E</text>
          <text class="val" x="92" y="172" text-anchor="end">6</text>
          <text class="val" x="172" y="186">10</text>
          <text class="val" x="282" y="212">15</text>
          <path class="aux" d="M100,240 L228,240 M100,240 L312.8,155.1"/>
          <path class="ln" d="M110,240 L110,230 L100,230 M218,240 L225.1,232.9 L235.1,232.9"/>
          <text class="val" x="164" y="234" text-anchor="middle">8</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'space-8',
    topic: 'Uzayda doğru ve düzlemlerin durumları',
    stem: [],
    ask: 'Aşağıdaki önermelerden hangisi daima doğrudur?',
    choices: [
      {
        key: 'A',
        text: 'Uzayda bir doğruya, dışındaki bir noktadan sonsuz sayıda paralel doğru çizilebilir.',
      },
      {
        key: 'B',
        text: 'Birbirine dik iki düzlemden birine paralel olan bir doğru, diğer düzleme diktir.',
      },
      { key: 'C', text: 'Aynı doğruya paralel olan farklı iki düzlem birbirine paraleldir.' },
      {
        key: 'D',
        text: 'Bir düzleme dik olan bir doğru, bu düzlemin içindeki her doğruya diktir.',
      },
      { key: 'E', text: 'Kesişen iki düzlemin her ikisine de paralel olan bir doğru yoktur.' },
    ],
    answer: 'D',
    hint: 'Her seçenek için bir küpün ayrıtları ve yüzleri arasında bir karşı örnek ara.',
    solution: [
      {
        title: 'A',
        detail:
          'Bir doğru ile dışındaki bir nokta tek bir düzlem belirtir; bu düzlemde noktadan geçen yalnız bir paralel vardır. Yanlıştır.',
      },
      {
        title: 'B ve C',
        detail:
          'Küpün tavanındaki bir ayrıt hem tabana hem de ona dik olan bir yan yüze paralel olabilir; ayrıca kesişen iki yan yüz aynı dikey ayrıta paraleldir. İkisi de yanlıştır.',
      },
      {
        title: 'E',
        detail:
          'İki düzlemin ara kesit doğrusuna paralel olan ve düzlemlerin dışındaki bir doğru, her iki düzleme de paraleldir. Yanlıştır.',
      },
      {
        title: 'D',
        detail:
          'Bir doğrunun düzleme dik olması, düzlemin içindeki her doğruya dik olması demektir. Doğrudur.',
      },
      {
        title: 'Sonuç',
        detail: 'Daima doğru olan önerme D seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  // Plane E is z = 0; C at the origin, D 5 to the right, B 6 into the page and
  // A 8 above B. 20 px per cm.
  {
    id: 'space-9',
    topic: 'Üç dikme teoremiyle alan',
    stem: ['B, C ve D noktaları E düzleminin üzerinde, A noktası ise E düzleminin dışındadır.'],
    given: ['[AB] ⊥ E', '[AC] ⊥ [CD]', '|AB| = 8 cm', '|AC| = 10 cm', '|CD| = 5 cm'],
    ask: 'Buna göre, BCD üçgeninin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '15' },
      { key: 'C', text: '20' },
      { key: 'D', text: '24' },
      { key: 'E', text: '30' },
    ],
    answer: 'B',
    hint: '[AB] ⊥ E ve [AC] ⊥ [CD] olduğundan üç dikme teoremine göre [BC] ile [CD] arasındaki açıyı düşün.',
    solution: [
      {
        title: 'ABC dik üçgeni',
        detail: '[AB] ⊥ E olduğundan [AB] ⊥ [BC]: |BC|² = 10² − 8² = 36 ⇒ |BC| = 6 cm.',
      },
      {
        title: 'Üç dikme teoremi',
        detail: '[AB] ⊥ E ve [AC] ⊥ [CD] olduğundan [BC] ⊥ [CD] dir.',
      },
      {
        title: 'BCD dik üçgeni',
        detail: 'Alan = |BC| · |CD| / 2 = 6 · 5 / 2.',
      },
      {
        title: 'Sonuç',
        detail: 'BCD üçgeninin alanı 15 cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 18 400 262',
      caption: 'Şekil 4',
      label:
        'Yatay E düzleminde taralı BCD üçgeni; B nin üstünde düzleme dik [AB] ve A dan C ye [AC] çizilmiş. [AC] ⊥ [CD], |AB| = 8, |AC| = 10, |CD| = 5.',
      svg: `
          <path class="shade" d="M129,242 L171.4,199.6 L229,242 Z"/>
          <path class="ln" d="M27.8,263.2 L287.8,263.2 L372.6,178.4 L112.6,178.4 Z"/>
          <path class="ln" d="M129,242 L171.4,199.6 L229,242 Z"/>
          <path class="ln" d="M171.4,39.6 L171.4,199.6 M171.4,39.6 L129,242"/>
          <path class="ln" d="M171.4,190.6 L165,197 L165,206"/>
          <path class="ln" d="M131.1,232.2 L141.1,232.2 L139,242"/>
          <circle class="pt" cx="171.4" cy="39.6" r="3.2"/>
          <circle class="pt" cx="171.4" cy="199.6" r="3.2"/>
          <circle class="pt" cx="129" cy="242" r="3.2"/>
          <circle class="pt" cx="229" cy="242" r="3.2"/>
          <text x="171.4" y="30" text-anchor="middle">A</text>
          <text x="179" y="196">B</text>
          <text x="121" y="250" text-anchor="end">C</text>
          <text x="237" y="250">D</text>
          <text x="46" y="256">E</text>
          <text class="val" x="179" y="124">8</text>
          <text class="val" x="142" y="146" text-anchor="end">10</text>
          <text class="val" x="179" y="258" text-anchor="middle">5</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 18 400 262',
      caption: 'Şekil 4',
      label:
        'Aynı şekilde [BC] vurgulanmış: ABC üçgeni B de dik, |BC| = 6; üç dikme teoremine göre BCD üçgeni C de dik.',
      svg: `
          <path class="shade" d="M129,242 L171.4,199.6 L229,242 Z"/>
          <path class="ln" d="M27.8,263.2 L287.8,263.2 L372.6,178.4 L112.6,178.4 Z"/>
          <path class="ln" d="M129,242 L171.4,199.6 L229,242 Z"/>
          <path class="ln" d="M171.4,39.6 L171.4,199.6 M171.4,39.6 L129,242"/>
          <path class="ln" d="M171.4,190.6 L165,197 L165,206"/>
          <path class="ln" d="M131.1,232.2 L141.1,232.2 L139,242"/>
          <path class="aux" d="M129,242 L171.4,199.6"/>
          <circle class="pt" cx="171.4" cy="39.6" r="3.2"/>
          <circle class="pt" cx="171.4" cy="199.6" r="3.2"/>
          <circle class="pt" cx="129" cy="242" r="3.2"/>
          <circle class="pt" cx="229" cy="242" r="3.2"/>
          <text x="171.4" y="30" text-anchor="middle">A</text>
          <text x="179" y="196">B</text>
          <text x="121" y="250" text-anchor="end">C</text>
          <text x="237" y="250">D</text>
          <text x="46" y="256">E</text>
          <text class="val" x="179" y="124">8</text>
          <text class="val" x="142" y="146" text-anchor="end">10</text>
          <text class="val" x="179" y="258" text-anchor="middle">5</text>
          <text class="val" x="160" y="236">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 10
  // Plane E is z = 0; A at the origin, D 8 to the right, B and C 8√3 in front of
  // and behind D, P 6 above A. 13 px per cm.
  {
    id: 'space-10',
    topic: 'Üç dikme teoremi',
    stem: ['Şekildeki ABC üçgeni E düzleminin üzerindedir.'],
    given: [
      '[PA] ⊥ E',
      '[PD] ⊥ [BC]',
      '|BD| = |DC|',
      '|AP| = 6 cm',
      '|AB| = 16 cm',
      'm(CAB) = 120°',
    ],
    ask: 'Buna göre, |PD| kaç cm dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '12' },
      { key: 'E', text: '8√2' },
    ],
    answer: 'C',
    hint: '[AD] yi çiz: üç dikme teoremine göre [AD] de [BC] ye diktir.',
    solution: [
      {
        title: 'Üç dikme teoremi',
        detail: '[PA] ⊥ E ve [PD] ⊥ [BC] olduğundan [AD] ⊥ [BC] dir.',
      },
      {
        title: 'İkizkenar üçgen',
        detail:
          '[AD] hem yükseklik hem kenarortay olduğundan ABC ikizkenardır ve [AD] açıortaydır: m(BAD) = 60°.',
      },
      {
        title: 'ABD dik üçgeni',
        detail: '|AD| = |AB| · cos 60° = 16 · 1/2 = 8 cm.',
      },
      {
        title: 'PAD dik üçgeni',
        detail: '|PD|² = |AP|² + |AD|² = 6² + 8² = 100.',
      },
      {
        title: 'Sonuç',
        detail: '|PD| = 10 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 100 400 190',
      caption: 'Şekil 5',
      label:
        'Yatay E düzleminde ABC üçgeni, A daki açı 120°. A nın üstünde düzleme dik [PA], P den [BC] nin orta noktası D ye [PD] dikmesi çizilmiş. |AP| = 6, |AB| = 16.',
      svg: `
          <path class="ln" d="M28.5,273.5 L223.5,273.5 L370.5,126.5 L175.5,126.5 Z"/>
          <path class="ln" d="M141,200 L181.3,263.7 L308.7,136.3 Z"/>
          <path class="ln" d="M141,122 L141,200 M141,122 L245,200"/>
          <path class="ln" d="M237.8,194.6 L244.2,188.2 L251.4,193.6"/>
          <path class="arc" d="M159.7,192.9 A20,20 0 0 1 151.7,216.9"/>
          <path class="tick" d="M209,227.7 L217.4,236.1 M272.7,163.9 L281.1,172.3"/>
          <circle class="pt" cx="141" cy="122" r="3.2"/>
          <circle class="pt" cx="141" cy="200" r="3.2"/>
          <circle class="pt" cx="181.3" cy="263.7" r="3.2"/>
          <circle class="pt" cx="308.7" cy="136.3" r="3.2"/>
          <circle class="pt" cx="245" cy="200" r="3.2"/>
          <text x="141" y="112" text-anchor="middle">P</text>
          <text x="133" y="205" text-anchor="end">A</text>
          <text x="181.3" y="284" text-anchor="middle">B</text>
          <text x="316" y="134">C</text>
          <text x="250" y="214">D</text>
          <text x="60" y="262">E</text>
          <text class="val" x="166" y="214">120°</text>
          <text class="val" x="133" y="150" text-anchor="end">6</text>
          <text class="val" x="155" y="242" text-anchor="end">16</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 100 400 190',
      caption: 'Şekil 5',
      label:
        'Aynı şekilde [AD] çizilmiş: [AD] ⊥ [BC], |AD| = 8; PAD üçgeni A da dik.',
      svg: `
          <path class="ln" d="M28.5,273.5 L223.5,273.5 L370.5,126.5 L175.5,126.5 Z"/>
          <path class="ln" d="M141,200 L181.3,263.7 L308.7,136.3 Z"/>
          <path class="ln" d="M141,122 L141,200 M141,122 L245,200"/>
          <path class="ln" d="M237.8,194.6 L244.2,188.2 L251.4,193.6"/>
          <path class="arc" d="M159.7,192.9 A20,20 0 0 1 151.7,216.9"/>
          <path class="tick" d="M209,227.7 L217.4,236.1 M272.7,163.9 L281.1,172.3"/>
          <path class="aux" d="M141,200 L245,200"/>
          <circle class="pt" cx="141" cy="122" r="3.2"/>
          <circle class="pt" cx="141" cy="200" r="3.2"/>
          <circle class="pt" cx="181.3" cy="263.7" r="3.2"/>
          <circle class="pt" cx="308.7" cy="136.3" r="3.2"/>
          <circle class="pt" cx="245" cy="200" r="3.2"/>
          <text x="141" y="112" text-anchor="middle">P</text>
          <text x="133" y="205" text-anchor="end">A</text>
          <text x="181.3" y="284" text-anchor="middle">B</text>
          <text x="316" y="134">C</text>
          <text x="250" y="214">D</text>
          <text x="60" y="262">E</text>
          <text class="val" x="166" y="214">120°</text>
          <text class="val" x="133" y="150" text-anchor="end">6</text>
          <text class="val" x="155" y="242" text-anchor="end">16</text>
          <text class="val" x="206" y="194" text-anchor="middle">8</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 11
  // Plane E is z = 0; d lies in the front plane y = −8, so its slope is drawn
  // true: A on E, B at (12, 5) and C at (36, 15) along d. 6.5 px per cm.
  {
    id: 'space-11',
    topic: 'Doğru parçasının dik izdüşümü',
    stem: [
      'd doğrusu E düzlemini A noktasında kesiyor. B ve C noktaları d doğrusu üzerindedir ve D noktası, B noktasının E düzlemi üzerindeki dik izdüşümüdür.',
    ],
    given: ['d ∩ E = {A}', '|AB| = 13 cm', '|AD| = 12 cm', '|BC| = 26 cm'],
    ask: 'Buna göre, [BC] nin E düzlemi üzerindeki dik izdüşümünün uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '18' },
      { key: 'C', text: '20' },
      { key: 'D', text: '22' },
      { key: 'E', text: '24' },
    ],
    answer: 'E',
    hint: 'd doğrusunun E düzlemiyle yaptığı açının kosinüsünü ABD dik üçgeninden bul.',
    solution: [
      {
        title: 'Açının kosinüsü',
        detail: 'ABD üçgeni D de diktir: cos(BAD) = |AD| / |AB| = 12 / 13.',
      },
      {
        title: 'İzdüşüm kuralı',
        detail:
          'C nin izdüşümü C′ olsun. [BC] ile [DC′] arasındaki açı da BAD açısına eşittir: |DC′| = |BC| · cos(BAD).',
      },
      {
        title: 'Hesap',
        detail: '|DC′| = 26 · 12 / 13 = 2 · 12.',
      },
      {
        title: 'Sonuç',
        detail: '[BC] nin dik izdüşümünün uzunluğu 24 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 124 400 172',
      caption: 'Şekil 6',
      label:
        'd doğrusu yatay E düzlemini A noktasında eğik olarak kesiyor; d üzerindeki B noktasından düzleme [BD] dikmesi inmiş, C noktası d üzerinde B nin ötesinde. |AB| = 13, |AD| = 12, |BC| = 26.',
      svg: `
          <path class="ln" d="M9.8,272.2 L321.8,272.2 L390.8,203.2 L78.8,203.2 Z"/>
          <path class="ln" d="M44.4,271.4 L339.5,148.4"/>
          <path class="ln" d="M153.6,225.9 L153.6,258.4 M75.6,258.4 L153.6,258.4"/>
          <path class="ln" d="M153.6,250.4 L145.6,250.4 L145.6,258.4"/>
          <circle class="pt" cx="75.6" cy="258.4" r="3.2"/>
          <circle class="pt" cx="153.6" cy="225.9" r="3.2"/>
          <circle class="pt" cx="309.6" cy="160.9" r="3.2"/>
          <circle class="pt" cx="153.6" cy="258.4" r="3.2"/>
          <text x="70" y="252" text-anchor="end">A</text>
          <text x="146" y="222" text-anchor="end">B</text>
          <text x="302" y="156" text-anchor="end">C</text>
          <text x="158" y="274">D</text>
          <text x="346" y="150">d</text>
          <text x="100" y="222">E</text>
          <text class="val" x="110" y="236" text-anchor="end">13</text>
          <text class="val" x="118" y="271" text-anchor="middle">12</text>
          <text class="val" x="226" y="186" text-anchor="end">26</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 124 400 172',
      caption: 'Şekil 6',
      label:
        'Aynı şekilde C den düzleme [CC′] dikmesi ve [DC′] izdüşümü çizilmiş; ABD ve ACC′ üçgenleri benzer, |DC′| = 24.',
      svg: `
          <path class="ln" d="M9.8,272.2 L321.8,272.2 L390.8,203.2 L78.8,203.2 Z"/>
          <path class="ln" d="M44.4,271.4 L339.5,148.4"/>
          <path class="ln" d="M153.6,225.9 L153.6,258.4 M75.6,258.4 L153.6,258.4"/>
          <path class="ln" d="M153.6,250.4 L145.6,250.4 L145.6,258.4"/>
          <path class="aux" d="M309.6,160.9 L309.6,258.4 M153.6,258.4 L309.6,258.4"/>
          <path class="ln" d="M309.6,250.4 L301.6,250.4 L301.6,258.4"/>
          <circle class="pt" cx="75.6" cy="258.4" r="3.2"/>
          <circle class="pt" cx="153.6" cy="225.9" r="3.2"/>
          <circle class="pt" cx="309.6" cy="160.9" r="3.2"/>
          <circle class="pt" cx="153.6" cy="258.4" r="3.2"/>
          <circle class="pt" cx="309.6" cy="258.4" r="3.2"/>
          <text x="70" y="252" text-anchor="end">A</text>
          <text x="146" y="222" text-anchor="end">B</text>
          <text x="302" y="156" text-anchor="end">C</text>
          <text x="158" y="274">D</text>
          <text x="316" y="270">C′</text>
          <text x="346" y="150">d</text>
          <text x="100" y="222">E</text>
          <text class="val" x="110" y="236" text-anchor="end">13</text>
          <text class="val" x="118" y="271" text-anchor="middle">12</text>
          <text class="val" x="226" y="186" text-anchor="end">26</text>
          <text class="val" x="231.6" y="271" text-anchor="middle">24</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'space-12',
    topic: 'Noktanın düzleme uzaklığı',
    stem: [
      'Uzayda |AB| = 20√2 cm lik bir doğru parçası ile bu doğru parçasını 45° lik açıyla orta noktasından kesen bir E düzlemi veriliyor.',
    ],
    ask: 'Buna göre, A noktasının E düzlemine olan uzaklığı kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '10' },
      { key: 'C', text: '10√2' },
      { key: 'D', text: '15' },
      { key: 'E', text: '20' },
    ],
    answer: 'B',
    hint: 'A dan düzleme bir dikme in; orta nokta ile dikme ayağı bir dik üçgen oluşturur.',
    solution: [
      {
        title: 'Orta nokta',
        detail: 'Kesişim noktası M olsun: |AM| = 20√2 / 2 = 10√2 cm.',
      },
      {
        title: 'Dik üçgen',
        detail:
          'A dan E ye inen dikmenin ayağı H olsun. AHM üçgeni H de diktir ve m(AMH) = 45° dir.',
      },
      {
        title: 'Hesap',
        detail: '|AH| = |AM| · sin 45° = 10√2 · √2 / 2 = 10.',
      },
      {
        title: 'Sonuç',
        detail: 'A noktasının E düzlemine uzaklığı 10 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'space-13',
    topic: 'Düzlemler arasındaki açı',
    stem: [
      'Alanı 36√2 cm² olan bir dikdörtgenin 6 cm lik kısa kenarı E düzlemi üzerindedir.',
    ],
    ask: 'Dikdörtgenin E düzlemi üzerindeki dik izdüşümü bir kare olduğuna göre, dikdörtgen ile düzlemin ölçek açısı kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '30' },
      { key: 'C', text: '45' },
      { key: 'D', text: '60' },
      { key: 'E', text: '75' },
    ],
    answer: 'C',
    hint: 'Düzlemdeki kenar izdüşümde değişmez; karenin kenarını ve uzun kenarın izdüşümünü karşılaştır.',
    solution: [
      {
        title: 'Uzun kenar',
        detail: 'Uzun kenar = 36√2 / 6 = 6√2 cm.',
      },
      {
        title: 'İzdüşüm kare',
        detail:
          'Kısa kenar düzlemde olduğundan izdüşümü 6 cm kalır; izdüşüm kare olduğundan uzun kenarın izdüşümü de 6 cm dir.',
      },
      {
        title: 'Açının kosinüsü',
        detail: 'cos α = 6 / (6√2) = √2 / 2.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 45° dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'space-14',
    topic: 'Uzayda doğru ve düzlemlerin durumları',
    stem: [],
    ask: 'Uzayda aşağıdakilerden hangisi yanlıştır?',
    choices: [
      {
        key: 'A',
        text: 'Bir düzlemin dışındaki bir noktadan bu düzleme paralel olan bir tek düzlem çizilebilir.',
      },
      { key: 'B', text: 'Paralel iki düzlemden birine dik olan doğru diğerine de diktir.' },
      {
        key: 'C',
        text: 'Bir düzleme paralel olan bir doğru, bu düzlemin içindeki her doğruya paraleldir.',
      },
      { key: 'D', text: 'Bir doğruya dik olan farklı iki düzlem birbirine paraleldir.' },
      { key: 'E', text: 'Kesişen iki doğru bir tek düzlem belirtir.' },
    ],
    answer: 'C',
    hint: 'Bir küpün tavanındaki bir ayrıtı ve tabandaki ayrıtları düşün.',
    solution: [
      {
        title: 'A, B, D ve E',
        detail: 'Bu dördü uzay geometrisinin temel özellikleridir ve doğrudur.',
      },
      {
        title: 'C nin karşı örneği',
        detail:
          'Küpün tavanındaki bir ayrıt taban düzlemine paraleldir; ama tabanda ona dik olan ayrıtla aykırıdır, paralel değildir.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanlış olan önerme C seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'space-15',
    topic: 'Düzlemde üç doğrunun durumu',
    stem: [],
    ask: 'Bir düzlem içindeki farklı üç doğru ile ilgili aşağıdaki ifadelerden hangisi kesinlikle yanlıştır?',
    choices: [
      { key: 'A', text: 'Üç doğru aynı noktada kesişebilir.' },
      { key: 'B', text: 'Üç doğru birbirine paralel olabilir.' },
      { key: 'C', text: 'İki doğru paralel ise, üçüncü doğru bunlardan yalnız birini kesebilir.' },
      {
        key: 'D',
        text: 'Üç doğru birbirini ikişer ikişer farklı üç noktada kesebilir.',
      },
      { key: 'E', text: 'İki doğru paralel ise, üçüncü doğru her ikisini de kesebilir.' },
    ],
    answer: 'C',
    hint: 'Düzlemde bir doğru, paralel iki doğrudan birine paralel değilse diğerine paralel olabilir mi?',
    solution: [
      {
        title: 'A, B, D ve E',
        detail:
          'Bu durumların her biri çizilebilir: ortak noktalı üç doğru, üç paralel doğru, bir üçgenin kenar doğruları ve paralel iki doğruyu kesen bir kesen.',
      },
      {
        title: 'C',
        detail:
          'Üçüncü doğru paralellerden birini keserse ona paralel değildir; düzlemde o zaman diğerine de paralel olamaz ve onu da keser.',
      },
      {
        title: 'Sonuç',
        detail: 'Kesinlikle yanlış olan ifade C seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'space-16',
    topic: 'Düzlem ve doğruya ilişkin öncüller',
    stem: [
      'I. Doğrusal olmayan üç nokta bir tek düzlem belirtir.',
      'II. Aykırı iki doğru bir düzlem belirtir.',
      'III. Bir düzleme dik olan bir doğruyu içine alan her düzlem, o düzleme diktir.',
    ],
    ask: 'Uzayda belirtilen yukarıdaki öncüllerden hangisi veya hangileri doğrudur?',
    choices: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'Yalnız III' },
      { key: 'C', text: 'I ve II' },
      { key: 'D', text: 'I ve III' },
      { key: 'E', text: 'I, II ve III' },
    ],
    answer: 'D',
    hint: 'Aykırı doğruların tanımını hatırla: aynı düzlemde bulunabilirler mi?',
    solution: [
      {
        title: 'I',
        detail: 'Doğrusal olmayan üç noktadan bir ve yalnız bir düzlem geçer. Doğrudur.',
      },
      {
        title: 'II',
        detail: 'Aykırı doğrular aynı düzlemde bulunmayan doğrulardır; düzlem belirtmezler. Yanlıştır.',
      },
      {
        title: 'III',
        detail:
          'Bir düzleme dik doğruyu içeren her düzlem o düzleme diktir; küpün yan yüzleri tabana bu yüzden diktir. Doğrudur.',
      },
      {
        title: 'Sonuç',
        detail: 'Doğru olan öncüller I ve III tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'space-17',
    topic: 'Uzayda dik ve paralel doğrular',
    stem: [],
    ask: 'R³ te aşağıdaki önermelerden hangisi yanlıştır?',
    choices: [
      {
        key: 'A',
        text: 'Bir doğrunun dışındaki bir noktadan bu doğruya bir tek paralel doğru çizilebilir.',
      },
      {
        key: 'B',
        text: 'Bir doğrunun üzerindeki bir noktadan bu doğruya dik olan bir tek doğru çizilebilir.',
      },
      { key: 'C', text: 'Aynı doğruya paralel olan farklı iki doğru birbirine paraleldir.' },
      {
        key: 'D',
        text: 'Bir doğrunun üzerindeki bir noktadan bu doğruya dik olan bir tek düzlem çizilebilir.',
      },
      {
        key: 'E',
        text: 'Bir düzlemin dışındaki bir noktadan bu düzleme paralel sonsuz sayıda doğru çizilebilir.',
      },
    ],
    answer: 'B',
    hint: 'Doğruya o noktada dik olan düzlemi düşün; bu düzlemde noktadan kaç doğru geçer?',
    solution: [
      {
        title: 'A, C, D ve E',
        detail: 'Bunlar uzayda paralellik ve dikliğin temel özellikleridir ve doğrudur.',
      },
      {
        title: 'B',
        detail:
          'Noktadan geçen ve doğruya dik olan tek bir düzlem vardır; bu düzlemde noktadan geçen her doğru verilen doğruya diktir. Sonsuz sayıda dik doğru çizilebilir.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanlış olan önerme B seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'space-18',
    topic: 'Uzayda doğru ve düzlemlerin durumları',
    stem: [],
    ask: 'R³ te (uzayda) aşağıdakilerden hangisi kesinlikle doğrudur?',
    choices: [
      { key: 'A', text: 'Aykırı iki doğrunun her ikisini de kesen bir tek doğru vardır.' },
      { key: 'B', text: 'Aynı düzleme dik olan iki düzlem birbirine paraleldir.' },
      {
        key: 'C',
        text: 'Paralel iki düzlemden birinin içindeki her doğru, diğer düzleme paraleldir.',
      },
      { key: 'D', text: 'Aynı düzleme paralel olan iki düzlem kesişebilir.' },
      { key: 'E', text: 'Doğrusal olmayan dört nokta daima bir düzlem belirtir.' },
    ],
    answer: 'C',
    hint: 'Her seçenek için bir küpün yüzleri ve ayrıtları arasında bir karşı örnek ara.',
    solution: [
      {
        title: 'A ve E',
        detail:
          'Aykırı doğruların birinden seçilen her noktayı diğerinin bir noktasına bağlayan doğru ikisini de keser; sonsuz sayıda vardır. Dört noktadan biri diğer üçünün düzleminin dışında olabilir. İkisi de yanlıştır.',
      },
      {
        title: 'B ve D',
        detail:
          'Küpün komşu iki yan yüzü tabana diktir ama birbirini keser. Aynı düzleme paralel iki farklı düzlem ise birbirine paraleldir, kesişemez. İkisi de yanlıştır.',
      },
      {
        title: 'C',
        detail:
          'Paralel düzlemlerin ortak noktası yoktur; birinin içindeki doğrunun da diğeriyle ortak noktası olamaz, yani ona paraleldir. Doğrudur.',
      },
      {
        title: 'Sonuç',
        detail: 'Kesinlikle doğru olan C seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 19
  // Plane of BKC is z = 0; K at the origin, B 6√2 toward the viewer, C 6√2 to
  // the right, E the midpoint of [BC] and A 2√7 above K. 20 px per cm.
  {
    id: 'space-19',
    topic: 'Üç dikme teoremiyle uzunluk',
    stem: [],
    given: ['|BE| = |EC| = 6 cm', '|KB| = |KC|', '|AC| = 10 cm', 'm(BKC) = 90°'],
    ask: 'Yukarıdaki şekilde [AK], BKC dik üçgeninin bulunduğu düzleme dik olduğuna göre, |AE| kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '2√13' },
      { key: 'C', text: '8' },
      { key: 'D', text: '2√17' },
      { key: 'E', text: '4√5' },
    ],
    answer: 'C',
    hint: 'Önce ikizkenar dik üçgende |KC| ve |KE| yi bul, sonra A nın düzleme uzaklığını hesapla.',
    solution: [
      {
        title: 'BKC üçgeni',
        detail:
          '|BC| = 12 cm ve üçgen ikizkenar dik olduğundan |KC| = 12 / √2 = 6√2 cm; hipotenüse ait kenarortay |KE| = 12 / 2 = 6 cm.',
      },
      {
        title: 'AKC dik üçgeni',
        detail: '[AK] düzleme dik olduğundan [AK] ⊥ [KC]: |AK|² = 10² − (6√2)² = 100 − 72 = 28.',
      },
      {
        title: 'AKE dik üçgeni',
        detail: '[AK] ⊥ [KE] olduğundan |AE|² = |AK|² + |KE|² = 28 + 36 = 64.',
      },
      {
        title: 'Sonuç',
        detail: '|AE| = 8 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 20 400 222',
      caption: 'Şekil 7',
      label:
        'Taralı BKC dik üçgeni K de dik, E noktası [BC] nin orta noktası; K nin üstünde üçgenin düzlemine dik [AK] çizilmiş ve A; B, C, E ile birleştirilmiş. |BE| = |EC| = 6, |AC| = 10.',
      svg: `
          <path class="shade" d="M145,150 L85,210 L314.7,150 Z"/>
          <path class="ln" d="M145,150 L85,210 L314.7,150 Z"/>
          <path class="ln" d="M145,44.2 L145,150 M145,44.2 L85,210 M145,44.2 L314.7,150 M145,44.2 L199.9,180"/>
          <path class="ln" d="M138.6,156.4 L156.6,156.4 L163,150"/>
          <path class="tick" d="M141,189.2 L144,200.8 M255.8,159.2 L258.8,170.8"/>
          <circle class="pt" cx="145" cy="44.2" r="3.2"/>
          <circle class="pt" cx="145" cy="150" r="3.2"/>
          <circle class="pt" cx="85" cy="210" r="3.2"/>
          <circle class="pt" cx="314.7" cy="150" r="3.2"/>
          <circle class="pt" cx="199.9" cy="180" r="3.2"/>
          <text x="145" y="34" text-anchor="middle">A</text>
          <text x="137" y="146" text-anchor="end">K</text>
          <text x="77" y="226" text-anchor="end">B</text>
          <text x="323" y="156">C</text>
          <text x="202" y="200" text-anchor="middle">E</text>
          <text class="val" x="238" y="92">10</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 222',
      caption: 'Şekil 7',
      label:
        'Aynı şekilde [KE] çizilmiş: |KE| = 6, |KC| = 6√2; AKC ve AKE üçgenleri K de dik.',
      svg: `
          <path class="shade" d="M145,150 L85,210 L314.7,150 Z"/>
          <path class="ln" d="M145,150 L85,210 L314.7,150 Z"/>
          <path class="ln" d="M145,44.2 L145,150 M145,44.2 L85,210 M145,44.2 L314.7,150 M145,44.2 L199.9,180"/>
          <path class="ln" d="M138.6,156.4 L156.6,156.4 L163,150"/>
          <path class="tick" d="M141,189.2 L144,200.8 M255.8,159.2 L258.8,170.8"/>
          <path class="aux" d="M145,150 L199.9,180"/>
          <circle class="pt" cx="145" cy="44.2" r="3.2"/>
          <circle class="pt" cx="145" cy="150" r="3.2"/>
          <circle class="pt" cx="85" cy="210" r="3.2"/>
          <circle class="pt" cx="314.7" cy="150" r="3.2"/>
          <circle class="pt" cx="199.9" cy="180" r="3.2"/>
          <text x="145" y="34" text-anchor="middle">A</text>
          <text x="137" y="146" text-anchor="end">K</text>
          <text x="77" y="226" text-anchor="end">B</text>
          <text x="323" y="156">C</text>
          <text x="202" y="200" text-anchor="middle">E</text>
          <text class="val" x="238" y="92">10</text>
          <text class="val" x="162" y="178" text-anchor="end">6</text>
          <text class="val" x="232" y="144" text-anchor="middle">6√2</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 20
  {
    id: 'space-20',
    topic: 'Düzlemde doğrulara ilişkin öncüller',
    stem: [
      'Düzlemde;',
      'I. Farklı iki noktadan bir tek doğru geçer.',
      'II. Aynı doğruya dik olan farklı iki doğru birbirine paraleldir.',
      'III. Paralel iki doğrudan birine dik olan doğru diğerine de diktir.',
      'IV. Kesişmeyen iki doğru aykırı doğrulardır.',
    ],
    ask: 'Yukarıda verilen öncüllerden hangisi veya hangileri yanlıştır?',
    choices: [
      { key: 'A', text: 'Yalnız II' },
      { key: 'B', text: 'Yalnız IV' },
      { key: 'C', text: 'II ve IV' },
      { key: 'D', text: 'III ve IV' },
      { key: 'E', text: 'I, II ve IV' },
    ],
    answer: 'B',
    hint: 'Sorunun "düzlemde" dediğine dikkat et; aykırı doğrular bir düzlemde bulunabilir mi?',
    solution: [
      {
        title: 'I ve III',
        detail:
          'Farklı iki noktadan bir tek doğru geçer. Düzlemde paralel iki doğrudan birine dik olan doğru diğerini de aynı açıyla keser, yani ona da diktir. İkisi de doğrudur.',
      },
      {
        title: 'II',
        detail:
          'Düzlemde aynı doğruya dik olan iki doğru, bu doğruyla eş yöndeş açılar yapar ve birbirine paraleldir. Doğrudur (uzayda bu doğru olmazdı).',
      },
      {
        title: 'IV',
        detail:
          'Aykırı doğrular aynı düzlemde bulunmayan doğrulardır. Düzlemde kesişmeyen iki doğru paraleldir. Yanlıştır.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanlış olan yalnız IV numaralı öncüldür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'space-21',
    topic: 'Uzayda doğru ve düzlemlerin durumları',
    stem: [],
    ask: 'R³ te (uzayda) aşağıdaki önermelerden hangisi yanlıştır?',
    choices: [
      { key: 'A', text: 'Paralel iki düzlemden birine dik olan düzlem diğerine de diktir.' },
      { key: 'B', text: 'Aynı düzleme dik olan farklı iki doğru birbirine paraleldir.' },
      {
        key: 'C',
        text: 'Bir düzlemin dışındaki bir noktadan bu düzleme bir tek dik doğru çizilebilir.',
      },
      { key: 'D', text: 'Aynı doğruya paralel olan farklı iki düzlem birbirine paraleldir.' },
      {
        key: 'E',
        text: 'Bir doğru parçasının uç noktalarından eşit uzaklıkta bulunan noktaların geometrik yeri bir düzlemdir.',
      },
    ],
    answer: 'D',
    hint: 'Bir küpün düşey bir ayrıtını ve bu ayrıta paralel olan yüzleri düşün.',
    solution: [
      {
        title: 'A, B ve C',
        detail: 'Bunlar uzayda diklik ve paralelliğin temel özellikleridir ve doğrudur.',
      },
      {
        title: 'E',
        detail:
          'Uzayda bir doğru parçasının uçlarına eşit uzaklıktaki noktalar, parçanın orta noktasından geçen ve ona dik olan düzlemi (orta dikme düzlemini) oluşturur. Doğrudur.',
      },
      {
        title: 'D nin karşı örneği',
        detail:
          'Küpün önündeki düşey bir ayrıt, arka yüze ve karşı yan yüze paraleldir; ama bu iki yüz arka düşey ayrıt boyunca kesişir.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanlış olan önerme D seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 22
  {
    id: 'space-22',
    topic: 'Düzlemler arasındaki açı ve izdüşüm',
    stem: [
      'E₁ ve E₂ kesişen düzlemlerinin ölçek açısının ölçüsü 30° dir. P ∈ E₁ alınıyor. P noktasının E₂ düzlemi üzerindeki dik izdüşümü T noktasıdır.',
    ],
    ask: '|PT| = 6 cm olduğuna göre, T noktasının düzlemlerin arakesit doğrusuna uzaklığı kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '6√3' },
      { key: 'D', text: '12' },
      { key: 'E', text: '12√3' },
    ],
    answer: 'C',
    hint: 'P den arakesite bir dikme in; P, T ve dikme ayağı T de dik olan bir üçgen oluşturur.',
    solution: [
      {
        title: 'Dik üçgen',
        detail:
          'P den arakesit doğrusuna inen dikmenin ayağı H olsun. Üç dikme teoremine göre [TH] de arakesite diktir; PTH üçgeni T de diktir ve m(PHT) = 30° dir.',
      },
      {
        title: '|PH|',
        detail: '30° nin karşısındaki kenar hipotenüsün yarısıdır: |PH| = 2 · 6 = 12 cm.',
      },
      {
        title: '|TH|',
        detail: '|TH|² = 12² − 6² = 144 − 36 = 108 ⇒ |TH| = 6√3.',
      },
      {
        title: 'Sonuç',
        detail: 'T noktasının arakesit doğrusuna uzaklığı 6√3 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  {
    id: 'space-23',
    topic: 'Düzlemlerin uzayı bölmesi ve öncüller',
    stem: [
      'R³ te,',
      'I. Kesişen iki düzlem uzayı dört bölgeye ayırır.',
      'II. Paralel iki düzlemden birini kesen düzlem diğerini de keser.',
      'III. Aynı düzleme paralel olan iki doğru birbirine paraleldir.',
    ],
    ask: 'Yukarıdaki öncüllerden hangisi veya hangileri her zaman doğrudur?',
    choices: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'Yalnız II' },
      { key: 'C', text: 'I ve II' },
      { key: 'D', text: 'II ve III' },
      { key: 'E', text: 'I, II ve III' },
    ],
    answer: 'C',
    hint: 'Açık bir kitabın iki kapağını ve bir masanın üzerinde duran iki kalemi düşün.',
    solution: [
      {
        title: 'I',
        detail:
          'Kesişen iki düzlemin her biri uzayı ikiye böler; birlikte 2 · 2 = 4 bölge oluşur. Doğrudur.',
      },
      {
        title: 'II',
        detail:
          'Bir düzlem paralel iki düzlemden birini keser de diğerini kesmezse ona paralel olurdu; o zaman ilkine de paralel olurdu. Bu çelişkidir. Doğrudur.',
      },
      {
        title: 'III',
        detail:
          'Masanın üstüne dik açıyla konan iki kalem masa düzlemine paraleldir ama birbirine paralel değildir. Yanlıştır.',
      },
      {
        title: 'Sonuç',
        detail: 'Her zaman doğru olanlar I ve II dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24
  {
    id: 'space-24',
    topic: 'Düzlem belirten durumlar',
    stem: [],
    ask: 'R³ te aşağıdaki ifadelerden hangisi yanlıştır?',
    choices: [
      { key: 'A', text: 'Aykırı iki doğru bir düzlem belirtmez.' },
      { key: 'B', text: 'Paralel iki doğruyu içinde bulunduran bir tek düzlem vardır.' },
      {
        key: 'C',
        text: 'Bir doğrunun dışındaki bir noktadan bu doğruya dik olan bir tek düzlem geçer.',
      },
      {
        key: 'D',
        text: 'Bir düzlemin dışındaki bir noktadan bu düzleme dik olan sonsuz sayıda düzlem geçer.',
      },
      {
        key: 'E',
        text: 'Bir düzlemin dışındaki bir noktadan bu düzleme paralel birden fazla düzlem çizilebilir.',
      },
    ],
    answer: 'E',
    hint: 'Bir noktadan, verilen düzleme paralel kaç farklı düzlem geçebilir?',
    solution: [
      {
        title: 'A ve B',
        detail:
          'Aykırı doğrular aynı düzlemde bulunmaz. Paralel iki doğru ise bir ve yalnız bir düzlem belirtir. İkisi de doğrudur.',
      },
      {
        title: 'C ve D',
        detail:
          'Doğruya dik düzlemin yönü tek türlüdür ve noktadan bir tanesi geçer. Düzleme noktadan inen dikmeyi içeren her düzlem ise o düzleme diktir; sonsuz tanedir. İkisi de doğrudur.',
      },
      {
        title: 'E',
        detail:
          'Düzlemin dışındaki bir noktadan bu düzleme paralel bir tek düzlem çizilebilir. Yanlıştır.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanlış olan ifade E seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 25
  // Rectangle ABCD lies in z = 0 with A at the origin, AB = 6 along x and
  // AD = 8 into the page. E is the midpoint of [BC], F = E + 6 up, so the plane
  // ADF meets the base at 45°. H, the midpoint of [AD], sees the 45° angle
  // drawn true because the plane FHE is a front plane. Depth recedes at 30°
  // here, not 45°: at 45° the line AF would fall on top of AD. 30 px per cm.
  {
    id: 'space-25',
    topic: 'Düzlemler arasındaki açı ve alan',
    stem: [
      'Şekilde ADF üçgeninin bulunduğu düzlem ile ABCD dikdörtgeninin bulunduğu düzlem arasında 45° lik açı vardır.',
    ],
    given: ['|AB| = 6 cm', '|AD| = 8 cm', 'E ∈ [BC]'],
    ask: 'F noktasının ABCD dikdörtgeni üzerindeki dik izdüşümü E noktası olduğuna göre, ADF üçgeninin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '12√2' },
      { key: 'B', text: '24' },
      { key: 'C', text: '24√2' },
      { key: 'D', text: '48' },
      { key: 'E', text: '48√2' },
    ],
    answer: 'C',
    hint: 'ADF üçgeninin ABCD düzlemi üzerindeki izdüşümü ADE üçgenidir.',
    solution: [
      {
        title: 'İzdüşüm üçgeni',
        detail:
          'A ve D düzlemdedir, F nin izdüşümü E dir; ADF üçgeninin izdüşümü ADE üçgenidir.',
      },
      {
        title: 'ADE nin alanı',
        detail:
          'E, [BC] üzerinde olduğundan [AD] ye uzaklığı |AB| = 6 cm dir: Alan(ADE) = 8 · 6 / 2 = 24 cm².',
      },
      {
        title: 'İzdüşüm alanı',
        detail: 'Alan(ADE) = Alan(ADF) · cos 45° ⇒ Alan(ADF) = 24 / (√2 / 2) = 24√2.',
      },
      {
        title: 'Sonuç',
        detail: 'ADF üçgeninin alanı 24√2 cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 20 400 280',
      caption: 'Şekil 8',
      label:
        'ABCD dikdörtgeni yatay duruyor; [BC] üzerindeki E noktasının tam üstünde F noktası var ve F; A ve D ile birleştirilerek ADF üçgeni oluşturulmuş. |AB| = 6, |AD| = 8.',
      svg: `
          <path class="ln" d="M68,270 L248,270 L351.9,210 L171.9,210 Z"/>
          <path class="ln" d="M68,270 L300,60 L171.9,210 M300,60 L300,240"/>
          <circle class="pt" cx="68" cy="270" r="3.2"/>
          <circle class="pt" cx="248" cy="270" r="3.2"/>
          <circle class="pt" cx="351.9" cy="210" r="3.2"/>
          <circle class="pt" cx="171.9" cy="210" r="3.2"/>
          <circle class="pt" cx="300" cy="240" r="3.2"/>
          <circle class="pt" cx="300" cy="60" r="3.2"/>
          <text x="60" y="284" text-anchor="end">A</text>
          <text x="256" y="286">B</text>
          <text x="360" y="209">C</text>
          <text x="164" y="205" text-anchor="end">D</text>
          <text x="308" y="254">E</text>
          <text x="300" y="50" text-anchor="middle">F</text>
          <text class="val" x="158" y="290" text-anchor="middle">6</text>
          <text class="val" x="104" y="266">8</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 280',
      caption: 'Şekil 8',
      label:
        'Aynı şekilde [AD] nin orta noktası H den E ye ve F ye doğru parçaları çizilmiş: |HE| = 6, m(FHE) = 45°, FEH üçgeni E de dik.',
      svg: `
          <path class="ln" d="M68,270 L248,270 L351.9,210 L171.9,210 Z"/>
          <path class="ln" d="M68,270 L300,60 L171.9,210 M300,60 L300,240"/>
          <path class="aux" d="M120,240 L300,240 M120,240 L300,60"/>
          <path class="aux" d="M290,240 L290,230 L300,230"/>
          <path class="arc" d="M150,240 A30,30 0 0 0 141.2,218.8"/>
          <circle class="pt" cx="68" cy="270" r="3.2"/>
          <circle class="pt" cx="248" cy="270" r="3.2"/>
          <circle class="pt" cx="351.9" cy="210" r="3.2"/>
          <circle class="pt" cx="171.9" cy="210" r="3.2"/>
          <circle class="pt" cx="300" cy="240" r="3.2"/>
          <circle class="pt" cx="300" cy="60" r="3.2"/>
          <circle class="pt" cx="120" cy="240" r="3.2"/>
          <text x="60" y="284" text-anchor="end">A</text>
          <text x="256" y="286">B</text>
          <text x="360" y="209">C</text>
          <text x="164" y="205" text-anchor="end">D</text>
          <text x="308" y="254">E</text>
          <text x="300" y="50" text-anchor="middle">F</text>
          <text x="112" y="234" text-anchor="end">H</text>
          <text class="val" x="158" y="290" text-anchor="middle">6</text>
          <text class="val" x="104" y="266">8</text>
          <text class="val" x="156" y="232">45°</text>
          <text class="val" x="210" y="256" text-anchor="middle">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 26
  {
    id: 'space-26',
    topic: 'Doğru ve düzlem önermelerini sayma',
    stem: [
      '1. Paralel iki düzlemden birine dik olan doğru diğerine de diktir.',
      '2. Aykırı iki doğru bir düzlem belirtir.',
      '3. Aynı düzleme paralel olan iki doğru birbirine paraleldir.',
      '4. Aynı doğruya dik olan farklı iki düzlem birbirine paraleldir.',
      '5. Kesişen iki düzlemden birine dik olan doğru diğerine de diktir.',
    ],
    ask: 'R³ te yukarıdaki önermelerden kaç tanesi doğrudur?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4' },
      { key: 'E', text: '5' },
    ],
    answer: 'B',
    hint: 'Her önerme için bir küpün yüzleri ve ayrıtları arasında bir karşı örnek ara.',
    solution: [
      {
        title: '1 ve 4',
        detail:
          'Paralel düzlemlerin normal doğrultusu aynıdır; birine dik doğru diğerine de diktir. Aynı doğruya dik iki farklı düzlemin de normali aynıdır, bu yüzden paraleldirler. İkisi de doğrudur.',
      },
      {
        title: '2',
        detail: 'Aykırı doğrular aynı düzlemde bulunmaz; düzlem belirtmezler. Yanlıştır.',
      },
      {
        title: '3',
        detail:
          'Küpün tavanındaki iki komşu ayrıt taban düzlemine paraleldir ama birbirini keser. Yanlıştır.',
      },
      {
        title: '5',
        detail:
          'Küpün düşey ayrıtı taban düzlemine diktir, ama tabanı kesen yan yüz düzleminin içindedir. Yanlıştır.',
      },
      {
        title: 'Sonuç',
        detail: 'Doğru olan önermeler 1 ve 4 tür; 2 tanedir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27
  // Plane E is z = 0 with B at the origin, D 6 cm to the right and C 6 cm into
  // the page behind D; A sits 6√2 cm above C. Cabinet oblique, depth at half
  // scale along 45°, 20 px per cm, origin at (80, 260).
  {
    id: 'space-27',
    topic: 'Üç dikme teoremiyle uzunluk',
    stem: [],
    given: [
      'B, C, D noktaları E düzlemi üzerinde',
      '[AC] ⊥ E',
      '[AD] ⊥ [BD]',
      'm(ABC) = 45°',
      'm(BAD) = 30°',
      '|BD| = 6 cm',
    ],
    ask: 'Yukarıdaki verilere göre, |DC| kaç cm dir?',
    choices: [
      { key: 'A', text: '3√2' },
      { key: 'B', text: '2√6' },
      { key: 'C', text: '6' },
      { key: 'D', text: '4√3' },
      { key: 'E', text: '6√2' },
    ],
    answer: 'C',
    hint: 'ABD ve ABC üçgenlerinin ikisi de dik üçgendir; ortak kenarları [AB] dir.',
    solution: [
      {
        title: 'ABD üçgeni',
        detail:
          'D de dik ve m(BAD) = 30° olduğundan 30° nin karşısındaki |BD| hipotenüsün yarısıdır: |AB| = 12 cm, |AD| = 6√3 cm.',
      },
      {
        title: 'ABC üçgeni',
        detail:
          '[AC] ⊥ E olduğundan üçgen C de diktir ve m(ABC) = 45° dir: |AC| = |BC| = 12 / √2 = 6√2 cm.',
      },
      {
        title: 'ACD üçgeni',
        detail:
          '[AC] ⊥ E olduğundan [AC] ⊥ [CD]: |DC|² = |AD|² − |AC|² = 108 − 72 = 36.',
      },
      {
        title: 'Sonuç',
        detail:
          '|DC| = 6 cm dir. (Üç dikme teoremine göre [CD] ⊥ [BD] olur; |BC|² = 36 + 36 = 72 ile de tutarlıdır.)',
      },
    ],
    figure: {
      viewBox: '0 20 400 280',
      caption: 'Şekil 9',
      label:
        'E düzlemi üzerinde B, C ve D noktaları var; A noktası C nin tam üstünde, [AC] düzleme dik. A; B ve D ile birleştirilmiş, [BD] ve [BC] çizilmiş. m(ABC) = 45°, m(BAD) = 30°, |BD| = 6.',
      svg: `
          <path class="ln" d="M25.3,284.7 L255.3,284.7 L350.7,189.3 L120.7,189.3 Z"/>
          <path class="ln" d="M80,260 L200,260 M80,260 L242.4,217.6 M242.4,47.9 L80,260 M242.4,47.9 L200,260 M242.4,47.9 L242.4,217.6"/>
          <path class="arc" d="M112.9,251.4 A34,34 0 0 0 100.7,233"/>
          <path class="arc" d="M235.7,81.3 A34,34 0 0 1 221.7,74.9"/>
          <circle class="pt" cx="80" cy="260" r="3.2"/>
          <circle class="pt" cx="200" cy="260" r="3.2"/>
          <circle class="pt" cx="242.4" cy="217.6" r="3.2"/>
          <circle class="pt" cx="242.4" cy="47.9" r="3.2"/>
          <text x="242.4" y="38" text-anchor="middle">A</text>
          <text x="72" y="256" text-anchor="end">B</text>
          <text x="250" y="226">C</text>
          <text x="200" y="279" text-anchor="middle">D</text>
          <text x="40" y="279">E</text>
          <text class="val" x="120" y="244">45°</text>
          <text class="val" x="210" y="72" text-anchor="end">30°</text>
          <text class="val" x="140" y="277" text-anchor="middle">6</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 280',
      caption: 'Şekil 9',
      label:
        'Aynı şekilde [DC] çizilmiş: üç dikme teoremine göre [DC] ⊥ [BD] ve |DC| = 6.',
      svg: `
          <path class="ln" d="M25.3,284.7 L255.3,284.7 L350.7,189.3 L120.7,189.3 Z"/>
          <path class="ln" d="M80,260 L200,260 M80,260 L242.4,217.6 M242.4,47.9 L80,260 M242.4,47.9 L200,260 M242.4,47.9 L242.4,217.6"/>
          <path class="arc" d="M112.9,251.4 A34,34 0 0 0 100.7,233"/>
          <path class="arc" d="M235.7,81.3 A34,34 0 0 1 221.7,74.9"/>
          <path class="aux" d="M200,260 L242.4,217.6 M190,260 L197.1,252.9 L207.1,252.9"/>
          <circle class="pt" cx="80" cy="260" r="3.2"/>
          <circle class="pt" cx="200" cy="260" r="3.2"/>
          <circle class="pt" cx="242.4" cy="217.6" r="3.2"/>
          <circle class="pt" cx="242.4" cy="47.9" r="3.2"/>
          <text x="242.4" y="38" text-anchor="middle">A</text>
          <text x="72" y="256" text-anchor="end">B</text>
          <text x="250" y="226">C</text>
          <text x="200" y="279" text-anchor="middle">D</text>
          <text x="40" y="279">E</text>
          <text class="val" x="120" y="244">45°</text>
          <text class="val" x="210" y="72" text-anchor="end">30°</text>
          <text class="val" x="140" y="277" text-anchor="middle">6</text>
          <text class="val" x="230" y="252">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 28
  {
    id: 'space-28',
    topic: 'Uzayda doğru ve düzlem öncülleri',
    stem: [
      'I. Uzayda kesişmeyen iki doğru birbirine paraleldir.',
      'II. Farklı iki düzlemin ortak noktası varsa, ortak noktaları bir doğru oluşturur.',
      'III. Bir düzlemin dışındaki bir noktadan bu düzleme paralel sonsuz sayıda doğru çizilebilir.',
    ],
    ask: 'R³ te yukarıdaki öncüllerden hangisi veya hangileri yanlıştır?',
    choices: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'Yalnız II' },
      { key: 'C', text: 'Yalnız III' },
      { key: 'D', text: 'I ve II' },
      { key: 'E', text: 'I ve III' },
    ],
    answer: 'A',
    hint: 'Uzayda kesişmeyen iki doğru için paralellikten başka bir durum var mı?',
    solution: [
      {
        title: 'I',
        detail:
          'Uzayda kesişmeyen iki doğru paralel de olabilir aykırı da olabilir; küpün tavanındaki ve tabanındaki dik yönlü iki ayrıt aykırıdır. Yanlıştır.',
      },
      {
        title: 'II',
        detail: 'Farklı iki düzlem ortak noktaya sahipse bir doğru boyunca kesişir. Doğrudur.',
      },
      {
        title: 'III',
        detail:
          'Noktadan geçen ve düzleme paralel olan tek düzlemin içindeki, noktadan geçen her doğru verilen düzleme paraleldir; sonsuz tanedir. Doğrudur.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanlış olan yalnız I numaralı öncüldür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 29
  {
    id: 'space-29',
    topic: 'Uzayda doğru ve düzlemlerin durumları',
    stem: [],
    ask: 'R³ te, aşağıdaki ifadelerden hangisi yanlıştır?',
    choices: [
      { key: 'A', text: 'Farklı iki noktadan yalnız bir doğru geçer.' },
      { key: 'B', text: 'Bir doğrudan sonsuz sayıda düzlem geçer.' },
      { key: 'C', text: 'Bir doğru ile dışındaki bir nokta yalnız bir düzlem belirtir.' },
      {
        key: 'D',
        text: 'Paralel iki düzlemden birinin içindeki her doğru, diğer düzlemin içindeki her doğruya paraleldir.',
      },
      { key: 'E', text: 'Paralel iki doğrudan birini kesen düzlem diğerini de keser.' },
    ],
    answer: 'D',
    hint: 'Küpün tavanındaki bir ayrıtı, tabandaki ona dik yöndeki bir ayrıtla karşılaştır.',
    solution: [
      {
        title: 'A, B ve C',
        detail:
          'Farklı iki nokta bir tek doğru belirtir; bir doğru etrafında sonsuz düzlem döner; bir doğru ve dışındaki bir nokta bir tek düzlem belirtir. Hepsi doğrudur.',
      },
      {
        title: 'E',
        detail:
          'Düzlem paralel doğrulardan birini keser de diğerini kesmezse, ikinci doğru düzleme paralel olur; o zaman ona paralel olan birincisi de düzleme paralel olurdu. Doğrudur.',
      },
      {
        title: 'D nin karşı örneği',
        detail:
          'Küpün tavanı ile tabanı paraleldir; ama tavandaki bir ayrıt, tabanda ona dik yöndeki ayrıtla aykırıdır, paralel değildir.',
      },
      {
        title: 'Sonuç',
        detail: 'Yanlış olan ifade D seçeneğidir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 30
  {
    id: 'space-30',
    topic: 'Doğruların düzlemi bölmesi',
    stem: [],
    ask: 'Beş doğru bir düzlemi en fazla kaç bölgeye ayırır?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '15' },
      { key: 'C', text: '16' },
      { key: 'D', text: '18' },
      { key: 'E', text: '32' },
    ],
    answer: 'C',
    hint: 'Her yeni doğru öncekilerin hepsini farklı noktalarda keserse kaç yeni bölge oluşturur?',
    solution: [
      {
        title: 'En fazla bölge',
        detail:
          'Bölge sayısının en fazla olması için hiçbir iki doğru paralel olmamalı ve hiçbir üç doğru aynı noktadan geçmemelidir.',
      },
      {
        title: 'Yeni doğrunun katkısı',
        detail:
          'k. doğru önceki k − 1 doğruyu farklı noktalarda keser, k parçaya ayrılır ve her parçası bir bölgeyi ikiye böler: k yeni bölge ekler.',
      },
      {
        title: 'Sayma',
        detail: 'Boş düzlem 1 bölgedir: 1 + 1 + 2 + 3 + 4 + 5 = 16.',
      },
      {
        title: 'Sonuç',
        detail: 'Beş doğru düzlemi en fazla 16 bölgeye ayırır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'space-31',
    topic: 'Kesişen düzlemlerde en kısa yol',
    stem: [
      'E ve P düzlemlerinin arakesit doğrusu d dir. A ∈ E ve C ∈ P noktalarından d doğrusuna inilen dikmelerin ayakları sırasıyla H ve B dir.',
      'A noktasından hareket eden bir karınca, düzlemler üzerinde yürüyerek d doğrusu üzerindeki bir noktaya uğrar ve C noktasına ulaşır.',
    ],
    given: ['[AH] ⊥ d', '[CB] ⊥ d', '|AH| = 6 cm', '|BC| = 3 cm', '|HB| = 12 cm'],
    ask: 'Buna göre, karıncanın alabileceği en kısa yol kaç cm dir?',
    choices: [
      { key: 'A', text: '3√13' },
      { key: 'B', text: '12' },
      { key: 'C', text: '3√17' },
      { key: 'D', text: '15' },
      { key: 'E', text: '3√29' },
    ],
    answer: 'D',
    hint: 'P düzlemini d doğrusu etrafında döndürerek E ile aynı düzleme aç.',
    solution: [
      {
        title: 'Düzlemleri açma',
        detail:
          'P düzlemi d etrafında döndürülüp E ile aynı düzleme getirilirse C, d nin A ya göre öbür yanına düşer ve uzunluklar değişmez.',
      },
      {
        title: 'En kısa yol',
        detail: 'Açılmış düzlemde en kısa yol [AC] doğru parçasıdır; d yi bir noktada keser.',
      },
      {
        title: 'Dik üçgen',
        detail:
          'd ye paralel yönde 12 cm, d ye dik yönde 6 + 3 = 9 cm ilerlenir: |AC|² = 12² + 9² = 144 + 81 = 225.',
      },
      {
        title: 'Sonuç',
        detail: 'En kısa yol |AC| = 15 cm dir.',
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
export const SPACE_BANK: readonly Question[] = QUESTIONS;

export const UNIT_11_SPACE: Unit = {
  id: 'space',
  order: 11,
  title: 'Uzayda Doğru ve Düzlem',
  subtitle: 'Ünite 11',
  description:
    'Düzlem belirten durumlar, uzayda doğru ve düzlemlerin birbirine göre durumları, dik izdüşüm ve üç dikme teoremi.',
  modules: [
    {
      id: 'space-m1',
      order: 1,
      title: 'Uzayda doğru, düzlem ve dikme',
      summary:
        'Ortak kenarlı iki karton, doğru ve düzlem önermeleri, düzlem belirten durumlar, izdüşüm alanı, dik kesişen iki kare ve üç dikme teoremi.',
      questions: pick(
        'space-1',
        'space-2',
        'space-3',
        'space-4',
        'space-5',
        'space-6',
        'space-7',
      ),
    },
    {
      id: 'space-m2',
      order: 2,
      title: 'İzdüşüm, uzaklık ve üç dikme',
      summary:
        'Daima doğru önermeler, üç dikme teoremiyle alan ve uzunluk, doğru parçasının izdüşümü, düzleme uzaklık ve ölçek açısı.',
      questions: pick('space-8', 'space-9', 'space-10', 'space-11', 'space-12', 'space-13'),
    },
    {
      id: 'space-m3',
      order: 3,
      title: 'Doğru ve düzlem önermeleri',
      summary:
        'Yanlış ve kesinlikle doğru önermeler, düzlemde üç doğru, öncüller ve dik üçgenin düzlemine çıkılan dikme.',
      questions: pick('space-14', 'space-15', 'space-16', 'space-17', 'space-18', 'space-19'),
    },
    {
      id: 'space-m4',
      order: 4,
      title: 'Öncüller, ölçek açısı ve izdüşüm alanı',
      summary:
        'Düzlemde ve uzayda öncüller, düzlem belirten durumlar, ölçek açısıyla uzaklık ve eğik üçgenin izdüşüm alanı.',
      questions: pick('space-20', 'space-21', 'space-22', 'space-23', 'space-24', 'space-25'),
    },
    {
      id: 'space-m5',
      order: 5,
      title: 'Dikmeler, bölgeler ve en kısa yol',
      summary:
        'Önerme sayma, üç dikme teoremiyle uzunluk, öncüller, doğruların düzlemi bölmesi ve kesişen düzlemlerde en kısa yol.',
      questions: pick('space-26', 'space-27', 'space-28', 'space-29', 'space-30', 'space-31'),
    },
  ],
};
