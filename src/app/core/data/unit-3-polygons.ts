import { Question, Unit } from '../models';

/**
 * Unit 3 — Polygons.
 * Original questions written in the style of the "Çokgenler — Çözümlü Test" source:
 * interior and exterior angles, diagonal counts, regular polygons combined with
 * triangles and squares, and areas of regular polygons.
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
    id: 'polygons-1',
    topic: 'Düzgün beşgende paralellik',
    figure: {
      viewBox: '0 0 400 332',
      caption: 'Şekil 1',
      label:
        'Düzgün ABCDE beşgeni; A köşesinden [BC] üzerindeki L noktasına, E köşesinden [DC] üzerindeki K noktasına birbirine paralel iki doğru parçası çizilmiş, m(LAB) = 24°.',
      svg: `
          <path class="ln" d="M109,306 L291,306 L347.2,133 L200,26 L52.8,133 Z"/>
          <path class="ln" d="M109,306 L321.8,211.3"/>
          <path class="ln" d="M52.8,133 L235.3,51.7"/>
          <path class="arc" d="M153,306 A44,44 0 0 0 149.2,288.1"/>
          <text class="val" x="171.6" y="297.7" text-anchor="middle">24°</text>
          <path class="arc" d="M215.9,37.6 A24,24 0 0 0 213.4,61.4"/>
          <text class="val" x="195.6" y="52.5" text-anchor="middle">x</text>
          <circle class="pt" cx="109" cy="306" r="3.2"/>
          <circle class="pt" cx="291" cy="306" r="3.2"/>
          <circle class="pt" cx="347.2" cy="133" r="3.2"/>
          <circle class="pt" cx="200" cy="26" r="3.2"/>
          <circle class="pt" cx="52.8" cy="133" r="3.2"/>
          <circle class="pt" cx="235.3" cy="51.7" r="3.2"/>
          <circle class="pt" cx="321.8" cy="211.3" r="3.2"/>
          <text x="99" y="325.3" text-anchor="end">A</text>
          <text x="301" y="325.3">B</text>
          <text x="363.4" y="133.2">C</text>
          <text x="200" y="14.5" text-anchor="middle">D</text>
          <text x="36.6" y="133.2" text-anchor="end">E</text>
          <text x="239.8" y="40.8" text-anchor="middle">K</text>
          <text x="338.2" y="220.9">L</text>
        `,
    },
    given: ['ABCDE düzgün beşgen', 'K ∈ [DC], L ∈ [BC]', '[EK] // [AL]', 'm(LAB) = 24°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DKE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '54' },
      { key: 'C', text: '56' },
      { key: 'D', text: '60' },
      { key: 'E', text: '66' },
    ],
    answer: 'D',
    hint: 'Önce beşgenin bir iç açısını bul, sonra A köşesindeki açıyı [AL] ile ikiye ayır.',
    solution: [
      {
        title: 'Bir iç açıyı bul',
        detail:
          'Düzgün beşgenin iç açıları toplamı (5 − 2)·180 = 540° olduğundan her bir iç açı 540 : 5 = 108°’dir.',
      },
      {
        title: 'A köşesini parçala',
        detail: 'm(EAB) = 108° ve m(LAB) = 24° olduğundan m(EAL) = 108 − 24 = 84° olur.',
      },
      {
        title: 'Paralellikten yararlan',
        detail:
          '[EK] // [AL] ve [AE] bu iki doğruyu kestiğinden karşı durumlu açılar bütünlerdir: m(AEK) = 180 − 84 = 96°.',
      },
      {
        title: 'E köşesini parçala',
        detail: 'm(DEA) = 108° olduğundan m(DEK) = 108 − 96 = 12° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'DEK üçgeninde m(EDK) = 108° olduğundan x = 180 − 108 − 12 = 60° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'polygons-2',
    topic: 'Düzgün çokgende iç ve dış açı',
    stem: [],
    ask: 'Bir düzgün onikigenin bir dış açısının bir iç açısına oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/6' },
      { key: 'B', text: '1/5' },
      { key: 'C', text: '1/4' },
      { key: 'D', text: '2/9' },
      { key: 'E', text: '1/3' },
    ],
    answer: 'B',
    hint: 'Düzgün çokgende bir dış açı 360°’nin kenar sayısına bölümüdür.',
    solution: [
      {
        title: 'Dış açıyı bul',
        detail: 'Düzgün onikigenin bir dış açısı 360 : 12 = 30°’dir.',
      },
      {
        title: 'İç açıyı bul',
        detail: 'İç açı ile dış açı bütünler olduğundan bir iç açı 180 − 30 = 150°’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Oran 30 / 150 = 1/5 olur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'polygons-3',
    topic: 'Düzgün çokgende kenar uzantıları',
    figure: {
      viewBox: '0 0 400 193',
      caption: 'Şekil 2',
      label:
        'Bir düzgün çokgenin ardışık A, B, C, D köşeleri; [AB] ve [DC] kenarlarının uzantıları P noktasında kesişiyor, m(BPC) = 100°.',
      svg: `
          <path class="ln" d="M32,26 L133.7,111.3 L266.3,111.3 L368,26"/>
          <path class="ln" d="M133.7,111.3 L200,167 L266.3,111.3"/>
          <path class="arc" d="M187.7,156.7 A16,16 0 0 1 212.3,156.7"/>
          <text class="val" x="200" y="136" text-anchor="middle">100°</text>
          <circle class="pt" cx="32" cy="26" r="3.2"/>
          <circle class="pt" cx="133.7" cy="111.3" r="3.2"/>
          <circle class="pt" cx="266.3" cy="111.3" r="3.2"/>
          <circle class="pt" cx="368" cy="26" r="3.2"/>
          <circle class="pt" cx="200" cy="167" r="3.2"/>
          <text x="32" y="14.5" text-anchor="middle">A</text>
          <text x="125.4" y="131.7" text-anchor="end">B</text>
          <text x="274.6" y="131.7">C</text>
          <text x="368" y="14.5" text-anchor="middle">D</text>
          <text x="200" y="189.5" text-anchor="middle">P</text>
        `,
    },
    given: [
      'A, B, C, D bir düzgün çokgenin ardışık köşeleri',
      'A, B, P doğrusal',
      'D, C, P doğrusal',
      'm(BPC) = 100°',
    ],
    stem: [],
    ask: 'Buna göre, düzgün çokgen kaç kenarlıdır?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '12' },
      { key: 'E', text: '15' },
    ],
    answer: 'B',
    hint: 'B ve C köşelerinde, kenar uzantılarıyla oluşan açılar çokgenin dış açılarıdır.',
    solution: [
      {
        title: 'Dış açıları gör',
        detail:
          '[AB] ve [DC] uzatıldığında m(PBC) ve m(PCB), çokgenin B ve C köşelerindeki dış açılarıdır; düzgün çokgende ikisi de eşittir, her birine d diyelim.',
      },
      {
        title: 'BPC üçgenini yaz',
        detail: 'BPC üçgeninde 100 + d + d = 180 → 2d = 80 → d = 40° olur.',
      },
      {
        title: 'Kenar sayısını bul',
        detail: 'Dış açılar toplamı 360° olduğundan n = 360 : 40 = 9 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'polygons-4',
    topic: 'Çokgende iç açılar toplamı',
    stem: [],
    ask: 'Bir konveks çokgenin iç açıları sırasıyla 100°, 110°, 150° ve diğer iç açıları eşit olup her biri 160° dir. Buna göre, bu çokgen kaç kenarlıdır?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '11' },
      { key: 'D', text: '12' },
      { key: 'E', text: '14' },
    ],
    answer: 'D',
    hint: 'İç açılar yerine dış açılarla çalışmak daha kısadır: dış açılar toplamı her zaman 360°’dir.',
    solution: [
      {
        title: 'Dış açılara geç',
        detail: 'Verilen iç açıların dış açıları 80°, 70° ve 30°’dir; toplamları 180° eder.',
      },
      {
        title: 'Kalan dış açılar',
        detail:
          'Dış açılar toplamı 360° olduğundan kalan köşelerin dış açıları toplamı 360 − 180 = 180°’dir.',
      },
      {
        title: 'Kalan köşe sayısı',
        detail:
          'Kalan köşelerin her birinin dış açısı 180 − 160 = 20° olduğundan bu köşelerin sayısı 180 : 20 = 9’dur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Çokgen 3 + 9 = 12 kenarlıdır. Kontrol: (12 − 2)·180 = 1800 = 100 + 110 + 150 + 9·160.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'polygons-5',
    topic: 'Düzgün altıgende alan',
    figure: {
      viewBox: '0 0 400 312',
      caption: 'Şekil 3',
      label: 'Düzgün ABCDEF altıgeni; [AC] ve [DF] köşegenleri çizilmiş, ACDF dikdörtgeni taralı.',
      svg: `
          <path class="shade" d="M124.9,286 L350.1,156 L275.1,26 L49.9,156 Z"/>
          <path class="ln" d="M124.9,286 L275.1,286 L350.1,156 L275.1,26 L124.9,26 L49.9,156 Z"/>
          <path class="ln" d="M124.9,286 L350.1,156"/>
          <path class="ln" d="M49.9,156 L275.1,26"/>
          <circle class="pt" cx="124.9" cy="286" r="3.2"/>
          <circle class="pt" cx="275.1" cy="286" r="3.2"/>
          <circle class="pt" cx="350.1" cy="156" r="3.2"/>
          <circle class="pt" cx="275.1" cy="26" r="3.2"/>
          <circle class="pt" cx="124.9" cy="26" r="3.2"/>
          <circle class="pt" cx="49.9" cy="156" r="3.2"/>
          <text x="116.4" y="306.2" text-anchor="end">A</text>
          <text x="283.6" y="306.2">B</text>
          <text x="367.1" y="161.5">C</text>
          <text x="283.6" y="16.8">D</text>
          <text x="116.4" y="16.8" text-anchor="end">E</text>
          <text x="32.9" y="161.5" text-anchor="end">F</text>
        `,
    },
    given: ['ABCDEF düzgün altıgen'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ACDF) / A(ABC) oranı kaçtır?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '7/2' },
      { key: 'D', text: '4' },
      { key: 'E', text: '9/2' },
    ],
    answer: 'D',
    hint: 'Altıgenin alanını, köşegenlerle ayrılan parçalar cinsinden yaz; ABC üçgeninin alanına S de.',
    solution: [
      {
        title: 'Küçük üçgenin alanı',
        detail:
          'Altıgenin kenarına a dersek A(ABC) = ½·a·a·sin120° = (√3/4)a² olur; buna S diyelim.',
      },
      {
        title: 'Altıgenin alanı',
        detail:
          'Düzgün altıgen, kenarı a olan altı eşkenar üçgenden oluşur: A(ABCDEF) = 6·(√3/4)a² = 6S.',
      },
      {
        title: 'Karşı üçgen',
        detail: 'Simetriden A(DEF) = A(ABC) = S’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ACDF) = 6S − S − S = 4S olduğundan oran 4S / S = 4 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'polygons-6',
    topic: 'Düzgün çokgende alan ve çevrel çember',
    stem: [],
    ask: 'Alanı 147 cm² olan bir düzgün onikigenin çevrel çemberinin yarıçapı kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'Düzgün onikigeni, merkezden köşelere çizilen yarıçaplarla 12 eş ikizkenar üçgene ayır.',
    solution: [
      {
        title: 'Merkez açısı',
        detail:
          'Merkezden köşelere çizilen yarıçaplar çokgeni 12 eş üçgene ayırır; her birinin merkez açısı 360 : 12 = 30°’dir.',
      },
      {
        title: 'Bir üçgenin alanı',
        detail:
          'Kenarları R, R ve aralarındaki açı 30° olan üçgenin alanı ½·R·R·sin30° = R²/4’tür.',
      },
      {
        title: 'Toplam alan',
        detail: 'A = 12·R²/4 = 3R² olur.',
      },
      {
        title: 'Sonuç',
        detail: '3R² = 147 → R² = 49 → R = 7 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 7
  {
    id: 'polygons-7',
    topic: 'Köşegen sayısı ve iç açı',
    stem: [],
    ask: 'Köşegen sayısı 35 olan bir düzgün çokgenin bir iç açısı kaç derecedir?',
    choices: [
      { key: 'A', text: '108' },
      { key: 'B', text: '120' },
      { key: 'C', text: '135' },
      { key: 'D', text: '140' },
      { key: 'E', text: '144' },
    ],
    answer: 'E',
    hint: 'n kenarlı çokgenin köşegen sayısı n(n − 3)/2’dir.',
    solution: [
      {
        title: 'Kenar sayısını bul',
        detail: 'n(n − 3)/2 = 35 → n(n − 3) = 70 → n = 10 (10·7 = 70).',
      },
      {
        title: 'Dış açıyı bul',
        detail: 'Düzgün ongenin bir dış açısı 360 : 10 = 36°’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Bir iç açı 180 − 36 = 144° olur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'polygons-8',
    topic: 'Düzgün beşgen ve eşkenar üçgen',
    figure: {
      viewBox: '0 0 400 332',
      caption: 'Şekil 4',
      label:
        'Düzgün ABCDE beşgeninin içinde [AB] kenarı üzerine kurulmuş ABF eşkenar üçgeni; F noktası C köşesiyle birleştirilmiş.',
      svg: `
          <path class="ln" d="M109,306 L291,306 L347.2,133 L200,26 L52.8,133 Z"/>
          <path class="ln" d="M109,306 L200,148.4 L291,306"/>
          <path class="ln" d="M200,148.4 L347.2,133"/>
          <path class="arc" d="M317.4,136.1 A30,30 0 0 1 322.9,115.3"/>
          <text class="val" x="298.9" y="125" text-anchor="middle">x</text>
          <circle class="pt" cx="109" cy="306" r="3.2"/>
          <circle class="pt" cx="291" cy="306" r="3.2"/>
          <circle class="pt" cx="347.2" cy="133" r="3.2"/>
          <circle class="pt" cx="200" cy="26" r="3.2"/>
          <circle class="pt" cx="52.8" cy="133" r="3.2"/>
          <circle class="pt" cx="200" cy="148.4" r="3.2"/>
          <text x="99" y="325.3" text-anchor="end">A</text>
          <text x="301" y="325.3">B</text>
          <text x="363.4" y="133.2">C</text>
          <text x="200" y="14.5" text-anchor="middle">D</text>
          <text x="36.6" y="133.2" text-anchor="end">E</text>
          <text x="200" y="136.9" text-anchor="middle">F</text>
        `,
    },
    given: ['ABCDE düzgün beşgen', 'ABF eşkenar üçgen'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(FCD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '38' },
      { key: 'C', text: '40' },
      { key: 'D', text: '42' },
      { key: 'E', text: '48' },
    ],
    answer: 'D',
    hint: '|BF| = |BA| = |BC| olduğunu fark et; FBC üçgeni ikizkenardır.',
    solution: [
      {
        title: 'B köşesini parçala',
        detail:
          'Beşgenin iç açısı 108°, eşkenar üçgenin açısı 60° olduğundan m(FBC) = 108 − 60 = 48° olur.',
      },
      {
        title: 'İkizkenar üçgeni gör',
        detail:
          '|BF| = |AB| = |BC| olduğundan FBC üçgeni ikizkenardır: m(BCF) = m(BFC) = (180 − 48) : 2 = 66°.',
      },
      {
        title: 'Sonuç',
        detail: 'm(BCD) = 108° olduğundan x = 108 − 66 = 42° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'polygons-9',
    topic: 'Düzgün altıgen ve kare',
    figure: {
      viewBox: '0 0 400 342',
      caption: 'Şekil 5',
      label:
        'Düzgün ABCDEF altıgeninin [AB] kenarı üzerine dışarıya doğru çizilmiş ABGH karesi; F ile H birleştirilmiş.',
      svg: `
          <path class="ln" d="M146.9,209.9 L253.1,209.9 L306.1,117.9 L253.1,26 L146.9,26 L93.9,117.9 Z"/>
          <path class="ln" d="M253.1,209.9 L253.1,316 L146.9,316 L146.9,209.9"/>
          <path class="ln" d="M93.9,117.9 L146.9,316"/>
          <path class="arc" d="M158.9,209.9 L158.9,221.9 L146.9,221.9"/>
          <path class="arc" d="M146.9,286 A30,30 0 0 0 139.2,287"/>
          <text class="val" x="140.7" y="273.4" text-anchor="middle">x</text>
          <circle class="pt" cx="146.9" cy="209.9" r="3.2"/>
          <circle class="pt" cx="253.1" cy="209.9" r="3.2"/>
          <circle class="pt" cx="306.1" cy="117.9" r="3.2"/>
          <circle class="pt" cx="253.1" cy="26" r="3.2"/>
          <circle class="pt" cx="146.9" cy="26" r="3.2"/>
          <circle class="pt" cx="93.9" cy="117.9" r="3.2"/>
          <circle class="pt" cx="253.1" cy="316" r="3.2"/>
          <circle class="pt" cx="146.9" cy="316" r="3.2"/>
          <text x="154.5" y="200.1">A</text>
          <text x="267.7" y="224.1">B</text>
          <text x="320.3" y="114">C</text>
          <text x="258.3" y="15.3" text-anchor="middle">D</text>
          <text x="141.7" y="15.3" text-anchor="middle">E</text>
          <text x="79.7" y="114" text-anchor="end">F</text>
          <text x="267.7" y="312.8">G</text>
          <text x="132.3" y="312.8" text-anchor="end">H</text>
        `,
    },
    given: ['ABCDEF düzgün altıgen', 'ABGH kare'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AHF) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '15' },
      { key: 'C', text: '20' },
      { key: 'D', text: '25' },
      { key: 'E', text: '30' },
    ],
    answer: 'B',
    hint: 'A köşesinin etrafındaki açıların toplamı 360°’dir; |AF| ile |AH| arasındaki ilişkiye bak.',
    solution: [
      {
        title: 'A etrafındaki açılar',
        detail:
          'A köşesinde altıgenin iç açısı 120°, karenin açısı 90°’dir; bu yüzden m(FAH) = 360 − 120 − 90 = 150° olur.',
      },
      {
        title: 'İkizkenar üçgeni gör',
        detail:
          'Altıgen ile kare [AB] kenarını paylaştığından |AF| = |AB| = |AH|; FAH üçgeni ikizkenardır.',
      },
      {
        title: 'Sonuç',
        detail: 'Taban açıları eşit olduğundan x = (180 − 150) : 2 = 15° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  {
    id: 'polygons-10',
    topic: 'İç açılar toplamı ve köşegen',
    stem: [],
    ask: 'İç açılarının ölçüleri toplamı 1440° olan bir çokgenin bir köşesinden kaç köşegen çizilebilir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'Önce (n − 2)·180 = 1440 denkleminden kenar sayısını bul.',
    solution: [
      {
        title: 'Kenar sayısını bul',
        detail: '(n − 2)·180 = 1440 → n − 2 = 8 → n = 10.',
      },
      {
        title: 'Bir köşeden çizilen köşegenler',
        detail:
          'Bir köşe kendisine ve iki komşusuna köşegen çizemez; bu yüzden bir köşeden n − 3 köşegen çizilir.',
      },
      {
        title: 'Sonuç',
        detail: '10 − 3 = 7 köşegen çizilebilir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'polygons-11',
    topic: 'Düzgün beşgende köşegenler',
    figure: {
      viewBox: '0 0 400 332',
      caption: 'Şekil 6',
      label: 'Düzgün ABCDE beşgeninde [AC] ve [BD] köşegenleri P noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M109,306 L291,306 L347.2,133 L200,26 L52.8,133 Z"/>
          <path class="ln" d="M109,306 L347.2,133"/>
          <path class="ln" d="M291,306 L200,26"/>
          <path class="arc" d="M240,210.8 A20,20 0 0 0 262.4,218.1"/>
          <text class="val" x="245.1" y="238.3" text-anchor="middle">x</text>
          <circle class="pt" cx="109" cy="306" r="3.2"/>
          <circle class="pt" cx="291" cy="306" r="3.2"/>
          <circle class="pt" cx="347.2" cy="133" r="3.2"/>
          <circle class="pt" cx="200" cy="26" r="3.2"/>
          <circle class="pt" cx="52.8" cy="133" r="3.2"/>
          <circle class="pt" cx="256.2" cy="199" r="3.2"/>
          <text x="99" y="325.3" text-anchor="end">A</text>
          <text x="301" y="325.3">B</text>
          <text x="363.4" y="133.2">C</text>
          <text x="200" y="14.5" text-anchor="middle">D</text>
          <text x="36.6" y="133.2" text-anchor="end">E</text>
          <text x="273" y="202">P</text>
        `,
    },
    given: ['ABCDE düzgün beşgen', '[AC] ∩ [BD] = {P}'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(APB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '54' },
      { key: 'B', text: '60' },
      { key: 'C', text: '72' },
      { key: 'D', text: '84' },
      { key: 'E', text: '108' },
    ],
    answer: 'C',
    hint: 'ABC ve BCD üçgenleri ikizkenardır; taban açılarını bul.',
    solution: [
      {
        title: 'ABC üçgeni',
        detail: '|AB| = |BC| ve m(ABC) = 108° olduğundan m(BAC) = (180 − 108) : 2 = 36° olur.',
      },
      {
        title: 'BCD üçgeni',
        detail:
          'Aynı şekilde |BC| = |CD| olduğundan m(CBD) = 36°, dolayısıyla m(ABD) = 108 − 36 = 72° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'ABP üçgeninde x = 180 − 36 − 72 = 72° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'polygons-12',
    topic: 'Düzgün beşgen ve kare',
    figure: {
      viewBox: '0 0 400 332',
      caption: 'Şekil 7',
      label:
        'Düzgün ABCDE beşgeninin içinde [AB] kenarı üzerine kurulmuş ABKL karesi; E ile L birleştirilmiş.',
      svg: `
          <path class="ln" d="M109,306 L291,306 L347.2,133 L200,26 L52.8,133 Z"/>
          <path class="ln" d="M109,306 L109,124"/>
          <path class="ln" d="M109,124 L291,124"/>
          <path class="ln" d="M291,124 L291,306"/>
          <path class="ln" d="M52.8,133 L109,124"/>
          <path class="arc" d="M121,306 L121,294 L109,294"/>
          <path class="arc" d="M109,150 A26,26 0 0 1 83.3,128.1"/>
          <text class="val" x="80.4" y="162.5" text-anchor="middle">x</text>
          <circle class="pt" cx="109" cy="306" r="3.2"/>
          <circle class="pt" cx="291" cy="306" r="3.2"/>
          <circle class="pt" cx="347.2" cy="133" r="3.2"/>
          <circle class="pt" cx="200" cy="26" r="3.2"/>
          <circle class="pt" cx="52.8" cy="133" r="3.2"/>
          <circle class="pt" cx="291" cy="124" r="3.2"/>
          <circle class="pt" cx="109" cy="124" r="3.2"/>
          <text x="99" y="325.3" text-anchor="end">A</text>
          <text x="301" y="325.3">B</text>
          <text x="363.4" y="133.2">C</text>
          <text x="200" y="14.5" text-anchor="middle">D</text>
          <text x="36.6" y="133.2" text-anchor="end">E</text>
          <text x="286.1" y="113.3" text-anchor="middle">K</text>
          <text x="113.9" y="113.3" text-anchor="middle">L</text>
        `,
    },
    given: ['ABCDE düzgün beşgen', 'ABKL kare'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ALE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '75' },
      { key: 'C', text: '78' },
      { key: 'D', text: '81' },
      { key: 'E', text: '84' },
    ],
    answer: 'D',
    hint: 'A köşesinde beşgenin açısından karenin açısını çıkar; |AE| ile |AL| eşittir.',
    solution: [
      {
        title: 'A köşesini parçala',
        detail: 'm(EAB) = 108° ve m(LAB) = 90° olduğundan m(EAL) = 108 − 90 = 18° olur.',
      },
      {
        title: 'İkizkenar üçgeni gör',
        detail:
          'Beşgen ile kare [AB] kenarını paylaştığından |AE| = |AB| = |AL|; EAL üçgeni ikizkenardır.',
      },
      {
        title: 'Sonuç',
        detail: 'x = (180 − 18) : 2 = 81° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'polygons-13',
    topic: 'Düzgün sekizgende alan',
    figure: {
      viewBox: '0 0 400 332',
      caption: 'Şekil 8',
      label:
        'Düzgün ABCDEFGH sekizgeni; [AC] köşegeni çizilmiş, |AC| = 10 cm.',
      svg: `
          <path class="ln" d="M142,306 L258,306 L340,224 L340,108 L258,26 L142,26 L60,108 L60,224 Z"/>
          <path class="ln" d="M142,306 L340,224"/>
          <circle class="pt" cx="142" cy="306" r="3.2"/>
          <circle class="pt" cx="258" cy="306" r="3.2"/>
          <circle class="pt" cx="340" cy="224" r="3.2"/>
          <circle class="pt" cx="340" cy="108" r="3.2"/>
          <circle class="pt" cx="258" cy="26" r="3.2"/>
          <circle class="pt" cx="142" cy="26" r="3.2"/>
          <circle class="pt" cx="60" cy="108" r="3.2"/>
          <circle class="pt" cx="60" cy="224" r="3.2"/>
          <text x="135.5" y="327.2" text-anchor="end">A</text>
          <text x="264.5" y="327.2">B</text>
          <text x="355.7" y="236">C</text>
          <text x="355.7" y="107">D</text>
          <text x="264.5" y="15.8">E</text>
          <text x="135.5" y="15.8" text-anchor="end">F</text>
          <text x="44.3" y="107" text-anchor="end">G</text>
          <text x="44.3" y="236" text-anchor="end">H</text>
        `,
    },
    given: ['ABCDEFGH düzgün sekizgen', '|AC| = 10 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, düzgün sekizgenin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '64√2' },
      { key: 'B', text: '80√2' },
      { key: 'C', text: '90√2' },
      { key: 'D', text: '100√2' },
      { key: 'E', text: '120√2' },
    ],
    answer: 'D',
    hint: 'Sekizgenin O merkezini A ve C köşelerine birleştir; m(AOC) açısının kaç derece olduğuna bak.',
    solution: [
      {
        title: 'Merkez açısı',
        detail:
          'Merkezi O olan düzgün sekizgende bir merkez açısı 360 : 8 = 45°’dir; bu yüzden m(AOC) = 2·45 = 90° olur.',
      },
      {
        title: 'Yarıçapı bul',
        detail:
          '|OA| = |OC| = R ve AOC ikizkenar dik üçgen olduğundan |AC| = R√2 = 10 olur; buradan R = 5√2 cm ve R² = 50 bulunur.',
      },
      {
        title: 'Bir üçgenin alanı',
        detail:
          'Merkezden köşelere çizilen yarıçaplar sekizgeni 8 eş üçgene ayırır; birinin alanı ½·R·R·sin45° = (√2/4)·R² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A = 8·(√2/4)·R² = 2√2·50 = 100√2 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'polygons-14',
    topic: 'Düzgün altıgende orta noktalar',
    figure: {
      viewBox: '0 0 400 312',
      caption: 'Şekil 9',
      label:
        'Düzgün ABCDEF altıgeni; K, [AB] kenarının, L de [CD] kenarının orta noktası; [EK] ve [KL] çizilmiş.',
      svg: `
          <path class="ln" d="M125,285.8 L275,285.8 L350,155.9 L275,26 L125,26 L50,155.9 Z"/>
          <path class="ln" d="M125,26 L200,285.8"/>
          <path class="ln" d="M200,285.8 L312.5,91"/>
          <line class="tick" x1="162.5" y1="278.8" x2="162.5" y2="292.8"/>
          <line class="tick" x1="237.5" y1="278.8" x2="237.5" y2="292.8"/>
          <line class="tick" x1="326.4" y1="129.1" x2="338.6" y2="122.1"/>
          <line class="tick" x1="323.9" y1="124.8" x2="336.1" y2="117.8"/>
          <line class="tick" x1="288.9" y1="64.1" x2="301.1" y2="57.1"/>
          <line class="tick" x1="286.4" y1="59.8" x2="298.6" y2="52.8"/>
          <circle class="pt" cx="125" cy="285.8" r="3.2"/>
          <circle class="pt" cx="275" cy="285.8" r="3.2"/>
          <circle class="pt" cx="350" cy="155.9" r="3.2"/>
          <circle class="pt" cx="275" cy="26" r="3.2"/>
          <circle class="pt" cx="125" cy="26" r="3.2"/>
          <circle class="pt" cx="50" cy="155.9" r="3.2"/>
          <circle class="pt" cx="200" cy="285.8" r="3.2"/>
          <circle class="pt" cx="312.5" cy="91" r="3.2"/>
          <text x="116.5" y="306" text-anchor="end">A</text>
          <text x="283.5" y="306">B</text>
          <text x="367" y="161.4">C</text>
          <text x="283.5" y="16.8">D</text>
          <text x="116.5" y="16.8" text-anchor="end">E</text>
          <text x="33" y="161.4" text-anchor="end">F</text>
          <text x="200" y="308.3" text-anchor="middle">K</text>
          <text x="327.2" y="88">L</text>
        `,
    },
    given: ['ABCDEF düzgün altıgen', 'K ve L orta noktalar', '|KL| = 12 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |EK| kaç cm dir?',
    choices: [
      { key: 'A', text: '4√10' },
      { key: 'B', text: '4√13' },
      { key: 'C', text: '6√7' },
      { key: 'D', text: '8√3' },
      { key: 'E', text: '12√2' },
    ],
    answer: 'B',
    hint: '[AD] köşegenini çiz: ABCD bir yamuktur ve [KL] onun orta tabanıdır.',
    solution: [
      {
        title: 'Yamuğu gör',
        detail:
          'Altıgenin kenarına a diyelim. [AD] köşegeni [BC] kenarına paraleldir ve |AD| = 2a’dır; ABCD yamuğunda [KL] yan kenarların orta noktalarını birleştirir.',
      },
      {
        title: 'Kenarı bul',
        detail:
          'Orta taban (a + 2a) : 2 = 3a/2 = 12 olduğundan a = 8 cm olur.',
      },
      {
        title: 'EAB açısı',
        detail:
          'FAE ikizkenar üçgeninde m(AFE) = 120° olduğundan m(FAE) = 30° olur; m(FAB) = 120° olduğundan m(EAB) = 120 − 30 = 90° bulunur.',
      },
      {
        title: 'Dik kenarlar',
        detail:
          '|AE| = a√3 = 8√3 cm ve |AK| = 8 : 2 = 4 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'EAK dik üçgeninde |EK|² = 192 + 16 = 208 olduğundan |EK| = 4√13 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'polygons-15',
    topic: 'Düzgün çokgende dış açı',
    figure: {
      viewBox: '0 0 400 257',
      caption: 'Şekil 10',
      label:
        'Bir düzgün çokgenin ardışık A, B, C köşeleri; B noktasından [AB] kenarına dik [BK] ve [BC] kenarına dik [BL] çizilmiş, m(KBL) = 30°.',
      svg: `
          <path class="ln" d="M35,24 L104.7,93.7 L200,119.3 L295.3,93.7 L365,24"/>
          <path class="ln" d="M200,119.3 L169.4,233.4"/>
          <path class="ln" d="M200,119.3 L230.6,233.4"/>
          <path class="arc" d="M189.4,116.4 L186.5,127 L197.2,129.9"/>
          <path class="arc" d="M210.6,116.4 L213.5,127 L202.8,129.9"/>
          <path class="arc" d="M188.1,163.7 A46,46 0 0 0 211.9,163.7"/>
          <text class="val" x="200" y="188.8" text-anchor="middle">30°</text>
          <circle class="pt" cx="35" cy="24" r="3.2"/>
          <circle class="pt" cx="104.7" cy="93.7" r="3.2"/>
          <circle class="pt" cx="200" cy="119.3" r="3.2"/>
          <circle class="pt" cx="295.3" cy="93.7" r="3.2"/>
          <circle class="pt" cx="365" cy="24" r="3.2"/>
          <circle class="pt" cx="169.4" cy="233.4" r="3.2"/>
          <circle class="pt" cx="230.6" cy="233.4" r="3.2"/>
          <text x="96.2" y="114" text-anchor="end">A</text>
          <text x="303.8" y="114">C</text>
          <text x="200" y="106.8" text-anchor="middle">B</text>
          <text x="165" y="255.3" text-anchor="middle">K</text>
          <text x="235" y="255.3" text-anchor="middle">L</text>
        `,
    },
    given: ['A, B, C bir düzgün çokgenin ardışık köşeleri', '[BK] ⊥ [AB], [BL] ⊥ [BC]', 'm(KBL) = 30°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, çokgenin iç açılarının ölçüleri toplamı kaç derecedir?',
    choices: [
      { key: 'A', text: '1440' },
      { key: 'B', text: '1620' },
      { key: 'C', text: '1800' },
      { key: 'D', text: '1980' },
      { key: 'E', text: '2160' },
    ],
    answer: 'C',
    hint: 'B köşesinin etrafındaki açıları topla: iki dik açı, 30° ve çokgenin bir iç açısı.',
    solution: [
      {
        title: 'İç açıyı bul',
        detail:
          'B etrafındaki açıların toplamı 360° olduğundan m(ABC) = 360 − 90 − 90 − 30 = 150° olur.',
      },
      {
        title: 'Dış açı',
        detail:
          'Bir dış açı 180 − 150 = 30°’dir; iki dikme arasındaki açı her zaman dış açıya eşittir.',
      },
      {
        title: 'Kenar sayısı',
        detail:
          'n = 360 : 30 = 12 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'İç açılar toplamı (12 − 2)·180 = 1800° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'polygons-16',
    topic: 'Düzgün sekizgen ve eşkenar üçgen',
    figure: {
      viewBox: '0 0 400 332',
      caption: 'Şekil 11',
      label:
        'Düzgün ABCDEFGH sekizgeninin içinde [AB] kenarı üzerine kurulmuş ABK eşkenar üçgeni; A noktasından [BK] kenarına dik çizilen doğru [CD] kenarını P noktasında kesiyor.',
      svg: `
          <path class="ln" d="M142,306 L258,306 L340,224 L340,108 L258,26 L142,26 L60,108 L60,224 Z"/>
          <path class="ln" d="M142,306 L200,205.6 L258,306"/>
          <path class="ln" d="M142,306 L340,191.7"/>
          <path class="arc" d="M234,264.4 L225.3,269.4 L220.3,260.8"/>
          <path class="arc" d="M319.2,203.7 A24,24 0 0 0 340,215.7"/>
          <text class="val" x="320" y="231.8" text-anchor="middle">α</text>
          <circle class="pt" cx="142" cy="306" r="3.2"/>
          <circle class="pt" cx="258" cy="306" r="3.2"/>
          <circle class="pt" cx="340" cy="224" r="3.2"/>
          <circle class="pt" cx="340" cy="108" r="3.2"/>
          <circle class="pt" cx="258" cy="26" r="3.2"/>
          <circle class="pt" cx="142" cy="26" r="3.2"/>
          <circle class="pt" cx="60" cy="108" r="3.2"/>
          <circle class="pt" cx="60" cy="224" r="3.2"/>
          <circle class="pt" cx="200" cy="205.6" r="3.2"/>
          <circle class="pt" cx="340" cy="191.7" r="3.2"/>
          <text x="135.5" y="327.2" text-anchor="end">A</text>
          <text x="264.5" y="327.2">B</text>
          <text x="355.7" y="236">C</text>
          <text x="355.7" y="107">D</text>
          <text x="264.5" y="15.8">E</text>
          <text x="135.5" y="15.8" text-anchor="end">F</text>
          <text x="44.3" y="107" text-anchor="end">G</text>
          <text x="44.3" y="236" text-anchor="end">H</text>
          <text x="356.7" y="200.3">P</text>
          <text x="192" y="197.2" text-anchor="end">K</text>
        `,
    },
    given: ['ABCDEFGH düzgün sekizgen', 'ABK eşkenar üçgen', '[AP] ⊥ [BK]', 'P ∈ [CD]'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(APC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'E',
    hint: 'Eşkenar üçgende bir köşeden karşı kenara inen dikme, o köşedeki açıyı ikiye böler.',
    solution: [
      {
        title: 'A köşesindeki açı',
        detail:
          'ABK eşkenar üçgen olduğundan A noktasından [BK] kenarına inen dikme 60°’lik açıyı ikiye böler: m(PAB) = 30° olur.',
      },
      {
        title: 'Sekizgenin iç açısı',
        detail:
          'Bir iç açı (8 − 2)·180 : 8 = 135° olduğundan m(ABC) = m(BCD) = 135° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABCP dörtgeninde 30 + 135 + 135 + α = 360 olduğundan α = 60° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'polygons-17',
    topic: 'Düzgün altıgende alan parçaları',
    figure: {
      viewBox: '0 0 400 312',
      caption: 'Şekil 12',
      label:
        'Düzgün ABCDEF altıgeni ve çevrel çemberinin merkezi O; O köşelere birleştirilmiş, [OH] ⊥ [AB], K ∈ [DC] ve |DK| = 2|KC|, HBCKO bölgesi taralı.',
      svg: `
          <path class="shade" d="M200,285.8 L275,285.8 L350,155.9 L325,112.6 L200,155.9 Z"/>
          <path class="ln" d="M125,285.8 L275,285.8 L350,155.9 L275,26 L125,26 L50,155.9 Z"/>
          <path class="ln" d="M200,155.9 L125,285.8"/>
          <path class="ln" d="M200,155.9 L275,285.8"/>
          <path class="ln" d="M200,155.9 L350,155.9"/>
          <path class="ln" d="M200,155.9 L275,26"/>
          <path class="ln" d="M200,155.9 L125,26"/>
          <path class="ln" d="M200,155.9 L50,155.9"/>
          <path class="ln" d="M200,155.9 L200,285.8"/>
          <path class="ln" d="M200,155.9 L325,112.6"/>
          <path class="arc" d="M210,285.8 L210,275.8 L200,275.8"/>
          <circle class="pt" cx="125" cy="285.8" r="3.2"/>
          <circle class="pt" cx="275" cy="285.8" r="3.2"/>
          <circle class="pt" cx="350" cy="155.9" r="3.2"/>
          <circle class="pt" cx="275" cy="26" r="3.2"/>
          <circle class="pt" cx="125" cy="26" r="3.2"/>
          <circle class="pt" cx="50" cy="155.9" r="3.2"/>
          <circle class="pt" cx="200" cy="155.9" r="3.2"/>
          <circle class="pt" cx="200" cy="285.8" r="3.2"/>
          <circle class="pt" cx="325" cy="112.6" r="3.2"/>
          <text x="116.5" y="306" text-anchor="end">A</text>
          <text x="283.5" y="306">B</text>
          <text x="367" y="161.4">C</text>
          <text x="283.5" y="16.8">D</text>
          <text x="116.5" y="16.8" text-anchor="end">E</text>
          <text x="33" y="161.4" text-anchor="end">F</text>
          <text x="200" y="308.3" text-anchor="middle">H</text>
          <text x="341.1" y="112.5">K</text>
          <text x="192" y="147.5" text-anchor="end">O</text>
        `,
    },
    given: ['ABCDEF düzgün altıgen', 'O, çevrel çemberin merkezi', 'K ∈ [DC], |DK| = 2|KC|', '[OH] ⊥ [AB]', 'A(HBCKO) = 44 cm²'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, düzgün altıgenin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '108' },
      { key: 'B', text: '120' },
      { key: 'C', text: '132' },
      { key: 'D', text: '144' },
      { key: 'E', text: '156' },
    ],
    answer: 'D',
    hint: 'Altıgeni merkezden altı eş eşkenar üçgene ayır ve birinin alanına S de.',
    solution: [
      {
        title: 'Eşkenar üçgenler',
        detail:
          'O merkezli düzgün altıgen, alanı S olan altı eş eşkenar üçgenden oluşur: A(ABCDEF) = 6S.',
      },
      {
        title: 'HBO üçgeni',
        detail:
          'OAB eşkenar üçgeninde [OH] ⊥ [AB] olduğundan H, [AB] kenarının orta noktasıdır; A(HBO) = S/2 olur.',
      },
      {
        title: 'OCK üçgeni',
        detail:
          'OCD üçgeninde |KC| = |DC|/3 ve O’dan inen yükseklik ortak olduğundan A(OCK) = S/3 olur.',
      },
      {
        title: 'Taralı alan',
        detail:
          'A(HBCKO) = S/2 + S + S/3 = 11S/6 = 44 olduğundan S = 24 cm² bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCDEF) = 6·24 = 144 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'polygons-18',
    topic: 'Düzgün sekizgende köşegen ve alan',
    figure: {
      viewBox: '0 0 400 332',
      caption: 'Şekil 13',
      label:
        'Kenarı 4 cm olan düzgün ABCDEFGH sekizgeni; A, C, E, G köşeleri birleştirilmiş ve ACEG dörtgeni taralı.',
      svg: `
          <path class="shade" d="M142,306 L340,224 L258,26 L60,108 Z"/>
          <path class="ln" d="M142,306 L258,306 L340,224 L340,108 L258,26 L142,26 L60,108 L60,224 Z"/>
          <path class="ln" d="M142,306 L340,224 L258,26 L60,108 Z"/>
          <circle class="pt" cx="142" cy="306" r="3.2"/>
          <circle class="pt" cx="258" cy="306" r="3.2"/>
          <circle class="pt" cx="340" cy="224" r="3.2"/>
          <circle class="pt" cx="340" cy="108" r="3.2"/>
          <circle class="pt" cx="258" cy="26" r="3.2"/>
          <circle class="pt" cx="142" cy="26" r="3.2"/>
          <circle class="pt" cx="60" cy="108" r="3.2"/>
          <circle class="pt" cx="60" cy="224" r="3.2"/>
          <text x="135.5" y="327.2" text-anchor="end">A</text>
          <text x="264.5" y="327.2">B</text>
          <text x="355.7" y="236">C</text>
          <text x="355.7" y="107">D</text>
          <text x="264.5" y="15.8">E</text>
          <text x="135.5" y="15.8" text-anchor="end">F</text>
          <text x="44.3" y="107" text-anchor="end">G</text>
          <text x="44.3" y="236" text-anchor="end">H</text>
          <text class="val" x="200" y="326" text-anchor="middle">4</text>
        `,
    },
    given: ['ABCDEFGH düzgün sekizgen', '|AB| = 4 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ACEG) kaç cm² dir?',
    choices: [
      { key: 'A', text: '32 + 8√2' },
      { key: 'B', text: '32 + 16√2' },
      { key: 'C', text: '48' },
      { key: 'D', text: '16 + 16√2' },
      { key: 'E', text: '64' },
    ],
    answer: 'B',
    hint: 'Taralı bölgenin alanını, sekizgenin alanından köşelerde kalan dört eş üçgeni çıkararak bul.',
    solution: [
      {
        title: 'Sekizgeni kareye tamamla',
        detail:
          'Eğik kenarların uzantıları sekizgeni bir kareye tamamlar; köşelerde dik kenarları 4 : √2 = 2√2 cm olan dört ikizkenar dik üçgen kalır ve karenin kenarı 4 + 4√2 cm olur.',
      },
      {
        title: 'Sekizgenin alanı',
        detail:
          'A = (4 + 4√2)² − 4·½·(2√2)² = 48 + 32√2 − 16 = 32 + 32√2 cm² olur.',
      },
      {
        title: 'Kesilen üçgenler',
        detail:
          'Sekizgenin iç açısı 135° olduğundan A(ABC) = ½·4·4·sin135° = 4√2 cm²’dir; CDE, EFG ve GHA üçgenleri de bu alandadır.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ACEG) = 32 + 32√2 − 4·4√2 = 32 + 16√2 cm² bulunur.',
      },
    ],
  },
];

/** Resolves question ids to their bank entries, failing loudly on a typo. */
function pick(...ids: readonly string[]): Question[] {
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
export const POLYGONS_BANK: readonly Question[] = QUESTIONS;

export const UNIT_3_POLYGONS: Unit = {
  id: 'polygons',
  order: 3,
  title: 'Çokgenler',
  subtitle: 'Ünite 3',
  description:
    'Çokgende iç ve dış açılar, köşegen sayısı, düzgün çokgenlerin açıları ve alanları, düzgün çokgenle birlikte kurulan üçgen ve kareler.',
  modules: [
    {
      id: 'polygons-m1',
      order: 1,
      title: 'Çokgende açı ve alan',
      summary:
        'Düzgün çokgende iç ve dış açı, kenar uzantıları, iç açılardan kenar sayısı ve düzgün altıgen ile onikigende alan.',
      questions: pick(
        'polygons-1',
        'polygons-2',
        'polygons-3',
        'polygons-4',
        'polygons-5',
        'polygons-6',
      ),
    },
    {
      id: 'polygons-m2',
      order: 2,
      title: 'Düzgün çokgen kurulumları',
      summary:
        'Köşegen sayısı, düzgün beşgen ve altıgenin içine ya da dışına kurulan eşkenar üçgen ve kareler, beşgende köşegenler.',
      questions: pick(
        'polygons-7',
        'polygons-8',
        'polygons-9',
        'polygons-10',
        'polygons-11',
        'polygons-12',
      ),
    },
    {
      id: 'polygons-m3',
      order: 3,
      title: 'Düzgün çokgende uzunluk ve alan',
      summary:
        'Düzgün sekizgen ve altıgende köşegen, orta taban ve alan; kenarlara çizilen dikmeler ve çokgenin içine kurulan eşkenar üçgen.',
      questions: pick(
        'polygons-13',
        'polygons-14',
        'polygons-15',
        'polygons-16',
        'polygons-17',
        'polygons-18',
      ),
    },
  ],
};
