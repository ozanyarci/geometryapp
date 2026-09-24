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
  // ---------------------------------------------------------------- 13
  {
    id: 'quadrilaterals-13',
    topic: 'Dörtgende iki açıortay arasındaki açı',
    figure: {
      viewBox: '0 0 400 251',
      caption: 'Şekil 13',
      label:
        'ABCD dörtgeninde [DA] kenarı A’dan E noktasına uzatılmış; B ve C köşelerinin açıortayları K noktasında kesişiyor; m(BAE) = 40°, m(CDA) = 96° ve m(BKC) = α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M50.0,120.6 L244.5,34.0"/>
          <path class="ln" d="M113.2,92.4 L52.5,216.8 L350.0,216.8 L244.5,34.0"/>
          <path class="ln" d="M52.5,216.8 L195.4,127.5 L350.0,216.8"/>
          <path class="arc" d="M89.4,103.0 A26,26 0 0 0 101.8,115.8"/>
          <text class="val" x="83.7" y="126.4" text-anchor="middle">40°</text>
          <path class="arc" d="M222.5,43.8 A24,24 0 0 0 256.5,54.8"/>
          <text class="val" x="232.4" y="76.6" text-anchor="middle">96°</text>
          <path class="arc" d="M180.1,137.1 A18,18 0 0 0 211.0,136.5"/>
          <text class="val" x="196.0" y="166.0" text-anchor="middle">α</text>
          <path class="arc" d="M82.5,216.8 A30,30 0 0 0 78.0,200.9"/>
          <path class="tick" d="M76.6,209.9 L86.2,207.2"/>
          <path class="arc" d="M78.0,200.9 A30,30 0 0 0 65.7,189.8"/>
          <path class="tick" d="M69.3,198.2 L76.0,190.8"/>
          <path class="arc" d="M320.6,199.8 A34,34 0 0 0 316.0,216.8"/>
          <path class="tick" d="M322.3,208.3 L312.7,205.4"/>
          <path class="tick" d="M321.7,210.3 L312.0,208.1"/>
          <path class="arc" d="M333.0,187.4 A34,34 0 0 0 320.6,199.8"/>
          <path class="tick" d="M330.2,195.6 L323.4,188.2"/>
          <path class="tick" d="M328.8,197.0 L321.4,190.2"/>
          <circle class="pt" cx="113.2" cy="92.4" r="3.2"/>
          <circle class="pt" cx="52.5" cy="216.8" r="3.2"/>
          <circle class="pt" cx="350.0" cy="216.8" r="3.2"/>
          <circle class="pt" cx="244.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="120.6" r="3.2"/>
          <circle class="pt" cx="195.4" cy="127.5" r="3.2"/>
          <text x="110.2" y="78.2" text-anchor="middle">A</text>
          <text x="40.5" y="236.4" text-anchor="end">B</text>
          <text x="358.5" y="239.6">C</text>
          <text x="257.5" y="26.6">D</text>
          <text x="44.2" y="107.3" text-anchor="middle">E</text>
          <text x="195.4" y="115.0" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'D, A, E doğrusal',
      'm(CDA) = 96°',
      'm(BAE) = 40°',
      '[BK] ve [CK] açıortay',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BKC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '106' },
      { key: 'B', text: '110' },
      { key: 'C', text: '114' },
      { key: 'D', text: '118' },
      { key: 'E', text: '122' },
    ],
    answer: 'D',
    hint: 'Önce A köşesindeki iç açıyı bul, sonra B ve C açılarının toplamını dörtgenin iç açılar toplamından hesapla.',
    solution: [
      {
        title: 'A köşesindeki iç açı',
        detail: 'D, A, E doğrusal olduğundan m(DAB) = 180 − 40 = 140° olur.',
      },
      {
        title: 'B ve C açılarının toplamı',
        detail: 'm(ABC) + m(BCD) = 360 − (140 + 96) = 124° olur.',
      },
      {
        title: 'Yarıların toplamı',
        detail: '[BK] ve [CK] açıortay olduğundan m(KBC) + m(KCB) = 124 / 2 = 62° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'BKC üçgeninde α = 180 − 62 = 118° bulunur. (Kısa yol: α = (140 + 96) / 2.)',
      },
    ],
  },
  // ---------------------------------------------------------------- 14
  {
    id: 'quadrilaterals-14',
    topic: 'Köşegenlerin ayırdığı üçgenlerin alanları',
    figure: {
      viewBox: '0 0 400 284',
      caption: 'Şekil 14',
      label: 'ABCD dörtgeninin [AC] ve [BD] köşegenleri E noktasında kesişiyor; BEC üçgeni taralı.',
      svg: `
          <path class="shade" d="M50.0,144.0 L213.6,163.6 L183.4,250.1 Z"/>
          <path class="ln" d="M259.0,34.0 L50.0,144.0 L183.4,250.1 L350.0,180.0 Z"/>
          <path class="ln" d="M259.0,34.0 L183.4,250.1"/>
          <path class="ln" d="M50.0,144.0 L350.0,180.0"/>
          <circle class="pt" cx="259.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="144.0" r="3.2"/>
          <circle class="pt" cx="183.4" cy="250.1" r="3.2"/>
          <circle class="pt" cx="350.0" cy="180.0" r="3.2"/>
          <circle class="pt" cx="213.6" cy="163.6" r="3.2"/>
          <text x="259.0" y="19.5" text-anchor="middle">A</text>
          <text x="33.0" y="149.5" text-anchor="end">B</text>
          <text x="183.4" y="275.6" text-anchor="middle">C</text>
          <text x="367.0" y="185.5">D</text>
          <text x="225.1" y="178.9">E</text>
        `,
    },
    given: ['B, E, D ve A, E, C doğrusal', 'A(AED) = 30 cm²', 'A(ECD) = 20 cm²', 'A(ABC) = 60 cm²'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(BEC) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '30' },
      { key: 'C', text: '27' },
      { key: 'D', text: '24' },
      { key: 'E', text: '20' },
    ],
    answer: 'D',
    hint: 'AED ile ECD üçgenlerinin D’den inen yüksekliği ortaktır; alanlarının oranı |AE| / |EC| oranını verir.',
    solution: [
      {
        title: 'Taban oranı',
        detail:
          'AED ve ECD üçgenlerinin yüksekliği ortak olduğundan |AE| / |EC| = 30 / 20 = 3 / 2 olur.',
      },
      {
        title: 'Aynı oran ABC’de',
        detail:
          'ABE ve BEC üçgenlerinin B’den inen yüksekliği ortak olduğundan A(ABE) / A(BEC) = 3 / 2 olur.',
      },
      {
        title: 'Parçaları yaz',
        detail: 'A(ABE) = 3k ve A(BEC) = 2k olsun; 3k + 2k = 60 ⇒ k = 12 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(BEC) = 2 · 12 = 24 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 15
  {
    id: 'quadrilaterals-15',
    topic: 'Kenar orta noktalarıyla köşe üçgenleri',
    figure: {
      viewBox: '0 0 400 267',
      caption: 'Şekil 15',
      label:
        'ABCD dörtgeninde E, F, K ve L sırasıyla [AD], [AB], [BC] ve [DC] kenarlarının orta noktaları; EFKL dörtgeni çizilmiş, AFE ve CKL üçgenleri taralı.',
      svg: `
          <path class="shade" d="M60.0,233.1 L200.0,228.4 L69.3,146.0 Z"/>
          <path class="shade" d="M315.1,34.0 L196.9,46.4 L327.6,128.9 Z"/>
          <path class="ln" d="M60.0,233.1 L340.0,223.8 L315.1,34.0 L78.7,58.9 Z"/>
          <path class="ln" d="M69.3,146.0 L200.0,228.4 L327.6,128.9 L196.9,46.4 Z"/>
          <path class="tick" d="M70.6,190.2 L58.7,188.9"/>
          <path class="tick" d="M80.0,103.1 L68.0,101.8"/>
          <path class="tick" d="M127.7,236.9 L127.3,224.9"/>
          <path class="tick" d="M132.7,236.7 L132.3,224.7"/>
          <path class="tick" d="M267.7,232.2 L267.3,220.2"/>
          <path class="tick" d="M272.7,232.0 L272.3,220.0"/>
          <path class="tick" d="M340.4,180.5 L328.5,182.1"/>
          <path class="tick" d="M339.7,175.6 L327.8,177.1"/>
          <path class="tick" d="M339.1,170.6 L327.2,172.2"/>
          <path class="tick" d="M327.9,85.6 L316.0,87.2"/>
          <path class="tick" d="M327.3,80.7 L315.4,82.2"/>
          <path class="tick" d="M326.6,75.7 L314.7,77.3"/>
          <circle class="pt" cx="60.0" cy="233.1" r="3.2"/>
          <circle class="pt" cx="340.0" cy="223.8" r="3.2"/>
          <circle class="pt" cx="315.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="78.7" cy="58.9" r="3.2"/>
          <circle class="pt" cx="69.3" cy="146.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="228.4" r="3.2"/>
          <circle class="pt" cx="327.6" cy="128.9" r="3.2"/>
          <circle class="pt" cx="196.9" cy="46.4" r="3.2"/>
          <text x="48.0" y="252.8" text-anchor="end">A</text>
          <text x="352.0" y="243.4">B</text>
          <text x="327.1" y="25.4">C</text>
          <text x="66.6" y="50.2" text-anchor="end">D</text>
          <text x="52.3" y="151.5" text-anchor="end">E</text>
          <text x="200.0" y="253.9" text-anchor="middle">F</text>
          <text x="344.6" y="134.4">K</text>
          <text x="196.9" y="31.9" text-anchor="middle">L</text>
        `,
    },
    given: ['ABCD bir dörtgen', 'E, F, K ve L kenarların orta noktaları', 'A(ABCD) = 64 cm²'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, taralı alanların toplamı A(AFE) + A(CKL) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '16' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'C',
    hint: '[EF] ve [KL] orta tabanlardır; [BD] köşegenini çizip hangi üçgenin dörtte biri olduklarına bak.',
    solution: [
      {
        title: 'ABD üçgeni',
        detail:
          '[BD] köşegeni çizilirse [EF], ABD üçgeninin orta tabanı olur; AFE ile ABD 1/2 oranında benzer olduğundan A(AFE) = A(ABD) / 4 olur.',
      },
      {
        title: 'CBD üçgeni',
        detail: 'Aynı şekilde [KL], CBD üçgeninin orta tabanıdır ve A(CKL) = A(CBD) / 4 olur.',
      },
      {
        title: 'Topla',
        detail: 'A(AFE) + A(CKL) = (A(ABD) + A(CBD)) / 4 = A(ABCD) / 4 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(AFE) + A(CKL) = 64 / 4 = 16 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 16
  {
    id: 'quadrilaterals-16',
    topic: 'Köşegenleri dik dörtgen',
    figure: {
      viewBox: '0 0 400 233',
      caption: 'Şekil 16',
      label:
        'ABCD dörtgeninin [AC] ve [BD] köşegenleri dik kesişiyor; |AD| = 5, |DC| = 4, |BC| = 7 ve |AB| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M247.8,34.0 L50.0,140.3 L247.8,199.3 L350.0,140.3 Z"/>
          <path class="ln" d="M247.8,34.0 L247.8,199.3"/>
          <path class="ln" d="M50.0,140.3 L350.0,140.3"/>
          <path class="ln" d="M257.8,140.3 L257.8,130.3 L247.8,130.3"/>
          <circle class="pt" cx="247.8" cy="34.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="140.3" r="3.2"/>
          <circle class="pt" cx="247.8" cy="199.3" r="3.2"/>
          <circle class="pt" cx="350.0" cy="140.3" r="3.2"/>
          <circle class="pt" cx="247.8" cy="140.3" r="3.2"/>
          <text x="247.8" y="19.5" text-anchor="middle">A</text>
          <text x="33.0" y="145.8" text-anchor="end">B</text>
          <text x="247.8" y="224.8" text-anchor="middle">C</text>
          <text x="367.0" y="145.8">D</text>
          <text class="val" x="142.3" y="80.3" text-anchor="middle">x</text>
          <text class="val" x="309.0" y="83.0" text-anchor="middle">5</text>
          <text class="val" x="305.9" y="187.5" text-anchor="middle">4</text>
          <text class="val" x="144.9" y="188.7" text-anchor="middle">7</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[AC] ⊥ [BD]', '|AD| = 5 cm', '|CD| = 4 cm', '|BC| = 7 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√62' },
      { key: 'B', text: '√58' },
      { key: 'C', text: '√56' },
      { key: 'D', text: '3√6' },
      { key: 'E', text: '5√2' },
    ],
    answer: 'B',
    hint: 'Köşegenleri dik dörtgende karşılıklı kenarların karelerinin toplamları eşittir.',
    solution: [
      {
        title: 'Parçaları adlandır',
        detail: 'Köşegenlerin kesim noktası H olsun; |HA| = a, |HB| = b, |HC| = c, |HD| = d.',
      },
      {
        title: 'Pisagor bağıntıları',
        detail: 'Dört dik üçgenden x² = a² + b², 7² = b² + c², 4² = c² + d², 5² = d² + a² olur.',
      },
      {
        title: 'Karşılıklı kenarlar',
        detail: 'x² + 4² = a² + b² + c² + d² = 5² + 7² olduğundan x² + 16 = 25 + 49 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 74 − 16 = 58 ⇒ x = √58 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 17
  {
    id: 'quadrilaterals-17',
    topic: 'Karşılıklı iki köşenin açıortayları',
    figure: {
      viewBox: '0 0 400 213',
      caption: 'Şekil 17',
      label:
        'ABCD dörtgeninde A köşesinin açıortayı [AE ışını, C köşesinin açıortayı [CK]; K noktası [AE üzerinde; m(ABC) = 70°, m(ADC) = 40° ve m(EKC) = α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M151.2,34.0 L50.0,125.1 L151.2,178.9 L350.0,98.6 Z"/>
          <path class="ln" d="M151.2,34.0 L173.9,140.6"/>
          <path class="ln" d="M151.2,178.9 L157.3,62.7"/>
          <path class="arc" d="M71.2,136.4 A24,24 0 0 0 67.8,109.1"/>
          <text class="val" x="88.7" y="125.9" text-anchor="middle">70°</text>
          <path class="arc" d="M317.7,88.1 A34,34 0 0 0 318.5,111.3"/>
          <text class="val" x="301.0" y="105.8" text-anchor="middle">40°</text>
          <path class="arc" d="M155.0,106.6 A44,44 0 0 0 166.4,105.7"/>
          <text class="val" x="162.2" y="130.0" text-anchor="middle">α</text>
          <path class="arc" d="M138.6,45.4 A17,17 0 0 0 154.7,50.6"/>
          <path class="tick" d="M147.5,45.4 L144.4,54.9"/>
          <path class="arc" d="M154.7,50.6 A17,17 0 0 0 167.4,39.3"/>
          <path class="tick" d="M159.2,42.9 L165.9,50.3"/>
          <path class="arc" d="M173.4,169.9 A24,24 0 0 0 152.4,155.0"/>
          <path class="tick" d="M163.0,164.0 L169.2,156.2"/>
          <path class="tick" d="M161.4,162.9 L166.8,154.5"/>
          <path class="arc" d="M152.4,155.0 A24,24 0 0 0 130.0,167.7"/>
          <path class="tick" d="M142.7,161.9 L138.2,153.0"/>
          <path class="tick" d="M141.0,162.9 L135.6,154.4"/>
          <circle class="pt" cx="151.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="125.1" r="3.2"/>
          <circle class="pt" cx="151.2" cy="178.9" r="3.2"/>
          <circle class="pt" cx="350.0" cy="98.6" r="3.2"/>
          <circle class="pt" cx="157.3" cy="62.7" r="3.2"/>
          <circle class="pt" cx="173.9" cy="140.6" r="3.2"/>
          <text x="151.2" y="19.5" text-anchor="middle">A</text>
          <text x="33.0" y="130.6" text-anchor="end">B</text>
          <text x="151.2" y="204.4" text-anchor="middle">C</text>
          <text x="367.0" y="104.1">D</text>
          <text x="145.3" y="68.2" text-anchor="end">K</text>
          <text x="185.9" y="146.1">E</text>
        `,
    },
    given: ['ABCD bir dörtgen', 'm(ABC) = 70°', 'm(ADC) = 40°', '[AE ve [CK] açıortay'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EKC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '15' },
      { key: 'C', text: '20' },
      { key: 'D', text: '25' },
      { key: 'E', text: '30' },
    ],
    answer: 'B',
    hint: 'A ve C açılarının toplamını bul, sonra ABCK dörtgeninin açılarını yaz.',
    solution: [
      {
        title: 'A ve C açılarının toplamı',
        detail: 'm(DAB) + m(BCD) = 360 − (70 + 40) = 250° olur.',
      },
      {
        title: 'Yarıların toplamı',
        detail: 'Açıortaylar nedeniyle m(KAB) + m(BCK) = 250 / 2 = 125° olur.',
      },
      {
        title: 'ABCK dörtgeni',
        detail: 'ABCK dörtgeninde m(AKC) = 360 − (125 + 70) = 165° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A, K, E doğrusal olduğundan α = 180 − 165 = 15° bulunur. (Kısa yol: α = (70 − 40) / 2.)',
      },
    ],
  },
  // ---------------------------------------------------------------- 18
  {
    id: 'quadrilaterals-18',
    topic: 'Orta noktalarla kesilen köşeler',
    figure: {
      viewBox: '0 0 400 311',
      caption: 'Şekil 18',
      label:
        'ABCD dörtgeninde K, L, M ve N sırasıyla [AB], [BC], [CD] ve [DA] kenarlarının orta noktaları; [NK] ve [LM] çizilmiş, KBLMDN altıgeni taralı.',
      svg: `
          <path class="shade" d="M114.3,223.3 L178.6,276.9 L264.3,216.1 L260.7,94.7 L171.4,34.0 L110.7,101.9 Z"/>
          <path class="ln" d="M50.0,169.7 L178.6,276.9 L350.0,155.4 L171.4,34.0 Z"/>
          <path class="ln" d="M110.7,101.9 L114.3,223.3"/>
          <path class="ln" d="M264.3,216.1 L260.7,94.7"/>
          <circle class="pt" cx="50.0" cy="169.7" r="3.2"/>
          <circle class="pt" cx="178.6" cy="276.9" r="3.2"/>
          <circle class="pt" cx="350.0" cy="155.4" r="3.2"/>
          <circle class="pt" cx="171.4" cy="34.0" r="3.2"/>
          <circle class="pt" cx="114.3" cy="223.3" r="3.2"/>
          <circle class="pt" cx="264.3" cy="216.1" r="3.2"/>
          <circle class="pt" cx="260.7" cy="94.7" r="3.2"/>
          <circle class="pt" cx="110.7" cy="101.9" r="3.2"/>
          <text x="33.0" y="175.2" text-anchor="end">A</text>
          <text x="178.6" y="302.4" text-anchor="middle">B</text>
          <text x="367.0" y="160.9">C</text>
          <text x="171.4" y="19.5" text-anchor="middle">D</text>
          <text x="102.3" y="242.9" text-anchor="end">K</text>
          <text x="276.3" y="235.8">L</text>
          <text x="272.7" y="86.1">M</text>
          <text x="98.7" y="93.2" text-anchor="end">N</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'K, L, M ve N bulundukları kenarların orta noktaları',
      'A(KBLMDN) = 45 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '54' },
      { key: 'B', text: '56' },
      { key: 'C', text: '60' },
      { key: 'D', text: '64' },
      { key: 'E', text: '72' },
    ],
    answer: 'C',
    hint: '[BD] köşegenini çiz; kesilen AKN ve CLM üçgenleri, ABD ve CBD üçgenlerinin kaçta biridir?',
    solution: [
      {
        title: 'ABD üçgeni',
        detail: '[BD] çizilirse [NK], ABD üçgeninin orta tabanı olur ve A(AKN) = A(ABD) / 4 olur.',
      },
      {
        title: 'CBD üçgeni',
        detail: 'Aynı şekilde [LM], CBD üçgeninin orta tabanıdır ve A(CLM) = A(CBD) / 4 olur.',
      },
      {
        title: 'Taralı bölge',
        detail: 'Kesilen parçalar A(ABCD) / 4 olduğundan A(KBLMDN) = 3 · A(ABCD) / 4 olur.',
      },
      {
        title: 'Sonuç',
        detail: '3 · A(ABCD) / 4 = 45 ⇒ A(ABCD) = 60 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 19
  {
    id: 'quadrilaterals-19',
    topic: 'Köşegenlerle dörtgenin alanı',
    figure: {
      viewBox: '0 0 400 191',
      caption: 'Şekil 19',
      label:
        'ABCD dörtgeninde [AC] ve [BD] köşegenleri E noktasında kesişiyor; köşegenler arasındaki m(CED) açısı 120° olarak gösterilmiş.',
      svg: `
          <path class="ln" d="M40.0,111.0 L208.9,157.2 L360.0,111.0 L137.8,34.0 Z"/>
          <path class="ln" d="M40.0,111.0 L360.0,111.0"/>
          <path class="ln" d="M208.9,157.2 L137.8,34.0"/>
          <path class="arc" d="M204.2,111.0 A22,22 0 0 0 171.2,91.9"/>
          <text class="val" x="201.2" y="83.6" text-anchor="middle">120°</text>
          <circle class="pt" cx="40.0" cy="111.0" r="3.2"/>
          <circle class="pt" cx="208.9" cy="157.2" r="3.2"/>
          <circle class="pt" cx="360.0" cy="111.0" r="3.2"/>
          <circle class="pt" cx="137.8" cy="34.0" r="3.2"/>
          <circle class="pt" cx="182.2" cy="111.0" r="3.2"/>
          <text x="23.0" y="117.4" text-anchor="end">A</text>
          <text x="215.4" y="178.4" text-anchor="middle">B</text>
          <text x="377.0" y="117.2">C</text>
          <text x="128.0" y="25.6" text-anchor="end">D</text>
          <text x="192.5" y="122.7">E</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[AC] ∩ [BD] = {E}', '|AC| = 9 cm', '|BD| = 4 cm', 'm(CED) = 120°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '6√3' },
      { key: 'B', text: '7√3' },
      { key: 'C', text: '8√3' },
      { key: 'D', text: '9√3' },
      { key: 'E', text: '10√3' },
    ],
    answer: 'D',
    hint: 'Köşegen uzunlukları ve aralarındaki açı bilinen dörtgenin alan formülünü hatırla.',
    solution: [
      {
        title: 'Alan formülü',
        detail: 'Köşegenleri e ve f, aralarındaki açı θ olan dörtgende A = ½ · e · f · sin θ olur.',
      },
      {
        title: 'Açının sinüsü',
        detail: 'Köşegenler arasındaki açı 120° olduğundan sin 120° = √3 / 2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABCD) = ½ · 9 · 4 · √3 / 2 = 9√3 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 20
  {
    id: 'quadrilaterals-20',
    topic: 'Açıortayların oluşturduğu dış açı',
    figure: {
      viewBox: '0 0 400 224',
      caption: 'Şekil 20',
      label:
        'ABCD dörtgeninde A köşesinin açıortayı [DC] kenarını F noktasında, B köşesinin açıortayı [AF] doğru parçasını E noktasında kesiyor; m(BEF) = 120°, m(BCD) = 70° ve D köşesindeki açı α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M163.4,43.3 L303.1,34.0 L360.0,190.4 L40.0,190.4 Z"/>
          <path class="ln" d="M163.4,43.3 L238.0,190.4"/>
          <path class="ln" d="M303.1,34.0 L221.9,158.6"/>
          <path class="arc" d="M174.3,64.7 A24,24 0 0 0 187.4,41.7"/>
          <path class="tick" d="M180.8,53.2 L187.7,57.1"/>
          <path class="arc" d="M148.0,61.7 A24,24 0 0 0 174.3,64.7"/>
          <path class="tick" d="M161.1,63.2 L160.2,71.1"/>
          <path class="arc" d="M283.1,35.3 A20,20 0 0 0 292.2,50.8"/>
          <path class="tick" d="M288.5,40.5 L281.1,43.7"/>
          <path class="tick" d="M290.3,43.6 L283.9,48.4"/>
          <path class="arc" d="M292.2,50.8 A20,20 0 0 0 309.9,52.8"/>
          <path class="tick" d="M299.5,49.6 L297.7,57.4"/>
          <path class="tick" d="M303.1,50.0 L303.0,58.0"/>
          <path class="arc" d="M229.1,172.8 A16,16 0 0 0 230.6,145.1"/>
          <text class="val" x="261.8" y="166.2" text-anchor="middle">120°</text>
          <path class="arc" d="M351.8,167.8 A24,24 0 0 0 336.0,190.4"/>
          <text class="val" x="327.2" y="172.9" text-anchor="middle">70°</text>
          <path class="arc" d="M66.0,190.4 A26,26 0 0 0 56.7,170.4"/>
          <text class="val" x="76.3" y="179.0" text-anchor="middle">α</text>
          <circle class="pt" cx="163.4" cy="43.3" r="3.2"/>
          <circle class="pt" cx="303.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="190.4" r="3.2"/>
          <circle class="pt" cx="40.0" cy="190.4" r="3.2"/>
          <circle class="pt" cx="221.9" cy="158.6" r="3.2"/>
          <circle class="pt" cx="238.0" cy="190.4" r="3.2"/>
          <text x="153.2" y="35.2" text-anchor="end">A</text>
          <text x="315.5" y="27.9">B</text>
          <text x="375.0" y="203.8">C</text>
          <text x="24.4" y="202.6" text-anchor="end">D</text>
          <text x="205.6" y="159.2" text-anchor="end">E</text>
          <text x="238.0" y="212.9" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AE] ve [BE] açıortay',
      'A, E, F doğrusal',
      'm(BEF) = 120°',
      'm(BCD) = 70°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint:
      'm(BEF), ABE üçgeninin E köşesindeki dış açıdır; A ve B açılarının yarılarıyla ilişkilendir.',
    solution: [
      {
        title: 'ABE üçgeni',
        detail: 'A, E, F doğrusal olduğundan m(AEB) = 180 − 120 = 60° olur.',
      },
      {
        title: 'Yarı açılar',
        detail:
          'm(EAB) + m(EBA) = 180 − 60 = 120° olur; açıortaylar nedeniyle m(DAB) + m(ABC) = 2 · 120 = 240° olur.',
      },
      {
        title: 'Kalan iki açı',
        detail:
          'Dörtgenin iç açıları toplamı 360° olduğundan m(BCD) + m(ADC) = 360 − 240 = 120° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 120 − 70 = 50° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 21
  {
    id: 'quadrilaterals-21',
    topic: 'Orta noktalar dörtgeninin alanı',
    figure: {
      viewBox: '0 0 400 251',
      caption: 'Şekil 21',
      label:
        'ABCD dörtgeninde [AC] ve [BD] köşegenleri O noktasında dik kesişiyor; K, L, M ve N kenarların orta noktaları ve KLMN dörtgeni taralı.',
      svg: `
          <path class="shade" d="M97.1,182.6 L257.1,182.6 L257.1,91.1 L97.1,91.1 Z"/>
          <path class="ln" d="M40.0,148.3 L154.3,216.9 L360.0,148.3 L154.3,34.0 Z"/>
          <path class="ln" d="M40.0,148.3 L360.0,148.3"/>
          <path class="ln" d="M154.3,216.9 L154.3,34.0"/>
          <path class="ln" d="M97.1,182.6 L257.1,182.6 L257.1,91.1 L97.1,91.1 Z"/>
          <path class="ln" d="M163.3,148.3 L163.3,139.3 L154.3,139.3"/>
          <circle class="pt" cx="40.0" cy="148.3" r="3.2"/>
          <circle class="pt" cx="154.3" cy="216.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="148.3" r="3.2"/>
          <circle class="pt" cx="154.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="97.1" cy="182.6" r="3.2"/>
          <circle class="pt" cx="257.1" cy="182.6" r="3.2"/>
          <circle class="pt" cx="257.1" cy="91.1" r="3.2"/>
          <circle class="pt" cx="97.1" cy="91.1" r="3.2"/>
          <circle class="pt" cx="154.3" cy="148.3" r="3.2"/>
          <text x="23.1" y="155.2" text-anchor="end">A</text>
          <text x="149.6" y="238.7" text-anchor="middle">B</text>
          <text x="377.0" y="154.8">C</text>
          <text x="150.6" y="22.9" text-anchor="middle">D</text>
          <text x="82.6" y="196.8" text-anchor="end">K</text>
          <text x="273.3" y="193.4">L</text>
          <text x="272.0" y="88.4">M</text>
          <text x="85.1" y="84.6" text-anchor="end">N</text>
          <text x="145.5" y="168.4" text-anchor="end">O</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AC] ⊥ [BD]',
      '|AC| = 14 cm',
      '|BD| = 8 cm',
      'K, L, M ve N bulundukları kenarların orta noktaları',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(KLMN) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '14' },
      { key: 'B', text: '28' },
      { key: 'C', text: '42' },
      { key: 'D', text: '56' },
      { key: 'E', text: '112' },
    ],
    answer: 'B',
    hint:
      'Kenar orta noktalarını birleştiren her doğru parçası, bir üçgende köşegene paralel orta tabandır.',
    solution: [
      {
        title: 'Orta tabanlar',
        detail:
          'ABC üçgeninde [KL] ∥ [AC] ve |KL| = 14 / 2 = 7; ABD üçgeninde [KN] ∥ [BD] ve |KN| = 8 / 2 = 4 olur.',
      },
      {
        title: 'KLMN dikdörtgen',
        detail:
          'Köşegenler dik olduğundan KLMN’nin komşu kenarları da diktir; KLMN kenarları 7 ve 4 olan bir dikdörtgendir.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(KLMN) = 7 · 4 = 28 cm² bulunur. (Kısa yol: A(ABCD) = ½ · 14 · 8 = 56 ve orta noktalar dörtgeni bunun yarısıdır.)',
      },
    ],
  },
  // ---------------------------------------------------------------- 22
  {
    id: 'quadrilaterals-22',
    topic: 'Karşılıklı iki açısı dik dörtgen',
    figure: {
      viewBox: '0 0 400 299',
      caption: 'Şekil 22',
      label:
        'ABCD dörtgeninde A köşesindeki açı dik; |AB| = 4, |AD| = 5, |BC| = √5 ve |DC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M226.7,34.0 L41.9,140.7 L40.0,259.9 L360.0,265.0 Z"/>
          <path class="ln" d="M217.1,39.5 L222.6,49.0 L232.2,43.5"/>
          <circle class="pt" cx="226.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="41.9" cy="140.7" r="3.2"/>
          <circle class="pt" cx="40.0" cy="259.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="265.0" r="3.2"/>
          <text x="233.3" y="23.8" text-anchor="middle">A</text>
          <text x="25.5" y="141.7" text-anchor="end">B</text>
          <text x="25.9" y="274.9" text-anchor="end">C</text>
          <text x="375.4" y="277.7">D</text>
          <text class="val" x="128.6" y="77.9" text-anchor="middle">4</text>
          <text class="val" x="309.0" y="151.8" text-anchor="middle">5</text>
          <text class="val" x="25.3" y="209.0" text-anchor="middle">√5</text>
          <text class="val" x="205.6" y="282.9" text-anchor="middle">x</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 299',
      caption: 'Şekil 22',
      label:
        'ABCD dörtgeninde A ve C köşelerindeki açılar dik; [BD] köşegeni kesikli çizilmiş, |AB| = 4, |AD| = 5, |BC| = √5 ve |DC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M226.7,34.0 L41.9,140.7 L40.0,259.9 L360.0,265.0 Z"/>
          <path class="aux" d="M41.9,140.7 L360.0,265.0"/>
          <path class="ln" d="M217.1,39.5 L222.6,49.0 L232.2,43.5"/>
          <circle class="pt" cx="226.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="41.9" cy="140.7" r="3.2"/>
          <circle class="pt" cx="40.0" cy="259.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="265.0" r="3.2"/>
          <text x="233.3" y="23.8" text-anchor="middle">A</text>
          <text x="25.5" y="141.7" text-anchor="end">B</text>
          <text x="25.9" y="274.9" text-anchor="end">C</text>
          <text x="375.4" y="277.7">D</text>
          <text class="val" x="128.6" y="77.9" text-anchor="middle">4</text>
          <text class="val" x="309.0" y="151.8" text-anchor="middle">5</text>
          <text class="val" x="25.3" y="209.0" text-anchor="middle">√5</text>
          <text class="val" x="205.6" y="282.9" text-anchor="middle">x</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[BA] ⊥ [AD]',
      '|AB| = 4 cm',
      '|AD| = 5 cm',
      '|BC| = √5 cm',
      'm(ABC) + m(ADC) = 180°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '2√7' },
      { key: 'C', text: '6' },
      { key: 'D', text: '4√3' },
      { key: 'E', text: '3√5' },
    ],
    answer: 'C',
    hint:
      'B ve D açılarının toplamı 180° ise A ve C açılarının toplamı kaçtır? Sonra [BD] köşegenini çiz.',
    solution: [
      {
        title: 'C köşesindeki açı',
        detail:
          'm(ABC) + m(ADC) = 180° olduğundan m(BAD) + m(BCD) = 180° olur; m(BAD) = 90° ⇒ m(BCD) = 90°.',
      },
      {
        title: 'BAD dik üçgeni',
        detail: '[BD] çizilirse |BD|² = 4² + 5² = 16 + 25 = 41 olur.',
      },
      {
        title: 'BCD dik üçgeni',
        detail: '|BD|² = |BC|² + x² ⇒ 41 = 5 + x² ⇒ x² = 36 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 6 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 23
  {
    id: 'quadrilaterals-23',
    topic: 'Dörtgende dört açıortay',
    figure: {
      viewBox: '0 0 400 310',
      caption: 'Şekil 23',
      label:
        'ABCD dörtgeninde A ve B köşelerinin açıortayları E noktasında, C ve D köşelerinin açıortayları F noktasında kesişiyor; m(AEB) = 115° ve m(DFC) = α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M40.0,276.5 L360.0,276.5 L220.0,34.0 L122.0,51.3 Z"/>
          <path class="ln" d="M40.0,276.5 L184.6,175.2"/>
          <path class="ln" d="M360.0,276.5 L184.6,175.2"/>
          <path class="ln" d="M220.0,34.0 L179.8,120.2"/>
          <path class="ln" d="M122.0,51.3 L179.8,120.2"/>
          <path class="arc" d="M66.0,276.5 A26,26 0 0 0 61.3,261.6"/>
          <path class="tick" d="M61.0,269.9 L68.6,267.5"/>
          <path class="arc" d="M61.3,261.6 A26,26 0 0 0 48.9,252.1"/>
          <path class="tick" d="M53.4,259.0 L58.3,252.7"/>
          <path class="arc" d="M339.2,264.5 A24,24 0 0 0 336.0,276.5"/>
          <path class="tick" d="M341.3,269.5 L333.8,266.7"/>
          <path class="tick" d="M340.3,273.1 L332.4,271.8"/>
          <path class="arc" d="M348.0,255.7 A24,24 0 0 0 339.2,264.5"/>
          <path class="tick" d="M347.2,261.1 L342.1,254.9"/>
          <path class="tick" d="M344.6,263.7 L338.4,258.6"/>
          <path class="arc" d="M208.2,59.4 A28,28 0 0 0 234.0,58.2"/>
          <path class="tick" d="M217.2,57.8 L216.3,65.8"/>
          <path class="tick" d="M221.0,58.0 L221.4,66.0"/>
          <path class="tick" d="M224.9,57.5 L226.5,65.3"/>
          <path class="arc" d="M192.4,38.9 A28,28 0 0 0 208.2,59.4"/>
          <path class="tick" d="M198.9,45.4 L191.8,49.2"/>
          <path class="tick" d="M201.0,48.6 L194.6,53.5"/>
          <path class="tick" d="M203.5,51.5 L198.1,57.3"/>
          <path class="arc" d="M141.3,74.3 A30,30 0 0 0 151.5,46.1"/>
          <path class="tick" d="M143.8,65.4 L150.5,69.7"/>
          <path class="tick" d="M145.7,62.0 L153.0,65.3"/>
          <path class="tick" d="M147.0,58.3 L154.7,60.5"/>
          <path class="tick" d="M147.8,54.5 L155.7,55.5"/>
          <path class="arc" d="M111.7,79.5 A30,30 0 0 0 141.3,74.3"/>
          <path class="tick" d="M120.7,77.3 L120.3,85.2"/>
          <path class="tick" d="M124.6,77.2 L125.3,85.1"/>
          <path class="tick" d="M128.4,76.5 L130.4,84.2"/>
          <path class="tick" d="M132.1,75.2 L135.2,82.6"/>
          <path class="arc" d="M171.5,184.4 A16,16 0 0 0 198.5,183.2"/>
          <text class="val" x="186.1" y="213.7" text-anchor="middle">115°</text>
          <path class="arc" d="M186.6,105.7 A16,16 0 0 0 169.5,108.0"/>
          <text class="val" x="175.9" y="96.0" text-anchor="middle">α</text>
          <circle class="pt" cx="40.0" cy="276.5" r="3.2"/>
          <circle class="pt" cx="360.0" cy="276.5" r="3.2"/>
          <circle class="pt" cx="220.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="122.0" cy="51.3" r="3.2"/>
          <circle class="pt" cx="184.6" cy="175.2" r="3.2"/>
          <circle class="pt" cx="179.8" cy="120.2" r="3.2"/>
          <text x="26.7" y="292.6" text-anchor="end">A</text>
          <text x="374.1" y="291.4">B</text>
          <text x="224.5" y="23.1" text-anchor="middle">C</text>
          <text x="113.4" y="42.1" text-anchor="end">D</text>
          <text x="184.6" y="163.7" text-anchor="middle">E</text>
          <text x="179.8" y="142.7" text-anchor="middle">F</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[AE] ve [BE] açıortay', '[DF] ve [CF] açıortay', 'm(AEB) = 115°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DFC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '55' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'C',
    hint:
      'AEB üçgeninden A ve B açılarının toplamını bul; kalan iki açının toplamını DFC üçgeninde kullan.',
    solution: [
      {
        title: 'AEB üçgeni',
        detail: 'm(DAB) / 2 + m(ABC) / 2 = 180 − 115 = 65° ⇒ m(DAB) + m(ABC) = 130° olur.',
      },
      {
        title: 'Kalan iki açı',
        detail: 'm(BCD) + m(ADC) = 360 − 130 = 230° olur.',
      },
      {
        title: 'DFC üçgeni',
        detail: 'Açıortaylar nedeniyle m(FDC) + m(FCD) = 230 / 2 = 115° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 180 − 115 = 65° bulunur. (Kısa yol: m(AEB) + m(DFC) = 180°.)',
      },
    ],
  },
  // ---------------------------------------------------------------- 24
  {
    id: 'quadrilaterals-24',
    topic: 'İç açıortaylarla dörtgenin alanı',
    figure: {
      viewBox: '0 0 400 239',
      caption: 'Şekil 24',
      label:
        'ABCD dörtgeninde dört iç açıortay K noktasında kesişiyor; K noktasından [AB] kenarına inen dikmenin ayağı H ve |KH| = 3 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,205.1 L313.5,205.1 L360.0,77.3 L241.1,34.0 Z"/>
          <path class="ln" d="M40.0,205.1 L257.4,125.1"/>
          <path class="ln" d="M313.5,205.1 L257.4,125.1"/>
          <path class="ln" d="M360.0,77.3 L257.4,125.1"/>
          <path class="ln" d="M241.1,34.0 L257.4,125.1"/>
          <path class="ln" d="M257.4,125.1 L257.4,205.1"/>
          <path class="ln" d="M266.4,205.1 L266.4,196.1 L257.4,196.1"/>
          <text class="val" x="269.4" y="170.6" text-anchor="middle">3</text>
          <circle class="pt" cx="40.0" cy="205.1" r="3.2"/>
          <circle class="pt" cx="313.5" cy="205.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="77.3" r="3.2"/>
          <circle class="pt" cx="241.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="257.4" cy="205.1" r="3.2"/>
          <circle class="pt" cx="257.4" cy="125.1" r="3.2"/>
          <text x="24.1" y="216.6" text-anchor="end">A</text>
          <text x="325.5" y="222.6">B</text>
          <text x="375.6" y="76.0">C</text>
          <text x="241.5" y="22.5" text-anchor="middle">D</text>
          <text x="242.2" y="123.0" text-anchor="end">K</text>
          <text x="257.4" y="227.6" text-anchor="middle">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 239',
      caption: 'Şekil 24',
      label:
        'ABCD dörtgeninde dört iç açıortay K noktasında kesişiyor; K noktasından dört kenara inen dikmeler ve K merkezli, 3 yarıçaplı iç teğet çember kesikli çizilmiş.',
      svg: `
          <path class="ln" d="M40.0,205.1 L313.5,205.1 L360.0,77.3 L241.1,34.0 Z"/>
          <path class="ln" d="M40.0,205.1 L257.4,125.1"/>
          <path class="ln" d="M313.5,205.1 L257.4,125.1"/>
          <path class="ln" d="M360.0,77.3 L257.4,125.1"/>
          <path class="ln" d="M241.1,34.0 L257.4,125.1"/>
          <path class="ln" d="M257.4,125.1 L257.4,205.1"/>
          <path class="ln" d="M266.4,205.1 L266.4,196.1 L257.4,196.1"/>
          <text class="val" x="269.4" y="170.6" text-anchor="middle">3</text>
          <path class="aux" d="M257.4,125.1 L332.6,152.5"/>
          <path class="aux" d="M257.4,125.1 L284.8,49.9"/>
          <path class="aux" d="M257.4,125.1 L205.6,64.2"/>
          <circle class="aux" cx="257.4" cy="125.1" r="80.0"/>
          <circle class="pt" cx="40.0" cy="205.1" r="3.2"/>
          <circle class="pt" cx="313.5" cy="205.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="77.3" r="3.2"/>
          <circle class="pt" cx="241.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="257.4" cy="205.1" r="3.2"/>
          <circle class="pt" cx="257.4" cy="125.1" r="3.2"/>
          <text x="24.1" y="216.6" text-anchor="end">A</text>
          <text x="325.5" y="222.6">B</text>
          <text x="375.6" y="76.0">C</text>
          <text x="241.5" y="22.5" text-anchor="middle">D</text>
          <text x="242.2" y="123.0" text-anchor="end">K</text>
          <text x="257.4" y="227.6" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD dışbükey bir dörtgen',
      'İç açıortaylar K noktasında kesişiyor',
      '[KH] ⊥ [AB]',
      '|KH| = 3 cm',
      'Çevre(ABCD) = 30 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '36' },
      { key: 'C', text: '45' },
      { key: 'D', text: '60' },
      { key: 'E', text: '90' },
    ],
    answer: 'C',
    hint: 'Açıortay üzerindeki her nokta, açının iki koluna eşit uzaklıktadır.',
    solution: [
      {
        title: 'K’nin kenarlara uzaklığı',
        detail:
          'K her iç açının açıortayı üzerinde olduğundan dört kenara da eşit uzaklıktadır; bu uzaklık |KH| = 3 cm’dir.',
      },
      {
        title: 'Dörtgeni böl',
        detail:
          'ABCD; KAB, KBC, KCD ve KDA üçgenlerine ayrılır ve her birinin yüksekliği 3 cm’dir.',
      },
      {
        title: 'Alanları topla',
        detail: 'A(ABCD) = ½ · 3 · (|AB| + |BC| + |CD| + |DA|) = ½ · 3 · 30 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'A(ABCD) = 45 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 25
  {
    id: 'quadrilaterals-25',
    topic: 'İçbükey dörtgende açıortaylar',
    figure: {
      viewBox: '0 0 400 418',
      caption: 'Şekil 25',
      label:
        'İçbükey ABCD dörtgeninde [BA], FBC açısının ve [DA], CDG açısının açıortayı; F, B, E ve G, D, E doğrusal; m(BAD) = 35°, m(BCD) = 145° ve E köşesindeki açı α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M186.6,34.0 L120.2,281.9 L163.1,261.9 L276.8,281.9 Z"/>
          <path class="ln" d="M95.0,246.0 L191.4,383.7"/>
          <path class="ln" d="M305.0,248.3 L191.4,383.7"/>
          <path class="arc" d="M143.7,270.9 A26,26 0 0 0 126.9,256.8"/>
          <path class="tick" d="M134.3,265.0 L139.4,258.9"/>
          <path class="arc" d="M126.9,256.8 A26,26 0 0 0 105.2,260.6"/>
          <path class="tick" d="M116.3,260.2 L114.9,252.3"/>
          <path class="arc" d="M267.9,257.5 A26,26 0 0 0 251.2,277.4"/>
          <path class="tick" d="M261.4,266.2 L255.8,260.5"/>
          <path class="tick" d="M258.7,269.4 L252.1,264.9"/>
          <path class="arc" d="M293.5,262.0 A26,26 0 0 0 267.9,257.5"/>
          <path class="tick" d="M282.7,260.7 L284.8,253.0"/>
          <path class="tick" d="M278.5,260.0 L279.2,252.0"/>
          <path class="arc" d="M178.8,63.0 A30,30 0 0 0 196.8,62.2"/>
          <text class="val" x="189.1" y="96.9" text-anchor="middle">35°</text>
          <path class="arc" d="M148.6,268.6 A16,16 0 0 0 178.9,264.6"/>
          <text class="val" x="167.1" y="296.6" text-anchor="middle">145°</text>
          <path class="arc" d="M209.4,362.2 A28,28 0 0 0 175.4,360.7"/>
          <text class="val" x="193.2" y="346.7" text-anchor="middle">α</text>
          <circle class="pt" cx="186.6" cy="34.0" r="3.2"/>
          <circle class="pt" cx="120.2" cy="281.9" r="3.2"/>
          <circle class="pt" cx="163.1" cy="261.9" r="3.2"/>
          <circle class="pt" cx="276.8" cy="281.9" r="3.2"/>
          <circle class="pt" cx="191.4" cy="383.7" r="3.2"/>
          <text x="186.6" y="22.5" text-anchor="middle">A</text>
          <text x="104.2" y="293.2" text-anchor="end">B</text>
          <text x="163.1" y="252.4" text-anchor="middle">C</text>
          <text x="292.8" y="293.2">D</text>
          <text x="191.4" y="409.2" text-anchor="middle">E</text>
          <text x="87.0" y="240.0" text-anchor="end">F</text>
          <text x="314.0" y="243.1">G</text>
        `,
    },
    given: [
      'ABCD içbükey bir dörtgen',
      'm(BAD) = 35°',
      'm(BCD) = 145°',
      '[BA], FBC açısının açıortayı',
      '[DA], CDG açısının açıortayı',
      'F, B, E ve G, D, E doğrusal',
    ],
    stem: [],
    ask: 'Buna göre, m(BED) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '55' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'E',
    hint:
      'İçbükey dörtgende 180°’den küçük olan m(BCD) açısı, diğer üç iç açının toplamına eşittir.',
    solution: [
      {
        title: 'İçbükey dörtgen',
        detail:
          'm(ABC) = b ve m(ADC) = d olsun. İçbükey ABCD dörtgeninde m(BCD) = m(BAD) + b + d olduğundan 145 = 35 + b + d, yani b + d = 110° olur.',
      },
      {
        title: 'Açıortaylar',
        detail:
          '[BA] açıortay olduğundan m(FBC) = 2b ve F, B, E doğrusal olduğundan m(EBC) = 180 − 2b olur. Benzer şekilde m(EDC) = 180 − 2d olur.',
      },
      {
        title: 'EBCD dörtgeni',
        detail:
          'EBCD dörtgeninin iç açıları toplamı 360° olduğundan α + (180 − 2b) + 145 + (180 − 2d) = 360 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'α = 2(b + d) − 145 = 220 − 145 = 75° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 26
  {
    id: 'quadrilaterals-26',
    topic: 'Orta noktalar dörtgeninin çevresi',
    figure: {
      viewBox: '0 0 400 399',
      caption: 'Şekil 26',
      label:
        'ABCD dörtgeninde K, L, M ve N sırasıyla [AB], [BC], [CD] ve [DA] kenarlarının orta noktaları ve KLMN dörtgeni çizilmiş.',
      svg: `
          <path class="ln" d="M80.0,244.9 L176.0,364.9 L320.0,244.9 L234.3,34.0 Z"/>
          <path class="ln" d="M128.0,304.9 L248.0,304.9 L277.2,139.4 L157.2,139.4 Z"/>
          <circle class="pt" cx="80.0" cy="244.9" r="3.2"/>
          <circle class="pt" cx="176.0" cy="364.9" r="3.2"/>
          <circle class="pt" cx="320.0" cy="244.9" r="3.2"/>
          <circle class="pt" cx="234.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="128.0" cy="304.9" r="3.2"/>
          <circle class="pt" cx="248.0" cy="304.9" r="3.2"/>
          <circle class="pt" cx="277.2" cy="139.4" r="3.2"/>
          <circle class="pt" cx="157.2" cy="139.4" r="3.2"/>
          <text x="63.3" y="253.5" text-anchor="end">A</text>
          <text x="172.9" y="387.1" text-anchor="middle">B</text>
          <text x="336.7" y="253.6">C</text>
          <text x="237.2" y="22.7" text-anchor="middle">D</text>
          <text x="116.3" y="319.8" text-anchor="end">K</text>
          <text x="257.6" y="321.9">L</text>
          <text x="291.1" y="139.3">M</text>
          <text x="145.1" y="136.1" text-anchor="end">N</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 399',
      caption: 'Şekil 26',
      label:
        'ABCD dörtgeninde K, L, M ve N kenarların orta noktaları; [AC] ve [BD] köşegenleri kesikli çizilmiş ve KLMN dörtgeninin kenarları bu köşegenlere paralel.',
      svg: `
          <path class="ln" d="M80.0,244.9 L176.0,364.9 L320.0,244.9 L234.3,34.0 Z"/>
          <path class="ln" d="M128.0,304.9 L248.0,304.9 L277.2,139.4 L157.2,139.4 Z"/>
          <path class="aux" d="M80.0,244.9 L320.0,244.9"/>
          <path class="aux" d="M176.0,364.9 L234.3,34.0"/>
          <circle class="pt" cx="80.0" cy="244.9" r="3.2"/>
          <circle class="pt" cx="176.0" cy="364.9" r="3.2"/>
          <circle class="pt" cx="320.0" cy="244.9" r="3.2"/>
          <circle class="pt" cx="234.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="128.0" cy="304.9" r="3.2"/>
          <circle class="pt" cx="248.0" cy="304.9" r="3.2"/>
          <circle class="pt" cx="277.2" cy="139.4" r="3.2"/>
          <circle class="pt" cx="157.2" cy="139.4" r="3.2"/>
          <text x="63.3" y="253.5" text-anchor="end">A</text>
          <text x="172.9" y="387.1" text-anchor="middle">B</text>
          <text x="336.7" y="253.6">C</text>
          <text x="237.2" y="22.7" text-anchor="middle">D</text>
          <text x="116.3" y="319.8" text-anchor="end">K</text>
          <text x="257.6" y="321.9">L</text>
          <text x="291.1" y="139.3">M</text>
          <text x="145.1" y="136.1" text-anchor="end">N</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'K, L, M ve N bulundukları kenarların orta noktaları',
      '|AC| = 10 cm',
      'Çevre(KLMN) = 24 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '16' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'B',
    hint:
      'Kenar orta noktalarını birleştiren her doğru parçası, bir üçgende köşegene paralel orta tabandır.',
    solution: [
      {
        title: 'Orta tabanlar',
        detail:
          'ABC ve ADC üçgenlerinde |KL| = |NM| = |AC| / 2; ABD ve CBD üçgenlerinde |KN| = |LM| = |BD| / 2 olur.',
      },
      {
        title: 'Çevre',
        detail:
          'Çevre(KLMN) = |AC| + |BD| olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '24 = 10 + |BD| olduğundan |BD| = 14 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 27
  {
    id: 'quadrilaterals-27',
    topic: 'Dik köşegenli dörtgende kenar bağıntısı',
    figure: {
      viewBox: '0 0 400 252',
      caption: 'Şekil 27',
      label:
        'ABC üçgeninde [AH], [BC] kenarına dik; K noktası [AH] üzerinde, |AB| = 7, |AC| = 9, |KB| = 4 ve |KC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M152.0,34.0 L50.0,217.6 L350.0,217.6 Z"/>
          <path class="ln" d="M152.0,34.0 L152.0,217.6"/>
          <path class="ln" d="M50.0,217.6 L152.0,154.4 L350.0,217.6"/>
          <path class="ln" d="M161.0,217.6 L161.0,208.6 L152.0,208.6"/>
          <circle class="pt" cx="152.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="217.6" r="3.2"/>
          <circle class="pt" cx="350.0" cy="217.6" r="3.2"/>
          <circle class="pt" cx="152.0" cy="217.6" r="3.2"/>
          <circle class="pt" cx="152.0" cy="154.4" r="3.2"/>
          <text x="152.0" y="22.5" text-anchor="middle">A</text>
          <text x="34.0" y="228.9" text-anchor="end">B</text>
          <text x="366.0" y="228.9">C</text>
          <text x="152.0" y="243.1" text-anchor="middle">H</text>
          <text x="163.5" y="150.2">K</text>
          <text class="val" x="111.5" y="136.6" text-anchor="middle">7</text>
          <text class="val" x="242.8" y="139.6" text-anchor="middle">9</text>
          <text class="val" x="94.7" y="180.8" text-anchor="middle">4</text>
          <text class="val" x="254.6" y="179.5" text-anchor="middle">x</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC]',
      'K ∈ [AH]',
      '|AB| = 7 cm',
      '|AC| = 9 cm',
      '|KB| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |KC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√3' },
      { key: 'B', text: '3√3' },
      { key: 'C', text: '4√3' },
      { key: 'D', text: '5√3' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'C',
    hint:
      'Pisagor bağıntısıyla |BH|² − |HC|² farkını iki ayrı yoldan yaz.',
    solution: [
      {
        title: 'A noktasından',
        detail:
          'ABH ve AHC dik üçgenlerinde |BH|² − |HC|² = |AB|² − |AC|² = 49 − 81 = −32 olur.',
      },
      {
        title: 'K noktasından',
        detail:
          'KBH ve KHC dik üçgenlerinde |BH|² − |HC|² = |KB|² − |KC|² = 16 − x² olur.',
      },
      {
        title: 'Eşitlik',
        detail:
          '16 − x² = −32 olduğundan x² = 48 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = √48 = 4√3 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 28
  {
    id: 'quadrilaterals-28',
    topic: 'İç ve dış açıortayın kesişimi',
    figure: {
      viewBox: '0 0 400 289',
      caption: 'Şekil 28',
      label:
        'ABCD dörtgeninde [AB] kenarı B’den K noktasına uzatılmış; [DE], ADC açısının, [BL] ise CBK açısının açıortayı ve E, B, L doğrusal; m(DAB) = 70°, m(BCD) = 130° ve E köşesindeki açı x ile gösterilmiş.',
      svg: `
          <path class="ln" d="M50.0,162.1 L277.3,162.1 L215.4,54.9 L96.6,34.0 Z"/>
          <path class="ln" d="M277.3,162.1 L350.0,162.1"/>
          <path class="ln" d="M223.9,254.5 L313.6,99.2"/>
          <path class="ln" d="M96.6,34.0 L223.9,254.5"/>
          <path class="arc" d="M76.0,162.1 A26,26 0 0 0 58.9,137.7"/>
          <text class="val" x="84.4" y="143.0" text-anchor="middle">70°</text>
          <path class="arc" d="M195.7,51.5 A20,20 0 0 0 225.4,72.3"/>
          <text class="val" x="193.6" y="91.1" text-anchor="middle">130°</text>
          <path class="arc" d="M88.4,56.6 A24,24 0 0 0 108.6,54.8"/>
          <path class="tick" d="M98.4,53.9 L99.1,61.9"/>
          <path class="arc" d="M108.6,54.8 A24,24 0 0 0 120.3,38.2"/>
          <path class="tick" d="M113.0,45.5 L119.6,50.1"/>
          <path class="arc" d="M299.3,162.1 A22,22 0 0 0 288.3,143.1"/>
          <path class="tick" d="M293.8,155.0 L301.1,151.8"/>
          <path class="tick" d="M291.7,151.4 L298.2,146.7"/>
          <path class="arc" d="M288.3,143.1 A22,22 0 0 0 266.3,143.1"/>
          <path class="tick" d="M279.3,144.3 L280.2,136.3"/>
          <path class="tick" d="M275.2,144.3 L274.3,136.3"/>
          <path class="arc" d="M235.9,233.7 A24,24 0 0 0 211.9,233.7"/>
          <text class="val" x="223.9" y="221.5" text-anchor="middle">x</text>
          <circle class="pt" cx="50.0" cy="162.1" r="3.2"/>
          <circle class="pt" cx="277.3" cy="162.1" r="3.2"/>
          <circle class="pt" cx="215.4" cy="54.9" r="3.2"/>
          <circle class="pt" cx="96.6" cy="34.0" r="3.2"/>
          <circle class="pt" cx="223.9" cy="254.5" r="3.2"/>
          <text x="38.0" y="179.7" text-anchor="end">A</text>
          <text x="282.4" y="187.0" text-anchor="middle">B</text>
          <text x="223.9" y="45.7">C</text>
          <text x="90.8" y="23.5" text-anchor="middle">D</text>
          <text x="223.9" y="280.0" text-anchor="middle">E</text>
          <text x="360.0" y="167.6">K</text>
          <text x="319.6" y="94.3">L</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'A, B, K doğrusal',
      '[DE], ADC açısının açıortayı',
      '[BL], CBK açısının açıortayı',
      'E, B, L doğrusal',
      'm(DAB) = 70°',
      'm(BCD) = 130°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DEB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'D',
    hint:
      'D’deki iç açının yarısını a, B’deki dış açının yarısını b diye adlandır ve iç açılar toplamından a ile b arasındaki farkı bul.',
    solution: [
      {
        title: 'Adlandırma',
        detail:
          'm(ADE) = m(EDC) = a ve m(KBL) = m(LBC) = b olsun; m(ABC) = 180 − 2b olur.',
      },
      {
        title: 'İç açılar toplamı',
        detail:
          '70 + (180 − 2b) + 130 + 2a = 360 olduğundan b − a = 10 olur.',
      },
      {
        title: 'Ters açı',
        detail:
          '[DE], [AB]’yi F noktasında kessin. ADF üçgeninde m(AFD) = 180 − 70 − a = 110 − a olur. E, B, L doğrusal olduğundan m(ABE) = m(KBL) = b olur (ters açılar).',
      },
      {
        title: 'FBE üçgeni',
        detail:
          'm(BFE) = m(AFD) = 110 − a olduğundan x = 180 − b − (110 − a) = 70 − (b − a) olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 70 − 10 = 60° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 29
  {
    id: 'quadrilaterals-29',
    topic: 'Köşegen oranlarıyla alan',
    figure: {
      viewBox: '0 0 400 316',
      caption: 'Şekil 29',
      label:
        'ABCD dörtgeninde [AC] ve [BD] köşegenleri E noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M150.2,34.0 L74.5,76.6 L60.0,281.8 L340.0,173.2 Z"/>
          <path class="ln" d="M150.2,34.0 L60.0,281.8"/>
          <path class="ln" d="M74.5,76.6 L340.0,173.2"/>
          <circle class="pt" cx="150.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="74.5" cy="76.6" r="3.2"/>
          <circle class="pt" cx="60.0" cy="281.8" r="3.2"/>
          <circle class="pt" cx="340.0" cy="173.2" r="3.2"/>
          <circle class="pt" cx="127.6" cy="95.9" r="3.2"/>
          <text x="149.2" y="22.5" text-anchor="middle">A</text>
          <text x="61.2" y="71.5" text-anchor="end">B</text>
          <text x="50.4" y="301.3" text-anchor="end">C</text>
          <text x="356.8" y="181.6">D</text>
          <text x="120.0" y="85.1" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AC] ∩ [BD] = {E}',
      '|AE| / |EC| = 1 / 3',
      '|BE| / |ED| = 1 / 4',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) / A(ABE) oranı kaçtır?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '18' },
      { key: 'C', text: '20' },
      { key: 'D', text: '24' },
      { key: 'E', text: '30' },
    ],
    answer: 'C',
    hint:
      'Aynı yükseklikteki üçgenlerin alanları tabanlarıyla orantılıdır; A(ABE) = S diyerek başla.',
    solution: [
      {
        title: 'ABE ve AED',
        detail:
          'A(ABE) = S olsun. Bu iki üçgenin A’dan yüksekliği ortak ve |BE| / |ED| = 1 / 4 olduğundan A(AED) = 4S olur.',
      },
      {
        title: 'ABE ve CBE',
        detail:
          'B’den yükseklik ortak ve |AE| / |EC| = 1 / 3 olduğundan A(CBE) = 3S olur.',
      },
      {
        title: 'CED',
        detail:
          'AED ve CED üçgenlerinde D’den yükseklik ortak olduğundan A(CED) = 3 · 4S = 12S olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = S + 4S + 3S + 12S = 20S olduğundan oran 20 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 30
  {
    id: 'quadrilaterals-30',
    topic: 'Kenar ve köşegen orta noktaları',
    figure: {
      viewBox: '0 0 400 288',
      caption: 'Şekil 30',
      label:
        'ABCD dörtgeninde [AC] ve [BD] köşegenleri çizilmiş; G ve H sırasıyla [AB] ve [BC] kenarlarının, E ve F sırasıyla [AC] ve [BD] köşegenlerinin orta noktaları ve GHEF dörtgeni çizilmiş.',
      svg: `
          <path class="ln" d="M187.9,34.0 L60.0,106.1 L187.9,254.2 L340.0,112.9 Z"/>
          <path class="ln" d="M187.9,34.0 L187.9,254.2"/>
          <path class="ln" d="M60.0,106.1 L340.0,112.9"/>
          <path class="ln" d="M124.0,70.0 L124.0,180.1 L187.9,144.1 L200.0,109.5 Z"/>
          <circle class="pt" cx="187.9" cy="34.0" r="3.2"/>
          <circle class="pt" cx="60.0" cy="106.1" r="3.2"/>
          <circle class="pt" cx="187.9" cy="254.2" r="3.2"/>
          <circle class="pt" cx="340.0" cy="112.9" r="3.2"/>
          <circle class="pt" cx="187.9" cy="144.1" r="3.2"/>
          <circle class="pt" cx="200.0" cy="109.5" r="3.2"/>
          <circle class="pt" cx="124.0" cy="70.0" r="3.2"/>
          <circle class="pt" cx="124.0" cy="180.1" r="3.2"/>
          <text x="186.8" y="22.5" text-anchor="middle">A</text>
          <text x="43.2" y="109.0" text-anchor="end">B</text>
          <text x="187.1" y="276.7" text-anchor="middle">C</text>
          <text x="356.9" y="116.7">D</text>
          <text x="116.6" y="62.5" text-anchor="end">G</text>
          <text x="112.6" y="195.4" text-anchor="end">H</text>
          <text x="201.1" y="154.4">E</text>
          <text x="207.0" y="102.8">F</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'G ve H bulundukları kenarların, E ve F bulundukları köşegenlerin orta noktaları',
      '|AB| = 12 cm',
      '|AC| = 18 cm',
      '|AD| = 14 cm',
      'Çevre(GHEF) = 25 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |EF| kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '5' },
      { key: 'C', text: '4' },
      { key: 'D', text: '3' },
      { key: 'E', text: '2' },
    ],
    answer: 'D',
    hint:
      'GHEF’in her kenarı, köşeleri ABCD’nin köşelerinden oluşan bir üçgenin orta tabanıdır.',
    solution: [
      {
        title: 'GH',
        detail:
          'ABC üçgeninde G ve H orta noktalar olduğundan |GH| = |AC| / 2 = 9 cm olur.',
      },
      {
        title: 'HE',
        detail:
          'ABC üçgeninde H ve E orta noktalar olduğundan |HE| = |AB| / 2 = 6 cm olur.',
      },
      {
        title: 'FG',
        detail:
          'ABD üçgeninde G ve F orta noktalar olduğundan |FG| = |AD| / 2 = 7 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '9 + 6 + |EF| + 7 = 25 olduğundan |EF| = 3 cm bulunur.',
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
    {
      id: 'quadrilaterals-m3',
      order: 3,
      title: 'Açıortaylar, orta noktalar ve alan oranları',
      summary:
        'İki açıortay arasındaki açı, köşegen parçalarıyla alan, dik köşegenler ve kenar orta noktalarının kestiği bölgeler.',
      questions: pick(
        'quadrilaterals-13',
        'quadrilaterals-14',
        'quadrilaterals-15',
        'quadrilaterals-16',
        'quadrilaterals-17',
        'quadrilaterals-18',
      ),
    },
    {
      id: 'quadrilaterals-m4',
      order: 4,
      title: 'Köşegenler, açıortaylar ve dik açılar',
      summary:
        'Köşegenlerle alan, açıortayların oluşturduğu açılar, orta noktalar dörtgeni, bütünler açılar ve iç açıortaylarla alan.',
      questions: pick(
        'quadrilaterals-19',
        'quadrilaterals-20',
        'quadrilaterals-21',
        'quadrilaterals-22',
        'quadrilaterals-23',
        'quadrilaterals-24',
      ),
    },
    {
      id: 'quadrilaterals-m5',
      order: 5,
      title: 'Açıortaylar, orta noktalar ve köşegen oranları',
      summary:
        'İçbükey dörtgende açıortaylar, orta noktaların oluşturduğu dörtgenler, dik kesişen doğrularla uzunluk ve köşegen oranlarıyla alan.',
      questions: pick(
        'quadrilaterals-25',
        'quadrilaterals-26',
        'quadrilaterals-27',
        'quadrilaterals-28',
        'quadrilaterals-29',
        'quadrilaterals-30',
      ),
    },
  ],
};
