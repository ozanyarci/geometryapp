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
  ],
};
