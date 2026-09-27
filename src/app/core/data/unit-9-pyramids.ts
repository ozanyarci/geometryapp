import { Question, Unit } from '../models';

/**
 * Unit 9 — Pyramids.
 * Original questions written in the style of the "Piramitler — Çözümlü Test"
 * source: a pyramid inscribed in a prism, a section parallel to the base, a
 * pyramid cut from a cube, water drained from a cone, volume from total area and
 * slant height, and a cone's volume from a segment to its slant edge.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Prisms are drawn in cabinet oblique projection as in unit 8: width and height
 * at full scale, depth at half scale along 45°. Cones are drawn with their base
 * ellipse flattened to 0.3. Every figure notes its pixel-per-unit scale beside it.
 */
const QUESTIONS: Question[] = [
  // ---------------------------------------------------------------- 1
  // Box 8 × 6 × 9 at 26 px per cm; P sits over the point (3, 3) of the base.
  {
    id: 'pyramids-1',
    topic: 'Prizma içindeki piramidin hacmi',
    stem: [],
    given: [
      'ABCDEFGH bir dikdörtgenler prizmasıdır.',
      'P noktası EFGH yüzeyinde bir noktadır.',
      '|AB| = 8 cm, |BC| = 6 cm, |AE| = 9 cm',
    ],
    ask: 'Buna göre, (P, ABCD) piramidinin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '108' },
      { key: 'C', text: '126' },
      { key: 'D', text: '144' },
      { key: 'E', text: '216' },
    ],
    answer: 'D',
    hint: 'P üst yüzde nerede olursa olsun, piramidin yüksekliği prizmanın yüksekliğine eşittir.',
    solution: [
      {
        title: 'Taban alanı',
        detail: 'Piramidin tabanı ABCD dikdörtgenidir: 8 · 6 = 48 cm².',
      },
      {
        title: 'Yükseklik',
        detail:
          'EFGH yüzü ABCD ye paralel olduğundan P nin tabana uzaklığı prizmanın yüksekliği kadardır: h = |AE| = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 48 · 9 = 144 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -18 400 330',
      caption: 'Şekil 1',
      label:
        'ABCDEFGH dikdörtgenler prizması; alt yüz ABCD, üst yüz EFGH. P noktası üst yüzde; P, A, B, C ve D ile birleştirilmiş. |AB| = 8, |BC| = 6, |AE| = 9.',
      svg: `
          <path class="hid" d="M66.0,290.0 L121.2,234.8 L329.2,234.8 M121.2,234.8 L121.2,0.8"/>
          <path class="ln" d="M66.0,290.0 L274.0,290.0 L329.2,234.8 L329.2,0.8 L121.2,0.8 L66.0,56.0 Z"/>
          <path class="ln" d="M66.0,56.0 L274.0,56.0 L329.2,0.8 M274.0,56.0 L274.0,290.0"/>
          <path class="hid" d="M171.6,28.4 L66.0,290.0 M171.6,28.4 L274.0,290.0 M171.6,28.4 L329.2,234.8 M171.6,28.4 L121.2,234.8"/>
          <circle class="pt" cx="66.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="274.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="329.2" cy="234.8" r="3.2"/>
          <circle class="pt" cx="121.2" cy="234.8" r="3.2"/>
          <circle class="pt" cx="66.0" cy="56.0" r="3.2"/>
          <circle class="pt" cx="274.0" cy="56.0" r="3.2"/>
          <circle class="pt" cx="329.2" cy="0.8" r="3.2"/>
          <circle class="pt" cx="121.2" cy="0.8" r="3.2"/>
          <circle class="pt" cx="171.6" cy="28.4" r="3.2"/>
          <text x="58.0" y="304.0" text-anchor="end">A</text>
          <text x="282.0" y="304.0">B</text>
          <text x="337.2" y="240.8">C</text>
          <text x="113.2" y="228.8" text-anchor="end">D</text>
          <text x="58.0" y="62.0" text-anchor="end">E</text>
          <text x="282.0" y="72.0">F</text>
          <text x="337.2" y="-3.2">G</text>
          <text x="113.2" y="-3.2" text-anchor="end">H</text>
          <text x="171.6" y="18.4" text-anchor="middle">P</text>
          <text class="val" x="170.0" y="308.0" text-anchor="middle">8</text>
          <text class="val" x="306.0" y="276.0">6</text>
          <text class="val" x="56.0" y="178.0" text-anchor="end">9</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -18 400 330',
      caption: 'Şekil 1',
      label:
        'Aynı prizmada P den taban düzlemine inen dikme kesikli çizilmiş; ayağı P′ tabanda, |PP′| = |AE| = 9 cm.',
      svg: `
          <path class="hid" d="M66.0,290.0 L121.2,234.8 L329.2,234.8 M121.2,234.8 L121.2,0.8"/>
          <path class="ln" d="M66.0,290.0 L274.0,290.0 L329.2,234.8 L329.2,0.8 L121.2,0.8 L66.0,56.0 Z"/>
          <path class="ln" d="M66.0,56.0 L274.0,56.0 L329.2,0.8 M274.0,56.0 L274.0,290.0"/>
          <path class="hid" d="M171.6,28.4 L66.0,290.0 M171.6,28.4 L274.0,290.0 M171.6,28.4 L329.2,234.8 M171.6,28.4 L121.2,234.8"/>
          <circle class="pt" cx="66.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="274.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="329.2" cy="234.8" r="3.2"/>
          <circle class="pt" cx="121.2" cy="234.8" r="3.2"/>
          <circle class="pt" cx="66.0" cy="56.0" r="3.2"/>
          <circle class="pt" cx="274.0" cy="56.0" r="3.2"/>
          <circle class="pt" cx="329.2" cy="0.8" r="3.2"/>
          <circle class="pt" cx="121.2" cy="0.8" r="3.2"/>
          <circle class="pt" cx="171.6" cy="28.4" r="3.2"/>
          <text x="58.0" y="304.0" text-anchor="end">A</text>
          <text x="282.0" y="304.0">B</text>
          <text x="337.2" y="240.8">C</text>
          <text x="113.2" y="228.8" text-anchor="end">D</text>
          <text x="58.0" y="62.0" text-anchor="end">E</text>
          <text x="282.0" y="72.0">F</text>
          <text x="337.2" y="-3.2">G</text>
          <text x="113.2" y="-3.2" text-anchor="end">H</text>
          <text x="171.6" y="18.4" text-anchor="middle">P</text>
          <text class="val" x="170.0" y="308.0" text-anchor="middle">8</text>
          <text class="val" x="306.0" y="276.0">6</text>
          <text class="val" x="56.0" y="178.0" text-anchor="end">9</text>
          <path class="aux" d="M171.6,28.4 L171.6,262.4"/>
          <circle class="pt" cx="171.6" cy="262.4" r="3.2"/>
          <text x="179.6" y="278.4">P′</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'pyramids-2',
    topic: 'Tabana paralel kesitin alanı',
    stem: ['Taban alanı 64 cm² olan bir düzgün kare piramidin hacmi 256 cm³ tür.'],
    ask: 'Piramit, tabanından 3 cm yükseklikte tabana paralel bir düzlemle kesilirse oluşan ara kesitin alanı kaç cm² olur?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '25' },
      { key: 'C', text: '36' },
      { key: 'D', text: '48' },
      { key: 'E', text: '49' },
    ],
    answer: 'C',
    hint: 'Önce hacimden yüksekliği bul; kesit, tepeye olan uzaklığın oranının karesiyle küçülür.',
    solution: [
      {
        title: 'Yükseklik',
        detail: 'V = (1/3) · 64 · h = 256 olduğundan h = 3 · 256 / 64 = 12 cm dir.',
      },
      {
        title: 'Tepeye uzaklık',
        detail: 'Kesit tabandan 3 cm yukarıda, yani tepeden 12 − 3 = 9 cm uzaklıktadır.',
      },
      {
        title: 'Benzerlik',
        detail:
          'Kesitin üstündeki küçük piramit asıl piramide benzerdir; benzerlik oranı 9/12 = 3/4, alanların oranı (3/4)² = 9/16 dır.',
      },
      {
        title: 'Sonuç',
        detail: 'Kesitin alanı 64 · 9/16 = 36 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  // Cube of edge 6 at 30 px per cm; |AK| = 4, |KA′| = 2.
  {
    id: 'pyramids-3',
    topic: 'Küpten kesilen piramidin hacim oranı',
    stem: [],
    given: ['ABCDA′B′C′D′ bir küptür.', 'K ∈ [AA′]', '|AK| = 2|KA′|'],
    ask: 'K noktası A, B ve D noktalarıyla birleştirilerek elde edilen cismin hacminin küpün hacmine oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/6' },
      { key: 'B', text: '1/9' },
      { key: 'C', text: '1/12' },
      { key: 'D', text: '1/18' },
      { key: 'E', text: '2/9' },
    ],
    answer: 'B',
    hint: 'Cisim, tabanı ABD dik üçgeni ve yüksekliği [AK] olan bir üçgen piramittir.',
    solution: [
      {
        title: 'Uzunluklar',
        detail:
          'Küpün ayrıtına a diyelim. |AK| = 2|KA′| ve |AK| + |KA′| = a olduğundan |AK| = 2a/3 tür.',
      },
      {
        title: 'Taban',
        detail: 'ABD üçgeni, dik kenarları a olan bir dik üçgendir: alanı a²/2.',
      },
      {
        title: 'Yükseklik',
        detail: '[AA′] ayrıtı ABCD yüzüne dik olduğundan piramidin yüksekliği |AK| = 2a/3 tür.',
      },
      {
        title: 'Hacim',
        detail: 'V = (1/3) · (a²/2) · (2a/3) = a³/9.',
      },
      {
        title: 'Sonuç',
        detail: 'Küpün hacmi a³ olduğundan oran (a³/9) / a³ = 1/9 dur.',
      },
    ],
    figure: {
      viewBox: '0 -10 400 300',
      caption: 'Şekil 2',
      label:
        'ABCDA′B′C′D′ küpü; alt yüz ABCD, üst yüz A′B′C′D′. K noktası [AA′] ayrıtı üzerinde ve |AK| = 2|KA′|. K, B ve D ile birleştirilmiş; ABD üçgeni taralı.',
      svg: `
          <path class="shade" d="M78.0,262.0 L258.0,262.0 L141.6,198.4 Z"/>
          <path class="hid" d="M78.0,262.0 L141.6,198.4 L321.6,198.4 M141.6,198.4 L141.6,18.4"/>
          <path class="ln" d="M78.0,262.0 L258.0,262.0 L321.6,198.4 L321.6,18.4 L141.6,18.4 L78.0,82.0 Z"/>
          <path class="ln" d="M78.0,82.0 L258.0,82.0 L321.6,18.4 M258.0,82.0 L258.0,262.0"/>
          <path class="ln" d="M78.0,142.0 L258.0,262.0"/>
          <path class="hid" d="M78.0,142.0 L141.6,198.4 M258.0,262.0 L141.6,198.4"/>
          <circle class="pt" cx="78.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="258.0" cy="262.0" r="3.2"/>
          <circle class="pt" cx="321.6" cy="198.4" r="3.2"/>
          <circle class="pt" cx="141.6" cy="198.4" r="3.2"/>
          <circle class="pt" cx="78.0" cy="82.0" r="3.2"/>
          <circle class="pt" cx="258.0" cy="82.0" r="3.2"/>
          <circle class="pt" cx="321.6" cy="18.4" r="3.2"/>
          <circle class="pt" cx="141.6" cy="18.4" r="3.2"/>
          <circle class="pt" cx="78.0" cy="142.0" r="3.2"/>
          <text x="70.0" y="278.0" text-anchor="end">A</text>
          <text x="266.0" y="278.0">B</text>
          <text x="331.6" y="204.4">C</text>
          <text x="148.0" y="186.0">D</text>
          <text x="70.0" y="88.0" text-anchor="end">A′</text>
          <text x="266.0" y="100.0">B′</text>
          <text x="331.6" y="12.4">C′</text>
          <text x="141.6" y="6.4" text-anchor="middle">D′</text>
          <text x="70.0" y="148.0" text-anchor="end">K</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 4
  // Cone of height 16 at 15 px per cm, base radius drawn at 110 px; the water
  // left behind is the frustum below the level 4 cm up (60 px).
  {
    id: 'pyramids-4',
    topic: 'Koniden boşaltılan su',
    stem: [
      'Yüksekliği 16 cm olan ve tabanı yere oturan bir dik koninin içi tamamen su doludur. Tabandaki B noktasında bulunan tıpa açılarak suyun 27/64 ü boşaltılıyor.',
    ],
    ask: 'Buna göre, kalan suyun yüksekliği kaç cm olur?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '6' },
      { key: 'D', text: '9' },
      { key: 'E', text: '12' },
    ],
    answer: 'B',
    hint: 'Su alttan boşalır; koninin tepesinde boşalan kısım asıl koniye benzer küçük bir konidir.',
    solution: [
      {
        title: 'Boşalan kısım',
        detail:
          'Su seviyesi aşağı indikçe tepede boş bir koni oluşur. Bu koni asıl koniye benzerdir ve hacmi asıl koninin 27/64 üdür.',
      },
      {
        title: 'Benzerlik oranı',
        detail: 'Hacimlerin oranı benzerlik oranının küpüdür: 27/64 = (3/4)³, yani oran 3/4 tür.',
      },
      {
        title: 'Boş koninin yüksekliği',
        detail: 'Boş kısmın yüksekliği 16 · 3/4 = 12 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Kalan suyun yüksekliği 16 − 12 = 4 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 -4 400 310',
      caption: 'Şekil 3',
      label:
        'Tepe noktası T yukarıda, tabanı yere oturan dik koni suyla dolu. Tabanın merkezi O, yükseklik |TO| = 16 cm; B noktası taban çemberi üzerinde.',
      svg: `
          <path class="shade" d="M200,20 L90,260 A110,33 0 0 0 310,260 Z"/>
          <path class="hid" d="M90,260 A110,33 0 0 1 310,260"/>
          <path class="hid" d="M200,20 L200,260"/>
          <path class="ln" d="M90,260 A110,33 0 0 0 310,260"/>
          <path class="ln" d="M200,20 L90,260 M200,20 L310,260"/>
          <circle class="pt" cx="200" cy="20" r="3.2"/>
          <circle class="pt" cx="200" cy="260" r="3.2"/>
          <circle class="pt" cx="310" cy="260" r="3.2"/>
          <text x="200" y="10" text-anchor="middle">T</text>
          <text x="208" y="276">O</text>
          <text x="318" y="266">B</text>
          <text class="val" x="192" y="150" text-anchor="end">16</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -4 400 310',
      caption: 'Şekil 3',
      label:
        'Aynı konide su yüzeyi tabandan 4 cm yükseklikte kesikli bir elipsle gösterilmiş; üstte yüksekliği 12 cm olan boş koni kalıyor.',
      svg: `
          <path class="shade" d="M200,20 L90,260 A110,33 0 0 0 310,260 Z"/>
          <path class="hid" d="M90,260 A110,33 0 0 1 310,260"/>
          <path class="hid" d="M200,20 L200,260"/>
          <path class="ln" d="M90,260 A110,33 0 0 0 310,260"/>
          <path class="ln" d="M200,20 L90,260 M200,20 L310,260"/>
          <circle class="pt" cx="200" cy="20" r="3.2"/>
          <circle class="pt" cx="200" cy="260" r="3.2"/>
          <circle class="pt" cx="310" cy="260" r="3.2"/>
          <text x="200" y="10" text-anchor="middle">T</text>
          <text x="208" y="276">O</text>
          <text x="318" y="266">B</text>
          <text class="val" x="192" y="150" text-anchor="end">16</text>
          <ellipse class="aux" cx="200" cy="200" rx="82.5" ry="24.8"/>
          <circle class="pt" cx="200" cy="200" r="3.2"/>
          <text class="val" x="296" y="206">4</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'pyramids-5',
    topic: 'Tüm alandan kare piramidin hacmi',
    stem: [],
    ask: 'Tüm alanı 384 cm² ve yan yüz yüksekliği 10 cm olan kare dik piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '256' },
      { key: 'B', text: '288' },
      { key: 'C', text: '320' },
      { key: 'D', text: '352' },
      { key: 'E', text: '384' },
    ],
    answer: 'E',
    hint: 'Tabanın bir kenarına a de; tüm alan, taban alanı ile dört eş yan yüzün alanlarının toplamıdır.',
    solution: [
      {
        title: 'Taban kenarı',
        detail:
          'Tüm alan a² + 4 · (a · 10 / 2) = a² + 20a = 384. Buradan (a − 12)(a + 32) = 0 ve a = 12 cm bulunur.',
      },
      {
        title: 'Yükseklik',
        detail:
          'Tepeden tabana inen yükseklik, yan yüz yüksekliği ve tabanın merkezinden kenara uzaklık (12 / 2 = 6) bir dik üçgen oluşturur: h = √(10² − 6²) = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 12² · 8 = (1/3) · 144 · 8 = 384 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  // Cone of radius 6 and height 8 at 22 px per cm; ellipse at 0.3 aspect.
  // C is the midpoint of [TB].
  {
    id: 'pyramids-6',
    topic: 'Ana doğrunun orta noktasından koninin hacmi',
    stem: [],
    given: ['|TC| = |CB|', '|OC| = 5 cm'],
    ask: 'Yukarıda verilen dik koninin taban yarıçapı 6 cm olduğuna göre, hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '84' },
      { key: 'C', text: '90' },
      { key: 'D', text: '96' },
      { key: 'E', text: '108' },
    ],
    answer: 'D',
    hint: 'T yi O ile birleştir: TOB dik üçgeninde [OC] hipotenüse ait kenarortaydır.',
    solution: [
      {
        title: 'Dik üçgen',
        detail: 'Koninin yüksekliği [TO] tabana dik olduğundan TOB üçgeninde O açısı diktir.',
      },
      {
        title: 'Ana doğru',
        detail:
          'C, [TB] hipotenüsünün orta noktası olduğundan |OC| = |TB| / 2 dir; buradan |TB| = 10 cm bulunur.',
      },
      {
        title: 'Yükseklik',
        detail: '|TO| = √(10² − 6²) = √64 = 8 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · π · 6² · 8 = 96π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -4 400 260',
      caption: 'Şekil 4',
      label:
        'Tepe noktası T, taban merkezi O olan dik koni. A ve B taban çemberi üzerinde, C noktası [TB] ana doğrusunun orta noktası; |TC| = |CB| ve |OC| = 5 cm.',
      svg: `
          <path class="hid" d="M68,196 A132,39.6 0 0 1 332,196"/>
          <path class="ln" d="M68,196 A132,39.6 0 0 0 332,196"/>
          <path class="ln" d="M200,20 L68,196 M200,20 L332,196"/>
          <path class="ln" d="M200,196 L332,196 M200,196 L266,108"/>
          <path class="tick" d="M228.2,67.6 L237.8,60.4"/>
          <path class="tick" d="M294.2,155.6 L303.8,148.4"/>
          <circle class="pt" cx="200" cy="20" r="3.2"/>
          <circle class="pt" cx="68" cy="196" r="3.2"/>
          <circle class="pt" cx="332" cy="196" r="3.2"/>
          <circle class="pt" cx="200" cy="196" r="3.2"/>
          <circle class="pt" cx="266" cy="108" r="3.2"/>
          <text x="200" y="10" text-anchor="middle">T</text>
          <text x="60" y="202" text-anchor="end">A</text>
          <text x="340" y="202">B</text>
          <text x="192" y="202" text-anchor="end">O</text>
          <text x="274" y="104">C</text>
          <text class="val" x="226" y="146" text-anchor="end">5</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -4 400 260',
      caption: 'Şekil 4',
      label:
        'Aynı konide [TO] yüksekliği kesikli çizilmiş; TOB dik üçgeninde [OC] hipotenüse ait kenarortaydır.',
      svg: `
          <path class="hid" d="M68,196 A132,39.6 0 0 1 332,196"/>
          <path class="ln" d="M68,196 A132,39.6 0 0 0 332,196"/>
          <path class="ln" d="M200,20 L68,196 M200,20 L332,196"/>
          <path class="ln" d="M200,196 L332,196 M200,196 L266,108"/>
          <path class="tick" d="M228.2,67.6 L237.8,60.4"/>
          <path class="tick" d="M294.2,155.6 L303.8,148.4"/>
          <circle class="pt" cx="200" cy="20" r="3.2"/>
          <circle class="pt" cx="68" cy="196" r="3.2"/>
          <circle class="pt" cx="332" cy="196" r="3.2"/>
          <circle class="pt" cx="200" cy="196" r="3.2"/>
          <circle class="pt" cx="266" cy="108" r="3.2"/>
          <text x="200" y="10" text-anchor="middle">T</text>
          <text x="60" y="202" text-anchor="end">A</text>
          <text x="340" y="202">B</text>
          <text x="192" y="202" text-anchor="end">O</text>
          <text x="274" y="104">C</text>
          <text class="val" x="226" y="146" text-anchor="end">5</text>
          <path class="aux" d="M200,20 L200,196"/>
          <path class="aux" d="M200,184 L212,184 L212,196"/>
        `,
    },
  },
  // ---------------------------------------------------------------- 7
  // Right-angled corner at C, oblique projection at 20 px per cm: [CA] runs
  // left at full scale, [CB] runs toward the viewer at half scale along 45°.
  {
    id: 'pyramids-7',
    topic: 'Dik köşeli üçgen piramidin hacmi',
    stem: [],
    given: [
      '(K, ABC) bir üçgen piramittir.',
      '[KC] ⊥ [CA], [KC] ⊥ [CB], [AC] ⊥ [CB]',
      '|KA| = 10 cm, |KB| = 17 cm, |KC| = 8 cm',
    ],
    ask: 'Yukarıdaki verilere göre, piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '108' },
      { key: 'C', text: '120' },
      { key: 'D', text: '144' },
      { key: 'E', text: '180' },
    ],
    answer: 'C',
    hint: 'KCA ve KCB dik üçgenlerinde Pisagor bağıntısıyla |CA| ve |CB| yi bul.',
    solution: [
      {
        title: '|CA|',
        detail: 'KCA dik üçgeninde |CA| = √(10² − 8²) = √36 = 6 cm dir.',
      },
      {
        title: '|CB|',
        detail: 'KCB dik üçgeninde |CB| = √(17² − 8²) = √225 = 15 cm dir.',
      },
      {
        title: 'Taban ve yükseklik',
        detail:
          '[AC] ⊥ [CB] olduğundan ABC üçgeninin alanı 6 · 15 / 2 = 45 cm² dir. [KC] tabandaki iki kesişen doğruya dik olduğundan piramidin yüksekliği |KC| = 8 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 45 · 8 = 120 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 4 400 326',
      caption: 'Şekil 5',
      label:
        'K tepe noktası C nin tam üstünde olan (K, ABC) üçgen piramidi; C köşesinde [KC], [CA] ve [CB] birbirine dik. |KA| = 10, |KB| = 17, |KC| = 8; ABC tabanı taralı.',
      svg: `
          <path class="shade" d="M140,190 L260,190 L153.9,296.1 Z"/>
          <path class="hid" d="M140,190 L260,190"/>
          <path class="ln" d="M260,30 L140,190 L153.9,296.1 L260,190 Z M260,30 L153.9,296.1"/>
          <path class="ln" d="M250,190 L250,180 L260,180"/>
          <circle class="pt" cx="260" cy="30" r="3.2"/>
          <circle class="pt" cx="140" cy="190" r="3.2"/>
          <circle class="pt" cx="153.9" cy="296.1" r="3.2"/>
          <circle class="pt" cx="260" cy="190" r="3.2"/>
          <text x="260" y="20" text-anchor="middle">K</text>
          <text x="132" y="196" text-anchor="end">A</text>
          <text x="153.9" y="318" text-anchor="middle">B</text>
          <text x="268" y="196">C</text>
          <text class="val" x="192" y="106" text-anchor="end">10</text>
          <text class="val" x="198" y="176" text-anchor="end">17</text>
          <text class="val" x="268" y="114">8</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 8
  // Base 18 × 10 in cabinet oblique at 16 px per cm (depth at half scale along
  // 45°); T stands 12 cm above the centre O of the base.
  {
    id: 'pyramids-8',
    topic: 'Dikdörtgen tabanlı piramidin tüm alanı',
    stem: ['Yukarıdaki şekilde tabanı dikdörtgen olan dik piramit verilmiştir.'],
    given: ['|AB| = 18 cm, |BC| = 10 cm', 'Piramidin hacmi 720 cm³ tür.'],
    ask: 'Buna göre, piramidin tüm alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '564' },
      { key: 'B', text: '584' },
      { key: 'C', text: '604' },
      { key: 'D', text: '624' },
      { key: 'E', text: '644' },
    ],
    answer: 'A',
    hint: 'Hacimden yüksekliği bul; iki farklı yan yüzün yüksekliği farklıdır.',
    solution: [
      {
        title: 'Yükseklik',
        detail: 'Taban alanı 18 · 10 = 180 cm². (1/3) · 180 · h = 720 olduğundan h = 12 cm dir.',
      },
      {
        title: '[AB] ye ait yan yüz yüksekliği',
        detail:
          'Tabanın merkezinin [AB] ye uzaklığı 10 / 2 = 5 cm dir; yan yüz yüksekliği √(12² + 5²) = 13 cm.',
      },
      {
        title: '[BC] ye ait yan yüz yüksekliği',
        detail:
          'Tabanın merkezinin [BC] ye uzaklığı 18 / 2 = 9 cm dir; yan yüz yüksekliği √(12² + 9²) = 15 cm.',
      },
      {
        title: 'Yanal alan',
        detail: '2 · (18 · 13 / 2) + 2 · (10 · 15 / 2) = 234 + 150 = 384 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Tüm alan 180 + 384 = 564 cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 32 400 276',
      caption: 'Şekil 6',
      label:
        'Tabanı ABCD dikdörtgeni olan dik piramit; T tepe noktası tabanın merkezinin üstünde. |AB| = 18 cm, |BC| = 10 cm.',
      svg: `
          <path class="hid" d="M28,280 L84.6,223.4 L372.6,223.4 M200.3,59.7 L84.6,223.4"/>
          <path class="ln" d="M28,280 L316,280 L372.6,223.4 L200.3,59.7 Z M200.3,59.7 L316,280"/>
          <circle class="pt" cx="200.3" cy="59.7" r="3.2"/>
          <circle class="pt" cx="28" cy="280" r="3.2"/>
          <circle class="pt" cx="316" cy="280" r="3.2"/>
          <circle class="pt" cx="372.6" cy="223.4" r="3.2"/>
          <circle class="pt" cx="84.6" cy="223.4" r="3.2"/>
          <text x="200.3" y="49.7" text-anchor="middle">T</text>
          <text x="20" y="296" text-anchor="end">A</text>
          <text x="324" y="296">B</text>
          <text x="380.6" y="229.4">C</text>
          <text x="92.6" y="241.4">D</text>
          <text class="val" x="172" y="298" text-anchor="middle">18</text>
          <text class="val" x="352" y="268">10</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 9
  // Square base of edge 12 in cabinet oblique at 22 px per cm; T stands
  // 6√2 ≈ 8.49 cm above the centre O.
  {
    id: 'pyramids-9',
    topic: 'Yan yüzleri eşkenar üçgen olan kare piramit',
    stem: ['Şekildeki düzgün kare piramidin yan yüzleri birer eşkenar üçgendir.'],
    ask: 'Yukarıdaki şekilde |AB| = 12 cm olduğuna göre, (T, ABCD) piramidinin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '96√2' },
      { key: 'B', text: '144√2' },
      { key: 'C', text: '192√2' },
      { key: 'D', text: '216√2' },
      { key: 'E', text: '288√2' },
    ],
    answer: 'E',
    hint: 'Yan ayrıtlar da 12 cm dir; T yi tabanın merkezine ve bir köşeye bağlayan dik üçgeni kullan.',
    solution: [
      {
        title: 'Yan ayrıt',
        detail: 'Yan yüzler eşkenar üçgen olduğundan |TA| = |TB| = |TC| = |TD| = 12 cm dir.',
      },
      {
        title: 'Merkezden köşeye',
        detail: 'Tabanın köşegeni 12√2 cm; merkez O dan B ye uzaklık |OB| = 6√2 cm dir.',
      },
      {
        title: 'Yükseklik',
        detail: 'TOB dik üçgeninde |TO| = √(12² − (6√2)²) = √(144 − 72) = 6√2 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 12² · 6√2 = (1/3) · 144 · 6√2 = 288√2 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 28 400 290',
      caption: 'Şekil 7',
      label:
        'Tabanı ABCD karesi olan düzgün kare piramit; T tepe noktası tabanın merkezinin üstünde, yan yüzler eşkenar üçgen. |AB| = 12 cm.',
      svg: `
          <path class="hid" d="M20,290 L113.3,196.7 L377.3,196.7 M198.7,56.6 L113.3,196.7"/>
          <path class="ln" d="M20,290 L284,290 L377.3,196.7 L198.7,56.6 Z M198.7,56.6 L284,290"/>
          <circle class="pt" cx="198.7" cy="56.6" r="3.2"/>
          <circle class="pt" cx="20" cy="290" r="3.2"/>
          <circle class="pt" cx="284" cy="290" r="3.2"/>
          <circle class="pt" cx="377.3" cy="196.7" r="3.2"/>
          <circle class="pt" cx="113.3" cy="196.7" r="3.2"/>
          <text x="198.7" y="46.6" text-anchor="middle">T</text>
          <text x="20" y="310" text-anchor="middle">A</text>
          <text x="292" y="306">B</text>
          <text x="383.3" y="202.7">C</text>
          <text x="121.3" y="214.7">D</text>
          <text class="val" x="152" y="308" text-anchor="middle">12</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 28 400 290',
      caption: 'Şekil 7',
      label:
        'Aynı piramitte T den tabanın merkezi O ya inen yükseklik ve [OB] kesikli çizilmiş; TOB dik üçgeninde |TB| = 12, |OB| = 6√2.',
      svg: `
          <path class="hid" d="M20,290 L113.3,196.7 L377.3,196.7 M198.7,56.6 L113.3,196.7"/>
          <path class="ln" d="M20,290 L284,290 L377.3,196.7 L198.7,56.6 Z M198.7,56.6 L284,290"/>
          <circle class="pt" cx="198.7" cy="56.6" r="3.2"/>
          <circle class="pt" cx="20" cy="290" r="3.2"/>
          <circle class="pt" cx="284" cy="290" r="3.2"/>
          <circle class="pt" cx="377.3" cy="196.7" r="3.2"/>
          <circle class="pt" cx="113.3" cy="196.7" r="3.2"/>
          <text x="198.7" y="46.6" text-anchor="middle">T</text>
          <text x="20" y="310" text-anchor="middle">A</text>
          <text x="292" y="306">B</text>
          <text x="383.3" y="202.7">C</text>
          <text x="121.3" y="214.7">D</text>
          <text class="val" x="152" y="308" text-anchor="middle">12</text>
          <path class="aux" d="M198.7,56.6 L198.7,243.3 L284,290"/>
          <circle class="pt" cx="198.7" cy="243.3" r="3.2"/>
          <text x="190.7" y="249.3" text-anchor="end">O</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 10
  // Square base of edge 6 in cabinet oblique at 30 px per cm; K stands 7 cm
  // above the back corner D.
  {
    id: 'pyramids-10',
    topic: 'Dik izdüşümden kare piramidin hacmi',
    stem: [],
    given: ['(K, ABCD) bir kare piramittir.', '[KD] ⊥ [DA], [KD] ⊥ [DC]', '|KB| = 11 cm'],
    ask: 'Yukarıdaki şekilde, [KB] nin ABCD düzlemine dik izdüşümünün uzunluğu 6√2 cm olduğuna göre, piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '84' },
      { key: 'C', text: '96' },
      { key: 'D', text: '108' },
      { key: 'E', text: '126' },
    ],
    answer: 'B',
    hint: '[KD] tabana dik olduğundan [KB] nin izdüşümü [DB] köşegenidir.',
    solution: [
      {
        title: 'İzdüşüm',
        detail:
          '[KD] tabandaki iki kesişen doğruya dik olduğundan tabana diktir; K nin izdüşümü D, [KB] nin izdüşümü de [DB] köşegenidir: |DB| = 6√2 cm.',
      },
      {
        title: 'Taban kenarı',
        detail: 'Karenin köşegeni a√2 = 6√2 olduğundan a = 6 cm, taban alanı 36 cm² dir.',
      },
      {
        title: 'Yükseklik',
        detail: 'KDB dik üçgeninde |KD| = √(11² − (6√2)²) = √(121 − 72) = √49 = 7 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 36 · 7 = 84 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -12 400 322',
      caption: 'Şekil 8',
      label:
        'Tabanı ABCD karesi olan (K, ABCD) piramidi; K tepe noktası D köşesinin tam üstünde, [KD] hem [DA] ya hem [DC] ye dik. |KB| = 11 cm.',
      svg: `
          <path class="hid" d="M78,290 L141.6,226.4 L321.6,226.4 M141.6,16.4 L141.6,226.4"/>
          <path class="hid" d="M141.6,216.4 L134.5,223.5 L134.5,233.5"/>
          <path class="ln" d="M78,290 L258,290 L321.6,226.4 L141.6,16.4 Z M141.6,16.4 L258,290"/>
          <circle class="pt" cx="141.6" cy="16.4" r="3.2"/>
          <circle class="pt" cx="78" cy="290" r="3.2"/>
          <circle class="pt" cx="258" cy="290" r="3.2"/>
          <circle class="pt" cx="321.6" cy="226.4" r="3.2"/>
          <circle class="pt" cx="141.6" cy="226.4" r="3.2"/>
          <text x="141.6" y="6.4" text-anchor="middle">K</text>
          <text x="70" y="306" text-anchor="end">A</text>
          <text x="266" y="306">B</text>
          <text x="329.6" y="232.4">C</text>
          <text x="147.6" y="219.4">D</text>
          <text class="val" x="214" y="150">11</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -12 400 322',
      caption: 'Şekil 8',
      label:
        'Aynı piramitte [DB] köşegeni kesikli çizilmiş; [KB] nin tabandaki izdüşümü [DB] dir ve KDB dik üçgeninde |DB| = 6√2 cm.',
      svg: `
          <path class="hid" d="M78,290 L141.6,226.4 L321.6,226.4 M141.6,16.4 L141.6,226.4"/>
          <path class="hid" d="M141.6,216.4 L134.5,223.5 L134.5,233.5"/>
          <path class="ln" d="M78,290 L258,290 L321.6,226.4 L141.6,16.4 Z M141.6,16.4 L258,290"/>
          <circle class="pt" cx="141.6" cy="16.4" r="3.2"/>
          <circle class="pt" cx="78" cy="290" r="3.2"/>
          <circle class="pt" cx="258" cy="290" r="3.2"/>
          <circle class="pt" cx="321.6" cy="226.4" r="3.2"/>
          <circle class="pt" cx="141.6" cy="226.4" r="3.2"/>
          <text x="141.6" y="6.4" text-anchor="middle">K</text>
          <text x="70" y="306" text-anchor="end">A</text>
          <text x="266" y="306">B</text>
          <text x="329.6" y="232.4">C</text>
          <text x="147.6" y="219.4">D</text>
          <text class="val" x="214" y="150">11</text>
          <path class="aux" d="M141.6,226.4 L258,290"/>
          <text class="val" x="196" y="278" text-anchor="end">6√2</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'pyramids-11',
    topic: 'Daire diliminden koni',
    stem: [],
    ask: 'Yarıçapı 15 cm ve merkez açısı 144° olan daire dilimi şeklindeki bir karton parçasının kıvrılmasıyla elde edilen dik koninin taban yarıçapı kaç cm olur?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'Dilimin yay uzunluğu koninin taban çevresi olur.',
    solution: [
      {
        title: 'Ana doğru',
        detail: 'Dilimin yarıçapı koninin ana doğrusu olur: ℓ = 15 cm.',
      },
      {
        title: 'Yay uzunluğu',
        detail: 'Yay uzunluğu 2π · 15 · 144/360 = 12π cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Taban çevresi 2πr = 12π olduğundan r = 6 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  // Height 9 at 26 px per cm; radius drawn at 60 px (it is not given), ellipses
  // flattened to 0.3. Cone water reaches 6 cm; cylinder water is drawn at 26/9 cm.
  {
    id: 'pyramids-12',
    topic: 'Koniden silindire boşaltılan su',
    stem: [
      'Yukarıdaki şekilde yükseklikleri 9 birim ve taban yarıçapları eşit olan dik koni ile dik silindir verilmiştir. Tabanı yere oturan koni, tabanından 6 birim yüksekliğe kadar su doludur ve bu su boş silindire boşaltılmaktadır.',
    ],
    ask: 'Buna göre, silindirdeki suyun yüksekliği h₂ kaç birim olur?',
    choices: [
      { key: 'A', text: '23/9' },
      { key: 'B', text: '8/3' },
      { key: 'C', text: '25/9' },
      { key: 'D', text: '26/9' },
      { key: 'E', text: '3' },
    ],
    answer: 'D',
    hint: 'Koninin boş kalan tepe kısmı, asıl koniye benzer küçük bir konidir.',
    solution: [
      {
        title: 'Boş koni',
        detail:
          'Su tabandan 6 birim yükseklikte olduğundan tepede yüksekliği 9 − 6 = 3 birim olan boş bir koni kalır; benzerlik oranı 3/9 = 1/3.',
      },
      {
        title: 'Hacim oranı',
        detail: 'Boş koninin hacmi asıl koninin (1/3)³ = 1/27 si, suyun hacmi ise 26/27 sidir.',
      },
      {
        title: 'Suyun hacmi',
        detail: 'Taban yarıçapı r olsun: su = (26/27) · (1/3) · πr² · 9 = (26/9) πr².',
      },
      {
        title: 'Sonuç',
        detail: 'Silindirde πr² · h₂ = (26/9) πr² olduğundan h₂ = 26/9 birimdir.',
      },
    ],
    figure: {
      viewBox: '0 -4 400 290',
      caption: 'Şekil 9',
      label:
        'Solda tabanı yere oturan dik koni, sağda aynı yükseklikte ve aynı taban yarıçaplı dik silindir; ikisinin de yüksekliği 9 birim. Koni tabanından 6 birim yüksekliğe kadar su dolu; silindirdeki su yüksekliği h₂.',
      svg: `
          <path class="shade" d="M80,98 L40,254 A60,18 0 0 0 160,254 L120,98 A20,6 0 0 0 80,98 Z"/>
          <path class="shade" d="M230,178.9 L230,254 A60,18 0 0 0 350,254 L350,178.9 A60,18 0 0 0 230,178.9 Z"/>
          <path class="hid" d="M40,254 A60,18 0 0 1 160,254 M80,98 A20,6 0 0 0 120,98"/>
          <path class="ln" d="M80,98 A20,6 0 0 1 120,98"/>
          <path class="ln" d="M40,254 A60,18 0 0 0 160,254 M100,20 L40,254 M100,20 L160,254"/>
          <path class="hid" d="M230,254 A60,18 0 0 1 350,254 M230,178.9 A60,18 0 0 0 350,178.9"/>
          <path class="ln" d="M230,178.9 A60,18 0 0 1 350,178.9"/>
          <path class="ln" d="M230,20 A60,18 0 0 1 350,20 A60,18 0 0 1 230,20 Z"/>
          <path class="ln" d="M230,20 L230,254 A60,18 0 0 0 350,254 L350,20"/>
          <text class="val" x="150" y="186">6</text>
          <text class="val" x="366" y="120">9</text>
          <text class="val" x="366" y="226">h₂</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'pyramids-13',
    topic: 'Taban çevresi ve ana doğrudan koninin hacmi',
    stem: [],
    ask: 'Taban çevresi 10π cm ve bir ana doğrusunun uzunluğu 13 cm olan dik koninin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '100π' },
      { key: 'B', text: '108π' },
      { key: 'C', text: '120π' },
      { key: 'D', text: '144π' },
      { key: 'E', text: '150π' },
    ],
    answer: 'A',
    hint: 'Taban çevresinden yarıçapı bul; yükseklik, yarıçap ve ana doğru bir dik üçgen oluşturur.',
    solution: [
      {
        title: 'Yarıçap',
        detail: '2πr = 10π olduğundan r = 5 cm dir.',
      },
      {
        title: 'Yükseklik',
        detail:
          'Yükseklik, yarıçap ve ana doğru dik üçgen oluşturur: h = √(13² − 5²) = √144 = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · π · 5² · 12 = 100π cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  // Right-angled corner at D in cabinet oblique at 34 px per cm: [DA] up,
  // [DC] right at full scale, [DB] toward the viewer at half scale along 45°.
  // D lies behind face ABC, so its three edges are hidden.
  {
    id: 'pyramids-14',
    topic: 'Dik köşeli üçgen piramidin hacmi',
    stem: [],
    given: ['[DA], [DB] ve [DC] ayrıtları birbirine diktir.', '|DA| = 6 cm', '|AB| = |BC| = 10 cm'],
    ask: 'Yukarıdaki şekilde verilen üçgen piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '42' },
      { key: 'C', text: '48' },
      { key: 'D', text: '56' },
      { key: 'E', text: '64' },
    ],
    answer: 'C',
    hint: 'Önce ADB dik üçgeninden |DB| yi, sonra BDC dik üçgeninden |DC| yi bul.',
    solution: [
      {
        title: '|DB|',
        detail: 'ADB dik üçgeninde |DB| = √(10² − 6²) = √64 = 8 cm dir.',
      },
      {
        title: '|DC|',
        detail: 'BDC dik üçgeninde |DC| = √(10² − 8²) = √36 = 6 cm dir.',
      },
      {
        title: 'Taban ve yükseklik',
        detail:
          'BDC dik üçgenini taban alırsak alanı 8 · 6 / 2 = 24 cm² dir. [DA] hem [DB] ye hem [DC] ye dik olduğundan yükseklik |DA| = 6 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 24 · 6 = 48 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 4 400 346',
      caption: 'Şekil 10',
      label:
        'D köşesindeki [DA], [DB] ve [DC] ayrıtları birbirine dik olan üçgen piramit; A, D nin tam üstünde. |DA| = 6 cm, |AB| = |BC| = 10 cm.',
      svg: `
          <path class="hid" d="M150,230 L150,26 M150,230 L354,230 M150,230 L53.8,326.2"/>
          <path class="hid" d="M150,218 L162,218 L162,230 M162,230 L153.5,238.5 L141.5,238.5 M150,218 L141.5,226.5 L141.5,238.5"/>
          <path class="ln" d="M150,26 L53.8,326.2 L354,230 Z"/>
          <circle class="pt" cx="150" cy="26" r="3.2"/>
          <circle class="pt" cx="53.8" cy="326.2" r="3.2"/>
          <circle class="pt" cx="354" cy="230" r="3.2"/>
          <circle class="pt" cx="150" cy="230" r="3.2"/>
          <text x="150" y="16" text-anchor="middle">A</text>
          <text x="45.8" y="340" text-anchor="end">B</text>
          <text x="362" y="236">C</text>
          <text x="158" y="250">D</text>
          <text class="val" x="158" y="132">6</text>
          <text class="val" x="92" y="180" text-anchor="end">10</text>
          <text class="val" x="212" y="298">10</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 15
  // Square base of edge 10 in cabinet oblique at 22 px per cm; P stands 12 cm
  // above the centre O, T is the midpoint of [BC].
  {
    id: 'pyramids-15',
    topic: 'Yan yüz yüksekliğinden kare piramidin hacmi',
    stem: ['ABCD karesini taban kabul eden yandaki dik piramitte O, karenin merkezidir.'],
    given: ['[PO] ⊥ [OT]', '[OT] ⊥ [BC]'],
    ask: 'Yukarıdaki şekilde |PT| = 13 cm ve |OT| = 5 cm olduğuna göre, piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '320' },
      { key: 'B', text: '360' },
      { key: 'C', text: '384' },
      { key: 'D', text: '400' },
      { key: 'E', text: '480' },
    ],
    answer: 'D',
    hint: 'O merkezden [BC] ye inen dikme kenarın yarısı kadardır; POT dik üçgeninden yüksekliği bul.',
    solution: [
      {
        title: 'Taban kenarı',
        detail:
          'O karenin merkezi ve [OT] ⊥ [BC] olduğundan |OT| kenarın yarısıdır: |AB| = 2 · 5 = 10 cm, taban alanı 100 cm².',
      },
      {
        title: 'Yükseklik',
        detail: 'POT dik üçgeninde |PO| = √(13² − 5²) = √144 = 12 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 100 · 12 = 400 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -30 400 354',
      caption: 'Şekil 11',
      label:
        'Tabanı ABCD karesi olan dik piramit; P tepe noktası karenin merkezi O nun üstünde, T noktası [BC] üzerinde. [PO] ⊥ [OT], [OT] ⊥ [BC]; |PT| = 13 cm, |OT| = 5 cm.',
      svg: `
          <path class="hid" d="M40,300 L117.8,222.2 L337.8,222.2 M188.9,-2.9 L117.8,222.2"/>
          <path class="hid" d="M188.9,-2.9 L188.9,261.1 L298.9,261.1"/>
          <path class="hid" d="M188.9,251.1 L198.9,251.1 L198.9,261.1 M288.9,261.1 L296,254 L306,254"/>
          <path class="ln" d="M40,300 L260,300 L337.8,222.2 L188.9,-2.9 Z M188.9,-2.9 L260,300 M188.9,-2.9 L298.9,261.1"/>
          <circle class="pt" cx="188.9" cy="-2.9" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="260" cy="300" r="3.2"/>
          <circle class="pt" cx="337.8" cy="222.2" r="3.2"/>
          <circle class="pt" cx="117.8" cy="222.2" r="3.2"/>
          <circle class="pt" cx="188.9" cy="261.1" r="3.2"/>
          <circle class="pt" cx="298.9" cy="261.1" r="3.2"/>
          <text x="188.9" y="-13" text-anchor="middle">P</text>
          <text x="32" y="316" text-anchor="end">A</text>
          <text x="268" y="316">B</text>
          <text x="345.8" y="228.2">C</text>
          <text x="109.8" y="218.2" text-anchor="end">D</text>
          <text x="180.9" y="279" text-anchor="end">O</text>
          <text x="306.9" y="277">T</text>
          <text class="val" x="244" y="253" text-anchor="middle">5</text>
          <text class="val" x="291" y="200" text-anchor="middle">13</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 16
  // Square base of edge 4 in cabinet oblique at 62 px per cm; T stands
  // √5 ≈ 2.24 cm above the centre O, H is the midpoint of [BC].
  {
    id: 'pyramids-16',
    topic: 'Hacimden yanal yükseklik',
    stem: [],
    given: ['A(ABCD) = 16 cm²'],
    ask: 'Yukarıdaki düzgün kare piramidin hacmi 16√5 / 3 cm³ olduğuna göre, yanal yüksekliğinin uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '2√2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '2√3' },
      { key: 'D', text: '√13' },
      { key: 'E', text: '4' },
    ],
    answer: 'B',
    hint: 'Hacimden yüksekliği bul; yanal yükseklik, yükseklik ve kenarın yarısıyla dik üçgen kurar.',
    solution: [
      {
        title: 'Taban kenarı',
        detail: 'a² = 16 olduğundan a = 4 cm; merkezin bir kenara uzaklığı 4 / 2 = 2 cm dir.',
      },
      {
        title: 'Yükseklik',
        detail: '(1/3) · 16 · h = 16√5 / 3 olduğundan h = √5 cm dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'T nin [BC] nin orta noktası H ye uzaklığı yanal yüksekliktir: |TH| = √((√5)² + 2²) = √9 = 3 cm.',
      },
    ],
    figure: {
      viewBox: '0 40 400 236',
      caption: 'Şekil 12',
      label:
        'Tabanı ABCD karesi olan düzgün kare piramit; T tepe noktası tabanın merkezinin üstünde, taban taralı. A(ABCD) = 16 cm².',
      svg: `
          <path class="shade" d="M30,250 L278,250 L365.7,162.3 L117.7,162.3 Z"/>
          <path class="hid" d="M30,250 L117.7,162.3 L365.7,162.3 M197.8,67.5 L117.7,162.3"/>
          <path class="ln" d="M30,250 L278,250 L365.7,162.3 L197.8,67.5 Z M197.8,67.5 L278,250"/>
          <circle class="pt" cx="197.8" cy="67.5" r="3.2"/>
          <circle class="pt" cx="30" cy="250" r="3.2"/>
          <circle class="pt" cx="278" cy="250" r="3.2"/>
          <circle class="pt" cx="365.7" cy="162.3" r="3.2"/>
          <circle class="pt" cx="117.7" cy="162.3" r="3.2"/>
          <text x="197.8" y="57.5" text-anchor="middle">T</text>
          <text x="22" y="266" text-anchor="end">A</text>
          <text x="286" y="266">B</text>
          <text x="373.7" y="168.3">C</text>
          <text x="109.7" y="158.3" text-anchor="end">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 40 400 236',
      caption: 'Şekil 12',
      label:
        'Aynı piramitte T den tabanın merkezi O ya inen yükseklik, [OH] ve [TH] yanal yüksekliği kesikli çizilmiş; H, [BC] nin orta noktası. TOH dik üçgeninde |TO| = √5, |OH| = 2.',
      svg: `
          <path class="shade" d="M30,250 L278,250 L365.7,162.3 L117.7,162.3 Z"/>
          <path class="hid" d="M30,250 L117.7,162.3 L365.7,162.3 M197.8,67.5 L117.7,162.3"/>
          <path class="ln" d="M30,250 L278,250 L365.7,162.3 L197.8,67.5 Z M197.8,67.5 L278,250"/>
          <circle class="pt" cx="197.8" cy="67.5" r="3.2"/>
          <circle class="pt" cx="30" cy="250" r="3.2"/>
          <circle class="pt" cx="278" cy="250" r="3.2"/>
          <circle class="pt" cx="365.7" cy="162.3" r="3.2"/>
          <circle class="pt" cx="117.7" cy="162.3" r="3.2"/>
          <text x="197.8" y="57.5" text-anchor="middle">T</text>
          <text x="22" y="266" text-anchor="end">A</text>
          <text x="286" y="266">B</text>
          <text x="373.7" y="168.3">C</text>
          <text x="109.7" y="158.3" text-anchor="end">D</text>
          <path class="aux" d="M197.8,67.5 L197.8,206.2 L321.8,206.2 Z"/>
          <circle class="pt" cx="197.8" cy="206.2" r="3.2"/>
          <circle class="pt" cx="321.8" cy="206.2" r="3.2"/>
          <text x="189.8" y="222" text-anchor="end">O</text>
          <text x="329.8" y="222">H</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'pyramids-17',
    topic: 'Yanal alan oranından koninin yüksekliği',
    stem: ['Bir dik koninin yanal alanı taban alanının iki katıdır.'],
    ask: 'Koninin hacmi 9π√3 cm³ ise yüksekliği kaç cm olur?',
    choices: [
      { key: 'A', text: '2√3' },
      { key: 'B', text: '3' },
      { key: 'C', text: '3√2' },
      { key: 'D', text: '4√2' },
      { key: 'E', text: '3√3' },
    ],
    answer: 'E',
    hint: 'Yanal alan πrℓ, taban alanı πr² dir; oran ana doğruyu yarıçap cinsinden verir.',
    solution: [
      {
        title: 'Ana doğru',
        detail: 'πrℓ = 2πr² olduğundan ℓ = 2r dir.',
      },
      {
        title: 'Yükseklik',
        detail: 'h = √((2r)² − r²) = √(3r²) = r√3 tür.',
      },
      {
        title: 'Yarıçap',
        detail: 'V = (1/3) · πr² · r√3 = (√3 / 3) πr³ = 9π√3 olduğundan r³ = 27, r = 3 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'h = 3√3 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  // Cone of radius 6 and height 2√3 ≈ 3.46 at 26 px per cm; ellipse at 0.3
  // aspect. [AB] is a diameter in the picture plane, so the 30° angle is true.
  {
    id: 'pyramids-18',
    topic: 'Ana doğrunun tabanla açısından koninin hacmi',
    stem: ['Yukarıdaki dik konide H, taban dairesinin merkezidir.'],
    given: ['[PH] ⊥ [AB]', '|AB| = 12 cm', 'm(PBA) = 30°'],
    ask: 'Buna göre, dik koninin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '12π√3' },
      { key: 'B', text: '18π√3' },
      { key: 'C', text: '24π√3' },
      { key: 'D', text: '32π√3' },
      { key: 'E', text: '36π√3' },
    ],
    answer: 'C',
    hint: 'PHB dik üçgeninde 30° nin karşısındaki kenarı yarıçap cinsinden yaz.',
    solution: [
      {
        title: 'Yarıçap',
        detail: '[AB] taban dairesinin çapıdır: r = |HB| = 12 / 2 = 6 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'PHB dik üçgeninde tan 30° = |PH| / |HB| olduğundan |PH| = 6 · (√3 / 3) = 2√3 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · π · 6² · 2√3 = 24π√3 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 6 400 176',
      caption: 'Şekil 13',
      label:
        'Tepe noktası P, taban merkezi H olan dik koni; [AB] taban çapı, [PH] ⊥ [AB]. |AB| = 12 cm ve B köşesindeki PBA açısı 30°.',
      svg: `
          <path class="hid" d="M44,120.1 A156,46.8 0 0 1 356,120.1"/>
          <path class="ln" d="M44,120.1 A156,46.8 0 0 0 356,120.1"/>
          <path class="ln" d="M200,30 L44,120.1 M200,30 L356,120.1"/>
          <path class="hid" d="M44,120.1 L356,120.1 M200,30 L200,120.1"/>
          <path class="hid" d="M200,110.1 L210,110.1 L210,120.1"/>
          <path class="arc" d="M320,120.1 A36,36 0 0 1 324.8,102.1"/>
          <circle class="pt" cx="200" cy="30" r="3.2"/>
          <circle class="pt" cx="44" cy="120.1" r="3.2"/>
          <circle class="pt" cx="356" cy="120.1" r="3.2"/>
          <circle class="pt" cx="200" cy="120.1" r="3.2"/>
          <text x="200" y="20" text-anchor="middle">P</text>
          <text x="36" y="126" text-anchor="end">A</text>
          <text x="364" y="126">B</text>
          <text x="200" y="140" text-anchor="middle">H</text>
          <text class="val" x="312" y="113" text-anchor="end">30°</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 19
  {
    id: 'pyramids-19',
    topic: 'Koniden eş tabanlı silindire su',
    stem: ['İçi su ile dolu olan bir dik koninin yüksekliği 18 cm dir.'],
    ask: 'Koninin içindeki bu su, koni ile eş tabanlı bir dik silindire boşaltıldığında silindirin içindeki suyun yüksekliği kaç cm olur?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'Taban alanları eşit olduğundan iki hacmi eşitleyip taban alanını sadeleştir.',
    solution: [
      {
        title: 'Koninin hacmi',
        detail: 'Taban alanı S ise suyun hacmi (1/3) · S · 18 = 6S dir.',
      },
      {
        title: 'Silindirdeki su',
        detail: 'Suyun silindirdeki yüksekliği x ise hacmi S · x olur.',
      },
      {
        title: 'Sonuç',
        detail: 'S · x = 6S olduğundan x = 6 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 20
  // Square base of edge 8√2 ≈ 11.31 in cabinet oblique at 15 px per cm; T stands
  // 15 cm above the centre O of the base.
  {
    id: 'pyramids-20',
    topic: 'Köşegen ve yan ayrıttan kare piramidin hacmi',
    stem: ['Yandaki düzgün kare piramitte'],
    given: ['|TC| = 17 cm', '|AC| = 16 cm'],
    ask: 'Yukarıdaki verilere göre, piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '480' },
      { key: 'B', text: '560' },
      { key: 'C', text: '600' },
      { key: 'D', text: '640' },
      { key: 'E', text: '720' },
    ],
    answer: 'D',
    hint: 'Tepe noktası köşegenlerin kesim noktasının üstündedir; yarım köşegen ve yan ayrıtla dik üçgen kur.',
    solution: [
      {
        title: 'Taban alanı',
        detail: 'Karenin alanı köşegenden bulunur: 16² / 2 = 128 cm².',
      },
      {
        title: 'Yükseklik',
        detail:
          'O köşegenlerin kesim noktası ise |OC| = 16 / 2 = 8 cm; TOC dik üçgeninde |TO| = √(17² − 8²) = √225 = 15 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 128 · 15 = 640 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 20 400 300',
      caption: 'Şekil 14',
      label:
        'Tabanı ABCD karesi olan düzgün kare piramit; T tepe noktası, [AC] tabanın köşegeni. |TC| = 17 cm, |AC| = 16 cm.',
      svg: `
          <path class="hid" d="M90,300 L150,240 L319.7,240 M204.9,45 L150,240 M90,300 L319.7,240"/>
          <path class="ln" d="M90,300 L259.7,300 L319.7,240 L204.9,45 Z M204.9,45 L259.7,300"/>
          <circle class="pt" cx="204.9" cy="45" r="3.2"/>
          <circle class="pt" cx="90" cy="300" r="3.2"/>
          <circle class="pt" cx="259.7" cy="300" r="3.2"/>
          <circle class="pt" cx="319.7" cy="240" r="3.2"/>
          <circle class="pt" cx="150" cy="240" r="3.2"/>
          <text x="204.9" y="35" text-anchor="middle">T</text>
          <text x="82" y="316" text-anchor="end">A</text>
          <text x="267.7" y="316">B</text>
          <text x="327.7" y="246">C</text>
          <text x="142" y="236" text-anchor="end">D</text>
          <text class="val" x="272" y="136">17</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 21
  // r = 1 and h = 3 at 20 px per cm; ellipses at 0.3 aspect.
  {
    id: 'pyramids-21',
    topic: 'Koni biçimli kapla silindir doldurma',
    stem: [
      'Şekildeki r yarıçaplı, h yükseklikli koni biçimindeki küçük kap kullanılarak 3r yarıçaplı, 2h yüksekliğine sahip silindir biçimindeki kap doldurulmak isteniyor.',
    ],
    ask: 'Bu işlem için kaç küçük kap dolusu suya ihtiyaç vardır?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '27' },
      { key: 'C', text: '36' },
      { key: 'D', text: '48' },
      { key: 'E', text: '54' },
    ],
    answer: 'E',
    hint: 'İki kabın hacmini r ve h cinsinden yazıp birbirine böl.',
    solution: [
      {
        title: 'Küçük kap',
        detail: 'Koninin hacmi (1/3) · πr² · h = πr²h / 3 tür.',
      },
      {
        title: 'Silindir',
        detail: 'Silindirin hacmi π · (3r)² · 2h = 18πr²h dir.',
      },
      {
        title: 'Sonuç',
        detail: '18πr²h ÷ (πr²h / 3) = 54 kap dolusu su gerekir.',
      },
    ],
    figure: {
      viewBox: '0 40 400 180',
      caption: 'Şekil 15',
      label:
        'Solda r yarıçaplı, h yükseklikli, tepesi aşağıda koni biçiminde küçük kap; sağda 3r yarıçaplı, 2h yükseklikli silindir biçiminde kap.',
      svg: `
          <path class="ln" d="M60,100 A20,6 0 0 0 100,100 A20,6 0 0 0 60,100 Z M60,100 L80,160 L100,100"/>
          <path class="hid" d="M80,100 L100,100 M80,100 L80,160"/>
          <circle class="pt" cx="80" cy="100" r="3.2"/>
          <text class="val" x="90" y="86" text-anchor="middle">r</text>
          <text class="val" x="104" y="140">h</text>
          <path class="ln" d="M210,70 A60,18 0 0 0 330,70 A60,18 0 0 0 210,70 Z M210,70 L210,190 A60,18 0 0 0 330,190 L330,70"/>
          <path class="hid" d="M210,190 A60,18 0 0 1 330,190 M270,190 L330,190"/>
          <circle class="pt" cx="270" cy="190" r="3.2"/>
          <text class="val" x="300" y="184" text-anchor="middle">3r</text>
          <text class="val" x="202" y="136" text-anchor="end">2h</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 22
  // r = 6, cone height 8 and cylinder height 10 at 12 px per cm; ellipses at
  // 0.3 aspect.
  {
    id: 'pyramids-22',
    topic: 'Silindir üstündeki koninin toplam hacmi',
    stem: ['Şekilde yarıçapları eşit silindir ve dik koni üst üste konulmuştur.'],
    given: ['|BC| = |CD|', '|DE| = 12 cm', 'Koninin yanal alanı 60π cm²'],
    ask: 'Yukarıdaki verilere göre, şeklin tüm hacmi kaç π cm³ tür?',
    choices: [
      { key: 'A', text: '420' },
      { key: 'B', text: '432' },
      { key: 'C', text: '456' },
      { key: 'D', text: '480' },
      { key: 'E', text: '504' },
    ],
    answer: 'C',
    hint: 'Yanal alan πrℓ formülünden koninin ana doğrusunu bul; silindirin yüksekliği ona eşittir.',
    solution: [
      {
        title: 'Ana doğru',
        detail: '[DE] çap olduğundan r = 6 cm; π · 6 · ℓ = 60π ise ℓ = |BC| = 10 cm dir.',
      },
      {
        title: 'Koninin hacmi',
        detail: 'Koninin yüksekliği √(10² − 6²) = 8 cm; hacmi (1/3) · π · 6² · 8 = 96π cm³ tür.',
      },
      {
        title: 'Silindirin hacmi',
        detail: 'Silindirin yüksekliği |CD| = |BC| = 10 cm; hacmi π · 6² · 10 = 360π cm³ tür.',
      },
      {
        title: 'Sonuç',
        detail: 'Tüm hacim 96π + 360π = 456π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 0 400 282',
      caption: 'Şekil 16',
      label:
        'Tepe noktası B olan dik koni, tabanı AC çaplı daire olacak biçimde silindirin üstüne konmuş; silindirin alt tabanının çapı [ED]. |BC| = |CD|, |DE| = 12 cm.',
      svg: `
          <path class="hid" d="M128,126 A72,21.6 0 0 1 272,126 M128,246 A72,21.6 0 0 1 272,246 M128,246 L272,246"/>
          <path class="ln" d="M200,30 L128,126 A72,21.6 0 0 0 272,126 Z M128,126 L128,246 A72,21.6 0 0 0 272,246 L272,126"/>
          <path class="tick" d="M231.2,81.6 L240.8,74.4 M266,186 L278,186"/>
          <circle class="pt" cx="200" cy="30" r="3.2"/>
          <circle class="pt" cx="128" cy="126" r="3.2"/>
          <circle class="pt" cx="272" cy="126" r="3.2"/>
          <circle class="pt" cx="128" cy="246" r="3.2"/>
          <circle class="pt" cx="272" cy="246" r="3.2"/>
          <text x="200" y="20" text-anchor="middle">B</text>
          <text x="120" y="130" text-anchor="end">A</text>
          <text x="280" y="130">C</text>
          <text x="120" y="252" text-anchor="end">E</text>
          <text x="280" y="252">D</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 23
  // Base radius 5 at 20 px per cm, ellipse at 0.3 aspect; P sits 6 cm right of
  // and 6 cm above B, so [PB] = 6√2 makes 45° with the base.
  {
    id: 'pyramids-23',
    topic: 'Eğik koninin hacmi',
    stem: [],
    given: ['|AB| = 10 cm', '|PB| = 6√2 cm', 'm(PBT) = 45°'],
    ask: 'Yukarıdaki eğik koni taban düzlemiyle 45° lik açı yaptığına göre, hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '40π' },
      { key: 'B', text: '45π' },
      { key: 'C', text: '50π' },
      { key: 'D', text: '60π' },
      { key: 'E', text: '75π' },
    ],
    answer: 'C',
    hint: 'P den taban düzlemine inen dikme koninin yüksekliğidir; 45° lik açıyı içeren dik üçgeni kullan.',
    solution: [
      {
        title: 'Yarıçap',
        detail: '[AB] taban dairesinin çapıdır: r = 10 / 2 = 5 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'P den BT doğrusuna inen dikmenin ayağı H olsun. PHB ikizkenar dik üçgeninde |PH| = 6√2 · sin 45° = 6 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · π · 5² · 6 = 50π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 28 400 192',
      caption: 'Şekil 17',
      label:
        'Tabanı AB çaplı daire olan eğik koni; P tepe noktası, T noktası AB doğrusu üzerinde B nin ötesinde. |AB| = 10 cm, |PB| = 6√2 cm, PBT açısı 45°.',
      svg: `
          <path class="shade" d="M350,60 L30,180 L230,180 Z"/>
          <path class="hid" d="M30,180 A100,30 0 0 1 230,180 M30,180 L230,180"/>
          <path class="ln" d="M30,180 A100,30 0 0 0 230,180 M350,60 L30,180 M350,60 L230,180 L380,180"/>
          <path class="arc" d="M258,180 A28,28 0 0 0 249.8,160.2"/>
          <circle class="pt" cx="350" cy="60" r="3.2"/>
          <circle class="pt" cx="30" cy="180" r="3.2"/>
          <circle class="pt" cx="230" cy="180" r="3.2"/>
          <circle class="pt" cx="130" cy="180" r="3.2"/>
          <circle class="pt" cx="380" cy="180" r="3.2"/>
          <text x="350" y="50" text-anchor="middle">P</text>
          <text x="22" y="186" text-anchor="end">A</text>
          <text x="230" y="200" text-anchor="middle">B</text>
          <text x="380" y="200" text-anchor="middle">T</text>
          <text class="val" x="264" y="172">45°</text>
          <text class="val" x="298" y="134">6√2</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 24
  // Box 8 × 6 × 10 in cabinet oblique at 20 px per cm; L sits above B.
  {
    id: 'pyramids-24',
    topic: 'Dikdörtgenler prizmasından kesilen piramit',
    stem: ['Şekil bir dikdörtgenler prizmasıdır.'],
    given: ['|AB| = 8 cm', '|BC| = 6 cm', '|MC| = 10 cm'],
    ask: 'Yukarıdaki verilere göre, oluşan (L, ADC) piramidinin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '72' },
      { key: 'C', text: '80' },
      { key: 'D', text: '96' },
      { key: 'E', text: '120' },
    ],
    answer: 'C',
    hint: 'L noktasının ABCD tabanına uzaklığı prizmanın yüksekliğidir.',
    solution: [
      {
        title: 'Taban alanı',
        detail: 'ADC üçgeni dikdörtgenin yarısıdır: (8 · 6) / 2 = 24 cm².',
      },
      {
        title: 'Yükseklik',
        detail: 'L, B nin tam üstündedir; tabana uzaklığı |LB| = |MC| = 10 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 24 · 10 = 80 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 18 400 290',
      caption: 'Şekil 18',
      label:
        'ABCDKLMN dikdörtgenler prizması; alt yüz ABCD, üst yüz KLMN, L noktası B nin üstünde. L noktası A, D ve C ile birleştirilmiş, ADC üçgeni taralı. |AB| = 8, |BC| = 6, |MC| = 10.',
      svg: `
          <path class="shade" d="M100,280 L142.4,237.6 L302.4,237.6 Z"/>
          <path class="hid" d="M100,280 L142.4,237.6 L302.4,237.6 M142.4,237.6 L142.4,37.6 M100,280 L302.4,237.6 M260,80 L142.4,237.6"/>
          <path class="ln" d="M100,280 L260,280 L302.4,237.6 L302.4,37.6 L142.4,37.6 L100,80 Z"/>
          <path class="ln" d="M100,80 L260,80 L302.4,37.6 M260,80 L260,280 M260,80 L100,280 M260,80 L302.4,237.6"/>
          <circle class="pt" cx="100" cy="280" r="3.2"/>
          <circle class="pt" cx="260" cy="280" r="3.2"/>
          <circle class="pt" cx="302.4" cy="237.6" r="3.2"/>
          <circle class="pt" cx="142.4" cy="237.6" r="3.2"/>
          <circle class="pt" cx="100" cy="80" r="3.2"/>
          <circle class="pt" cx="260" cy="80" r="3.2"/>
          <circle class="pt" cx="302.4" cy="37.6" r="3.2"/>
          <circle class="pt" cx="142.4" cy="37.6" r="3.2"/>
          <text x="92" y="296" text-anchor="end">A</text>
          <text x="268" y="296">B</text>
          <text x="310.4" y="243.6">C</text>
          <text x="134.4" y="231.6" text-anchor="end">D</text>
          <text x="92" y="86" text-anchor="end">K</text>
          <text x="266" y="98">L</text>
          <text x="310.4" y="34">M</text>
          <text x="134.4" y="34" text-anchor="end">N</text>
          <text class="val" x="180" y="298" text-anchor="middle">8</text>
          <text class="val" x="290" y="274">6</text>
          <text class="val" x="312" y="142">10</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 25
  {
    id: 'pyramids-25',
    topic: 'Dikdörtgen tabanlı piramidin yanal alanı',
    stem: [],
    given: [
      'Tabanı dikdörtgen olan bir dik piramidin yüksekliği 6 cm dir.',
      'Taban kenarları 16 cm ve 9 cm dir.',
    ],
    ask: 'Buna göre, piramidin yanal alanlar toplamı kaç cm² dir?',
    choices: [
      { key: 'A', text: '150' },
      { key: 'B', text: '180' },
      { key: 'C', text: '196' },
      { key: 'D', text: '210' },
      { key: 'E', text: '240' },
    ],
    answer: 'D',
    hint: 'Her yan yüzün yüksekliği; piramidin yüksekliği ile tabanın merkezinden o kenara olan uzaklıktan oluşan dik üçgenin hipotenüsüdür.',
    solution: [
      {
        title: 'Uzun kenardaki yan yüzler',
        detail:
          'Taban merkezinin 16 cm lik kenara uzaklığı 9 / 2 = 4,5 cm dir. Yan yüz yüksekliği √(6² + 4,5²) = √56,25 = 7,5 cm; iki yüzün alanı 2 · (16 · 7,5) / 2 = 120 cm².',
      },
      {
        title: 'Kısa kenardaki yan yüzler',
        detail:
          'Taban merkezinin 9 cm lik kenara uzaklığı 16 / 2 = 8 cm dir. Yan yüz yüksekliği √(6² + 8²) = 10 cm; iki yüzün alanı 2 · (9 · 10) / 2 = 90 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Yanal alanlar toplamı 120 + 90 = 210 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26
  {
    id: 'pyramids-26',
    topic: 'Kare piramidin tüm alanı',
    stem: [],
    ask: 'Cisim yüksekliği 4 cm ve tabanının bir kenar uzunluğu 6 cm olan kare tabanlı dik piramidin tüm alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '84' },
      { key: 'C', text: '96' },
      { key: 'D', text: '108' },
      { key: 'E', text: '120' },
    ],
    answer: 'C',
    hint: 'Tüm alan, taban alanı ile dört eş yan yüzün alanlarının toplamıdır.',
    solution: [
      {
        title: 'Yan yüz yüksekliği',
        detail:
          'Taban merkezinin bir kenara uzaklığı 6 / 2 = 3 cm dir; yan yüz yüksekliği √(4² + 3²) = 5 cm.',
      },
      {
        title: 'Yanal alan',
        detail: 'Dört eş üçgen: 4 · (6 · 5) / 2 = 60 cm².',
      },
      {
        title: 'Taban alanı',
        detail: '6 · 6 = 36 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'Tüm alan 60 + 36 = 96 cm² dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27
  {
    id: 'pyramids-27',
    topic: 'Daire diliminden koni',
    stem: [],
    ask: 'Merkez açısı 120° olan bir daire dilimi kıvrılarak bir koninin yanal yüzeyi elde edilirse koninin yüksekliğinin taban çapına oranı kaçtır?',
    choices: [
      { key: 'A', text: '√2/2' },
      { key: 'B', text: '1' },
      { key: 'C', text: '√2' },
      { key: 'D', text: '2' },
      { key: 'E', text: '2√2' },
    ],
    answer: 'C',
    hint: 'Dilimin yarıçapı koninin ana doğrusu, dilimin yay uzunluğu ise koninin taban çevresi olur.',
    solution: [
      {
        title: 'Taban yarıçapı',
        detail:
          'Dilimin yarıçapı R olsun; yay uzunluğu 2πR · 120/360 = 2πR/3 tür. Bu, taban çevresi 2πr ye eşit olduğundan r = R/3 tür.',
      },
      {
        title: 'Yükseklik',
        detail: 'Ana doğru R olduğundan h = √(R² − R²/9) = √(8R²/9) = 2√2 R / 3 tür.',
      },
      {
        title: 'Taban çapı',
        detail: '2r = 2R/3.',
      },
      {
        title: 'Sonuç',
        detail: 'h / 2r = (2√2 R / 3) / (2R / 3) = √2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 28
  // Cone of height H drawn 260 px tall with radius 150 px; the cylinder has
  // radius 100 px (|OA| = 2|AB|) and height 260/3 px. Ellipses at 0.3 aspect.
  {
    id: 'pyramids-28',
    topic: 'Koni içindeki silindirin hacmi',
    stem: [
      'Şekildeki dik koninin içine, tabanları aynı düzlemde olacak biçimde bir dik silindir yerleştirilmiştir.',
    ],
    given: ['O, koninin taban merkezi', '|OA| = 2|AB|'],
    ask: 'Buna göre, silindirin hacminin koninin hacmine oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/3' },
      { key: 'B', text: '4/9' },
      { key: 'C', text: '1/2' },
      { key: 'D', text: '2/3' },
      { key: 'E', text: '8/27' },
    ],
    answer: 'B',
    hint: 'Silindirin üst tabanındaki C noktası koninin ana doğrusu üzerindedir; tepe noktasından bakınca benzer üçgenler oluşur.',
    solution: [
      {
        title: 'Yarıçaplar',
        detail: '|AB| = k dersek silindirin yarıçapı |OA| = 2k, koninin yarıçapı |OB| = 3k olur.',
      },
      {
        title: 'Silindirin yüksekliği',
        detail:
          'Koninin yüksekliği H olsun. Tepe noktasından silindirin üst tabanına inen küçük koni asıl koniye benzerdir: yarıçap oranı 2k / 3k = 2/3, yani küçük koninin yüksekliği 2H/3, silindirin yüksekliği H − 2H/3 = H/3 tür.',
      },
      {
        title: 'Hacimler',
        detail: 'V silindir = π(2k)² · H/3 = 4πk²H/3; V koni = (1/3) π(3k)² · H = 3πk²H.',
      },
      {
        title: 'Sonuç',
        detail: 'Oran (4πk²H/3) / (3πk²H) = 4/9 dur.',
      },
    ],
    figure: {
      viewBox: '0 -4 400 340',
      caption: 'Şekil 19',
      label:
        'Tepe noktası P olan dik koninin içinde aynı tabana oturan bir dik silindir. O koninin taban merkezi; A silindirin, B koninin taban çemberi üzerinde ve O, A, B doğrusal. Silindirin üst tabanındaki D ve C noktaları koninin ana doğruları üzerinde. |OA| = 2|AB|.',
      svg: `
          <path class="shade" d="M100,193.3 L100,280 A100,30 0 0 0 300,280 L300,193.3 A100,30 0 0 0 100,193.3 Z"/>
          <path class="hid" d="M50,280 A150,45 0 0 1 350,280 M100,280 A100,30 0 0 1 300,280"/>
          <path class="ln" d="M50,280 A150,45 0 0 0 350,280 M200,20 L50,280 M200,20 L350,280"/>
          <path class="ln" d="M100,193.3 A100,30 0 0 1 300,193.3 A100,30 0 0 1 100,193.3 Z"/>
          <path class="ln" d="M100,193.3 L100,280 A100,30 0 0 0 300,280 L300,193.3"/>
          <path class="ln" d="M200,280 L350,280"/>
          <circle class="pt" cx="200" cy="20" r="3.2"/>
          <circle class="pt" cx="200" cy="280" r="3.2"/>
          <circle class="pt" cx="300" cy="280" r="3.2"/>
          <circle class="pt" cx="350" cy="280" r="3.2"/>
          <circle class="pt" cx="100" cy="193.3" r="3.2"/>
          <circle class="pt" cx="300" cy="193.3" r="3.2"/>
          <text x="200" y="10" text-anchor="middle">P</text>
          <text x="196" y="272" text-anchor="end">O</text>
          <text x="305" y="272">A</text>
          <text x="358" y="286">B</text>
          <text x="90" y="189" text-anchor="end">D</text>
          <text x="310" y="189">C</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 29
  // Cube of edge 6 at 30 px per cm in cabinet oblique (depth 90 px along 45°).
  // P is the front top right corner; A, B, C are the midpoints of its edges.
  {
    id: 'pyramids-29',
    topic: 'Küpün köşelerinden kesilen piramitler',
    stem: [
      'Şekildeki küpün bir ayrıtının uzunluğu 6 cm dir. A, B, C bulundukları ayrıtların orta noktalarıdır ve küpün P köşesinden (P, ABC) piramidi kesilerek çıkarılmıştır.',
    ],
    ask: 'Aynı işlem küpün sekiz köşesine de uygulanırsa geriye kalan cismin hacmi kaç cm³ olur?',
    choices: [
      { key: 'A', text: '144' },
      { key: 'B', text: '168' },
      { key: 'C', text: '180' },
      { key: 'D', text: '192' },
      { key: 'E', text: '198' },
    ],
    answer: 'C',
    hint: 'Kesilen her piramidin P köşesindeki üç ayrıtı karşılıklı diktir; tabanı dik üçgen, yüksekliği üçüncü ayrıt olarak al.',
    solution: [
      {
        title: 'Bir piramidin ayrıtları',
        detail:
          'A, B, C orta noktalar olduğundan |PA| = |PB| = |PC| = 6 / 2 = 3 cm dir ve bu üç ayrıt karşılıklı diktir.',
      },
      {
        title: 'Bir piramidin hacmi',
        detail:
          'Taban PAB dik üçgeni: (3 · 3) / 2 = 9/2 cm², yükseklik |PC| = 3 cm; V = (1/3) · (9/2) · 3 = 9/2 cm³.',
      },
      {
        title: 'Sekiz köşe',
        detail: 'Kesilen piramitler birbirine değmez; toplam 8 · 9/2 = 36 cm³.',
      },
      {
        title: 'Sonuç',
        detail: 'Küpün hacmi 6³ = 216 cm³ olduğundan geriye 216 − 36 = 180 cm³ kalır.',
      },
    ],
    figure: {
      viewBox: '0 22 400 294',
      caption: 'Şekil 20',
      label:
        'Ayrıtı 6 cm olan küp. Ön üst sağ köşe P; A, B ve C, P den çıkan üç ayrıtın orta noktaları. ABC üçgeni taralı ve P ile birleştirilmiş; (P, ABC) piramidi köşeden kesilen parçadır.',
      svg: `
          <path class="shade" d="M168,110 L258,200 L289.8,78.2 Z"/>
          <path class="hid" d="M141.6,226.4 L78,290 M141.6,226.4 L321.6,226.4 M141.6,226.4 L141.6,46.4"/>
          <path class="ln" d="M168,110 L78,110 L78,290 L258,290 L258,200 M78,110 L141.6,46.4 L321.6,46.4 L289.8,78.2 M321.6,46.4 L321.6,226.4 L258,290"/>
          <path class="ln" d="M168,110 L258,200 L289.8,78.2 Z"/>
          <path class="hid" d="M168,110 L258,110 L258,200 M258,110 L289.8,78.2"/>
          <circle class="pt" cx="258" cy="110" r="3.2"/>
          <circle class="pt" cx="168" cy="110" r="3.2"/>
          <circle class="pt" cx="258" cy="200" r="3.2"/>
          <circle class="pt" cx="289.8" cy="78.2" r="3.2"/>
          <text x="264" y="126">P</text>
          <text x="164" y="128" text-anchor="end">A</text>
          <text x="248" y="216" text-anchor="end">B</text>
          <text x="296" y="94">C</text>
          <text class="val" x="168" y="308" text-anchor="middle">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 30
  {
    id: 'pyramids-30',
    topic: 'Kesik piramidin yüksekliği',
    stem: ['Yüksekliği 12 cm olan bir piramit, tabanına paralel bir düzlemle kesiliyor.'],
    ask: 'Üstteki küçük piramidin hacminin kesik piramidin hacmine oranı 8/19 olduğuna göre, kesik piramidin yüksekliği kaç cm dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'Önce küçük piramidin hacmini bütün piramidin hacmiyle karşılaştır; benzer cisimlerde hacim oranı benzerlik oranının küpüdür.',
    solution: [
      {
        title: 'Bütün piramide oran',
        detail:
          'Küçük piramit 8k, kesik piramit 19k ise bütün piramit 8k + 19k = 27k dır; oran 8/27.',
      },
      {
        title: 'Benzerlik oranı',
        detail: '8/27 = (2/3)³ olduğundan yükseklikler oranı 2/3 tür.',
      },
      {
        title: 'Küçük piramidin yüksekliği',
        detail: '12 · 2/3 = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Kesik piramidin yüksekliği 12 − 8 = 4 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'pyramids-31',
    topic: 'Düzgün altıgen piramidin yüksekliği',
    stem: [],
    ask: 'Tabanı, yarıçapı 6 cm olan bir çemberin içine yerleştirilmiş düzgün altıgen olan piramidin hacmi 144√3 cm³ tür. Buna göre, piramidin yüksekliği kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'Çembere yerleştirilmiş düzgün altıgenin bir kenarı çemberin yarıçapına eşittir.',
    solution: [
      {
        title: 'Altıgenin kenarı',
        detail: 'Altıgen, kenarı yarıçapa eşit altı eşkenar üçgenden oluşur: kenar 6 cm.',
      },
      {
        title: 'Taban alanı',
        detail: '6 · (6² · √3 / 4) = 6 · 9√3 = 54√3 cm².',
      },
      {
        title: 'Hacimden yükseklik',
        detail: '(1/3) · 54√3 · h = 144√3 ⇒ 18h = 144.',
      },
      {
        title: 'Sonuç',
        detail: 'h = 8 cm dir.',
      },
    ],
  },
  // ---------------------------------------------------------------- 32
  // Rectangular base 8 × 6 at 30 px per cm in cabinet oblique (depth 90 px
  // along 45°). T sits 6 cm (180 px) above the base centre (221.8, 258.2).
  {
    id: 'pyramids-32',
    topic: 'Hacimden yan yüzün alanı',
    stem: [],
    given: ['ABCD bir dikdörtgen', '|AB| = 8 cm', '|BC| = 6 cm'],
    ask: 'Yukarıdaki şekilde (T, ABCD) dik piramidinin hacmi 96 cm³ olduğuna göre, A(TBC) kaç cm² dir?',
    choices: [
      { key: 'A', text: '4√13' },
      { key: 'B', text: '6√10' },
      { key: 'C', text: '6√13' },
      { key: 'D', text: '8√10' },
      { key: 'E', text: '12√13' },
    ],
    answer: 'C',
    hint: 'Önce hacimden piramidin yüksekliğini bul; TBC yüzünün yüksekliği, bu yükseklik ile taban merkezinin [BC] ye uzaklığından oluşan dik üçgenin hipotenüsüdür.',
    solution: [
      {
        title: 'Yükseklik',
        detail: 'Taban alanı 8 · 6 = 48 cm²; (1/3) · 48 · h = 96 ⇒ 16h = 96 ⇒ h = 6 cm.',
      },
      {
        title: 'Merkezin [BC] ye uzaklığı',
        detail: 'Taban merkezinin [BC] kenarına uzaklığı |AB| / 2 = 8 / 2 = 4 cm dir.',
      },
      {
        title: 'Yan yüz yüksekliği',
        detail: 'TBC yüzünün yüksekliği √(6² + 4²) = √52 = 2√13 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'A(TBC) = (6 · 2√13) / 2 = 6√13 cm² dir.',
      },
    ],
    figure: {
      viewBox: '0 56 400 262',
      caption: 'Şekil 21',
      label:
        'Tabanı ABCD dikdörtgeni olan T tepeli dik piramit. |AB| = 8 cm, |BC| = 6 cm; TBC yan yüzü taralı.',
      svg: `
          <path class="shade" d="M221.8,78.2 L310,290 L373.6,226.4 Z"/>
          <path class="hid" d="M70,290 L133.6,226.4 L373.6,226.4 M133.6,226.4 L221.8,78.2"/>
          <path class="ln" d="M70,290 L310,290 L373.6,226.4 L221.8,78.2 Z M221.8,78.2 L310,290"/>
          <circle class="pt" cx="221.8" cy="78.2" r="3.2"/>
          <circle class="pt" cx="70" cy="290" r="3.2"/>
          <circle class="pt" cx="310" cy="290" r="3.2"/>
          <circle class="pt" cx="373.6" cy="226.4" r="3.2"/>
          <circle class="pt" cx="133.6" cy="226.4" r="3.2"/>
          <text x="221.8" y="68" text-anchor="middle">T</text>
          <text x="62" y="306" text-anchor="end">A</text>
          <text x="314" y="308">B</text>
          <text x="380" y="230">C</text>
          <text x="126" y="222" text-anchor="end">D</text>
          <text class="val" x="190" y="310" text-anchor="middle">8</text>
          <text class="val" x="350" y="276">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 33
  {
    id: 'pyramids-33',
    topic: 'Hacimden yan yüz yüksekliği',
    stem: [],
    ask: 'Taban kenarının uzunluğu 6√3 cm olan eşkenar üçgen dik piramidin hacmi 36√3 cm³ olduğuna göre, yan yüz yüksekliği kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '2√13' },
      { key: 'D', text: '√97' },
      { key: 'E', text: '6' },
    ],
    answer: 'B',
    hint: 'Yan yüz yüksekliği; piramidin yüksekliği ile tabanın ağırlık merkezinden bir kenara olan uzaklıktan (iç teğet çemberin yarıçapı) oluşan dik üçgenin hipotenüsüdür.',
    solution: [
      {
        title: 'Taban alanı',
        detail: '(6√3)² · √3 / 4 = 108√3 / 4 = 27√3 cm².',
      },
      {
        title: 'Yükseklik',
        detail: '(1/3) · 27√3 · h = 36√3 ⇒ 9h = 36 ⇒ h = 4 cm.',
      },
      {
        title: 'Merkezin kenara uzaklığı',
        detail:
          'Eşkenar üçgenin yüksekliği 6√3 · √3 / 2 = 9 cm; ağırlık merkezinin kenara uzaklığı bunun üçte biri, 3 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Yan yüz yüksekliği √(4² + 3²) = 5 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  // Cone of height 12 and radius 9 at 18 px per cm: apex (200, 30), base centre
  // (200, 246), rx 162. The oil surface sits 4 cm (72 px) below the apex with
  // radius 54. Ellipses at 0.3 aspect.
  {
    id: 'pyramids-34',
    topic: 'Koni biçimli kapta iki sıvı',
    stem: [
      'Yüksekliği 12 cm olan dik koni şeklindeki kabın bir kısmı su, bir kısmı zeytinyağı ile tamamen doludur. Zeytinyağı suyun üstündedir.',
    ],
    given: ['|PO| = 12 cm', '|OB| = 9 cm', 'V su = 312π cm³'],
    ask: 'Buna göre, zeytinyağı tabakasının yüksekliği kaç cm dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'Zeytinyağı, tepe noktası P olan ve asıl koniye benzer küçük bir koni oluşturur.',
    solution: [
      {
        title: 'Koninin hacmi',
        detail: '(1/3) · π · 9² · 12 = 324π cm³.',
      },
      {
        title: 'Zeytinyağının hacmi',
        detail: '324π − 312π = 12π cm³.',
      },
      {
        title: 'Benzerlik oranı',
        detail: 'Hacim oranı 12π / 324π = 1/27 = (1/3)³ olduğundan yükseklikler oranı 1/3 tür.',
      },
      {
        title: 'Sonuç',
        detail: 'Zeytinyağının yüksekliği 12 · 1/3 = 4 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 8 400 298',
      caption: 'Şekil 22',
      label:
        'Tepe noktası P, taban merkezi O olan dik koni biçiminde kap. B taban çemberi üzerinde. Tepeye yakın üst kısımda zeytinyağı, altındaki taralı kısımda su var.',
      svg: `
          <path class="shade" d="M146,102 A54,16.2 0 0 1 254,102 L362,246 A162,48.6 0 0 1 38,246 Z"/>
          <path class="hid" d="M38,246 A162,48.6 0 0 1 362,246 M200,30 L200,246"/>
          <path class="ln" d="M38,246 A162,48.6 0 0 0 362,246 M200,30 L38,246 M200,30 L362,246"/>
          <path class="ln" d="M146,102 A54,16.2 0 0 1 254,102 A54,16.2 0 0 1 146,102 Z"/>
          <path class="ln" d="M200,246 L362,246"/>
          <circle class="pt" cx="200" cy="30" r="3.2"/>
          <circle class="pt" cx="200" cy="246" r="3.2"/>
          <circle class="pt" cx="362" cy="246" r="3.2"/>
          <text x="200" y="20" text-anchor="middle">P</text>
          <text x="194" y="240" text-anchor="end">O</text>
          <text x="370" y="252">B</text>
          <text x="244" y="72">Zeytinyağı</text>
          <text x="150" y="200" text-anchor="middle">Su</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 35
  {
    id: 'pyramids-35',
    topic: 'Düzgün sekizyüzlünün hacmi',
    stem: [],
    ask: 'Bir düzgün sekizyüzlünün alanı 72√3 cm² ise, hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '36√2' },
      { key: 'B', text: '54√2' },
      { key: 'C', text: '72' },
      { key: 'D', text: '72√2' },
      { key: 'E', text: '144√2' },
    ],
    answer: 'D',
    hint: 'Düzgün sekizyüzlü, tabanları çakışık iki eş kare piramitten oluşur ve sekiz yüzü eş eşkenar üçgendir.',
    solution: [
      {
        title: 'Ayrıt',
        detail: 'Sekiz eşkenar üçgen: 8 · a²√3 / 4 = 2√3 a² = 72√3 ⇒ a² = 36 ⇒ a = 6 cm.',
      },
      {
        title: 'Piramidin yüksekliği',
        detail:
          'Ortak kare tabanın köşegeni 6√2 cm; tepe noktaları karşılıklı köşeler gibi olduğundan her piramidin yüksekliği köşegenin yarısı, 3√2 cm dir.',
      },
      {
        title: 'Bir piramidin hacmi',
        detail: '(1/3) · 6² · 3√2 = 36√2 cm³.',
      },
      {
        title: 'Sonuç',
        detail: 'Sekizyüzlünün hacmi 2 · 36√2 = 72√2 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 36
  // Cone with r = 4 and slant 16 (height √240 ≈ 15.49) at 16 px per cm:
  // apex (200, 24), base centre (200, 271.9), rx 64. Ellipse at 0.3 aspect.
  {
    id: 'pyramids-36',
    topic: 'Koni yüzeyinde en kısa yol',
    stem: [
      'Şekildeki dik koni, 90° lik bir daire diliminin kıvrılmasıyla elde edilmiştir ve taban çevresi 8π cm dir.',
    ],
    ask: 'Buna göre, B noktasından hareket eden bir karıncanın koni yüzeyinden dolaşarak tekrar B noktasına dönmesi için izleyeceği en kısa yol kaç cm dir?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '8√2' },
      { key: 'C', text: '16√2' },
      { key: 'D', text: '16√3' },
      { key: 'E', text: '32' },
    ],
    answer: 'C',
    hint: 'Koniyi [AB] boyunca kesip aç: yol, açınımdaki daire diliminin iki ucundaki B noktalarını birleştiren kiriş olur.',
    solution: [
      {
        title: 'Taban yarıçapı',
        detail: '2πr = 8π ⇒ r = 4 cm.',
      },
      {
        title: 'Ana doğru',
        detail: 'r / ℓ = 90° / 360° ⇒ 4 / ℓ = 1/4 ⇒ ℓ = 16 cm.',
      },
      {
        title: 'Açınım',
        detail:
          'Koni [AB] boyunca açılınca yarıçapı 16 cm, merkez açısı 90° olan bir daire dilimi elde edilir; B noktası dilimin iki ucuna düşer.',
      },
      {
        title: 'Sonuç',
        detail:
          'En kısa yol bu iki ucu birleştiren kiriştir; dik açının karşısında olduğundan √(16² + 16²) = 16√2 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 4 400 300',
      caption: 'Şekil 23',
      label:
        'Tepe noktası A olan dik koni. B ve C taban çemberinin çapının uçları; taban merkezinden C ye r yarıçapı çizili.',
      svg: `
          <path class="hid" d="M136,271.9 A64,19.2 0 0 1 264,271.9"/>
          <path class="ln" d="M136,271.9 A64,19.2 0 0 0 264,271.9 M200,24 L136,271.9 M200,24 L264,271.9"/>
          <path class="ln" d="M200,271.9 L264,271.9"/>
          <circle class="pt" cx="200" cy="24" r="3.2"/>
          <circle class="pt" cx="200" cy="271.9" r="3.2"/>
          <circle class="pt" cx="136" cy="271.9" r="3.2"/>
          <circle class="pt" cx="264" cy="271.9" r="3.2"/>
          <text x="200" y="14" text-anchor="middle">A</text>
          <text x="128" y="278" text-anchor="end">B</text>
          <text x="272" y="278">C</text>
          <text class="val" x="232" y="266" text-anchor="middle">r</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 37
  // D, E, F are the midpoints of [TA], [TB], [TC], matching the ratio 1/2.
  {
    id: 'pyramids-37',
    topic: 'Kesik piramitten bütün piramidin hacmi',
    stem: ['Şekildeki üçgen piramitte DEF düzlemi ABC tabanına paraleldir.'],
    given: ['A(ABC) = 4 · A(DEF)', 'Kesik piramidin hacmi 56 cm³'],
    ask: 'Buna göre, (T, ABC) piramidinin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '63' },
      { key: 'C', text: '64' },
      { key: 'D', text: '72' },
      { key: 'E', text: '84' },
    ],
    answer: 'C',
    hint: 'Benzer cisimlerde alanlar oranı benzerlik oranının karesi, hacimler oranı ise küpüdür.',
    solution: [
      {
        title: 'Benzerlik oranı',
        detail:
          'Alanlar oranı 1/4 = (1/2)² olduğundan (T, DEF) ile (T, ABC) nin benzerlik oranı 1/2 dir.',
      },
      {
        title: 'Hacim oranı',
        detail:
          '(1/2)³ = 1/8: küçük piramit V ise bütün piramit 8V, kesik piramit 8V − V = 7V dir.',
      },
      {
        title: 'Küçük piramit',
        detail: '7V = 56 ⇒ V = 8 cm³.',
      },
      {
        title: 'Sonuç',
        detail: '(T, ABC) piramidinin hacmi 8 · 8 = 64 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 8 400 336',
      caption: 'Şekil 24',
      label:
        'T tepeli ABC tabanlı üçgen piramit. D, E, F sırasıyla [TA], [TB], [TC] üzerinde ve DEF üçgeni tabana paralel. ABC tabanı taralı.',
      svg: `
          <path class="shade" d="M60,250 L170,320 L340,250 Z"/>
          <path class="hid" d="M60,250 L340,250 M135,140 L275,140"/>
          <path class="ln" d="M210,30 L60,250 L170,320 L340,250 Z M210,30 L170,320"/>
          <path class="ln" d="M135,140 L190,175 L275,140"/>
          <circle class="pt" cx="210" cy="30" r="3.2"/>
          <circle class="pt" cx="60" cy="250" r="3.2"/>
          <circle class="pt" cx="170" cy="320" r="3.2"/>
          <circle class="pt" cx="340" cy="250" r="3.2"/>
          <circle class="pt" cx="135" cy="140" r="3.2"/>
          <circle class="pt" cx="190" cy="175" r="3.2"/>
          <circle class="pt" cx="275" cy="140" r="3.2"/>
          <text x="210" y="20" text-anchor="middle">T</text>
          <text x="52" y="256" text-anchor="end">A</text>
          <text x="170" y="338" text-anchor="middle">B</text>
          <text x="348" y="256">C</text>
          <text x="127" y="138" text-anchor="end">D</text>
          <text x="184" y="192" text-anchor="end">E</text>
          <text x="283" y="138">F</text>
        `,
    },
  },
  // ---------------------------------------------------------------- 38
  {
    id: 'pyramids-38',
    topic: 'Hacimleri eşit koni ve silindir',
    stem: [
      'Bir dik koni ile bir dik silindirin hacimleri sayıca eşittir. Koninin yüksekliği, silindirin yüksekliğinin 4/3 katıdır.',
    ],
    ask: 'Buna göre, koninin taban yarıçapının silindirin taban yarıçapına oranı kaçtır?',
    choices: [
      { key: 'A', text: '1' },
      { key: 'B', text: '4/3' },
      { key: 'C', text: '3/2' },
      { key: 'D', text: '2' },
      { key: 'E', text: '9/4' },
    ],
    answer: 'C',
    hint: 'İki hacim formülünü eşitle; yükseklikleri silindirin yüksekliği cinsinden yaz.',
    solution: [
      {
        title: 'Değişkenler',
        detail: 'Silindirin yarıçapı R, yüksekliği H; koninin yarıçapı r, yüksekliği 4H/3 olsun.',
      },
      {
        title: 'Hacimleri eşitle',
        detail: '(1/3) · π · r² · (4H/3) = π · R² · H ⇒ (4/9) · r² = R².',
      },
      {
        title: 'Kareler oranı',
        detail: 'r² / R² = 9/4.',
      },
      {
        title: 'Sonuç',
        detail: 'r / R = √(9/4) = 3/2 dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39
  {
    id: 'pyramids-39',
    topic: 'Düzgün dörtyüzlünün yüz yüksekliği',
    stem: [],
    ask: 'Cisim yüksekliği 2√6 cm olan düzgün dörtyüzlünün bir yüzeyinin yüksekliği kaç cm dir?',
    choices: [
      { key: 'A', text: '2√3' },
      { key: 'B', text: '3' },
      { key: 'C', text: '3√2' },
      { key: 'D', text: '3√3' },
      { key: 'E', text: '6' },
    ],
    answer: 'D',
    hint: 'Ayrıtı a olan düzgün dörtyüzlünün cisim yüksekliği a√6 / 3 tür; önce ayrıtı bul.',
    solution: [
      {
        title: 'Cisim yüksekliği',
        detail:
          'Tepeden inen dikme, yüzün ağırlık merkezine düşer; merkezin köşeye uzaklığı a√3 / 3 olduğundan h = √(a² − a²/3) = a√6 / 3 tür.',
      },
      {
        title: 'Ayrıt',
        detail: 'a√6 / 3 = 2√6 ⇒ a = 6 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Her yüz, kenarı 6 cm olan eşkenar üçgendir; yüksekliği 6√3 / 2 = 3√3 cm dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'pyramids-40',
    topic: 'Tabana paralel kesilen koninin hacim oranı',
    stem: [
      'Taban yarıçapı 6 cm olan bir dik koni, tabanına paralel bir düzlemle kesiliyor. Kesit dairesinin yarıçapı 2 cm dir.',
    ],
    ask: 'Buna göre, kesilen koninin üst kısmının hacminin alt kısmının hacmine oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/3' },
      { key: 'B', text: '1/8' },
      { key: 'C', text: '1/9' },
      { key: 'D', text: '1/26' },
      { key: 'E', text: '1/27' },
    ],
    answer: 'D',
    hint: 'Üst kısım asıl koniye benzer küçük bir konidir; hacimler oranı benzerlik oranının küpüdür.',
    solution: [
      {
        title: 'Benzerlik oranı',
        detail: 'Küçük koni ile bütün koninin yarıçapları oranı 2 / 6 = 1/3 tür.',
      },
      {
        title: 'Hacim oranı',
        detail: '(1/3)³ = 1/27: küçük koni V ise bütün koni 27V dir.',
      },
      {
        title: 'Alt kısım',
        detail: 'Alt kısım (kesik koni) 27V − V = 26V dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Üst kısmın alt kısma oranı V / 26V = 1/26 dır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 41
  // Base 16 × 12 at 12 px per cm (depth at half scale along 45°); height 24.
  // A (80, 310), B (272, 310), C (322.9, 259.1), D (130.9, 259.1); the base
  // centre is (201.5, 284.5), so T sits 288 px above it at (201.5, -3.5).
  {
    id: 'pyramids-41',
    topic: 'Yan ayrıttan dikdörtgen tabanlı piramidin hacmi',
    stem: [],
    given: [
      '(T, ABCD), tabanı dikdörtgen olan bir dik piramit',
      '|AB| = 16 cm',
      '|BC| = 12 cm',
      '|TC| = 26 cm',
    ],
    ask: 'Buna göre, (T, ABCD) dik piramidinin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '1280' },
      { key: 'B', text: '1440' },
      { key: 'C', text: '1536' },
      { key: 'D', text: '1600' },
      { key: 'E', text: '1920' },
    ],
    answer: 'C',
    hint: 'Dik piramidin tepesi, tabandaki köşegenlerin kesim noktasının tam üstündedir; köşegenin yarısı, yükseklik ve yan ayrıt bir dik üçgen oluşturur.',
    solution: [
      {
        title: 'Köşegen',
        detail: '|AC| = √(16² + 12²) = √400 = 20 cm; merkezin C ye uzaklığı 10 cm dir.',
      },
      {
        title: 'Yükseklik',
        detail: 'h = √(26² − 10²) = √(676 − 100) = √576 = 24 cm.',
      },
      {
        title: 'Taban alanı',
        detail: '16 · 12 = 192 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 192 · 24 = 1536 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 -30 400 366',
      caption: 'Şekil 25',
      label:
        'Tabanı ABCD dikdörtgeni olan T tepeli dik piramit. |AB| = 16 cm, |BC| = 12 cm, |TC| = 26 cm.',
      svg: `
          <path class="hid" d="M80,310 L130.9,259.1 L322.9,259.1 M130.9,259.1 L201.5,-3.5"/>
          <path class="ln" d="M80,310 L272,310 L322.9,259.1 L201.5,-3.5 Z M201.5,-3.5 L272,310"/>
          <circle class="pt" cx="201.5" cy="-3.5" r="3.2"/>
          <circle class="pt" cx="80" cy="310" r="3.2"/>
          <circle class="pt" cx="272" cy="310" r="3.2"/>
          <circle class="pt" cx="322.9" cy="259.1" r="3.2"/>
          <circle class="pt" cx="130.9" cy="259.1" r="3.2"/>
          <text x="201.5" y="-14" text-anchor="middle">T</text>
          <text x="72" y="326" text-anchor="end">A</text>
          <text x="276" y="328">B</text>
          <text x="330" y="264">C</text>
          <text x="123" y="254" text-anchor="end">D</text>
          <text class="val" x="176" y="328" text-anchor="middle">16</text>
          <text class="val" x="302" y="300">12</text>
          <text class="val" x="270" y="124">26</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 42
  // Square-based box 6 × 6 × 10 at 22 px per cm (depth at half scale along 45°).
  // A (120, 300), B (252, 300), C (298.7, 253.3), D (166.7, 253.3); the top face
  // is 220 px higher. P is the centre of the top face, (209.3, 56.7).
  {
    id: 'pyramids-42',
    topic: 'Prizmadan piramit çıkarılınca kalan hacim',
    stem: [
      'Şekildeki kare tabanlı dik prizmanın taban kenarı 6 cm dir. P noktası prizmanın üst yüzeyi üzerindedir.',
    ],
    ask: 'Prizmanın içinden (P, ABCD) piramidi çıkarılınca geriye kalan hacim 240 cm³ olduğuna göre, prizmanın yüksekliği kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '8' },
      { key: 'C', text: '9' },
      { key: 'D', text: '10' },
      { key: 'E', text: '12' },
    ],
    answer: 'D',
    hint: 'Piramitle prizmanın tabanı ve yüksekliği ortaktır; piramit prizmanın üçte biri kadardır.',
    solution: [
      {
        title: 'Ortak taban ve yükseklik',
        detail:
          'P üst yüzde olduğundan piramidin yüksekliği prizmanın yüksekliği h dir; taban alanı 6 · 6 = 36 cm².',
      },
      {
        title: 'Kalan hacim',
        detail: 'Prizma 36h, piramit (1/3) · 36h = 12h; kalan 36h − 12h = 24h dir.',
      },
      {
        title: 'Sonuç',
        detail: '24h = 240 ⇒ h = 10 cm dir.',
      },
    ],
    figure: {
      viewBox: '0 8 400 316',
      caption: 'Şekil 26',
      label:
        'Tabanı ABCD karesi olan dik prizma. P noktası üst yüzde; P, A, B, C ve D ile birleştirilerek (P, ABCD) piramidi oluşturulmuş. ABCD tabanı taralı, taban kenarı 6 cm.',
      svg: `
          <path class="shade" d="M120,300 L252,300 L298.7,253.3 L166.7,253.3 Z"/>
          <path class="hid" d="M120,300 L166.7,253.3 L298.7,253.3 M166.7,253.3 L166.7,33.3"/>
          <path class="ln" d="M120,300 L252,300 L298.7,253.3 L298.7,33.3 L166.7,33.3 L120,80 Z"/>
          <path class="ln" d="M120,80 L252,80 L298.7,33.3 M252,80 L252,300"/>
          <path class="hid" d="M209.3,56.7 L120,300 M209.3,56.7 L252,300 M209.3,56.7 L298.7,253.3 M209.3,56.7 L166.7,253.3"/>
          <circle class="pt" cx="120" cy="300" r="3.2"/>
          <circle class="pt" cx="252" cy="300" r="3.2"/>
          <circle class="pt" cx="298.7" cy="253.3" r="3.2"/>
          <circle class="pt" cx="166.7" cy="253.3" r="3.2"/>
          <circle class="pt" cx="209.3" cy="56.7" r="3.2"/>
          <text x="112" y="314" text-anchor="end">A</text>
          <text x="260" y="314">B</text>
          <text x="306.7" y="258">C</text>
          <text x="158.7" y="248" text-anchor="end">D</text>
          <text x="209.3" y="48" text-anchor="middle">P</text>
          <text class="val" x="186" y="318" text-anchor="middle">6</text>
          <text class="val" x="280" y="290">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 43
  {
    id: 'pyramids-43',
    topic: 'Yanal alandan kare piramidin hacmi',
    stem: [],
    ask: 'Tabanının bir kenarı 12 cm olan düzgün kare piramidin yanal alanı 240 cm² dir. Buna göre, bu piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '288' },
      { key: 'B', text: '336' },
      { key: 'C', text: '384' },
      { key: 'D', text: '432' },
      { key: 'E', text: '480' },
    ],
    answer: 'C',
    hint: 'Yanal alan dört eş ikizkenar üçgenden oluşur; önce yan yüz yüksekliğini bul.',
    solution: [
      {
        title: 'Yan yüz yüksekliği',
        detail: '4 · (12 · s / 2) = 24s = 240 ⇒ s = 10 cm.',
      },
      {
        title: 'Piramidin yüksekliği',
        detail: 'Taban merkezinin bir kenara uzaklığı 12 / 2 = 6 cm; h = √(10² − 6²) = √64 = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 12² · 8 = (1/3) · 144 · 8 = 384 cm³ tür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 44
  // Cone with r = 3 and slant 7 (height 2√10 ≈ 6.32) at 36 px per cm:
  // apex (200, 24), base centre (200, 251.7), rx 108, ry 32.4 (0.3 aspect).
  // T sits on the front arc at 60°: (254, 279.8).
  {
    id: 'pyramids-44',
    topic: 'Ana doğru ve yarıçaptan koninin hacmi',
    stem: ['Şekildeki dik koninin taban çemberinin merkezi O noktasıdır.'],
    given: ['|PT| = 7 cm', '|AO| = 3 cm'],
    ask: 'Verilenlere göre, dik koninin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '3π√10' },
      { key: 'B', text: '6π√10' },
      { key: 'C', text: '9π√10' },
      { key: 'D', text: '12π√10' },
      { key: 'E', text: '18π√10' },
    ],
    answer: 'B',
    hint: '[PT] bir ana doğrudur; yükseklik, yarıçap ve ana doğru bir dik üçgen oluşturur.',
    solution: [
      {
        title: 'Yarıçap ve ana doğru',
        detail: 'r = |AO| = 3 cm; T taban çemberi üzerinde olduğundan ℓ = |PT| = 7 cm.',
      },
      {
        title: 'Yükseklik',
        detail: 'h = √(7² − 3²) = √40 = 2√10 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · π · 3² · 2√10 = 6π√10 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 4 400 308',
      caption: 'Şekil 27',
      label:
        'Tepe noktası P, taban merkezi O olan dik koni. A ve B taban çemberinin çapının uçları; T taban çemberi üzerinde ve P ile birleştirilmiş.',
      svg: `
          <path class="hid" d="M92,251.7 A108,32.4 0 0 1 308,251.7 M92,251.7 L308,251.7"/>
          <path class="ln" d="M92,251.7 A108,32.4 0 0 0 308,251.7 M200,24 L92,251.7 M200,24 L308,251.7 M200,24 L254,279.8"/>
          <circle class="pt" cx="200" cy="24" r="3.2"/>
          <circle class="pt" cx="200" cy="251.7" r="3.2"/>
          <circle class="pt" cx="92" cy="251.7" r="3.2"/>
          <circle class="pt" cx="308" cy="251.7" r="3.2"/>
          <circle class="pt" cx="254" cy="279.8" r="3.2"/>
          <text x="200" y="14" text-anchor="middle">P</text>
          <text x="84" y="258" text-anchor="end">A</text>
          <text x="316" y="258">B</text>
          <text x="196" y="270" text-anchor="end">O</text>
          <text x="258" y="300">T</text>
          <text class="val" x="146" y="244" text-anchor="middle">3</text>
          <text class="val" x="238" y="150">7</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 45
  // Sector of radius 10 at 14 px per cm with its 216° angle opening to the
  // right: O (180, 160), A at 108° (136.7, 26.9), B at −108° (136.7, 293.1).
  {
    id: 'pyramids-45',
    topic: 'Daire diliminden koninin hacmi',
    stem: ['Yukarıda verilen daire dilimi kıvrılarak bir dik koni elde ediliyor.'],
    given: ['O merkez', '|OA| = 10 cm', 'm(AOB) = 216°'],
    ask: 'Buna göre, dik koninin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '64π' },
      { key: 'B', text: '72π' },
      { key: 'C', text: '96π' },
      { key: 'D', text: '108π' },
      { key: 'E', text: '128π' },
    ],
    answer: 'C',
    hint: 'Dilimin yay uzunluğu koninin taban çevresine, yarıçapı ise ana doğrusuna eşittir.',
    solution: [
      {
        title: 'Yay uzunluğu',
        detail: '2π · 10 · 216/360 = 12π cm.',
      },
      {
        title: 'Taban yarıçapı',
        detail: '2πr = 12π ⇒ r = 6 cm; ana doğru ℓ = 10 cm dir.',
      },
      {
        title: 'Yükseklik',
        detail: 'h = √(10² − 6²) = √64 = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · π · 6² · 8 = 96π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 6 400 308',
      caption: 'Şekil 28',
      label:
        'Merkezi O, yarıçapı 10 cm, merkez açısı 216° olan AOB daire dilimi; dilim taralı.',
      svg: `
          <path class="shade" d="M180,160 L136.7,26.9 A140,140 0 1 1 136.7,293.1 Z"/>
          <path class="ln" d="M180,160 L136.7,26.9 A140,140 0 1 1 136.7,293.1 Z"/>
          <path class="arc" d="M172.6,137.2 A24,24 0 1 1 172.6,182.8"/>
          <circle class="pt" cx="180" cy="160" r="3.2"/>
          <circle class="pt" cx="136.7" cy="26.9" r="3.2"/>
          <circle class="pt" cx="136.7" cy="293.1" r="3.2"/>
          <text x="170" y="165" text-anchor="end">O</text>
          <text x="128" y="24" text-anchor="end">A</text>
          <text x="128" y="306" text-anchor="end">B</text>
          <text class="val" x="210" y="165">216°</text>
          <text class="val" x="148" y="232" text-anchor="end">10</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 46
  // Square base of edge 8 in cabinet oblique at 26 px per cm (depth at half
  // scale along 45°): A (70, 300), B (278, 300), C (351.5, 226.5),
  // D (143.5, 226.5). The height is 4√3 cm, so T sits 180.1 px above the
  // centre O (210.8, 263.2); M is the midpoint of [AB].
  {
    id: 'pyramids-46',
    topic: 'Yan yüzün tabanla açısından piramidin hacmi',
    stem: [
      'Şekildeki düzgün kare piramidin bir yan yüzü taban düzlemiyle 60° lik açı yapmaktadır.',
    ],
    ask: 'Piramidin tabanının bir kenar uzunluğu 8 cm olduğuna göre, hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '64√3' },
      { key: 'B', text: '256√3/3' },
      { key: 'C', text: '96√3' },
      { key: 'D', text: '128√3' },
      { key: 'E', text: '256√3' },
    ],
    answer: 'B',
    hint: 'Taban merkezinden bir kenarın orta noktasına ve tepeye giden doğrular, açısı 60° olan bir dik üçgen oluşturur.',
    solution: [
      {
        title: 'Dik üçgen',
        detail:
          'O taban merkezi, M [AB] nin orta noktası olsun. TOM dik üçgeninde |OM| = 8 / 2 = 4 cm ve m(TMO) = 60° dir.',
      },
      {
        title: 'Yükseklik',
        detail: '|TO| = |OM| · tan 60° = 4√3 cm.',
      },
      {
        title: 'Taban alanı',
        detail: '8 · 8 = 64 cm².',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 64 · 4√3 = 256√3/3 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 56 400 268',
      caption: 'Şekil 29',
      label:
        'Tepe noktası T, tabanı ABCD karesi olan düzgün kare piramit; taban kenarı 8 cm.',
      svg: `
          <path class="hid" d="M70,300 L143.5,226.5 L351.5,226.5 M210.8,83.1 L143.5,226.5"/>
          <path class="ln" d="M70,300 L278,300 L351.5,226.5 M210.8,83.1 L70,300 M210.8,83.1 L278,300 M210.8,83.1 L351.5,226.5"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="278" cy="300" r="3.2"/>
          <circle class="pt" cx="351.5" cy="226.5" r="3.2"/>
          <circle class="pt" cx="143.5" cy="226.5" r="3.2"/>
          <circle class="pt" cx="210.8" cy="83.1" r="3.2"/>
          <text x="210.8" y="74" text-anchor="middle">T</text>
          <text x="62" y="314" text-anchor="end">A</text>
          <text x="286" y="314">B</text>
          <text x="359.5" y="232">C</text>
          <text x="150" y="246">D</text>
          <text class="val" x="174" y="318" text-anchor="middle">8</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 56 400 268',
      caption: 'Şekil 29',
      label:
        'Aynı piramitte T den tabana inen [TO] yüksekliği, O dan [AB] nin orta noktası M ye çizilen [OM] ve yan yüz yüksekliği [TM]; m(TMO) = 60°.',
      svg: `
          <path class="hid" d="M70,300 L143.5,226.5 L351.5,226.5 M210.8,83.1 L143.5,226.5"/>
          <path class="ln" d="M70,300 L278,300 L351.5,226.5 M210.8,83.1 L70,300 M210.8,83.1 L278,300 M210.8,83.1 L351.5,226.5"/>
          <path class="aux" d="M210.8,83.1 L210.8,263.2 L174,300 Z"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="278" cy="300" r="3.2"/>
          <circle class="pt" cx="351.5" cy="226.5" r="3.2"/>
          <circle class="pt" cx="143.5" cy="226.5" r="3.2"/>
          <circle class="pt" cx="210.8" cy="83.1" r="3.2"/>
          <circle class="pt" cx="210.8" cy="263.2" r="3.2"/>
          <circle class="pt" cx="174" cy="300" r="3.2"/>
          <text x="210.8" y="74" text-anchor="middle">T</text>
          <text x="62" y="314" text-anchor="end">A</text>
          <text x="286" y="314">B</text>
          <text x="359.5" y="232">C</text>
          <text x="150" y="246">D</text>
          <text x="218" y="262">O</text>
          <text x="174" y="318" text-anchor="middle">M</text>
          <text class="val" x="186" y="286">60°</text>
          <text class="val" x="204" y="180" text-anchor="end">4√3</text>
          <text class="val" x="202" y="298">4</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 47
  // Large cone: apex (200, 20), base centre O1 (200, 290), radius 150 px.
  // The small cone's base is the section at half height, O2 (200, 155) with
  // radius 75 px, and its apex is O1. Ellipses at 0.3 aspect.
  {
    id: 'pyramids-47',
    topic: 'İç içe konilerin hacim oranı',
    stem: [
      'Şekilde O₁ merkezli büyük koninin içine, tepe noktası O₁ olan ters bir koni yerleştirilmiştir. Küçük koninin O₂ merkezli tabanı büyük koninin tabanına paraleldir ve taban çemberi büyük koninin yanal yüzeyi üzerindedir.',
    ],
    given: ['r₂ / r₁ = 1/2'],
    ask: 'Buna göre, büyük koninin hacminin küçük koninin hacmine oranı kaçtır?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '8' },
      { key: 'D', text: '12' },
      { key: 'E', text: '16' },
    ],
    answer: 'C',
    hint: 'Küçük koninin tabanı büyük koniden alınmış bir kesittir; kesitin tepeye uzaklığını benzerlikten bul.',
    solution: [
      {
        title: 'Kesitin yeri',
        detail:
          'Büyük koninin yüksekliği H olsun. Kesitin yarıçapı r₁/2 olduğundan benzerlikten kesit tepeden H/2 uzaklıktadır; böylece |O₁O₂| = H/2 dir.',
      },
      {
        title: 'Büyük koni',
        detail: 'V₁ = (1/3) · π · r₁² · H.',
      },
      {
        title: 'Küçük koni',
        detail: 'V₂ = (1/3) · π · (r₁/2)² · (H/2) = (1/3) · π · r₁² · H / 8.',
      },
      {
        title: 'Sonuç',
        detail: 'V₁ / V₂ = 8 dir.',
      },
    ],
    figure: {
      viewBox: '0 6 400 336',
      caption: 'Şekil 30',
      label:
        'Tepe noktası yukarıda, taban merkezi O₁ olan büyük dik koni; içinde tepe noktası O₁, taban merkezi O₂ olan ters koni taralı. Küçük koninin taban çemberi büyük koninin yanal yüzeyinde; yarıçaplar r₁ ve r₂.',
      svg: `
          <path class="shade" d="M125,155 A75,22.5 0 0 1 275,155 L200,290 Z"/>
          <path class="shade" d="M125,155 A75,22.5 0 0 0 275,155 L200,290 Z"/>
          <path class="hid" d="M50,290 A150,45 0 0 1 350,290 M125,155 A75,22.5 0 0 1 275,155"/>
          <path class="ln" d="M50,290 A150,45 0 0 0 350,290 M200,20 L50,290 M200,20 L350,290"/>
          <path class="ln" d="M125,155 A75,22.5 0 0 0 275,155 M125,155 L200,290 L275,155 M200,290 L350,290 M200,155 L275,155"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="155" r="3.2"/>
          <text x="194" y="152" text-anchor="end">O₂</text>
          <text x="194" y="306" text-anchor="end">O₁</text>
          <text class="val" x="236" y="148" text-anchor="middle">r₂</text>
          <text class="val" x="275" y="284" text-anchor="middle">r₁</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 48
  // Right-angled corner at P in cabinet oblique at 50 px per cm: [PA] up,
  // [PC] right at full scale, [PB] toward the viewer at half scale along 45°.
  // Each lateral edge is 3√2 ≈ 4.24 cm. P lies behind face ABC.
  {
    id: 'pyramids-48',
    topic: 'Yan ayrıtları dik düzgün üçgen piramit',
    stem: [],
    given: ['(P, ABC) düzgün piramit', 'ABC eşkenar üçgen', '|AB| = 6 cm'],
    ask: 'm(APB) = m(BPC) = m(APC) = 90° olduğuna göre, piramidin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '6√2' },
      { key: 'B', text: '9√2' },
      { key: 'C', text: '12√2' },
      { key: 'D', text: '18√2' },
      { key: 'E', text: '27√2' },
    ],
    answer: 'B',
    hint: 'Yan ayrıtlar eşit ve birbirine dik; APB ikizkenar dik üçgeninden bir yan ayrıtı bul.',
    solution: [
      {
        title: 'Yan ayrıt',
        detail: 'APB ikizkenar dik üçgeninde |PA| √2 = 6 ⇒ |PA| = |PB| = |PC| = 3√2 cm.',
      },
      {
        title: 'Taban ve yükseklik',
        detail:
          'BPC yüzünü taban alalım: alanı (3√2)² / 2 = 9 cm². [PA] hem [PB] ye hem [PC] ye dik olduğundan yükseklik |PA| = 3√2 cm dir.',
      },
      {
        title: 'Sonuç',
        detail: 'V = (1/3) · 9 · 3√2 = 9√2 cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 8 400 340',
      caption: 'Şekil 31',
      label:
        'P köşesindeki [PA], [PB] ve [PC] ayrıtları birbirine dik olan düzgün üçgen piramit; ABC eşkenar üçgen, |AB| = 6 cm.',
      svg: `
          <path class="hid" d="M150,250 L150,38 M150,250 L362,250 M150,250 L75,325"/>
          <path class="hid" d="M150,238 L162,238 L162,250 M162,250 L153.5,258.5 L141.5,258.5 M150,238 L141.5,246.5 L141.5,258.5"/>
          <path class="ln" d="M150,38 L75,325 L362,250 Z"/>
          <circle class="pt" cx="150" cy="38" r="3.2"/>
          <circle class="pt" cx="75" cy="325" r="3.2"/>
          <circle class="pt" cx="362" cy="250" r="3.2"/>
          <circle class="pt" cx="150" cy="250" r="3.2"/>
          <text x="150" y="28" text-anchor="middle">A</text>
          <text x="67" y="340" text-anchor="end">B</text>
          <text x="370" y="256">C</text>
          <text x="158" y="270">P</text>
          <text class="val" x="104" y="180" text-anchor="end">6</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 49
  // Frustum with r = 3, R = 6, height 4 at 28 px per cm: O2 (200, 138),
  // O1 (200, 250), A (284, 138), B (368, 250). Ellipses at 0.3 aspect.
  {
    id: 'pyramids-49',
    topic: 'Kesik koninin hacmi',
    stem: [
      'Şekildeki kesik koninin üst dairesinin yarıçapı 3 cm, alt dairesinin yarıçapı 6 cm dir.',
    ],
    ask: '|AB| = 5 cm ise, kesik koninin hacmi kaç cm³ tür?',
    choices: [
      { key: 'A', text: '72π' },
      { key: 'B', text: '84π' },
      { key: 'C', text: '96π' },
      { key: 'D', text: '108π' },
      { key: 'E', text: '126π' },
    ],
    answer: 'B',
    hint: 'Yüksekliği bulmak için A dan alt tabana dik indir; yarıçapların farkı dik üçgenin bir kenarı olur.',
    solution: [
      {
        title: 'Yükseklik',
        detail: 'Yarıçap farkı 6 − 3 = 3 cm; h = √(5² − 3²) = 4 cm.',
      },
      {
        title: 'Hacim formülü',
        detail: 'V = (πh/3) · (R² + R·r + r²).',
      },
      {
        title: 'Yerine koy',
        detail: 'V = (4π/3) · (36 + 18 + 9) = (4π/3) · 63.',
      },
      {
        title: 'Sonuç',
        detail: 'V = 84π cm³ tür.',
      },
    ],
    figure: {
      viewBox: '0 98 400 222',
      caption: 'Şekil 32',
      label:
        'Üst tabanının merkezi O₂, alt tabanının merkezi O₁ olan dik kesik koni. A üst, B alt taban çemberi üzerinde; üst yarıçap 3 cm, alt yarıçap 6 cm, |AB| = 5 cm.',
      svg: `
          <path class="hid" d="M32,250 A168,50.4 0 0 1 368,250 M200,138 L200,250"/>
          <path class="ln" d="M32,250 A168,50.4 0 0 0 368,250 M116,138 A84,25.2 0 0 0 284,138 A84,25.2 0 0 0 116,138 M116,138 L32,250 M284,138 L368,250 M200,138 L284,138 M200,250 L368,250"/>
          <circle class="pt" cx="200" cy="138" r="3.2"/>
          <circle class="pt" cx="200" cy="250" r="3.2"/>
          <circle class="pt" cx="284" cy="138" r="3.2"/>
          <circle class="pt" cx="368" cy="250" r="3.2"/>
          <text x="194" y="132" text-anchor="end">O₂</text>
          <text x="194" y="268" text-anchor="end">O₁</text>
          <text x="292" y="134">A</text>
          <text x="376" y="256">B</text>
          <text class="val" x="242" y="132" text-anchor="middle">3</text>
          <text class="val" x="284" y="244" text-anchor="middle">6</text>
          <text class="val" x="332" y="190">5</text>
        `,
    },
  },

  // ---------------------------------------------------------------- 50
  // Cone of height 200 px and radius 70 px, drawn twice. I: apex up at
  // (105, 40), base at y = 240, liquid up to H/3 (y = 173.3, radius 46.7).
  // II: apex down at (295, 240), base at y = 40, liquid cone of height
  // H·∛19/3 = 177.9 px (level y = 62.1, radius 62.3). Ellipses at 0.3 aspect.
  {
    id: 'pyramids-50',
    topic: 'Ters çevrilen koni biçimli kapta sıvı yüksekliği',
    stem: [
      'Koni biçimindeki kapalı bir kabın içinde bir miktar sıvı vardır. Kap, tabanı yerde olacak biçimde I konumundayken sıvının yüksekliği h₁, kabın yüksekliğinin 1/3 ü kadardır.',
    ],
    ask: 'Kap, tabanı yere paralel olacak şekilde ters çevrilip II konumuna getirilince sıvının yüksekliği h₂ oluyor. Buna göre, h₂ / h₁ oranı kaçtır?',
    choices: [
      { key: 'A', text: '∛2' },
      { key: 'B', text: '∛9' },
      { key: 'C', text: '∛19' },
      { key: 'D', text: '∛26' },
      { key: 'E', text: '3' },
    ],
    answer: 'C',
    hint: 'I konumunda sıvının üstündeki boş kısım tepe noktasında küçük bir konidir; önce sıvının hacmini bütün koniye oranla.',
    solution: [
      {
        title: 'Boş kısım',
        detail:
          'Kabın yüksekliği H, hacmi V olsun. I konumunda boş kısım yüksekliği 2H/3 olan benzer bir konidir; hacmi (2/3)³ V = 8V/27.',
      },
      {
        title: 'Sıvının hacmi',
        detail: 'V − 8V/27 = 19V/27.',
      },
      {
        title: 'II konumu',
        detail:
          'Ters çevrilince sıvı tepede benzer bir koni oluşturur: (h₂/H)³ = 19/27 ⇒ h₂ = H · ∛19 / 3.',
      },
      {
        title: 'Sonuç',
        detail: 'h₂ / h₁ = (H · ∛19 / 3) / (H / 3) = ∛19 tür.',
      },
    ],
    figure: {
      viewBox: '0 8 400 300',
      caption: 'Şekil 33',
      label:
        'Aynı koni biçimli kap iki konumda. I konumunda tepe yukarıda, taban yerde ve sıvı tabandan yüksekliğin üçte birine kadar; II konumunda kap ters çevrilmiş, tepe aşağıda ve sıvı tepeden başlayarak h₂ yüksekliğine kadar. Sıvı taralı.',
      svg: `
          <path class="shade" d="M58.3,173.3 L35,240 A70,21 0 0 0 175,240 L151.7,173.3 A46.7,14 0 0 0 58.3,173.3 Z"/>
          <path class="shade" d="M232.7,62.1 A62.3,18.7 0 0 1 357.3,62.1 L295,240 Z"/>
          <path class="shade" d="M232.7,62.1 A62.3,18.7 0 0 0 357.3,62.1 L295,240 Z"/>
          <path class="hid" d="M35,240 A70,21 0 0 1 175,240 M58.3,173.3 A46.7,14 0 0 1 151.7,173.3 M232.7,62.1 A62.3,18.7 0 0 1 357.3,62.1"/>
          <path class="ln" d="M105,40 L35,240 A70,21 0 0 0 175,240 Z M58.3,173.3 A46.7,14 0 0 0 151.7,173.3"/>
          <path class="ln" d="M225,40 A70,21 0 0 0 365,40 A70,21 0 0 0 225,40 M225,40 L295,240 L365,40 M232.7,62.1 A62.3,18.7 0 0 0 357.3,62.1"/>
          <text x="105" y="296" text-anchor="middle">I</text>
          <text x="295" y="296" text-anchor="middle">II</text>
          <text class="val" x="182" y="212">h₁</text>
          <text class="val" x="334" y="160">h₂</text>
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
export const PYRAMIDS_BANK: readonly Question[] = QUESTIONS;

export const UNIT_9_PYRAMIDS: Unit = {
  id: 'pyramids',
  order: 9,
  title: 'Piramitler',
  subtitle: 'Ünite 9',
  description:
    'Kare piramit, üçgen piramit ve koni: hacim, tabana paralel kesit, yan yüz yüksekliği ve benzer cisimlerde hacim oranı.',
  modules: [
    {
      id: 'pyramids-m1',
      order: 1,
      title: 'Piramit ve koninin hacmi',
      summary:
        'Prizma içindeki piramit, tabana paralel kesit, küpten kesilen piramit, koniden boşaltılan su, tüm alandan hacim ve ana doğrudan koninin hacmi.',
      questions: pick(
        'pyramids-1',
        'pyramids-2',
        'pyramids-3',
        'pyramids-4',
        'pyramids-5',
        'pyramids-6',
      ),
    },
    {
      id: 'pyramids-m2',
      order: 2,
      title: 'Dik piramit, alan ve koni açınımı',
      summary:
        'Dik köşeli üçgen piramit, dikdörtgen tabanlı piramidin tüm alanı, eşkenar yüzlü kare piramit, dik izdüşüm, daire diliminden koni ve koniden silindire su.',
      questions: pick(
        'pyramids-7',
        'pyramids-8',
        'pyramids-9',
        'pyramids-10',
        'pyramids-11',
        'pyramids-12',
      ),
    },
    {
      id: 'pyramids-m3',
      order: 3,
      title: 'Yükseklik, yanal yükseklik ve koni',
      summary:
        'Taban çevresinden koninin hacmi, dik köşeli üçgen piramit, yan yüz yüksekliğinden hacim, hacimden yanal yükseklik, alan oranından koninin yüksekliği ve 30° lik açıdan koninin hacmi.',
      questions: pick(
        'pyramids-13',
        'pyramids-14',
        'pyramids-15',
        'pyramids-16',
        'pyramids-17',
        'pyramids-18',
      ),
    },
    {
      id: 'pyramids-m4',
      order: 4,
      title: 'Koni, silindir ve kesilen piramit',
      summary:
        'Koniden eş tabanlı silindire su, köşegenden kare piramidin hacmi, koni kapla silindir doldurma, silindir üstündeki koni, eğik koni ve prizmadan kesilen piramit.',
      questions: pick(
        'pyramids-19',
        'pyramids-20',
        'pyramids-21',
        'pyramids-22',
        'pyramids-23',
        'pyramids-24',
      ),
    },
    {
      id: 'pyramids-m5',
      order: 5,
      title: 'Yanal alan, kesik piramit ve iç içe cisimler',
      summary:
        'Dikdörtgen tabanlı piramidin yanal alanı, kare piramidin tüm alanı, daire diliminden koni, koni içindeki silindir, küpün köşelerinden kesilen piramitler, kesik piramit ve düzgün altıgen piramit.',
      questions: pick(
        'pyramids-25',
        'pyramids-26',
        'pyramids-27',
        'pyramids-28',
        'pyramids-29',
        'pyramids-30',
        'pyramids-31',
      ),
    },
    {
      id: 'pyramids-m6',
      order: 6,
      title: 'Yan yüz, iki sıvı ve en kısa yol',
      summary:
        'Hacimden yan yüzün alanı ve yüksekliği, koni biçimli kapta iki sıvı, düzgün sekizyüzlünün hacmi, koni yüzeyinde en kısa yol ve kesik piramitten bütün piramit.',
      questions: pick(
        'pyramids-32',
        'pyramids-33',
        'pyramids-34',
        'pyramids-35',
        'pyramids-36',
        'pyramids-37',
      ),
    },
    {
      id: 'pyramids-m7',
      order: 7,
      title: 'Hacim eşitliği, dörtyüzlü ve kalan hacim',
      summary:
        'Hacimleri eşit koni ve silindir, düzgün dörtyüzlünün yüz yüksekliği, kesilen koninin hacim oranı, yan ayrıttan piramidin hacmi, prizmadan kalan hacim, yanal alandan hacim ve ana doğrudan koninin hacmi.',
      questions: pick(
        'pyramids-38',
        'pyramids-39',
        'pyramids-40',
        'pyramids-41',
        'pyramids-42',
        'pyramids-43',
        'pyramids-44',
      ),
    },
    {
      id: 'pyramids-m8',
      order: 8,
      title: 'Koni açınımı, kesik koni ve ters çevrilen kap',
      summary:
        'Daire diliminden koninin hacmi, 60° lik yan yüzden kare piramit, iç içe koniler, yan ayrıtları dik düzgün piramit, kesik koninin hacmi ve ters çevrilen kapta sıvı yüksekliği.',
      questions: pick(
        'pyramids-45',
        'pyramids-46',
        'pyramids-47',
        'pyramids-48',
        'pyramids-49',
        'pyramids-50',
      ),
    },
  ],
};
