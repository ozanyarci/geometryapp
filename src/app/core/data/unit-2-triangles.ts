import { Question, Unit } from '../models';

/**
 * Unit 2 — Triangles.
 * Questions, diagrams and solutions come from the "Üçgende Açılar — Çözümlü Test" source.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Diagrams store the *contents* of the <svg> element, with viewBox and the
 * accessibility label kept as separate fields. Every figure is drawn to scale,
 * so the angles a student measures on screen match the ones in the data.
 */
const QUESTIONS: Question[] = [
  // ---------------------------------------------------------------- 1
  {
    id: 'triangles-1',
    topic: 'İkizkenar üçgende açılar',
    figure: {
      viewBox: '0 -6 400 332',
      caption: 'Şekil 1',
      label:
        'A köşesi yukarıda olan ikizkenar ABC üçgeni; [AC] üzerindeki D noktası B ile birleştirilmiş, |BC| = |BD|.',
      svg: `
          <path class="ln" d="M200,25.3 L100,300 L300,300 Z"/>
          <path class="ln" d="M100,300 L253.2,171.4"/>

          <line class="tick" x1="155.6" y1="164.7" x2="144.4" y2="160.6"/>
          <line class="tick" x1="255.6" y1="160.6" x2="244.4" y2="164.7"/>
          <line class="tick" x1="196" y1="294" x2="196" y2="306"/>
          <line class="tick" x1="204" y1="294" x2="204" y2="306"/>
          <line class="tick" x1="169.7" y1="233.7" x2="177.4" y2="242.9"/>
          <line class="tick" x1="175.8" y1="228.5" x2="183.5" y2="237.7"/>

          <path class="arc" d="M121.2,241.7 A62,62 0 0 1 147.5,260.1"/>
          <text class="val" x="154.5" y="227.2" text-anchor="middle">30°</text>

          <path class="arc" d="M129.1,275.6 A38,38 0 0 1 138,300"/>
          <text class="val" x="156.4" y="284.5" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="25.3" r="3.2"/>
          <circle class="pt" cx="100" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="300" r="3.2"/>
          <circle class="pt" cx="253.2" cy="171.4" r="3.2"/>

          <text x="200" y="12.3" text-anchor="middle">A</text>
          <text x="92" y="318" text-anchor="end">B</text>
          <text x="308" y="318">C</text>
          <text x="262.2" y="165.4">D</text>
        `,
    },
    given: ['ABC bir ikizkenar üçgen', '|AB| = |AC|', '|BC| = |BD|', 'm(ABD) = 30°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DBC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '35' },
      { key: 'B', text: '40' },
      { key: 'C', text: '45' },
      { key: 'D', text: '50' },
      { key: 'E', text: '55' },
    ],
    answer: 'B',
    hint: 'Taban açısına β dersen hem ABC hem de BDC üçgeni sana β ile α arasında bir denklem verir.',
    solution: [
      {
        title: 'Taban açılarını adlandır',
        detail:
          '|AB| = |AC| olduğundan ABC üçgeni ikizkenardır ve taban açıları eşittir: m(ABC) = m(ACB) = β.',
      },
      {
        title: 'β’yı α cinsinden yaz',
        detail: '[BD], ABC açısının içinden geçtiğinden m(ABC) = m(ABD) + m(DBC) olur: β = 30 + α.',
      },
      {
        title: 'BDC üçgeni de ikizkenar',
        detail:
          '|BD| = |BC| olduğundan BDC üçgeninde [DC] tabanına ait açılar eşittir: m(BDC) = m(BCD). D noktası [AC] üzerinde olduğundan m(BCD) = m(ACB) = β’dır, yani m(BDC) = β.',
      },
      {
        title: 'İç açılar toplamını yaz',
        detail: 'BDC üçgeninde α + m(BDC) + m(BCD) = 180 → α + 2β = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'β = 30 + α yerine yazılırsa α + 2(30 + α) = 180 → 3α = 120 → α = 40° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'triangles-2',
    topic: 'İkizkenar üçgen ve paralellik',
    figure: {
      viewBox: '0 108 400 220',
      caption: 'Şekil 2',
      label:
        'Paralel [AB] ve [DC] doğru parçaları; A ile D, D ile B ve B ile C birleştirilmiş, |BD| = |BC|.',
      svg: `
          <path class="ln" d="M25,300 L285,300"/>
          <path class="ln" d="M90,130.9 L375,130.9"/>
          <path class="ln" d="M45,300 L106.6,130.9 L225,300 L343.3,130.9"/>

          <path class="par" d="M146,294 L153,300 L146,306"/>
          <path class="par" d="M265.3,124.9 L272.3,130.9 L265.3,136.9"/>

          <line class="tick" x1="160.9" y1="218.9" x2="170.7" y2="212"/>
          <line class="tick" x1="279.2" y1="212" x2="289.1" y2="218.9"/>

          <path class="arc" d="M90.9,174.1 A46,46 0 0 0 133,168.6"/>
          <text class="val" x="114.2" y="193.4" text-anchor="middle">55°</text>

          <path class="arc" d="M58,264.3 A38,38 0 0 1 83,300"/>
          <text class="val" x="90.1" y="273.5" text-anchor="middle">x</text>

          <path class="arc" d="M202.1,267.2 A40,40 0 0 1 247.9,267.2"/>
          <text class="val" x="225" y="247" text-anchor="middle">x</text>

          <circle class="pt" cx="45" cy="300" r="3.2"/>
          <circle class="pt" cx="225" cy="300" r="3.2"/>
          <circle class="pt" cx="343.3" cy="130.9" r="3.2"/>
          <circle class="pt" cx="106.6" cy="130.9" r="3.2"/>

          <text x="37" y="318" text-anchor="end">A</text>
          <text x="225" y="320" text-anchor="middle">B</text>
          <text x="98.6" y="123.9" text-anchor="end">D</text>
          <text x="351.3" y="123.9">C</text>
        `,
    },
    given: ['[DC] // [AB]', '|BD| = |BC|', 'm(DBC) = m(DAB)', 'm(ADB) = 55°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DAB) kaç derecedir?',
    choices: [
      { key: 'A', text: '55' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'D',
    hint: 'Aranan açıya x de; iç ters açı sayesinde m(BDC)’yi de x cinsinden yazabilirsin.',
    solution: [
      {
        title: 'Bilinmeyeni adlandır',
        detail: 'm(DAB) = x diyelim. Verilenden m(DBC) = m(DAB) = x olur.',
      },
      {
        title: 'ABD üçgeninde üçüncü açı',
        detail:
          'ABD üçgeninde iç açılar toplamı 180°’dir: 55 + x + m(ABD) = 180 → m(ABD) = 125 − x.',
      },
      {
        title: 'İç ters açıyı kullan',
        detail:
          '[DC] // [AB] ve BD kesendir. m(ABD) ile m(BDC) iç ters açılar olduğundan m(BDC) = 125 − x.',
      },
      {
        title: 'BDC ikizkenar üçgeni',
        detail:
          '|BD| = |BC| olduğundan BDC üçgeninde taban açıları eşittir: m(BCD) = m(BDC) = 125 − x. İç açılar toplamından m(DBC) = 180 − 2(125 − x) = 2x − 70 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(DBC) = x verildiğinden 2x − 70 = x → x = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'triangles-3',
    topic: 'İkizkenar üçgenlerde açı avı',
    figure: {
      viewBox: '0 35 400 300',
      caption: 'Şekil 3',
      label:
        'B noktasından çıkan eşit uzunluktaki [BA], [BD] ve [BC] parçaları; A, D ve C birleştirilerek ADC üçgeni oluşturulmuş.',
      svg: `
          <path class="ln" d="M54.9,74.5 L137,300 L344.8,180 Z"/>
          <path class="ln" d="M137,300 L178.7,63.6"/>
          <path class="ln" d="M54.9,74.5 L178.7,63.6 L344.8,180"/>

          <line class="tick" x1="90.3" y1="189.3" x2="101.6" y2="185.2"/>
          <line class="tick" x1="151.9" y1="180.8" x2="163.8" y2="182.8"/>
          <line class="tick" x1="237.9" y1="234.8" x2="243.9" y2="245.2"/>

          <path class="arc" d="M125.4,100.1 A75,75 0 0 0 129.6,67.9"/>
          <text class="val" x="146.1" y="91.5" text-anchor="middle">25°</text>

          <path class="arc" d="M260.2,149.2 A90,90 0 0 1 271.1,128.3"/>
          <text class="val" x="229.5" y="125" text-anchor="middle">15°</text>

          <path class="arc" d="M71.3,119.6 A48,48 0 0 0 100,90.9"/>
          <text class="val" x="104.4" y="129" text-anchor="middle">x</text>

          <circle class="pt" cx="54.9" cy="74.5" r="3.2"/>
          <circle class="pt" cx="137" cy="300" r="3.2"/>
          <circle class="pt" cx="344.8" cy="180" r="3.2"/>
          <circle class="pt" cx="178.7" cy="63.6" r="3.2"/>

          <text x="45.9" y="67.5" text-anchor="end">A</text>
          <text x="128" y="318" text-anchor="end">B</text>
          <text x="353.8" y="186">C</text>
          <text x="178.7" y="51.6" text-anchor="middle">D</text>
        `,
    },
    given: ['|AB| = |BD| = |BC|', 'm(CAD) = 25°', 'm(ACD) = 15°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '70' },
    ],
    answer: 'A',
    hint: 'Önce ADC üçgeninde D köşesindeki açıyı bul; [DB] o açıyı iki ikizkenar üçgenin tepe açısına ayırır.',
    solution: [
      {
        title: 'ADC üçgeninde D açısı',
        detail: 'ADC üçgeninde iç açılar toplamından m(ADC) = 180 − 25 − 15 = 140° bulunur.',
      },
      {
        title: 'D’deki açıyı ikiye ayır',
        detail:
          '[DB], ADC açısının içinden geçtiğinden m(ADB) + m(BDC) = 140° olur. m(ADB) = a, m(BDC) = c dersek a + c = 140.',
      },
      {
        title: 'İki ikizkenar üçgen',
        detail:
          '|BA| = |BD| olduğundan ABD üçgeninde m(BAD) = m(BDA) = a; |BD| = |BC| olduğundan BDC üçgeninde m(BCD) = m(BDC) = c olur.',
      },
      {
        title: 'B’deki açıları topla',
        detail:
          'Tepe açıları: m(ABD) = 180 − 2a ve m(DBC) = 180 − 2c. [BD], ABC açısının içinden geçtiğinden m(ABC) = (180 − 2a) + (180 − 2c) = 360 − 2(a + c) = 360 − 280 = 80° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AB| = |BC| olduğundan ABC üçgeni de ikizkenardır: x = m(BAC) = (180 − 80) / 2 = 50° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'triangles-4',
    topic: 'Paralel kenarlar ve ikizkenar üçgen',
    figure: {
      viewBox: '0 48 400 278',
      caption: 'Şekil 4',
      label:
        '[AB] ile [DC] paralel; [AC] ve [BD] köşegenleri E noktasında kesişiyor ve |EC| = |EB|.',
      svg: `
          <path class="ln" d="M75,300 L295,300 L326.9,73.2 L153.3,73.2 Z"/>
          <path class="ln" d="M75,300 L326.9,73.2"/>
          <path class="ln" d="M295,300 L153.3,73.2"/>

          <path class="par" d="M189,294 L196,300 L189,306"/>
          <path class="par" d="M241.8,67.2 L248.8,73.2 L241.8,79.2"/>

          <line class="tick" x1="267.3" y1="118.7" x2="275.4" y2="127.7"/>
          <line class="tick" x1="260.5" y1="233.4" x2="250.3" y2="239.8"/>

          <path class="arc" d="M120,300 A45,45 0 0 0 108.4,269.9"/>
          <text class="val" x="132.9" y="282.8" text-anchor="middle">42°</text>

          <path class="arc" d="M177.1,111.4 A45,45 0 0 0 198.3,73.2"/>
          <text class="val" x="207.5" y="108.3" text-anchor="middle">58°</text>

          <path class="arc" d="M273.8,266.1 A40,40 0 0 1 300.6,260.4"/>
          <text class="val" x="282.9" y="248.3" text-anchor="middle">α</text>

          <circle class="pt" cx="75" cy="300" r="3.2"/>
          <circle class="pt" cx="295" cy="300" r="3.2"/>
          <circle class="pt" cx="326.9" cy="73.2" r="3.2"/>
          <circle class="pt" cx="153.3" cy="73.2" r="3.2"/>
          <circle class="pt" cx="215.8" cy="173.2" r="3.2"/>

          <text x="67" y="318" text-anchor="end">A</text>
          <text x="295" y="320" text-anchor="middle">B</text>
          <text x="334.9" y="67.2">C</text>
          <text x="145.3" y="67.2" text-anchor="end">D</text>
          <text x="202" y="171" text-anchor="end">E</text>
        `,
    },
    given: ['[AC] ∩ [BD] = {E}', '[DC] // [AB]', '|EC| = |EB|', 'm(BDC) = 58°', 'm(CAB) = 42°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DBC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '35' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '50' },
    ],
    answer: 'C',
    hint: 'Paralellikten m(DBA)’yı bul; ardından EBC ikizkenar üçgeni m(ACB)’yi α yapar.',
    solution: [
      {
        title: 'İç ters açı',
        detail:
          '[DC] // [AB] ve BD kesendir. m(BDC) ile m(DBA) iç ters açılar olduğundan m(DBA) = 58° olur.',
      },
      {
        title: 'EBC ikizkenar üçgeni',
        detail:
          '|EC| = |EB| olduğundan EBC üçgeninde taban açıları eşittir: m(ECB) = m(EBC). E noktası hem [AC] hem [BD] üzerinde olduğundan bu açılar m(ACB) ile m(DBC)’dir: m(ACB) = α.',
      },
      {
        title: 'ABC üçgeninin açılarını yaz',
        detail: 'm(BAC) = 42°, m(ABC) = m(ABD) + m(DBC) = 58 + α ve m(ACB) = α olur.',
      },
      {
        title: 'İç açılar toplamı',
        detail: '42 + (58 + α) + α = 180 → 2α + 100 = 180 → 2α = 80.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 40° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'triangles-5',
    topic: 'İkizkenar üçgende dış açı',
    figure: {
      viewBox: '0 112 400 205',
      caption: 'Şekil 5',
      label:
        'İkizkenar ABC üçgeni; [BA] ışını üzerindeki D noktası [BC] üzerindeki E ile birleştirilmiş ve [DE], [AC] parçasını F noktasında kesiyor.',
      svg: `
          <path class="ln" d="M80,290 L267.8,132.4 L320,290 Z"/>
          <path class="ln" d="M200,189.3 L320,290"/>
          <path class="ln" d="M267.8,132.4 L240,290"/>

          <line class="tick" x1="143.9" y1="244.2" x2="136.1" y2="235.1"/>
          <line class="tick" x1="263.9" y1="235.1" x2="256.1" y2="244.2"/>
          <line class="tick" x1="164" y1="296" x2="164" y2="284"/>
          <line class="tick" x1="156" y1="296" x2="156" y2="284"/>
          <line class="tick" x1="247.3" y1="214.1" x2="259.1" y2="216.2"/>
          <line class="tick" x1="248.7" y1="206.2" x2="260.5" y2="208.3"/>

          <path class="arc" d="M246.8,251.2 A20,20 0 0 0 265.6,244.4"/>
          <text class="val" x="264.7" y="276" text-anchor="middle">60°</text>

          <circle class="pt" cx="200" cy="189.3" r="3.2"/>
          <circle class="pt" cx="80" cy="290" r="3.2"/>
          <circle class="pt" cx="320" cy="290" r="3.2"/>
          <circle class="pt" cx="267.8" cy="132.4" r="3.2"/>
          <circle class="pt" cx="240" cy="290" r="3.2"/>
          <circle class="pt" cx="250.3" cy="231.5" r="3.2"/>

          <text x="72" y="308" text-anchor="end">B</text>
          <text x="328" y="308">C</text>
          <text x="190" y="185.3" text-anchor="end">A</text>
          <text x="275.8" y="127.4">D</text>
          <text x="240" y="310" text-anchor="middle">E</text>
          <text x="261.3" y="226.5">F</text>
        `,
    },
    given: [
      '|AB| = |AC|',
      '|EB| = |ED|',
      'B, A, D ve B, E, C doğrusal',
      '[AC] ∩ [DE] = {F}',
      'm(EFC) = 60°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, BAC açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '85' },
      { key: 'C', text: '90' },
      { key: 'D', text: '95' },
      { key: 'E', text: '100' },
    ],
    answer: 'E',
    hint: 'Taban açısına β de; BED ikizkenar üçgeninin E köşesindeki dış açısı 2β olur.',
    solution: [
      {
        title: 'Taban açılarını adlandır',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = β diyelim.',
      },
      {
        title: 'BED de ikizkenar',
        detail:
          '|EB| = |ED| olduğundan BED üçgeninde taban açıları eşittir: m(BDE) = m(DBE) = m(ABC) = β.',
      },
      {
        title: 'Dış açıyı yaz',
        detail:
          'B, E, C doğrusal olduğundan m(DEC), BED üçgeninin E köşesindeki dış açısıdır ve komşu olmayan iki iç açının toplamına eşittir: m(DEC) = β + β = 2β.',
      },
      {
        title: 'FEC üçgenini kur',
        detail:
          'F noktası [DE] üzerinde olduğundan m(FEC) = m(DEC) = 2β’dır; ayrıca m(FCE) = m(ACB) = β. FEC üçgeninde 2β + β + 60 = 180 → 3β = 120 → β = 40° bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'ABC üçgeninde m(BAC) = 180 − 2 · 40 = 100° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'triangles-6',
    topic: 'İkizkenar üçgenlerde açı avı',
    figure: {
      viewBox: '0 104 400 240',
      caption: 'Şekil 6',
      label:
        'İkizkenar ABC üçgeni ve BC doğrusunun altındaki D noktası; [AD] ile [CB] E noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M200,136.1 L100,220 L300,220 Z"/>
          <path class="ln" d="M200,136.1 L134.7,315.4 L300,220"/>

          <line class="tick" x1="153.9" y1="182.6" x2="146.1" y2="173.5"/>
          <line class="tick" x1="253.9" y1="173.5" x2="246.1" y2="182.6"/>
          <line class="tick" x1="174.4" y1="224.1" x2="163.1" y2="220"/>
          <line class="tick" x1="171.6" y1="231.6" x2="160.3" y2="227.5"/>
          <line class="tick" x1="210.9" y1="264.5" x2="216.9" y2="274.9"/>
          <line class="tick" x1="217.8" y1="260.5" x2="223.8" y2="270.9"/>

          <path class="arc" d="M160.2,169.5 A52,52 0 0 0 182.2,185"/>
          <text class="val" x="154.1" y="206.6" text-anchor="middle">30°</text>

          <path class="arc" d="M245,220 A55,55 0 0 0 252.4,247.5"/>
          <text class="val" x="227.6" y="244.4" text-anchor="middle">30°</text>

          <path class="arc" d="M158.5,250.1 A32,32 0 0 0 201.5,220"/>
          <text class="val" x="195.3" y="261.9" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="136.1" r="3.2"/>
          <circle class="pt" cx="100" cy="220" r="3.2"/>
          <circle class="pt" cx="300" cy="220" r="3.2"/>
          <circle class="pt" cx="134.7" cy="315.4" r="3.2"/>
          <circle class="pt" cx="169.5" cy="220" r="3.2"/>

          <text x="200" y="124.1" text-anchor="middle">A</text>
          <text x="92" y="238" text-anchor="end">B</text>
          <text x="308" y="238">C</text>
          <text x="126.7" y="332.4" text-anchor="end">D</text>
          <text x="182" y="214">E</text>
        `,
    },
    given: ['|AB| = |AC|', '|AD| = |DC|', 'm(BAD) = 30°', 'm(BCD) = 30°'],
    stem: [],
    ask: 'Yukarıda verilen düzlemsel şekilde [AD] ∩ [CB] = {E} olduğuna göre, m(DEC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '95' },
      { key: 'B', text: '100' },
      { key: 'C', text: '105' },
      { key: 'D', text: '110' },
      { key: 'E', text: '115' },
    ],
    answer: 'D',
    hint: 'Taban açısına β de; |AD| = |DC| eşitliği ADC üçgeninde bir denklem kurmanı sağlar.',
    solution: [
      {
        title: 'Taban açılarını adlandır',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = β ve tepe açısı m(BAC) = 180 − 2β olur.',
      },
      {
        title: 'DAC açısını yaz',
        detail:
          '[AD], E noktasında [BC]’yi kestiğinden BAC açısının içinden geçer: m(DAC) = m(BAC) − m(BAD) = (180 − 2β) − 30 = 150 − 2β.',
      },
      {
        title: 'DCA açısını yaz',
        detail:
          'D noktası BC doğrusunun diğer tarafında olduğundan m(DCA) = m(BCA) + m(BCD) = β + 30 olur.',
      },
      {
        title: 'ADC ikizkenar üçgeni',
        detail:
          '|AD| = |DC| olduğundan ADC üçgeninde taban açıları eşittir: 150 − 2β = β + 30 → 3β = 120 → β = 40°.',
      },
      {
        title: 'ABE üçgenini çöz',
        detail:
          'ABE üçgeninde m(BAE) = m(BAD) = 30° ve m(ABE) = m(ABC) = 40° olduğundan m(AEB) = 180 − 30 − 40 = 110° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(DEC) ile m(AEB) ters açılardır, dolayısıyla α = 110° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 7
  {
    id: 'triangles-7',
    topic: 'İkizkenar üçgende yükseklik',
    figure: {
      viewBox: '0 90 400 230',
      caption: 'Şekil 7',
      label:
        'ABC üçgeninde [AH] yüksekliği [BC] kenarını ortalıyor; B köşesinden çıkan [BD], [AC] kenarını D noktasında kesiyor.',
      svg: `
          <path class="ln" d="M200,123.2 L60,290 L340,290 Z"/>
          <path class="ln" d="M200,123.2 L200,290"/>
          <path class="ln" d="M60,290 L288.6,228.7"/>
          <path class="ln" d="M213,290 L213,277 L200,277"/>

          <line class="tick" x1="130" y1="284" x2="130" y2="296"/>
          <line class="tick" x1="270" y1="284" x2="270" y2="296"/>

          <path class="arc" d="M93.4,250.2 A52,52 0 0 1 110.2,276.5"/>
          <text class="val" x="131.7" y="249.3" text-anchor="middle">35°</text>

          <path class="arc" d="M100.6,279.1 A42,42 0 0 1 102,290"/>
          <text class="val" x="169.1" y="280.6" text-anchor="middle">15°</text>

          <path class="arc" d="M262.9,198.1 A40,40 0 0 0 250,239.1"/>
          <text class="val" x="233.3" y="216.3" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="123.2" r="3.2"/>
          <circle class="pt" cx="60" cy="290" r="3.2"/>
          <circle class="pt" cx="340" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>
          <circle class="pt" cx="288.6" cy="228.7" r="3.2"/>

          <text x="200" y="110.2" text-anchor="middle">A</text>
          <text x="52" y="308" text-anchor="end">B</text>
          <text x="348" y="308">C</text>
          <text x="200" y="310" text-anchor="middle">H</text>
          <text x="297.6" y="222.7">D</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC]',
      '|BH| = |HC|',
      'm(ABD) = 35°',
      'm(DBC) = 15°',
      'm(ADB) = α',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '70' },
    ],
    answer: 'D',
    hint: '[AH] hem yükseklik hem kenarortay olduğundan üçgen ikizkenardır.',
    solution: [
      {
        title: 'Üçgenin ikizkenar olduğunu göster',
        detail:
          '[AH] ⊥ [BC] ve |BH| = |HC| olduğundan [AH] hem yükseklik hem kenarortaydır. ABH ile ACH dik üçgenleri eş olduğundan |AB| = |AC| bulunur.',
      },
      {
        title: 'Taban açılarını bul',
        detail:
          '[BD], ABC açısının içinden geçtiğinden m(ABC) = 35 + 15 = 50°. Üçgen ikizkenar olduğundan m(ACB) = 50°.',
      },
      {
        title: 'Tepe açısını bul',
        detail: 'ABC üçgeninde m(BAC) = 180 − 50 − 50 = 80° olur.',
      },
      {
        title: 'ABD üçgenini çöz',
        detail:
          'D noktası [AC] üzerinde olduğundan m(BAD) = m(BAC) = 80°. ABD üçgeninde α = 180 − 80 − 35 = 65° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'triangles-8',
    topic: 'Eşkenar üçgen ve eşit kenarlar',
    figure: {
      viewBox: '0 40 400 290',
      caption: 'Şekil 8',
      label:
        'Eşkenar ABC üçgeni ve üçgenin dışında kalan D noktası; |AB| = |BD| ve D, A ile C’ye birleştirilmiş.',
      svg: `
          <path class="ln" d="M200,74.8 L70,300 L330,300 Z"/>
          <path class="ln" d="M70,300 L280.4,147.2"/>
          <path class="ln" d="M200,74.8 L280.4,147.2 L330,300"/>

          <line class="tick" x1="140.2" y1="190.4" x2="129.8" y2="184.4"/>
          <line class="tick" x1="171.7" y1="218.7" x2="178.7" y2="228.5"/>

          <path class="arc" d="M97.5,252.4 A55,55 0 0 1 114.5,267.7"/>
          <text class="val" x="136.9" y="230.7" text-anchor="middle">24°</text>

          <path class="arc" d="M300,248 A60,60 0 0 1 311.5,242.9"/>
          <text class="val" x="277.1" y="186.2" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="74.8" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="280.4" cy="147.2" r="3.2"/>

          <text x="200" y="61.8" text-anchor="middle">A</text>
          <text x="62" y="318" text-anchor="end">B</text>
          <text x="338" y="318">C</text>
          <text x="289.4" y="140.2">D</text>
        `,
    },
    given: ['ABC eşkenar üçgen', '|AB| = |BD|', 'm(ABD) = 24°', 'm(ACD) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '14' },
      { key: 'D', text: '16' },
      { key: 'E', text: '18' },
    ],
    answer: 'B',
    hint: 'Eşkenar üçgende |BA| = |BC| olduğundan B’den çıkan üç uzunluk da eşittir.',
    solution: [
      {
        title: 'Eşit uzunlukları belirle',
        detail:
          'ABC eşkenar olduğundan |BA| = |BC|; verilenle birlikte |BA| = |BC| = |BD| olur ve eşkenar üçgenin her açısı 60°’dir.',
      },
      {
        title: 'DBC açısını bul',
        detail:
          '[BD], ABC açısının içinden geçtiğinden m(DBC) = m(ABC) − m(ABD) = 60 − 24 = 36° olur.',
      },
      {
        title: 'BDC ikizkenar üçgeni',
        detail:
          '|BD| = |BC| olduğundan BDC üçgeninde taban açıları eşittir: m(BDC) = m(BCD) = (180 − 36) / 2 = 72°.',
      },
      {
        title: 'Sonuç',
        detail:
          '[CA], BCD açısının içinden geçtiğinden m(BCD) = m(BCA) + m(ACD) → 72 = 60 + α → α = 12° bulunur.',
      },
      {
        title: 'Kısa yol',
        detail:
          '|BA| = |BC| = |BD| olduğundan B noktası ADC üçgeninin çevrel çemberinin merkezidir. AD yayını gören merkez açı m(ABD) = 24°, aynı yayı gören çevre açı ise m(ACD) = α olduğundan α = 24 / 2 = 12°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'triangles-9',
    topic: 'Açıortaylar ve iç açı',
    figure: {
      viewBox: '0 18 400 312',
      caption: 'Şekil 9',
      label:
        'ABC üçgeninde A ve B köşelerinin açıortayları L noktasında kesişiyor; [AC] üzerindeki K, L ve [BC] üzerindeki M noktaları doğrusal.',
      svg: `
          <path class="ln" d="M140.8,50.6 L50,300 L350,300 Z"/>
          <path class="ln" d="M140.8,50.6 L169.9,216"/>
          <path class="ln" d="M50,300 L169.9,216"/>
          <path class="ln" d="M219.8,144.8 L111.1,300"/>

          <path class="arc" d="M123.7,97.6 A50,50 0 0 0 149.4,99.8"/>
          <line class="tick" x1="136.9" y1="94.4" x2="135.9" y2="106.4"/>
          <path class="arc" d="M149.4,99.8 A50,50 0 0 0 172.9,88.9"/>
          <line class="tick" x1="159.4" y1="90.5" x2="164.4" y2="101.4"/>

          <path class="arc" d="M68.8,248.3 A55,55 0 0 1 95,268.4"/>
          <line class="tick" x1="78.1" y1="259.9" x2="85" y2="250"/>
          <line class="tick" x1="81.5" y1="262.5" x2="89.2" y2="253.3"/>
          <path class="arc" d="M95,268.4 A55,55 0 0 1 105,300"/>
          <line class="tick" x1="96" y1="283.2" x2="107.3" y2="279.1"/>
          <line class="tick" x1="97.3" y1="287.3" x2="108.9" y2="284.2"/>

          <path class="arc" d="M183.2,101.1 A57,57 0 0 0 187.1,191.5"/>
          <text class="val" x="188" y="152" text-anchor="middle">105°</text>

          <path class="arc" d="M135.2,265.6 A42,42 0 0 1 153.1,300"/>
          <text class="val" x="173.2" y="272.7" text-anchor="middle">55°</text>

          <path class="arc" d="M163.3,178.6 A38,38 0 0 0 138.8,237.8"/>
          <text class="val" x="119.1" y="200" text-anchor="middle">x</text>

          <circle class="pt" cx="140.8" cy="50.6" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="219.8" cy="144.8" r="3.2"/>
          <circle class="pt" cx="169.9" cy="216" r="3.2"/>
          <circle class="pt" cx="111.1" cy="300" r="3.2"/>

          <text x="140.8" y="38.6" text-anchor="middle">A</text>
          <text x="42" y="318" text-anchor="end">B</text>
          <text x="358" y="318">C</text>
          <text x="228.8" y="139.8">K</text>
          <text x="178.9" y="222">L</text>
          <text x="111.1" y="320" text-anchor="middle">M</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AL] ve [BL] açıortay',
      'K, L, M doğrusal',
      'm(AKL) = 105°',
      'm(KMC) = 55°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ALB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '95' },
      { key: 'B', text: '100' },
      { key: 'C', text: '105' },
      { key: 'D', text: '110' },
      { key: 'E', text: '115' },
    ],
    answer: 'E',
    hint: 'Önce KMC üçgeninden C açısını bul; L, iki açıortayın kesiştiği noktadır.',
    solution: [
      {
        title: 'MKC açısını bul',
        detail:
          'A, K, C doğrusal ve M noktası [KL ışını üzerinde olduğundan m(AKL) ile m(MKC) bütünler açılardır: m(MKC) = 180 − 105 = 75°.',
      },
      {
        title: 'C açısını bul',
        detail:
          'KMC üçgeninde m(KMC) = 55° ve m(MKC) = 75° olduğundan m(KCM) = 180 − 75 − 55 = 50°. M noktası [BC] üzerinde olduğundan m(ACB) = 50°.',
      },
      {
        title: 'Açıortayları kullan',
        detail:
          '[AL] ve [BL] açıortay olduğundan ALB üçgeninde m(LAB) = m(BAC)/2 ve m(LBA) = m(ABC)/2 olur.',
      },
      {
        title: 'x’i hesapla',
        detail:
          'ALB üçgeninde x = 180 − (m(BAC) + m(ABC))/2. İç açılar toplamından m(BAC) + m(ABC) = 180 − 50 = 130 olduğundan x = 180 − 65 = 115° bulunur.',
      },
      {
        title: 'Kural olarak',
        detail: 'İki iç açıortayın oluşturduğu açı her zaman 90 + C/2’dir: 90 + 50/2 = 115°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  {
    id: 'triangles-10',
    topic: 'Dik üçgende ikizkenar üçgenler',
    figure: {
      viewBox: '0 100 400 220',
      caption: 'Şekil 10',
      label:
        'B köşesi dik olan ABC üçgeni; [BC] üzerindeki D noktası A ile, [AC] üzerindeki E noktası D ile birleştirilmiş.',
      svg: `
          <path class="ln" d="M70,134.1 L70,290 L340,290 Z"/>
          <path class="ln" d="M70,134.1 L225.9,290"/>
          <path class="ln" d="M168.8,191.2 L225.9,290"/>
          <path class="ln" d="M83,290 L83,277 L70,277"/>

          <line class="tick" x1="76" y1="212.1" x2="64" y2="212.1"/>
          <line class="tick" x1="147.9" y1="284" x2="147.9" y2="296"/>

          <line class="tick" x1="118.9" y1="155.5" x2="112.9" y2="165.8"/>
          <line class="tick" x1="125.9" y1="159.5" x2="119.9" y2="169.8"/>
          <line class="tick" x1="200.5" y1="234.1" x2="190.2" y2="240.1"/>
          <line class="tick" x1="204.5" y1="241.1" x2="194.2" y2="247.1"/>
          <line class="tick" x1="278.9" y1="284" x2="278.9" y2="296"/>
          <line class="tick" x1="286.9" y1="284" x2="286.9" y2="296"/>

          <path class="arc" d="M301,267.5 A45,45 0 0 0 295,290"/>
          <text class="val" x="267.6" y="275.6" text-anchor="middle">α</text>

          <circle class="pt" cx="70" cy="134.1" r="3.2"/>
          <circle class="pt" cx="70" cy="290" r="3.2"/>
          <circle class="pt" cx="340" cy="290" r="3.2"/>
          <circle class="pt" cx="225.9" cy="290" r="3.2"/>
          <circle class="pt" cx="168.8" cy="191.2" r="3.2"/>

          <text x="70" y="122.1" text-anchor="middle">A</text>
          <text x="62" y="308" text-anchor="end">B</text>
          <text x="348" y="308">C</text>
          <text x="225.9" y="310" text-anchor="middle">D</text>
          <text x="173.8" y="180.2">E</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      'm(ABC) = 90°',
      'D ∈ [BC] ve E ∈ [AC]',
      '|AB| = |BD|',
      '|AE| = |ED| = |DC|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '25' },
      { key: 'C', text: '30' },
      { key: 'D', text: '35' },
      { key: 'E', text: '40' },
    ],
    answer: 'C',
    hint: 'ABD dik ikizkenar üçgeninde açılar 45°’dir; sonra AED ve EDC ikizkenar üçgenlerini kur.',
    solution: [
      {
        title: 'ABD dik ikizkenar üçgeni',
        detail:
          'm(ABD) = 90° ve |AB| = |BD| olduğundan ABD ikizkenar dik üçgendir: m(BAD) = m(BDA) = 45°.',
      },
      {
        title: 'EDC ikizkenar üçgeni',
        detail:
          '|ED| = |DC| olduğundan EDC üçgeninde taban açıları eşittir: m(DEC) = m(DCE) = α. Buradan m(EDC) = 180 − 2α olur.',
      },
      {
        title: 'AED ikizkenar üçgeni',
        detail:
          '|AE| = |ED| olduğundan m(EAD) = m(EDA) = θ diyelim. A, E, C doğrusal olduğundan m(AED) = 180 − α; AED üçgeninde 2θ + (180 − α) = 180 → α = 2θ bulunur.',
      },
      {
        title: 'D köşesindeki doğrusal açı',
        detail:
          'B, D, C doğrusal olduğundan m(ADB) + m(ADE) + m(EDC) = 180 → 45 + θ + (180 − 2α) = 180 → θ = 2α − 45.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 2θ ve θ = 2α − 45 denklemleri birlikte: α = 2(2α − 45) → 3α = 90 → α = 30°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'triangles-11',
    topic: 'Açıortay ve iç açılar',
    figure: {
      viewBox: '0 86 400 232',
      caption: 'Şekil 11',
      label:
        'ABC üçgeninde C köşesinden çizilen [CD] açıortayı [AB] kenarını D noktasında kesiyor.',
      svg: `
          <path class="ln" d="M241.2,118.8 L70,290 L340,290 Z"/>
          <path class="ln" d="M168.8,191.2 L340,290"/>

          <path class="arc" d="M290,290 A50,50 0 0 1 296.7,265"/>
          <line class="tick" x1="297.5" y1="278.6" x2="285.9" y2="275.5"/>
          <path class="arc" d="M296.7,265 A50,50 0 0 1 315,246.7"/>
          <line class="tick" x1="308.9" y1="258.9" x2="300.4" y2="250.4"/>

          <path class="arc" d="M147.6,212.4 A30,30 0 0 0 194.8,206.2"/>
          <text class="val" x="175.6" y="247.7" text-anchor="middle">α</text>

          <circle class="pt" cx="241.2" cy="118.8" r="3.2"/>
          <circle class="pt" cx="70" cy="290" r="3.2"/>
          <circle class="pt" cx="340" cy="290" r="3.2"/>
          <circle class="pt" cx="168.8" cy="191.2" r="3.2"/>

          <text x="241.2" y="106.8" text-anchor="middle">A</text>
          <text x="62" y="308" text-anchor="end">B</text>
          <text x="348" y="308">C</text>
          <text x="160.8" y="186.2" text-anchor="end">D</text>
        `,
    },
    given: ['ABC bir üçgen', '[CD] açıortay', 'm(A) − m(B) = 30°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BDC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '105' },
      { key: 'B', text: '110' },
      { key: 'C', text: '115' },
      { key: 'D', text: '120' },
      { key: 'E', text: '125' },
    ],
    answer: 'A',
    hint: 'BDC üçgeninin açılarını A, B ve C cinsinden yazıp iç açılar toplamını kullan.',
    solution: [
      {
        title: 'Açıortayı yaz',
        detail: '[CD] açıortay olduğundan m(BCD) = m(ACD) = m(C)/2 olur.',
      },
      {
        title: 'BDC üçgenini kur',
        detail: 'BDC üçgeninde α + m(B) + m(C)/2 = 180 → α = 180 − m(B) − m(C)/2.',
      },
      {
        title: 'C açısını yok et',
        detail:
          'Üçgenin iç açıları toplamından m(C) = 180 − m(A) − m(B)’dir. Yerine yazarsak α = 180 − m(B) − (180 − m(A) − m(B))/2 = 90 + (m(A) − m(B))/2 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'm(A) − m(B) = 30 olduğundan α = 90 + 15 = 105° bulunur. Sonuç, A ve B’nin tek tek değerlerinden bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'triangles-12',
    topic: 'Orta dikme ve ikizkenar üçgen',
    figure: {
      viewBox: '0 57 400 250',
      caption: 'Şekil 12',
      label:
        'A köşesinden [KE] doğru parçasına inen [AL] dikmesi; K, L, E doğrusal ve |KL| = |LE|, ayrıca |AB| = |AK|.',
      svg: `
          <path class="ln" d="M240,90 L86.8,218.6 L308.4,278 Z"/>
          <path class="ln" d="M240,90 L171.6,278 L308.4,278"/>
          <path class="ln" d="M240,90 L240,278"/>
          <path class="ln" d="M253,278 L253,265 L240,265"/>

          <line class="tick" x1="205.8" y1="272" x2="205.8" y2="284"/>
          <line class="tick" x1="274.2" y1="272" x2="274.2" y2="284"/>

          <line class="tick" x1="170.3" y1="156.3" x2="162.6" y2="147.1"/>
          <line class="tick" x1="164.2" y1="161.5" x2="156.5" y2="152.3"/>
          <line class="tick" x1="212.8" y1="182.3" x2="201.5" y2="178.2"/>
          <line class="tick" x1="210.1" y1="189.8" x2="198.8" y2="185.7"/>

          <path class="arc" d="M194,128.6 A60,60 0 0 0 219.5,146.4"/>
          <text class="val" x="185.5" y="172.8" text-anchor="middle">30°</text>

          <path class="arc" d="M210.9,169.9 A85,85 0 0 0 240,175"/>
          <text class="val" x="218.3" y="218.1" text-anchor="middle">20°</text>

          <path class="arc" d="M121.3,189.7 A45,45 0 0 1 130.3,230.3"/>
          <text class="val" x="145.4" y="210.6" text-anchor="middle">α</text>

          <circle class="pt" cx="240" cy="90" r="3.2"/>
          <circle class="pt" cx="86.8" cy="218.6" r="3.2"/>
          <circle class="pt" cx="171.6" cy="278" r="3.2"/>
          <circle class="pt" cx="240" cy="278" r="3.2"/>
          <circle class="pt" cx="308.4" cy="278" r="3.2"/>

          <text x="240" y="78" text-anchor="middle">A</text>
          <text x="78.8" y="212.6" text-anchor="end">B</text>
          <text x="165.6" y="298" text-anchor="end">K</text>
          <text x="240" y="298" text-anchor="middle">L</text>
          <text x="317.4" y="274">E</text>
        `,
    },
    given: ['[AL] ⊥ [KE]', '|KL| = |LE|', '|AB| = |AK|', 'm(BAK) = 30°', 'm(KAL) = 20°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABE) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'D',
    hint: '[AL], [KE]’nin orta dikmesidir; orta dikme üzerindeki nokta uç noktalara eşit uzaklıktadır.',
    solution: [
      {
        title: 'Orta dikmeyi gör',
        detail:
          '[AL] ⊥ [KE] ve |KL| = |LE| olduğundan [AL], [KE] parçasının orta dikmesidir. Orta dikme üzerindeki her nokta uç noktalara eşit uzaklıkta olduğundan |AK| = |AE| olur.',
      },
      {
        title: 'KAE açısını bul',
        detail:
          'ALK ile ALE dik üçgenleri eş olduğundan m(LAE) = m(KAL) = 20°; buradan m(KAE) = 20 + 20 = 40° bulunur.',
      },
      {
        title: 'BAE açısını bul',
        detail:
          '[AK], BAE açısının içinden geçtiğinden m(BAE) = m(BAK) + m(KAE) = 30 + 40 = 70° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AB| = |AK| = |AE| olduğundan ABE üçgeni ikizkenardır ve tabanı [BE]’dir: α = m(ABE) = (180 − 70) / 2 = 55° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'triangles-13',
    topic: 'Dik üçgende hipotenüs kenarortayı',
    figure: {
      viewBox: '0 118 400 202',
      caption: 'Şekil 13',
      label:
        'A köşesi dik olan ABC üçgeni; [BC] hipotenüsünün orta noktası F, [AB] üzerindeki E ve [AC] üzerindeki D ile birleştirilmiş.',
      svg: `
          <path class="ln" d="M224.3,152.1 L60,290 L340,290 Z"/>
          <path class="ln" d="M224.3,152.1 L200,290"/>
          <path class="ln" d="M117.1,242.1 L200,290 L314.3,259.3"/>
          <path class="ln" d="M213.6,161.1 L222.6,171.8 L233.3,162.8"/>

          <line class="tick" x1="174.6" y1="201.7" x2="166.8" y2="192.5"/>
          <line class="tick" x1="273.9" y1="201.8" x2="264.7" y2="209.6"/>
          <line class="tick" x1="130" y1="284" x2="130" y2="296"/>
          <line class="tick" x1="270" y1="284" x2="270" y2="296"/>

          <path class="arc" d="M95.2,260.4 A46,46 0 0 1 106,290"/>
          <text class="val" x="125.8" y="271.1" text-anchor="middle">40°</text>

          <path class="arc" d="M205.9,256.5 A34,34 0 0 0 170.6,273"/>
          <text class="val" x="176.8" y="245.2" text-anchor="middle">α</text>

          <circle class="pt" cx="224.3" cy="152.1" r="3.2"/>
          <circle class="pt" cx="60" cy="290" r="3.2"/>
          <circle class="pt" cx="340" cy="290" r="3.2"/>
          <circle class="pt" cx="314.3" cy="259.3" r="3.2"/>
          <circle class="pt" cx="117.1" cy="242.1" r="3.2"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>

          <text x="224.3" y="140.1" text-anchor="middle">A</text>
          <text x="52" y="308" text-anchor="end">B</text>
          <text x="348" y="308">C</text>
          <text x="109.1" y="237.1" text-anchor="end">E</text>
          <text x="322.3" y="254.3">D</text>
          <text x="200" y="310" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      'm(BAC) = 90°',
      'E ∈ [AB] ve D ∈ [AC]',
      '|AE| = |AD| = |BF| = |FC|',
      'm(ABC) = 40°',
    ],
    stem: [],
    ask: 'Yukarıdaki şekle göre, m(AFE) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '55' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'D',
    hint: 'F hipotenüsün orta noktası olduğundan |FA| = |FB| = |FC| olur.',
    solution: [
      {
        title: 'F hipotenüsün orta noktasıdır',
        detail:
          '|BF| = |FC| olduğundan F, [BC] hipotenüsünün orta noktasıdır. Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısına eşit olduğundan |FA| = |FB| = |FC| olur.',
      },
      {
        title: 'ABF ikizkenar üçgeni',
        detail:
          '|FA| = |FB| olduğundan ABF üçgeninde taban açıları eşittir: m(FAB) = m(FBA) = 40°.',
      },
      {
        title: 'AEF ikizkenar üçgeni',
        detail:
          'Verilenden |AE| = |BF| = |FA| olduğundan AEF üçgeni de ikizkenardır. E noktası [AB] üzerinde olduğundan tepe açısı m(EAF) = m(BAF) = 40°’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'AEF üçgeninde taban açıları eşittir: α = m(AFE) = (180 − 40) / 2 = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'triangles-14',
    topic: 'Dik üçgende çevrel çember',
    figure: {
      viewBox: '0 84 400 234',
      caption: 'Şekil 14',
      label:
        'B köşesi dik olan ABC üçgeni; [AC] hipotenüsünün orta noktası D, dışarıdaki E noktasıyla birleştirilmiş ve E, B ile C’ye de bağlı.',
      svg: `
          <path class="ln" d="M90,290 L270,290 L270,110 Z"/>
          <path class="ln" d="M180,200 L270,290"/>
          <path class="ln" d="M180,200 L306.8,211.1"/>
          <path class="ln" d="M270,290 L306.8,211.1 L270,110"/>
          <path class="ln" d="M257,290 L257,277 L270,277"/>

          <line class="tick" x1="130.8" y1="240.8" x2="139.2" y2="249.2"/>
          <line class="tick" x1="220.8" y1="150.8" x2="229.2" y2="159.2"/>
          <line class="tick" x1="243.9" y1="199.6" x2="242.9" y2="211.5"/>

          <path class="arc" d="M221.8,203.7 A42,42 0 0 1 150.3,229.7"/>
          <text class="val" x="200.5" y="261.4" text-anchor="middle">130°</text>

          <path class="arc" d="M270,244 A46,46 0 0 1 289.4,248.3"/>
          <text class="val" x="284.1" y="231.5" text-anchor="middle">α</text>

          <circle class="pt" cx="90" cy="290" r="3.2"/>
          <circle class="pt" cx="270" cy="290" r="3.2"/>
          <circle class="pt" cx="270" cy="110" r="3.2"/>
          <circle class="pt" cx="180" cy="200" r="3.2"/>
          <circle class="pt" cx="306.8" cy="211.1" r="3.2"/>

          <text x="82" y="308" text-anchor="end">A</text>
          <text x="270" y="310" text-anchor="middle">B</text>
          <text x="278" y="104">C</text>
          <text x="172" y="196" text-anchor="end">D</text>
          <text x="315.8" y="206.1">E</text>
        `,
    },
    given: ['ABC bir dik üçgen', '[AB] ⊥ [BC]', 'D ∈ [AC]', '|AD| = |DC| = |DE|', 'm(EDA) = 130°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CBE) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '25' },
      { key: 'C', text: '30' },
      { key: 'D', text: '35' },
      { key: 'E', text: '40' },
    ],
    answer: 'B',
    hint: 'D, dik üçgenin çevrel çemberinin merkezidir; |DE| de aynı yarıçapa eşit olduğundan E de bu çember üzerindedir.',
    solution: [
      {
        title: 'D çevrel çemberin merkezidir',
        detail:
          '|AD| = |DC| olduğundan D, [AC] hipotenüsünün orta noktasıdır. Dik üçgende hipotenüsün orta noktası çevrel çemberin merkezidir: |DA| = |DB| = |DC|.',
      },
      {
        title: 'E de çember üzerindedir',
        detail:
          '|DE| = |DA| verildiğinden E noktası da D merkezli, aynı yarıçaplı çember üzerindedir. Böylece A, B, C ve E aynı çember üzerindedir.',
      },
      {
        title: 'Merkez açıyı bul',
        detail:
          'A, D, C doğrusal olduğundan m(CDE) ile m(EDA) bütünlerdir: m(CDE) = 180 − 130 = 50°.',
      },
      {
        title: 'Sonuç',
        detail:
          'm(CDE) merkez açısı ile m(CBE) çevre açısı aynı CE yayını gördüğünden α = 50 / 2 = 25° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'triangles-15',
    topic: 'İç ve dış açıortay',
    figure: {
      viewBox: '0 84 400 234',
      caption: 'Şekil 15',
      label:
        'ABC üçgeninde [BA ve [BC ışınları uzatılmış; B’nin iç açıortayı ile A’daki dış açıortay D noktasında kesişiyor.',
      svg: `
          <defs>
            <marker id="arrow-t15" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="55" y1="290" x2="170" y2="90.8" marker-end="url(#arrow-t15)"/>
          <line class="ln" x1="55" y1="290" x2="355" y2="290" marker-end="url(#arrow-t15)"/>
          <path class="ln" d="M124.3,170 L225,290"/>
          <path class="ln" d="M55,290 L287.6,155.7 L124.3,170"/>
          <path class="ln" d="M287.6,155.7 L225,290"/>

          <path class="arc" d="M79,248.4 A48,48 0 0 1 96.6,266"/>
          <line class="tick" x1="84.7" y1="260.3" x2="93.2" y2="251.8"/>
          <path class="arc" d="M96.6,266 A48,48 0 0 1 103,290"/>
          <line class="tick" x1="95.6" y1="279.1" x2="107.2" y2="276"/>

          <path class="arc" d="M146.3,131.9 A44,44 0 0 1 168.1,166.2"/>
          <line class="tick" x1="155.4" y1="148.2" x2="165.2" y2="141.3"/>
          <line class="tick" x1="157.2" y1="151" x2="167.6" y2="145"/>
          <path class="arc" d="M168.1,166.2 A44,44 0 0 1 152.6,203.7"/>
          <line class="tick" x1="160" y1="183" x2="171.3" y2="187.1"/>
          <line class="tick" x1="158.7" y1="186.1" x2="169.6" y2="191.1"/>

          <path class="arc" d="M105.3,202.9 A38,38 0 0 0 148.7,199.1"/>
          <text class="val" x="129.1" y="229.8" text-anchor="middle">70°</text>

          <path class="arc" d="M245.8,159.4 A42,42 0 0 0 251.2,176.7"/>
          <text class="val" x="197" y="189.3" text-anchor="middle">25°</text>

          <path class="arc" d="M239.4,259.2 A34,34 0 0 1 259,290"/>
          <text class="val" x="275.6" y="262.8" text-anchor="middle">x</text>

          <circle class="pt" cx="124.3" cy="170" r="3.2"/>
          <circle class="pt" cx="55" cy="290" r="3.2"/>
          <circle class="pt" cx="225" cy="290" r="3.2"/>
          <circle class="pt" cx="287.6" cy="155.7" r="3.2"/>
          <circle class="pt" cx="320" cy="290" r="3.2"/>
          <circle class="pt" cx="152.5" cy="121.1" r="3.2"/>

          <text x="115.3" y="166" text-anchor="end">A</text>
          <text x="47" y="308" text-anchor="end">B</text>
          <text x="225" y="310" text-anchor="middle">C</text>
          <text x="296.6" y="149.7">D</text>
          <text x="320" y="310" text-anchor="middle">E</text>
          <text x="145.5" y="115.1" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'K ∈ [BA ve E ∈ [BC',
      '[BD] iç açıortay',
      '[AD] dış açıortay',
      'm(CAB) = 70°',
      'm(ADB) = 25°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DCE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'E',
    hint: 'A köşesindeki dış açı 110°’dir; [AD] onu ikiye böler. Önce ABD üçgeninde B açısını bul.',
    solution: [
      {
        title: 'Dış açıortayı kullan',
        detail:
          'A köşesindeki dış açı 180 − 70 = 110°’dir. [AD] bu açıyı ikiye böldüğünden m(CAD) = 55° olur. B, A, K doğrusal olduğundan m(BAD) = m(BAC) + m(CAD) = 70 + 55 = 125°.',
      },
      {
        title: 'ABD üçgenini çöz',
        detail: 'ABD üçgeninde m(ABD) = 180 − 125 − 25 = 30° bulunur.',
      },
      {
        title: 'B açısını bul',
        detail: '[BD] iç açıortay olduğundan m(ABC) = 2 · 30 = 60°.',
      },
      {
        title: 'C açısını bul',
        detail: 'ABC üçgeninde m(ACB) = 180 − 70 − 60 = 50° olur.',
      },
      {
        title: 'D bir dış teğet çemberin merkezidir',
        detail:
          'D noktası, B’den çıkan iç açıortay ile A’daki dış açıortayın kesişimidir. Bu üç doğru bir dış teğet çemberin merkezinde kesiştiğinden [CD] de C köşesindeki dış açıortaydır.',
      },
      {
        title: 'Sonuç',
        detail:
          'C köşesindeki dış açı 180 − 50 = 130° olduğundan x = m(DCE) = 130 / 2 = 65° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'triangles-16',
    topic: 'Çevrel çemberin merkezi',
    figure: {
      viewBox: '0 46 400 274',
      caption: 'Şekil 16',
      label:
        'ABC üçgeni ve çevrel çemberinin merkezi O; O noktası üç köşeye de birleştirilmiş ve üç uzunluk eşit işaretlenmiş.',
      svg: `
          <path class="ln" d="M208,78.6 L60,290 L330,290 Z"/>
          <path class="ln" d="M208,78.6 L195,227"/>
          <path class="ln" d="M60,290 L195,227"/>
          <path class="ln" d="M330,290 L195,227"/>

          <line class="tick" x1="195.5" y1="152.3" x2="207.5" y2="153.3"/>
          <line class="tick" x1="130" y1="263.9" x2="125" y2="253.1"/>
          <line class="tick" x1="265" y1="253.1" x2="260" y2="263.9"/>

          <path class="arc" d="M203.5,130.4 A52,52 0 0 0 234,123.6"/>
          <text class="val" x="224.2" y="156.8" text-anchor="middle">35°</text>

          <path class="arc" d="M178.2,121.2 A52,52 0 0 0 203.5,130.4"/>
          <text class="val" x="182.3" y="154.1" text-anchor="middle">x</text>

          <path class="arc" d="M109.8,266.7 A55,55 0 0 1 115,290"/>
          <text class="val" x="157.6" y="273.4" text-anchor="middle">25°</text>

          <circle class="pt" cx="208" cy="78.6" r="3.2"/>
          <circle class="pt" cx="60" cy="290" r="3.2"/>
          <circle class="pt" cx="330" cy="290" r="3.2"/>
          <circle class="pt" cx="195" cy="227" r="3.2"/>

          <text x="208" y="66.6" text-anchor="middle">A</text>
          <text x="52" y="308" text-anchor="end">B</text>
          <text x="338" y="308">C</text>
          <text x="195" y="250" text-anchor="middle">O</text>
        `,
    },
    given: ['ABC bir üçgen', 'O, çevrel çemberin merkezidir', 'm(OAC) = 35°', 'm(OBC) = 25°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAO) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '26' },
      { key: 'B', text: '28' },
      { key: 'C', text: '30' },
      { key: 'D', text: '32' },
      { key: 'E', text: '34' },
    ],
    answer: 'C',
    hint: '|OA| = |OB| = |OC| olduğundan üç ikizkenar üçgen oluşur; üçgenin iç açılar toplamını yaz.',
    solution: [
      {
        title: 'Üç ikizkenar üçgen',
        detail:
          'O çevrel çemberin merkezi olduğundan |OA| = |OB| = |OC| yarıçaplardır. Böylece OAB, OBC ve OAC üçgenlerinin üçü de ikizkenardır.',
      },
      {
        title: 'Eşit açıları işaretle',
        detail: 'm(OAB) = m(OBA) = x, m(OAC) = m(OCA) = 35°, m(OBC) = m(OCB) = 25° olur.',
      },
      {
        title: 'İç açılar toplamını yaz',
        detail:
          'ABC üçgeninde m(A) + m(B) + m(C) = (x + 35) + (x + 25) + (35 + 25) = 180 → 2x + 120 = 180.',
      },
      {
        title: 'Sonuç',
        detail: '2x = 60 → x = 30° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'triangles-17',
    topic: 'Merkez açı ve çevre açı',
    figure: {
      viewBox: '0 0 400 320',
      caption: 'Şekil 17',
      label:
        'ABC üçgeninde kenar orta dikmelerin kesim noktası K; K’den [BC] kenarına inen dikme kenarı iki eş parçaya ayırıyor.',
      svg: `
          <path class="ln" d="M230.1,32.8 L50,290 L350,290 Z"/>
          <path class="ln" d="M230.1,32.8 L200,203.4"/>
          <path class="ln" d="M50,290 L200,203.4"/>
          <path class="ln" d="M350,290 L200,203.4"/>
          <path class="ln" d="M200,203.4 L200,290"/>
          <path class="ln" d="M212,290 L212,278 L200,278"/>

          <line class="tick" x1="209.1" y1="117.1" x2="221" y2="119.1"/>
          <line class="tick" x1="128" y1="251.9" x2="122" y2="241.5"/>
          <line class="tick" x1="278" y1="241.5" x2="272" y2="251.9"/>

          <line class="tick" x1="121" y1="284" x2="121" y2="296"/>
          <line class="tick" x1="129" y1="284" x2="129" y2="296"/>
          <line class="tick" x1="271" y1="284" x2="271" y2="296"/>
          <line class="tick" x1="279" y1="284" x2="279" y2="296"/>

          <path class="arc" d="M211.3,139.4 A65,65 0 0 0 143.7,235.9"/>
          <text class="val" x="168.6" y="186.4" text-anchor="middle">130°</text>

          <path class="arc" d="M329.7,246.5 A48,48 0 0 0 302,290"/>

          <circle class="pt" cx="230.1" cy="32.8" r="3.2"/>
          <circle class="pt" cx="50" cy="290" r="3.2"/>
          <circle class="pt" cx="350" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="203.4" r="3.2"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>

          <text x="230.1" y="20.8" text-anchor="middle">A</text>
          <text x="42" y="308" text-anchor="end">B</text>
          <text x="358" y="308">C</text>
          <text x="211" y="199">K</text>
        `,
    },
    given: ['ABC bir üçgen', 'K, kenar orta dikmelerin kesim noktasıdır', 'm(AKB) = 130°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) kaç derecedir?',
    choices: [
      { key: 'A', text: '65' },
      { key: 'B', text: '70' },
      { key: 'C', text: '75' },
      { key: 'D', text: '80' },
      { key: 'E', text: '85' },
    ],
    answer: 'A',
    hint: 'Kenar orta dikmelerin kesim noktası çevrel çemberin merkezidir.',
    solution: [
      {
        title: 'K çevrel çemberin merkezidir',
        detail:
          'Bir üçgenin kenar orta dikmeleri çevrel çemberin merkezinde kesişir. Orta dikme üzerindeki noktalar kenarın uç noktalarına eşit uzaklıkta olduğundan |KA| = |KB| = |KC| olur; yani A, B ve C noktaları K merkezli çember üzerindedir.',
      },
      {
        title: 'Merkez açı ile çevre açıyı eşleştir',
        detail:
          'm(AKB) = 130°, AB yayını gören merkez açıdır. m(ACB) ise aynı yayı gören çevre açıdır.',
      },
      {
        title: 'Sonuç',
        detail: 'Çevre açı merkez açının yarısıdır: m(ACB) = 130 / 2 = 65° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'triangles-18',
    topic: 'Çevrel çemberde merkez açı',
    figure: {
      viewBox: '0 94 400 224',
      caption: 'Şekil 18',
      label:
        'ABC üçgeni ve çevrel çemberinin merkezi O; O üç köşeye birleştirilmiş, [OA], [OB] ve [OC] eşit işaretlenmiş.',
      svg: `
          <path class="ln" d="M254.1,127.1 L60,290 L330,290 Z"/>
          <path class="ln" d="M254.1,127.1 L195,253.8"/>
          <path class="ln" d="M60,290 L195,253.8"/>
          <path class="ln" d="M330,290 L195,253.8"/>

          <line class="tick" x1="219.1" y1="187.9" x2="230" y2="193"/>
          <line class="tick" x1="129.1" y1="277.7" x2="125.9" y2="266.1"/>
          <line class="tick" x1="264.1" y1="266.1" x2="260.9" y2="277.7"/>

          <path class="arc" d="M215.8,159.2 A50,50 0 0 0 233,172.4"/>
          <text class="val" x="196.3" y="207.5" text-anchor="middle">25°</text>

          <path class="arc" d="M275,290 A55,55 0 0 1 276.9,275.8"/>
          <text class="val" x="220.9" y="280.6" text-anchor="middle">15°</text>

          <path class="arc" d="M211.1,219.4 A38,38 0 0 1 231.7,263.6"/>
          <text class="val" x="244.9" y="235.6" text-anchor="middle">α</text>

          <circle class="pt" cx="254.1" cy="127.1" r="3.2"/>
          <circle class="pt" cx="60" cy="290" r="3.2"/>
          <circle class="pt" cx="330" cy="290" r="3.2"/>
          <circle class="pt" cx="195" cy="253.8" r="3.2"/>

          <text x="254.1" y="115.1" text-anchor="middle">A</text>
          <text x="52" y="308" text-anchor="end">B</text>
          <text x="338" y="308">C</text>
          <text x="185" y="243.8" text-anchor="end">O</text>
        `,
    },
    given: ['ABC bir üçgen', 'O, çevrel çemberin merkezidir', 'm(BAO) = 25°', 'm(BCO) = 15°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AOC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '65' },
      { key: 'B', text: '70' },
      { key: 'C', text: '75' },
      { key: 'D', text: '80' },
      { key: 'E', text: '85' },
    ],
    answer: 'D',
    hint: 'ABO ve CBO ikizkenar üçgenlerinden B açısını bul; α aynı yayı gören merkez açıdır.',
    solution: [
      {
        title: 'İkizkenar üçgenleri gör',
        detail:
          '|OA| = |OB| = |OC| yarıçap olduğundan ABO üçgeninde m(ABO) = m(BAO) = 25°, CBO üçgeninde m(CBO) = m(BCO) = 15° olur.',
      },
      {
        title: 'B açısını bul',
        detail: '[BO], ABC açısının içinden geçtiğinden m(ABC) = m(ABO) + m(CBO) = 25 + 15 = 40°.',
      },
      {
        title: 'Sonuç',
        detail:
          'm(AOC) merkez açısı ile m(ABC) çevre açısı aynı AC yayını görür. Merkez açı çevre açının iki katı olduğundan α = 2 · 40 = 80° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 19
  {
    id: 'triangles-19',
    topic: 'Üçgende açı bağıntısı',
    figure: {
      viewBox: '0 174 400 145',
      caption: 'Şekil 19',
      label:
        'ABC üçgeni ve [BC] üzerindeki D noktası; A köşesindeki BAD açısı ile C köşesindeki açı eş işaretlenmiş.',
      svg: `
          <path class="ln" d="M194.5,206 L60,290 L340,290 Z"/>
          <path class="ln" d="M194.5,206 L149.8,290"/>

          <path class="arc" d="M160.6,227.2 A40,40 0 0 0 175.7,241.3"/>
          <line class="tick" x1="171.3" y1="230.9" x2="163.1" y2="239.6"/>
          <path class="arc" d="M301,267.5 A45,45 0 0 0 295,290"/>
          <line class="tick" x1="302.3" y1="279.9" x2="290.7" y2="276.8"/>

          <path class="arc" d="M165.8,260 A34,34 0 0 1 183.8,290"/>
          <text class="val" x="201.2" y="264.1" text-anchor="middle">α</text>

          <circle class="pt" cx="194.5" cy="206" r="3.2"/>
          <circle class="pt" cx="60" cy="290" r="3.2"/>
          <circle class="pt" cx="340" cy="290" r="3.2"/>
          <circle class="pt" cx="149.8" cy="290" r="3.2"/>

          <text x="194.5" y="194" text-anchor="middle">A</text>
          <text x="52" y="308" text-anchor="end">B</text>
          <text x="348" y="308">C</text>
          <text x="149.8" y="310" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC bir üçgen', 'D ∈ [BC]', 'm(BAD) = m(ACB)', 'm(BAC) = 118°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '53' },
      { key: 'C', text: '56' },
      { key: 'D', text: '59' },
      { key: 'E', text: '62' },
    ],
    answer: 'E',
    hint: 'Eşit açılara c dersen ADC üçgeninde c’ler sadeleşir.',
    solution: [
      {
        title: 'Eşit açıları adlandır',
        detail: 'm(BAD) = m(ACB) = c diyelim.',
      },
      {
        title: 'DAC açısını yaz',
        detail: '[AD], BAC açısının içinden geçtiğinden m(DAC) = m(BAC) − m(BAD) = 118 − c olur.',
      },
      {
        title: 'ADC üçgeninde iç açılar',
        detail:
          'D noktası [BC] üzerinde olduğundan m(ACD) = m(ACB) = c’dir. ADC üçgeninde α + (118 − c) + c = 180 yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'c’ler sadeleşir: α = 180 − 118 = 62° bulunur. Sonuç, eşit açıların değerinden bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 20
  {
    id: 'triangles-20',
    topic: 'İkizkenar üçgen',
    figure: {
      viewBox: '0 112 400 206',
      caption: 'Şekil 20',
      label:
        'ABC ikizkenar üçgeni ve [BC] üzerindeki D noktası; |AB|, |AC| ve |DC| eşit işaretlenmiş.',
      svg: `
          <path class="ln" d="M200,145.6 L70,290 L330,290 Z"/>
          <path class="ln" d="M200,145.6 L135.7,290"/>

          <line class="tick" x1="139.5" y1="221.8" x2="130.5" y2="213.8"/>
          <line class="tick" x1="269.5" y1="213.8" x2="260.5" y2="221.8"/>
          <line class="tick" x1="232.8" y1="284" x2="232.8" y2="296"/>

          <path class="arc" d="M181.7,186.7 A45,45 0 0 0 230.1,179"/>
          <text class="val" x="210.9" y="219.7" text-anchor="middle">66°</text>

          <path class="arc" d="M154.5,196.1 A68,68 0 0 0 172.3,207.7"/>
          <text class="val" x="153.7" y="221.9" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="145.6" r="3.2"/>
          <circle class="pt" cx="70" cy="290" r="3.2"/>
          <circle class="pt" cx="330" cy="290" r="3.2"/>
          <circle class="pt" cx="135.7" cy="290" r="3.2"/>

          <text x="200" y="133.6" text-anchor="middle">A</text>
          <text x="62" y="308" text-anchor="end">B</text>
          <text x="338" y="308">C</text>
          <text x="135.7" y="310" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC bir üçgen', 'D ∈ [BC]', '|AB| = |AC| = |DC|', 'm(DAC) = 66°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '18' },
      { key: 'C', text: '21' },
      { key: 'D', text: '24' },
      { key: 'E', text: '27' },
    ],
    answer: 'B',
    hint: '|AC| = |DC| olduğundan ADC üçgeni ikizkenardır; tabanı [AD]’dir.',
    solution: [
      {
        title: 'ADC ikizkenar üçgeni',
        detail:
          '|DC| = |AC| olduğundan ADC üçgeninde [AD] tabanına ait açılar eşittir: m(ADC) = m(DAC) = 66°.',
      },
      {
        title: 'C açısını bul',
        detail:
          'ADC üçgeninde m(ACD) = 180 − 66 − 66 = 48°. D noktası [BC] üzerinde olduğundan m(ACB) = 48° olur.',
      },
      {
        title: 'Tepe açısını bul',
        detail:
          '|AB| = |AC| olduğundan m(ABC) = m(ACB) = 48° ve m(BAC) = 180 − 2 · 48 = 84° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[AD], BAC açısının içinden geçtiğinden α = m(BAC) − m(DAC) = 84 − 66 = 18° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'triangles-21',
    topic: 'İkizkenar üçgenlerde açı avı',
    figure: {
      viewBox: '0 -10 400 328',
      caption: 'Şekil 21',
      label:
        'İkizkenar ABC üçgeni ve [AB] üzerindeki D noktası C ile birleştirilmiş; |AD| ile |DC| eşit işaretlenmiş.',
      svg: `
          <path class="ln" d="M200,20.5 L80,290 L320,290 Z"/>
          <path class="ln" d="M110.3,221.9 L320,290"/>

          <line class="tick" x1="162.3" y1="120" x2="151.3" y2="115.1"/>
          <line class="tick" x1="159" y1="127.3" x2="148" y2="122.4"/>
          <line class="tick" x1="171.3" y1="235.4" x2="167.6" y2="246.8"/>
          <line class="tick" x1="178.9" y1="237.9" x2="175.2" y2="249.3"/>

          <path class="arc" d="M277.2,276.1 A45,45 0 0 0 275,290"/>
          <text class="val" x="226.2" y="280.1" text-anchor="middle">18°</text>

          <path class="arc" d="M96.5,253 A34,34 0 0 0 142.6,232.4"/>
          <text class="val" x="132.7" y="277.1" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="20.5" r="3.2"/>
          <circle class="pt" cx="80" cy="290" r="3.2"/>
          <circle class="pt" cx="320" cy="290" r="3.2"/>
          <circle class="pt" cx="110.3" cy="221.9" r="3.2"/>

          <text x="200" y="8.5" text-anchor="middle">A</text>
          <text x="72" y="308" text-anchor="end">B</text>
          <text x="328" y="308">C</text>
          <text x="99.3" y="216.9" text-anchor="end">D</text>
        `,
    },
    given: ['|AB| = |AC|', 'D ∈ [AB]', '|AD| = |DC|', 'm(BCD) = 18°'],
    stem: [],
    ask: 'Yukarıdaki şekilde ABC ve ADC birer ikizkenar üçgen olduğuna göre, m(BDC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '84' },
      { key: 'B', text: '88' },
      { key: 'C', text: '92' },
      { key: 'D', text: '96' },
      { key: 'E', text: '100' },
    ],
    answer: 'D',
    hint: 'Taban açısına β de; |AD| = |DC| eşitliği β için bir denklem verir.',
    solution: [
      {
        title: 'Taban açılarını adlandır',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = β ve tepe açısı m(BAC) = 180 − 2β olur.',
      },
      {
        title: 'DCA açısını yaz',
        detail:
          'D noktası [AB] üzerinde olduğundan [CD], ACB açısının içinden geçer: m(DCA) = m(ACB) − m(BCD) = β − 18.',
      },
      {
        title: 'ADC ikizkenar üçgeni',
        detail:
          '|AD| = |DC| olduğundan m(DAC) = m(DCA)’dır. m(DAC) = m(BAC) = 180 − 2β olduğundan 180 − 2β = β − 18 → 3β = 198 → β = 66° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'BDC üçgeninde m(DBC) = m(ABC) = 66° ve m(BCD) = 18° olduğundan α = 180 − 66 − 18 = 96° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 22
  {
    id: 'triangles-22',
    topic: 'İkizkenar üçgen ve doğrusal noktalar',
    figure: {
      viewBox: '0 35 400 265',
      caption: 'Şekil 22',
      label:
        'İkizkenar ABC üçgeni ve sağdaki D noktası; A’ya olan üç uzaklık eşit, [BD] köşegeni [AC] kenarını E noktasında kesiyor.',
      svg: `
          <path class="ln" d="M150,70 L95.7,272.8 L204.3,272.8 Z"/>
          <path class="ln" d="M150,70 L340.3,158.7 L204.3,272.8"/>
          <path class="ln" d="M95.7,272.8 L340.3,158.7"/>

          <line class="tick" x1="131.4" y1="162.8" x2="119.8" y2="159.7"/>
          <line class="tick" x1="238.2" y1="104.5" x2="233.1" y2="115.4"/>
          <line class="tick" x1="184.3" y1="175" x2="172.7" y2="178.1"/>
          <line class="tick" x1="186.4" y1="182.8" x2="174.8" y2="185.9"/>
          <line class="tick" x1="260.1" y1="189.5" x2="265.2" y2="200.4"/>
          <line class="tick" x1="267.3" y1="186.1" x2="272.4" y2="197"/>

          <path class="arc" d="M137.6,116.4 A48,48 0 0 0 162.4,116.4"/>
          <text class="val" x="150" y="155" text-anchor="middle">30°</text>

          <path class="arc" d="M124.1,166.6 A100,100 0 0 0 240.6,112.2"/>
          <text class="val" x="202.8" y="188.3" text-anchor="middle">x</text>

          <circle class="pt" cx="150" cy="70" r="3.2"/>
          <circle class="pt" cx="95.7" cy="272.8" r="3.2"/>
          <circle class="pt" cx="204.3" cy="272.8" r="3.2"/>
          <circle class="pt" cx="340.3" cy="158.7" r="3.2"/>
          <circle class="pt" cx="192.2" cy="227.8" r="3.2"/>

          <text x="150" y="58" text-anchor="middle">A</text>
          <text x="87.7" y="290.8" text-anchor="end">B</text>
          <text x="204.3" y="292.8" text-anchor="middle">C</text>
          <text x="349.3" y="152.7">D</text>
          <text x="180.6" y="214" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABC bir ikizkenar üçgen',
      '|AB| = |AC| = |AD|',
      'E ∈ [AC]',
      '|AE| = |ED|',
      'B, E, D doğrusal',
      'm(BAC) = 30°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '85' },
      { key: 'C', text: '90' },
      { key: 'D', text: '95' },
      { key: 'E', text: '100' },
    ],
    answer: 'A',
    hint: '|AB| = |AD| ve |AE| = |ED| iki ikizkenar üçgen verir; ikisinin de taban açısı 90 − x/2 çıkar.',
    solution: [
      {
        title: 'ABD ikizkenar üçgeni',
        detail:
          '|AB| = |AD| olduğundan ABD üçgeninde taban açıları eşittir: m(ABD) = m(ADB) = (180 − x) / 2 = 90 − x/2.',
      },
      {
        title: 'AED ikizkenar üçgeni',
        detail:
          '|AE| = |ED| olduğundan m(EAD) = m(EDA)’dır. E noktası [BD] üzerinde olduğundan m(EDA) = m(BDA) = 90 − x/2; buradan m(EAD) = 90 − x/2 olur.',
      },
      {
        title: 'EAD açısını x cinsinden yaz',
        detail:
          'E noktası [AC] üzerinde olduğundan m(EAD) = m(CAD) = m(BAD) − m(BAC) = x − 30 olur.',
      },
      {
        title: 'Denklemi kur',
        detail: 'x − 30 = 90 − x/2 → 1,5x = 120.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 80° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  {
    id: 'triangles-23',
    topic: 'Dik açı ve doğrusal açı',
    figure: {
      viewBox: '0 76 400 190',
      caption: 'Şekil 23',
      label:
        'K ve L uçlu doğru üzerinde A ile B noktaları; C noktası doğrunun altında ve [CA], doğruya dik.',
      svg: `
          <defs>
            <marker id="arrow-t23" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="54.8" y1="85.6" x2="344.9" y2="220.9" marker-start="url(#arrow-t23)" marker-end="url(#arrow-t23)"/>
          <path class="ln" d="M105.6,225.2 L150,130"/>
          <path class="ln" d="M105.6,225.2 L285.9,193.4"/>
          <path class="ln" d="M144.5,141.8 L156.3,147.3 L161.8,135.5"/>

          <path class="arc" d="M246.5,200.3 A40,40 0 0 0 322.2,210.3"/>
          <text class="val" x="278.1" y="257.9" text-anchor="middle">145°</text>

          <path class="arc" d="M121.7,190.8 A38,38 0 0 1 143,218.6"/>
          <text class="val" x="153.2" y="193.7" text-anchor="middle">α</text>

          <circle class="pt" cx="68.4" cy="92" r="3.2"/>
          <circle class="pt" cx="150" cy="130" r="3.2"/>
          <circle class="pt" cx="285.9" cy="193.4" r="3.2"/>
          <circle class="pt" cx="331.3" cy="214.5" r="3.2"/>
          <circle class="pt" cx="105.6" cy="225.2" r="3.2"/>

          <text x="59.4" y="111" text-anchor="end">K</text>
          <text x="158" y="124">A</text>
          <text x="293.9" y="188.4">B</text>
          <text x="339.3" y="209.5">L</text>
          <text x="97.6" y="241.2" text-anchor="end">C</text>
        `,
    },
    given: ['K, A, B, L doğrusal', '[CA] ⊥ KL', 'm(CBL) = 145°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'C',
    hint: 'B köşesindeki doğrusal açıdan m(CBA)’yı bul; ABC bir dik üçgendir.',
    solution: [
      {
        title: 'Doğrusal açıyı kullan',
        detail:
          'K, A, B, L doğrusal olduğundan m(CBA) ile m(CBL) bütünler açılardır: m(CBA) = 180 − 145 = 35°.',
      },
      {
        title: 'Dik üçgeni gör',
        detail:
          '[CA] ⊥ KL ve A noktası bu doğru üzerinde olduğundan m(CAB) = 90°; yani ABC bir dik üçgendir.',
      },
      {
        title: 'Sonuç',
        detail: 'Dik üçgende dar açılar birbirini 90°’ye tamamlar: α = 90 − 35 = 55° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24
  {
    id: 'triangles-24',
    topic: 'Üçgende yükseklikler',
    figure: {
      viewBox: '0 62 400 265',
      caption: 'Şekil 24',
      label:
        'ABC üçgeninde A köşesinden [BC] kenarına inen [AE] yüksekliği ile C köşesinden [AB] kenarına inen [CD] yüksekliği F noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M274.4,94.9 L30,300 L370,300 Z"/>
          <path class="ln" d="M274.4,94.9 L274.4,300"/>
          <path class="ln" d="M370,300 L229.6,132.5"/>
          <path class="ln" d="M287.4,300 L287.4,287 L274.4,287"/>
          <path class="ln" d="M238.8,124.8 L246.5,134 L237.3,141.7"/>

          <path class="arc" d="M274.4,139.9 A45,45 0 0 0 293.4,135.7"/>
          <text class="val" x="290.5" y="178.3" text-anchor="middle">25°</text>

          <path class="arc" d="M344.7,245.6 A60,60 0 0 0 331.5,254"/>
          <text class="val" x="358.5" y="233.2" text-anchor="middle">15°</text>

          <path class="arc" d="M72.1,264.6 A55,55 0 0 1 85,300"/>
          <text class="val" x="109.9" y="275.9" text-anchor="middle">α</text>

          <circle class="pt" cx="274.4" cy="94.9" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="229.6" cy="132.5" r="3.2"/>
          <circle class="pt" cx="274.4" cy="300" r="3.2"/>
          <circle class="pt" cx="274.4" cy="185.9" r="3.2"/>

          <text x="274.4" y="82.9" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="221.6" y="127.5" text-anchor="end">D</text>
          <text x="274.4" y="320" text-anchor="middle">E</text>
          <text x="260" y="196" text-anchor="end">F</text>
        `,
    },
    given: ['ABC bir üçgen', '[AE] ⊥ [BC]', '[CD] ⊥ [AB]', 'm(EAC) = 25°', 'm(ACD) = 15°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '25' },
      { key: 'B', text: '30' },
      { key: 'C', text: '35' },
      { key: 'D', text: '40' },
      { key: 'E', text: '45' },
    ],
    answer: 'D',
    hint: 'Önce AEC dik üçgeninden m(ACB)’yi bul.',
    solution: [
      {
        title: 'AEC dik üçgeni',
        detail:
          '[AE] ⊥ [BC] olduğundan m(AEC) = 90°. AEC üçgeninde m(ACE) = 90 − 25 = 65°; yani m(ACB) = 65° olur.',
      },
      {
        title: 'DCB açısını bul',
        detail:
          '[CD], ACB açısının içinden geçtiğinden m(DCB) = m(ACB) − m(ACD) = 65 − 15 = 50° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[CD] ⊥ [AB] olduğundan BDC üçgeninde m(BDC) = 90°’dir: α = 180 − 90 − 50 = 40° bulunur.',
      },
    ],
  },
];

/** Looks questions up by id so the modules below read as a running order. */
function pick(...ids: readonly string[]): Question[] {
  return ids.map((id) => {
    const question = QUESTIONS.find((candidate) => candidate.id === id);
    if (!question) throw new Error(`Unknown question id: ${id}`);
    return question;
  });
}

export const UNIT_2_TRIANGLES: Unit = {
  id: 'triangles',
  order: 2,
  title: 'Üçgenler',
  subtitle: 'Ünite 2',
  description:
    'Üçgende iç ve dış açılar, ikizkenar üçgenin taban açıları ve paralel doğrularla birlikte kurulan açı bağıntıları.',
  modules: [
    {
      id: 'triangles-m1',
      order: 1,
      title: 'Üçgende açılar — ikizkenar üçgen',
      summary:
        'İkizkenar üçgende taban açıları, dış açı bağıntısı ve paralel doğrularla birleşen açı avı soruları.',
      questions: pick(
        'triangles-1',
        'triangles-2',
        'triangles-3',
        'triangles-4',
        'triangles-5',
        'triangles-6',
      ),
    },
    {
      id: 'triangles-m2',
      order: 2,
      title: 'İkizkenar üçgen ve açıortay',
      summary:
        'Yükseklik ile kenarortayın çakışması, eşkenar üçgen, iki açıortayın oluşturduğu 90 + C/2 açısı ve orta dikmeyle kurulan ikizkenar üçgenler.',
      questions: pick(
        'triangles-7',
        'triangles-8',
        'triangles-9',
        'triangles-10',
        'triangles-11',
        'triangles-12',
      ),
    },
    {
      id: 'triangles-m3',
      order: 3,
      title: 'Çevrel çember ve merkezler',
      summary:
        'Dik üçgende hipotenüse ait kenarortay, çevrel çemberin merkezi, merkez açı — çevre açı ilişkisi ve dış açıortayların kesim noktası.',
      questions: pick(
        'triangles-13',
        'triangles-14',
        'triangles-15',
        'triangles-16',
        'triangles-17',
        'triangles-18',
      ),
    },
    {
      id: 'triangles-m4',
      order: 4,
      title: 'Üçgende açılar — Test 1',
      summary:
        'Bölümü kapatan karma test: açı avı, ikizkenar üçgen kurulumları, doğrusal açı ve yüksekliklerle çözülen sorular.',
      questions: pick(
        'triangles-19',
        'triangles-20',
        'triangles-21',
        'triangles-22',
        'triangles-23',
        'triangles-24',
      ),
    },
  ],
};
