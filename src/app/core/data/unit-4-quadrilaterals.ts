import { Question, Unit } from '../models';

/**
 * Unit 4 — Quadrilaterals.
 * Original questions written in the style of the "Genel Dörtgenler — Çözümlü
 * Test" source: interior angle sums, angle bisectors, quadrilaterals with
 * perpendicular diagonals or two right angles, and areas from the diagonals.
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
    id: 'quadrilaterals-1',
    topic: 'Dörtgende iç açılar toplamı',
    figure: {
      viewBox: '0 0 400 206',
      caption: 'Şekil 1',
      label:
        'ABCD dörtgeninde [DC] kenarı iki yönde K ve L noktalarına, [AB] kenarı B’den F noktasına uzatılmış; m(ADK) = 55°, m(BCL) = 65°, m(CBF) = 110° ve A köşesindeki iç açı α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M88.5,34 L313.1,53.7"/>
          <path class="ln" d="M40,175.9 L360,175.9"/>
          <path class="ln" d="M40,175.9 L154.3,39.8"/>
          <path class="ln" d="M294,175.9 L247.4,47.9"/>
          <path class="arc" d="M70,175.9 A30,30 0 0 0 59.3,152.9"/>
          <text class="val" x="80.8" y="161.9" text-anchor="middle">α</text>
          <path class="arc" d="M128.4,37.5 A26,26 0 0 0 137.6,59.7"/>
          <text class="val" x="113.6" y="61.6" text-anchor="middle">55°</text>
          <path class="arc" d="M273.3,50.2 A26,26 0 0 1 256.3,72.3"/>
          <text class="val" x="282.3" y="79.7" text-anchor="middle">65°</text>
          <path class="arc" d="M318,175.9 A24,24 0 0 0 285.8,153.3"/>
          <text class="val" x="319.2" y="144.9" text-anchor="middle">110°</text>
          <circle class="pt" cx="40" cy="175.9" r="3.2"/>
          <circle class="pt" cx="294" cy="175.9" r="3.2"/>
          <circle class="pt" cx="247.4" cy="47.9" r="3.2"/>
          <circle class="pt" cx="154.3" cy="39.8" r="3.2"/>
          <text x="26.3" y="189.6" text-anchor="end">A</text>
          <text x="289.4" y="196.7" text-anchor="middle">B</text>
          <text x="363.1" y="197.1" text-anchor="middle">F</text>
          <text x="250.5" y="37.7" text-anchor="middle">C</text>
          <text x="151.2" y="29.6" text-anchor="middle">D</text>
          <text x="86.9" y="23.6" text-anchor="middle">K</text>
          <text x="314.7" y="43.3" text-anchor="middle">L</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'K, D, C, L doğrusal',
      'A, B, F doğrusal',
      'm(ADK) = 55°',
      'm(BCL) = 65°',
      'm(CBF) = 110°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DAB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'Verilen her dış açının bütünlerini alarak dörtgenin D, C ve B köşelerindeki iç açıları bul.',
    solution: [
      {
        title: 'D köşesindeki iç açı',
        detail: 'K, D, C doğrusal olduğundan m(ADC) = 180 − 55 = 125° olur.',
      },
      {
        title: 'C köşesindeki iç açı',
        detail: 'D, C, L doğrusal olduğundan m(BCD) = 180 − 65 = 115° olur.',
      },
      {
        title: 'B köşesindeki iç açı',
        detail: 'A, B, F doğrusal olduğundan m(ABC) = 180 − 110 = 70° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Dörtgenin iç açıları toplamı 360° olduğundan α = 360 − (125 + 115 + 70) = 360 − 310 = 50° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'quadrilaterals-2',
    topic: 'Dörtgende açıortaylar arasındaki açı',
    figure: {
      viewBox: '0 0 400 390',
      caption: 'Şekil 2',
      label:
        'ABCD dörtgeninde B köşesinden çizilen [BE ve D köşesinden çizilen [DK açıortayları T noktasında kesişiyor; m(BCD) = 100°, m(BTD) = 158° ve A köşesindeki açı x ile gösterilmiş.',
      svg: `
          <path class="ln" d="M184.6,30 L77.7,259.2 L178.4,360 L322.3,259.2 Z"/>
          <path class="ln" d="M77.7,259.2 L264.4,226.3"/>
          <path class="ln" d="M322.3,259.2 L158.8,224.5"/>
          <path class="arc" d="M171.9,57.2 A30,30 0 0 0 200.0,55.7"/>
          <text class="val" x="187" y="80.9" text-anchor="middle">x</text>
          <path class="arc" d="M161.4,343.0 A24,24 0 0 1 198.1,346.2"/>
          <text class="val" x="182.1" y="323.2" text-anchor="middle">100°</text>
          <path class="arc" d="M195.6,238.5 A16,16 0 0 0 227.1,239.0"/>
          <text class="val" x="210.9" y="270.7" text-anchor="middle">158°</text>
          <circle class="pt" cx="184.6" cy="30" r="3.2"/>
          <circle class="pt" cx="77.7" cy="259.2" r="3.2"/>
          <circle class="pt" cx="178.4" cy="360" r="3.2"/>
          <circle class="pt" cx="322.3" cy="259.2" r="3.2"/>
          <circle class="pt" cx="211.4" cy="235.7" r="3.2"/>
          <text x="184.6" y="19.5" text-anchor="middle">A</text>
          <text x="61.7" y="264.7" text-anchor="end">B</text>
          <text x="178.4" y="381.5" text-anchor="middle">C</text>
          <text x="338.3" y="264.7">D</text>
          <text x="211.4" y="225.2" text-anchor="middle">T</text>
          <text x="267.1" y="218.1" text-anchor="middle">E</text>
          <text x="156.1" y="216.3" text-anchor="middle">K</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[BE ve [DK açıortay', 'm(BCD) = 100°', 'm(BTD) = 158°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '52' },
      { key: 'C', text: '56' },
      { key: 'D', text: '60' },
      { key: 'E', text: '64' },
    ],
    answer: 'C',
    hint: 'B ve D köşelerindeki açıların yarılarının toplamını x cinsinden yaz, sonra BCDT dörtgenine bak.',
    solution: [
      {
        title: 'Açıların yarıları',
        detail:
          'm(ABC) = 2b ve m(CDA) = 2d olsun. Dörtgende x + 2b + 100 + 2d = 360 olduğundan b + d = (260 − x) / 2 olur.',
      },
      {
        title: 'BCDT dörtgeni',
        detail:
          'T noktasının C tarafında kalan BCDT dörtgeninin açıları m(TBC) = b, m(BCD) = 100°, m(CDT) = d ve m(DTB) = 158° olur.',
      },
      {
        title: 'Denklemi kur',
        detail: 'b + 100 + d + 158 = 360 olduğundan b + d = 102 bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '(260 − x) / 2 = 102 ⇒ 260 − x = 204 ⇒ x = 56° bulunur. (Kısa yol: 180 − 158 = (100 − x) / 2.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'quadrilaterals-3',
    topic: 'Köşegenleri dik dörtgen',
    figure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 3',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında dik kesişiyor; |AD| = 5, |DC| = 6, |AB| = 8 ve |BC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M108.4,128.1 L181.9,310 L291.6,128.1 L181.9,30 Z"/>
          <path class="ln" d="M108.4,128.1 L291.6,128.1"/>
          <path class="ln" d="M181.9,310 L181.9,30"/>
          <path class="ln" d="M191.9,128.1 L191.9,118.1 L181.9,118.1"/>
          <circle class="pt" cx="108.4" cy="128.1" r="3.2"/>
          <circle class="pt" cx="181.9" cy="310" r="3.2"/>
          <circle class="pt" cx="291.6" cy="128.1" r="3.2"/>
          <circle class="pt" cx="181.9" cy="30" r="3.2"/>
          <circle class="pt" cx="181.9" cy="128.1" r="3.2"/>
          <text x="92.4" y="133.6" text-anchor="end">A</text>
          <text x="181.9" y="331.5" text-anchor="middle">B</text>
          <text x="307.6" y="133.6">C</text>
          <text x="181.9" y="19.5" text-anchor="middle">D</text>
          <text x="171.3" y="144.2" text-anchor="end">E</text>
          <text class="val" x="134.8" y="76.3" text-anchor="middle">5</text>
          <text class="val" x="245.5" y="74.4" text-anchor="middle">6</text>
          <text class="val" x="133.1" y="229" text-anchor="middle">8</text>
          <text class="val" x="247.9" y="230.8" text-anchor="middle">x</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[AC] ⊥ [BD]', '|AD| = 5 cm', '|AB| = 8 cm', '|DC| = 6 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√69' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '5√3' },
      { key: 'D', text: '√78' },
      { key: 'E', text: '4√5' },
    ],
    answer: 'C',
    hint: 'E etrafındaki dört dik üçgende Pisagor bağıntısını yaz; karşılıklı kenarların karelerinin toplamlarını karşılaştır.',
    solution: [
      {
        title: 'Parçalara ad ver',
        detail:
          '|EA| = a, |EB| = b, |EC| = c, |ED| = d olsun. Köşegenler dik olduğundan E etrafında dört dik üçgen oluşur.',
      },
      {
        title: 'Pisagor bağıntıları',
        detail: '|AD|² = a² + d², |BC|² = b² + c², |AB|² = a² + b², |DC|² = c² + d² olur.',
      },
      {
        title: 'Karşılıklı kenarlar',
        detail: 'Buradan |AB|² + |DC|² = |AD|² + |BC|² = a² + b² + c² + d² bulunur.',
      },
      {
        title: 'Sonuç',
        detail: '8² + 6² = 5² + x² ⇒ 64 + 36 = 25 + x² ⇒ x² = 75 ⇒ x = 5√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'quadrilaterals-4',
    topic: 'Köşegenlerle dörtgenin alanı',
    figure: {
      viewBox: '0 0 400 315',
      caption: 'Şekil 4',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında kesişiyor; m(CAD) = 25° ve m(ADB) = 20° olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M70.9,30 L50,131.6 L325.5,284.6 L350,131.6 Z"/>
          <path class="ln" d="M70.9,30 L325.5,284.6"/>
          <path class="ln" d="M50,131.6 L350,131.6"/>
          <path class="arc" d="M103.4,62.5 A46,46 0 0 0 114.1,45.7"/>
          <text class="val" x="124.9" y="69.4" text-anchor="middle">25°</text>
          <path class="arc" d="M301.1,113.8 A52,52 0 0 0 298.0,131.6"/>
          <text class="val" x="279.1" y="124.1" text-anchor="middle">20°</text>
          <circle class="pt" cx="70.9" cy="30" r="3.2"/>
          <circle class="pt" cx="50" cy="131.6" r="3.2"/>
          <circle class="pt" cx="325.5" cy="284.6" r="3.2"/>
          <circle class="pt" cx="350" cy="131.6" r="3.2"/>
          <circle class="pt" cx="172.5" cy="131.6" r="3.2"/>
          <text x="70.9" y="19.5" text-anchor="middle">A</text>
          <text x="34" y="137.1" text-anchor="end">B</text>
          <text x="325.5" y="306.1" text-anchor="middle">C</text>
          <text x="366" y="137.1">D</text>
          <text x="163.8" y="151.7" text-anchor="end">E</text>
        `,
    },
    given: ['ABCD bir dörtgen', '|BD| = 10 cm', '|AC| = 12 cm', 'm(CAD) = 25°', 'm(ADB) = 20°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '30√2' },
      { key: 'C', text: '30√3' },
      { key: 'D', text: '60' },
      { key: 'E', text: '60√2' },
    ],
    answer: 'B',
    hint: 'AED üçgeninde köşegenler arasındaki açıyı bul; dörtgenin alanı ½·|AC|·|BD|·sin(köşegenler arası açı)’dır.',
    solution: [
      {
        title: 'Köşegenler arasındaki açı',
        detail: 'AED üçgeninde m(AED) = 180 − (25 + 20) = 135° olur.',
      },
      {
        title: 'Alan formülü',
        detail:
          'Köşegenleri e ve f olan dörtgenin alanı ½·e·f·sin θ’dır; sin 135° = sin 45° = √2/2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABCD) = ½ · 12 · 10 · √2/2 = 30√2 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'quadrilaterals-5',
    topic: 'Karşılıklı iki açısı dik dörtgen',
    figure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 5',
      label:
        'ABCD dörtgeninde A ve C köşelerindeki açılar dik; [BD] köşegeni çizilmiş, |AD| = 4, |AB| = 8, |DC| = 7 ve |BC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M86,66.3 L158.5,310 L314,225.6 L207.9,30 Z"/>
          <path class="ln" d="M158.5,310 L207.9,30"/>
          <path class="ln" d="M89.1,76.8 L99.7,73.7 L96.5,63.2"/>
          <path class="ln" d="M304.3,230.8 L299.1,221.2 L308.8,215.9"/>
          <circle class="pt" cx="86" cy="66.3" r="3.2"/>
          <circle class="pt" cx="158.5" cy="310" r="3.2"/>
          <circle class="pt" cx="314" cy="225.6" r="3.2"/>
          <circle class="pt" cx="207.9" cy="30" r="3.2"/>
          <text x="70.3" y="68.7" text-anchor="end">A</text>
          <text x="158.5" y="331.5" text-anchor="middle">B</text>
          <text x="329.7" y="234.2">C</text>
          <text x="207.9" y="19.5" text-anchor="middle">D</text>
          <text class="val" x="150.6" y="65.6" text-anchor="middle">4</text>
          <text class="val" x="249.5" y="139" text-anchor="middle">7</text>
          <text class="val" x="134.7" y="189.4" text-anchor="middle">8</text>
          <text class="val" x="230.1" y="261.4" text-anchor="middle">x</text>
        `,
    },
    given: ['ABCD bir dörtgen', 'm(Â) = m(Ĉ) = 90°', '|AD| = 4 cm', '|AB| = 8 cm', '|DC| = 7 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√29' },
      { key: 'B', text: '√31' },
      { key: 'C', text: '√33' },
      { key: 'D', text: '√35' },
      { key: 'E', text: '√37' },
    ],
    answer: 'B',
    hint: '[BD] köşegeni iki dik üçgenin ortak hipotenüsüdür.',
    solution: [
      {
        title: 'ABD üçgeni',
        detail: 'A açısı dik olduğundan |BD|² = |AD|² + |AB|² = 16 + 64 = 80 olur.',
      },
      {
        title: 'CBD üçgeni',
        detail: 'C açısı dik olduğundan |BD|² = |DC|² + |BC|² = 49 + x² olur.',
      },
      {
        title: 'Sonuç',
        detail: '49 + x² = 80 ⇒ x² = 31 ⇒ x = √31 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'quadrilaterals-6',
    topic: 'Köşegen parçalarıyla alan',
    figure: {
      viewBox: '0 0 400 221',
      caption: 'Şekil 6',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında kesişiyor; |AE| = 4, |EC| = 6, |ED| = 3, |BE| = 9 ve D köşesinde m(BDC) = 90° olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M137.8,30.7 L50,191.2 L350,129.7 L280.2,30 Z"/>
          <path class="ln" d="M137.8,30.7 L350,129.7"/>
          <path class="ln" d="M50,191.2 L280.2,30"/>
          <path class="ln" d="M271.2,36.3 L277.5,45.3 L286.5,39.0"/>
          <circle class="pt" cx="137.8" cy="30.7" r="3.2"/>
          <circle class="pt" cx="50" cy="191.2" r="3.2"/>
          <circle class="pt" cx="350" cy="129.7" r="3.2"/>
          <circle class="pt" cx="280.2" cy="30" r="3.2"/>
          <circle class="pt" cx="222.7" cy="70.3" r="3.2"/>
          <text x="130.6" y="21.9" text-anchor="end">A</text>
          <text x="35.1" y="202.6" text-anchor="end">B</text>
          <text x="357.2" y="149.5">C</text>
          <text x="284.8" y="20.2" text-anchor="middle">D</text>
          <text x="222.7" y="59.8" text-anchor="middle">E</text>
          <text class="val" x="174.7" y="67.3" text-anchor="middle">4</text>
          <text class="val" x="280.8" y="116.8" text-anchor="middle">6</text>
          <text class="val" x="258.9" y="65.7" text-anchor="middle">3</text>
          <text class="val" x="143.8" y="146.3" text-anchor="middle">9</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '|AE| = 4 cm',
      '|EC| = 6 cm',
      '|ED| = 3 cm',
      '|BE| = 9 cm',
      'm(BDC) = 90°',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde [AC] ve [BD] köşegen olduğuna göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '24√3' },
      { key: 'B', text: '30' },
      { key: 'C', text: '30√3' },
      { key: 'D', text: '36√3' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'EDC dik üçgeninde |ED| ile |EC| arasındaki oran, köşegenler arasındaki açıyı verir.',
    solution: [
      {
        title: 'Köşegenler arasındaki açı',
        detail:
          'EDC üçgeninde D açısı dik ve |ED| = 3, |EC| = 6 olduğundan cos(DEC) = 3/6 = 1/2, yani m(DEC) = 60° olur.',
      },
      {
        title: 'Köşegen uzunlukları',
        detail: '|AC| = 4 + 6 = 10 cm ve |BD| = 9 + 3 = 12 cm olur.',
      },
      {
        title: 'Alan formülü',
        detail: 'A(ABCD) = ½·|AC|·|BD|·sin 60° = ½ · 10 · 12 · √3/2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABCD) = 30√3 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 7
  {
    id: 'quadrilaterals-7',
    topic: 'Dik üçgende öklit bağıntıları',
    figure: {
      viewBox: '0 0 400 259',
      caption: 'Şekil 7',
      label:
        'ABCD dörtgeninde [BD] köşegeni çizilmiş; E noktası [BC] üzerinde, [DE] ⊥ [BC] ve [AE] ⊥ [BD]; |AB| = 7, |DC| = 6 ve |AD| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M114.6,34.0 L50.0,225.5 L350.0,225.5 L250.0,84.0 Z"/>
          <path class="ln" d="M50.0,225.5 L250.0,84.0"/>
          <path class="ln" d="M114.6,34.0 L250.0,225.5"/>
          <path class="ln" d="M250.0,84.0 L250.0,225.5"/>
          <path class="ln" d="M250.0,215.5 L260.0,215.5 L260.0,225.5"/>
          <path class="ln" d="M191.5,125.4 L197.3,133.6 L189.1,139.3"/>
          <circle class="pt" cx="114.6" cy="34.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="225.5" r="3.2"/>
          <circle class="pt" cx="350.0" cy="225.5" r="3.2"/>
          <circle class="pt" cx="250.0" cy="84.0" r="3.2"/>
          <circle class="pt" cx="250.0" cy="225.5" r="3.2"/>
          <text x="104.8" y="25.6" text-anchor="end">A</text>
          <text x="34.6" y="238.3" text-anchor="end">B</text>
          <text x="365.4" y="238.2">C</text>
          <text x="263.9" y="79.7">D</text>
          <text x="259.8" y="244.8">E</text>
          <text class="val" x="70.0" y="131.1" text-anchor="middle">7</text>
          <text class="val" x="310.6" y="152.7" text-anchor="middle">6</text>
          <text class="val" x="186.8" y="52.3" text-anchor="middle">x</text>
Q8 A 76.0 B 60.00000000000001 C 93.99999999999999 D 130.0 AFC 54.99999999999998 BCF 43.00000000000001 FCE 43.0
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AE] ⊥ [BD]',
      '[DE] ⊥ [BC]',
      '[AE] // [DC]',
      '|DC| = 6 cm',
      '|AB| = 7 cm',
      '|BE| = 2·|EC|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√5' },
      { key: 'B', text: '5' },
      { key: 'C', text: '3√3' },
      { key: 'D', text: '4√2' },
      { key: 'E', text: '6' },
    ],
    answer: 'B',
    hint: '[AE] hem [BD]’ye dik hem [DC]’ye paralel; bu, BDC üçgeninde D açısı hakkında ne söyler?',
    solution: [
      {
        title: 'D açısı dik',
        detail:
          '[AE] // [DC] ve [AE] ⊥ [BD] olduğundan [DC] ⊥ [BD], yani m(BDC) = 90° olur. [DE] bu dik üçgenin hipotenüse ait yüksekliğidir.',
      },
      {
        title: 'Öklit bağıntısı',
        detail:
          '|EC| = a, |BE| = 2a olsun. |DC|² = |EC|·|BC| ⇒ 36 = a·3a ⇒ a² = 12 olur. Buradan |BD|² = |BE|·|BC| = 2a·3a = 72, |BD| = 6√2 cm bulunur.',
      },
      {
        title: 'Köşegeni böl',
        detail:
          '[AE] ile [BD]’nin kesim noktası H olsun. BDC üçgeninde [EH] // [CD] olduğundan |BH| / |BD| = |BE| / |BC| = 2/3; |BH| = 4√2, |HD| = 2√2 cm olur.',
      },
      {
        title: 'ABH ve ADH dik üçgenleri',
        detail: '|AH|² = |AB|² − |BH|² = 49 − 32 = 17 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = |AH|² + |HD|² = 17 + 8 = 25 ⇒ x = 5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'quadrilaterals-8',
    topic: 'İç ve dış açıortay arasındaki açı',
    figure: {
      viewBox: '0 0 400 358',
      caption: 'Şekil 8',
      label:
        'ABCD dörtgeninde [DC] kenarı C’den E noktasına uzatılmış; A köşesinin açıortayı [BC] kenarını K noktasında keserek F noktasına ulaşıyor, [CF] ise BCE açısının açıortayı; m(ADC) = 130°, m(AFC) = 55° ve B köşesindeki açı α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M51.0,324.0 L349.0,324.0 L205.7,75.8 L100.0,127.4 Z"/>
          <path class="ln" d="M205.7,75.8 L291.4,34.0"/>
          <path class="ln" d="M51.0,324.0 L322.8,111.6"/>
          <path class="ln" d="M205.7,75.8 L322.8,111.6"/>
          <path class="arc" d="M94.7,148.7 A22,22 0 0 0 119.8,117.7"/>
          <text class="val" x="131.1" y="158.0" text-anchor="middle">130°</text>
          <path class="arc" d="M305.5,125.2 A22,22 0 0 1 301.8,105.2"/>
          <text class="val" x="279.6" y="125.1" text-anchor="middle">55°</text>
          <path class="arc" d="M336.0,301.5 A26,26 0 0 0 323.0,324.0"/>
          <text class="val" x="314.4" y="309.5" text-anchor="middle">α</text>
          <circle class="pt" cx="51.0" cy="324.0" r="3.2"/>
          <circle class="pt" cx="349.0" cy="324.0" r="3.2"/>
          <circle class="pt" cx="205.7" cy="75.8" r="3.2"/>
          <circle class="pt" cx="100.0" cy="127.4" r="3.2"/>
          <circle class="pt" cx="291.4" cy="34.0" r="3.2"/>
          <circle class="pt" cx="322.8" cy="111.6" r="3.2"/>
          <circle class="pt" cx="256.4" cy="163.5" r="3.2"/>
          <text x="38.4" y="340.9" text-anchor="end">A</text>
          <text x="359.5" y="342.9">B</text>
          <text x="202.1" y="64.7" text-anchor="middle">C</text>
          <text x="83.8" y="127.9" text-anchor="end">D</text>
          <text x="306.7" y="32.0">E</text>
          <text x="336.2" y="106.6">F</text>
          <text x="244.3" y="181.1">K</text>
Q9 scaled AED 30.000000000000004 BEC 14.999999999999996 ABE/CED 5.000000000000001 CED 9.486832980505136 3√10 9.486832980505138
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AF] ∩ [BC] = {K}',
      '[AF] ve [CF] açıortay',
      'm(ADC) = 130°',
      'm(AFC) = 55°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'D',
    hint: 'A’daki açının yarısına a, C’deki iç açıya c de; ADCF dörtgeninin açılarını a ve c ile yaz.',
    solution: [
      {
        title: 'Açılara ad ver',
        detail:
          'm(DAB) = 2a ve m(BCD) = c olsun. Dış açı m(BCE) = 180 − c olduğundan açıortay m(BCF) = 90 − c/2 olur.',
      },
      {
        title: 'ADCF dörtgeni',
        detail:
          'Açıları m(FAD) = a, m(ADC) = 130°, m(DCF) = c + 90 − c/2 = 90 + c/2 ve m(CFA) = 55° olur.',
      },
      {
        title: 'Denklemi kur',
        detail: 'a + 130 + 90 + c/2 + 55 = 360 ⇒ a + c/2 = 85 ⇒ 2a + c = 170 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'ABCD dörtgeninde 2a + α + c + 130 = 360 ⇒ 170 + α + 130 = 360 ⇒ α = 60° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'quadrilaterals-9',
    topic: 'Köşegenlerin ayırdığı üçgenlerin alanları',
    figure: {
      viewBox: '0 0 400 358',
      caption: 'Şekil 9',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında kesişiyor; AED üçgeninin içine 30, BEC üçgeninin içine 15 yazılmış.',
      svg: `
          <path class="ln" d="M225.2,34.0 L88.0,278.5 L225.2,324.0 L312.0,239.0 Z"/>
          <path class="ln" d="M225.2,34.0 L225.2,324.0"/>
          <path class="ln" d="M88.0,278.5 L312.0,239.0"/>
          <circle class="pt" cx="225.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="88.0" cy="278.5" r="3.2"/>
          <circle class="pt" cx="225.2" cy="324.0" r="3.2"/>
          <circle class="pt" cx="312.0" cy="239.0" r="3.2"/>
          <circle class="pt" cx="225.2" cy="254.3" r="3.2"/>
          <text x="226.1" y="22.5" text-anchor="middle">A</text>
          <text x="72.3" y="290.5" text-anchor="end">B</text>
          <text x="227.0" y="346.4" text-anchor="middle">C</text>
          <text x="328.9" y="246.8">D</text>
          <text x="233.8" y="272.1">E</text>
          <text class="val" x="254.1" y="181.3" text-anchor="middle">30</text>
          <text class="val" x="179.5" y="291.1" text-anchor="middle">15</text>
Q10 B 90.00000000000001 D 90.00000000000001 A+C 180.0 ratio 0.8333333333333334
        `,
    },
    given: ['ABCD bir dörtgen', 'A(AED) = 30 cm²', 'A(BEC) = 15 cm²', 'A(ABE) = 5·A(CED)'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ECD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '3√5' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '3√10' },
      { key: 'D', text: '4√6' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'C',
    hint: 'Köşegenlerle oluşan dört üçgende karşılıklı iki üçgenin alanları çarpımı, diğer ikisinin alanları çarpımına eşittir.',
    solution: [
      {
        title: 'Karşılıklı üçgenler kuralı',
        detail:
          'Dört üçgenin alanları ½·|EA|·|EB|·sin θ biçimindedir; bu yüzden A(ABE)·A(CED) = A(AED)·A(BEC) olur.',
      },
      {
        title: 'Bilinmeyene ad ver',
        detail: 'A(CED) = S olsun; o hâlde A(ABE) = 5S olur.',
      },
      {
        title: 'Denklemi kur',
        detail: '5S · S = 30 · 15 ⇒ 5S² = 450 ⇒ S² = 90 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'S = √90 = 3√10 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  {
    id: 'quadrilaterals-10',
    topic: 'Karşılıklı açıları bütünler dörtgende alan oranı',
    figure: {
      viewBox: '0 0 400 357',
      caption: 'Şekil 10',
      label:
        'ABCD dörtgeninde B ve D köşelerindeki açılar dik; E noktası [AB], F noktası [AD], K noktası [BC], L noktası [DC] üzerinde; AEF ve CKL üçgenleri taralı, |AE| = 5, |AF| = 6, |CK| = 4 ve |CL| = 9 olarak işaretlenmiş.',
      svg: `
          <path class="shade" d="M50.0,181.7 L137.8,243.2 L132.6,83.2 Z"/>
          <path class="shade" d="M350.0,181.7 L300.8,251.9 L202.3,57.8 Z"/>
          <path class="ln" d="M50.0,181.7 L251.3,322.7 L350.0,181.7 L174.0,34.0 Z"/>
          <path class="ln" d="M137.8,243.2 L132.6,83.2"/>
          <path class="ln" d="M300.8,251.9 L202.3,57.8"/>
          <path class="ln" d="M243.1,316.9 L248.8,308.7 L257.0,314.5"/>
          <path class="ln" d="M167.5,41.7 L175.2,48.1 L181.6,40.4"/>
          <circle class="pt" cx="50.0" cy="181.7" r="3.2"/>
          <circle class="pt" cx="251.3" cy="322.7" r="3.2"/>
          <circle class="pt" cx="350.0" cy="181.7" r="3.2"/>
          <circle class="pt" cx="174.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="137.8" cy="243.2" r="3.2"/>
          <circle class="pt" cx="132.6" cy="83.2" r="3.2"/>
          <circle class="pt" cx="300.8" cy="251.9" r="3.2"/>
          <circle class="pt" cx="202.3" cy="57.8" r="3.2"/>
          <text x="33.1" y="188.6" text-anchor="end">A</text>
          <text x="256.7" y="344.3" text-anchor="middle">B</text>
          <text x="366.9" y="188.6">C</text>
          <text x="170.8" y="22.8" text-anchor="middle">D</text>
          <text x="126.8" y="261.7" text-anchor="end">E</text>
          <text x="122.2" y="75.3" text-anchor="end">F</text>
          <text x="314.0" y="268.2">K</text>
          <text x="202.6" y="46.3" text-anchor="middle">L</text>
          <text class="val" x="86.4" y="228.6" text-anchor="middle">5</text>
          <text class="val" x="81.4" y="129.6" text-anchor="middle">6</text>
          <text class="val" x="336.1" y="229.8" text-anchor="middle">4</text>
          <text class="val" x="284.5" y="115.3" text-anchor="middle">9</text>
Q11 EF 5.0 FK 7.000000000000001 EFK 119.99999999999999 area 60.62177826491071 35√3 60.6217782649107
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AB] ⊥ [BC]',
      '[AD] ⊥ [DC]',
      '|AE| = 5 cm',
      '|AF| = 6 cm',
      '|CK| = 4 cm',
      '|CL| = 9 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(AEF) / A(CKL) oranı kaçtır?',
    choices: [
      { key: 'A', text: '2/3' },
      { key: 'B', text: '3/4' },
      { key: 'C', text: '4/5' },
      { key: 'D', text: '5/6' },
      { key: 'E', text: '6/5' },
    ],
    answer: 'D',
    hint: 'B ve D açıları dik olduğundan m(Â) + m(Ĉ) kaçtır? Bütünler açıların sinüsleri eşittir.',
    solution: [
      {
        title: 'A ve C açıları bütünler',
        detail: 'Dörtgende m(Â) + m(Ĉ) = 360 − (90 + 90) = 180° olur; bu yüzden sin Â = sin Ĉ.',
      },
      {
        title: 'İki alanı yaz',
        detail: 'A(AEF) = ½·5·6·sin Â = 15·sin Â ve A(CKL) = ½·4·9·sin Ĉ = 18·sin Ĉ olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(AEF) / A(CKL) = 15 / 18 = 5/6 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'quadrilaterals-11',
    topic: 'Kenar orta noktaları ve köşegenler',
    figure: {
      viewBox: '0 0 400 254',
      caption: 'Şekil 11',
      label:
        'ABCD dörtgeninde E, F ve K sırasıyla [AB], [AD] ve [DC] kenarlarının orta noktaları; [EF] ve [FK] çizilmiş, |EF| = 5, |FK| = 7 ve m(EFK) = 120° olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M50.0,108.2 L135.7,34.0 L350.0,108.2 L242.9,219.6 Z"/>
          <path class="ln" d="M92.9,71.1 L146.4,163.9 L296.4,163.9"/>
          <path class="arc" d="M137.4,148.3 A18,18 0 0 1 164.4,163.9"/>
          <text class="val" x="164.4" y="138.2" text-anchor="middle">120°</text>
          <circle class="pt" cx="50.0" cy="108.2" r="3.2"/>
          <circle class="pt" cx="135.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="108.2" r="3.2"/>
          <circle class="pt" cx="242.9" cy="219.6" r="3.2"/>
          <circle class="pt" cx="92.9" cy="71.1" r="3.2"/>
          <circle class="pt" cx="146.4" cy="163.9" r="3.2"/>
          <circle class="pt" cx="296.4" cy="163.9" r="3.2"/>
          <text x="33.1" y="111.8" text-anchor="end">A</text>
          <text x="127.2" y="24.8" text-anchor="end">B</text>
          <text x="366.9" y="112.1">C</text>
          <text x="251.4" y="239.8">D</text>
          <text x="78.0" y="68.3" text-anchor="end">E</text>
          <text x="134.2" y="181.2" text-anchor="end">F</text>
          <text x="312.4" y="175.2">K</text>
          <text class="val" x="108.4" y="129.5" text-anchor="middle">5</text>
          <text class="val" x="221.4" y="182.4" text-anchor="middle">7</text>
Q12 AKL/CMN 0.7142857142857143 KLMN/ABCD 0.5 KLMN if AKL=5 24.0
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'E, F ve K kenarların orta noktaları',
      '|EF| = 5 cm',
      '|FK| = 7 cm',
      'm(EFK) = 120°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '35√2' },
      { key: 'B', text: '35√3' },
      { key: 'C', text: '70' },
      { key: 'D', text: '70√2' },
      { key: 'E', text: '70√3' },
    ],
    answer: 'B',
    hint: 'ABD üçgeninde [EF] orta tabandır; ACD üçgeninde [FK] için de aynısı geçerlidir.',
    solution: [
      {
        title: 'Orta tabanlar',
        detail:
          'ABD üçgeninde [EF] orta taban olduğundan [EF] // [BD] ve |BD| = 2·5 = 10 cm olur. ACD üçgeninde [FK] orta taban olduğundan [FK] // [AC] ve |AC| = 2·7 = 14 cm olur.',
      },
      {
        title: 'Köşegenler arasındaki açı',
        detail:
          '[FE] // [BD] ve [FK] // [AC] olduğundan köşegenler arasındaki açı m(EFK) = 120° (ya da bütünleri 60°) olur; sin 120° = √3/2.',
      },
      {
        title: 'Alan formülü',
        detail: 'A(ABCD) = ½·|AC|·|BD|·sin 120° = ½ · 14 · 10 · √3/2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABCD) = 35√3 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'quadrilaterals-12',
    topic: 'Orta noktalar dörtgeninin alanı',
    figure: {
      viewBox: '0 0 400 295',
      caption: 'Şekil 12',
      label:
        'ABCD dörtgeninde K, L, M ve N sırasıyla [AD], [AB], [BC] ve [CD] kenarlarının orta noktaları; KLMN dörtgeni çizilmiş, AKL ve CMN üçgenleri taralı.',
      svg: `
          <path class="shade" d="M50.0,261.3 L68.0,177.3 L170.0,261.3 Z"/>
          <path class="shade" d="M350.0,34.0 L320.0,147.6 L218.0,63.6 Z"/>
          <path class="ln" d="M50.0,261.3 L290.0,261.3 L350.0,34.0 L86.0,93.3 Z"/>
          <path class="ln" d="M68.0,177.3 L170.0,261.3 L320.0,147.6 L218.0,63.6 Z"/>
          <circle class="pt" cx="50.0" cy="261.3" r="3.2"/>
          <circle class="pt" cx="290.0" cy="261.3" r="3.2"/>
          <circle class="pt" cx="350.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="86.0" cy="93.3" r="3.2"/>
          <circle class="pt" cx="68.0" cy="177.3" r="3.2"/>
          <circle class="pt" cx="170.0" cy="261.3" r="3.2"/>
          <circle class="pt" cx="320.0" cy="147.6" r="3.2"/>
          <circle class="pt" cx="218.0" cy="63.6" r="3.2"/>
          <text x="36.0" y="276.4" text-anchor="end">A</text>
          <text x="301.8" y="279.0">B</text>
          <text x="363.1" y="28.7">C</text>
          <text x="71.7" y="89.6" text-anchor="end">D</text>
          <text x="51.1" y="184.8" text-anchor="end">K</text>
          <text x="166.0" y="283.3" text-anchor="middle">L</text>
          <text x="336.9" y="151.2">M</text>
          <text x="222.0" y="52.6" text-anchor="middle">N</text>
        `,
    },
    given: ['ABCD bir dörtgen', 'K, L, M ve N orta noktalar', 'A(AKL) = 5 cm²', 'A(CMN) = 7 cm²'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(KLMN) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '20' },
      { key: 'C', text: '24' },
      { key: 'D', text: '28' },
      { key: 'E', text: '32' },
    ],
    answer: 'C',
    hint: 'AKL üçgeni ABD üçgeninin, CMN üçgeni de CBD üçgeninin küçültülmüş hâlidir; benzerlik oranı 1/2.',
    solution: [
      {
        title: 'AKL ve ABD üçgenleri',
        detail:
          '[KL] orta taban olduğundan AKL ile ADB üçgenleri 1/2 oranında benzerdir; A(ABD) = 4·5 = 20 cm² olur.',
      },
      {
        title: 'CMN ve CBD üçgenleri',
        detail: 'Aynı şekilde A(CBD) = 4·7 = 28 cm² olur.',
      },
      {
        title: 'Dörtgenin alanı',
        detail: 'A(ABCD) = 20 + 28 = 48 cm² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenar orta noktalarının oluşturduğu dörtgenin alanı ana dörtgenin alanının yarısıdır: A(KLMN) = 48 / 2 = 24 cm² bulunur.',
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
export const QUADRILATERALS_BANK: readonly Question[] = QUESTIONS;

export const UNIT_4_QUADRILATERALS: Unit = {
  id: 'quadrilaterals',
  order: 4,
  title: 'Dörtgenler',
  subtitle: 'Ünite 4',
  description:
    'Dörtgende iç ve dış açılar, açıortaylar, köşegenleri dik ya da karşılıklı iki açısı dik dörtgenler ve köşegenlerle alan.',
  modules: [
    {
      id: 'quadrilaterals-m1',
      order: 1,
      title: 'Genel dörtgende açı, uzunluk ve alan',
      summary:
        'İç açılar toplamı, açıortaylar arasındaki açı, dik köşegenler ve dik açılarla uzunluk, köşegenlerle dörtgenin alanı.',
      questions: pick(
        'quadrilaterals-1',
        'quadrilaterals-2',
        'quadrilaterals-3',
        'quadrilaterals-4',
        'quadrilaterals-5',
        'quadrilaterals-6',
      ),
    },
    {
      id: 'quadrilaterals-m2',
      order: 2,
      title: 'Dörtgende uzunluk, açı ve alan bağıntıları',
      summary:
        'Öklit bağıntısı, iç ve dış açıortaylar, köşegenlerin ayırdığı alanlar, bütünler açılar ve kenar orta noktalarıyla alan.',
      questions: pick(
        'quadrilaterals-7',
        'quadrilaterals-8',
        'quadrilaterals-9',
        'quadrilaterals-10',
        'quadrilaterals-11',
        'quadrilaterals-12',
      ),
    },
  ],
};
