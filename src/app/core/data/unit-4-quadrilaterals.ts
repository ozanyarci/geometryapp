import { Question, Unit } from '../models';

/**
 * Unit 4 — Quadrilaterals.
 * Original questions written in the style of the "Genel Dörtgenler — Çözümlü
 * Test" source: interior angle sums, angle bisectors, quadrilaterals with
 * perpendicular diagonals or two right angles, and areas from the diagonals;
 * modules 6 and 7 follow the "Paralelkenar ve Eşkenar Dörtgen — Çözümlü Test" source.
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
  // ---------------------------------------------------------------- 31
  {
    id: 'quadrilaterals-31',
    topic: 'Paralelkenarda açılar',
    figure: {
      viewBox: '0 0 400 318',
      caption: 'Şekil 31',
      label:
        'ABCD paralelkenarında [BC] üzerindeki K noktasından çizilen doğru [AB] kenarını E noktasında, [DA] kenarının A’dan uzantısını F noktasında kesiyor; m(DAB) = 65°, m(FKB) = 20° ve m(AEF) α ile gösterilmiş.',
      svg: `
          <path class="ln" d="M136.3,169.5 L253.8,169.5 L317.0,34.0 L199.5,34.0 Z"/>
          <path class="ln" d="M199.5,34.0 L83.0,284.0"/>
          <path class="ln" d="M303.1,63.8 L83.0,284.0"/>
          <path class="arc" d="M147.3,146.0 A26,26 0 0 1 162.3,169.5"/>
          <text class="val" x="170.1" y="153.6" text-anchor="middle">65°</text>
          <path class="arc" d="M286.2,100.1 A40,40 0 0 1 274.9,92.1"/>
          <text class="val" x="266.4" y="121.7" text-anchor="middle">20°</text>
          <path class="arc" d="M181.9,185.1 A22,22 0 0 1 175.4,169.5"/>
          <text class="val" x="164.2" y="188.8" text-anchor="middle">α</text>
          <circle class="pt" cx="136.3" cy="169.5" r="3.2"/>
          <circle class="pt" cx="253.8" cy="169.5" r="3.2"/>
          <circle class="pt" cx="317.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="199.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="303.1" cy="63.8" r="3.2"/>
          <circle class="pt" cx="197.4" cy="169.5" r="3.2"/>
          <circle class="pt" cx="83.0" cy="284.0" r="3.2"/>
          <text x="124.3" y="175.0" text-anchor="end">A</text>
          <text x="261.8" y="189.5">B</text>
          <text x="325.0" y="26.0">C</text>
          <text x="191.5" y="26.0" text-anchor="end">D</text>
          <text x="315.1" y="69.3">K</text>
          <text x="205.4" y="189.5">E</text>
          <text x="71.0" y="289.5" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DA ∩ [KE = {F}',
      'm(DAB) = 65°',
      'm(FKB) = 20°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AEF) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '35' },
      { key: 'B', text: '40' },
      { key: 'C', text: '45' },
      { key: 'D', text: '50' },
      { key: 'E', text: '55' },
    ],
    answer: 'C',
    hint: 'Paralelkenarda ardışık iki açı bütünlerdir; önce B köşesindeki açıyı bul.',
    solution: [
      {
        title: 'B köşesindeki açı',
        detail:
          'Paralelkenarda ardışık açılar bütünler olduğundan m(ABC) = 180 − 65 = 115° olur.',
      },
      {
        title: 'EBK üçgeni',
        detail:
          'EBK üçgeninde m(EBK) = 115° ve m(BKE) = 20° olduğundan m(BEK) = 180 − 115 − 20 = 45° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'AEF ve BEK ters açılar olduğundan α = m(BEK) = 45° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 32
  {
    id: 'quadrilaterals-32',
    topic: 'Eşkenar dörtgende köşegenler ve alan',
    figure: {
      viewBox: '0 0 400 248',
      caption: 'Şekil 32',
      label:
        'ABCD eşkenar dörtgeninde [AC] köşegeni üzerinde bir E noktası alınmış ve B ile birleştirilmiş; |EC| = 18 ve |EB| = 10 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M50.0,124.0 L200.0,214.0 L350.0,124.0 L200.0,34.0 Z"/>
          <path class="ln" d="M50.0,124.0 L350.0,124.0"/>
          <path class="ln" d="M80.0,124.0 L200.0,214.0"/>
          <text class="val" x="215.0" y="115.5" text-anchor="middle">18</text>
          <text class="val" x="131.6" y="185.7" text-anchor="middle">10</text>
          <circle class="pt" cx="50.0" cy="124.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="214.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="124.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="124.0" r="3.2"/>
          <text x="38.0" y="129.5" text-anchor="end">A</text>
          <text x="200.0" y="236.0" text-anchor="middle">B</text>
          <text x="362.0" y="129.5">C</text>
          <text x="200.0" y="24.0" text-anchor="middle">D</text>
          <text x="88.0" y="116.0">E</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[AC] köşegen',
      '|AE| = 2 cm',
      '|EC| = 18 cm',
      '|EB| = 10 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, Alan(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '108' },
      { key: 'C', text: '112' },
      { key: 'D', text: '120' },
      { key: 'E', text: '128' },
    ],
    answer: 'D',
    hint: 'Eşkenar dörtgenin köşegenleri birbirini dik ortalar; köşegenlerin kesim noktasını düşün.',
    solution: [
      {
        title: 'AC köşegeni',
        detail:
          '|AC| = 2 + 18 = 20 cm olduğundan köşegenlerin kesim noktası O için |AO| = 10 cm olur.',
      },
      {
        title: 'EO uzunluğu',
        detail:
          '|EO| = |AO| − |AE| = 10 − 2 = 8 cm olur.',
      },
      {
        title: 'EOB dik üçgeni',
        detail:
          'Köşegenler dik kesiştiğinden |OB|² = 10² − 8² = 36 ⇒ |OB| = 6 cm ve |BD| = 12 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Alan(ABCD) = |AC| · |BD| / 2 = 20 · 12 / 2 = 120 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 33
  {
    id: 'quadrilaterals-33',
    topic: 'Paralelkenarda açıortay',
    figure: {
      viewBox: '0 0 400 194',
      caption: 'Şekil 33',
      label:
        'ABCD paralelkenarında A köşesinin açıortayı [DC] kenarını E noktasında kesiyor; [AB] kenarına paralel [FG] doğru parçası F noktasında [AE] ile, G noktasında [BC] ile birleşiyor; |GC| = 3, |GB| = 4, |AB| = 11 ve |FG| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M50.0,159.4 L277.6,159.4 L350.0,34.0 L122.4,34.0 Z"/>
          <path class="ln" d="M50.0,159.4 L267.2,34.0"/>
          <path class="ln" d="M174.1,87.8 L319.0,87.8"/>
          <path class="arc" d="M74.2,145.4 A28,28 0 0 1 78.0,159.4"/>
          <path class="arc" d="M64.0,135.2 A28,28 0 0 1 74.2,145.4"/>
          <text class="val" x="310.4" y="136.1" text-anchor="middle">4</text>
          <text class="val" x="346.6" y="73.4" text-anchor="middle">3</text>
          <text class="val" x="163.8" y="176.9" text-anchor="middle">11</text>
          <text class="val" x="246.6" y="105.3" text-anchor="middle">x</text>
          <circle class="pt" cx="50.0" cy="159.4" r="3.2"/>
          <circle class="pt" cx="277.6" cy="159.4" r="3.2"/>
          <circle class="pt" cx="350.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="122.4" cy="34.0" r="3.2"/>
          <circle class="pt" cx="267.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="174.1" cy="87.8" r="3.2"/>
          <circle class="pt" cx="319.0" cy="87.8" r="3.2"/>
          <text x="38.0" y="164.9" text-anchor="end">A</text>
          <text x="285.6" y="179.4">B</text>
          <text x="358.0" y="26.0">C</text>
          <text x="114.4" y="26.0" text-anchor="end">D</text>
          <text x="267.2" y="24.0" text-anchor="middle">E</text>
          <text x="331.0" y="93.3">G</text>
          <text x="166.1" y="79.8" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[AE] açıortay',
      '[FG] // [AB]',
      '|GC| = 3 cm',
      '|GB| = 4 cm',
      '|AB| = 11 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |FG| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: '[FG] doğrusunu [AD] kenarına kadar uzat; açıortay ile paralel doğru ikizkenar üçgen oluşturur.',
    solution: [
      {
        title: 'Uzatma',
        detail:
          '[GF] doğrusu [AD] kenarını H noktasında kessin. ABGH bir paralelkenar olduğundan |HG| = |AB| = 11 cm ve |AH| = |BG| = 4 cm olur.',
      },
      {
        title: 'İkizkenar üçgen',
        detail:
          '[HF] // [AB] olduğundan m(HFA) = m(FAB) = m(HAF) olur; AHF üçgeni ikizkenardır ve |HF| = |AH| = 4 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |HG| − |HF| = 11 − 4 = 7 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  {
    id: 'quadrilaterals-34',
    topic: 'Paralelkenarda iç açıortaylar',
    figure: {
      viewBox: '0 0 400 195',
      caption: 'Şekil 34',
      label:
        'ABCD paralelkenarında D ve C köşelerinin açıortayları [AB] kenarı üzerindeki T noktasında kesişiyor; |AD| = 5 ve |DT| = 8 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M86.8,160.3 L350.0,160.3 L313.2,34.0 L50.0,34.0 Z"/>
          <path class="ln" d="M50.0,34.0 L218.4,160.3 L313.2,34.0"/>
          <path class="arc" d="M70.8,49.6 A26,26 0 0 1 57.3,59.0"/>
          <path class="arc" d="M76.0,34.0 A26,26 0 0 1 70.8,49.6"/>
          <path class="arc" d="M297.6,54.8 A26,26 0 0 1 287.2,34.0"/>
          <path class="arc" d="M320.4,59.0 A26,26 0 0 1 297.6,54.8"/>
          <text class="val" x="55.0" y="106.6" text-anchor="middle">5</text>
          <text class="val" x="141.4" y="93.1" text-anchor="middle">8</text>
          <circle class="pt" cx="86.8" cy="160.3" r="3.2"/>
          <circle class="pt" cx="350.0" cy="160.3" r="3.2"/>
          <circle class="pt" cx="313.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="218.4" cy="160.3" r="3.2"/>
          <text x="78.8" y="180.3" text-anchor="end">A</text>
          <text x="358.0" y="180.3">B</text>
          <text x="321.2" y="26.0">C</text>
          <text x="42.0" y="26.0" text-anchor="end">D</text>
          <text x="218.4" y="182.3" text-anchor="middle">T</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[DT] ve [CT] açıortay',
      '|AD| = 5 cm',
      '|DT| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |TC| kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '4√3' },
    ],
    answer: 'B',
    hint: 'Ardışık iki açının açıortayları dik kesişir; ayrıca her açıortay bir ikizkenar üçgen ayırır.',
    solution: [
      {
        title: 'İkizkenar üçgenler',
        detail:
          '[DC] // [AB] olduğundan m(ATD) = m(TDC) = m(ADT) olur, yani |AT| = |AD| = 5 cm. Aynı şekilde |TB| = |BC| = 5 cm olur.',
      },
      {
        title: 'DC kenarı',
        detail:
          '|DC| = |AB| = 5 + 5 = 10 cm olur.',
      },
      {
        title: 'Dik açı',
        detail:
          'm(D) + m(C) = 180° olduğundan yarılarının toplamı 90° olur; DTC üçgeninde m(DTC) = 90° dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Pisagor bağıntısıyla |TC|² = 10² − 8² = 36 ⇒ |TC| = 6 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 35
  {
    id: 'quadrilaterals-35',
    topic: 'Paralelkenarda benzerlik',
    figure: {
      viewBox: '0 0 400 272',
      caption: 'Şekil 35',
      label:
        'ABCD paralelkenarında D noktasından çizilen doğru [BC] kenarını F noktasında kesiyor; [DF] doğru parçasının orta noktası E, A ile birleştirilmiş; |DE| = |EF|, |BF| = 3 ve |FC| = 5 olarak işaretlenmiş, AED ve DCB açıları yay ile gösterilmiş.',
      svg: `
          <path class="ln" d="M50.0,237.1 L288.7,237.1 L350.0,34.0 L111.3,34.0 Z"/>
          <path class="ln" d="M111.3,34.0 L311.7,161.0"/>
          <path class="ln" d="M50.0,237.1 L211.5,97.5"/>
          <path class="arc" d="M196.4,110.6 A20,20 0 0 1 194.6,86.8"/>
          <path class="arc" d="M344.2,53.1 A20,20 0 0 1 330.0,34.0"/>
          <path class="tick" d="M165.1,59.8 L157.6,71.7"/>
          <path class="tick" d="M265.3,123.3 L257.8,135.1"/>
          <text class="val" x="311.7" y="208.0" text-anchor="middle">3</text>
          <text class="val" x="342.3" y="106.4" text-anchor="middle">5</text>
          <circle class="pt" cx="50.0" cy="237.1" r="3.2"/>
          <circle class="pt" cx="288.7" cy="237.1" r="3.2"/>
          <circle class="pt" cx="350.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="111.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="211.5" cy="97.5" r="3.2"/>
          <circle class="pt" cx="311.7" cy="161.0" r="3.2"/>
          <text x="42.0" y="257.1" text-anchor="end">A</text>
          <text x="296.7" y="257.1">B</text>
          <text x="358.0" y="26.0">C</text>
          <text x="103.3" y="26.0" text-anchor="end">D</text>
          <text x="211.5" y="87.5" text-anchor="middle">E</text>
          <text x="323.7" y="166.5">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'D, E, F doğrusal',
      '|DE| = |EF|',
      '|BF| = 3 cm',
      '|FC| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde m(AED) = m(DCB) olduğuna göre, |DF| kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '2√5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '4√5' },
      { key: 'E', text: '10' },
    ],
    answer: 'D',
    hint: '[AD] // [BC] olduğundan ADE ve DFC açıları iç ters açılardır; iki üçgenin benzerliğini ara.',
    solution: [
      {
        title: 'Kenar',
        detail:
          '|AD| = |BC| = 3 + 5 = 8 cm olur.',
      },
      {
        title: 'Benzerlik',
        detail:
          'm(ADE) = m(DFC) (iç ters açılar) ve m(AED) = m(DCF) olduğundan ADE ve DFC üçgenleri benzerdir.',
      },
      {
        title: 'Oran',
        detail:
          '|DE| = x dersek |DF| = 2x olur; |AD| / |DF| = |DE| / |FC| ⇒ 8 / 2x = x / 5 ⇒ x² = 20 ⇒ x = 2√5 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|DF| = 2x = 4√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 36
  {
    id: 'quadrilaterals-36',
    topic: 'Paralelkenarda köşegen ve alan',
    figure: {
      viewBox: '0 0 400 293',
      caption: 'Şekil 36',
      label:
        'ABCD paralelkenarında [BD] köşegeni çizilmiş; [DC] üzerindeki E noktasından [DC] kenarına dik çizilen doğru [AB] kenarını F noktasında, [BD] köşegenini K noktasında kesiyor; BCK üçgeni taralı gösterilmiş.',
      svg: `
          <path class="shade" d="M275.0,259.0 L350.0,34.0 L175.0,109.0 Z"/>
          <path class="ln" d="M50.0,259.0 L275.0,259.0 L350.0,34.0 L125.0,34.0 Z"/>
          <path class="ln" d="M275.0,259.0 L125.0,34.0"/>
          <path class="ln" d="M175.0,34.0 L175.0,259.0"/>
          <path class="ln" d="M175.0,109.0 L350.0,34.0"/>
          <path class="ln" d="M175.0,44.0 L185.0,44.0 L185.0,34.0"/>
          <circle class="pt" cx="50.0" cy="259.0" r="3.2"/>
          <circle class="pt" cx="275.0" cy="259.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="125.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="175.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="175.0" cy="259.0" r="3.2"/>
          <circle class="pt" cx="175.0" cy="109.0" r="3.2"/>
          <text x="42.0" y="279.0" text-anchor="end">A</text>
          <text x="283.0" y="279.0">B</text>
          <text x="358.0" y="26.0">C</text>
          <text x="117.0" y="26.0" text-anchor="end">D</text>
          <text x="175.0" y="24.0" text-anchor="middle">E</text>
          <text x="175.0" y="281.0" text-anchor="middle">F</text>
          <text x="163.0" y="114.5" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DB] ∩ [EF] = {K}',
      '[FE] ⊥ [DC]',
      'A(BCK) = 27 cm²',
      '|AB| = 9 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde [BD] köşegen olduğuna göre, |KF| kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '7' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: 'A ve C noktaları [BD] köşegenine eşit uzaklıktadır; BCK üçgeninin alanını başka bir üçgenle karşılaştır.',
    solution: [
      {
        title: 'Eşit alanlar',
        detail:
          'Paralelkenarda A ve C köşeleri [BD] köşegenine eşit uzaklıkta olduğundan [BK] tabanlı BCK ve BAK üçgenlerinin alanları eşittir: A(BAK) = 27 cm².',
      },
      {
        title: 'Yükseklik',
        detail:
          '[EF] ⊥ [DC] ve [DC] // [AB] olduğundan [KF] ⊥ [AB] olur; [KF], BAK üçgeninin [AB] tabanına ait yüksekliğidir.',
      },
      {
        title: 'Sonuç',
        detail:
          '9 · |KF| / 2 = 27 ⇒ |KF| = 6 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 37
  {
    id: 'quadrilaterals-37',
    topic: 'Paralelkenarda alan ve dikme',
    figure: {
      viewBox: '0 0 400 254',
      caption: 'Şekil 37',
      label:
        'ABCD paralelkenarında [AB] kenarı üzerindeki E noktası C ile birleştirilmiş; D noktasından [EC] doğru parçasına inen dikme F noktasında; |EF| = 2 ve |FC| = 6 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,220.2 L330.9,220.2 L360.0,34.0 L69.1,34.0 Z"/>
          <path class="ln" d="M220.4,220.2 L360.0,34.0"/>
          <path class="ln" d="M69.1,34.0 L255.3,173.6"/>
          <path class="ln" d="M248.1,168.2 L253.5,161.0 L260.7,166.4"/>
          <text class="val" x="227.4" y="194.6" text-anchor="middle">2</text>
          <text class="val" x="297.2" y="101.5" text-anchor="middle">6</text>
          <circle class="pt" cx="40.0" cy="220.2" r="3.2"/>
          <circle class="pt" cx="330.9" cy="220.2" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="69.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="220.4" cy="220.2" r="3.2"/>
          <circle class="pt" cx="255.3" cy="173.6" r="3.2"/>
          <text x="29.2" y="231.7" text-anchor="end">A</text>
          <text x="340.7" y="233.8">B</text>
          <text x="368.6" y="29.6">C</text>
          <text x="60.7" y="29.4" text-anchor="end">D</text>
          <text x="222.1" y="241.6" text-anchor="middle">E</text>
          <text x="265.3" y="186.8">F</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[DF] ⊥ [EC]',
      '|EF| = 2 cm',
      '|FC| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki ABCD paralelkenarının alanı 64 cm² olduğuna göre, |AB| kaç cm dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '6√2' },
      { key: 'D', text: '10' },
      { key: 'E', text: '4√7' },
    ],
    answer: 'D',
    hint: 'Tabanı [DC] olan ve üçüncü köşesi karşı kenarda bulunan üçgenin alanı paralelkenarın alanının yarısıdır.',
    solution: [
      {
        title: 'DEC üçgeninin alanı',
        detail:
          'E noktası [AB] üzerinde olduğundan A(DEC) = A(ABCD) / 2 = 64 / 2 = 32 cm² olur.',
      },
      {
        title: 'DF yüksekliği',
        detail:
          '|EC| = 2 + 6 = 8 cm ve [DF] ⊥ [EC] olduğundan 8 · |DF| / 2 = 32 ⇒ |DF| = 8 cm olur.',
      },
      {
        title: 'DFC dik üçgeni',
        detail:
          '|DC|² = |DF|² + |FC|² = 8² + 6² = 100 ⇒ |DC| = 10 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Paralelkenarda karşılıklı kenarlar eşit olduğundan |AB| = |DC| = 10 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 38
  {
    id: 'quadrilaterals-38',
    topic: 'Paralelkenarda benzerlik ve alan',
    figure: {
      viewBox: '0 0 400 265',
      caption: 'Şekil 38',
      label:
        'ABCD paralelkenarında [AB] kenarı üzerindeki E noktası D ve C ile birleştirilmiş; [DB] köşegeni ile [EC] doğru parçası F noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M40.0,230.9 L286.2,230.9 L360.0,34.0 L113.8,34.0 Z"/>
          <path class="ln" d="M113.8,34.0 L138.5,230.9 L360.0,34.0"/>
          <path class="ln" d="M113.8,34.0 L286.2,230.9"/>
          <circle class="pt" cx="40.0" cy="230.9" r="3.2"/>
          <circle class="pt" cx="286.2" cy="230.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="113.8" cy="34.0" r="3.2"/>
          <circle class="pt" cx="138.5" cy="230.9" r="3.2"/>
          <circle class="pt" cx="221.5" cy="157.1" r="3.2"/>
          <text x="29.7" y="243.7" text-anchor="end">A</text>
          <text x="294.4" y="246.7">B</text>
          <text x="369.0" y="30.2">C</text>
          <text x="109.0" y="26.2" text-anchor="end">D</text>
          <text x="133.3" y="249.5" text-anchor="end">E</text>
          <text x="221.5" y="181.1" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DB] ∩ [EC] = {F}',
      'A(ADE) = 16 cm²',
      'A(DFC) = 25 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '72' },
      { key: 'C', text: '80' },
      { key: 'D', text: '90' },
      { key: 'E', text: '96' },
    ],
    answer: 'C',
    hint: 'FEB ve FCD üçgenleri benzerdir; |EB| / |AB| oranına k deyip alanları k ile yaz.',
    solution: [
      {
        title: 'Benzerlik',
        detail:
          '[EB] // [DC] olduğundan FEB ve FCD üçgenleri benzerdir. |EB| = k · |AB| dersek benzerlik oranı k olur.',
      },
      {
        title: 'BFC üçgeni',
        detail:
          '|BF| / |FD| = k olduğundan A(BFC) = k · A(DFC) = 25k olur; böylece A(DBC) = 25 + 25k ve A(ABCD) = 2(25 + 25k) olur.',
      },
      {
        title: 'ADE üçgeni',
        detail:
          '|AE| = (1 − k) · |AB| olduğundan A(ADE) = (1 − k) · A(ABCD) / 2 = (1 − k)(25 + 25k) = 25(1 − k²) olur.',
      },
      {
        title: 'k değeri',
        detail:
          '25(1 − k²) = 16 ⇒ k² = 9/25 ⇒ k = 3/5 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = 2(25 + 25 · 3/5) = 2 · 40 = 80 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39
  {
    id: 'quadrilaterals-39',
    topic: 'Paralelkenarda alan oranı',
    figure: {
      viewBox: '0 0 400 248',
      caption: 'Şekil 39',
      label:
        'ABCD paralelkenarında [DC] kenarı üzerindeki E noktası A ile birleştirilmiş; [AE] ile [BD] köşegeni F noktasında kesişiyor; DEF üçgeni taralı ve alanı S.',
      svg: `
          <path class="shade" d="M120.0,34.0 L280.0,34.0 L184.0,106.0 Z"/>
          <path class="ln" d="M40.0,214.0 L280.0,214.0 L360.0,34.0 L120.0,34.0 Z"/>
          <path class="ln" d="M40.0,214.0 L280.0,34.0"/>
          <path class="ln" d="M120.0,34.0 L280.0,214.0"/>
          <circle class="pt" cx="40.0" cy="214.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="214.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="120.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="184.0" cy="106.0" r="3.2"/>
          <text x="30.5" y="228.1" text-anchor="end">A</text>
          <text x="284.6" y="233.0">B</text>
          <text x="370.4" y="32.6">C</text>
          <text x="111.5" y="29.5" text-anchor="end">D</text>
          <text x="287.1" y="28.0">E</text>
          <text x="184.0" y="132.0" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '|DE| = 2|EC|',
      '[AE] ∩ [BD] = {F}',
      'A(DEF) = S',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABCD paralelkenarının alanı kaç S dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '13/2' },
      { key: 'C', text: '7' },
      { key: 'D', text: '15/2' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: 'FDE ve FBA üçgenleri benzerdir; |DE| / |AB| oranını bul.',
    solution: [
      {
        title: 'Oran',
        detail:
          '|DE| = 2|EC| olduğundan |DE| = 2k, |DC| = |AB| = 3k olur.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[DE] // [AB] olduğundan FDE ve FBA üçgenleri benzerdir ve oran 2/3 tür; yani |DF| / |FB| = 2/3 olur.',
      },
      {
        title: 'Alanlar',
        detail:
          'A(DEF) = S ise |EF| / |FA| = 2/3 olduğundan A(DFA) = 3S/2, alan oranı 4/9 olduğundan A(ABF) = 9S/4 olur.',
      },
      {
        title: 'Yarım paralelkenar',
        detail:
          'A(ABD) = A(DFA) + A(ABF) = 3S/2 + 9S/4 = 15S/4 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = 2 · 15S/4 = 15S/2 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'quadrilaterals-40',
    topic: 'Eşkenar dörtgende alan',
    figure: {
      viewBox: '0 0 400 260',
      caption: 'Şekil 40',
      label:
        'ABCD eşkenar dörtgeninde [DC] kenarı üzerindeki E noktasından [AB] kenarına dik [EH] çizilmiş; |DE| = 6, |EC| = 11 ve |AH| = 14 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,226.0 L257.6,226.0 L360.0,34.0 L142.4,34.0 Z"/>
          <path class="ln" d="M219.2,34.0 L219.2,226.0"/>
          <path class="ln" d="M219.2,217.0 L228.2,217.0 L228.2,226.0"/>
          <text class="val" x="180.8" y="26.5" text-anchor="middle">6</text>
          <text class="val" x="289.6" y="26.5" text-anchor="middle">11</text>
          <text class="val" x="129.6" y="218.5" text-anchor="middle">14</text>
          <circle class="pt" cx="40.0" cy="226.0" r="3.2"/>
          <circle class="pt" cx="257.6" cy="226.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="142.4" cy="34.0" r="3.2"/>
          <circle class="pt" cx="219.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="219.2" cy="226.0" r="3.2"/>
          <text x="30.1" y="239.5" text-anchor="end">A</text>
          <text x="261.1" y="245.6">B</text>
          <text x="369.6" y="31.0">C</text>
          <text x="137.5" y="26.2" text-anchor="end">D</text>
          <text x="219.2" y="24.0" text-anchor="middle">E</text>
          <text x="219.2" y="248.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[EH] ⊥ [AB]',
      '|DE| = 6 cm',
      '|EC| = 11 cm',
      '|AH| = 14 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '204' },
      { key: 'B', text: '221' },
      { key: 'C', text: '238' },
      { key: 'D', text: '255' },
      { key: 'E', text: '272' },
    ],
    answer: 'D',
    hint: 'D noktasından [AB] kenarına bir dikme indir; oluşan dik üçgenin hipotenüsü eşkenar dörtgenin kenarıdır.',
    solution: [
      {
        title: 'Kenar',
        detail:
          '|DC| = 6 + 11 = 17 cm olduğundan eşkenar dörtgenin bütün kenarları 17 cm dir: |AD| = 17 cm.',
      },
      {
        title: 'Dikme',
        detail:
          'D noktasından [AB] kenarına inen dikmenin ayağı K olsun. DEHK dikdörtgen olduğundan |KH| = |DE| = 6 cm ve |AK| = 14 − 6 = 8 cm olur.',
      },
      {
        title: 'Yükseklik',
        detail:
          'AKD dik üçgeninde |DK|² = 17² − 8² = 289 − 64 = 225 ⇒ |DK| = 15 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |AB| · |DK| = 17 · 15 = 255 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 41
  {
    id: 'quadrilaterals-41',
    topic: 'Üçgende eşkenar dörtgen ve benzerlik',
    figure: {
      viewBox: '0 0 400 223',
      caption: 'Şekil 41',
      label:
        'ABC üçgeninde D noktası [AB], E noktası [AC], F noktası [BC] üzerinde; DFCE bir eşkenar dörtgen; |AD| = 4 ve |DB| = 8 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M320.0,34.0 L40.0,188.9 L360.0,188.9 Z"/>
          <path class="ln" d="M226.7,85.6 L253.3,188.9"/>
          <path class="ln" d="M226.7,85.6 L333.3,85.6"/>
          <text class="val" x="267.0" y="53.9" text-anchor="middle">4</text>
          <text class="val" x="139.6" y="154.2" text-anchor="middle">8</text>
          <circle class="pt" cx="320.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="188.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="188.9" r="3.2"/>
          <circle class="pt" cx="226.7" cy="85.6" r="3.2"/>
          <circle class="pt" cx="333.3" cy="85.6" r="3.2"/>
          <circle class="pt" cx="253.3" cy="188.9" r="3.2"/>
          <text x="325.0" y="26.3">A</text>
          <text x="28.6" y="198.7" text-anchor="end">B</text>
          <text x="369.9" y="202.4">C</text>
          <text x="216.7" y="81.6" text-anchor="end">D</text>
          <text x="343.3" y="87.6">E</text>
          <text x="253.3" y="210.9" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'DFCE bir eşkenar dörtgen',
      '|AD| = 4 cm',
      '|DB| = 8 cm',
      'Ç(ABC) = 30 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, eşkenar dörtgenin bir kenarının uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '7/2' },
      { key: 'C', text: '4' },
      { key: 'D', text: '9/2' },
      { key: 'E', text: '5' },
    ],
    answer: 'C',
    hint: '[DE] // [BC] ve [DF] // [AC] olduğundan iki benzer üçgen çifti vardır.',
    solution: [
      {
        title: 'Kenar',
        detail:
          'Eşkenar dörtgenin bir kenarına x diyelim. |AB| = 4 + 8 = 12 cm olur.',
      },
      {
        title: 'ADE ∼ ABC',
        detail:
          '[DE] // [BC] olduğundan |DE| / |BC| = |AD| / |AB| ⇒ x / |BC| = 4/12 ⇒ |BC| = 3x olur.',
      },
      {
        title: 'BDF ∼ BAC',
        detail:
          '[DF] // [AC] olduğundan |DF| / |AC| = |BD| / |BA| ⇒ x / |AC| = 8/12 ⇒ |AC| = 3x/2 olur.',
      },
      {
        title: 'Çevre',
        detail:
          '12 + 3x + 3x/2 = 30 ⇒ 9x/2 = 18 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 4 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 42
  {
    id: 'quadrilaterals-42',
    topic: 'Paralelkenarda alan oranları',
    figure: {
      viewBox: '0 0 400 212',
      caption: 'Şekil 42',
      label:
        'ABCD paralelkenarında E noktası [DC] kenarının orta noktası; [AE] ile [BD] köşegeni K noktasında kesişiyor; [EB] çizilmiş; AKD ve EBC üçgenleri taralı gösterilmiş.',
      svg: `
          <path class="shade" d="M40.0,178.0 L173.3,82.0 L120.0,34.0 Z"/>
          <path class="shade" d="M280.0,178.0 L360.0,34.0 L240.0,34.0 Z"/>
          <path class="ln" d="M40.0,178.0 L280.0,178.0 L360.0,34.0 L120.0,34.0 Z"/>
          <path class="ln" d="M40.0,178.0 L240.0,34.0"/>
          <path class="ln" d="M120.0,34.0 L280.0,178.0"/>
          <path class="ln" d="M240.0,34.0 L280.0,178.0"/>
          <path class="tick" d="M180.0,40.0 L180.0,28.0"/>
          <path class="tick" d="M300.0,40.0 L300.0,28.0"/>
          <circle class="pt" cx="40.0" cy="178.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="178.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="120.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="173.3" cy="82.0" r="3.2"/>
          <text x="29.9" y="191.1" text-anchor="end">A</text>
          <text x="286.6" y="195.5">B</text>
          <text x="371.1" y="34.1">C</text>
          <text x="110.8" y="30.5" text-anchor="end">D</text>
          <text x="244.9" y="26.2">E</text>
          <text x="173.3" y="106.0" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|DE| = |EC|',
      '[AE] ∩ [BD] = {K}',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, taralı alanlar toplamının paralelkenarın alanına oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/3' },
      { key: 'B', text: '3/8' },
      { key: 'C', text: '5/12' },
      { key: 'D', text: '7/15' },
      { key: 'E', text: '1/2' },
    ],
    answer: 'C',
    hint: 'KDE ve KBA üçgenlerinin benzerliğinden |DK| / |KB| oranını bul.',
    solution: [
      {
        title: 'Gösterim',
        detail:
          'A(ABCD) = 12S diyelim. Böylece A(ABD) = 6S olur.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[DE] // [AB] ve |DE| = |AB| / 2 olduğundan KDE ve KBA üçgenleri benzerdir; |DK| / |KB| = 1/2 olur.',
      },
      {
        title: 'AKD üçgeni',
        detail:
          'AKD ve AKB üçgenlerinin yükseklikleri ortak olduğundan A(AKD) = A(ABD) / 3 = 2S olur.',
      },
      {
        title: 'EBC üçgeni',
        detail:
          '|EC| = |DC| / 2 olduğundan A(EBC) = A(DBC) / 2 = 6S / 2 = 3S olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Taralı alanlar toplamı 2S + 3S = 5S olduğundan oran 5S / 12S = 5/12 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 43
  {
    id: 'quadrilaterals-43',
    topic: 'Eşkenar dörtgende yükseklik ve benzerlik',
    figure: {
      viewBox: '0 0 400 218',
      caption: 'Şekil 43',
      label:
        'ABCD eşkenar dörtgeninde D köşesinden [BC] kenarına dik [DK] ve [DC] üzerindeki E noktasından [AB] kenarına dik [EF] çizilmiş; bu iki doğru parçası L noktasında kesişiyor; |DL| = 5, |KL| = 7, |FL| = 9 ve |KC| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M50.0,184.0 L237.5,184.0 L350.0,34.0 L162.5,34.0 Z"/>
          <path class="ln" d="M162.5,34.0 L282.5,124.0"/>
          <path class="ln" d="M212.5,34.0 L212.5,184.0"/>
          <path class="ln" d="M275.3,118.6 L280.7,111.4 L287.9,116.8"/>
          <path class="ln" d="M212.5,175.0 L221.5,175.0 L221.5,184.0"/>
          <text class="val" x="179.7" y="68.7" text-anchor="middle">5</text>
          <text class="val" x="255.3" y="92.8" text-anchor="middle">7</text>
          <text class="val" x="201.5" y="133.2" text-anchor="middle">9</text>
          <text class="val" x="305.9" y="76.7" text-anchor="middle">x</text>
          <circle class="pt" cx="50.0" cy="184.0" r="3.2"/>
          <circle class="pt" cx="237.5" cy="184.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="162.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="282.5" cy="124.0" r="3.2"/>
          <circle class="pt" cx="212.5" cy="71.5" r="3.2"/>
          <circle class="pt" cx="212.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="212.5" cy="184.0" r="3.2"/>
          <text x="36.4" y="195.9" text-anchor="end">A</text>
          <text x="241.8" y="203.9" text-anchor="middle">B</text>
          <text x="363.2" y="32.4">C</text>
          <text x="153.7" y="27.4" text-anchor="end">D</text>
          <text x="297.2" y="132.4">K</text>
          <text x="226.7" y="72.0">L</text>
          <text x="212.5" y="24.5" text-anchor="middle">E</text>
          <text x="212.5" y="204.5" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[DK] ⊥ [BC]',
      '[EF] ⊥ [AB]',
      '|DL| = 5 cm',
      '|KL| = 7 cm',
      '|FL| = 9 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |KC| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '3√7' },
      { key: 'B', text: '9' },
      { key: 'C', text: '4√6' },
      { key: 'D', text: '10' },
      { key: 'E', text: '12' },
    ],
    answer: 'B',
    hint: 'Eşkenar dörtgenin bütün kenarları eşit olduğundan [DK] ve [EF] yükseklikleri de eşittir.',
    solution: [
      {
        title: 'Yükseklik',
        detail:
          'Eşkenar dörtgende her kenara ait yükseklik aynıdır: |EF| = |DK| = 5 + 7 = 12 cm olur.',
      },
      {
        title: 'DEL dik üçgeni',
        detail:
          '|EL| = 12 − 9 = 3 cm ve [EF] ⊥ [DC] olduğundan |DE|² = 5² − 3² = 16 ⇒ |DE| = 4 cm olur.',
      },
      {
        title: 'Benzerlik',
        detail:
          'DEL ve DKC dik üçgenlerinde D açısı ortak olduğundan üçgenler benzerdir: |DE| / |DK| = |DL| / |DC| ⇒ 4/12 = 5/|DC| ⇒ |DC| = 15 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'DKC dik üçgeninde x² = 15² − 12² = 225 − 144 = 81 ⇒ x = 9 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 44
  {
    id: 'quadrilaterals-44',
    topic: 'Paralelkenarda açıortaylar ve alan',
    figure: {
      viewBox: '0 0 400 241',
      caption: 'Şekil 44',
      label:
        'ABCD paralelkenarında D ve A açılarının açıortayları E noktasında kesişiyor; |DE| = 6, |AE| = 8 ve |AB| = 15 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,206.6 L309.7,206.6 L360.0,34.0 L90.3,34.0 Z"/>
          <path class="ln" d="M90.3,34.0 L155.1,120.3 L40.0,206.6"/>
          <path class="ln" d="M149.7,113.1 L142.5,118.5 L147.9,125.7"/>
          <text class="val" x="112.3" y="90.4" text-anchor="middle">6</text>
          <text class="val" x="89.7" y="158.5" text-anchor="middle">8</text>
          <text class="val" x="174.8" y="227.1" text-anchor="middle">15</text>
          <circle class="pt" cx="40.0" cy="206.6" r="3.2"/>
          <circle class="pt" cx="309.7" cy="206.6" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="90.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="155.1" cy="120.3" r="3.2"/>
          <text x="26.4" y="218.4" text-anchor="end">A</text>
          <text x="322.3" y="220.1">B</text>
          <text x="372.8" y="31.7">C</text>
          <text x="79.5" y="29.1" text-anchor="end">D</text>
          <text x="170.1" y="125.8">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 241',
      caption: 'Şekil 44',
      label:
        'ABCD paralelkenarında D ve A açılarının açıortayları E noktasında kesişiyor; [DE] uzatılarak [AB] kenarını P noktasında kesiyor.',
      svg: `
          <path class="ln" d="M40.0,206.6 L309.7,206.6 L360.0,34.0 L90.3,34.0 Z"/>
          <path class="ln" d="M90.3,34.0 L155.1,120.3 L40.0,206.6"/>
          <path class="ln" d="M149.7,113.1 L142.5,118.5 L147.9,125.7"/>
          <text class="val" x="112.3" y="90.4" text-anchor="middle">6</text>
          <text class="val" x="89.7" y="158.5" text-anchor="middle">8</text>
          <text class="val" x="174.8" y="227.1" text-anchor="middle">15</text>
          <path class="aux" d="M155.1,120.3 L219.8,206.6"/>
          <circle class="pt" cx="40.0" cy="206.6" r="3.2"/>
          <circle class="pt" cx="309.7" cy="206.6" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="90.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="155.1" cy="120.3" r="3.2"/>
          <circle class="pt" cx="219.8" cy="206.6" r="3.2"/>
          <text x="26.4" y="218.4" text-anchor="end">A</text>
          <text x="322.3" y="220.1">B</text>
          <text x="372.8" y="31.7">C</text>
          <text x="79.5" y="29.1" text-anchor="end">D</text>
          <text x="170.1" y="125.8">E</text>
          <text x="219.8" y="227.1" text-anchor="middle">P</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DE] ve [AE] açıortay',
      '|DE| = 6 cm',
      '|AE| = 8 cm',
      '|AB| = 15 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '108' },
      { key: 'C', text: '120' },
      { key: 'D', text: '132' },
      { key: 'E', text: '144' },
    ],
    answer: 'E',
    hint: '[DE] doğru parçasını [AB] kenarını kesene kadar uzat; oluşan üçgenin türüne bak.',
    solution: [
      {
        title: 'Dik açı',
        detail:
          'Paralelkenarda Â + D̂ = 180° olduğundan açıortaylar arasındaki açı m(AED) = 90° olur; |AD|² = 6² + 8² = 100 ⇒ |AD| = 10 cm.',
      },
      {
        title: 'İkizkenar üçgen',
        detail:
          '[DE] uzantısı [AB] kenarını P noktasında kessin. [DC] // [AB] olduğundan m(APD) = m(PDC) = m(ADP) olur; ADP ikizkenardır: |AP| = |AD| = 10 cm ve [AE] yükseklik olduğundan |EP| = |DE| = 6 cm.',
      },
      {
        title: 'ADP üçgeninin alanı',
        detail:
          'A(ADP) = |DP| · |AE| / 2 = 12 · 8 / 2 = 48 cm² olur.',
      },
      {
        title: 'Yükseklik',
        detail:
          'Paralelkenarın [AB] kenarına ait yüksekliği h ise 10 · h / 2 = 48 ⇒ h = 48/5 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |AB| · h = 15 · 48/5 = 144 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 45
  {
    id: 'quadrilaterals-45',
    topic: 'Paralelkenarda köşegen ve dik üçgende kenarortay',
    figure: {
      viewBox: '0 0 400 201',
      caption: 'Şekil 45',
      label:
        'ABCD paralelkenarında [AB] kenarının uzantısı üzerindeki H noktası için [CH] ⊥ [AH]; E noktası [BD] köşegeninin orta noktası ve H ile birleştirilmiş; |AB| = 14 ve |BH| = 10 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,167.3 L226.7,167.3 L360.0,34.0 L173.3,34.0 Z"/>
          <path class="ln" d="M226.7,167.3 L360.0,167.3"/>
          <path class="ln" d="M360.0,34.0 L360.0,167.3"/>
          <path class="ln" d="M173.3,34.0 L226.7,167.3"/>
          <path class="ln" d="M200.0,100.7 L360.0,167.3"/>
          <path class="ln" d="M360.0,158.3 L351.0,158.3 L351.0,167.3"/>
          <path class="tick" d="M181.1,69.6 L192.2,65.1"/>
          <path class="tick" d="M207.8,136.2 L218.9,131.8"/>
          <text class="val" x="133.3" y="187.8" text-anchor="middle">14</text>
          <text class="val" x="293.3" y="187.8" text-anchor="middle">10</text>
          <circle class="pt" cx="40.0" cy="167.3" r="3.2"/>
          <circle class="pt" cx="226.7" cy="167.3" r="3.2"/>
          <circle class="pt" cx="360.0" cy="167.3" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="173.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="100.7" r="3.2"/>
          <text x="25.6" y="177.1" text-anchor="end">A</text>
          <text x="226.7" y="187.8" text-anchor="middle">B</text>
          <text x="367.7" y="185.7">H</text>
          <text x="373.0" y="31.9">C</text>
          <text x="164.9" y="27.1" text-anchor="end">D</text>
          <text x="185.6" y="101.9" text-anchor="end">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 201',
      caption: 'Şekil 45',
      label:
        'ABCD paralelkenarında [AC] köşegeni çizilmiş; E noktası iki köşegenin kesim noktası; [CH] ⊥ [AH].',
      svg: `
          <path class="ln" d="M40.0,167.3 L226.7,167.3 L360.0,34.0 L173.3,34.0 Z"/>
          <path class="ln" d="M226.7,167.3 L360.0,167.3"/>
          <path class="ln" d="M360.0,34.0 L360.0,167.3"/>
          <path class="ln" d="M173.3,34.0 L226.7,167.3"/>
          <path class="ln" d="M200.0,100.7 L360.0,167.3"/>
          <path class="ln" d="M360.0,158.3 L351.0,158.3 L351.0,167.3"/>
          <path class="tick" d="M181.1,69.6 L192.2,65.1"/>
          <path class="tick" d="M207.8,136.2 L218.9,131.8"/>
          <text class="val" x="133.3" y="187.8" text-anchor="middle">14</text>
          <text class="val" x="293.3" y="187.8" text-anchor="middle">10</text>
          <path class="aux" d="M40.0,167.3 L360.0,34.0"/>
          <circle class="pt" cx="40.0" cy="167.3" r="3.2"/>
          <circle class="pt" cx="226.7" cy="167.3" r="3.2"/>
          <circle class="pt" cx="360.0" cy="167.3" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="173.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="100.7" r="3.2"/>
          <text x="25.6" y="177.1" text-anchor="end">A</text>
          <text x="226.7" y="187.8" text-anchor="middle">B</text>
          <text x="367.7" y="185.7">H</text>
          <text x="373.0" y="31.9">C</text>
          <text x="164.9" y="27.1" text-anchor="end">D</text>
          <text x="185.6" y="101.9" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[CH] ⊥ [AH]',
      '|DE| = |EB|',
      '|AB| = 14 cm',
      '|BH| = 10 cm',
      '|EH| = 13 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABCD paralelkenarının alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '112' },
      { key: 'B', text: '126' },
      { key: 'C', text: '130' },
      { key: 'D', text: '140' },
      { key: 'E', text: '156' },
    ],
    answer: 'D',
    hint: 'Paralelkenarın köşegenleri birbirini ortalar; E noktası [AC] köşegeninin de orta noktasıdır.',
    solution: [
      {
        title: 'Köşegenler',
        detail:
          'Paralelkenarda köşegenler birbirini ortaladığından E, [AC] köşegeninin de orta noktasıdır.',
      },
      {
        title: 'Kenarortay',
        detail:
          'AHC dik üçgeninde [HE] hipotenüse ait kenarortay olduğundan |AC| = 2 · |EH| = 2 · 13 = 26 cm olur.',
      },
      {
        title: 'CH yüksekliği',
        detail:
          '|AH| = 14 + 10 = 24 cm ve |CH|² = 26² − 24² = 676 − 576 = 100 ⇒ |CH| = 10 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[CH] paralelkenarın [AB] kenarına ait yüksekliğidir: A(ABCD) = 14 · 10 = 140 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 46
  {
    id: 'quadrilaterals-46',
    topic: 'Paralelkenarda köşegen üzerinde benzerlik',
    figure: {
      viewBox: '0 0 400 219',
      caption: 'Şekil 46',
      label:
        'ABCD paralelkenarında [AB] kenarının orta noktası E, [BC] kenarı üzerinde F noktası; [DE] ve [DF] doğru parçaları [AC] köşegenini sırasıyla L ve K noktalarında kesiyor.',
      svg: `
          <path class="ln" d="M40.0,184.6 L265.9,184.6 L360.0,34.0 L134.1,34.0 Z"/>
          <path class="ln" d="M40.0,184.6 L360.0,34.0"/>
          <path class="ln" d="M134.1,34.0 L152.9,184.6"/>
          <path class="ln" d="M134.1,34.0 L328.6,84.2"/>
          <path class="tick" d="M96.5,190.6 L96.5,178.6"/>
          <path class="tick" d="M209.4,190.6 L209.4,178.6"/>
          <circle class="pt" cx="40.0" cy="184.6" r="3.2"/>
          <circle class="pt" cx="265.9" cy="184.6" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="134.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="152.9" cy="184.6" r="3.2"/>
          <circle class="pt" cx="328.6" cy="84.2" r="3.2"/>
          <circle class="pt" cx="146.7" cy="134.4" r="3.2"/>
          <circle class="pt" cx="280.0" cy="71.6" r="3.2"/>
          <text x="26.1" y="195.7" text-anchor="end">A</text>
          <text x="274.8" y="202.1">B</text>
          <text x="373.2" y="32.3">C</text>
          <text x="123.6" y="28.9" text-anchor="end">D</text>
          <text x="152.9" y="205.1" text-anchor="middle">E</text>
          <text x="343.6" y="91.2">F</text>
          <text x="134.4" y="131.3" text-anchor="end">L</text>
          <text x="282.9" y="62.4" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '|AE| = |EB|',
      '|BF| = 2|FC|',
      '|AC| = 24 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |KL| kaç cm dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '11' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'AB ile DC ve AD ile BC paraleldir; köşegen üzerinde iki kelebek benzerliği ara.',
    solution: [
      {
        title: 'L noktası',
        detail:
          '[AE] // [DC] olduğundan LAE ve LCD üçgenleri benzerdir: |AL| / |LC| = |AE| / |DC| = 1/2 ⇒ |AL| = 24/3 = 8 cm olur.',
      },
      {
        title: 'K noktası',
        detail:
          '[FC] // [AD] olduğundan KCF ve KAD üçgenleri benzerdir: |CK| / |KA| = |FC| / |AD| = 1/3 ⇒ |CK| = 24/4 = 6 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|KL| = |AC| − |AL| − |CK| = 24 − 8 − 6 = 10 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 47
  {
    id: 'quadrilaterals-47',
    topic: 'Paralelkenarda eşkenar üçgen ve alan',
    figure: {
      viewBox: '0 0 400 212',
      caption: 'Şekil 47',
      label:
        'ABCD paralelkenarında E noktası [DC] kenarı üzerinde ve BEC eşkenar üçgen; A köşesinden [BE] kenarına dik [AH] çizilmiş; |EH| = 2 ve |HB| = 5 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,177.7 L277.0,177.7 L360.0,34.0 L123.0,34.0 Z"/>
          <path class="ln" d="M277.0,177.7 L194.1,34.0"/>
          <path class="ln" d="M40.0,177.7 L217.8,75.1"/>
          <path class="ln" d="M210.0,79.6 L205.5,71.8 L213.3,67.3"/>
          <text class="val" x="217.2" y="53.5" text-anchor="middle">2</text>
          <text class="val" x="258.7" y="125.4" text-anchor="middle">5</text>
          <circle class="pt" cx="40.0" cy="177.7" r="3.2"/>
          <circle class="pt" cx="277.0" cy="177.7" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="123.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="194.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="217.8" cy="75.1" r="3.2"/>
          <text x="26.9" y="190.4" text-anchor="end">A</text>
          <text x="286.7" y="194.7">B</text>
          <text x="374.2" y="34.6">C</text>
          <text x="110.6" y="31.0" text-anchor="end">D</text>
          <text x="194.1" y="24.5" text-anchor="middle">E</text>
          <text x="231.7" y="86.1">H</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'BEC eşkenar üçgen',
      '[AH] ⊥ [BE]',
      '|EH| = 2 cm',
      '|HB| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '35√3' },
      { key: 'B', text: '40√3' },
      { key: 'C', text: '42√3' },
      { key: 'D', text: '45√3' },
      { key: 'E', text: '49√3' },
    ],
    answer: 'A',
    hint: 'ABE üçgeninin alanı paralelkenarın alanının yarısıdır; AH yüksekliğini bulmak için m(ABE) açısını kullan.',
    solution: [
      {
        title: 'Açı',
        detail:
          'BEC eşkenar üçgen olduğundan m(BEC) = 60° dir; [AB] // [DC] olduğundan iç ters açılar eşittir: m(ABE) = 60°.',
      },
      {
        title: 'AH yüksekliği',
        detail:
          'AHB dik üçgeninde m(ABH) = 60° ve |HB| = 5 cm olduğundan |AH| = 5√3 cm olur.',
      },
      {
        title: 'ABE üçgeni',
        detail:
          '|BE| = 2 + 5 = 7 cm ve A(ABE) = 7 · 5√3 / 2 = 35√3/2 cm² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'E noktası [DC] üzerinde olduğundan A(ABCD) = 2 · A(ABE) = 35√3 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 48
  {
    id: 'quadrilaterals-48',
    topic: 'Paralelkenarda alan farkı',
    figure: {
      viewBox: '0 0 400 265',
      caption: 'Şekil 48',
      label:
        'ABCD paralelkenarında E noktası [AD] kenarı üzerinde, K noktası [DC] kenarı üzerinde; [AK] ile [EB] F noktasında kesişiyor; AEF ve FKB üçgenleri taralı gösterilmiş.',
      svg: `
          <path class="shade" d="M40.0,230.9 L89.2,99.6 L122.1,121.5 Z"/>
          <path class="shade" d="M122.1,121.5 L187.7,34.0 L286.2,230.9 Z"/>
          <path class="ln" d="M40.0,230.9 L286.2,230.9 L360.0,34.0 L113.8,34.0 Z"/>
          <path class="ln" d="M40.0,230.9 L187.7,34.0"/>
          <path class="ln" d="M89.2,99.6 L286.2,230.9"/>
          <circle class="pt" cx="40.0" cy="230.9" r="3.2"/>
          <circle class="pt" cx="286.2" cy="230.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="113.8" cy="34.0" r="3.2"/>
          <circle class="pt" cx="89.2" cy="99.6" r="3.2"/>
          <circle class="pt" cx="122.1" cy="121.5" r="3.2"/>
          <circle class="pt" cx="187.7" cy="34.0" r="3.2"/>
          <text x="28.9" y="246.5" text-anchor="end">A</text>
          <text x="296.6" y="247.2">B</text>
          <text x="373.9" y="33.8">C</text>
          <text x="105.0" y="27.4" text-anchor="end">D</text>
          <text x="74.2" y="105.1" text-anchor="end">E</text>
          <text x="117.5" y="111.5" text-anchor="middle">F</text>
          <text x="187.7" y="24.5" text-anchor="middle">K</text>

        `,
    },
    given: [
      'ABCD paralelkenar',
      '|AE| = 2|ED|',
      'A(AEF) = 4 cm²',
      'A(FKB) = 16 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '64' },
      { key: 'C', text: '68' },
      { key: 'D', text: '72' },
      { key: 'E', text: '80' },
    ],
    answer: 'D',
    hint: 'ABK ve ABE üçgenlerinin ikisi de ABF üçgenini içerir; bu iki üçgenin alanlarını paralelkenarın alanı cinsinden yaz.',
    solution: [
      {
        title: 'Gösterim',
        detail:
          'A(ABCD) = P ve A(ABF) = y diyelim.',
      },
      {
        title: 'ABK üçgeni',
        detail:
          'K noktası [DC] üzerinde olduğundan A(ABK) = P/2 olur; buradan y + 16 = P/2.',
      },
      {
        title: 'ABE üçgeni',
        detail:
          'A(ABD) = P/2 ve |AE| = 2|AD|/3 olduğundan A(ABE) = (2/3) · P/2 = P/3 olur; buradan y + 4 = P/3.',
      },
      {
        title: 'Fark',
        detail:
          'İki eşitlik taraf tarafa çıkarılırsa 16 − 4 = P/2 − P/3 ⇒ 12 = P/6 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = P = 72 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 49
  {
    id: 'quadrilaterals-49',
    topic: 'Paralelkenarda açıortaylar ve çevre',
    figure: {
      viewBox: '0 0 400 203',
      caption: 'Şekil 49',
      label:
        'ABCD paralelkenarında A ve B açılarının açıortayları [DC] kenarı üzerindeki E noktasında dik kesişiyor; |AE| = 16 ve |BE| = 12 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,168.7 L320.7,168.7 L360.0,34.0 L79.3,34.0 Z"/>
          <path class="ln" d="M40.0,168.7 L219.6,34.0 L320.7,168.7"/>
          <path class="ln" d="M212.4,39.4 L217.8,46.6 L225.0,41.2"/>
          <path class="arc" d="M66.0,168.7 A26,26 0 0 0 60.8,153.1"/>
          <path class="arc" d="M64.0,150.7 A30,30 0 0 0 48.4,139.9"/>
          <path class="arc" d="M328.0,143.8 A26,26 0 0 0 305.1,147.9"/>
          <path class="arc" d="M302.7,144.7 A30,30 0 0 0 290.7,168.7"/>
          <text class="val" x="138.2" y="117.6" text-anchor="middle">16</text>
          <text class="val" x="281.4" y="98.0" text-anchor="middle">12</text>
          <circle class="pt" cx="40.0" cy="168.7" r="3.2"/>
          <circle class="pt" cx="320.7" cy="168.7" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="79.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="219.6" cy="34.0" r="3.2"/>
          <text x="28.0" y="182.7" text-anchor="end">A</text>
          <text x="330.7" y="184.7">B</text>
          <text x="372.0" y="34.0">C</text>
          <text x="69.3" y="28.0" text-anchor="end">D</text>
          <text x="219.6" y="24.0" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[AE] açıortay',
      '[BE] açıortay',
      '|AE| = 16 cm',
      '|BE| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABCD paralelkenarının çevresi kaç cm dir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '54' },
      { key: 'C', text: '56' },
      { key: 'D', text: '60' },
      { key: 'E', text: '64' },
    ],
    answer: 'D',
    hint: 'Paralelkenarda ardışık iki açının açıortayları dik kesişir; önce ABE dik üçgenine bak.',
    solution: [
      {
        title: 'Dik açı',
        detail:
          'm(A) + m(B) = 180° olduğundan yarımlarının toplamı 90° dir; buradan m(AEB) = 90° olur.',
      },
      {
        title: 'AB kenarı',
        detail:
          'ABE dik üçgeninde |AB|² = 16² + 12² = 256 + 144 = 400 ⇒ |AB| = 20 cm olur.',
      },
      {
        title: 'İkizkenar üçgenler',
        detail:
          '[AB] // [DC] olduğundan m(DEA) = m(EAB) = m(DAE); ADE ikizkenardır ve |AD| = |DE| olur. Aynı şekilde |BC| = |EC| olur.',
      },
      {
        title: 'AD kenarı',
        detail:
          '|DC| = |DE| + |EC| = 2|AD| = 20 ⇒ |AD| = 10 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Çevre(ABCD) = 2 · (20 + 10) = 60 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 50
  {
    id: 'quadrilaterals-50',
    topic: 'Paralelkenarda açıortay ve açılar',
    figure: {
      viewBox: '0 0 400 186',
      caption: 'Şekil 50',
      label:
        'ABCD paralelkenarında A açısının açıortayı [DC] kenarını E noktasında kesiyor; F noktası [BC] kenarı üzerinde; AEF açısı 110°, BCD açısı 64° ve EFC açısı x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,152.0 L302.5,152.0 L360.0,34.0 L97.5,34.0 Z"/>
          <path class="ln" d="M40.0,152.0 L228.8,34.0 L323.8,108.2"/>
          <path class="arc" d="M70.0,152.0 A30,30 0 0 0 65.4,136.1"/>
          <path class="arc" d="M68.8,133.9 A34,34 0 0 0 54.9,121.4"/>
          <path class="arc" d="M211.8,44.6 A20,20 0 0 0 244.5,46.3"/>
          <text class="val" x="226.9" y="75.0" text-anchor="middle">110°</text>
          <path class="arc" d="M338.0,34.0 A22,22 0 0 0 350.4,53.8"/>
          <text class="val" x="326.1" y="60.2" text-anchor="middle">64°</text>
          <path class="arc" d="M331.7,92.1 A18,18 0 0 0 309.6,97.2"/>
          <text class="val" x="316.6" y="82.1" text-anchor="middle">x</text>
          <circle class="pt" cx="40.0" cy="152.0" r="3.2"/>
          <circle class="pt" cx="302.5" cy="152.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="97.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="228.8" cy="34.0" r="3.2"/>
          <circle class="pt" cx="323.8" cy="108.2" r="3.2"/>
          <text x="28.0" y="166.0" text-anchor="end">A</text>
          <text x="312.5" y="168.0">B</text>
          <text x="372.0" y="34.0">C</text>
          <text x="87.5" y="28.0" text-anchor="end">D</text>
          <text x="228.8" y="24.0" text-anchor="middle">E</text>
          <text x="335.8" y="116.2">F</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[AE] açıortay',
      'm(AEF) = 110°',
      'm(BCD) = 64°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EFC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '74' },
      { key: 'C', text: '78' },
      { key: 'D', text: '82' },
      { key: 'E', text: '86' },
    ],
    answer: 'C',
    hint: 'Paralelkenarda karşılıklı açılar eşittir; önce m(DAB) ve açıortayın ayırdığı açıları bul.',
    solution: [
      {
        title: 'A açısı',
        detail:
          'Karşılıklı açılar eşit olduğundan m(DAB) = m(BCD) = 64° ve açıortaydan m(EAB) = 32° olur.',
      },
      {
        title: 'İç ters açılar',
        detail:
          '[DC] // [AB] olduğundan m(DEA) = m(EAB) = 32° olur.',
      },
      {
        title: 'FEC açısı',
        detail:
          'E noktası [DC] üzerinde olduğundan m(FEC) = 180° − 32° − 110° = 38° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'EFC üçgeninde x = 180° − 64° − 38° = 78° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 51
  {
    id: 'quadrilaterals-51',
    topic: 'Paralelkenarda köşegen ve alan oranı',
    figure: {
      viewBox: '0 0 400 199',
      caption: 'Şekil 51',
      label:
        'ABCD paralelkenarında E noktası [AC] köşegeni üzerinde; D noktası E ile birleştirilmiş ve DEC üçgeni taralı gösterilmiş.',
      svg: `
          <path class="shade" d="M127.3,34.0 L280.0,66.7 L360.0,34.0 Z"/>
          <path class="ln" d="M40.0,164.9 L272.7,164.9 L360.0,34.0 L127.3,34.0 Z"/>
          <path class="ln" d="M40.0,164.9 L360.0,34.0"/>
          <path class="ln" d="M127.3,34.0 L280.0,66.7"/>
          <circle class="pt" cx="40.0" cy="164.9" r="3.2"/>
          <circle class="pt" cx="272.7" cy="164.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="127.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="66.7" r="3.2"/>
          <text x="28.0" y="178.9" text-anchor="end">A</text>
          <text x="282.7" y="180.9">B</text>
          <text x="372.0" y="34.0">C</text>
          <text x="117.3" y="28.0" text-anchor="end">D</text>
          <text x="284.0" y="86.7" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '|AE| = 3|EC|',
      'A(DEC) = 6 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '48' },
      { key: 'C', text: '54' },
      { key: 'D', text: '60' },
      { key: 'E', text: '64' },
    ],
    answer: 'B',
    hint: 'Aynı yüksekliğe sahip üçgenlerin alanları tabanlarıyla orantılıdır; ADE ve DEC üçgenlerinin tepesi ortaktır.',
    solution: [
      {
        title: 'Taban oranı',
        detail:
          'ADE ve DEC üçgenlerinin D köşesinden [AC] ye inen yüksekliği ortaktır; |AE| = 3|EC| olduğundan A(ADE) = 3 · 6 = 18 cm² olur.',
      },
      {
        title: 'ADC üçgeni',
        detail:
          'A(ADC) = 18 + 6 = 24 cm² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Köşegen paralelkenarı iki eş üçgene ayırdığından A(ABCD) = 2 · 24 = 48 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 52
  {
    id: 'quadrilaterals-52',
    topic: 'Paralelkenarda açıortay ve alan oranı',
    figure: {
      viewBox: '0 0 400 160',
      caption: 'Şekil 52',
      label:
        'ABCD paralelkenarında A açısının açıortayı [DC] kenarını E noktasında kesiyor; ADE üçgeninin alanı S₁, ABCE dörtgeninin alanı S₂; |AD| = 6 ve |AB| = 15 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,126.4 L306.7,126.4 L360.0,34.0 L93.3,34.0 Z"/>
          <path class="ln" d="M40.0,126.4 L200.0,34.0"/>
          <path class="arc" d="M70.0,126.4 A30,30 0 0 0 66.0,111.4"/>
          <path class="arc" d="M69.4,109.4 A34,34 0 0 0 57.0,96.9"/>
          <text class="val" x="78.8" y="92.2" text-anchor="middle">6</text>
          <text class="val" x="173.3" y="115.4" text-anchor="middle">15</text>
          <text class="val" x="111.1" y="69.8" text-anchor="middle">S₁</text>
          <text class="val" x="226.7" y="85.2" text-anchor="middle">S₂</text>
          <circle class="pt" cx="40.0" cy="126.4" r="3.2"/>
          <circle class="pt" cx="306.7" cy="126.4" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="93.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="34.0" r="3.2"/>
          <text x="28.0" y="140.4" text-anchor="end">A</text>
          <text x="316.7" y="142.4">B</text>
          <text x="372.0" y="34.0">C</text>
          <text x="83.3" y="28.0" text-anchor="end">D</text>
          <text x="200.0" y="24.0" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[AE] açıortay',
      '|AD| = 6 cm',
      '|AB| = 15 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, S₁ / S₂ oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/5' },
      { key: 'B', text: '1/4' },
      { key: 'C', text: '1/3' },
      { key: 'D', text: '2/5' },
      { key: 'E', text: '1/2' },
    ],
    answer: 'B',
    hint: 'Açıortay [DC] ile ikizkenar bir üçgen oluşturur; önce |DE| ve |EC| uzunluklarını bul.',
    solution: [
      {
        title: 'İkizkenar üçgen',
        detail:
          '[DC] // [AB] olduğundan m(DEA) = m(EAB) = m(DAE); buradan |DE| = |AD| = 6 cm ve |EC| = 15 − 6 = 9 cm olur.',
      },
      {
        title: 'Yükseklik',
        detail:
          'Paralelkenarın [AB] ye ait yüksekliğine h dersek S₁ = 6 · h / 2 = 3h olur.',
      },
      {
        title: 'Yamuk',
        detail:
          'ABCE yamuğunda S₂ = (15 + 9) · h / 2 = 12h olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'S₁ / S₂ = 3h / 12h = 1/4 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 53
  {
    id: 'quadrilaterals-53',
    topic: 'Paralelkenarda iç bölgedeki nokta ve açılar',
    figure: {
      viewBox: '0 0 400 219',
      caption: 'Şekil 53',
      label:
        'ABCD paralelkenarının iç bölgesindeki E noktası A ve C köşeleriyle birleştirilmiş; BAE açısı 30°, ECB açısı 20°, AEC açısı 115° ve ECD açısı x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,184.8 L289.7,184.8 L360.0,34.0 L110.3,34.0 Z"/>
          <path class="ln" d="M110.3,34.0 L118.1,122.4 L289.7,184.8"/>
          <path class="arc" d="M97.7,61.2 A30,30 0 0 0 113.0,63.9"/>
          <text class="val" x="102.4" y="84.3" text-anchor="middle">30°</text>
          <path class="arc" d="M257.7,173.2 A34,34 0 0 0 255.7,184.8"/>
          <text class="val" x="240.4" y="181.2" text-anchor="middle">20°</text>
          <path class="arc" d="M299.0,164.9 A22,22 0 0 0 269.0,177.3"/>
          <text class="val" x="275.9" y="156.6" text-anchor="middle">x</text>
          <path class="arc" d="M135.0,128.5 A18,18 0 0 0 116.5,104.5"/>
          <text class="val" x="145.0" y="106.7" text-anchor="middle">115°</text>
          <circle class="pt" cx="110.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="184.8" r="3.2"/>
          <circle class="pt" cx="289.7" cy="184.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="118.1" cy="122.4" r="3.2"/>
          <text x="100.3" y="28.0" text-anchor="end">A</text>
          <text x="28.0" y="198.8" text-anchor="end">B</text>
          <text x="299.7" y="200.8">C</text>
          <text x="372.0" y="34.0">D</text>
          <text x="114.1" y="142.4" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'm(BAE) = 30°',
      'm(ECB) = 20°',
      'm(AEC) = 115°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ECD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '85' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' },
      { key: 'E', text: '105' },
    ],
    answer: 'C',
    hint: 'A, B, C ve E noktalarının oluşturduğu içbükey dörtgende E deki açı, diğer üç açının toplamına eşittir.',
    solution: [
      {
        title: 'İçbükey dörtgen',
        detail:
          'ABCE içbükey dörtgeninde m(AEC) = m(BAE) + m(ABC) + m(ECB) olur.',
      },
      {
        title: 'B açısı',
        detail:
          '115° = 30° + m(ABC) + 20° ⇒ m(ABC) = 65° olur.',
      },
      {
        title: 'C açısı',
        detail:
          'Paralelkenarda ardışık açılar bütünler olduğundan m(BCD) = 180° − 65° = 115° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = m(BCD) − m(ECB) = 115° − 20° = 95° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 54
  {
    id: 'quadrilaterals-54',
    topic: 'Paralelkenarda üçgen alanları',
    figure: {
      viewBox: '0 0 400 200',
      caption: 'Şekil 54',
      label:
        'ABCD paralelkenarında E noktası [AB] kenarı üzerinde; E noktası D ve C köşeleriyle birleştirilmiş ve DEC üçgeni taralı gösterilmiş.',
      svg: `
          <path class="shade" d="M95.2,34.0 L238.6,166.4 L360.0,34.0 Z"/>
          <path class="ln" d="M40.0,166.4 L304.8,166.4 L360.0,34.0 L95.2,34.0 Z"/>
          <path class="ln" d="M95.2,34.0 L238.6,166.4 L360.0,34.0"/>
          <circle class="pt" cx="40.0" cy="166.4" r="3.2"/>
          <circle class="pt" cx="304.8" cy="166.4" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="95.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="238.6" cy="166.4" r="3.2"/>
          <text x="28.0" y="180.4" text-anchor="end">A</text>
          <text x="314.8" y="182.4">B</text>
          <text x="372.0" y="34.0">C</text>
          <text x="85.2" y="28.0" text-anchor="end">D</text>
          <text x="238.6" y="188.4" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|AE| = 3|EB|',
      'A(DEC) = 32 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(AED) kaç cm² dir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '28' },
      { key: 'C', text: '30' },
      { key: 'D', text: '32' },
      { key: 'E', text: '36' },
    ],
    answer: 'A',
    hint: 'Tabanı [DC] ve tepesi [AB] üzerinde olan üçgenin alanı paralelkenarın alanının yarısıdır.',
    solution: [
      {
        title: 'Paralelkenarın alanı',
        detail:
          'E noktası [AB] üzerinde olduğundan A(DEC) = A(ABCD) / 2 ⇒ A(ABCD) = 64 cm² olur.',
      },
      {
        title: 'Kalan üçgenler',
        detail:
          'A(AED) + A(EBC) = 64 − 32 = 32 cm² olur.',
      },
      {
        title: 'Taban oranı',
        detail:
          'AED ve EBC üçgenlerinin yükseklikleri paralelkenarın yüksekliğine eşittir; alanları |AE| : |EB| = 3 : 1 oranındadır.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(AED) = 32 · 3/4 = 24 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 55
  {
    id: 'quadrilaterals-55',
    topic: 'Paralelkenarda eşkenar üçgen ve alan oranı',
    figure: {
      viewBox: '0 0 400 196',
      caption: 'Şekil 55',
      label:
        'ABCD paralelkenarında E noktası [AB] kenarı üzerinde; ADE eşkenar üçgen, |BC| = 6 ve |EB| = 4 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,161.9 L286.2,161.9 L360.0,34.0 L113.8,34.0 Z"/>
          <path class="ln" d="M113.8,34.0 L187.7,161.9"/>
          <text class="val" x="335.2" y="110.0" text-anchor="middle">6</text>
          <text class="val" x="236.9" y="180.9" text-anchor="middle">4</text>
          <circle class="pt" cx="40.0" cy="161.9" r="3.2"/>
          <circle class="pt" cx="286.2" cy="161.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="113.8" cy="34.0" r="3.2"/>
          <circle class="pt" cx="187.7" cy="161.9" r="3.2"/>
          <text x="22.9" y="173.5" text-anchor="end">A</text>
          <text x="301.7" y="176.9">B</text>
          <text x="376.3" y="32.3">C</text>
          <text x="100.6" y="27.8" text-anchor="end">D</text>
          <text x="187.7" y="185.9" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      'ADE eşkenar üçgen',
      '|BC| = 6 cm',
      '|EB| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ADE) / A(EBCD) oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/3' },
      { key: 'B', text: '3/7' },
      { key: 'C', text: '1/2' },
      { key: 'D', text: '3/5' },
      { key: 'E', text: '2/3' },
    ],
    answer: 'B',
    hint: 'Eşkenar üçgenin kenarı |AD| = |BC| dir; paralelkenarın A açısı da eşkenar üçgenin açısıdır.',
    solution: [
      {
        title: 'Eşkenar üçgen',
        detail:
          '|AE| = |AD| = |BC| = 6 cm ve m(DAB) = 60° olur; A(ADE) = 6² · √3/4 = 9√3 cm² dir.',
      },
      {
        title: 'Paralelkenarın alanı',
        detail:
          '|AB| = 6 + 4 = 10 cm olduğundan A(ABCD) = 10 · 6 · sin 60° = 30√3 cm² olur.',
      },
      {
        title: 'Yamuk',
        detail:
          'A(EBCD) = 30√3 − 9√3 = 21√3 cm² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ADE) / A(EBCD) = 9√3 / 21√3 = 3/7 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 56
  {
    id: 'quadrilaterals-56',
    topic: 'Eşkenar dörtgende köşegen uzunluğu',
    figure: {
      viewBox: '0 0 400 253',
      caption: 'Şekil 56',
      label:
        'ABCD eşkenar dörtgeninde [AC] ve [BD] köşegenleri çizilmiş; ABC açısı 120° olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,34.0 L146.7,218.8 L360.0,218.8 L253.3,34.0 Z"/>
          <path class="ln" d="M40.0,34.0 L360.0,218.8"/>
          <path class="ln" d="M146.7,218.8 L253.3,34.0"/>
          <path class="arc" d="M172.7,218.8 A26,26 0 0 0 133.7,196.2"/>
          <text class="val" x="186.0" y="203.0" text-anchor="middle">120°</text>
          <circle class="pt" cx="40.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="146.7" cy="218.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="218.8" r="3.2"/>
          <circle class="pt" cx="253.3" cy="34.0" r="3.2"/>
          <text x="24.4" y="31.0" text-anchor="end">A</text>
          <text x="137.7" y="240.3" text-anchor="end">B</text>
          <text x="375.6" y="233.8">C</text>
          <text x="262.3" y="24.4">D</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '|AC| = 8√3 cm',
      'm(ABC) = 120°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| kaç cm dir?',
    choices: [
      { key: 'A', text: '4√3' },
      { key: 'B', text: '6' },
      { key: 'C', text: '8' },
      { key: 'D', text: '8√3' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'Ardışık açılar bütünler olduğundan m(BAD) = 60° dir; ABD üçgeni nasıl bir üçgendir?',
    solution: [
      {
        title: 'A açısı',
        detail:
          'Eşkenar dörtgende ardışık açılar bütünler olduğundan m(BAD) = 180° − 120° = 60° olur.',
      },
      {
        title: 'Kenar uzunluğu',
        detail:
          'Köşegenler dik kesişir ve [BD] köşegeni B açısını 60° + 60° olarak ikiye ayırır. ABC üçgeninde |AC| = a√3 olduğundan a√3 = 8√3 ⇒ a = 8 cm olur.',
      },
      {
        title: 'Eşkenar üçgen',
        detail:
          'ABD üçgeninde |AB| = |AD| ve m(BAD) = 60° olduğundan üçgen eşkenardır.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BD| = |AB| = 8 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 57
  {
    id: 'quadrilaterals-57',
    topic: 'Paralelkenarda dik açıortaylar ve çevre',
    figure: {
      viewBox: '0 0 400 196',
      caption: 'Şekil 57',
      label:
        'ABCD paralelkenarında E noktası [DC] kenarı üzerinde; [AE] ile [EB] dik kesişiyor, [BE] B açısını iki eş açıya ayırıyor ve |AB| = 14 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,162.4 L313.3,162.4 L360.0,34.0 L86.7,34.0 Z"/>
          <path class="ln" d="M40.0,162.4 L223.4,34.0 L313.3,162.4"/>
          <path class="arc" d="M213.5,40.9 L220.4,50.7 L230.2,43.8"/>
          <path class="arc" d="M283.3,162.4 A30,30 0 0 1 296.1,137.8"/>
          <text class="val" x="274.2" y="147.1" text-anchor="middle">α</text>
          <path class="arc" d="M296.1,137.8 A30,30 0 0 1 323.5,134.2"/>
          <text class="val" x="307.5" y="123.8" text-anchor="middle">α</text>
          <text class="val" x="176.6" y="181.4" text-anchor="middle">14</text>
          <circle class="pt" cx="40.0" cy="162.4" r="3.2"/>
          <circle class="pt" cx="313.3" cy="162.4" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="86.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="223.4" cy="34.0" r="3.2"/>
          <text x="23.7" y="176.0" text-anchor="end">A</text>
          <text x="327.9" y="178.8">B</text>
          <text x="377.1" y="34.3">C</text>
          <text x="70.2" y="32.8" text-anchor="end">D</text>
          <text x="223.4" y="22.0" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD bir paralelkenar',
      '[AE] ⊥ [EB]',
      'm(ABE) = m(EBC)',
      '|AB| = 14 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, Çevre(ABCD) kaç cm dir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '38' },
      { key: 'C', text: '40' },
      { key: 'D', text: '42' },
      { key: 'E', text: '44' },
    ],
    answer: 'D',
    hint: 'E deki dik açı, [AE] nin de A açısının açıortayı olduğunu gösterir; iki ikizkenar üçgen ara.',
    solution: [
      {
        title: 'İkinci açıortay',
        detail:
          'm(EBA) = m(B)/2 ve m(AEB) = 90° olduğundan m(EAB) = 90° − m(B)/2 = m(A)/2 olur; yani [AE] de açıortaydır.',
      },
      {
        title: 'İkizkenar üçgenler',
        detail:
          '[DC] // [AB] olduğundan m(DEA) = m(EAB) = m(DAE) ⇒ |DE| = |AD|; benzer şekilde |EC| = |BC| = |AD| olur.',
      },
      {
        title: 'Kenar uzunluğu',
        detail:
          '|DC| = |DE| + |EC| = 2|AD| = 14 ⇒ |AD| = 7 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Çevre(ABCD) = 2 · (14 + 7) = 42 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 58
  {
    id: 'quadrilaterals-58',
    topic: 'Eşkenar dörtgende köşegen ve benzerlik',
    figure: {
      viewBox: '0 0 400 272',
      caption: 'Şekil 58',
      label:
        'ABCD eşkenar dörtgeninde F noktası [BC] kenarı üzerinde; [DF] doğru parçası [AC] köşegenini E noktasında kesiyor, |AB| = 12 ve |BF| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,237.9 L264.9,237.9 L360.0,34.0 L135.1,34.0 Z"/>
          <path class="ln" d="M40.0,237.9 L360.0,34.0"/>
          <path class="ln" d="M135.1,34.0 L328.3,102.0"/>
          <text class="val" x="152.5" y="256.9" text-anchor="middle">12</text>
          <text class="val" x="309.3" y="180.8" text-anchor="middle">x</text>
          <circle class="pt" cx="40.0" cy="237.9" r="3.2"/>
          <circle class="pt" cx="264.9" cy="237.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="135.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="85.0" r="3.2"/>
          <circle class="pt" cx="328.3" cy="102.0" r="3.2"/>
          <text x="24.5" y="253.1" text-anchor="end">A</text>
          <text x="269.5" y="261.3" text-anchor="middle">B</text>
          <text x="374.7" y="29.7">C</text>
          <text x="121.6" y="28.1" text-anchor="end">D</text>
          <text x="280.0" y="73.0" text-anchor="middle">E</text>
          <text x="346.3" y="108.0">F</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '|AB| = 12 cm',
      '|DE| = 3|EF|',
      '|BF| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BF| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'D',
    hint: '[AD] // [FC] olduğundan AED ve CEF üçgenleri benzerdir.',
    solution: [
      {
        title: 'Benzerlik',
        detail:
          '[AD] // [BC] olduğundan m(DAE) = m(FCE) ve m(ADE) = m(CFE); AED ve CEF üçgenleri benzerdir.',
      },
      {
        title: 'Oran',
        detail:
          '|AD| / |FC| = |DE| / |EF| = 3 olur.',
      },
      {
        title: 'FC uzunluğu',
        detail:
          '|AD| = |AB| = 12 cm olduğundan |FC| = 12 / 3 = 4 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |BC| − |FC| = 12 − 4 = 8 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 59
  {
    id: 'quadrilaterals-59',
    topic: 'Eşkenar dörtgenin köşegenleri ve alan',
    figure: {
      viewBox: '0 0 400 201',
      caption: 'Şekil 59',
      label:
        'ABCD eşkenar dörtgeninin [AC] ve [BD] köşegenleri E noktasında kesişiyor; |AB| = 13 ve |BE| = 12 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M172.2,34.0 L40.0,167.3 L227.8,167.3 L360.0,34.0 Z"/>
          <path class="ln" d="M172.2,34.0 L227.8,167.3"/>
          <path class="ln" d="M40.0,167.3 L360.0,34.0"/>
          <text class="val" x="96.2" y="95.8" text-anchor="middle">13</text>
          <text class="val" x="124.6" y="150.1" text-anchor="middle">12</text>
          <circle class="pt" cx="172.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="167.3" r="3.2"/>
          <circle class="pt" cx="227.8" cy="167.3" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="100.7" r="3.2"/>
          <text x="165.3" y="23.4" text-anchor="end">A</text>
          <text x="23.4" y="180.3" text-anchor="end">B</text>
          <text x="234.7" y="189.9">C</text>
          <text x="376.6" y="33.1">D</text>
          <text x="190.0" y="90.0" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '|AB| = 13 cm',
      '|BE| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '100' },
      { key: 'C', text: '120' },
      { key: 'D', text: '130' },
      { key: 'E', text: '156' },
    ],
    answer: 'C',
    hint: 'Eşkenar dörtgenin köşegenleri birbirini dik ortalar; AEB dik üçgenine bak.',
    solution: [
      {
        title: 'Dik üçgen',
        detail:
          'Köşegenler dik kesiştiğinden AEB dik üçgeninde |AE|² = 13² − 12² = 25 ⇒ |AE| = 5 cm olur.',
      },
      {
        title: 'Köşegenler',
        detail:
          'Köşegenler birbirini ortaladığından |AC| = 10 cm ve |BD| = 24 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |AC| · |BD| / 2 = 10 · 24 / 2 = 120 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 60
  {
    id: 'quadrilaterals-60',
    topic: 'Paralelkenarda bütünler açılarla alan oranı',
    figure: {
      viewBox: '0 0 400 188',
      caption: 'Şekil 60',
      label:
        'ABCD paralelkenarında K noktası [AD] kenarının orta noktası, E ve F noktaları [DC], L noktası [BC] üzerinde; KDE ve FCL üçgenleri taralı, |AK| = |KD|, |DE| = 8, |FC| = 6, |CL| = 4 ve |LB| = 6 olarak işaretlenmiş.',
      svg: `
          <path class="shade" d="M74.8,94.2 L109.6,34.0 L220.9,34.0 Z"/>
          <path class="shade" d="M276.5,34.0 L360.0,34.0 L332.2,82.2 Z"/>
          <path class="ln" d="M40.0,154.5 L290.4,154.5 L360.0,34.0 L109.6,34.0 Z"/>
          <path class="ln" d="M74.8,94.2 L220.9,34.0"/>
          <path class="ln" d="M276.5,34.0 L332.2,82.2"/>
          <path class="tick" d="M53.1,121.9 L61.7,126.9"/>
          <path class="tick" d="M87.8,61.6 L96.5,66.6"/>
          <text class="val" x="165.2" y="25.0" text-anchor="middle">8</text>
          <text class="val" x="318.3" y="25.0" text-anchor="middle">6</text>
          <text class="val" x="358.2" y="70.1" text-anchor="middle">4</text>
          <text class="val" x="323.4" y="130.3" text-anchor="middle">6</text>
          <circle class="pt" cx="40.0" cy="154.5" r="3.2"/>
          <circle class="pt" cx="290.4" cy="154.5" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="109.6" cy="34.0" r="3.2"/>
          <circle class="pt" cx="74.8" cy="94.2" r="3.2"/>
          <circle class="pt" cx="220.9" cy="34.0" r="3.2"/>
          <circle class="pt" cx="276.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="332.2" cy="82.2" r="3.2"/>
          <text x="23.5" y="167.8" text-anchor="end">A</text>
          <text x="303.2" y="173.2">B</text>
          <text x="377.3" y="34.9">C</text>
          <text x="93.0" y="33.0" text-anchor="end">D</text>
          <text x="56.8" y="100.2" text-anchor="end">K</text>
          <text x="220.9" y="22.0" text-anchor="middle">E</text>
          <text x="276.5" y="22.0" text-anchor="middle">F</text>
          <text x="350.2" y="88.2">L</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|AK| = |KD|',
      '|DE| = 8 cm',
      '|FC| = 6 cm',
      '|CL| = 4 cm',
      '|LB| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(KDE) / A(FLC) oranı kaçtır?',
    choices: [
      { key: 'A', text: '4/3' },
      { key: 'B', text: '3/2' },
      { key: 'C', text: '5/3' },
      { key: 'D', text: '2' },
      { key: 'E', text: '5/2' },
    ],
    answer: 'C',
    hint: 'D ve C açıları bütünler olduğundan sinüsleri eşittir; iki üçgenin alanını sinüslü formülle yaz.',
    solution: [
      {
        title: 'Kenar uzunlukları',
        detail:
          '|AD| = |BC| = 4 + 6 = 10 cm olduğundan |KD| = 5 cm olur.',
      },
      {
        title: 'Bütünler açılar',
        detail:
          'm(D) + m(C) = 180° olduğundan sin D = sin C olur.',
      },
      {
        title: 'Alanlar',
        detail:
          'A(KDE) = ½ · 5 · 8 · sin D = 20 sin D ve A(FLC) = ½ · 6 · 4 · sin C = 12 sin D olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(KDE) / A(FLC) = 20 / 12 = 5/3 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 61
  {
    id: 'quadrilaterals-61',
    topic: 'Eşkenar dörtgende köşegenler ve yükseklik',
    figure: {
      viewBox: '0 0 400 308',
      caption: 'Şekil 61',
      label:
        'ABCD eşkenar dörtgeninde A ve D açılarının açıortayları [AE] ve [ED] E noktasında dik kesişiyor; |AE| = 8 ve |ED| = 6 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,95.8 L156.3,274.0 L360.0,212.2 L243.7,34.0 Z"/>
          <path class="ln" d="M40.0,95.8 L360.0,212.2"/>
          <path class="ln" d="M156.3,274.0 L243.7,34.0"/>
          <path class="ln" d="M192.5,151.3 L195.2,143.7 L202.7,146.5"/>
          <path class="arc" d="M56.4,120.9 A30,30 0 0 0 68.2,106.0"/>
          <path class="arc" d="M59.6,111.3 L67.4,117.5"/>
          <path class="arc" d="M68.2,106.0 A30,30 0 0 0 68.7,87.1"/>
          <path class="arc" d="M65.0,96.4 L75.0,96.7"/>
          <path class="arc" d="M218.8,41.5 A26,26 0 0 0 234.8,58.4"/>
          <path class="arc" d="M230.0,50.1 L222.7,56.9"/>
          <path class="arc" d="M226.9,46.8 L219.6,53.7"/>
          <path class="arc" d="M234.8,58.4 A26,26 0 0 0 257.9,55.8"/>
          <path class="arc" d="M248.3,54.6 L249.5,64.5"/>
          <path class="arc" d="M243.8,55.1 L245.0,65.1"/>
          <text class="val" x="124.8" y="116.7" text-anchor="middle">8</text>
          <text class="val" x="208.7" y="94.2" text-anchor="middle">6</text>
          <circle class="pt" cx="40.0" cy="95.8" r="3.2"/>
          <circle class="pt" cx="156.3" cy="274.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="212.2" r="3.2"/>
          <circle class="pt" cx="243.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="154.0" r="3.2"/>
          <text x="30.0" y="89.8" text-anchor="end">A</text>
          <text x="146.3" y="288.0" text-anchor="end">B</text>
          <text x="370.0" y="226.2">C</text>
          <text x="253.7" y="28.0">D</text>
          <text x="212.0" y="176.0">E</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[AE] ve [ED] açıortay',
      '|AE| = 8 cm',
      '|ED| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, eşkenar dörtgenin yüksekliği kaç cm dir?',
    choices: [
      { key: 'A', text: '44/5' },
      { key: 'B', text: '48/5' },
      { key: 'C', text: '52/5' },
      { key: 'D', text: '56/5' },
      { key: 'E', text: '12' },
    ],
    answer: 'B',
    hint: 'Eşkenar dörtgende açıortaylar köşegenlerdir; E köşegenlerin kesim noktasıdır.',
    solution: [
      {
        title: 'Köşegenler',
        detail:
          'Eşkenar dörtgenin köşegenleri köşe açılarının açıortaylarıdır ve birbirini dik ortalar; bu yüzden |AC| = 2 · 8 = 16 cm ve |BD| = 2 · 6 = 12 cm olur.',
      },
      {
        title: 'Kenar',
        detail:
          'AED dik üçgeninde |AD|² = 8² + 6² = 100 ⇒ |AD| = 10 cm olur.',
      },
      {
        title: 'Alan',
        detail:
          'A(ABCD) = |AC| · |BD| / 2 = 16 · 12 / 2 = 96 cm² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Alan = kenar · yükseklik olduğundan 10 · h = 96 ⇒ h = 48/5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 62
  {
    id: 'quadrilaterals-62',
    topic: 'Paralelkenarda iki yükseklikle kenar',
    figure: {
      viewBox: '0 0 400 175',
      caption: 'Şekil 62',
      label:
        'ABCD paralelkenarında D köşesinden [AB] kenarına [DH] ve [BC] kenarına [DE] dikmeleri inilmiş; |DH| = 8, |DE| = 10 ve |AB| = 15 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,140.9 L240.5,140.9 L360.0,34.0 L159.5,34.0 Z"/>
          <path class="ln" d="M159.5,34.0 L159.5,140.9"/>
          <path class="ln" d="M159.5,34.0 L248.6,133.6"/>
          <path class="ln" d="M159.5,131.9 L168.5,131.9 L168.5,140.9"/>
          <path class="ln" d="M242.6,126.9 L249.3,120.9 L255.3,127.6"/>
          <text class="val" x="149.5" y="92.5" text-anchor="middle">8</text>
          <text class="val" x="193.6" y="98.1" text-anchor="middle">10</text>
          <text class="val" x="110.2" y="157.9" text-anchor="middle">15</text>
          <circle class="pt" cx="40.0" cy="140.9" r="3.2"/>
          <circle class="pt" cx="240.5" cy="140.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="159.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="159.5" cy="140.9" r="3.2"/>
          <circle class="pt" cx="248.6" cy="133.6" r="3.2"/>
          <text x="30.0" y="154.9" text-anchor="end">A</text>
          <text x="244.5" y="160.9" text-anchor="middle">B</text>
          <text x="370.0" y="30.0">C</text>
          <text x="151.5" y="26.0" text-anchor="end">D</text>
          <text x="159.5" y="160.9" text-anchor="middle">H</text>
          <text x="260.6" y="139.6">E</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DH] ⊥ [AB]',
      '[DE] ⊥ [BC]',
      '|DH| = 8 cm',
      '|DE| = 10 cm',
      '|AB| = 15 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm dir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '12' },
      { key: 'D', text: '14' },
      { key: 'E', text: '16' },
    ],
    answer: 'C',
    hint: 'Paralelkenarın alanını iki farklı taban ve yükseklikle yaz.',
    solution: [
      {
        title: 'Birinci alan',
        detail:
          '[AB] tabanı ve [DH] yüksekliğiyle A(ABCD) = 15 · 8 = 120 cm² olur.',
      },
      {
        title: 'İkinci alan',
        detail:
          '[BC] tabanı ve [DE] yüksekliğiyle A(ABCD) = |BC| · 10 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BC| · 10 = 120 ⇒ |BC| = 12 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 63
  {
    id: 'quadrilaterals-63',
    topic: 'Paralelkenarda kenarortaylarla alan',
    figure: {
      viewBox: '0 0 400 205',
      caption: 'Şekil 63',
      label:
        'ABCD paralelkenarında E noktası [AB] kenarının, F noktası [BC] kenarının orta noktası; [AF] ile [CE] K noktasında kesişiyor ve EBFK dörtgeni taralı.',
      svg: `
          <path class="shade" d="M154.3,171.1 L268.6,171.1 L314.3,102.6 L222.9,125.4 Z"/>
          <path class="ln" d="M40.0,171.1 L268.6,171.1 L360.0,34.0 L131.4,34.0 Z"/>
          <path class="ln" d="M40.0,171.1 L314.3,102.6"/>
          <path class="ln" d="M360.0,34.0 L154.3,171.1"/>
          <path class="tick" d="M97.1,166.1 L97.1,176.1"/>
          <path class="tick" d="M211.4,166.1 L211.4,176.1"/>
          <path class="tick" d="M285.9,136.2 L294.2,141.7"/>
          <path class="tick" d="M288.7,132.0 L297.0,137.6"/>
          <path class="tick" d="M331.6,67.6 L339.9,73.1"/>
          <path class="tick" d="M334.4,63.4 L342.7,69.0"/>
          <circle class="pt" cx="40.0" cy="171.1" r="3.2"/>
          <circle class="pt" cx="268.6" cy="171.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="131.4" cy="34.0" r="3.2"/>
          <circle class="pt" cx="154.3" cy="171.1" r="3.2"/>
          <circle class="pt" cx="314.3" cy="102.6" r="3.2"/>
          <circle class="pt" cx="222.9" cy="125.4" r="3.2"/>
          <text x="30.0" y="185.1" text-anchor="end">A</text>
          <text x="272.6" y="191.1" text-anchor="middle">B</text>
          <text x="370.0" y="30.0">C</text>
          <text x="123.4" y="26.0" text-anchor="end">D</text>
          <text x="154.3" y="193.1" text-anchor="middle">E</text>
          <text x="326.3" y="108.6">F</text>
          <text x="218.9" y="115.4" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'E ve F orta noktalar',
      'A(EBFK) = 9 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde A(EBFK) = 9 cm² olduğuna göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '27' },
      { key: 'B', text: '36' },
      { key: 'C', text: '45' },
      { key: 'D', text: '54' },
      { key: 'E', text: '72' },
    ],
    answer: 'D',
    hint: 'ABC üçgeninde [AF] ve [CE] kenarortaydır; K ağırlık merkezidir.',
    solution: [
      {
        title: 'Ağırlık merkezi',
        detail:
          'ABC üçgeninde [AF] ve [CE] kenarortay olduğundan K ağırlık merkezidir.',
      },
      {
        title: 'Altı eş parça',
        detail:
          'Üç kenarortay ABC üçgenini alanları eşit altı üçgene ayırır; EBFK bu parçalardan ikisidir, yani A(EBFK) = A(ABC) / 3 olur.',
      },
      {
        title: 'Üçgenin alanı',
        detail:
          'A(ABC) = 3 · 9 = 27 cm² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Köşegen paralelkenarı iki eş üçgene ayırdığından A(ABCD) = 2 · 27 = 54 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 64
  {
    id: 'quadrilaterals-64',
    topic: 'Paralelkenarda açıortay ve ikizkenar üçgen',
    figure: {
      viewBox: '0 0 400 209',
      caption: 'Şekil 64',
      label:
        'ABCD paralelkenarında [DE] D açısının, [EF] DEB açısının açıortayı; E noktası [AB], F noktası [DC] üzerinde, |DE| = 9, |BC| = 8 ve |EB| = 6 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,174.6 L304.5,174.6 L360.0,34.0 L95.5,34.0 Z"/>
          <path class="ln" d="M95.5,34.0 L191.1,174.6 L265.5,34.0"/>
          <path class="arc" d="M86.0,58.2 A26,26 0 0 0 110.1,55.5"/>
          <path class="arc" d="M97.8,54.9 L98.9,64.8"/>
          <path class="arc" d="M110.1,55.5 A26,26 0 0 0 121.5,34.0"/>
          <path class="arc" d="M114.1,43.8 L122.9,48.5"/>
          <path class="arc" d="M202.4,153.4 A24,24 0 0 0 177.6,154.7"/>
          <path class="arc" d="M187.8,155.7 L187.3,145.8"/>
          <path class="arc" d="M192.3,155.5 L191.8,145.5"/>
          <path class="arc" d="M215.1,174.6 A24,24 0 0 0 202.4,153.4"/>
          <path class="arc" d="M206.3,162.9 L214.8,157.7"/>
          <path class="arc" d="M208.6,166.7 L217.1,161.6"/>
          <text class="val" x="131.7" y="117.2" text-anchor="middle">9</text>
          <text class="val" x="345.3" y="114.4" text-anchor="middle">8</text>
          <text class="val" x="247.8" y="191.6" text-anchor="middle">6</text>
          <circle class="pt" cx="40.0" cy="174.6" r="3.2"/>
          <circle class="pt" cx="304.5" cy="174.6" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="95.5" cy="34.0" r="3.2"/>
          <circle class="pt" cx="191.1" cy="174.6" r="3.2"/>
          <circle class="pt" cx="265.5" cy="34.0" r="3.2"/>
          <text x="30.0" y="188.6" text-anchor="end">A</text>
          <text x="314.5" y="188.6">B</text>
          <text x="370.0" y="30.0">C</text>
          <text x="87.5" y="26.0" text-anchor="end">D</text>
          <text x="191.1" y="196.6" text-anchor="middle">E</text>
          <text x="265.5" y="22.0" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DE] ve [EF] açıortay',
      '|DE| = 9 cm',
      '|BC| = 8 cm',
      '|EB| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |FC| kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'A',
    hint: '[DC] // [AB] olduğundan açıortaylar iç ters açılarla ikizkenar üçgenler oluşturur.',
    solution: [
      {
        title: 'ADE ikizkenar',
        detail:
          'm(ADE) = m(EDC) = m(DEA) olduğundan ADE ikizkenardır: |AE| = |AD| = 8 cm.',
      },
      {
        title: 'Kenar uzunluğu',
        detail:
          '|DC| = |AB| = 8 + 6 = 14 cm olur.',
      },
      {
        title: 'DEF ikizkenar',
        detail:
          'm(DEF) = m(FEB) = m(DFE) olduğundan DEF ikizkenardır: |DF| = |DE| = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|FC| = 14 − 9 = 5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 65
  {
    id: 'quadrilaterals-65',
    topic: 'Eşkenar dörtgende köşegen ve açı',
    figure: {
      viewBox: '0 0 400 253',
      caption: 'Şekil 65',
      label:
        'ABCD eşkenar dörtgeninin köşegenleri E noktasında kesişiyor; F noktası [ED] üzerinde, AFD açısı 105° ve ABC açısı α olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M146.7,34.0 L40.0,218.8 L253.3,218.8 L360.0,34.0 Z"/>
          <path class="ln" d="M146.7,34.0 L253.3,218.8"/>
          <path class="ln" d="M40.0,218.8 L360.0,34.0"/>
          <path class="ln" d="M146.7,34.0 L224.8,112.1"/>
          <path class="arc" d="M238.6,104.1 A16,16 0 0 0 213.4,100.8"/>
          <path class="arc" d="M66.0,218.8 A26,26 0 0 0 53.0,196.2"/>
          <text class="val" x="228.8" y="90.1" text-anchor="start">105°</text>
          <text class="val" x="74.0" y="214.8" text-anchor="start">α</text>
          <circle class="pt" cx="146.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="218.8" r="3.2"/>
          <circle class="pt" cx="253.3" cy="218.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="126.4" r="3.2"/>
          <circle class="pt" cx="224.8" cy="112.1" r="3.2"/>
          <text x="136.7" y="28.0" text-anchor="end">A</text>
          <text x="30.0" y="232.8" text-anchor="end">B</text>
          <text x="263.3" y="232.8">C</text>
          <text x="370.0" y="28.0">D</text>
          <text x="200.0" y="150.4" text-anchor="middle">E</text>
          <text x="238.8" y="116.1">F</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      'm(AFD) = 105°',
      'm(FAD) = 3m(EAF)',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '50' },
      { key: 'C', text: '60' },
      { key: 'D', text: '70' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'Köşegenler dik kesiştiğinden AEF dik üçgeninde EAF açısını bul.',
    solution: [
      {
        title: 'AEF dik üçgeni',
        detail:
          'Köşegenler dik kesiştiğinden m(AEF) = 90° ve m(AFE) = 180° − 105° = 75° olur; buradan m(EAF) = 15°.',
      },
      {
        title: 'A açısının yarısı',
        detail:
          'm(FAD) = 3 · 15° = 45° olduğundan m(EAD) = 15° + 45° = 60° olur.',
      },
      {
        title: 'ADE açısı',
        detail:
          'AED dik üçgeninde m(ADE) = 90° − 60° = 30° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Köşegenler açıortay olduğundan m(ADC) = 60° ve karşı açı olarak α = m(ABC) = 60° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 66
  {
    id: 'quadrilaterals-66',
    topic: 'Paralelkenarda açıortaylar ve orta taban',
    figure: {
      viewBox: '0 0 400 212',
      caption: 'Şekil 66',
      label:
        'ABCD paralelkenarında D ve C açılarının açıortayları F noktasında kesişiyor; E noktası [AB] kenarının orta noktası, [EF] doğru parçası çizilmiş, |DC| = 8, |BC| = 14 ve |EF| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M92.3,34.0 L40.0,177.7 L307.7,177.7 L360.0,34.0 Z"/>
          <path class="ln" d="M66.2,105.9 L257.4,105.9"/>
          <path class="ln" d="M360.0,34.0 L257.4,105.9 L307.7,177.7"/>
          <path class="tick" d="M83.9,71.6 L74.5,68.2"/>
          <path class="tick" d="M57.8,143.5 L48.4,140.1"/>
          <path class="arc" d="M334.0,34.0 A26,26 0 0 0 338.7,48.9"/>
          <path class="arc" d="M340.0,40.3 L330.4,43.3"/>
          <path class="arc" d="M338.7,48.9 A26,26 0 0 0 351.1,58.4"/>
          <path class="arc" d="M347.2,50.7 L341.1,58.6"/>
          <path class="arc" d="M315.9,155.2 A24,24 0 0 0 293.9,158.1"/>
          <path class="arc" d="M303.0,159.2 L301.7,149.3"/>
          <path class="arc" d="M307.4,158.6 L306.1,148.7"/>
          <path class="arc" d="M293.9,158.1 A24,24 0 0 0 283.7,177.7"/>
          <path class="arc" d="M289.8,171.0 L280.9,166.3"/>
          <path class="arc" d="M291.9,167.0 L283.0,162.4"/>
          <text class="val" x="161.8" y="122.9" text-anchor="middle">x</text>
          <text class="val" x="347.0" y="115.7" text-anchor="middle">8</text>
          <text class="val" x="173.8" y="194.7" text-anchor="middle">14</text>
          <circle class="pt" cx="92.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="177.7" r="3.2"/>
          <circle class="pt" cx="307.7" cy="177.7" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="66.2" cy="105.9" r="3.2"/>
          <circle class="pt" cx="257.4" cy="105.9" r="3.2"/>
          <text x="84.3" y="26.0" text-anchor="end">A</text>
          <text x="30.0" y="191.7" text-anchor="end">B</text>
          <text x="317.7" y="191.7">C</text>
          <text x="370.0" y="28.0">D</text>
          <text x="56.2" y="111.9" text-anchor="end">E</text>
          <text x="257.4" y="93.9" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|AE| = |EB|',
      '|DC| = 8 cm',
      '|BC| = 14 cm',
    ],
    stem: [],
    ask: 'Aynı işaretli açılar eşit olduğuna göre, |EF| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'E',
    hint: 'Ardışık iki açının açıortayları dik kesişir; F noktası [BC] ye paralel orta doğru üzerindedir.',
    solution: [
      {
        title: 'Dik açı',
        detail:
          'm(D) + m(C) = 180° olduğundan yarıları toplamı 90° olur; m(DFC) = 90°.',
      },
      {
        title: 'Orta doğru',
        detail:
          'F, [AD] ve [BC] kenarlarına eşit uzaklıktadır; bu yüzden [BC] ye paralel olan ve E den geçen orta doğru üzerindedir. Bu doğru [DC] yi orta noktası G de keser ve |EG| = |BC| = 14 cm olur.',
      },
      {
        title: 'Kenarortay',
        detail:
          'DFC dik üçgeninde [FG] hipotenüse ait kenarortaydır: |FG| = |DC| / 2 = 4 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |EG| − |FG| = 14 − 4 = 10 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 67
  {
    id: 'quadrilaterals-67',
    topic: 'Eşkenar dörtgen içinde eşkenar üçgen',
    figure: {
      viewBox: '0 0 400 337',
      caption: 'Şekil 67',
      label:
        'ABCD eşkenar dörtgeninin içinde BEC eşkenar üçgeni çizilmiş; E noktası D ye birleştirilmiş, BAD açısı 80° ve ADE açısı x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,302.5 L312.7,302.5 L360.0,34.0 L87.3,34.0 Z"/>
          <path class="ln" d="M87.3,34.0 L103.8,127.3 L360.0,34.0"/>
          <path class="ln" d="M103.8,127.3 L312.7,302.5"/>
          <path class="tick" d="M211.4,211.1 L205.0,218.7"/>
          <path class="tick" d="M233.6,85.3 L230.2,75.9"/>
          <path class="tick" d="M341.3,169.1 L331.4,167.4"/>
          <path class="arc" d="M66.0,302.5 A26,26 0 0 0 44.5,276.9"/>
          <path class="arc" d="M80.4,73.4 A40,40 0 0 0 94.3,73.4"/>
          <text class="val" x="73.7" y="279.2" text-anchor="middle">80°</text>
          <text class="val" x="87.3" y="99.0" text-anchor="middle">x</text>
          <circle class="pt" cx="40.0" cy="302.5" r="3.2"/>
          <circle class="pt" cx="312.7" cy="302.5" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="87.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="103.8" cy="127.3" r="3.2"/>
          <text x="28.7" y="325.8" text-anchor="end">A</text>
          <text x="324.0" y="325.8">B</text>
          <text x="371.3" y="28.7">C</text>
          <text x="76.0" y="28.7" text-anchor="end">D</text>
          <text x="88.5" y="137.9" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      'BEC eşkenar üçgen',
      'm(BAD) = 80°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '15' },
      { key: 'C', text: '20' },
      { key: 'D', text: '25' },
      { key: 'E', text: '30' },
    ],
    answer: 'C',
    hint: '|CE| = |CB| = |CD| olduğundan DCE üçgeni ikizkenardır.',
    solution: [
      {
        title: 'Karşı açılar',
        detail:
          'm(BCD) = m(BAD) = 80° ve m(ADC) = 180° − 80° = 100° olur.',
      },
      {
        title: 'DCE açısı',
        detail:
          'BEC eşkenar üçgen olduğundan m(BCE) = 60°; m(DCE) = 80° − 60° = 20° olur.',
      },
      {
        title: 'DCE ikizkenar',
        detail:
          '|CD| = |CB| = |CE| olduğundan m(CDE) = (180° − 20°) / 2 = 80° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = m(ADC) − m(CDE) = 100° − 80° = 20° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 68
  {
    id: 'quadrilaterals-68',
    topic: 'Eşkenar dörtgende köşegen ve ikizkenar üçgenler',
    figure: {
      viewBox: '0 0 400 337',
      caption: 'Şekil 68',
      label:
        'ABCD eşkenar dörtgeninde F noktası [AC] köşegeni üzerinde, E noktası [BC] üzerinde; |AF| = |AB| ve |BF| = |BE| eşit işaretli, BCD açısı 80° ve DFE açısı x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,302.5 L312.7,302.5 L360.0,34.0 L87.3,34.0 Z"/>
          <path class="ln" d="M40.0,302.5 L248.9,127.3"/>
          <path class="ln" d="M87.3,34.0 L248.9,127.3 L312.7,302.5"/>
          <path class="ln" d="M248.9,127.3 L345.0,118.8"/>
          <path class="tick" d="M147.6,218.7 L141.2,211.1"/>
          <path class="tick" d="M176.3,307.5 L176.3,297.5"/>
          <path class="tick" d="M286.1,215.1 L276.7,218.5"/>
          <path class="tick" d="M284.8,211.3 L275.4,214.7"/>
          <path class="tick" d="M333.4,213.5 L323.6,211.8"/>
          <path class="tick" d="M334.1,209.6 L324.3,207.8"/>
          <path class="arc" d="M355.5,59.6 A26,26 0 0 1 334.0,34.0"/>
          <path class="arc" d="M233.3,118.3 A18,18 0 0 1 266.8,125.7"/>
          <text class="val" x="326.3" y="67.3" text-anchor="middle">80°</text>
          <text class="val" x="255.8" y="101.0" text-anchor="middle">x</text>
          <circle class="pt" cx="40.0" cy="302.5" r="3.2"/>
          <circle class="pt" cx="312.7" cy="302.5" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="87.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="248.9" cy="127.3" r="3.2"/>
          <circle class="pt" cx="345.0" cy="118.8" r="3.2"/>
          <text x="26.3" y="322.7" text-anchor="end">A</text>
          <text x="324.0" y="325.8">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="76.0" y="28.7" text-anchor="end">D</text>
          <text x="248.9" y="155.3" text-anchor="middle">F</text>
          <text x="361.0" y="124.8">E</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      'F ∈ [AC], E ∈ [BC]',
      '|AF| = |AB|',
      '|BF| = |BE|',
      'm(BCD) = 80°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DFE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '125' },
      { key: 'B', text: '130' },
      { key: 'C', text: '135' },
      { key: 'D', text: '140' },
      { key: 'E', text: '145' },
    ],
    answer: 'E',
    hint: 'Köşegen [AC], A açısını ikiye böler; ABF ve ADF eş ikizkenar üçgenlerdir.',
    solution: [
      {
        title: 'A açısı',
        detail:
          'm(BAD) = m(BCD) = 80°; köşegen açıortay olduğundan m(BAF) = m(DAF) = 40° olur.',
      },
      {
        title: 'ABF ve ADF',
        detail:
          '|AF| = |AB| = |AD| olduğundan m(AFB) = m(AFD) = (180° − 40°) / 2 = 70° olur.',
      },
      {
        title: 'FBE açısı',
        detail:
          'm(ABC) = 100° ve m(ABF) = 70° olduğundan m(FBE) = 30° olur.',
      },
      {
        title: 'BFE ikizkenar',
        detail:
          '|BF| = |BE| olduğundan m(BFE) = (180° − 30°) / 2 = 75° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'F etrafındaki açılar toplamı 360° olduğundan x = 360° − 70° − 70° − 75° = 145° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 69
  {
    id: 'quadrilaterals-69',
    topic: 'Paralelkenarda açıortay ve çevre',
    figure: {
      viewBox: '0 0 400 210',
      caption: 'Şekil 69',
      label:
        'ABCD paralelkenarında [DF] D açısının, [CE] C açısının açıortayı; E ve F noktaları [AB] üzerinde, açıortaylar kesişiyor, |DC| = 13 ve |EF| = 3 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,175.6 L294.0,175.6 L360.0,34.0 L106.0,34.0 Z"/>
          <path class="ln" d="M106.0,34.0 L196.3,175.6"/>
          <path class="ln" d="M360.0,34.0 L137.7,175.6"/>
          <path class="arc" d="M95.1,57.6 A26,26 0 0 0 120.0,55.9"/>
          <path class="arc" d="M107.4,55.0 L108.1,64.9"/>
          <path class="arc" d="M120.0,55.9 A26,26 0 0 0 132.0,34.0"/>
          <path class="arc" d="M124.5,44.1 L133.2,48.9"/>
          <path class="arc" d="M334.0,34.0 A26,26 0 0 0 338.1,48.0"/>
          <path class="arc" d="M340.2,41.1 L330.8,44.4"/>
          <path class="arc" d="M339.5,38.7 L329.8,40.9"/>
          <path class="arc" d="M338.1,48.0 A26,26 0 0 0 349.0,57.6"/>
          <path class="arc" d="M347.1,50.6 L341.0,58.5"/>
          <path class="arc" d="M345.2,48.9 L338.2,56.0"/>
          <text class="val" x="233.0" y="53.0" text-anchor="middle">13</text>
          <text class="val" x="167.0" y="196.6" text-anchor="middle">3</text>
          <circle class="pt" cx="40.0" cy="175.6" r="3.2"/>
          <circle class="pt" cx="294.0" cy="175.6" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="106.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="137.7" cy="175.6" r="3.2"/>
          <circle class="pt" cx="196.3" cy="175.6" r="3.2"/>
          <text x="26.3" y="195.9" text-anchor="end">A</text>
          <text x="307.7" y="195.9">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="92.3" y="31.8" text-anchor="end">D</text>
          <text x="137.7" y="203.6" text-anchor="middle">E</text>
          <text x="196.3" y="203.6" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[CE] ve [DF] açıortay',
      '|DC| = 13 cm',
      '|EF| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, Ç(ABCD) kaç cm dir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '38' },
      { key: 'C', text: '40' },
      { key: 'D', text: '42' },
      { key: 'E', text: '44' },
    ],
    answer: 'D',
    hint: '[DC] // [AB] olduğundan her açıortay bir ikizkenar üçgen ayırır.',
    solution: [
      {
        title: 'ADF ikizkenar',
        detail:
          'm(ADF) = m(FDC) = m(DFA) olduğundan |AF| = |AD| olur.',
      },
      {
        title: 'BCE ikizkenar',
        detail:
          'm(BCE) = m(ECD) = m(CEB) olduğundan |BE| = |BC| = |AD| olur.',
      },
      {
        title: 'Kenar uzunluğu',
        detail:
          'Parçalar [EF] üzerinde çakıştığından |AB| = |AF| + |BE| − |EF|: 13 = 2|AD| − 3, |AD| = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'Ç(ABCD) = 2 · (13 + 8) = 42 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 70
  {
    id: 'quadrilaterals-70',
    topic: 'Eşkenar dörtgende benzerlik',
    figure: {
      viewBox: '0 0 400 268',
      caption: 'Şekil 70',
      label:
        'ABCD eşkenar dörtgeninde D den çizilen doğru [AC] köşegenini E de, [BC] kenarını F de, [AB] nin uzantısını K da kesiyor; |DE| = 6 ve |EF| = 4 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M360.0,234.5 L40.0,234.5 L113.0,34.0 L326.3,34.0 L253.3,234.5"/>
          <path class="ln" d="M40.0,234.5 L326.3,34.0"/>
          <path class="ln" d="M113.0,34.0 L360.0,234.5"/>
          <text class="val" x="154.8" y="88.4" text-anchor="middle">6</text>
          <text class="val" x="237.2" y="155.2" text-anchor="middle">4</text>
          <circle class="pt" cx="40.0" cy="234.5" r="3.2"/>
          <circle class="pt" cx="253.3" cy="234.5" r="3.2"/>
          <circle class="pt" cx="326.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="113.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="211.8" cy="114.2" r="3.2"/>
          <circle class="pt" cx="277.7" cy="167.6" r="3.2"/>
          <circle class="pt" cx="360.0" cy="234.5" r="3.2"/>
          <text x="26.3" y="254.7" text-anchor="end">A</text>
          <text x="253.3" y="262.5" text-anchor="middle">B</text>
          <text x="340.0" y="31.8">C</text>
          <text x="99.2" y="31.8" text-anchor="end">D</text>
          <text x="208.6" y="141.9" text-anchor="middle">E</text>
          <text x="293.0" y="169.0">F</text>
          <text x="373.7" y="254.7">K</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      'K, [AB] kenarının uzantısı üzerinde',
      '|DE| = 6 cm',
      '|EF| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |FK| kaç cm dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' },
      { key: 'E', text: '7' },
    ],
    answer: 'C',
    hint: '[DC] // [AK] olduğundan E noktası çevresinde iki ayrı benzer üçgen çifti vardır.',
    solution: [
      {
        title: 'EDC ~ EKA',
        detail:
          '[DC] // [AK] olduğundan EDC ~ EKA: |DE| / |EK| = |EC| / |EA|.',
      },
      {
        title: 'ECF ~ EAD',
        detail:
          '[BC] // [AD] olduğundan ECF ~ EAD: |EF| / |DE| = |EC| / |EA|.',
      },
      {
        title: 'Oranları eşitle',
        detail:
          '|DE| / |EK| = |EF| / |DE| olur; yani |DE|² = |EF| · |EK|: 36 = 4 · |EK|, |EK| = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|FK| = |EK| − |EF| = 9 − 4 = 5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 71
  {
    id: 'quadrilaterals-71',
    topic: 'Paralelkenarda benzerlik ve oran',
    figure: {
      viewBox: '0 0 400 217',
      caption: 'Şekil 71',
      label:
        'ABCD paralelkenarında F noktası [AB], E noktası [DC] üzerinde; [AE] ve [DF] doğru parçaları K noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M40.0,183.3 L296.0,183.3 L360.0,34.0 L104.0,34.0 Z"/>
          <path class="ln" d="M40.0,183.3 L274.7,34.0"/>
          <path class="ln" d="M104.0,34.0 L104.0,183.3"/>
          <circle class="pt" cx="40.0" cy="183.3" r="3.2"/>
          <circle class="pt" cx="296.0" cy="183.3" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="104.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="274.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="104.0" cy="183.3" r="3.2"/>
          <circle class="pt" cx="104.0" cy="142.6" r="3.2"/>
          <text x="26.3" y="203.6" text-anchor="end">A</text>
          <text x="309.7" y="203.6">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="90.3" y="31.8" text-anchor="end">D</text>
          <text x="274.7" y="24.0" text-anchor="middle">E</text>
          <text x="104.0" y="211.3" text-anchor="middle">F</text>
          <text x="118.9" y="154.5">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|FB| = 3|AF|',
      '|DE| = 2|EC|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AK| / |KE| oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/4' },
      { key: 'B', text: '1/3' },
      { key: 'C', text: '3/8' },
      { key: 'D', text: '2/5' },
      { key: 'E', text: '1/2' },
    ],
    answer: 'C',
    hint: '[AF] // [DE] olduğundan AKF ve EKD üçgenleri benzerdir.',
    solution: [
      {
        title: 'Kenarı parçala',
        detail:
          '|AF| = a dersek |AB| = 4a olur; |DC| = 4a ve |DE| = 2|EC| olduğundan |DE| = 8a / 3.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[AB] // [DC] olduğundan AKF ~ EKD olur: |AK| / |KE| = |AF| / |DE|.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AK| / |KE| = a / (8a / 3) = 3/8 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 72
  {
    id: 'quadrilaterals-72',
    topic: 'Paralelkenarda açıortay, yükseklik ve alan',
    figure: {
      viewBox: '0 0 400 184',
      caption: 'Şekil 72',
      label:
        'ABCD paralelkenarında [AE] A açısının açıortayı, E noktası [DC] üzerinde ve [BE] kenara dik; |AD| = 10 ve |AB| = 16 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,150.4 L272.7,150.4 L360.0,34.0 L127.3,34.0 Z"/>
          <path class="ln" d="M40.0,150.4 L272.7,34.0 L272.7,150.4"/>
          <path class="arc" d="M261.7,34.0 L261.7,45.0 L272.7,45.0"/>
          <path class="arc" d="M70.0,150.4 A30,30 0 0 0 66.8,136.9"/>
          <path class="arc" d="M64.3,144.6 L74.1,142.3"/>
          <path class="arc" d="M66.8,136.9 A30,30 0 0 0 58.0,126.4"/>
          <path class="arc" d="M59.2,134.3 L66.9,127.9"/>
          <text class="val" x="94.8" y="105.6" text-anchor="middle">10</text>
          <text class="val" x="156.4" y="139.4" text-anchor="middle">16</text>
          <circle class="pt" cx="40.0" cy="150.4" r="3.2"/>
          <circle class="pt" cx="272.7" cy="150.4" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="127.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="272.7" cy="34.0" r="3.2"/>
          <text x="26.3" y="170.6" text-anchor="end">A</text>
          <text x="286.4" y="170.6">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="113.6" y="31.8" text-anchor="end">D</text>
          <text x="272.7" y="24.0" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[BE] ⊥ [DC]',
      '[AE] açıortay',
      '|AD| = 10 cm',
      '|AB| = 16 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '112' },
      { key: 'C', text: '128' },
      { key: 'D', text: '144' },
      { key: 'E', text: '160' },
    ],
    answer: 'C',
    hint: 'Açıortay ADE üçgenini ikizkenar yapar; önce |EC| yi bul.',
    solution: [
      {
        title: 'ADE ikizkenar',
        detail:
          'm(DAE) = m(EAB) = m(DEA) olduğundan |DE| = |AD| = 10 cm olur.',
      },
      {
        title: 'EC parçası',
        detail:
          '|DC| = 16 olduğundan |EC| = 16 − 10 = 6 cm; ayrıca |BC| = |AD| = 10 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'BEC dik üçgeninde |BE|² = 10² − 6² = 64, |BE| = 8 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |DC| · |BE| = 16 · 8 = 128 cm² bulunur.',
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
    'Dörtgende iç ve dış açılar, açıortaylar, köşegenleri dik ya da karşılıklı iki açısı dik dörtgenler, köşegenlerle alan, paralelkenar ve eşkenar dörtgen.',
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
    {
      id: 'quadrilaterals-m6',
      order: 6,
      title: 'Paralelkenar ve eşkenar dörtgen',
      summary:
        'Paralelkenarda açılar, açıortayların ayırdığı ikizkenar üçgenler, benzerlik, köşegenle alan ve eşkenar dörtgende köşegenler.',
      questions: pick(
        'quadrilaterals-31',
        'quadrilaterals-32',
        'quadrilaterals-33',
        'quadrilaterals-34',
        'quadrilaterals-35',
        'quadrilaterals-36',
      ),
    },
    {
      id: 'quadrilaterals-m7',
      order: 7,
      title: 'Paralelkenar ve eşkenar dörtgende alan',
      summary:
        'Dikme ile paralelkenarın alanı, köşegenin ayırdığı benzer üçgenlerle alan oranları, eşkenar dörtgende yükseklik ve üçgen içindeki eşkenar dörtgen.',
      questions: pick(
        'quadrilaterals-37',
        'quadrilaterals-38',
        'quadrilaterals-39',
        'quadrilaterals-40',
        'quadrilaterals-41',
        'quadrilaterals-42',
      ),
    },
    {
      id: 'quadrilaterals-m8',
      order: 8,
      title: 'Paralelkenar ve eşkenar dörtgende yükseklik, benzerlik ve alan',
      summary:
        'Eşkenar dörtgende eşit yükseklikler, açıortaylarla alan, köşegenlerin orta noktası, köşegen üzerinde benzerlik, eşkenar üçgen ve alan farkı.',
      questions: pick(
        'quadrilaterals-43',
        'quadrilaterals-44',
        'quadrilaterals-45',
        'quadrilaterals-46',
        'quadrilaterals-47',
        'quadrilaterals-48',
      ),
    },
    {
      id: 'quadrilaterals-m9',
      order: 9,
      title: 'Paralelkenarda açıortay, açı ve alan',
      summary:
        'Ardışık açıortaylarla çevre, açıortay ve açı hesabı, köşegen ve açıortayla alan oranları, iç bölgedeki nokta ve üçgen alanları.',
      questions: pick(
        'quadrilaterals-49',
        'quadrilaterals-50',
        'quadrilaterals-51',
        'quadrilaterals-52',
        'quadrilaterals-53',
        'quadrilaterals-54',
      ),
    },
    {
      id: 'quadrilaterals-m10',
      order: 10,
      title: 'Paralelkenar ve eşkenar dörtgende alan oranları ve köşegenler',
      summary:
        'Eşkenar üçgenle alan oranı, eşkenar dörtgende köşegenler, dik açıortaylarla çevre, köşegen üzerinde benzerlik ve bütünler açılarla alan.',
      questions: pick(
        'quadrilaterals-55',
        'quadrilaterals-56',
        'quadrilaterals-57',
        'quadrilaterals-58',
        'quadrilaterals-59',
        'quadrilaterals-60',
      ),
    },
    {
      id: 'quadrilaterals-m11',
      order: 11,
      title: 'Paralelkenar ve eşkenar dörtgende açıortay, yükseklik ve alan',
      summary:
        'Eşkenar dörtgende köşegenlerle yükseklik ve açı, iki yükseklikle kenar, kenarortaylarla alan, açıortaylarla ikizkenar üçgen ve orta doğru.',
      questions: pick(
        'quadrilaterals-61',
        'quadrilaterals-62',
        'quadrilaterals-63',
        'quadrilaterals-64',
        'quadrilaterals-65',
        'quadrilaterals-66',
      ),
    },
    {
      id: 'quadrilaterals-m12',
      order: 12,
      title: 'Paralelkenar ve eşkenar dörtgende ikizkenar üçgenler ve benzerlik',
      summary:
        'Eşkenar dörtgen içinde eşkenar ve ikizkenar üçgenler, açıortaylarla çevre, köşegen üzerinde benzerlik ve açıortayla alan.',
      questions: pick(
        'quadrilaterals-67',
        'quadrilaterals-68',
        'quadrilaterals-69',
        'quadrilaterals-70',
        'quadrilaterals-71',
        'quadrilaterals-72',
      ),
    },
  ],
};
