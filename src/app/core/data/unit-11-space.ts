import { Question, Unit } from '../models';

/**
 * Unit 11 — Lines and planes in space.
 * Original questions written in the style of the "Uzay Geometri — Çözümlü Test"
 * source: two square cards hinged along a common edge, true/false statements
 * about lines and planes, the plane axioms, the area of an orthogonal
 * projection, two perpendicular squares and the theorem of three perpendiculars.
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
  ],
};
