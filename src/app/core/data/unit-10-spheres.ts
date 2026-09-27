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

  // ---------------------------------------------------------------- 7
  // Sphere of radius 13 at 11 px per cm, centre O at (200, 165); the section
  // plane lies 5 cm above O (y = 110) and has radius 12 (132 px).
  {
    id: 'spheres-7',
    topic: 'Küre kesitine oturan koni',
    stem: ['Yarıçapı 13 cm olan bir küre, merkezinden 5 cm uzaklıktaki bir düzlemle kesiliyor.'],
    ask: 'Oluşan ara kesit dairesi taban ve kürenin merkezi tepe noktası olan koninin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '180π' },
      { key: 'B', text: '200π' },
      { key: 'C', text: '240π' },
      { key: 'D', text: '300π' },
      { key: 'E', text: '720π' },
    ],
    answer: 'C',
    hint: 'Kesit dairesinin yarıçapını, küre yarıçapı ve merkez uzaklığıyla kurulan dik üçgenden bul.',
    solution: [
      {
        title: 'Kesitin yarıçapı',
        detail: 'r² + 5² = 13² ⇒ r² = 169 − 25 = 144 ⇒ r = 12 cm.',
      },
      {
        title: 'Koninin yüksekliği',
        detail:
          'Koninin tepesi merkezde, tabanı kesitte olduğundan yüksekliği merkez uzaklığına eşittir: h = 5 cm.',
      },
      {
        title: 'Hacim',
        detail: 'V = (1/3)π · 12² · 5 = (1/3)π · 720.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 240π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 10 400 312',
      caption: 'Şekil 4',
      label:
        'Merkezi O olan kürenin, merkezden 5 birim uzaktaki bir düzlemle kesiti ve tabanı bu kesit, tepesi O olan koni. Kürenin yarıçapı 13.',
      svg: `
          <circle class="ln" cx="200" cy="165" r="143"/>
          <path class="hid" d="M57,165 A143,42.9 0 0 1 343,165"/>
          <path class="ln" d="M57,165 A143,42.9 0 0 0 343,165"/>
          <path class="ln" d="M68,110 A132,39.6 0 0 0 332,110 A132,39.6 0 0 0 68,110"/>
          <path class="ln" d="M68,110 L200,165 L332,110"/>
          <path class="ln" d="M200,110 L200,165 L343,165"/>
          <circle class="pt" cx="200" cy="165" r="3.2"/>
          <circle class="pt" cx="200" cy="110" r="3.2"/>
          <text x="200" y="188" text-anchor="middle">O</text>
          <text class="val" x="206" y="144">5</text>
          <text class="val" x="272" y="186" text-anchor="middle">13</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 10 400 312',
      caption: 'Şekil 4',
      label:
        'Aynı şekilde kesitin merkezinden kesit çemberine r yarıçapı çizilmiş; r, 5 ve kürenin 13 birimlik yarıçapı bir dik üçgen oluşturuyor.',
      svg: `
          <circle class="ln" cx="200" cy="165" r="143"/>
          <path class="hid" d="M57,165 A143,42.9 0 0 1 343,165"/>
          <path class="ln" d="M57,165 A143,42.9 0 0 0 343,165"/>
          <path class="ln" d="M68,110 A132,39.6 0 0 0 332,110 A132,39.6 0 0 0 68,110"/>
          <path class="ln" d="M68,110 L200,165 L332,110"/>
          <path class="ln" d="M200,110 L200,165"/>
          <path class="aux" d="M200,110 L332,110"/>
          <circle class="pt" cx="200" cy="165" r="3.2"/>
          <circle class="pt" cx="200" cy="110" r="3.2"/>
          <circle class="pt" cx="332" cy="110" r="3.2"/>
          <text x="200" y="188" text-anchor="middle">O</text>
          <text class="val" x="206" y="144">5</text>
          <text class="val" x="266" y="102" text-anchor="middle">r</text>
          <text class="val" x="250" y="136" text-anchor="end">13</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 8
  // Right trapezoid at 40 px per cm: A (80, 100), D (200, 100), B (80, 260),
  // C (320, 260).
  {
    id: 'spheres-8',
    topic: 'Dik yamuğun 180° döndürülmesi',
    stem: [],
    given: ['ABCD dik yamuk', '|AD| = 3 cm', '|AB| = 4 cm', '|BC| = 6 cm'],
    ask: 'Şekildeki ABCD dik yamuğu [AB] ekseni etrafında 180° döndürüldüğünde oluşan cismin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '36π' },
      { key: 'B', text: '42π' },
      { key: 'C', text: '63π' },
      { key: 'D', text: '84π' },
      { key: 'E', text: '126π' },
    ],
    answer: 'B',
    hint: '360° dönüşte bir kesik koni oluşur; 180° dönüş bu kesik koninin yarısını verir.',
    solution: [
      {
        title: 'Oluşan cisim',
        detail:
          '[AB] etrafında 360° dönüşte yüksekliği 4 cm, taban yarıçapları 6 cm ve 3 cm olan bir kesik koni oluşur; 180° dönüşte bunun yarısı oluşur.',
      },
      {
        title: 'Kesik koninin hacmi',
        detail: 'V = (πh/3)(R² + Rr + r²) = (4π/3)(36 + 18 + 9) = (4π/3) · 63 = 84π cm³.',
      },
      {
        title: 'Sonuç',
        detail: 'İstenen hacim 84π / 2 = 42π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 70 400 230',
      caption: 'Şekil 5',
      label:
        'A ve B köşelerinde dik açı bulunan ABCD dik yamuğu; üst taban AD = 3, dik kenar AB = 4, alt taban BC = 6.',
      svg: `
          <path class="ln" d="M80,100 L200,100 L320,260 L80,260 Z"/>
          <path class="ln" d="M80,112 L92,112 L92,100"/>
          <path class="ln" d="M80,248 L92,248 L92,260"/>
          <circle class="pt" cx="80" cy="100" r="3.2"/>
          <circle class="pt" cx="200" cy="100" r="3.2"/>
          <circle class="pt" cx="80" cy="260" r="3.2"/>
          <circle class="pt" cx="320" cy="260" r="3.2"/>
          <text x="72" y="96" text-anchor="end">A</text>
          <text x="206" y="94">D</text>
          <text x="72" y="276" text-anchor="end">B</text>
          <text x="328" y="276">C</text>
          <text class="val" x="140" y="92" text-anchor="middle">3</text>
          <text class="val" x="70" y="186" text-anchor="end">4</text>
          <text class="val" x="200" y="282" text-anchor="middle">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'spheres-9',
    topic: 'Piramit içine yerleştirilen küre',
    stem: [
      'Bir taban ayrıtı 24 cm olan kare dik piramidin içine, tüm yüzeylerine teğet olacak şekilde 4 cm yarıçaplı bir küre yerleştiriliyor.',
    ],
    ask: 'Bu piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '1296' },
      { key: 'B', text: '1536' },
      { key: 'C', text: '1728' },
      { key: 'D', text: '1944' },
      { key: 'E', text: '2304' },
    ],
    answer: 'C',
    hint: 'Tepeden ve iki karşı yan yüzün yüksekliklerinden geçen kesiti al: kürenin kesiti bu ikizkenar üçgenin iç teğet çemberidir.',
    solution: [
      {
        title: 'Kesit üçgeni',
        detail:
          'Kesit; tabanı 24, yüksekliği h, eşit kenarları yan yüz yükseklikleri √(144 + h²) olan ikizkenar üçgendir.',
      },
      {
        title: 'İç teğet çember',
        detail: 'r = Alan / u ⇒ 4 = 12h / (12 + √(144 + h²)) ⇒ 12 + √(144 + h²) = 3h.',
      },
      {
        title: 'Yüksekliği bul',
        detail: '144 + h² = (3h − 12)² = 9h² − 72h + 144 ⇒ 8h² = 72h ⇒ h = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 24² · 9 = (1/3) · 576 · 9 = 1728 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  // Sphere of radius 5 at 30 px per cm, centre O at (200, 165); cylinder of
  // radius 4 (120 px) and height 6 (180 px), rims at y = 75 and y = 255.
  {
    id: 'spheres-10',
    topic: 'Küre içindeki silindir',
    stem: [
      'Şekildeki gibi bir kürenin içine, alt ve üst taban çemberleri küre yüzeyine değecek biçimde bir dik silindir yerleştirilmiştir.',
    ],
    given: ['Silindirin yüksekliği 6 cm', 'Silindirin hacmi 96π cm³'],
    ask: 'Buna göre, kürenin hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '400/3' },
      { key: 'C', text: '500/3' },
      { key: 'D', text: '200' },
      { key: 'E', text: '250' },
    ],
    answer: 'C',
    hint: 'Silindirin taban yarıçapı, yarı yüksekliği ve kürenin yarıçapı bir dik üçgen oluşturur.',
    solution: [
      {
        title: 'Silindirin yarıçapı',
        detail: 'π · r² · 6 = 96π ⇒ r² = 16 ⇒ r = 4 cm.',
      },
      {
        title: 'Kürenin yarıçapı',
        detail: 'Merkezden taban çemberine: R² = 4² + 3² = 25 ⇒ R = 5 cm.',
      },
      {
        title: 'Kürenin hacmi',
        detail: 'V = (4/3)π · 5³ = (4/3)π · 125.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 500π/3 cm³, yani 500/3 π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 5 400 320',
      caption: 'Şekil 6',
      label:
        'Bir kürenin içinde, üst ve alt taban çemberleri küre yüzeyine değen dik silindir. Silindirin yüksekliği 6.',
      svg: `
          <circle class="ln" cx="200" cy="165" r="150"/>
          <path class="ln" d="M80,75 A120,36 0 0 0 320,75 A120,36 0 0 0 80,75"/>
          <path class="hid" d="M80,255 A120,36 0 0 1 320,255"/>
          <path class="ln" d="M80,75 L80,255 A120,36 0 0 0 320,255 L320,75"/>
          <text class="val" x="328" y="170">6</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 5 400 320',
      caption: 'Şekil 6',
      label:
        'Aynı şekilde kürenin merkezi O dan üst tabanın merkezine 3 birimlik dikme ve üst taban çemberine R yarıçapı çizilmiş; taban yarıçapı 4.',
      svg: `
          <circle class="ln" cx="200" cy="165" r="150"/>
          <path class="ln" d="M80,75 A120,36 0 0 0 320,75 A120,36 0 0 0 80,75"/>
          <path class="hid" d="M80,255 A120,36 0 0 1 320,255"/>
          <path class="ln" d="M80,75 L80,255 A120,36 0 0 0 320,255 L320,75"/>
          <text class="val" x="328" y="170">6</text>
          <path class="aux" d="M200,165 L200,75 L320,75 Z"/>
          <circle class="pt" cx="200" cy="165" r="3.2"/>
          <circle class="pt" cx="200" cy="75" r="3.2"/>
          <text x="192" y="180" text-anchor="end">O</text>
          <text class="val" x="192" y="126" text-anchor="end">3</text>
          <text class="val" x="260" y="68" text-anchor="middle">4</text>
          <text class="val" x="266" y="136">R</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'spheres-11',
    topic: 'Küreye yerleştirilen en büyük koni',
    stem: [
      'Yarıçapı 13 cm olan bir kürenin bir düzlemle ara kesiti olan dairenin alanı 144π cm² dir.',
    ],
    ask: 'Bu daireyi taban kabul eden ve tepe noktası küre yüzeyinde olan en büyük hacimli dik koninin hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '384' },
      { key: 'B', text: '576' },
      { key: 'C', text: '720' },
      { key: 'D', text: '864' },
      { key: 'E', text: '960' },
    ],
    answer: 'D',
    hint: 'Tepe noktası, küre merkezinin kesitle aynı tarafta değil, karşı tarafında kalan kutupta olmalıdır.',
    solution: [
      {
        title: 'Kesitin yarıçapı',
        detail: 'πr² = 144π ⇒ r = 12 cm.',
      },
      {
        title: 'Merkezin kesite uzaklığı',
        detail: 'd² + 12² = 13² ⇒ d² = 25 ⇒ d = 5 cm.',
      },
      {
        title: 'En büyük yükseklik',
        detail:
          'Tepe, kesite göre merkezin ötesindeki kutupta olursa yükseklik en büyük olur: h = 13 + 5 = 18 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3)π · 12² · 18 = (1/3)π · 2592 = 864π cm³, yani 864 π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  // Origin at (80, 260), 40 px per unit; d meets the axes at (0, 4) and (6, 0).
  {
    id: 'spheres-12',
    topic: 'Doğru ile eksenler arasındaki bölgenin döndürülmesi',
    stem: [],
    given: ['d: x/6 + y/4 = 1'],
    ask: 'Dik koordinat sisteminde verilen d doğrusu ile eksenler arasında kalan bölgenin x ekseni etrafında 360° döndürülmesiyle elde edilen cismin hacmi kaç birim küptür?',
    choices: [
      { key: 'A', text: '16π' },
      { key: 'B', text: '24π' },
      { key: 'C', text: '32π' },
      { key: 'D', text: '48π' },
      { key: 'E', text: '96π' },
    ],
    answer: 'C',
    hint: 'Önce d doğrusunun eksenleri kestiği noktaları bul; bölge x ekseni etrafında dönünce bir koni oluşur.',
    solution: [
      {
        title: 'Eksenleri kestiği noktalar',
        detail:
          'x = 0 için y = 4, y = 0 için x = 6. Bölge, dik kenarları 6 ve 4 olan dik üçgendir.',
      },
      {
        title: 'Oluşan koni',
        detail:
          'x ekseni etrafında dönünce yüksekliği 6 (x eksenindeki kenar), taban yarıçapı 4 (y eksenindeki kenar) olan bir koni oluşur.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3)π · 4² · 6 = 32π birim küptür.',
      },
    ],
    figure: {
      viewBox: '0 70 400 230',
      caption: 'Şekil 7',
      label:
        'Koordinat düzleminde y eksenini 4 te, x eksenini 6 da kesen d doğrusu; d ile eksenler arasındaki dik üçgen bölge taralı.',
      svg: `
          <path class="shade" d="M80,100 L320,260 L80,260 Z"/>
          <path class="ln" d="M40,260 L385,260"/>
          <path class="ln" d="M375,254 L385,260 L375,266"/>
          <path class="ln" d="M80,290 L80,80"/>
          <path class="ln" d="M74,90 L80,80 L86,90"/>
          <text x="382" y="282" text-anchor="middle">x</text>
          <text x="92" y="90">y</text>
          <path class="ln" d="M68,92 L344,276"/>
          <circle class="pt" cx="80" cy="100" r="3.2"/>
          <circle class="pt" cx="320" cy="260" r="3.2"/>
          <text x="72" y="280" text-anchor="end">O</text>
          <text class="val" x="70" y="112" text-anchor="end">4</text>
          <text class="val" x="316" y="282" text-anchor="middle">6</text>
          <text x="340" y="246">d</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'spheres-13',
    topic: 'Alanı verilen kürenin hacmi',
    stem: [],
    ask: 'Yüzey alanı 144π cm² olan bir kürenin hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '144' },
      { key: 'B', text: '216' },
      { key: 'C', text: '256' },
      { key: 'D', text: '288' },
      { key: 'E', text: '324' },
    ],
    answer: 'D',
    hint: 'Yüzey alanı formülünden kürenin yarıçapını bul.',
    solution: [
      {
        title: 'Yarıçap',
        detail: '4πR² = 144π ⇒ R² = 36 ⇒ R = 6 cm.',
      },
      {
        title: 'Hacim',
        detail: 'V = (4/3)πR³ = (4/3)π · 216.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 288π cm³, yani 288 π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'spheres-14',
    topic: 'Küreden küpe geçiş',
    stem: [],
    ask: 'Bir ayrıtının uzunluğu, yüzey alanı 100π cm² olan bir kürenin çapına eşit olan küpün hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '125' },
      { key: 'B', text: '216' },
      { key: 'C', text: '512' },
      { key: 'D', text: '729' },
      { key: 'E', text: '1000' },
    ],
    answer: 'E',
    hint: 'Önce kürenin yarıçapını, sonra çapını bul; küpün ayrıtı bu çaptır.',
    solution: [
      {
        title: 'Kürenin yarıçapı',
        detail: '4πR² = 100π ⇒ R² = 25 ⇒ R = 5 cm.',
      },
      {
        title: 'Küpün ayrıtı',
        detail: 'Ayrıt, kürenin çapına eşittir: a = 2 · 5 = 10 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Küpün hacmi a³ = 10³ = 1000 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'spheres-15',
    topic: 'Küreyi içine alan en küçük silindir',
    stem: [],
    ask: 'Hacmi 288π cm³ olan bir küreyi içine alabilecek en küçük dik dairesel silindirin hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '288' },
      { key: 'B', text: '324' },
      { key: 'C', text: '384' },
      { key: 'D', text: '432' },
      { key: 'E', text: '576' },
    ],
    answer: 'D',
    hint: 'En küçük silindirde küre hem yan yüzeye hem iki tabana teğettir; silindirin yarıçapı ve yüksekliği küreye göre ne olur?',
    solution: [
      {
        title: 'Kürenin yarıçapı',
        detail: '(4/3)πR³ = 288π ⇒ R³ = 216 ⇒ R = 6 cm.',
      },
      {
        title: 'Silindirin boyutları',
        detail:
          'Küre silindirin yan yüzeyine ve iki tabanına teğettir: taban yarıçapı r = 6 cm, yükseklik h = 2 · 6 = 12 cm.',
      },
      {
        title: 'Silindirin hacmi',
        detail: 'V = πr²h = π · 36 · 12.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 432π cm³, yani 432 π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'spheres-16',
    topic: 'Kürelerin hacim ve alan oranı',
    stem: [],
    ask: 'Hacimleri oranı 8/27 olan iki kürenin yüzey alanları oranı kaçtır?',
    choices: [
      { key: 'A', text: '2/3' },
      { key: 'B', text: '4/9' },
      { key: 'C', text: '8/27' },
      { key: 'D', text: '16/81' },
      { key: 'E', text: '9/4' },
    ],
    answer: 'B',
    hint: 'Hacimler oranı yarıçaplar oranının küpüdür; önce yarıçaplar oranını bul.',
    solution: [
      {
        title: 'Yarıçaplar oranı',
        detail: '(r₁ / r₂)³ = 8/27 ⇒ r₁ / r₂ = 2/3.',
      },
      {
        title: 'Alanlar oranı',
        detail: 'Yüzey alanları oranı yarıçaplar oranının karesidir: (2/3)².',
      },
      {
        title: 'Sonuç',
        detail: 'Alanlar oranı 4/9 dur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'spheres-17',
    topic: 'Dik üçgenin hipotenüs etrafında döndürülmesi',
    stem: [],
    ask: 'Dik kenarları 15 cm ve 20 cm olan bir dik üçgenin hipotenüsü etrafında 360° döndürülmesiyle oluşan cismin hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '960' },
      { key: 'B', text: '1000' },
      { key: 'C', text: '1200' },
      { key: 'D', text: '1500' },
      { key: 'E', text: '1600' },
    ],
    answer: 'C',
    hint: 'Üçgen hipotenüs etrafında dönünce tabanları ortak iki koni oluşur; ortak tabanın yarıçapı hipotenüse ait yüksekliktir.',
    solution: [
      {
        title: 'Hipotenüs',
        detail: '15² + 20² = 225 + 400 = 625 ⇒ hipotenüs 25 cm.',
      },
      {
        title: 'Hipotenüse ait yükseklik',
        detail: 'h = (15 · 20) / 25 = 12 cm. Bu, iki koninin ortak taban yarıçapıdır.',
      },
      {
        title: 'İki koninin hacmi',
        detail:
          'Koni yükseklikleri toplamı hipotenüse eşittir: V = (1/3)π · 12² · 25 = (1/3)π · 3600.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 1200π cm³, yani 1200 π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'spheres-18',
    topic: 'Küpün içine teğet küre',
    stem: [
      'Cisim köşegeni 4√3 cm olan bir küpün içine, küpün tüm yüzeylerine teğet olacak şekilde bir küre yerleştiriliyor.',
    ],
    ask: 'Bu küre ile küp arasında kalan boşluğun hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '64 − 16π' },
      { key: 'B', text: '64 − 8π' },
      { key: 'C', text: '64 − 32π/3' },
      { key: 'D', text: '32 + 32π/3' },
      { key: 'E', text: '32 − 32π/3' },
    ],
    answer: 'C',
    hint: 'Cisim köşegeni a√3 tür; yüzeylere teğet kürenin çapı küpün ayrıtına eşittir.',
    solution: [
      {
        title: 'Küpün ayrıtı',
        detail: 'a√3 = 4√3 ⇒ a = 4 cm; küpün hacmi 4³ = 64 cm³.',
      },
      {
        title: 'Kürenin yarıçapı',
        detail: 'Küre tüm yüzeylere teğet olduğundan çapı a ya eşittir: r = 4 / 2 = 2 cm.',
      },
      {
        title: 'Kürenin hacmi',
        detail: 'V = (4/3)π · 2³ = 32π/3 cm³.',
      },
      {
        title: 'Sonuç',
        detail: 'Boşluğun hacmi 64 − 32π/3 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 19
  // |AC| = 140 px; |BC| = 140/√3 ≈ 80.83 (60° at B), |CD| = 140√3 ≈ 242.49 (30° at D).
  {
    id: 'spheres-19',
    topic: 'Yükseklik etrafında dönen üçgen',
    stem: [],
    given: ['ABD bir üçgen', '[AC] ⊥ [BD]', 'm(ABC) = 60°', 'm(ADC) = 30°'],
    ask: 'Şekildeki ABD üçgeni [AC] ekseni etrafında 180° döndürüldüğünde, ABC üçgeninin oluşturacağı cismin hacminin ACD üçgeninin oluşturacağı cismin hacmine oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/2' },
      { key: 'B', text: '1/3' },
      { key: 'C', text: '1/9' },
      { key: 'D', text: '2/9' },
      { key: 'E', text: '1/27' },
    ],
    answer: 'C',
    hint: 'İki üçgen de [AC] etrafında dönünce yüksekliği |AC| olan yarım koniler oluşur; oran yalnızca taban yarıçaplarına bağlıdır.',
    solution: [
      {
        title: 'Oluşan cisimler',
        detail:
          '180° dönüşte ABC üçgeni yarıçapı |BC|, ACD üçgeni yarıçapı |CD| olan birer yarım koni oluşturur; ikisinin yüksekliği de |AC| dir.',
      },
      {
        title: 'Kenarlar',
        detail:
          '|AC| = h diyelim. ABC de tan 60° = h / |BC| ⇒ |BC| = h/√3; ACD de tan 30° = h / |CD| ⇒ |CD| = h√3.',
      },
      {
        title: 'Hacimler oranı',
        detail:
          'Yükseklikler eşit olduğundan oran taban yarıçaplarının karelerinin oranıdır: (h²/3) / (3h²).',
      },
      {
        title: 'Sonuç',
        detail: 'Oran 1/9 dur.',
      },
    ],
    figure: {
      viewBox: '0 80 400 205',
      caption: 'Şekil 8',
      label: 'ABD üçgeninde A dan [BD] ye inen dikme [AC]; B açısı 60 derece, D açısı 30 derece.',
      svg: `
          <path class="ln" d="M38,250 L361.32,250 L118.83,110 Z"/>
          <path class="ln" d="M118.83,110 L118.83,250"/>
          <path class="ln" d="M118.83,236 L132.83,236 L132.83,250"/>
          <path class="arc" d="M62,250 A24,24 0 0 0 50,229.22"/>
          <path class="arc" d="M331.32,250 A30,30 0 0 1 335.34,235"/>
          <circle class="pt" cx="38" cy="250" r="3.2"/>
          <circle class="pt" cx="118.83" cy="250" r="3.2"/>
          <circle class="pt" cx="361.32" cy="250" r="3.2"/>
          <circle class="pt" cx="118.83" cy="110" r="3.2"/>
          <text x="118.83" y="100" text-anchor="middle">A</text>
          <text x="30" y="272" text-anchor="end">B</text>
          <text x="118.83" y="272" text-anchor="middle">C</text>
          <text x="369" y="272">D</text>
          <text class="val" x="68" y="244">60°</text>
          <text class="val" x="318" y="244" text-anchor="end">30°</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 20
  // Radius 6 at 20 px per cm: O = (170,150), B = (170,30), A = (170,270).
  {
    id: 'spheres-20',
    topic: 'Yarım dairenin çapı etrafında döndürülmesi',
    stem: [],
    given: ['|OB| = 6 cm'],
    ask: 'Şekildeki O merkezli yarım daire, [AB] çapı etrafında 90° döndürüldüğünde oluşan cismin hacmi kaç π cm³ olur?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '48' },
      { key: 'C', text: '72' },
      { key: 'D', text: '96' },
      { key: 'E', text: '144' },
    ],
    answer: 'C',
    hint: 'Yarım daire çapı etrafında 360° dönse bir küre oluşurdu; 90° bu tam turun kaçta kaçıdır?',
    solution: [
      {
        title: 'Tam dönüş',
        detail: 'Yarım daire [AB] çapı etrafında 360° dönse yarıçapı 6 cm olan bir küre oluşurdu.',
      },
      {
        title: 'Kürenin hacmi',
        detail: 'V = (4/3)π · 6³ = (4/3)π · 216 = 288π cm³.',
      },
      {
        title: '90° lik dönüş',
        detail: '90° tam turun 90/360 = 1/4 üdür; oluşan cisim kürenin dörtte biridir: 288π / 4.',
      },
      {
        title: 'Sonuç',
        detail: 'Hacim 72π cm³, yani 72 π cm³ olur.',
      },
    ],
    figure: {
      viewBox: '0 10 400 280',
      caption: 'Şekil 9',
      label:
        'Çapı [AB] olan, O merkezli, yarıçapı 6 santimetre olan taralı bir yarım daire; çap düşey, yay sağda.',
      svg: `
          <path class="shade" d="M170,30 A120,120 0 0 1 170,270 Z"/>
          <path class="ln" d="M170,30 A120,120 0 0 1 170,270 Z"/>
          <path class="ln" d="M170,150 L290,150"/>
          <circle class="pt" cx="170" cy="30" r="3.2"/>
          <circle class="pt" cx="170" cy="150" r="3.2"/>
          <circle class="pt" cx="170" cy="270" r="3.2"/>
          <text x="162" y="34" text-anchor="end">B</text>
          <text x="162" y="155" text-anchor="end">O</text>
          <text x="162" y="280" text-anchor="end">A</text>
          <text class="val" x="230" y="142" text-anchor="middle">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'spheres-21',
    topic: 'Kürenin içindeki en büyük küp',
    stem: [],
    ask: 'Bir kürenin içine çizilen en büyük hacimli küpün yüzey alanı 72 cm² ise kürenin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '32π' },
      { key: 'B', text: '36π' },
      { key: 'C', text: '48π' },
      { key: 'D', text: '54π' },
      { key: 'E', text: '72π' },
    ],
    answer: 'B',
    hint: 'En büyük küpün köşeleri küre üzerindedir; küpün cisim köşegeni kürenin çapıdır.',
    solution: [
      {
        title: 'Küpün ayrıtı',
        detail: '6a² = 72 ⇒ a² = 12 ⇒ a = 2√3 cm.',
      },
      {
        title: 'Cisim köşegeni',
        detail: 'Köşegen a√3 = 2√3 · √3 = 6 cm; bu, kürenin çapıdır, R = 3 cm.',
      },
      {
        title: 'Kürenin hacmi',
        detail: 'V = (4/3)π · 3³ = (4/3)π · 27.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 36π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 22
  {
    id: 'spheres-22',
    topic: 'Sekizde biri çıkarılmış küre',
    stem: [
      'O merkezli, yarıçapı 6 cm olan bir küreden; birbirine dik [OA], [OB] ve [OC] yarıçaplarının sınırladığı parça kesilip çıkarılıyor.',
    ],
    given: ['[OA] ⊥ [OB]', '[OA] ⊥ [OC]', '[OB] ⊥ [OC]'],
    ask: 'Buna göre, geriye kalan katı cismin hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '216' },
      { key: 'B', text: '240' },
      { key: 'C', text: '246' },
      { key: 'D', text: '252' },
      { key: 'E', text: '288' },
    ],
    answer: 'D',
    hint: 'Merkezden çıkan birbirine dik üç yarıçap, küreyi eş parçalara bölen üç dik düzlemin kesişimidir; çıkarılan parça kürenin kaçta kaçıdır?',
    solution: [
      {
        title: 'Kürenin hacmi',
        detail: 'V = (4/3)π · 6³ = (4/3)π · 216 = 288π cm³.',
      },
      {
        title: 'Çıkarılan parça',
        detail:
          'Birbirine dik üç düzlem küreyi 8 eş parçaya böler; çıkarılan parça bunlardan biridir: 288π / 8 = 36π cm³.',
      },
      {
        title: 'Kalan cisim',
        detail: '288π − 36π = 252π cm³, yani kürenin 7/8 i.',
      },
      {
        title: 'Sonuç',
        detail: 'Kalan cismin hacmi 252 π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  // |AB| = 8, |BC| = 3 at 32 px per cm: A = (72,230), B = (328,230).
  {
    id: 'spheres-23',
    topic: 'Dikdörtgenin kenarı etrafında döndürülmesi',
    stem: [],
    given: ['ABCD dikdörtgen', '|AB| = 8 cm', '|BC| = 3 cm'],
    ask: 'Şekildeki ABCD dikdörtgeninin [BC] kenarı etrafında 360° döndürülmesiyle oluşan cismin tüm yüzey alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '66π' },
      { key: 'B', text: '128π' },
      { key: 'C', text: '152π' },
      { key: 'D', text: '176π' },
      { key: 'E', text: '192π' },
    ],
    answer: 'D',
    hint: '[BC] etrafında dönen dikdörtgen bir silindir oluşturur; eksene dik olan kenar taban yarıçapı olur.',
    solution: [
      {
        title: 'Oluşan cisim',
        detail:
          'Taban yarıçapı r = |AB| = 8 cm, yüksekliği h = |BC| = 3 cm olan bir dik silindir oluşur.',
      },
      {
        title: 'Yanal alan',
        detail: '2πrh = 2π · 8 · 3 = 48π cm².',
      },
      {
        title: 'Taban alanları',
        detail: '2πr² = 2π · 64 = 128π cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Tüm alan 48π + 128π = 176π cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 110 400 150',
      caption: 'Şekil 10',
      label: 'ABCD dikdörtgeni; alt kenar [AB] 8 santimetre, sağ kenar [BC] 3 santimetre.',
      svg: `
          <path class="ln" d="M72,230 L328,230 L328,134 L72,134 Z"/>
          <path class="ln" d="M314,230 L314,216 L328,216"/>
          <circle class="pt" cx="72" cy="230" r="3.2"/>
          <circle class="pt" cx="328" cy="230" r="3.2"/>
          <circle class="pt" cx="328" cy="134" r="3.2"/>
          <circle class="pt" cx="72" cy="134" r="3.2"/>
          <text x="64" y="248" text-anchor="end">A</text>
          <text x="336" y="248">B</text>
          <text x="336" y="130">C</text>
          <text x="64" y="130" text-anchor="end">D</text>
          <text class="val" x="200" y="252" text-anchor="middle">8</text>
          <text class="val" x="340" y="188">3</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 24
  {
    id: 'spheres-24',
    topic: 'Kürenin içine yerleşen en büyük küp',
    stem: ['Yüzey alanı 108π cm² olan bir kürenin içine en büyük hacme sahip küp yerleştiriliyor.'],
    ask: 'Buna göre, küpün hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '27' },
      { key: 'B', text: '64' },
      { key: 'C', text: '125' },
      { key: 'D', text: '108√3' },
      { key: 'E', text: '216' },
    ],
    answer: 'E',
    hint: 'Önce yüzey alanından kürenin yarıçapını bul; en büyük küpün cisim köşegeni kürenin çapına eşittir.',
    solution: [
      {
        title: 'Kürenin yarıçapı',
        detail: '4πR² = 108π ⇒ R² = 27 ⇒ R = 3√3 cm; çap 6√3 cm.',
      },
      {
        title: 'Küpün ayrıtı',
        detail: 'Cisim köşegeni çapa eşittir: a√3 = 6√3 ⇒ a = 6 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Küpün hacmi 6³ = 216 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 25
  // 36 px per unit, origin at (140,280): y = 6 at y = 64, the corner (2, 6) at (212,64).
  {
    id: 'spheres-25',
    topic: 'Doğrular arasındaki bölgenin y ekseni etrafında döndürülmesi',
    stem: [],
    ask: 'Analitik düzlemde y = 3x, y = 6 doğruları ve y ekseni arasında kalan bölgenin y ekseni etrafında 360° döndürülmesiyle oluşan cismin hacmi kaç birim küptür?',
    choices: [
      { key: 'A', text: '8π' },
      { key: 'B', text: '9π' },
      { key: 'C', text: '12π' },
      { key: 'D', text: '16π' },
      { key: 'E', text: '24π' },
    ],
    answer: 'A',
    hint: 'Bölge bir dik üçgendir; y ekseni etrafında dönünce tepesi orijinde olan bir koni oluşur.',
    solution: [
      {
        title: 'Köşe noktası',
        detail: 'y = 3x ile y = 6 in kesişimi: 3x = 6 ⇒ x = 2; köşe (2, 6).',
      },
      {
        title: 'Oluşan koni',
        detail:
          'Köşeleri (0, 0), (0, 6), (2, 6) olan dik üçgen y ekseni etrafında dönünce taban yarıçapı 2, yüksekliği 6 olan bir koni oluşur.',
      },
      {
        title: 'Koninin hacmi',
        detail: 'V = (1/3)π · 2² · 6 = (1/3)π · 24.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 8π birim küptür.',
      },
    ],
    figure: {
      viewBox: '0 10 400 310',
      caption: 'Şekil 11',
      label:
        'Analitik düzlemde y eşittir 3x ve y eşittir 6 doğruları ile y ekseni arasında kalan taralı üçgen bölge.',
      svg: `
          <path class="shade" d="M140,280 L140,64 L212,64 Z"/>
          <path class="ln" d="M60,280 L385,280"/>
          <path class="ln" d="M375,274 L385,280 L375,286"/>
          <path class="ln" d="M140,312 L140,20"/>
          <path class="ln" d="M134,30 L140,20 L146,30"/>
          <path class="ln" d="M129.2,312.4 L222.8,31.6"/>
          <path class="ln" d="M100,64 L330,64"/>
          <circle class="pt" cx="140" cy="280" r="3.2"/>
          <circle class="pt" cx="140" cy="64" r="3.2"/>
          <circle class="pt" cx="212" cy="64" r="3.2"/>
          <text x="382" y="302" text-anchor="middle">x</text>
          <text x="152" y="30">y</text>
          <text x="132" y="300" text-anchor="end">O</text>
          <text x="132" y="58" text-anchor="end">6</text>
          <text x="210" y="160">y = 3x</text>
          <text x="300" y="56">y = 6</text>
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
    {
      id: 'spheres-m2',
      order: 2,
      title: 'Kesitler, iç içe cisimler ve dönen bölgeler',
      summary:
        'Kesite oturan koni, yarım dönen dik yamuk, piramit ve küre içine yerleşen cisimler, en büyük koni ve eksenler arasında dönen bölge.',
      questions: pick(
        'spheres-7',
        'spheres-8',
        'spheres-9',
        'spheres-10',
        'spheres-11',
        'spheres-12',
      ),
    },
    {
      id: 'spheres-m3',
      order: 3,
      title: 'Küre hacmi, teğet cisimler ve dönen üçgenler',
      summary:
        'Alandan hacme, küreden küpe, küreyi saran silindir, hacim ve alan oranı, hipotenüs etrafında dönen üçgen, küp içindeki küre ve yükseklik etrafında dönen üçgen.',
      questions: pick(
        'spheres-13',
        'spheres-14',
        'spheres-15',
        'spheres-16',
        'spheres-17',
        'spheres-18',
        'spheres-19',
      ),
    },
    {
      id: 'spheres-m4',
      order: 4,
      title: 'Dönen yarım daire, küre içindeki küp ve dönen bölgeler',
      summary:
        'Çapı etrafında 90° dönen yarım daire, küp ile küre arasında geçişler, sekizde biri çıkarılmış küre, kenarı etrafında dönen dikdörtgen ve iki doğru arasındaki dönen bölge.',
      questions: pick(
        'spheres-20',
        'spheres-21',
        'spheres-22',
        'spheres-23',
        'spheres-24',
        'spheres-25',
      ),
    },
  ],
};
