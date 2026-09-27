import { Question, Unit } from '../models';

/**
 * Unit 10 — Spheres and solids of revolution.
 * Original questions written in the style of the "Küre ve Dönel Cisimler —
 * Çözümlü Test" source: a plane section of a sphere, a quarter disc turned about
 * its radius, a hemisphere of water drained into a cylinder, a triangle under a
 * line turned about the x-axis, a ball dropped into a water-filled cylinder and a
 * sphere inscribed in a cone.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Solids are drawn as in unit 9: circular bases become ellipses flattened to 0.3,
 * and every figure notes its pixel-per-unit scale beside it.
 */
const QUESTIONS: Question[] = [
  // ---------------------------------------------------------------- 1
  {
    id: 'spheres-1',
    topic: 'Kürenin düzlemle ara kesiti',
    stem: [],
    ask: 'Yüzey alanı 100π cm² olan bir kürenin merkezinden 3 cm uzaklıktaki bir düzlemle ara kesitinin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '9π' },
      { key: 'B', text: '12π' },
      { key: 'C', text: '16π' },
      { key: 'D', text: '20π' },
      { key: 'E', text: '25π' },
    ],
    answer: 'C',
    hint: 'Önce yüzey alanından kürenin yarıçapını bul; kesit dairesinin yarıçapı bir dik üçgenin dik kenarıdır.',
    solution: [
      {
        title: 'Kürenin yarıçapı',
        detail: '4πR² = 100π ⇒ R² = 25 ⇒ R = 5 cm.',
      },
      {
        title: 'Kesitin yarıçapı',
        detail:
          'Merkezden kesite inen dikme, kesitin merkezine düşer. Kesit yarıçapı r için r² + 3² = 5² ⇒ r² = 16 ⇒ r = 4 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Kesitin alanı π · 4² = 16π cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'spheres-2',
    topic: 'Çeyrek dairenin döndürülmesi',
    stem: [],
    ask: 'Yarıçapı 6 cm olan bir çeyrek dairenin yarıçaplarından biri etrafında 360° döndürülmesiyle oluşan cismin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '72π' },
      { key: 'B', text: '96π' },
      { key: 'C', text: '144π' },
      { key: 'D', text: '216π' },
      { key: 'E', text: '288π' },
    ],
    answer: 'C',
    hint: 'Çeyrek daire bir yarıçapı etrafında dönünce hangi cisim oluşur, düşün.',
    solution: [
      {
        title: 'Oluşan cisim',
        detail:
          'Çeyrek daire yarıçaplarından biri etrafında 360° dönünce yarıçapı 6 cm olan bir yarım küre oluşur.',
      },
      {
        title: 'Yarım kürenin hacmi',
        detail: 'V = (1/2) · (4/3)πr³ = (2/3)π · 6³ = (2/3)π · 216.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 144π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  // Cylinder of radius 9 and height 20 at 12 px per cm; ellipses flattened to 0.3.
  {
    id: 'spheres-3',
    topic: 'Yarım küreden silindire boşalan su',
    stem: [
      'Şekildeki yüksekliği 20 cm olan boş bir silindirin içine, iç yüzeyine teğet olacak şekilde içi su dolu bir yarım küre yerleştirilmiştir.',
      'Yarım kürenin tam dibinden delik açılarak suyun tamamının silindire boşalması sağlanıyor.',
    ],
    given: ['|AB| = 18 cm'],
    ask: 'Buna göre, silindirin içindeki suyun yüksekliği kaç cm olur?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '4,5' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: 'Yarım küre silindire teğet olduğundan ikisinin yarıçapı aynıdır; boşalan suyun hacmi değişmez.',
    solution: [
      {
        title: 'Yarıçap',
        detail: '[AB] hem yarım kürenin hem silindirin çapıdır: r = 18 / 2 = 9 cm.',
      },
      {
        title: 'Suyun hacmi',
        detail: 'Yarım küre: V = (2/3)π · 9³ = (2/3)π · 729 = 486π cm³.',
      },
      {
        title: 'Silindirdeki yükseklik',
        detail: 'π · 9² · h = 486π ⇒ 81h = 486.',
      },
      {
        title: 'Sonuç',
        detail: 'h = 6 cm olur.',
      },
    ],
    figure: {
      viewBox: '0 0 400 330',
      caption: 'Şekil 1',
      label:
        'Dik silindirin üst tabanına, üst çemberine teğet biçimde su dolu bir yarım küre yerleştirilmiş; A ve B üst çemberin çapının uçları, O merkezi. Yarım küredeki su taralı.',
      svg: `
          <path class="shade" d="M92,40 A108,108 0 0 0 308,40 A108,32.4 0 0 0 92,40 Z"/>
          <path class="hid" d="M92,280 A108,32.4 0 0 1 308,280"/>
          <path class="ln" d="M92,40 L92,280 A108,32.4 0 0 0 308,280 L308,40"/>
          <path class="ln" d="M92,40 A108,32.4 0 0 0 308,40 A108,32.4 0 0 0 92,40"/>
          <path class="ln" d="M92,40 A108,108 0 0 0 308,40"/>
          <path class="ln" d="M92,40 L308,40"/>
          <circle class="pt" cx="92" cy="40" r="3.2"/>
          <circle class="pt" cx="308" cy="40" r="3.2"/>
          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <text x="84" y="36" text-anchor="end">A</text>
          <text x="316" y="36">B</text>
          <text x="200" y="30" text-anchor="middle">O</text>
          <text class="val" x="318" y="170">20</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 4
  // Origin at (150, 280), 36 px per unit; A = (2, 6) on y = 3x.
  {
    id: 'spheres-4',
    topic: 'Dik üçgenin eksen etrafında döndürülmesi',
    stem: [
      'y = 3x doğrusu üzerindeki birinci bölgede bulunan bir A noktasından x eksenine [AK] dikmesi çiziliyor.',
    ],
    ask: 'AKO dik üçgeninin x ekseni etrafında 360° döndürülmesiyle oluşan cismin hacmi 24π birim küp olduğuna göre, A noktasının ordinatı kaçtır?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '6' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'x ekseni etrafında dönen dik üçgen bir koni oluşturur: [AK] tabanın yarıçapı, [OK] yüksekliktir.',
    solution: [
      {
        title: 'Noktanın koordinatları',
        detail: 'A = (a, 3a) olsun. Buna göre |OK| = a ve |AK| = 3a dır.',
      },
      {
        title: 'Oluşan koni',
        detail:
          'Üçgen x ekseni etrafında dönünce tepesi O, yüksekliği a, taban yarıçapı 3a olan bir koni oluşur.',
      },
      {
        title: 'Hacim denklemi',
        detail: '(1/3)π · (3a)² · a = 3πa³ = 24π ⇒ a³ = 8 ⇒ a = 2.',
      },
      {
        title: 'Sonuç',
        detail: 'A noktasının ordinatı 3a = 6 dır.',
      },
    ],
    figure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 2',
      label:
        'Koordinat düzleminde y = 3x doğrusu; üzerindeki A noktasından x eksenine inen dikmenin ayağı K. A, K ve orijin O bir dik üçgen oluşturuyor, dik açı K de.',
      svg: `
          <path class="ln" d="M40,280 L385,280"/>
          <path class="ln" d="M375,274 L385,280 L375,286"/>
          <path class="ln" d="M150,330 L150,20"/>
          <path class="ln" d="M144,30 L150,20 L156,30"/>
          <text x="382" y="302" text-anchor="middle">x</text>
          <text x="162" y="30">y</text>
          <path class="ln" d="M132,334 L240,10"/>
          <path class="ln" d="M222,64 L222,280"/>
          <path class="ln" d="M212,280 L212,270 L222,270"/>
          <circle class="pt" cx="150" cy="280" r="3.2"/>
          <circle class="pt" cx="222" cy="64" r="3.2"/>
          <circle class="pt" cx="222" cy="280" r="3.2"/>
          <text x="142" y="300" text-anchor="end">O</text>
          <text x="232" y="68">A</text>
          <text x="222" y="302" text-anchor="middle">K</text>
          <text x="250" y="24">y = 3x</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'spheres-5',
    topic: 'Suya atılan bilye',
    stem: ['Taban yarıçapı 4 cm olan bir dik silindirin içinde bir miktar su vardır.'],
    ask: 'Bu kabın içine yarıçapı 3 cm olan küre şeklinde metal bir bilye atıldığında bilye suya tamamen batıyor. Buna göre, su kaç cm yükselir?',
    choices: [
      { key: 'A', text: '3/2' },
      { key: 'B', text: '2' },
      { key: 'C', text: '9/4' },
      { key: 'D', text: '8/3' },
      { key: 'E', text: '3' },
    ],
    answer: 'C',
    hint: 'Yükselen suyun hacmi, bilyenin hacmine eşittir.',
    solution: [
      {
        title: 'Bilyenin hacmi',
        detail: 'V = (4/3)π · 3³ = 36π cm³.',
      },
      {
        title: 'Yükselen su',
        detail: 'Su h cm yükselirse, yer değiştiren su silindiri π · 4² · h = 16πh olur.',
      },
      {
        title: 'Eşitlik',
        detail: '16πh = 36π ⇒ h = 36 / 16.',
      },
      {
        title: 'Sonuç',
        detail: 'h = 9/4 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  // Cone with base radius 12 and height 9 at 14 px per cm; base centre O at
  // (200, 260), apex T at (200, 134); inscribed sphere of radius 4 centred at
  // (200, 204). Tangent point on [TB] is (2.4, 7.2) in cm.
  {
    id: 'spheres-6',
    topic: 'Koni içine yerleştirilen küre',
    stem: [
      'Taban yarıçapı 12 cm ve ana doğrusu 15 cm olan bir dik koninin içine, tabanına ve yan yüzüne teğet olacak şekilde bir küre yerleştiriliyor.',
    ],
    ask: 'Buna göre, kürenin yüzey alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '36π' },
      { key: 'B', text: '48π' },
      { key: 'C', text: '64π' },
      { key: 'D', text: '81π' },
      { key: 'E', text: '100π' },
    ],
    answer: 'C',
    hint: 'Koninin eksenden geçen kesitini düşün: kürenin kesiti, bu ikizkenar üçgenin iç teğet çemberidir.',
    solution: [
      {
        title: 'Koninin yüksekliği',
        detail: 'h = √(15² − 12²) = √81 = 9 cm.',
      },
      {
        title: 'Eksen kesiti',
        detail:
          'Kesit, kenarları 15, 15 ve 24 olan ikizkenar üçgendir. Alanı (1/2) · 24 · 9 = 108, yarı çevresi (15 + 15 + 24) / 2 = 27.',
      },
      {
        title: 'Kürenin yarıçapı',
        detail: 'İç teğet çemberin yarıçapı r = Alan / u = 108 / 27 = 4 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Kürenin yüzey alanı 4π · 4² = 64π cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 100 400 230',
      caption: 'Şekil 3',
      label:
        'Tepesi T, taban merkezi O olan dik koninin içinde tabana ve yan yüze teğet bir küre. B taban çemberi üzerinde; |OB| = 12, |TB| = 15.',
      svg: `
          <path class="hid" d="M32,260 A168,50.4 0 0 1 368,260"/>
          <path class="ln" d="M200,134 L32,260 A168,50.4 0 0 0 368,260 Z"/>
          <circle class="ln" cx="200" cy="204" r="56"/>
          <path class="ln" d="M200,260 L368,260"/>
          <circle class="pt" cx="200" cy="134" r="3.2"/>
          <circle class="pt" cx="200" cy="260" r="3.2"/>
          <circle class="pt" cx="368" cy="260" r="3.2"/>
          <text x="200" y="124" text-anchor="middle">T</text>
          <text x="192" y="278" text-anchor="end">O</text>
          <text x="376" y="266">B</text>
          <text class="val" x="296" y="190">15</text>
          <text class="val" x="300" y="254" text-anchor="middle">12</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 100 400 230',
      caption: 'Şekil 3',
      label:
        'Aynı şekilde kürenin merkezi M; M den tabana [MO] ve ana doğruya [MP] dikmeleri çizilmiş, ikisi de r uzunluğunda. TMP üçgeni TBO üçgenine benzer.',
      svg: `
          <path class="hid" d="M32,260 A168,50.4 0 0 1 368,260"/>
          <path class="ln" d="M200,134 L32,260 A168,50.4 0 0 0 368,260 Z"/>
          <circle class="ln" cx="200" cy="204" r="56"/>
          <path class="ln" d="M200,260 L368,260"/>
          <circle class="pt" cx="200" cy="134" r="3.2"/>
          <circle class="pt" cx="200" cy="260" r="3.2"/>
          <circle class="pt" cx="368" cy="260" r="3.2"/>
          <text x="200" y="124" text-anchor="middle">T</text>
          <text x="192" y="278" text-anchor="end">O</text>
          <text x="376" y="266">B</text>
          <text class="val" x="296" y="190">15</text>
          <text class="val" x="300" y="254" text-anchor="middle">12</text>
          <path class="aux" d="M200,134 L200,260 M200,204 L233.6,159.2"/>
          <circle class="pt" cx="200" cy="204" r="3.2"/>
          <circle class="pt" cx="233.6" cy="159.2" r="3.2"/>
          <text x="192" y="208" text-anchor="end">M</text>
          <text x="241" y="156">P</text>
          <text class="val" x="206" y="238">r</text>
          <text class="val" x="222" y="196">r</text>
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
export const SPHERES_BANK: readonly Question[] = QUESTIONS;

export const UNIT_10_SPHERES: Unit = {
  id: 'spheres',
  order: 10,
  title: 'Küre ve Dönel Cisimler',
  subtitle: 'Ünite 10',
  description:
    'Kürenin alanı, hacmi ve ara kesiti; düzlemsel bölgelerin bir eksen etrafında döndürülmesiyle oluşan cisimler.',
  modules: [
    {
      id: 'spheres-m1',
      order: 1,
      title: 'Küre ve döndürülen bölgeler',
      summary:
        'Kürenin ara kesiti, çeyrek daireden yarım küre, yarım küreden silindire su, eksen etrafında dönen dik üçgen, suya atılan bilye ve koni içindeki küre.',
      questions: pick('spheres-1', 'spheres-2', 'spheres-3', 'spheres-4', 'spheres-5', 'spheres-6'),
    },
  ],
};
