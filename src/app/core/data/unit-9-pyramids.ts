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
  ],
};
