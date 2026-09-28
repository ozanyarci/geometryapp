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
  ],
};
