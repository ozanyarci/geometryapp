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
  // ---------------------------------------------------------------- 73
  {
    id: 'quadrilaterals-73',
    topic: 'Paralelkenarda yamuk alanı ve oran',
    figure: {
      viewBox: '0 0 400 222',
      caption: 'Şekil 73',
      label:
        'ABCD paralelkenarında F noktası [AD], E noktası [BC] üzerinde; ABEF dörtgeni taralı.',
      svg: `
          <path class="shade" d="M40.0,188.1 L277.0,188.1 L326.8,95.6 L64.9,141.9 Z"/>
          <path class="ln" d="M40.0,188.1 L277.0,188.1 L360.0,34.0 L123.0,34.0 Z"/>
          <path class="ln" d="M64.9,141.9 L326.8,95.6"/>
          <circle class="pt" cx="40.0" cy="188.1" r="3.2"/>
          <circle class="pt" cx="277.0" cy="188.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="123.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="326.8" cy="95.6" r="3.2"/>
          <circle class="pt" cx="64.9" cy="141.9" r="3.2"/>
          <text x="26.3" y="208.3" text-anchor="end">A</text>
          <text x="290.7" y="208.3">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="109.3" y="31.8" text-anchor="end">D</text>
          <text x="340.8" y="99.6">E</text>
          <text x="50.9" y="145.9" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'A(ABEF) = 27 cm²',
      'A(ABCD) = 60 cm²',
      '2|BE| = 3|EC|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DF| / |AF| oranı kaçtır?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '7/3' },
      { key: 'C', text: '5/2' },
      { key: 'D', text: '3' },
      { key: 'E', text: '7/2' },
    ],
    answer: 'B',
    hint: 'ABEF, [AF] // [BE] olan bir yamuktur ve yüksekliği paralelkenarın yüksekliğiyle aynıdır.',
    solution: [
      {
        title: 'Kenarı parçala',
        detail:
          '|BC| = |AD| = 5a dersek 2|BE| = 3|EC| olduğundan |BE| = 3a, |EC| = 2a olur.',
      },
      {
        title: 'Alanları yaz',
        detail:
          'Yükseklik h ise A(ABCD) = 5a · h = 60 ve A(ABEF) = (|AF| + 3a) · h / 2 = 27 olur.',
      },
      {
        title: 'Oranla',
        detail:
          'İki eşitlik oranlanırsa (|AF| + 3a) / (10a) = 27 / 60 = 9/20; |AF| + 3a = 4,5a, |AF| = 1,5a.',
      },
      {
        title: 'Sonuç',
        detail:
          '|DF| = 5a − 1,5a = 3,5a olduğundan |DF| / |AF| = 3,5 / 1,5 = 7/3 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 74
  {
    id: 'quadrilaterals-74',
    topic: 'Paralelkenarda köşegenler ve benzerlik',
    figure: {
      viewBox: '0 0 400 187',
      caption: 'Şekil 74',
      label:
        'ABCD paralelkenarında [AC] ve [BD] köşegenleri F noktasında kesişiyor; E noktası [AB] üzerinde, [DE] doğru parçası [AC] yi K noktasında kesiyor; |KF| = 6 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,152.5 L277.0,152.5 L360.0,34.0 L123.0,34.0 Z"/>
          <path class="ln" d="M40.0,152.5 L360.0,34.0"/>
          <path class="ln" d="M277.0,152.5 L123.0,34.0"/>
          <path class="ln" d="M123.0,34.0 L99.3,152.5"/>
          <text class="val" x="148.0" y="101.0" text-anchor="middle">6</text>
          <circle class="pt" cx="40.0" cy="152.5" r="3.2"/>
          <circle class="pt" cx="277.0" cy="152.5" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="123.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="99.3" cy="152.5" r="3.2"/>
          <circle class="pt" cx="200.0" cy="93.3" r="3.2"/>
          <circle class="pt" cx="104.0" cy="128.8" r="3.2"/>
          <text x="26.3" y="172.7" text-anchor="end">A</text>
          <text x="290.7" y="172.7">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="109.3" y="31.8" text-anchor="end">D</text>
          <text x="99.3" y="180.5" text-anchor="middle">E</text>
          <text x="200.0" y="81.3" text-anchor="middle">F</text>
          <text x="110.0" y="148.8">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[AC] ve [BD] köşegen',
      '|EB| = 3|AE|',
      '|KF| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| kaç cm dir?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '18' },
      { key: 'C', text: '20' },
      { key: 'D', text: '24' },
      { key: 'E', text: '30' },
    ],
    answer: 'C',
    hint: '[AE] // [DC] olduğundan AKE ve CKD üçgenleri benzerdir.',
    solution: [
      {
        title: 'Kenarı parçala',
        detail:
          '|AE| = a dersek |AB| = 4a, dolayısıyla |DC| = 4a olur.',
      },
      {
        title: 'Benzerlik',
        detail:
          'AKE ~ CKD olduğundan |AK| / |KC| = |AE| / |DC| = 1/4 olur; |AK| = t, |KC| = 4t, |AC| = 5t.',
      },
      {
        title: 'Köşegenin orta noktası',
        detail:
          'Paralelkenarda köşegenler birbirini ortalar: |AF| = 5t / 2, |KF| = 5t / 2 − t = 3t / 2.',
      },
      {
        title: 'Sonuç',
        detail:
          '3t / 2 = 6 ise t = 4 ve |AC| = 5 · 4 = 20 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 75
  {
    id: 'quadrilaterals-75',
    topic: 'Eşkenar dörtgende dikme ve köşegen',
    figure: {
      viewBox: '0 0 400 253',
      caption: 'Şekil 75',
      label:
        'ABCD eşkenar dörtgeninde D den [BC] kenarına çizilen dikme F de kenarı, E de [AC] köşegenini kesiyor; DEC açısı 120° ve |CE| = 6 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,218.8 L253.3,218.8 L360.0,34.0 L146.7,34.0 Z"/>
          <path class="ln" d="M40.0,218.8 L360.0,34.0"/>
          <path class="ln" d="M146.7,34.0 L306.7,126.4"/>
          <path class="arc" d="M312.2,116.8 L302.6,111.3 L297.1,120.9"/>
          <path class="arc" d="M237.7,86.6 A18,18 0 0 1 268.9,86.6"/>
          <text class="val" x="257.3" y="69.6" text-anchor="middle">120°</text>
          <text class="val" x="312.7" y="78.8" text-anchor="middle">6</text>
          <circle class="pt" cx="40.0" cy="218.8" r="3.2"/>
          <circle class="pt" cx="253.3" cy="218.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="146.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="253.3" cy="95.6" r="3.2"/>
          <circle class="pt" cx="306.7" cy="126.4" r="3.2"/>
          <text x="26.3" y="239.0" text-anchor="end">A</text>
          <text x="267.0" y="239.0">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="133.0" y="31.8" text-anchor="end">D</text>
          <text x="253.3" y="119.6" text-anchor="middle">E</text>
          <text x="320.7" y="132.4">F</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[DF] ⊥ [BC]',
      'm(DEC) = 120°',
      '|CE| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AE| kaç cm dir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '12' },
      { key: 'D', text: '14' },
      { key: 'E', text: '15' },
    ],
    answer: 'C',
    hint: 'Köşegen C açısını ikiye böler; EFC dik üçgeninde bu yarım açıyı bul.',
    solution: [
      {
        title: 'Yarım açı',
        detail:
          'm(ACB) = m(ACD) = θ dersek EFC dik üçgeninde m(FEC) = 90° − θ olur; m(DEC) = 180° − (90° − θ) = 90° + θ = 120°, θ = 30°.',
      },
      {
        title: 'DEC ikizkenar',
        detail:
          'DEC üçgeninde m(ECD) = 30°, m(DEC) = 120° olduğundan m(EDC) = 30° ve |DE| = |CE| = 6 cm.',
      },
      {
        title: 'Kenar',
        detail:
          'DEC üçgeninde E den [DC] ye inen dikme kenarı ortalar: |DC| = 2 · 6 · cos 30° = 6√3 cm.',
      },
      {
        title: 'Köşegen',
        detail:
          'C açısı 60° olduğundan |AC| = 2 · |DC| · cos 30° = 2 · 6√3 · √3/2 = 18 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AE| = |AC| − |CE| = 18 − 6 = 12 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 76
  {
    id: 'quadrilaterals-76',
    topic: 'Paralelkenarda benzerlik ve orta taban',
    figure: {
      viewBox: '0 0 400 251',
      caption: 'Şekil 76',
      label:
        'ABCD paralelkenarında E noktası [AD], F noktası [DC] üzerinde; [BE] ile [AC] K noktasında kesişiyor; |KC| = 16 ve |EF| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M85.7,34.0 L360.0,34.0 L314.3,216.9 L40.0,216.9 Z"/>
          <path class="ln" d="M85.7,34.0 L314.3,216.9"/>
          <path class="ln" d="M40.0,216.9 L291.4,34.0"/>
          <path class="ln" d="M291.4,34.0 L348.6,79.7"/>
          <text class="val" x="304.0" y="64.9" text-anchor="middle">x</text>
          <text class="val" x="263.0" y="158.6" text-anchor="middle">16</text>
          <circle class="pt" cx="85.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="216.9" r="3.2"/>
          <circle class="pt" cx="314.3" cy="216.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="291.4" cy="34.0" r="3.2"/>
          <circle class="pt" cx="348.6" cy="79.7" r="3.2"/>
          <circle class="pt" cx="183.7" cy="112.4" r="3.2"/>
          <text x="72.0" y="31.8" text-anchor="end">A</text>
          <text x="373.7" y="31.8">D</text>
          <text x="26.3" y="237.1" text-anchor="end">B</text>
          <text x="328.0" y="237.1">C</text>
          <text x="291.4" y="22.0" text-anchor="middle">E</text>
          <text x="362.6" y="85.7">F</text>
          <text x="183.7" y="136.4" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[AC] ∩ [BE] = {K}',
      '|AE| = 3|ED|',
      '|CF| = 3|DF|',
      '|KC| = 16 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |EF| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'Önce AKE ~ CKB benzerliğiyle |AC| yi, sonra DEF ~ DAC benzerliğiyle x i bul.',
    solution: [
      {
        title: 'Kenarı parçala',
        detail:
          '|ED| = a dersek |AE| = 3a, |AD| = |BC| = 4a olur.',
      },
      {
        title: 'AKE ~ CKB',
        detail:
          '[AE] // [BC] olduğundan |AK| / |KC| = |AE| / |BC| = 3/4; |KC| = 16 ise |AK| = 12 ve |AC| = 28 cm.',
      },
      {
        title: 'DEF ~ DAC',
        detail:
          '|DE| / |DA| = |DF| / |DC| = 1/4 olduğundan [EF] // [AC] ve |EF| = |AC| / 4.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 28 / 4 = 7 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 77
  {
    id: 'quadrilaterals-77',
    topic: 'Paralelkenarda üçgenin alanı',
    figure: {
      viewBox: '0 0 400 205',
      caption: 'Şekil 77',
      label:
        'ABCD paralelkenarında E noktası [DC] nin orta noktası, F noktası [BC] üzerinde; AEF üçgeni taralı.',
      svg: `
          <path class="shade" d="M40.0,171.1 L245.7,34.0 L329.5,79.7 Z"/>
          <path class="ln" d="M40.0,171.1 L268.6,171.1 L360.0,34.0 L131.4,34.0 Z"/>
          <path class="ln" d="M40.0,171.1 L245.7,34.0 L329.5,79.7 Z"/>
          <path class="tick" d="M186.6,29.0 L186.6,39.0"/>
          <path class="tick" d="M190.6,29.0 L190.6,39.0"/>
          <path class="tick" d="M300.9,29.0 L300.9,39.0"/>
          <path class="tick" d="M304.9,29.0 L304.9,39.0"/>
          <circle class="pt" cx="40.0" cy="171.1" r="3.2"/>
          <circle class="pt" cx="268.6" cy="171.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="131.4" cy="34.0" r="3.2"/>
          <circle class="pt" cx="245.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="329.5" cy="79.7" r="3.2"/>
          <text x="26.3" y="191.3" text-anchor="end">A</text>
          <text x="282.3" y="191.3">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="117.7" y="31.8" text-anchor="end">D</text>
          <text x="245.7" y="22.0" text-anchor="middle">E</text>
          <text x="343.5" y="85.7">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|DE| = |EC|',
      '|BF| = 2|FC|',
      'A(ABCD) = 48 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(AEF) kaç cm² dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '16' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'C',
    hint: 'Taralı üçgen dışında kalan üç üçgenin alanını paralelkenar cinsinden yaz.',
    solution: [
      {
        title: 'ADE',
        detail:
          'ADE üçgeninin tabanı |DC| nin yarısı, yüksekliği paralelkenarınki: A(ADE) = 48 / 4 = 12 cm².',
      },
      {
        title: 'ABF',
        detail:
          'ABF üçgeninin kenarı |BC| nin 2/3 ü: A(ABF) = (2/3) · 48 / 2 = 16 cm².',
      },
      {
        title: 'ECF',
        detail:
          'A(ECF) = (1/2) · (1/3) · 48 / 2 = 4 cm² (C açısı ortak, kenarlar |DC| / 2 ve |BC| / 3).',
      },
      {
        title: 'Sonuç',
        detail:
          'A(AEF) = 48 − 12 − 16 − 4 = 16 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 78
  {
    id: 'quadrilaterals-78',
    topic: 'Eşkenar dörtgende yükseklik ve köşegen',
    figure: {
      viewBox: '0 0 400 228',
      caption: 'Şekil 78',
      label:
        'ABCD eşkenar dörtgeninde D den [AB] kenarına çizilen dikmenin ayağı H; [AC] köşegen, |AH| = 6 ve |HB| = 4 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,194.0 L240.0,194.0 L360.0,34.0 L160.0,34.0 Z"/>
          <path class="ln" d="M40.0,194.0 L360.0,34.0"/>
          <path class="ln" d="M160.0,34.0 L160.0,194.0"/>
          <path class="arc" d="M171.0,194.0 L171.0,183.0 L160.0,183.0"/>
          <text class="val" x="100.0" y="214.0" text-anchor="middle">6</text>
          <text class="val" x="200.0" y="214.0" text-anchor="middle">4</text>
          <circle class="pt" cx="40.0" cy="194.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="194.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="194.0" r="3.2"/>
          <text x="26.3" y="214.2" text-anchor="end">A</text>
          <text x="253.7" y="214.2">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="146.3" y="31.8" text-anchor="end">D</text>
          <text x="160.0" y="214.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[AC] köşegen',
      '[DH] ⊥ [AB]',
      '|AH| = 6 cm',
      '|HB| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| kaç cm dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '6√5' },
      { key: 'C', text: '16' },
      { key: 'D', text: '8√5' },
      { key: 'E', text: '10√3' },
    ],
    answer: 'D',
    hint: 'Kenar uzunluğu |AB| = 10 dur; önce ADH dik üçgeninden yüksekliği bul.',
    solution: [
      {
        title: 'Kenar',
        detail:
          '|AD| = |AB| = 6 + 4 = 10 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'ADH dik üçgeninde |DH|² = 10² − 6² = 64, |DH| = 8 cm.',
      },
      {
        title: 'Dik üçgen kur',
        detail:
          'C den AB doğrusuna inen dikmenin ayağı T ise |CT| = 8 ve |AT| = |AH| + |DC| = 6 + 10 = 16 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AC|² = 16² + 8² = 320, |AC| = 8√5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 79
  {
    id: 'quadrilaterals-79',
    topic: 'Paralelkenarda açıortay ve dik üçgen eşliği',
    figure: {
      viewBox: '0 0 400 172',
      caption: 'Şekil 79',
      label:
        'ABCD paralelkenarında E noktası [AB], F noktası [BC] üzerinde; [DF], EDC açısının açıortayı ve [EF] ⊥ [ED]; |ED| = x, |EF| = 3, |FC| = 5 ve |DC| = 10 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M178.7,34.0 L360.0,34.0 L221.3,138.0 L40.0,138.0 Z"/>
          <path class="ln" d="M40.0,138.0 L271.6,34.0"/>
          <path class="ln" d="M40.0,138.0 L293.8,83.6"/>
          <path class="ln" d="M271.6,34.0 L293.8,83.6"/>
          <path class="arc" d="M262.4,38.1 L266.5,47.2 L275.7,43.1"/>
          <path class="arc" d="M71.0,124.1 A34,34 0 0 1 73.2,130.9"/>
          <path class="tick" d="M67.6,129.0 L77.1,125.9"/>
          <path class="arc" d="M73.2,130.9 A34,34 0 0 1 74.0,138.0"/>
          <path class="tick" d="M68.8,135.0 L78.8,133.9"/>
          <text class="val" x="150.4" y="79.1" text-anchor="middle">x</text>
          <text class="val" x="292.7" y="59.3" text-anchor="middle">3</text>
          <text class="val" x="249.8" y="105.4" text-anchor="middle">5</text>
          <text class="val" x="130.7" y="157.0" text-anchor="middle">10</text>
          <circle class="pt" cx="178.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="221.3" cy="138.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="138.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="34.0" r="3.2"/>
          <circle class="pt" cx="293.8" cy="83.6" r="3.2"/>
          <text x="178.7" y="22.0" text-anchor="middle">A</text>
          <text x="373.7" y="31.8">B</text>
          <text x="221.3" y="160.0" text-anchor="middle">C</text>
          <text x="26.3" y="158.2" text-anchor="end">D</text>
          <text x="271.6" y="22.0" text-anchor="middle">E</text>
          <text x="305.8" y="89.6">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 172',
      caption: 'Şekil 79',
      label:
        'ABCD paralelkenarında F den DC doğrusuna inen dikmenin ayağı H; H noktası [DC] nin C den sonraki uzantısında.',
      svg: `
          <path class="ln" d="M178.7,34.0 L360.0,34.0 L221.3,138.0 L40.0,138.0 Z"/>
          <path class="ln" d="M40.0,138.0 L271.6,34.0"/>
          <path class="ln" d="M40.0,138.0 L293.8,83.6"/>
          <path class="ln" d="M271.6,34.0 L293.8,83.6"/>
          <path class="arc" d="M262.4,38.1 L266.5,47.2 L275.7,43.1"/>
          <path class="arc" d="M71.0,124.1 A34,34 0 0 1 73.2,130.9"/>
          <path class="tick" d="M67.6,129.0 L77.1,125.9"/>
          <path class="arc" d="M73.2,130.9 A34,34 0 0 1 74.0,138.0"/>
          <path class="tick" d="M68.8,135.0 L78.8,133.9"/>
          <text class="val" x="150.4" y="79.1" text-anchor="middle">x</text>
          <text class="val" x="292.7" y="59.3" text-anchor="middle">3</text>
          <text class="val" x="249.8" y="105.4" text-anchor="middle">5</text>
          <text class="val" x="130.7" y="157.0" text-anchor="middle">10</text>
          <path class="aux" d="M221.3,138.0 L293.8,138.0"/>
          <path class="aux" d="M293.8,83.6 L293.8,138.0"/>
          <path class="arc" d="M283.8,138.0 L283.8,128.0 L293.8,128.0"/>
          <circle class="pt" cx="178.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="221.3" cy="138.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="138.0" r="3.2"/>
          <circle class="pt" cx="271.6" cy="34.0" r="3.2"/>
          <circle class="pt" cx="293.8" cy="83.6" r="3.2"/>
          <text x="178.7" y="22.0" text-anchor="middle">A</text>
          <text x="373.7" y="31.8">B</text>
          <text x="221.3" y="160.0" text-anchor="middle">C</text>
          <text x="26.3" y="158.2" text-anchor="end">D</text>
          <text x="271.6" y="22.0" text-anchor="middle">E</text>
          <text x="305.8" y="89.6">F</text>
          <circle class="pt" cx="293.8" cy="138.0" r="3.2"/>
          <text x="293.8" y="160.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'm(EDF) = m(FDC)',
      '[EF] ⊥ [ED]',
      '|FC| = 5 cm',
      '|DC| = 10 cm',
      '|EF| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |ED| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '11' },
      { key: 'C', text: '12' },
      { key: 'D', text: '13' },
      { key: 'E', text: '14' },
    ],
    answer: 'E',
    hint: 'F den DC doğrusuna bir dikme in; açıortay üzerindeki nokta açının kollarına eşit uzaklıktadır.',
    solution: [
      {
        title: 'Dikme',
        detail:
          'F den DC doğrusuna dikme in, ayağı H olsun. F açıortay üzerinde olduğundan |FH| = |FE| = 3 cm.',
      },
      {
        title: 'Eş üçgenler',
        detail:
          'DEF ve DHF dik üçgenleri eştir (ortak hipotenüs [DF], eşit açılar): |DH| = |DE| = x.',
      },
      {
        title: 'FHC dik üçgeni',
        detail:
          '|CH|² = 5² − 3² = 16, |CH| = 4 cm; H noktası [DC] nin C den sonraki uzantısındadır.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |DH| = |DC| + |CH| = 10 + 4 = 14 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 80
  {
    id: 'quadrilaterals-80',
    topic: 'Eşkenar dörtgende köşegenler ve Öklit bağıntısı',
    figure: {
      viewBox: '0 0 400 253',
      caption: 'Şekil 80',
      label:
        'ABCD eşkenar dörtgeninde köşegenler F noktasında kesişiyor; F den [AB] kenarına çizilen dikmenin ayağı E; |AE| = 9 ve |EB| = 3 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,218.8 L253.3,218.8 L360.0,34.0 L146.7,34.0 Z"/>
          <path class="ln" d="M40.0,218.8 L360.0,34.0"/>
          <path class="ln" d="M253.3,218.8 L146.7,34.0"/>
          <path class="ln" d="M200.0,126.4 L200.0,218.8"/>
          <path class="arc" d="M210.0,218.8 L210.0,208.8 L200.0,208.8"/>
          <text class="val" x="120.0" y="209.8" text-anchor="middle">9</text>
          <text class="val" x="226.7" y="209.8" text-anchor="middle">3</text>
          <circle class="pt" cx="40.0" cy="218.8" r="3.2"/>
          <circle class="pt" cx="253.3" cy="218.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="146.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="218.8" r="3.2"/>
          <circle class="pt" cx="200.0" cy="126.4" r="3.2"/>
          <text x="26.3" y="239.0" text-anchor="end">A</text>
          <text x="267.0" y="239.0">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="133.0" y="31.8" text-anchor="end">D</text>
          <text x="200.0" y="240.8" text-anchor="middle">E</text>
          <text x="200.0" y="114.4" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[AC] ∩ [BD] = {F}',
      '[FE] ⊥ [AB]',
      '|AE| = 9 cm',
      '|EB| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABCD eşkenar dörtgeninin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '36√3' },
      { key: 'B', text: '48√3' },
      { key: 'C', text: '54√3' },
      { key: 'D', text: '72√3' },
      { key: 'E', text: '96√3' },
    ],
    answer: 'D',
    hint: 'Eşkenar dörtgenin köşegenleri diktir; AFB dik üçgeninde Öklit bağıntılarını kullan.',
    solution: [
      {
        title: 'Dik üçgen',
        detail:
          'Köşegenler dik kesiştiğinden AFB dik üçgendir ve [FE] hipotenüse ait yüksekliktir; |AB| = 9 + 3 = 12 cm.',
      },
      {
        title: 'Öklit',
        detail:
          '|AF|² = |AE| · |AB| = 9 · 12 = 108, |AF| = 6√3 cm; |BF|² = |EB| · |AB| = 3 · 12 = 36, |BF| = 6 cm.',
      },
      {
        title: 'Köşegenler',
        detail:
          '|AC| = 2 · 6√3 = 12√3 cm, |BD| = 2 · 6 = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |AC| · |BD| / 2 = 12√3 · 12 / 2 = 72√3 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 81
  {
    id: 'quadrilaterals-81',
    topic: 'Paralelkenarda benzerlik ve alan oranı',
    figure: {
      viewBox: '0 0 400 281',
      caption: 'Şekil 81',
      label:
        'ABCD paralelkenarında [BC] nin C den sonraki uzantısında E noktası; [AE] doğru parçası [BD] köşegenini K, [DC] kenarını F noktasında kesiyor; DKF üçgeni taralı; |AK| = 6 ve |FE| = 9 olarak işaretlenmiş.',
      svg: `
          <path class="shade" d="M111.1,140.7 L146.7,176.2 L200.0,140.7 Z"/>
          <path class="ln" d="M40.0,247.3 L217.8,247.3 L288.9,140.7 L111.1,140.7 Z"/>
          <path class="ln" d="M288.9,140.7 L360.0,34.0"/>
          <path class="ln" d="M40.0,247.3 L360.0,34.0"/>
          <path class="ln" d="M111.1,140.7 L217.8,247.3"/>
          <text class="val" x="100.5" y="227.6" text-anchor="middle">6</text>
          <text class="val" x="287.2" y="103.1" text-anchor="middle">9</text>
          <circle class="pt" cx="40.0" cy="247.3" r="3.2"/>
          <circle class="pt" cx="217.8" cy="247.3" r="3.2"/>
          <circle class="pt" cx="288.9" cy="140.7" r="3.2"/>
          <circle class="pt" cx="111.1" cy="140.7" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="140.7" r="3.2"/>
          <circle class="pt" cx="146.7" cy="176.2" r="3.2"/>
          <text x="26.3" y="267.5" text-anchor="end">A</text>
          <text x="231.5" y="267.5">B</text>
          <text x="300.9" y="146.7">C</text>
          <text x="97.4" y="138.5" text-anchor="end">D</text>
          <text x="373.7" y="31.8">E</text>
          <text x="186.3" y="138.5" text-anchor="end">F</text>
          <text x="146.7" y="198.2" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'B, C, E doğrusal',
      '[AE] ∩ [BD] = {K}',
      '[AE] ∩ [DC] = {F}',
      '|AK| = 6 cm',
      '|FE| = 9 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, DKF üçgeninin alanının ABCD paralelkenarının alanına oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/12' },
      { key: 'B', text: '1/15' },
      { key: 'C', text: '1/16' },
      { key: 'D', text: '1/18' },
      { key: 'E', text: '1/24' },
    ],
    answer: 'A',
    hint: '|KF| = y deyip iki benzerlik yaz: KDF ~ KBA ve FDA ~ FCE.',
    solution: [
      {
        title: 'Bilinmeyen',
        detail:
          '|KF| = y ve |AB| = |DC| = 1 birim olsun. KDF ~ KBA: |DF| / |AB| = |KF| / |KA| = y/6, yani |DF| = y/6 ve |FC| = 1 − y/6.',
      },
      {
        title: 'İkinci benzerlik',
        detail:
          '[AD] // [CE] olduğundan FDA ~ FCE: |DF| / |FC| = |AF| / |FE| = (6 + y) / 9.',
      },
      {
        title: 'Denklem',
        detail:
          '(y/6) / (1 − y/6) = (6 + y) / 9 ⇒ 9y = (6 + y)(6 − y) = 36 − y² ⇒ y² + 9y − 36 = 0 ⇒ y = 3. Böylece |DF| / |AB| = 1/2 ve |DK| / |KB| = 1/2.',
      },
      {
        title: 'Alanlar',
        detail:
          'A(ABCD) = S dersek A(ABD) = S/2 ve |DK| = |DB| / 3 olduğundan A(ADK) = S/6. A(DKF) / A(ADK) = |KF| / |KA| = 3/6.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(DKF) = (1/2) · S/6 = S/12; oran 1/12 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 82
  {
    id: 'quadrilaterals-82',
    topic: 'Paralelkenarda dikmeler ve dik üçgen',
    figure: {
      viewBox: '0 0 400 228',
      caption: 'Şekil 82',
      label:
        'ABCD paralelkenarında H noktası [AB] üzerinde; [HE] ⊥ [AD] ve [FH] ⊥ [AB], E noktası [AD], F noktası [DC] üzerinde; |AH| = 10, |EH| = 8, |FH| = 12 ve |FC| = 14 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,194.0 L240.0,194.0 L360.0,34.0 L160.0,34.0 Z"/>
          <path class="ln" d="M173.3,194.0 L88.0,130.0"/>
          <path class="ln" d="M173.3,194.0 L173.3,34.0"/>
          <path class="arc" d="M82.0,138.0 L90.0,144.0 L96.0,136.0"/>
          <path class="arc" d="M183.3,194.0 L183.3,184.0 L173.3,184.0"/>
          <text class="val" x="106.7" y="213.0" text-anchor="middle">10</text>
          <text class="val" x="137.9" y="157.4" text-anchor="middle">8</text>
          <text class="val" x="186.3" y="119.0" text-anchor="middle">12</text>
          <text class="val" x="266.7" y="51.0" text-anchor="middle">14</text>
          <circle class="pt" cx="40.0" cy="194.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="194.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="88.0" cy="130.0" r="3.2"/>
          <circle class="pt" cx="173.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="173.3" cy="194.0" r="3.2"/>
          <text x="26.3" y="214.2" text-anchor="end">A</text>
          <text x="240.0" y="216.0" text-anchor="middle">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="146.3" y="31.8" text-anchor="end">D</text>
          <text x="76.0" y="136.0" text-anchor="end">E</text>
          <text x="173.3" y="22.0" text-anchor="middle">F</text>
          <text x="173.3" y="216.0" text-anchor="middle">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 228',
      caption: 'Şekil 82',
      label:
        'ABCD paralelkenarında C den AB doğrusuna inen dikmenin ayağı T; T noktası [AB] nin B den sonraki uzantısında.',
      svg: `
          <path class="ln" d="M40.0,194.0 L240.0,194.0 L360.0,34.0 L160.0,34.0 Z"/>
          <path class="ln" d="M173.3,194.0 L88.0,130.0"/>
          <path class="ln" d="M173.3,194.0 L173.3,34.0"/>
          <path class="arc" d="M82.0,138.0 L90.0,144.0 L96.0,136.0"/>
          <path class="arc" d="M183.3,194.0 L183.3,184.0 L173.3,184.0"/>
          <text class="val" x="106.7" y="213.0" text-anchor="middle">10</text>
          <text class="val" x="137.9" y="157.4" text-anchor="middle">8</text>
          <text class="val" x="186.3" y="119.0" text-anchor="middle">12</text>
          <text class="val" x="266.7" y="51.0" text-anchor="middle">14</text>
          <path class="aux" d="M240.0,194.0 L360.0,194.0"/>
          <path class="aux" d="M360.0,34.0 L360.0,194.0"/>
          <path class="arc" d="M350.0,194.0 L350.0,184.0 L360.0,184.0"/>
          <circle class="pt" cx="40.0" cy="194.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="194.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="88.0" cy="130.0" r="3.2"/>
          <circle class="pt" cx="173.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="173.3" cy="194.0" r="3.2"/>
          <text x="26.3" y="214.2" text-anchor="end">A</text>
          <text x="240.0" y="216.0" text-anchor="middle">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="146.3" y="31.8" text-anchor="end">D</text>
          <text x="76.0" y="136.0" text-anchor="end">E</text>
          <text x="173.3" y="22.0" text-anchor="middle">F</text>
          <text x="173.3" y="216.0" text-anchor="middle">H</text>
          <circle class="pt" cx="360.0" cy="194.0" r="3.2"/>
          <text x="373.7" y="214.2">T</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[HE] ⊥ [AD]',
      '[FH] ⊥ [AB]',
      '|AH| = 10 cm',
      '|EH| = 8 cm',
      '|FH| = 12 cm',
      '|FC| = 14 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |HB| kaç cm dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '9/2' },
      { key: 'D', text: '5' },
      { key: 'E', text: '11/2' },
    ],
    answer: 'D',
    hint: 'C den AB doğrusuna bir dikme in; B deki dış açı A açısına eşittir.',
    solution: [
      {
        title: 'A açısı',
        detail:
          'AEH dik üçgeninde |AE|² = 10² − 8² = 36, |AE| = 6 cm; tan A = |EH| / |AE| = 8/6 = 4/3.',
      },
      {
        title: 'Dikme',
        detail:
          'C den AB doğrusuna dikme in, ayağı T olsun. HFCT dikdörtgen olduğundan |CT| = |FH| = 12 cm ve |HT| = |FC| = 14 cm.',
      },
      {
        title: 'BCT dik üçgeni',
        detail:
          '[AD] // [BC] olduğundan m(CBT) = m(A); tan A = |CT| / |BT| = 12 / |BT| = 4/3, |BT| = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|HB| = |HT| − |BT| = 14 − 9 = 5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 83
  {
    id: 'quadrilaterals-83',
    topic: 'Paralelkenarda köşegen üzerindeki paralelkenarlar',
    figure: {
      viewBox: '0 0 400 179',
      caption: 'Şekil 83',
      label:
        'ABCD paralelkenarında K noktası [AC] köşegeni üzerinde; K den geçen [EF] // [AB] ve [MN] // [CB]; E noktası [AD], F noktası [BC], M noktası [DC], N noktası [AB] üzerinde; |DE| = 3, |DM| = 10 ve |BF| = 5 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,144.9 L296.0,144.9 L360.0,34.0 L104.0,34.0 Z"/>
          <path class="ln" d="M40.0,144.9 L360.0,34.0"/>
          <path class="ln" d="M80.0,75.6 L336.0,75.6"/>
          <path class="ln" d="M264.0,34.0 L200.0,144.9"/>
          <text class="val" x="81.6" y="53.8" text-anchor="middle">3</text>
          <text class="val" x="184.0" y="51.0" text-anchor="middle">10</text>
          <text class="val" x="305.6" y="109.2" text-anchor="middle">5</text>
          <circle class="pt" cx="40.0" cy="144.9" r="3.2"/>
          <circle class="pt" cx="296.0" cy="144.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="104.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="75.6" r="3.2"/>
          <circle class="pt" cx="336.0" cy="75.6" r="3.2"/>
          <circle class="pt" cx="264.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="144.9" r="3.2"/>
          <circle class="pt" cx="240.0" cy="75.6" r="3.2"/>
          <text x="26.3" y="165.1" text-anchor="end">A</text>
          <text x="309.7" y="165.1">B</text>
          <text x="373.7" y="31.8">C</text>
          <text x="90.3" y="31.8" text-anchor="end">D</text>
          <text x="68.0" y="81.6" text-anchor="end">E</text>
          <text x="348.0" y="81.6">F</text>
          <text x="264.0" y="22.0" text-anchor="middle">M</text>
          <text x="200.0" y="166.9" text-anchor="middle">N</text>
          <text x="226.3" y="73.4" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'K ∈ [AC]',
      '[EF] // [AB]',
      '[MN] // [CB]',
      '|DE| = 3 cm',
      '|DM| = 10 cm',
      '|BF| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |NB| kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'B',
    hint: 'AEK ~ ADC ve ANK ~ ABC benzerliklerinde oran aynı: |AK| / |AC|.',
    solution: [
      {
        title: 'Kenarlar',
        detail:
          '|AE| = |NK| = |BF| = 5 cm olduğundan |AD| = 5 + 3 = 8 cm. |EK| = |AN| = |DM| = 10 cm.',
      },
      {
        title: 'Oran',
        detail:
          'AEK ~ ADC: |AK| / |AC| = |AE| / |AD| = 5/8.',
      },
      {
        title: 'Benzerlik',
        detail:
          'ANK ~ ABC: |AN| / |AB| = 5/8, yani 10 / |AB| = 5/8 ve |AB| = 16 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|NB| = |AB| − |AN| = 16 − 10 = 6 cm bulunur (ya da |DE| · |DM| = |BF| · |NB|: 3 · 10 = 5 · |NB|).',
      },
    ],
  },
  // ---------------------------------------------------------------- 84
  {
    id: 'quadrilaterals-84',
    topic: 'Eşkenar dörtgende benzerlik ve çevre',
    figure: {
      viewBox: '0 0 400 272',
      caption: 'Şekil 84',
      label:
        'ABCD eşkenar dörtgeninde E noktası [DC] üzerinde; [AE] ile [BD] köşegeni K noktasında kesişiyor; F noktası [AD] üzerinde ve [FK] // [DE]; |FK| = 3 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M135.1,34.0 L40.0,237.9 L264.9,237.9 L360.0,34.0 Z"/>
          <path class="ln" d="M135.1,34.0 L328.3,102.0"/>
          <path class="ln" d="M40.0,237.9 L360.0,34.0"/>
          <path class="ln" d="M303.8,34.0 L280.0,85.0"/>
          <text class="val" x="301.9" y="69.1" text-anchor="middle">3</text>
          <circle class="pt" cx="135.1" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="237.9" r="3.2"/>
          <circle class="pt" cx="264.9" cy="237.9" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="328.3" cy="102.0" r="3.2"/>
          <circle class="pt" cx="303.8" cy="34.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="85.0" r="3.2"/>
          <text x="121.4" y="31.8" text-anchor="end">A</text>
          <text x="26.3" y="258.1" text-anchor="end">B</text>
          <text x="278.6" y="258.1">C</text>
          <text x="373.7" y="31.8">D</text>
          <text x="340.3" y="108.0">E</text>
          <text x="303.8" y="22.0" text-anchor="middle">F</text>
          <text x="280.0" y="107.0" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '2|DE| = |EC|',
      '[AE] ∩ [BD] = {K}',
      '[FK] // [DE]',
      '|FK| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, Çevre(ABCD) kaç cm dir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '42' },
      { key: 'C', text: '48' },
      { key: 'D', text: '54' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'Önce KDE ~ KBA benzerliğiyle |AK| / |AE| oranını bul.',
    solution: [
      {
        title: 'Kenar',
        detail:
          '|DE| = a dersek |EC| = 2a ve kenar |AB| = |DC| = 3a olur.',
      },
      {
        title: 'KDE ~ KBA',
        detail:
          '[DE] // [AB] olduğundan |KE| / |KA| = |DE| / |AB| = a / 3a = 1/3; yani |AK| / |AE| = 3/4.',
      },
      {
        title: 'AFK ~ ADE',
        detail:
          '[FK] // [DE] olduğundan |FK| / |DE| = |AK| / |AE| = 3/4; 3 / a = 3/4, a = 4 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenar 3a = 12 cm, Çevre(ABCD) = 4 · 12 = 48 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 85
  {
    id: 'quadrilaterals-85',
    topic: 'Eşkenar dörtgende kenar orta dikme ve alan',
    figure: {
      viewBox: '0 0 400 213',
      caption: 'Şekil 85',
      label:
        'ABCD eşkenar dörtgeninde A, B, F doğrusal; [DF] doğru parçası [BC] yi E noktasında dik kesiyor; |DE| = |EF| = 6 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,172.6 L200.0,172.6 L280.0,34.0 L120.0,34.0 Z"/>
          <path class="ln" d="M200.0,172.6 L360.0,172.6"/>
          <path class="ln" d="M120.0,34.0 L360.0,172.6"/>
          <path class="arc" d="M245.0,94.6 L236.3,89.6 L231.3,98.3"/>
          <text class="val" x="174.0" y="84.0" text-anchor="middle">6</text>
          <text class="val" x="294.0" y="153.3" text-anchor="middle">6</text>
          <circle class="pt" cx="40.0" cy="172.6" r="3.2"/>
          <circle class="pt" cx="200.0" cy="172.6" r="3.2"/>
          <circle class="pt" cx="280.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="120.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="103.3" r="3.2"/>
          <circle class="pt" cx="360.0" cy="172.6" r="3.2"/>
          <text x="28.0" y="192.6" text-anchor="end">A</text>
          <text x="200.0" y="196.6" text-anchor="middle">B</text>
          <text x="292.0" y="30.0">C</text>
          <text x="108.0" y="30.0" text-anchor="end">D</text>
          <text x="252.0" y="109.3">E</text>
          <text x="372.0" y="192.6">F</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      'A, B, F doğrusal',
      '[DF] ⊥ [BC]',
      '|DE| = |EF| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '12√3' },
      { key: 'B', text: '18√3' },
      { key: 'C', text: '24√3' },
      { key: 'D', text: '36√3' },
      { key: 'E', text: '48√3' },
    ],
    answer: 'C',
    hint: '[BC], [DF] nin orta dikmesidir; B noktasının D ve F ye uzaklıklarını karşılaştır.',
    solution: [
      {
        title: 'Orta dikme',
        detail:
          'E noktası [DF] nin orta noktası ve [BC] ⊥ [DF] olduğundan [BC], [DF] nin orta dikmesidir; |BD| = |BF|.',
      },
      {
        title: 'F nin uzaklığı',
        detail:
          '[AD] // [BC] olduğundan m(FBC) = m(A). F nin BC doğrusuna uzaklığı |BF| · sin A = 6, D ninki |AB| · sin A = |DE| = 6; buradan |BF| = |AB|.',
      },
      {
        title: 'Eşkenar üçgen',
        detail:
          '|BD| = |BF| = |AB| = |AD| olduğundan ABD eşkenar üçgendir ve m(A) = 60° olur.',
      },
      {
        title: 'Kenar',
        detail:
          'Yükseklik |DE| = |AB| · √3/2 = 6, |AB| = 12/√3 = 4√3 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |BC| · |DE| = 4√3 · 6 = 24√3 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 86
  {
    id: 'quadrilaterals-86',
    topic: 'Paralelkenarın köşelerinden bir doğruya dikmeler',
    figure: {
      viewBox: '0 0 400 278',
      caption: 'Şekil 86',
      label:
        'ABCD paralelkenarının köşegenleri O noktasında kesişiyor; A, D, B, C köşelerinden d doğrusuna inen dikmelerin ayakları sırasıyla K, L, N, P; |AK| = 4, |DL| = 9, |BN| = 3 ve |CP| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M58.1,147.5 L262.5,170.3 L330.6,56.7 L126.2,34.0 Z"/>
          <path class="ln" d="M58.1,147.5 L330.6,56.7"/>
          <path class="ln" d="M262.5,170.3 L126.2,34.0"/>
          <path class="ln" d="M24.0,238.4 L376.0,238.4"/>
          <path class="ln" d="M58.1,147.5 L58.1,238.4"/>
          <path class="arc" d="M58.1,228.4 L68.1,228.4 L68.1,238.4"/>
          <path class="ln" d="M262.5,170.3 L262.5,238.4"/>
          <path class="arc" d="M262.5,228.4 L272.5,228.4 L272.5,238.4"/>
          <path class="ln" d="M126.2,34.0 L126.2,238.4"/>
          <path class="arc" d="M126.2,228.4 L136.2,228.4 L136.2,238.4"/>
          <path class="ln" d="M330.6,56.7 L330.6,238.4"/>
          <path class="arc" d="M330.6,228.4 L340.6,228.4 L340.6,238.4"/>
          <text class="val" x="70.1" y="198.0" text-anchor="middle">4</text>
          <text class="val" x="274.5" y="209.3" text-anchor="middle">3</text>
          <text class="val" x="138.2" y="141.2" text-anchor="middle">9</text>
          <text class="val" x="318.6" y="152.5" text-anchor="middle">x</text>
          <circle class="pt" cx="58.1" cy="147.5" r="3.2"/>
          <circle class="pt" cx="262.5" cy="170.3" r="3.2"/>
          <circle class="pt" cx="330.6" cy="56.7" r="3.2"/>
          <circle class="pt" cx="126.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="58.1" cy="238.4" r="3.2"/>
          <circle class="pt" cx="126.2" cy="238.4" r="3.2"/>
          <circle class="pt" cx="262.5" cy="238.4" r="3.2"/>
          <circle class="pt" cx="330.6" cy="238.4" r="3.2"/>
          <circle class="pt" cx="194.3" cy="102.1" r="3.2"/>
          <text x="46.1" y="143.5" text-anchor="end">A</text>
          <text x="274.5" y="166.3">B</text>
          <text x="342.6" y="52.7">C</text>
          <text x="126.2" y="22.0" text-anchor="middle">D</text>
          <text x="58.1" y="262.4" text-anchor="middle">K</text>
          <text x="126.2" y="262.4" text-anchor="middle">L</text>
          <text x="262.5" y="262.4" text-anchor="middle">N</text>
          <text x="330.6" y="262.4" text-anchor="middle">P</text>
          <text x="194.3" y="90.1" text-anchor="middle">O</text>
          <text x="382.0" y="230.4">d</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 278',
      caption: 'Şekil 86',
      label:
        'ABCD paralelkenarında O noktasından d doğrusuna inen dikmenin ayağı M; [OM] her iki yamuğun orta tabanıdır.',
      svg: `
          <path class="ln" d="M58.1,147.5 L262.5,170.3 L330.6,56.7 L126.2,34.0 Z"/>
          <path class="ln" d="M58.1,147.5 L330.6,56.7"/>
          <path class="ln" d="M262.5,170.3 L126.2,34.0"/>
          <path class="ln" d="M24.0,238.4 L376.0,238.4"/>
          <path class="ln" d="M58.1,147.5 L58.1,238.4"/>
          <path class="arc" d="M58.1,228.4 L68.1,228.4 L68.1,238.4"/>
          <path class="ln" d="M262.5,170.3 L262.5,238.4"/>
          <path class="arc" d="M262.5,228.4 L272.5,228.4 L272.5,238.4"/>
          <path class="ln" d="M126.2,34.0 L126.2,238.4"/>
          <path class="arc" d="M126.2,228.4 L136.2,228.4 L136.2,238.4"/>
          <path class="ln" d="M330.6,56.7 L330.6,238.4"/>
          <path class="arc" d="M330.6,228.4 L340.6,228.4 L340.6,238.4"/>
          <path class="aux" d="M194.3,102.1 L194.3,238.4"/>
          <path class="arc" d="M194.3,228.4 L204.3,228.4 L204.3,238.4"/>
          <text class="val" x="70.1" y="198.0" text-anchor="middle">4</text>
          <text class="val" x="274.5" y="209.3" text-anchor="middle">3</text>
          <text class="val" x="138.2" y="141.2" text-anchor="middle">9</text>
          <text class="val" x="318.6" y="152.5" text-anchor="middle">x</text>
          <circle class="pt" cx="58.1" cy="147.5" r="3.2"/>
          <circle class="pt" cx="262.5" cy="170.3" r="3.2"/>
          <circle class="pt" cx="330.6" cy="56.7" r="3.2"/>
          <circle class="pt" cx="126.2" cy="34.0" r="3.2"/>
          <circle class="pt" cx="58.1" cy="238.4" r="3.2"/>
          <circle class="pt" cx="126.2" cy="238.4" r="3.2"/>
          <circle class="pt" cx="262.5" cy="238.4" r="3.2"/>
          <circle class="pt" cx="330.6" cy="238.4" r="3.2"/>
          <circle class="pt" cx="194.3" cy="102.1" r="3.2"/>
          <circle class="pt" cx="194.3" cy="238.4" r="3.2"/>
          <text x="46.1" y="143.5" text-anchor="end">A</text>
          <text x="274.5" y="166.3">B</text>
          <text x="342.6" y="52.7">C</text>
          <text x="126.2" y="22.0" text-anchor="middle">D</text>
          <text x="58.1" y="262.4" text-anchor="middle">K</text>
          <text x="126.2" y="262.4" text-anchor="middle">L</text>
          <text x="262.5" y="262.4" text-anchor="middle">N</text>
          <text x="330.6" y="262.4" text-anchor="middle">P</text>
          <text x="194.3" y="90.1" text-anchor="middle">O</text>
          <text x="194.3" y="262.4" text-anchor="middle">M</text>
          <text x="382.0" y="230.4">d</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[AC] ∩ [BD] = {O}',
      '[AK] ⊥ d, [DL] ⊥ d, [BN] ⊥ d, [CP] ⊥ d',
      '|AK| = 4 cm, |BN| = 3 cm',
      '|DL| = 9 cm, |CP| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'D',
    hint: 'O noktasından d ye bir dikme in; O hem [AC] nin hem [BD] nin orta noktasıdır.',
    solution: [
      {
        title: 'Orta nokta',
        detail:
          'Paralelkenarda köşegenler birbirini ortalar; O noktası hem [AC] hem [BD] nin orta noktasıdır.',
      },
      {
        title: 'Orta taban',
        detail:
          'O dan d ye inen dikme [OM] olsun. AKPC yamuğunda |OM| = (|AK| + |CP|) / 2, DLNB yamuğunda |OM| = (|DL| + |BN|) / 2.',
      },
      {
        title: 'Eşitlik',
        detail:
          '|AK| + |CP| = |DL| + |BN|, yani 4 + x = 9 + 3.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 12 − 4 = 8 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 87
  {
    id: 'quadrilaterals-87',
    topic: 'Paralelkenarda köşegen uzunluğu',
    figure: {
      viewBox: '0 0 400 209',
      caption: 'Şekil 87',
      label:
        'ABCD paralelkenarında T noktası [AD] üzerinde ve [BT] ⊥ [AD]; köşegenler E noktasında kesişiyor; |AT| = |TD| = 8 ve |DE| = 5 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,168.7 L180.4,168.7 L360.0,34.0 L219.6,34.0 Z"/>
          <path class="ln" d="M40.0,168.7 L360.0,34.0"/>
          <path class="ln" d="M180.4,168.7 L219.6,34.0"/>
          <path class="ln" d="M180.4,168.7 L129.8,101.4"/>
          <path class="arc" d="M137.8,95.4 L143.8,103.4 L135.8,109.4"/>
          <text class="val" x="77.7" y="130.5" text-anchor="middle">8</text>
          <text class="val" x="167.5" y="63.1" text-anchor="middle">8</text>
          <text class="val" x="221.3" y="76.0" text-anchor="middle">5</text>
          <circle class="pt" cx="40.0" cy="168.7" r="3.2"/>
          <circle class="pt" cx="180.4" cy="168.7" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="219.6" cy="34.0" r="3.2"/>
          <circle class="pt" cx="129.8" cy="101.4" r="3.2"/>
          <circle class="pt" cx="200.0" cy="101.4" r="3.2"/>
          <text x="28.0" y="188.7" text-anchor="end">A</text>
          <text x="192.4" y="188.7">B</text>
          <text x="372.0" y="30.0">C</text>
          <text x="207.6" y="30.0" text-anchor="end">D</text>
          <text x="117.8" y="107.4" text-anchor="end">T</text>
          <text x="212.0" y="107.4">E</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[BT] ⊥ [AD]',
      '|AT| = |TD| = 8 cm',
      '|DE| = 5 cm',
      '[AC] ∩ [BD] = {E}',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| kaç cm dir?',
    choices: [
      { key: 'A', text: '4√17' },
      { key: 'B', text: '6√17' },
      { key: 'C', text: '2√170' },
      { key: 'D', text: '8√17' },
      { key: 'E', text: '10√17' },
    ],
    answer: 'B',
    hint: '[BT] hem yükseklik hem kenarortay; ABD üçgeninin türünü düşün.',
    solution: [
      {
        title: 'İkizkenar üçgen',
        detail:
          '[BT], ABD üçgeninde hem yükseklik hem kenarortay olduğundan |AB| = |BD| olur.',
      },
      {
        title: 'Köşegen',
        detail:
          'E, [BD] nin orta noktasıdır: |BD| = 2 · 5 = 10 cm, dolayısıyla |AB| = 10 cm ve |AD| = 16 cm.',
      },
      {
        title: 'Paralelkenar bağıntısı',
        detail:
          '|AC|² + |BD|² = 2 · (|AB|² + |AD|²) = 2 · (100 + 256) = 712.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AC|² = 712 − 100 = 612, |AC| = 6√17 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 88
  {
    id: 'quadrilaterals-88',
    topic: 'Paralelkenarda yükseklik ve alan',
    figure: {
      viewBox: '0 0 400 294',
      caption: 'Şekil 88',
      label:
        'ABCD paralelkenarında D köşesinden [BC] ye inen dikmenin ayağı H noktası.',
      svg: `
          <path class="ln" d="M73.3,254.0 L224.9,225.5 L326.7,34.0 L175.1,62.5 Z"/>
          <path class="ln" d="M175.1,62.5 L281.5,119.1"/>
          <path class="arc" d="M286.2,110.3 L277.3,105.6 L272.6,114.4"/>
          <circle class="pt" cx="73.3" cy="254.0" r="3.2"/>
          <circle class="pt" cx="224.9" cy="225.5" r="3.2"/>
          <circle class="pt" cx="326.7" cy="34.0" r="3.2"/>
          <circle class="pt" cx="175.1" cy="62.5" r="3.2"/>
          <circle class="pt" cx="281.5" cy="119.1" r="3.2"/>
          <text x="61.3" y="274.0" text-anchor="end">A</text>
          <text x="236.9" y="245.5">B</text>
          <text x="338.7" y="30.0">C</text>
          <text x="163.1" y="58.5" text-anchor="end">D</text>
          <text x="293.5" y="125.1">H</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DH] ⊥ [BC]',
      '|DH| + |BC| = 14 cm',
      '|DH|² + |DA|² = 106 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '35' },
      { key: 'B', text: '38' },
      { key: 'C', text: '40' },
      { key: 'D', text: '42' },
      { key: 'E', text: '45' },
    ],
    answer: 'E',
    hint: '|DA| = |BC| olduğunu kullan ve toplamın karesini aç.',
    solution: [
      {
        title: 'Karşılıklı kenar',
        detail:
          'Paralelkenarda |DA| = |BC| olduğundan |DH|² + |BC|² = 106.',
      },
      {
        title: 'Kare alma',
        detail:
          '(|DH| + |BC|)² = |DH|² + |BC|² + 2 · |DH| · |BC|, yani 196 = 106 + 2 · |DH| · |BC|.',
      },
      {
        title: 'Çarpım',
        detail:
          '|DH| · |BC| = 90 / 2 = 45.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |BC| · |DH| = 45 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 89
  {
    id: 'quadrilaterals-89',
    topic: 'Paralelkenarda benzerlik ve taralı alan',
    figure: {
      viewBox: '0 0 400 234',
      caption: 'Şekil 89',
      label:
        'ABCD paralelkenarında E noktası [BC] üzerinde; [AE] ile [BD] köşegeni F noktasında kesişiyor; DFEC dörtgeni taralı.',
      svg: `
          <path class="shade" d="M93.3,34.0 L221.3,130.0 L342.2,87.3 L360.0,34.0 Z"/>
          <path class="ln" d="M40.0,194.0 L306.7,194.0 L360.0,34.0 L93.3,34.0 Z"/>
          <path class="ln" d="M93.3,34.0 L306.7,194.0"/>
          <path class="ln" d="M40.0,194.0 L342.2,87.3"/>
          <circle class="pt" cx="40.0" cy="194.0" r="3.2"/>
          <circle class="pt" cx="306.7" cy="194.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="93.3" cy="34.0" r="3.2"/>
          <circle class="pt" cx="342.2" cy="87.3" r="3.2"/>
          <circle class="pt" cx="221.3" cy="130.0" r="3.2"/>
          <text x="28.0" y="214.0" text-anchor="end">A</text>
          <text x="318.7" y="214.0">B</text>
          <text x="372.0" y="30.0">C</text>
          <text x="81.3" y="30.0" text-anchor="end">D</text>
          <text x="354.2" y="93.3">E</text>
          <text x="221.3" y="154.0" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'A(ABCD) = 60 cm²',
      '|EB| = 2|EC|',
      '[AE] ∩ [BD] = {F}',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, taralı A(DFEC) kaç cm² dir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '22' },
      { key: 'C', text: '24' },
      { key: 'D', text: '26' },
      { key: 'E', text: '28' },
    ],
    answer: 'B',
    hint: 'A(DFEC) = A(DBC) − A(FBE); FBE ile FDA benzerdir.',
    solution: [
      {
        title: 'Yarım alan',
        detail:
          'Köşegen paralelkenarı iki eş üçgene ayırır: A(DBC) = 60 / 2 = 30 cm².',
      },
      {
        title: 'ABE üçgeni',
        detail:
          '|EB| = 2k, |EC| = k ise |BC| = 3k. ABE ile ABC nin yükseklikleri aynıdır: A(ABE) = 30 · 2/3 = 20 cm².',
      },
      {
        title: 'Benzerlik',
        detail:
          '[BE] // [AD] olduğundan FBE ~ FDA ve |FE| / |FA| = |BE| / |AD| = 2/3; yani |FE| / |AE| = 2/5.',
      },
      {
        title: 'FBE üçgeni',
        detail:
          'A(FBE) = A(ABE) · 2/5 = 20 · 2/5 = 8 cm².',
      },
      {
        title: 'Sonuç',
        detail:
          'A(DFEC) = A(DBC) − A(FBE) = 30 − 8 = 22 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 90
  {
    id: 'quadrilaterals-90',
    topic: 'Eşkenar dörtgende açıortaylar ve uzaklık',
    figure: {
      viewBox: '0 0 400 314',
      caption: 'Şekil 90',
      label:
        'ABCD eşkenar dörtgeninde A ve D açılarının açıortayları E noktasında kesişiyor; E den [BC] ye inen dikmenin ayağı F; |AE| = 12, |DE| = 16 ve |EF| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M110.0,274.0 L360.0,274.0 L290.0,34.0 L40.0,34.0 Z"/>
          <path class="ln" d="M110.0,274.0 L200.0,154.0 L40.0,34.0"/>
          <path class="ln" d="M200.0,154.0 L315.2,120.4"/>
          <path class="arc" d="M312.4,110.8 L302.8,113.6 L305.6,123.2"/>
          <path class="arc" d="M194.6,161.2 L187.4,155.8 L192.8,148.6"/>
          <path class="arc" d="M132.0,274.0 A22,22 0 0,0 123.2,256.4"/>
          <path class="arc" d="M125.2,266.4 L134.1,261.9"/>
          <path class="arc" d="M123.2,256.4 A22,22 0 0,0 103.8,252.9"/>
          <path class="arc" d="M113.0,257.3 L114.8,247.4"/>
          <path class="arc" d="M47.3,59.0 A26,26 0 0,0 60.8,49.6"/>
          <path class="arc" d="M52.0,51.3 L57.6,59.5"/>
          <path class="arc" d="M60.8,49.6 A26,26 0 0,0 66.0,34.0"/>
          <path class="arc" d="M59.9,40.6 L69.4,43.8"/>
          <text class="val" x="164.6" y="226.2" text-anchor="middle">12</text>
          <text class="val" x="112.8" y="108.6" text-anchor="middle">16</text>
          <text class="val" x="261.0" y="153.7" text-anchor="middle">x</text>
          <circle class="pt" cx="110.0" cy="274.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="274.0" r="3.2"/>
          <circle class="pt" cx="290.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="154.0" r="3.2"/>
          <circle class="pt" cx="315.2" cy="120.4" r="3.2"/>
          <text x="98.0" y="294.0" text-anchor="end">A</text>
          <text x="372.0" y="294.0">B</text>
          <text x="302.0" y="30.0">C</text>
          <text x="28.0" y="30.0" text-anchor="end">D</text>
          <text x="200.0" y="142.0" text-anchor="middle">E</text>
          <text x="327.2" y="126.4">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 314',
      caption: 'Şekil 90',
      label:
        'ABCD eşkenar dörtgeninde E den [AD] ye inen dikmenin ayağı G; G, E, F doğrusal.',
      svg: `
          <path class="ln" d="M110.0,274.0 L360.0,274.0 L290.0,34.0 L40.0,34.0 Z"/>
          <path class="ln" d="M110.0,274.0 L200.0,154.0 L40.0,34.0"/>
          <path class="ln" d="M200.0,154.0 L315.2,120.4"/>
          <path class="arc" d="M312.4,110.8 L302.8,113.6 L305.6,123.2"/>
          <path class="arc" d="M194.6,161.2 L187.4,155.8 L192.8,148.6"/>
          <path class="arc" d="M132.0,274.0 A22,22 0 0,0 123.2,256.4"/>
          <path class="arc" d="M125.2,266.4 L134.1,261.9"/>
          <path class="arc" d="M123.2,256.4 A22,22 0 0,0 103.8,252.9"/>
          <path class="arc" d="M113.0,257.3 L114.8,247.4"/>
          <path class="arc" d="M47.3,59.0 A26,26 0 0,0 60.8,49.6"/>
          <path class="arc" d="M52.0,51.3 L57.6,59.5"/>
          <path class="arc" d="M60.8,49.6 A26,26 0 0,0 66.0,34.0"/>
          <path class="arc" d="M59.9,40.6 L69.4,43.8"/>
          <path class="aux" d="M200.0,154.0 L84.8,187.6"/>
          <path class="arc" d="M82.0,178.0 L91.6,175.2 L94.4,184.8"/>
          <text class="val" x="164.6" y="226.2" text-anchor="middle">12</text>
          <text class="val" x="112.8" y="108.6" text-anchor="middle">16</text>
          <text class="val" x="261.0" y="153.7" text-anchor="middle">x</text>
          <circle class="pt" cx="110.0" cy="274.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="274.0" r="3.2"/>
          <circle class="pt" cx="290.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="154.0" r="3.2"/>
          <circle class="pt" cx="315.2" cy="120.4" r="3.2"/>
          <circle class="pt" cx="84.8" cy="187.6" r="3.2"/>
          <text x="98.0" y="294.0" text-anchor="end">A</text>
          <text x="372.0" y="294.0">B</text>
          <text x="302.0" y="30.0">C</text>
          <text x="28.0" y="30.0" text-anchor="end">D</text>
          <text x="200.0" y="142.0" text-anchor="middle">E</text>
          <text x="327.2" y="126.4">F</text>
          <text x="72.8" y="193.6" text-anchor="end">G</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[AE] ve [DE] açıortay',
      '[EF] ⊥ [BC]',
      '|AE| = 12 cm',
      '|DE| = 16 cm',
      '|EF| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç cm dir?',
    choices: [
      { key: 'A', text: '48/5' },
      { key: 'B', text: '10' },
      { key: 'C', text: '11' },
      { key: 'D', text: '12' },
      { key: 'E', text: '13' },
    ],
    answer: 'A',
    hint: 'Ardışık iki açının açıortayları dik kesişir; E nin kenarlara uzaklıklarını karşılaştır.',
    solution: [
      {
        title: 'Dik açı',
        detail:
          'm(A) + m(D) = 180° olduğundan m(EAD) + m(EDA) = 90° ve m(AED) = 90°; |AD|² = 12² + 16² = 400, |AD| = 20 cm.',
      },
      {
        title: 'E nin [AD] ye uzaklığı',
        detail:
          'E den [AD] ye inen dikme [EG] olsun: |EG| = |AE| · |DE| / |AD| = 12 · 16 / 20 = 48/5 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'E açıortaylar üzerinde olduğundan AB ve DC doğrularına da 48/5 uzaklıktadır; eşkenar dörtgenin yüksekliği h = 2 · 48/5 = 96/5 cm.',
      },
      {
        title: 'Eşit yükseklikler',
        detail:
          'Eşkenar dörtgende iki yükseklik eşittir; [AD] ile [BC] arası da 96/5 cm dir ve G, E, F doğrusaldır.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 96/5 − 48/5 = 48/5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 91
  {
    id: 'quadrilaterals-91',
    topic: 'Üçgen içinde eşkenar dörtgen ve benzerlik',
    figure: {
      viewBox: '0 -16 400 330',
      caption: 'Şekil 91',
      label:
        'ABC üçgeninde E noktası [AB], D noktası [AC], F noktası [BC] üzerinde; EFCD eşkenar dörtgen; AED üçgeninin alanı S₁, EBF üçgeninin alanı S₂.',
      svg: `
          <path class="ln" d="M160.0,12.9 L80.0,290.0 L320.0,290.0 Z"/>
          <path class="ln" d="M114.3,171.2 L251.4,171.2"/>
          <path class="ln" d="M114.3,171.2 L182.9,290.0"/>
          <text class="val" x="175.2" y="124.4" text-anchor="middle">S₁</text>
          <text class="val" x="125.7" y="256.4" text-anchor="middle">S₂</text>
          <circle class="pt" cx="160.0" cy="12.9" r="3.2"/>
          <circle class="pt" cx="80.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="290.0" r="3.2"/>
          <circle class="pt" cx="251.4" cy="171.2" r="3.2"/>
          <circle class="pt" cx="114.3" cy="171.2" r="3.2"/>
          <circle class="pt" cx="182.9" cy="290.0" r="3.2"/>
          <text x="160.0" y="0.9" text-anchor="middle">A</text>
          <text x="68.0" y="308.0" text-anchor="end">B</text>
          <text x="332.0" y="308.0">C</text>
          <text x="263.4" y="171.2">D</text>
          <text x="102.3" y="171.2" text-anchor="end">E</text>
          <text x="182.9" y="312.0" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'EFCD eşkenar dörtgen',
      '|AC| = 8 cm',
      '|BC| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde S₁ ve S₂ bulundukları üçgenlerin alanlarını gösterdiğine göre, S₁ / S₂ oranı kaçtır?',
    choices: [
      { key: 'A', text: '3/4' },
      { key: 'B', text: '4/3' },
      { key: 'C', text: '9/16' },
      { key: 'D', text: '16/9' },
      { key: 'E', text: '64/49' },
    ],
    answer: 'D',
    hint: '[DE] // [BC] ve [EF] // [AC] olduğundan iki küçük üçgen de ABC ye benzerdir.',
    solution: [
      {
        title: 'Paralel kenarlar',
        detail:
          'Eşkenar dörtgenin kenarı a olsun: [DE] // [BC] ve [EF] // [AC], |DE| = |EF| = a.',
      },
      {
        title: 'AED ~ ABC',
        detail:
          'Benzerlik oranı |DE| / |BC| = a / 6 olduğundan S₁ = A(ABC) · a² / 36.',
      },
      {
        title: 'EBF ~ ABC',
        detail:
          'Benzerlik oranı |EF| / |AC| = a / 8 olduğundan S₂ = A(ABC) · a² / 64.',
      },
      {
        title: 'Sonuç',
        detail:
          'S₁ / S₂ = (a² / 36) / (a² / 64) = 64 / 36 = 16/9 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 92
  {
    id: 'quadrilaterals-92',
    topic: 'Paralelkenarda açıortaylar ve çevre',
    figure: {
      viewBox: '0 0 400 256',
      caption: 'Şekil 92',
      label:
        'ABCD paralelkenarında A ve B açılarının açıortayları E noktasında kesişiyor; E den [DC] ye inen dikmenin ayağı H; |DH| = 2, |HC| = 14 ve |EH| = 8 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M38.6,221.2 L246.6,221.2 L387.0,34.0 L179.0,34.0 Z"/>
          <path class="ln" d="M38.6,221.2 L205.0,138.0 L246.6,221.2"/>
          <path class="ln" d="M205.0,138.0 L205.0,34.0"/>
          <path class="arc" d="M205.0,43.0 L214.0,43.0 L214.0,34.0"/>
          <path class="arc" d="M53.0,202.0 A24,24 0 0,1 60.1,210.5"/>
          <path class="arc" d="M54.0,208.4 L60.1,203.3"/>
          <path class="arc" d="M60.1,210.5 A24,24 0 0,1 62.6,221.2"/>
          <path class="arc" d="M58.1,216.6 L65.9,214.8"/>
          <path class="arc" d="M226.6,221.2 A20,20 0 0,1 237.7,203.3"/>
          <path class="arc" d="M232.5,213.6 L225.5,209.8"/>
          <path class="arc" d="M233.5,212.0 L227.0,207.4"/>
          <path class="arc" d="M237.7,203.3 A20,20 0 0,1 258.6,205.2"/>
          <path class="arc" d="M247.1,205.2 L247.3,197.2"/>
          <path class="arc" d="M249.0,205.4 L250.2,197.5"/>
          <text class="val" x="192.0" y="26.0" text-anchor="middle">2</text>
          <text class="val" x="336.0" y="26.0" text-anchor="middle">14</text>
          <text class="val" x="197.0" y="92.0" text-anchor="end">8</text>
          <circle class="pt" cx="38.6" cy="221.2" r="3.2"/>
          <circle class="pt" cx="246.6" cy="221.2" r="3.2"/>
          <circle class="pt" cx="387.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="179.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="205.0" cy="138.0" r="3.2"/>
          <circle class="pt" cx="205.0" cy="34.0" r="3.2"/>
          <text x="26.6" y="237.2" text-anchor="end">A</text>
          <text x="258.6" y="237.2">B</text>
          <text x="387.0" y="22.0" text-anchor="middle">C</text>
          <text x="169.0" y="39.0" text-anchor="end">D</text>
          <text x="212.0" y="26.0">H</text>
          <text x="217.0" y="142.0">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 256',
      caption: 'Şekil 92',
      label:
        'ABCD paralelkenarında E den geçen ve [AD] ye paralel doğru [DC] yi M, [AB] yi N noktasında kesiyor.',
      svg: `
          <path class="ln" d="M38.6,221.2 L246.6,221.2 L387.0,34.0 L179.0,34.0 Z"/>
          <path class="ln" d="M38.6,221.2 L205.0,138.0 L246.6,221.2"/>
          <path class="ln" d="M205.0,138.0 L205.0,34.0"/>
          <path class="arc" d="M205.0,43.0 L214.0,43.0 L214.0,34.0"/>
          <path class="arc" d="M53.0,202.0 A24,24 0 0,1 60.1,210.5"/>
          <path class="arc" d="M54.0,208.4 L60.1,203.3"/>
          <path class="arc" d="M60.1,210.5 A24,24 0 0,1 62.6,221.2"/>
          <path class="arc" d="M58.1,216.6 L65.9,214.8"/>
          <path class="arc" d="M226.6,221.2 A20,20 0 0,1 237.7,203.3"/>
          <path class="arc" d="M232.5,213.6 L225.5,209.8"/>
          <path class="arc" d="M233.5,212.0 L227.0,207.4"/>
          <path class="arc" d="M237.7,203.3 A20,20 0 0,1 258.6,205.2"/>
          <path class="arc" d="M247.1,205.2 L247.3,197.2"/>
          <path class="arc" d="M249.0,205.4 L250.2,197.5"/>
          <path class="aux" d="M283.0,34.0 L142.6,221.2"/>
          <text class="val" x="192.0" y="26.0" text-anchor="middle">2</text>
          <text class="val" x="336.0" y="26.0" text-anchor="middle">14</text>
          <text class="val" x="197.0" y="92.0" text-anchor="end">8</text>
          <circle class="pt" cx="38.6" cy="221.2" r="3.2"/>
          <circle class="pt" cx="246.6" cy="221.2" r="3.2"/>
          <circle class="pt" cx="387.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="179.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="205.0" cy="138.0" r="3.2"/>
          <circle class="pt" cx="205.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="283.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="142.6" cy="221.2" r="3.2"/>
          <text x="26.6" y="237.2" text-anchor="end">A</text>
          <text x="258.6" y="237.2">B</text>
          <text x="387.0" y="22.0" text-anchor="middle">C</text>
          <text x="169.0" y="39.0" text-anchor="end">D</text>
          <text x="212.0" y="26.0">H</text>
          <text x="217.0" y="142.0">E</text>
          <text x="283.0" y="24.0" text-anchor="middle">M</text>
          <text x="142.6" y="243.2" text-anchor="middle">N</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[AE] açıortay',
      '[BE] açıortay',
      '[EH] ⊥ [DC]',
      '|DH| = 2 cm',
      '|HC| = 14 cm',
      '|EH| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABCD paralelkenarının çevresi kaç cm dir?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '68' },
      { key: 'C', text: '72' },
      { key: 'D', text: '76' },
      { key: 'E', text: '80' },
    ],
    answer: 'B',
    hint: 'E den [AD] ye paralel bir doğru çiz; E nin [AD] ve [BC] ye uzaklıkları eşittir.',
    solution: [
      {
        title: 'Orta paralel',
        detail:
          'E, A ve B açıortaylarının üzerinde olduğundan [AD] ve [BC] ye eşit uzaklıktadır. E den [AD] ye paralel çizilen doğru [DC] yi M, [AB] yi N de keser ve M, N orta noktalardır.',
      },
      {
        title: 'EM uzunluğu',
        detail:
          '|DC| = 2 + 14 = 16, |DM| = 8 ve |HM| = 8 − 2 = 6. EHM dik üçgeninde |EM|² = 6² + 8² = 100, |EM| = 10 cm.',
      },
      {
        title: 'İkizkenar üçgenler',
        detail:
          '[NE] // [AD] olduğundan m(NEA) = m(EAD) = m(EAN), yani |NA| = |NE|. Aynı şekilde |NB| = |NE|; böylece |NE| = |AB| / 2 = 8 cm.',
      },
      {
        title: 'AD kenarı',
        detail:
          '|AD| = |MN| = |EM| + |EN| = 10 + 8 = 18 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'Çevre = 2 · (16 + 18) = 68 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 93
  {
    id: 'quadrilaterals-93',
    topic: 'Paralelkenarda kenarortay ve köşegenler',
    figure: {
      viewBox: '0 16 400 226',
      caption: 'Şekil 93',
      label:
        'ABCD paralelkenarında E noktası [DC] nin orta noktası; [BE] ve [AC] çizilmiş; |AB| = 10, |AD| = 6, |BE| = 7 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M48.0,210.0 L328.0,210.0 L361.6,45.4 L81.6,45.4 Z"/>
          <path class="ln" d="M328.0,210.0 L221.6,45.4"/>
          <path class="ln" d="M48.0,210.0 L361.6,45.4"/>
          <path class="tick" d="M151.6,40.4 L151.6,50.4"/>
          <path class="tick" d="M291.6,40.4 L291.6,50.4"/>
          <text class="val" x="188.0" y="232.0" text-anchor="middle">10</text>
          <text class="val" x="54.8" y="131.7" text-anchor="end">6</text>
          <text class="val" x="284.8" y="131.7">7</text>
          <circle class="pt" cx="48.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="328.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="361.6" cy="45.4" r="3.2"/>
          <circle class="pt" cx="81.6" cy="45.4" r="3.2"/>
          <circle class="pt" cx="221.6" cy="45.4" r="3.2"/>
          <text x="36.0" y="226.0" text-anchor="end">A</text>
          <text x="340.0" y="226.0">B</text>
          <text x="373.6" y="39.4">C</text>
          <text x="69.6" y="39.4" text-anchor="end">D</text>
          <text x="221.6" y="33.4" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 16 400 226',
      caption: 'Şekil 93',
      label:
        'ABCD paralelkenarında [BD] köşegeni çizilmiş; [BE], BCD üçgeninin kenarortayı.',
      svg: `
          <path class="ln" d="M48.0,210.0 L328.0,210.0 L361.6,45.4 L81.6,45.4 Z"/>
          <path class="ln" d="M328.0,210.0 L221.6,45.4"/>
          <path class="ln" d="M48.0,210.0 L361.6,45.4"/>
          <path class="aux" d="M328.0,210.0 L81.6,45.4"/>
          <path class="tick" d="M151.6,40.4 L151.6,50.4"/>
          <path class="tick" d="M291.6,40.4 L291.6,50.4"/>
          <text class="val" x="188.0" y="232.0" text-anchor="middle">10</text>
          <text class="val" x="54.8" y="131.7" text-anchor="end">6</text>
          <text class="val" x="284.8" y="131.7">7</text>
          <circle class="pt" cx="48.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="328.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="361.6" cy="45.4" r="3.2"/>
          <circle class="pt" cx="81.6" cy="45.4" r="3.2"/>
          <circle class="pt" cx="221.6" cy="45.4" r="3.2"/>
          <text x="36.0" y="226.0" text-anchor="end">A</text>
          <text x="340.0" y="226.0">B</text>
          <text x="373.6" y="39.4">C</text>
          <text x="69.6" y="39.4" text-anchor="end">D</text>
          <text x="221.6" y="33.4" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|DE| = |EC|',
      '|AB| = 10 cm',
      '|AD| = 6 cm',
      '|BE| = 7 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, AC köşegeninin uzunluğu kaç cm dir?',
    choices: [
      { key: 'A', text: '4√10' },
      { key: 'B', text: '4√7' },
      { key: 'C', text: '2√34' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '√170' },
    ],
    answer: 'A',
    hint: 'Önce BD yi, BCD üçgeninde [BE] kenarortayı ile bul.',
    solution: [
      {
        title: 'Kenarortay',
        detail:
          '[BD] çizilirse [BE], BCD üçgeninde kenarortaydır: |BD|² + |BC|² = 2|BE|² + |DC|² / 2.',
      },
      {
        title: 'BD köşegeni',
        detail:
          '|BD|² + 36 = 2 · 49 + 100 / 2 = 148, yani |BD|² = 112.',
      },
      {
        title: 'Köşegen bağıntısı',
        detail:
          'Paralelkenarda |AC|² + |BD|² = 2 · (|AB|² + |AD|²) = 2 · (100 + 36) = 272.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AC|² = 272 − 112 = 160, |AC| = 4√10 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 94
  {
    id: 'quadrilaterals-94',
    topic: 'Eşkenar dörtgende köşegenler ve alan',
    figure: {
      viewBox: '0 24 400 280',
      caption: 'Şekil 94',
      label:
        'ABCD eşkenar dörtgeninde E, [AC] köşegeninin orta noktası; F noktası [BC] üzerinde; |BE| = 6, |EF| = |FC| = 5 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M58.7,235.1 L256.3,266.0 L341.3,84.9 L143.7,54.0 Z"/>
          <path class="ln" d="M58.7,235.1 L341.3,84.9"/>
          <path class="ln" d="M200.0,160.0 L256.3,266.0"/>
          <path class="ln" d="M200.0,160.0 L298.8,175.4"/>
          <path class="tick" d="M125.3,194.1 L129.9,202.9"/>
          <path class="tick" d="M128.8,192.2 L133.5,201.0"/>
          <path class="tick" d="M266.5,119.0 L271.2,127.8"/>
          <path class="tick" d="M270.1,117.1 L274.7,125.9"/>
          <text class="val" x="218.2" y="219.0" text-anchor="end">6</text>
          <text class="val" x="249.4" y="159.7" text-anchor="middle">5</text>
          <text class="val" x="330.0" y="134.2">5</text>
          <circle class="pt" cx="58.7" cy="235.1" r="3.2"/>
          <circle class="pt" cx="256.3" cy="266.0" r="3.2"/>
          <circle class="pt" cx="341.3" cy="84.9" r="3.2"/>
          <circle class="pt" cx="143.7" cy="54.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="160.0" r="3.2"/>
          <circle class="pt" cx="298.8" cy="175.4" r="3.2"/>
          <text x="46.7" y="247.1" text-anchor="end">A</text>
          <text x="256.3" y="288.0" text-anchor="middle">B</text>
          <text x="353.3" y="80.9">C</text>
          <text x="143.7" y="42.0" text-anchor="middle">D</text>
          <text x="196.0" y="148.0" text-anchor="end">E</text>
          <text x="310.8" y="181.4">F</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[AC] köşegen',
      '|AE| = |EC|',
      'F ∈ [BC]',
      '|BE| = 6 cm',
      '|EF| = |FC| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '96' },
      { key: 'C', text: '100' },
      { key: 'D', text: '108' },
      { key: 'E', text: '120' },
    ],
    answer: 'B',
    hint: 'E köşegenlerin kesim noktasıdır; BEC üçgeninde E deki açıya bak.',
    solution: [
      {
        title: 'Dik açı',
        detail:
          'E, [AC] nin orta noktası olduğundan köşegenlerin kesim noktasıdır ve m(BEC) = 90°.',
      },
      {
        title: 'F orta nokta',
        detail:
          '|EF| = |FC| ise m(FEC) = m(FCE); dik üçgende m(FEB) = m(FBE) olur, yani |FB| = |FE| = 5 ve |BC| = 10 cm.',
      },
      {
        title: 'Köşegenler',
        detail:
          '|EC|² = 10² − 6² = 64, |EC| = 8; |AC| = 16 ve |BD| = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = 16 · 12 / 2 = 96 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 95
  {
    id: 'quadrilaterals-95',
    topic: 'Paralelkenarda dikmeler ve benzerlik',
    figure: {
      viewBox: '0 16 400 232',
      caption: 'Şekil 95',
      label:
        'ABCD paralelkenarında B den [AD] ye inen dikmenin ayağı K; E noktası [BC] üzerinde, E den AB doğrusuna inen dikmenin ayağı H; |AB| = 10, |KB| = 8, |BE| = 6 ve |EH| = x olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M45.0,215.0 L225.0,215.0 L354.6,42.2 L174.6,42.2 Z"/>
          <path class="ln" d="M225.0,215.0 L289.8,215.0"/>
          <path class="ln" d="M225.0,215.0 L109.8,128.6"/>
          <path class="ln" d="M289.8,128.6 L289.8,215.0"/>
          <path class="arc" d="M117.0,134.0 L122.4,126.8 L115.2,121.4"/>
          <path class="arc" d="M289.8,206.0 L280.8,206.0 L280.8,215.0"/>
          <text class="val" x="135.0" y="237.0" text-anchor="middle">10</text>
          <text class="val" x="169.4" y="163.8">8</text>
          <text class="val" x="247.4" y="171.8" text-anchor="end">6</text>
          <text class="val" x="299.8" y="175.8">x</text>
          <circle class="pt" cx="45.0" cy="215.0" r="3.2"/>
          <circle class="pt" cx="225.0" cy="215.0" r="3.2"/>
          <circle class="pt" cx="354.6" cy="42.2" r="3.2"/>
          <circle class="pt" cx="174.6" cy="42.2" r="3.2"/>
          <circle class="pt" cx="109.8" cy="128.6" r="3.2"/>
          <circle class="pt" cx="289.8" cy="128.6" r="3.2"/>
          <circle class="pt" cx="289.8" cy="215.0" r="3.2"/>
          <text x="33.0" y="231.0" text-anchor="end">A</text>
          <text x="225.0" y="237.0" text-anchor="middle">B</text>
          <text x="366.6" y="36.2">C</text>
          <text x="162.6" y="36.2" text-anchor="end">D</text>
          <text x="97.8" y="124.6" text-anchor="end">K</text>
          <text x="301.8" y="128.6">E</text>
          <text x="289.8" y="237.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[BK] ⊥ [AD]',
      '[EH] ⊥ [AH]',
      '|AB| = 10 cm',
      '|KB| = 8 cm',
      '|BE| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |EH| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '4,2' },
      { key: 'C', text: '4,5' },
      { key: 'D', text: '4,8' },
      { key: 'E', text: '5' },
    ],
    answer: 'D',
    hint: '[BC] // [AD] olduğundan m(EBH) = m(A); iki dik üçgeni karşılaştır.',
    solution: [
      {
        title: 'Eş açılar',
        detail:
          '[BC] // [AD] olduğundan m(EBH) = m(KAB).',
      },
      {
        title: 'Benzerlik',
        detail:
          'AKB ve BHE dik üçgenleri benzerdir: |EH| / |BE| = |KB| / |AB|.',
      },
      {
        title: 'Oran',
        detail:
          'x / 6 = 8 / 10, yani x = 48 / 10.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 4,8 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 96
  {
    id: 'quadrilaterals-96',
    topic: 'Paralelkenarda paralel doğrular ve orta taban',
    figure: {
      viewBox: '0 6 400 240',
      caption: 'Şekil 96',
      label:
        'ABCD paralelkenarında A dan geçen bir doğru üzerinde E, F, G noktaları; [DE], [BF] ve [CG] paralel; [DE], [AB] yi K noktasında kesiyor; |DK| = 6, |BF| = 5, |CG| = 14 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M40.0,100.0 L240.0,110.0 L360.0,44.0 L160.0,34.0 Z"/>
          <path class="ln" d="M40.0,100.0 L360.0,212.0"/>
          <path class="ln" d="M160.0,34.0 L160.0,142.0"/>
          <path class="ln" d="M240.0,110.0 L240.0,170.0"/>
          <path class="ln" d="M360.0,44.0 L360.0,212.0"/>
          <text class="val" x="166.0" y="74.0">6</text>
          <text class="val" x="246.0" y="146.0">5</text>
          <text class="val" x="368.0" y="132.0">14</text>
          <circle class="pt" cx="40.0" cy="100.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="110.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="44.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="142.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="170.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="212.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="106.0" r="3.2"/>
          <text x="30.0" y="106.0" text-anchor="end">A</text>
          <text x="234.0" y="128.0" text-anchor="end">B</text>
          <text x="370.0" y="38.0">C</text>
          <text x="160.0" y="22.0" text-anchor="middle">D</text>
          <text x="156.0" y="162.0" text-anchor="end">E</text>
          <text x="240.0" y="192.0" text-anchor="middle">F</text>
          <text x="360.0" y="234.0" text-anchor="middle">G</text>
          <text x="152.0" y="102.0" text-anchor="end">K</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 6 400 240',
      caption: 'Şekil 96',
      label:
        'ABCD paralelkenarında köşegenler O noktasında kesişiyor; O dan [CG] ye paralel çizilen doğru, A dan geçen doğruyu L noktasında kesiyor.',
      svg: `
          <path class="ln" d="M40.0,100.0 L240.0,110.0 L360.0,44.0 L160.0,34.0 Z"/>
          <path class="ln" d="M40.0,100.0 L360.0,212.0"/>
          <path class="ln" d="M160.0,34.0 L160.0,142.0"/>
          <path class="ln" d="M240.0,110.0 L240.0,170.0"/>
          <path class="ln" d="M360.0,44.0 L360.0,212.0"/>
          <path class="aux" d="M40.0,100.0 L360.0,44.0"/>
          <path class="aux" d="M240.0,110.0 L160.0,34.0"/>
          <path class="aux" d="M200.0,72.0 L200.0,156.0"/>
          <text class="val" x="166.0" y="74.0">6</text>
          <text class="val" x="246.0" y="146.0">5</text>
          <text class="val" x="368.0" y="132.0">14</text>
          <circle class="pt" cx="40.0" cy="100.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="110.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="44.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="142.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="170.0" r="3.2"/>
          <circle class="pt" cx="360.0" cy="212.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="106.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="72.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="156.0" r="3.2"/>
          <text x="30.0" y="106.0" text-anchor="end">A</text>
          <text x="234.0" y="128.0" text-anchor="end">B</text>
          <text x="370.0" y="38.0">C</text>
          <text x="160.0" y="22.0" text-anchor="middle">D</text>
          <text x="156.0" y="162.0" text-anchor="end">E</text>
          <text x="240.0" y="192.0" text-anchor="middle">F</text>
          <text x="360.0" y="234.0" text-anchor="middle">G</text>
          <text x="152.0" y="102.0" text-anchor="end">K</text>
          <text x="200.0" y="62.0" text-anchor="middle">O</text>
          <text x="200.0" y="178.0" text-anchor="middle">L</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[DE] // [BF] // [CG]',
      '|DK| = 6 cm',
      '|BF| = 5 cm',
      '|CG| = 14 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |KE| kaç cm dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '2,5' },
      { key: 'C', text: '3' },
      { key: 'D', text: '3,5' },
      { key: 'E', text: '4' },
    ],
    answer: 'C',
    hint: 'Köşegenlerin kesim noktası O dan da aynı yönde bir paralel çiz.',
    solution: [
      {
        title: 'Köşegenler',
        detail:
          'Köşegenler O noktasında kesişsin; O hem [AC] nin hem [BD] nin orta noktasıdır. O dan [CG] ye paralel çizilen doğru, E F G doğrusunu L de kessin.',
      },
      {
        title: 'ACG üçgeni',
        detail:
          '[OL] // [CG] ve O, [AC] nin orta noktası: |OL| = |CG| / 2 = 7 cm.',
      },
      {
        title: 'DEFB yamuğu',
        detail:
          '[OL], DEFB yamuğunun orta tabanıdır: |OL| = (|DE| + |BF|) / 2, yani 7 = (|DE| + 5) / 2 ve |DE| = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|KE| = |DE| − |DK| = 9 − 6 = 3 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 97
  {
    id: 'quadrilaterals-97',
    topic: 'Paralelkenarda açıortaylar ve kenar uzunluğu',
    figure: {
      viewBox: '0 0 400 196',
      caption: 'Şekil 97',
      label:
        'ABCD paralelkenarında A ve B açılarının açıortayları E noktasında, C ve D açılarının açıortayları F noktasında kesişiyor; |AB| = 7 ve |EF| = 4 olarak işaretlenmiş.',
      svg: `
          <path class="ln" d="M117.2,30.0 L40.0,163.8 L282.8,163.8 L360.0,30.0 Z"/>
          <path class="ln" d="M117.2,30.0 L155.9,96.9 L40.0,163.8"/>
          <path class="ln" d="M360.0,30.0 L244.1,96.9 L282.8,163.8"/>
          <path class="ln" d="M155.9,96.9 L244.1,96.9"/>
          <path class="arc" d="M107.2,47.3 A20,20 0 0 0 127.2,47.3"/>
          <path class="arc" d="M129.2,50.8 A24,24 0 0 0 141.2,30.0"/>
          <path class="arc" d="M57.3,153.8 A20,20 0 0 0 50.0,146.5"/>
          <path class="arc" d="M64.0,163.8 A24,24 0 0 0 60.8,151.8"/>
          <path class="arc" d="M292.8,146.5 A20,20 0 0 0 272.8,146.5"/>
          <path class="arc" d="M270.8,143.0 A24,24 0 0 0 258.8,163.8"/>
          <path class="arc" d="M342.7,40.0 A20,20 0 0 0 350.0,47.3"/>
          <path class="arc" d="M336.0,30.0 A24,24 0 0 0 339.2,42.0"/>
          <text class="val" x="68.6" y="101.9" text-anchor="end">7</text>
          <text class="val" x="200.0" y="91.9" text-anchor="middle">4</text>
          <circle class="pt" cx="117.2" cy="30.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="163.8" r="3.2"/>
          <circle class="pt" cx="282.8" cy="163.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="155.9" cy="96.9" r="3.2"/>
          <circle class="pt" cx="244.1" cy="96.9" r="3.2"/>
          <text x="107.3" y="25.1" text-anchor="end">A</text>
          <text x="30.1" y="178.7" text-anchor="end">B</text>
          <text x="292.7" y="178.7">C</text>
          <text x="369.9" y="25.1">D</text>
          <text x="159.0" y="117.6" text-anchor="middle">E</text>
          <text x="256.1" y="101.9">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 196',
      caption: 'Şekil 97',
      label:
        'ABCD paralelkenarında [AE] uzatılarak [BC] üzerinde P, [CF] uzatılarak [AD] üzerinde Q noktası elde edilmiş.',
      svg: `
          <path class="ln" d="M117.2,30.0 L40.0,163.8 L282.8,163.8 L360.0,30.0 Z"/>
          <path class="ln" d="M117.2,30.0 L155.9,96.9 L40.0,163.8"/>
          <path class="ln" d="M360.0,30.0 L244.1,96.9 L282.8,163.8"/>
          <path class="ln" d="M155.9,96.9 L244.1,96.9"/>
          <path class="aux" d="M155.9,96.9 L194.5,163.8"/>
          <path class="aux" d="M244.1,96.9 L205.5,30.0"/>
          <path class="arc" d="M107.2,47.3 A20,20 0 0 0 127.2,47.3"/>
          <path class="arc" d="M129.2,50.8 A24,24 0 0 0 141.2,30.0"/>
          <path class="arc" d="M57.3,153.8 A20,20 0 0 0 50.0,146.5"/>
          <path class="arc" d="M64.0,163.8 A24,24 0 0 0 60.8,151.8"/>
          <path class="arc" d="M292.8,146.5 A20,20 0 0 0 272.8,146.5"/>
          <path class="arc" d="M270.8,143.0 A24,24 0 0 0 258.8,163.8"/>
          <path class="arc" d="M342.7,40.0 A20,20 0 0 0 350.0,47.3"/>
          <path class="arc" d="M336.0,30.0 A24,24 0 0 0 339.2,42.0"/>
          <text class="val" x="68.6" y="101.9" text-anchor="end">7</text>
          <text class="val" x="200.0" y="91.9" text-anchor="middle">4</text>
          <circle class="pt" cx="117.2" cy="30.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="163.8" r="3.2"/>
          <circle class="pt" cx="282.8" cy="163.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="155.9" cy="96.9" r="3.2"/>
          <circle class="pt" cx="244.1" cy="96.9" r="3.2"/>
          <circle class="pt" cx="194.5" cy="163.8" r="3.2"/>
          <circle class="pt" cx="205.5" cy="30.0" r="3.2"/>
          <text x="107.3" y="25.1" text-anchor="end">A</text>
          <text x="30.1" y="178.7" text-anchor="end">B</text>
          <text x="292.7" y="178.7">C</text>
          <text x="369.9" y="25.1">D</text>
          <text x="159.0" y="117.6" text-anchor="middle">E</text>
          <text x="256.1" y="101.9">F</text>
          <text x="194.5" y="184.8" text-anchor="middle">P</text>
          <text x="205.5" y="19.0" text-anchor="middle">Q</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '[AE] ve [BE] açıortay',
      '[CF] ve [DF] açıortay',
      '|AB| = 7 cm',
      '|EF| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| kaç cm dir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '11' },
      { key: 'D', text: '12' },
      { key: 'E', text: '14' },
    ],
    answer: 'C',
    hint: '[AE] yi [BC] ye kadar uzat; oluşan üçgen ikizkenardır.',
    solution: [
      {
        title: 'İkizkenar üçgen',
        detail:
          '[AE], [BC] yi P de kessin. [AD] // [BC] olduğundan m(BPA) = m(PAD) = m(BAP); ABP ikizkenar, |BP| = |AB| = 7 cm.',
      },
      {
        title: 'E orta nokta',
        detail:
          'İkizkenar ABP üçgeninde tepe açıortayı [BE] tabanı ortalar: E, [AP] nin orta noktasıdır. Aynı yolla [CF] uzatılınca [AD] üzerinde |DQ| = 7 cm olan Q bulunur ve F, [CQ] nun orta noktasıdır.',
      },
      {
        title: 'Orta doğru',
        detail:
          '[AB] nin orta noktası M, [DC] nin orta noktası N olsun; [MN] // [AD] ve |MN| = |AD|. ABP üçgeninde [ME] orta tabandır: |ME| = |BP| / 2 = 7 / 2. Aynı şekilde |NF| = |DQ| / 2 = 7 / 2.',
      },
      {
        title: 'Bağıntı',
        detail:
          '|EF| = |MN| − |ME| − |NF| = |AD| − 7, yani 4 = |AD| − 7.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AD| = 11 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 98
  {
    id: 'quadrilaterals-98',
    topic: 'Eşkenar dörtgende orta noktalar ve alan',
    figure: {
      viewBox: '0 0 400 247',
      caption: 'Şekil 98',
      label:
        'ABCD eşkenar dörtgeninde E, [DC] nin; F, [BC] nin orta noktası; [DF] ⊥ [BC]; [AC] köşegeni [EF] yi K de, [DF] yi L de kesiyor; KLF üçgeni taralı.',
      svg: `
          <path class="shade" d="M280.0,76.2 L253.3,91.6 L306.7,122.4 Z"/>
          <path class="ln" d="M40.0,214.8 L253.3,214.8 L360.0,30.0 L146.7,30.0 Z"/>
          <path class="ln" d="M40.0,214.8 L360.0,30.0"/>
          <path class="ln" d="M146.7,30.0 L306.7,122.4"/>
          <path class="ln" d="M253.3,30.0 L306.7,122.4"/>
          <path class="arc" d="M298.9,117.9 L303.4,110.1 L311.2,114.6"/>
          <path class="tick" d="M200.0,35.0 L200.0,25.0"/>
          <path class="tick" d="M306.7,35.0 L306.7,25.0"/>
          <path class="tick" d="M330.1,71.7 L338.8,76.7"/>
          <path class="tick" d="M327.9,75.6 L336.5,80.6"/>
          <path class="tick" d="M276.8,164.1 L285.5,169.1"/>
          <path class="tick" d="M274.5,168.0 L283.2,173.0"/>
          <circle class="pt" cx="40.0" cy="214.8" r="3.2"/>
          <circle class="pt" cx="253.3" cy="214.8" r="3.2"/>
          <circle class="pt" cx="360.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="146.7" cy="30.0" r="3.2"/>
          <circle class="pt" cx="253.3" cy="30.0" r="3.2"/>
          <circle class="pt" cx="306.7" cy="122.4" r="3.2"/>
          <circle class="pt" cx="280.0" cy="76.2" r="3.2"/>
          <circle class="pt" cx="253.3" cy="91.6" r="3.2"/>
          <text x="30.1" y="229.7" text-anchor="end">A</text>
          <text x="257.9" y="235.1" text-anchor="middle">B</text>
          <text x="369.9" y="25.1">C</text>
          <text x="136.8" y="25.1" text-anchor="end">D</text>
          <text x="253.3" y="19.0" text-anchor="middle">E</text>
          <text x="318.4" y="129.7">F</text>
          <text x="283.1" y="65.5" text-anchor="middle">K</text>
          <text x="246.6" y="113.3" text-anchor="end">L</text>
        `,
    },
    given: [
      'ABCD eşkenar dörtgen',
      '[DF] ⊥ [BC]',
      '|DE| = |EC|',
      '|CF| = |FB|',
      'A(KLF) = 2 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '64' },
      { key: 'C', text: '72' },
      { key: 'D', text: '96' },
      { key: 'E', text: '120' },
    ],
    answer: 'D',
    hint: '[DF] hem yükseklik hem kenarortay; DBC üçgeninin türünü belirle.',
    solution: [
      {
        title: 'Eşkenar üçgen',
        detail:
          '[DF] ⊥ [BC] ve |BF| = |FC| olduğundan |DB| = |DC|; kenarlar da eşit olduğundan DBC eşkenar üçgendir.',
      },
      {
        title: 'Ağırlık merkezi',
        detail:
          '[AC], [BD] yi ortalar; bu yüzden [CO] ve [DF], DBC üçgeninin kenarortaylarıdır ve L ağırlık merkezidir. |FL| = |DF| / 3.',
      },
      {
        title: 'K noktası',
        detail:
          '[EF], DBC üçgeninin orta tabanıdır ve [CO] yu ortalar: K, [CO] nun orta noktasıdır. L ise [CO] yu 2 : 1 böler; |KL| = |CO| / 2 − |CO| / 3 = |CO| / 6.',
      },
      {
        title: 'Alan oranı',
        detail:
          'A(COF) = A(DBC) / 4. KLF ile COF üçgenlerinde F den [CO] ya yükseklik ortak olduğundan A(KLF) = A(COF) / 6 = A(DBC) / 24 = A(ABCD) / 48.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = 48 · 2 = 96 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 99
  {
    id: 'quadrilaterals-99',
    topic: 'Paralelkenarda orta noktalar ve taralı alan',
    figure: {
      viewBox: '0 0 400 207',
      caption: 'Şekil 99',
      label:
        'ABCD paralelkenarında E, [DC] nin; F, [AB] nin orta noktası; [AC], [EF] ve [BE] çizilmiş; [BE], [AC] yi K de kesiyor; [AC], [EF] ve [EK] arasında kalan üçgen taralı.',
      svg: `
          <path class="shade" d="M200.0,102.7 L253.3,78.5 L238.8,30.0 Z"/>
          <path class="ln" d="M40.0,175.5 L282.4,175.5 L360.0,30.0 L117.6,30.0 Z"/>
          <path class="ln" d="M40.0,175.5 L360.0,30.0"/>
          <path class="ln" d="M238.8,30.0 L161.2,175.5"/>
          <path class="ln" d="M282.4,175.5 L238.8,30.0"/>
          <path class="tick" d="M178.2,35.0 L178.2,25.0"/>
          <path class="tick" d="M299.4,35.0 L299.4,25.0"/>
          <path class="tick" d="M98.4,180.5 L98.4,170.5"/>
          <path class="tick" d="M102.9,180.5 L102.9,170.5"/>
          <path class="tick" d="M219.6,180.5 L219.6,170.5"/>
          <path class="tick" d="M224.1,180.5 L224.1,170.5"/>
          <circle class="pt" cx="40.0" cy="175.5" r="3.2"/>
          <circle class="pt" cx="282.4" cy="175.5" r="3.2"/>
          <circle class="pt" cx="360.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="117.6" cy="30.0" r="3.2"/>
          <circle class="pt" cx="238.8" cy="30.0" r="3.2"/>
          <circle class="pt" cx="161.2" cy="175.5" r="3.2"/>
          <circle class="pt" cx="253.3" cy="78.5" r="3.2"/>
          <text x="30.1" y="190.4" text-anchor="end">A</text>
          <text x="292.3" y="190.4">B</text>
          <text x="369.9" y="25.1">C</text>
          <text x="107.7" y="25.1" text-anchor="end">D</text>
          <text x="238.8" y="19.0" text-anchor="middle">E</text>
          <text x="161.2" y="196.5" text-anchor="middle">F</text>
          <text x="265.3" y="84.7">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|DE| = |EC|',
      '|AF| = |FB|',
      'Taralı bölgenin alanı 5 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '100' },
      { key: 'C', text: '110' },
      { key: 'D', text: '120' },
      { key: 'E', text: '144' },
    ],
    answer: 'D',
    hint: '[AB] // [EC] olduğundan K noktasının [AC] yi hangi oranda böldüğünü benzerlikle bul.',
    solution: [
      {
        title: 'Köşegenlerin kesişimi',
        detail:
          '[EF] ile [AC] nin kesim noktası O, paralelkenarın merkezidir; |AO| = |OC| = |AC| / 2.',
      },
      {
        title: 'Benzerlik',
        detail:
          'KAB ve KCE üçgenleri benzerdir: |CK| / |KA| = |EC| / |AB| = 1 / 2. Buradan |CK| = |AC| / 3 ve |OK| = |AC| / 2 − |AC| / 3 = |AC| / 6.',
      },
      {
        title: 'OEC üçgeni',
        detail:
          'A(ODC) = A(ABCD) / 4 ve E, [DC] nin orta noktası: A(OEC) = A(ABCD) / 8.',
      },
      {
        title: 'Taralı alan',
        detail:
          'OKE ile OEC üçgenlerinin E den yüksekliği ortak: A(OKE) = A(OEC) · (|OK| / |OC|) = A(OEC) / 3 = A(ABCD) / 24.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = 24 · 5 = 120 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 100
  {
    id: 'quadrilaterals-100',
    topic: 'Paralelkenarda benzerlik ve oran',
    figure: {
      viewBox: '0 0 400 302',
      caption: 'Şekil 100',
      label:
        'ABCD paralelkenarında E, [DC] nin orta noktası; F, [BC] üzerinde; [AE] ile [DF] K noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M40.0,270.0 L240.0,270.0 L300.0,150.0 L100.0,150.0 Z"/>
          <path class="ln" d="M40.0,270.0 L200.0,150.0"/>
          <path class="ln" d="M100.0,150.0 L280.0,190.0"/>
          <path class="tick" d="M150.0,155.0 L150.0,145.0"/>
          <path class="tick" d="M250.0,155.0 L250.0,145.0"/>
          <circle class="pt" cx="40.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="300.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="100.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="177.1" cy="167.1" r="3.2"/>
          <text x="30.1" y="284.9" text-anchor="end">A</text>
          <text x="249.9" y="284.9">B</text>
          <text x="313.4" y="159.0">C</text>
          <text x="90.1" y="145.1" text-anchor="end">D</text>
          <text x="200.0" y="139.0" text-anchor="middle">E</text>
          <text x="292.0" y="195.0">F</text>
          <text x="177.1" y="188.1" text-anchor="middle">K</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 302',
      caption: 'Şekil 100',
      label:
        'ABCD paralelkenarında [AE] uzatılmış ve BC doğrusunu Q noktasında kesiyor.',
      svg: `
          <path class="ln" d="M40.0,270.0 L240.0,270.0 L300.0,150.0 L100.0,150.0 Z"/>
          <path class="ln" d="M40.0,270.0 L200.0,150.0"/>
          <path class="ln" d="M100.0,150.0 L280.0,190.0"/>
          <path class="aux" d="M200.0,150.0 L360.0,30.0"/>
          <path class="aux" d="M300.0,150.0 L360.0,30.0"/>
          <path class="tick" d="M150.0,155.0 L150.0,145.0"/>
          <path class="tick" d="M250.0,155.0 L250.0,145.0"/>
          <circle class="pt" cx="40.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="240.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="300.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="100.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="150.0" r="3.2"/>
          <circle class="pt" cx="280.0" cy="190.0" r="3.2"/>
          <circle class="pt" cx="177.1" cy="167.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="30.0" r="3.2"/>
          <text x="30.1" y="284.9" text-anchor="end">A</text>
          <text x="249.9" y="284.9">B</text>
          <text x="313.4" y="159.0">C</text>
          <text x="90.1" y="145.1" text-anchor="end">D</text>
          <text x="200.0" y="139.0" text-anchor="middle">E</text>
          <text x="292.0" y="195.0">F</text>
          <text x="177.1" y="188.1" text-anchor="middle">K</text>
          <text x="369.9" y="25.1">Q</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|DE| = |EC|',
      '|BF| = 2·|FC|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AK| / |AE| oranı kaçtır?',
    choices: [
      { key: 'A', text: '3/4' },
      { key: 'B', text: '4/5' },
      { key: 'C', text: '5/6' },
      { key: 'D', text: '6/7' },
      { key: 'E', text: '7/8' },
    ],
    answer: 'D',
    hint: '[AE] yi BC doğrusuyla kesişene kadar uzat.',
    solution: [
      {
        title: 'Uzatma',
        detail:
          '[AE], BC doğrusunu Q da kessin. EDA ve ECQ üçgenleri eştir (|DE| = |EC|, ters açılar, iç ters açılar): |CQ| = |AD| ve |AE| = |EQ|.',
      },
      {
        title: 'Uzunluklar',
        detail:
          '|AD| = 3a dersek |FC| = a, |FQ| = |FC| + |CQ| = a + 3a = 4a.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[AD] // [FQ] olduğundan KAD ve KQF üçgenleri benzerdir: |AK| / |KQ| = |AD| / |FQ| = 3 / 4.',
      },
      {
        title: 'Oran',
        detail:
          '|AK| = 3 / 7 · |AQ| ve |AE| = |AQ| / 2, yani |AK| / |AE| = (3 / 7) / (1 / 2) = 6 / 7.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AK| / |AE| = 6 / 7 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 101
  {
    id: 'quadrilaterals-101',
    topic: 'Paralelkenarda taralı alanlar',
    figure: {
      viewBox: '0 0 400 255',
      caption: 'Şekil 101',
      label:
        'ABCD paralelkenarında E ve F, [AD] üzerinde; [BE], [BF], [CE] ve [CF] çizilmiş; [BF] ile [CE] K noktasında kesişiyor; ABE, EKF ve FDC üçgenleri taralı.',
      svg: `
          <path class="shade" d="M84.1,30.0 L40.0,223.1 L144.8,30.0 Z"/>
          <path class="shade" d="M144.8,30.0 L193.7,85.2 L255.2,30.0 Z"/>
          <path class="shade" d="M255.2,30.0 L360.0,30.0 L315.9,223.1 Z"/>
          <path class="ln" d="M84.1,30.0 L40.0,223.1 L315.9,223.1 L360.0,30.0 Z"/>
          <path class="ln" d="M40.0,223.1 L144.8,30.0"/>
          <path class="ln" d="M40.0,223.1 L255.2,30.0"/>
          <path class="ln" d="M315.9,223.1 L144.8,30.0"/>
          <path class="ln" d="M315.9,223.1 L255.2,30.0"/>
          <circle class="pt" cx="84.1" cy="30.0" r="3.2"/>
          <circle class="pt" cx="40.0" cy="223.1" r="3.2"/>
          <circle class="pt" cx="315.9" cy="223.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="144.8" cy="30.0" r="3.2"/>
          <circle class="pt" cx="255.2" cy="30.0" r="3.2"/>
          <circle class="pt" cx="193.7" cy="85.2" r="3.2"/>
          <text x="74.2" y="25.1" text-anchor="end">A</text>
          <text x="30.1" y="238.0" text-anchor="end">B</text>
          <text x="325.8" y="238.0">C</text>
          <text x="369.9" y="25.1">D</text>
          <text x="144.8" y="19.0" text-anchor="middle">E</text>
          <text x="255.2" y="19.0" text-anchor="middle">F</text>
          <text x="193.7" y="108.2" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      'E ve F noktaları [AD] üzerinde',
      'A(ABCD) = 96 cm²',
      'Taralı alanlar toplamı 30 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(BEK) + A(FKC) kaç cm² dir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '32' },
      { key: 'C', text: '36' },
      { key: 'D', text: '40' },
      { key: 'E', text: '42' },
    ],
    answer: 'C',
    hint: 'Tabanı [BC], tepesi [AD] üzerinde olan her üçgenin alanı paralelkenarın yarısıdır.',
    solution: [
      {
        title: 'Yarım alanlar',
        detail:
          'EBC ve FBC üçgenlerinin tabanı [BC], yükseklikleri paralelkenarın yüksekliğidir: A(EBC) = A(FBC) = A(ABCD) / 2.',
      },
      {
        title: 'Toplama',
        detail:
          'A(EBC) + A(FBC) = A(ABCD). Sol taraf BKC yi iki kez, BEK ve FKC yi birer kez içerir: 2 · A(BKC) + A(BEK) + A(FKC) = A(ABCD).',
      },
      {
        title: 'Karşılaştırma',
        detail:
          'Paralelkenar ABE, BEK, EKF, FKC, FDC ve BKC bölgelerinden oluşur. İki ifade eşitlenince A(BKC) = A(ABE) + A(EKF) + A(FDC) = 30 cm² kalır.',
      },
      {
        title: 'Kalan alan',
        detail:
          'A(BEK) + A(FKC) = A(ABCD) − 2 · A(BKC) = 96 − 60.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(BEK) + A(FKC) = 36 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 102
  {
    id: 'quadrilaterals-102',
    topic: 'Paralelkenarda orta noktalar ve benzer üçgenler',
    figure: {
      viewBox: '0 0 400 210',
      caption: 'Şekil 102',
      label:
        'ABCD paralelkenarında E, [AB] nin; F, [BC] nin orta noktası; [AC] köşegeni [DE] yi K de, [DF] yi L de kesiyor; KEFL dörtgeninin alanı 25 olarak işaretlenmiş.',
      svg: `
          <path class="shade" d="M146.7,128.7 L159.4,178.1 L319.4,104.0 L253.3,79.4 Z"/>
          <path class="ln" d="M40.0,178.1 L278.8,178.1 L360.0,30.0 L121.2,30.0 Z"/>
          <path class="ln" d="M40.0,178.1 L360.0,30.0"/>
          <path class="ln" d="M121.2,30.0 L159.4,178.1"/>
          <path class="ln" d="M121.2,30.0 L319.4,104.0"/>
          <path class="ln" d="M159.4,178.1 L319.4,104.0"/>
          <path class="tick" d="M99.7,183.1 L99.7,173.1"/>
          <path class="tick" d="M219.1,183.1 L219.1,173.1"/>
          <path class="tick" d="M302.4,145.4 L293.6,140.6"/>
          <path class="tick" d="M304.6,141.5 L295.8,136.7"/>
          <path class="tick" d="M343.0,71.4 L334.2,66.6"/>
          <path class="tick" d="M345.2,67.4 L336.4,62.6"/>
          <circle class="pt" cx="40.0" cy="178.1" r="3.2"/>
          <circle class="pt" cx="278.8" cy="178.1" r="3.2"/>
          <circle class="pt" cx="360.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="121.2" cy="30.0" r="3.2"/>
          <circle class="pt" cx="159.4" cy="178.1" r="3.2"/>
          <circle class="pt" cx="319.4" cy="104.0" r="3.2"/>
          <circle class="pt" cx="146.7" cy="128.7" r="3.2"/>
          <circle class="pt" cx="253.3" cy="79.4" r="3.2"/>
          <text class="val" x="219.7" y="127.5" text-anchor="middle">25</text>
          <text x="30.1" y="193.0" text-anchor="end">A</text>
          <text x="288.7" y="193.0">B</text>
          <text x="369.9" y="25.1">C</text>
          <text x="111.3" y="25.1" text-anchor="end">D</text>
          <text x="159.4" y="199.1" text-anchor="middle">E</text>
          <text x="331.4" y="109.0">F</text>
          <text x="134.7" y="133.7" text-anchor="end">K</text>
          <text x="253.3" y="68.4" text-anchor="middle">L</text>
        `,
    },
    given: [
      'ABCD paralelkenar',
      '|AE| = |EB|',
      '|BF| = |FC|',
      'A(KEFL) = 25 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(DKL) kaç cm² dir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '18' },
      { key: 'C', text: '20' },
      { key: 'D', text: '24' },
      { key: 'E', text: '30' },
    ],
    answer: 'C',
    hint: 'K ve L noktalarının [DE] ve [DF] yi hangi oranda böldüğünü benzerlikle bul.',
    solution: [
      {
        title: 'K noktası',
        detail:
          '[AE] // [DC] olduğundan KAE ve KCD üçgenleri benzerdir: |EK| / |KD| = |AE| / |DC| = 1 / 2, yani |DK| / |DE| = 2 / 3.',
      },
      {
        title: 'L noktası',
        detail:
          '[FC] // [AD] olduğundan LCF ve LAD üçgenleri benzerdir: |FL| / |LD| = |FC| / |AD| = 1 / 2, yani |DL| / |DF| = 2 / 3.',
      },
      {
        title: 'Benzer üçgenler',
        detail:
          'Oranlar eşit olduğundan [KL] // [EF] ve DKL ~ DEF, benzerlik oranı 2 / 3: A(DKL) = 4 / 9 · A(DEF), A(KEFL) = 5 / 9 · A(DEF).',
      },
      {
        title: 'Oran',
        detail:
          'A(DKL) / A(KEFL) = 4 / 5, yani A(DKL) = 25 · 4 / 5.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(DKL) = 20 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 103
  {
    id: 'quadrilaterals-103',
    topic: 'Karede köşegen ve benzer üçgenler',
    figure: {
      viewBox: '0 0 400 290',
      caption: 'Şekil 103',
      label:
        'ABCD karesinde E noktası [AB] üzerinde, |AE| = 4 ve |EB| = 8; [AC] köşegeni ile [DE] F noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M80.0,260.0 L320.0,260.0 L320.0,20.0 L80.0,20.0 Z"/>
          <path class="ln" d="M80.0,260.0 L320.0,20.0"/>
          <path class="ln" d="M80.0,20.0 L160.0,260.0"/>
          <text class="val" x="120.0" y="279.0" text-anchor="middle">4</text>
          <text class="val" x="240.0" y="279.0" text-anchor="middle">8</text>
          <circle class="pt" cx="80.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="140.0" cy="200.0" r="3.2"/>
          <text x="70.0" y="275.0" text-anchor="end">A</text>
          <text x="330.0" y="275.0">B</text>
          <text x="330.0" y="15.0">C</text>
          <text x="70.0" y="15.0" text-anchor="end">D</text>
          <text x="160.0" y="281.0" text-anchor="middle">E</text>
          <text x="130.0" y="194.0" text-anchor="end">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 290',
      caption: 'Şekil 103',
      label:
        'ABCD karesinde F noktasından [BC] ye inen dikme [FH] çizilmiş.',
      svg: `
          <path class="ln" d="M80.0,260.0 L320.0,260.0 L320.0,20.0 L80.0,20.0 Z"/>
          <path class="ln" d="M80.0,260.0 L320.0,20.0"/>
          <path class="ln" d="M80.0,20.0 L160.0,260.0"/>
          <text class="val" x="120.0" y="279.0" text-anchor="middle">4</text>
          <text class="val" x="240.0" y="279.0" text-anchor="middle">8</text>
          <path class="aux" d="M140.0,200.0 L320.0,200.0"/>
          <path class="arc" d="M309.0,200.0 L309.0,189.0 L320.0,189.0"/>
          <circle class="pt" cx="80.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="160.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="140.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="200.0" r="3.2"/>
          <text x="70.0" y="275.0" text-anchor="end">A</text>
          <text x="330.0" y="275.0">B</text>
          <text x="330.0" y="15.0">C</text>
          <text x="70.0" y="15.0" text-anchor="end">D</text>
          <text x="160.0" y="281.0" text-anchor="middle">E</text>
          <text x="130.0" y="194.0" text-anchor="end">F</text>
          <text x="330.0" y="205.0">H</text>
        `,
    },
    given: [
      'ABCD kare',
      '[AC] köşegen',
      '|AE| = 4 cm',
      '|EB| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde [AC] ∩ [DE] = {F} olduğuna göre, F noktasının [BC] ye uzaklığı kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'D',
    hint: '[AE] ile [DC] paralel; AFE ve CFD üçgenlerinin benzerlik oranını bul.',
    solution: [
      {
        title: 'Kenar',
        detail:
          '|AB| = 4 + 8 = 12 cm, dolayısıyla |DC| = 12 cm.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[AE] // [DC] olduğundan AFE ve CFD üçgenleri benzerdir: |AF| / |FC| = |AE| / |DC| = 4 / 12 = 1 / 3.',
      },
      {
        title: 'Konum',
        detail:
          'F, [AC] köşegeninin A dan itibaren 1 / 4 ündedir; bu yüzden F nin [AD] ye uzaklığı 12 / 4 = 3 cm dir.',
      },
      {
        title: 'Uzaklık',
        detail:
          'F nin [BC] ye uzaklığı |FH| = 12 − 3 = 9 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 104
  {
    id: 'quadrilaterals-104',
    topic: 'Dikdörtgende köşegen ve benzerlik',
    figure: {
      viewBox: '0 -12 400 217',
      caption: 'Şekil 104',
      label:
        'ABCD dikdörtgeninde [AC] köşegeni çizilmiş, DCA açısı 30 derece; E noktası [DC] üzerinde ve [BE] ile [AC] F noktasında kesişiyor; |EF| = x.',
      svg: `
          <path class="ln" d="M65.0,176.0 L335.2,176.0 L335.2,20.0 L65.0,20.0 Z"/>
          <path class="ln" d="M65.0,176.0 L335.2,20.0"/>
          <path class="ln" d="M335.2,176.0 L245.1,20.0"/>
          <path class="arc" d="M301.2,20.0 A34,34 0 0 0 305.8,37.0"/>
          <text class="val" x="285.0" y="38.5" text-anchor="middle">30°</text>
          <text class="val" x="232.4" y="43.5" text-anchor="end">x</text>
          <circle class="pt" cx="65.0" cy="176.0" r="3.2"/>
          <circle class="pt" cx="335.2" cy="176.0" r="3.2"/>
          <circle class="pt" cx="335.2" cy="20.0" r="3.2"/>
          <circle class="pt" cx="65.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="245.1" cy="20.0" r="3.2"/>
          <circle class="pt" cx="267.6" cy="59.0" r="3.2"/>
          <text x="55.0" y="191.0" text-anchor="end">A</text>
          <text x="345.2" y="191.0">B</text>
          <text x="345.2" y="15.0">C</text>
          <text x="55.0" y="15.0" text-anchor="end">D</text>
          <text x="245.1" y="9.0" text-anchor="middle">E</text>
          <text x="281.6" y="73.0">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -12 400 217',
      caption: 'Şekil 104',
      label:
        'ABCD dikdörtgeninde E noktasından [AB] ye inen dikme [EH] çizilmiş.',
      svg: `
          <path class="ln" d="M65.0,176.0 L335.2,176.0 L335.2,20.0 L65.0,20.0 Z"/>
          <path class="ln" d="M65.0,176.0 L335.2,20.0"/>
          <path class="ln" d="M335.2,176.0 L245.1,20.0"/>
          <path class="arc" d="M301.2,20.0 A34,34 0 0 0 305.8,37.0"/>
          <text class="val" x="285.0" y="38.5" text-anchor="middle">30°</text>
          <text class="val" x="232.4" y="43.5" text-anchor="end">x</text>
          <path class="aux" d="M245.1,20.0 L245.1,176.0"/>
          <path class="arc" d="M245.1,165.0 L234.1,165.0 L234.1,176.0"/>
          <circle class="pt" cx="65.0" cy="176.0" r="3.2"/>
          <circle class="pt" cx="335.2" cy="176.0" r="3.2"/>
          <circle class="pt" cx="335.2" cy="20.0" r="3.2"/>
          <circle class="pt" cx="65.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="245.1" cy="20.0" r="3.2"/>
          <circle class="pt" cx="267.6" cy="59.0" r="3.2"/>
          <circle class="pt" cx="245.1" cy="176.0" r="3.2"/>
          <text x="55.0" y="191.0" text-anchor="end">A</text>
          <text x="345.2" y="191.0">B</text>
          <text x="345.2" y="15.0">C</text>
          <text x="55.0" y="15.0" text-anchor="end">D</text>
          <text x="245.1" y="9.0" text-anchor="middle">E</text>
          <text x="281.6" y="73.0">F</text>
          <text x="245.1" y="197.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '[AC] köşegen',
      '|DE| = 2·|EC|',
      '|AB| = 6√3 cm',
      'm(DCA) = 30°',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde B, F ve E doğrusal olduğuna göre, |EF| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '√2' },
      { key: 'B', text: '√3' },
      { key: 'C', text: '2' },
      { key: 'D', text: '√5' },
      { key: 'E', text: '2√3' },
    ],
    answer: 'B',
    hint: 'Önce ADC dik üçgeninden |AD| yi, sonra [EC] // [AB] benzerliğini kullan.',
    solution: [
      {
        title: 'Kısa kenar',
        detail:
          'ADC dik üçgeninde m(DCA) = 30° olduğundan |AD| = |DC| · tan 30° = 6√3 · √3 / 3 = 6 cm.',
      },
      {
        title: 'Parçalar',
        detail:
          '|DE| = 2·|EC| ve |DC| = 6√3 olduğundan |EC| = 2√3 cm.',
      },
      {
        title: 'BE uzunluğu',
        detail:
          'EBC dik üçgeninde |BE|² = |EC|² + |BC|² = 12 + 36 = 48, yani |BE| = 4√3 cm.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[EC] // [AB] olduğundan FEC ve FBA üçgenleri benzerdir: |EF| / |FB| = |EC| / |AB| = 2√3 / 6√3 = 1 / 3.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |BE| / 4 = 4√3 / 4 = √3 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 105
  {
    id: 'quadrilaterals-105',
    topic: 'Karede köşe üçgenleriyle alan',
    figure: {
      viewBox: '0 -10 400 320',
      caption: 'Şekil 105',
      label:
        'ABCD karesinde E noktası [AD], F noktası [AB], G noktası [BC], H noktası [DC] üzerinde; F, [AB] nin orta noktası; EFGH dörtgeni taralı.',
      svg: `
          <path class="shade" d="M70.0,124.0 L200.0,280.0 L330.0,124.0 L174.0,20.0 Z"/>
          <path class="ln" d="M70.0,280.0 L330.0,280.0 L330.0,20.0 L70.0,20.0 Z"/>
          <path class="ln" d="M70.0,124.0 L200.0,280.0 L330.0,124.0 L174.0,20.0 Z"/>
          <path class="tick" d="M135.0,285.0 L135.0,275.0"/>
          <path class="tick" d="M265.0,285.0 L265.0,275.0"/>
          <circle class="pt" cx="70.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="124.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="124.0" r="3.2"/>
          <circle class="pt" cx="174.0" cy="20.0" r="3.2"/>
          <text x="60.0" y="295.0" text-anchor="end">A</text>
          <text x="340.0" y="295.0">B</text>
          <text x="340.0" y="15.0">C</text>
          <text x="60.0" y="15.0" text-anchor="end">D</text>
          <text x="60.0" y="129.0" text-anchor="end">E</text>
          <text x="200.0" y="301.0" text-anchor="middle">F</text>
          <text x="340.0" y="129.0">G</text>
          <text x="174.0" y="9.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD kare',
      '|AB| = 10 cm',
      '|AF| = |FB|',
      '|DE| = |DH| = 4 cm',
      '|CG| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, EFGH dörtgeninin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '44' },
      { key: 'B', text: '46' },
      { key: 'C', text: '48' },
      { key: 'D', text: '50' },
      { key: 'E', text: '52' },
    ],
    answer: 'D',
    hint: 'Karenin alanından köşelerdeki dört dik üçgenin alanını çıkar.',
    solution: [
      {
        title: 'Parçalar',
        detail:
          '|AE| = 10 − 4 = 6, |HC| = 10 − 4 = 6, |GB| = 10 − 4 = 6 ve |AF| = |FB| = 5 cm.',
      },
      {
        title: 'Köşe üçgenleri',
        detail:
          'A(EDH) = 4 · 4 / 2 = 8, A(HCG) = 6 · 4 / 2 = 12, A(GBF) = 6 · 5 / 2 = 15, A(FAE) = 5 · 6 / 2 = 15.',
      },
      {
        title: 'Toplam',
        detail:
          'Dört üçgenin alanları toplamı 8 + 12 + 15 + 15 = 50 cm² dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(EFGH) = 10² − 50 = 100 − 50 = 50 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 106
  {
    id: 'quadrilaterals-106',
    topic: 'Dikdörtgende dik açı ve çevre',
    figure: {
      viewBox: '0 0 400 185',
      caption: 'Şekil 106',
      label:
        'ABCD dikdörtgeninde E noktası [AB] üzerinde; [DE] ile [EC] dik, CEB açısı 60 derece.',
      svg: `
          <path class="ln" d="M64.0,157.8 L336.0,157.8 L336.0,40.0 L64.0,40.0 Z"/>
          <path class="ln" d="M64.0,40.0 L268.0,157.8"/>
          <path class="ln" d="M268.0,157.8 L336.0,40.0"/>
          <path class="arc" d="M258.5,152.3 L264.0,142.8 L273.5,148.3"/>
          <path class="arc" d="M296.0,157.8 A28,28 0 0 0 282.0,133.5"/>
          <text class="val" x="307.8" y="139.8" text-anchor="middle">60°</text>
          <circle class="pt" cx="64.0" cy="157.8" r="3.2"/>
          <circle class="pt" cx="336.0" cy="157.8" r="3.2"/>
          <circle class="pt" cx="336.0" cy="40.0" r="3.2"/>
          <circle class="pt" cx="64.0" cy="40.0" r="3.2"/>
          <circle class="pt" cx="268.0" cy="157.8" r="3.2"/>
          <text x="54.0" y="172.8" text-anchor="end">A</text>
          <text x="346.0" y="172.8">B</text>
          <text x="346.0" y="35.0">C</text>
          <text x="54.0" y="35.0" text-anchor="end">D</text>
          <text x="268.0" y="178.8" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '[DE] ⊥ [EC]',
      '|AE| = 6 cm',
      'm(CEB) = 60°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, Çevre(ABCD) kaç cm dir?',
    choices: [
      { key: 'A', text: '12 + 4√3' },
      { key: 'B', text: '16 + 2√3' },
      { key: 'C', text: '16 + 4√3' },
      { key: 'D', text: '14 + 4√3' },
      { key: 'E', text: '16 + 6√3' },
    ],
    answer: 'C',
    hint: 'E noktasındaki üç açının toplamı 180° dir; m(DEA) yı bul.',
    solution: [
      {
        title: 'Açı',
        detail:
          'm(DEA) = 180° − 90° − 60° = 30°.',
      },
      {
        title: 'Kısa kenar',
        detail:
          'DAE dik üçgeninde |AD| = |AE| · tan 30° = 6 · √3 / 3 = 2√3 cm; |BC| = |AD| = 2√3 cm.',
      },
      {
        title: 'EB uzunluğu',
        detail:
          'CBE dik üçgeninde tan 60° = |BC| / |EB|, yani |EB| = 2√3 / √3 = 2 cm.',
      },
      {
        title: 'Uzun kenar',
        detail:
          '|AB| = 6 + 2 = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'Çevre(ABCD) = 2 · (8 + 2√3) = 16 + 4√3 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 107
  {
    id: 'quadrilaterals-107',
    topic: 'Karede köşegen ve Pisagor',
    figure: {
      viewBox: '0 0 400 310',
      caption: 'Şekil 107',
      label:
        'ABCD karesinde [AC] köşegeni C noktasından E noktasına uzatılmış; B ile E birleştirilmiş.',
      svg: `
          <path class="ln" d="M80.0,288.7 L295.0,288.7 L295.0,73.7 L80.0,73.7 Z"/>
          <path class="ln" d="M80.0,288.7 L348.7,20.0"/>
          <path class="ln" d="M295.0,288.7 L348.7,20.0"/>
          <circle class="pt" cx="80.0" cy="288.7" r="3.2"/>
          <circle class="pt" cx="295.0" cy="288.7" r="3.2"/>
          <circle class="pt" cx="295.0" cy="73.7" r="3.2"/>
          <circle class="pt" cx="80.0" cy="73.7" r="3.2"/>
          <circle class="pt" cx="348.7" cy="20.0" r="3.2"/>
          <text x="70.0" y="303.7" text-anchor="end">A</text>
          <text x="305.0" y="303.7">B</text>
          <text x="283.0" y="67.7" text-anchor="end">C</text>
          <text x="70.0" y="68.7" text-anchor="end">D</text>
          <text x="358.7" y="25.0">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 310',
      caption: 'Şekil 107',
      label:
        'ABCD karesinde köşegenlerin kesim noktası O ile B birleştirilmiş; [BO] köşegene dik.',
      svg: `
          <path class="ln" d="M80.0,288.7 L295.0,288.7 L295.0,73.7 L80.0,73.7 Z"/>
          <path class="ln" d="M80.0,288.7 L348.7,20.0"/>
          <path class="ln" d="M295.0,288.7 L348.7,20.0"/>
          <path class="aux" d="M295.0,288.7 L187.5,181.2"/>
          <path class="arc" d="M195.3,189.0 L203.0,181.2 L195.3,173.4"/>
          <circle class="pt" cx="80.0" cy="288.7" r="3.2"/>
          <circle class="pt" cx="295.0" cy="288.7" r="3.2"/>
          <circle class="pt" cx="295.0" cy="73.7" r="3.2"/>
          <circle class="pt" cx="80.0" cy="73.7" r="3.2"/>
          <circle class="pt" cx="348.7" cy="20.0" r="3.2"/>
          <circle class="pt" cx="187.5" cy="181.2" r="3.2"/>
          <text x="70.0" y="303.7" text-anchor="end">A</text>
          <text x="305.0" y="303.7">B</text>
          <text x="283.0" y="67.7" text-anchor="end">C</text>
          <text x="70.0" y="68.7" text-anchor="end">D</text>
          <text x="358.7" y="25.0">E</text>
          <text x="175.5" y="186.2" text-anchor="end">O</text>
        `,
    },
    given: [
      'ABCD kare',
      'A, C ve E doğrusal',
      'A(ABCD) = 32 cm²',
      '|EC| = 2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BE| kaç cm dir?',
    choices: [
      { key: 'A', text: '2√10' },
      { key: 'B', text: '2√11' },
      { key: 'C', text: '4√3' },
      { key: 'D', text: '2√13' },
      { key: 'E', text: '2√14' },
    ],
    answer: 'D',
    hint: 'Karenin köşegenleri eşit, dik ve birbirini ortalar; B den köşegene dikme in.',
    solution: [
      {
        title: 'Kenar',
        detail:
          'A(ABCD) = 32 olduğundan kenar 4√2 cm, köşegen |AC| = 4√2 · √2 = 8 cm.',
      },
      {
        title: 'Köşegenler',
        detail:
          'Köşegenler O da dik kesişir ve birbirini ortalar: |BO| = |OC| = 4 cm.',
      },
      {
        title: 'OE uzunluğu',
        detail:
          '|OE| = |OC| + |CE| = 4 + 2 = 6 cm.',
      },
      {
        title: 'Pisagor',
        detail:
          'BOE dik üçgeninde |BE|² = 4² + 6² = 16 + 36 = 52.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BE| = √52 = 2√13 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 108
  {
    id: 'quadrilaterals-108',
    topic: 'Karede dik üçgen ve en küçük alan',
    figure: {
      viewBox: '0 0 400 312',
      caption: 'Şekil 108',
      label:
        'ABCD karesinin içinde E noktası; [AE] ile [EB] dik; ADCBE beşgeni taralı.',
      svg: `
          <path class="shade" d="M68.0,284.0 L68.0,20.0 L332.0,20.0 L332.0,284.0 L200.0,152.0 Z"/>
          <path class="ln" d="M68.0,284.0 L332.0,284.0 L332.0,20.0 L68.0,20.0 Z"/>
          <path class="ln" d="M68.0,284.0 L200.0,152.0"/>
          <path class="ln" d="M200.0,152.0 L332.0,284.0"/>
          <path class="arc" d="M192.2,159.8 L200.0,167.6 L207.8,159.8"/>
          <circle class="pt" cx="68.0" cy="284.0" r="3.2"/>
          <circle class="pt" cx="332.0" cy="284.0" r="3.2"/>
          <circle class="pt" cx="332.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="68.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="152.0" r="3.2"/>
          <text x="58.0" y="299.0" text-anchor="end">A</text>
          <text x="342.0" y="299.0">B</text>
          <text x="342.0" y="15.0">C</text>
          <text x="58.0" y="15.0" text-anchor="end">D</text>
          <text x="200.0" y="139.0" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 312',
      caption: 'Şekil 108',
      label:
        'ABCD karesinde [AB] çaplı yarım çember ve E den [AB] ye inen dikme [EH] çizilmiş.',
      svg: `
          <path class="shade" d="M68.0,284.0 L68.0,20.0 L332.0,20.0 L332.0,284.0 L200.0,152.0 Z"/>
          <path class="ln" d="M68.0,284.0 L332.0,284.0 L332.0,20.0 L68.0,20.0 Z"/>
          <path class="ln" d="M68.0,284.0 L200.0,152.0"/>
          <path class="ln" d="M200.0,152.0 L332.0,284.0"/>
          <path class="arc" d="M192.2,159.8 L200.0,167.6 L207.8,159.8"/>
          <path class="aux" d="M68.0,284.0 A132,132 0 0 1 332.0,284.0"/>
          <path class="aux" d="M200.0,152.0 L200.0,284.0"/>
          <path class="arc" d="M200.0,273.0 L211.0,273.0 L211.0,284.0"/>
          <circle class="pt" cx="68.0" cy="284.0" r="3.2"/>
          <circle class="pt" cx="332.0" cy="284.0" r="3.2"/>
          <circle class="pt" cx="332.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="68.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="152.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="284.0" r="3.2"/>
          <text x="58.0" y="299.0" text-anchor="end">A</text>
          <text x="342.0" y="299.0">B</text>
          <text x="342.0" y="15.0">C</text>
          <text x="58.0" y="15.0" text-anchor="end">D</text>
          <text x="200.0" y="139.0" text-anchor="middle">E</text>
          <text x="200.0" y="305.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD kare',
      '[AE] ⊥ [EB]',
      '|AB| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, taralı ADCBE bölgesinin alanının en küçük değeri kaç cm² dir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '100' },
      { key: 'C', text: '104' },
      { key: 'D', text: '108' },
      { key: 'E', text: '112' },
    ],
    answer: 'D',
    hint: 'Taralı alan en küçük olduğunda AEB üçgeninin alanı en büyüktür; E nin [AB] ye uzaklığı en çok ne olabilir?',
    solution: [
      {
        title: 'Fark',
        detail:
          'A(ADCBE) = A(ABCD) − A(AEB) = 144 − A(AEB); taralı alanın en küçük olması için A(AEB) en büyük olmalı.',
      },
      {
        title: 'Çember',
        detail:
          'm(AEB) = 90° olduğundan E, [AB] çaplı çemberin üzerindedir; yarıçap 6 cm.',
      },
      {
        title: 'En büyük yükseklik',
        detail:
          'E nin [AB] ye uzaklığı |EH| en çok yarıçap kadar, yani 6 cm olur.',
      },
      {
        title: 'Üçgen',
        detail:
          'A(AEB) en çok 12 · 6 / 2 = 36 cm² dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Taralı alanın en küçük değeri 144 − 36 = 108 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 109
  {
    id: 'quadrilaterals-109',
    topic: 'Deltoidde köşegenler ve alan',
    figure: {
      viewBox: '0 0 400 275',
      caption: 'Şekil 109',
      label:
        'ABCD deltoidinde |AB| = |AD| ve |CB| = |CD| eşit işaretli; [BD] köşegeni çizilmiş.',
      svg: `
          <path class="ln" d="M53.0,137.0 L137.0,249.0 L347.0,137.0 L137.0,25.0 Z"/>
          <path class="ln" d="M137.0,249.0 L137.0,25.0"/>
          <path class="tick" d="M91.0,196.0 L99.0,190.0"/>
          <path class="tick" d="M99.0,84.0 L91.0,78.0"/>
          <path class="tick" d="M241.4,187.6 L246.1,196.5"/>
          <path class="tick" d="M237.9,189.5 L242.6,198.4"/>
          <path class="tick" d="M246.1,77.5 L241.4,86.4"/>
          <path class="tick" d="M242.6,75.6 L237.9,84.5"/>
          <circle class="pt" cx="53.0" cy="137.0" r="3.2"/>
          <circle class="pt" cx="137.0" cy="249.0" r="3.2"/>
          <circle class="pt" cx="347.0" cy="137.0" r="3.2"/>
          <circle class="pt" cx="137.0" cy="25.0" r="3.2"/>
          <text x="43.0" y="142.0" text-anchor="end">A</text>
          <text x="137.0" y="270.0" text-anchor="middle">B</text>
          <text x="357.0" y="142.0">C</text>
          <text x="137.0" y="14.0" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 275',
      caption: 'Şekil 109',
      label:
        'ABCD deltoidinde [AC] köşegeni çizilmiş; [BD] yi O noktasında dik kesiyor.',
      svg: `
          <path class="ln" d="M53.0,137.0 L137.0,249.0 L347.0,137.0 L137.0,25.0 Z"/>
          <path class="ln" d="M137.0,249.0 L137.0,25.0"/>
          <path class="tick" d="M91.0,196.0 L99.0,190.0"/>
          <path class="tick" d="M99.0,84.0 L91.0,78.0"/>
          <path class="tick" d="M241.4,187.6 L246.1,196.5"/>
          <path class="tick" d="M237.9,189.5 L242.6,198.4"/>
          <path class="tick" d="M246.1,77.5 L241.4,86.4"/>
          <path class="tick" d="M242.6,75.6 L237.9,84.5"/>
          <path class="aux" d="M53.0,137.0 L347.0,137.0"/>
          <path class="arc" d="M148.0,137.0 L148.0,126.0 L137.0,126.0"/>
          <circle class="pt" cx="53.0" cy="137.0" r="3.2"/>
          <circle class="pt" cx="137.0" cy="249.0" r="3.2"/>
          <circle class="pt" cx="347.0" cy="137.0" r="3.2"/>
          <circle class="pt" cx="137.0" cy="25.0" r="3.2"/>
          <circle class="pt" cx="137.0" cy="137.0" r="3.2"/>
          <text x="43.0" y="142.0" text-anchor="end">A</text>
          <text x="137.0" y="270.0" text-anchor="middle">B</text>
          <text x="357.0" y="142.0">C</text>
          <text x="137.0" y="14.0" text-anchor="middle">D</text>
          <text x="145.0" y="156.0">O</text>
        `,
    },
    given: [
      'ABCD deltoid',
      '|AB| = |AD| = 10 cm',
      '|CB| = |CD| = 17 cm',
      '|BD| = 16 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '144' },
      { key: 'B', text: '156' },
      { key: 'C', text: '168' },
      { key: 'D', text: '176' },
      { key: 'E', text: '184' },
    ],
    answer: 'C',
    hint: 'Deltoidde [AC] köşegeni [BD] yi dik keser ve ortalar.',
    solution: [
      {
        title: 'Köşegenler',
        detail:
          '[AC], [BD] yi O noktasında dik keser ve ortalar: |BO| = |OD| = 8 cm.',
      },
      {
        title: 'AO',
        detail:
          'ABO dik üçgeninde |AO|² = 10² − 8² = 36, |AO| = 6 cm.',
      },
      {
        title: 'OC',
        detail:
          'CBO dik üçgeninde |OC|² = 17² − 8² = 225, |OC| = 15 cm.',
      },
      {
        title: 'Köşegen',
        detail:
          '|AC| = 6 + 15 = 21 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = |AC| · |BD| / 2 = 21 · 16 / 2 = 168 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 110
  {
    id: 'quadrilaterals-110',
    topic: 'Karede dik açı ve Öklit bağıntısı',
    figure: {
      viewBox: '0 -8 400 314',
      caption: 'Şekil 110',
      label:
        'ABCD karesinde F noktası [DC] üzerinde, [EF] ile [DC] dik; E iç noktası A, B ve C ye birleştirilmiş, AEB açısı dik; |EC| = x.',
      svg: `
          <path class="ln" d="M70.0,280.0 L330.0,280.0 L330.0,20.0 L70.0,20.0 Z"/>
          <path class="ln" d="M122.0,20.0 L122.0,176.0"/>
          <path class="ln" d="M70.0,280.0 L122.0,176.0 L330.0,280.0"/>
          <path class="ln" d="M122.0,176.0 L330.0,20.0"/>
          <path class="arc" d="M122.0,31.0 L133.0,31.0 L133.0,20.0"/>
          <path class="arc" d="M117.1,185.8 L126.9,190.8 L131.8,180.9"/>
          <text class="val" x="220.0" y="90.0" text-anchor="end">x</text>
          <circle class="pt" cx="70.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="122.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="122.0" cy="176.0" r="3.2"/>
          <text x="60.0" y="295.0" text-anchor="end">A</text>
          <text x="340.0" y="295.0">B</text>
          <text x="340.0" y="15.0">C</text>
          <text x="60.0" y="15.0" text-anchor="end">D</text>
          <text x="122.0" y="11.0" text-anchor="middle">F</text>
          <text x="112.0" y="181.0" text-anchor="end">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -8 400 314',
      caption: 'Şekil 110',
      label:
        'ABCD karesinde E den [AB] ye inen [EH] dikmesi çizilmiş.',
      svg: `
          <path class="ln" d="M70.0,280.0 L330.0,280.0 L330.0,20.0 L70.0,20.0 Z"/>
          <path class="ln" d="M122.0,20.0 L122.0,176.0"/>
          <path class="ln" d="M70.0,280.0 L122.0,176.0 L330.0,280.0"/>
          <path class="ln" d="M122.0,176.0 L330.0,20.0"/>
          <path class="arc" d="M122.0,31.0 L133.0,31.0 L133.0,20.0"/>
          <path class="arc" d="M117.1,185.8 L126.9,190.8 L131.8,180.9"/>
          <path class="aux" d="M122.0,176.0 L122.0,280.0"/>
          <path class="arc" d="M122.0,269.0 L133.0,269.0 L133.0,280.0"/>
          <text class="val" x="220.0" y="90.0" text-anchor="end">x</text>
          <circle class="pt" cx="70.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="330.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="122.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="122.0" cy="176.0" r="3.2"/>
          <circle class="pt" cx="122.0" cy="280.0" r="3.2"/>
          <text x="60.0" y="295.0" text-anchor="end">A</text>
          <text x="340.0" y="295.0">B</text>
          <text x="340.0" y="15.0">C</text>
          <text x="60.0" y="15.0" text-anchor="end">D</text>
          <text x="122.0" y="11.0" text-anchor="middle">F</text>
          <text x="112.0" y="181.0" text-anchor="end">E</text>
          <text x="122.0" y="301.0" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD kare',
      '[EF] ⊥ [DC]',
      '|AD| = 10 cm',
      '|DF| = 2 cm',
      'm(AEB) = 90°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |EC| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '6√3' },
      { key: 'D', text: '2√26' },
      { key: 'E', text: '10' },
    ],
    answer: 'E',
    hint: 'E den [AB] ye bir dikme in; AEB dik üçgeninde hipotenüse ait yüksekliği düşün.',
    solution: [
      {
        title: 'Dikme',
        detail:
          'E den [AB] ye [EH] dikmesini çiz. [EF] ⊥ [DC] olduğundan F, E ve H aynı doğru üzerindedir; |AH| = |DF| = 2 cm, |HB| = 10 − 2 = 8 cm.',
      },
      {
        title: 'Öklit bağıntısı',
        detail:
          'AEB dik üçgeninde [EH] hipotenüse ait yükseklik: |EH|² = |AH| · |HB| = 2 · 8 = 16, |EH| = 4 cm.',
      },
      {
        title: 'EF ve FC',
        detail:
          '|EF| = 10 − 4 = 6 cm ve |FC| = 10 − 2 = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'EFC dik üçgeninde x² = 6² + 8² = 100, x = 10 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 111
  {
    id: 'quadrilaterals-111',
    topic: 'Deltoidde alan ve kenar',
    figure: {
      viewBox: '0 -8 400 270',
      caption: 'Şekil 111',
      label:
        'ABCD deltoidinde |AB| = |AD| ve |CB| = |CD| eşit işaretli; [BD] köşegeni çizilmiş.',
      svg: `
          <path class="ln" d="M65.0,128.0 L119.0,236.0 L335.0,128.0 L119.0,20.0 Z"/>
          <path class="ln" d="M119.0,236.0 L119.0,20.0"/>
          <path class="tick" d="M96.5,179.8 L87.5,184.2"/>
          <path class="tick" d="M87.5,71.8 L96.5,76.2"/>
          <path class="tick" d="M223.0,178.4 L227.4,187.4"/>
          <path class="tick" d="M226.6,176.6 L231.0,185.6"/>
          <path class="tick" d="M227.4,68.6 L223.0,77.6"/>
          <path class="tick" d="M231.0,70.4 L226.6,79.4"/>
          <circle class="pt" cx="65.0" cy="128.0" r="3.2"/>
          <circle class="pt" cx="119.0" cy="236.0" r="3.2"/>
          <circle class="pt" cx="335.0" cy="128.0" r="3.2"/>
          <circle class="pt" cx="119.0" cy="20.0" r="3.2"/>
          <text x="55.0" y="133.0" text-anchor="end">A</text>
          <text x="119.0" y="257.0" text-anchor="middle">B</text>
          <text x="345.0" y="133.0">C</text>
          <text x="119.0" y="9.0" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -8 400 270',
      caption: 'Şekil 111',
      label:
        'ABCD deltoidinde [AC] köşegeni çizilmiş; [BD] yi O noktasında dik kesiyor.',
      svg: `
          <path class="ln" d="M65.0,128.0 L119.0,236.0 L335.0,128.0 L119.0,20.0 Z"/>
          <path class="ln" d="M119.0,236.0 L119.0,20.0"/>
          <path class="tick" d="M96.5,179.8 L87.5,184.2"/>
          <path class="tick" d="M87.5,71.8 L96.5,76.2"/>
          <path class="tick" d="M223.0,178.4 L227.4,187.4"/>
          <path class="tick" d="M226.6,176.6 L231.0,185.6"/>
          <path class="tick" d="M227.4,68.6 L223.0,77.6"/>
          <path class="tick" d="M231.0,70.4 L226.6,79.4"/>
          <path class="aux" d="M65.0,128.0 L335.0,128.0"/>
          <path class="arc" d="M130.0,128.0 L130.0,117.0 L119.0,117.0"/>
          <circle class="pt" cx="65.0" cy="128.0" r="3.2"/>
          <circle class="pt" cx="119.0" cy="236.0" r="3.2"/>
          <circle class="pt" cx="335.0" cy="128.0" r="3.2"/>
          <circle class="pt" cx="119.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="119.0" cy="128.0" r="3.2"/>
          <text x="55.0" y="133.0" text-anchor="end">A</text>
          <text x="119.0" y="257.0" text-anchor="middle">B</text>
          <text x="345.0" y="133.0">C</text>
          <text x="119.0" y="9.0" text-anchor="middle">D</text>
          <text x="127.0" y="147.0">O</text>
        `,
    },
    given: [
      'ABCD deltoid',
      '|AB| = |AD| = 3√5 cm',
      '|CB| = |CD|',
      '|BD| = 12 cm',
      'A(ABCD) = 90 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DC| kaç cm dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '6√5' },
      { key: 'C', text: '14' },
      { key: 'D', text: '4√13' },
      { key: 'E', text: '15' },
    ],
    answer: 'B',
    hint: 'Alandan [AC] köşegenini bul; [AC], [BD] yi dik keser ve ortalar.',
    solution: [
      {
        title: 'Köşegen',
        detail:
          'A(ABCD) = |AC| · |BD| / 2 olduğundan 90 = |AC| · 12 / 2, |AC| = 15 cm.',
      },
      {
        title: 'Ortalama',
        detail:
          '[AC], [BD] yi O noktasında dik keser ve ortalar: |BO| = |OD| = 6 cm.',
      },
      {
        title: 'AO',
        detail:
          'ADO dik üçgeninde |AO|² = (3√5)² − 6² = 45 − 36 = 9, |AO| = 3 cm; buradan |OC| = 15 − 3 = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'DOC dik üçgeninde |DC|² = 6² + 12² = 180, |DC| = 6√5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 112
  {
    id: 'quadrilaterals-112',
    topic: 'Dikdörtgende üçgen alanları',
    figure: {
      viewBox: '0 -8 400 230',
      caption: 'Şekil 112',
      label:
        'ABCD dikdörtgeninde E noktası [DC] üzerinde, K noktası [BC] nin orta noktası, |BK| = |KC| eşit işaretli; F noktası [AK] üzerinde; AEF üçgeni taralı.',
      svg: `
          <path class="shade" d="M50.0,195.0 L250.0,20.0 L150.0,165.8 Z"/>
          <path class="ln" d="M50.0,195.0 L350.0,195.0 L350.0,20.0 L50.0,20.0 Z"/>
          <path class="ln" d="M50.0,195.0 L250.0,20.0 L350.0,107.5"/>
          <path class="ln" d="M50.0,195.0 L350.0,107.5"/>
          <path class="ln" d="M250.0,20.0 L150.0,165.8"/>
          <path class="tick" d="M345.0,151.2 L355.0,151.2"/>
          <path class="tick" d="M345.0,63.8 L355.0,63.8"/>
          <circle class="pt" cx="50.0" cy="195.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="195.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="250.0" cy="20.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="107.5" r="3.2"/>
          <circle class="pt" cx="150.0" cy="165.8" r="3.2"/>
          <text x="40.0" y="210.0" text-anchor="end">A</text>
          <text x="360.0" y="210.0">B</text>
          <text x="360.0" y="15.0">C</text>
          <text x="40.0" y="15.0" text-anchor="end">D</text>
          <text x="250.0" y="10.0" text-anchor="middle">E</text>
          <text x="360.0" y="112.5">K</text>
          <text x="154.0" y="185.8">F</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '|DE| = 2|EC|',
      '|BK| = |KC|',
      '|FK| = 2|AF|',
      'A(AEF) = 12 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '90' },
      { key: 'B', text: '96' },
      { key: 'C', text: '100' },
      { key: 'D', text: '108' },
      { key: 'E', text: '120' },
    ],
    answer: 'D',
    hint: 'A(ABCD) = S de; AEK üçgeninin alanını S cinsinden bulmak için köşedeki üç dik üçgeni çıkar.',
    solution: [
      {
        title: 'Köşe üçgenleri',
        detail:
          'A(ABCD) = S olsun. |DE| = 2|DC| / 3 olduğundan A(ADE) = S / 3, A(ECK) = (|DC| / 3) · (|BC| / 2) / 2 = S / 12, A(ABK) = S / 4.',
      },
      {
        title: 'AEK',
        detail:
          'A(AEK) = S − S / 3 − S / 12 − S / 4 = S / 3.',
      },
      {
        title: 'Oran',
        detail:
          'AEF ve EFK üçgenlerinin yüksekliği ortak; |AF| : |FK| = 1 : 2 olduğundan A(AEF) = A(AEK) / 3 = S / 9.',
      },
      {
        title: 'Sonuç',
        detail:
          'S / 9 = 12 ise A(ABCD) = S = 108 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 113
  {
    id: 'quadrilaterals-113',
    topic: 'Karede 15° ve özel dik üçgen',
    figure: {
      viewBox: '0 -14 400 316',
      caption: 'Şekil 113',
      label:
        'ABCD karesinin dışında F noktası; [AF] ile [FC] dik; DCF açısı 15 derece; |AF| = x.',
      svg: `
          <path class="ln" d="M90.0,280.0 L310.0,280.0 L310.0,60.0 L90.0,60.0 Z"/>
          <path class="ln" d="M90.0,280.0 L159.7,19.7 L310.0,60.0"/>
          <path class="arc" d="M156.9,30.4 L167.5,33.2 L170.4,22.6"/>
          <path class="arc" d="M264.0,60.0 A46,46 0 0 1 265.6,48.1"/>
          <text class="val" x="132.9" y="153.9">x</text>
          <text class="val" x="222.8" y="54.5" text-anchor="middle">15°</text>
          <circle class="pt" cx="90.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="159.7" cy="19.7" r="3.2"/>
          <text x="80.0" y="295.0" text-anchor="end">A</text>
          <text x="320.0" y="295.0">B</text>
          <text x="320.0" y="55.0">C</text>
          <text x="80.0" y="65.0" text-anchor="end">D</text>
          <text x="159.7" y="10.7" text-anchor="middle">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -14 400 316',
      caption: 'Şekil 113',
      label:
        'ABCD karesinde [AC] köşegeni çizilmiş; ACD açısı 45 derece.',
      svg: `
          <path class="ln" d="M90.0,280.0 L310.0,280.0 L310.0,60.0 L90.0,60.0 Z"/>
          <path class="ln" d="M90.0,280.0 L159.7,19.7 L310.0,60.0"/>
          <path class="arc" d="M156.9,30.4 L167.5,33.2 L170.4,22.6"/>
          <path class="arc" d="M264.0,60.0 A46,46 0 0 1 265.6,48.1"/>
          <path class="aux" d="M90.0,280.0 L310.0,60.0"/>
          <path class="arc" d="M286.0,84.0 A34,34 0 0 1 276.0,60.0"/>
          <text class="val" x="132.9" y="153.9">x</text>
          <text class="val" x="222.8" y="54.5" text-anchor="middle">15°</text>
          <text class="val" x="261.2" y="86.2" text-anchor="middle">45°</text>
          <circle class="pt" cx="90.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="159.7" cy="19.7" r="3.2"/>
          <text x="80.0" y="295.0" text-anchor="end">A</text>
          <text x="320.0" y="295.0">B</text>
          <text x="320.0" y="55.0">C</text>
          <text x="80.0" y="65.0" text-anchor="end">D</text>
          <text x="159.7" y="10.7" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD kare',
      '[AF] ⊥ [FC]',
      'm(DCF) = 15°',
      '|AF| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| nin x türünden eşiti aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'x√6 / 3' },
      { key: 'B', text: 'x√2 / 2' },
      { key: 'C', text: 'x√3 / 3' },
      { key: 'D', text: 'x√2' },
      { key: 'E', text: '2x' },
    ],
    answer: 'A',
    hint: '[AC] köşegenini çiz; ACF açısını bulunca AFC özel bir dik üçgen olur.',
    solution: [
      {
        title: 'Köşegen',
        detail:
          '[AC] köşegenini çiz; m(ACD) = 45° olduğundan m(ACF) = 45° + 15° = 60°.',
      },
      {
        title: '30-60-90',
        detail:
          'AFC dik üçgeninde m(FAC) = 30°; buna göre |AF| = |AC| · √3 / 2.',
      },
      {
        title: 'AC',
        detail:
          'x = |AC| · √3 / 2 ise |AC| = 2x / √3 = 2x√3 / 3.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BC| = |AC| / √2 = 2x√3 / (3√2) = x√6 / 3 bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 114
  {
    id: 'quadrilaterals-114',
    topic: 'Dikdörtgende katlama ve benzerlik',
    figure: {
      viewBox: '0 0 400 236',
      caption: 'Şekil 114',
      label:
        'ABCD dikdörtgeni [EC] boyunca katlanmış; D köşesi [AB] üzerindeki D′ noktasına gelmiş; katlanmadan önceki [ED] ve [DC] noktalı çizilmiş; ED′C açısı dik.',
      svg: `
          <path class="ln" d="M50.0,130.0 L50.0,30.0 L350.0,30.0" stroke-dasharray="2 5"/>
          <path class="ln" d="M50.0,130.0 L50.0,210.0 L350.0,210.0 L350.0,30.0"/>
          <path class="ln" d="M50.0,130.0 L350.0,30.0"/>
          <path class="ln" d="M50.0,130.0 L110.0,210.0 L350.0,30.0"/>
          <path class="arc" d="M103.4,201.2 L112.2,194.6 L118.8,203.4"/>
          <path class="arc" d="M61.0,210.0 L61.0,199.0 L50.0,199.0"/>
          <path class="arc" d="M350.0,199.0 L339.0,199.0 L339.0,210.0"/>
          <circle class="pt" cx="50.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="130.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="210.0" r="3.2"/>
          <text x="40.0" y="225.0" text-anchor="end">A</text>
          <text x="360.0" y="225.0">B</text>
          <text x="360.0" y="25.0">C</text>
          <text x="40.0" y="25.0" text-anchor="end">D</text>
          <text x="40.0" y="135.0" text-anchor="end">E</text>
          <text x="110.0" y="231.0" text-anchor="middle">D′</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      'D köşesi [EC] boyunca katlanınca [AB] üzerindeki D′ noktasına geliyor',
      '|AE| = 8 cm',
      '|ED| = 10 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| kaç cm dir?',
    choices: [
      { key: 'A', text: '27' },
      { key: 'B', text: '30' },
      { key: 'C', text: '32' },
      { key: 'D', text: '34' },
      { key: 'E', text: '36' },
    ],
    answer: 'B',
    hint: 'Katlamada |ED′| = |ED| ve m(ED′C) = 90° kalır; AED′ ve BD′C üçgenlerini karşılaştır.',
    solution: [
      {
        title: 'Katlama',
        detail:
          'Katlama uzunluğu ve açıyı korur: |ED′| = 10 cm, m(ED′C) = m(EDC) = 90°; ayrıca |AD| = 8 + 10 = 18 cm = |BC|.',
      },
      {
        title: 'AD′',
        detail:
          'AED′ dik üçgeninde |AD′|² = 10² − 8² = 36, |AD′| = 6 cm.',
      },
      {
        title: 'Benzerlik',
        detail:
          'm(AD′E) + m(BD′C) = 90° olduğundan AED′ ve BD′C üçgenleri benzerdir: |AE| / |BD′| = |AD′| / |BC|.',
      },
      {
        title: 'BD′',
        detail:
          '8 / |BD′| = 6 / 18 ise |BD′| = 24 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AB| = 6 + 24 = 30 cm bulunur (kontrol: |D′C|² = 24² + 18² = 900, |D′C| = 30 = |DC|).',
      },
    ],
  },
  // ---------------------------------------------------------------- 115
  {
    id: 'quadrilaterals-115',
    topic: 'Karede köşegen ve dik izdüşüm',
    figure: {
      viewBox: '0 0 400 296',
      caption: 'Şekil 115',
      label:
        'ABCD karesinde E noktası [BC] üzerinde; [BD] köşegeni ile [AE] F noktasında kesişiyor; |BF| = x.',
      svg: `
          <path class="ln" d="M80.0,270.0 L320.0,270.0 L320.0,30.0 L80.0,30.0 Z"/>
          <path class="ln" d="M320.0,270.0 L80.0,30.0"/>
          <path class="ln" d="M80.0,270.0 L320.0,171.2"/>
          <text class="val" x="293.0" y="231.0">x</text>
          <circle class="pt" cx="80.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="171.2" r="3.2"/>
          <circle class="pt" cx="250.0" cy="200.0" r="3.2"/>
          <text x="70.0" y="285.0" text-anchor="end">A</text>
          <text x="330.0" y="285.0">B</text>
          <text x="330.0" y="25.0">C</text>
          <text x="70.0" y="25.0" text-anchor="end">D</text>
          <text x="330.0" y="176.2">E</text>
          <text x="250.0" y="222.0" text-anchor="middle">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 0 400 296',
      caption: 'Şekil 115',
      label:
        'ABCD karesinde F den [AD] ye inen [FH] dikmesi çizilmiş.',
      svg: `
          <path class="ln" d="M80.0,270.0 L320.0,270.0 L320.0,30.0 L80.0,30.0 Z"/>
          <path class="ln" d="M320.0,270.0 L80.0,30.0"/>
          <path class="ln" d="M80.0,270.0 L320.0,171.2"/>
          <path class="aux" d="M250.0,200.0 L80.0,200.0"/>
          <path class="arc" d="M91.0,200.0 L91.0,189.0 L80.0,189.0"/>
          <text class="val" x="293.0" y="231.0">x</text>
          <circle class="pt" cx="80.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="171.2" r="3.2"/>
          <circle class="pt" cx="250.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="200.0" r="3.2"/>
          <text x="70.0" y="285.0" text-anchor="end">A</text>
          <text x="330.0" y="285.0">B</text>
          <text x="330.0" y="25.0">C</text>
          <text x="70.0" y="25.0" text-anchor="end">D</text>
          <text x="330.0" y="176.2">E</text>
          <text x="250.0" y="222.0" text-anchor="middle">F</text>
          <text x="70.0" y="205.0" text-anchor="end">H</text>
        `,
    },
    given: [
      'ABCD kare',
      '[BD] ∩ [AE] = {F}',
      '|AF| = 13 cm',
      '|DF| = 17 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BF| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'F den [AD] ye dikme in; köşegen kenarla 45° yaptığından oluşan üçgen ikizkenar dik üçgendir.',
    solution: [
      {
        title: 'Dikme',
        detail:
          'F den [AD] ye [FH] dikmesini çiz. m(HDF) = 45° olduğundan FHD ikizkenar dik üçgendir: |FH| = |HD| = 17 / √2 cm.',
      },
      {
        title: 'AH',
        detail:
          'AHF dik üçgeninde |AH|² = 13² − (17 / √2)² = 169 − 289 / 2 = 49 / 2, |AH| = 7 / √2 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'F nin [AB] ye uzaklığı |AH| = 7 / √2 cm dir; [BD] köşegeni [AB] ile 45° yaptığından |BF| = √2 · |AH| olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |BF| = (7 / √2) · √2 = 7 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 116
  {
    id: 'quadrilaterals-116',
    topic: 'Karede dik açı ve benzerlik',
    figure:{
      viewBox: '0 -6 400 316',
      caption: 'Şekil 116',
      label:
        'ABCD karesinde E noktası [AB] üzerinde, F noktası [BC] üzerinde; [DE] ile [EF] dik.',
      svg: `
          <path class="ln" d="M90.0,280.0 L310.0,280.0 L310.0,60.0 L90.0,60.0 Z"/>
          <path class="ln" d="M90.0,60.0 L236.7,280.0 L310.0,231.1"/>
          <path class="arc" d="M230.6,270.8 L239.7,264.7 L245.8,273.9"/>
          <circle class="pt" cx="90.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="236.7" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="231.1" r="3.2"/>
          <text x="80.0" y="295.0" text-anchor="end">A</text>
          <text x="320.0" y="295.0">B</text>
          <text x="320.0" y="55.0">C</text>
          <text x="80.0" y="55.0" text-anchor="end">D</text>
          <text x="236.7" y="301.0" text-anchor="middle">E</text>
          <text x="320.0" y="236.1">F</text>
        `,
    },
    given: [
      'ABCD kare',
      '[DE] ⊥ [EF]',
      '|BF| = 2 cm',
      '|EB| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABCD karesinin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '72' },
      { key: 'C', text: '81' },
      { key: 'D', text: '90' },
      { key: 'E', text: '100' },
    ],
    answer: 'C',
    hint: 'DAE ve EBF üçgenlerinin açılarını karşılaştır; kenarı a diyerek benzerlik oranı kur.',
    solution: [
      {
        title: 'Benzerlik',
        detail:
          'm(DEA) + m(FEB) = 90° olduğundan m(ADE) = m(FEB) olur; DAE ve EBF dik üçgenleri benzerdir.',
      },
      {
        title: 'Oran',
        detail:
          'Karenin kenarı a olsun: |AE| = a − 3. Benzerlikten |AE| / |BF| = |AD| / |EB|, yani (a − 3) / 2 = a / 3.',
      },
      {
        title: 'Denklem',
        detail:
          '3a − 9 = 2a ise a = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABCD karesinin alanı 9² = 81 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 117
  {
    id: 'quadrilaterals-117',
    topic: 'Dikdörtgende dikme ve benzerlik',
    figure:{
      viewBox: '0 0 400 236',
      caption: 'Şekil 117',
      label:
        'ABCD dikdörtgeninde E noktası [DC] üzerinde; B den [AE] ye inen dikmenin ayağı F; |FB| = x.',
      svg: `
          <path class="ln" d="M50.0,210.0 L350.0,210.0 L350.0,30.0 L50.0,30.0 Z"/>
          <path class="ln" d="M50.0,210.0 L185.0,30.0"/>
          <path class="ln" d="M350.0,210.0 L158.0,66.0"/>
          <path class="arc" d="M151.4,74.8 L160.2,81.4 L166.8,72.6"/>
          <text class="val" x="262.0" y="132.0">x</text>
          <circle class="pt" cx="50.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="210.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="185.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="158.0" cy="66.0" r="3.2"/>
          <text x="40.0" y="225.0" text-anchor="end">A</text>
          <text x="360.0" y="225.0">B</text>
          <text x="360.0" y="25.0">C</text>
          <text x="40.0" y="25.0" text-anchor="end">D</text>
          <text x="185.0" y="21.0" text-anchor="middle">E</text>
          <text x="148.0" y="62.0" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '[AE] ⊥ [BF]',
      '|DE| = 9 cm',
      '|EC| = 11 cm',
      '|BC| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |FB| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '15' },
      { key: 'D', text: '16' },
      { key: 'E', text: '18' },
    ],
    answer: 'D',
    hint: 'ADE ve BFA dik üçgenlerinde [DC] ∥ [AB] olduğundan eş açılar ara.',
    solution: [
      {
        title: 'AE',
        detail:
          'ADE dik üçgeninde |AE|² = 12² + 9² = 225, |AE| = 15 cm.',
      },
      {
        title: 'AB',
        detail:
          '|AB| = |DC| = 9 + 11 = 20 cm.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[DC] ∥ [AB] olduğundan m(DEA) = m(EAB); ADE ve BFA dik üçgenleri benzerdir: |BF| / |AD| = |AB| / |AE|.',
      },
      {
        title: 'Sonuç',
        detail:
          'x / 12 = 20 / 15 ise x = 16 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 118
  {
    id: 'quadrilaterals-118',
    topic: 'Karede eş üçgenler ve taralı alan',
    figure:{
      viewBox: '0 40 400 256',
      caption: 'Şekil 118',
      label:
        'ABCD karesinde E noktası [AD] üzerinde; [EC] ile [CF] dik; F noktası [AB] nin B tarafındaki uzantısında; [EF], [BC] yi K noktasında kesiyor; CEK üçgeni taralı.',
      svg: `
          <path class="shade" d="M268.0,66.0 L64.0,134.0 L268.0,236.0 Z"/>
          <path class="ln" d="M64.0,270.0 L268.0,270.0 L268.0,66.0 L64.0,66.0 Z"/>
          <path class="ln" d="M268.0,270.0 L336.0,270.0"/>
          <path class="ln" d="M64.0,134.0 L268.0,66.0 L336.0,270.0"/>
          <path class="ln" d="M64.0,134.0 L336.0,270.0"/>
          <path class="arc" d="M257.6,69.5 L261.0,79.9 L271.5,76.4"/>
          <circle class="pt" cx="64.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="268.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="268.0" cy="66.0" r="3.2"/>
          <circle class="pt" cx="64.0" cy="66.0" r="3.2"/>
          <circle class="pt" cx="64.0" cy="134.0" r="3.2"/>
          <circle class="pt" cx="336.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="268.0" cy="236.0" r="3.2"/>
          <text x="54.0" y="285.0" text-anchor="end">A</text>
          <text x="260.0" y="289.0" text-anchor="middle">B</text>
          <text x="268.0" y="57.0" text-anchor="middle">C</text>
          <text x="54.0" y="61.0" text-anchor="end">D</text>
          <text x="54.0" y="139.0" text-anchor="end">E</text>
          <text x="346.0" y="285.0">F</text>
          <text x="261.0" y="258.0" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABCD kare',
      'E, K, F doğrusal',
      '[EC] ⊥ [CF]',
      '|DE| = 4 cm',
      '|AE| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, taralı A(CEK) kaç cm² dir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '48' },
      { key: 'D', text: '54' },
      { key: 'E', text: '60' },
    ],
    answer: 'E',
    hint: 'EDC ve FBC üçgenlerinin eş olduğunu göster; böylece |BF| bulunur.',
    solution: [
      {
        title: 'Kenar',
        detail:
          'Karenin kenarı |AD| = 4 + 8 = 12 cm.',
      },
      {
        title: 'Eşlik',
        detail:
          'm(DCE) = m(BCF) olduğundan EDC ve FBC dik üçgenleri eştir (|DC| = |BC|): |BF| = |DE| = 4 cm.',
      },
      {
        title: 'BK',
        detail:
          '[BK] ∥ [AE] olduğundan FBK ~ FAE: |BK| / 8 = 4 / 16, |BK| = 2 cm; buna göre |CK| = 12 − 2 = 10 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'CEK üçgeninde taban |CK| = 10, yükseklik E nin [BC] ye uzaklığı 12 cm: A(CEK) = 10 · 12 / 2 = 60 cm².',
      },
    ],
  },
  // ---------------------------------------------------------------- 119
  {
    id: 'quadrilaterals-119',
    topic: 'Karede dik üçgen ve dikmeler',
    figure:{
      viewBox: '0 -6 400 316',
      caption: 'Şekil 119',
      label:
        'ABCD karesinin içinde E noktası; [AE] ile [ED] dik; |BE| = x.',
      svg: `
          <path class="ln" d="M90.0,280.0 L310.0,280.0 L310.0,60.0 L90.0,60.0 Z"/>
          <path class="ln" d="M90.0,280.0 L195.6,200.8 L90.0,60.0"/>
          <path class="ln" d="M195.6,200.8 L310.0,280.0"/>
          <path class="arc" d="M186.8,207.4 L180.2,198.6 L189.0,192.0"/>
          <text class="val" x="256.8" y="232.4">x</text>
          <circle class="pt" cx="90.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="195.6" cy="200.8" r="3.2"/>
          <text x="80.0" y="295.0" text-anchor="end">A</text>
          <text x="320.0" y="295.0">B</text>
          <text x="320.0" y="55.0">C</text>
          <text x="80.0" y="55.0" text-anchor="end">D</text>
          <text x="197.6" y="190.8" text-anchor="middle">E</text>
        `,
    },
    solutionFigure:{
      viewBox: '0 -6 400 316',
      caption: 'Şekil 119',
      label:
        'E den [AD] ye [EH], [AB] ye [EK] dikmeleri çizilmiş.',
      svg: `
          <path class="ln" d="M90.0,280.0 L310.0,280.0 L310.0,60.0 L90.0,60.0 Z"/>
          <path class="ln" d="M90.0,280.0 L195.6,200.8 L90.0,60.0"/>
          <path class="ln" d="M195.6,200.8 L310.0,280.0"/>
          <path class="arc" d="M186.8,207.4 L180.2,198.6 L189.0,192.0"/>
          <text class="val" x="256.8" y="232.4">x</text>
          <path class="aux" d="M195.6,200.8 L90.0,200.8"/>
          <path class="aux" d="M195.6,200.8 L195.6,280.0"/>
          <path class="arc" d="M90.0,211.8 L101.0,211.8 L101.0,200.8"/>
          <path class="arc" d="M206.6,280.0 L206.6,269.0 L195.6,269.0"/>
          <circle class="pt" cx="90.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="195.6" cy="200.8" r="3.2"/>
          <circle class="pt" cx="90.0" cy="200.8" r="3.2"/>
          <circle class="pt" cx="195.6" cy="280.0" r="3.2"/>
          <text x="80.0" y="295.0" text-anchor="end">A</text>
          <text x="320.0" y="295.0">B</text>
          <text x="320.0" y="55.0">C</text>
          <text x="80.0" y="55.0" text-anchor="end">D</text>
          <text x="197.6" y="190.8" text-anchor="middle">E</text>
          <text x="80.0" y="205.8" text-anchor="end">H</text>
          <text x="195.6" y="301.0" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABCD kare',
      '[AE] ⊥ [ED]',
      '|AE| = 6 cm',
      '|DE| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BE| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '2√10' },
      { key: 'C', text: '4√3' },
      { key: 'D', text: '7' },
      { key: 'E', text: '5√2' },
    ],
    answer: 'B',
    hint: 'E den [AD] ye dikme in; AED dik üçgeninde Öklit bağıntılarını kullan.',
    solution: [
      {
        title: 'Kenar',
        detail:
          'AED dik üçgeninde |AD|² = 6² + 8² = 100, |AD| = 10 cm.',
      },
      {
        title: 'Dikme',
        detail:
          'E den [AD] ye [EH] dikmesini çiz: |EH| = 6 · 8 / 10 = 4,8 cm ve |AH| = 6² / 10 = 3,6 cm.',
      },
      {
        title: 'KB',
        detail:
          'E den [AB] ye inen dikmenin ayağı K olsun: |EK| = |AH| = 3,6 cm, |AK| = |EH| = 4,8 cm, |KB| = 10 − 4,8 = 5,2 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'EKB dik üçgeninde x² = 5,2² + 3,6² = 27,04 + 12,96 = 40, x = 2√10 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 120
  {
    id: 'quadrilaterals-120',
    topic: 'Dikdörtgende köşegene uzaklık ve alan',
    figure:{
      viewBox: '0 8 400 272',
      caption: 'Şekil 120',
      label:
        'ABCD dikdörtgeninin [DB] köşegeni üzerinde E ve F noktaları; A ve C bu noktalara birleştirilerek AFCE dörtgeni çizilmiş.',
      svg: `
          <path class="ln" d="M56.0,250.0 L344.0,250.0 L344.0,34.0 L56.0,34.0 Z"/>
          <path class="ln" d="M56.0,34.0 L344.0,250.0"/>
          <path class="ln" d="M56.0,250.0 L315.2,228.4 L344.0,34.0 L99.2,66.4 Z"/>
          <circle class="pt" cx="56.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="344.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="344.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="56.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="99.2" cy="66.4" r="3.2"/>
          <circle class="pt" cx="315.2" cy="228.4" r="3.2"/>
          <text x="46.0" y="265.0" text-anchor="end">A</text>
          <text x="354.0" y="265.0">B</text>
          <text x="354.0" y="29.0">C</text>
          <text x="46.0" y="29.0" text-anchor="end">D</text>
          <text x="101.2" y="56.4" text-anchor="middle">E</text>
          <text x="317.2" y="250.4" text-anchor="middle">F</text>
        `,
    },
    solutionFigure:{
      viewBox: '0 8 400 272',
      caption: 'Şekil 120',
      label:
        'A ve C den [DB] köşegenine [AH] ve [CL] dikmeleri çizilmiş.',
      svg: `
          <path class="ln" d="M56.0,250.0 L344.0,250.0 L344.0,34.0 L56.0,34.0 Z"/>
          <path class="ln" d="M56.0,34.0 L344.0,250.0"/>
          <path class="ln" d="M56.0,250.0 L315.2,228.4 L344.0,34.0 L99.2,66.4 Z"/>
          <path class="aux" d="M56.0,250.0 L159.7,111.8"/>
          <path class="aux" d="M344.0,34.0 L240.3,172.2"/>
          <path class="arc" d="M153.1,120.6 L161.9,127.2 L168.5,118.4"/>
          <path class="arc" d="M246.9,163.4 L238.1,156.8 L231.5,165.6"/>
          <circle class="pt" cx="56.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="344.0" cy="250.0" r="3.2"/>
          <circle class="pt" cx="344.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="56.0" cy="34.0" r="3.2"/>
          <circle class="pt" cx="99.2" cy="66.4" r="3.2"/>
          <circle class="pt" cx="315.2" cy="228.4" r="3.2"/>
          <circle class="pt" cx="159.7" cy="111.8" r="3.2"/>
          <circle class="pt" cx="240.3" cy="172.2" r="3.2"/>
          <text x="46.0" y="265.0" text-anchor="end">A</text>
          <text x="354.0" y="265.0">B</text>
          <text x="354.0" y="29.0">C</text>
          <text x="46.0" y="29.0" text-anchor="end">D</text>
          <text x="101.2" y="56.4" text-anchor="middle">E</text>
          <text x="317.2" y="250.4" text-anchor="middle">F</text>
          <text x="165.7" y="101.8">H</text>
          <text x="232.3" y="192.2" text-anchor="end">L</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '|AD| = 12 cm',
      '|AB| = 16 cm',
      '|EF| = 15 cm',
      'D, E, F, B doğrusal',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, AFCE dörtgeninin alanı kaç cm² dir?',
    choices: [
      { key: 'A', text: '108' },
      { key: 'B', text: '120' },
      { key: 'C', text: '132' },
      { key: 'D', text: '144' },
      { key: 'E', text: '156' },
    ],
    answer: 'D',
    hint: 'AFCE dörtgenini [EF] ortak tabanlı iki üçgene ayır; yükseklikler A ve C nin köşegene uzaklığıdır.',
    solution: [
      {
        title: 'Köşegen',
        detail:
          '|DB|² = 12² + 16² = 400, |DB| = 20 cm.',
      },
      {
        title: 'Yükseklik',
        detail:
          'ABD dik üçgeninde A nın [DB] ye uzaklığı |AH| = 12 · 16 / 20 = 9,6 cm; simetriden C nin uzaklığı da |CL| = 9,6 cm.',
      },
      {
        title: 'Parçalar',
        detail:
          'A(AFCE) = A(AEF) + A(CEF) = 15 · 9,6 / 2 + 15 · 9,6 / 2.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(AFCE) = 15 · 9,6 = 144 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 121
  {
    id: 'quadrilaterals-121',
    topic: 'Karenin dışında dik üçgen',
    figure:{
      viewBox: '0 -12 400 320',
      caption: 'Şekil 121',
      label:
        'ABCD karesinin [AD] kenarının dışında E noktası; [AE] ile [ED] dik; E, C ye birleştirilmiş.',
      svg: `
          <path class="ln" d="M70.0,80.0 L70.0,282.4 L272.4,282.4 L272.4,80.0 Z"/>
          <path class="ln" d="M70.0,80.0 L90.2,19.3 L272.4,80.0"/>
          <path class="ln" d="M90.2,19.3 L272.4,282.4"/>
          <path class="arc" d="M86.8,29.7 L97.2,33.2 L100.7,22.8"/>
          <circle class="pt" cx="70.0" cy="80.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="282.4" r="3.2"/>
          <circle class="pt" cx="272.4" cy="282.4" r="3.2"/>
          <circle class="pt" cx="272.4" cy="80.0" r="3.2"/>
          <circle class="pt" cx="90.2" cy="19.3" r="3.2"/>
          <text x="60.0" y="85.0" text-anchor="end">A</text>
          <text x="60.0" y="297.4" text-anchor="end">B</text>
          <text x="282.4" y="297.4">C</text>
          <text x="280.4" y="98.0">D</text>
          <text x="90.2" y="9.3" text-anchor="middle">E</text>
        `,
    },
    solutionFigure:{
      viewBox: '0 -12 400 320',
      caption: 'Şekil 121',
      label:
        '[ED] doğrusu D den öteye H noktasına uzatılmış; C den bu doğruya [CH] dikmesi çizilmiş.',
      svg: `
          <path class="ln" d="M70.0,80.0 L70.0,282.4 L272.4,282.4 L272.4,80.0 Z"/>
          <path class="ln" d="M70.0,80.0 L90.2,19.3 L272.4,80.0"/>
          <path class="ln" d="M90.2,19.3 L272.4,282.4"/>
          <path class="arc" d="M86.8,29.7 L97.2,33.2 L100.7,22.8"/>
          <path class="aux" d="M272.4,80.0 L333.1,100.2"/>
          <path class="aux" d="M333.1,100.2 L272.4,282.4"/>
          <path class="arc" d="M322.7,96.8 L319.2,107.2 L329.6,110.7"/>
          <circle class="pt" cx="70.0" cy="80.0" r="3.2"/>
          <circle class="pt" cx="70.0" cy="282.4" r="3.2"/>
          <circle class="pt" cx="272.4" cy="282.4" r="3.2"/>
          <circle class="pt" cx="272.4" cy="80.0" r="3.2"/>
          <circle class="pt" cx="90.2" cy="19.3" r="3.2"/>
          <circle class="pt" cx="333.1" cy="100.2" r="3.2"/>
          <text x="60.0" y="85.0" text-anchor="end">A</text>
          <text x="60.0" y="297.4" text-anchor="end">B</text>
          <text x="282.4" y="297.4">C</text>
          <text x="280.4" y="98.0">D</text>
          <text x="90.2" y="9.3" text-anchor="middle">E</text>
          <text x="343.1" y="105.2">H</text>
        `,
    },
    given: [
      'ABCD kare',
      '[AE] ⊥ [ED]',
      '|AE| = 4 cm',
      '|CE| = 20 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, karenin bir kenarı kaç cm dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '4√10' },
      { key: 'D', text: '6√5' },
      { key: 'E', text: '14' },
    ],
    answer: 'C',
    hint: '[ED] yi uzatıp C den dikme in; oluşan üçgen AED ile eş olur.',
    solution: [
      {
        title: 'Dikme',
        detail:
          '[ED] yi D den öteye uzat, C den bu doğruya [CH] dikmesini çiz.',
      },
      {
        title: 'Eşlik',
        detail:
          'm(EDA) + m(HDC) = 90° olduğundan AED ve DHC dik üçgenleri eştir (|AD| = |DC|): |DH| = |AE| = 4, |CH| = |ED|.',
      },
      {
        title: 'Denklem',
        detail:
          '|ED| = b olsun: EHC dik üçgeninde (b + 4)² + b² = 20², b² + 4b − 192 = 0, b = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AD|² = 4² + 12² = 160, karenin bir kenarı 4√10 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 122
  {
    id: 'quadrilaterals-122',
    topic: 'Dikdörtgende orta nokta ve eş üçgenler',
    figure:{
      viewBox: '0 4 400 300',
      caption: 'Şekil 122',
      label:
        'ABCD dikdörtgeninde E noktası [DC] nin orta noktası; [AE] doğrusu [BC] nin C tarafındaki uzantısını F noktasında kesiyor; |DE| = |EC|.',
      svg: `
          <path class="ln" d="M104.0,280.0 L296.0,280.0 L296.0,152.0 L104.0,152.0 Z"/>
          <path class="ln" d="M104.0,280.0 L296.0,24.0"/>
          <path class="ln" d="M296.0,152.0 L296.0,24.0"/>
          <path class="tick" d="M152.0,157.0 L152.0,147.0"/>
          <path class="tick" d="M248.0,157.0 L248.0,147.0"/>
          <circle class="pt" cx="104.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="296.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="296.0" cy="152.0" r="3.2"/>
          <circle class="pt" cx="104.0" cy="152.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="152.0" r="3.2"/>
          <circle class="pt" cx="296.0" cy="24.0" r="3.2"/>
          <text x="94.0" y="295.0" text-anchor="end">A</text>
          <text x="306.0" y="295.0">B</text>
          <text x="306.0" y="167.0">C</text>
          <text x="94.0" y="147.0" text-anchor="end">D</text>
          <text x="194.0" y="144.0" text-anchor="end">E</text>
          <text x="306.0" y="29.0">F</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '|DE| = |EC| = 6 cm',
      '|AF| = 20 cm',
      '[AE ∩ [BC = {F}',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, Alan(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '72' },
      { key: 'C', text: '80' },
      { key: 'D', text: '88' },
      { key: 'E', text: '96' },
    ],
    answer: 'E',
    hint: 'ADE ve FCE üçgenlerini karşılaştır; E noktası [AF] yi nasıl böler?',
    solution: [
      {
        title: 'Eş üçgenler',
        detail:
          '|DE| = |EC|, m(ADE) = m(FCE) = 90° ve ters açılar eşit olduğundan ADE ≅ FCE olur.',
      },
      {
        title: 'AE',
        detail:
          'Buradan |AE| = |EF| = 20 / 2 = 10 cm.',
      },
      {
        title: 'AD',
        detail:
          'ADE dik üçgeninde |AD|² = 10² − 6² = 64, |AD| = 8 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AB| = 6 + 6 = 12 cm olduğundan Alan(ABCD) = 12 · 8 = 96 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 123
  {
    id: 'quadrilaterals-123',
    topic: 'Dikdörtgende ikizkenar üçgen ve alan',
    figure:{
      viewBox: '0 14 400 216',
      caption: 'Şekil 123',
      label:
        'ABCD dikdörtgeninde E noktası [DC] üzerinde, F noktası [AB] üzerinde; E, F ve B ye birleştirilmiş; |FE| = |EB|; |AF| = x.',
      svg: `
          <path class="ln" d="M50.0,200.0 L350.0,200.0 L350.0,40.0 L50.0,40.0 Z"/>
          <path class="ln" d="M110.0,200.0 L230.0,40.0 L350.0,200.0"/>
          <path class="tick" d="M174.0,123.0 L166.0,117.0"/>
          <path class="tick" d="M286.0,123.0 L294.0,117.0"/>
          <text class="val" x="80.0" y="220.0" text-anchor="middle">x</text>
          <circle class="pt" cx="50.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="200.0" r="3.2"/>
          <circle class="pt" cx="350.0" cy="40.0" r="3.2"/>
          <circle class="pt" cx="50.0" cy="40.0" r="3.2"/>
          <circle class="pt" cx="230.0" cy="40.0" r="3.2"/>
          <circle class="pt" cx="110.0" cy="200.0" r="3.2"/>
          <text x="40.0" y="215.0" text-anchor="end">A</text>
          <text x="360.0" y="215.0">B</text>
          <text x="360.0" y="35.0">C</text>
          <text x="40.0" y="35.0" text-anchor="end">D</text>
          <text x="230.0" y="31.0" text-anchor="middle">E</text>
          <text x="110.0" y="221.0" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '|AD| = 8 cm',
      '|FE| = |EB| = 10 cm',
    ],
    stem: [],
    ask: 'ABCD dikdörtgeninin alanı 120 cm² olduğuna göre, |AF| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '5' },
      { key: 'E', text: '6' },
    ],
    answer: 'B',
    hint: 'E den [AB] ye bir dikme indir; ikizkenar üçgende bu dikme tabanı ikiye böler.',
    solution: [
      {
        title: 'Dikme',
        detail:
          'E den [AB] ye inen dikmenin ayağı H olsun; |EH| = |AD| = 8 cm.',
      },
      {
        title: 'FH ve HB',
        detail:
          'EFH dik üçgeninde |FH|² = 10² − 8² = 36, |FH| = 6 cm. FEB ikizkenar olduğundan |HB| = |FH| = 6 cm.',
      },
      {
        title: 'AB',
        detail:
          'Alan 120 cm² ve |AD| = 8 cm olduğundan |AB| = 120 / 8 = 15 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'x + 6 + 6 = 15 ise x = 3 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 124
  {
    id: 'quadrilaterals-124',
    topic: 'Karede kenar oranı ve alan',
    figure:{
      viewBox: '0 36 400 270',
      caption: 'Şekil 124',
      label:
        'ABCD karesinde E noktası [DC] üzerinde; A, E ye birleştirilmiş; ADE üçgeni taralı.',
      svg: `
          <path class="shade" d="M90.0,280.0 L90.0,60.0 L236.7,60.0 Z"/>
          <path class="ln" d="M90.0,280.0 L310.0,280.0 L310.0,60.0 L90.0,60.0 Z"/>
          <path class="ln" d="M90.0,280.0 L236.7,60.0"/>
          <circle class="pt" cx="90.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="236.7" cy="60.0" r="3.2"/>
          <text x="80.0" y="295.0" text-anchor="end">A</text>
          <text x="320.0" y="295.0">B</text>
          <text x="320.0" y="55.0">C</text>
          <text x="80.0" y="55.0" text-anchor="end">D</text>
          <text x="236.7" y="51.0" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD kare',
      '|EC| / |AB| = 1/3',
      'A(ADE) = 24 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '54' },
      { key: 'B', text: '64' },
      { key: 'C', text: '72' },
      { key: 'D', text: '81' },
      { key: 'E', text: '96' },
    ],
    answer: 'C',
    hint: '|EC| = a dersen karenin kenarı 3a, |DE| kaç a olur?',
    solution: [
      {
        title: 'Kenarlar',
        detail:
          '|EC| = a olsun; |AB| = |DC| = |AD| = 3a ve |DE| = 3a − a = 2a.',
      },
      {
        title: 'ADE alanı',
        detail:
          'A(ADE) = 3a · 2a / 2 = 3a² = 24 ise a² = 8.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = (3a)² = 9a² = 9 · 8 = 72 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 125
  {
    id: 'quadrilaterals-125',
    topic: 'Dikdörtgende Pisagor ve alan',
    figure:{
      viewBox: '0 -2 400 266',
      caption: 'Şekil 125',
      label:
        'ABCD dikdörtgeninde E noktası [DC] üzerinde; A, E ye birleştirilmiş; |AE| = |AB|.',
      svg: `
          <path class="ln" d="M83.0,240.0 L317.0,240.0 L317.0,24.0 L83.0,24.0 Z"/>
          <path class="ln" d="M83.0,240.0 L173.0,24.0"/>
          <path class="tick" d="M131.7,136.2 L122.4,132.4"/>
          <path class="tick" d="M133.6,131.6 L124.3,127.8"/>
          <path class="tick" d="M197.5,245.0 L197.5,235.0"/>
          <path class="tick" d="M202.5,245.0 L202.5,235.0"/>
          <circle class="pt" cx="83.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="317.0" cy="240.0" r="3.2"/>
          <circle class="pt" cx="317.0" cy="24.0" r="3.2"/>
          <circle class="pt" cx="83.0" cy="24.0" r="3.2"/>
          <circle class="pt" cx="173.0" cy="24.0" r="3.2"/>
          <text x="73.0" y="255.0" text-anchor="end">A</text>
          <text x="327.0" y="255.0">B</text>
          <text x="327.0" y="19.0">C</text>
          <text x="73.0" y="19.0" text-anchor="end">D</text>
          <text x="173.0" y="15.0" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '|AB| = |AE| = 13 cm',
      '|EC| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABCD) kaç cm² dir?',
    choices: [
      { key: 'A', text: '120' },
      { key: 'B', text: '132' },
      { key: 'C', text: '144' },
      { key: 'D', text: '156' },
      { key: 'E', text: '168' },
    ],
    answer: 'D',
    hint: '|DC| = |AB| olduğunu kullanarak önce |DE| yi bul.',
    solution: [
      {
        title: 'DE',
        detail:
          '|DC| = |AB| = 13 cm olduğundan |DE| = 13 − 8 = 5 cm.',
      },
      {
        title: 'AD',
        detail:
          'ADE dik üçgeninde |AD|² = 13² − 5² = 144, |AD| = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABCD) = 13 · 12 = 156 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 126
  {
    id: 'quadrilaterals-126',
    topic: 'Dikdörtgende iç noktadan köşelere uzaklık',
    figure:{
      viewBox: '0 8 400 272',
      caption: 'Şekil 126',
      label:
        'ABCD dikdörtgeninin içinde K noktası; K, dört köşeye birleştirilmiş; [BK] ile [KC] dik; KBC açısı 60°; |AK| = x.',
      svg: `
          <path class="ln" d="M56.0,260.0 L344.0,260.0 L344.0,30.7 L56.0,30.7 Z"/>
          <path class="ln" d="M56.0,260.0 L128.0,135.3 L344.0,260.0"/>
          <path class="ln" d="M56.0,30.7 L128.0,135.3 L344.0,30.7"/>
          <path class="arc" d="M123.0,144.0 L131.7,149.0 L136.7,140.3"/>
          <path class="arc" d="M86.0,260.0 A30,30 0 0 0 71.0,234.0"/>
          <text class="val" x="97.7" y="245.6">60°</text>
          <text class="val" x="98.0" y="85.0">x</text>
          <circle class="pt" cx="56.0" cy="30.7" r="3.2"/>
          <circle class="pt" cx="56.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="344.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="344.0" cy="30.7" r="3.2"/>
          <circle class="pt" cx="128.0" cy="135.3" r="3.2"/>
          <text x="46.0" y="25.7" text-anchor="end">A</text>
          <text x="46.0" y="275.0" text-anchor="end">B</text>
          <text x="354.0" y="275.0">C</text>
          <text x="354.0" y="25.7">D</text>
          <text x="120.0" y="143.3" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      '[BK] ⊥ [KC]',
      'm(KBC) = 60°',
      '|KB| = 6 cm',
      '|KD| = 10 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AK| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '√21' },
      { key: 'B', text: '2√6' },
      { key: 'C', text: '3√3' },
      { key: 'D', text: '2√7' },
      { key: 'E', text: '4√2' },
    ],
    answer: 'D',
    hint: 'Dikdörtgenin içindeki bir nokta için |KA|² + |KC|² = |KB|² + |KD|² bağıntısını hatırla.',
    solution: [
      {
        title: 'KC',
        detail:
          'BKC dik üçgeninde m(KBC) = 60° olduğundan |KC| = |KB| · √3 = 6√3 cm.',
      },
      {
        title: 'Bağıntı',
        detail:
          'Dikdörtgenin içindeki K noktası için karşı köşelere uzaklıkların kareleri toplamı eşittir: x² + |KC|² = |KB|² + |KD|².',
      },
      {
        title: 'Denklem',
        detail:
          'x² + 108 = 36 + 100 ise x² = 28.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = √28 = 2√7 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 127
  {
    id: 'quadrilaterals-127',
    topic: 'Karede eşkenar üçgen ve açı',
    figure:{
      viewBox: '0 42 400 262',
      caption: 'Şekil 127',
      label:
        'ABCD karesinin içinde DEC eşkenar üçgeni; A, E ve F doğrusal, F noktası [BC] üzerinde; EFC açısı α.',
      svg: `
          <path class="ln" d="M90.0,280.0 L310.0,280.0 L310.0,60.0 L90.0,60.0 Z"/>
          <path class="ln" d="M90.0,60.0 L200.0,250.5 L310.0,60.0"/>
          <path class="ln" d="M90.0,280.0 L310.0,221.1"/>
          <path class="arc" d="M284.9,227.8 A26,26 0 0 1 310.0,195.1"/>
          <text class="val" x="275.1" y="199.3" text-anchor="middle">α</text>
          <circle class="pt" cx="90.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="310.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="90.0" cy="60.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="250.5" r="3.2"/>
          <circle class="pt" cx="310.0" cy="221.1" r="3.2"/>
          <text x="80.0" y="295.0" text-anchor="end">A</text>
          <text x="320.0" y="295.0">B</text>
          <text x="320.0" y="55.0">C</text>
          <text x="80.0" y="55.0" text-anchor="end">D</text>
          <text x="200.0" y="270.0" text-anchor="middle">E</text>
          <text x="320.0" y="226.1">F</text>
        `,
    },
    given: [
      'ABCD bir kare',
      'DEC eşkenar üçgen',
      'A, E, F doğrusal',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EFC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '95' },
      { key: 'B', text: '100' },
      { key: 'C', text: '105' },
      { key: 'D', text: '110' },
      { key: 'E', text: '120' },
    ],
    answer: 'C',
    hint: '|AD| = |DE| olduğunu fark et; ADE ikizkenar üçgeninin açılarını bul.',
    solution: [
      {
        title: 'ADE açıları',
        detail:
          '|DE| = |DC| = |AD| ve m(ADE) = 90° − 60° = 30° olduğundan ADE ikizkenardır: m(DAE) = (180° − 30°) / 2 = 75°.',
      },
      {
        title: 'EAB',
        detail:
          'm(EAB) = m(FAB) = 90° − 75° = 15°.',
      },
      {
        title: 'ABF',
        detail:
          'ABF dik üçgeninde m(AFB) = 90° − 15° = 75°.',
      },
      {
        title: 'Sonuç',
        detail:
          'α = m(EFC) = 180° − 75° = 105° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 128
  {
    id: 'quadrilaterals-128',
    topic: 'Dik üçgende Öklit bağıntısı ve kare',
    figure:{
      viewBox: '0 0 400 216',
      caption: 'Şekil 128',
      label:
        'B, D, E, C noktaları doğrusal; FDEA karesinin A köşesi B ve C ye birleştirilmiş; BAC açısı dik; |EC| = x.',
      svg: `
          <path class="ln" d="M109.0,30.0 L109.0,186.0 L265.0,186.0 L265.0,30.0 Z"/>
          <path class="ln" d="M31.0,186.0 L369.0,186.0"/>
          <path class="ln" d="M31.0,186.0 L265.0,30.0 L369.0,186.0"/>
          <path class="arc" d="M256.7,35.5 L262.2,43.9 L270.5,38.3"/>
          <path class="arc" d="M256.0,186.0 L256.0,177.0 L265.0,177.0"/>
          <text class="val" x="317.0" y="208.0" text-anchor="middle">x</text>
          <circle class="pt" cx="31.0" cy="186.0" r="3.2"/>
          <circle class="pt" cx="109.0" cy="186.0" r="3.2"/>
          <circle class="pt" cx="265.0" cy="186.0" r="3.2"/>
          <circle class="pt" cx="369.0" cy="186.0" r="3.2"/>
          <circle class="pt" cx="109.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="265.0" cy="30.0" r="3.2"/>
          <text x="21.0" y="201.0" text-anchor="end">B</text>
          <text x="109.0" y="205.0" text-anchor="middle">D</text>
          <text x="265.0" y="205.0" text-anchor="middle">E</text>
          <text x="379.0" y="201.0">C</text>
          <text x="99.0" y="25.0" text-anchor="end">F</text>
          <text x="265.0" y="21.0" text-anchor="middle">A</text>
        `,
    },
    given: [
      'FDEA bir kare',
      'BAC bir dik üçgen',
      '[BA] ⊥ [AC]',
      '|BD| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde FDEA karesinin alanı 36 cm² olduğuna göre, |EC| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '4,5' },
      { key: 'E', text: '5' },
    ],
    answer: 'C',
    hint: 'Karenin [AE] kenarı, BAC dik üçgeninde hipotenüse ait yüksekliktir.',
    solution: [
      {
        title: 'Karenin kenarı',
        detail:
          'Karenin alanı 36 cm² olduğundan |AE| = |DE| = 6 cm.',
      },
      {
        title: 'BE',
        detail:
          '|BE| = |BD| + |DE| = 3 + 6 = 9 cm.',
      },
      {
        title: 'Öklit bağıntısı',
        detail:
          '[AE] ⊥ [BC] olduğundan BAC dik üçgeninde |AE|² = |BE| · |EC| olur: 36 = 9 · x.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 36 / 9 = 4 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 129
  {
    id: 'quadrilaterals-129',
    topic: 'Karede düzgün sekizgen ve açı',
    figure:{
      viewBox: '0 0 400 300',
      caption: 'Şekil 129',
      label:
        'ABCD karesinin kenarları üzerinde köşeleri bulunan KLMNOPEF düzgün sekizgeni; E ile K birleştirilmiş; BKE açısı x.',
      svg: `
          <path class="ln" d="M80.0,270.0 L320.0,270.0 L320.0,30.0 L80.0,30.0 Z"/>
          <path class="ln" d="M150.3,270.0 L249.7,270.0 L320.0,199.7 L320.0,100.3 L249.7,30.0 L150.3,30.0 L80.0,100.3 L80.0,199.7 Z"/>
          <path class="ln" d="M80.0,100.3 L150.3,270.0"/>
          <path class="arc" d="M174.3,270.0 A24,24 0 0 0 141.1,247.8"/>
          <text class="val" x="172.5" y="241.7" text-anchor="middle">x</text>
          <circle class="pt" cx="80.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="270.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="30.0" r="3.2"/>
          <circle class="pt" cx="150.3" cy="270.0" r="3.2"/>
          <circle class="pt" cx="249.7" cy="270.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="199.7" r="3.2"/>
          <circle class="pt" cx="320.0" cy="100.3" r="3.2"/>
          <circle class="pt" cx="249.7" cy="30.0" r="3.2"/>
          <circle class="pt" cx="150.3" cy="30.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="100.3" r="3.2"/>
          <circle class="pt" cx="80.0" cy="199.7" r="3.2"/>
          <text x="70.0" y="285.0" text-anchor="end">A</text>
          <text x="330.0" y="285.0">B</text>
          <text x="330.0" y="25.0">C</text>
          <text x="70.0" y="25.0" text-anchor="end">D</text>
          <text x="150.3" y="289.0" text-anchor="middle">K</text>
          <text x="249.7" y="289.0" text-anchor="middle">L</text>
          <text x="330.0" y="204.7">M</text>
          <text x="330.0" y="105.3">N</text>
          <text x="249.7" y="21.0" text-anchor="middle">O</text>
          <text x="150.3" y="21.0" text-anchor="middle">P</text>
          <text x="70.0" y="105.3" text-anchor="end">E</text>
          <text x="70.0" y="204.7" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABCD kare',
      'KLMNOPEF düzgün sekizgen',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BKE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '157,5' },
      { key: 'B', text: '135' },
      { key: 'C', text: '120' },
      { key: 'D', text: '112,5' },
      { key: 'E', text: '105' },
    ],
    answer: 'D',
    hint: 'Düzgün sekizgenin bir iç açısını bul; köşedeki üçgenlerin ikizkenar dik üçgen olduğunu fark et.',
    solution: [
      {
        title: 'İç açı',
        detail:
          'Düzgün sekizgenin bir dış açısı 360° / 8 = 45°, bir iç açısı 180° − 45° = 135° dir.',
      },
      {
        title: 'AKF',
        detail:
          'A, K, L doğrusal ve m(FKL) = 135° olduğundan m(AKF) = 180° − 135° = 45° dir.',
      },
      {
        title: 'FKE',
        detail:
          'EFK üçgeninde |FE| = |FK| ve m(EFK) = 135° olduğundan m(FKE) = (180° − 135°) / 2 = 22,5°.',
      },
      {
        title: 'AKE',
        detail:
          'm(AKE) = m(AKF) + m(FKE) = 45° + 22,5° = 67,5°.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = m(BKE) = 180° − 67,5° = 112,5° bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 130
  {
    id: 'quadrilaterals-130',
    topic: 'Deltoidde köşegenler ve alan',
    figure:{
      viewBox: '0 0 400 308',
      caption: 'Şekil 130',
      label:
        'ABDC deltoidi; |AB| = |AC|, |BD| = |DC|; köşegenler [AD] ve [BC], E noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M200.0,28.0 L74.0,196.0 L200.0,280.0 L326.0,196.0 Z"/>
          <path class="ln" d="M200.0,28.0 L200.0,280.0"/>
          <path class="ln" d="M74.0,196.0 L326.0,196.0"/>
          <path class="tick" d="M133.0,109.0 L141.0,115.0"/>
          <path class="tick" d="M259.0,115.0 L267.0,109.0"/>
          <path class="tick" d="M132.1,240.8 L137.7,232.5"/>
          <path class="tick" d="M136.3,243.5 L141.9,235.2"/>
          <path class="tick" d="M263.7,243.5 L258.1,235.2"/>
          <path class="tick" d="M267.9,240.8 L262.3,232.5"/>
          <path class="arc" d="M209.0,196.0 L209.0,187.0 L200.0,187.0"/>
          <circle class="pt" cx="200.0" cy="28.0" r="3.2"/>
          <circle class="pt" cx="74.0" cy="196.0" r="3.2"/>
          <circle class="pt" cx="326.0" cy="196.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="280.0" r="3.2"/>
          <circle class="pt" cx="200.0" cy="196.0" r="3.2"/>
          <text x="200.0" y="19.0" text-anchor="middle">A</text>
          <text x="64.0" y="201.0" text-anchor="end">B</text>
          <text x="336.0" y="201.0">C</text>
          <text x="200.0" y="299.0" text-anchor="middle">D</text>
          <text x="190.0" y="191.0" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABDC deltoid',
      '|AB| = |AC| = 10 cm',
      '|BD| = |DC| = 2√13 cm',
      '|BC| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABDC) kaç cm² dir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '64' },
      { key: 'C', text: '72' },
      { key: 'D', text: '80' },
      { key: 'E', text: '96' },
    ],
    answer: 'C',
    hint: 'Deltoidin köşegenleri diktir ve [AD], [BC] yi ortalar; önce |AE| ile |ED| yi bul.',
    solution: [
      {
        title: 'E noktası',
        detail:
          'Deltoidde [AD] ⊥ [BC] ve |BE| = |EC| = 12 / 2 = 6 cm.',
      },
      {
        title: 'AE',
        detail:
          'ABE dik üçgeninde |AE|² = 10² − 6² = 64, |AE| = 8 cm.',
      },
      {
        title: 'ED',
        detail:
          'BED dik üçgeninde |ED|² = (2√13)² − 6² = 52 − 36 = 16, |ED| = 4 cm.',
      },
      {
        title: 'AD',
        detail:
          '|AD| = 8 + 4 = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'A(ABDC) = |AD| · |BC| / 2 = 12 · 12 / 2 = 72 cm² bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 131
  {
    id: 'quadrilaterals-131',
    topic: 'Karede dik açı ve Öklit bağıntısı',
    figure:{
      viewBox: '0 0 400 286',
      caption: 'Şekil 131',
      label:
        'ABCD karesinin içinde E noktası; [DE] ile [EC] dik; H noktası [AB] üzerinde ve [EH] ile [AB] dik; |HE| = x.',
      svg: `
          <path class="ln" d="M83.0,26.0 L83.0,260.0 L317.0,260.0 L317.0,26.0 Z"/>
          <path class="ln" d="M83.0,188.0 L209.0,188.0"/>
          <path class="ln" d="M317.0,26.0 L209.0,188.0 L317.0,260.0"/>
          <path class="arc" d="M83.0,197.0 L92.0,197.0 L92.0,188.0"/>
          <path class="arc" d="M214.0,180.5 L221.5,185.5 L216.5,193.0"/>
          <text class="val" x="146.0" y="180.0" text-anchor="middle">x</text>
          <circle class="pt" cx="83.0" cy="26.0" r="3.2"/>
          <circle class="pt" cx="83.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="317.0" cy="260.0" r="3.2"/>
          <circle class="pt" cx="317.0" cy="26.0" r="3.2"/>
          <circle class="pt" cx="83.0" cy="188.0" r="3.2"/>
          <circle class="pt" cx="209.0" cy="188.0" r="3.2"/>
          <text x="73.0" y="21.0" text-anchor="end">A</text>
          <text x="73.0" y="275.0" text-anchor="end">B</text>
          <text x="327.0" y="275.0">C</text>
          <text x="327.0" y="21.0">D</text>
          <text x="73.0" y="193.0" text-anchor="end">H</text>
          <text x="209.0" y="207.0" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABCD kare',
      '[DE] ⊥ [EC]',
      '[EH] ⊥ [AB]',
      '|AH| = 9 cm',
      '|HB| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |HE| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'E den [DC] ye bir dikme in; DEC dik üçgeninde Öklit bağıntısını kullan.',
    solution: [
      {
        title: 'Karenin kenarı',
        detail:
          '|AB| = 9 + 4 = 13 cm, dolayısıyla |DC| = 13 cm.',
      },
      {
        title: 'Dikme',
        detail:
          'E den [DC] ye inen dikmenin ayağı K olsun. [EH] ⊥ [AB] olduğundan H, E, K doğrusaldır; |DK| = |AH| = 9 cm, |KC| = |HB| = 4 cm.',
      },
      {
        title: 'Öklit bağıntısı',
        detail:
          'DEC dik üçgeninde |EK|² = |DK| · |KC| = 9 · 4 = 36, |EK| = 6 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |HK| − |EK| = 13 − 6 = 7 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 132
  {
    id: 'quadrilaterals-132',
    topic: 'Karede benzer üçgenler',
    figure:{
      viewBox: '0 0 400 236',
      caption: 'Şekil 132',
      label:
        'ABCD karesinin [CD] kenarının uzantısında E noktası; B ile E birleştirilmiş ve [AD] yi F noktasında kesiyor; |ED| = x.',
      svg: `
          <path class="ln" d="M155.0,28.0 L335.0,28.0 L335.0,208.0 L155.0,208.0 Z"/>
          <path class="ln" d="M65.0,208.0 L155.0,208.0"/>
          <path class="ln" d="M65.0,208.0 L335.0,28.0"/>
          <text class="val" x="110.0" y="228.0" text-anchor="middle">x</text>
          <circle class="pt" cx="155.0" cy="28.0" r="3.2"/>
          <circle class="pt" cx="335.0" cy="28.0" r="3.2"/>
          <circle class="pt" cx="335.0" cy="208.0" r="3.2"/>
          <circle class="pt" cx="155.0" cy="208.0" r="3.2"/>
          <circle class="pt" cx="65.0" cy="208.0" r="3.2"/>
          <circle class="pt" cx="155.0" cy="148.0" r="3.2"/>
          <text x="145.0" y="23.0" text-anchor="end">A</text>
          <text x="345.0" y="23.0">B</text>
          <text x="345.0" y="223.0">C</text>
          <text x="155.0" y="227.0" text-anchor="middle">D</text>
          <text x="65.0" y="227.0" text-anchor="middle">E</text>
          <text x="145.0" y="153.0" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABCD kare',
      'E, D, C doğrusal',
      'B, F, E doğrusal',
      '|AF| = 6 cm',
      '|FD| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |ED| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '4,5' },
      { key: 'D', text: '5' },
      { key: 'E', text: '6' },
    ],
    answer: 'C',
    hint: '[AB] ∥ [ED] olduğundan FAB ve FDE üçgenleri benzerdir.',
    solution: [
      {
        title: 'Karenin kenarı',
        detail:
          '|AD| = 6 + 3 = 9 cm olduğundan |AB| = 9 cm.',
      },
      {
        title: 'Benzerlik',
        detail:
          '[AB] ∥ [DE] olduğundan FAB ∼ FDE: |ED| / |AB| = |FD| / |AF|.',
      },
      {
        title: 'Denklem',
        detail:
          'x / 9 = 3 / 6 ise x = 9 / 2.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 4,5 cm bulunur.',
      },
    ],
  },
  // ---------------------------------------------------------------- 133
  {
    id: 'quadrilaterals-133',
    topic: 'Dikdörtgende 30° açıyla uzunluk',
    figure:{
      viewBox: '0 0 400 222',
      caption: 'Şekil 133',
      label:
        'ABCD dikdörtgeninde E noktası [AB] üzerinde, F noktası [BC] üzerinde; D köşesindeki EDA, EDF ve FDC açıları eşit; |BF| = x.',
      svg: `
          <path class="ln" d="M80.0,28.0 L80.0,194.3 L320.0,194.3 L320.0,28.0 Z"/>
          <path class="ln" d="M80.0,166.6 L320.0,28.0 L224.0,194.3"/>
          <path class="arc" d="M276.0,28.0 A44,44 0 0 0 281.9,50.0"/>
          <path class="arc" d="M282.3,38.1 L272.7,40.7"/>
          <path class="arc" d="M281.9,50.0 A44,44 0 0 0 298.0,66.1"/>
          <path class="arc" d="M292.4,55.6 L285.4,62.6"/>
          <path class="arc" d="M298.0,66.1 A44,44 0 0 0 320.0,72.0"/>
          <path class="arc" d="M309.9,65.7 L307.3,75.3"/>
          <text class="val" x="152.0" y="214.3" text-anchor="middle">x</text>
          <circle class="pt" cx="80.0" cy="28.0" r="3.2"/>
          <circle class="pt" cx="320.0" cy="28.0" r="3.2"/>
          <circle class="pt" cx="80.0" cy="194.3" r="3.2"/>
          <circle class="pt" cx="320.0" cy="194.3" r="3.2"/>
          <circle class="pt" cx="80.0" cy="166.6" r="3.2"/>
          <circle class="pt" cx="224.0" cy="194.3" r="3.2"/>
          <text x="70.0" y="23.0" text-anchor="end">A</text>
          <text x="330.0" y="23.0">D</text>
          <text x="70.0" y="209.3" text-anchor="end">B</text>
          <text x="330.0" y="209.3">C</text>
          <text x="70.0" y="171.6" text-anchor="end">E</text>
          <text x="224.0" y="213.3" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABCD dikdörtgen',
      'm(EDA) = m(EDF) = m(FDC)',
      '|ED| = 10√3 cm',
      '|DF| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BF| = x kaç cm dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'D',
    hint: 'D köşesindeki 90° lik açı üç eş parçaya bölünmüştür; her birinin ölçüsünü bul.',
    solution: [
      {
        title: 'Açılar',
        detail:
          'm(ADC) = 90° üç eş parçaya bölündüğünden her biri 30° dir.',
      },
      {
        title: 'AD',
        detail:
          'EAD dik üçgeninde m(EDA) = 30° olduğundan |AD| = |ED| · √3 / 2 = 10√3 · √3 / 2 = 15 cm.',
      },
      {
        title: 'FC',
        detail:
          'FCD dik üçgeninde m(FDC) = 30° olduğundan |FC| = |DF| / 2 = 6 cm.',
      },
      {
        title: 'BC',
        detail:
          'Dikdörtgende |BC| = |AD| = 15 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |BC| − |FC| = 15 − 6 = 9 cm bulunur.',
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
    'Dörtgende iç ve dış açılar, açıortaylar, köşegenleri dik ya da karşılıklı iki açısı dik dörtgenler, köşegenlerle alan, paralelkenar, eşkenar dörtgen, dikdörtgen, kare ve deltoid.',
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
    {
      id: 'quadrilaterals-m13',
      order: 13,
      title: 'Paralelkenar ve eşkenar dörtgende alan, benzerlik ve köşegen',
      summary:
        'Yamuk alanıyla oran, köşegenler ve benzerlik, eşkenar dörtgende dikme ve köşegen, orta tabana paralel doğru ve iç üçgenin alanı.',
      questions: pick(
        'quadrilaterals-73',
        'quadrilaterals-74',
        'quadrilaterals-75',
        'quadrilaterals-76',
        'quadrilaterals-77',
        'quadrilaterals-78',
      ),
    },
    {
      id: 'quadrilaterals-m14',
      order: 14,
      title: 'Paralelkenar ve eşkenar dörtgende açıortay, benzerlik ve dikme',
      summary:
        'Açıortayla dik üçgen eşliği, eşkenar dörtgende Öklit bağıntısı, benzerlikle alan oranı, dikmelerle uzunluk, köşegen üzerindeki paralelkenarlar ve çevre.',
      questions: pick(
        'quadrilaterals-79',
        'quadrilaterals-80',
        'quadrilaterals-81',
        'quadrilaterals-82',
        'quadrilaterals-83',
        'quadrilaterals-84',
      ),
    },
    {
      id: 'quadrilaterals-m15',
      order: 15,
      title: 'Paralelkenar ve eşkenar dörtgende dikmeler, köşegenler ve alan',
      summary:
        'Orta dikmeyle eşkenar dörtgenin alanı, bir doğruya inen dikmeler, köşegen bağıntısı, yükseklikle alan, benzerlikle taralı alan ve açıortaylarla uzaklık.',
      questions: pick(
        'quadrilaterals-85',
        'quadrilaterals-86',
        'quadrilaterals-87',
        'quadrilaterals-88',
        'quadrilaterals-89',
        'quadrilaterals-90',
      ),
    },
    {
      id: 'quadrilaterals-m16',
      order: 16,
      title: 'Paralelkenar ve eşkenar dörtgende benzerlik, kenarortay ve paralel doğrular',
      summary:
        'Üçgen içindeki eşkenar dörtgenle alan oranı, açıortaylarla çevre, kenarortayla köşegen, eşkenar dörtgenin alanı, dikmelerle benzerlik ve orta taban.',
      questions: pick(
        'quadrilaterals-91',
        'quadrilaterals-92',
        'quadrilaterals-93',
        'quadrilaterals-94',
        'quadrilaterals-95',
        'quadrilaterals-96',
      ),
    },
    {
      id: 'quadrilaterals-m17',
      order: 17,
      title: 'Paralelkenar ve eşkenar dörtgende orta noktalar, benzerlik ve alan',
      summary:
        'Açıortaylarla kenar uzunluğu, eşkenar dörtgende ağırlık merkezi, orta noktalarla taralı alan, benzerlikle oran ve yarım alan bağıntıları.',
      questions: pick(
        'quadrilaterals-97',
        'quadrilaterals-98',
        'quadrilaterals-99',
        'quadrilaterals-100',
        'quadrilaterals-101',
        'quadrilaterals-102',
      ),
    },
    {
      id: 'quadrilaterals-m18',
      order: 18,
      title: 'Dikdörtgen, kare ve deltoid',
      summary:
        'Karede köşegen ve benzerlik, dikdörtgende 30° ve 60° açılarla uzunluk, köşe üçgenleriyle alan, en küçük alan ve deltoidde köşegenler.',
      questions: pick(
        'quadrilaterals-103',
        'quadrilaterals-104',
        'quadrilaterals-105',
        'quadrilaterals-106',
        'quadrilaterals-107',
        'quadrilaterals-108',
        'quadrilaterals-109',
      ),
    },
    {
      id: 'quadrilaterals-m19',
      order: 19,
      title: 'Dikdörtgen, kare ve deltoidde uzunluk ve alan',
      summary:
        'Karede dik açı ve Öklit bağıntısı, deltoidde alandan kenar, dikdörtgende alan oranı, karede 15° ile özel üçgen, katlama ve köşegen üzerinde dik izdüşüm.',
      questions: pick(
        'quadrilaterals-110',
        'quadrilaterals-111',
        'quadrilaterals-112',
        'quadrilaterals-113',
        'quadrilaterals-114',
        'quadrilaterals-115',
      ),
    },
    {
      id: 'quadrilaterals-m20',
      order: 20,
      title: 'Dikdörtgen, kare ve deltoidde benzerlik, eşlik ve alan',
      summary:
        'Karede dik açıyla benzerlik, dikdörtgende dikme, eş üçgenlerle taralı alan, karede Öklit bağıntısı, köşegene uzaklıkla alan ve karenin dışında dik üçgen.',
      questions: pick(
        'quadrilaterals-116',
        'quadrilaterals-117',
        'quadrilaterals-118',
        'quadrilaterals-119',
        'quadrilaterals-120',
        'quadrilaterals-121',
      ),
    },
    {
      id: 'quadrilaterals-m21',
      order: 21,
      title: 'Dikdörtgen ve karede uzunluk, alan ve açı',
      summary:
        'Orta noktayla eş üçgenler, ikizkenar üçgenle kenar, kenar oranıyla alan, Pisagor ile alan, iç noktadan köşelere uzaklık ve karede eşkenar üçgen.',
      questions: pick(
        'quadrilaterals-122',
        'quadrilaterals-123',
        'quadrilaterals-124',
        'quadrilaterals-125',
        'quadrilaterals-126',
        'quadrilaterals-127',
      ),
    },
    {
      id: 'quadrilaterals-m22',
      order: 22,
      title: 'Dikdörtgen, kare ve deltoidde benzerlik ve özel açılar',
      summary:
        'Karede Öklit bağıntısı, kare içinde düzgün sekizgen, deltoidde köşegenlerle alan, karede dik açı, benzer üçgenler ve dikdörtgende 30° açılar.',
      questions: pick(
        'quadrilaterals-128',
        'quadrilaterals-129',
        'quadrilaterals-130',
        'quadrilaterals-131',
        'quadrilaterals-132',
        'quadrilaterals-133',
      ),
    },
  ],
};
