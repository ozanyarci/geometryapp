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

  // ---------------------------------------------------------------- 25
  {
    id: 'triangles-25',
    topic: 'İç açıortayların oluşturduğu açı',
    figure: {
      viewBox: '0 36 400 292',
      caption: 'Şekil 25',
      label:
        'ABC üçgeninde B ve C köşelerinin iç açıortayları üçgenin içindeki D noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M144.7,67.3 L60,300 L340,300 Z"/>
          <path class="ln" d="M60,300 L171.9,221.6 L340,300"/>

          <path class="arc" d="M133.1,99.2 A34,34 0 0 0 166.6,93.3"/>
          <text class="val" x="154.3" y="126.4" text-anchor="middle">2x</text>

          <path class="arc" d="M150.6,236.5 A26,26 0 0 0 195.5,232.6"/>
          <text class="val" x="175.9" y="272.5" text-anchor="middle">4x</text>

          <path class="arc" d="M77.8,251.1 A52,52 0 0 1 102.6,270.2"/>
          <line class="tick" x1="88" y1="263.5" x2="95.3" y2="254"/>
          <path class="arc" d="M102.6,270.2 A52,52 0 0 1 112,300"/>
          <line class="tick" x1="103.9" y1="286.2" x2="115.3" y2="282.6"/>

          <path class="arc" d="M288,300 A52,52 0 0 1 292.9,278"/>
          <line class="tick" x1="294.7" y1="292.1" x2="282.9" y2="290.1"/>
          <line class="tick" x1="295.6" y1="288" x2="284" y2="284.8"/>
          <path class="arc" d="M292.9,278 A52,52 0 0 1 306.6,260.2"/>
          <line class="tick" x1="302.3" y1="273.7" x2="292.4" y2="266.9"/>
          <line class="tick" x1="304.8" y1="270.3" x2="295.7" y2="262.6"/>

          <circle class="pt" cx="144.7" cy="67.3" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="171.9" cy="221.6" r="3.2"/>

          <text x="144.7" y="55.3" text-anchor="middle">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="162.9" y="217.6" text-anchor="end">D</text>
        `,
    },
    given: ['ABC bir üçgen', '[BD] ve [CD] açıortay', 'm(BAC) = 2x', 'm(BDC) = 4x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '24' },
      { key: 'C', text: '30' },
      { key: 'D', text: '36' },
      { key: 'E', text: '40' },
    ],
    answer: 'C',
    hint: 'İki iç açıortayın kesiştiği noktadaki açı, 90°’yi tepe açısının yarısı kadar aşar.',
    solution: [
      {
        title: 'Açıortayları adlandır',
        detail:
          '[BD] açıortay olduğundan m(DBC) = m(ABC)/2, [CD] açıortay olduğundan m(DCB) = m(ACB)/2 olur.',
      },
      {
        title: 'BDC üçgenini kur',
        detail: 'BDC üçgeninde iç açılar toplamından m(BDC) = 180 − (m(ABC) + m(ACB))/2 yazılır.',
      },
      {
        title: 'Kuralı elde et',
        detail:
          'ABC üçgeninde m(ABC) + m(ACB) = 180 − m(BAC) olduğundan m(BDC) = 180 − (180 − m(BAC))/2 = 90 + m(BAC)/2 bulunur.',
      },
      {
        title: 'Denklemi yaz',
        detail: 'Verilenler yerine konursa 4x = 90 + (2x)/2 = 90 + x olur.',
      },
      {
        title: 'Sonuç',
        detail: '3x = 90 → x = 30° bulunur.',
      },
      {
        title: 'Kontrol',
        detail: 'm(BAC) = 60° ve m(BDC) = 120° olur; gerçekten 120 = 90 + 60/2’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26
  {
    id: 'triangles-26',
    topic: 'Dış açıortayların oluşturduğu açı',
    figure: {
      viewBox: '0 14 400 318',
      caption: 'Şekil 26',
      label:
        'ABC üçgeninde [AB] ve [AC] kenarları B ile C’nin ötesine uzatılmış; B ve C köşelerinin dış açıortayları üçgenin altındaki D noktasında kesişiyor.',
      svg: `
          <defs>
            <marker id="arrow-t26" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M190,46.1 L128,120 L278,120 Z"/>
          <line class="ln" x1="128" y1="120" x2="88.1" y2="167.5" marker-end="url(#arrow-t26)"/>
          <line class="ln" x1="278" y1="120" x2="325.5" y2="159.9" marker-end="url(#arrow-t26)"/>
          <path class="ln" d="M128,120 L212.2,300.7 L278,120"/>

          <path class="arc" d="M169.4,70.7 A32,32 0 0 0 214.5,66.7"/>
          <text class="val" x="194.5" y="102.9" text-anchor="middle">2x</text>

          <path class="arc" d="M197.9,269.8 A34,34 0 0 1 223.9,268.7"/>
          <text class="val" x="210" y="253.7" text-anchor="middle">x</text>

          <path class="arc" d="M158,120 A30,30 0 0 1 140.7,147.2"/>
          <line class="tick" x1="148.2" y1="132.9" x2="158.4" y2="139.3"/>
          <path class="arc" d="M140.7,147.2 A30,30 0 0 1 108.7,143"/>
          <line class="tick" x1="124.9" y1="143.8" x2="123.3" y2="155.7"/>

          <path class="arc" d="M301,139.3 A30,30 0 0 1 267.7,148.2"/>
          <line class="tick" x1="286" y1="142.6" x2="290.1" y2="153.9"/>
          <line class="tick" x1="282.3" y1="143.6" x2="284.5" y2="155.4"/>
          <path class="arc" d="M267.7,148.2 A30,30 0 0 1 248,120"/>
          <line class="tick" x1="259.5" y1="135.3" x2="250.3" y2="142.9"/>
          <line class="tick" x1="257.3" y1="132.1" x2="247" y2="138.2"/>

          <circle class="pt" cx="190" cy="46.1" r="3.2"/>
          <circle class="pt" cx="128" cy="120" r="3.2"/>
          <circle class="pt" cx="278" cy="120" r="3.2"/>
          <circle class="pt" cx="212.2" cy="300.7" r="3.2"/>

          <text x="190" y="34.1" text-anchor="middle">A</text>
          <text x="118" y="114" text-anchor="end">B</text>
          <text x="288" y="114">C</text>
          <text x="212.2" y="320.7" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC bir üçgen', '[BD] ve [CD] dış açıortay', 'm(BAC) = 2x', 'm(BDC) = x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '36' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '54' },
    ],
    answer: 'D',
    hint: 'İki dış açıortayın kesiştiği noktadaki açı, 90°’den tepe açısının yarısı kadar küçüktür.',
    solution: [
      {
        title: 'Dış açıları adlandır',
        detail:
          'B köşesindeki dış açı 180 − m(ABC), C köşesindeki dış açı 180 − m(ACB)’dir. Dış açıortaylar bu açıları ikiye böldüğünden m(DBC) = 90 − m(ABC)/2 ve m(DCB) = 90 − m(ACB)/2 olur.',
      },
      {
        title: 'BDC üçgenini kur',
        detail:
          'BDC üçgeninde m(BDC) = 180 − (90 − m(ABC)/2) − (90 − m(ACB)/2) = (m(ABC) + m(ACB))/2 yazılır.',
      },
      {
        title: 'Kuralı elde et',
        detail:
          'm(ABC) + m(ACB) = 180 − m(BAC) olduğundan m(BDC) = (180 − m(BAC))/2 = 90 − m(BAC)/2 bulunur.',
      },
      {
        title: 'Denklemi yaz',
        detail: 'Verilenler yerine konursa x = 90 − (2x)/2 = 90 − x olur.',
      },
      {
        title: 'Sonuç',
        detail: '2x = 90 → x = 45° bulunur.',
      },
      {
        title: 'Kontrol',
        detail: 'm(BAC) = 90° ve m(BDC) = 45° olur; gerçekten 45 = 90 − 90/2’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27
  {
    id: 'triangles-27',
    topic: 'Üçgende dış açı',
    figure: {
      viewBox: '0 124 400 198',
      caption: 'Şekil 27',
      label:
        'ABC üçgeninde [BA] kenarı A’nın ötesine uzatılarak D yönünde bir ışın çizilmiş; A köşesindeki dış açı işaretlenmiş.',
      svg: `
          <defs>
            <marker id="arrow-t27" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M255.2,183.1 L70,290 L330,290 Z"/>
          <line class="ln" x1="255.2" y1="183.1" x2="315.8" y2="148.1" marker-end="url(#arrow-t27)"/>

          <path class="arc" d="M286.3,165.1 A36,36 0 0 1 275.8,212.6"/>
          <text class="val" x="315.7" y="201.5" text-anchor="middle">5x + 10°</text>

          <path class="arc" d="M108.1,268 A44,44 0 0 1 114,290"/>
          <text class="val" x="131.8" y="278.4" text-anchor="middle">2x</text>

          <path class="arc" d="M290,290 A40,40 0 0 1 307.1,257.2"/>
          <text class="val" x="275" y="266.4" text-anchor="middle">x + 40°</text>

          <circle class="pt" cx="255.2" cy="183.1" r="3.2"/>
          <circle class="pt" cx="70" cy="290" r="3.2"/>
          <circle class="pt" cx="330" cy="290" r="3.2"/>
          <circle class="pt" cx="315.8" cy="148.1" r="3.2"/>

          <text x="245.2" y="178.1" text-anchor="end">A</text>
          <text x="62" y="308" text-anchor="end">B</text>
          <text x="338" y="308">C</text>
          <text x="324.8" y="143.1">D</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'B, A, D doğrusal',
      'm(DAC) = 5x + 10°',
      'm(ABC) = 2x',
      'm(ACB) = x + 40°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '15' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'C',
    hint: 'Bir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir.',
    solution: [
      {
        title: 'Dış açıyı tanı',
        detail: 'B, A, D doğrusal olduğundan DAC açısı, ABC üçgeninin A köşesindeki dış açısıdır.',
      },
      {
        title: 'Dış açı bağıntısını yaz',
        detail:
          'Bir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir: m(DAC) = m(ABC) + m(ACB).',
      },
      {
        title: 'Denklemi kur',
        detail: '5x + 10 = 2x + (x + 40) → 5x + 10 = 3x + 40.',
      },
      {
        title: 'Sonuç',
        detail: '2x = 30 → x = 15° bulunur.',
      },
      {
        title: 'Kontrol',
        detail:
          'm(ABC) = 30°, m(ACB) = 55° ve m(DAC) = 85° olur; 30 + 55 = 85 olduğundan sonuç doğrudur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 28
  {
    id: 'triangles-28',
    topic: 'İkizkenar üçgende açıortay',
    figure: {
      viewBox: '0 22 400 304',
      caption: 'Şekil 28',
      label:
        'Tepe noktası A olan ikizkenar ABC üçgeninde B köşesinin açıortayı [AC] kenarını D noktasında kesiyor.',
      svg: `
          <path class="ln" d="M200,52.7 L110,300 L290,300 Z"/>
          <path class="ln" d="M110,300 L253.4,199.6"/>

          <path class="arc" d="M188.4,84.7 A34,34 0 0 0 211.6,84.7"/>
          <text class="val" x="200" y="111.7" text-anchor="middle">x</text>

          <path class="arc" d="M263,225.9 A28,28 0 0 1 230.5,215.6"/>
          <text class="val" x="238.4" y="252.2" text-anchor="middle">75°</text>

          <path class="arc" d="M125.7,256.8 A46,46 0 0 1 147.7,273.6"/>
          <line class="tick" x1="134.4" y1="268.3" x2="141.7" y2="258.7"/>
          <path class="arc" d="M147.7,273.6 A46,46 0 0 1 156,300"/>
          <line class="tick" x1="148.1" y1="288" x2="159.6" y2="284.4"/>

          <circle class="pt" cx="200" cy="52.7" r="3.2"/>
          <circle class="pt" cx="110" cy="300" r="3.2"/>
          <circle class="pt" cx="290" cy="300" r="3.2"/>
          <circle class="pt" cx="253.4" cy="199.6" r="3.2"/>

          <text x="200" y="40.7" text-anchor="middle">A</text>
          <text x="102" y="318" text-anchor="end">B</text>
          <text x="298" y="318">C</text>
          <text x="262.4" y="193.6">D</text>
        `,
    },
    given: ['ABC bir üçgen', '|AB| = |AC|', '[BD] açıortay', 'm(BAC) = x', 'm(BDC) = 75°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '35' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '50' },
    ],
    answer: 'C',
    hint: 'Taban açılarını x cinsinden yazarsan BDC üçgeninde tek bilinmeyenli bir denklem kurulur.',
    solution: [
      {
        title: 'Taban açılarını yaz',
        detail: '|AB| = |AC| olduğundan ABC ikizkenardır: m(ABC) = m(ACB) = (180 − x)/2 olur.',
      },
      {
        title: 'Açıortayı kullan',
        detail: '[BD] açıortay olduğundan m(DBC) = m(ABC)/2 = (180 − x)/4 bulunur.',
      },
      {
        title: 'BDC üçgenini kur',
        detail: 'BDC üçgeninde 75 + (180 − x)/4 + (180 − x)/2 = 180 yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: '3(180 − x)/4 = 105 → 180 − x = 140 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 40° bulunur. Kontrol: m(ABC) = m(ACB) = 70°, m(DBC) = 35° ve 75 + 35 + 70 = 180’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 29
  {
    id: 'triangles-29',
    topic: 'Üçgende dik kesen ve açı avı',
    figure: {
      viewBox: '0 36 400 292',
      caption: 'Şekil 29',
      label:
        'ABC üçgeninin içinde B’den çıkan [BD] ile D’den çıkan [DF] dik kesişiyor; [BD] üzerindeki E ile [DF] üzerindeki F noktası C ile aynı doğru üzerinde.',
      svg: `
          <path class="ln" d="M144.7,67.3 L60,300 L340,300 Z"/>
          <path class="ln" d="M60,300 L186.8,193.6"/>
          <path class="ln" d="M144.7,228.9 L340,300"/>
          <path class="ln" d="M186.8,193.6 L248.1,266.5"/>
          <path class="ln" d="M176.9,201.9 L185.2,211.9 L195.2,203.5"/>

          <path class="arc" d="M133.1,99.2 A34,34 0 0 0 166.6,93.3"/>
          <text class="val" x="154.3" y="126.4" text-anchor="middle">2x</text>

          <path class="arc" d="M76.4,254.9 A48,48 0 0 1 96.8,269.1"/>
          <text class="val" x="101.3" y="246" text-anchor="middle">x</text>

          <path class="arc" d="M218,255.6 A32,32 0 0 1 227.5,242"/>
          <text class="val" x="207.1" y="242.9" text-anchor="middle">x</text>

          <path class="arc" d="M298.7,285 A44,44 0 0 1 311.7,266.3"/>
          <text class="val" x="287.6" y="268.3" text-anchor="middle">x</text>

          <circle class="pt" cx="144.7" cy="67.3" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="186.8" cy="193.6" r="3.2"/>
          <circle class="pt" cx="144.7" cy="228.9" r="3.2"/>
          <circle class="pt" cx="248.1" cy="266.5" r="3.2"/>

          <text x="144.7" y="55.3" text-anchor="middle">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="186.8" y="181.6" text-anchor="middle">D</text>
          <text x="136.7" y="221.9" text-anchor="end">E</text>
          <text x="241.9" y="289.5" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[BD] ⊥ [DF]',
      'E ∈ [BD] ve F ∈ [DF]',
      'E, F, C doğrusal',
      'm(BAC) = 2x',
      'm(ABD) = m(DFE) = m(ACE) = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '24' },
      { key: 'D', text: '30' },
      { key: 'E', text: '36' },
    ],
    answer: 'D',
    hint: 'Önce DEF dik üçgeninde E köşesindeki açıyı bul; onun bütünleri BEC üçgeninin E açısıdır.',
    solution: [
      {
        title: 'DEF dik üçgenini kur',
        detail:
          'E ∈ [BD] ve F ∈ [DF] olduğundan DEF bir üçgendir. [BD] ⊥ [DF] verildiğinden m(EDF) = 90°’dir.',
      },
      {
        title: 'E’deki açıyı bul',
        detail: 'DEF üçgeninde m(DFE) = x olduğundan m(DEF) = 180 − 90 − x = 90 − x bulunur.',
      },
      {
        title: 'Doğrusal açıya geç',
        detail:
          'B, E, D doğrusal olduğundan [EB ile [ED ters ışınlardır; [EF ise [EC ile aynı ışındır. Buradan m(BEC) = 180 − m(DEF) = 90 + x olur.',
      },
      {
        title: 'BEC üçgenini yaz',
        detail:
          'm(EBC) = m(ABC) − x ve m(ECB) = m(ACB) − x olduğundan BEC üçgeninde (m(ABC) − x) + (m(ACB) − x) + (90 + x) = 180 → m(ABC) + m(ACB) = 90 + x elde edilir.',
      },
      {
        title: 'ABC üçgeninin açı toplamını kullan',
        detail: 'm(ABC) + m(ACB) = 180 − m(BAC) = 180 − 2x olduğundan 180 − 2x = 90 + x yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          '3x = 90 → x = 30° bulunur. Kontrol: m(BAC) = 60°, m(ABC) + m(ACB) = 120° ve m(BEC) = 120°’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 30
  {
    id: 'triangles-30',
    topic: 'Üçgende yüksekliklerin kesişmesi',
    figure: {
      viewBox: '0 72 400 256',
      caption: 'Şekil 30',
      label:
        'ABC üçgeninde A köşesinden [BC] kenarına inen [AH] yüksekliği ile B köşesinden [AC] kenarına inen [BK] yüksekliği P noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M35,300 L365,300 L200,103.4 Z"/>
          <path class="ln" d="M35,300 L228.7,137.5"/>
          <path class="ln" d="M365,300 L171.3,137.5"/>
          <path class="ln" d="M237,147.5 L227,155.8 L218.7,145.9"/>
          <path class="ln" d="M163,147.5 L173,155.8 L181.3,145.9"/>

          <path class="arc" d="M188.4,117.1 A18,18 0 0 0 211.6,117.1"/>
          <text class="val" x="200" y="141.4" text-anchor="middle">4x</text>

          <path class="arc" d="M175.5,182.1 A32,32 0 0 0 224.5,182.1"/>
          <text class="val" x="200" y="220.5" text-anchor="middle">5x</text>

          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="365" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="103.4" r="3.2"/>
          <circle class="pt" cx="228.7" cy="137.5" r="3.2"/>
          <circle class="pt" cx="171.3" cy="137.5" r="3.2"/>
          <circle class="pt" cx="200" cy="161.5" r="3.2"/>

          <text x="27" y="318" text-anchor="end">A</text>
          <text x="373" y="318">B</text>
          <text x="200" y="91.4" text-anchor="middle">C</text>
          <text x="237.7" y="132.5">H</text>
          <text x="162.3" y="132.5" text-anchor="end">K</text>
          <text x="176" y="171.5" text-anchor="end">P</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve [BK] ⊥ [AC]',
      '[AH] ∩ [BK] = {P}',
      'm(APB) = 5x',
      'm(ACB) = 4x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '18' },
      { key: 'C', text: '20' },
      { key: 'D', text: '24' },
      { key: 'E', text: '25' },
    ],
    answer: 'C',
    hint: 'CKPH dörtgeninin iki açısı 90°’dir; dörtgenin iç açıları toplamı 360°’dir.',
    solution: [
      {
        title: 'Dörtgeni gör',
        detail: 'K ∈ [AC] ve H ∈ [BC] olduğundan C, K, P, H noktaları bir dörtgen oluşturur.',
      },
      {
        title: 'İki dik açıyı yerleştir',
        detail: '[BK] ⊥ [AC] olduğundan m(CKP) = 90°, [AH] ⊥ [BC] olduğundan m(CHP) = 90° olur.',
      },
      {
        title: 'Dörtgenin açılarını topla',
        detail:
          'CKPH dörtgeninde iç açılar toplamı 360°’dir: m(ACB) + 90 + m(KPH) + 90 = 360 → m(KPH) = 180 − m(ACB).',
      },
      {
        title: 'Ters açıyı kullan',
        detail:
          '[PK ile [PB ve [PH ile [PA ters ışınlar olduğundan m(APB) = m(KPH) = 180 − m(ACB) bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '5x = 180 − 4x → 9x = 180 → x = 20° bulunur. Kontrol: m(ACB) = 80°, m(APB) = 100° ve 80 + 100 = 180’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'triangles-31',
    topic: 'Doğrusal açılar ve dış açı',
    figure: {
      viewBox: '0 86 400 248',
      caption: 'Şekil 31',
      label:
        'L, B, C, F, T noktalarını taşıyan yatay doğru ve B’den çıkıp K yönünde giden ışın; [AC] ile [DF] parçaları E noktasında kesişiyor.',
      svg: `
          <defs>
            <marker id="arrow-t31" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="18" y1="300" x2="388" y2="300" marker-start="url(#arrow-t31)" marker-end="url(#arrow-t31)"/>
          <line class="ln" x1="95" y1="300" x2="204" y2="111.2" marker-end="url(#arrow-t31)"/>
          <path class="ln" d="M182.5,148.4 L215,300"/>
          <path class="ln" d="M140,222.1 L300,300"/>

          <path class="arc" d="M115,265.4 A40,40 0 0 0 55,300"/>
          <text class="val" x="66" y="254.8" text-anchor="middle">x</text>

          <path class="arc" d="M202.5,113.8 A40,40 0 0 1 190.9,187.6"/>
          <text class="val" x="239.8" y="162.5" text-anchor="middle">z</text>

          <path class="arc" d="M264,282.5 A40,40 0 0 1 340,300"/>
          <text class="val" x="313" y="248.5" text-anchor="middle">y</text>

          <path class="arc" d="M178.1,240.6 A30,30 0 0 0 211.4,283.1"/>
          <text class="val" x="167.3" y="288.4" text-anchor="middle">t</text>

          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="95" cy="300" r="3.2"/>
          <circle class="pt" cx="215" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="300" r="3.2"/>
          <circle class="pt" cx="375" cy="300" r="3.2"/>
          <circle class="pt" cx="182.5" cy="148.4" r="3.2"/>
          <circle class="pt" cx="140" cy="222.1" r="3.2"/>
          <circle class="pt" cx="205.1" cy="253.8" r="3.2"/>

          <text x="30" y="320" text-anchor="middle">L</text>
          <text x="95" y="320" text-anchor="middle">B</text>
          <text x="215" y="320" text-anchor="middle">C</text>
          <text x="300" y="320" text-anchor="middle">F</text>
          <text x="375" y="320" text-anchor="middle">T</text>
          <text x="213" y="106.2">K</text>
          <text x="173.5" y="144.4" text-anchor="end">A</text>
          <text x="131" y="218.1" text-anchor="end">D</text>
          <text x="214.1" y="249.8">E</text>
        `,
    },
    given: [
      'L, B, C, F, T doğrusal',
      'K, A, D, B doğrusal',
      '[AC] ∩ [DF] = {E}',
      'm(KAC) = z, m(KBL) = x',
      'm(DFT) = y, m(DEC) = t',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x + y + z + t toplamı kaç derecedir?',
    choices: [
      { key: 'A', text: '600' },
      { key: 'B', text: '540' },
      { key: 'C', text: '480' },
      { key: 'D', text: '360' },
      { key: 'E', text: '180' },
    ],
    answer: 'B',
    hint: 'Her açının bütünleyeni bir üçgenin iç açısıdır; t’yi ECF üçgeninin dış açısı olarak yaz.',
    solution: [
      {
        title: 'B ve A’daki doğrusal açılar',
        detail:
          'L, B, C doğrusal olduğundan m(ABC) = 180 − x; K, A, B doğrusal olduğundan m(BAC) = 180 − z olur.',
      },
      {
        title: 'ABC üçgeninin C açısı',
        detail: 'İç açılar toplamından m(ACB) = 180 − (180 − x) − (180 − z) = x + z − 180 bulunur.',
      },
      {
        title: 'C’de bütünler açı',
        detail:
          'B, C, F doğrusal olduğundan m(ACF) = 180 − m(ACB) = 180 − (x + z − 180) = 360 − x − z olur.',
      },
      {
        title: 'F’de bütünler açı',
        detail:
          'C, F, T doğrusal olduğundan m(EFC) = m(DFC) = 180 − y olur. (E noktası [DF] üzerindedir.)',
      },
      {
        title: 't’yi dış açı olarak yaz',
        detail:
          'D, E, F doğrusal olduğundan t = m(DEC), ECF üçgeninin E köşesindeki dış açısıdır: t = m(ECF) + m(EFC) = (360 − x − z) + (180 − y) = 540 − x − y − z.',
      },
      {
        title: 'Sonuç',
        detail:
          'Buradan x + y + z + t = 540° bulunur. Sonuç, açıların tek tek değerlerinden bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 32
  {
    id: 'triangles-32',
    topic: 'İkizkenar üçgende eşit açılar',
    figure: {
      viewBox: '0 76 400 256',
      caption: 'Şekil 32',
      label:
        'ABC üçgeninde [AH] yüksekliği [BC] kenarını ortalıyor; [AH] üzerindeki E noktasından geçen [BD] doğru parçası [AC] kenarını D noktasında kesiyor.',
      svg: `
          <path class="ln" d="M200,107 L110,300 L290,300 Z"/>
          <path class="ln" d="M55,300 L110,300"/>
          <path class="ln" d="M200,107 L200,300"/>
          <path class="ln" d="M110,300 L257.9,231.1"/>
          <path class="ln" d="M187,300 L187,287 L200,287"/>

          <line class="tick" x1="155" y1="294" x2="155" y2="306"/>
          <line class="tick" x1="245" y1="294" x2="245" y2="306"/>

          <path class="arc" d="M70,300 A40,40 0 0 1 126.9,263.7"/>
          <line class="tick" x1="91.7" y1="271.3" x2="85.3" y2="261.2"/>

          <path class="arc" d="M176.4,269 A26,26 0 0 1 200,232"/>
          <line class="tick" x1="183.1" y1="247.3" x2="173" y2="240.8"/>

          <path class="arc" d="M268.8,254.6 A26,26 0 0 1 234.3,242"/>
          <text class="val" x="242.8" y="277.4" text-anchor="middle">x</text>

          <circle class="pt" cx="200" cy="107" r="3.2"/>
          <circle class="pt" cx="110" cy="300" r="3.2"/>
          <circle class="pt" cx="290" cy="300" r="3.2"/>
          <circle class="pt" cx="55" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>
          <circle class="pt" cx="257.9" cy="231.1" r="3.2"/>
          <circle class="pt" cx="200" cy="258" r="3.2"/>

          <text x="200" y="95" text-anchor="middle">A</text>
          <text x="102" y="318" text-anchor="end">B</text>
          <text x="298" y="318">C</text>
          <text x="47" y="318" text-anchor="end">F</text>
          <text x="200" y="320" text-anchor="middle">H</text>
          <text x="266.9" y="227.1">D</text>
          <text x="208" y="242">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'F, B, H, C doğrusal',
      '[AH] ⊥ [FC] ve |BH| = |HC|',
      'E ∈ [AH], D ∈ [AC] ve B, E, D doğrusal',
      'm(FBA) = m(BEA)',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CDB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '75' },
      { key: 'C', text: '90' },
      { key: 'D', text: '105' },
      { key: 'E', text: '120' },
    ],
    answer: 'C',
    hint: '[AH] hem yükseklik hem kenarortay olduğundan üçgen ikizkenardır; taban açısına β deyip m(EBC)’yi bul.',
    solution: [
      {
        title: 'Üçgenin ikizkenar olduğunu göster',
        detail:
          '[AH] ⊥ [BC] ve |BH| = |HC| olduğundan ABH ile ACH dik üçgenleri eştir: |AB| = |AC|. Taban açılarına m(ABC) = m(ACB) = β diyelim.',
      },
      {
        title: '[AH] aynı zamanda açıortaydır',
        detail:
          'İkizkenar üçgende tabana ait yükseklik tepe açısını da ortalar: m(BAH) = m(BAC)/2 = (180 − 2β)/2 = 90 − β.',
      },
      {
        title: 'İki açıyı yaz',
        detail:
          'F, B, C doğrusal olduğundan m(FBA) = 180 − β olur. m(ABE) = θ dersek, E ∈ [AH] olduğundan ABE üçgeninde m(BEA) = 180 − (90 − β) − θ = 90 + β − θ’dir.',
      },
      {
        title: 'Verilen eşitliği kullan',
        detail: 'm(FBA) = m(BEA) → 180 − β = 90 + β − θ → θ = 2β − 90 bulunur.',
      },
      {
        title: 'm(DBC)’yi bul',
        detail:
          'm(EBC) = m(ABC) − m(ABE) = β − (2β − 90) = 90 − β. B, E, D doğrusal olduğundan m(DBC) = m(EBC) = 90 − β’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'BDC üçgeninde x = 180 − m(DBC) − m(DCB) = 180 − (90 − β) − β = 90° bulunur. Sonuç β’dan bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 33
  {
    id: 'triangles-33',
    topic: 'İkizkenar üçgenlerde açı avı',
    figure: {
      viewBox: '0 72 400 260',
      caption: 'Şekil 33',
      label:
        'Tepe noktası A olan ikizkenar ABC üçgeni; [AC] üzerindeki D noktası B ile, [BD] üzerindeki E noktası C ile birleştirilmiş.',
      svg: `
          <path class="ln" d="M200,102.4 L40,300 L360,300 Z"/>
          <path class="ln" d="M200,102.4 L360,300"/>
          <path class="ln" d="M40,300 L296.5,221.6"/>
          <path class="ln" d="M200,251.1 L360,300"/>

          <line class="tick" x1="115.9" y1="270.5" x2="119.4" y2="282"/>
          <line class="tick" x1="120.6" y1="269.1" x2="124.1" y2="280.5"/>
          <line class="tick" x1="279.4" y1="269.1" x2="275.9" y2="280.5"/>
          <line class="tick" x1="284.1" y1="270.5" x2="280.6" y2="282"/>

          <line class="tick" x1="254.8" y1="240.6" x2="251.3" y2="229.1"/>
          <line class="tick" x1="250" y1="242.1" x2="246.5" y2="230.6"/>
          <line class="tick" x1="245.2" y1="243.5" x2="241.7" y2="232.1"/>
          <line class="tick" x1="329.8" y1="253.1" x2="320.4" y2="260.7"/>
          <line class="tick" x1="332.9" y1="257" x2="323.6" y2="264.6"/>
          <line class="tick" x1="336.1" y1="260.9" x2="326.7" y2="268.5"/>

          <path class="arc" d="M178.6,128.8 A34,34 0 0 0 221.4,128.8"/>
          <text class="val" x="200" y="161.4" text-anchor="middle">x</text>

          <path class="arc" d="M311.6,240.2 A24,24 0 0 1 273.5,228.6"/>
          <text class="val" x="284.2" y="266.7" text-anchor="middle">112°</text>

          <circle class="pt" cx="200" cy="102.4" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="360" cy="300" r="3.2"/>
          <circle class="pt" cx="296.5" cy="221.6" r="3.2"/>
          <circle class="pt" cx="200" cy="251.1" r="3.2"/>

          <text x="200" y="90.4" text-anchor="middle">A</text>
          <text x="32" y="318" text-anchor="end">B</text>
          <text x="368" y="318">C</text>
          <text x="305.5" y="217.6">D</text>
          <text x="191" y="247.1" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'A, D, C doğrusal ve E ∈ [BD]',
      '|AB| = |AC|',
      '|BE| = |EC|',
      '|DE| = |DC|',
      'm(BDC) = 112°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '74' },
      { key: 'C', text: '76' },
      { key: 'D', text: '78' },
      { key: 'E', text: '80' },
    ],
    answer: 'D',
    hint: 'Önce DEC ikizkenar üçgeninden m(DEC)’yi bul; BEC üçgeni de ikizkenardır.',
    solution: [
      {
        title: 'DEC ikizkenar üçgeni',
        detail:
          'E ∈ [BD] olduğundan [DE ile [DB aynı ışındır, yani m(EDC) = m(BDC) = 112°. |DE| = |DC| olduğundan m(DEC) = m(DCE) = (180 − 112) / 2 = 34° bulunur.',
      },
      {
        title: 'E’deki doğrusal açı',
        detail: 'B, E, D doğrusal olduğundan m(BEC) = 180 − m(DEC) = 180 − 34 = 146° olur.',
      },
      {
        title: 'BEC ikizkenar üçgeni',
        detail:
          '|BE| = |EC| olduğundan taban açıları eşittir: m(EBC) = m(ECB) = (180 − 146) / 2 = 17°.',
      },
      {
        title: 'Taban açılarını x cinsinden yaz',
        detail:
          '|AB| = |AC| olduğundan ABC ikizkenardır: m(ABC) = m(ACB) = (180 − x) / 2 = 90 − x/2.',
      },
      {
        title: 'BDC üçgenini kur',
        detail:
          'm(DBC) = m(EBC) = 17° ve m(DCB) = m(ACB) = 90 − x/2 olduğundan 17 + 112 + (90 − x/2) = 180 yazılır.',
      },
      {
        title: 'Sonuç',
        detail: '219 − x/2 = 180 → x/2 = 39 → x = 78° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  {
    id: 'triangles-34',
    topic: 'Paralel doğrular ve açıortaylar',
    figure: {
      viewBox: '0 58 400 274',
      caption: 'Şekil 34',
      label:
        'Paralel FE ve KC doğruları; FE üzerindeki A ile KC üzerindeki C, aralarındaki B noktasına birleştirilmiş ve [BD], [AC] parçasını D noktasında kesiyor.',
      svg: `
          <defs>
            <marker id="arrow-t34" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="40" y1="90" x2="380" y2="90" marker-start="url(#arrow-t34)" marker-end="url(#arrow-t34)"/>
          <line class="ln" x1="40" y1="300" x2="380" y2="300" marker-start="url(#arrow-t34)" marker-end="url(#arrow-t34)"/>
          <path class="ln" d="M170,90 L96.5,195 L246.4,300"/>
          <path class="ln" d="M170,90 L246.4,300"/>
          <path class="ln" d="M96.5,195 L201.5,176.5"/>

          <path class="par" d="M103,83 L110,90 L103,97"/>
          <path class="par" d="M103,293 L110,300 L103,307"/>

          <path class="arc" d="M140,90 A30,30 0 0 0 152.8,114.6"/>
          <line class="tick" x1="148.7" y1="101.1" x2="138.1" y2="106.6"/>
          <path class="arc" d="M152.8,114.6 A30,30 0 0 0 180.3,118.2"/>
          <line class="tick" x1="166.9" y1="113.8" x2="165.3" y2="125.7"/>

          <path class="arc" d="M216.4,300 A30,30 0 0 1 221.9,282.8"/>
          <line class="tick" x1="223" y1="294.6" x2="211.3" y2="291.9"/>
          <line class="tick" x1="224.2" y1="291" x2="213" y2="286.5"/>
          <path class="arc" d="M221.9,282.8 A30,30 0 0 1 236.2,271.8"/>
          <line class="tick" x1="230.3" y1="282.2" x2="222.3" y2="273.3"/>
          <line class="tick" x1="233.4" y1="279.8" x2="226.8" y2="269.8"/>

          <path class="arc" d="M116,167.1 A34,34 0 0 1 130,189.1"/>
          <line class="tick" x1="117.8" y1="176.8" x2="126.9" y2="169"/>
          <line class="tick" x1="120.1" y1="180" x2="130.2" y2="173.5"/>
          <line class="tick" x1="122" y1="183.4" x2="132.9" y2="178.5"/>
          <path class="arc" d="M130,189.1 A34,34 0 0 1 124.3,214.5"/>
          <line class="tick" x1="124.4" y1="197.2" x2="136.4" y2="198.1"/>
          <line class="tick" x1="123.8" y1="201.1" x2="135.6" y2="203.7"/>
          <line class="tick" x1="122.7" y1="204.9" x2="133.9" y2="209.1"/>

          <path class="arc" d="M214,90 A44,44 0 0 1 185,131.3"/>
          <text class="val" x="220.8" y="130.6" text-anchor="middle">α</text>

          <path class="arc" d="M192.6,152.1 A26,26 0 0 0 175.9,181"/>
          <text class="val" x="163.4" y="159.5" text-anchor="middle">80°</text>

          <circle class="pt" cx="170" cy="90" r="3.2"/>
          <circle class="pt" cx="96.5" cy="195" r="3.2"/>
          <circle class="pt" cx="246.4" cy="300" r="3.2"/>
          <circle class="pt" cx="201.5" cy="176.5" r="3.2"/>
          <circle class="pt" cx="60" cy="90" r="3.2"/>
          <circle class="pt" cx="360" cy="90" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>

          <text x="170" y="78" text-anchor="middle">A</text>
          <text x="86.5" y="190" text-anchor="end">B</text>
          <text x="246.4" y="320" text-anchor="middle">C</text>
          <text x="210.5" y="171.5">D</text>
          <text x="60" y="78" text-anchor="middle">F</text>
          <text x="360" y="78" text-anchor="middle">E</text>
          <text x="60" y="320" text-anchor="middle">K</text>
        `,
    },
    given: [
      'FE // KC',
      'A ∈ FE, C ∈ KC ve D ∈ [AC]',
      '[AB], [CB] ve [BD] birer açıortay',
      'm(ADB) = 80°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '64' },
      { key: 'C', text: '66' },
      { key: 'D', text: '68' },
      { key: 'E', text: '70' },
    ],
    answer: 'E',
    hint: 'FE // KC olduğundan m(FAC) ile m(KCA) yan iç açılardır; bu, iki açıortayın paylarını 90°’de toplar.',
    solution: [
      {
        title: 'Açıortayları adlandır',
        detail:
          'm(FAB) = m(BAD) = a, m(KCB) = m(BCD) = b ve m(ABD) = m(DBC) = c diyelim. D ∈ [AC] olduğundan m(FAC) = 2a ve m(KCA) = 2b olur.',
      },
      {
        title: 'Yan iç açıları kullan',
        detail:
          'FE // KC ve AC kesendir. m(FAC) ile m(KCA) yan iç açılar olduğundan 2a + 2b = 180 → a + b = 90 bulunur.',
      },
      {
        title: 'Zikzak kuralı',
        detail:
          'B noktası iki paralelin arasındadır. Zikzak kuralından m(ABC) = m(FAB) + m(KCB) = a + b = 90° olur, yani 2c = 90 → c = 45°.',
      },
      {
        title: 'ABD üçgenini kur',
        detail: 'ABD üçgeninde m(BAD) + m(ABD) + m(ADB) = 180 → a + 45 + 80 = 180 → a = 55° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'm(FAC) = 2a = 110° ve F, A, E doğrusal olduğundan α = m(EAC) = 180 − 110 = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 35
  {
    id: 'triangles-35',
    topic: 'Paralel doğrularda ikizkenar üçgenler',
    figure: {
      viewBox: '0 88 400 180',
      caption: 'Şekil 35',
      label:
        'Paralel [KN] ve [LM] doğru parçaları; K, O ve N noktaları L ile birleştirilerek iki ikizkenar üçgen oluşturulmuş.',
      svg: `
          <path class="ln" d="M60,120 L312.7,120"/>
          <path class="ln" d="M258.9,230.2 L370,230.2"/>
          <path class="ln" d="M60,120 L258.9,230.2"/>
          <path class="ln" d="M190,120 L258.9,230.2"/>
          <path class="ln" d="M312.7,120 L258.9,230.2"/>

          <path class="par" d="M93,113 L100,120 L93,127"/>
          <path class="par" d="M333,223.2 L340,230.2 L333,237.2"/>

          <line class="tick" x1="125" y1="114" x2="125" y2="126"/>
          <line class="tick" x1="229.5" y1="171.9" x2="219.4" y2="178.3"/>

          <line class="tick" x1="248.8" y1="114" x2="248.8" y2="126"/>
          <line class="tick" x1="253.8" y1="114" x2="253.8" y2="126"/>
          <line class="tick" x1="292.3" y1="175.5" x2="281.5" y2="170.2"/>
          <line class="tick" x1="290.1" y1="180" x2="279.3" y2="174.7"/>

          <path class="arc" d="M218.7,207.9 A46,46 0 0 1 234.5,191.2"/>
          <text class="val" x="211" y="189.8" text-anchor="middle">α</text>

          <path class="arc" d="M276.4,194.3 A40,40 0 0 1 298.9,230.2"/>
          <text class="val" x="309.8" y="203.5" text-anchor="middle">64°</text>

          <circle class="pt" cx="60" cy="120" r="3.2"/>
          <circle class="pt" cx="190" cy="120" r="3.2"/>
          <circle class="pt" cx="312.7" cy="120" r="3.2"/>
          <circle class="pt" cx="258.9" cy="230.2" r="3.2"/>
          <circle class="pt" cx="370" cy="230.2" r="3.2"/>

          <text x="60" y="108" text-anchor="middle">K</text>
          <text x="190" y="108" text-anchor="middle">O</text>
          <text x="312.7" y="108" text-anchor="middle">N</text>
          <text x="252.9" y="250.2" text-anchor="middle">L</text>
          <text x="376" y="250.2" text-anchor="middle">M</text>
        `,
    },
    given: ['K, O, N doğrusal', '[KN] // [LM]', '|KO| = |OL|', '|ON| = |NL|', 'm(NLM) = 64°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(KLO) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '29' },
      { key: 'B', text: '31' },
      { key: 'C', text: '33' },
      { key: 'D', text: '35' },
      { key: 'E', text: '37' },
    ],
    answer: 'A',
    hint: '[KN] // [LM] olduğundan m(NLM) ile m(KNL) iç ters açılardır.',
    solution: [
      {
        title: 'KOL ikizkenar üçgeni',
        detail: '|KO| = |OL| olduğundan taban açıları eşittir: m(OKL) = m(OLK) = α.',
      },
      {
        title: 'O’daki dış açı',
        detail:
          'K, O, N doğrusal olduğundan m(LON), KOL üçgeninin O köşesindeki dış açısıdır: m(LON) = α + α = 2α.',
      },
      {
        title: 'ONL ikizkenar üçgeni',
        detail:
          '|ON| = |NL| olduğundan m(NOL) = m(NLO) = 2α’dır. ONL üçgeninde m(ONL) = 180 − 4α bulunur.',
      },
      {
        title: 'İç ters açıyı kullan',
        detail:
          '[KN] // [LM] ve LN kesendir. m(KNL) ile m(NLM) iç ters açılardır; K, O, N doğrusal olduğundan m(ONL) = m(KNL) = 64° olur.',
      },
      {
        title: 'Sonuç',
        detail: '180 − 4α = 64 → 4α = 116 → α = 29° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 36
  {
    id: 'triangles-36',
    topic: 'Üçgende dış açı ve eşit açılar',
    figure: {
      viewBox: '0 154 400 180',
      caption: 'Şekil 36',
      label:
        'ABC üçgeninde [AC] kenarı üzerindeki D noktası B ile birleştirilmiş; B ve C köşelerinde eşit açılar işaretlenmiş.',
      svg: `
          <path class="ln" d="M109.5,177.4 L60,300 L340,300 Z"/>
          <path class="ln" d="M60,300 L168.6,208.9"/>

          <path class="arc" d="M79.5,251.8 A52,52 0 0 1 99.8,266.6"/>
          <text class="val" x="101.1" y="248.4" text-anchor="middle">x</text>

          <path class="arc" d="M301.2,279.3 A44,44 0 0 0 296,300"/>
          <text class="val" x="279.8" y="290" text-anchor="middle">x</text>

          <path class="arc" d="M145.6,196.7 A26,26 0 0 0 148.7,225.6"/>
          <text class="val" x="124.8" y="218.5" text-anchor="middle">68°</text>

          <circle class="pt" cx="109.5" cy="177.4" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="168.6" cy="208.9" r="3.2"/>

          <text x="99.5" y="173.4" text-anchor="end">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="177.6" y="203.9">D</text>
        `,
    },
    given: ['ABC bir üçgen', 'D ∈ [AC]', 'm(ABD) = m(DCB) = x', 'm(ADB) = 68°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABC açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '64' },
      { key: 'B', text: '68' },
      { key: 'C', text: '72' },
      { key: 'D', text: '76' },
      { key: 'E', text: '80' },
    ],
    answer: 'B',
    hint: 'm(ADB), BDC üçgeninin D köşesindeki dış açısıdır.',
    solution: [
      {
        title: 'Dış açıyı tanı',
        detail: 'A, D, C doğrusal olduğundan m(ADB), BDC üçgeninin D köşesindeki dış açısıdır.',
      },
      {
        title: 'Dış açı bağıntısını yaz',
        detail:
          'Dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir: m(ADB) = m(DBC) + m(DCB) → 68 = m(DBC) + x.',
      },
      {
        title: 'm(DBC)’yi çöz',
        detail: 'Buradan m(DBC) = 68 − x bulunur.',
      },
      {
        title: 'ABC açısını topla',
        detail:
          '[BD], ABC açısının içinden geçtiğinden m(ABC) = m(ABD) + m(DBC) = x + (68 − x) = 68° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'm(ABC) = 68° bulunur; x sadeleştiği için sonuç x’in değerinden bağımsızdır ve daima m(ADB)’ye eşittir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 37
  {
    id: 'triangles-37',
    topic: 'Paralel ışınlar ve ikizkenar üçgen',
    figure: {
      viewBox: '0 62 400 274',
      caption: 'Şekil 37',
      label:
        'A’dan çıkan [AB ışını ile C’den çıkan [CD ışını paralel; [AE] parçası [CD ışınını D noktasında kesiyor ve |CD| = |ED|.',
      svg: `
          <defs>
            <marker id="arrow-t37" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="330" y1="90" x2="60" y2="90" marker-end="url(#arrow-t37)"/>
          <line class="ln" x1="166.2" y1="204.7" x2="372" y2="204.7" marker-end="url(#arrow-t37)"/>
          <path class="ln" d="M330,90 L246.5,319.4"/>
          <path class="ln" d="M330,90 L166.2,204.7"/>
          <path class="ln" d="M166.2,204.7 L246.5,319.4"/>

          <line class="tick" x1="227.2" y1="198.7" x2="227.2" y2="210.7"/>
          <line class="tick" x1="273" y1="264.1" x2="261.7" y2="260"/>

          <path class="arc" d="M286,90 A44,44 0 0 0 294,115.2"/>
          <line class="tick" x1="293.8" y1="101.4" x2="282.3" y2="105"/>
          <path class="arc" d="M294,115.2 A44,44 0 0 0 315,131.3"/>
          <line class="tick" x1="306.9" y1="120.1" x2="299.6" y2="129.7"/>

          <circle class="pt" cx="330" cy="90" r="3.2"/>
          <circle class="pt" cx="200" cy="90" r="3.2"/>
          <circle class="pt" cx="166.2" cy="204.7" r="3.2"/>
          <circle class="pt" cx="288.2" cy="204.7" r="3.2"/>
          <circle class="pt" cx="246.5" cy="319.4" r="3.2"/>

          <text x="338" y="84">A</text>
          <text x="200" y="78" text-anchor="middle">B</text>
          <text x="157.2" y="200.7" text-anchor="end">C</text>
          <text x="300" y="196">D</text>
          <text x="237.5" y="325.4" text-anchor="end">E</text>
        `,
    },
    given: ['[AB // [CD', 'A, D, E doğrusal', '|CD| = |ED|', 'm(BAC) = m(CAE)'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ACE açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '54' },
      { key: 'C', text: '60' },
      { key: 'D', text: '72' },
      { key: 'E', text: '90' },
    ],
    answer: 'E',
    hint: 'm(CDE) ile m(BAE), kenarları paralel ve aynı yönlü açılardır.',
    solution: [
      {
        title: 'Bilinmeyeni adlandır',
        detail: 'm(BAC) = m(CAE) = x diyelim. Buradan m(BAE) = 2x olur.',
      },
      {
        title: 'İç ters açı',
        detail:
          '[AB // [CD ve AC kesendir. m(BAC) ile m(ACD) iç ters açılar olduğundan m(ACD) = x bulunur.',
      },
      {
        title: 'Kenarları paralel açılar',
        detail:
          'D ∈ [AE] olduğundan [DE ile [AE aynı ışın yönündedir; [DC ile [AB de paralel ve aynı yönlüdür. Kenarları paralel ve aynı yönlü açılar eşit olduğundan m(CDE) = m(BAE) = 2x olur.',
      },
      {
        title: 'CDE ikizkenar üçgeni',
        detail:
          '|CD| = |ED| olduğundan CDE üçgeninde tepe açısı D’dir: m(DCE) = m(DEC) = (180 − 2x) / 2 = 90 − x.',
      },
      {
        title: 'Sonuç',
        detail:
          '[CD ışını ACE açısının içinden geçtiğinden m(ACE) = m(ACD) + m(DCE) = x + (90 − x) = 90° bulunur. Sonuç x’ten bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 38
  {
    id: 'triangles-38',
    topic: 'Dikme ve doğrusal noktalarla açı avı',
    figure: {
      viewBox: '0 8 400 320',
      caption: 'Şekil 38',
      label:
        'ABD üçgeninde D’den [AB] kenarına inen dikme çizilmiş; A’dan çıkan bir ışın bu dikmeyi E’de, [BD] kenarını C’de keserek K yönünde devam ediyor.',
      svg: `
          <defs>
            <marker id="arrow-t38" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M60,300 L340,300 L244.2,36.9 L60,300"/>
          <path class="ln" d="M244.2,36.9 L244.2,300"/>
          <line class="ln" x1="60" y1="300" x2="332.9" y2="142.4" marker-end="url(#arrow-t38)"/>
          <path class="ln" d="M231.2,300 L231.2,287 L244.2,287"/>

          <path class="arc" d="M218.3,208.6 A30,30 0 0 1 244.2,163.6"/>
          <text class="val" x="200.9" y="173.6" text-anchor="middle">120°</text>

          <path class="arc" d="M301.6,194.6 A30,30 0 0 0 317.4,151.4"/>
          <text class="val" x="338.4" y="188.5" text-anchor="middle">100°</text>

          <path class="arc" d="M292,300 A48,48 0 0 1 323.6,254.9"/>
          <text class="val" x="284.3" y="266" text-anchor="middle">x</text>

          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="244.2" cy="36.9" r="3.2"/>
          <circle class="pt" cx="244.2" cy="193.6" r="3.2"/>
          <circle class="pt" cx="291.4" cy="166.4" r="3.2"/>

          <text x="52" y="318" text-anchor="end">A</text>
          <text x="348" y="318">B</text>
          <text x="244.2" y="24.9" text-anchor="middle">D</text>
          <text x="235.2" y="192" text-anchor="end">E</text>
          <text x="283.4" y="162.4" text-anchor="end">C</text>
          <text x="338.9" y="134.4">K</text>
        `,
    },
    given: [
      'ABD bir üçgen',
      'A, E, C, K doğrusal ve C ∈ [BD]',
      '[ED] ⊥ [AB]',
      'm(AED) = 120°',
      'm(BCK) = 100°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '70' },
      { key: 'B', text: '75' },
      { key: 'C', text: '80' },
      { key: 'D', text: '85' },
      { key: 'E', text: '90' },
    ],
    answer: 'A',
    hint: 'Dikmenin [AB] kenarını kestiği noktaya H de; AEH dik üçgeni sana m(EAB)’yi verir.',
    solution: [
      {
        title: 'Dikmenin ayağını adlandır',
        detail:
          '[ED] doğrusunun [AB] kenarını kestiği noktaya H diyelim. [ED] ⊥ [AB] olduğundan m(AHE) = 90°’dir.',
      },
      {
        title: 'E’deki doğrusal açı',
        detail:
          'D, E, H doğrusal olduğundan m(AED) ile m(AEH) bütünler açılardır: m(AEH) = 180 − 120 = 60°.',
      },
      {
        title: 'AEH dik üçgeni',
        detail:
          'Dik üçgende dar açılar birbirini 90°’ye tamamlar: m(EAH) = 90 − 60 = 30°, yani m(BAC) = 30° olur.',
      },
      {
        title: 'C’deki doğrusal açı',
        detail:
          'A, C, K doğrusal olduğundan m(BCK) ile m(BCA) bütünler açılardır: m(BCA) = 180 − 100 = 80°.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABC üçgeninde m(ABC) = 180 − 30 − 80 = 70°. C ∈ [BD] olduğundan x = m(ABD) = m(ABC) = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39
  {
    id: 'triangles-39',
    topic: 'İç noktada oluşan açı (ok bağıntısı)',
    figure: {
      viewBox: '0 28 400 302',
      caption: 'Şekil 39',
      label:
        'ABC üçgeninin içindeki D noktası B ve C ile birleştirilmiş; [BD] üzerindeki E ile [DC] üzerindeki F noktası bir doğru parçasıyla birleştirilmiş.',
      svg: `
          <path class="ln" d="M192.3,59.1 L80,300 L280,300 L192.3,59.1"/>
          <path class="ln" d="M80,300 L180,230 L280,300"/>
          <path class="ln" d="M147.2,252.9 L205.5,247.8"/>

          <path class="arc" d="M99.4,258.3 A46,46 0 0 1 117.7,273.6"/>
          <text class="val" x="134" y="240.7" text-anchor="middle">30°</text>

          <path class="arc" d="M242.3,273.6 A46,46 0 0 1 264.3,256.8"/>
          <text class="val" x="228.9" y="238.4" text-anchor="middle">35°</text>

          <path class="arc" d="M129.2,265.5 A22,22 0 0 0 169.2,251"/>
          <text class="val" x="145" y="287" text-anchor="middle">150°</text>

          <path class="arc" d="M183.6,249.7 A22,22 0 0 0 223.5,260.4"/>
          <text class="val" x="222" y="283" text-anchor="middle">140°</text>

          <path class="arc" d="M178,89.9 A34,34 0 0 0 204,91.1"/>
          <text class="val" x="190" y="118.1" text-anchor="middle">x</text>

          <circle class="pt" cx="192.3" cy="59.1" r="3.2"/>
          <circle class="pt" cx="80" cy="300" r="3.2"/>
          <circle class="pt" cx="280" cy="300" r="3.2"/>
          <circle class="pt" cx="180" cy="230" r="3.2"/>
          <circle class="pt" cx="147.2" cy="252.9" r="3.2"/>
          <circle class="pt" cx="205.5" cy="247.8" r="3.2"/>

          <text x="192.3" y="47.1" text-anchor="middle">A</text>
          <text x="72" y="318" text-anchor="end">B</text>
          <text x="288" y="318">C</text>
          <text x="180" y="219" text-anchor="middle">D</text>
          <text x="138.2" y="256.9" text-anchor="end">E</text>
          <text x="214.5" y="251.8">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'E ∈ [BD] ve F ∈ [DC]',
      'm(ABD) = 30°',
      'm(ACD) = 35°',
      'm(BEF) = 150°',
      'm(EFC) = 140°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'B',
    hint: 'Önce DEF üçgeninden m(BDC)’yi bul; sonra BDC ve ABC üçgenlerinin açı toplamlarını yan yana yaz.',
    solution: [
      {
        title: 'E ve F’deki doğrusal açılar',
        detail:
          'B, E, D doğrusal olduğundan m(DEF) = 180 − 150 = 30°; D, F, C doğrusal olduğundan m(DFE) = 180 − 140 = 40° olur.',
      },
      {
        title: 'DEF üçgeninden m(BDC)',
        detail:
          'DEF üçgeninde m(EDF) = 180 − 30 − 40 = 110°. E ∈ [BD] ve F ∈ [DC] olduğundan m(BDC) = m(EDF) = 110°’dir.',
      },
      {
        title: 'BDC üçgenini yaz',
        detail: 'BDC üçgeninde m(DBC) + m(DCB) = 180 − 110 = 70° olur.',
      },
      {
        title: 'ABC üçgenini yaz',
        detail:
          'm(ABC) = m(ABD) + m(DBC) ve m(ACB) = m(ACD) + m(DCB) olduğundan iç açılar toplamı x + 30 + 35 + (m(DBC) + m(DCB)) = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x + 65 + 70 = 180 → x = 45° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'triangles-40',
    topic: 'İç teğet çemberin merkezi',
    figure: {
      viewBox: '0 48 400 280',
      caption: 'Şekil 40',
      label:
        'ABC üçgeninin iç teğet çemberi ve merkezi O; O noktası A ve B köşeleriyle birleştirilmiş.',
      svg: `
          <path class="ln" d="M220.9,76.3 L70,300 L330,300 L220.9,76.3"/>
          <circle class="ln" cx="210.5" cy="225.3" r="74.7"/>
          <path class="ln" d="M220.9,76.3 L210.5,225.3"/>
          <path class="ln" d="M70,300 L210.5,225.3"/>

          <path class="arc" d="M198.5,109.5 A40,40 0 0 0 218.1,116.2"/>
          <line class="tick" x1="209.8" y1="108.4" x2="205.9" y2="119.8"/>
          <path class="arc" d="M218.1,116.2 A40,40 0 0 0 238.4,112.2"/>
          <line class="tick" x1="227.4" y1="109.7" x2="229.7" y2="121.4"/>

          <path class="arc" d="M108.8,279.3 A44,44 0 0 0 94.6,263.5"/>
          <line class="tick" x1="96.8" y1="273.1" x2="105.3" y2="264.6"/>
          <line class="tick" x1="99.6" y1="276.2" x2="108.9" y2="268.6"/>
          <path class="arc" d="M114,300 A44,44 0 0 0 108.8,279.3"/>
          <line class="tick" x1="106.3" y1="288.8" x2="117.8" y2="285.3"/>
          <line class="tick" x1="107.3" y1="292.8" x2="119.1" y2="290.6"/>

          <path class="arc" d="M320.4,280.2 A22,22 0 0 0 308,300"/>
          <text class="val" x="297.8" y="284.9" text-anchor="middle">64°</text>

          <path class="arc" d="M212.3,199.4 A26,26 0 0 0 187.5,237.5"/>
          <text class="val" x="171.9" y="205.3" text-anchor="middle">x</text>

          <circle class="pt" cx="220.9" cy="76.3" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="210.5" cy="225.3" r="3.2"/>

          <text x="220.9" y="64.3" text-anchor="middle">A</text>
          <text x="62" y="318" text-anchor="end">B</text>
          <text x="338" y="318">C</text>
          <text x="220.5" y="230.3">O</text>
        `,
    },
    given: ['ABC bir üçgen', 'O, iç teğet çemberin merkezi', 'm(ACB) = 64°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AOB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '116' },
      { key: 'B', text: '118' },
      { key: 'C', text: '120' },
      { key: 'D', text: '122' },
      { key: 'E', text: '124' },
    ],
    answer: 'D',
    hint: 'İç teğet çemberin merkezi, üçgenin iç açıortaylarının kesim noktasıdır.',
    solution: [
      {
        title: 'O’nun ne olduğunu yaz',
        detail:
          'İç teğet çember üç kenara da teğet olduğundan merkezi, üç iç açıortayın kesim noktasıdır: [AO ve [BO birer açıortaydır.',
      },
      {
        title: 'Yarım açıları yaz',
        detail: 'm(OAB) = m(BAC)/2 ve m(OBA) = m(ABC)/2 olur.',
      },
      {
        title: 'AOB üçgenini kur',
        detail: 'AOB üçgeninde x = 180 − (m(BAC) + m(ABC))/2 yazılır.',
      },
      {
        title: 'Açı toplamını yerleştir',
        detail: 'ABC üçgeninde m(BAC) + m(ABC) = 180 − 64 = 116° olduğundan x = 180 − 58 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 122° bulunur. Kural olarak iki iç açıortayın oluşturduğu açı 90 + m(ACB)/2 = 90 + 32 = 122°’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 41
  {
    id: 'triangles-41',
    topic: 'Eşkenar üçgen ve orta dikme',
    figure: {
      viewBox: '0 46 400 282',
      caption: 'Şekil 41',
      label: 'Eşkenar ABC üçgeninin içindeki D noktası üç köşeye de birleştirilmiş.',
      svg: `
          <path class="ln" d="M200,74.8 L70,300 L330,300 L200,74.8"/>
          <path class="ln" d="M200,74.8 L213.8,232.9"/>
          <path class="ln" d="M70,300 L213.8,232.9"/>
          <path class="ln" d="M330,300 L213.8,232.9"/>

          <line class="tick" x1="140.2" y1="190.4" x2="129.8" y2="184.4"/>
          <line class="tick" x1="270.2" y1="184.4" x2="259.8" y2="190.4"/>
          <line class="tick" x1="200" y1="294" x2="200" y2="306"/>

          <path class="arc" d="M111.7,280.6 A46,46 0 0 1 116,300"/>
          <line class="tick" x1="109.1" y1="291.3" x2="120.8" y2="288.7"/>

          <path class="arc" d="M204,120.7 A46,46 0 0 0 223,114.7"/>
          <line class="tick" x1="212" y1="113" x2="215.6" y2="124.4"/>

          <path class="arc" d="M310,265.4 A40,40 0 0 0 295.4,280"/>
          <text class="val" x="287.6" y="262.6" text-anchor="middle">x</text>

          <circle class="pt" cx="200" cy="74.8" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="213.8" cy="232.9" r="3.2"/>

          <text x="200" y="62.8" text-anchor="middle">A</text>
          <text x="62" y="318" text-anchor="end">B</text>
          <text x="338" y="318">C</text>
          <text x="203" y="226" text-anchor="end">D</text>
        `,
    },
    given: ['ABC eşkenar üçgen', 'D noktası üçgenin içinde', 'm(DBC) = m(DAC)'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '30' },
      { key: 'D', text: '35' },
      { key: 'E', text: '45' },
    ],
    answer: 'C',
    hint: 'ABD üçgeninin A ve B köşelerindeki açıları 60°’den çıkararak yaz; ikisi de eşit çıkıyor.',
    solution: [
      {
        title: 'Eşkenar üçgenin açıları',
        detail: 'ABC eşkenar olduğundan m(BAC) = m(ABC) = m(ACB) = 60°’dir.',
      },
      {
        title: 'A ve B köşelerini böl',
        detail:
          'm(DAC) = m(DBC) = a diyelim. D üçgenin içinde olduğundan m(BAD) = 60 − a ve m(ABD) = 60 − a olur.',
      },
      {
        title: 'ABD ikizkenar üçgeni',
        detail:
          'ABD üçgeninde A ve B köşelerindeki açılar eşit olduğundan üçgen ikizkenardır: |DA| = |DB|.',
      },
      {
        title: 'Orta dikmeyi gör',
        detail:
          '|CA| = |CB| ve |DA| = |DB| olduğundan hem C hem D noktası [AB] parçasının orta dikmesi üzerindedir; yani CD doğrusu [AB]’nin orta dikmesidir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Eşkenar üçgende [AB]’nin orta dikmesi aynı zamanda C açısının açıortayıdır: x = m(ACD) = 60 / 2 = 30° bulunur. Sonuç a’dan bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 42
  {
    id: 'triangles-42',
    topic: 'Zincirleme ikizkenar üçgenler',
    figure: {
      viewBox: '0 138 400 258',
      caption: 'Şekil 42',
      label:
        'ABC üçgeninde [AB] üzerindeki D noktası C ile birleştirilmiş; [AC] kenarı C’nin ötesine E yönünde uzatılmış.',
      svg: `
          <defs>
            <marker id="arrow-t42" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M285.2,159.3 L60,300 L300,300"/>
          <path class="ln" d="M180,225 L300,300"/>
          <line class="ln" x1="285.2" y1="159.3" x2="309" y2="385.5" marker-end="url(#arrow-t42)"/>

          <line class="tick" x1="116.8" y1="257.4" x2="123.2" y2="267.6"/>
          <line class="tick" x1="243.2" y1="257.4" x2="236.8" y2="267.6"/>
          <line class="tick" x1="298.6" y1="229" x2="286.6" y2="230.3"/>

          <path class="arc" d="M266.1,278.8 A40,40 0 0 1 295.8,260.2"/>
          <text class="val" x="268.2" y="254.1" text-anchor="middle">52°</text>

          <path class="arc" d="M266,300 A34,34 0 0 0 303.6,333.8"/>
          <text class="val" x="263.9" y="345.1" text-anchor="middle">α</text>

          <circle class="pt" cx="285.2" cy="159.3" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="300" r="3.2"/>
          <circle class="pt" cx="180" cy="225" r="3.2"/>
          <circle class="pt" cx="306.5" cy="361.7" r="3.2"/>

          <text x="294.2" y="154.3">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="310" y="296">C</text>
          <text x="171" y="221" text-anchor="end">D</text>
          <text x="297.5" y="366.7" text-anchor="end">E</text>
        `,
    },
    given: ['ABC bir üçgen', 'D ∈ [AB] ve A, C, E doğrusal', '|BD| = |DC| = |AC|', 'm(ACD) = 52°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCE) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '100' },
      { key: 'C', text: '104' },
      { key: 'D', text: '108' },
      { key: 'E', text: '112' },
    ],
    answer: 'A',
    hint: 'Önce |AC| = |DC| olan ACD ikizkenar üçgeninden m(A)’yı bul.',
    solution: [
      {
        title: 'ACD ikizkenar üçgeni',
        detail:
          '|AC| = |DC| olduğundan ACD üçgeninde taban açıları eşittir: m(CAD) = m(CDA) = (180 − 52) / 2 = 64°. D ∈ [AB] olduğundan m(BAC) = 64°’dir.',
      },
      {
        title: 'D’deki doğrusal açı',
        detail: 'A, D, B doğrusal olduğundan m(CDB) = 180 − 64 = 116° olur.',
      },
      {
        title: 'DBC ikizkenar üçgeni',
        detail:
          '|DB| = |DC| olduğundan DBC üçgeninde taban açıları eşittir: m(DBC) = m(DCB) = (180 − 116) / 2 = 32°.',
      },
      {
        title: 'C açısını topla',
        detail: 'm(ACB) = m(ACD) + m(DCB) = 52 + 32 = 84° olur. Kontrol: 64 + 32 + 84 = 180 ✓',
      },
      {
        title: 'Sonuç',
        detail: 'A, C, E doğrusal olduğundan α = m(BCE) = 180 − m(ACB) = 180 − 84 = 96° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 43
  {
    id: 'triangles-43',
    topic: 'İki dik açı ve ikizkenar üçgen',
    figure: {
      viewBox: '0 138 400 192',
      caption: 'Şekil 43',
      label:
        'B köşesi dik olan ABD ile D köşesi dik olan BDC üçgenleri; B, C, E noktaları aynı doğru üzerinde ve |AB| = |BD|.',
      svg: `
          <defs>
            <marker id="arrow-t43" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M80,158.6 L80,300"/>
          <path class="ln" d="M80,158.6 L170.9,191.7"/>
          <path class="ln" d="M80,300 L170.9,191.7"/>
          <path class="ln" d="M170.9,191.7 L300,300"/>
          <line class="ln" x1="80" y1="300" x2="358" y2="300" marker-end="url(#arrow-t43)"/>
          <path class="ln" d="M80,287 L93,287 L93,300"/>
          <path class="ln" d="M162.5,201.6 L172.5,210 L180.9,200"/>

          <line class="tick" x1="86" y1="229.3" x2="74" y2="229.3"/>
          <line class="tick" x1="120.9" y1="242" x2="130" y2="249.7"/>

          <path class="arc" d="M80,198.6 A40,40 0 0 0 117.6,172.3"/>
          <text class="val" x="113.3" y="211.1" text-anchor="middle">α</text>

          <path class="arc" d="M269.4,274.3 A40,40 0 0 1 340,300"/>
          <text class="val" x="319.8" y="250.5" text-anchor="middle">140°</text>

          <circle class="pt" cx="80" cy="158.6" r="3.2"/>
          <circle class="pt" cx="80" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="300" r="3.2"/>
          <circle class="pt" cx="170.9" cy="191.7" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>

          <text x="71" y="154.6" text-anchor="end">A</text>
          <text x="72" y="318" text-anchor="end">B</text>
          <text x="296" y="320" text-anchor="end">C</text>
          <text x="178.9" y="185.7">D</text>
          <text x="336" y="320">E</text>
        `,
    },
    given: ['[AB] ⊥ [BC', '[BD] ⊥ [DC]', '|AB| = |BD|', 'B, C, E doğrusal', 'm(DCE) = 140°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'D',
    hint: 'Önce C’deki doğrusal açıdan m(DCB)’yi bul; BDC bir dik üçgendir.',
    solution: [
      {
        title: 'C’deki doğrusal açı',
        detail: 'B, C, E doğrusal olduğundan m(DCB) = 180 − 140 = 40° olur.',
      },
      {
        title: 'BDC dik üçgeni',
        detail:
          '[BD] ⊥ [DC] olduğundan m(BDC) = 90°’dir. Dik üçgende dar açılar birbirini 90°’ye tamamlar: m(DBC) = 90 − 40 = 50°.',
      },
      {
        title: 'B köşesindeki dik açıyı böl',
        detail:
          '[AB] ⊥ [BC olduğundan m(ABC) = 90°. [BD] bu açının içinden geçtiğinden m(ABD) = 90 − 50 = 40° bulunur.',
      },
      {
        title: 'ABD ikizkenar üçgeni',
        detail:
          '|AB| = |BD| olduğundan ABD üçgeninde tepe açısı B’dir: m(BAD) = m(BDA) = (180 − 40) / 2.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 70° bulunur. Kısaca α, m(DCE)’nin yarısına eşittir: 140 / 2 = 70°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 44
  {
    id: 'triangles-44',
    topic: 'İkizkenar üçgende açıortay',
    figure: {
      viewBox: '0 117 400 210',
      caption: 'Şekil 44',
      label:
        'Tepe noktası A olan ikizkenar ABC üçgeninde [BC] kenarı üzerindeki D ve E noktaları A ile birleştirilmiş; [AE], DAC açısının açıortayıdır.',
      svg: `
          <path class="ln" d="M180,145.1 L50,300 L310,300 L180,145.1"/>
          <path class="ln" d="M180,145.1 L207.3,300"/>
          <path class="ln" d="M180,145.1 L252.2,300"/>

          <line class="tick" x1="119.6" y1="226.4" x2="110.4" y2="218.7"/>
          <line class="tick" x1="249.6" y1="218.7" x2="240.4" y2="226.4"/>

          <path class="arc" d="M158.1,171.1 A34,34 0 0 0 185.9,178.6"/>
          <text class="val" x="162.2" y="198.9" text-anchor="middle">50°</text>

          <path class="arc" d="M185.9,178.6 A34,34 0 0 0 194.4,175.9"/>
          <line class="tick" x1="188.4" y1="171.8" x2="192" y2="183.2"/>
          <path class="arc" d="M194.4,175.9 A34,34 0 0 0 201.9,171.1"/>
          <line class="tick" x1="195" y1="168.7" x2="201.5" y2="178.8"/>

          <path class="arc" d="M241.3,276.4 A26,26 0 0 0 226.2,300"/>
          <text class="val" x="215.1" y="281.4" text-anchor="middle">α</text>

          <circle class="pt" cx="180" cy="145.1" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="310" cy="300" r="3.2"/>
          <circle class="pt" cx="207.3" cy="300" r="3.2"/>
          <circle class="pt" cx="252.2" cy="300" r="3.2"/>

          <text x="180" y="133.1" text-anchor="middle">A</text>
          <text x="42" y="318" text-anchor="end">B</text>
          <text x="318" y="318">C</text>
          <text x="207.3" y="320" text-anchor="middle">D</text>
          <text x="252.2" y="320" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '|AB| = |AC|',
      'D ve E noktaları [BC] üzerinde',
      '[AE], DAC açısının açıortayı',
      'm(BAD) = 50°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AED) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'B',
    hint: 'Taban açısına β de; hem m(ADE)’yi hem m(DAE)’yi β cinsinden yazabilirsin.',
    solution: [
      {
        title: 'Taban açılarını adlandır',
        detail:
          '|AB| = |AC| olduğundan m(ABC) = m(ACB) = β diyelim; tepe açısı m(BAC) = 180 − 2β olur.',
      },
      {
        title: 'Açıortayı kullan',
        detail:
          'm(DAC) = m(BAC) − m(BAD) = (180 − 2β) − 50 = 130 − 2β. [AE] açıortay olduğundan m(DAE) = m(EAC) = 65 − β bulunur.',
      },
      {
        title: 'D’deki dış açı',
        detail:
          'm(ADE), ABD üçgeninin D köşesindeki dış açısıdır: m(ADE) = m(BAD) + m(ABD) = 50 + β.',
      },
      {
        title: 'ADE üçgenini kur',
        detail: 'ADE üçgeninde α = 180 − (50 + β) − (65 − β) yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'β sadeleşir ve α = 65° bulunur. Sonuç, ikizkenar üçgenin taban açısından bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 45
  {
    id: 'triangles-45',
    topic: 'Eşit açılar ve ikizkenar üçgen',
    figure: {
      viewBox: '0 40 400 324',
      caption: 'Şekil 45',
      label:
        'Tepe noktası A olan ikizkenar ABD üçgeni; B ve D noktaları aşağıdaki C ile birleştirilmiş ve [AD] parçası D’nin ötesinde E yönünde uzatılmış.',
      svg: `
          <defs>
            <marker id="arrow-t45" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M180,68.6 L95,190"/>
          <path class="ln" d="M95,190 L265,190"/>
          <path class="ln" d="M95,190 L239.5,334.5"/>
          <path class="ln" d="M265,190 L239.5,334.5"/>
          <line class="ln" x1="180" y1="68.6" x2="307.4" y2="250.6" marker-end="url(#arrow-t45)"/>

          <line class="tick" x1="142.4" y1="132.7" x2="132.6" y2="125.9"/>
          <line class="tick" x1="227.4" y1="125.9" x2="217.6" y2="132.7"/>

          <path class="arc" d="M123.3,218.3 A40,40 0 0 0 135,190"/>
          <line class="tick" x1="126.4" y1="203" x2="137.5" y2="207.6"/>
          <path class="arc" d="M258.1,229.4 A40,40 0 0 0 287.9,222.8"/>
          <line class="tick" x1="272.4" y1="223.2" x2="275" y2="234.9"/>

          <path class="arc" d="M211.2,306.2 A40,40 0 0 1 246.5,295.1"/>
          <text class="val" x="222.1" y="284.2" text-anchor="middle">55°</text>

          <circle class="pt" cx="180" cy="68.6" r="3.2"/>
          <circle class="pt" cx="95" cy="190" r="3.2"/>
          <circle class="pt" cx="239.5" cy="334.5" r="3.2"/>
          <circle class="pt" cx="265" cy="190" r="3.2"/>
          <circle class="pt" cx="293.7" cy="231" r="3.2"/>

          <text x="180" y="56.6" text-anchor="middle">A</text>
          <text x="86" y="195" text-anchor="end">B</text>
          <text x="239.5" y="354.5" text-anchor="middle">C</text>
          <text x="274" y="185">D</text>
          <text x="302.7" y="236">E</text>
        `,
    },
    given: ['|AB| = |AD|', 'A, D, E doğrusal', 'm(CBD) = m(CDE)', 'm(BCD) = 55°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, BAE açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '70' },
      { key: 'B', text: '75' },
      { key: 'C', text: '80' },
      { key: 'D', text: '85' },
      { key: 'E', text: '90' },
    ],
    answer: 'A',
    hint: 'BCD üçgeninde m(BDC)’yi a cinsinden yaz; D’deki doğrusal açı m(ADB)’yi verir.',
    solution: [
      {
        title: 'Eşit açıları adlandır',
        detail: 'm(CBD) = m(CDE) = a diyelim.',
      },
      {
        title: 'BCD üçgenini yaz',
        detail: 'BCD üçgeninde m(BDC) = 180 − 55 − a = 125 − a olur.',
      },
      {
        title: 'D’deki doğrusal açı',
        detail: 'A, D, E doğrusal olduğundan m(ADC) = 180 − m(CDE) = 180 − a’dır.',
      },
      {
        title: 'a’yı yok et',
        detail: 'm(ADB) = m(ADC) − m(BDC) = (180 − a) − (125 − a) = 55° bulunur; a sadeleşir.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AB| = |AD| olduğundan ABD ikizkenardır: m(ABD) = m(ADB) = 55°. Buradan m(BAD) = 180 − 2 · 55 = 70° ve A, D, E doğrusal olduğundan m(BAE) = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 46
  {
    id: 'triangles-46',
    topic: 'İkizkenar üçgende iç nokta',
    figure: {
      viewBox: '0 117 400 210',
      caption: 'Şekil 46',
      label:
        'Tepe noktası A olan ikizkenar ABC üçgeninin içindeki D noktası B ve C köşeleriyle birleştirilmiş.',
      svg: `
          <path class="ln" d="M200,145.1 L70,300 L330,300 L200,145.1"/>
          <path class="ln" d="M70,300 L170.5,242"/>
          <path class="ln" d="M170.5,242 L330,300"/>

          <line class="tick" x1="139.6" y1="226.4" x2="130.4" y2="218.7"/>
          <line class="tick" x1="269.6" y1="218.7" x2="260.4" y2="226.4"/>

          <path class="arc" d="M103.4,260.2 A52,52 0 0 1 115,274"/>
          <line class="tick" x1="105.2" y1="270.4" x2="114.4" y2="262.7"/>
          <path class="arc" d="M281.1,282.2 A52,52 0 0 0 278,300"/>
          <line class="tick" x1="284.7" y1="292" x2="272.9" y2="289.9"/>

          <path class="arc" d="M148,255 A26,26 0 0 0 195,250.9"/>
          <text class="val" x="174.5" y="292.8" text-anchor="middle">130°</text>

          <circle class="pt" cx="200" cy="145.1" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="170.5" cy="242" r="3.2"/>

          <text x="200" y="133.1" text-anchor="middle">A</text>
          <text x="62" y="318" text-anchor="end">B</text>
          <text x="338" y="318">C</text>
          <text x="161.5" y="238" text-anchor="end">D</text>
        `,
    },
    given: ['ABC bir ikizkenar üçgen', '|AB| = |AC|', 'm(DBA) = m(DCB)', 'm(BDC) = 130°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, BAC açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '70' },
      { key: 'C', text: '75' },
      { key: 'D', text: '80' },
      { key: 'E', text: '85' },
    ],
    answer: 'D',
    hint: 'BDC üçgeninde m(DBC) + m(DCB) toplamını bul; bu toplam doğrudan m(ABC)’yi verir.',
    solution: [
      {
        title: 'Açıları adlandır',
        detail: 'm(DBA) = m(DCB) = a ve m(DBC) = b diyelim.',
      },
      {
        title: 'BDC üçgenini yaz',
        detail: 'BDC üçgeninde b + a + 130 = 180 olduğundan a + b = 50° bulunur.',
      },
      {
        title: 'ABC açısını topla',
        detail:
          '[BD], ABC açısının içinden geçtiğinden m(ABC) = m(DBA) + m(DBC) = a + b = 50° olur.',
      },
      {
        title: 'İkizkenarlığı kullan',
        detail: '|AB| = |AC| olduğundan m(ACB) = m(ABC) = 50°’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'm(BAC) = 180 − 50 − 50 = 80° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 47
  {
    id: 'triangles-47',
    topic: 'Eşkenar üçgen ve zincirleme ikizkenarlar',
    figure: {
      viewBox: '0 134 400 194',
      caption: 'Şekil 47',
      label:
        'ABC üçgeninin içindeki D noktası ile A ve B köşeleri bir eşkenar üçgen oluşturuyor; D ayrıca C köşesiyle de birleştirilmiş.',
      svg: `
          <path class="ln" d="M94.3,162.1 L70,300 L333.1,300 L94.3,162.1"/>
          <path class="ln" d="M94.3,162.1 L201.6,252.1"/>
          <path class="ln" d="M70,300 L201.6,252.1"/>
          <path class="ln" d="M201.6,252.1 L333.1,300"/>

          <line class="tick" x1="88.1" y1="232.1" x2="76.2" y2="230"/>
          <line class="tick" x1="133.7" y1="270.4" x2="137.8" y2="281.7"/>
          <line class="tick" x1="144.1" y1="211.7" x2="151.8" y2="202.5"/>

          <path class="arc" d="M113.2,284.3 A46,46 0 0 1 116,300"/>
          <text class="val" x="160.6" y="289" text-anchor="middle">20°</text>

          <path class="arc" d="M287.1,300 A46,46 0 0 1 289.9,284.3"/>
          <text class="val" x="242.5" y="289" text-anchor="middle">20°</text>

          <circle class="pt" cx="94.3" cy="162.1" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="333.1" cy="300" r="3.2"/>
          <circle class="pt" cx="201.6" cy="252.1" r="3.2"/>

          <text x="94.3" y="150.1" text-anchor="middle">A</text>
          <text x="62" y="318" text-anchor="end">B</text>
          <text x="341.1" y="318">C</text>
          <text x="201.6" y="241.1" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC bir üçgen', 'ABD eşkenar üçgen', 'm(DBC) = 20°', 'm(DCB) = 20°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '70' },
    ],
    answer: 'E',
    hint: 'DBC ikizkenar olduğundan |DB| = |DC|; eşkenar üçgenden |DB| = |DA| gelir.',
    solution: [
      {
        title: 'Eşkenar üçgeni yaz',
        detail: 'ABD eşkenar olduğundan m(ABD) = m(BAD) = m(ADB) = 60° ve |DA| = |DB| = |AB|’dir.',
      },
      {
        title: 'DBC ikizkenar üçgeni',
        detail:
          'm(DBC) = m(DCB) = 20° olduğundan DBC ikizkenardır: |DB| = |DC| ve m(BDC) = 180 − 40 = 140°.',
      },
      {
        title: 'Üç eşit uzunluk',
        detail: '|DA| = |DB| = |DC| olur; yani D noktası A, B ve C’ye eşit uzaklıktadır.',
      },
      {
        title: 'D etrafındaki açılar',
        detail:
          'Bir nokta etrafındaki açılar toplamı 360°’dir: m(ADC) = 360 − m(ADB) − m(BDC) = 360 − 60 − 140 = 160°.',
      },
      {
        title: 'ADC ikizkenar üçgeni',
        detail: '|DA| = |DC| olduğundan m(DAC) = m(DCA) = (180 − 160) / 2 = 10° bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(BAC) = m(BAD) + m(DAC) = 60 + 10 = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 48
  {
    id: 'triangles-48',
    topic: 'İki ikizkenar üçgenle açı avı',
    figure: {
      viewBox: '0 150 400 180',
      caption: 'Şekil 48',
      label:
        'ABC üçgeninde [BC] kenarı üzerindeki D ve E noktaları A ile birleştirilmiş; |AD| = |BD| ve |AE| = |EC|.',
      svg: `
          <path class="ln" d="M175.1,178.2 L30,300 L370,300 L175.1,178.2"/>
          <path class="ln" d="M175.1,178.2 L153.7,300"/>
          <path class="ln" d="M175.1,178.2 L234.5,300"/>

          <line class="tick" x1="91.8" y1="294" x2="91.8" y2="306"/>
          <line class="tick" x1="158.5" y1="238.1" x2="170.3" y2="240.2"/>

          <line class="tick" x1="209.1" y1="234.2" x2="198.3" y2="239.5"/>
          <line class="tick" x1="211.3" y1="238.7" x2="200.5" y2="244"/>
          <line class="tick" x1="299.8" y1="294" x2="299.8" y2="306"/>
          <line class="tick" x1="304.8" y1="294" x2="304.8" y2="306"/>

          <path class="arc" d="M168.2,217.6 A40,40 0 0 0 192.7,214.2"/>
          <text class="val" x="186.3" y="262.4" text-anchor="middle">36°</text>

          <circle class="pt" cx="175.1" cy="178.2" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="153.7" cy="300" r="3.2"/>
          <circle class="pt" cx="234.5" cy="300" r="3.2"/>

          <text x="175.1" y="166.2" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="153.7" y="320" text-anchor="middle">D</text>
          <text x="234.5" y="320" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ve E noktaları [BC] üzerinde',
      '|AD| = |BD|',
      '|AE| = |EC|',
      'm(DAE) = 36°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) kaç derecedir?',
    choices: [
      { key: 'A', text: '102' },
      { key: 'B', text: '108' },
      { key: 'C', text: '114' },
      { key: 'D', text: '120' },
      { key: 'E', text: '126' },
    ],
    answer: 'B',
    hint: 'İki ikizkenar üçgen, m(BAD) ile m(EAC)’yi doğrudan B ve C açılarına eşitler.',
    solution: [
      {
        title: 'ABD ikizkenar üçgeni',
        detail:
          '|AD| = |BD| olduğundan ABD üçgeninde taban açıları eşittir: m(BAD) = m(ABD) = m(ABC) = β diyelim.',
      },
      {
        title: 'AEC ikizkenar üçgeni',
        detail:
          '|AE| = |EC| olduğundan AEC üçgeninde taban açıları eşittir: m(EAC) = m(ACE) = m(ACB) = γ diyelim.',
      },
      {
        title: 'A açısını parçala',
        detail: 'm(BAC) = m(BAD) + m(DAE) + m(EAC) = β + 36 + γ olur.',
      },
      {
        title: 'Açı toplamını kullan',
        detail:
          'ABC üçgeninde m(BAC) + β + γ = 180 olduğundan β + γ = 180 − m(BAC)’dır. Yerine yazarsak m(BAC) = (180 − m(BAC)) + 36.',
      },
      {
        title: 'Sonuç',
        detail: '2 · m(BAC) = 216 → m(BAC) = 108° bulunur. Kısaca m(BAC) = 90 + m(DAE)/2’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 49
  {
    id: 'triangles-49',
    topic: 'İkizkenar üçgende kesişen doğrular',
    figure: {
      viewBox: '0 115 400 212',
      caption: 'Şekil 49',
      label:
        'Tepe noktası B olan ikizkenar ABC üçgeni; [AB] üzerindeki E noktası C ile birleştirilmiş ve A’dan çıkan [AD] parçası [EC]’yi D noktasında kesiyor.',
      svg: `
          <path class="ln" d="M258.9,145.7 L75,300 L315,300 L258.9,145.7"/>
          <path class="ln" d="M160.7,228.1 L315,300"/>
          <path class="ln" d="M258.9,145.7 L248.1,268.8"/>

          <path class="arc" d="M110.2,270.4 A46,46 0 0 1 121,300"/>
          <text class="val" x="137" y="282.4" text-anchor="middle">40°</text>

          <path class="arc" d="M254.3,197.5 A52,52 0 0 0 276.6,194.6"/>
          <line class="tick" x1="264.9" y1="191.3" x2="266.4" y2="203.2"/>
          <path class="arc" d="M267.9,278 A52,52 0 0 0 263,300"/>
          <line class="tick" x1="270.1" y1="290" x2="258.4" y2="287.4"/>

          <path class="arc" d="M250.3,242.9 A26,26 0 0 0 224.5,257.8"/>
          <text class="val" x="225.1" y="234" text-anchor="middle">x</text>

          <circle class="pt" cx="258.9" cy="145.7" r="3.2"/>
          <circle class="pt" cx="75" cy="300" r="3.2"/>
          <circle class="pt" cx="315" cy="300" r="3.2"/>
          <circle class="pt" cx="248.1" cy="268.8" r="3.2"/>
          <circle class="pt" cx="160.7" cy="228.1" r="3.2"/>

          <text x="258.9" y="133.7" text-anchor="middle">A</text>
          <text x="67" y="318" text-anchor="end">B</text>
          <text x="323" y="318">C</text>
          <text x="262" y="261">D</text>
          <text x="151.7" y="228.1" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '|AB| = |BC|',
      'E ∈ [AB] ve D ∈ [EC]',
      'm(DAC) = m(ECB)',
      'm(ABC) = 40°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '70' },
    ],
    answer: 'E',
    hint: 'E, D, C doğrusal olduğundan m(ADE), ADC üçgeninin D köşesindeki dış açısıdır.',
    solution: [
      {
        title: 'Taban açılarını bul',
        detail:
          '|AB| = |BC| olduğundan ABC ikizkenardır ve tepe açısı B’dir: m(BAC) = m(BCA) = (180 − 40) / 2 = 70°.',
      },
      {
        title: 'Eşit açıları adlandır',
        detail: 'm(DAC) = m(ECB) = a diyelim.',
      },
      {
        title: 'DCA açısını yaz',
        detail:
          'D ∈ [EC] olduğundan [CD ile [CE aynı ışındır: m(DCA) = m(BCA) − m(ECB) = 70 − a olur.',
      },
      {
        title: 'Dış açıyı kullan',
        detail:
          'E, D, C doğrusal olduğundan m(ADE), ADC üçgeninin D köşesindeki dış açısıdır: m(ADE) = m(DAC) + m(DCA) = a + (70 − a).',
      },
      {
        title: 'Sonuç',
        detail: 'a sadeleşir ve x = 70° bulunur; sonuç eşit açıların ortak değerinden bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 50
  {
    id: 'triangles-50',
    topic: 'İç ve dış açıortay ile dikme',
    figure: {
      viewBox: '0 117 400 224',
      caption: 'Şekil 50',
      label:
        'İkizkenar ABC üçgeninde B köşesinin iç açıortayı ile C köşesinin dış açıortayı F noktasında kesişiyor; B’den CF doğrusuna inen dikmenin ayağı D’dir.',
      svg: `
          <defs>
            <marker id="arrow-t50" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M180,147.7 L70,240 L290,240 L180,147.7"/>
          <line class="ln" x1="70" y1="240" x2="352" y2="240" marker-end="url(#arrow-t50)"/>
          <path class="ln" d="M70,240 L323.6,147.7"/>
          <path class="ln" d="M264.3,310.7 L323.6,147.7"/>
          <path class="ln" d="M70,240 L264.3,310.7"/>
          <path class="ln" d="M252,306.3 L256.5,294 L268.7,298.5"/>

          <path class="arc" d="M163.1,161.8 A22,22 0 0 0 196.9,161.8"/>
          <text class="val" x="180" y="190.7" text-anchor="middle">100°</text>

          <path class="arc" d="M103.7,211.7 A44,44 0 0 1 111.3,225"/>
          <line class="tick" x1="102.9" y1="221" x2="113.3" y2="215"/>
          <path class="arc" d="M111.3,225 A44,44 0 0 1 114,240"/>
          <line class="tick" x1="107.4" y1="233.4" x2="119.2" y2="231.3"/>

          <path class="arc" d="M264,218.1 A34,34 0 0 1 301.6,208.1"/>
          <line class="tick" x1="280.9" y1="213.5" x2="276.9" y2="202.2"/>
          <line class="tick" x1="284.7" y1="212.5" x2="282.4" y2="200.7"/>
          <path class="arc" d="M301.6,208.1 A34,34 0 0 1 324,240"/>
          <line class="tick" x1="311.7" y1="222.4" x2="321.1" y2="214.8"/>
          <line class="tick" x1="314" y1="225.6" x2="324.3" y2="219.4"/>

          <circle class="pt" cx="180" cy="147.7" r="3.2"/>
          <circle class="pt" cx="70" cy="240" r="3.2"/>
          <circle class="pt" cx="290" cy="240" r="3.2"/>
          <circle class="pt" cx="264.3" cy="310.7" r="3.2"/>
          <circle class="pt" cx="223.4" cy="184.2" r="3.2"/>
          <circle class="pt" cx="323.6" cy="147.7" r="3.2"/>

          <text x="180" y="135.7" text-anchor="middle">A</text>
          <text x="61" y="245" text-anchor="end">B</text>
          <text x="303" y="263">C</text>
          <text x="264.3" y="330.7" text-anchor="middle">D</text>
          <text x="226" y="169" text-anchor="middle">E</text>
          <text x="331.6" y="141.7">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '|AB| = |AC| ve m(BAC) = 100°',
      '[BF] iç açıortay, [CF] dış açıortay',
      'D, C, F doğrusal',
      '[BD] ⊥ [DF]',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, DBC açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' },
      { key: 'E', text: '35' },
    ],
    answer: 'B',
    hint: 'Önce C köşesindeki dış açının yarısını bul; m(BCD) ona ters açıdır.',
    solution: [
      {
        title: 'Taban açılarını bul',
        detail: '|AB| = |AC| ve m(BAC) = 100° olduğundan m(ABC) = m(ACB) = (180 − 100) / 2 = 40°.',
      },
      {
        title: 'Dış açıortayı kullan',
        detail:
          'C köşesindeki dış açı 180 − 40 = 140°’dir. [CF dış açıortay olduğundan bu açıyı ikiye böler: dış açıortayın [BC ışınının uzantısıyla yaptığı açı 140 / 2 = 70° olur.',
      },
      {
        title: 'Ters açıya geç',
        detail:
          'D, C, F doğrusal ve B, C ile uzantısı doğrusal olduğundan m(BCD) ile bu 70°’lik açı ters açılardır: m(BCD) = 70°.',
      },
      {
        title: 'Dik üçgeni kur',
        detail: '[BD] ⊥ [DF] ve D, C, F doğrusal olduğundan m(BDC) = 90°’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'BDC üçgeninde m(DBC) = 180 − 90 − 70 = 20° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 51
  {
    id: 'triangles-51',
    topic: 'Kesişen çevriyanlar',
    figure: {
      viewBox: '0 13 400 314',
      caption: 'Şekil 51',
      label:
        'ABC üçgeninde [AC] üzerindeki D noktası B ile, [AB] üzerindeki E noktası C ile birleştirilmiş; bu iki parça F noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M115.1,43.9 L70,300 L330,300 L115.1,43.9"/>
          <path class="ln" d="M70,300 L188.3,131.1"/>
          <path class="ln" d="M330,300 L81.7,233.5"/>

          <path class="arc" d="M109.2,77.4 A34,34 0 0 0 137,70"/>
          <text class="val" x="129.1" y="101.1" text-anchor="middle">50°</text>

          <path class="arc" d="M79.7,244.9 A56,56 0 0 1 102.1,254.1"/>
          <text class="val" x="104.4" y="221.8" text-anchor="middle">x</text>

          <path class="arc" d="M275.9,285.5 A56,56 0 0 1 294,257.1"/>
          <text class="val" x="265.9" y="264.2" text-anchor="middle">y</text>

          <path class="arc" d="M96.2,262.6 A26,26 0 0 0 136.2,248.1"/>
          <text class="val" x="126.8" y="289.6" text-anchor="middle">110°</text>

          <circle class="pt" cx="115.1" cy="43.9" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="188.3" cy="131.1" r="3.2"/>
          <circle class="pt" cx="81.7" cy="233.5" r="3.2"/>
          <circle class="pt" cx="111.1" cy="241.3" r="3.2"/>

          <text x="115.1" y="31.9" text-anchor="middle">A</text>
          <text x="62" y="318" text-anchor="end">B</text>
          <text x="338" y="318">C</text>
          <text x="197.3" y="127.1">D</text>
          <text x="72.7" y="229.5" text-anchor="end">E</text>
          <text x="128" y="235">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AC] ve E ∈ [AB]',
      '[BD] ∩ [CE] = {F}',
      'm(BAC) = 50°',
      'm(BFC) = 110°',
      'm(ABD) = x, m(ACE) = y',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x + y toplamı kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '40' },
      { key: 'C', text: '50' },
      { key: 'D', text: '60' },
      { key: 'E', text: '70' },
    ],
    answer: 'D',
    hint: 'BFC üçgeninin ve ABC üçgeninin açı toplamlarını yan yana yazarsan x + y kendiliğinden çıkar.',
    solution: [
      {
        title: 'F’deki açıları yaz',
        detail:
          '[BD] ve [CE] parçaları F’de kesiştiğinden m(FBC) = m(ABC) − x ve m(FCB) = m(ACB) − y olur.',
      },
      {
        title: 'BFC üçgeni',
        detail: 'BFC üçgeninde m(FBC) + m(FCB) = 180 − 110 = 70° bulunur.',
      },
      {
        title: 'ABC üçgeni',
        detail: 'ABC üçgeninde m(ABC) + m(ACB) = 180 − 50 = 130° olur.',
      },
      {
        title: 'İki eşitliği birleştir',
        detail: '(m(ABC) − x) + (m(ACB) − y) = 70 → 130 − (x + y) = 70 yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'x + y = 60° bulunur. Kısaca m(BFC) = m(BAC) + x + y bağıntısı da aynı sonucu verir: 110 = 50 + (x + y).',
      },
    ],
  },

  // ---------------------------------------------------------------- 52
  {
    id: 'triangles-52',
    topic: 'Eşit uzunluklar ve dörtgende açılar',
    figure: {
      viewBox: '0 31 400 338',
      caption: 'Şekil 52',
      label:
        'ABCD dörtgeninde D noktası A, B ve C köşelerine eşit uzaklıkta; [BD] köşegeni çizilmiş.',
      svg: `
          <path class="ln" d="M208.6,61.5 L130,230 L159.5,340 L350,230 L208.6,61.5"/>
          <path class="ln" d="M130,230 L350,230"/>

          <line class="tick" x1="283.9" y1="141.9" x2="274.7" y2="149.6"/>
          <line class="tick" x1="240" y1="224" x2="240" y2="236"/>
          <line class="tick" x1="251.7" y1="279.8" x2="257.7" y2="290.2"/>

          <path class="arc" d="M149.4,188.3 A46,46 0 0 1 141.9,274.4"/>
          <text class="val" x="195.7" y="240.8" text-anchor="middle">140°</text>

          <circle class="pt" cx="208.6" cy="61.5" r="3.2"/>
          <circle class="pt" cx="130" cy="230" r="3.2"/>
          <circle class="pt" cx="159.5" cy="340" r="3.2"/>
          <circle class="pt" cx="350" cy="230" r="3.2"/>

          <text x="208.6" y="49.5" text-anchor="middle">A</text>
          <text x="121" y="226" text-anchor="end">B</text>
          <text x="159.5" y="360" text-anchor="middle">C</text>
          <text x="359" y="235">D</text>
        `,
    },
    given: ['|AD| = |BD| = |CD|', 'm(ABC) = 140°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ADC açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '70' },
      { key: 'B', text: '75' },
      { key: 'C', text: '80' },
      { key: 'D', text: '85' },
      { key: 'E', text: '90' },
    ],
    answer: 'C',
    hint: 'ABD ile BCD üçgenlerinin ikisi de ikizkenardır; ABCD dörtgeninin iç açıları toplamı 360°’dir.',
    solution: [
      {
        title: 'B’deki açıyı böl',
        detail:
          'm(ABD) = a ve m(DBC) = b diyelim. [BD], ABC açısının içinden geçtiğinden a + b = 140° olur.',
      },
      {
        title: 'ABD ikizkenar üçgeni',
        detail: '|AD| = |BD| olduğundan taban açıları eşittir: m(DAB) = m(ABD) = a.',
      },
      {
        title: 'BCD ikizkenar üçgeni',
        detail: '|BD| = |CD| olduğundan taban açıları eşittir: m(BCD) = m(DBC) = b.',
      },
      {
        title: 'Dörtgenin açılarını topla',
        detail: 'ABCD dörtgeninde iç açılar toplamı 360°’dir: a + 140 + b + m(ADC) = 360 yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'a + b = 140 olduğundan m(ADC) = 360 − 140 − 140 = 80° bulunur. Kısaca m(ADC) = 360 − 2 · m(ABC)’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 53
  {
    id: 'triangles-53',
    topic: 'Orta dikme ve ikizkenar üçgenler',
    figure: {
      viewBox: '0 130 400 198',
      caption: 'Şekil 53',
      label:
        'ABC üçgeninde [BC] üzerindeki D noktası A ile birleştirilmiş; D’den [AC] kenarına inen [DE] dikmesi E noktasında [AC]’yi ortalıyor.',
      svg: `
          <path class="ln" d="M155.5,160.7 L30,300 L370,300 L155.5,160.7"/>
          <path class="ln" d="M155.5,160.7 L217.5,300"/>
          <path class="ln" d="M217.5,300 L262.7,230.3"/>
          <path class="ln" d="M273.6,237.4 L266.5,248.3 L255.6,241.2"/>

          <line class="tick" x1="97.2" y1="234.4" x2="88.3" y2="226.3"/>
          <line class="tick" x1="123.7" y1="294" x2="123.7" y2="306"/>

          <line class="tick" x1="210.3" y1="189.1" x2="203.7" y2="199.2"/>
          <line class="tick" x1="214.5" y1="191.8" x2="207.9" y2="201.9"/>
          <line class="tick" x1="317.5" y1="258.8" x2="311" y2="268.8"/>
          <line class="tick" x1="321.7" y1="261.5" x2="315.2" y2="271.6"/>

          <path class="arc" d="M60.8,265.8 A46,46 0 0 1 76,300"/>
          <text class="val" x="90.3" y="278.2" text-anchor="middle">48°</text>

          <path class="arc" d="M330,300 A40,40 0 0 1 336.5,278.2"/>
          <text class="val" x="312.5" y="288" text-anchor="middle">α</text>

          <circle class="pt" cx="155.5" cy="160.7" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="217.5" cy="300" r="3.2"/>
          <circle class="pt" cx="262.7" cy="230.3" r="3.2"/>

          <text x="155.5" y="148.7" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="217.5" y="320" text-anchor="middle">D</text>
          <text x="270.7" y="224.3">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [BC] ve E ∈ [AC]',
      '[DE] ⊥ [AC]',
      '|AE| = |EC|',
      '|BA| = |BD|',
      'm(ABC) = 48°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCA) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '33' },
      { key: 'B', text: '35' },
      { key: 'C', text: '37' },
      { key: 'D', text: '39' },
      { key: 'E', text: '41' },
    ],
    answer: 'A',
    hint: '[DE], [AC] parçasının orta dikmesidir; orta dikme üzerindeki nokta uç noktalara eşit uzaklıktadır.',
    solution: [
      {
        title: 'ABD ikizkenar üçgeni',
        detail:
          '|BA| = |BD| olduğundan ABD üçgeninde tepe açısı B’dir: m(BAD) = m(BDA) = (180 − 48) / 2 = 66°.',
      },
      {
        title: 'D’deki doğrusal açı',
        detail: 'B, D, C doğrusal olduğundan m(ADC) = 180 − 66 = 114° olur.',
      },
      {
        title: 'Orta dikmeyi gör',
        detail:
          '[DE] ⊥ [AC] ve |AE| = |EC| olduğundan [DE], [AC]’nin orta dikmesidir. Orta dikme üzerindeki her nokta uç noktalara eşit uzaklıkta olduğundan |DA| = |DC| bulunur.',
      },
      {
        title: 'ADC ikizkenar üçgeni',
        detail:
          '|DA| = |DC| olduğundan taban açıları eşittir: m(DAC) = m(DCA) = α ve 114 + 2α = 180 yazılır.',
      },
      {
        title: 'Sonuç',
        detail: '2α = 66 → α = 33° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 54
  {
    id: 'triangles-54',
    topic: 'Eşkenar üçgen ve çevrel çember merkezi',
    figure: {
      viewBox: '0 35 400 296',
      caption: 'Şekil 54',
      label:
        'Eşkenar ABC üçgeninin dışındaki D noktası A ve C ile birleştirilmiş; [BD] parçası [AC] kenarını E noktasında kesiyor ve |AC| = |AD|.',
      svg: `
          <path class="ln" d="M180,126.8 L80,300 L280,300 L180,126.8"/>
          <path class="ln" d="M180,126.8 L367.9,58.4"/>
          <path class="ln" d="M280,300 L367.9,58.4"/>
          <path class="ln" d="M80,300 L367.9,58.4"/>

          <line class="tick" x1="135.2" y1="216.4" x2="124.8" y2="210.4"/>
          <line class="tick" x1="180" y1="294" x2="180" y2="306"/>
          <line class="tick" x1="271.9" y1="87" x2="276" y2="98.2"/>

          <path class="arc" d="M115.2,270.4 A46,46 0 0 1 126,300"/>
          <text class="val" x="142" y="282.4" text-anchor="middle">40°</text>

          <path class="arc" d="M200,161.4 A40,40 0 0 0 217.6,113.1"/>
          <text class="val" x="236.4" y="152.3" text-anchor="middle">x</text>

          <circle class="pt" cx="180" cy="126.8" r="3.2"/>
          <circle class="pt" cx="80" cy="300" r="3.2"/>
          <circle class="pt" cx="280" cy="300" r="3.2"/>
          <circle class="pt" cx="367.9" cy="58.4" r="3.2"/>
          <circle class="pt" cx="214.7" cy="186.9" r="3.2"/>

          <text x="171" y="122.8" text-anchor="end">A</text>
          <text x="72" y="318" text-anchor="end">B</text>
          <text x="278" y="320" text-anchor="end">C</text>
          <text x="376.9" y="53.4">D</text>
          <text x="236" y="193">E</text>
        `,
    },
    given: ['ABC eşkenar üçgen', 'B, E, D doğrusal ve E ∈ [AC]', '|AC| = |AD|', 'm(DBC) = 40°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CAD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '75' },
      { key: 'B', text: '80' },
      { key: 'C', text: '85' },
      { key: 'D', text: '90' },
      { key: 'E', text: '95' },
    ],
    answer: 'B',
    hint: '|AB| = |AC| = |AD| olduğuna dikkat et; ABD üçgeni de ikizkenardır.',
    solution: [
      {
        title: 'Eşkenar üçgeni yaz',
        detail: 'ABC eşkenar olduğundan m(ABC) = m(BAC) = 60° ve |AB| = |AC|’dir.',
      },
      {
        title: 'ABD açısını bul',
        detail:
          '[BD], ABC açısının dışına taşmadığından m(ABD) = m(ABC) − m(DBC) = 60 − 40 = 20° olur.',
      },
      {
        title: 'ABD ikizkenar üçgeni',
        detail:
          '|AC| = |AD| ve |AB| = |AC| olduğundan |AB| = |AD|’dir. ABD üçgeninde tepe açısı A olduğundan m(ADB) = m(ABD) = 20°.',
      },
      {
        title: 'BAD açısını bul',
        detail: 'ABD üçgeninde m(BAD) = 180 − 20 − 20 = 140° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[AC], BAD açısının içinden geçtiğinden x = m(CAD) = m(BAD) − m(BAC) = 140 − 60 = 80° bulunur.',
      },
      {
        title: 'Kısa yol',
        detail:
          '|AB| = |AC| = |AD| olduğundan A noktası BCD üçgeninin çevrel çemberinin merkezidir. CD yayını gören çevre açı m(DBC) = 40°, aynı yayı gören merkez açı m(CAD) olduğundan x = 2 · 40 = 80°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 55
  {
    id: 'triangles-55',
    topic: 'İç açıortayların kesim noktası',
    figure: {
      viewBox: '0 43 400 284',
      caption: 'Şekil 55',
      label:
        'ABC üçgeninde B ve C köşelerinin iç açıortayları üçgenin içindeki D noktasında kesişiyor; A köşesi de D ile birleştirilmiş.',
      svg: `
          <path class="ln" d="M170.4,74.1 L40,300 L360,300 L170.4,74.1"/>
          <path class="ln" d="M40,300 L183,217.5"/>
          <path class="ln" d="M360,300 L183,217.5"/>
          <path class="ln" d="M170.4,74.1 L183,217.5"/>

          <path class="arc" d="M61,263.6 A42,42 0 0 1 76.4,279"/>
          <line class="tick" x1="65.5" y1="274.5" x2="73.9" y2="266.1"/>
          <path class="arc" d="M76.4,279 A42,42 0 0 1 82,300"/>
          <line class="tick" x1="74.8" y1="290.7" x2="86.4" y2="287.6"/>

          <path class="arc" d="M327.4,284.8 A36,36 0 0 1 336.9,272.4"/>
          <line class="tick" x1="335" y1="283.4" x2="325" y2="276.8"/>
          <line class="tick" x1="337.5" y1="280.1" x2="328.5" y2="272.2"/>
          <path class="arc" d="M324,300 A36,36 0 0 1 327.4,284.8"/>
          <line class="tick" x1="330.3" y1="295.6" x2="318.5" y2="293.8"/>
          <line class="tick" x1="331.2" y1="291.5" x2="319.7" y2="288.1"/>

          <path class="arc" d="M153.4,103.5 A34,34 0 0 0 173.4,108"/>
          <text class="val" x="159.2" y="129.9" text-anchor="middle">α</text>

          <path class="arc" d="M160.5,230.5 A26,26 0 0 0 206.5,228.4"/>
          <text class="val" x="185" y="268.4" text-anchor="middle">125°</text>

          <circle class="pt" cx="170.4" cy="74.1" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="360" cy="300" r="3.2"/>
          <circle class="pt" cx="183" cy="217.5" r="3.2"/>

          <text x="170.4" y="62.1" text-anchor="middle">A</text>
          <text x="32" y="318" text-anchor="end">B</text>
          <text x="368" y="318">C</text>
          <text x="196" y="211.5">D</text>
        `,
    },
    given: ['ABC bir üçgen', '[BD] ve [CD] açıortay', 'm(BDC) = 125°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '25' },
      { key: 'B', text: '30' },
      { key: 'C', text: '35' },
      { key: 'D', text: '40' },
      { key: 'E', text: '45' },
    ],
    answer: 'C',
    hint: 'İki iç açıortayın kesim noktasından üçüncü açıortay da geçer.',
    solution: [
      {
        title: 'D noktasını tanı',
        detail:
          '[BD] ve [CD] iç açıortayları D noktasında kesiştiğinden D, ABC üçgeninin iç teğet çemberinin merkezidir; dolayısıyla [AD] de A köşesinin açıortayıdır.',
      },
      {
        title: 'Yarım açılara ad ver',
        detail:
          'm(ABC) = 2b ve m(ACB) = 2c olsun. Açıortaylar yüzünden BDC üçgeninde m(DBC) = b, m(DCB) = c olur.',
      },
      {
        title: 'BDC üçgenini yaz',
        detail: 'BDC üçgeninde b + c = 180 − m(BDC) = 180 − 125 = 55° bulunur.',
      },
      {
        title: 'A açısını bul',
        detail: 'ABC üçgeninde m(BAC) + 2b + 2c = 180 → m(BAC) = 180 − 2 · 55 = 70° olur.',
      },
      {
        title: 'Sonuç',
        detail: '[AD] açıortay olduğundan α = m(BAD) = 70 / 2 = 35° bulunur.',
      },
      {
        title: 'Kısa yol',
        detail:
          'İki iç açıortay arasındaki açı m(BDC) = 90 + m(BAC) / 2 bağıntısını sağlar: 125 = 90 + m(BAC) / 2 → m(BAC) = 70 ve α = 35°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 56
  {
    id: 'triangles-56',
    topic: 'İkizkenar üçgende zincirleme açı',
    figure: {
      viewBox: '0 100 400 229',
      caption: 'Şekil 56',
      label:
        'İkizkenar ABC üçgeninde [BC] üzerindeki D noktası A ile birleştirilmiş; [AC] üzerindeki E noktası da D ile birleştirilmiş ve |AD| = |AE|.',
      svg: `
          <path class="ln" d="M200,130 L30,300 L370,300 L200,130"/>
          <path class="ln" d="M200,130 L279.3,300"/>
          <path class="ln" d="M279.3,300 L332.6,262.6"/>

          <line class="tick" x1="244" y1="210.2" x2="233.1" y2="215.3"/>
          <line class="tick" x1="246.1" y1="214.7" x2="235.3" y2="219.8"/>
          <line class="tick" x1="268.8" y1="190.3" x2="260.3" y2="198.8"/>
          <line class="tick" x1="272.3" y1="193.8" x2="263.8" y2="202.3"/>

          <path class="arc" d="M174.5,155.5 A36,36 0 0 0 215.2,162.6"/>
          <text class="val" x="190.6" y="188.2" text-anchor="middle">α</text>

          <path class="arc" d="M303.8,282.8 A30,30 0 0 1 309.3,300"/>
          <text class="val" x="330.8" y="288.8" text-anchor="middle">35°</text>

          <circle class="pt" cx="200" cy="130" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="279.3" cy="300" r="3.2"/>
          <circle class="pt" cx="332.6" cy="262.6" r="3.2"/>

          <text x="200" y="118" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="279.3" y="320" text-anchor="middle">D</text>
          <text x="341.6" y="257.6">E</text>
        `,
    },
    given: ['ABC bir üçgen', '|AB| = |AC|', 'D ∈ [BC] ve E ∈ [AC]', '|AD| = |AE|', 'm(EDC) = 35°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'm(ADC) açısını hem ABD üçgeninin dış açısı olarak hem de m(ADE) + m(EDC) olarak yaz.',
    solution: [
      {
        title: 'Taban açılarına ad ver',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = β’dir.',
      },
      {
        title: 'ADC dış açısı',
        detail:
          'ABD üçgeninde m(ADC), D köşesinin dış açısıdır ve uzak iki iç açının toplamına eşittir: m(ADC) = β + α.',
      },
      {
        title: 'ADE açısını yaz',
        detail: 'E, ADC açısının içinde kaldığından m(ADE) = m(ADC) − m(EDC) = β + α − 35° olur.',
      },
      {
        title: 'AED dış açısı',
        detail:
          'DEC üçgeninde m(AED), E köşesinin dış açısıdır: m(AED) = m(EDC) + m(ECD) = 35 + β bulunur.',
      },
      {
        title: 'İkizkenarlığı kullan',
        detail:
          '|AD| = |AE| olduğundan ADE üçgeninde taban açıları eşittir: β + α − 35 = 35 + β yazılır.',
      },
      {
        title: 'Sonuç',
        detail: 'β sadeleşir ve α = 2 · 35 = 70° bulunur; sonuç β’den bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 57
  {
    id: 'triangles-57',
    topic: 'Ardışık ikizkenar üçgenler',
    figure: {
      viewBox: '0 137 400 192',
      caption: 'Şekil 57',
      label:
        'ABC üçgeninde [BC] üzerindeki D noktası A ile, [AC] üzerindeki E noktası da D ile birleştirilmiş.',
      svg: `
          <path class="ln" d="M141,167.8 L30,300 L370,300 L141,167.8"/>
          <path class="ln" d="M141,167.8 L164.3,300"/>
          <path class="ln" d="M164.3,300 L267.1,240.6"/>

          <line class="tick" x1="146.7" y1="234.9" x2="158.5" y2="232.8"/>
          <line class="tick" x1="97.1" y1="306" x2="97.1" y2="294"/>

          <line class="tick" x1="220.9" y1="274.3" x2="214.9" y2="263.9"/>
          <line class="tick" x1="216.5" y1="276.8" x2="210.5" y2="266.4"/>
          <line class="tick" x1="319.4" y1="263.9" x2="313.4" y2="274.3"/>
          <line class="tick" x1="323.7" y1="266.4" x2="317.7" y2="276.8"/>

          <path class="arc" d="M121.7,190.7 A30,30 0 0 0 166.9,182.8"/>
          <text class="val" x="127.5" y="223" text-anchor="middle">100°</text>

          <path class="arc" d="M159.4,272.4 A28,28 0 0 1 188.5,286"/>
          <text class="val" x="184.6" y="261.5" text-anchor="middle">70°</text>

          <path class="arc" d="M330,300 A40,40 0 0 1 335.4,280"/>
          <text class="val" x="314" y="290" text-anchor="middle">α</text>

          <circle class="pt" cx="141" cy="167.8" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="164.3" cy="300" r="3.2"/>
          <circle class="pt" cx="267.1" cy="240.6" r="3.2"/>

          <text x="141" y="155.8" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="164.3" y="320" text-anchor="middle">D</text>
          <text x="276.1" y="234.6">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [BC] ve E ∈ [AC]',
      '|DA| = |DB|',
      '|ED| = |EC|',
      'm(BAC) = 100°',
      'm(ADE) = 70°',
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
    hint: 'B, D, C doğrusal olduğundan D köşesindeki üç açının toplamı 180°’dir.',
    solution: [
      {
        title: 'İki ikizkenar üçgeni yaz',
        detail:
          '|DA| = |DB| olduğundan ABD üçgeninde m(DAB) = m(ABC) = β; |ED| = |EC| olduğundan DEC üçgeninde m(EDC) = m(ACB) = α olur.',
      },
      {
        title: 'ADB açısını bul',
        detail: 'ABD üçgeninde m(ADB) = 180 − 2β yazılır.',
      },
      {
        title: 'D’deki doğrusal açı',
        detail:
          'B, D, C doğrusal olduğundan m(ADB) + m(ADE) + m(EDC) = 180 → (180 − 2β) + 70 + α = 180 olur.',
      },
      {
        title: 'Birinci denklem',
        detail: 'Sadeleştirince α = 2β − 70 bulunur.',
      },
      {
        title: 'Üçgenin açı toplamı',
        detail: 'ABC üçgeninde 100 + β + α = 180 → β + α = 80 yazılır.',
      },
      {
        title: 'Sonuç',
        detail: 'β + (2β − 70) = 80 → 3β = 150, β = 50 ve α = 80 − 50 = 30° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 58
  {
    id: 'triangles-58',
    topic: 'Eşit uzunluklarla kurulan ikizkenar üçgenler',
    figure: {
      viewBox: '0 72 400 257',
      caption: 'Şekil 58',
      label:
        'ABC üçgeninde [AB] üzerindeki E noktası C ile birleştirilmiş; [BC] üzerindeki D noktası da E ile birleştirilmiş ve C’den A, E, D noktalarına olan uzaklıklar eşit.',
      svg: `
          <path class="ln" d="M200,103.4 L35,300 L365,300 L200,103.4"/>
          <path class="ln" d="M365,300 L142.7,171.7"/>
          <path class="ln" d="M142.7,171.7 L108.3,300"/>

          <line class="tick" x1="277.9" y1="205.5" x2="287.1" y2="197.8"/>
          <line class="tick" x1="250.8" y1="241" x2="256.8" y2="230.6"/>
          <line class="tick" x1="236.7" y1="306" x2="236.7" y2="294"/>

          <path class="arc" d="M114.4,205.4 A44,44 0 0 0 131.3,214.2"/>
          <text class="val" x="101.1" y="256.5" text-anchor="middle">25°</text>

          <circle class="pt" cx="200" cy="103.4" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="365" cy="300" r="3.2"/>
          <circle class="pt" cx="108.3" cy="300" r="3.2"/>
          <circle class="pt" cx="142.7" cy="171.7" r="3.2"/>

          <text x="200" y="91.4" text-anchor="middle">A</text>
          <text x="27" y="318" text-anchor="end">B</text>
          <text x="373" y="318">C</text>
          <text x="108.3" y="320" text-anchor="middle">D</text>
          <text x="133.7" y="166.7" text-anchor="end">E</text>
        `,
    },
    given: ['ABC bir üçgen', 'E ∈ [AB] ve D ∈ [BC]', '|CA| = |CE| = |CD|', 'm(BED) = 25°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ACB açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '40' },
      { key: 'C', text: '45' },
      { key: 'D', text: '50' },
      { key: 'E', text: '60' },
    ],
    answer: 'D',
    hint: 'Önce CAE, sonra CED ikizkenar üçgenini yaz; E köşesindeki doğrusal açı ikisini birleştirir.',
    solution: [
      {
        title: 'Açılara ad ver',
        detail: 'm(BAC) = A, m(ABC) = B ve m(ACB) = C olsun; A + B + C = 180°’dir.',
      },
      {
        title: 'CAE ikizkenar üçgeni',
        detail:
          '|CA| = |CE| olduğundan m(CEA) = m(CAE) = A ve tepe açısı m(ACE) = 180 − 2A bulunur.',
      },
      {
        title: 'ECD açısını bul',
        detail:
          'm(ECD) = C − m(ACE) = C − 180 + 2A olur. A + B + C = 180 olduğundan C − 180 = −A − B ve m(ECD) = A − B bulunur.',
      },
      {
        title: 'CED ikizkenar üçgeni',
        detail:
          '|CE| = |CD| olduğundan taban açıları eşittir: m(CED) = m(CDE) = (180 − (A − B)) / 2 = 90 − (A − B) / 2.',
      },
      {
        title: 'E’deki doğrusal açı',
        detail:
          'A, E, B doğrusal olduğundan m(BED) = 180 − m(AEC) − m(CED) = 180 − A − 90 + (A − B) / 2 = 90 − (A + B) / 2 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A + B = 180 − C olduğundan m(BED) = 90 − (180 − C) / 2 = C / 2’dir. Buradan C = 2 · 25 = 50° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 59
  {
    id: 'triangles-59',
    topic: 'İki orta dikmeyle kurulan ikizkenar üçgenler',
    figure: {
      viewBox: '0 98 400 231',
      caption: 'Şekil 59',
      label:
        'ABC üçgeninde A’dan [BC] kenarına inen [AH] yüksekliği çizilmiş; [BC] üzerindeki E noktası A ile birleştirilmiş ve E’den [AC] kenarına [ED] dikmesi inmiş.',
      svg: `
          <path class="ln" d="M106.3,128.7 L30,300 L370,300 L106.3,128.7"/>
          <path class="ln" d="M106.3,128.7 L106.3,300"/>
          <path class="ln" d="M106.3,128.7 L182.5,300"/>
          <path class="ln" d="M182.5,300 L238.1,214.4"/>

          <path class="ln" d="M117.3,300 L117.3,289 L106.3,289"/>
          <path class="ln" d="M232.1,223.6 L241.4,229.6 L247.4,220.4"/>

          <line class="tick" x1="68.1" y1="294" x2="68.1" y2="306"/>
          <line class="tick" x1="144.4" y1="294" x2="144.4" y2="306"/>

          <line class="tick" x1="173.4" y1="165.1" x2="166.8" y2="175.2"/>
          <line class="tick" x1="177.6" y1="167.9" x2="171" y2="177.9"/>
          <line class="tick" x1="305.2" y1="250.8" x2="298.7" y2="260.9"/>
          <line class="tick" x1="309.4" y1="253.5" x2="302.9" y2="263.6"/>

          <path class="arc" d="M92.4,159.8 A34,34 0 0 0 106.3,162.7"/>
          <text class="val" x="86.4" y="227.6" text-anchor="middle">24°</text>

          <path class="arc" d="M328,300 A42,42 0 0 1 334.8,277.1"/>
          <text class="val" x="312.5" y="288" text-anchor="middle">α</text>

          <circle class="pt" cx="106.3" cy="128.7" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="106.3" cy="300" r="3.2"/>
          <circle class="pt" cx="182.5" cy="300" r="3.2"/>
          <circle class="pt" cx="238.1" cy="214.4" r="3.2"/>

          <text x="106.3" y="116.7" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="106.3" y="320" text-anchor="middle">H</text>
          <text x="182.5" y="320" text-anchor="middle">E</text>
          <text x="247.1" y="208.4">D</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'B, H, E, C doğrusal',
      '[AH] ⊥ [BC] ve [ED] ⊥ [AC]',
      '|BH| = |HE|',
      'D ∈ [AC] ve |AD| = |DC|',
      'm(BAH) = 24°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '29' },
      { key: 'B', text: '31' },
      { key: 'C', text: '33' },
      { key: 'D', text: '35' },
      { key: 'E', text: '37' },
    ],
    answer: 'C',
    hint: 'Hem [AH] hem de [ED] birer orta dikmedir; her biri bir ikizkenar üçgen doğurur.',
    solution: [
      {
        title: 'ABH dik üçgeni',
        detail: 'm(AHB) = 90° ve m(BAH) = 24° olduğundan m(ABH) = 90 − 24 = 66° bulunur.',
      },
      {
        title: '[AH] orta dikmedir',
        detail:
          '|BH| = |HE| ve [AH] ⊥ [BE] olduğundan [AH], [BE] parçasının orta dikmesidir; buradan |AB| = |AE| olur.',
      },
      {
        title: 'ABE ikizkenar üçgeni',
        detail: '|AB| = |AE| olduğundan m(AEB) = m(ABE) = 66°’dir.',
      },
      {
        title: '[ED] orta dikmedir',
        detail:
          '|AD| = |DC| ve [ED] ⊥ [AC] olduğundan [ED], [AC] parçasının orta dikmesidir; buradan |EA| = |EC| ve AEC üçgeninde m(EAC) = m(ECA) = α olur.',
      },
      {
        title: 'Dış açı bağıntısı',
        detail:
          'B, E, C doğrusal olduğundan m(AEB), AEC üçgeninin E köşesindeki dış açısıdır: 66 = α + α.',
      },
      {
        title: 'Sonuç',
        detail: '2α = 66 → α = 33° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 60
  {
    id: 'triangles-60',
    topic: 'Açıortay ve yükseklikle kurulan ikizkenar üçgen',
    figure: {
      viewBox: '0 68 400 259',
      caption: 'Şekil 60',
      label:
        'ABC üçgeninde B köşesinden [AC] kenarına inen [BH] yüksekliği ile B köşesinin açıortayı [BN] çizilmiş; H ve N noktaları [AC] üzerindedir.',
      svg: `
          <path class="ln" d="M160.8,90.8 L40,300 L370,300 L160.8,90.8"/>
          <path class="ln" d="M40,300 L205,135"/>
          <path class="ln" d="M40,300 L249.2,179.2"/>

          <path class="ln" d="M212.8,142.8 L205,150.6 L197.2,142.8"/>

          <line class="tick" x1="106.8" y1="196.2" x2="96.4" y2="190.2"/>
          <line class="tick" x1="104.3" y1="200.6" x2="93.9" y2="194.6"/>
          <line class="tick" x1="139.4" y1="235.7" x2="145.4" y2="246.1"/>
          <line class="tick" x1="143.8" y1="233.2" x2="149.8" y2="243.6"/>

          <path class="arc" d="M66,255 A52,52 0 0 1 76.8,263.2"/>
          <text class="val" x="89.9" y="239.9" text-anchor="middle">x</text>

          <circle class="pt" cx="160.8" cy="90.8" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="205" cy="135" r="3.2"/>
          <circle class="pt" cx="249.2" cy="179.2" r="3.2"/>

          <text x="151.8" y="86.8" text-anchor="end">A</text>
          <text x="32" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="212" y="129">H</text>
          <text x="257.2" y="175.2">N</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'H ∈ [AC] ve N ∈ [AC]',
      '[BH] ⊥ [AC]',
      '[BN], ABC açısının açıortayı',
      '|AB| = |BN|',
      'm(BAC) = m(ACB) + 30°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABH) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '10' },
      { key: 'C', text: '15' },
      { key: 'D', text: '20' },
      { key: 'E', text: '25' },
    ],
    answer: 'C',
    hint: 'Önce BNC üçgeninde m(BNC) açısını yaz; C açısı sadeleşir.',
    solution: [
      {
        title: 'Açılara ad ver',
        detail:
          'm(ACB) = c dersek m(BAC) = c + 30 ve üçgenin açı toplamından m(ABC) = 180 − (2c + 30) = 150 − 2c olur.',
      },
      {
        title: 'Açıortayı kullan',
        detail: '[BN] açıortay olduğundan m(NBC) = (150 − 2c) / 2 = 75 − c bulunur.',
      },
      {
        title: 'BNC üçgeni',
        detail: 'BNC üçgeninde m(BNC) = 180 − c − (75 − c) = 105° olur; c sadeleşir.',
      },
      {
        title: 'BNA açısı',
        detail: 'A, N, C doğrusal olduğundan m(BNA) = 180 − 105 = 75° bulunur.',
      },
      {
        title: 'İkizkenarlığı kullan',
        detail:
          '|AB| = |BN| olduğundan ABN üçgeninde m(BAN) = m(BNA) = 75°’dir. Buradan c + 30 = 75 → c = 45 ve m(BAC) = 75° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'ABH dik üçgeninde m(AHB) = 90° olduğundan x = 90 − 75 = 15° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 61
  {
    id: 'triangles-61',
    topic: 'Yükseklik ile açıortay arasındaki açı',
    figure: {
      viewBox: '0 86 400 246',
      caption: 'Şekil 61',
      label:
        'ABC üçgeninde A köşesinden [BC] kenarına inen [AH] yüksekliği ile A köşesinin açıortayı [AN] çizilmiş; H ve N noktaları [BC] üzerindedir.',
      svg: `
          <path class="ln" d="M104,110.4 L35,300 L365,300 L104,110.4"/>
          <path class="ln" d="M104,110.4 L104,300"/>
          <path class="ln" d="M104,110.4 L162,300"/>

          <path class="ln" d="M115,300 L115,289 L104,289"/>

          <path class="arc" d="M80,300 A45,45 0 0 0 50.4,257.7"/>
          <text class="val" x="84" y="268" text-anchor="middle">70°</text>

          <path class="arc" d="M320,300 A45,45 0 0 1 328.6,273.6"/>
          <text class="val" x="300" y="283" text-anchor="middle">36°</text>

          <path class="arc" d="M104,175.4 A65,65 0 0 0 123,172.6"/>
          <text class="val" x="117" y="205" text-anchor="middle">α</text>

          <circle class="pt" cx="104" cy="110.4" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="365" cy="300" r="3.2"/>
          <circle class="pt" cx="104" cy="300" r="3.2"/>
          <circle class="pt" cx="162" cy="300" r="3.2"/>

          <text x="104" y="98.4" text-anchor="middle">A</text>
          <text x="27" y="318" text-anchor="end">B</text>
          <text x="373" y="318">C</text>
          <text x="104" y="320" text-anchor="middle">H</text>
          <text x="162" y="320" text-anchor="middle">N</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'H ∈ [BC] ve N ∈ [BC]',
      '[AH] ⊥ [BC]',
      'm(BAN) = m(NAC)',
      'm(ABC) = 70°',
      'm(ACB) = 36°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(HAN) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '17' },
      { key: 'C', text: '18' },
      { key: 'D', text: '20' },
      { key: 'E', text: '25' },
    ],
    answer: 'B',
    hint: 'Önce ABH dik üçgeninden m(BAH) açısını, sonra açıortaydan m(BAN) açısını yaz.',
    solution: [
      {
        title: 'ABH dik üçgeni',
        detail: 'm(AHB) = 90° ve m(ABH) = 70° olduğundan m(BAH) = 90 − 70 = 20° bulunur.',
      },
      {
        title: 'Tepe açısını bul',
        detail: 'ABC üçgeninde m(BAC) = 180 − 70 − 36 = 74° olur.',
      },
      {
        title: 'Açıortayı kullan',
        detail: '[AN] açıortay olduğundan m(BAN) = 74 / 2 = 37° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'α = m(BAN) − m(BAH) = 37 − 20 = 17° bulunur. Bu, (70 − 36) / 2 işlemiyle de aynı sonucu verir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 62
  {
    id: 'triangles-62',
    topic: 'İkizkenar üçgende eşit bölünen tepe açısı',
    figure: {
      viewBox: '0 135 400 197',
      caption: 'Şekil 62',
      label:
        'Tepe noktası A olan ikizkenar ABC üçgeninde tabandaki D ve E noktaları A ile birleştirilmiş; A köşesindeki açının BAD ve DAE parçaları eşit işaretlenmiş.',
      svg: `
          <path class="ln" d="M200,161.6 L35,300 L365,300 L200,161.6"/>
          <path class="ln" d="M200,161.6 L149.6,300"/>
          <path class="ln" d="M200,161.6 L224.4,300"/>

          <line class="tick" x1="113.6" y1="226.2" x2="121.4" y2="235.4"/>
          <line class="tick" x1="278.6" y1="235.4" x2="286.4" y2="226.2"/>

          <path class="arc" d="M163.2,192.4 A48,48 0 0 0 183.6,206.7"/>
          <text class="val" x="164" y="217" text-anchor="middle">y</text>

          <path class="arc" d="M183.6,206.7 A48,48 0 0 0 208.3,208.9"/>
          <text class="val" x="194" y="230" text-anchor="middle">y</text>

          <path class="arc" d="M208.3,208.9 A48,48 0 0 0 236.8,192.4"/>
          <text class="val" x="235" y="227" text-anchor="middle">40°</text>

          <path class="arc" d="M115.6,300 A34,34 0 0 1 161.2,268.1"/>
          <text class="val" x="119" y="262" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="161.6" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="365" cy="300" r="3.2"/>
          <circle class="pt" cx="149.6" cy="300" r="3.2"/>
          <circle class="pt" cx="224.4" cy="300" r="3.2"/>

          <text x="200" y="149.6" text-anchor="middle">A</text>
          <text x="27" y="318" text-anchor="end">B</text>
          <text x="373" y="318">C</text>
          <text x="149.6" y="320" text-anchor="middle">D</text>
          <text x="224.4" y="320" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '|AB| = |AC|',
      'D ∈ [BC] ve E ∈ [BC]',
      'm(BAD) = m(DAE)',
      'm(EAC) = 40°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '100' },
      { key: 'C', text: '105' },
      { key: 'D', text: '110' },
      { key: 'E', text: '115' },
    ],
    answer: 'D',
    hint: 'Eşit açılara y de; ABD üçgeninin açı toplamında y sadeleşir.',
    solution: [
      {
        title: 'Eşit açılara ad ver',
        detail: 'm(BAD) = m(DAE) = y olsun. m(EAC) = 40° verildiğinden m(BAC) = 2y + 40 olur.',
      },
      {
        title: 'Taban açılarını yaz',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = (180 − (2y + 40)) / 2 = 70 − y bulunur.',
      },
      {
        title: 'ABD üçgenini kur',
        detail: 'ABD üçgeninde α = 180 − m(ABD) − m(BAD) = 180 − (70 − y) − y yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'y sadeleşir ve α = 110° bulunur. Genel olarak m(ADB) = 90 + m(EAC) / 2 olduğu görülür.',
      },
    ],
  },

  // ---------------------------------------------------------------- 63
  {
    id: 'triangles-63',
    topic: 'Doğrusal tabanlı iki ikizkenar üçgen',
    figure: {
      viewBox: '0 138 400 194',
      caption: 'Şekil 63',
      label:
        'Tabanları aynı doğru üzerinde olan iki ikizkenar üçgen C noktasında birleşiyor: solda tepe noktası A olan ABC üçgeni, sağda tepe noktası D olan DCE üçgeni.',
      svg: `
          <path class="ln" d="M105,210.6 L30,300 L180,300 L105,210.6"/>
          <path class="ln" d="M275,164.3 L180,300 L370,300 L275,164.3"/>

          <line class="tick" x1="62.9" y1="251.4" x2="72.1" y2="259.2"/>
          <line class="tick" x1="137.9" y1="259.2" x2="147.1" y2="251.4"/>

          <line class="tick" x1="219.7" y1="232.9" x2="229.5" y2="239.7"/>
          <line class="tick" x1="225.5" y1="224.7" x2="235.3" y2="231.5"/>
          <line class="tick" x1="320.5" y1="239.7" x2="330.3" y2="232.9"/>
          <line class="tick" x1="314.7" y1="231.5" x2="324.5" y2="224.7"/>

          <path class="arc" d="M154.3,269.4 A40,40 0 0 1 202.9,267.2"/>
          <text class="val" x="177" y="247" text-anchor="middle">α</text>

          <circle class="pt" cx="105" cy="210.6" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="180" cy="300" r="3.2"/>
          <circle class="pt" cx="275" cy="164.3" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>

          <text x="105" y="198.6" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="180" y="320" text-anchor="middle">C</text>
          <text x="275" y="152.3" text-anchor="middle">D</text>
          <text x="378" y="318">E</text>
        `,
    },
    given: [
      'ABC ve DCE birer ikizkenar üçgen',
      'B, C, E doğrusal',
      '|AB| = |AC| ve |DC| = |DE|',
      'm(BAC) + m(CDE) = 150°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '75' },
      { key: 'B', text: '78' },
      { key: 'C', text: '80' },
      { key: 'D', text: '85' },
      { key: 'E', text: '90' },
    ],
    answer: 'A',
    hint: 'İki tabandaki açıyı tepe açıları cinsinden yaz; C köşesindeki üç açı bir doğru açı yapar.',
    solution: [
      {
        title: 'Birinci üçgenin taban açısı',
        detail: '|AB| = |AC| olduğundan m(ACB) = (180 − m(BAC)) / 2 = 90 − m(BAC) / 2 bulunur.',
      },
      {
        title: 'İkinci üçgenin taban açısı',
        detail: '|DC| = |DE| olduğundan m(DCE) = (180 − m(CDE)) / 2 = 90 − m(CDE) / 2 bulunur.',
      },
      {
        title: 'C köşesindeki doğru açı',
        detail: 'B, C, E doğrusal olduğundan m(ACB) + α + m(DCE) = 180° yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'α = 180 − (90 − m(BAC) / 2) − (90 − m(CDE) / 2) = (m(BAC) + m(CDE)) / 2 = 150 / 2 = 75° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 64
  {
    id: 'triangles-64',
    topic: 'Kesişen doğrularla kurulan ikizkenar üçgen',
    figure: {
      viewBox: '0 95 400 237',
      caption: 'Şekil 64',
      label:
        'Tepe noktası A olan ikizkenar ABC üçgeninde B’den çizilen [BD] doğru parçası [AC] kenarını E noktasında kesiyor; D noktası üçgenin dışında olup C ile birleştirilmiş.',
      svg: `
          <path class="ln" d="M180,121.2 L30,300 L330,300 L180,121.2"/>
          <path class="ln" d="M30,300 L299.7,168.5"/>
          <path class="ln" d="M299.7,168.5 L330,300"/>

          <path class="arc" d="M63.4,260.2 A52,52 0 0 1 76.7,277.2"/>
          <text class="val" x="92" y="257" text-anchor="middle">24°</text>

          <path class="arc" d="M296.6,260.2 A52,52 0 0 1 318.3,249.3"/>
          <text class="val" x="297" y="239" text-anchor="middle">27°</text>

          <path class="arc" d="M222.3,171.6 A32,32 0 0 0 214.1,210.1"/>
          <text class="val" x="192" y="190" text-anchor="middle">α</text>

          <circle class="pt" cx="180" cy="121.2" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="299.7" cy="168.5" r="3.2"/>
          <circle class="pt" cx="242.9" cy="196.1" r="3.2"/>

          <text x="180" y="109.2" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="338" y="318">C</text>
          <text x="307.7" y="164.5">D</text>
          <text x="234" y="191" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '|AB| = |AC|',
      '|BD| = |BC|',
      'm(ABD) = 24°',
      'm(ACD) = 27°',
      '[AC] ∩ [BD] = {E}',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BEA) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '68' },
      { key: 'B', text: '72' },
      { key: 'C', text: '76' },
      { key: 'D', text: '80' },
      { key: 'E', text: '84' },
    ],
    answer: 'C',
    hint: '|BD| = |BC| olduğundan BDC ikizkenar üçgeninin taban açıları eşittir; ikisi de x + 27’dir.',
    solution: [
      {
        title: 'Taban açılarına ad ver',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = x olsun.',
      },
      {
        title: 'BDC ikizkenar üçgeni',
        detail:
          '|BD| = |BC| olduğundan m(BDC) = m(BCD)’dir. D, [AC] kenarının dış tarafında olduğundan m(BCD) = m(BCA) + m(ACD) = x + 27 olur.',
      },
      {
        title: 'Açı toplamını yaz',
        detail:
          'm(DBC) = m(ABC) − m(ABD) = x − 24 olduğundan BDC üçgeninde (x − 24) + (x + 27) + (x + 27) = 180 yazılır.',
      },
      {
        title: 'x’i bul',
        detail: '3x + 30 = 180 → 3x = 150 ve x = 50° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'DEC üçgeninde m(DEC) = 180 − m(EDC) − m(ECD) = 180 − (50 + 27) − 27 = 76°’dir. m(BEA) ile m(DEC) ters açı olduğundan α = 76° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 65
  {
    id: 'triangles-65',
    topic: 'Zincirleme ikizkenar üçgenler',
    figure: {
      viewBox: '0 157 400 175',
      caption: 'Şekil 65',
      label:
        'ABC üçgeninde [BC] üzerindeki D noktası A ile, [AC] üzerindeki E noktası da D ile birleştirilmiş; AB, AD, DE ve EC uzunlukları eşit işaretlenmiş.',
      svg: `
          <path class="ln" d="M81.8,183.6 L30,300 L370,300 L81.8,183.6"/>
          <path class="ln" d="M81.8,183.6 L133.6,300"/>
          <path class="ln" d="M133.6,300 L251.8,252.2"/>

          <line class="tick" x1="50.4" y1="239.4" x2="61.4" y2="244.2"/>
          <line class="tick" x1="102.2" y1="244.2" x2="113.2" y2="239.4"/>
          <line class="tick" x1="190.5" y1="270.5" x2="195" y2="281.7"/>
          <line class="tick" x1="308.7" y1="281.7" x2="313.2" y2="270.5"/>

          <path class="arc" d="M74,300 A44,44 0 0 0 47.9,259.8"/>
          <text class="val" x="84" y="270" text-anchor="middle">66°</text>

          <path class="arc" d="M324,300 A46,46 0 0 1 327.3,282.8"/>
          <text class="val" x="295" y="290" text-anchor="middle">x</text>

          <circle class="pt" cx="81.8" cy="183.6" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="133.6" cy="300" r="3.2"/>
          <circle class="pt" cx="251.8" cy="252.2" r="3.2"/>

          <text x="81.8" y="171.6" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="378" y="318">C</text>
          <text x="133.6" y="320" text-anchor="middle">D</text>
          <text x="260" y="247">E</text>
        `,
    },
    given: ['ABC bir üçgen', 'D ∈ [BC] ve E ∈ [AC]', '|AB| = |AD| = |DE| = |EC|', 'm(ABC) = 66°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '16' },
      { key: 'B', text: '18' },
      { key: 'C', text: '20' },
      { key: 'D', text: '22' },
      { key: 'E', text: '24' },
    ],
    answer: 'D',
    hint: 'Zincirin en sağındaki ikizkenar üçgenden başla; her dış açı bir sonraki üçgene bir x daha ekler.',
    solution: [
      {
        title: 'Zincirin ucundan başla',
        detail: 'm(ACB) = x olsun. |ED| = |EC| olduğundan DEC üçgeninde m(EDC) = m(ECD) = x’tir.',
      },
      {
        title: 'Birinci dış açı',
        detail:
          'A, E, C doğrusal olduğundan m(DEA), DEC üçgeninin E köşesindeki dış açısıdır: m(DEA) = x + x = 2x.',
      },
      {
        title: 'İkinci ikizkenar üçgen',
        detail: '|DA| = |DE| olduğundan ADE üçgeninde m(DAE) = m(DEA) = 2x olur.',
      },
      {
        title: 'İkinci dış açı',
        detail:
          'B, D, C doğrusal olduğundan m(ADB), ADC üçgeninin D köşesindeki dış açısıdır: m(ADB) = m(DAC) + m(ACD) = 2x + x = 3x.',
      },
      {
        title: 'Sonuç',
        detail: '|AB| = |AD| olduğundan m(ABD) = m(ADB) = 3x’tir. 3x = 66 → x = 22° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 66
  {
    id: 'triangles-66',
    topic: 'İki yüksekliğin kesişimi',
    figure: {
      viewBox: '0 50 400 282',
      caption: 'Şekil 66',
      label:
        'ABC üçgeninde B köşesinden [AC] kenarına inen [BD] yüksekliği ile C köşesinden [AB] kenarına inen [CE] yüksekliği F noktasında kesişiyor.',
      svg: `
          <path class="ln" d="M189.2,76.3 L60,300 L340,300 L189.2,76.3"/>
          <path class="ln" d="M60,300 L252.5,170.2"/>
          <path class="ln" d="M340,300 L130,178.8"/>

          <path class="ln" d="M246.3,161.1 L237.2,167.2 L243.4,176.3"/>
          <path class="ln" d="M135.5,169.3 L145,174.8 L139.5,184.3"/>

          <path class="arc" d="M164.2,119.6 A50,50 0 0 0 217.1,117.8"/>
          <text class="val" x="191" y="153" text-anchor="middle">64°</text>

          <path class="arc" d="M161,231.9 A34,34 0 0 0 218.7,229.9"/>
          <text class="val" x="191" y="270" text-anchor="middle">α</text>

          <circle class="pt" cx="189.2" cy="76.3" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="252.5" cy="170.2" r="3.2"/>
          <circle class="pt" cx="130" cy="178.8" r="3.2"/>
          <circle class="pt" cx="189.2" cy="212.9" r="3.2"/>

          <text x="189.2" y="64.3" text-anchor="middle">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="261" y="166">D</text>
          <text x="121" y="174" text-anchor="end">E</text>
          <text x="188" y="205" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AC] ve E ∈ [AB]',
      '[BD] ⊥ [AC] ve [CE] ⊥ [AB]',
      '[BD] ∩ [CE] = {F}',
      'm(BAC) = 64°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BFC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '104' },
      { key: 'C', text: '108' },
      { key: 'D', text: '112' },
      { key: 'E', text: '116' },
    ],
    answer: 'E',
    hint: 'AEFD dörtgeninde iki dik açı vardır; dörtgenin iç açıları toplamını kullan.',
    solution: [
      {
        title: 'Dörtgeni gör',
        detail:
          'A, E, F ve D noktaları bir dörtgen oluşturur. [CE] ⊥ [AB] olduğundan m(AEF) = 90°, [BD] ⊥ [AC] olduğundan m(ADF) = 90°’dir.',
      },
      {
        title: 'Dörtgenin açı toplamı',
        detail: 'Dörtgende iç açılar toplamı 360° olduğundan 64 + 90 + 90 + m(EFD) = 360 yazılır.',
      },
      {
        title: 'EFD açısını bul',
        detail: 'm(EFD) = 360 − 244 = 116° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'B, F, D ve C, F, E doğrusal olduğundan m(BFC) ile m(EFD) ters açıdır: α = 116°. Genel olarak m(BFC) = 180 − m(BAC)’tir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 67
  {
    id: 'triangles-67',
    topic: 'Açıortaya inen dikme',
    figure: {
      viewBox: '0 0 400 330',
      caption: 'Şekil 67',
      label:
        'ABC üçgeninde B açısının açıortayı [BD] çizilmiş; C köşesinden bu açıortaya inilen dik, [AB] kenarını E noktasında kesiyor, dikme ayağı F noktasıdır.',
      svg: `
          <path class="ln" d="M253.88,30 L98,300 L301.49,300 L253.88,30"/>
          <path class="ln" d="M98,300 L282.69,193.37"/>
          <path class="ln" d="M301.49,300 L199.75,123.77"/>

          <path class="ln" d="M240.23,217.89 L246.23,228.28 L256.62,222.28"/>

          <path class="arc" d="M226.38,77.63 A55,55 0 0 0 263.44,84.16"/>
          <text class="val" x="240.69" y="109.85" text-anchor="middle">40°</text>

          <path class="arc" d="M144,300 A46,46 0 0 0 137.84,277"/>
          <line class="tick" x1="138.09" y1="289.26" x2="146.78" y2="286.93"/>
          <path class="arc" d="M137.84,277 A46,46 0 0 0 121,260.16"/>
          <line class="tick" x1="127.34" y1="270.66" x2="133.71" y2="264.29"/>

          <path class="arc" d="M239.49,300 A62,62 0 0 1 290.73,238.94"/>
          <text class="val" x="235.61" y="249.72" text-anchor="middle">80°</text>

          <path class="arc" d="M284.49,270.56 A34,34 0 0 1 295.59,266.52"/>
          <text class="val" x="285.42" y="260.83" text-anchor="middle">x</text>

          <circle class="pt" cx="253.88" cy="30" r="3.2"/>
          <circle class="pt" cx="98" cy="300" r="3.2"/>
          <circle class="pt" cx="301.49" cy="300" r="3.2"/>
          <circle class="pt" cx="282.69" cy="193.37" r="3.2"/>
          <circle class="pt" cx="199.75" cy="123.77" r="3.2"/>
          <circle class="pt" cx="250.62" cy="211.89" r="3.2"/>

          <text x="253.88" y="18" text-anchor="middle">A</text>
          <text x="90" y="318" text-anchor="end">B</text>
          <text x="309.49" y="318">C</text>
          <text x="291.69" y="187.37">D</text>
          <text x="190.75" y="119.77" text-anchor="end">E</text>
          <text x="236.62" y="215.89" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AC] ve E ∈ [AB]',
      'm(ABD) = m(DBC)',
      '[CE] ⊥ [BD] ve [CE] ∩ [BD] = {F}',
      'm(BAC) = 40°',
      'm(ACB) = 80°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ECA) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '15' },
      { key: 'C', text: '20' },
      { key: 'D', text: '25' },
      { key: 'E', text: '30' },
    ],
    answer: 'C',
    hint: 'Açıortaya inen dikme, B köşesindeki açının iki yanında iki eş dik üçgen bırakır.',
    solution: [
      {
        title: 'Üçüncü açıyı bul',
        detail:
          'ABC üçgeninde m(ABC) = 180 − 40 − 80 = 60°’dir. [BD] açıortay olduğundan m(ABD) = m(DBC) = 30° olur.',
      },
      {
        title: 'İki eş dik üçgen',
        detail:
          'BFE ve BFC üçgenlerinde m(BFE) = m(BFC) = 90° ve m(FBE) = m(FBC) = 30°’dir; [BF] ortak olduğundan bu iki üçgen eştir, yani |BE| = |BC| olur.',
      },
      {
        title: 'İkizkenar üçgenin taban açıları',
        detail:
          'BEC üçgeni ikizkenar ve tepe açısı m(EBC) = 60° olduğundan m(BEC) = m(BCE) = (180 − 60) / 2 = 60° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'E, [AB] üzerinde olduğundan m(BCE) açısı m(ACB) açısının içinde kalır: x = m(ACB) − m(BCE) = 80 − 60 = 20° bulunur. Bu kurulumda sonuç her zaman (m(C) − m(A)) / 2’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 68
  {
    id: 'triangles-68',
    topic: 'İç açıortay ile dış açıortay',
    figure: {
      viewBox: '0 34 400 292',
      caption: 'Şekil 68',
      label:
        'ABC üçgeninde B açısının açıortayı [AC] kenarını E noktasında kesip C köşesindeki dış açının açıortayı üzerindeki D noktasına ulaşıyor; |CD| ile |CB| eşit işaretlenmiştir.',
      svg: `
          <path class="ln" d="M28,300 L350,300"/>
          <path class="ln" d="M88.83,132.88 L28,300"/>
          <path class="ln" d="M88.83,132.88 L288,300"/>
          <path class="ln" d="M28,300 L376.93,55.68"/>
          <path class="ln" d="M288,300 L376.93,55.68"/>

          <line class="tick" x1="158" y1="294" x2="158" y2="306"/>
          <line class="tick" x1="326.82" y1="175.79" x2="338.1" y2="179.89"/>

          <path class="arc" d="M71.04,181.74 A52,52 0 0 0 128.66,166.3"/>
          <text class="val" x="107.98" y="209.35" text-anchor="middle">70°</text>

          <path class="arc" d="M74,300 A46,46 0 0 0 65.68,273.62"/>
          <line class="tick" x1="67.58" y1="287.52" x2="76.16" y2="284.81"/>
          <path class="arc" d="M65.68,273.62 A46,46 0 0 0 43.73,256.77"/>
          <line class="tick" x1="53.26" y1="267.08" x2="58.74" y2="259.94"/>

          <path class="arc" d="M257.36,274.29 A40,40 0 0 1 301.68,262.41"/>
          <line class="tick" x1="278.81" y1="265.71" x2="276.48" y2="257.02"/>
          <path class="arc" d="M301.68,262.41 A40,40 0 0 1 328,300"/>
          <line class="tick" x1="317.08" y1="279.64" x2="324.45" y2="274.48"/>

          <path class="arc" d="M192.71,220.04 A30,30 0 0 1 145.16,217.97"/>
          <text class="val" x="167.64" y="253.71" text-anchor="middle">α</text>

          <circle class="pt" cx="88.83" cy="132.88" r="3.2"/>
          <circle class="pt" cx="28" cy="300" r="3.2"/>
          <circle class="pt" cx="288" cy="300" r="3.2"/>
          <circle class="pt" cx="376.93" cy="55.68" r="3.2"/>
          <circle class="pt" cx="169.73" cy="200.76" r="3.2"/>

          <text x="88.83" y="120.88" text-anchor="middle">A</text>
          <text x="20" y="318" text-anchor="end">B</text>
          <text x="286" y="320" text-anchor="middle">C</text>
          <text x="384.93" y="49.68">D</text>
          <text x="171.73" y="190.76" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'E ∈ [AC] ve B, E, D doğrusal',
      'm(ABE) = m(EBC)',
      '[CD, C köşesindeki dış açının açıortayı',
      '|CD| = |CB|',
      'm(BAC) = 70°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BEC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '95' },
      { key: 'B', text: '100' },
      { key: 'C', text: '105' },
      { key: 'D', text: '110' },
      { key: 'E', text: '115' },
    ],
    answer: 'C',
    hint: 'm(ABC) = 2β ve m(ACB) = γ de; ikizkenar BCD üçgeninin taban açıları β ile γ arasında bir denklem verir.',
    solution: [
      {
        title: 'Açıları adlandır',
        detail:
          'm(ABC) = 2β ve m(ACB) = γ olsun. Üçgenin iç açıları toplamından 70 + 2β + γ = 180, yani 2β + γ = 110 olur.',
      },
      {
        title: 'Dış açının açıortayı',
        detail:
          'C köşesindeki dış açı 180 − γ olduğundan açıortayın ayırdığı her parça 90 − γ/2’dir. Buna göre m(BCD) = γ + (90 − γ/2) = 90 + γ/2 bulunur.',
      },
      {
        title: 'BCD ikizkenar üçgeni',
        detail:
          '|CB| = |CD| olduğundan taban açıları eşittir: m(DBC) = m(BDC) = (180 − (90 + γ/2)) / 2 = 45 − γ/4.',
      },
      {
        title: 'Açıortayla birleştir',
        detail:
          'B, E, D doğrusal olduğundan m(DBC) = m(EBC) = β’dır. β = 45 − γ/4 ifadesi 2β + γ = 110 denkleminde yerine konursa 90 + γ/2 = 110 → γ = 40°, β = 35° bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'BEC üçgeninde α = 180 − m(EBC) − m(ECB) = 180 − 35 − 40 = 105° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 69
  {
    id: 'triangles-69',
    topic: 'Kesişen doğrularda eşit tepe açıları',
    figure: {
      viewBox: '0 60 400 268',
      caption: 'Şekil 69',
      label:
        'B ve C aynı doğru üzerindedir; A noktası B ve C ile, D noktası da B ve C ile birleştirilmiş, [AC] ile [BD] doğru parçaları E noktasında kesişmektedir.',
      svg: `
          <path class="ln" d="M58,300 L338,300"/>
          <path class="ln" d="M136.61,84.03 L58,300"/>
          <path class="ln" d="M136.61,84.03 L338,300"/>
          <path class="ln" d="M58,300 L320.11,129.78"/>
          <path class="ln" d="M320.11,129.78 L338,300"/>

          <path class="arc" d="M108,300 A50,50 0 0 0 75.1,253.02"/>
          <text class="val" x="101.1" y="249.84" text-anchor="middle">70°</text>

          <path class="arc" d="M288,300 A50,50 0 0 1 332.77,250.27"/>
          <text class="val" x="309.26" y="243.37" text-anchor="middle">84°</text>

          <path class="arc" d="M252.85,208.69 A30,30 0 0 1 207.23,203.09"/>
          <text class="val" x="226.54" y="239.39" text-anchor="middle">100°</text>

          <path class="arc" d="M122.93,121.62 A40,40 0 0 0 163.89,113.29"/>
          <text class="val" x="148.57" y="147.83" text-anchor="middle">x</text>

          <path class="arc" d="M288.24,150.48 A38,38 0 0 0 324.08,167.58"/>
          <text class="val" x="296" y="185.33" text-anchor="middle">x</text>

          <circle class="pt" cx="136.61" cy="84.03" r="3.2"/>
          <circle class="pt" cx="58" cy="300" r="3.2"/>
          <circle class="pt" cx="338" cy="300" r="3.2"/>
          <circle class="pt" cx="320.11" cy="129.78" r="3.2"/>
          <circle class="pt" cx="232.39" cy="186.75" r="3.2"/>

          <text x="127.61" y="80.03" text-anchor="end">A</text>
          <text x="50" y="318" text-anchor="end">B</text>
          <text x="346" y="318">C</text>
          <text x="329.11" y="124.78">D</text>
          <text x="232.39" y="177.75" text-anchor="middle">E</text>
        `,
    },
    given: [
      '[AC] ∩ [BD] = {E}',
      'm(ABC) = 70°',
      'm(DCB) = 84°',
      'm(BEC) = 100°',
      'm(BAC) = m(BDC)',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '59' },
      { key: 'B', text: '61' },
      { key: 'C', text: '63' },
      { key: 'D', text: '65' },
      { key: 'E', text: '67' },
    ],
    answer: 'C',
    hint: 'BEC üçgeni sana m(DBC) + m(ACB) toplamını verir; iki üçgenin tepe açılarını da bu iki açı cinsinden yaz.',
    solution: [
      {
        title: 'Kesişim üçgeninden topla',
        detail:
          'BEC üçgeninde m(EBC) + m(ECB) = 180 − 100 = 80°’dir. E noktası hem [BD] hem de [AC] üzerinde olduğundan m(DBC) + m(ACB) = 80 yazılır.',
      },
      {
        title: 'ABC üçgenini yaz',
        detail: 'm(ABC) = 70° olduğundan x = 180 − 70 − m(ACB) = 110 − m(ACB) olur.',
      },
      {
        title: 'DBC üçgenini yaz',
        detail: 'm(DCB) = 84° olduğundan x = 180 − 84 − m(DBC) = 96 − m(DBC) olur.',
      },
      {
        title: 'İki ifadeyi eşitle',
        detail:
          '110 − m(ACB) = 96 − m(DBC) → m(ACB) − m(DBC) = 14’tür. Toplamları 80 olduğundan m(ACB) = 47° ve m(DBC) = 33° bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 110 − 47 = 63° bulunur; DBC üçgeni de 96 − 33 = 63° verir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 70
  {
    id: 'triangles-70',
    topic: 'Hipotenüse ait kenarortay',
    figure: {
      viewBox: '0 30 400 296',
      caption: 'Şekil 70',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde H noktası [BC] kenarının orta noktasıdır; H’den [BC] ye dikilen dikme, B, A, D doğrusal olacak biçimde D noktasından geçer ve |AD| uzunluğu |BH| ile |HC| uzunluklarına eşit işaretlenmiştir.',
      svg: `
          <path class="ln" d="M60,300 L340,300"/>
          <path class="ln" d="M60,300 L200,57.51"/>
          <path class="ln" d="M130,178.76 L340,300"/>
          <path class="ln" d="M200,57.51 L200,300"/>

          <path class="ln" d="M124,189.15 L134.39,195.15 L140.39,184.76"/>
          <path class="ln" d="M188,300 L188,288 L200,288"/>

          <line class="tick" x1="159.8" y1="115.13" x2="170.2" y2="121.13"/>
          <line class="tick" x1="151" y1="294" x2="151" y2="306"/>
          <line class="tick" x1="249" y1="294" x2="249" y2="306"/>

          <path class="arc" d="M296,300 A44,44 0 0 1 301.89,278"/>
          <text class="val" x="280.11" y="288.95" text-anchor="middle">α</text>

          <circle class="pt" cx="130" cy="178.76" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="57.51" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text x="121" y="175.76" text-anchor="end">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="200" y="45.51" text-anchor="middle">D</text>
          <text x="200" y="320" text-anchor="middle">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 30 400 296',
      caption: 'Şekil 70 — [AH] kenarortayı çizildi',
      label:
        'Aynı şekle, A köşesini [BC] kenarının orta noktası H ile birleştiren kenarortay kesikli çizgiyle eklenmiş ve m(AHB) açısı 2α olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M60,300 L340,300"/>
          <path class="ln" d="M60,300 L200,57.51"/>
          <path class="ln" d="M130,178.76 L340,300"/>
          <path class="ln" d="M200,57.51 L200,300"/>

          <path class="ln" d="M124,189.15 L134.39,195.15 L140.39,184.76"/>
          <path class="ln" d="M188,300 L188,288 L200,288"/>

          <path class="aux" d="M130,178.76 L200,300"/>

          <line class="tick" x1="159.8" y1="115.13" x2="170.2" y2="121.13"/>
          <line class="tick" x1="151" y1="294" x2="151" y2="306"/>
          <line class="tick" x1="249" y1="294" x2="249" y2="306"/>
          <line class="tick" x1="170.2" y1="236.38" x2="159.8" y2="242.38"/>

          <path class="arc" d="M296,300 A44,44 0 0 1 301.89,278"/>
          <text class="val" x="280.11" y="288.95" text-anchor="middle">α</text>

          <path class="arc" d="M183,270.56 A34,34 0 0 0 166,300"/>
          <text class="val" x="153.23" y="278" text-anchor="middle">2α</text>

          <circle class="pt" cx="130" cy="178.76" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="57.51" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text x="121" y="175.76" text-anchor="end">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="200" y="45.51" text-anchor="middle">D</text>
          <text x="200" y="320" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'm(BAC) = 90°',
      'H ∈ [BC] ve |BH| = |HC|',
      '[DH] ⊥ [BC]',
      'B, A, D doğrusal',
      '|AD| = |HC|',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '22,5' },
      { key: 'C', text: '25' },
      { key: 'D', text: '27,5' },
      { key: 'E', text: '30' },
    ],
    answer: 'E',
    hint: 'Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısıdır; önce |AH| uzunluğunun kimlerle eşit olduğunu yaz.',
    solution: [
      {
        title: 'Kenarortayı gör',
        detail:
          'm(BAC) = 90° ve H, [BC] hipotenüsünün orta noktası olduğundan [AH] hipotenüse ait kenarortaydır: |AH| = |BH| = |HC| = |BC| / 2.',
      },
      {
        title: 'ADH ikizkenar üçgeni',
        detail:
          'Verilen |AD| = |HC| eşitliği |AD| = |AH| demektir; öyleyse ADH üçgeni ikizkenardır ve m(ADH) = m(AHD) olur.',
      },
      {
        title: 'BDH dik üçgeni',
        detail:
          'm(ABC) = 90 − α olduğundan, m(DHB) = 90° olan BDH dik üçgeninde m(BDH) = 90 − (90 − α) = α bulunur. B, A, D doğrusal olduğundan m(ADH) = α, dolayısıyla m(AHD) = α’dır.',
      },
      {
        title: 'AHC ikizkenar üçgeni',
        detail:
          '|HA| = |HC| olduğundan m(HAC) = m(HCA) = α’dır. m(AHB), AHC üçgeninin H köşesindeki dış açısı olduğundan m(AHB) = α + α = 2α olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A noktası DHB açısının içinde kaldığından m(AHB) + m(AHD) = 90° yazılır: 2α + α = 90 → α = 30° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 71
  {
    id: 'triangles-71',
    topic: 'İkizkenar üçgenlerde açı bölme',
    figure: {
      viewBox: '0 102 400 228',
      caption: 'Şekil 71',
      label:
        'ABC üçgeninde D noktası [AB], E noktası [BC] üzerindedir; [DE] ve [DC] çizilmiş, |BD| = |BE| ve |CD| = |CA| işaretlenmiştir. [DC], EDA açısını iki eş açıya ayırır.',
      svg: `
          <path class="ln" d="M360,129.85 L40,300 L330,300 L360,129.85"/>
          <path class="ln" d="M172.16,229.73 L189.69,300"/>
          <path class="ln" d="M172.16,229.73 L330,300"/>

          <line class="tick" x1="103.27" y1="259.57" x2="108.9" y2="270.16"/>
          <line class="tick" x1="114.84" y1="294" x2="114.84" y2="306"/>

          <line class="tick" x1="251.84" y1="271.77" x2="256.72" y2="260.81"/>
          <line class="tick" x1="245.44" y1="268.92" x2="250.33" y2="257.96"/>
          <line class="tick" x1="338.48" y1="217.33" x2="350.3" y2="219.41"/>
          <line class="tick" x1="339.7" y1="210.44" x2="351.52" y2="212.52"/>

          <path class="arc" d="M179.42,258.84 A30,30 0 0 0 199.57,241.93"/>
          <line class="tick" x1="188.56" y1="249.26" x2="194.34" y2="256.16"/>
          <path class="arc" d="M199.57,241.93 A30,30 0 0 0 198.65,215.64"/>
          <line class="tick" x1="197.65" y1="228.84" x2="206.64" y2="228.52"/>

          <path class="arc" d="M276,300 A54,54 0 0 1 339.38,246.82"/>
          <text class="val" x="281.15" y="246.78" text-anchor="middle">100°</text>

          <path class="arc" d="M324.68,148.63 A40,40 0 0 0 353.06,169.24"/>
          <text class="val" x="325.91" y="181.78" text-anchor="middle">α</text>

          <circle class="pt" cx="360" cy="129.85" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="172.16" cy="229.73" r="3.2"/>
          <circle class="pt" cx="189.69" cy="300" r="3.2"/>

          <text x="360" y="117.85" text-anchor="middle">A</text>
          <text x="32" y="318" text-anchor="end">B</text>
          <text x="330" y="320" text-anchor="middle">C</text>
          <text x="163.16" y="225.73" text-anchor="end">D</text>
          <text x="189.69" y="320" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AB] ve E ∈ [BC]',
      '|BD| = |BE|',
      '|CD| = |CA|',
      'm(EDC) = m(CDA)',
      'm(ACB) = 100°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '50' },
      { key: 'C', text: '52' },
      { key: 'D', text: '54' },
      { key: 'E', text: '56' },
    ],
    answer: 'C',
    hint: 'A, D, B doğrusal olduğundan D noktasındaki üç açının toplamı 180°’dir; her birini α ve m(ABC) cinsinden yaz.',
    solution: [
      {
        title: 'BDE ikizkenar üçgeni',
        detail:
          'm(ABC) = b olsun. |BD| = |BE| olduğundan BDE üçgeninin taban açıları eşittir: m(BDE) = m(BED) = (180 − b) / 2 = 90 − b/2.',
      },
      {
        title: 'ACD ikizkenar üçgeni',
        detail:
          'D noktası [AB] üzerinde olduğundan m(DAC) = m(BAC) = α’dır. |CD| = |CA| olduğundan ACD üçgeninde m(CDA) = m(CAD) = α olur; verilenden m(EDC) = m(CDA) = α’dır.',
      },
      {
        title: 'D’deki doğru açı',
        detail:
          'A, D, B doğrusal olduğundan m(BDE) + m(EDC) + m(CDA) = 180 yazılır: (90 − b/2) + α + α = 180 → 2α = 90 + b/2.',
      },
      {
        title: 'Üçgenin açı toplamı',
        detail: 'ABC üçgeninde α + b + 100 = 180 olduğundan b = 80 − α bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'b yerine yazılırsa 2α = 90 + (80 − α) / 2 → 4α = 180 + 80 − α → 5α = 260 → α = 52° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 72
  {
    id: 'triangles-72',
    topic: 'Dik kesişen kenarlar ve ikizkenar üçgenler',
    figure: {
      viewBox: '0 104 400 226',
      caption: 'Şekil 72',
      label:
        'ABC üçgeninde D noktası [AB], E noktası [BC], F noktası [AC] üzerindedir; DEF üçgeni çizilmiş, |AD| = |DF| ve |EF| = |EC| işaretlenmiş, [DE] ile [EF] birbirine diktir.',
      svg: `
          <path class="ln" d="M271.23,131.09 L30,300 L350,300 L271.23,131.09"/>
          <path class="ln" d="M124.39,233.91 L203.16,300 L297.55,187.51 L124.39,233.91"/>

          <path class="ln" d="M193.96,292.29 L201.68,283.09 L210.87,290.81"/>

          <line class="tick" x1="201.25" y1="187.41" x2="194.37" y2="177.58"/>
          <line class="tick" x1="209.41" y1="204.91" x2="212.52" y2="216.5"/>

          <line class="tick" x1="243.5" y1="242.58" x2="252.7" y2="250.29"/>
          <line class="tick" x1="248" y1="237.22" x2="257.2" y2="244.93"/>
          <line class="tick" x1="273.08" y1="294" x2="273.08" y2="306"/>
          <line class="tick" x1="280.08" y1="294" x2="280.08" y2="306"/>

          <path class="arc" d="M153.37,226.14 A30,30 0 0 1 147.37,253.19"/>
          <text class="val" x="171.25" y="249.3" text-anchor="middle">55°</text>

          <path class="arc" d="M304,300 A46,46 0 0 1 330.56,258.31"/>
          <text class="val" x="296.02" y="270.61" text-anchor="middle">65°</text>

          <path class="arc" d="M249.94,146 A26,26 0 0 0 282.22,154.65"/>
          <text class="val" x="259.33" y="180.52" text-anchor="middle">x</text>

          <circle class="pt" cx="271.23" cy="131.09" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="124.39" cy="233.91" r="3.2"/>
          <circle class="pt" cx="203.16" cy="300" r="3.2"/>
          <circle class="pt" cx="297.55" cy="187.51" r="3.2"/>

          <text x="271.23" y="119.09" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="358" y="318">C</text>
          <text x="115.39" y="229.91" text-anchor="end">D</text>
          <text x="203.16" y="320" text-anchor="middle">E</text>
          <text x="307.55" y="189.51">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AB], E ∈ [BC] ve F ∈ [AC]',
      '|AD| = |DF|',
      '|EF| = |EC|',
      '[DE] ⊥ [EF]',
      'm(EDF) = 55°',
      'm(ACB) = 65°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '70' },
      { key: 'B', text: '75' },
      { key: 'C', text: '80' },
      { key: 'D', text: '85' },
      { key: 'E', text: '90' },
    ],
    answer: 'C',
    hint: 'F noktasındaki üç açı bir doğru açı oluşturur; ikisini ikizkenar üçgenlerden, birini DEF dik üçgeninden bul.',
    solution: [
      {
        title: 'DEF dik üçgeni',
        detail:
          '[DE] ⊥ [EF] olduğundan m(DEF) = 90°’dir. Buna göre m(DFE) = 180 − 90 − 55 = 35° bulunur.',
      },
      {
        title: 'ADF ikizkenar üçgeni',
        detail:
          'D ∈ [AB] ve F ∈ [AC] olduğundan m(DAF) = m(BAC) = x’tir. |AD| = |DF| olduğundan taban açıları eşittir: m(DFA) = m(DAF) = x.',
      },
      {
        title: 'FEC ikizkenar üçgeni',
        detail:
          'E ∈ [BC] ve F ∈ [AC] olduğundan m(ECF) = m(ACB) = 65°’dir. |EF| = |EC| olduğundan m(EFC) = m(ECF) = 65° olur.',
      },
      {
        title: 'F’deki doğru açı',
        detail:
          'A, F, C doğrusal olduğundan m(DFA) + m(DFE) + m(EFC) = 180 yazılır: x + 35 + 65 = 180.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 180 − 100 = 80° bulunur. Kontrol: m(ABC) = 180 − 80 − 65 = 35°, yani m(ABC) her zaman m(DFE) açısına eşit çıkar.',
      },
    ],
  },

  // ---------------------------------------------------------------- 73
  {
    id: 'triangles-73',
    topic: 'Paralel kenar ve hipotenüse ait kenarortay',
    figure: {
      viewBox: '0 172 400 160',
      caption: 'Şekil 73',
      label:
        'ABC üçgeninde D noktası [BC] kenarının orta noktasıdır; D’den çıkan ve [AC] kenarını E noktasında dik kesen doğru, |DE| = |EF| olacak biçimde F noktasına kadar uzatılmıştır. [FD] doğru parçası [AB] kenarına paraleldir ve A ile F birleştirilmiştir.',
      svg: `
          <path class="ln" d="M99.29,202.75 L60,300 L340,300 L99.29,202.75"/>
          <path class="ln" d="M239.29,202.75 L200,300"/>
          <path class="ln" d="M99.29,202.75 L239.29,202.75"/>

          <path class="ln" d="M209.45,247.25 L205.33,257.45 L215.53,261.57"/>

          <line class="tick" x1="130" y1="294" x2="130" y2="306"/>
          <line class="tick" x1="270" y1="294" x2="270" y2="306"/>

          <line class="tick" x1="203.6" y1="275.06" x2="214.73" y2="279.56"/>
          <line class="tick" x1="204.92" y1="271.82" x2="216.04" y2="276.31"/>
          <line class="tick" x1="223.25" y1="226.44" x2="234.38" y2="230.93"/>
          <line class="tick" x1="224.56" y1="223.19" x2="235.69" y2="227.69"/>

          <path class="arc" d="M205.29,202.75 A34,34 0 0 0 226.56,234.27"/>
          <text class="val" x="197.01" y="235.77" text-anchor="middle">68°</text>

          <path class="arc" d="M297.35,282.77 A46,46 0 0 0 294,300"/>
          <text class="val" x="278.16" y="292.48" text-anchor="middle">x</text>

          <circle class="pt" cx="99.29" cy="202.75" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>
          <circle class="pt" cx="219.65" cy="251.37" r="3.2"/>
          <circle class="pt" cx="239.29" cy="202.75" r="3.2"/>

          <text x="99.29" y="190.75" text-anchor="middle">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="200" y="320" text-anchor="middle">D</text>
          <text x="229.65" y="249.37">E</text>
          <text x="239.29" y="190.75" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [BC] ve |BD| = |DC|',
      '[FD] ⊥ [AC] ve [FD] ∩ [AC] = {E}',
      '|DE| = |EF|',
      '[AB] // [FD]',
      'm(AFD) = 68°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '22' },
      { key: 'D', text: '24' },
      { key: 'E', text: '26' },
    ],
    answer: 'C',
    hint: 'Paralelliği [BC] keseni üzerinden B köşesine taşı; ABC üçgeninin A köşesindeki açısı ortaya çıkar.',
    solution: [
      {
        title: 'Paralellikten B açısı',
        detail:
          'DEC dik üçgeninde m(DEC) = 90° ve m(DCE) = x olduğundan m(FDC) = 90 − x’tir. [AB] // [FD] ve [BC] kesen olduğundan yöndeş açılar eşittir: m(ABC) = m(FDC) = 90 − x.',
      },
      {
        title: 'A köşesindeki açı',
        detail:
          'ABC üçgeninde m(BAC) = 180 − (90 − x) − x = 90° bulunur; yani üçgen A köşesinde diktir.',
      },
      {
        title: 'Hipotenüse ait kenarortay',
        detail:
          'D, [BC] hipotenüsünün orta noktası olduğundan |AD| = |BD| = |DC|’dir. ADC ikizkenar üçgeninde m(DAC) = m(DCA) = x olur.',
      },
      {
        title: '[AC] doğrusu [DF] nin orta dikmesi',
        detail:
          '[FD] ⊥ [AC] ve |DE| = |EF| olduğundan [AC], [DF] nin orta dikmesidir: |AD| = |AF| ve m(DAE) = m(FAE) = x, yani m(DAF) = 2x’tir.',
      },
      {
        title: 'Sonuç',
        detail:
          'ADF ikizkenar üçgeninde m(AFD) = (180 − 2x) / 2 = 90 − x’tir. 90 − x = 68 → x = 22° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 74
  {
    id: 'triangles-74',
    topic: 'Dış açıortay ile iç açıortayın kesişmesi',
    figure: {
      viewBox: '0 36 400 296',
      caption: 'Şekil 74',
      label:
        'ABC üçgeninde [BA] kenarı A köşesini aşacak biçimde K noktasına kadar uzatılmıştır; KAC açısının açıortayı ile ABC açısının açıortayı, üçgenin dışında kalan D noktasında kesişmektedir.',
      svg: `
          <path class="ln" d="M205.3,65.6 L35,300 L275,300 L159.46,128.7"/>
          <path class="ln" d="M159.46,128.7 L364.18,132.27"/>
          <path class="ln" d="M35,300 L364.18,132.27"/>

          <path class="arc" d="M58.51,267.64 A40,40 0 0 1 70.64,281.84"/>
          <line class="tick" x1="61.99" y1="276.94" x2="68.84" y2="271.1"/>
          <path class="arc" d="M70.64,281.84 A40,40 0 0 1 75,300"/>
          <line class="tick" x1="69.52" y1="291.71" x2="78.27" y2="289.61"/>

          <path class="arc" d="M174.74,107.67 A26,26 0 0 1 185.45,129.15"/>
          <line class="tick" x1="178.7" y1="119.11" x2="186.75" y2="115.09"/>
          <path class="arc" d="M185.45,129.15 A26,26 0 0 1 174,150.26"/>
          <line class="tick" x1="178.35" y1="138.96" x2="186.26" y2="143.25"/>

          <path class="arc" d="M139.47,156.21 A34,34 0 0 0 178.47,156.89"/>
          <text class="val" x="158.57" y="184.19" text-anchor="middle">x</text>

          <path class="arc" d="M334.19,131.75 A30,30 0 0 0 337.45,145.89"/>
          <text class="val" x="305.72" y="150.27" text-anchor="middle">28°</text>

          <circle class="pt" cx="159.46" cy="128.7" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="275" cy="300" r="3.2"/>
          <circle class="pt" cx="364.18" cy="132.27" r="3.2"/>
          <circle class="pt" cx="205.3" cy="65.6" r="3.2"/>

          <text x="150.46" y="126.7" text-anchor="end">A</text>
          <text x="27" y="318" text-anchor="end">B</text>
          <text x="275" y="320" text-anchor="middle">C</text>
          <text x="373.18" y="128.27">D</text>
          <text x="205.3" y="53.6" text-anchor="middle">K</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'B, A, K doğrusal',
      '[AD], KAC açısının açıortayı',
      '[BD], ABC açısının açıortayı',
      'm(ABC) = 54°',
      'm(ADB) = 28°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'ABD üçgeninde iki açı zaten belli; m(DAB) açısını A köşesindeki dış açının yarısı üzerinden x cinsinden yaz.',
    solution: [
      {
        title: 'Açıortayın ayırdığı yarım açı',
        detail: '[BD], ABC açısının açıortayı olduğundan m(ABD) = 54 / 2 = 27° olur.',
      },
      {
        title: 'A köşesindeki dış açı',
        detail:
          'B, A, K doğrusal olduğundan m(KAC), ABC üçgeninin A köşesindeki dış açısıdır: m(KAC) = 180 − x. [AD] bu açının açıortayı olduğundan m(KAD) = (180 − x) / 2 = 90 − x / 2 bulunur.',
      },
      {
        title: 'ABD üçgeninin A açısı',
        detail:
          'K, A, B doğrusal olduğundan m(DAB) = 180 − m(KAD) = 180 − (90 − x / 2) = 90 + x / 2’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABD üçgeninde açılar toplamı 180°’dir: (90 + x / 2) + 27 + 28 = 180 → x / 2 = 35 → x = 70° bulunur.',
      },
      {
        title: 'Kontrol',
        detail:
          'm(ACB) = 180 − 70 − 54 = 56°’dir. Bu kurulumda iki açıortay arasındaki açı her zaman m(ACB) / 2 = 28° çıkar.',
      },
    ],
  },

  // ---------------------------------------------------------------- 75
  {
    id: 'triangles-75',
    topic: 'Eşkenar üçgenden doğan ikizkenar üçgenler',
    figure: {
      viewBox: '0 110 400 222',
      caption: 'Şekil 75',
      label:
        'ABC eşkenar üçgeninin dışında, [BC] kenarının sağ tarafında bir D noktası alınmış ve bu nokta üçgenin A, B, C köşelerinin üçüyle de birleştirilmiştir; [BD] doğru parçası [AC] kenarını keser.',
      svg: `
          <path class="ln" d="M127.5,139.79 L35,300 L220,300 L127.5,139.79"/>
          <path class="ln" d="M127.5,139.79 L361.72,181.08"/>
          <path class="ln" d="M220,300 L361.72,181.08"/>
          <path class="ln" d="M35,300 L361.72,181.08"/>

          <path class="arc" d="M109.5,170.96 A36,36 0 0 0 162.95,146.04"/>
          <text class="val" x="127.5" y="197.29" text-anchor="middle">110°</text>

          <path class="arc" d="M186,300 A34,34 0 0 1 246.05,278.15"/>
          <text class="val" x="174.13" y="272.38" text-anchor="middle">140°</text>

          <path class="arc" d="M324.13,194.77 A40,40 0 0 0 331.08,206.8"/>
          <text class="val" x="308.02" y="216.58" text-anchor="middle">x</text>

          <circle class="pt" cx="127.5" cy="139.79" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="220" cy="300" r="3.2"/>
          <circle class="pt" cx="361.72" cy="181.08" r="3.2"/>

          <text x="127.5" y="127.79" text-anchor="middle">A</text>
          <text x="27" y="318" text-anchor="end">B</text>
          <text x="220" y="320" text-anchor="middle">C</text>
          <text x="370.72" y="177.08">D</text>
        `,
    },
    given: ['ABC eşkenar üçgen', 'm(BAD) = 110°', 'm(BCD) = 140°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BDC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' },
      { key: 'E', text: '35' },
    ],
    answer: 'B',
    hint: 'Verilen iki açının içinden eşkenar üçgenin 60°’lik açılarını çıkarıp önce ACD üçgeninin açılarını bul.',
    solution: [
      {
        title: 'ACD üçgeninin açıları',
        detail:
          'ABC eşkenar olduğundan m(BAC) = m(BCA) = 60°’dir. Buna göre m(DAC) = 110 − 60 = 50° ve m(ACD) = 140 − 60 = 80° bulunur.',
      },
      {
        title: 'Üçüncü açı',
        detail: 'ACD üçgeninde m(ADC) = 180 − 50 − 80 = 50° olur.',
      },
      {
        title: 'ACD ikizkenar üçgeni',
        detail:
          'm(DAC) = m(ADC) = 50° olduğundan ACD üçgeni ikizkenardır; bu iki açının karşısındaki kenarlar eşittir, yani |CD| = |CA|.',
      },
      {
        title: 'BCD ikizkenar üçgeni',
        detail:
          'Üçgen eşkenar olduğundan |CA| = |CB|’dir; öyleyse |CD| = |CB| olur ve BCD, tepe açısı m(BCD) = 140° olan bir ikizkenar üçgendir.',
      },
      {
        title: 'Sonuç',
        detail: 'x = m(BDC) = m(DBC) = (180 − 140) / 2 = 20° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 76
  {
    id: 'triangles-76',
    topic: 'Kesişen doğrularda açıortaylar',
    figure: {
      viewBox: '0 30 400 254',
      caption: 'Şekil 76',
      label:
        '[AC] ile [BD] doğru parçaları F noktasında kesişmektedir; ABD açısının açıortayı olan [BE] ile ACD açısının açıortayı olan [CE], şeklin sağ üst tarafındaki E noktasında kesişir.',
      svg: `
          <path class="ln" d="M133.01,63.48 L40,153.3"/>
          <path class="ln" d="M40,153.3 L360.38,153.3"/>
          <path class="ln" d="M133.01,63.48 L216.28,250.5"/>
          <path class="ln" d="M216.28,250.5 L360.38,153.3"/>
          <path class="ln" d="M40,153.3 L270.9,60.01"/>
          <path class="ln" d="M216.28,250.5 L270.9,60.01"/>

          <path class="arc" d="M111.43,84.32 A30,30 0 0 0 145.21,90.89"/>
          <text class="val" x="124.61" y="111.17" text-anchor="middle">70°</text>

          <path class="arc" d="M326.38,153.3 A34,34 0 0 0 332.2,172.31"/>
          <text class="val" x="293.44" y="178.27" text-anchor="middle">34°</text>

          <path class="arc" d="M73.09,121.35 A46,46 0 0 1 82.65,136.07"/>
          <line class="tick" x1="74.8" y1="130.7" x2="82.35" y2="125.8"/>
          <path class="arc" d="M82.65,136.07 A46,46 0 0 1 86,153.3"/>
          <line class="tick" x1="80.74" y1="145.38" x2="89.57" y2="143.66"/>

          <path class="arc" d="M200.01,213.96 A40,40 0 0 1 227.3,212.05"/>
          <line class="tick" x1="213.8" y1="215.09" x2="213.17" y2="206.11"/>
          <path class="arc" d="M227.3,212.05 A40,40 0 0 1 249.44,228.13"/>
          <line class="tick" x1="237.14" y1="221.78" x2="242.43" y2="214.5"/>

          <path class="arc" d="M241.23,72 A32,32 0 0 0 262.08,90.77"/>
          <text class="val" x="238.11" y="100.92" text-anchor="middle">x</text>

          <circle class="pt" cx="133.01" cy="63.48" r="3.2"/>
          <circle class="pt" cx="40" cy="153.3" r="3.2"/>
          <circle class="pt" cx="216.28" cy="250.5" r="3.2"/>
          <circle class="pt" cx="360.38" cy="153.3" r="3.2"/>
          <circle class="pt" cx="270.9" cy="60.01" r="3.2"/>
          <circle class="pt" cx="173" cy="153.3" r="3.2"/>

          <text x="133.01" y="51.48" text-anchor="middle">A</text>
          <text x="31" y="149.3" text-anchor="end">B</text>
          <text x="216.28" y="270.5" text-anchor="middle">C</text>
          <text x="369.38" y="157.3">D</text>
          <text x="270.9" y="48.01" text-anchor="middle">E</text>
          <text x="167" y="170.3" text-anchor="end">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 30 400 254',
      caption: 'Şekil 76 — [BC] çizildi',
      label:
        'Aynı şekle, B ile C noktalarını birleştiren [BC] doğru parçası yardımcı çizgi olarak kesikli biçimde eklenmiştir.',
      svg: `
          <path class="ln" d="M133.01,63.48 L40,153.3"/>
          <path class="ln" d="M40,153.3 L360.38,153.3"/>
          <path class="ln" d="M133.01,63.48 L216.28,250.5"/>
          <path class="ln" d="M216.28,250.5 L360.38,153.3"/>
          <path class="ln" d="M40,153.3 L270.9,60.01"/>
          <path class="ln" d="M216.28,250.5 L270.9,60.01"/>

          <path class="aux" d="M40,153.3 L216.28,250.5"/>

          <path class="arc" d="M111.43,84.32 A30,30 0 0 0 145.21,90.89"/>
          <text class="val" x="124.61" y="111.17" text-anchor="middle">70°</text>

          <path class="arc" d="M326.38,153.3 A34,34 0 0 0 332.2,172.31"/>
          <text class="val" x="293.44" y="178.27" text-anchor="middle">34°</text>

          <path class="arc" d="M73.09,121.35 A46,46 0 0 1 82.65,136.07"/>
          <line class="tick" x1="74.8" y1="130.7" x2="82.35" y2="125.8"/>
          <path class="arc" d="M82.65,136.07 A46,46 0 0 1 86,153.3"/>
          <line class="tick" x1="80.74" y1="145.38" x2="89.57" y2="143.66"/>

          <path class="arc" d="M200.01,213.96 A40,40 0 0 1 227.3,212.05"/>
          <line class="tick" x1="213.8" y1="215.09" x2="213.17" y2="206.11"/>
          <path class="arc" d="M227.3,212.05 A40,40 0 0 1 249.44,228.13"/>
          <line class="tick" x1="237.14" y1="221.78" x2="242.43" y2="214.5"/>

          <path class="arc" d="M241.23,72 A32,32 0 0 0 262.08,90.77"/>
          <text class="val" x="238.11" y="100.92" text-anchor="middle">x</text>

          <circle class="pt" cx="133.01" cy="63.48" r="3.2"/>
          <circle class="pt" cx="40" cy="153.3" r="3.2"/>
          <circle class="pt" cx="216.28" cy="250.5" r="3.2"/>
          <circle class="pt" cx="360.38" cy="153.3" r="3.2"/>
          <circle class="pt" cx="270.9" cy="60.01" r="3.2"/>
          <circle class="pt" cx="173" cy="153.3" r="3.2"/>

          <text x="133.01" y="51.48" text-anchor="middle">A</text>
          <text x="31" y="149.3" text-anchor="end">B</text>
          <text x="216.28" y="270.5" text-anchor="middle">C</text>
          <text x="369.38" y="157.3">D</text>
          <text x="270.9" y="48.01" text-anchor="middle">E</text>
          <text x="167" y="170.3" text-anchor="end">F</text>
        `,
    },
    given: [
      '[AC] ∩ [BD] = {F}',
      '[BE], ABD açısının açıortayı',
      '[CE], ACD açısının açıortayı',
      'm(BAC) = 70°',
      'm(BDC) = 34°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BEC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '46' },
      { key: 'B', text: '48' },
      { key: 'C', text: '50' },
      { key: 'D', text: '52' },
      { key: 'E', text: '54' },
    ],
    answer: 'D',
    hint: 'F köşesindeki ters açılar, B ve C köşelerindeki açıları birbirine bağlar; sonra [BC] yi çizip BEC üçgenine bak.',
    solution: [
      {
        title: 'F köşesindeki ters açılar',
        detail:
          'm(ABD) = 2b ve m(ACD) = 2c olsun. ABF ile DCF üçgenlerinde F köşesindeki açılar ters açı olduğundan eşittir; açı toplamlarından 70 + 2b = 34 + 2c, yani c − b = 18° bulunur.',
      },
      {
        title: '[BC] yi çiz',
        detail:
          'BCD üçgeninde m(BDC) = 34° olduğundan diğer iki açının toplamı m(DBC) + m(BCD) = 180 − 34 = 146°’dir.',
      },
      {
        title: 'BEC üçgeninin taban açıları',
        detail:
          '[BE] açıortay olduğundan m(EBD) = b’dir ve [BD], [BE] ile [BC] arasında kaldığından m(EBC) = b + m(DBC) olur. [CE] açıortay olduğundan m(ECD) = c’dir ve [CE], BCD açısının içinde kaldığından m(ECB) = m(BCD) − c olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'BEC üçgeninde x = 180 − m(EBC) − m(ECB) = 180 − (m(DBC) + m(BCD)) + (c − b) = 180 − 146 + 18 = 52° bulunur.',
      },
      {
        title: 'Kurulumun kuralı',
        detail:
          'Sonuç b ile c den bağımsızdır: bu kurulumda iki açıortay arasındaki açı her zaman (m(BAC) + m(BDC)) / 2 = (70 + 34) / 2 = 52°’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 77
  {
    id: 'triangles-77',
    topic: 'Eşkenar üçgende orta dikme ve paralellik',
    figure: {
      viewBox: '0 28 400 304',
      caption: 'Şekil 77',
      label:
        'ABC eşkenar üçgeninde B köşesinden [AC] kenarına inilen dikme, kenarı D noktasında kesip üçgenin dışındaki E noktasına kadar uzatılmıştır. C noktasından [AB] kenarına çizilen paralel, A ile E den geçen doğruyu F noktasında keser; C noktası hem E hem F ile birleştirilmiştir.',
      svg: `
          <path class="ln" d="M170,57.51 L30,300 L310,300 L170,57.51"/>
          <path class="ln" d="M30,300 L296.54,146.11"/>
          <path class="ln" d="M170,57.51 L369.39,197.13"/>
          <path class="ln" d="M310,300 L296.54,146.11"/>
          <path class="ln" d="M310,300 L369.39,197.13"/>

          <path class="ln" d="M234.5,169.23 L224.97,174.73 L230.47,184.26"/>

          <path class="arc" d="M288,261.89 A44,44 0 0 1 306.17,256.17"/>
          <text class="val" x="283.54" y="220.57" text-anchor="middle">25°</text>

          <path class="arc" d="M344.82,179.92 A30,30 0 0 0 354.39,223.11"/>
          <text class="val" x="323.51" y="211.8" text-anchor="middle">x</text>

          <circle class="pt" cx="170" cy="57.51" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="310" cy="300" r="3.2"/>
          <circle class="pt" cx="240" cy="178.76" r="3.2"/>
          <circle class="pt" cx="296.54" cy="146.11" r="3.2"/>
          <circle class="pt" cx="369.39" cy="197.13" r="3.2"/>

          <text x="170" y="45.51" text-anchor="middle">A</text>
          <text x="22" y="318" text-anchor="end">B</text>
          <text x="310" y="320" text-anchor="middle">C</text>
          <text x="238" y="198.76" text-anchor="middle">D</text>
          <text x="298.54" y="136.11">E</text>
          <text x="378.39" y="201.13">F</text>
        `,
    },
    given: [
      'ABC eşkenar üçgen',
      '[BE] ⊥ [AC] ve [BE] ∩ [AC] = {D}',
      'A, E, F doğrusal',
      '[AB] // [CF]',
      'm(ECD) = 25°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AFC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '85' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' },
      { key: 'E', text: '105' },
    ],
    answer: 'C',
    hint: 'Eşkenar üçgende bir kenara inen yükseklik, aynı zamanda o kenarın orta dikmesidir.',
    solution: [
      {
        title: 'Yükseklik aynı zamanda orta dikme',
        detail:
          'Eşkenar üçgende B köşesinden [AC] ye inen yükseklik aynı zamanda kenarortaydır: |AD| = |DC|. [BE] ⊥ [AC] olduğundan BE doğrusu [AC] nin orta dikmesidir.',
      },
      {
        title: 'E orta dikmenin üzerinde',
        detail:
          'Orta dikme üzerindeki her nokta kenarın uç noktalarına eşit uzaklıkta olduğundan |EA| = |EC|’dir; yani AEC üçgeni ikizkenardır.',
      },
      {
        title: 'İkizkenarın taban açıları',
        detail:
          'D ∈ [AC] olduğundan m(ECA) = m(ECD) = 25°’dir. AEC ikizkenar üçgeninde m(EAC) = m(ECA) = 25° bulunur.',
      },
      {
        title: 'Paralellikten C köşesindeki açı',
        detail:
          '[AB] // [CF] ve [AC] kesen olduğundan iç ters açılar eşittir: m(ACF) = m(BAC) = 60°.',
      },
      {
        title: 'Sonuç',
        detail:
          'A, E, F doğrusal olduğundan m(FAC) = m(EAC) = 25°’dir. AFC üçgeninde x = 180 − 25 − 60 = 95° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 78
  {
    id: 'triangles-78',
    topic: 'Üçgenin içine çizilen eşkenar üçgen',
    figure: {
      viewBox: '0 40 400 292',
      caption: 'Şekil 78',
      label:
        'ABC üçgeninde D noktası [AB], E noktası [AC], F noktası [BC] kenarı üzerindedir; bu üç nokta birleştirilerek DEF eşkenar üçgeni elde edilmiştir. D köşesinde m(ADE) = a, F köşesinde m(BFD) = b ve E köşesinde m(FEC) = α olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M242.84,70.19 L50,300 L350,300 L242.84,70.19"/>
          <path class="ln" d="M165.45,162.41 L303.03,199.28 L202.31,300 L165.45,162.41"/>

          <path class="arc" d="M184.73,139.43 A30,30 0 0 1 194.43,170.18"/>
          <text class="val" x="208.37" y="153.38" text-anchor="middle">a</text>

          <path class="arc" d="M172.31,300 A30,30 0 0 1 194.55,271.02"/>
          <text class="val" x="166.61" y="277.11" text-anchor="middle">b</text>

          <path class="arc" d="M281.82,220.49 A30,30 0 0 0 315.71,226.47"/>
          <text class="val" x="295.05" y="249.08" text-anchor="middle">α</text>

          <circle class="pt" cx="242.84" cy="70.19" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="165.45" cy="162.41" r="3.2"/>
          <circle class="pt" cx="303.03" cy="199.28" r="3.2"/>
          <circle class="pt" cx="202.31" cy="300" r="3.2"/>

          <text x="242.84" y="58.19" text-anchor="middle">A</text>
          <text x="42" y="318" text-anchor="end">B</text>
          <text x="358" y="318">C</text>
          <text x="156.45" y="160.41" text-anchor="end">D</text>
          <text x="312.03" y="197.28">E</text>
          <text x="202.31" y="320" text-anchor="middle">F</text>
        `,
    },
    given: [
      'DEF eşkenar üçgen',
      'D ∈ [AB], E ∈ [AC] ve F ∈ [BC]',
      '|AB| = |BC|',
      'm(ADE) = a',
      'm(BFD) = b',
      'a + b = 140°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(FEC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '55' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'D',
    hint: 'D ve F noktalarında birer doğru açı var; eşkenar üçgenin 60°’lik açılarını oradan dışarı at.',
    solution: [
      {
        title: 'D köşesindeki doğru açı',
        detail:
          'A, D, B doğrusal ve m(EDF) = 60° olduğundan a + 60 + m(BDF) = 180, yani m(BDF) = 120 − a bulunur.',
      },
      {
        title: 'BDF üçgeni',
        detail: 'BDF üçgeninde m(ABC) = 180 − (120 − a) − b = 60 + a − b olur.',
      },
      {
        title: 'İkizkenarlığın taban açıları',
        detail:
          '|AB| = |BC| olduğundan bu kenarların karşısındaki açılar eşittir: m(BAC) = m(BCA) = (180 − (60 + a − b)) / 2 = 60 − a / 2 + b / 2.',
      },
      {
        title: 'F köşesindeki doğru açı ve EFC üçgeni',
        detail:
          'B, F, C doğrusal olduğundan m(EFC) = 180 − b − 60 = 120 − b’dir. EFC üçgeninde α = 180 − (120 − b) − m(BCA) = 60 + b − m(BCA) olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'm(BCA) yerine yazılırsa α = 60 + b − (60 − a / 2 + b / 2) = (a + b) / 2 = 140 / 2 = 70° bulunur; sonuç a ile b nin ayrı ayrı değerinden bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 79
  {
    id: 'triangles-79',
    topic: 'Hem açıortay hem kenarortay olan doğru parçası',
    figure: {
      viewBox: '0 -50 400 382',
      caption: 'Şekil 79',
      label:
        'ABC üçgeninde A köşesinden çıkan [AD] doğru parçası, BAC açısını iki eş parçaya bölmekte ve [BC] kenarını |BD| = |DC| olacak biçimde D noktasında kesmektedir; B köşesi ile [AC] kenarı üzerindeki E noktası da birleştirilmiştir.',
      svg: `
          <path class="ln" d="M200,-29.7 L80,300 L320,300 Z"/>
          <path class="ln" d="M200,-29.7 L200,300"/>
          <path class="ln" d="M80,300 L255.96,124.04"/>

          <path class="arc" d="M180.16,24.8 A58,58 0 0 0 200,28.3"/>
          <line class="tick" x1="185.5" y1="26.64" x2="194.36" y2="28.2"/>
          <path class="arc" d="M200,28.3 A58,58 0 0 0 219.84,24.8"/>
          <line class="tick" x1="205.64" y1="28.2" x2="214.5" y2="26.64"/>

          <line class="tick" x1="140" y1="306" x2="140" y2="294"/>
          <line class="tick" x1="260" y1="306" x2="260" y2="294"/>

          <path class="arc" d="M95.05,258.65 A44,44 0 0 1 111.11,268.89"/>
          <text class="val" x="121.91" y="239.72" text-anchor="middle">25°</text>

          <path class="arc" d="M304.27,256.77 A46,46 0 0 0 274,300"/>
          <text class="val" x="265.94" y="267.64" text-anchor="middle">70°</text>

          <path class="arc" d="M245.01,93.97 A32,32 0 0 0 233.33,146.67"/>
          <text class="val" x="216.91" y="120.89" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="-29.7" r="3.2"/>
          <circle class="pt" cx="80" cy="300" r="3.2"/>
          <circle class="pt" cx="320" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>
          <circle class="pt" cx="255.96" cy="124.04" r="3.2"/>

          <text x="200" y="-43.7" text-anchor="middle">A</text>
          <text x="72" y="318" text-anchor="end">B</text>
          <text x="328" y="318">C</text>
          <text x="200" y="320" text-anchor="middle">D</text>
          <text x="265.96" y="122.04">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AD] açıortay',
      '|BD| = |DC|',
      'E ∈ [AC]',
      'm(ABE) = 25°',
      'm(ACB) = 70°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AEB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '105' },
      { key: 'B', text: '110' },
      { key: 'C', text: '115' },
      { key: 'D', text: '120' },
      { key: 'E', text: '125' },
    ],
    answer: 'C',
    hint: 'Bir kenara ait açıortay aynı zamanda o kenarın kenarortayı ise üçgen ikizkenardır; önce A köşesindeki açıyı bul.',
    solution: [
      {
        title: 'Üçgen ikizkenardır',
        detail:
          '[AD] hem BAC açısının açıortayı hem de |BD| = |DC| olduğundan [BC] kenarının kenarortayıdır. Bir üçgende bir köşeden çıkan açıortay ile kenarortay çakışıyorsa üçgen o köşede ikizkenardır: |AB| = |AC|.',
      },
      {
        title: 'Taban açıları',
        detail: '|AB| = |AC| olduğundan m(ABC) = m(ACB) = 70° olur.',
      },
      {
        title: 'A köşesindeki açı',
        detail: 'ABC üçgeninde m(BAC) = 180 − 70 − 70 = 40° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'E, [AC] üzerinde olduğundan ABE üçgeninin A köşesindeki açısı m(BAE) = m(BAC) = 40°’dir. ABE üçgeninde α = 180 − 40 − 25 = 115° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 80
  {
    id: 'triangles-80',
    topic: 'Açı ölçüleri arasındaki eşitsizlik',
    stem: [
      'Bir ABC üçgeninde ölçüleri tam sayı olan açılar arasında m(A) − m(C) < m(B) − 40° bağıntısı vardır.',
    ],
    ask: 'Buna göre, m(A) en fazla kaç derece olabilir?',
    choices: [
      { key: 'A', text: '72' },
      { key: 'B', text: '71' },
      { key: 'C', text: '70' },
      { key: 'D', text: '69' },
      { key: 'E', text: '68' },
    ],
    answer: 'D',
    hint: 'Üçgenin iç açıları toplamından m(B) yi çekip eşitsizlikte yerine yaz; m(C) kendiliğinden sadeleşir.',
    solution: [
      {
        title: 'İç açılar toplamı',
        detail:
          'Bir üçgende m(A) + m(B) + m(C) = 180° olduğundan m(B) = 180 − m(A) − m(C) yazılabilir.',
      },
      {
        title: 'Eşitsizlikte yerine koyma',
        detail:
          'm(A) − m(C) < m(B) − 40 eşitsizliğinde m(B) yerine yazılırsa m(A) − m(C) < 180 − m(A) − m(C) − 40, yani m(A) − m(C) < 140 − m(A) − m(C) elde edilir.',
      },
      {
        title: 'Sadeleştirme',
        detail:
          'Her iki tarafa m(C) eklenirse m(C) sadeleşir ve 2·m(A) < 140, yani m(A) < 70 kalır. Eşitsizlik kesin olduğundan m(A) = 70 alınamaz.',
      },
      {
        title: 'Sonuç',
        detail:
          'Açı ölçüleri tam sayı olduğundan m(A) en fazla 69° olabilir. Örneğin m(A) = 69°, m(B) = 105°, m(C) = 6° alındığında 69 − 6 = 63 < 105 − 40 = 65 sağlanır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 81
  {
    id: 'triangles-81',
    topic: 'İki iç açıortayın oluşturduğu açılar',
    figure: {
      viewBox: '0 -36 400 372',
      caption: 'Şekil 81',
      label:
        'ABC üçgeninde B köşesinden çıkan açıortay [AC] kenarını D noktasında, C köşesinden çıkan açıortay ise [AB] kenarını E noktasında kesmektedir.',
      svg: `
          <path class="ln" d="M320.87,-16.85 L55,300 L265,300 Z"/>
          <path class="ln" d="M55,300 L283.81,193.3"/>
          <path class="ln" d="M265,300 L160,174.87"/>

          <path class="arc" d="M88.42,260.17 A52,52 0 0 1 102.13,278.02"/>
          <line class="tick" x1="98.99" y1="271.91" x2="93.51" y2="264.77"/>
          <path class="arc" d="M102.13,278.02 A52,52 0 0 1 107,300"/>
          <line class="tick" x1="106.74" y1="293.14" x2="104.79" y2="284.35"/>

          <path class="arc" d="M272.64,256.67 A44,44 0 0 0 236.72,266.29"/>
          <line class="tick" x1="257.96" y1="256.33" x2="249.27" y2="258.66"/>
          <path class="arc" d="M236.72,266.29 A44,44 0 0 0 221,300"/>
          <line class="tick" x1="227.02" y1="277.33" x2="223.22" y2="285.48"/>

          <path class="arc" d="M295.16,13.79 A40,40 0 0 0 313.92,22.54"/>
          <text class="val" x="294.67" y="44.84" text-anchor="middle">α</text>

          <path class="arc" d="M179.28,151.88 A30,30 0 0 1 179.28,197.85"/>
          <text class="val" x="208" y="180.37" text-anchor="middle">100°</text>

          <path class="arc" d="M256.62,205.98 A30,30 0 0 0 278.6,222.85"/>
          <text class="val" x="253.38" y="238.47" text-anchor="middle">55°</text>

          <circle class="pt" cx="320.87" cy="-16.85" r="3.2"/>
          <circle class="pt" cx="55" cy="300" r="3.2"/>
          <circle class="pt" cx="265" cy="300" r="3.2"/>
          <circle class="pt" cx="283.81" cy="193.3" r="3.2"/>
          <circle class="pt" cx="160" cy="174.87" r="3.2"/>

          <text x="320.87" y="-28.85" text-anchor="middle">A</text>
          <text x="47" y="318" text-anchor="end">B</text>
          <text x="265" y="320" text-anchor="middle">C</text>
          <text x="293.81" y="191.3">D</text>
          <text x="150" y="172.87" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[BD] açıortay',
      '[CE] açıortay',
      'm(AEC) = 100°',
      'm(BDC) = 55°',
      'm(BAC) = α',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '25' },
      { key: 'C', text: '20' },
      { key: 'D', text: '15' },
      { key: 'E', text: '10' },
    ],
    answer: 'A',
    hint: 'm(ABC) = 2β ve m(ACB) = 2γ diyerek AEC ile BDC üçgenlerinin açı toplamlarını ayrı ayrı yaz.',
    solution: [
      {
        title: 'Yarım açıları adlandırma',
        detail:
          'Açıortaylar açıları ikiye böldüğünden m(ABC) = 2β, m(ACB) = 2γ diyelim. Böylece m(ABD) = m(DBC) = β ve m(ACE) = m(ECB) = γ olur.',
      },
      {
        title: 'AEC üçgeni',
        detail:
          'E, [AB] üzerinde olduğundan AEC üçgeninin açıları α, γ ve m(AEC) = 100°’dir: α + γ + 100 = 180 → α + γ = 80.',
      },
      {
        title: 'BDC üçgeni',
        detail:
          'D, [AC] üzerinde olduğundan BDC üçgeninin açıları β, 2γ ve m(BDC) = 55°’tir: β + 2γ + 55 = 180 → β + 2γ = 125.',
      },
      {
        title: 'İç açılar toplamı',
        detail:
          'ABC üçgeninde α + 2β + 2γ = 180’dir. Buraya 2γ = 125 − β yazılırsa α + 2β + 125 − β = 180, yani α + β = 55 bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'α + γ = 80 den γ = 80 − α, dolayısıyla 2γ = 160 − 2α olur. Bunu 2γ = 125 − β ile eşitlersek β = 2α − 35 çıkar. α + β = 55 te yerine konursa α + 2α − 35 = 55 → 3α = 90 → α = 30° bulunur.',
      },
      {
        title: 'Kontrol',
        detail:
          'α = 30 için β = 25 ve γ = 50 olur: m(ABC) = 50°, m(ACB) = 100° ve 30 + 50 + 100 = 180 ✓. m(AEC) = 180 − 30 − 50 = 100° ✓, m(BDC) = 180 − 25 − 100 = 55° ✓.',
      },
    ],
  },

  // ---------------------------------------------------------------- 82
  {
    id: 'triangles-82',
    topic: 'Paralellik ve ikizkenar üçgen',
    figure: {
      viewBox: '0 -44 400 366',
      caption: 'Şekil 82',
      label:
        '|AB| = |AC| olan ABC ikizkenar üçgeninde B köşesinden çıkan ve [AC] kenarına paralel olan doğru üzerinde, sırasıyla D ve E noktaları alınmıştır; D noktası C köşesiyle birleştirilmiştir.',
      svg: `
          <path class="ln" d="M180,-16.85 L40,150 L320,150 Z"/>
          <path class="ln" d="M40,150 L165.03,299"/>
          <path class="ln" d="M320,150 L118.75,243.85"/>

          <line class="tick" x1="105.4" y1="62.72" x2="114.6" y2="70.43"/>
          <line class="tick" x1="234.2" y1="57.09" x2="243.4" y2="49.37"/>

          <path class="par" d="M271.61,103.22 L284.62,107.84 L282.34,94.23"/>
          <path class="par" d="M135.01,274.12 L148.03,278.74 L145.74,265.12"/>

          <path class="arc" d="M154.29,13.8 A40,40 0 0 0 205.71,13.8"/>
          <text class="val" x="180" y="50.65" text-anchor="middle">80°</text>

          <path class="arc" d="M145.94,231.17 A30,30 0 0 1 138.03,266.83"/>
          <text class="val" x="167.56" y="260.17" text-anchor="middle">75°</text>

          <path class="arc" d="M262,150 A58,58 0 0 0 267.43,174.51"/>
          <text class="val" x="236.04" y="174.11" text-anchor="middle">α</text>

          <circle class="pt" cx="180" cy="-16.85" r="3.2"/>
          <circle class="pt" cx="40" cy="150" r="3.2"/>
          <circle class="pt" cx="320" cy="150" r="3.2"/>
          <circle class="pt" cx="118.75" cy="243.85" r="3.2"/>
          <circle class="pt" cx="165.03" cy="299" r="3.2"/>

          <text x="180" y="-28.85" text-anchor="middle">A</text>
          <text x="31" y="146" text-anchor="end">B</text>
          <text x="329" y="154">C</text>
          <text x="108.75" y="245.85" text-anchor="end">D</text>
          <text x="155.03" y="303" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '|AB| = |AC|',
      'B, D, E doğrusal',
      '[AC] // [BE]',
      'm(BAC) = 80°',
      'm(CDE) = 75°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '25' },
      { key: 'C', text: '30' },
      { key: 'D', text: '35' },
      { key: 'E', text: '40' },
    ],
    answer: 'B',
    hint: 'Paralelliği [BC] keseni üzerinden kullan: m(DBC) açısı taban açılarından birine eşit çıkar.',
    solution: [
      {
        title: 'Taban açıları',
        detail:
          '|AB| = |AC| olduğundan ABC ikizkenardır ve m(ABC) = m(ACB) = (180 − 80) / 2 = 50° olur.',
      },
      {
        title: 'Paralellikten gelen açı',
        detail:
          '[AC] // [BE] ve [BC] kesen olduğundan m(DBC) ile m(ACB) ters açılardır (iç ters açılar): m(DBC) = 50°.',
      },
      {
        title: 'D köşesindeki doğru açı',
        detail:
          'B, D, E doğrusal olduğundan m(BDC) ile m(CDE) bütünlerdir: m(BDC) = 180 − 75 = 105°.',
      },
      {
        title: 'Sonuç',
        detail: 'BDC üçgeninde α = 180 − 105 − 50 = 25° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 83
  {
    id: 'triangles-83',
    topic: 'Dik üçgende zincirleme ikizkenar üçgenler',
    figure: {
      viewBox: '0 -60 400 396',
      caption: 'Şekil 83',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde, [AB] kenarı üzerinde F, [AC] kenarı üzerinde D ve [BC] kenarı üzerinde E noktaları alınmış; F ile D, D ile E birleştirilmiştir. |AD| = |DF| ve |DE| = |EC| olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M50,-33.18 L50,300 L350,300 Z"/>
          <path class="ln" d="M50,246.69 L176,106.75"/>
          <path class="ln" d="M176,106.75 L155.69,300"/>

          <path class="ln" d="M50,288 L62,288 L62,300"/>

          <line class="tick" x1="108.54" y1="40.8" x2="117.46" y2="32.77"/>
          <line class="tick" x1="108.54" y1="172.71" x2="117.46" y2="180.74"/>

          <line class="tick" x1="161.08" y1="191.3" x2="173.02" y2="192.55"/>
          <line class="tick" x1="160.7" y1="194.88" x2="172.64" y2="196.13"/>
          <line class="tick" x1="251.04" y1="306" x2="251.04" y2="294"/>
          <line class="tick" x1="254.64" y1="306" x2="254.64" y2="294"/>

          <path class="arc" d="M50,12.82 A46,46 0 0 0 80.78,1"/>
          <text class="val" x="73.65" y="33.93" text-anchor="middle">x</text>

          <path class="arc" d="M155.93,129.05 A30,30 0 0 0 172.86,136.59"/>
          <text class="val" x="149.97" y="170.72" text-anchor="middle">36°</text>

          <circle class="pt" cx="50" cy="-33.18" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="176" cy="106.75" r="3.2"/>
          <circle class="pt" cx="155.69" cy="300" r="3.2"/>
          <circle class="pt" cx="50" cy="246.69" r="3.2"/>

          <text x="50" y="-45.18" text-anchor="middle">A</text>
          <text x="41" y="318" text-anchor="end">B</text>
          <text x="359" y="318">C</text>
          <text x="186" y="104.75">D</text>
          <text x="155.69" y="320" text-anchor="middle">E</text>
          <text x="41" y="250.69" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'F ∈ [AB], D ∈ [AC], E ∈ [BC]',
      '|AD| = |DF|',
      '|DE| = |EC|',
      'm(FDE) = 36°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '38' },
      { key: 'C', text: '40' },
      { key: 'D', text: '42' },
      { key: 'E', text: '45' },
    ],
    answer: 'D',
    hint: 'A, D, C doğrusal; D köşesindeki üç açının toplamı 180°’dir. İki ikizkenar üçgenin tepe açılarını x cinsinden yaz.',
    solution: [
      {
        title: 'C köşesindeki açı',
        detail: 'ABC üçgeni B köşesinde dik olduğundan m(BAC) + m(ACB) = 90°’dir: m(ACB) = 90 − x.',
      },
      {
        title: 'ADF ikizkenar üçgeni',
        detail:
          '|AD| = |DF| olduğundan ADF ikizkenardır ve bu kenarların karşısındaki açılar eşittir: m(DFA) = m(DAF) = x. Buradan m(ADF) = 180 − 2x bulunur.',
      },
      {
        title: 'DEC ikizkenar üçgeni',
        detail: '|DE| = |EC| olduğundan DEC ikizkenardır: m(EDC) = m(ECD) = m(ACB) = 90 − x.',
      },
      {
        title: 'D köşesindeki doğru açı',
        detail:
          'A, D, C doğrusal olduğundan m(ADF) + m(FDE) + m(EDC) = 180°’dir: (180 − 2x) + 36 + (90 − x) = 180.',
      },
      {
        title: 'Sonuç',
        detail: '306 − 3x = 180 → 3x = 126 → x = 42° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 84
  {
    id: 'triangles-84',
    topic: 'İkizkenar üçgende iç içe ikizkenar üçgen',
    figure: {
      viewBox: '0 100 400 232',
      caption: 'Şekil 84',
      label:
        '|AB| = |AC| olan ABC ikizkenar üçgeninde [BC] kenarı üzerinde bir D noktası alınmış ve A ile birleştirilmiştir; |AD| = |DC| olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M200,120.81 L60,300 L340,300 Z"/>
          <path class="ln" d="M200,120.81 L155.32,300"/>

          <line class="tick" x1="125.27" y1="206.71" x2="134.73" y2="214.1"/>
          <line class="tick" x1="265.27" y1="214.1" x2="274.73" y2="206.71"/>

          <line class="tick" x1="164.23" y1="239.46" x2="175.88" y2="242.36"/>
          <line class="tick" x1="163.36" y1="242.95" x2="175.01" y2="245.86"/>
          <line class="tick" x1="245.86" y1="306" x2="245.86" y2="294"/>
          <line class="tick" x1="249.46" y1="306" x2="249.46" y2="294"/>

          <path class="arc" d="M164.29,166.51 A58,58 0 0 0 185.97,177.09"/>
          <text class="val" x="164.05" y="200.01" text-anchor="middle">24°</text>

          <path class="arc" d="M88.32,263.75 A46,46 0 0 1 106,300"/>
          <text class="val" x="119.32" y="276.57" text-anchor="middle">x</text>

          <circle class="pt" cx="200" cy="120.81" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="155.32" cy="300" r="3.2"/>

          <text x="200" y="108.81" text-anchor="middle">A</text>
          <text x="52" y="318" text-anchor="end">B</text>
          <text x="348" y="318">C</text>
          <text x="155.32" y="320" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC bir üçgen', '|AB| = |AC|', 'D ∈ [BC]', '|AD| = |DC|', 'm(BAD) = 24°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '52' },
      { key: 'C', text: '54' },
      { key: 'D', text: '56' },
      { key: 'E', text: '58' },
    ],
    answer: 'B',
    hint: 'İki ikizkenar üçgenin de açılarını yalnız x cinsinden yaz; m(BAD), tepe açısından m(DAC) çıkarılarak bulunur.',
    solution: [
      {
        title: 'Taban açıları',
        detail: '|AB| = |AC| olduğundan ABC ikizkenardır: m(ABC) = m(ACB) = x.',
      },
      {
        title: 'Tepe açısı',
        detail: 'ABC üçgeninde m(BAC) = 180 − x − x = 180 − 2x olur.',
      },
      {
        title: 'ADC ikizkenar üçgeni',
        detail:
          '|AD| = |DC| olduğundan ADC ikizkenardır ve bu kenarların karşısındaki açılar eşittir: m(DAC) = m(DCA) = m(ACB) = x.',
      },
      {
        title: 'BAD açısı',
        detail:
          'D, [BC] üzerinde olduğundan [AD], BAC açısını ikiye ayırır: m(BAD) = m(BAC) − m(DAC) = (180 − 2x) − x = 180 − 3x.',
      },
      {
        title: 'Sonuç',
        detail: '180 − 3x = 24 → 3x = 156 → x = 52° bulunur.',
      },
      {
        title: 'Kontrol',
        detail:
          'x = 52 için m(BAC) = 76°, m(DAC) = 52° ve m(BAD) = 76 − 52 = 24° ✓; ABD üçgeninde 24 + 52 + m(ADB) = 180 → m(ADB) = 104° ve m(ADC) = 76° olur, bu da m(DAC) = m(DCA) = 52° ile tutarlıdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 85
  {
    id: 'triangles-85',
    topic: 'İki ikizkenar üçgenin kesiştiği açı',
    figure: {
      viewBox: '0 60 400 272',
      caption: 'Şekil 85',
      label:
        'ABC üçgeninde [AB] kenarı üzerinde D, [AC] kenarı üzerinde E ve [BC] kenarı üzerinde F noktaları alınmış; [DE] ile [AF] doğru parçaları çizilmiş ve bunlar K noktasında kesişmiştir. B köşesindeki açı 80°, K köşesindeki EKF açısı x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M65.91,84.98 L28,300 L373,300 Z"/>
          <path class="ln" d="M39.87,232.7 L169.77,157.7"/>
          <path class="ln" d="M65.91,84.98 L144.18,300"/>

          <path class="arc" d="M35.29,258.64 A42,42 0 0 1 70,300"/>
          <text class="val" x="75.5" y="265" text-anchor="middle">80°</text>

          <path class="arc" d="M130.07,180.62 A28,28 0 0 1 115.4,220.93"/>
          <text class="val" x="147" y="215" text-anchor="middle">x</text>

          <circle class="pt" cx="65.91" cy="84.98" r="3.2"/>
          <circle class="pt" cx="28" cy="300" r="3.2"/>
          <circle class="pt" cx="373" cy="300" r="3.2"/>
          <circle class="pt" cx="39.87" cy="232.7" r="3.2"/>
          <circle class="pt" cx="169.77" cy="157.7" r="3.2"/>
          <circle class="pt" cx="144.18" cy="300" r="3.2"/>
          <circle class="pt" cx="105.82" cy="194.62" r="3.2"/>

          <text x="65.91" y="72.98" text-anchor="middle">A</text>
          <text x="20" y="318" text-anchor="end">B</text>
          <text x="381" y="318">C</text>
          <text x="30.87" y="236.7" text-anchor="end">D</text>
          <text x="178.77" y="154.7">E</text>
          <text x="144.18" y="320" text-anchor="middle">F</text>
          <text x="94" y="190" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AB], E ∈ [AC], F ∈ [BC]',
      'K, [DE] ile [AF] doğru parçalarının kesişim noktasıdır',
      '|AD| = |DE|',
      '|AF| = |FC|',
      'm(ABC) = 80°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EKF) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '85' },
      { key: 'C', text: '90' },
      { key: 'D', text: '95' },
      { key: 'E', text: '100' },
    ],
    answer: 'E',
    hint: 'İki ikizkenar üçgenin taban açılarını A ve C köşelerinin açıları cinsinden yaz, sonra AKE üçgenine bak.',
    solution: [
      {
        title: 'ADE ikizkenar üçgeni',
        detail:
          '|AD| = |DE| olduğundan ADE ikizkenardır ve bu kenarların karşısındaki açılar eşittir: m(AED) = m(DAE). D, [AB] ve E, [AC] üzerinde olduğundan m(DAE) = m(BAC)’tır, yani m(AED) = m(BAC).',
      },
      {
        title: 'AFC ikizkenar üçgeni',
        detail: '|AF| = |FC| olduğundan AFC ikizkenardır: m(FAC) = m(FCA) = m(ACB) olur.',
      },
      {
        title: 'AKE üçgeninin açıları',
        detail:
          'K, [AF] üzerinde olduğundan m(KAE) = m(FAC) = m(ACB)’dir. K, [DE] üzerinde olduğundan da m(AEK) = m(AED) = m(BAC)’tır.',
      },
      {
        title: 'K köşesindeki açı',
        detail:
          'AKE üçgeninde m(AKE) = 180 − m(KAE) − m(AEK) = 180 − m(ACB) − m(BAC) = m(ABC) = 80° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'A, K, F doğrusal olduğundan m(AKE) ile m(EKF) bütünlerdir: x = 180 − 80 = 100° olur. Sonucun yalnız m(ABC)’ye bağlı olduğuna, A ve C açılarının ayrı ayrı gerekmediğine dikkat et.',
      },
    ],
  },

  // ---------------------------------------------------------------- 86
  {
    id: 'triangles-86',
    topic: 'Dik üçgende hipotenüse ait kenarortay',
    figure: {
      viewBox: '0 54 400 278',
      caption: 'Şekil 86',
      label:
        'ABC üçgeninde A köşesinden [BC] kenarına inen [AH] yüksekliği ve B köşesini [AC] kenarı üzerindeki D noktasına birleştiren [BD] doğru parçası çizilmiştir. |BH|, |AD| ve |DC| eşit uzunlukta işaretlenmiş, m(HAC) = 40° ve m(DBC) = α olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M179.38,78.79 L35,300 L365,300 Z"/>
          <path class="ln" d="M179.38,78.79 L179.38,300"/>
          <path class="ln" d="M35,300 L272.19,189.4"/>

          <path class="ln" d="M179.38,288 L191.38,288 L191.38,300"/>

          <line class="tick" x1="107.19" y1="306" x2="107.19" y2="294"/>
          <line class="tick" x1="221.19" y1="137.95" x2="230.38" y2="130.24"/>
          <line class="tick" x1="314" y1="248.55" x2="323.19" y2="240.84"/>

          <path class="arc" d="M208.95,114.03 A46,46 0 0 1 179.38,124.79"/>
          <text class="val" x="202" y="146" text-anchor="middle">40°</text>

          <path class="arc" d="M80.32,278.87 A50,50 0 0 1 85,300"/>
          <text class="val" x="107" y="289" text-anchor="middle">α</text>

          <circle class="pt" cx="179.38" cy="78.79" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="365" cy="300" r="3.2"/>
          <circle class="pt" cx="179.38" cy="300" r="3.2"/>
          <circle class="pt" cx="272.19" cy="189.4" r="3.2"/>

          <text x="179.38" y="66.79" text-anchor="middle">A</text>
          <text x="27" y="318" text-anchor="end">B</text>
          <text x="373" y="318">C</text>
          <text x="179.38" y="320" text-anchor="middle">H</text>
          <text x="281.19" y="186.4">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 54 400 278',
      caption: 'Şekil 86 — [HD] kenarortayı çizildi',
      label:
        'Aynı şekle, H noktasını [AC] kenarının orta noktası D ile birleştiren kenarortay kesikli çizgiyle eklenmiş; |HD| de diğerleriyle eşit çentiklenmiş ve m(DHC) = 50° olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M179.38,78.79 L35,300 L365,300 Z"/>
          <path class="ln" d="M179.38,78.79 L179.38,300"/>
          <path class="ln" d="M35,300 L272.19,189.4"/>

          <path class="ln" d="M179.38,288 L191.38,288 L191.38,300"/>

          <path class="aux" d="M179.38,300 L272.19,189.4"/>

          <line class="tick" x1="107.19" y1="306" x2="107.19" y2="294"/>
          <line class="tick" x1="221.19" y1="137.95" x2="230.38" y2="130.24"/>
          <line class="tick" x1="314" y1="248.55" x2="323.19" y2="240.84"/>
          <line class="tick" x1="230.38" y1="248.55" x2="221.19" y2="240.84"/>

          <path class="arc" d="M208.95,114.03 A46,46 0 0 1 179.38,124.79"/>
          <text class="val" x="202" y="146" text-anchor="middle">40°</text>

          <path class="arc" d="M80.32,278.87 A50,50 0 0 1 85,300"/>
          <text class="val" x="107" y="289" text-anchor="middle">α</text>

          <path class="arc" d="M201.24,273.95 A34,34 0 0 1 213.38,300"/>
          <text class="val" x="228" y="282" text-anchor="middle">50°</text>

          <circle class="pt" cx="179.38" cy="78.79" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="365" cy="300" r="3.2"/>
          <circle class="pt" cx="179.38" cy="300" r="3.2"/>
          <circle class="pt" cx="272.19" cy="189.4" r="3.2"/>

          <text x="179.38" y="66.79" text-anchor="middle">A</text>
          <text x="27" y="318" text-anchor="end">B</text>
          <text x="373" y="318">C</text>
          <text x="179.38" y="320" text-anchor="middle">H</text>
          <text x="281.19" y="186.4">D</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve H ∈ [BC]',
      'D ∈ [AC]',
      '|BH| = |AD| = |DC|',
      'm(HAC) = 40°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DBC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '25' },
      { key: 'C', text: '20' },
      { key: 'D', text: '15' },
      { key: 'E', text: '10' },
    ],
    answer: 'B',
    hint: '|AD| = |DC| demek, D noktasının [AC] kenarının orta noktası olması demektir; AHC dik üçgeninde H ile D’yi birleştir.',
    solution: [
      {
        title: 'C köşesindeki açı',
        detail:
          'AHC üçgeni H köşesinde dik olduğundan m(HAC) + m(ACH) = 90°’dir: m(ACB) = 90 − 40 = 50°.',
      },
      {
        title: 'Hipotenüse ait kenarortay',
        detail:
          '|AD| = |DC| olduğundan D, [AC]’nin orta noktasıdır. AHC dik üçgeninde [HD] hipotenüse ait kenarortay olduğundan |HD| = |AD| = |DC| = |AC|/2 olur.',
      },
      {
        title: 'DHC ikizkenar üçgeni',
        detail: '|DH| = |DC| olduğundan DHC ikizkenardır: m(DHC) = m(DCH) = 50°’dir.',
      },
      {
        title: 'BHD ikizkenar üçgeni',
        detail:
          'B, H, C doğrusal olduğundan m(BHD) = 180 − 50 = 130° olur. Verilen |BH| ile bulunan |HD| eşit olduğundan BHD üçgeni ikizkenardır.',
      },
      {
        title: 'Sonuç',
        detail: 'α = m(DBH) = (180 − 130)/2 = 25° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 87
  {
    id: 'triangles-87',
    topic: 'İki yüksekliğin kesiştiği noktada eşit parçalar',
    figure: {
      viewBox: '0 -6 400 338',
      caption: 'Şekil 87',
      label:
        'ABC üçgeninde C köşesinden [AB] kenarına inen [CD] ve B köşesinden [AC] kenarına inen [BE] yükseklikleri çizilmiş, bunlar F noktasında kesişmiştir. |DF| = |FE| olarak çentiklenmiş, m(FCB) = 20° ve m(BAC) = α olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,25.25 L100,300 L300,300 Z"/>
          <path class="ln" d="M300,300 L123.4,235.72"/>
          <path class="ln" d="M100,300 L276.6,235.72"/>

          <path class="ln" d="M119.63,246.06 L129.97,249.82 L133.73,239.48"/>
          <path class="ln" d="M272.84,225.38 L262.51,229.15 L266.27,239.48"/>

          <line class="tick" x1="159.65" y1="255.3" x2="163.75" y2="244.02"/>
          <line class="tick" x1="240.35" y1="255.3" x2="236.25" y2="244.02"/>

          <path class="arc" d="M240,300 A60,60 0 0 1 243.62,279.48"/>
          <text class="val" x="223" y="291" text-anchor="middle">20°</text>

          <path class="arc" d="M215.73,68.48 A46,46 0 0 1 184.27,68.48"/>
          <text class="val" x="200" y="94" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="25.25" r="3.2"/>
          <circle class="pt" cx="100" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="300" r="3.2"/>
          <circle class="pt" cx="123.4" cy="235.72" r="3.2"/>
          <circle class="pt" cx="276.6" cy="235.72" r="3.2"/>
          <circle class="pt" cx="200" cy="263.6" r="3.2"/>

          <text x="200" y="13.25" text-anchor="middle">A</text>
          <text x="92" y="318" text-anchor="end">B</text>
          <text x="308" y="318">C</text>
          <text x="114.4" y="232.72" text-anchor="end">D</text>
          <text x="285.6" y="232.72">E</text>
          <text x="190" y="290" text-anchor="end">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -6 400 338',
      caption: 'Şekil 87 — [AF] uzatılarak [BC] kenarına inen yükseklik çizildi',
      label:
        'Aynı şekle, A köşesinden F noktasından geçip [BC] kenarına inen üçüncü yükseklik kesikli çizgiyle eklenmiş; ayağı H ile adlandırılmış ve oradaki dik açı işaretlenmiştir.',
      svg: `
          <path class="ln" d="M200,25.25 L100,300 L300,300 Z"/>
          <path class="ln" d="M300,300 L123.4,235.72"/>
          <path class="ln" d="M100,300 L276.6,235.72"/>

          <path class="ln" d="M119.63,246.06 L129.97,249.82 L133.73,239.48"/>
          <path class="ln" d="M272.84,225.38 L262.51,229.15 L266.27,239.48"/>

          <path class="aux" d="M200,25.25 L200,300"/>
          <path class="ln" d="M212,300 L212,288 L200,288"/>

          <line class="tick" x1="159.65" y1="255.3" x2="163.75" y2="244.02"/>
          <line class="tick" x1="240.35" y1="255.3" x2="236.25" y2="244.02"/>

          <path class="arc" d="M240,300 A60,60 0 0 1 243.62,279.48"/>
          <text class="val" x="223" y="291" text-anchor="middle">20°</text>

          <path class="arc" d="M215.73,68.48 A46,46 0 0 1 184.27,68.48"/>
          <text class="val" x="216" y="94" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="25.25" r="3.2"/>
          <circle class="pt" cx="100" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="300" r="3.2"/>
          <circle class="pt" cx="123.4" cy="235.72" r="3.2"/>
          <circle class="pt" cx="276.6" cy="235.72" r="3.2"/>
          <circle class="pt" cx="200" cy="263.6" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text x="200" y="13.25" text-anchor="middle">A</text>
          <text x="92" y="318" text-anchor="end">B</text>
          <text x="308" y="318">C</text>
          <text x="114.4" y="232.72" text-anchor="end">D</text>
          <text x="285.6" y="232.72">E</text>
          <text x="190" y="290" text-anchor="end">F</text>
          <text x="200" y="320" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[CD] ⊥ [AB] ve D ∈ [AB]',
      '[BE] ⊥ [AC] ve E ∈ [AC]',
      'F, [CD] ile [BE]’nin kesişim noktasıdır',
      '|DF| = |FE|',
      'm(FCB) = 20°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '30' },
      { key: 'C', text: '40' },
      { key: 'D', text: '50' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'ADF ile AEF dik üçgenlerinin hipotenüsü ortaktır ve birer dik kenarı eşit verilmiştir; buradan [AF]’nin ne olduğunu çıkar.',
    solution: [
      {
        title: 'B köşesindeki açı',
        detail:
          'ADC üçgeni D köşesinde dik olduğundan m(ACD) = 90 − α’dır. Buna m(DCB) = 20° eklenirse m(ACB) = 110 − α olur. Üçgenin iç açıları toplamından m(ABC) = 180 − α − (110 − α) = 70° bulunur.',
      },
      {
        title: '[AF] açıortaydır',
        detail:
          'ADF ve AEF üçgenleri D ve E köşelerinde diktir, [AF] hipotenüsleri ortaktır ve |DF| = |FE| verilmiştir. Hipotenüs–dik kenar eşliğinden bu iki üçgen eştir; dolayısıyla m(DAF) = m(EAF) = α/2 olur.',
      },
      {
        title: 'F diklik merkezidir',
        detail:
          'F, iki yüksekliğin kesişim noktası olduğundan üçgenin diklik merkezidir. Üç yükseklik aynı noktada kesiştiğinden A’dan inen yükseklik de F’den geçer, yani [AF] uzatıldığında [BC] kenarına diktir.',
      },
      {
        title: 'İkizkenar üçgen',
        detail:
          'A köşesinden çıkan doğru hem açıortay hem yükseklik olduğundan ABC üçgeni ikizkenardır: m(ABC) = m(ACB) = 70°.',
      },
      {
        title: 'Sonuç',
        detail: '110 − α = 70 → α = 40° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 88
  {
    id: 'triangles-88',
    topic: 'Zincirleme ikizkenar üçgenler',
    figure: {
      viewBox: '0 158 400 174',
      caption: 'Şekil 88',
      label:
        'ABC üçgeninde [BC] kenarı üzerinde D, [AC] kenarı üzerinde E noktaları alınmış; [BE] ve [DE] doğru parçaları çizilmiştir. |AB| = |AE| tek, |BD| = |DE| = |EC| çift çentikle işaretlenmiş, m(BAC) = 108° ve m(EDB) = α olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M123.02,185.59 L20,300 L380,300 Z"/>
          <path class="ln" d="M20,300 L263.67,248.21"/>
          <path class="ln" d="M147.34,300 L263.67,248.21"/>

          <line class="tick" x1="67.05" y1="238.78" x2="75.97" y2="246.81"/>
          <line class="tick" x1="190.9" y1="222.38" x2="195.79" y2="211.41"/>

          <line class="tick" x1="81.67" y1="306" x2="81.67" y2="294"/>
          <line class="tick" x1="85.67" y1="306" x2="85.67" y2="294"/>
          <line class="tick" x1="206.12" y1="280.4" x2="201.24" y2="269.44"/>
          <line class="tick" x1="209.77" y1="278.77" x2="204.89" y2="267.81"/>
          <line class="tick" x1="317.57" y1="278.77" x2="322.45" y2="267.81"/>
          <line class="tick" x1="321.22" y1="280.4" x2="326.1" y2="269.44"/>

          <path class="arc" d="M159.56,201.85 A40,40 0 0 1 96.25,215.31"/>
          <text class="val" x="133" y="236" text-anchor="middle">108°</text>

          <path class="arc" d="M161.96,293.49 A16,16 0 0 0 131.34,300"/>
          <text class="val" x="139" y="285" text-anchor="middle">α</text>

          <circle class="pt" cx="123.02" cy="185.59" r="3.2"/>
          <circle class="pt" cx="20" cy="300" r="3.2"/>
          <circle class="pt" cx="380" cy="300" r="3.2"/>
          <circle class="pt" cx="147.34" cy="300" r="3.2"/>
          <circle class="pt" cx="263.67" cy="248.21" r="3.2"/>

          <text x="123.02" y="173.59" text-anchor="middle">A</text>
          <text x="12" y="318" text-anchor="end">B</text>
          <text x="388" y="318">C</text>
          <text x="147.34" y="320" text-anchor="middle">D</text>
          <text x="272.67" y="245.21">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [BC], E ∈ [AC]',
      '|AB| = |AE|',
      '|BD| = |DE| = |EC|',
      'm(BAC) = 108°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EDB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '136' },
      { key: 'B', text: '142' },
      { key: 'C', text: '150' },
      { key: 'D', text: '156' },
      { key: 'E', text: '160' },
    ],
    answer: 'D',
    hint: 'Önce ABE ikizkenar üçgeninin taban açılarını bul; sonra m(ACB) = c diyerek iki ikizkenar üçgenin açılarını c cinsinden yaz.',
    solution: [
      {
        title: 'ABE ikizkenar üçgeni',
        detail: '|AB| = |AE| olduğundan ABE ikizkenardır: m(ABE) = m(AEB) = (180 − 108)/2 = 36°.',
      },
      {
        title: 'BEC açısı',
        detail: 'A, E, C doğrusal olduğundan m(BEC) = 180 − 36 = 144° olur.',
      },
      {
        title: 'DEC ikizkenar üçgeni',
        detail:
          'm(ACB) = c olsun. |DE| = |EC| olduğundan m(EDC) = m(ECD) = c ve m(DEC) = 180 − 2c olur.',
      },
      {
        title: 'BDE ikizkenar üçgeni',
        detail:
          '|BD| = |DE| olduğundan m(DBE) = m(DEB)’dir. m(EDC) ise BDE üçgeninin D köşesindeki dış açısıdır: c = m(DBE) + m(DEB) = 2·m(DEB) → m(DEB) = c/2.',
      },
      {
        title: 'c’nin bulunması',
        detail: 'm(BEC) = m(DEB) + m(DEC) olduğundan c/2 + (180 − 2c) = 144 → 3c/2 = 36 → c = 24°.',
      },
      {
        title: 'Sonuç',
        detail: 'B, D, C doğrusal olduğundan α = 180 − m(EDC) = 180 − 24 = 156° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 89
  {
    id: 'triangles-89',
    topic: 'Eşkenar üçgen doğuran açılar',
    figure: {
      viewBox: '0 34 400 298',
      caption: 'Şekil 89',
      label:
        'ABC üçgeninde [BC] kenarı üzerinde D, [AC] kenarı üzerinde E noktaları alınmış; [AD], [BE] ve [DE] doğru parçaları çizilmiştir. m(BAD) = 10°, m(DAC) = 50°, m(EBC) = 25°, m(ACB) = 35° ve m(BED) = α olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M40.78,62.48 L20,300 L380,300 Z"/>
          <path class="ln" d="M40.78,62.48 L61.56,300"/>
          <path class="ln" d="M20,300 L236.09,199.23"/>
          <path class="ln" d="M61.56,300 L236.09,199.23"/>

          <path class="arc" d="M44.79,108.3 A46,46 0 0 1 36.77,108.3"/>
          <text class="val" x="31" y="116" text-anchor="end">10°</text>

          <path class="arc" d="M78.46,88.86 A46,46 0 0 1 44.79,108.3"/>
          <text class="val" x="75" y="126" text-anchor="middle">50°</text>

          <path class="arc" d="M67.13,278.02 A52,52 0 0 1 72,300"/>
          <text class="val" x="100" y="294" text-anchor="middle">25°</text>

          <path class="arc" d="M334,300 A46,46 0 0 1 342.32,273.62"/>
          <text class="val" x="317" y="285" text-anchor="middle">35°</text>

          <path class="arc" d="M201.45,219.23 A40,40 0 0 1 199.84,216.14"/>
          <text class="val" x="196" y="236" text-anchor="middle">α</text>

          <circle class="pt" cx="40.78" cy="62.48" r="3.2"/>
          <circle class="pt" cx="20" cy="300" r="3.2"/>
          <circle class="pt" cx="380" cy="300" r="3.2"/>
          <circle class="pt" cx="61.56" cy="300" r="3.2"/>
          <circle class="pt" cx="236.09" cy="199.23" r="3.2"/>

          <text x="40.78" y="50.48" text-anchor="middle">A</text>
          <text x="12" y="318" text-anchor="end">B</text>
          <text x="388" y="318">C</text>
          <text x="61.56" y="320" text-anchor="middle">D</text>
          <text x="245.09" y="196.23">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 34 400 298',
      caption: 'Şekil 89 — eşkenar ABE üçgeni vurgulandı',
      label:
        'Aynı şekilde |AB| = |AD| = |AE| eşitlikleri çentiklerle işaretlenmiş ve üç açısı da 60° olan ABE üçgeni kesikli çizgiyle vurgulanmıştır.',
      svg: `
          <path class="ln" d="M40.78,62.48 L20,300 L380,300 Z"/>
          <path class="ln" d="M40.78,62.48 L61.56,300"/>
          <path class="ln" d="M20,300 L236.09,199.23"/>
          <path class="ln" d="M61.56,300 L236.09,199.23"/>

          <path class="aux" d="M40.78,62.48 L20,300 L236.09,199.23 Z"/>

          <line class="tick" x1="24.41" y1="180.72" x2="36.37" y2="181.76"/>
          <line class="tick" x1="45.19" y1="181.76" x2="57.15" y2="180.72"/>
          <line class="tick" x1="134.99" y1="135.77" x2="141.88" y2="125.94"/>

          <path class="arc" d="M44.79,108.3 A46,46 0 0 1 36.77,108.3"/>
          <text class="val" x="31" y="116" text-anchor="end">10°</text>

          <path class="arc" d="M78.46,88.86 A46,46 0 0 1 44.79,108.3"/>
          <text class="val" x="75" y="126" text-anchor="middle">50°</text>

          <path class="arc" d="M67.13,278.02 A52,52 0 0 1 72,300"/>
          <text class="val" x="100" y="294" text-anchor="middle">25°</text>

          <path class="arc" d="M334,300 A46,46 0 0 1 342.32,273.62"/>
          <text class="val" x="317" y="285" text-anchor="middle">35°</text>

          <path class="arc" d="M201.45,219.23 A40,40 0 0 1 199.84,216.14"/>
          <text class="val" x="196" y="236" text-anchor="middle">α</text>

          <circle class="pt" cx="40.78" cy="62.48" r="3.2"/>
          <circle class="pt" cx="20" cy="300" r="3.2"/>
          <circle class="pt" cx="380" cy="300" r="3.2"/>
          <circle class="pt" cx="61.56" cy="300" r="3.2"/>
          <circle class="pt" cx="236.09" cy="199.23" r="3.2"/>

          <text x="40.78" y="50.48" text-anchor="middle">A</text>
          <text x="12" y="318" text-anchor="end">B</text>
          <text x="388" y="318">C</text>
          <text x="61.56" y="320" text-anchor="middle">D</text>
          <text x="245.09" y="196.23">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [BC], E ∈ [AC]',
      'm(ACB) = 35°',
      'm(DAC) = 50°',
      'm(BAD) = 10°',
      'm(EBC) = 25°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BED) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '10' },
      { key: 'C', text: '15' },
      { key: 'D', text: '20' },
      { key: 'E', text: '25' },
    ],
    answer: 'A',
    hint: 'Önce üçgenin bütün açılarını bul; sonra ABD ve ABE üçgenlerinde hangi kenarların eşit olduğuna bak.',
    solution: [
      {
        title: 'Üçgenin açıları',
        detail:
          'm(BAC) = 10 + 50 = 60° ve m(ACB) = 35° olduğundan m(ABC) = 180 − 60 − 35 = 85° bulunur.',
      },
      {
        title: 'ABD ikizkenar üçgeni',
        detail:
          'ABD üçgeninde m(ABD) = 85° ve m(BAD) = 10° olduğundan m(ADB) = 180 − 85 − 10 = 85°’dir. İki taban açısı eşit olduğundan |AD| = |AB| olur.',
      },
      {
        title: 'ABE eşkenar üçgeni',
        detail:
          'm(ABE) = m(ABC) − m(EBC) = 85 − 25 = 60° ve m(BAE) = m(BAC) = 60° olduğundan m(AEB) = 60°’dir; ABE üçgeni eşkenardır ve |AE| = |AB| olur.',
      },
      {
        title: 'ADE ikizkenar üçgeni',
        detail:
          '|AD| = |AB| = |AE| olduğundan ADE ikizkenardır. Tepe açısı m(DAE) = m(DAC) = 50° olduğundan m(AED) = m(ADE) = (180 − 50)/2 = 65° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[EB] ışını, AED açısının içinde kaldığından α = m(AED) − m(AEB) = 65 − 60 = 5° olur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 90
  {
    id: 'triangles-90',
    topic: 'Yükseklik ayaklarından geçen çember',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 90',
      label:
        'ABC üçgeninde C köşesinden [AB] kenarına inen [CE] ve B köşesinden [AC] kenarına inen [BD] yükseklikleri çizilmiş, bunlar K noktasında kesişmiştir. m(ABC) = 70° ve m(EDB) = α olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M136.81,34.01 L40,300 L360,300 Z"/>
          <path class="ln" d="M360,300 L77.43,197.15"/>
          <path class="ln" d="M40,300 L227.78,142.43"/>

          <path class="ln" d="M81.2,186.82 L91.53,190.58 L87.77,200.92"/>
          <path class="ln" d="M220.71,134 L212.29,141.07 L219.36,149.5"/>

          <path class="arc" d="M57.1,253.02 A50,50 0 0 1 90,300"/>
          <text class="val" x="128" y="272" text-anchor="middle">70°</text>

          <path class="arc" d="M197.14,168.14 A40,40 0 0 1 190.2,156.11"/>
          <text class="val" x="178" y="176" text-anchor="middle">α</text>

          <circle class="pt" cx="136.81" cy="34.01" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="360" cy="300" r="3.2"/>
          <circle class="pt" cx="227.78" cy="142.43" r="3.2"/>
          <circle class="pt" cx="77.43" cy="197.15" r="3.2"/>
          <circle class="pt" cx="136.81" cy="218.77" r="3.2"/>

          <text x="136.81" y="22.01" text-anchor="middle">A</text>
          <text x="32" y="318" text-anchor="end">B</text>
          <text x="368" y="318">C</text>
          <text x="236.78" y="139.43">D</text>
          <text x="68.43" y="194.15" text-anchor="end">E</text>
          <text x="134" y="240" text-anchor="middle">K</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 90 — [BC] çaplı çember çizildi',
      label:
        'Aynı şekle, çapı [BC] olan çemberin üst yarısı kesikli çizgiyle eklenmiştir; bu yarım çember E ve D noktalarından geçer. Çemberin merkezi M ile m(ECB) = 20° işaretlenmiştir.',
      svg: `
          <path class="ln" d="M136.81,34.01 L40,300 L360,300 Z"/>
          <path class="ln" d="M360,300 L77.43,197.15"/>
          <path class="ln" d="M40,300 L227.78,142.43"/>

          <path class="ln" d="M81.2,186.82 L91.53,190.58 L87.77,200.92"/>
          <path class="ln" d="M220.71,134 L212.29,141.07 L219.36,149.5"/>

          <path class="aux" d="M40,300 A160,160 0 0 1 360,300"/>

          <path class="arc" d="M57.1,253.02 A50,50 0 0 1 90,300"/>
          <text class="val" x="128" y="272" text-anchor="middle">70°</text>

          <path class="arc" d="M197.14,168.14 A40,40 0 0 1 190.2,156.11"/>
          <text class="val" x="178" y="176" text-anchor="middle">α</text>

          <path class="arc" d="M306,300 A54,54 0 0 1 309.25,281.53"/>
          <text class="val" x="287" y="292" text-anchor="middle">20°</text>

          <circle class="pt" cx="136.81" cy="34.01" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="360" cy="300" r="3.2"/>
          <circle class="pt" cx="227.78" cy="142.43" r="3.2"/>
          <circle class="pt" cx="77.43" cy="197.15" r="3.2"/>
          <circle class="pt" cx="136.81" cy="218.77" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text x="136.81" y="22.01" text-anchor="middle">A</text>
          <text x="32" y="318" text-anchor="end">B</text>
          <text x="368" y="318">C</text>
          <text x="236.78" y="139.43">D</text>
          <text x="68.43" y="194.15" text-anchor="end">E</text>
          <text x="134" y="240" text-anchor="middle">K</text>
          <text x="200" y="320" text-anchor="middle">M</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AB] ⊥ [EC] ve E ∈ [AB]',
      '[BD] ⊥ [AC] ve D ∈ [AC]',
      'K, [EC] ile [BD]’nin kesişim noktasıdır',
      'm(ABC) = 70°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EDB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '35' },
      { key: 'E', text: '40' },
    ],
    answer: 'B',
    hint: '[BC]’nin orta noktasının B, C, D ve E noktalarının dördüne de eşit uzaklıkta olduğunu göster.',
    solution: [
      {
        title: 'BEC dik üçgeni',
        detail:
          '[EC] ⊥ [AB] olduğundan m(BEC) = 90°’dir. E, [AB] üzerinde olduğundan m(EBC) = m(ABC) = 70°’dir ve m(ECB) = 90 − 70 = 20° bulunur.',
      },
      {
        title: 'Dört nokta bir çember üzerinde',
        detail:
          '[BC]’nin orta noktası M olsun. BEC ve BDC dik üçgenlerinde [ME] ile [MD] hipotenüse ait kenarortaydır: |ME| = |MD| = |MB| = |MC| = |BC|/2. Yani B, E, D, C noktaları merkezi M, çapı [BC] olan aynı çember üzerindedir.',
      },
      {
        title: 'Aynı yayı gören çevre açılar',
        detail:
          'D ve C noktaları bu çemberde [BE] kirişinin aynı tarafındadır. m(EDB) ile m(ECB), aynı [BE] yayını gören çevre açılar olduğundan birbirine eşittir.',
      },
      {
        title: 'Sonuç',
        detail: 'α = m(EDB) = m(ECB) = 20° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 91
  {
    id: 'triangles-91',
    topic: 'Yükseklikle ayrılan iki dik üçgen',
    figure: {
      viewBox: '0 142 400 190',
      caption: 'Şekil 91',
      label:
        'ABC üçgeninde A köşesinden [BC] kenarına inen yüksekliğin ayağı H’dir; |BH| = 6 cm, |AB| = 10 cm, |AC| = 17 cm ve |HC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M128,172 L32,300 L368,300 Z"/>
          <path class="ln" d="M128,172 L128,300"/>
          <path class="ln" d="M128,287 L141,287 L141,300"/>

          <circle class="pt" cx="128" cy="172" r="3.2"/>
          <circle class="pt" cx="32" cy="300" r="3.2"/>
          <circle class="pt" cx="368" cy="300" r="3.2"/>
          <circle class="pt" cx="128" cy="300" r="3.2"/>

          <text class="val" x="65" y="225" text-anchor="end">10</text>
          <text class="val" x="259" y="222">17</text>
          <text class="val" x="80" y="320" text-anchor="middle">6</text>
          <text class="val" x="248" y="320" text-anchor="middle">x</text>

          <text x="128" y="160" text-anchor="middle">A</text>
          <text x="24" y="320" text-anchor="end">B</text>
          <text x="376" y="320">C</text>
          <text x="128" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve H ∈ [BC]',
      '|BH| = 6 cm',
      '|AB| = 10 cm',
      '|AC| = 17 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |HC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '16' },
      { key: 'C', text: '18' },
      { key: 'D', text: '20' },
      { key: 'E', text: '21' },
    ],
    answer: 'A',
    hint: 'Yükseklik üçgeni iki dik üçgene ayırır; ortak kenar olan |AH| uzunluğunu önce ABH üçgeninden bul.',
    solution: [
      {
        title: 'ABH dik üçgeninde yüksekliği bul',
        detail: 'AH² = AB² − BH² = 10² − 6² = 100 − 36 = 64 olduğundan |AH| = 8 cm’dir.',
      },
      {
        title: 'AHC dik üçgenine geç',
        detail: 'm(AHC) = 90° olduğundan AH² + HC² = AC², yani 8² + x² = 17² yazılır.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 289 − 64 = 225 → x = 15 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 92
  {
    id: 'triangles-92',
    topic: 'Yükseklik ve kenarlar toplamı',
    figure: {
      viewBox: '0 96 400 240',
      caption: 'Şekil 92',
      label:
        'ABC üçgeninde A köşesinden [BC] kenarına inen yüksekliğin ayağı H’dir; |BH| = 5 cm, |HC| = 11 cm, |AB| = c ve |AC| = b olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M140,126.8 L40,300 L360,300 Z"/>
          <path class="ln" d="M140,126.8 L140,300"/>
          <path class="ln" d="M140,287 L153,287 L153,300"/>

          <circle class="pt" cx="140" cy="126.8" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="360" cy="300" r="3.2"/>
          <circle class="pt" cx="140" cy="300" r="3.2"/>

          <text class="val" x="74" y="204" text-anchor="end">c</text>
          <text class="val" x="261" y="199">b</text>
          <text class="val" x="90" y="320" text-anchor="middle">5</text>
          <text class="val" x="250" y="320" text-anchor="middle">11</text>

          <text x="140" y="114" text-anchor="middle">A</text>
          <text x="32" y="320" text-anchor="end">B</text>
          <text x="368" y="320">C</text>
          <text x="140" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve H ∈ [BC]',
      '|BH| = 5 cm',
      '|HC| = 11 cm',
      '|AC| + |AB| = b + c = 24 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = c kaç cm’dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '11' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'Yüksekliğin karesini iki dik üçgenden de yaz ve eşitle; ortaya çıkan b² − c² ifadesi çarpanlarına ayrılır.',
    solution: [
      {
        title: 'Yüksekliği iki kez yaz',
        detail:
          'ABH üçgeninde AH² = c² − 5² = c² − 25, AHC üçgeninde AH² = b² − 11² = b² − 121’dir.',
      },
      {
        title: 'İki ifadeyi eşitle',
        detail: 'c² − 25 = b² − 121 → b² − c² = 121 − 25 = 96 elde edilir.',
      },
      {
        title: 'Çarpanlara ayır',
        detail: '(b − c)(b + c) = 96 ve b + c = 24 verildiğinden b − c = 96 / 24 = 4 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'b + c = 24 ile b − c = 4 birlikte çözülürse b = 14 ve c = |AB| = 10 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 93
  {
    id: 'triangles-93',
    topic: 'Yükseklikten tabanı bulma',
    figure: {
      viewBox: '0 82 400 250',
      caption: 'Şekil 93',
      label:
        'ABC üçgeninde A köşesinden [BC] kenarına inen yüksekliğin ayağı H’dir; |AH| = 12 cm, |AB| = 13 cm ve |AC| = 20 cm olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M112,108 L32,300 L368,300 Z"/>
          <path class="ln" d="M112,108 L112,300"/>
          <path class="ln" d="M112,287 L125,287 L125,300"/>

          <circle class="pt" cx="112" cy="108" r="3.2"/>
          <circle class="pt" cx="32" cy="300" r="3.2"/>
          <circle class="pt" cx="368" cy="300" r="3.2"/>
          <circle class="pt" cx="112" cy="300" r="3.2"/>

          <text class="val" x="55" y="197" text-anchor="end">13</text>
          <text class="val" x="251" y="190">20</text>
          <text class="val" x="124" y="212">12</text>

          <text x="112" y="96" text-anchor="middle">A</text>
          <text x="24" y="320" text-anchor="end">B</text>
          <text x="376" y="320">C</text>
          <text x="112" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve H ∈ [BC]',
      '|AH| = 12 cm',
      '|AB| = 13 cm',
      '|AC| = 20 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm’dir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '21' },
      { key: 'C', text: '22' },
      { key: 'D', text: '24' },
      { key: 'E', text: '25' },
    ],
    answer: 'B',
    hint: 'H noktası [BC] üzerinde olduğundan |BC| = |BH| + |HC|; iki parçayı ayrı ayrı Pisagor ile bul.',
    solution: [
      {
        title: 'ABH üçgeninden |BH|',
        detail: 'BH² = AB² − AH² = 13² − 12² = 169 − 144 = 25 → |BH| = 5 cm.',
      },
      {
        title: 'AHC üçgeninden |HC|',
        detail: 'HC² = AC² − AH² = 20² − 12² = 400 − 144 = 256 → |HC| = 16 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'H, [BC] üzerinde olduğundan |BC| = |BH| + |HC| = 5 + 16 = 21 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 94
  {
    id: 'triangles-94',
    topic: 'Dik üçgende hipotenüse ait yükseklik',
    figure: {
      viewBox: '0 130 400 200',
      caption: 'Şekil 94',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüse inen yüksekliğin ayağı H’dir; |BH| = 4 cm, |HC| = 9 cm ve |AB| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M140,156 L44,300 L356,300 Z"/>
          <path class="ln" d="M140,156 L140,300"/>
          <path class="ln" d="M132.8,166.8 L143.6,174 L150.8,163.2"/>
          <path class="ln" d="M140,287 L153,287 L153,300"/>

          <circle class="pt" cx="140" cy="156" r="3.2"/>
          <circle class="pt" cx="44" cy="300" r="3.2"/>
          <circle class="pt" cx="356" cy="300" r="3.2"/>
          <circle class="pt" cx="140" cy="300" r="3.2"/>

          <text class="val" x="77" y="218" text-anchor="end">x</text>
          <text class="val" x="92" y="320" text-anchor="middle">4</text>
          <text class="val" x="248" y="320" text-anchor="middle">9</text>

          <text x="140" y="144" text-anchor="middle">A</text>
          <text x="36" y="320" text-anchor="end">B</text>
          <text x="364" y="320">C</text>
          <text x="140" y="322" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC üçgeninde m(BAC) = 90°', '[AH] ⊥ [BC] ve H ∈ [BC]', '|BH| = 4 cm', '|HC| = 9 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '2√10' },
      { key: 'C', text: '√53' },
      { key: 'D', text: '2√13' },
      { key: 'E', text: '3√13' },
    ],
    answer: 'D',
    hint: 'Yüksekliğin karesini iki küçük dik üçgenden yazıp eşitle, sonra AB² + AC² = BC² bağıntısını kullan.',
    solution: [
      {
        title: 'Hipotenüsü yaz',
        detail: 'H, [BC] üzerinde olduğundan |BC| = 4 + 9 = 13 cm’dir.',
      },
      {
        title: 'Yüksekliği iki kez yaz',
        detail:
          'ABH üçgeninde AH² = AB² − 4² = AB² − 16, AHC üçgeninde AH² = AC² − 9² = AC² − 81’dir. Eşitlenirse AC² = AB² + 65 olur.',
      },
      {
        title: 'Dik açıyı kullan',
        detail:
          'm(BAC) = 90° olduğundan AB² + AC² = BC² = 169’dur. AC² yerine konursa AB² + AB² + 65 = 169 elde edilir.',
      },
      {
        title: 'Sonuç',
        detail: '2·AB² = 104 → AB² = 52 → x = √52 = 2√13 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 95
  {
    id: 'triangles-95',
    topic: 'Alan yardımıyla hipotenüse ait yükseklik',
    figure: {
      viewBox: '0 110 400 220',
      caption: 'Şekil 95',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den hipotenüse inen yüksekliğin ayağı H’dir; |AB| = 15 cm, |BC| = 20 cm ve |BH| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M152.4,136.8 L30,300 L370,300 Z"/>
          <path class="ln" d="M152.4,136.8 L152.4,300"/>
          <path class="ln" d="M144.6,147.2 L155,155 L162.8,144.6"/>
          <path class="ln" d="M152.4,287 L165.4,287 L165.4,300"/>

          <circle class="pt" cx="152.4" cy="136.8" r="3.2"/>
          <circle class="pt" cx="30" cy="300" r="3.2"/>
          <circle class="pt" cx="370" cy="300" r="3.2"/>
          <circle class="pt" cx="152.4" cy="300" r="3.2"/>

          <text class="val" x="77" y="208" text-anchor="end">15</text>
          <text class="val" x="272" y="204">20</text>
          <text class="val" x="163" y="225">x</text>

          <text x="152.4" y="124" text-anchor="middle">B</text>
          <text x="22" y="320" text-anchor="end">A</text>
          <text x="378" y="320">C</text>
          <text x="152.4" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC üçgeninde m(ABC) = 90°',
      '|AB| = 15 cm',
      '|BC| = 20 cm',
      '[BH] ⊥ [AC] ve H ∈ [AC]',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BH| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '13' },
      { key: 'C', text: '14' },
      { key: 'D', text: '15' },
      { key: 'E', text: '16' },
    ],
    answer: 'A',
    hint: 'Üçgenin alanını önce iki dik kenarla, sonra hipotenüs ve ona ait yükseklikle yaz.',
    solution: [
      {
        title: 'Hipotenüsü bul',
        detail: 'AC² = AB² + BC² = 15² + 20² = 225 + 400 = 625 → |AC| = 25 cm.',
      },
      {
        title: 'Alanı dik kenarlarla yaz',
        detail: 'm(ABC) = 90° olduğundan A(ABC) = |AB| · |BC| / 2 = 15 · 20 / 2 = 150 cm².',
      },
      {
        title: 'Alanı yükseklikle yaz',
        detail: '[BH], [AC] tabanına ait yükseklik olduğundan A(ABC) = |AC| · x / 2 = 25x / 2’dir.',
      },
      {
        title: 'Sonuç',
        detail: '25x / 2 = 150 → 25x = 300 → x = 12 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 96
  {
    id: 'triangles-96',
    topic: 'Pisagor bağıntısıyla kurulan denklem',
    figure: {
      viewBox: '0 34 400 190',
      caption: 'Şekil 96',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde dik kenarlar x ve x + 7 birim, hipotenüs x + 8 birim olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M44,60 L44,190 L356,60 Z"/>
          <path class="ln" d="M44,73 L57,73 L57,60"/>

          <circle class="pt" cx="44" cy="60" r="3.2"/>
          <circle class="pt" cx="44" cy="190" r="3.2"/>
          <circle class="pt" cx="356" cy="60" r="3.2"/>

          <text class="val" x="34" y="130" text-anchor="end">x</text>
          <text class="val" x="200" y="50" text-anchor="middle">x + 7</text>
          <text class="val" x="208" y="144">x + 8</text>

          <text x="36" y="52" text-anchor="end">A</text>
          <text x="36" y="208" text-anchor="end">B</text>
          <text x="364" y="55">C</text>
        `,
    },
    given: [
      'ABC üçgeninde m(BAC) = 90°',
      '|AB| = x birim',
      '|AC| = x + 7 birim',
      '|BC| = x + 8 birim',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç birimdir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '11' },
      { key: 'C', text: '12' },
      { key: 'D', text: '13' },
      { key: 'E', text: '15' },
    ],
    answer: 'D',
    hint: 'Dik açının karşısındaki kenar hipotenüstür; Pisagor bağıntısını kurup ikinci dereceden denklemi çöz.',
    solution: [
      {
        title: 'Pisagor bağıntısını kur',
        detail: 'Hipotenüs [BC] olduğundan AB² + AC² = BC², yani x² + (x + 7)² = (x + 8)² yazılır.',
      },
      {
        title: 'Parantezleri aç',
        detail: 'x² + x² + 14x + 49 = x² + 16x + 64 elde edilir.',
      },
      {
        title: 'Denklemi sadeleştir',
        detail: 'x² − 2x − 15 = 0 → (x − 5)(x + 3) = 0 olur.',
      },
      {
        title: 'Kökü seç',
        detail: 'Uzunluk negatif olamayacağından x = 5 birimdir.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BC| = x + 8 = 5 + 8 = 13 birim bulunur. Kenarlar 5 − 12 − 13 olur ve gerçekten 25 + 144 = 169’dur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 97
  {
    id: 'triangles-97',
    topic: 'Özel açılı dik üçgenler',
    figure: {
      viewBox: '0 80 400 255',
      caption: 'Şekil 97',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde [BC] kenarı üzerindeki D noktası A ile birleştirilmiş; m(ACB) = 30°, m(DAC) = 15° ve |AD| = 8√2 cm’dir.',
      svg: `
          <path class="ln" d="M34,108 L34,300 L366.5,300 Z"/>
          <path class="ln" d="M34,108 L226,300"/>
          <path class="ln" d="M34,287 L47,287 L47,300"/>

          <path class="arc" d="M322.5,300 A44,44 0 0 1 328.4,278"/>
          <text class="val" x="303" y="285" text-anchor="middle">30°</text>

          <path class="arc" d="M73.8,131 A46,46 0 0 1 66.5,140.5"/>
          <text class="val" x="91" y="152" text-anchor="middle">15°</text>

          <circle class="pt" cx="34" cy="108" r="3.2"/>
          <circle class="pt" cx="34" cy="300" r="3.2"/>
          <circle class="pt" cx="366.5" cy="300" r="3.2"/>
          <circle class="pt" cx="226" cy="300" r="3.2"/>

          <text class="val" x="110" y="226" text-anchor="middle">8√2</text>
          <text class="val" x="210" y="187" text-anchor="middle">x</text>

          <text x="34" y="96" text-anchor="middle">A</text>
          <text x="26" y="320" text-anchor="end">B</text>
          <text x="374" y="320">C</text>
          <text x="226" y="322" text-anchor="middle">D</text>
        `,
    },
    given: [
      'ABC üçgeninde m(ABC) = 90°',
      'D ∈ [BC]',
      'm(ACB) = 30°',
      'm(DAC) = 15°',
      '|AD| = 8√2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '12√2' },
      { key: 'B', text: '8√3' },
      { key: 'C', text: '16' },
      { key: 'D', text: '8√6' },
      { key: 'E', text: '18' },
    ],
    answer: 'C',
    hint: 'Önce m(BAD) açısını hesapla; ABD üçgeninin ikizkenar dik üçgen olduğunu göreceksin.',
    solution: [
      {
        title: 'A köşesindeki açıyı böl',
        detail:
          'ABC dik üçgeninde m(BAC) = 180 − 90 − 30 = 60°’dir. [AD], bu açıyı böldüğünden m(BAD) = 60 − 15 = 45° olur.',
      },
      {
        title: 'ABD ikizkenar dik üçgeni',
        detail:
          'ABD üçgeninde m(ABD) = 90° ve m(BAD) = 45° olduğundan m(ADB) = 45°’dir; üçgen ikizkenar dik üçgendir.',
      },
      {
        title: '|AB| uzunluğunu bul',
        detail:
          'İkizkenar dik üçgende hipotenüs, dik kenarın √2 katıdır: |AD| = |AB| · √2 → 8√2 = |AB| · √2 → |AB| = 8 cm.',
      },
      {
        title: '30°’nin karşısındaki kenar',
        detail:
          'ABC dik üçgeninde 30°’lik açı C köşesindedir ve karşısındaki dik kenar [AB]’dir. 30°’nin karşısındaki dik kenar hipotenüsün yarısına eşittir.',
      },
      {
        title: 'Sonuç',
        detail: 'x = |AC| = 2 · |AB| = 2 · 8 = 16 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 98
  {
    id: 'triangles-98',
    topic: '30° − 60° − 90° üçgeni',
    figure: {
      viewBox: '0 140 400 198',
      caption: 'Şekil 98',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den [AC] kenarına inen dikmenin ayağı D’dir; m(ACB) = 60°, |BC| = 6 cm ve |AD| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M274,164.9 L40,300 L352,300 Z"/>
          <path class="ln" d="M274,164.9 L274,300"/>
          <path class="ln" d="M262.7,171.4 L269.2,182.8 L280.5,176.2"/>
          <path class="ln" d="M274,287 L261,287 L261,300"/>

          <path class="arc" d="M312,300 A40,40 0 0 1 332,265.4"/>
          <text class="val" x="302" y="271" text-anchor="middle">60°</text>

          <circle class="pt" cx="274" cy="164.9" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="352" cy="300" r="3.2"/>
          <circle class="pt" cx="274" cy="300" r="3.2"/>

          <text class="val" x="330" y="222">6</text>
          <text class="val" x="157" y="322" text-anchor="middle">x</text>

          <text x="282" y="158">B</text>
          <text x="32" y="320" text-anchor="end">A</text>
          <text x="360" y="320">C</text>
          <text x="274" y="322" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC üçgeninde m(ABC) = 90° ve m(ACB) = 60°', '|BC| = 6 cm', '[BD] ⊥ [AC] ve D ∈ [AC]'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '6√3' },
      { key: 'C', text: '8' },
      { key: 'D', text: '8√2' },
      { key: 'E', text: '9' },
    ],
    answer: 'E',
    hint: '30° − 60° − 90° üçgeninde 30°’nin karşısındaki kenar hipotenüsün yarısıdır; bu kuralı iki üçgende de kullan.',
    solution: [
      {
        title: 'Üçüncü açıyı bul',
        detail: 'ABC üçgeninde m(BAC) = 180 − 90 − 60 = 30°’dir.',
      },
      {
        title: 'Hipotenüsü bul',
        detail:
          '30°’lik açı A köşesinde olduğundan karşısındaki dik kenar [BC]’dir: |AC| = 2 · |BC| = 2 · 6 = 12 cm.',
      },
      {
        title: 'BDC üçgenine geç',
        detail:
          'BDC üçgeninde m(BDC) = 90° ve m(BCD) = 60° olduğundan m(DBC) = 30°’dir. Bu açının karşısındaki dik kenar [DC] ve hipotenüs [BC] olduğundan |DC| = |BC| / 2 = 3 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'D ∈ [AC] olduğundan x = |AD| = |AC| − |DC| = 12 − 3 = 9 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 99
  {
    id: 'triangles-99',
    topic: 'İki dik açılı dörtgende köşegen',
    figure: {
      viewBox: '0 110 400 340',
      caption: 'Şekil 99',
      label:
        'ABCD dörtgeninde B ve D köşelerindeki açılar diktir; |AB| = 8 cm, |BC| = 6 cm, |CD| = 5 cm ve |AD| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M50,270 L242,414 L350,270 L275,140.1 Z"/>
          <path class="ln" d="M231.6,406.2 L239.4,395.8 L249.8,403.6"/>
          <path class="ln" d="M263.7,146.6 L270.2,157.9 L281.5,151.4"/>

          <circle class="pt" cx="50" cy="270" r="3.2"/>
          <circle class="pt" cx="242" cy="414" r="3.2"/>
          <circle class="pt" cx="350" cy="270" r="3.2"/>
          <circle class="pt" cx="275" cy="140.1" r="3.2"/>

          <text class="val" x="134" y="358" text-anchor="end">8</text>
          <text class="val" x="312" y="354">6</text>
          <text class="val" x="330" y="195">5</text>
          <text class="val" x="152" y="188" text-anchor="end">x</text>

          <text x="40" y="275" text-anchor="end">A</text>
          <text x="242" y="436" text-anchor="middle">B</text>
          <text x="360" y="275">C</text>
          <text x="275" y="128" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 110 400 340',
      caption: 'Şekil 99 — yardımcı çizim',
      label:
        'Aynı dörtgende [AC] köşegeni çizilmiş; köşegen dörtgeni ABC ve ADC dik üçgenlerine ayırıyor ve uzunluğu 10 cm’dir.',
      svg: `
          <path class="ln" d="M50,270 L242,414 L350,270 L275,140.1 Z"/>
          <path class="ln" d="M231.6,406.2 L239.4,395.8 L249.8,403.6"/>
          <path class="ln" d="M263.7,146.6 L270.2,157.9 L281.5,151.4"/>

          <path class="aux" d="M50,270 L350,270"/>

          <circle class="pt" cx="50" cy="270" r="3.2"/>
          <circle class="pt" cx="242" cy="414" r="3.2"/>
          <circle class="pt" cx="350" cy="270" r="3.2"/>
          <circle class="pt" cx="275" cy="140.1" r="3.2"/>

          <text class="val" x="134" y="358" text-anchor="end">8</text>
          <text class="val" x="312" y="354">6</text>
          <text class="val" x="330" y="195">5</text>
          <text class="val" x="152" y="188" text-anchor="end">x</text>
          <text class="val" x="200" y="262" text-anchor="middle">10</text>

          <text x="40" y="275" text-anchor="end">A</text>
          <text x="242" y="436" text-anchor="middle">B</text>
          <text x="360" y="275">C</text>
          <text x="275" y="128" text-anchor="middle">D</text>
        `,
    },
    given: ['ABCD dörtgeninde m(ABC) = m(ADC) = 90°', '|AB| = 8 cm', '|BC| = 6 cm', '|CD| = 5 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5√2' },
      { key: 'B', text: '5√3' },
      { key: 'C', text: '4√5' },
      { key: 'D', text: '3√7' },
      { key: 'E', text: '9' },
    ],
    answer: 'B',
    hint: '[AC] köşegenini çiz: iki dik üçgenin ortak hipotenüsü olur.',
    solution: [
      {
        title: '[AC] köşegenini çiz',
        detail:
          'Köşegen dörtgeni ABC ve ADC üçgenlerine ayırır. B ve D köşelerindeki açılar dik olduğundan ikisi de dik üçgendir ve ortak hipotenüsleri [AC]’dir.',
      },
      {
        title: 'ABC üçgeninden |AC|',
        detail: 'AC² = AB² + BC² = 8² + 6² = 64 + 36 = 100 → |AC| = 10 cm.',
      },
      {
        title: 'ADC üçgenine geç',
        detail: 'm(ADC) = 90° olduğundan AD² + DC² = AC², yani x² + 5² = 10² yazılır.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 100 − 25 = 75 → x = √75 = 5√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 100
  {
    id: 'triangles-100',
    topic: 'Dik yamukta yan kenar',
    figure: {
      viewBox: '0 62 400 272',
      caption: 'Şekil 100',
      label:
        'ABCD dik yamuğunda [AB] ile [DC] paralel, [AD] ise [AB] kenarına diktir; |AB| = 12 cm, |DC| = 6 cm, |AD| = 8 cm ve |BC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M44,300 L356,300 L200,92 L44,92 Z"/>
          <path class="ln" d="M44,287 L57,287 L57,300"/>
          <path class="ln" d="M44,105 L57,105 L57,92"/>

          <path class="par" d="M243,294 L250,300 L243,306"/>
          <path class="par" d="M153,86 L160,92 L153,98"/>

          <circle class="pt" cx="44" cy="300" r="3.2"/>
          <circle class="pt" cx="356" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="92" r="3.2"/>
          <circle class="pt" cx="44" cy="92" r="3.2"/>

          <text class="val" x="200" y="322" text-anchor="middle">12</text>
          <text class="val" x="122" y="82" text-anchor="middle">6</text>
          <text class="val" x="34" y="200" text-anchor="end">8</text>
          <text class="val" x="294" y="184">x</text>

          <text x="36" y="320" text-anchor="end">A</text>
          <text x="364" y="320">B</text>
          <text x="208" y="84">C</text>
          <text x="36" y="88" text-anchor="end">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 62 400 272',
      caption: 'Şekil 100 — yardımcı çizim',
      label:
        'Aynı yamukta C noktasından [AB] kenarına inen dikmenin ayağı H’dir; ADCH bir dikdörtgen, CHB ise dik kenarları 8 ve 6 cm olan bir dik üçgendir.',
      svg: `
          <path class="ln" d="M44,300 L356,300 L200,92 L44,92 Z"/>
          <path class="ln" d="M44,287 L57,287 L57,300"/>
          <path class="ln" d="M44,105 L57,105 L57,92"/>

          <path class="aux" d="M200,92 L200,300"/>
          <path class="ln" d="M200,287 L213,287 L213,300"/>

          <path class="par" d="M243,294 L250,300 L243,306"/>
          <path class="par" d="M153,86 L160,92 L153,98"/>

          <circle class="pt" cx="44" cy="300" r="3.2"/>
          <circle class="pt" cx="356" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="92" r="3.2"/>
          <circle class="pt" cx="44" cy="92" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text class="val" x="122" y="322" text-anchor="middle">6</text>
          <text class="val" x="278" y="322" text-anchor="middle">6</text>
          <text class="val" x="122" y="82" text-anchor="middle">6</text>
          <text class="val" x="34" y="200" text-anchor="end">8</text>
          <text class="val" x="212" y="200">8</text>
          <text class="val" x="294" y="184">x</text>

          <text x="36" y="320" text-anchor="end">A</text>
          <text x="364" y="320">B</text>
          <text x="208" y="84">C</text>
          <text x="36" y="88" text-anchor="end">D</text>
          <text x="200" y="342" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABCD dik yamuğunda [AB] ∥ [DC]',
      '[AD] ⊥ [AB]',
      '|AB| = 12 cm',
      '|DC| = 6 cm',
      '|AD| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '10' },
      { key: 'D', text: '2√29' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'C noktasından uzun tabana bir dikme in; geriye dik kenarları 8 ve 6 cm olan bir dik üçgen kalır.',
    solution: [
      {
        title: 'C’den [AB]’ye dikme in',
        detail:
          'Dikmenin ayağı H olsun. [AD] ⊥ [AB] ve [DC] ∥ [AB] olduğundan ADCH dörtgeninin dört açısı da diktir; ADCH bir dikdörtgendir.',
      },
      {
        title: 'Dikdörtgenden kenarları oku',
        detail: 'Karşılıklı kenarlar eşit olduğundan |AH| = |DC| = 6 cm ve |CH| = |AD| = 8 cm’dir.',
      },
      {
        title: 'Kalan parçayı bul',
        detail: 'H ∈ [AB] olduğundan |HB| = |AB| − |AH| = 12 − 6 = 6 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'CHB üçgeni H’de dik olduğundan x² = CH² + HB² = 8² + 6² = 64 + 36 = 100 → x = 10 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 101
  {
    id: 'triangles-101',
    topic: 'Orta dikme ve dik üçgen',
    figure: {
      viewBox: '0 142 400 192',
      caption: 'Şekil 101',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde [AC] üzerindeki D noktasından [BC] kenarına inen dikmenin ayağı E’dir ve E, [BC] kenarının orta noktasıdır.',
      svg: `
          <path class="ln" d="M104.4,171.2 L40,300 L362,300 Z"/>
          <path class="ln" d="M201,219.5 L201,300"/>
          <path class="ln" d="M98.6,182.8 L110.2,188.6 L116,177"/>
          <path class="ln" d="M201,287 L214,287 L214,300"/>

          <line class="tick" x1="120.5" y1="294" x2="120.5" y2="306"/>
          <line class="tick" x1="281.5" y1="294" x2="281.5" y2="306"/>

          <circle class="pt" cx="104.4" cy="171.2" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="362" cy="300" r="3.2"/>
          <circle class="pt" cx="201" cy="219.5" r="3.2"/>
          <circle class="pt" cx="201" cy="300" r="3.2"/>

          <text class="val" x="162" y="177">a</text>
          <text class="val" x="54" y="227" text-anchor="end">a + 2</text>
          <text class="val" x="290" y="242">a + 4</text>
          <text class="val" x="190" y="265" text-anchor="end">x</text>

          <text x="104.4" y="159" text-anchor="middle">A</text>
          <text x="32" y="320" text-anchor="end">B</text>
          <text x="370" y="320">C</text>
          <text x="211" y="214">D</text>
          <text x="201" y="322" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 142 400 192',
      caption: 'Şekil 101 — yardımcı çizim',
      label:
        'Aynı şekilde D noktası B ile birleştirilmiş; [DE] orta dikme olduğundan |DB| = |DC| = a + 4 birimdir.',
      svg: `
          <path class="ln" d="M104.4,171.2 L40,300 L362,300 Z"/>
          <path class="ln" d="M201,219.5 L201,300"/>
          <path class="ln" d="M98.6,182.8 L110.2,188.6 L116,177"/>
          <path class="ln" d="M201,287 L214,287 L214,300"/>

          <path class="aux" d="M40,300 L201,219.5"/>

          <line class="tick" x1="120.5" y1="294" x2="120.5" y2="306"/>
          <line class="tick" x1="281.5" y1="294" x2="281.5" y2="306"/>

          <circle class="pt" cx="104.4" cy="171.2" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="362" cy="300" r="3.2"/>
          <circle class="pt" cx="201" cy="219.5" r="3.2"/>
          <circle class="pt" cx="201" cy="300" r="3.2"/>

          <text class="val" x="162" y="177">a</text>
          <text class="val" x="54" y="227" text-anchor="end">a + 2</text>
          <text class="val" x="290" y="242">a + 4</text>
          <text class="val" x="190" y="265" text-anchor="end">x</text>
          <text class="val" x="107" y="233" text-anchor="middle">a + 4</text>

          <text x="104.4" y="159" text-anchor="middle">A</text>
          <text x="32" y="320" text-anchor="end">B</text>
          <text x="370" y="320">C</text>
          <text x="211" y="214">D</text>
          <text x="201" y="322" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC üçgeninde m(BAC) = 90°',
      'D ∈ [AC] ve E ∈ [BC]',
      '[DE] ⊥ [BC]',
      '|BE| = |EC|',
      '|AD| = a, |DC| = a + 4 ve |AB| = a + 2 birim',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DE| = x kaç birimdir?',
    choices: [
      { key: 'A', text: '√5' },
      { key: 'B', text: '2√5' },
      { key: 'C', text: '4' },
      { key: 'D', text: '3√2' },
      { key: 'E', text: '2√6' },
    ],
    answer: 'B',
    hint: '[DE] aslında [BC] kenarının orta dikmesidir; bu da |DB| = |DC| demektir.',
    solution: [
      {
        title: 'Orta dikmeyi tanı',
        detail:
          '[DE] ⊥ [BC] ve |BE| = |EC| olduğundan [DE], [BC] kenarının orta dikmesidir. Orta dikme üzerindeki her nokta B ve C’ye eşit uzaklıkta olduğundan |DB| = |DC| = a + 4’tür.',
      },
      {
        title: 'ABD dik üçgenini kur',
        detail:
          'm(BAC) = 90° ve D ∈ [AC] olduğundan ABD üçgeni de A’da diktir: AB² + AD² = BD² → (a + 2)² + a² = (a + 4)².',
      },
      {
        title: 'a’yı bul',
        detail:
          'a² + 4a + 4 + a² = a² + 8a + 16 → a² − 4a − 12 = 0 → (a − 6)(a + 2) = 0 olduğundan a = 6 birimdir.',
      },
      {
        title: 'Kenarları yerine koy',
        detail:
          '|AD| = 6, |AB| = 8, |DC| = |DB| = 10 ve |AC| = |AD| + |DC| = 6 + 10 = 16 birim olur.',
      },
      {
        title: '|EC| uzunluğunu bul',
        detail:
          'ABC dik üçgeninde BC² = 8² + 16² = 64 + 256 = 320 → |BC| = 8√5. E orta nokta olduğundan |EC| = 4√5 birimdir.',
      },
      {
        title: 'Sonuç',
        detail:
          'DEC üçgeni E’de dik olduğundan x² = DC² − EC² = 10² − 80 = 20 → x = 2√5 birim bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 102
  {
    id: 'triangles-102',
    topic: 'Hipotenüse ait kenarortay',
    figure: {
      viewBox: '0 32 400 420',
      caption: 'Şekil 102',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde [AC] hipotenüsünün orta noktası D’dir; B, D, E doğrusal olacak biçimde çizilen AEB üçgeni de E köşesinde diktir.',
      svg: `
          <path class="ln" d="M110.6,60 L110.6,417.8 L289.4,417.8 Z"/>
          <path class="ln" d="M110.6,417.8 L253.7,131.6"/>
          <path class="ln" d="M110.6,60 L253.7,131.6"/>
          <path class="ln" d="M110.6,404.8 L123.6,404.8 L123.6,417.8"/>
          <path class="ln" d="M242.1,125.8 L236.3,137.4 L247.9,143.2"/>

          <line class="tick" x1="149.9" y1="152.2" x2="160.7" y2="146.8"/>
          <line class="tick" x1="239.3" y1="331.1" x2="250.1" y2="325.7"/>

          <circle class="pt" cx="110.6" cy="60" r="3.2"/>
          <circle class="pt" cx="110.6" cy="417.8" r="3.2"/>
          <circle class="pt" cx="289.4" cy="417.8" r="3.2"/>
          <circle class="pt" cx="200" cy="238.9" r="3.2"/>
          <circle class="pt" cx="253.7" cy="131.6" r="3.2"/>

          <text class="val" x="191" y="78" text-anchor="middle">x</text>
          <text class="val" x="256" y="199" text-anchor="middle">x − 2</text>
          <text class="val" x="183" y="343" text-anchor="middle">x + 2</text>

          <text x="110.6" y="48" text-anchor="middle">A</text>
          <text x="102" y="437" text-anchor="end">B</text>
          <text x="297" y="437">C</text>
          <text x="210" y="232">D</text>
          <text x="262" y="126">E</text>
        `,
    },
    given: [
      'ABC ve AEB birer dik üçgen',
      'm(ABC) = m(AEB) = 90°',
      'D ∈ [AC] ve |AD| = |DC|',
      'B, D, E doğrusal',
      '|DE| = x − 2, |BD| = x + 2 ve |AE| = x birim',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| kaç birimdir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '16' },
      { key: 'D', text: '20' },
      { key: 'E', text: '8√5' },
    ],
    answer: 'E',
    hint: 'D, dik üçgenin hipotenüsünün orta noktası; dik üçgende hipotenüse ait kenarortay hipotenüsün yarısına eşittir.',
    solution: [
      {
        title: 'Kenarortayı tanı',
        detail:
          'ABC üçgeni B’de dik ve D, [AC] hipotenüsünün orta noktasıdır. Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısına eşit olduğundan |DB| = |DA| = |DC| = x + 2’dir.',
      },
      {
        title: 'ADE dik üçgenini kur',
        detail:
          'm(AEB) = 90° ve B, D, E doğrusal olduğundan ADE üçgeni de E’de diktir: AD² = AE² + DE².',
      },
      {
        title: 'Denklemi yaz',
        detail: '(x + 2)² = x² + (x − 2)² olur.',
      },
      {
        title: 'x’i bul',
        detail:
          'x² + 4x + 4 = x² + x² − 4x + 4 → x² − 8x = 0 → x(x − 8) = 0. Uzunluk sıfır olamayacağından x = 8 birimdir.',
      },
      {
        title: 'Kenarları yerine koy',
        detail:
          '|AE| = 8, |DE| = 6, |BD| = 10 ve D, [BE] üzerinde olduğundan |BE| = |BD| + |DE| = 10 + 6 = 16 birimdir.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABE üçgeni E’de dik olduğundan AB² = AE² + BE² = 8² + 16² = 64 + 256 = 320 → |AB| = √320 = 8√5 birim bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 103
  {
    id: 'triangles-103',
    topic: 'İki yükseklik ve 45° açı',
    figure: {
      viewBox: '0 112 400 220',
      caption: 'Şekil 103',
      label:
        'ABC üçgeninde A’dan [BC] kenarına inen dikmenin ayağı D, B’den [AC] kenarına inen dikmenin ayağı E’dir; m(BCA) = 45°, |AB| = 20 cm, |BD| = 12 cm ve |AE| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M60,300 L340,300 L180,140 Z"/>
          <path class="ln" d="M180,140 L180,300"/>
          <path class="ln" d="M60,300 L200,160"/>
          <path class="ln" d="M180,287 L193,287 L193,300"/>
          <path class="ln" d="M209.19,169.19 L200,178.38 L190.81,169.19"/>

          <path class="arc" d="M300,300 A40,40 0 0 1 311.72,271.72"/>
          <text class="val" x="290" y="271" text-anchor="middle">45°</text>

          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="180" cy="140" r="3.2"/>
          <circle class="pt" cx="180" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="160" r="3.2"/>

          <text class="val" x="110" y="214" text-anchor="end">20</text>
          <text class="val" x="120" y="322" text-anchor="middle">12</text>
          <text class="val" x="194" y="146" text-anchor="middle">x</text>

          <text x="180" y="126" text-anchor="middle">A</text>
          <text x="52" y="320" text-anchor="end">B</text>
          <text x="348" y="320">C</text>
          <text x="180" y="322" text-anchor="middle">D</text>
          <text x="212" y="164">E</text>
        `,
    },
    given: [
      'ABC üçgeninde D ∈ [BC] ve E ∈ [AC]',
      '[AD] ⊥ [BC] ve [BE] ⊥ [AC]',
      'm(BCA) = 45°',
      '|AB| = 20 cm',
      '|BD| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AE| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√2' },
      { key: 'B', text: '2√2' },
      { key: 'C', text: '2√3' },
      { key: 'D', text: '3√2' },
      { key: 'E', text: '4' },
    ],
    answer: 'B',
    hint: '45°’lik açı iki ayrı dik üçgende karşına çıkıyor; her ikisi de ikizkenar dik üçgendir.',
    solution: [
      {
        title: 'ABD dik üçgeninde |AD|’yi bul',
        detail:
          '[AD] ⊥ [BC] olduğundan ABD üçgeni D’de diktir: AD² = AB² − BD² = 20² − 12² = 400 − 144 = 256 → |AD| = 16 cm.',
      },
      {
        title: 'ADC ikizkenar dik üçgeni',
        detail:
          'ADC üçgeninde m(ADC) = 90° ve m(ACD) = 45° olduğundan m(DAC) = 45°’dir; üçgen ikizkenardır ve |DC| = |AD| = 16 cm olur.',
      },
      {
        title: '|AC| ve |BC| uzunlukları',
        detail:
          'İkizkenar dik üçgende hipotenüs dik kenarın √2 katıdır: |AC| = 16√2 cm. D ∈ [BC] olduğundan |BC| = |BD| + |DC| = 12 + 16 = 28 cm.',
      },
      {
        title: 'BEC ikizkenar dik üçgeni',
        detail:
          'BEC üçgeninde m(BEC) = 90° ve m(BCE) = 45° olduğundan bu üçgen de ikizkenar dik üçgendir: |BC| = |EC| · √2 → 28 = |EC| · √2 → |EC| = 14√2 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'E ∈ [AC] olduğundan x = |AE| = |AC| − |EC| = 16√2 − 14√2 = 2√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 104
  {
    id: 'triangles-104',
    topic: 'İki dik açılı dörtgende köşegen',
    figure: {
      viewBox: '0 50 400 282',
      caption: 'Şekil 104',
      label:
        'ABCD dörtgeninde A ve C köşelerindeki açılar diktir; |AB| = 15 cm, |AD| = 20 cm, |CD| = 24 cm ve |BC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M50,220 L158,76 L350,220 L73.52,300.64 Z"/>
          <path class="ln" d="M150.2,86.4 L160.6,94.2 L168.4,83.8"/>
          <path class="ln" d="M69.88,288.16 L82.36,284.52 L86,297"/>

          <circle class="pt" cx="50" cy="220" r="3.2"/>
          <circle class="pt" cx="158" cy="76" r="3.2"/>
          <circle class="pt" cx="350" cy="220" r="3.2"/>
          <circle class="pt" cx="73.52" cy="300.64" r="3.2"/>

          <text class="val" x="94" y="142" text-anchor="end">15</text>
          <text class="val" x="262" y="140">20</text>
          <text class="val" x="216" y="278" text-anchor="middle">24</text>
          <text class="val" x="50" y="268" text-anchor="end">x</text>

          <text x="158" y="64" text-anchor="middle">A</text>
          <text x="42" y="224" text-anchor="end">B</text>
          <text x="358" y="224">D</text>
          <text x="74" y="322" text-anchor="middle">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 50 400 282',
      caption: 'Şekil 104 — yardımcı çizim',
      label:
        'Aynı dörtgende B ile D köşegenle birleştirilmiş; [BD] hem BAD hem de BCD dik üçgenlerinin ortak hipotenüsüdür ve uzunluğu 25 cm’dir.',
      svg: `
          <path class="ln" d="M50,220 L158,76 L350,220 L73.52,300.64 Z"/>
          <path class="ln" d="M150.2,86.4 L160.6,94.2 L168.4,83.8"/>
          <path class="ln" d="M69.88,288.16 L82.36,284.52 L86,297"/>

          <path class="aux" d="M50,220 L350,220"/>

          <circle class="pt" cx="50" cy="220" r="3.2"/>
          <circle class="pt" cx="158" cy="76" r="3.2"/>
          <circle class="pt" cx="350" cy="220" r="3.2"/>
          <circle class="pt" cx="73.52" cy="300.64" r="3.2"/>

          <text class="val" x="94" y="142" text-anchor="end">15</text>
          <text class="val" x="262" y="140">20</text>
          <text class="val" x="216" y="278" text-anchor="middle">24</text>
          <text class="val" x="50" y="268" text-anchor="end">x</text>
          <text class="val" x="250" y="212" text-anchor="middle">25</text>

          <text x="158" y="64" text-anchor="middle">A</text>
          <text x="42" y="224" text-anchor="end">B</text>
          <text x="358" y="224">D</text>
          <text x="74" y="322" text-anchor="middle">C</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AB] ⊥ [AD] ve [BC] ⊥ [CD]',
      '|AB| = 15 cm',
      '|AD| = 20 cm',
      '|CD| = 24 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '15/2' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'İki dik açı da [BD] köşegenini görüyor; önce o köşegeni hesapla.',
    solution: [
      {
        title: 'Köşegeni çiz',
        detail:
          'B ile D birleştirildiğinde [BD], hem BAD hem de BCD üçgeninin hipotenüsü olur; iki üçgende de dik açı bu köşegeni görür.',
      },
      {
        title: 'BAD üçgeninden [BD]',
        detail:
          'm(BAD) = 90° olduğundan BD² = AB² + AD² = 15² + 20² = 225 + 400 = 625 → |BD| = 25 cm.',
      },
      {
        title: 'BCD üçgenine geç',
        detail: 'm(BCD) = 90° olduğundan BD² = BC² + CD², yani 625 = x² + 24² = x² + 576’dır.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 625 − 576 = 49 → x = |BC| = 7 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 105
  {
    id: 'triangles-105',
    topic: '30° ve 45° açıların birlikte kullanımı',
    figure: {
      viewBox: '0 166 400 182',
      caption: 'Şekil 105',
      label:
        'ABC üçgeninde A’dan [BC] kenarına inen dikmenin ayağı H’dir; m(ABC) = 30°, m(ACB) = 45°, |AH| = 6 cm ve |BC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M52,300 L347.1,300 L239.1,192 Z"/>
          <path class="ln" d="M239.1,192 L239.1,300"/>
          <path class="ln" d="M239.1,287 L252.1,287 L252.1,300"/>

          <path class="arc" d="M92,300 A40,40 0 0 1 86.64,280"/>
          <text class="val" x="108" y="285" text-anchor="middle">30°</text>

          <path class="arc" d="M307.1,300 A40,40 0 0 1 318.8,271.7"/>
          <text class="val" x="293" y="278" text-anchor="middle">45°</text>

          <circle class="pt" cx="52" cy="300" r="3.2"/>
          <circle class="pt" cx="347.1" cy="300" r="3.2"/>
          <circle class="pt" cx="239.1" cy="192" r="3.2"/>
          <circle class="pt" cx="239.1" cy="300" r="3.2"/>

          <text class="val" x="231" y="250" text-anchor="end">6</text>
          <text class="val" x="199.6" y="340" text-anchor="middle">x</text>

          <text x="239.1" y="180" text-anchor="middle">A</text>
          <text x="44" y="320" text-anchor="end">B</text>
          <text x="355" y="320">C</text>
          <text x="239.1" y="322" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC üçgeninde H ∈ [BC]', '[AH] ⊥ [BC]', 'm(ABC) = 30°', 'm(ACB) = 45°', '|AH| = 6 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6√2 + 6' },
      { key: 'B', text: '6√3' },
      { key: 'C', text: '12' },
      { key: 'D', text: '6√3 + 6' },
      { key: 'E', text: '12√3' },
    ],
    answer: 'D',
    hint: 'Yükseklik üçgeni biri 30° − 60° − 90°, diğeri 45° − 45° − 90° olan iki dik üçgene ayırır.',
    solution: [
      {
        title: 'Yükseklik üçgeni ikiye ayırır',
        detail:
          '[AH] ⊥ [BC] olduğundan ABH ve AHC üçgenlerinin ikisi de H’de diktir. |BC| = |BH| + |HC| olacağından iki parçayı ayrı ayrı bulmak yeter.',
      },
      {
        title: 'ABH üçgeni: 30° − 60° − 90°',
        detail:
          'm(ABH) = 30° ve m(AHB) = 90° olduğundan m(BAH) = 60°’dir. 30°’nin karşısındaki dik kenar [AH] olduğundan hipotenüs |AB| = 2 · 6 = 12 cm, diğer dik kenar ise |BH| = 6√3 cm olur.',
      },
      {
        title: 'AHC üçgeni: 45° − 45° − 90°',
        detail:
          'm(ACH) = 45° ve m(AHC) = 90° olduğundan m(HAC) = 45°’dir; üçgen ikizkenardır ve |HC| = |AH| = 6 cm olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = |BC| = |BH| + |HC| = 6√3 + 6 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 106
  {
    id: 'triangles-106',
    topic: 'Öklid bağıntıları',
    figure: {
      viewBox: '0 104 400 232',
      caption: 'Şekil 106',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde [AC] üzerindeki D noktası, [BC] üzerindeki H noktası ile birleştirilmiştir; |DH| = |BH| = |HC| eşitliği hash işaretleriyle gösterilmiş, |AD| = 4 cm ve |DC| = 12 cm verilmiştir.',
      svg: `
          <path class="ln" d="M50,126.8 L50,300 L350,300 Z"/>
          <path class="ln" d="M125,170.1 L200,300"/>
          <path class="ln" d="M50,287 L63,287 L63,300"/>

          <line class="tick" x1="125" y1="294" x2="125" y2="306"/>
          <line class="tick" x1="275" y1="294" x2="275" y2="306"/>
          <line class="tick" x1="157.3" y1="238.05" x2="167.7" y2="232.05"/>

          <circle class="pt" cx="50" cy="126.8" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="125" cy="170.1" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text class="val" x="103" y="142" text-anchor="middle">4</text>
          <text class="val" x="251" y="227" text-anchor="middle">12</text>

          <text x="44" y="120" text-anchor="end">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">C</text>
          <text x="133" y="166">D</text>
          <text x="200" y="322" text-anchor="middle">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 104 400 232',
      caption: 'Şekil 106 — yardımcı çizim',
      label:
        'Aynı şekilde B ile D birleştirilmiş; H noktası B, D ve C’ye eşit uzaklıkta olduğundan D, çapı [BC] olan çember üzerindedir ve m(BDC) = 90°’dir.',
      svg: `
          <path class="ln" d="M50,126.8 L50,300 L350,300 Z"/>
          <path class="ln" d="M125,170.1 L200,300"/>
          <path class="ln" d="M50,287 L63,287 L63,300"/>

          <path class="aux" d="M50,300 L125,170.1"/>
          <path class="aux" d="M118.5,181.4 L129.76,187.86 L136.3,176.6"/>

          <line class="tick" x1="125" y1="294" x2="125" y2="306"/>
          <line class="tick" x1="275" y1="294" x2="275" y2="306"/>
          <line class="tick" x1="157.3" y1="238.05" x2="167.7" y2="232.05"/>

          <circle class="pt" cx="50" cy="126.8" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="125" cy="170.1" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text class="val" x="103" y="142" text-anchor="middle">4</text>
          <text class="val" x="251" y="227" text-anchor="middle">12</text>
          <text class="val" x="78" y="240" text-anchor="end">4√3</text>

          <text x="44" y="120" text-anchor="end">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">C</text>
          <text x="133" y="166">D</text>
          <text x="200" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC üçgeninde m(ABC) = 90°',
      'D ∈ [AC] ve H ∈ [BC]',
      '|DH| = |BH| = |HC|',
      '|AD| = 4 cm',
      '|DC| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| + |BC| toplamı kaç cm’dir?',
    choices: [
      { key: 'A', text: '8 + 4√3' },
      { key: 'B', text: '8 + 8√3' },
      { key: 'C', text: '12 + 4√3' },
      { key: 'D', text: '16' },
      { key: 'E', text: '16√3' },
    ],
    answer: 'B',
    hint: 'H noktası B, D ve C’ye eşit uzaklıkta; bu, D’yi çapı [BC] olan çemberin üzerine taşır.',
    solution: [
      {
        title: 'Eşit uzunlukları oku',
        detail:
          '|HB| = |HD| = |HC| olduğundan H, B, D ve C noktalarına eşit uzaklıktadır: üçü de merkezi H olan bir çemberin üzerindedir ve [BC] bu çemberin çapıdır.',
      },
      {
        title: 'Çapı gören açı',
        detail:
          'Çapı gören çevre açı dik olduğundan m(BDC) = 90°’dir. Yani [BD], ABC dik üçgeninde hipotenüse ait yüksekliktir.',
      },
      {
        title: 'Hipotenüsü tamamla',
        detail: 'D ∈ [AC] olduğundan |AC| = |AD| + |DC| = 4 + 12 = 16 cm.',
      },
      {
        title: 'Öklid bağıntılarını uygula',
        detail:
          'Dik kenarın karesi, kendi izdüşümü ile hipotenüsün çarpımıdır: AB² = AD · AC = 4 · 16 = 64 → |AB| = 8 cm ve BC² = DC · AC = 12 · 16 = 192 → |BC| = √192 = 8√3 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|AB| + |BC| = 8 + 8√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 107
  {
    id: 'triangles-107',
    topic: 'Hipotenüsün orta dikmesi',
    figure: {
      viewBox: '0 50 400 300',
      caption: 'Şekil 107',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde [BC] hipotenüsünün orta noktası H’dir; H’den [BC]’ye çizilen dikme [AC] kenarını D noktasında keser. |AB| = 6 cm, |AC| = 8 cm ve |DC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M50,300 L350,300 L50,75 Z"/>
          <path class="ln" d="M115.625,300 L200,187.5"/>
          <path class="ln" d="M50,287 L63,287 L63,300"/>
          <path class="ln" d="M192.2,197.9 L202.6,205.7 L210.4,195.3"/>

          <line class="tick" x1="121.4" y1="136.05" x2="128.6" y2="126.45"/>
          <line class="tick" x1="271.4" y1="248.55" x2="278.6" y2="238.95"/>

          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="50" cy="75" r="3.2"/>
          <circle class="pt" cx="115.625" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="187.5" r="3.2"/>

          <text class="val" x="42" y="192" text-anchor="end">6</text>
          <text class="val" x="200" y="344" text-anchor="middle">8</text>
          <text class="val" x="240" y="290" text-anchor="middle">x</text>

          <text x="42" y="320" text-anchor="end">A</text>
          <text x="50" y="64" text-anchor="middle">B</text>
          <text x="358" y="320">C</text>
          <text x="115.625" y="322" text-anchor="middle">D</text>
          <text x="208" y="182">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 50 400 300',
      caption: 'Şekil 107 — yardımcı çizim',
      label:
        'Aynı şekilde D ile B birleştirilmiş; [DH], [BC] kenarının orta dikmesi olduğundan |DB| = |DC| = x’tir ve geriye kalan parça |AD| = 8 − x olarak yazılmıştır.',
      svg: `
          <path class="ln" d="M50,300 L350,300 L50,75 Z"/>
          <path class="ln" d="M115.625,300 L200,187.5"/>
          <path class="ln" d="M50,287 L63,287 L63,300"/>
          <path class="ln" d="M192.2,197.9 L202.6,205.7 L210.4,195.3"/>

          <path class="aux" d="M50,75 L115.625,300"/>

          <line class="tick" x1="121.4" y1="136.05" x2="128.6" y2="126.45"/>
          <line class="tick" x1="271.4" y1="248.55" x2="278.6" y2="238.95"/>

          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="50" cy="75" r="3.2"/>
          <circle class="pt" cx="115.625" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="187.5" r="3.2"/>

          <text class="val" x="42" y="192" text-anchor="end">6</text>
          <text class="val" x="200" y="344" text-anchor="middle">8</text>
          <text class="val" x="240" y="290" text-anchor="middle">x</text>
          <text class="val" x="100" y="184" text-anchor="middle">x</text>
          <text class="val" x="82" y="322" text-anchor="middle">8 − x</text>

          <text x="42" y="320" text-anchor="end">A</text>
          <text x="50" y="64" text-anchor="middle">B</text>
          <text x="358" y="320">C</text>
          <text x="115.625" y="322" text-anchor="middle">D</text>
          <text x="208" y="182">H</text>
        `,
    },
    given: [
      'ABC üçgeninde m(BAC) = 90°',
      'H ∈ [BC] ve |BH| = |HC|',
      '[DH] ⊥ [BC] ve D ∈ [AC]',
      '|AB| = 6 cm',
      '|AC| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '24/5' },
      { key: 'C', text: '25/4' },
      { key: 'D', text: '15/2' },
      { key: 'E', text: '8' },
    ],
    answer: 'C',
    hint: '[DH] aslında [BC] kenarının orta dikmesidir; orta dikme üzerindeki her nokta uçlara eşit uzaklıktadır.',
    solution: [
      {
        title: 'Orta dikmeyi tanı',
        detail:
          'H, [BC]’nin orta noktası ve [DH] ⊥ [BC] olduğundan [DH], [BC] kenarının orta dikmesidir.',
      },
      {
        title: 'Eşit uzaklığı kullan',
        detail:
          'Orta dikme üzerindeki her nokta parçanın uçlarına eşit uzaklıkta olduğundan |DB| = |DC| = x olur.',
      },
      {
        title: 'ABD dik üçgenini kur',
        detail:
          'D ∈ [AC] olduğundan |AD| = |AC| − |DC| = 8 − x’tir. m(BAD) = 90° olduğundan ABD üçgeninde AB² + AD² = DB² yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: '6² + (8 − x)² = x² → 36 + 64 − 16x + x² = x² → 100 = 16x.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 100/16 = 25/4 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 108
  {
    id: 'triangles-108',
    topic: 'Dörtgende özel açılı dik üçgenler',
    figure: {
      viewBox: '0 42 400 292',
      caption: 'Şekil 108',
      label:
        'ABCD dörtgeninde A köşesindeki açı dik ve |AB| = |AD| = 4 cm’dir; C köşesindeki açı da diktir ve m(ADC) = 75°, |DC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M112.1,68.2 L343.9,130.3 L343.9,300 L50,300 Z"/>
          <path class="ln" d="M124.7,71.6 L121.3,84.1 L108.7,80.8"/>
          <path class="ln" d="M343.9,287 L330.9,287 L330.9,300"/>

          <line class="tick" x1="226.4" y1="105.05" x2="229.6" y2="93.4"/>
          <line class="tick" x1="75.25" y1="182.55" x2="86.85" y2="185.65"/>

          <path class="arc" d="M96,300 A46,46 0 0 0 61.9,255.6"/>
          <text class="val" x="102" y="260" text-anchor="middle">75°</text>

          <circle class="pt" cx="112.1" cy="68.2" r="3.2"/>
          <circle class="pt" cx="343.9" cy="130.3" r="3.2"/>
          <circle class="pt" cx="343.9" cy="300" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>

          <text class="val" x="233" y="84" text-anchor="middle">4</text>
          <text class="val" x="62" y="182" text-anchor="end">4</text>
          <text class="val" x="197" y="322" text-anchor="middle">x</text>

          <text x="112.1" y="56" text-anchor="middle">A</text>
          <text x="352" y="126">B</text>
          <text x="352" y="320">C</text>
          <text x="42" y="320" text-anchor="end">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 42 400 292',
      caption: 'Şekil 108 — yardımcı çizim',
      label:
        'Aynı dörtgende B ile D köşegenle birleştirilmiş; ABD ikizkenar dik üçgeninde |BD| = 4√2 cm ve m(BDA) = 45° olduğundan m(BDC) = 30° olur.',
      svg: `
          <path class="ln" d="M112.1,68.2 L343.9,130.3 L343.9,300 L50,300 Z"/>
          <path class="ln" d="M124.7,71.6 L121.3,84.1 L108.7,80.8"/>
          <path class="ln" d="M343.9,287 L330.9,287 L330.9,300"/>

          <path class="aux" d="M50,300 L343.9,130.3"/>

          <line class="tick" x1="226.4" y1="105.05" x2="229.6" y2="93.4"/>
          <line class="tick" x1="75.25" y1="182.55" x2="86.85" y2="185.65"/>

          <path class="arc" d="M89.8,277 A46,46 0 0 0 61.9,255.6"/>
          <text class="val" x="91" y="248" text-anchor="middle">45°</text>

          <path class="arc" d="M96,300 A46,46 0 0 0 89.8,277"/>
          <text class="val" x="118" y="284" text-anchor="middle">30°</text>

          <circle class="pt" cx="112.1" cy="68.2" r="3.2"/>
          <circle class="pt" cx="343.9" cy="130.3" r="3.2"/>
          <circle class="pt" cx="343.9" cy="300" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>

          <text class="val" x="233" y="84" text-anchor="middle">4</text>
          <text class="val" x="62" y="182" text-anchor="end">4</text>
          <text class="val" x="197" y="322" text-anchor="middle">x</text>
          <text class="val" x="205" y="232" text-anchor="middle">4√2</text>

          <text x="112.1" y="56" text-anchor="middle">A</text>
          <text x="352" y="126">B</text>
          <text x="352" y="320">C</text>
          <text x="42" y="320" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'm(BAD) = 90° ve |AB| = |AD| = 4 cm',
      '[BC] ⊥ [CD]',
      'm(ADC) = 75°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√2' },
      { key: 'B', text: '4' },
      { key: 'C', text: '2√5' },
      { key: 'D', text: '2√6' },
      { key: 'E', text: '4√2' },
    ],
    answer: 'D',
    hint: '[BD] köşegenini çiz: bir yanda ikizkenar dik üçgen, öbür yanda özel açılı bir dik üçgen kalır.',
    solution: [
      {
        title: 'Köşegeni çiz',
        detail:
          'B ile D birleştirilirse dörtgen, A’da dik olan ABD üçgeni ile C’de dik olan BCD üçgenine ayrılır.',
      },
      {
        title: 'ABD ikizkenar dik üçgeni',
        detail:
          'm(BAD) = 90° ve |AB| = |AD| = 4 cm olduğundan ABD ikizkenar dik üçgendir: m(ADB) = m(ABD) = 45° ve |BD| = 4√2 cm olur.',
      },
      {
        title: 'D köşesindeki açıyı böl',
        detail:
          '[DB], m(ADC) açısını ikiye ayırdığından m(BDC) = m(ADC) − m(ADB) = 75 − 45 = 30° olur.',
      },
      {
        title: 'BCD üçgeni: 30° − 60° − 90°',
        detail:
          'm(BCD) = 90° ve m(BDC) = 30° olduğundan m(DBC) = 60°’dir. 30°’nin karşısındaki dik kenar |BC| = |BD| / 2 = 2√2 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'BCD dik üçgeninde x² = BD² − BC² = (4√2)² − (2√2)² = 32 − 8 = 24 → x = |DC| = 2√6 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 109
  {
    id: 'triangles-109',
    topic: '15°’lik açı ve ikizkenar kurma',
    figure: {
      viewBox: '0 196 400 150',
      caption: 'Şekil 109',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde m(ACB) = 15° olarak işaretlenmiş, |AB| = 2 cm verilmiş ve hipotenüsün komşusu olan [BC] kenarı x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M50,219.6 L50,300 L350,300 Z"/>
          <path class="ln" d="M50,287 L63,287 L63,300"/>

          <path class="arc" d="M304,300 A46,46 0 0 1 305.57,288.1"/>
          <text class="val" x="278" y="297" text-anchor="middle">15°</text>

          <circle class="pt" cx="50" cy="219.6" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>

          <text class="val" x="42" y="264" text-anchor="end">2</text>
          <text class="val" x="200" y="322" text-anchor="middle">x</text>

          <text x="42" y="214" text-anchor="end">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 196 400 150',
      caption: 'Şekil 109 — yardımcı çizim',
      label:
        'Aynı şekilde [BC] üzerinde |DA| = |DC| olacak biçimde bir D noktası alınmış ve A ile D birleştirilmiştir; eşit kenarlar hash işaretleriyle gösterilmiş, m(ADB) = 30° olarak bulunmuştur.',
      svg: `
          <path class="ln" d="M50,219.6 L50,300 L350,300 Z"/>
          <path class="ln" d="M50,287 L63,287 L63,300"/>

          <path class="aux" d="M50,219.6 L189.2,300"/>

          <line class="tick" x1="116.6" y1="265" x2="122.6" y2="254.6"/>
          <line class="tick" x1="269.6" y1="294" x2="269.6" y2="306"/>

          <path class="arc" d="M304,300 A46,46 0 0 1 305.57,288.1"/>
          <text class="val" x="278" y="297" text-anchor="middle">15°</text>

          <path class="arc" d="M143.2,300 A46,46 0 0 1 149.4,277"/>
          <text class="val" x="128" y="288" text-anchor="middle">30°</text>

          <circle class="pt" cx="50" cy="219.6" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="189.2" cy="300" r="3.2"/>

          <text class="val" x="42" y="264" text-anchor="end">2</text>
          <text class="val" x="172" y="268" text-anchor="middle">4</text>
          <text class="val" x="118" y="322" text-anchor="middle">2√3</text>
          <text class="val" x="272" y="322" text-anchor="middle">4</text>

          <text x="42" y="214" text-anchor="end">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">C</text>
          <text x="189.2" y="322" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC üçgeninde m(ABC) = 90°', 'm(ACB) = 15°', '|AB| = 2 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2 + 2√3' },
      { key: 'B', text: '4 + 2√3' },
      { key: 'C', text: '2 + 4√3' },
      { key: 'D', text: '4 + 4√3' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'B',
    hint: '15° tabloda yok; [BC] üzerinde |DA| = |DC| olacak şekilde bir D noktası alırsan dışarıda 30°’lik bir açı belirir.',
    solution: [
      {
        title: 'İkizkenar üçgen kur',
        detail:
          '[BC] üzerinde |DA| = |DC| olacak biçimde bir D noktası alalım. ADC ikizkenar olduğundan m(DAC) = m(DCA) = 15° olur.',
      },
      {
        title: 'Dış açıyı yaz',
        detail: 'm(ADB), ADC üçgeninin D köşesindeki dış açısıdır: m(ADB) = 15 + 15 = 30°.',
      },
      {
        title: 'ABD üçgeni: 30° − 60° − 90°',
        detail:
          'm(ABD) = 90° ve m(ADB) = 30°’dir. 30°’nin karşısındaki dik kenar [AB] olduğundan hipotenüs |AD| = 2 · 2 = 4 cm, diğer dik kenar ise |BD| = 2√3 cm olur.',
      },
      {
        title: 'İki parçayı topla',
        detail: '|DC| = |DA| = 4 cm olduğundan x = |BC| = |BD| + |DC| = 2√3 + 4 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 4 + 2√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 110
  {
    id: 'triangles-110',
    topic: 'Kesenli Pisagor kurulumu',
    figure: {
      viewBox: '0 116 400 216',
      caption: 'Şekil 110',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde [BC] kenarı üzerindeki D noktası A ile birleştirilmiştir; |AD| = 10 cm, |DC| = 9 cm, |AC| = 17 cm ve dik kenar |AB| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M50,140 L50,300 L350,300 Z"/>
          <path class="ln" d="M50,140 L170,300"/>
          <path class="ln" d="M50,287 L63,287 L63,300"/>

          <circle class="pt" cx="50" cy="140" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="170" cy="300" r="3.2"/>

          <text class="val" x="42" y="226" text-anchor="end">x</text>
          <text class="val" x="124" y="214" text-anchor="middle">10</text>
          <text class="val" x="215" y="202" text-anchor="middle">17</text>
          <text class="val" x="260" y="322" text-anchor="middle">9</text>

          <text x="42" y="134" text-anchor="end">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">C</text>
          <text x="170" y="322" text-anchor="middle">D</text>
        `,
    },
    given: [
      'ABC üçgeninde m(ABC) = 90°',
      'D ∈ [BC]',
      '|AD| = 10 cm',
      '|DC| = 9 cm',
      '|AC| = 17 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'C',
    hint: 'İki dik üçgen var: ABD ve ABC. İkisinde de Pisagor yaz, ortak olan x²’yi yok et.',
    solution: [
      {
        title: 'İki dik üçgeni gör',
        detail:
          'm(ABC) = 90° ve D ∈ [BC] olduğundan m(ABD) = 90°’dir. Yani hem ABD hem de ABC üçgeni B’de diktir.',
      },
      {
        title: 'Pisagor bağıntılarını kur',
        detail:
          '|BD| = a diyelim. ABD üçgeninde x² + a² = 10² = 100, ABC üçgeninde ise x² + (a + 9)² = 17² = 289 olur.',
      },
      {
        title: 'İki denklemi çıkar',
        detail:
          'İkinci denklemden birinci çıkarılırsa x² sadeleşir: (a + 9)² − a² = 289 − 100 → 18a + 81 = 189 → 18a = 108 → a = 6 cm.',
      },
      {
        title: 'x’i bul',
        detail: 'x² + 6² = 100 → x² = 64.',
      },
      {
        title: 'Sonuç',
        detail: 'x = |AB| = 8 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 111
  {
    id: 'triangles-111',
    topic: 'Açıortay ve 30° − 60° − 90° üçgeni',
    figure: {
      viewBox: '0 104 400 232',
      caption: 'Şekil 111',
      label:
        'ABC üçgeninde [AC] kenarı üzerindeki D noktası B ile birleştirilmiştir; m(ABD) = m(DBC) = 30° ve m(ACB) = 30° olarak işaretlenmiş, |AD| = 6 cm verilmiş ve |DC| = x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M50,126.8 L50,300 L350,300 Z"/>
          <path class="ln" d="M50,126.8 L150,300"/>

          <path class="arc" d="M50,172.8 A46,46 0 0 0 73,166.6"/>
          <text class="val" x="65" y="196" text-anchor="middle">30°</text>

          <path class="arc" d="M73,166.6 A46,46 0 0 0 89.8,149.8"/>
          <text class="val" x="112" y="186" text-anchor="middle">30°</text>

          <path class="arc" d="M304,300 A46,46 0 0 1 310.2,277"/>
          <text class="val" x="285" y="288" text-anchor="middle">30°</text>

          <circle class="pt" cx="50" cy="126.8" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="150" cy="300" r="3.2"/>

          <text class="val" x="100" y="322" text-anchor="middle">6</text>
          <text class="val" x="250" y="322" text-anchor="middle">x</text>

          <text x="42" y="320" text-anchor="end">A</text>
          <text x="50" y="116" text-anchor="middle">B</text>
          <text x="358" y="320">C</text>
          <text x="150" y="322" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC bir üçgen ve D ∈ [AC]', 'm(ABD) = m(DBC) = 30°', 'm(ACB) = 30°', '|AD| = 6 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '6√3' },
      { key: 'C', text: '9' },
      { key: 'D', text: '10' },
      { key: 'E', text: '12' },
    ],
    answer: 'E',
    hint: 'Önce ABC üçgeninin açılar toplamından A köşesindeki açıyı bul; sonra BDC üçgeninin iki açısını yan yana koy.',
    solution: [
      {
        title: 'A köşesindeki açıyı bul',
        detail:
          'm(ABC) = 30 + 30 = 60° ve m(ACB) = 30° olduğundan m(BAC) = 180 − 60 − 30 = 90°’dir: ABC üçgeni A’da diktir.',
      },
      {
        title: 'ABD üçgeni: 30° − 60° − 90°',
        detail:
          'D ∈ [AC] olduğundan m(BAD) = 90°’dir ve m(ABD) = 30°’dir. 30°’nin karşısındaki dik kenar [AD] olduğundan hipotenüs |BD| = 2 · |AD| = 2 · 6 = 12 cm olur.',
      },
      {
        title: 'BDC üçgeni ikizkenar',
        detail:
          'BDC üçgeninde m(DBC) = 30° ve m(DCB) = 30° olduğundan üçgen ikizkenardır; eşit açıların karşısındaki kenarlar eşittir: |DC| = |DB|.',
      },
      {
        title: 'Sonuç',
        detail: 'x = |DC| = |DB| = 12 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 112
  {
    id: 'triangles-112',
    topic: 'Aynı verilerden iki farklı dik üçgen',
    figure: {
      viewBox: '0 168 400 168',
      caption: 'Şekil 112',
      label:
        'B noktasından çıkan [BE] ışını yatay çizilmiş, B’den ayrılan [AB] parçası bu ışınla 30° yerine 60°’lik açı yapmaktadır; |AB| = 8 cm verilmiş, C noktası ise [BE] üzerinde herhangi bir yerdedir.',
      svg: `
          <path class="ln" d="M50,300 L350,300"/>
          <path class="ln" d="M50,300 L114,189.15"/>

          <path class="arc" d="M84,300 A34,34 0 0 0 67,270.6"/>
          <text class="val" x="96" y="276" text-anchor="middle">60°</text>

          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="114" cy="189.15" r="3.2"/>

          <text class="val" x="62" y="238" text-anchor="end">8</text>

          <text x="114" y="178" text-anchor="middle">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 168 400 168',
      caption: 'Şekil 112 — yardımcı çizim',
      label:
        'Aynı şekilde C noktasının iki olası yeri çizilmiştir: dik açı C’de iken A’dan [BE]’ye inen dikmenin ayağı C₁, dik açı A’da iken [AB]’ye A’dan çizilen dikmenin [BE]’yi kestiği nokta C₂’dir.',
      svg: `
          <path class="ln" d="M50,300 L350,300"/>
          <path class="ln" d="M50,300 L114,189.15"/>

          <path class="aux" d="M114,189.15 L114,300"/>
          <path class="aux" d="M114,189.15 L306,300"/>
          <path class="aux" d="M114,287 L101,287 L101,300"/>
          <path class="aux" d="M107.5,200.4 L118.76,206.9 L125.26,195.65"/>

          <path class="arc" d="M84,300 A34,34 0 0 0 67,270.6"/>
          <text class="val" x="96" y="276" text-anchor="middle">60°</text>

          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="114" cy="189.15" r="3.2"/>
          <circle class="pt" cx="114" cy="300" r="3.2"/>
          <circle class="pt" cx="306" cy="300" r="3.2"/>

          <text class="val" x="62" y="238" text-anchor="end">8</text>
          <text class="val" x="230" y="322" text-anchor="middle">16</text>

          <text x="114" y="178" text-anchor="middle">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">E</text>
          <text x="114" y="322" text-anchor="middle">C₁</text>
          <text x="306" y="322" text-anchor="middle">C₂</text>
        `,
    },
    given: ['[AB] ∩ [BE] = {B}', '|AB| = 8 cm', 'm(ABE) = 60°', 'C ∈ [BE]', 'ABC bir dik üçgen'],
    stem: [],
    ask: 'Yukarıdaki şekilde verilenlerle oluşturulabilecek iki farklı ABC dik üçgeninde, büyük hipotenüsün küçük hipotenüse oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/2' },
      { key: 'B', text: '√3/2' },
      { key: 'C', text: '√3' },
      { key: 'D', text: '2' },
      { key: 'E', text: '2√3/3' },
    ],
    answer: 'D',
    hint: 'C, [BE] üzerinde olduğundan B’deki açı hep 60°’dir; dik açı ya A’da ya da C’dedir. İki durumu ayrı ayrı çiz.',
    solution: [
      {
        title: 'Dik açı nerede olabilir?',
        detail:
          'C ∈ [BE] olduğundan m(ABC) = m(ABE) = 60°’dir; B’deki açı dik olamaz. Geriye iki durum kalır: dik açı ya C’de ya da A’dadır.',
      },
      {
        title: 'Birinci durum: dik açı C’de',
        detail:
          'Bu durumda hipotenüs [AB]’dir, çünkü hipotenüs dik açının karşısındaki kenardır: hipotenüs uzunluğu 8 cm olur.',
      },
      {
        title: 'İkinci durum: dik açı A’da',
        detail:
          'Bu kez hipotenüs [BC]’dir. m(ABC) = 60° olduğundan m(ACB) = 30°’dir ve 30°’nin karşısındaki dik kenar [AB]’dir: |BC| = 2 · |AB| = 2 · 8 = 16 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'Büyük hipotenüsün küçüğe oranı 16 / 8 = 2 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 113
  {
    id: 'triangles-113',
    topic: 'Pisagor bağıntısının günlük hayatta kullanımı',
    figure: {
      viewBox: '0 40 400 300',
      caption: 'Şekil 113',
      label:
        'Yere dik duran bir duvara dayanmış merdiven bir dik üçgen oluşturmaktadır; merdivenin boyu 20 metre, ayağının duvara olan uzaklığı ise 12 metredir. Şekil merdivenin ilk konumunu göstermektedir.',
      svg: `
          <path class="ln" d="M110,60 L110,300"/>
          <path class="ln" d="M60,300 L330,300"/>
          <path class="ln" d="M278,300 L110,76"/>
          <path class="ln" d="M110,287 L123,287 L123,300"/>

          <circle class="pt" cx="110" cy="76" r="3.2"/>
          <circle class="pt" cx="110" cy="300" r="3.2"/>
          <circle class="pt" cx="278" cy="300" r="3.2"/>

          <text class="val" x="214" y="178" text-anchor="middle">20 m</text>
          <text class="val" x="194" y="322" text-anchor="middle">12 m</text>
        `,
    },
    stem: [
      'Boyu 20 metre olan bir merdiven, yere dik olan bir duvara dayandırılıyor. Merdivenin yere değen ucunun duvara olan uzaklığı 12 metredir.',
      'Merdivenin ayağı, duvardan uzaklaşacak yönde 4 metre kaydırılıyor.',
    ],
    ask: 'Buna göre, merdivenin üst ucunun yerden yüksekliği kaç metre olur?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '4√7' },
      { key: 'D', text: '8√3' },
      { key: 'E', text: '15' },
    ],
    answer: 'B',
    hint: 'Merdiven kaysa da boyu değişmez: her iki konumda da hipotenüs 20 metredir.',
    solution: [
      {
        title: 'Kurulumu dik üçgene çevir',
        detail:
          'Duvar yere dik olduğundan duvar, yer ve merdiven bir dik üçgen oluşturur. Merdiven bu üçgenin hipotenüsüdür ve uzunluğu her konumda 20 metredir.',
      },
      {
        title: 'Yeni uzaklığı yaz',
        detail:
          'Merdivenin ayağı duvardan uzaklaşacak yönde 4 metre kaydırıldığından yeni uzaklık 12 + 4 = 16 metre olur.',
      },
      {
        title: 'Pisagor bağıntısını uygula',
        detail: 'Yüksekliğe h dersek h² + 16² = 20² → h² = 400 − 256 = 144.',
      },
      {
        title: 'Sonuç',
        detail: 'h = 12 metre bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 114
  {
    id: 'triangles-114',
    topic: 'Hipotenüse ait yükseklik ile kenarortay arasındaki açı',
    figure: {
      viewBox: '0 128 400 224',
      caption: 'Şekil 114',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüse [AH] yüksekliği ve [AD] kenarortayı çizilmiştir; |BD| = |DC| eşitliği hash işaretleriyle gösterilmiş, m(HAD) = 20° ve m(ABC) = x olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M50,300 L350,300 L148.7,159.05 Z"/>
          <path class="ln" d="M148.7,159.05 L148.7,300"/>
          <path class="ln" d="M148.7,159.05 L200,300"/>
          <path class="ln" d="M138.37,173.79 L153.11,184.11 L163.44,169.37"/>
          <path class="ln" d="M148.7,287 L161.7,287 L161.7,300"/>

          <line class="tick" x1="125" y1="294" x2="125" y2="306"/>
          <line class="tick" x1="275" y1="294" x2="275" y2="306"/>

          <path class="arc" d="M148.7,197.05 A38,38 0 0 0 161.7,194.75"/>
          <text class="val" x="168" y="262" text-anchor="middle">20°</text>

          <path class="arc" d="M96,300 A46,46 0 0 0 76.39,262.32"/>
          <text class="val" x="108" y="274" text-anchor="middle">x</text>

          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="148.7" cy="159.05" r="3.2"/>
          <circle class="pt" cx="148.7" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text x="148.7" y="148" text-anchor="middle">A</text>
          <text x="42" y="320" text-anchor="end">B</text>
          <text x="358" y="320">C</text>
          <text x="148.7" y="322" text-anchor="middle">H</text>
          <text x="200" y="322" text-anchor="middle">D</text>
        `,
    },
    given: [
      'ABC üçgeninde m(BAC) = 90°',
      'H ∈ [BC] ve [AH] ⊥ [BC]',
      'D ∈ [BC] ve |BD| = |DC|',
      'm(HAD) = 20°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'C',
    hint: 'Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısıdır; bu, ABD üçgenini ikizkenar yapar.',
    solution: [
      {
        title: 'Kenarortayı kullan',
        detail:
          'Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısına eşittir: |AD| = |BD| = |DC|. Buradan ABD üçgeni ikizkenardır.',
      },
      {
        title: 'Taban açılarını yaz',
        detail:
          'ABD ikizkenar olduğundan m(DAB) = m(ABD) = x olur; yani [AD] kenarortayının [AB] ile yaptığı açı da x’tir.',
      },
      {
        title: 'Yüksekliğin ayırdığı açı',
        detail: 'ABH üçgeni H’de dik olduğundan m(BAH) = 90 − x’tir.',
      },
      {
        title: 'İki açıyı çıkar',
        detail: 'm(HAD) = m(BAD) − m(BAH) = x − (90 − x) = 2x − 90 olur ve bu 20°’ye eşittir.',
      },
      {
        title: 'Sonuç',
        detail: '2x − 90 = 20 → 2x = 110 → x = m(ABC) = 55° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 115
  {
    id: 'triangles-115',
    topic: 'Dik kenarları oranla verilen dik üçgende Pisagor',
    figure: {
      viewBox: '0 146 400 186',
      caption: 'Şekil 115',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde dik kenarlar |AB| = x ve |BC| = 2x, hipotenüs ise 15 cm olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M70,170 L70,300 L330,300 Z"/>
          <path class="ln" d="M70,287 L83,287 L83,300"/>

          <circle class="pt" cx="70" cy="170" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>

          <text class="val" x="62" y="240" text-anchor="end">x</text>
          <text class="val" x="200" y="322" text-anchor="middle">2x</text>
          <text class="val" x="212" y="228">15</text>

          <text x="70" y="159" text-anchor="middle">A</text>
          <text x="62" y="320" text-anchor="end">B</text>
          <text x="338" y="320">C</text>
        `,
    },
    given: ['ABC üçgeninde m(ABC) = 90°', '|AC| = 15 cm', '|AB| = x cm', '|BC| = 2x cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm’dir?',
    choices: [
      { key: 'A', text: '3√5' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '5√5' },
      { key: 'D', text: '6√5' },
      { key: 'E', text: '3√10' },
    ],
    answer: 'D',
    hint: 'Pisagor bağıntısını x cinsinden yaz; x’i bulduktan sonra sorulanın x değil 2x olduğunu unutma.',
    solution: [
      {
        title: 'Pisagor bağıntısını kur',
        detail:
          'm(ABC) = 90° olduğundan hipotenüs [AC]’dir: |AB|² + |BC|² = |AC|² → x² + (2x)² = 15².',
      },
      {
        title: 'x cinsinden sadeleştir',
        detail: 'x² + 4x² = 225 → 5x² = 225 → x² = 45.',
      },
      {
        title: 'x’i bul',
        detail: 'x = √45 = 3√5 cm olur; bu, |AB| kenarının uzunluğudur.',
      },
      {
        title: 'Sonuç',
        detail: 'Sorulan |BC| = 2x = 2 · 3√5 = 6√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 116
  {
    id: 'triangles-116',
    topic: 'Aynı şekilde 45° ve 30°lik dik üçgenler',
    figure: {
      viewBox: '0 78 400 254',
      caption: 'Şekil 116',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde C köşesindeki açı 45°’dir; [BC] üzerindeki D noktası A ile birleştirilmiş, m(BAD) = 30° ve |AD| = x olarak gösterilmiştir. |AC| = 3√2 cm’dir.',
      svg: `
          <path class="ln" d="M115,100 L115,300 L315,300 Z"/>
          <path class="ln" d="M115,100 L230.47,300"/>
          <path class="ln" d="M115,287 L128,287 L128,300"/>

          <path class="arc" d="M115,162 A62,62 0 0 0 146,153.69"/>
          <text class="val" x="137" y="181" text-anchor="middle">30°</text>

          <path class="arc" d="M271,300 A44,44 0 0 1 283.89,268.89"/>
          <text class="val" x="258" y="280" text-anchor="middle">45°</text>

          <circle class="pt" cx="115" cy="100" r="3.2"/>
          <circle class="pt" cx="115" cy="300" r="3.2"/>
          <circle class="pt" cx="315" cy="300" r="3.2"/>
          <circle class="pt" cx="230.47" cy="300" r="3.2"/>

          <text class="val" x="188" y="246" text-anchor="end">x</text>
          <text class="val" x="232" y="190">3√2</text>

          <text x="115" y="89" text-anchor="middle">A</text>
          <text x="107" y="320" text-anchor="end">B</text>
          <text x="323" y="320">C</text>
          <text x="230.47" y="322" text-anchor="middle">D</text>
        `,
    },
    given: [
      'ABC üçgeninde m(ABC) = 90°',
      'm(ACB) = 45°',
      'D ∈ [BC]',
      'm(BAD) = 30°',
      '|AC| = 3√2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√2' },
      { key: 'B', text: '2√3' },
      { key: 'C', text: '√13' },
      { key: 'D', text: '3√2' },
      { key: 'E', text: '4' },
    ],
    answer: 'B',
    hint: 'Önce 45° − 45° − 90° üçgeninden |AB|’yi bul; [AB] iki üçgenin ortak dik kenarıdır.',
    solution: [
      {
        title: 'ABC üçgenini tanı',
        detail:
          'm(ABC) = 90° ve m(ACB) = 45° olduğundan m(BAC) = 45°’dir: ABC bir 45° − 45° − 90° üçgenidir ve hipotenüsü [AC]’dir.',
      },
      {
        title: 'Ortak dik kenarı bul',
        detail:
          'Bu üçgende hipotenüs dik kenarın √2 katıdır: |AC| = |AB| · √2 → 3√2 = |AB| · √2 → |AB| = 3 cm.',
      },
      {
        title: 'ABD üçgenine geç',
        detail:
          'D ∈ [BC] olduğundan ABD üçgeni de B’de diktir. m(BAD) = 30° verildiğinden m(ADB) = 60°’dir: ABD bir 30° − 60° − 90° üçgenidir.',
      },
      {
        title: 'Hipotenüsü yaz',
        detail:
          '30° − 60° − 90° üçgeninde 60°’nin karşısındaki dik kenar hipotenüsün √3/2 katıdır. Burada 60°’nin karşısında |AB| = 3 vardır: 3 = x · √3/2.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 6/√3 = 6√3/3 = 2√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 117
  {
    id: 'triangles-117',
    topic: 'Kenarları cebirsel verilen dik üçgen',
    stem: [
      'Düzlemde; 2k + 5, 2k + 8, 2k + 11 sayıları bir dik üçgenin santimetre cinsinden kenar uzunluklarını göstermektedir. (k > 0)',
    ],
    ask: 'Buna göre, bu dik üçgenin çevresi kaç cm’dir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '30' },
      { key: 'C', text: '36' },
      { key: 'D', text: '42' },
      { key: 'E', text: '45' },
    ],
    answer: 'C',
    hint: 'En büyük sayı hipotenüstür; Pisagor bağıntısını kur ve ikinci dereceden denklemi çöz.',
    solution: [
      {
        title: 'Hipotenüsü seç',
        detail:
          'k > 0 için 2k + 5 < 2k + 8 < 2k + 11 olduğundan en uzun kenar 2k + 11’dir ve hipotenüs odur.',
      },
      {
        title: 'Pisagor bağıntısını kur',
        detail:
          'Kısalık için a = 2k + 5 diyelim; diğer kenarlar a + 3 ve a + 6 olur: a² + (a + 3)² = (a + 6)².',
      },
      {
        title: 'Denklemi çöz',
        detail:
          'a² + a² + 6a + 9 = a² + 12a + 36 → a² − 6a − 27 = 0 → (a − 9)(a + 3) = 0. Uzunluk pozitif olduğundan a = 9 cm’dir.',
      },
      {
        title: 'Kenarları yaz',
        detail:
          'a = 2k + 5 = 9 → k = 2 olur ve k > 0 koşulunu sağlar. Kenarlar 9, 12 ve 15 cm’dir; 9² + 12² = 81 + 144 = 225 = 15² olduğu için bağıntı doğrulanır.',
      },
      {
        title: 'Sonuç',
        detail: 'Çevre 9 + 12 + 15 = 36 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 118
  {
    id: 'triangles-118',
    topic: 'Yüksekliğin ayırdığı iki dik üçgende Pisagor',
    figure: {
      viewBox: '0 158 400 176',
      caption: 'Şekil 118',
      label:
        'ABC üçgeninde A’dan [BC] kenarına inen yüksekliğin ayağı H’dir; |AB| = 5 cm, |BH| = 3 cm, |HC| = 8 cm ve |AC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M125,180 L35,300 L365,300 Z"/>
          <path class="ln" d="M125,180 L125,300"/>
          <path class="ln" d="M125,287 L138,287 L138,300"/>

          <circle class="pt" cx="125" cy="180" r="3.2"/>
          <circle class="pt" cx="35" cy="300" r="3.2"/>
          <circle class="pt" cx="365" cy="300" r="3.2"/>
          <circle class="pt" cx="125" cy="300" r="3.2"/>

          <text class="val" x="70" y="236" text-anchor="end">5</text>
          <text class="val" x="80" y="322" text-anchor="middle">3</text>
          <text class="val" x="245" y="322" text-anchor="middle">8</text>
          <text class="val" x="256" y="232">x</text>

          <text x="125" y="169" text-anchor="middle">A</text>
          <text x="27" y="320" text-anchor="end">B</text>
          <text x="373" y="320">C</text>
          <text x="125" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve H ∈ [BC]',
      '|AB| = 5 cm',
      '|BH| = 3 cm',
      '|HC| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√73' },
      { key: 'B', text: '3√10' },
      { key: 'C', text: '4√5' },
      { key: 'D', text: '9' },
      { key: 'E', text: '√89' },
    ],
    answer: 'C',
    hint: 'Yükseklik üçgeni iki dik üçgene ayırır; ortak kenar olan |AH|’yi soldaki üçgenden bul.',
    solution: [
      {
        title: 'Şekli iki dik üçgene ayır',
        detail:
          '[AH] ⊥ [BC] olduğundan hem ABH hem de AHC üçgeni H’de diktir ve [AH] ikisinin ortak dik kenarıdır.',
      },
      {
        title: 'Yüksekliği bul',
        detail: 'ABH üçgeninde |AH|² = |AB|² − |BH|² = 5² − 3² = 25 − 9 = 16 → |AH| = 4 cm.',
      },
      {
        title: 'Sağdaki üçgene geç',
        detail: 'AHC üçgeninde x² = |AH|² + |HC|² = 4² + 8² = 16 + 64 = 80.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √80 = 4√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 119
  {
    id: 'triangles-119',
    topic: '30° − 60° − 90° üçgeninde cebirsel kenarlar',
    figure: {
      viewBox: '0 110 400 220',
      caption: 'Şekil 119',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde C köşesindeki açı 30°’dir; |AB| = x + 2 cm ve hipotenüs |AC| = 3x cm olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M55,132 L55,300 L346,300 Z"/>
          <path class="ln" d="M55,287 L68,287 L68,300"/>

          <path class="arc" d="M298,300 A48,48 0 0 1 304.43,276"/>
          <text class="val" x="276" y="288" text-anchor="middle">30°</text>

          <circle class="pt" cx="55" cy="132" r="3.2"/>
          <circle class="pt" cx="55" cy="300" r="3.2"/>
          <circle class="pt" cx="346" cy="300" r="3.2"/>

          <text class="val" x="47" y="222" text-anchor="end">x + 2</text>
          <text class="val" x="218" y="196">3x</text>

          <text x="55" y="121" text-anchor="middle">A</text>
          <text x="47" y="320" text-anchor="end">B</text>
          <text x="354" y="320">C</text>
        `,
    },
    given: ['ABC üçgeninde m(ABC) = 90°', 'm(ACB) = 30°', '|AB| = (x + 2) cm', '|AC| = 3x cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '12' },
      { key: 'E', text: '15' },
    ],
    answer: 'D',
    hint: '30°’lik açının karşısındaki dik kenar hipotenüsün yarısıdır; hangi kenarın 30°’yi gördüğüne dikkat et.',
    solution: [
      {
        title: '30°’nin karşısındaki kenarı bul',
        detail:
          'C köşesindeki 30°’lik açının karşısındaki kenar [AB]’dir; m(ABC) = 90° olduğundan hipotenüs [AC]’dir.',
      },
      {
        title: 'Bağıntıyı yaz',
        detail:
          'Bir dik üçgende 30°’lik açının karşısındaki dik kenar hipotenüsün yarısıdır: |AB| = |AC| / 2 → x + 2 = 3x / 2.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'Her iki tarafı 2 ile çarparsak 2x + 4 = 3x → x = 4 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AC| = 3x = 3 · 4 = 12 cm bulunur. Kontrol: |AB| = x + 2 = 6 ve gerçekten 6 = 12 / 2’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 120
  {
    id: 'triangles-120',
    topic: 'Ortak kenarı olan iki dik üçgende Pisagor',
    figure: {
      viewBox: '0 118 400 214',
      caption: 'Şekil 120',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninin [AB] kenarı, D köşesindeki açısı dik olan ABD üçgeninin de hipotenüsüdür; |AC| = 29 cm, |BC| = 21 cm ve |DB| = 16 cm olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M150,140 L150,300 L318,300 Z"/>
          <path class="ln" d="M150,140 L73.2,197.6 L150,300"/>
          <path class="ln" d="M150,287 L163,287 L163,300"/>
          <path class="ln" d="M83.6,189.8 L91.4,200.2 L81,208"/>

          <circle class="pt" cx="150" cy="140" r="3.2"/>
          <circle class="pt" cx="150" cy="300" r="3.2"/>
          <circle class="pt" cx="318" cy="300" r="3.2"/>
          <circle class="pt" cx="73.2" cy="197.6" r="3.2"/>

          <text class="val" x="249" y="211">29</text>
          <text class="val" x="234" y="322" text-anchor="middle">21</text>
          <text class="val" x="96" y="263" text-anchor="end">16</text>

          <text x="150" y="129" text-anchor="middle">A</text>
          <text x="150" y="322" text-anchor="middle">B</text>
          <text x="326" y="320">C</text>
          <text x="65" y="202" text-anchor="end">D</text>
        `,
    },
    given: ['[AD] ⊥ [DB]', '[AB] ⊥ [BC]', '|AC| = 29 cm', '|BC| = 21 cm', '|DB| = 16 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| kaç cm’dir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '12' },
      { key: 'D', text: '15' },
      { key: 'E', text: '18' },
    ],
    answer: 'C',
    hint: 'İki üçgenin ortak kenarı [AB]’dir: önce onu sağdaki dik üçgenden bul.',
    solution: [
      {
        title: 'Ortak kenarı belirle',
        detail:
          '[AB], ABC dik üçgeninin bir dik kenarı, ABD dik üçgeninin ise hipotenüsüdür. Bu yüzden ilk hesaplanacak uzunluk |AB|’dir.',
      },
      {
        title: 'ABC üçgeninde Pisagor',
        detail:
          '[AB] ⊥ [BC] olduğundan hipotenüs [AC]’dir: |AB|² = |AC|² − |BC|² = 29² − 21² = 841 − 441 = 400 → |AB| = 20 cm.',
      },
      {
        title: 'ABD üçgeninde Pisagor',
        detail:
          '[AD] ⊥ [DB] olduğundan bu üçgende hipotenüs [AB]’dir: |AD|² = |AB|² − |DB|² = 20² − 16² = 400 − 256 = 144.',
      },
      {
        title: 'Sonuç',
        detail: '|AD| = √144 = 12 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 121
  {
    id: 'triangles-121',
    topic: 'Kenarları cebirsel verilen dik üçgende Pisagor',
    figure: {
      viewBox: '0 170 400 164',
      caption: 'Şekil 121',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde dik kenarlar |AB| = 2x ve |AC| = 2x + 7, hipotenüs ise |BC| = 2x + 9 olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M128.47,194.12 L72,300 L327,300 Z"/>
          <path class="ln" d="M122.35,205.59 L133.82,211.71 L139.94,200.24"/>

          <circle class="pt" cx="128.47" cy="194.12" r="3.2"/>
          <circle class="pt" cx="72" cy="300" r="3.2"/>
          <circle class="pt" cx="327" cy="300" r="3.2"/>

          <text class="val" x="90" y="248" text-anchor="end">2x</text>
          <text class="val" x="232" y="246">2x + 7</text>
          <text class="val" x="200" y="322" text-anchor="middle">2x + 9</text>

          <text x="128.47" y="183" text-anchor="middle">A</text>
          <text x="64" y="320" text-anchor="end">B</text>
          <text x="335" y="320">C</text>
        `,
    },
    given: [
      'ABC üçgeninde m(BAC) = 90°',
      '|AB| = 2x cm',
      '|AC| = (2x + 7) cm',
      '|BC| = (2x + 9) cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm’dir?',
    choices: [
      { key: 'A', text: '13' },
      { key: 'B', text: '15' },
      { key: 'C', text: '17' },
      { key: 'D', text: '19' },
      { key: 'E', text: '21' },
    ],
    answer: 'C',
    hint: 'Dik açının karşısındaki kenar hipotenüstür; Pisagor bağıntısını x cinsinden yazıp denklemi çöz.',
    solution: [
      {
        title: 'Hipotenüsü belirle',
        detail:
          'Dik açı A köşesinde olduğundan hipotenüs, A’nın karşısındaki [BC] kenarıdır; [AB] ile [AC] dik kenarlardır.',
      },
      {
        title: 'Pisagor bağıntısını kur',
        detail: '|AB|² + |AC|² = |BC|² → (2x)² + (2x + 7)² = (2x + 9)².',
      },
      {
        title: 'Denklemi düzenle',
        detail: '4x² + (4x² + 28x + 49) = 4x² + 36x + 81 → 4x² − 8x − 32 = 0 → x² − 2x − 8 = 0.',
      },
      {
        title: 'x’i bul',
        detail:
          '(x − 4)(x + 2) = 0 olduğundan x = 4 veya x = −2’dir. Uzunluklar pozitif olmak zorunda olduğundan x = 4 alınır.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenarlar 2·4 = 8, 2·4 + 7 = 15 ve 2·4 + 9 = 17 cm olur; 8² + 15² = 64 + 225 = 289 = 17² olduğundan bağıntı doğrulanır. |BC| = 17 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 122
  {
    id: 'triangles-122',
    topic: 'İki dik açılı dörtgende köşegen',
    figure: {
      viewBox: '0 24 400 272',
      caption: 'Şekil 122',
      label:
        'ABCD dörtgeninde D ve B köşelerindeki açılar diktir; |AD| = 8 cm, |DC| = 6 cm, |BC| = 5 cm ve |AB| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M70,205 L278.12,264.68 L312.57,144.52 L196.22,49.86 Z"/>
          <path class="ln" d="M188.02,59.94 L198.1,68.15 L206.3,58.06"/>
          <path class="ln" d="M281.7,252.18 L269.21,248.6 L265.62,261.1"/>

          <circle class="pt" cx="70" cy="205" r="3.2"/>
          <circle class="pt" cx="278.12" cy="264.68" r="3.2"/>
          <circle class="pt" cx="312.57" cy="144.52" r="3.2"/>
          <circle class="pt" cx="196.22" cy="49.86" r="3.2"/>

          <text class="val" x="120" y="130" text-anchor="end">8</text>
          <text class="val" x="266" y="92">6</text>
          <text class="val" x="318" y="209">5</text>
          <text class="val" x="157" y="251" text-anchor="middle">x</text>

          <text x="62" y="210" text-anchor="end">A</text>
          <text x="286" y="284">B</text>
          <text x="321" y="150">C</text>
          <text x="196.22" y="39" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 24 400 272',
      caption: 'Şekil 122 — yardımcı çizim',
      label:
        'Aynı dörtgende [AC] köşegeni çizilmiştir; bu köşegen hem ADC hem de ABC dik üçgeninin hipotenüsüdür ve uzunluğu 10 cm’dir.',
      svg: `
          <path class="ln" d="M70,205 L278.12,264.68 L312.57,144.52 L196.22,49.86 Z"/>
          <path class="ln" d="M188.02,59.94 L198.1,68.15 L206.3,58.06"/>
          <path class="ln" d="M281.7,252.18 L269.21,248.6 L265.62,261.1"/>

          <path class="aux" d="M70,205 L312.57,144.52"/>

          <circle class="pt" cx="70" cy="205" r="3.2"/>
          <circle class="pt" cx="278.12" cy="264.68" r="3.2"/>
          <circle class="pt" cx="312.57" cy="144.52" r="3.2"/>
          <circle class="pt" cx="196.22" cy="49.86" r="3.2"/>

          <text class="val" x="120" y="130" text-anchor="end">8</text>
          <text class="val" x="266" y="92">6</text>
          <text class="val" x="318" y="209">5</text>
          <text class="val" x="157" y="251" text-anchor="middle">x</text>
          <text class="val" x="187" y="162" text-anchor="middle">10</text>

          <text x="62" y="210" text-anchor="end">A</text>
          <text x="286" y="284">B</text>
          <text x="321" y="150">C</text>
          <text x="196.22" y="39" text-anchor="middle">D</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AD] ⊥ [DC]',
      '[AB] ⊥ [BC]',
      '|AD| = 8 cm',
      '|DC| = 6 cm',
      '|BC| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4√3' },
      { key: 'B', text: '√55' },
      { key: 'C', text: '3√7' },
      { key: 'D', text: '5√3' },
      { key: 'E', text: '3√10' },
    ],
    answer: 'D',
    hint: '[AC] köşegenini çiz: iki dik üçgenin ortak hipotenüsü odur.',
    solution: [
      {
        title: 'Köşegeni çiz',
        detail:
          '[AC] köşegeni dörtgeni ADC ve ABC üçgenlerine ayırır. D ve B köşelerindeki açılar dik olduğundan [AC] her iki üçgenin de hipotenüsüdür.',
      },
      {
        title: 'ADC üçgeninde Pisagor',
        detail: '|AC|² = |AD|² + |DC|² = 8² + 6² = 64 + 36 = 100 → |AC| = 10 cm.',
      },
      {
        title: 'ABC üçgenine geç',
        detail: '|AB|² = |AC|² − |BC|² = 10² − 5² = 100 − 25 = 75.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √75 = √(25 · 3) = 5√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 123
  {
    id: 'triangles-123',
    topic: 'Öklid bağıntısı — hipotenüse ait yükseklik',
    figure: {
      viewBox: '0 164 400 168',
      caption: 'Şekil 123',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüse indirilen yüksekliğin ayağı D’dir; |BD| = 4 cm, |DC| = 16 cm ve |AD| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M116,188 L60,300 L340,300 Z"/>
          <path class="ln" d="M116,188 L116,300"/>
          <path class="ln" d="M110.19,199.63 L121.81,205.44 L127.63,193.81"/>
          <path class="ln" d="M116,287 L129,287 L129,300"/>

          <circle class="pt" cx="116" cy="188" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>
          <circle class="pt" cx="116" cy="300" r="3.2"/>

          <text class="val" x="108" y="250" text-anchor="end">x</text>
          <text class="val" x="88" y="322" text-anchor="middle">4</text>
          <text class="val" x="228" y="322" text-anchor="middle">16</text>

          <text x="116" y="177" text-anchor="middle">A</text>
          <text x="52" y="320" text-anchor="end">B</text>
          <text x="348" y="320">C</text>
          <text x="116" y="322" text-anchor="middle">D</text>
        `,
    },
    given: ['ABC üçgeninde m(BAC) = 90°', '[AD] ⊥ [BC] ve D ∈ [BC]', '|BD| = 4 cm', '|DC| = 16 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '8' },
      { key: 'C', text: '4√5' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'B',
    hint: 'Hipotenüse ait yükseklik, hipotenüsü ayırdığı iki parçanın geometrik ortasıdır.',
    solution: [
      {
        title: 'Yüksekliğin ayırdığı üçgenleri tanı',
        detail:
          '[AD] yüksekliği ABC dik üçgenini ABD ve ADC dik üçgenlerine ayırır. Bu üçgenlerin açıları eşit olduğundan benzerdirler ve buradan Öklid bağıntıları çıkar.',
      },
      {
        title: 'Yükseklik bağıntısını yaz',
        detail: 'Hipotenüse ait yükseklik için |AD|² = |BD| · |DC| bağıntısı geçerlidir.',
      },
      {
        title: 'Sayıları yerleştir',
        detail: 'x² = 4 · 16 = 64.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √64 = 8 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 124
  {
    id: 'triangles-124',
    topic: 'İkizkenar dik üçgende hipotenüse ait kenarortay',
    figure: {
      viewBox: '0 162 400 170',
      caption: 'Şekil 124',
      label:
        'A köşesindeki açısı dik ve |AB| = |AC| olan ABC ikizkenar üçgeninde B, C, D noktaları doğrusaldır; |BC| = 12 cm, |CD| = 2 cm ve A ile D birleştirilerek |AD| = x gösterilmiştir.',
      svg: `
          <path class="ln" d="M169,186 L55,300 L321,300 Z"/>
          <path class="ln" d="M169,186 L283,300"/>
          <path class="ln" d="M159.81,195.19 L169,204.38 L178.19,195.19"/>

          <line class="tick" x1="107.76" y1="238.76" x2="116.24" y2="247.24"/>
          <line class="tick" x1="221.76" y1="247.24" x2="230.24" y2="238.76"/>

          <circle class="pt" cx="169" cy="186" r="3.2"/>
          <circle class="pt" cx="55" cy="300" r="3.2"/>
          <circle class="pt" cx="283" cy="300" r="3.2"/>
          <circle class="pt" cx="321" cy="300" r="3.2"/>

          <text class="val" x="169" y="322" text-anchor="middle">12</text>
          <text class="val" x="305" y="322" text-anchor="middle">2</text>
          <text class="val" x="258" y="234">x</text>

          <text x="169" y="175" text-anchor="middle">A</text>
          <text x="47" y="320" text-anchor="end">B</text>
          <text x="280" y="322" text-anchor="middle">C</text>
          <text x="329" y="320">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 162 400 170',
      caption: 'Şekil 124 — yardımcı çizim',
      label:
        'Aynı şekilde A’dan [BC]’nin orta noktası M’ye kenarortay çizilmiştir; ikizkenar üçgende bu kenarortay aynı zamanda yüksekliktir ve |BM| = |MC| = |AM| = 6 cm’dir.',
      svg: `
          <path class="ln" d="M169,186 L55,300 L321,300 Z"/>
          <path class="ln" d="M169,186 L283,300"/>
          <path class="ln" d="M159.81,195.19 L169,204.38 L178.19,195.19"/>

          <path class="aux" d="M169,186 L169,300"/>
          <path class="aux" d="M169,287 L182,287 L182,300"/>

          <line class="tick" x1="107.76" y1="238.76" x2="116.24" y2="247.24"/>
          <line class="tick" x1="221.76" y1="247.24" x2="230.24" y2="238.76"/>

          <circle class="pt" cx="169" cy="186" r="3.2"/>
          <circle class="pt" cx="55" cy="300" r="3.2"/>
          <circle class="pt" cx="283" cy="300" r="3.2"/>
          <circle class="pt" cx="321" cy="300" r="3.2"/>
          <circle class="pt" cx="169" cy="300" r="3.2"/>

          <text class="val" x="112" y="322" text-anchor="middle">6</text>
          <text class="val" x="226" y="322" text-anchor="middle">6</text>
          <text class="val" x="305" y="322" text-anchor="middle">2</text>
          <text class="val" x="161" y="248" text-anchor="end">6</text>
          <text class="val" x="258" y="234">x</text>

          <text x="169" y="175" text-anchor="middle">A</text>
          <text x="47" y="320" text-anchor="end">B</text>
          <text x="280" y="322" text-anchor="middle">C</text>
          <text x="329" y="320">D</text>
          <text x="169" y="322" text-anchor="middle">M</text>
        `,
    },
    given: [
      'ABC üçgeninde m(BAC) = 90°',
      '|AB| = |AC|',
      'B, C, D doğrusal',
      '|BC| = 12 cm',
      '|CD| = 2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√13' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '3√10' },
      { key: 'D', text: '10' },
      { key: 'E', text: '2√29' },
    ],
    answer: 'D',
    hint: 'A’dan [BC]’ye kenarortay çiz: ikizkenar üçgende bu doğru parçası aynı zamanda yüksekliktir.',
    solution: [
      {
        title: 'Kenarortayı çiz',
        detail:
          '[BC]’nin orta noktası M olsun. |AB| = |AC| olduğundan ABC ikizkenardır ve tabana ait kenarortay [AM] aynı zamanda yüksekliktir: [AM] ⊥ [BC].',
      },
      {
        title: 'Kenarortayın uzunluğunu bul',
        detail:
          'Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısıdır: |AM| = |BC| / 2 = 12 / 2 = 6 cm. Ayrıca |BM| = |MC| = 6 cm’dir.',
      },
      {
        title: '|MD| uzunluğunu yaz',
        detail:
          'B, C, D doğrusal ve D, C’nin ötesinde olduğundan |MD| = |MC| + |CD| = 6 + 2 = 8 cm olur.',
      },
      {
        title: 'AMD dik üçgeninde Pisagor',
        detail: '[AM] ⊥ [MD] olduğundan x² = |AM|² + |MD|² = 6² + 8² = 36 + 64 = 100.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √100 = 10 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 125
  {
    id: 'triangles-125',
    topic: 'Pisagor bağıntısıyla dik üçgenin çevresi',
    figure: {
      viewBox: '0 142 400 190',
      caption: 'Şekil 125',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde |AC| = 12 cm olarak işaretlenmiştir; hipotenüs [BC] ile dik kenar [AB] arasındaki ilişki şeklin yanında verilmiştir.',
      svg: `
          <path class="ln" d="M239.2,165.6 L60,300 L340,300 Z"/>
          <path class="ln" d="M228.8,173.4 L236.6,183.8 L247,176"/>

          <circle class="pt" cx="239.2" cy="165.6" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="340" cy="300" r="3.2"/>

          <text class="val" x="302" y="232">12</text>

          <text x="239.2" y="155" text-anchor="middle">A</text>
          <text x="52" y="320" text-anchor="end">B</text>
          <text x="348" y="320">C</text>
        `,
    },
    given: ['ABC üçgeninde [BA] ⊥ [AC]', '|AC| = 12 cm', '|BC| = |AB| + 4'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABC üçgeninin çevresi kaç cm’dir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '40' },
      { key: 'C', text: '42' },
      { key: 'D', text: '44' },
      { key: 'E', text: '48' },
    ],
    answer: 'E',
    hint: 'Bilinmeyen dik kenara bir harf ver; Pisagor bağıntısında kareler sadeleşince geriye birinci dereceden bir denklem kalır.',
    solution: [
      {
        title: 'Bilinmeyeni adlandır',
        detail: '|AB| = a diyelim. [BA] ⊥ [AC] olduğundan hipotenüs [BC]’dir ve |BC| = a + 4 olur.',
      },
      {
        title: 'Pisagor bağıntısını kur',
        detail: '|AB|² + |AC|² = |BC|² → a² + 12² = (a + 4)².',
      },
      {
        title: 'Denklemi çöz',
        detail:
          'a² + 144 = a² + 8a + 16 → 144 − 16 = 8a → 8a = 128 → a = 16 cm. Buradan |BC| = 16 + 4 = 20 cm olur.',
      },
      {
        title: 'Kenarları doğrula',
        detail: '16² + 12² = 256 + 144 = 400 = 20² olduğundan üçgen gerçekten diktir.',
      },
      {
        title: 'Sonuç',
        detail: 'Çevre |AB| + |AC| + |BC| = 16 + 12 + 20 = 48 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 126
  {
    id: 'triangles-126',
    topic: 'Yüksekliğin ayırdığı iki dik üçgende Pisagor',
    figure: {
      viewBox: '0 176 400 156',
      caption: 'Şekil 126',
      label:
        'ABC üçgeninde A’dan [BC] kenarına inen yüksekliğin ayağı H’dir; |AB| = 10 cm, |BH| = 6 cm, |HC| = 15 cm ve |AC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M130,200 L55,300 L317.5,300 Z"/>
          <path class="ln" d="M130,200 L130,300"/>
          <path class="ln" d="M130,287 L143,287 L143,300"/>

          <circle class="pt" cx="130" cy="200" r="3.2"/>
          <circle class="pt" cx="55" cy="300" r="3.2"/>
          <circle class="pt" cx="317.5" cy="300" r="3.2"/>
          <circle class="pt" cx="130" cy="300" r="3.2"/>

          <text class="val" x="82" y="251" text-anchor="end">10</text>
          <text class="val" x="236" y="250">x</text>
          <text class="val" x="92" y="322" text-anchor="middle">6</text>
          <text class="val" x="224" y="322" text-anchor="middle">15</text>

          <text x="130" y="189" text-anchor="middle">A</text>
          <text x="47" y="320" text-anchor="end">B</text>
          <text x="325" y="320">C</text>
          <text x="130" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve H ∈ [BC]',
      '|AB| = 10 cm',
      '|BH| = 6 cm',
      '|HC| = 15 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '17' },
      { key: 'B', text: '18' },
      { key: 'C', text: '19' },
      { key: 'D', text: '20' },
      { key: 'E', text: '21' },
    ],
    answer: 'A',
    hint: 'Yükseklik üçgeni iki dik üçgene ayırır; iki üçgenin ortak kenarı olan |AH|’yi soldakinden bul.',
    solution: [
      {
        title: 'Şekli iki dik üçgene ayır',
        detail:
          '[AH] ⊥ [BC] olduğundan hem ABH hem de AHC üçgeni H köşesinde diktir; [AH] ikisinin ortak dik kenarıdır.',
      },
      {
        title: 'Yüksekliği bul',
        detail: 'ABH üçgeninde |AH|² = |AB|² − |BH|² = 10² − 6² = 100 − 36 = 64 → |AH| = 8 cm.',
      },
      {
        title: 'Sağdaki üçgene geç',
        detail: 'AHC üçgeninde x² = |AH|² + |HC|² = 8² + 15² = 64 + 225 = 289.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √289 = 17 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 127
  {
    id: 'triangles-127',
    topic: 'Kenarları cebirsel verilen dik üçgende Pisagor',
    figure: {
      viewBox: '0 80 400 252',
      caption: 'Şekil 127',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde dik kenarlar |AB| = x + 2 ve |AC| = x − 3, hipotenüs ise |BC| = x + 7 olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M60,105 L60,300 L320,300 Z"/>
          <path class="ln" d="M73,300 L73,287 L60,287"/>

          <circle class="pt" cx="60" cy="105" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="320" cy="300" r="3.2"/>

          <text class="val" x="52" y="208" text-anchor="end">x − 3</text>
          <text class="val" x="190" y="322" text-anchor="middle">x + 2</text>
          <text class="val" x="206" y="192">x + 7</text>

          <text x="52" y="320" text-anchor="end">A</text>
          <text x="328" y="320">B</text>
          <text x="60" y="94" text-anchor="middle">C</text>
        `,
    },
    given: [
      'ABC üçgeninde m(BAC) = 90°',
      '|AB| = (x + 2) cm',
      '|AC| = (x − 3) cm',
      '|BC| = (x + 7) cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm’dir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '22' },
      { key: 'C', text: '24' },
      { key: 'D', text: '25' },
      { key: 'E', text: '30' },
    ],
    answer: 'D',
    hint: 'Hipotenüs en uzun kenardır; Pisagor bağıntısını kurup x’in ikinci dereceden denklemini çöz.',
    solution: [
      {
        title: 'Pisagor bağıntısını kur',
        detail: 'Dik açı A’da olduğundan hipotenüs [BC]’dir: (x + 2)² + (x − 3)² = (x + 7)².',
      },
      {
        title: 'Kareleri aç',
        detail: '(x² + 4x + 4) + (x² − 6x + 9) = x² + 14x + 49 → 2x² − 2x + 13 = x² + 14x + 49.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'x² − 16x − 36 = 0 → (x − 18)(x + 2) = 0 → x = 18 veya x = −2.',
      },
      {
        title: 'Geçerli kökü seç',
        detail:
          'x = −2 için kenarlar negatif çıkardı, bu yüzden x = 18’dir. Kenarlar 20, 15 ve 25 cm olur; 15² + 20² = 225 + 400 = 625 = 25² bağıntıyı doğrular.',
      },
      {
        title: 'Sonuç',
        detail: '|BC| = x + 7 = 18 + 7 = 25 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 128
  {
    id: 'triangles-128',
    topic: 'İki dik açılı dörtgende ortak köşegen',
    figure: {
      viewBox: '0 74 400 248',
      caption: 'Şekil 128',
      label:
        'ABCD dörtgeninde B ve D köşelerindeki açılar diktir; |AD| = 7 cm, |DC| = 24 cm, |BC| = 20 cm ve |AB| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M60,215 L176.41,98.06 L332.32,253.27 L71.06,291.2 Z"/>
          <path class="ln" d="M167.24,107.27 L176.45,116.44 L185.62,107.23"/>
          <path class="ln" d="M83.93,289.33 L82.06,276.47 L69.19,278.33"/>

          <circle class="pt" cx="60" cy="215" r="3.2"/>
          <circle class="pt" cx="176.41" cy="98.06" r="3.2"/>
          <circle class="pt" cx="332.32" cy="253.27" r="3.2"/>
          <circle class="pt" cx="71.06" cy="291.2" r="3.2"/>

          <text class="val" x="106" y="153" text-anchor="end">x</text>
          <text class="val" x="268" y="177">20</text>
          <text class="val" x="220" y="286" text-anchor="middle">24</text>
          <text class="val" x="52" y="258" text-anchor="end">7</text>

          <text x="52" y="220" text-anchor="end">A</text>
          <text x="176.41" y="88" text-anchor="middle">B</text>
          <text x="340" y="258">C</text>
          <text x="66" y="311" text-anchor="end">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 74 400 248',
      caption: 'Şekil 128 — yardımcı çizim',
      label:
        'Aynı dörtgende [AC] köşegeni çizilmiştir; bu köşegen hem ABC hem de ADC dik üçgeninin hipotenüsüdür ve uzunluğu 25 cm’dir.',
      svg: `
          <path class="ln" d="M60,215 L176.41,98.06 L332.32,253.27 L71.06,291.2 Z"/>
          <path class="ln" d="M167.24,107.27 L176.45,116.44 L185.62,107.23"/>
          <path class="ln" d="M83.93,289.33 L82.06,276.47 L69.19,278.33"/>

          <path class="aux" d="M60,215 L332.32,253.27"/>

          <circle class="pt" cx="60" cy="215" r="3.2"/>
          <circle class="pt" cx="176.41" cy="98.06" r="3.2"/>
          <circle class="pt" cx="332.32" cy="253.27" r="3.2"/>
          <circle class="pt" cx="71.06" cy="291.2" r="3.2"/>

          <text class="val" x="106" y="153" text-anchor="end">x</text>
          <text class="val" x="268" y="177">20</text>
          <text class="val" x="220" y="286" text-anchor="middle">24</text>
          <text class="val" x="52" y="258" text-anchor="end">7</text>
          <text class="val" x="194" y="256" text-anchor="middle">25</text>

          <text x="52" y="220" text-anchor="end">A</text>
          <text x="176.41" y="88" text-anchor="middle">B</text>
          <text x="340" y="258">C</text>
          <text x="66" y="311" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AB] ⊥ [BC]',
      '[AD] ⊥ [DC]',
      '|AD| = 7 cm',
      '|DC| = 24 cm',
      '|BC| = 20 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '13' },
      { key: 'C', text: '15' },
      { key: 'D', text: '16' },
      { key: 'E', text: '18' },
    ],
    answer: 'C',
    hint: 'İki dik açı da [AC] köşegenini görür; önce o köşegeni ADC üçgeninden bul.',
    solution: [
      {
        title: 'Ortak hipotenüsü belirle',
        detail:
          '[AC] köşegeni çizildiğinde dörtgen ADC ve ABC üçgenlerine ayrılır. D ve B köşelerindeki açılar dik olduğundan [AC] ikisinin de hipotenüsüdür.',
      },
      {
        title: 'ADC üçgeninde Pisagor',
        detail: '|AC|² = |AD|² + |DC|² = 7² + 24² = 49 + 576 = 625 → |AC| = 25 cm.',
      },
      {
        title: 'ABC üçgenine geç',
        detail: 'x² = |AC|² − |BC|² = 25² − 20² = 625 − 400 = 225.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √225 = 15 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 129
  {
    id: 'triangles-129',
    topic: 'Öklid bağıntısı — dik kenarın karesi',
    figure: {
      viewBox: '0 165 400 167',
      caption: 'Şekil 129',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüse indirilen yüksekliğin ayağı H’dir; |BH| = 4 cm, |HC| = 12 cm ve |AB| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M124,189.15 L60,300 L316,300 Z"/>
          <path class="ln" d="M124,189.15 L124,300"/>
          <path class="ln" d="M117.5,200.41 L128.76,206.91 L135.26,195.65"/>
          <path class="ln" d="M124,287 L137,287 L137,300"/>

          <circle class="pt" cx="124" cy="189.15" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="316" cy="300" r="3.2"/>
          <circle class="pt" cx="124" cy="300" r="3.2"/>

          <text class="val" x="82" y="245" text-anchor="end">x</text>
          <text class="val" x="92" y="322" text-anchor="middle">4</text>
          <text class="val" x="220" y="322" text-anchor="middle">12</text>

          <text x="124" y="178" text-anchor="middle">A</text>
          <text x="52" y="320" text-anchor="end">B</text>
          <text x="324" y="320">C</text>
          <text x="124" y="322" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC üçgeninde m(BAC) = 90°', '[AH] ⊥ [BC] ve H ∈ [BC]', '|BH| = 4 cm', '|HC| = 12 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '9' },
      { key: 'D', text: '4√6' },
      { key: 'E', text: '10' },
    ],
    answer: 'A',
    hint: 'Bir dik kenarın karesi, o kenara komşu hipotenüs parçası ile hipotenüsün çarpımına eşittir.',
    solution: [
      {
        title: 'Hipotenüsü yaz',
        detail: 'H, [BC] üzerinde olduğundan |BC| = |BH| + |HC| = 4 + 12 = 16 cm olur.',
      },
      {
        title: 'Öklid bağıntısını seç',
        detail:
          '[AB] dik kenarına komşu hipotenüs parçası [BH]’dir; dik kenar bağıntısı |AB|² = |BH| · |BC| biçimindedir.',
      },
      {
        title: 'Sayıları yerleştir',
        detail: 'x² = 4 · 16 = 64.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = √64 = 8 cm bulunur. (Kontrol: |AC|² = 12 · 16 = 192 ve 64 + 192 = 256 = 16² olduğundan Pisagor bağıntısı sağlanır.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 130
  {
    id: 'triangles-130',
    topic: 'İkizkenar dik üçgende hipotenüs üzerindeki nokta',
    figure: {
      viewBox: '0 146 400 186',
      caption: 'Şekil 130',
      label:
        'A köşesindeki açısı dik ve |AB| = |AC| olan ABC ikizkenar üçgeninde hipotenüs üzerindeki D noktası A ile birleştirilmiştir; |BD| = 8 cm, |DC| = 2 cm ve |AD| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,170 L70,300 L330,300 Z"/>
          <path class="ln" d="M200,170 L278,300"/>
          <path class="ln" d="M190.81,179.19 L200,188.38 L209.19,179.19"/>

          <line class="tick" x1="130.76" y1="230.76" x2="139.24" y2="239.24"/>
          <line class="tick" x1="260.76" y1="239.24" x2="269.24" y2="230.76"/>

          <circle class="pt" cx="200" cy="170" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="278" cy="300" r="3.2"/>

          <text class="val" x="170" y="322" text-anchor="middle">8</text>
          <text class="val" x="306" y="322" text-anchor="middle">2</text>
          <text class="val" x="220" y="248" text-anchor="middle">x</text>

          <text x="200" y="159" text-anchor="middle">A</text>
          <text x="62" y="320" text-anchor="end">B</text>
          <text x="338" y="320">C</text>
          <text x="274" y="322" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 146 400 186',
      caption: 'Şekil 130 — yardımcı çizim',
      label:
        'Aynı şekilde A’dan [BC]’nin orta noktası M’ye kenarortay çizilmiştir; ikizkenar üçgende bu kenarortay aynı zamanda yüksekliktir ve |AM| = |BM| = |MC| = 5 cm’dir.',
      svg: `
          <path class="ln" d="M200,170 L70,300 L330,300 Z"/>
          <path class="ln" d="M200,170 L278,300"/>
          <path class="ln" d="M190.81,179.19 L200,188.38 L209.19,179.19"/>

          <path class="aux" d="M200,170 L200,300"/>
          <path class="aux" d="M200,287 L213,287 L213,300"/>

          <line class="tick" x1="130.76" y1="230.76" x2="139.24" y2="239.24"/>
          <line class="tick" x1="260.76" y1="239.24" x2="269.24" y2="230.76"/>

          <circle class="pt" cx="200" cy="170" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="330" cy="300" r="3.2"/>
          <circle class="pt" cx="278" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text class="val" x="132" y="322" text-anchor="middle">5</text>
          <text class="val" x="240" y="322" text-anchor="middle">3</text>
          <text class="val" x="306" y="322" text-anchor="middle">2</text>
          <text class="val" x="192" y="240" text-anchor="end">5</text>
          <text class="val" x="220" y="248" text-anchor="middle">x</text>

          <text x="200" y="159" text-anchor="middle">A</text>
          <text x="62" y="320" text-anchor="end">B</text>
          <text x="338" y="320">C</text>
          <text x="274" y="322" text-anchor="middle">D</text>
          <text x="200" y="322" text-anchor="middle">M</text>
        `,
    },
    given: ['ABC üçgeninde m(BAC) = 90°', '|AB| = |AC|', 'D ∈ [BC]', '|BD| = 8 cm', '|DC| = 2 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√26' },
      { key: 'B', text: '2√7' },
      { key: 'C', text: '√34' },
      { key: 'D', text: '6' },
      { key: 'E', text: '2√10' },
    ],
    answer: 'C',
    hint: 'A’dan hipotenüsün orta noktasına çizilen doğru parçası hem kenarortay hem yüksekliktir; onu çizince dik üçgen ortaya çıkar.',
    solution: [
      {
        title: 'Hipotenüsü ve orta noktayı bul',
        detail:
          '|BC| = |BD| + |DC| = 8 + 2 = 10 cm’dir. [BC]’nin orta noktası M olsun; |BM| = |MC| = 5 cm olur.',
      },
      {
        title: 'Kenarortayı çiz',
        detail:
          '|AB| = |AC| olduğundan tabana ait kenarortay [AM] aynı zamanda yüksekliktir: [AM] ⊥ [BC]. Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısı olduğundan |AM| = 10 / 2 = 5 cm’dir.',
      },
      {
        title: '|MD| uzunluğunu yaz',
        detail: 'D, B’den 8 cm uzakta olduğundan |MD| = |BD| − |BM| = 8 − 5 = 3 cm olur.',
      },
      {
        title: 'AMD dik üçgeninde Pisagor',
        detail: 'x² = |AM|² + |MD|² = 5² + 3² = 25 + 9 = 34.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √34 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 131
  {
    id: 'triangles-131',
    topic: 'Yükseklikle ayrılan iki dik üçgende taban uzunluğu',
    figure: {
      viewBox: '0 60 400 272',
      caption: 'Şekil 131',
      label:
        'ABC üçgeninde A’dan [BC] kenarına inen yüksekliğin ayağı H’dir; |AB| = 15 cm, |AC| = 13 cm ve |AH| = 12 cm olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M237,84 L75,300 L327,300 Z"/>
          <path class="ln" d="M237,84 L237,300"/>
          <path class="ln" d="M237,287 L250,287 L250,300"/>

          <circle class="pt" cx="237" cy="84" r="3.2"/>
          <circle class="pt" cx="75" cy="300" r="3.2"/>
          <circle class="pt" cx="327" cy="300" r="3.2"/>
          <circle class="pt" cx="237" cy="300" r="3.2"/>

          <text class="val" x="146" y="186" text-anchor="end">15</text>
          <text class="val" x="294" y="188">13</text>
          <text class="val" x="245" y="196">12</text>

          <text x="237" y="73" text-anchor="middle">A</text>
          <text x="67" y="320" text-anchor="end">B</text>
          <text x="335" y="320">C</text>
          <text x="237" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[AH] ⊥ [BC] ve H ∈ [BC]',
      '|AB| = 15 cm',
      '|AC| = 13 cm',
      '|AH| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm’dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '11' },
      { key: 'C', text: '12' },
      { key: 'D', text: '13' },
      { key: 'E', text: '14' },
    ],
    answer: 'E',
    hint: 'Yükseklik tabanı iki parçaya ayırır; her parçayı kendi dik üçgeninde Pisagor ile bul, sonra topla.',
    solution: [
      {
        title: 'Şekli iki dik üçgene ayır',
        detail:
          '[AH] ⊥ [BC] olduğundan ABH ve AHC üçgenleri H köşesinde diktir; ikisinin de bir dik kenarı |AH| = 12 cm’dir.',
      },
      {
        title: 'Soldaki parçayı bul',
        detail: 'ABH üçgeninde |BH|² = |AB|² − |AH|² = 15² − 12² = 225 − 144 = 81 → |BH| = 9 cm.',
      },
      {
        title: 'Sağdaki parçayı bul',
        detail: 'AHC üçgeninde |HC|² = |AC|² − |AH|² = 13² − 12² = 169 − 144 = 25 → |HC| = 5 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'H, [BC] üzerinde olduğundan |BC| = |BH| + |HC| = 9 + 5 = 14 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 132
  {
    id: 'triangles-132',
    topic: 'Hipotenüsü dik kenara bağlı verilen dik üçgen',
    stem: [
      'Bir dik üçgenin dik kenarlarından birinin uzunluğu 9 cm’dir. Bu üçgenin hipotenüsü, diğer dik kenardan 1 cm daha uzundur.',
    ],
    ask: 'Buna göre, bu dik üçgenin çevresi kaç cm’dir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '84' },
      { key: 'C', text: '88' },
      { key: 'D', text: '90' },
      { key: 'E', text: '96' },
    ],
    answer: 'D',
    hint: 'Diğer dik kenara a de; Pisagor bağıntısında a² terimleri sadeleşir.',
    solution: [
      {
        title: 'Bilinmeyeni adlandır',
        detail:
          'Uzunluğu bilinmeyen dik kenara a diyelim. Hipotenüs bu kenardan 1 cm uzun olduğundan hipotenüs a + 1 olur.',
      },
      {
        title: 'Pisagor bağıntısını kur',
        detail: 'Dik kenarların kareleri toplamı hipotenüsün karesine eşittir: 9² + a² = (a + 1)².',
      },
      {
        title: 'Denklemi çöz',
        detail: '81 + a² = a² + 2a + 1 → 81 − 1 = 2a → 2a = 80 → a = 40 cm.',
      },
      {
        title: 'Kenarları doğrula',
        detail:
          'Kenarlar 9, 40 ve 41 cm’dir; 9² + 40² = 81 + 1600 = 1681 = 41² olduğundan üçgen gerçekten diktir.',
      },
      {
        title: 'Sonuç',
        detail: 'Çevre 9 + 40 + 41 = 90 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 133
  {
    id: 'triangles-133',
    topic: 'Öklid bağıntısı — dik kenar ve izdüşümü',
    figure: {
      viewBox: '0 124 400 206',
      caption: 'Şekil 133',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den hipotenüse [BH] yüksekliği indirilmiştir; |AB| = 6 cm, |AH| = 3 cm ve |BC| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M60,150 L60,300 L319.8,300 Z"/>
          <path class="ln" d="M60,300 L124.95,187.5"/>
          <path class="ln" d="M73,300 L73,287 L60,287"/>
          <path class="ln" d="M114.55,181.5 L108.55,191.9 L118.95,197.9"/>

          <circle class="pt" cx="60" cy="150" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="319.8" cy="300" r="3.2"/>
          <circle class="pt" cx="124.95" cy="187.5" r="3.2"/>

          <text class="val" x="52" y="230" text-anchor="end">6</text>
          <text class="val" x="100" y="155" text-anchor="middle">3</text>
          <text class="val" x="190" y="322" text-anchor="middle">x</text>

          <text x="60" y="140" text-anchor="middle">A</text>
          <text x="52" y="320" text-anchor="end">B</text>
          <text x="328" y="320">C</text>
          <text x="133" y="180">H</text>
        `,
    },
    given: ['ABC bir dik üçgen', '[AB] ⊥ [BC]', '[BH] ⊥ [AC]', '|AB| = 6 cm', '|AH| = 3 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4√3' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '6√3' },
      { key: 'D', text: '9' },
      { key: 'E', text: '12' },
    ],
    answer: 'C',
    hint: 'Bir dik kenarın karesi, o kenarın hipotenüs üzerindeki izdüşümü ile hipotenüsün çarpımına eşittir.',
    solution: [
      {
        title: 'Öklid bağıntısını kur',
        detail:
          '[BH] hipotenüse ait yükseklik olduğundan |AB|² = |AH| · |AC| yazılır: 6² = 3 · |AC| → 36 = 3 · |AC|.',
      },
      {
        title: 'Hipotenüsü bul',
        detail: '|AC| = 36 / 3 = 12 cm.',
      },
      {
        title: 'Pisagor bağıntısına geç',
        detail: 'ABC dik üçgeninde x² = |AC|² − |AB|² = 12² − 6² = 144 − 36 = 108.',
      },
      {
        title: 'Öklid ile doğrula',
        detail:
          '|HC| = 12 − 3 = 9 cm olduğundan |BC|² = |HC| · |AC| = 9 · 12 = 108 çıkar; iki yol da aynı değeri verir.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √108 = √(36 · 3) = 6√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 134
  {
    id: 'triangles-134',
    topic: 'İç içe iki dik üçgende Pisagor',
    figure: {
      viewBox: '0 156 400 176',
      caption: 'Şekil 134',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninin içinde, [AD] ⊥ [BD] olacak biçimde bir D noktası alınmıştır; |AC| = 13 cm, |BC| = 12 cm, |AD| = 4 cm ve |BD| = x olarak gösterilmiştir.',
      svg: `
          <path class="ln" d="M60,180 L60,300 L348,300 Z"/>
          <path class="ln" d="M60,180 L117.6,256.8 L60,300"/>
          <path class="ln" d="M73,300 L73,287 L60,287"/>
          <path class="ln" d="M110.4,247.2 L100.8,254.4 L108,264"/>

          <circle class="pt" cx="60" cy="180" r="3.2"/>
          <circle class="pt" cx="60" cy="300" r="3.2"/>
          <circle class="pt" cx="348" cy="300" r="3.2"/>
          <circle class="pt" cx="117.6" cy="256.8" r="3.2"/>

          <text class="val" x="78" y="230" text-anchor="middle">4</text>
          <text class="val" x="210" y="225" text-anchor="middle">13</text>
          <text class="val" x="204" y="322" text-anchor="middle">12</text>
          <text class="val" x="100" y="292" text-anchor="middle">x</text>

          <text x="60" y="170" text-anchor="middle">A</text>
          <text x="52" y="320" text-anchor="end">B</text>
          <text x="356" y="320">C</text>
          <text x="124" y="248">D</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      '[AD] ⊥ [BD]',
      '|AC| = 13 cm',
      '|BC| = 12 cm',
      '|AD| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '√5' },
      { key: 'D', text: '2√2' },
      { key: 'E', text: '4' },
    ],
    answer: 'B',
    hint: 'Önce ABC üçgeninden |AB|’yi bul; [AD] ⊥ [BD] olduğundan ABD de bir dik üçgendir ve hipotenüsü [AB]’dir.',
    solution: [
      {
        title: 'ABC üçgeninde Pisagor',
        detail:
          'Dik açı B’de olduğundan hipotenüs [AC]’dir: |AB|² = |AC|² − |BC|² = 13² − 12² = 169 − 144 = 25.',
      },
      {
        title: 'Ortak kenarı bul',
        detail: '|AB| = √25 = 5 cm; bu kenar iki üçgenin de ortak kenarıdır.',
      },
      {
        title: 'ABD üçgenine geç',
        detail:
          'D köşesindeki açı dik olduğundan ABD üçgeninin hipotenüsü [AB]’dir: x² = |AB|² − |AD|² = 5² − 4² = 25 − 16 = 9.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √9 = 3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 135
  {
    id: 'triangles-135',
    topic: 'Dik kenarı bölen doğru parçasıyla iki Pisagor',
    figure: {
      viewBox: '0 84 400 246',
      caption: 'Şekil 135',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde [BC] kenarı üzerinde bir D noktası alınıp A ile birleştirilmiştir; |AB| = 12 cm, |AD| = 13 cm ve |DC| = 11 cm’dir.',
      svg: `
          <path class="ln" d="M70,108 L70,300 L326,300 Z"/>
          <path class="ln" d="M70,108 L150,300"/>
          <path class="ln" d="M83,300 L83,287 L70,287"/>

          <circle class="pt" cx="70" cy="108" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="150" cy="300" r="3.2"/>
          <circle class="pt" cx="326" cy="300" r="3.2"/>

          <text class="val" x="62" y="210" text-anchor="end">12</text>
          <text class="val" x="125" y="198" text-anchor="middle">13</text>
          <text class="val" x="238" y="322" text-anchor="middle">11</text>

          <text x="70" y="98" text-anchor="middle">A</text>
          <text x="62" y="320" text-anchor="end">B</text>
          <text x="150" y="322" text-anchor="middle">D</text>
          <text x="334" y="320">C</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'D noktası [BC] üzerindedir',
      '|AB| = 12 cm',
      '|AD| = 13 cm',
      '|DC| = 11 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| − |BD| farkı kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '13' },
      { key: 'C', text: '14' },
      { key: 'D', text: '15' },
      { key: 'E', text: '16' },
    ],
    answer: 'D',
    hint: 'ABD ve ABC üçgenlerinin ikisi de B’deki dik açıyı paylaşır; önce ABD üçgeninden |BD|’yi bul.',
    solution: [
      {
        title: 'ABD üçgeninde Pisagor',
        detail:
          'B köşesindeki açı dik olduğundan |BD|² = |AD|² − |AB|² = 13² − 12² = 169 − 144 = 25 → |BD| = 5 cm.',
      },
      {
        title: 'Dik kenarın tamamını yaz',
        detail: 'D noktası [BC] üzerinde olduğundan |BC| = |BD| + |DC| = 5 + 11 = 16 cm.',
      },
      {
        title: 'ABC üçgeninde Pisagor',
        detail: '|AC|² = |AB|² + |BC|² = 12² + 16² = 144 + 256 = 400 → |AC| = 20 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|AC| − |BD| = 20 − 5 = 15 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 136
  {
    id: 'triangles-136',
    topic: 'Dik üçgende açıortay ve ikizkenar üçgen',
    figure: {
      viewBox: '0 136 400 194',
      caption: 'Şekil 136',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde A açısının açıortayı [BC] kenarını D noktasında kesmektedir; |AD| = |DC| = 6 cm olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M75,159.7 L75,300 L318,300 Z"/>
          <path class="ln" d="M75,159.7 L156,300"/>
          <path class="ln" d="M88,300 L88,287 L75,287"/>

          <path class="arc" d="M75,189.7 A30,30 0 0 0 90,185.7"/>
          <path class="arc" d="M98,199.5 A46,46 0 0 0 114.8,182.7"/>

          <line class="tick" x1="109.4" y1="233.4" x2="121.6" y2="226.4"/>
          <line class="tick" x1="237" y1="293" x2="237" y2="307"/>

          <circle class="pt" cx="75" cy="159.7" r="3.2"/>
          <circle class="pt" cx="75" cy="300" r="3.2"/>
          <circle class="pt" cx="156" cy="300" r="3.2"/>
          <circle class="pt" cx="318" cy="300" r="3.2"/>

          <text class="val" x="98" y="246" text-anchor="middle">6</text>
          <text class="val" x="237" y="322" text-anchor="middle">6</text>

          <text x="75" y="149" text-anchor="middle">A</text>
          <text x="67" y="320" text-anchor="end">B</text>
          <text x="156" y="322" text-anchor="middle">D</text>
          <text x="326" y="320">C</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      '[AD] açıortay',
      'D noktası [BC] üzerindedir',
      '|AD| = |DC| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| kaç cm’dir?',
    choices: [
      { key: 'A', text: '3√3' },
      { key: 'B', text: '8' },
      { key: 'C', text: '6√3' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'D',
    hint: '|AD| = |DC| eşitliği ADC üçgenini ikizkenar yapar; buradan A ve C açıları arasında bir bağıntı çıkar.',
    solution: [
      {
        title: 'İkizkenar üçgeni kullan',
        detail:
          '|AD| = |DC| olduğundan ADC ikizkenar üçgendir ve taban açıları eşittir: m(DAC) = m(DCA). Bu ortak değere C diyelim.',
      },
      {
        title: 'Açıortayı kullan',
        detail: '[AD] açıortay olduğundan m(BAD) = m(DAC) = C, yani m(BAC) = 2C olur.',
      },
      {
        title: 'Dik üçgenin dar açıları',
        detail: 'ABC dik üçgeninde dar açıların toplamı 90°’dir: 2C + C = 90 → 3C = 90 → C = 30°.',
      },
      {
        title: '30° − 60° − 90° üçgeni',
        detail:
          'ABD üçgeninde m(BAD) = 30° ve B’deki açı diktir; 30°’nin karşısındaki dik kenar hipotenüsün yarısıdır: |BD| = |AD| / 2 = 6 / 2 = 3 cm.',
      },
      {
        title: 'Sonuç',
        detail: '|BC| = |BD| + |DC| = 3 + 6 = 9 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 137
  {
    id: 'triangles-137',
    topic: 'Hipotenüse ait kenarortay ve cebirsel kenarlar',
    figure: {
      viewBox: '0 68 400 262',
      caption: 'Şekil 137',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde hipotenüsün orta noktası D, B ile birleştirilmiştir; |AD| = |DC| eşit çizgilerle gösterilmiş, |AB| = 8 cm, |BD| = x ve |BC| = 2x − 4 olarak yazılmıştır.',
      svg: `
          <path class="ln" d="M120,92 L120,300 L276,300 Z"/>
          <path class="ln" d="M120,300 L198,196"/>
          <path class="ln" d="M133,300 L133,287 L120,287"/>

          <line class="tick" x1="153.4" y1="148.2" x2="164.6" y2="139.8"/>
          <line class="tick" x1="231.4" y1="252.2" x2="242.6" y2="243.8"/>

          <circle class="pt" cx="120" cy="92" r="3.2"/>
          <circle class="pt" cx="120" cy="300" r="3.2"/>
          <circle class="pt" cx="276" cy="300" r="3.2"/>
          <circle class="pt" cx="198" cy="196" r="3.2"/>

          <text class="val" x="112" y="202" text-anchor="end">8</text>
          <text class="val" x="146" y="242" text-anchor="middle">x</text>
          <text class="val" x="198" y="322" text-anchor="middle">2x − 4</text>

          <text x="120" y="82" text-anchor="middle">A</text>
          <text x="112" y="320" text-anchor="end">B</text>
          <text x="284" y="320">C</text>
          <text x="210" y="188">D</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      '|AD| = |DC|',
      '|AB| = 8 cm',
      '|BD| = x cm',
      '|BC| = (2x − 4) cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| kaç cm’dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '7/2' },
      { key: 'C', text: '4' },
      { key: 'D', text: '9/2' },
      { key: 'E', text: '5' },
    ],
    answer: 'E',
    hint: 'Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısına eşittir; |AC|’yi x cinsinden yaz.',
    solution: [
      {
        title: 'Kenarortayı tanı',
        detail:
          '|AD| = |DC| olduğundan D, hipotenüs [AC]’nin orta noktasıdır ve [BD] hipotenüse ait kenarortaydır.',
      },
      {
        title: 'Hipotenüsü x cinsinden yaz',
        detail: '|BD| = |AC| / 2 olduğundan |AC| = 2 · x = 2x cm olur.',
      },
      {
        title: 'Pisagor bağıntısını kur',
        detail: '|AB|² + |BC|² = |AC|² → 8² + (2x − 4)² = (2x)².',
      },
      {
        title: 'Denklemi çöz',
        detail: '64 + 4x² − 16x + 16 = 4x² → 80 = 16x → x = 5.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenarlar |AB| = 8, |BC| = 2 · 5 − 4 = 6 ve |AC| = 10 cm olur; 8² + 6² = 100 = 10² bağıntıyı doğrular. |BD| = 5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 138
  {
    id: 'triangles-138',
    topic: 'Çevresi verilen dik üçgende dik kenar',
    stem: [
      'Çevresinin uzunluğu 40 cm olan bir ABC dik üçgeninin dik kenarlarından birinin uzunluğu 15 cm’dir.',
    ],
    ask: 'Buna göre, diğer dik kenarın uzunluğu kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '15/2' },
      { key: 'C', text: '8' },
      { key: 'D', text: '17/2' },
      { key: 'E', text: '10' },
    ],
    answer: 'C',
    hint: 'Diğer dik kenara a dersen hipotenüs 25 − a olur; Pisagor bağıntısında a² terimleri sadeleşir.',
    solution: [
      {
        title: 'Bilinmeyenleri adlandır',
        detail:
          'Diğer dik kenar a, hipotenüs c olsun. Çevre 40 cm olduğundan 15 + a + c = 40 → c = 25 − a yazılır.',
      },
      {
        title: 'Pisagor bağıntısını kur',
        detail:
          'Dik kenarların kareleri toplamı hipotenüsün karesine eşittir: 15² + a² = (25 − a)².',
      },
      {
        title: 'Denklemi çöz',
        detail: '225 + a² = 625 − 50a + a² → 50a = 625 − 225 = 400 → a = 8 cm.',
      },
      {
        title: 'Kenarları doğrula',
        detail:
          'Kenarlar 8, 15 ve 17 cm’dir; 8² + 15² = 64 + 225 = 289 = 17² ve çevre 8 + 15 + 17 = 40 cm çıkar.',
      },
      {
        title: 'Sonuç',
        detail: 'Diğer dik kenarın uzunluğu 8 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 139
  {
    id: 'triangles-139',
    topic: 'Öklid bağıntısı ve 30° − 60° − 90° üçgeni',
    figure: {
      viewBox: '0 20 400 290',
      caption: 'Şekil 139',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den hipotenüs [AC] üzerine inen dikmenin ayağı H’dir; |AB| = 8 cm, |HC| = 12 cm ve C köşesindeki açı α ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M34,58 L34,250 L366,250 Z"/>
          <path class="ln" d="M34,250 L117,106"/>
          <path class="ln" d="M34,237 L47,237 L47,250"/>
          <path class="ln" d="M110.5,117.3 L121.8,123.8 L128.3,112.5"/>

          <path class="arc" d="M336,250 A30,30 0 0 1 340,235"/>
          <text class="val" x="322" y="244" text-anchor="middle">α</text>

          <circle class="pt" cx="34" cy="58" r="3.2"/>
          <circle class="pt" cx="34" cy="250" r="3.2"/>
          <circle class="pt" cx="366" cy="250" r="3.2"/>
          <circle class="pt" cx="117" cy="106" r="3.2"/>

          <text class="val" x="26" y="158" text-anchor="end">8</text>
          <text class="val" x="252" y="164" text-anchor="middle">12</text>

          <text x="34" y="48" text-anchor="middle">A</text>
          <text x="26" y="270" text-anchor="end">B</text>
          <text x="374" y="270">C</text>
          <text x="124" y="99">H</text>
        `,
    },
    given: ['ABC bir dik üçgen', 'm(ABC) = 90°', '[BH] ⊥ [AC]', '|AB| = 8 cm', '|HC| = 12 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACB) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '30' },
      { key: 'D', text: '45' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'Dik kenara ait Öklid bağıntısıyla |AH|’yi bul; sonra |AB|’yi hipotenüsle karşılaştır.',
    solution: [
      {
        title: 'Öklid bağıntısını kur',
        detail:
          'Dik kenara ait Öklid bağıntısı |AB|² = |AH| · |AC|’dir. |AH| = a dersek |AC| = a + 12 olur ve 8² = a · (a + 12) yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'a² + 12a − 64 = 0 → (a + 16)(a − 4) = 0 → a = 4 cm bulunur.',
      },
      {
        title: 'Hipotenüsü yaz',
        detail: '|AC| = |AH| + |HC| = 4 + 12 = 16 cm olur.',
      },
      {
        title: 'Açıyı oku',
        detail:
          '|AB| = 8 = |AC| / 2’dir. Bir dik üçgende bir dik kenar hipotenüsün yarısıysa, o dik kenarın karşısındaki açı 30°’dir; [AB]’nin karşısındaki açı da C açısıdır.',
      },
      {
        title: 'Sonuç',
        detail: 'α = m(ACB) = 30° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 140
  {
    id: 'triangles-140',
    topic: 'Ortak köşegenli iki dik üçgen',
    figure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 140',
      label:
        'ABCD dörtgeninde [BD] köşegeni çizilmiştir; D köşesinde [AD] ile [BD], C köşesinde [BC] ile [CD] diktir. |AB| = 5 cm, |AD| = 4 cm, |BC| = 2 cm ve |CD| = x’tir.',
      svg: `
          <path class="ln" d="M118,30 L172,300 L282,300 L282,177 Z"/>
          <path class="ln" d="M172,300 L282,177"/>
          <path class="ln" d="M269,300 L269,287 L282,287"/>
          <path class="ln" d="M272.3,168.3 L263.6,178 L273.3,186.7"/>

          <circle class="pt" cx="118" cy="30" r="3.2"/>
          <circle class="pt" cx="172" cy="300" r="3.2"/>
          <circle class="pt" cx="282" cy="300" r="3.2"/>
          <circle class="pt" cx="282" cy="177" r="3.2"/>

          <text class="val" x="133" y="171" text-anchor="end">5</text>
          <text class="val" x="212" y="97" text-anchor="middle">4</text>
          <text class="val" x="227" y="322" text-anchor="middle">2</text>
          <text class="val" x="292" y="243">x</text>

          <text x="118" y="20" text-anchor="middle">A</text>
          <text x="164" y="322" text-anchor="end">B</text>
          <text x="290" y="322">C</text>
          <text x="292" y="175">D</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AD] ⊥ [BD]',
      '[BC] ⊥ [CD]',
      '|AB| = 5 cm',
      '|AD| = 4 cm',
      '|BC| = 2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |CD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√3' },
      { key: 'B', text: '2' },
      { key: 'C', text: '√5' },
      { key: 'D', text: '√6' },
      { key: 'E', text: '3' },
    ],
    answer: 'C',
    hint: '[BD] her iki dik üçgende de görünüyor; önce onu ABD üçgeninden bul.',
    solution: [
      {
        title: 'Ortak kenarı gör',
        detail:
          '[BD], ABD dik üçgeninin hipotenüsü ve BCD dik üçgeninin de hipotenüsüdür; iki üçgeni birbirine bağlayan uzunluk budur.',
      },
      {
        title: 'ABD üçgeninde Pisagor',
        detail:
          '[AD] ⊥ [BD] olduğundan |AD|² + |BD|² = |AB|² → 16 + |BD|² = 25 → |BD|² = 9, |BD| = 3 cm.',
      },
      {
        title: 'BCD üçgeninde Pisagor',
        detail: '[BC] ⊥ [CD] olduğundan |BC|² + |CD|² = |BD|² → 4 + x² = 9 → x² = 5.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 141
  {
    id: 'triangles-141',
    topic: 'Paralel dik kenarlar ve 45°’lik dik üçgenler',
    figure: {
      viewBox: '0 10 400 320',
      caption: 'Şekil 141',
      label:
        'Paralel [AB] ve [DC] doğru parçaları [BC]’ye diktir; [BC] üzerindeki E noktası A ve D ile birleştirilmiş, m(EAB) = m(EDC) = 45° olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M164,36 L272,36"/>
          <path class="ln" d="M272,36 L272,288"/>
          <path class="ln" d="M272,288 L128,288"/>
          <path class="ln" d="M164,36 L272,144"/>
          <path class="ln" d="M128,288 L272,144"/>
          <path class="ln" d="M259,36 L259,49 L272,49"/>

          <path class="par" d="M211,30 L218,36 L211,42"/>
          <path class="par" d="M193,282 L200,288 L193,294"/>

          <path class="arc" d="M198,36 A34,34 0 0 1 188,60"/>
          <text class="val" x="212" y="61" text-anchor="middle">45°</text>

          <path class="arc" d="M152,264 A34,34 0 0 1 162,288"/>
          <text class="val" x="178" y="272" text-anchor="middle">45°</text>

          <circle class="pt" cx="164" cy="36" r="3.2"/>
          <circle class="pt" cx="272" cy="36" r="3.2"/>
          <circle class="pt" cx="272" cy="288" r="3.2"/>
          <circle class="pt" cx="128" cy="288" r="3.2"/>
          <circle class="pt" cx="272" cy="144" r="3.2"/>

          <text x="156" y="32" text-anchor="end">A</text>
          <text x="280" y="32">B</text>
          <text x="280" y="306">C</text>
          <text x="120" y="306" text-anchor="end">D</text>
          <text x="280" y="150">E</text>
        `,
    },
    given: [
      '[AB] ⊥ [BC]',
      '[AB] // [DC]',
      'E ∈ [BC]',
      '|BC| = 14 cm',
      'm(EAB) = 45°',
      'm(EDC) = 45°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AE| + |DE| toplamı kaç cm’dir?',
    choices: [
      { key: 'A', text: '7√2' },
      { key: 'B', text: '14' },
      { key: 'C', text: '12√2' },
      { key: 'D', text: '14√2' },
      { key: 'E', text: '28' },
    ],
    answer: 'D',
    hint: 'İki dik üçgende de dar açılar 45°; hipotenüsleri |BE| ve |EC| cinsinden yazıp topla.',
    solution: [
      {
        title: 'İkinci dikliği bul',
        detail:
          '[AB] // [DC] ve [AB] ⊥ [BC] olduğundan [DC] ⊥ [BC]’dir. Böylece ABE üçgeni B’de, DCE üçgeni C’de dik olur.',
      },
      {
        title: 'ABE üçgenini çöz',
        detail:
          'm(ABE) = 90° ve m(EAB) = 45° olduğundan m(AEB) = 45°’dir; ABE ikizkenar dik üçgendir ve hipotenüsü |AE| = |BE| · √2 olur.',
      },
      {
        title: 'DCE üçgenini çöz',
        detail: 'Aynı gerekçeyle DCE de ikizkenar dik üçgendir: |DE| = |EC| · √2.',
      },
      {
        title: 'Toplamı yaz',
        detail:
          '|AE| + |DE| = √2 · (|BE| + |EC|) = √2 · |BC| olur; E noktası [BC] üzerinde olduğundan |BE| + |EC| = |BC| = 14 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail: '|AE| + |DE| = 14√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 142
  {
    id: 'triangles-142',
    topic: 'Köşegeni ortak, eşit kenarlı dörtgen',
    figure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 142',
      label:
        'ABCD dörtgeninde [AC] köşegeni çizilmiştir; B köşesindeki açı ve [AC] ile [CD] arasındaki açı diktir, |BC| = |CD| eşit çizgilerle gösterilmiştir. |AB| = 2 cm, |AD| = 6 cm ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M147,35 L61,78 L147,250 L339,250 Z"/>
          <path class="ln" d="M147,35 L147,250"/>
          <path class="ln" d="M72.6,72.2 L78.4,83.8 L66.8,89.6"/>
          <path class="ln" d="M147,237 L160,237 L160,250"/>

          <line class="tick" x1="97.7" y1="167.1" x2="110.3" y2="160.9"/>
          <line class="tick" x1="243" y1="243" x2="243" y2="257"/>

          <circle class="pt" cx="147" cy="35" r="3.2"/>
          <circle class="pt" cx="61" cy="78" r="3.2"/>
          <circle class="pt" cx="147" cy="250" r="3.2"/>
          <circle class="pt" cx="339" cy="250" r="3.2"/>

          <text class="val" x="98" y="47" text-anchor="end">2</text>
          <text class="val" x="256" y="137">6</text>
          <text class="val" x="139" y="147" text-anchor="end">x</text>

          <text x="147" y="25" text-anchor="middle">A</text>
          <text x="53" y="84" text-anchor="end">B</text>
          <text x="141" y="272" text-anchor="end">C</text>
          <text x="339" y="272" text-anchor="middle">D</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      'm(ABC) = 90°',
      'm(ACD) = 90°',
      '|BC| = |CD|',
      '|AB| = 2 cm',
      '|AD| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '√17' },
      { key: 'B', text: '3√2' },
      { key: 'C', text: '2√5' },
      { key: 'D', text: '√21' },
      { key: 'E', text: '2√6' },
    ],
    answer: 'C',
    hint: '|BC| = |CD| = k de; iki dik üçgende Pisagor yazınca |AC|² ortadan kalkar.',
    solution: [
      {
        title: 'Eşit kenarları adlandır',
        detail: '|BC| = |CD| = k olsun; aranan uzunluk |AC| = x’tir.',
      },
      {
        title: 'ABC üçgeninde Pisagor',
        detail: 'm(ABC) = 90° olduğundan x² = |AB|² + k² = 4 + k² yazılır.',
      },
      {
        title: 'ACD üçgeninde Pisagor',
        detail: 'm(ACD) = 90° olduğundan |AD|² = x² + |CD|² → 36 = x² + k².',
      },
      {
        title: 'Sistemi çöz',
        detail:
          'x² = 4 + k² ifadesini ikinciye koy: 36 = 4 + k² + k² → 2k² = 32 → k² = 16, k = 4 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 4 + 16 = 20 → x = 2√5 cm bulunur (36 = 20 + 16 bağıntıyı doğrular).',
      },
    ],
  },

  // ---------------------------------------------------------------- 143
  {
    id: 'triangles-143',
    topic: 'Birbirine dik yollarda Pisagor',
    stem: [
      'Aynı noktadan aynı anda hareket eden iki bisikletli, birbirine dik iki yol üzerinde sabit hızla ilerliyor. Bisikletlilerin saatteki hızları 8 km ve 15 km’dir.',
    ],
    ask: 'Buna göre, 2 saat sonra bisikletliler arasındaki uzaklık kaç km’dir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '32' },
      { key: 'C', text: '34' },
      { key: 'D', text: '36' },
      { key: 'E', text: '40' },
    ],
    answer: 'C',
    hint: 'Önce her birinin 2 saatte aldığı yolu bul; bu iki yol bir dik üçgenin dik kenarlarıdır.',
    solution: [
      {
        title: 'Alınan yolları hesapla',
        detail:
          'Yol = hız · zaman olduğundan birinci bisikletli 8 · 2 = 16 km, ikincisi 15 · 2 = 30 km yol alır.',
      },
      {
        title: 'Dik üçgeni kur',
        detail:
          'Yollar birbirine dik olduğundan, bisikletlilerin bulunduğu noktalar ile başlangıç noktası dik kenarları 16 km ve 30 km olan bir dik üçgen oluşturur. Aradaki uzaklık bu üçgenin hipotenüsüdür.',
      },
      {
        title: 'Pisagor bağıntısını uygula',
        detail: 'x² = 16² + 30² = 256 + 900 = 1156 → x = √1156 = 34.',
      },
      {
        title: 'Sonuç',
        detail:
          'Aradaki uzaklık 34 km bulunur; kenarlar 8 − 15 − 17 üçlüsünün 2 katıdır (16 − 30 − 34).',
      },
    ],
  },

  // ---------------------------------------------------------------- 144
  {
    id: 'triangles-144',
    topic: 'Dik yamuğa tamamlanan dörtgen',
    figure: {
      viewBox: '0 20 400 350',
      caption: 'Şekil 144',
      label:
        'ABCD dörtgeninde B köşesindeki açı diktir; |AB| = 2√3 cm, |AD| = 5 cm, D köşesindeki açı ile C köşesindeki açı 60° ve |BC| = x’tir.',
      svg: `
          <path class="ln" d="M74,205 L74,330 L326,330 L164,49 Z"/>
          <path class="ln" d="M74,317 L87,317 L87,330"/>

          <path class="arc" d="M187,88.9 A46,46 0 0 1 141,88.9"/>
          <text class="val" x="164" y="118" text-anchor="middle">60°</text>

          <path class="arc" d="M280,330 A46,46 0 0 1 303,290.1"/>
          <text class="val" x="269" y="302" text-anchor="middle">60°</text>

          <circle class="pt" cx="74" cy="205" r="3.2"/>
          <circle class="pt" cx="74" cy="330" r="3.2"/>
          <circle class="pt" cx="326" cy="330" r="3.2"/>
          <circle class="pt" cx="164" cy="49" r="3.2"/>

          <text class="val" x="66" y="272" text-anchor="end">2√3</text>
          <text class="val" x="105" y="124" text-anchor="end">5</text>
          <text class="val" x="200" y="352" text-anchor="middle">x</text>

          <text x="66" y="210" text-anchor="end">A</text>
          <text x="66" y="352" text-anchor="end">B</text>
          <text x="334" y="352">C</text>
          <text x="164" y="39" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 350',
      caption: 'Şekil 144 — D’den [BC]’ye dikme ve A’dan [DH]’ye dikme çizildi',
      label:
        'Aynı dörtgende D’den [BC]’ye inen dikmenin ayağı H, A’dan [DH]’ye inen dikmenin ayağı K olarak işaretlenmiş; D köşesindeki 60°’lik açı [DH] ile 30° ve 30° olarak ikiye ayrılmıştır.',
      svg: `
          <path class="ln" d="M74,205 L74,330 L326,330 L164,49 Z"/>
          <path class="ln" d="M74,317 L87,317 L87,330"/>

          <path class="aux" d="M164,49 L164,330"/>
          <path class="aux" d="M74,205 L164,205"/>
          <path class="ln" d="M164,317 L177,317 L177,330"/>
          <path class="ln" d="M151,205 L151,192 L164,192"/>

          <path class="arc" d="M164,79 A30,30 0 0 1 149,75"/>
          <text class="val" x="145.5" y="111" text-anchor="middle">30°</text>

          <path class="arc" d="M179,75 A30,30 0 0 1 164,79"/>
          <text class="val" x="182.5" y="111" text-anchor="middle">30°</text>

          <path class="arc" d="M280,330 A46,46 0 0 1 303,290.1"/>
          <text class="val" x="269" y="302" text-anchor="middle">60°</text>

          <circle class="pt" cx="74" cy="205" r="3.2"/>
          <circle class="pt" cx="74" cy="330" r="3.2"/>
          <circle class="pt" cx="326" cy="330" r="3.2"/>
          <circle class="pt" cx="164" cy="49" r="3.2"/>
          <circle class="pt" cx="164" cy="330" r="3.2"/>
          <circle class="pt" cx="164" cy="205" r="3.2"/>

          <text class="val" x="66" y="272" text-anchor="end">2√3</text>
          <text class="val" x="105" y="124" text-anchor="end">5</text>
          <text class="val" x="119" y="352" text-anchor="middle">5/2</text>
          <text class="val" x="245" y="352" text-anchor="middle">9/2</text>

          <text x="66" y="210" text-anchor="end">A</text>
          <text x="66" y="352" text-anchor="end">B</text>
          <text x="334" y="352">C</text>
          <text x="164" y="39" text-anchor="middle">D</text>
          <text x="172" y="200">K</text>
          <text x="164" y="352" text-anchor="middle">H</text>
        `,
    },
    given: ['[AB] ⊥ [BC]', '|AB| = 2√3 cm', '|AD| = 5 cm', 'm(ADC) = 60°', 'm(BCD) = 60°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'D’den [BC]’ye bir dikme indir; ortaya iki tane 30° − 60° − 90° üçgeni çıkar.',
    solution: [
      {
        title: 'Dikmeyi çiz',
        detail:
          'D’den [BC]’ye inen dikmenin ayağı H olsun. [AB] ⊥ [BC] ve [DH] ⊥ [BC] olduğundan [AB] // [DH]’dir; ABHD bir dik yamuk olur.',
      },
      {
        title: 'DHC üçgenini çöz',
        detail:
          'DHC üçgeni H’de diktir ve m(DCH) = 60° olduğundan m(HDC) = 30°’dir. Buradan m(ADH) = m(ADC) − m(HDC) = 60° − 30° = 30° çıkar.',
      },
      {
        title: 'İkinci dikmeyi çiz',
        detail:
          'A’dan [DH]’ye inen dikmenin ayağı K olsun. AKD üçgeni K’de diktir ve m(ADK) = 30°’dir: |AK| = |AD| / 2 = 5/2 cm ve |KD| = |AD| · √3 / 2 = 5√3 / 2 cm.',
      },
      {
        title: '[DH] uzunluğunu topla',
        detail:
          'ABHK bir dikdörtgen olduğundan |KH| = |AB| = 2√3 cm’dir: |DH| = |DK| + |KH| = 5√3/2 + 2√3 = 9√3/2 cm.',
      },
      {
        title: 'Parçaları birleştir',
        detail:
          'DHC üçgeninde |HC| = |DH| · tan30° = (9√3/2) / √3 = 9/2 cm, dikdörtgenden |BH| = |AK| = 5/2 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'x = |BC| = |BH| + |HC| = 5/2 + 9/2 = 7 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 145
  {
    id: 'triangles-145',
    topic: 'Dik kenarı bölen nokta ve Pisagor',
    figure: {
      viewBox: '0 0 400 360',
      caption: 'Şekil 145',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde D noktası [AB] dik kenarı üzerindedir ve C ile birleştirilmiştir; |AD| = 1 cm, |DB| = 3 cm, |DC| = 5 cm ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M50,22 L50,322 L350,322 Z"/>
          <path class="ln" d="M50,97 L350,322"/>
          <path class="ln" d="M50,309 L63,309 L63,322"/>

          <circle class="pt" cx="50" cy="22" r="3.2"/>
          <circle class="pt" cx="50" cy="322" r="3.2"/>
          <circle class="pt" cx="350" cy="322" r="3.2"/>
          <circle class="pt" cx="50" cy="97" r="3.2"/>

          <text class="val" x="42" y="65" text-anchor="end">1</text>
          <text class="val" x="42" y="215" text-anchor="end">3</text>
          <text class="val" x="192" y="228" text-anchor="middle">5</text>
          <text class="val" x="213" y="166">x</text>

          <text x="50" y="12" text-anchor="middle">A</text>
          <text x="42" y="344" text-anchor="end">B</text>
          <text x="358" y="344">C</text>
          <text x="42" y="101" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'D ∈ [AB]',
      '|AD| = 1 cm',
      '|DB| = 3 cm',
      '|DC| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4√2' },
      { key: 'B', text: '5' },
      { key: 'C', text: '√34' },
      { key: 'D', text: '3√3' },
      { key: 'E', text: '6' },
    ],
    answer: 'A',
    hint: 'DBC de bir dik üçgendir; önce oradan |BC|’yi bul.',
    solution: [
      {
        title: 'Küçük dik üçgeni kullan',
        detail:
          'D noktası [AB] üzerinde olduğundan m(DBC) = 90°’dir; DBC dik üçgeninde |DB|² + |BC|² = |DC|² yazılır.',
      },
      {
        title: 'İkinci dik kenarı bul',
        detail: '9 + |BC|² = 25 → |BC|² = 16 → |BC| = 4 cm.',
      },
      {
        title: 'Bölünen dik kenarı topla',
        detail: '|AB| = |AD| + |DB| = 1 + 3 = 4 cm olur.',
      },
      {
        title: 'ABC üçgeninde Pisagor',
        detail: 'x² = |AB|² + |BC|² = 16 + 16 = 32.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √32 = 4√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 146
  {
    id: 'triangles-146',
    topic: 'Öklid bağıntısı ve iç içe dik üçgenler',
    figure: {
      viewBox: '0 20 400 300',
      caption: 'Şekil 146',
      label:
        'ABC üçgeninde H noktası [AB] üzerinde, D noktası [AC] üzerindedir; [BD] ⊥ [AC] ve [DH] ⊥ [AB]’dir. |AH| = 2 cm, |HB| = 8 cm, |BC| = 12 cm ve |DC| = x’tir.',
      svg: `
          <path class="ln" d="M142,48 L50,280 L350,280 Z"/>
          <path class="ln" d="M50,280 L217,131"/>
          <path class="ln" d="M124,94 L217,131"/>
          <path class="ln" d="M208.3,121.3 L198.6,130 L207.3,139.7"/>
          <path class="ln" d="M128.7,81.9 L140.8,86.7 L136.1,98.8"/>

          <circle class="pt" cx="142" cy="48" r="3.2"/>
          <circle class="pt" cx="50" cy="280" r="3.2"/>
          <circle class="pt" cx="350" cy="280" r="3.2"/>
          <circle class="pt" cx="217" cy="131" r="3.2"/>
          <circle class="pt" cx="124" cy="94" r="3.2"/>

          <text class="val" x="120" y="68" text-anchor="end">2</text>
          <text class="val" x="76" y="190" text-anchor="end">8</text>
          <text class="val" x="200" y="302" text-anchor="middle">12</text>
          <text class="val" x="297" y="200">x</text>

          <text x="142" y="38" text-anchor="middle">A</text>
          <text x="42" y="302" text-anchor="end">B</text>
          <text x="358" y="302">C</text>
          <text x="228" y="122">D</text>
          <text x="110" y="104" text-anchor="end">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '[DH] ⊥ [AB]',
      '[BD] ⊥ [AC]',
      '|AH| = 2 cm',
      '|HB| = 8 cm',
      '|BC| = 12 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '8' },
      { key: 'D', text: '2√17' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: 'ABD dik üçgeninde [DH] hipotenüse ait yüksekliktir; Öklid bağıntısını orada kullan.',
    solution: [
      {
        title: 'Dik üçgeni gör',
        detail:
          '[BD] ⊥ [AC] olduğundan m(ADB) = 90°’dir. ABD dik üçgeninin hipotenüsü |AB| = 2 + 8 = 10 cm ve [DH] bu hipotenüse ait yüksekliktir.',
      },
      {
        title: 'Dik kenar bağıntısını yaz',
        detail: 'Öklid bağıntısı |BD|² = |HB| · |AB| verir: |BD|² = 8 · 10 = 80.',
      },
      {
        title: 'İkinci dik üçgene geç',
        detail:
          'm(BDC) = 180° − 90° = 90° olduğundan BDC de diktir: x² = |BC|² − |BD|² = 144 − 80 = 64.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 8 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 147
  {
    id: 'triangles-147',
    topic: 'Ortak hipotenüslü 30° ve 45°’lik dik üçgenler',
    figure: {
      viewBox: '0 16 400 356',
      caption: 'Şekil 147',
      label:
        'ABCD dörtgeninde [BD] köşegeni çizilmiştir; A köşesinde [AB] ile [AD], C köşesinde [BC] ile [CD] diktir. m(ABD) = 30°, m(DBC) = 45°, |AD| = 5 cm ve |CD| = x’tir.',
      svg: `
          <path class="ln" d="M280,41 L40,180 L200,340 L360,180 Z"/>
          <path class="ln" d="M40,180 L360,180"/>
          <path class="ln" d="M268.7,47.9 L275.2,59.2 L286.5,52.7"/>
          <path class="ln" d="M190.8,330.8 L200,321.6 L209.2,330.8"/>

          <path class="arc" d="M82,180 A42,42 0 0 0 76.4,159"/>
          <text class="val" x="100" y="169" text-anchor="middle">30°</text>

          <path class="arc" d="M96,180 A56,56 0 0 1 79.6,219.6"/>
          <text class="val" x="110" y="214" text-anchor="middle">45°</text>

          <circle class="pt" cx="280" cy="41" r="3.2"/>
          <circle class="pt" cx="40" cy="180" r="3.2"/>
          <circle class="pt" cx="200" cy="340" r="3.2"/>
          <circle class="pt" cx="360" cy="180" r="3.2"/>

          <text class="val" x="336" y="108">5</text>
          <text class="val" x="294" y="277">x</text>

          <text x="280" y="31" text-anchor="middle">A</text>
          <text x="32" y="186" text-anchor="end">B</text>
          <text x="200" y="362" text-anchor="middle">C</text>
          <text x="368" y="175">D</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AB] ⊥ [AD]',
      '[BC] ⊥ [CD]',
      'm(ABD) = 30°',
      'm(DBC) = 45°',
      '|AD| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |CD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '5√2' },
      { key: 'C', text: '10' },
      { key: 'D', text: '5√3' },
      { key: 'E', text: '6√2' },
    ],
    answer: 'B',
    hint: '[BD] iki dik üçgenin de hipotenüsüdür; önce onu 30°’lik üçgenden bul.',
    solution: [
      {
        title: 'İlk üçgeni tanı',
        detail:
          'm(BAD) = 90° ve m(ABD) = 30° olduğundan ABD bir 30° − 60° − 90° üçgenidir; 30°’lik açının karşısındaki dik kenar [AD]’dir.',
      },
      {
        title: 'Köşegeni bul',
        detail:
          '30°’nin karşısındaki dik kenar hipotenüsün yarısı olduğundan |AD| = |BD| / 2 → |BD| = 2 · 5 = 10 cm.',
      },
      {
        title: 'İkinci üçgeni tanı',
        detail:
          'm(BCD) = 90° ve m(DBC) = 45° olduğundan BCD ikizkenar dik üçgendir; hipotenüsü aynı [BD]’dir ve dik kenarı x = |BD| / √2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 10 / √2 = 5√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 148
  {
    id: 'triangles-148',
    topic: 'Üç kenarı verilen üçgende yükseklik',
    figure: {
      viewBox: '0 8 400 350',
      caption: 'Şekil 148',
      label:
        'ABC üçgeninde A’dan [BC] tabanına inen yüksekliğin ayağı H’dir; |AB| = 13 cm, |AC| = 15 cm ve |AH| = x’tir.',
      svg: `
          <path class="ln" d="M32,320 L152,32 L368,320 Z"/>
          <path class="ln" d="M152,32 L152,320"/>
          <path class="ln" d="M152,307 L165,307 L165,320"/>

          <circle class="pt" cx="32" cy="320" r="3.2"/>
          <circle class="pt" cx="152" cy="32" r="3.2"/>
          <circle class="pt" cx="368" cy="320" r="3.2"/>
          <circle class="pt" cx="152" cy="320" r="3.2"/>

          <text class="val" x="75" y="174" text-anchor="end">13</text>
          <text class="val" x="276" y="171">15</text>
          <text class="val" x="162" y="185">x</text>

          <text x="152" y="22" text-anchor="middle">A</text>
          <text x="24" y="342" text-anchor="end">B</text>
          <text x="376" y="342">C</text>
          <text x="152" y="342" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC bir üçgen', '[AH] ⊥ [BC]', '|AB| = 13 cm', '|AC| = 15 cm', '|BC| = 14 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AH| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '11' },
      { key: 'C', text: '12' },
      { key: 'D', text: '4√7' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'C',
    hint: '|BH|’ye bir harf ver; x² hem ABH’den hem AHC’den yazılabilir.',
    solution: [
      {
        title: 'Tabanı ikiye ayır',
        detail: '|BH| = a dersek H, [BC] üzerinde olduğundan |HC| = 14 − a olur.',
      },
      {
        title: 'İki dik üçgende Pisagor',
        detail:
          'ABH dik üçgeninden x² = 13² − a² = 169 − a², AHC dik üçgeninden x² = 15² − (14 − a)² = 225 − (14 − a)².',
      },
      {
        title: 'Denklemi çöz',
        detail:
          '169 − a² = 225 − (196 − 28a + a²) → 169 = 29 + 28a → 28a = 140 → a = 5 cm bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 169 − 25 = 144 → x = 12 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 149
  {
    id: 'triangles-149',
    topic: 'Dik kenara ait Öklid bağıntısı',
    figure: {
      viewBox: '0 110 400 230',
      caption: 'Şekil 149',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüs [BC] üzerine inen dikmenin ayağı H’dir; |AB| = 6 cm, |HC| = 5 cm ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M38,300 L182,139 L362,300 Z"/>
          <path class="ln" d="M182,139 L182,300"/>
          <path class="ln" d="M173.3,148.7 L183,157.4 L191.7,147.7"/>
          <path class="ln" d="M182,287 L195,287 L195,300"/>

          <circle class="pt" cx="38" cy="300" r="3.2"/>
          <circle class="pt" cx="182" cy="139" r="3.2"/>
          <circle class="pt" cx="362" cy="300" r="3.2"/>
          <circle class="pt" cx="182" cy="300" r="3.2"/>

          <text class="val" x="96" y="214" text-anchor="end">6</text>
          <text class="val" x="272" y="322" text-anchor="middle">5</text>
          <text class="val" x="286" y="213">x</text>

          <text x="182" y="129" text-anchor="middle">A</text>
          <text x="30" y="322" text-anchor="end">B</text>
          <text x="370" y="322">C</text>
          <text x="182" y="322" text-anchor="middle">H</text>
        `,
    },
    given: ['BAC bir dik üçgen', '[BA] ⊥ [AC]', '[AH] ⊥ [BC]', '|AB| = 6 cm', '|HC| = 5 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3√5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '5√2' },
      { key: 'D', text: '3√6' },
      { key: 'E', text: '7' },
    ],
    answer: 'A',
    hint: '|BH|’ye bir harf verip dik kenar bağıntısını [AB] için yaz.',
    solution: [
      {
        title: 'Bilinmeyeni yerleştir',
        detail: '|BH| = a dersek hipotenüs |BC| = a + 5 olur.',
      },
      {
        title: 'Dik kenar bağıntısı',
        detail: '|AB|² = |BH| · |BC| olduğundan 36 = a · (a + 5) → a² + 5a − 36 = 0.',
      },
      {
        title: 'Denklemi çöz',
        detail: '(a + 9)(a − 4) = 0 → a = 4 cm, buradan |BC| = 4 + 5 = 9 cm bulunur.',
      },
      {
        title: 'Diğer dik kenarı yaz',
        detail: 'Aynı bağıntı [AC] için x² = |HC| · |BC| = 5 · 9 = 45 verir.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √45 = 3√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 150
  {
    id: 'triangles-150',
    topic: '30°’lik açılarla kurulan dik üçgenler',
    figure: {
      viewBox: '0 116 400 160',
      caption: 'Şekil 150',
      label:
        'Taban açıları 30° olan ABC üçgeninde E noktası [BC] üzerinde, D noktası [AB] üzerindedir ve [DE] ⊥ [BC]’dir. |BE| = 9 cm, |EC| = 21 cm ve |AD| = x’tir.',
      svg: `
          <path class="ln" d="M30,240 L200,142 L370,240 Z"/>
          <path class="ln" d="M132,181 L132,240"/>
          <path class="ln" d="M132,227 L119,227 L119,240"/>

          <path class="arc" d="M76,240 A46,46 0 0 0 69.8,217"/>
          <text class="val" x="107" y="224" text-anchor="middle">30°</text>

          <path class="arc" d="M324,240 A46,46 0 0 1 330.2,217"/>
          <text class="val" x="293" y="224" text-anchor="middle">30°</text>

          <circle class="pt" cx="30" cy="240" r="3.2"/>
          <circle class="pt" cx="200" cy="142" r="3.2"/>
          <circle class="pt" cx="370" cy="240" r="3.2"/>
          <circle class="pt" cx="132" cy="240" r="3.2"/>
          <circle class="pt" cx="132" cy="181" r="3.2"/>

          <text class="val" x="156" y="152" text-anchor="end">x</text>
          <text class="val" x="81" y="262" text-anchor="middle">9</text>
          <text class="val" x="251" y="262" text-anchor="middle">21</text>

          <text x="200" y="132" text-anchor="middle">A</text>
          <text x="22" y="262" text-anchor="end">B</text>
          <text x="378" y="262">C</text>
          <text x="132" y="262" text-anchor="middle">E</text>
          <text x="123" y="172" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AB]',
      'm(DEB) = 90°',
      'm(ABC) = 30°',
      'm(ACB) = 30°',
      '|BE| = 9 cm',
      '|EC| = 21 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√3' },
      { key: 'B', text: '3√3' },
      { key: 'C', text: '4√3' },
      { key: 'D', text: '5√3' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'C',
    hint: 'Önce tüm |AB|’yi, sonra BDE dik üçgeninden |BD|’yi bul; x ikisinin farkıdır.',
    solution: [
      {
        title: 'İkizkenar üçgeni gör',
        detail: 'm(ABC) = m(ACB) = 30° olduğundan ABC ikizkenardır ve |BC| = 9 + 21 = 30 cm’dir.',
      },
      {
        title: 'Kenarı bul',
        detail:
          'A’dan [BC]’ye inen yükseklik tabanı ortalar. Oluşan dik üçgende 15 = |AB| · cos30° = |AB| · (√3/2) → |AB| = 30/√3 = 10√3 cm.',
      },
      {
        title: 'BDE üçgenine geç',
        detail:
          'm(DEB) = 90° ve m(DBE) = 30° olduğundan |BE| = |BD| · cos30° → 9 = |BD| · (√3/2) → |BD| = 18/√3 = 6√3 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'D, [AB] üzerinde olduğundan x = |AB| − |BD| = 10√3 − 6√3 = 4√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 151
  {
    id: 'triangles-151',
    topic: '45°’lik açıda dikme ve Pisagor',
    figure: {
      viewBox: '0 116 400 200',
      caption: 'Şekil 151',
      label: 'ABC üçgeninde B köşesindeki açı 45°’dir; |AB| = 3√2 cm, |BC| = 7 cm ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M178,142 L40,280 L362,280 Z"/>

          <path class="arc" d="M84,280 A44,44 0 0 0 71.1,248.9"/>
          <text class="val" x="101" y="255" text-anchor="middle">45°</text>

          <circle class="pt" cx="178" cy="142" r="3.2"/>
          <circle class="pt" cx="40" cy="280" r="3.2"/>
          <circle class="pt" cx="362" cy="280" r="3.2"/>

          <text class="val" x="99" y="201" text-anchor="end">3√2</text>
          <text class="val" x="201" y="302" text-anchor="middle">7</text>
          <text class="val" x="280" y="198">x</text>

          <text x="178" y="132" text-anchor="middle">A</text>
          <text x="32" y="302" text-anchor="end">B</text>
          <text x="370" y="302">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 116 400 200',
      caption: 'Şekil 151 — A’dan [BC]’ye dikme indirildi',
      label:
        'Aynı üçgende A’dan [BC]’ye inen dikmenin ayağı H olarak işaretlenmiştir; |BH| = 3 cm, |AH| = 3 cm ve |HC| = 4 cm’dir.',
      svg: `
          <path class="ln" d="M178,142 L40,280 L362,280 Z"/>
          <path class="aux" d="M178,142 L178,280"/>
          <path class="ln" d="M178,267 L191,267 L191,280"/>

          <path class="arc" d="M84,280 A44,44 0 0 0 71.1,248.9"/>
          <text class="val" x="101" y="255" text-anchor="middle">45°</text>

          <circle class="pt" cx="178" cy="142" r="3.2"/>
          <circle class="pt" cx="40" cy="280" r="3.2"/>
          <circle class="pt" cx="362" cy="280" r="3.2"/>
          <circle class="pt" cx="178" cy="280" r="3.2"/>

          <text class="val" x="99" y="201" text-anchor="end">3√2</text>
          <text class="val" x="109" y="302" text-anchor="middle">3</text>
          <text class="val" x="270" y="302" text-anchor="middle">4</text>
          <text class="val" x="188" y="218">3</text>
          <text class="val" x="280" y="198">x</text>

          <text x="178" y="132" text-anchor="middle">A</text>
          <text x="32" y="302" text-anchor="end">B</text>
          <text x="370" y="302">C</text>
          <text x="178" y="302" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC bir üçgen', 'm(ABC) = 45°', '|AB| = 3√2 cm', '|BC| = 7 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '√41' },
      { key: 'D', text: '6' },
      { key: 'E', text: '3√5' },
    ],
    answer: 'B',
    hint: 'A’dan [BC]’ye bir dikme indir; 45°’lik açı ikizkenar dik üçgen doğurur.',
    solution: [
      {
        title: 'Dikmeyi çiz',
        detail:
          'A’dan [BC]’ye inen dikmenin ayağı H olsun. ABH üçgeni H’de diktir ve m(ABH) = 45° olduğundan ikizkenar dik üçgendir.',
      },
      {
        title: 'İki parçayı bul',
        detail: '|AH| = |BH| = |AB| / √2 = 3√2 / √2 = 3 cm olur.',
      },
      {
        title: 'Tabanı böl',
        detail: 'H, [BC] üzerinde olduğundan |HC| = |BC| − |BH| = 7 − 3 = 4 cm’dir.',
      },
      {
        title: 'AHC üçgeninde Pisagor',
        detail: 'x² = |AH|² + |HC|² = 3² + 4² = 9 + 16 = 25.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 152
  {
    id: 'triangles-152',
    topic: 'Hipotenüse ait yükseklikte alan bağıntısı',
    figure: {
      viewBox: '0 128 400 205',
      caption: 'Şekil 152',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den hipotenüs [AC] üzerine inen dikmenin ayağı H’dir; |AH| = 2 cm ve |HC| = 8 cm’dir.',
      svg: `
          <path class="ln" d="M48,148 L48,300 L352,300 Z"/>
          <path class="ln" d="M48,300 L108.8,178.4"/>
          <path class="ln" d="M48,286 L62,286 L62,300"/>
          <path class="ln" d="M121.3,184.7 L115,197.2 L102.5,190.9"/>

          <circle class="pt" cx="48" cy="148" r="3.2"/>
          <circle class="pt" cx="48" cy="300" r="3.2"/>
          <circle class="pt" cx="352" cy="300" r="3.2"/>
          <circle class="pt" cx="108.8" cy="178.4" r="3.2"/>

          <text class="val" x="92" y="154">2</text>
          <text class="val" x="238" y="223">8</text>

          <text x="40" y="142" text-anchor="end">A</text>
          <text x="40" y="322" text-anchor="end">B</text>
          <text x="360" y="322">C</text>
          <text x="118" y="164">H</text>
        `,
    },
    given: ['ABC bir dik üçgen', '[AB] ⊥ [BC]', '[BH] ⊥ [AC]', '|AH| = 2 cm', '|HC| = 8 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| · |BC| çarpımı kaçtır?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '30' },
      { key: 'C', text: '32' },
      { key: 'D', text: '36' },
      { key: 'E', text: '40' },
    ],
    answer: 'E',
    hint: 'Dik üçgenin alanını iki farklı ikiliyle yaz: dik kenarlar ve hipotenüs — yükseklik.',
    solution: [
      {
        title: 'Hipotenüsü topla',
        detail: 'H, [AC] üzerinde olduğundan |AC| = |AH| + |HC| = 2 + 8 = 10 cm’dir.',
      },
      {
        title: 'Yüksekliğe ait Öklid bağıntısı',
        detail: '|BH|² = |AH| · |HC| = 2 · 8 = 16 → |BH| = 4 cm.',
      },
      {
        title: 'Alanı iki türlü yaz',
        detail:
          'Alan hem dik kenarlardan hem de hipotenüs ile yüksekliğinden yazılır: |AB| · |BC| / 2 = |AC| · |BH| / 2.',
      },
      {
        title: 'Sonuç',
        detail: '|AB| · |BC| = |AC| · |BH| = 10 · 4 = 40 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 153
  {
    id: 'triangles-153',
    topic: '75° − 60° − 45° üçgeninde dikme',
    figure: {
      viewBox: '0 84 400 250',
      caption: 'Şekil 153',
      label: 'ABC üçgeninde m(BAC) = 75°, m(ACB) = 45°, |AC| = 4√3 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M158.1,104 L45,300 L354,300 Z"/>

          <path class="arc" d="M137.1,140.4 A42,42 0 0 0 187.8,133.7"/>
          <text class="val" x="166" y="166" text-anchor="middle">75°</text>

          <path class="arc" d="M308,300 A46,46 0 0 1 321.5,267.5"/>
          <text class="val" x="293" y="275" text-anchor="middle">45°</text>

          <circle class="pt" cx="158.1" cy="104" r="3.2"/>
          <circle class="pt" cx="45" cy="300" r="3.2"/>
          <circle class="pt" cx="354" cy="300" r="3.2"/>

          <text class="val" x="86" y="193" text-anchor="end">x</text>
          <text class="val" x="269" y="190">4√3</text>

          <text x="158" y="94" text-anchor="middle">A</text>
          <text x="37" y="322" text-anchor="end">B</text>
          <text x="362" y="322">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 84 400 250',
      caption: 'Şekil 153 — A’dan [BC]’ye dikme indirildi',
      label:
        'Aynı üçgende A’dan [BC]’ye inen dikmenin ayağı H olarak işaretlenmiş, B köşesindeki 60°’lik açı yazılmış ve |AH| = 2√6 cm bulunmuştur.',
      svg: `
          <path class="ln" d="M158.1,104 L45,300 L354,300 Z"/>
          <path class="aux" d="M158.1,104 L158.1,300"/>
          <path class="ln" d="M158.1,287 L171.1,287 L171.1,300"/>

          <path class="arc" d="M89,300 A44,44 0 0 0 67,261.9"/>
          <text class="val" x="100" y="268" text-anchor="middle">60°</text>

          <path class="arc" d="M308,300 A46,46 0 0 1 321.5,267.5"/>
          <text class="val" x="293" y="275" text-anchor="middle">45°</text>

          <circle class="pt" cx="158.1" cy="104" r="3.2"/>
          <circle class="pt" cx="45" cy="300" r="3.2"/>
          <circle class="pt" cx="354" cy="300" r="3.2"/>
          <circle class="pt" cx="158.1" cy="300" r="3.2"/>

          <text class="val" x="86" y="193" text-anchor="end">x</text>
          <text class="val" x="269" y="190">4√3</text>
          <text class="val" x="168" y="210">2√6</text>

          <text x="158" y="94" text-anchor="middle">A</text>
          <text x="37" y="322" text-anchor="end">B</text>
          <text x="362" y="322">C</text>
          <text x="158" y="322" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC bir üçgen', 'm(BAC) = 75°', 'm(ACB) = 45°', '|AC| = 4√3 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '3√3' },
      { key: 'C', text: '4√2' },
      { key: 'D', text: '6' },
      { key: 'E', text: '4√3' },
    ],
    answer: 'C',
    hint: 'A’dan [BC]’ye dikme indir; ortaya bir 45°’lik, bir de 60°’lik dik üçgen çıkar.',
    solution: [
      {
        title: 'Üçüncü açıyı bul',
        detail: 'm(ABC) = 180° − 75° − 45° = 60°’dir.',
      },
      {
        title: 'Dikmeyi çiz',
        detail:
          'A’dan [BC]’ye inen dikmenin ayağı H olsun. AHC üçgeni H’de diktir ve m(ACH) = 45° olduğundan ikizkenar dik üçgendir: |AH| = |AC| / √2 = 4√3 / √2 = 2√6 cm.',
      },
      {
        title: 'ABH üçgenine geç',
        detail: 'ABH dik üçgeninde m(ABH) = 60° olduğundan |AH| = |AB| · sin60° = x · (√3/2) olur.',
      },
      {
        title: 'Sonuç',
        detail: '2√6 = x · (√3/2) → x = 4√6 / √3 = 4√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 154
  {
    id: 'triangles-154',
    topic: '105°’lik açılı üçgende dikme',
    figure: {
      viewBox: '0 148 400 180',
      caption: 'Şekil 154',
      label: 'ABC üçgeninde m(ABC) = 45°, m(BAC) = 105°, |AB| = 6 cm ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M156.8,171.2 L38,290 L362.6,290 Z"/>

          <path class="arc" d="M78,290 A40,40 0 0 0 66.3,261.7"/>
          <text class="val" x="93" y="267" text-anchor="middle">45°</text>

          <path class="arc" d="M131.3,196.7 A36,36 0 0 0 188,189.2"/>
          <text class="val" x="164" y="227" text-anchor="middle">105°</text>

          <circle class="pt" cx="156.8" cy="171.2" r="3.2"/>
          <circle class="pt" cx="38" cy="290" r="3.2"/>
          <circle class="pt" cx="362.6" cy="290" r="3.2"/>

          <text class="val" x="86" y="219" text-anchor="end">6</text>
          <text class="val" x="269" y="215">x</text>

          <text x="157" y="161" text-anchor="middle">A</text>
          <text x="30" y="312" text-anchor="end">B</text>
          <text x="371" y="312">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 148 400 180',
      caption: 'Şekil 154 — A’dan [BC]’ye dikme indirildi',
      label:
        'Aynı üçgende A’dan [BC]’ye inen dikmenin ayağı H olarak işaretlenmiş, C köşesindeki 30°’lik açı yazılmış ve |AH| = 3√2 cm bulunmuştur.',
      svg: `
          <path class="ln" d="M156.8,171.2 L38,290 L362.6,290 Z"/>
          <path class="aux" d="M156.8,171.2 L156.8,290"/>
          <path class="ln" d="M156.8,277 L169.8,277 L169.8,290"/>

          <path class="arc" d="M78,290 A40,40 0 0 0 66.3,261.7"/>
          <text class="val" x="93" y="267" text-anchor="middle">45°</text>

          <path class="arc" d="M322.6,290 A40,40 0 0 1 328,270"/>
          <text class="val" x="302" y="283" text-anchor="middle">30°</text>

          <circle class="pt" cx="156.8" cy="171.2" r="3.2"/>
          <circle class="pt" cx="38" cy="290" r="3.2"/>
          <circle class="pt" cx="362.6" cy="290" r="3.2"/>
          <circle class="pt" cx="156.8" cy="290" r="3.2"/>

          <text class="val" x="86" y="219" text-anchor="end">6</text>
          <text class="val" x="269" y="215">x</text>
          <text class="val" x="166" y="243">3√2</text>

          <text x="157" y="161" text-anchor="middle">A</text>
          <text x="30" y="312" text-anchor="end">B</text>
          <text x="371" y="312">C</text>
          <text x="157" y="312" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC bir üçgen', 'm(ABC) = 45°', 'm(BAC) = 105°', '|AB| = 6 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '8' },
      { key: 'D', text: '4√3' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'B',
    hint: 'Önce m(ACB)’yi bul; sonra A’dan [BC]’ye dikme indirip iki özel üçgeni kullan.',
    solution: [
      {
        title: 'Üçüncü açıyı bul',
        detail: 'm(ACB) = 180° − 105° − 45° = 30°’dir.',
      },
      {
        title: 'Dikmeyi çiz',
        detail:
          'A’dan [BC]’ye inen dikmenin ayağı H olsun. ABH üçgeni H’de diktir ve m(ABH) = 45° olduğundan ikizkenardır: |AH| = |AB| / √2 = 6 / √2 = 3√2 cm.',
      },
      {
        title: 'AHC üçgenine geç',
        detail:
          'AHC dik üçgeninde m(ACH) = 30°’dir. 30°’nin karşısındaki dik kenar hipotenüsün yarısı olduğundan |AH| = x / 2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 2 · 3√2 = 6√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 155
  {
    id: 'triangles-155',
    topic: 'Yüksekliğin hipotenüsü böldüğü parçalar',
    figure: {
      viewBox: '0 120 400 200',
      caption: 'Şekil 155',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüs [BC] üzerine inen dikmenin ayağı H’dir; m(ABC) = 60°, |AH| = 3√3 cm ve |BC| = x’tir.',
      svg: `
          <path class="ln" d="M116,144.5 L32,290 L368,290 Z"/>
          <path class="ln" d="M116,144.5 L116,290"/>
          <path class="ln" d="M109,156.1 L121.1,163.1 L128.1,151.5"/>
          <path class="ln" d="M116,277 L129,277 L129,290"/>

          <path class="arc" d="M76,290 A44,44 0 0 0 54,251.9"/>
          <text class="val" x="87" y="258" text-anchor="middle">60°</text>

          <circle class="pt" cx="116" cy="144.5" r="3.2"/>
          <circle class="pt" cx="32" cy="290" r="3.2"/>
          <circle class="pt" cx="368" cy="290" r="3.2"/>
          <circle class="pt" cx="116" cy="290" r="3.2"/>

          <text class="val" x="126" y="222">3√3</text>
          <text class="val" x="250" y="312" text-anchor="middle">x</text>

          <text x="116" y="134" text-anchor="middle">A</text>
          <text x="24" y="312" text-anchor="end">B</text>
          <text x="376" y="312">C</text>
          <text x="116" y="312" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC bir dik üçgen', '[AB] ⊥ [AC]', '[AH] ⊥ [BC]', 'm(ABC) = 60°', '|AH| = 3√3 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '12' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '15' },
    ],
    answer: 'C',
    hint: 'Yükseklik hipotenüsü iki parçaya ayırır; her parçayı kendi dik üçgeninden bul.',
    solution: [
      {
        title: 'Küçük üçgeni çöz',
        detail:
          'ABH dik üçgeninde m(ABH) = 60° olduğundan |AH| = |BH| · tan60° → 3√3 = |BH| · √3 → |BH| = 3 cm.',
      },
      {
        title: 'Üçüncü açıyı bul',
        detail: 'm(BAC) = 90° ve m(ABC) = 60° olduğundan m(ACB) = 30°’dir.',
      },
      {
        title: 'İkinci parçayı bul',
        detail: 'AHC dik üçgeninde |AH| = |HC| · tan30° → 3√3 = |HC| / √3 → |HC| = 9 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = |BH| + |HC| = 3 + 9 = 12 cm bulunur. (Öklid bağıntısı da doğrular: |AH|² = 3 · 9 = 27.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 156
  {
    id: 'triangles-156',
    topic: 'Öklid bağıntıları',
    figure: {
      viewBox: '0 116 400 215',
      caption: 'Şekil 156',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüs [BC] üzerine inen dikmenin ayağı H’dir; |AH| = 12 cm, |HC| = 9 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M247.4,139.2 L33,300 L368,300 Z"/>
          <path class="ln" d="M247.4,139.2 L247.4,300"/>
          <path class="ln" d="M236.2,147.6 L244.6,158.8 L255.8,150.4"/>
          <path class="ln" d="M247.4,287 L234.4,287 L234.4,300"/>

          <circle class="pt" cx="247.4" cy="139.2" r="3.2"/>
          <circle class="pt" cx="33" cy="300" r="3.2"/>
          <circle class="pt" cx="368" cy="300" r="3.2"/>
          <circle class="pt" cx="247.4" cy="300" r="3.2"/>

          <text class="val" x="238" y="225" text-anchor="end">12</text>
          <text class="val" x="308" y="322" text-anchor="middle">9</text>
          <text class="val" x="129" y="205" text-anchor="end">x</text>

          <text x="247" y="129" text-anchor="middle">A</text>
          <text x="25" y="322" text-anchor="end">B</text>
          <text x="376" y="322">C</text>
          <text x="247" y="322" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC bir dik üçgen', '[AB] ⊥ [AC]', '[AH] ⊥ [BC]', '|AH| = 12 cm', '|HC| = 9 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '16' },
      { key: 'C', text: '18' },
      { key: 'D', text: '20' },
      { key: 'E', text: '25' },
    ],
    answer: 'D',
    hint: 'Önce yüksekliğe ait Öklid bağıntısıyla |BH|’yi bul.',
    solution: [
      {
        title: 'Yüksekliğe ait bağıntı',
        detail: '|AH|² = |BH| · |HC| olduğundan 144 = |BH| · 9 → |BH| = 16 cm.',
      },
      {
        title: 'Hipotenüsü topla',
        detail: 'H, [BC] üzerinde olduğundan |BC| = |BH| + |HC| = 16 + 9 = 25 cm’dir.',
      },
      {
        title: 'Dik kenara ait bağıntı',
        detail: 'x² = |BH| · |BC| = 16 · 25 = 400.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 20 cm bulunur. (Pisagor da doğrular: 12² + 16² = 400.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 157
  {
    id: 'triangles-157',
    topic: 'Paralel doğrular arasında dikme ve özel açılar',
    figure: {
      viewBox: '0 14 400 200',
      caption: 'Şekil 157',
      label:
        'Paralel d₁ ve d₂ doğrularından d₁ üzerindeki A noktasından d₁’e dik inen [AB] çizilmiştir; B’den d₂ üzerindeki C noktasına giden [BC] ile [BA] arasındaki açı 120°, |AB| = 3 cm, |BC| = 10 cm ve d₂ üzerindeki D noktası için |AD| = 8√2 cm’dir. Aranan açı m(ADC) = α’dır.',
      svg: `
          <defs>
            <marker id="arrow-t157-q" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="26" y1="40" x2="366" y2="40" marker-start="url(#arrow-t157-q)" marker-end="url(#arrow-t157-q)"/>
          <line class="ln" x1="26" y1="176" x2="366" y2="176" marker-start="url(#arrow-t157-q)" marker-end="url(#arrow-t157-q)"/>
          <path class="ln" d="M200,40 L200,91 L52.8,176"/>
          <path class="ln" d="M200,40 L336,176"/>
          <path class="ln" d="M200,53 L213,53 L213,40"/>

          <path class="par" d="M124,34 L131,40 L124,46"/>
          <path class="par" d="M124,170 L131,176 L124,182"/>

          <path class="arc" d="M200,57 A34,34 0 0 0 170.6,108"/>
          <text class="val" x="152" y="70" text-anchor="end">120°</text>

          <path class="arc" d="M296,176 A40,40 0 0 1 307.7,147.7"/>
          <text class="val" x="282" y="159" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <circle class="pt" cx="200" cy="91" r="3.2"/>
          <circle class="pt" cx="52.8" cy="176" r="3.2"/>
          <circle class="pt" cx="336" cy="176" r="3.2"/>

          <text class="val" x="193" y="70" text-anchor="end">3</text>
          <text class="val" x="116" y="124" text-anchor="end">10</text>
          <text class="val" x="282" y="100">8√2</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="209" y="96">B</text>
          <text x="46" y="198" text-anchor="end">C</text>
          <text x="330" y="198" text-anchor="middle">D</text>
          <text x="378" y="45">d₁</text>
          <text x="378" y="181">d₂</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 14 400 200',
      caption: 'Şekil 157 — [AB] uzatılarak d₂ üzerinde H bulundu',
      label:
        'Aynı şekilde [AB] uzatılarak d₂ doğrusunu H noktasında dik kestiği gösterilmiş, m(HBC) = 60° yazılmış ve |BH| = 5 cm bulunmuştur.',
      svg: `
          <defs>
            <marker id="arrow-t157-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="26" y1="40" x2="366" y2="40" marker-start="url(#arrow-t157-s)" marker-end="url(#arrow-t157-s)"/>
          <line class="ln" x1="26" y1="176" x2="366" y2="176" marker-start="url(#arrow-t157-s)" marker-end="url(#arrow-t157-s)"/>
          <path class="ln" d="M200,40 L200,91 L52.8,176"/>
          <path class="ln" d="M200,40 L336,176"/>
          <path class="ln" d="M200,53 L213,53 L213,40"/>
          <path class="aux" d="M200,91 L200,176"/>
          <path class="ln" d="M200,163 L213,163 L213,176"/>

          <path class="par" d="M124,34 L131,40 L124,46"/>
          <path class="par" d="M124,170 L131,176 L124,182"/>

          <path class="arc" d="M200,121 A30,30 0 0 1 174,106"/>
          <text class="val" x="172" y="138" text-anchor="end">60°</text>

          <path class="arc" d="M296,176 A40,40 0 0 1 307.7,147.7"/>
          <text class="val" x="282" y="159" text-anchor="middle">α</text>

          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <circle class="pt" cx="200" cy="91" r="3.2"/>
          <circle class="pt" cx="200" cy="176" r="3.2"/>
          <circle class="pt" cx="52.8" cy="176" r="3.2"/>
          <circle class="pt" cx="336" cy="176" r="3.2"/>

          <text class="val" x="193" y="70" text-anchor="end">3</text>
          <text class="val" x="207" y="140">5</text>
          <text class="val" x="116" y="124" text-anchor="end">10</text>
          <text class="val" x="282" y="100">8√2</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="209" y="96">B</text>
          <text x="46" y="198" text-anchor="end">C</text>
          <text x="330" y="198" text-anchor="middle">D</text>
          <text x="200" y="198" text-anchor="middle">H</text>
          <text x="378" y="45">d₁</text>
          <text x="378" y="181">d₂</text>
        `,
    },
    given: [
      'd₁ ∥ d₂',
      '[BA] ⊥ d₁',
      '|AB| = 3 cm',
      '|BC| = 10 cm',
      '|AD| = 8√2 cm',
      'm(ABC) = 120°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ADC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '40' },
      { key: 'C', text: '45' },
      { key: 'D', text: '50' },
      { key: 'E', text: '60' },
    ],
    answer: 'C',
    hint: 'A’nın d₂’ye uzaklığını bul: [AB]’yi uzatıp C’nin B’den ne kadar aşağıda olduğunu hesapla.',
    solution: [
      {
        title: 'Dikmeyi uzat',
        detail:
          '[BA] ⊥ d₁ ve d₁ ∥ d₂ olduğundan [AB]’nin uzantısı d₂’yi de dik keser; kesim noktası H olsun. |AH|, A’nın d₂’ye uzaklığıdır.',
      },
      {
        title: 'BHC üçgeninde 60°’lik açı',
        detail:
          'm(ABC) = 120° ve A, B, H doğrusal olduğundan m(HBC) = 180° − 120° = 60°’dir. BHC üçgeni H’de diktir.',
      },
      {
        title: '|BH|’yi bul',
        detail: '30° − 60° − 90° üçgeninde |BH| = |BC| · cos60° = 10 · 1/2 = 5 cm olur.',
      },
      {
        title: 'A’nın d₂’ye uzaklığı',
        detail: '|AH| = |AB| + |BH| = 3 + 5 = 8 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'AHD dik üçgeninde sin α = |AH| / |AD| = 8 / (8√2) = √2/2 olduğundan α = 45° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 158
  {
    id: 'triangles-158',
    topic: 'Hipotenüse ait kenarortay ve Pisagor',
    figure: {
      viewBox: '0 70 400 212',
      caption: 'Şekil 158',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde D, [AC] hipotenüsünün orta noktasıdır; [BD] çizilmiş ve A’dan [BD]’ye inen dikmenin ayağı E ile gösterilmiştir. |BE| = 4 cm, |ED| = 6 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M38,89 L38,250 L360,250 Z"/>
          <path class="ln" d="M38,250 L199,169.5"/>
          <path class="ln" d="M38,89 L102.4,217.8"/>
          <path class="ln" d="M38,236 L52,236 L52,250"/>
          <path class="ln" d="M114,212 L108.2,200.4 L96.6,206.2"/>

          <path class="tick" d="M115.8,134.6 L121.2,123.9"/>
          <path class="tick" d="M276.8,215.1 L282.2,204.4"/>

          <circle class="pt" cx="38" cy="89" r="3.2"/>
          <circle class="pt" cx="38" cy="250" r="3.2"/>
          <circle class="pt" cx="360" cy="250" r="3.2"/>
          <circle class="pt" cx="199" cy="169.5" r="3.2"/>
          <circle class="pt" cx="102.4" cy="217.8" r="3.2"/>

          <text class="val" x="66" y="228" text-anchor="middle">4</text>
          <text class="val" x="144" y="184" text-anchor="middle">6</text>
          <text class="val" x="30" y="175" text-anchor="end">x</text>

          <text x="30" y="82" text-anchor="end">A</text>
          <text x="30" y="272" text-anchor="end">B</text>
          <text x="368" y="272">C</text>
          <text x="207" y="165">D</text>
          <text x="108" y="238" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      '[AE] ⊥ [BD]',
      '|AD| = |DC|',
      '|BE| = 4 cm',
      '|ED| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√5' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '5√5' },
      { key: 'D', text: '6√5' },
      { key: 'E', text: '8√5' },
    ],
    answer: 'B',
    hint: '[BD], hipotenüse ait kenarortaydır; hipotenüse ait kenarortay hipotenüsün yarısına eşittir.',
    solution: [
      {
        title: 'Kenarortayı topla',
        detail: 'E, [BD] üzerinde olduğundan |BD| = |BE| + |ED| = 4 + 6 = 10 cm’dir.',
      },
      {
        title: 'Hipotenüse ait kenarortay',
        detail:
          '|AD| = |DC| olduğundan [BD], dik üçgende hipotenüse ait kenarortaydır. Bu kenarortay hipotenüsün yarısına eşittir: |DA| = |DB| = |DC| = 10 cm.',
      },
      {
        title: 'AED üçgeninde Pisagor',
        detail: '[AE] ⊥ [BD] olduğundan |AE|² = |AD|² − |ED|² = 10² − 6² = 100 − 36 = 64.',
      },
      {
        title: 'ABE üçgeninde Pisagor',
        detail: 'x² = |AE|² + |BE|² = 64 + 4² = 64 + 16 = 80.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √80 = 4√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 159
  {
    id: 'triangles-159',
    topic: 'İkizkenar kurulumları ve yükseklikle Pisagor',
    figure: {
      viewBox: '0 62 400 262',
      caption: 'Şekil 159',
      label:
        'ABC üçgeninde D noktası [BC] üzerindedir; m(ABC) = m(BAD) = α, m(ACB) = 2α, |BD| = 25 cm, |DC| = 14 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M304,86 L32,290 L363.5,290 Z"/>
          <path class="ln" d="M304,86 L244.5,290"/>

          <path class="arc" d="M78,290 A46,46 0 0 0 68.8,262.4"/>
          <text class="val" x="91" y="276" text-anchor="middle">α</text>

          <path class="arc" d="M264,116 A50,50 0 0 0 290,134"/>
          <text class="val" x="266" y="146" text-anchor="middle">α</text>

          <path class="arc" d="M319.5,290 A44,44 0 0 1 351.2,247.8"/>
          <text class="val" x="314" y="258" text-anchor="middle">2α</text>

          <circle class="pt" cx="304" cy="86" r="3.2"/>
          <circle class="pt" cx="32" cy="290" r="3.2"/>
          <circle class="pt" cx="363.5" cy="290" r="3.2"/>
          <circle class="pt" cx="244.5" cy="290" r="3.2"/>

          <text class="val" x="154" y="178" text-anchor="end">x</text>
          <text class="val" x="138" y="312" text-anchor="middle">25</text>
          <text class="val" x="304" y="312" text-anchor="middle">14</text>

          <text x="304" y="76" text-anchor="middle">A</text>
          <text x="24" y="312" text-anchor="end">B</text>
          <text x="371" y="312">C</text>
          <text x="244.5" y="312" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 62 400 262',
      caption: 'Şekil 159 — A’dan [BC]’ye dikme indirildi',
      label:
        'Aynı üçgende |AD| = |AC| olduğu çizgilerle işaretlenmiş, A’dan [BC]’ye inen dikmenin ayağı H ile gösterilmiş, |DH| = |HC| = 7 cm ve |AH| = 24 cm bulunmuştur.',
      svg: `
          <path class="ln" d="M304,86 L32,290 L363.5,290 Z"/>
          <path class="ln" d="M304,86 L244.5,290"/>
          <path class="aux" d="M304,86 L304,290"/>
          <path class="ln" d="M304,277 L317,277 L317,290"/>

          <path class="tick" d="M268.5,186.3 L280,189.7"/>
          <path class="tick" d="M328,186.3 L339.5,189.7"/>

          <path class="arc" d="M78,290 A46,46 0 0 0 68.8,262.4"/>
          <text class="val" x="91" y="276" text-anchor="middle">α</text>

          <path class="arc" d="M264,116 A50,50 0 0 0 290,134"/>
          <text class="val" x="266" y="146" text-anchor="middle">α</text>

          <path class="arc" d="M319.5,290 A44,44 0 0 1 351.2,247.8"/>
          <text class="val" x="330" y="262" text-anchor="middle">2α</text>

          <circle class="pt" cx="304" cy="86" r="3.2"/>
          <circle class="pt" cx="32" cy="290" r="3.2"/>
          <circle class="pt" cx="363.5" cy="290" r="3.2"/>
          <circle class="pt" cx="244.5" cy="290" r="3.2"/>
          <circle class="pt" cx="304" cy="290" r="3.2"/>

          <text class="val" x="154" y="178" text-anchor="end">x</text>
          <text class="val" x="138" y="312" text-anchor="middle">25</text>
          <text class="val" x="274" y="312" text-anchor="middle">7</text>
          <text class="val" x="334" y="312" text-anchor="middle">7</text>
          <text class="val" x="310" y="222">24</text>

          <text x="304" y="76" text-anchor="middle">A</text>
          <text x="24" y="312" text-anchor="end">B</text>
          <text x="371" y="312">C</text>
          <text x="244.5" y="312" text-anchor="middle">D</text>
          <text x="298" y="312" text-anchor="end">H</text>
        `,
    },
    given: ['ABC bir üçgen', 'm(ABC) = m(BAD) = α', 'm(ACB) = 2α', '|BD| = 25 cm', '|DC| = 14 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '35' },
      { key: 'C', text: '36' },
      { key: 'D', text: '40' },
      { key: 'E', text: '45' },
    ],
    answer: 'D',
    hint: 'Önce ABD üçgeninde, sonra ADC üçgeninde eşit açıların karşısındaki kenarları eşitle.',
    solution: [
      {
        title: 'ABD ikizkenar',
        detail:
          'm(ABD) = m(BAD) = α olduğundan ABD üçgeni ikizkenardır ve |AD| = |BD| = 25 cm olur.',
      },
      {
        title: 'ADC de ikizkenar',
        detail:
          'm(ADC), ABD üçgeninin D’deki dış açısıdır: m(ADC) = α + α = 2α. m(ACD) = 2α da verildiğinden ADC üçgeni ikizkenardır ve |AC| = |AD| = 25 cm olur.',
      },
      {
        title: 'Yüksekliği indir',
        detail:
          'A’dan [BC]’ye inen dikmenin ayağı H olsun. |AD| = |AC| olduğundan H, [DC]’nin orta noktasıdır: |DH| = |HC| = 14/2 = 7 cm.',
      },
      {
        title: 'Yüksekliği bul',
        detail: 'ADH dik üçgeninde |AH|² = 25² − 7² = 625 − 49 = 576 → |AH| = 24 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BH| = |BD| + |DH| = 25 + 7 = 32 cm ve ABH dik üçgeninde x² = 32² + 24² = 1024 + 576 = 1600 → x = 40 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 160
  {
    id: 'triangles-160',
    topic: 'Açıortaylarla doğan dik açı ve Öklid bağıntısı',
    figure: {
      viewBox: '0 100 400 214',
      caption: 'Şekil 160',
      label:
        'D, H, E aynı doğru üzerindedir ve B bu doğrunun dışındadır. B’den geçen doğru üzerinde A ile C bulunur; [BD] ABH açısının, [BE] ise HBC açısının açıortayıdır. [BH] ⊥ [DE], |BD| = 6 cm, |DH| = 4 cm ve |BE| = x’tir.',
      svg: `
          <path class="ln" d="M48,280 L354,280"/>
          <path class="ln" d="M30,145.2 L308.2,114.1"/>
          <path class="ln" d="M184,128 L48,280"/>
          <path class="ln" d="M184,128 L354,280"/>
          <path class="ln" d="M184,128 L184,280"/>
          <path class="ln" d="M184,267 L197,267 L197,280"/>

          <path class="arc" d="M150.2,131.8 A34,34 0 0 0 161.3,153.3"/>
          <path class="arc" d="M161.3,153.3 A34,34 0 0 0 184,162"/>
          <path class="arc" d="M184,162 A34,34 0 0 0 209.3,150.7"/>
          <path class="arc" d="M209.3,150.7 A34,34 0 0 0 217.8,124.2"/>

          <text class="val" x="137" y="157" text-anchor="middle">α</text>
          <text class="val" x="165" y="182" text-anchor="middle">α</text>
          <text class="val" x="206" y="181" text-anchor="middle">β</text>
          <text class="val" x="240" y="151" text-anchor="middle">β</text>

          <circle class="pt" cx="30" cy="145.2" r="3.2"/>
          <circle class="pt" cx="184" cy="128" r="3.2"/>
          <circle class="pt" cx="308.2" cy="114.1" r="3.2"/>
          <circle class="pt" cx="48" cy="280" r="3.2"/>
          <circle class="pt" cx="184" cy="280" r="3.2"/>
          <circle class="pt" cx="354" cy="280" r="3.2"/>

          <text class="val" x="102" y="198" text-anchor="end">6</text>
          <text class="val" x="116" y="302" text-anchor="middle">4</text>
          <text class="val" x="283" y="197">x</text>

          <text x="22" y="150" text-anchor="end">A</text>
          <text x="177" y="120" text-anchor="end">B</text>
          <text x="316" y="119">C</text>
          <text x="40" y="302" text-anchor="end">D</text>
          <text x="184" y="302" text-anchor="middle">H</text>
          <text x="362" y="302">E</text>
        `,
    },
    given: [
      'BDE bir üçgen',
      'A, B, C doğrusal',
      '[BD], ABH açısının açıortayı',
      '[BE], HBC açısının açıortayı',
      '[BH] ⊥ [DE]',
      '|BD| = 6 cm',
      '|DH| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BE| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3√3' },
      { key: 'B', text: '3√5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '3√6' },
      { key: 'E', text: '4√5' },
    ],
    answer: 'B',
    hint: 'B’deki dört açıyı α, α, β, β diye adlandır; hepsinin toplamı doğru açıdır.',
    solution: [
      {
        title: 'Açıları adlandır',
        detail:
          'm(ABD) = m(DBH) = α ve m(HBE) = m(EBC) = β olsun. A, B, C doğrusal olduğundan bu dört açının toplamı 180°’dir: 2α + 2β = 180°.',
      },
      {
        title: 'DBE dik açı',
        detail: 'Buradan α + β = 90°, yani m(DBE) = α + β = 90°’dir. DBE üçgeni B’de diktir.',
      },
      {
        title: 'Dik kenara ait Öklid bağıntısı',
        detail:
          '[BH], hipotenüs [DE]’ye ait yüksekliktir. |BD|² = |DH| · |DE| → 6² = 4 · |DE| → |DE| = 9 cm.',
      },
      {
        title: 'İkinci parçayı bul',
        detail: '|HE| = |DE| − |DH| = 9 − 4 = 5 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = |HE| · |DE| = 5 · 9 = 45 olduğundan x = 3√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 161
  {
    id: 'triangles-161',
    topic: 'İkizkenar dik üçgen ve 30-60-90 kurulumu',
    figure: {
      viewBox: '0 76 400 262',
      caption: 'Şekil 161',
      label:
        'B köşesindeki açısı dik olan ve |AB| = |BC| = 4 cm olan ABC üçgeni, ADC üçgeninin içinde durur; m(DAB) = 45°, m(BCD) = 15° ve |AD| = x’tir.',
      svg: `
          <path class="ln" d="M237.8,100 L30,307.8 L357.8,220 Z"/>
          <path class="ln" d="M237.8,100 L237.8,220 L357.8,220"/>
          <path class="ln" d="M237.8,207 L250.8,207 L250.8,220"/>

          <path class="arc" d="M209.5,128.3 A40,40 0 0 0 237.8,140"/>
          <text class="val" x="210" y="158" text-anchor="middle">45°</text>

          <path class="arc" d="M311.8,220 A46,46 0 0 0 313.4,231.9"/>
          <text class="val" x="270" y="240" text-anchor="middle">15°</text>

          <circle class="pt" cx="237.8" cy="100" r="3.2"/>
          <circle class="pt" cx="30" cy="307.8" r="3.2"/>
          <circle class="pt" cx="357.8" cy="220" r="3.2"/>
          <circle class="pt" cx="237.8" cy="220" r="3.2"/>

          <text class="val" x="246" y="165">4</text>
          <text class="val" x="315" y="212" text-anchor="middle">4</text>
          <text class="val" x="118" y="196" text-anchor="end">x</text>

          <text x="237.8" y="92" text-anchor="middle">A</text>
          <text x="229" y="216" text-anchor="end">B</text>
          <text x="366" y="242">C</text>
          <text x="22" y="330" text-anchor="end">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 76 400 262',
      caption: 'Şekil 161 — [AC] çizildi',
      label:
        'Aynı şekilde [AC] köşegeni çizilmiş, m(DAC) = 90° ve m(ACD) = 60° olduğu işaretlenmiş, |AC| = 4√2 cm bulunmuştur.',
      svg: `
          <path class="ln" d="M237.8,100 L30,307.8 L357.8,220 Z"/>
          <path class="ln" d="M237.8,100 L237.8,220 L357.8,220"/>
          <path class="ln" d="M237.8,207 L250.8,207 L250.8,220"/>
          <path class="aux" d="M237.8,100 L357.8,220"/>
          <path class="aux-head" d="M227.9,109.9 L237.8,119.8 L247.7,109.9"/>

          <path class="arc" d="M209.5,128.3 A40,40 0 0 0 237.8,140"/>
          <text class="val" x="210" y="158" text-anchor="middle">45°</text>

          <path class="arc" d="M311.8,220 A46,46 0 0 0 313.4,231.9"/>
          <text class="val" x="270" y="240" text-anchor="middle">15°</text>

          <path class="arc" d="M299.9,235.5 A60,60 0 0 1 315.4,177.6"/>
          <text class="val" x="280" y="202" text-anchor="middle">60°</text>

          <circle class="pt" cx="237.8" cy="100" r="3.2"/>
          <circle class="pt" cx="30" cy="307.8" r="3.2"/>
          <circle class="pt" cx="357.8" cy="220" r="3.2"/>
          <circle class="pt" cx="237.8" cy="220" r="3.2"/>

          <text class="val" x="246" y="165">4</text>
          <text class="val" x="315" y="212" text-anchor="middle">4</text>
          <text class="val" x="118" y="196" text-anchor="end">x</text>
          <text class="val" x="315" y="151">4√2</text>

          <text x="237.8" y="92" text-anchor="middle">A</text>
          <text x="229" y="216" text-anchor="end">B</text>
          <text x="366" y="242">C</text>
          <text x="22" y="330" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'm(DAB) = 45°',
      'm(BCD) = 15°',
      '|AB| = |BC| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4√2' },
      { key: 'B', text: '4√3' },
      { key: 'C', text: '4√5' },
      { key: 'D', text: '4√6' },
      { key: 'E', text: '8√2' },
    ],
    answer: 'D',
    hint: '[AC]’yi çiz: ABC ikizkenar dik üçgen olduğundan taban açıları 45°’dir.',
    solution: [
      {
        title: '[AC]’yi çiz',
        detail:
          'ABC üçgeni B’de dik ve |AB| = |BC| olduğundan ikizkenar dik üçgendir: m(BAC) = m(BCA) = 45° ve |AC| = 4√2 cm’dir.',
      },
      {
        title: 'A’daki açıyı topla',
        detail:
          'D ile C, [AB]’nin farklı yanlarında olduğundan m(DAC) = m(DAB) + m(BAC) = 45° + 45° = 90°’dir. DAC üçgeni A’da diktir.',
      },
      {
        title: 'C’deki açıyı topla',
        detail: 'm(DCA) = m(BCD) + m(BCA) = 15° + 45° = 60°’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'A’da dik olan DAC üçgeninde x = |AC| · tan60° = 4√2 · √3 = 4√6 cm bulunur. (|DC| = 2 · 4√2 = 8√2 cm’dir.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 162
  {
    id: 'triangles-162',
    topic: 'Dik açıyı üçe bölen yükseklik ve kenarortay',
    figure: {
      viewBox: '0 78 400 194',
      caption: 'Şekil 162',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan [BC]’ye inen yükseklik [AH] ile kenarortay [AM] çizilmiştir; bunlar dik açıyı α büyüklüğünde üç eşit parçaya böler.',
      svg: `
          <path class="ln" d="M120,101.4 L40,240 L360,240 Z"/>
          <path class="ln" d="M120,101.4 L120,240"/>
          <path class="ln" d="M120,101.4 L200,240"/>
          <path class="ln" d="M120,227 L133,227 L133,240"/>

          <path class="arc" d="M97,141.2 A46,46 0 0 0 120,147.4"/>
          <path class="arc" d="M120,147.4 A46,46 0 0 0 143,141.2"/>
          <path class="arc" d="M143,141.2 A46,46 0 0 0 159.8,124.4"/>

          <text class="val" x="103" y="170" text-anchor="middle">α</text>
          <text class="val" x="137" y="170" text-anchor="middle">α</text>
          <text class="val" x="167" y="153" text-anchor="middle">α</text>

          <circle class="pt" cx="120" cy="101.4" r="3.2"/>
          <circle class="pt" cx="40" cy="240" r="3.2"/>
          <circle class="pt" cx="360" cy="240" r="3.2"/>
          <circle class="pt" cx="120" cy="240" r="3.2"/>
          <circle class="pt" cx="200" cy="240" r="3.2"/>

          <text x="120" y="92" text-anchor="middle">A</text>
          <text x="32" y="262" text-anchor="end">B</text>
          <text x="368" y="262">C</text>
          <text x="120" y="262" text-anchor="middle">H</text>
          <text x="200" y="262" text-anchor="middle">M</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [AC]',
      '[AH] ⊥ [BC]',
      '[AM] kenarortay',
      'm(BAH) = m(HAM) = m(MAC)',
    ],
    stem: [
      'Bir dik üçgende, dik köşeden çizilen yükseklik ile kenarortay dik açıyı üç eşit parçaya bölüyor.',
    ],
    ask: 'Buna göre, bu üçgende hipotenüse ait yüksekliğin hipotenüse oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/4' },
      { key: 'B', text: '√3/4' },
      { key: 'C', text: '1/3' },
      { key: 'D', text: '√3/3' },
      { key: 'E', text: '1/2' },
    ],
    answer: 'B',
    hint: 'Önce parçaların büyüklüğünü bul; ABH dik üçgeni sana B açısını verir.',
    solution: [
      {
        title: 'Parçaların büyüklüğü',
        detail: 'Dik açı üç eşit parçaya bölündüğünden her parça α = 90° / 3 = 30°’dir.',
      },
      {
        title: 'Dar açıları bul',
        detail:
          'ABH üçgeni H’de diktir ve m(BAH) = 30° olduğundan m(B) = 90° − 30° = 60°, buradan m(C) = 30° olur. (Kontrol: |MA| = |MC| olduğundan m(MAC) = m(C) = 30°.)',
      },
      {
        title: 'Kenarları hipotenüs cinsinden yaz',
        detail:
          '|BC| = a olsun. m(C) = 30° karşısındaki |AB| = a/2, m(B) = 60° karşısındaki |AC| = a√3/2 olur.',
      },
      {
        title: 'Alanı iki türlü yaz',
        detail: '|AB| · |AC| / 2 = |BC| · |AH| / 2 → |AH| = (a/2 · a√3/2) / a = a√3/4.',
      },
      {
        title: 'Sonuç',
        detail: '|AH| / |BC| = (a√3/4) / a = √3/4 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 163
  {
    id: 'triangles-163',
    topic: 'Öklid bağıntısı ve hipotenüsün oranlı parçaları',
    figure: {
      viewBox: '0 100 400 224',
      caption: 'Şekil 163',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den hipotenüs [AC] üzerine inen dikmenin ayağı H’dir; |HC| = 3·|AH|, |BC| = 6 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M45,116.8 L45,290 L345,290 Z"/>
          <path class="ln" d="M45,290 L120,160.1"/>
          <path class="ln" d="M45,277 L58,277 L58,290"/>
          <path class="ln" d="M113.5,171.4 L124.8,177.9 L131.3,166.6"/>

          <circle class="pt" cx="45" cy="116.8" r="3.2"/>
          <circle class="pt" cx="45" cy="290" r="3.2"/>
          <circle class="pt" cx="345" cy="290" r="3.2"/>
          <circle class="pt" cx="120" cy="160.1" r="3.2"/>

          <text class="val" x="37" y="209" text-anchor="end">x</text>
          <text class="val" x="195" y="312" text-anchor="middle">6</text>

          <text x="45" y="108" text-anchor="middle">A</text>
          <text x="37" y="312" text-anchor="end">B</text>
          <text x="353" y="312">C</text>
          <text x="132" y="143">H</text>
        `,
    },
    given: ['ABC bir dik üçgen', '[AB] ⊥ [BC]', '[BH] ⊥ [AC]', '|HC| = 3 · |AH|', '|BC| = 6 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '2√3' },
      { key: 'D', text: '4' },
      { key: 'E', text: '3√2' },
    ],
    answer: 'C',
    hint: '|AH| = m dersen |HC| = 3m ve |AC| = 4m olur; dik kenarlara ait Öklid bağıntısını bu harflerle yaz.',
    solution: [
      {
        title: 'Parçalara harf ver',
        detail:
          '|AH| = m olsun. |HC| = 3m verildiğinden H, [AC] üzerinde olduğu için |AC| = m + 3m = 4m olur.',
      },
      {
        title: '[BC] için Öklid bağıntısı',
        detail:
          'Dik kenarın karesi, kendisine komşu parça ile hipotenüsün çarpımıdır: |BC|² = |HC| · |AC| → 36 = 3m · 4m = 12m².',
      },
      {
        title: 'm’yi bul',
        detail: '12m² = 36 → m² = 3, yani m = √3 cm’dir.',
      },
      {
        title: '[AB] için Öklid bağıntısı',
        detail: 'x² = |AH| · |AC| = m · 4m = 4m² = 4 · 3 = 12.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = √12 = 2√3 cm bulunur. (Kontrol: |BH|² = |AH| · |HC| = 3m² = 9, |BH| = 3 ve 12 + 36 = 48 = |AC|² = (4√3)².)',
      },
    ],
  },

  // ---------------------------------------------------------------- 164
  {
    id: 'triangles-164',
    topic: 'Köşegenleri dik kesişen dörtgen',
    figure: {
      viewBox: '0 22 400 288',
      caption: 'Şekil 164',
      label:
        'Köşegenleri birbirine dik olan ABCD dörtgeni; A yukarıda, C aşağıda, B solda ve D sağdadır. |AB| = 6 cm, |BC| = 4 cm, |CD| = 5 cm ve |AD| = x’tir.',
      svg: `
          <path class="ln" d="M181,39.2 L106.9,190 L181,274 L293,190 Z"/>
          <path class="ln" d="M181,39.2 L181,274"/>
          <path class="ln" d="M106.9,190 L293,190"/>
          <path class="ln" d="M168,190 L168,177 L181,177"/>

          <circle class="pt" cx="181" cy="39.2" r="3.2"/>
          <circle class="pt" cx="106.9" cy="190" r="3.2"/>
          <circle class="pt" cx="181" cy="274" r="3.2"/>
          <circle class="pt" cx="293" cy="190" r="3.2"/>

          <text class="val" x="128" y="112" text-anchor="end">6</text>
          <text class="val" x="130" y="244" text-anchor="end">4</text>
          <text class="val" x="250" y="246">5</text>
          <text class="val" x="250" y="106">x</text>

          <text x="181" y="31" text-anchor="middle">A</text>
          <text x="98" y="196" text-anchor="end">B</text>
          <text x="181" y="296" text-anchor="middle">C</text>
          <text x="301" y="196">D</text>
        `,
    },
    given: ['ABCD bir dörtgen', '[AC] ⊥ [BD]', '|AB| = 6 cm', '|BC| = 4 cm', '|CD| = 5 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '√41' },
      { key: 'C', text: '3√5' },
      { key: 'D', text: '7' },
      { key: 'E', text: '4√3' },
    ],
    answer: 'C',
    hint: 'Köşegenlerin kesim noktasında dört dik üçgen oluşur; her kenarın karesini bu parçalar cinsinden yaz.',
    solution: [
      {
        title: 'Kesim noktasına harf ver',
        detail:
          'Köşegenlerin kesim noktası K olsun. [AC] ⊥ [BD] olduğundan AKB, BKC, CKD ve DKA üçgenlerinin dördü de K’de diktir. |KA| = a, |KB| = b, |KC| = c, |KD| = d diyelim.',
      },
      {
        title: 'Dört Pisagor bağıntısı',
        detail: '|AB|² = a² + b², |BC|² = b² + c², |CD|² = c² + d², |AD|² = a² + d² olur.',
      },
      {
        title: 'Karşılıklı kenarları eşleştir',
        detail:
          '|AB|² + |CD|² = a² + b² + c² + d² ve |BC|² + |AD|² = b² + c² + a² + d² aynı toplamı verir: |AB|² + |CD|² = |BC|² + |AD|².',
      },
      {
        title: 'Sayıları yerine koy',
        detail: '6² + 5² = 4² + x² → 36 + 25 = 16 + x² → x² = 45.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √45 = 3√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 165
  {
    id: 'triangles-165',
    topic: 'İki dik açı ve 30°’lik açıyla kurulan dik üçgenler',
    figure: {
      viewBox: '0 18 400 252',
      caption: 'Şekil 165',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninin dışında, [AB]’nin üst tarafında D noktası vardır; [AD] ⊥ [DC], m(DCB) = 30°, |AD| = 5 cm, |AB| = 4√3 cm ve |BC| = x’tir.',
      svg: `
          <path class="ln" d="M46,128.1 L46,232 L376,232 Z"/>
          <path class="ln" d="M46,128.1 L83.5,63.1 L376,232"/>
          <path class="ln" d="M46,219 L59,219 L59,232"/>
          <path class="ln" d="M77.5,73.5 L87.9,79.5 L93.9,69.1"/>

          <path class="arc" d="M330,232 A46,46 0 0 1 336.2,209"/>
          <text class="val" x="320" y="218" text-anchor="middle">30°</text>

          <circle class="pt" cx="46" cy="128.1" r="3.2"/>
          <circle class="pt" cx="46" cy="232" r="3.2"/>
          <circle class="pt" cx="376" cy="232" r="3.2"/>
          <circle class="pt" cx="83.5" cy="63.1" r="3.2"/>

          <text class="val" x="38" y="184" text-anchor="end">4√3</text>
          <text class="val" x="78" y="100">5</text>
          <text class="val" x="211" y="254" text-anchor="middle">x</text>

          <text x="38" y="124" text-anchor="end">A</text>
          <text x="83.5" y="55" text-anchor="middle">D</text>
          <text x="38" y="254" text-anchor="end">B</text>
          <text x="384" y="254">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 18 400 252',
      caption: 'Şekil 165 — [BA] uzatıldı',
      label:
        'Aynı şekilde [BA], [CD] ile P noktasında kesişene kadar uzatılmıştır; PBC üçgeni B’de dik ve m(BPC) = 60°’dir.',
      svg: `
          <path class="ln" d="M46,128.1 L46,232 L376,232 Z"/>
          <path class="ln" d="M46,128.1 L83.5,63.1 L376,232"/>
          <path class="ln" d="M46,219 L59,219 L59,232"/>
          <path class="ln" d="M77.5,73.5 L87.9,79.5 L93.9,69.1"/>
          <path class="aux" d="M46,128.1 L46,41.5"/>
          <path class="aux" d="M83.5,63.1 L46,41.5"/>
          <path class="aux-head" d="M38.5,51.4 L46,41.5 L53.5,51.4"/>

          <path class="arc" d="M330,232 A46,46 0 0 1 336.2,209"/>
          <text class="val" x="320" y="218" text-anchor="middle">30°</text>

          <path class="arc" d="M46,71.5 A30,30 0 0 0 72,56.5"/>
          <text class="val" x="36" y="70" text-anchor="end">60°</text>

          <circle class="pt" cx="46" cy="128.1" r="3.2"/>
          <circle class="pt" cx="46" cy="232" r="3.2"/>
          <circle class="pt" cx="376" cy="232" r="3.2"/>
          <circle class="pt" cx="83.5" cy="63.1" r="3.2"/>
          <circle class="pt" cx="46" cy="41.5" r="3.2"/>

          <text class="val" x="38" y="184" text-anchor="end">4√3</text>
          <text class="val" x="78" y="100">5</text>
          <text class="val" x="211" y="254" text-anchor="middle">x</text>

          <text x="46" y="30" text-anchor="middle">P</text>
          <text x="38" y="124" text-anchor="end">A</text>
          <text x="83.5" y="55" text-anchor="middle">D</text>
          <text x="38" y="254" text-anchor="end">B</text>
          <text x="384" y="254">C</text>
        `,
    },
    given: ['[AD] ⊥ [DC]', '[AB] ⊥ [BC]', 'm(DCB) = 30°', '|AD| = 5 cm', '|AB| = 4√3 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '22' },
      { key: 'D', text: '24' },
      { key: 'E', text: '26' },
    ],
    answer: 'C',
    hint: '[BA]’yı, [CD] doğrusunu kestiği noktaya kadar uzat: 30°’lik açı sana 60°’lik iki dik üçgen verir.',
    solution: [
      {
        title: '[BA]’yı uzat',
        detail:
          '[BA] uzatılıp [CD] doğrusuyla kesiştiği nokta P olsun. PBC üçgeni B’de dik ve m(BCP) = 30° olduğundan m(BPC) = 60°’dir.',
      },
      {
        title: 'PBC üçgeni',
        detail:
          'B’de dik olan PBC üçgeninde 30°’nin karşısındaki |PB| kenarı için |PB| = |BC| · tan30° = x√3/3 olur.',
      },
      {
        title: 'APD üçgeni',
        detail:
          'D, [PC] üzerinde olduğundan APD üçgeni D’de diktir ve m(APD) = m(BPC) = 60°’dir. |AD| = |PA| · sin60° → |PA| = 5 / (√3/2) = 10√3/3 cm.',
      },
      {
        title: 'P, A ve B doğrusal',
        detail:
          'A, [PB] üzerinde olduğundan |PB| = |PA| + |AB| = 10√3/3 + 4√3 = 10√3/3 + 12√3/3 = 22√3/3 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'x√3/3 = 22√3/3 olduğundan x = 22 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 166
  {
    id: 'triangles-166',
    topic: 'Öklid bağıntısı ve 30°-60°-90° üçgeni',
    figure: {
      viewBox: '0 82 400 200',
      caption: 'Şekil 166',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde hipotenüs [AC] yatay çizilmiş, B’den [AC] üzerine inen dikmenin ayağı H’dir; m(HBC) = 30° ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M32,250 L284,104.5 L368,250 Z"/>
          <path class="ln" d="M284,104.5 L284,250"/>
          <path class="ln" d="M272.7,111 L279.2,122.3 L290.5,115.8"/>
          <path class="ln" d="M284,237 L297,237 L297,250"/>

          <path class="arc" d="M284,148.5 A44,44 0 0 0 306,142.6"/>
          <text class="val" x="303" y="172" text-anchor="middle">30°</text>

          <circle class="pt" cx="32" cy="250" r="3.2"/>
          <circle class="pt" cx="284" cy="104.5" r="3.2"/>
          <circle class="pt" cx="368" cy="250" r="3.2"/>
          <circle class="pt" cx="284" cy="250" r="3.2"/>

          <text class="val" x="160" y="272" text-anchor="middle">x</text>

          <text x="284" y="96" text-anchor="middle">B</text>
          <text x="24" y="272" text-anchor="end">A</text>
          <text x="376" y="272">C</text>
          <text x="284" y="272" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      '[BH] ⊥ [AC]',
      'm(HBC) = 30°',
      '|AH| · |HC| = 48 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '16' },
      { key: 'D', text: '18' },
      { key: 'E', text: '20' },
    ],
    answer: 'C',
    hint: 'Yüksekliğe ait Öklid bağıntısı önce |BH|’yi verir; sonra H’de dik olan iki üçgende 30° ve 60°’yi kullan.',
    solution: [
      {
        title: 'Yüksekliğe ait bağıntı',
        detail:
          'Hipotenüse ait yükseklik için |BH|² = |AH| · |HC| = 48 olur, yani |BH| = √48 = 4√3 cm’dir.',
      },
      {
        title: 'BHC üçgeni',
        detail:
          'BHC üçgeni H’de diktir ve m(HBC) = 30°’dir. |HC| = |BH| · tan30° = 4√3 · (√3/3) = 4 cm.',
      },
      {
        title: 'ABH üçgeni',
        detail:
          'm(ABC) = 90° olduğundan m(ABH) = 90° − 30° = 60°’dir. H’de dik olan ABH üçgeninde |AH| = |BH| · tan60° = 4√3 · √3 = 12 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'H, [AC] üzerinde olduğundan x = |AH| + |HC| = 12 + 4 = 16 cm bulunur. (Kontrol: 12 · 4 = 48.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 167
  {
    id: 'triangles-167',
    topic: 'Hipotenüse ait kenarortayla dik kenar bulma',
    figure: {
      viewBox: '0 58 400 232',
      caption: 'Şekil 167',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde D, [AC] hipotenüsünün orta noktasıdır ve [BD] çizilmiştir; |AB| = 16 cm, |BD| = 17 cm ve |BC| = x’tir.',
      svg: `
          <path class="ln" d="M40,82 L40,250 L355,250 Z"/>
          <path class="ln" d="M40,250 L197.5,166"/>
          <path class="ln" d="M40,237 L53,237 L53,250"/>

          <path class="tick" d="M121.6,118.7 L115.9,129.3"/>
          <path class="tick" d="M279.1,202.7 L273.4,213.3"/>

          <circle class="pt" cx="40" cy="82" r="3.2"/>
          <circle class="pt" cx="40" cy="250" r="3.2"/>
          <circle class="pt" cx="355" cy="250" r="3.2"/>
          <circle class="pt" cx="197.5" cy="166" r="3.2"/>

          <text class="val" x="32" y="170" text-anchor="end">16</text>
          <text class="val" x="127" y="224" text-anchor="middle">17</text>
          <text class="val" x="197.5" y="272" text-anchor="middle">x</text>

          <text x="40" y="74" text-anchor="middle">A</text>
          <text x="32" y="272" text-anchor="end">B</text>
          <text x="363" y="272">C</text>
          <text x="206" y="162">D</text>
        `,
    },
    given: ['ABC bir dik üçgen', '[AB] ⊥ [BC]', '|AD| = |DC|', '|AB| = 16 cm', '|BD| = 17 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '26' },
      { key: 'C', text: '28' },
      { key: 'D', text: '30' },
      { key: 'E', text: '32' },
    ],
    answer: 'D',
    hint: '[BD], dik üçgende hipotenüse ait kenarortaydır; boyu hipotenüsün yarısına eşittir.',
    solution: [
      {
        title: 'Kenarortayı tanı',
        detail:
          '|AD| = |DC| olduğundan D, [AC] hipotenüsünün orta noktasıdır; [BD] hipotenüse ait kenarortaydır.',
      },
      {
        title: 'Hipotenüsü bul',
        detail:
          'Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısına eşittir: |AC| = 2 · |BD| = 2 · 17 = 34 cm.',
      },
      {
        title: 'ABC üçgeninde Pisagor',
        detail: 'x² = |AC|² − |AB|² = 34² − 16² = 1156 − 256 = 900.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √900 = 30 cm bulunur. (16-30-34 üçgeni, 8-15-17 üçgeninin iki katıdır.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 168
  {
    id: 'triangles-168',
    topic: 'Dik kesen doğru parçalarında kareler farkı',
    figure: {
      viewBox: '0 26 400 250',
      caption: 'Şekil 168',
      label:
        'ABC üçgeninde B’den [AC] üzerine inen dikmenin ayağı D’dir; [BD] üzerindeki E noktası A ve C ile birleştirilmiştir. |AB| = 11 cm, |AE| = 5 cm, |BC| = 2x ve |EC| = x’tir.',
      svg: `
          <path class="ln" d="M247.3,42.8 L50,250 L344.2,250 Z"/>
          <path class="ln" d="M50,250 L291.4,137"/>
          <path class="ln" d="M247.3,42.8 L220.7,170"/>
          <path class="ln" d="M220.7,170 L344.2,250"/>
          <path class="ln" d="M279.6,142.5 L274.1,130.7 L285.9,125.2"/>

          <circle class="pt" cx="247.3" cy="42.8" r="3.2"/>
          <circle class="pt" cx="50" cy="250" r="3.2"/>
          <circle class="pt" cx="344.2" cy="250" r="3.2"/>
          <circle class="pt" cx="291.4" cy="137" r="3.2"/>
          <circle class="pt" cx="220.7" cy="170" r="3.2"/>

          <text class="val" x="136" y="134" text-anchor="end">11</text>
          <text class="val" x="250" y="109">5</text>
          <text class="val" x="276" y="226" text-anchor="middle">x</text>
          <text class="val" x="197" y="272" text-anchor="middle">2x</text>

          <text x="247.3" y="34" text-anchor="middle">A</text>
          <text x="42" y="272" text-anchor="end">B</text>
          <text x="352" y="272">C</text>
          <text x="300" y="132">D</text>
          <text x="212" y="160" text-anchor="end">E</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AC] ve [BD] ⊥ [AC]',
      'E ∈ [BD]',
      '|AB| = 11 cm',
      '|AE| = 5 cm',
      '|BC| = 2x',
      '|EC| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |EC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '4√2' },
      { key: 'C', text: '5' },
      { key: 'D', text: '2√6' },
      { key: 'E', text: '6' },
    ],
    answer: 'B',
    hint: 'B’den ve E’den yazılan Pisagor bağıntıları aynı |AD|² − |DC|² farkını verir.',
    solution: [
      {
        title: 'B’den yazılan iki Pisagor',
        detail:
          '[BD] ⊥ [AC] olduğundan ABD ve CBD üçgenleri D’de diktir: |AB|² = |AD|² + |BD|² ve |BC|² = |DC|² + |BD|². Farkları |AB|² − |BC|² = |AD|² − |DC|² olur.',
      },
      {
        title: 'E’den yazılan iki Pisagor',
        detail:
          'E, [BD] üzerinde olduğundan AED ve CED üçgenleri de D’de diktir: |AE|² = |AD|² + |ED|² ve |EC|² = |DC|² + |ED|². Buradan |AE|² − |EC|² = |AD|² − |DC|².',
      },
      {
        title: 'İki farkı eşitle',
        detail: 'Sağ taraflar aynı olduğundan |AB|² − |BC|² = |AE|² − |EC|² olur.',
      },
      {
        title: 'Sayıları yerine koy',
        detail: '11² − (2x)² = 5² − x² → 121 − 4x² = 25 − x² → 96 = 3x² → x² = 32.',
      },
      {
        title: 'Sonuç',
        detail: 'x = √32 = 4√2 cm bulunur. (|BC| = 8√2 cm’dir.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 169
  {
    id: 'triangles-169',
    topic: 'Hipotenüsün orta dikmesi ve Pisagor',
    figure: {
      viewBox: '0 -6 400 336',
      caption: 'Şekil 169',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde D noktası [AB] üzerinde, H noktası [AC] üzerindedir; [DH] ⊥ [AC] ve |AH| = |HC|’dir. |AD| = 25 cm, |BC| = 24 cm ve |DB| = x’tir.',
      svg: `
          <path class="ln" d="M98,18 L98,290 L302,290 Z"/>
          <path class="ln" d="M98,230.5 L200,154"/>
          <path class="ln" d="M98,277 L111,277 L111,290"/>
          <path class="ln" d="M207.8,164.4 L197.4,172.2 L189.6,161.8"/>

          <path class="tick" d="M144.2,89.6 L153.8,82.4"/>
          <path class="tick" d="M246.2,225.6 L255.8,218.4"/>

          <circle class="pt" cx="98" cy="18" r="3.2"/>
          <circle class="pt" cx="98" cy="290" r="3.2"/>
          <circle class="pt" cx="302" cy="290" r="3.2"/>
          <circle class="pt" cx="98" cy="230.5" r="3.2"/>
          <circle class="pt" cx="200" cy="154" r="3.2"/>

          <text class="val" x="90" y="128" text-anchor="end">25</text>
          <text class="val" x="90" y="266" text-anchor="end">x</text>
          <text class="val" x="200" y="312" text-anchor="middle">24</text>

          <text x="98" y="10" text-anchor="middle">A</text>
          <text x="90" y="234" text-anchor="end">D</text>
          <text x="90" y="312" text-anchor="end">B</text>
          <text x="310" y="312">C</text>
          <text x="208" y="150">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -6 400 336',
      caption: 'Şekil 169 — [DC] çizildi',
      label:
        'Aynı şekilde D noktası C ile birleştirilmiştir; [DH] orta dikme olduğundan |DA| = |DC| olur ve DBC üçgeni B’de diktir.',
      svg: `
          <path class="ln" d="M98,18 L98,290 L302,290 Z"/>
          <path class="ln" d="M98,230.5 L200,154"/>
          <path class="ln" d="M98,277 L111,277 L111,290"/>
          <path class="ln" d="M207.8,164.4 L197.4,172.2 L189.6,161.8"/>
          <path class="aux" d="M98,230.5 L302,290"/>

          <path class="tick" d="M144.2,89.6 L153.8,82.4"/>
          <path class="tick" d="M246.2,225.6 L255.8,218.4"/>
          <path class="tick" d="M92,124.25 L104,124.25"/>
          <path class="tick" d="M198.3,266 L201.7,254.5"/>

          <circle class="pt" cx="98" cy="18" r="3.2"/>
          <circle class="pt" cx="98" cy="290" r="3.2"/>
          <circle class="pt" cx="302" cy="290" r="3.2"/>
          <circle class="pt" cx="98" cy="230.5" r="3.2"/>
          <circle class="pt" cx="200" cy="154" r="3.2"/>

          <text class="val" x="86" y="128" text-anchor="end">25</text>
          <text class="val" x="90" y="266" text-anchor="end">x</text>
          <text class="val" x="200" y="312" text-anchor="middle">24</text>
          <text class="val" x="216" y="252">25</text>

          <text x="98" y="10" text-anchor="middle">A</text>
          <text x="90" y="234" text-anchor="end">D</text>
          <text x="90" y="312" text-anchor="end">B</text>
          <text x="310" y="312">C</text>
          <text x="208" y="150">H</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'D ∈ [AB] ve H ∈ [AC]',
      '[DH] ⊥ [AC]',
      '|AH| = |HC|',
      '|AD| = 25 cm',
      '|BC| = 24 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '6' },
      { key: 'C', text: '7' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'C',
    hint: '[DH] hem [AC]’yi ortalıyor hem de ona dik; bu, D’nin A ile C’ye eşit uzaklıkta olması demektir.',
    solution: [
      {
        title: 'Orta dikmeyi tanı',
        detail:
          'H, [AC]’nin orta noktası ve [DH] ⊥ [AC] olduğundan [DH], [AC]’nin orta dikmesidir. Orta dikme üzerindeki her nokta uçlara eşit uzaklıktadır.',
      },
      {
        title: 'Eşit uzaklık',
        detail: 'D orta dikme üzerinde olduğundan |DC| = |DA| = 25 cm olur.',
      },
      {
        title: 'DBC üçgeninde Pisagor',
        detail:
          'D, [AB] üzerinde olduğundan DBC üçgeni de B’de diktir: |DC|² = |DB|² + |BC|² → 25² = x² + 24².',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 625 − 576 = 49 olduğundan x = 7 cm bulunur. (7-24-25 üçgeni.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 170
  {
    id: 'triangles-170',
    topic: 'Yükseklik üzerinde kenarın orta dikmesi',
    figure: {
      viewBox: '0 28 400 292',
      caption: 'Şekil 170',
      label:
        'ABC üçgeninde A’dan [BC] üzerine inen dikmenin ayağı H, [BC]’nin orta noktasıdır. [AH] üzerindeki K noktasından [AC]’nin orta noktası E’ye çizilen [KE], [AC]’ye diktir. |AH| = 25 cm, |BC| = 30 cm ve |HK| = x’tir.',
      svg: `
          <path class="ln" d="M200,55 L65,280 L335,280 Z"/>
          <path class="ln" d="M200,55 L200,280"/>
          <path class="ln" d="M200,208 L267.5,167.5"/>
          <path class="ln" d="M200,267 L213,267 L213,280"/>
          <path class="ln" d="M273.7,177.8 L263.4,183.9 L257.2,173.7"/>

          <path class="tick" d="M132.5,274 L132.5,286"/>
          <path class="tick" d="M267.5,274 L267.5,286"/>
          <path class="tick" d="M228.6,114.3 L238.9,108.2"/>
          <path class="tick" d="M296.1,226.8 L306.4,220.7"/>

          <circle class="pt" cx="200" cy="55" r="3.2"/>
          <circle class="pt" cx="65" cy="280" r="3.2"/>
          <circle class="pt" cx="335" cy="280" r="3.2"/>
          <circle class="pt" cx="200" cy="280" r="3.2"/>
          <circle class="pt" cx="200" cy="208" r="3.2"/>
          <circle class="pt" cx="267.5" cy="167.5" r="3.2"/>

          <text class="val" x="192" y="250" text-anchor="end">x</text>

          <text x="200" y="47" text-anchor="middle">A</text>
          <text x="57" y="302" text-anchor="end">B</text>
          <text x="343" y="302">C</text>
          <text x="200" y="302" text-anchor="middle">H</text>
          <text x="192" y="206" text-anchor="end">K</text>
          <text x="276" y="164">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 28 400 292',
      caption: 'Şekil 170 — [KC] çizildi',
      label:
        'Aynı şekilde K noktası C ile birleştirilmiştir; [KE] orta dikme olduğundan |KA| = |KC| olur ve KHC üçgeni H’de diktir.',
      svg: `
          <path class="ln" d="M200,55 L65,280 L335,280 Z"/>
          <path class="ln" d="M200,55 L200,280"/>
          <path class="ln" d="M200,208 L267.5,167.5"/>
          <path class="ln" d="M200,267 L213,267 L213,280"/>
          <path class="ln" d="M273.7,177.8 L263.4,183.9 L257.2,173.7"/>
          <path class="aux" d="M200,208 L335,280"/>

          <path class="tick" d="M132.5,274 L132.5,286"/>
          <path class="tick" d="M267.5,274 L267.5,286"/>
          <path class="tick" d="M228.6,114.3 L238.9,108.2"/>
          <path class="tick" d="M296.1,226.8 L306.4,220.7"/>
          <path class="tick" d="M194,131.5 L206,131.5"/>
          <path class="tick" d="M264.7,249.3 L270.3,238.7"/>

          <circle class="pt" cx="200" cy="55" r="3.2"/>
          <circle class="pt" cx="65" cy="280" r="3.2"/>
          <circle class="pt" cx="335" cy="280" r="3.2"/>
          <circle class="pt" cx="200" cy="280" r="3.2"/>
          <circle class="pt" cx="200" cy="208" r="3.2"/>
          <circle class="pt" cx="267.5" cy="167.5" r="3.2"/>

          <text class="val" x="192" y="250" text-anchor="end">x</text>
          <text class="val" x="240" y="298" text-anchor="middle">15</text>

          <text x="200" y="47" text-anchor="middle">A</text>
          <text x="57" y="302" text-anchor="end">B</text>
          <text x="343" y="302">C</text>
          <text x="200" y="302" text-anchor="middle">H</text>
          <text x="192" y="206" text-anchor="end">K</text>
          <text x="276" y="164">E</text>
        `,
    },
    given: [
      '[AH] ⊥ [BC]',
      '[KE] ⊥ [AC]',
      'K ∈ [AH]',
      '|BH| = |HC|',
      '|AE| = |EC|',
      '|AH| = 25 cm',
      '|BC| = 30 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |HK| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'C',
    hint: '[KE], [AC]’nin orta dikmesidir; buradan |KA| = |KC| çıkar ve KHC üçgeninde Pisagor yazılabilir.',
    solution: [
      {
        title: 'Orta dikmeyi tanı',
        detail:
          'E, [AC]’nin orta noktası ve [KE] ⊥ [AC] olduğundan [KE], [AC]’nin orta dikmesidir. Dolayısıyla |KA| = |KC| olur.',
      },
      {
        title: 'İki parçayı x cinsinden yaz',
        detail:
          'K, [AH] üzerinde olduğundan |KA| = |AH| − |HK| = 25 − x’tir. O hâlde |KC| = 25 − x olur.',
      },
      {
        title: 'KHC üçgeninde Pisagor',
        detail:
          '|BH| = |HC| ve |BC| = 30 olduğundan |HC| = 15 cm’dir. [AH] ⊥ [BC] olduğundan KHC üçgeni H’de diktir: |KC|² = |HK|² + |HC|² → (25 − x)² = x² + 15².',
      },
      {
        title: 'Denklemi çöz',
        detail: '625 − 50x + x² = x² + 225 → 50x = 400.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 8 cm bulunur. (Kontrol: |KA| = |KC| = 17 ve 8² + 15² = 17².)',
      },
    ],
  },

  // ---------------------------------------------------------------- 171
  {
    id: 'triangles-171',
    topic: 'Aynı doğruya dik iki kenar arasındaki uzaklık',
    figure: {
      viewBox: '0 30 400 274',
      caption: 'Şekil 171',
      label:
        'Yatay çizilen [BC] doğru parçasının B ucunda yukarı doğru [AB], C ucunda aşağı doğru [CD] diktir; A ile D birleştirilmiştir. |AB| = 9 cm, |BC| = 20 cm ve |DC| = 6 cm’dir.',
      svg: `
          <path class="ln" d="M60,54 L60,180 L340,180 L340,264"/>
          <path class="ln" d="M60,54 L340,264"/>
          <path class="ln" d="M60,167 L73,167 L73,180"/>
          <path class="ln" d="M340,193 L327,193 L327,180"/>

          <circle class="pt" cx="60" cy="54" r="3.2"/>
          <circle class="pt" cx="60" cy="180" r="3.2"/>
          <circle class="pt" cx="340" cy="180" r="3.2"/>
          <circle class="pt" cx="340" cy="264" r="3.2"/>

          <text class="val" x="52" y="122" text-anchor="end">9</text>
          <text class="val" x="150" y="202" text-anchor="middle">20</text>
          <text class="val" x="348" y="230">6</text>

          <text x="52" y="50" text-anchor="end">A</text>
          <text x="52" y="196" text-anchor="end">B</text>
          <text x="348" y="174">C</text>
          <text x="348" y="288">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 30 400 274',
      caption: 'Şekil 171 — ABCF dikdörtgeni tamamlandı',
      label:
        'Aynı şekilde A’dan [BC]’ye paralel bir doğru çizilip [DC]’nin C’den öteye uzantısını F noktasında kesmesi sağlanmıştır; ABCF bir dikdörtgendir ve AFD üçgeni F’de diktir.',
      svg: `
          <path class="ln" d="M60,54 L60,180 L340,180 L340,264"/>
          <path class="ln" d="M60,54 L340,264"/>
          <path class="ln" d="M60,167 L73,167 L73,180"/>
          <path class="ln" d="M340,193 L327,193 L327,180"/>
          <path class="aux" d="M60,54 L340,54"/>
          <path class="aux" d="M340,54 L340,180"/>
          <path class="aux" d="M327,54 L327,67 L340,67"/>

          <circle class="pt" cx="60" cy="54" r="3.2"/>
          <circle class="pt" cx="60" cy="180" r="3.2"/>
          <circle class="pt" cx="340" cy="180" r="3.2"/>
          <circle class="pt" cx="340" cy="264" r="3.2"/>
          <circle class="pt" cx="340" cy="54" r="3.2"/>

          <text class="val" x="52" y="122" text-anchor="end">9</text>
          <text class="val" x="150" y="202" text-anchor="middle">20</text>
          <text class="val" x="348" y="230">6</text>
          <text class="val" x="200" y="46" text-anchor="middle">20</text>
          <text class="val" x="348" y="122">9</text>

          <text x="52" y="50" text-anchor="end">A</text>
          <text x="52" y="196" text-anchor="end">B</text>
          <text x="332" y="174" text-anchor="end">C</text>
          <text x="348" y="288">D</text>
          <text x="348" y="46">F</text>
        `,
    },
    given: [
      '[AB] ⊥ [BC]',
      '[DC] ⊥ [CB]',
      'A ile D, [BC] doğrusunun farklı taraflarında',
      '|AB| = 9 cm',
      '|BC| = 20 cm',
      '|DC| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| kaç cm’dir?',
    choices: [
      { key: 'A', text: '21' },
      { key: 'B', text: '23' },
      { key: 'C', text: '25' },
      { key: 'D', text: '27' },
      { key: 'E', text: '29' },
    ],
    answer: 'C',
    hint: 'A’dan [BC]’ye paralel çizip [DC]’nin uzantısını kes: dik kenarları 20 ve 9 + 6 olan bir dik üçgen doğar.',
    solution: [
      {
        title: 'Dikdörtgeni tamamla',
        detail:
          'A’dan [BC]’ye paralel çizilen doğru, [DC]’nin C’den öteye uzantısını F’de kessin. m(B) = m(C) = 90° olduğundan ABCF bir dikdörtgendir.',
      },
      {
        title: 'Kenarları oku',
        detail: 'Dikdörtgende |AF| = |BC| = 20 cm ve |FC| = |AB| = 9 cm olur.',
      },
      {
        title: 'FD uzunluğu',
        detail:
          'A ile D, [BC]’nin farklı taraflarında olduğundan C, [FD] üzerindedir: |FD| = |FC| + |CD| = 9 + 6 = 15 cm.',
      },
      {
        title: 'AFD üçgeninde Pisagor',
        detail: '[AF] ⊥ [FD] olduğundan |AD|² = 20² + 15² = 400 + 225 = 625.',
      },
      {
        title: 'Sonuç',
        detail: '|AD| = √625 = 25 cm bulunur. (15-20-25 üçgeni, 3-4-5 üçgeninin beş katıdır.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 172
  {
    id: 'triangles-172',
    topic: '135°’lik açıyı dikme ile çözme',
    figure: {
      viewBox: '0 62 400 224',
      caption: 'Şekil 172',
      label:
        'ABC geniş açılı bir üçgendir; B köşesindeki açı 135°, C köşesindeki açı 30°’dir. |AC| = 20 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M50,90 L210,250 L327.1,250 Z"/>

          <path class="arc" d="M240,250 A30,30 0 0 0 188.8,228.8"/>
          <text class="val" x="225" y="216" text-anchor="middle">135°</text>

          <path class="arc" d="M285.1,250 A42,42 0 0 1 290.7,229"/>
          <text class="val" x="267" y="238" text-anchor="middle">30°</text>

          <circle class="pt" cx="50" cy="90" r="3.2"/>
          <circle class="pt" cx="210" cy="250" r="3.2"/>
          <circle class="pt" cx="327.1" cy="250" r="3.2"/>

          <text class="val" x="198" y="152" text-anchor="middle">20</text>
          <text class="val" x="114" y="188" text-anchor="end">x</text>

          <text x="50" y="82" text-anchor="middle">A</text>
          <text x="210" y="272" text-anchor="middle">B</text>
          <text x="335" y="272">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 62 400 224',
      caption: 'Şekil 172 — [AH] dikmesi indirildi',
      label:
        'Aynı şekilde A’dan [BC] doğrusuna indirilen dikmenin ayağı H, B’nin dışındadır; m(ABH) = 45° ve AHC üçgeni H’de diktir.',
      svg: `
          <path class="ln" d="M50,90 L210,250 L327.1,250 Z"/>
          <path class="aux" d="M50,90 L50,250"/>
          <path class="aux" d="M50,250 L210,250"/>
          <path class="aux" d="M50,237 L63,237 L63,250"/>

          <path class="arc" d="M240,250 A30,30 0 0 0 188.8,228.8"/>
          <text class="val" x="225" y="216" text-anchor="middle">135°</text>

          <path class="arc" d="M285.1,250 A42,42 0 0 1 290.7,229"/>
          <text class="val" x="267" y="238" text-anchor="middle">30°</text>

          <path class="arc" d="M182,250 A28,28 0 0 1 190.2,230.2"/>
          <text class="val" x="166" y="236" text-anchor="middle">45°</text>

          <circle class="pt" cx="50" cy="90" r="3.2"/>
          <circle class="pt" cx="210" cy="250" r="3.2"/>
          <circle class="pt" cx="327.1" cy="250" r="3.2"/>
          <circle class="pt" cx="50" cy="250" r="3.2"/>

          <text class="val" x="198" y="152" text-anchor="middle">20</text>
          <text class="val" x="114" y="188" text-anchor="end">x</text>
          <text class="val" x="42" y="176" text-anchor="end">10</text>

          <text x="50" y="82" text-anchor="middle">A</text>
          <text x="210" y="272" text-anchor="middle">B</text>
          <text x="335" y="272">C</text>
          <text x="50" y="272" text-anchor="middle">H</text>
        `,
    },
    given: ['ABC bir üçgen', 'm(ABC) = 135°', 'm(ACB) = 30°', '|AC| = 20 cm'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '8√2' },
      { key: 'C', text: '10√2' },
      { key: 'D', text: '10√3' },
      { key: 'E', text: '12√2' },
    ],
    answer: 'C',
    hint: 'A’dan [BC] doğrusuna dikme indir; ayak B’nin dışına düşer ve 30°’lik ile 45°’lik iki tanıdık dik üçgen doğar.',
    solution: [
      {
        title: 'Dikmeyi indir',
        detail:
          'A’dan [BC] doğrusuna indirilen dikmenin ayağı H olsun. m(ABC) = 135° geniş açı olduğundan H, B’nin C’den uzak tarafında kalır.',
      },
      {
        title: 'AHC üçgeni',
        detail:
          'H’de dik olan AHC üçgeninde m(ACH) = 30°’dir. 30°’nin karşısındaki dik kenar hipotenüsün yarısı olduğundan |AH| = |AC| / 2 = 20 / 2 = 10 cm.',
      },
      {
        title: 'ABH üçgeni',
        detail:
          'B, [HC] üzerinde olduğundan m(ABH) = 180° − 135° = 45°’dir. H’de dik olan ABH üçgeni ikizkenar dik üçgendir ve hipotenüsü |AB| = |AH| · √2 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 10 · √2 = 10√2 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 173
  {
    id: 'triangles-173',
    topic: 'Köşegenleri dik kesişen dik yamukta Öklid bağıntısı',
    figure: {
      viewBox: '0 24 440 240',
      caption: 'Şekil 173',
      label:
        'B ve C köşelerindeki açıları dik olan bir dik yamukta [BA] ile [CD] aynı yöne bakar; köşegenler [AC] ile [BD], E noktasında dik kesişir. |AE| = 2 cm, |BE| = 4 cm ve |ED| = x’tir.',
      svg: `
          <path class="ln" d="M46,58 L131,58"/>
          <path class="ln" d="M46,58 L46,228"/>
          <path class="ln" d="M46,228 L386,228"/>
          <path class="ln" d="M131,58 L46,228"/>
          <path class="ln" d="M46,58 L386,228"/>
          <path class="ln" d="M59,58 L59,71 L46,71"/>
          <path class="ln" d="M46,215 L59,215 L59,228"/>
          <path class="ln" d="M119.4,81.3 L108.6,75.9 L103.3,86.6"/>

          <circle class="pt" cx="46" cy="58" r="3.2"/>
          <circle class="pt" cx="131" cy="58" r="3.2"/>
          <circle class="pt" cx="46" cy="228" r="3.2"/>
          <circle class="pt" cx="386" cy="228" r="3.2"/>
          <circle class="pt" cx="114" cy="92" r="3.2"/>

          <text class="val" x="132" y="84">2</text>
          <text class="val" x="74" y="88" text-anchor="end">4</text>
          <text class="val" x="256" y="152">x</text>

          <text x="38" y="50" text-anchor="end">B</text>
          <text x="139" y="50">A</text>
          <text x="38" y="250" text-anchor="end">C</text>
          <text x="394" y="250">D</text>
          <text x="98" y="112" text-anchor="end">E</text>
        `,
    },
    given: [
      '[AB] ⊥ [BC]',
      '[BC] ⊥ [CD]',
      '[AC] ⊥ [BD]',
      'E, [AC] ile [BD]’nin kesişim noktası',
      '|AE| = 2 cm',
      '|BE| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |ED| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '12' },
      { key: 'C', text: '14' },
      { key: 'D', text: '16' },
      { key: 'E', text: '18' },
    ],
    answer: 'D',
    hint: 'ABC üçgeninde [BE], hipotenüse ait yüksekliktir; aynı bağıntıyı bir kez de BCD üçgeninde [CE] için yaz.',
    solution: [
      {
        title: 'İlk dik üçgeni seç',
        detail:
          'ABC üçgeni B’de diktir ve [BE] ⊥ [AC] olduğundan [BE], hipotenüse ait yüksekliktir.',
      },
      {
        title: 'Yüksekliğe ait Öklid bağıntısı',
        detail: '|BE|² = |AE| · |EC| → 4² = 2 · |EC| → |EC| = 16 / 2 = 8 cm.',
      },
      {
        title: 'İkinci dik üçgen',
        detail:
          'BCD üçgeni C’de diktir ve E, [BD] üzerinde olup [CE] ⊥ [BD]’dir; yani [CE] de bu üçgende hipotenüse ait yüksekliktir.',
      },
      {
        title: 'Bağıntıyı tekrar yaz',
        detail: '|CE|² = |BE| · |ED| → 8² = 4 · x → x = 64 / 4.',
      },
      {
        title: 'Sonuç',
        detail:
          'x = 16 cm bulunur. (Kontrol: |BC|² = |BE| · |BD| = 4 · 20 = 80 ve |AB|² = 2 · 10 = 20; 20 + 80 = 100 = |AC|².)',
      },
    ],
  },

  // ---------------------------------------------------------------- 174
  {
    id: 'triangles-174',
    topic: 'Hipotenüsün orta noktasından dik kenara uzaklık',
    figure: {
      viewBox: '0 30 400 256',
      caption: 'Şekil 174',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde D noktası [BC] üzerinde, E noktası [AC]’nin orta noktasıdır; D ile E birleştirilmiştir. |BD| = 2 cm, |DC| = 10 cm, |ED| = 4√2 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M56,58 L56,250 L344,250 Z"/>
          <path class="ln" d="M200,154 L104,250"/>
          <path class="ln" d="M56,237 L69,237 L69,250"/>

          <path class="tick" d="M124.7,111 L131.3,101"/>
          <path class="tick" d="M268.7,207 L275.3,197"/>

          <circle class="pt" cx="56" cy="58" r="3.2"/>
          <circle class="pt" cx="56" cy="250" r="3.2"/>
          <circle class="pt" cx="344" cy="250" r="3.2"/>
          <circle class="pt" cx="104" cy="250" r="3.2"/>
          <circle class="pt" cx="200" cy="154" r="3.2"/>

          <text class="val" x="48" y="158" text-anchor="end">x</text>
          <text class="val" x="80" y="272" text-anchor="middle">2</text>
          <text class="val" x="224" y="272" text-anchor="middle">10</text>
          <text class="val" x="138" y="214" text-anchor="end">4√2</text>

          <text x="56" y="50" text-anchor="middle">A</text>
          <text x="48" y="272" text-anchor="end">B</text>
          <text x="352" y="272">C</text>
          <text x="104" y="272" text-anchor="middle">D</text>
          <text x="208" y="150">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 30 400 256',
      caption: 'Şekil 174 — [EF] dikmesi çizildi',
      label:
        'Aynı şekilde E’den [BC] üzerine inen dikmenin ayağı F, [BC]’nin orta noktasıdır; [EF] orta taban olduğundan |EF| = |AB| / 2’dir.',
      svg: `
          <path class="ln" d="M56,58 L56,250 L344,250 Z"/>
          <path class="ln" d="M200,154 L104,250"/>
          <path class="ln" d="M56,237 L69,237 L69,250"/>
          <path class="aux" d="M200,154 L200,250"/>
          <path class="aux" d="M200,237 L213,237 L213,250"/>

          <path class="tick" d="M124.7,111 L131.3,101"/>
          <path class="tick" d="M268.7,207 L275.3,197"/>

          <circle class="pt" cx="56" cy="58" r="3.2"/>
          <circle class="pt" cx="56" cy="250" r="3.2"/>
          <circle class="pt" cx="344" cy="250" r="3.2"/>
          <circle class="pt" cx="104" cy="250" r="3.2"/>
          <circle class="pt" cx="200" cy="154" r="3.2"/>
          <circle class="pt" cx="200" cy="250" r="3.2"/>

          <text class="val" x="48" y="158" text-anchor="end">x</text>
          <text class="val" x="80" y="272" text-anchor="middle">2</text>
          <text class="val" x="224" y="272" text-anchor="middle">10</text>
          <text class="val" x="138" y="214" text-anchor="end">4√2</text>
          <text class="val" x="208" y="206">x/2</text>
          <text class="val" x="152" y="240" text-anchor="middle">4</text>

          <text x="56" y="50" text-anchor="middle">A</text>
          <text x="48" y="272" text-anchor="end">B</text>
          <text x="352" y="272">C</text>
          <text x="104" y="272" text-anchor="middle">D</text>
          <text x="208" y="150">E</text>
          <text x="200" y="272" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'D ∈ [BC]',
      '|AE| = |EC|',
      '|BD| = 2 cm',
      '|DC| = 10 cm',
      '|ED| = 4√2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' },
      { key: 'E', text: '10' },
    ],
    answer: 'C',
    hint: 'E’den [BC]’ye dikme in: ayak [BC]’nin orta noktasıdır ve dikmenin boyu |AB|’nin yarısına eşittir.',
    solution: [
      {
        title: 'Dikmeyi in',
        detail:
          'E’den [BC] üzerine inen dikmenin ayağı F olsun. [EF] ⊥ [BC] ve [AB] ⊥ [BC] olduğundan [EF] ∥ [AB]’dir.',
      },
      {
        title: 'Orta tabanı tanı',
        detail:
          'E, [AC]’nin orta noktası ve [EF] ∥ [AB] olduğundan F de [BC]’nin orta noktasıdır; [EF] orta tabandır ve |EF| = |AB| / 2 = x / 2 olur.',
      },
      {
        title: 'DF uzunluğu',
        detail:
          '|BC| = |BD| + |DC| = 2 + 10 = 12 cm olduğundan |BF| = 6 cm’dir. D, B ile F arasında kaldığından |DF| = |BF| − |BD| = 6 − 2 = 4 cm.',
      },
      {
        title: 'EFD üçgeninde Pisagor',
        detail:
          'EFD üçgeni F’de diktir: |ED|² = |DF|² + |EF|² → (4√2)² = 4² + (x/2)² → 32 = 16 + x²/4.',
      },
      {
        title: 'Sonuç',
        detail: 'x² / 4 = 16 → x² = 64 olduğundan x = 8 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 175
  {
    id: 'triangles-175',
    topic: 'Simetri ile en kısa yol',
    figure: {
      viewBox: '0 -6 400 340',
      caption: 'Şekil 175',
      label:
        'HD doğrusunun aynı tarafında duran A ve B noktalarından [AH] ve [BD] bu doğruya diktir; E noktası [HD] üzerindedir ve A ile E, E ile B birleştirilmiştir. |AH| = 7 m, |BD| = 2 m ve |AB| = 13 m’dir.',
      svg: `
          <path class="ln" d="M56,160 L344,160"/>
          <path class="ln" d="M80,20 L80,160"/>
          <path class="ln" d="M320,120 L320,160"/>
          <path class="ln" d="M80,20 L320,120"/>
          <path class="ln" d="M80,20 L266.7,160 L320,120"/>

          <path class="ln" d="M80,148 L92,148 L92,160"/>
          <path class="ln" d="M320,148 L308,148 L308,160"/>

          <circle class="pt" cx="80" cy="20" r="3.2"/>
          <circle class="pt" cx="320" cy="120" r="3.2"/>
          <circle class="pt" cx="80" cy="160" r="3.2"/>
          <circle class="pt" cx="320" cy="160" r="3.2"/>
          <circle class="pt" cx="266.7" cy="160" r="3.2"/>

          <text class="val" x="66" y="95" text-anchor="end">7</text>
          <text class="val" x="328" y="145">2</text>
          <text class="val" x="200" y="62" text-anchor="middle">13</text>

          <text x="80" y="12" text-anchor="middle">A</text>
          <text x="328" y="116">B</text>
          <text x="70" y="182" text-anchor="end">H</text>
          <text x="320" y="182" text-anchor="middle">D</text>
          <text x="267" y="182" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -6 400 340',
      caption: 'Şekil 175 — A’nın simetriği alındı',
      label:
        'Aynı şekilde A noktasının HD doğrusuna göre simetriği A′ alınmış ve A′ ile B birleştirilmiştir; kırık yol, doğru parçası [A′B] hâline gelir.',
      svg: `
          <path class="ln" d="M56,160 L344,160"/>
          <path class="ln" d="M80,20 L80,160"/>
          <path class="ln" d="M320,120 L320,160"/>
          <path class="ln" d="M80,20 L320,120"/>
          <path class="ln" d="M80,20 L266.7,160 L320,120"/>
          <path class="aux" d="M80,160 L80,300"/>
          <path class="aux" d="M80,300 L320,120"/>

          <path class="ln" d="M80,148 L92,148 L92,160"/>
          <path class="ln" d="M320,148 L308,148 L308,160"/>

          <line class="tick" x1="74" y1="90" x2="86" y2="90"/>
          <line class="tick" x1="74" y1="230" x2="86" y2="230"/>

          <circle class="pt" cx="80" cy="20" r="3.2"/>
          <circle class="pt" cx="320" cy="120" r="3.2"/>
          <circle class="pt" cx="80" cy="160" r="3.2"/>
          <circle class="pt" cx="320" cy="160" r="3.2"/>
          <circle class="pt" cx="266.7" cy="160" r="3.2"/>
          <circle class="pt" cx="80" cy="300" r="3.2"/>

          <text class="val" x="66" y="95" text-anchor="end">7</text>
          <text class="val" x="328" y="145">2</text>
          <text class="val" x="200" y="62" text-anchor="middle">13</text>
          <text class="val" x="66" y="235" text-anchor="end">7</text>
          <text class="val" x="212" y="222">15</text>

          <text x="80" y="12" text-anchor="middle">A</text>
          <text x="328" y="116">B</text>
          <text x="70" y="182" text-anchor="end">H</text>
          <text x="320" y="182" text-anchor="middle">D</text>
          <text x="267" y="182" text-anchor="middle">E</text>
          <text x="80" y="322" text-anchor="middle">A′</text>
        `,
    },
    given: ['[AH] ⊥ [HD]', '[BD] ⊥ [HD]', '|AH| = 7 m', '|BD| = 2 m', '|AB| = 13 m'],
    stem: [],
    ask: 'Yukarıdaki şekilde E noktası [HD] üzerinde olduğuna göre, |AE| + |EB| toplamı en az kaç metredir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '13' },
      { key: 'C', text: '14' },
      { key: 'D', text: '15' },
      { key: 'E', text: '16' },
    ],
    answer: 'D',
    hint: 'A’nın HD doğrusuna göre simetriğini al; iki parçalı yol, tek bir doğru parçasına dönüşür.',
    solution: [
      {
        title: '|HD| uzunluğu',
        detail:
          'B’den [AH] üzerine inen dikmenin ayağı F olsun. |AF| = 7 − 2 = 5 m ve |FB| = |HD|’dir. AFB üçgeni F’de dik olduğundan |HD|² = 13² − 5² = 144 → |HD| = 12 m.',
      },
      {
        title: 'Simetriği al',
        detail:
          'A’nın HD doğrusuna göre simetriği A′ olsun; |A′H| = |AH| = 7 m’dir. Doğru üzerindeki her E noktası için |AE| = |A′E| olduğundan |AE| + |EB| = |A′E| + |EB| yazılır.',
      },
      {
        title: 'En kısa yol',
        detail:
          '|A′E| + |EB| toplamı en küçük değerini E noktası [A′B] üzerindeyken alır; o durumda toplam |A′B|’ye eşittir.',
      },
      {
        title: 'Sonuç',
        detail:
          'A′ ile B arasındaki yatay uzaklık |HD| = 12 m, düşey uzaklık 7 + 2 = 9 m’dir: |A′B|² = 12² + 9² = 225 olduğundan toplam en az 15 m olur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 176
  {
    id: 'triangles-176',
    topic: '30° ve 45°’lik açıların paylaştığı yükseklik',
    figure: {
      viewBox: '0 168 400 185',
      caption: 'Şekil 176',
      label:
        'ABC üçgeninde B köşesindeki açı 30°, C köşesindeki açı 45°’dir; [BC] üzerindeki D noktası A ile birleştirilmiştir. |AC| = 8√2 cm, |DC| = 14 cm ve |AD| = x’tir.',
      svg: `
          <path class="ln" d="M239,188 L45,300 L351,300 Z"/>
          <path class="ln" d="M239,188 L155,300"/>

          <path class="arc" d="M95,300 A50,50 0 0 0 88.3,275"/>
          <text class="val" x="113" y="286" text-anchor="middle">30°</text>

          <path class="arc" d="M301,300 A50,50 0 0 1 315.6,264.6"/>
          <text class="val" x="279" y="274" text-anchor="middle">45°</text>

          <circle class="pt" cx="239" cy="188" r="3.2"/>
          <circle class="pt" cx="45" cy="300" r="3.2"/>
          <circle class="pt" cx="351" cy="300" r="3.2"/>
          <circle class="pt" cx="155" cy="300" r="3.2"/>

          <text class="val" x="310" y="232">8√2</text>
          <text class="val" x="253" y="340" text-anchor="middle">14</text>
          <text class="val" x="176" y="250" text-anchor="end">x</text>

          <text x="239" y="180" text-anchor="middle">A</text>
          <text x="37" y="322" text-anchor="end">B</text>
          <text x="359" y="322">C</text>
          <text x="155" y="322" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 168 400 185',
      caption: 'Şekil 176 — [AH] yüksekliği indirildi',
      label:
        'Aynı şekilde A’dan [BC] üzerine [AH] dikmesi indirilmiştir; |AH| = |HC| = 8 cm ve |HD| = 6 cm olur.',
      svg: `
          <path class="ln" d="M239,188 L45,300 L351,300 Z"/>
          <path class="ln" d="M239,188 L155,300"/>
          <path class="aux" d="M239,188 L239,300"/>
          <path class="ln" d="M239,288 L251,288 L251,300"/>

          <path class="arc" d="M95,300 A50,50 0 0 0 88.3,275"/>
          <text class="val" x="113" y="286" text-anchor="middle">30°</text>

          <path class="arc" d="M301,300 A50,50 0 0 1 315.6,264.6"/>
          <text class="val" x="279" y="274" text-anchor="middle">45°</text>

          <circle class="pt" cx="239" cy="188" r="3.2"/>
          <circle class="pt" cx="45" cy="300" r="3.2"/>
          <circle class="pt" cx="351" cy="300" r="3.2"/>
          <circle class="pt" cx="155" cy="300" r="3.2"/>
          <circle class="pt" cx="239" cy="300" r="3.2"/>

          <text class="val" x="310" y="232">8√2</text>
          <text class="val" x="176" y="250" text-anchor="end">x</text>
          <text class="val" x="231" y="248" text-anchor="end">8</text>
          <text class="val" x="197" y="340" text-anchor="middle">6</text>
          <text class="val" x="293" y="340" text-anchor="middle">8</text>

          <text x="239" y="180" text-anchor="middle">A</text>
          <text x="37" y="322" text-anchor="end">B</text>
          <text x="359" y="322">C</text>
          <text x="155" y="322" text-anchor="middle">D</text>
          <text x="239" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [BC]',
      'm(ABC) = 30°',
      'm(ACB) = 45°',
      '|AC| = 8√2 cm',
      '|DC| = 14 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '6√3' },
      { key: 'C', text: '4√7' },
      { key: 'D', text: '8√2' },
      { key: 'E', text: '12' },
    ],
    answer: 'A',
    hint: 'A’dan [BC]’ye dikme indir; 45°’lik ve 30°’lik dik üçgenler aynı yüksekliği paylaşır.',
    solution: [
      {
        title: 'Yüksekliği indir',
        detail: 'A’dan [BC] üzerine [AH] dikmesini indirelim; AHC ve AHD üçgenleri H’de dik olur.',
      },
      {
        title: '45°’lik dik üçgen',
        detail:
          'AHC üçgeninde m(ACH) = 45° olduğundan üçgen ikizkenardır: |AH| = |HC| = |AC| / √2 = 8√2 / √2 = 8 cm.',
      },
      {
        title: '|HD| parçası',
        detail:
          'H, D ile C arasındadır ve |DC| = |DH| + |HC| olduğundan |HD| = 14 − 8 = 6 cm’dir. (30°’lik açıdan |BH| = 8√3 ≈ 13,9 cm çıktığı için D gerçekten B ile H arasında kalır.)',
      },
      {
        title: 'AHD üçgeninde Pisagor',
        detail: 'x² = |AH|² + |HD|² = 8² + 6² = 64 + 36 = 100.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = 100 olduğundan x = 10 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 177
  {
    id: 'triangles-177',
    topic: 'İki dik üçgende Öklid bağıntısı',
    figure: {
      viewBox: '0 100 400 225',
      caption: 'Şekil 177',
      label:
        'B, F, K, C noktaları aynı doğru üzerindedir; ABC üçgeni A’da, BDC üçgeni D’de diktir. [AF] ve [DK] bu doğruya dik olup |BF| = 2 cm, |FK| = 8 cm, |KC| = 10 cm ve |AD| = x’tir.',
      svg: `
          <path class="ln" d="M30,290 L370,290"/>
          <path class="ln" d="M30,290 L64,188 L370,290"/>
          <path class="ln" d="M30,290 L200,120 L370,290"/>
          <path class="ln" d="M64,188 L64,290"/>
          <path class="ln" d="M200,120 L200,290"/>
          <path class="ln" d="M64,188 L200,120"/>

          <path class="ln" d="M59.6,201.3 L72.9,205.7 L77.3,192.4"/>
          <path class="ln" d="M64,278 L76,278 L76,290"/>
          <path class="ln" d="M200,278 L212,278 L212,290"/>
          <path class="ln" d="M190.1,129.9 L200,139.8 L209.9,129.9"/>

          <circle class="pt" cx="64" cy="188" r="3.2"/>
          <circle class="pt" cx="30" cy="290" r="3.2"/>
          <circle class="pt" cx="370" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="120" r="3.2"/>
          <circle class="pt" cx="64" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>

          <text class="val" x="132" y="146" text-anchor="middle">x</text>
          <text class="val" x="47" y="312" text-anchor="middle">2</text>
          <text class="val" x="132" y="312" text-anchor="middle">8</text>
          <text class="val" x="285" y="312" text-anchor="middle">10</text>

          <text x="56" y="184" text-anchor="end">A</text>
          <text x="22" y="312" text-anchor="end">B</text>
          <text x="378" y="312">C</text>
          <text x="200" y="112" text-anchor="middle">D</text>
          <text x="64" y="312" text-anchor="middle">F</text>
          <text x="200" y="312" text-anchor="middle">K</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 100 400 225',
      caption: 'Şekil 177 — A’dan [DK]’ya dikme çizildi',
      label:
        'Aynı şekilde A’dan [DK] üzerine, [BC]’ye paralel olan [AT] dikmesi çizilmiştir; |AT| = |FK| = 8 cm ve |TD| = 10 − 6 = 4 cm olur.',
      svg: `
          <path class="ln" d="M30,290 L370,290"/>
          <path class="ln" d="M30,290 L64,188 L370,290"/>
          <path class="ln" d="M30,290 L200,120 L370,290"/>
          <path class="ln" d="M64,188 L64,290"/>
          <path class="ln" d="M200,120 L200,290"/>
          <path class="ln" d="M64,188 L200,120"/>
          <path class="aux" d="M64,188 L200,188"/>
          <path class="ln" d="M188,188 L188,176 L200,176"/>

          <path class="ln" d="M59.6,201.3 L72.9,205.7 L77.3,192.4"/>
          <path class="ln" d="M64,278 L76,278 L76,290"/>
          <path class="ln" d="M200,278 L212,278 L212,290"/>
          <path class="ln" d="M190.1,129.9 L200,139.8 L209.9,129.9"/>

          <circle class="pt" cx="64" cy="188" r="3.2"/>
          <circle class="pt" cx="30" cy="290" r="3.2"/>
          <circle class="pt" cx="370" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="120" r="3.2"/>
          <circle class="pt" cx="64" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="188" r="3.2"/>

          <text class="val" x="132" y="146" text-anchor="middle">x</text>
          <text class="val" x="47" y="312" text-anchor="middle">2</text>
          <text class="val" x="132" y="312" text-anchor="middle">8</text>
          <text class="val" x="285" y="312" text-anchor="middle">10</text>
          <text class="val" x="132" y="180" text-anchor="middle">8</text>
          <text class="val" x="208" y="152">4</text>

          <text x="56" y="184" text-anchor="end">A</text>
          <text x="22" y="312" text-anchor="end">B</text>
          <text x="378" y="312">C</text>
          <text x="200" y="112" text-anchor="middle">D</text>
          <text x="64" y="312" text-anchor="middle">F</text>
          <text x="200" y="312" text-anchor="middle">K</text>
          <text x="208" y="205">T</text>
        `,
    },
    given: [
      '[AB] ⊥ [AC]',
      '[BD] ⊥ [DC]',
      '[AF] ⊥ [BC]',
      '[DK] ⊥ [BC]',
      '|BF| = 2 cm',
      '|FK| = 8 cm',
      '|KC| = 10 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3√5' },
      { key: 'B', text: '4√5' },
      { key: 'C', text: '5√5' },
      { key: 'D', text: '6√5' },
      { key: 'E', text: '7√5' },
    ],
    answer: 'B',
    hint: 'İki yüksekliğin boyunu Öklid bağıntısıyla ayrı ayrı bul; sonra A’dan [DK]’ya yatay bir dikme çiz.',
    solution: [
      {
        title: '|BC| uzunluğu',
        detail: '|BC| = |BF| + |FK| + |KC| = 2 + 8 + 10 = 20 cm.',
      },
      {
        title: '|AF| yüksekliği',
        detail:
          'ABC üçgeni A’da dik ve [AF] hipotenüse ait yüksekliktir: |AF|² = |BF| · |FC| = 2 · 18 = 36 → |AF| = 6 cm.',
      },
      {
        title: '|DK| yüksekliği',
        detail:
          'BDC üçgeni D’de dik ve [DK] hipotenüse ait yüksekliktir. |BK| = 2 + 8 = 10 cm olduğundan |DK|² = |BK| · |KC| = 10 · 10 = 100 → |DK| = 10 cm.',
      },
      {
        title: 'Dikmeyi çiz',
        detail:
          'A’dan [DK] üzerine çizilen dikmenin ayağı T olsun. [AT] ∥ [BC] olduğundan |AT| = |FK| = 8 cm ve |TD| = |DK| − |AF| = 10 − 6 = 4 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'ATD üçgeni T’de diktir: x² = 8² + 4² = 64 + 16 = 80 olduğundan x = 4√5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 178
  {
    id: 'triangles-178',
    topic: 'Dik açılı dörtgende köşegen ve 30°',
    figure: {
      viewBox: '0 8 400 305',
      caption: 'Şekil 178',
      label:
        'ABCD dörtgeninde B köşesindeki açı diktir; A’dan [CD] üzerine inen dikmenin ayağı H’dir. m(HAD) = 30°, |HD| = 5√3 cm, |CH| = 8 cm, |BC| = 15 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M126,30 L30,102 L165,282 L365,132 Z"/>
          <path class="ln" d="M126,30 L261,210"/>

          <path class="ln" d="M41.2,93.6 L49.6,104.8 L38.4,113.2"/>
          <path class="ln" d="M252.6,198.8 L263.8,190.4 L272.2,201.6"/>

          <path class="arc" d="M156,70 A50,50 0 0 0 172,49.6"/>
          <text class="val" x="183" y="77" text-anchor="middle">30°</text>

          <circle class="pt" cx="126" cy="30" r="3.2"/>
          <circle class="pt" cx="30" cy="102" r="3.2"/>
          <circle class="pt" cx="165" cy="282" r="3.2"/>
          <circle class="pt" cx="365" cy="132" r="3.2"/>
          <circle class="pt" cx="261" cy="210" r="3.2"/>

          <text class="val" x="60" y="55" text-anchor="end">x</text>
          <text class="val" x="79" y="207" text-anchor="end">15</text>
          <text class="val" x="226" y="265">8</text>
          <text class="val" x="326" y="190">5√3</text>

          <text x="126" y="22" text-anchor="middle">A</text>
          <text x="22" y="106" text-anchor="end">B</text>
          <text x="165" y="304" text-anchor="middle">C</text>
          <text x="373" y="128">D</text>
          <text x="271" y="228" text-anchor="middle">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 8 400 305',
      caption: 'Şekil 178 — [AC] köşegeni çizildi',
      label:
        'Aynı şekilde [AC] köşegeni çizilmiştir; AHC üçgeninden |AC| = 17 cm bulunur ve ABC üçgeni B’de diktir.',
      svg: `
          <path class="ln" d="M126,30 L30,102 L165,282 L365,132 Z"/>
          <path class="ln" d="M126,30 L261,210"/>
          <path class="aux" d="M126,30 L165,282"/>

          <path class="ln" d="M41.2,93.6 L49.6,104.8 L38.4,113.2"/>
          <path class="ln" d="M252.6,198.8 L263.8,190.4 L272.2,201.6"/>

          <path class="arc" d="M156,70 A50,50 0 0 0 172,49.6"/>
          <text class="val" x="183" y="77" text-anchor="middle">30°</text>

          <circle class="pt" cx="126" cy="30" r="3.2"/>
          <circle class="pt" cx="30" cy="102" r="3.2"/>
          <circle class="pt" cx="165" cy="282" r="3.2"/>
          <circle class="pt" cx="365" cy="132" r="3.2"/>
          <circle class="pt" cx="261" cy="210" r="3.2"/>

          <text class="val" x="60" y="55" text-anchor="end">x</text>
          <text class="val" x="79" y="207" text-anchor="end">15</text>
          <text class="val" x="226" y="265">8</text>
          <text class="val" x="326" y="190">5√3</text>
          <text class="val" x="154" y="160">17</text>

          <text x="126" y="22" text-anchor="middle">A</text>
          <text x="22" y="106" text-anchor="end">B</text>
          <text x="165" y="304" text-anchor="middle">C</text>
          <text x="373" y="128">D</text>
          <text x="271" y="228" text-anchor="middle">H</text>
        `,
    },
    given: [
      '[AB] ⊥ [BC]',
      '[AH] ⊥ [CD]',
      'H ∈ [CD]',
      'm(HAD) = 30°',
      '|HD| = 5√3 cm',
      '|CH| = 8 cm',
      '|BC| = 15 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '6' },
      { key: 'B', text: '4√3' },
      { key: 'C', text: '5√2' },
      { key: 'D', text: '8' },
      { key: 'E', text: '9' },
    ],
    answer: 'D',
    hint: 'Önce AHD üçgeninden |AH|’yi bul; sonra [AC] köşegenini çizip iki dik üçgende Pisagor uygula.',
    solution: [
      {
        title: 'AHD üçgeni',
        detail:
          'AHD üçgeni H’de dik ve m(HAD) = 30°’dir. 30°’lik açının karşısındaki dik kenar |HD| = 5√3 cm olduğundan |AH| = |HD| · √3 = 5√3 · √3 = 15 cm bulunur.',
      },
      {
        title: 'Köşegeni çiz',
        detail:
          '[AC] köşegenini çizelim. H, [CD] üzerinde ve [AH] ⊥ [CD] olduğundan AHC üçgeni de H’de diktir.',
      },
      {
        title: 'AHC üçgeninde Pisagor',
        detail: '|AC|² = |AH|² + |CH|² = 15² + 8² = 225 + 64 = 289 olduğundan |AC| = 17 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABC üçgeni B’de diktir: x² = |AC|² − |BC|² = 289 − 225 = 64 olduğundan x = 8 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 179
  {
    id: 'triangles-179',
    topic: 'Öklid bağıntısından açıya',
    figure: {
      viewBox: '0 88 400 200',
      caption: 'Şekil 179',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den hipotenüse inen dikmenin ayağı D’dir. |AD| = 5 cm, |DC| = 15 cm ve m(DBC) = α’dır.',
      svg: `
          <path class="ln" d="M40,250 L120,111.4 L360,250 Z"/>
          <path class="ln" d="M120,111.4 L120,250"/>

          <path class="ln" d="M113,123.5 L125.1,130.5 L132.1,118.4"/>
          <path class="ln" d="M120,238 L132,238 L132,250"/>

          <path class="arc" d="M120,156.4 A45,45 0 0 0 159,133.9"/>
          <text class="val" x="151" y="170" text-anchor="middle">α</text>

          <circle class="pt" cx="40" cy="250" r="3.2"/>
          <circle class="pt" cx="120" cy="111.4" r="3.2"/>
          <circle class="pt" cx="360" cy="250" r="3.2"/>
          <circle class="pt" cx="120" cy="250" r="3.2"/>

          <text class="val" x="80" y="272" text-anchor="middle">5</text>
          <text class="val" x="240" y="272" text-anchor="middle">15</text>

          <text x="120" y="103" text-anchor="middle">B</text>
          <text x="32" y="272" text-anchor="end">A</text>
          <text x="368" y="272">C</text>
          <text x="120" y="272" text-anchor="middle">D</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      'm(ABC) = 90°',
      'D ∈ [AC]',
      '[BD] ⊥ [AC]',
      '|AD| = 5 cm',
      '|DC| = 15 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DBC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '45' },
      { key: 'C', text: '60' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'C',
    hint: 'Önce yüksekliğin boyunu Öklid bağıntısıyla bul; sonra DBC dik üçgeninde dik kenarların oranına bak.',
    solution: [
      {
        title: 'Öklid bağıntısı',
        detail:
          '[BD] hipotenüse ait yüksekliktir: |BD|² = |AD| · |DC| = 5 · 15 = 75 olduğundan |BD| = 5√3 cm.',
      },
      {
        title: 'DBC üçgeni',
        detail: 'DBC üçgeni D’de diktir; dik kenarları |BD| = 5√3 cm ve |DC| = 15 cm’dir.',
      },
      {
        title: 'Oranı tanı',
        detail:
          '|DC| / |BD| = 15 / (5√3) = √3’tür. Dik kenarlarının oranı √3 olan dik üçgen 30°-60°-90° üçgenidir ve büyük dik kenarın karşısındaki açı 60°’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Büyük dik kenar [DC], α açısının karşısında olduğundan α = 60° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 180
  {
    id: 'triangles-180',
    topic: 'Hipotenüs üzerindeki noktaya uzaklık',
    figure: {
      viewBox: '0 82 400 222',
      caption: 'Şekil 180',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde D noktası [BC] üzerindedir. |AB| = 30 cm, |AC| = 40 cm, |BD| = 8 cm ve |AD| = x’tir.',
      svg: `
          <path class="ln" d="M154,102 L28,270 L378,270 Z"/>
          <path class="ln" d="M154,102 L84,270"/>

          <path class="ln" d="M145.6,113.2 L156.8,121.6 L165.2,110.4"/>

          <circle class="pt" cx="154" cy="102" r="3.2"/>
          <circle class="pt" cx="28" cy="270" r="3.2"/>
          <circle class="pt" cx="378" cy="270" r="3.2"/>
          <circle class="pt" cx="84" cy="270" r="3.2"/>

          <text class="val" x="71" y="170" text-anchor="end">30</text>
          <text class="val" x="280" y="170">40</text>
          <text class="val" x="56" y="292" text-anchor="middle">8</text>
          <text class="val" x="126" y="190">x</text>

          <text x="154" y="94" text-anchor="middle">A</text>
          <text x="20" y="292" text-anchor="end">B</text>
          <text x="386" y="292">C</text>
          <text x="84" y="292" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 82 400 222',
      caption: 'Şekil 180 — [AH] yüksekliği indirildi',
      label:
        'Aynı şekilde A’dan hipotenüse [AH] yüksekliği indirilmiştir; |AH| = 24 cm, |BH| = 18 cm ve |HD| = 10 cm olur.',
      svg: `
          <path class="ln" d="M154,102 L28,270 L378,270 Z"/>
          <path class="ln" d="M154,102 L84,270"/>
          <path class="aux" d="M154,102 L154,270"/>
          <path class="ln" d="M154,258 L166,258 L166,270"/>

          <path class="ln" d="M145.6,113.2 L156.8,121.6 L165.2,110.4"/>

          <circle class="pt" cx="154" cy="102" r="3.2"/>
          <circle class="pt" cx="28" cy="270" r="3.2"/>
          <circle class="pt" cx="378" cy="270" r="3.2"/>
          <circle class="pt" cx="84" cy="270" r="3.2"/>
          <circle class="pt" cx="154" cy="270" r="3.2"/>

          <text class="val" x="71" y="170" text-anchor="end">30</text>
          <text class="val" x="280" y="170">40</text>
          <text class="val" x="56" y="292" text-anchor="middle">8</text>
          <text class="val" x="126" y="190">x</text>
          <text class="val" x="162" y="190">24</text>
          <text class="val" x="119" y="292" text-anchor="middle">10</text>

          <text x="154" y="94" text-anchor="middle">A</text>
          <text x="20" y="292" text-anchor="end">B</text>
          <text x="386" y="292">C</text>
          <text x="84" y="292" text-anchor="middle">D</text>
          <text x="154" y="292" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      'm(BAC) = 90°',
      'D ∈ [BC]',
      '|AB| = 30 cm',
      '|AC| = 40 cm',
      '|BD| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '25' },
      { key: 'C', text: '26' },
      { key: 'D', text: '27' },
      { key: 'E', text: '28' },
    ],
    answer: 'C',
    hint: 'A’dan hipotenüse yüksekliği indir; Öklid bağıntısı yükseklik ayağının B’ye uzaklığını verir.',
    solution: [
      {
        title: 'Hipotenüs',
        detail: '|BC|² = |AB|² + |AC|² = 30² + 40² = 900 + 1600 = 2500 olduğundan |BC| = 50 cm.',
      },
      {
        title: 'Yüksekliği indir',
        detail:
          'A’dan [BC] üzerine [AH] yüksekliğini indirelim. Alanı iki türlü yazarsak |AH| = 30 · 40 / 50 = 24 cm bulunur.',
      },
      {
        title: 'Yükseklik ayağının yeri',
        detail:
          'Öklid bağıntısı: |AB|² = |BH| · |BC| → 900 = 50 · |BH| olduğundan |BH| = 18 cm’dir. D, B ile H arasında olduğundan |HD| = 18 − 8 = 10 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'AHD üçgeni H’de diktir: x² = |AH|² + |HD|² = 24² + 10² = 576 + 100 = 676 olduğundan x = 26 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 181
  {
    id: 'triangles-181',
    topic: 'Dik üçgende ardışık yükseklikler',
    figure: {
      viewBox: '0 158 400 172',
      caption: 'Şekil 181',
      label:
        'A köşesindeki açısı dik olan ABC üçgeninde A’dan hipotenüse inen dikmenin ayağı H’dir. H’den [AB] üzerine inen dikmenin ayağı D, [AC] üzerine inen dikmenin ayağı E’dir. |DB| = 4 cm, |EC| = 32 cm, |DH| = x ve |HE| = y’dir.',
      svg: `
          <path class="ln" d="M106.6,174.8 L44,300 L357,300 Z"/>
          <path class="ln" d="M106.6,174.8 L106.6,300"/>
          <path class="ln" d="M56.5,275 L106.6,300"/>
          <path class="ln" d="M106.6,300 L156.7,199.8"/>

          <path class="ln" d="M101.2,185.5 L111.9,190.9 L117.3,180.2"/>
          <path class="ln" d="M106.6,288 L118.6,288 L118.6,300"/>
          <path class="ln" d="M61,266.1 L69.9,270.5 L65.5,279.5"/>
          <path class="ln" d="M147.8,195.3 L143.3,204.3 L152.2,208.8"/>

          <circle class="pt" cx="106.6" cy="174.8" r="3.2"/>
          <circle class="pt" cx="44" cy="300" r="3.2"/>
          <circle class="pt" cx="357" cy="300" r="3.2"/>
          <circle class="pt" cx="106.6" cy="300" r="3.2"/>
          <circle class="pt" cx="56.5" cy="275" r="3.2"/>
          <circle class="pt" cx="156.7" cy="199.8" r="3.2"/>

          <text class="val" x="40" y="296" text-anchor="end">4</text>
          <text class="val" x="266" y="262">32</text>
          <text class="val" x="80" y="281" text-anchor="middle">x</text>
          <text class="val" x="142" y="252">y</text>

          <text x="106.6" y="167" text-anchor="middle">A</text>
          <text x="36" y="322" text-anchor="end">B</text>
          <text x="106.6" y="322" text-anchor="middle">H</text>
          <text x="365" y="322">C</text>
          <text x="48" y="270" text-anchor="end">D</text>
          <text x="164" y="196">E</text>
        `,
    },
    given: [
      'BAC bir dik üçgen',
      'm(BAC) = 90°',
      '[AH] ⊥ [BC]',
      '[HD] ⊥ [AB]',
      '[HE] ⊥ [AC]',
      '|DB| = 4 cm',
      '|EC| = 32 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x + y toplamı kaç cm’dir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '24' },
      { key: 'D', text: '27' },
      { key: 'E', text: '30' },
    ],
    answer: 'C',
    hint: 'ADHE dörtgeninin dört açısı da diktir; kenarlarını x ve y ile yazdıktan sonra ABH ve ACH üçgenlerinde Öklid bağıntısını kullan.',
    solution: [
      {
        title: 'ADHE bir dikdörtgen',
        detail:
          'm(BAC) = 90°, [HD] ⊥ [AB] ve [HE] ⊥ [AC] olduğundan ADHE dörtgeninin dört açısı da diktir, yani ADHE bir dikdörtgendir. Karşılıklı kenarları eşit olduğundan |AD| = |HE| = y ve |AE| = |HD| = x’tir.',
      },
      {
        title: 'ABH üçgeninde Öklid',
        detail:
          '[AH] ⊥ [BC] olduğundan ABH üçgeni H’de diktir ve [HD], bu üçgende [AB] hipotenüsüne ait yüksekliktir: |HD|² = |AD| · |DB| → x² = y · 4.',
      },
      {
        title: 'ACH üçgeninde Öklid',
        detail:
          'ACH üçgeni de H’de diktir ve [HE], [AC] hipotenüsüne ait yüksekliktir: |HE|² = |AE| · |EC| → y² = x · 32.',
      },
      {
        title: 'Sonuç',
        detail:
          'Birinci bağıntıdan y = x²/4’tür. Bunu ikinciye koyarsak x⁴/16 = 32x, yani x³ = 512 ve x = 8 cm bulunur. Buradan y = 64/4 = 16 cm olur; x + y = 8 + 16 = 24 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 182
  {
    id: 'triangles-182',
    topic: 'Dik açılı dörtgende 120°’lik açı',
    figure: {
      viewBox: '0 82 400 244',
      caption: 'Şekil 182',
      label:
        'ABCD dörtgeninde B köşesindeki açı diktir ve m(ADC) = 120°’dir. |AD| = 14 cm, |DC| = 16 cm, |BC| = 24 cm ve |AB| = x’tir.',
      svg: `
          <path class="ln" d="M62,185 L62,300 L338,300 L220.8,158.2 Z"/>

          <path class="ln" d="M62,288 L74,288 L74,300"/>

          <path class="arc" d="M191.2,163.2 A30,30 0 0 0 239.9,181.3"/>
          <text class="val" x="201" y="211" text-anchor="middle">120°</text>

          <circle class="pt" cx="62" cy="185" r="3.2"/>
          <circle class="pt" cx="62" cy="300" r="3.2"/>
          <circle class="pt" cx="338" cy="300" r="3.2"/>
          <circle class="pt" cx="220.8" cy="158.2" r="3.2"/>

          <text class="val" x="54" y="246" text-anchor="end">x</text>
          <text class="val" x="200" y="322" text-anchor="middle">24</text>
          <text class="val" x="138" y="164" text-anchor="middle">14</text>
          <text class="val" x="289" y="226">16</text>

          <text x="54" y="189" text-anchor="end">A</text>
          <text x="54" y="322" text-anchor="end">B</text>
          <text x="346" y="322">C</text>
          <text x="228" y="152">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 82 400 244',
      caption: 'Şekil 182 — [CD] uzatıldı ve [AK] ⊥ [KC] çizildi',
      label:
        'Aynı şekilde [CD] doğru parçası D’nin ötesine K noktasına kadar uzatılmış, A’dan bu doğruya [AK] dikmesi indirilmiş ve [AC] köşegeni çizilmiştir.',
      svg: `
          <path class="ln" d="M62,185 L62,300 L338,300 L220.8,158.2 Z"/>
          <path class="aux" d="M220.8,158.2 L169.5,96.1"/>
          <path class="aux" d="M62,185 L169.5,96.1"/>
          <path class="aux" d="M62,185 L338,300"/>

          <path class="ln" d="M62,288 L74,288 L74,300"/>
          <path class="aux-head" d="M161,103.1 L168,111.6 L176.5,104.6"/>

          <path class="arc" d="M195.2,162.5 A26,26 0 0 1 204.2,138.1"/>
          <text class="val" x="176" y="141" text-anchor="middle">60°</text>

          <circle class="pt" cx="62" cy="185" r="3.2"/>
          <circle class="pt" cx="62" cy="300" r="3.2"/>
          <circle class="pt" cx="338" cy="300" r="3.2"/>
          <circle class="pt" cx="220.8" cy="158.2" r="3.2"/>
          <circle class="pt" cx="169.5" cy="96.1" r="3.2"/>

          <text class="val" x="54" y="246" text-anchor="end">x</text>
          <text class="val" x="200" y="322" text-anchor="middle">24</text>
          <text class="val" x="138" y="164" text-anchor="middle">14</text>
          <text class="val" x="289" y="226">16</text>
          <text class="val" x="203" y="122">7</text>
          <text class="val" x="108" y="134" text-anchor="end">7√3</text>
          <text class="val" x="208" y="254">26</text>

          <text x="54" y="189" text-anchor="end">A</text>
          <text x="54" y="322" text-anchor="end">B</text>
          <text x="346" y="322">C</text>
          <text x="228" y="152">D</text>
          <text x="160" y="102" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABCD bir dörtgen',
      '[AB] ⊥ [BC]',
      'm(ADC) = 120°',
      '|AD| = 14 cm',
      '|DC| = 16 cm',
      '|BC| = 24 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '12' },
      { key: 'E', text: '15' },
    ],
    answer: 'C',
    hint: '[CD] kenarını D’nin ötesine uzatıp A’dan bu doğruya dikme in: 120°’nin bütünleri 60°’lik bir dik üçgen verir.',
    solution: [
      {
        title: 'Dikmeyi kur',
        detail:
          '[CD] doğru parçasını D’nin ötesine uzatalım ve A’dan bu doğruya [AK] dikmesini indirelim. m(ADK) = 180° − 120° = 60° olduğundan AKD üçgeni 30°-60°-90° üçgenidir.',
      },
      {
        title: 'AKD üçgeni',
        detail:
          '30°’lik açının karşısındaki dik kenar hipotenüsün yarısıdır: |DK| = |AD| / 2 = 14 / 2 = 7 cm ve |AK| = 7√3 cm bulunur.',
      },
      {
        title: 'Köşegeni hesapla',
        detail:
          '[AC] köşegenini çizelim. K, C, D noktaları aynı doğru üzerinde olduğundan |KC| = |KD| + |DC| = 7 + 16 = 23 cm’dir. AKC üçgeni K’de diktir: |AC|² = (7√3)² + 23² = 147 + 529 = 676 olduğundan |AC| = 26 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABC üçgeni B’de diktir: x² = |AC|² − |BC|² = 676 − 576 = 100 olduğundan x = 10 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 183
  {
    id: 'triangles-183',
    topic: '15°’lik açılı dik üçgen',
    figure: {
      viewBox: '0 204 400 128',
      caption: 'Şekil 183',
      label:
        'A köşesindeki açısı dik olan BAC üçgeninde |AB| = 5 cm, m(ACB) = 15° ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M66.7,222.7 L46,300 L355.1,300 Z"/>

          <path class="ln" d="M63.6,234.3 L75.2,237.4 L78.3,225.8"/>

          <path class="arc" d="M285.1,300 A70,70 0 0 1 287.5,281.9"/>
          <text class="val" x="246" y="287" text-anchor="middle">15°</text>

          <circle class="pt" cx="66.7" cy="222.7" r="3.2"/>
          <circle class="pt" cx="46" cy="300" r="3.2"/>
          <circle class="pt" cx="355.1" cy="300" r="3.2"/>

          <text class="val" x="46" y="268" text-anchor="end">5</text>
          <text class="val" x="208" y="250" text-anchor="middle">x</text>

          <text x="66.7" y="214" text-anchor="middle">A</text>
          <text x="38" y="322" text-anchor="end">B</text>
          <text x="363" y="322">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 204 400 128',
      caption: 'Şekil 183 — [BD] çizildi',
      label:
        'Aynı şekilde [AC] üzerinde m(DBC) = 15° olacak biçimde bir D noktası işaretlenip [BD] çizilmiştir; DBC üçgeni ikizkenardır.',
      svg: `
          <path class="ln" d="M66.7,222.7 L46,300 L355.1,300 Z"/>
          <path class="aux" d="M46,300 L200.6,258.6"/>

          <path class="ln" d="M63.6,234.3 L75.2,237.4 L78.3,225.8"/>

          <path class="arc" d="M285.1,300 A70,70 0 0 1 287.5,281.9"/>
          <text class="val" x="246" y="287" text-anchor="middle">15°</text>

          <path class="arc" d="M96.2,286.5 A52,52 0 0 1 98,300"/>
          <text class="val" x="130" y="294" text-anchor="middle">15°</text>

          <path class="arc" d="M162,248.2 A40,40 0 0 0 161.9,269"/>
          <text class="val" x="136" y="258" text-anchor="middle">30°</text>

          <line class="tick" x1="121.8" y1="273.5" x2="124.9" y2="285.1"/>
          <line class="tick" x1="276.4" y1="273.5" x2="279.5" y2="285.1"/>

          <circle class="pt" cx="66.7" cy="222.7" r="3.2"/>
          <circle class="pt" cx="46" cy="300" r="3.2"/>
          <circle class="pt" cx="355.1" cy="300" r="3.2"/>
          <circle class="pt" cx="200.6" cy="258.6" r="3.2"/>

          <text class="val" x="46" y="268" text-anchor="end">5</text>

          <text x="66.7" y="214" text-anchor="middle">A</text>
          <text x="38" y="322" text-anchor="end">B</text>
          <text x="363" y="322">C</text>
          <text x="200.6" y="250" text-anchor="middle">D</text>
        `,
    },
    given: ['BAC bir dik üçgen', 'm(BAC) = 90°', '|AB| = 5 cm', 'm(ACB) = 15°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5 + 5√3' },
      { key: 'B', text: '10√3' },
      { key: 'C', text: '10 + 5√3' },
      { key: 'D', text: '15' },
      { key: 'E', text: '5 + 10√3' },
    ],
    answer: 'C',
    hint: '[AC] üzerinde m(DBC) = 15° olacak şekilde bir D noktası al: DBC ikizkenar olur ve ABD üçgeninde 30° görünür.',
    solution: [
      {
        title: 'İkizkenarı kur',
        detail:
          '[AC] üzerinde m(DBC) = 15° olacak biçimde bir D noktası alalım. m(DBC) = m(DCB) = 15° olduğundan DBC üçgeni ikizkenardır ve |DB| = |DC|’dir.',
      },
      {
        title: 'Dış açı',
        detail: 'm(ADB), DBC üçgeninin D köşesindeki dış açısıdır: m(ADB) = 15° + 15° = 30°.',
      },
      {
        title: 'ABD üçgeni',
        detail:
          'ABD üçgeni A’da diktir ve m(ADB) = 30°’dir. 30°’lik açının karşısındaki dik kenar |AB| = 5 cm olduğundan hipotenüs |BD| = 2 · 5 = 10 cm ve |AD| = 5√3 cm bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|DC| = |DB| = 10 cm olduğundan x = |AD| + |DC| = 5√3 + 10, yani x = 10 + 5√3 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 184
  {
    id: 'triangles-184',
    topic: 'Hipotenüse ait yükseklik ve 15°',
    figure: {
      viewBox: '0 204 400 128',
      caption: 'Şekil 184',
      label:
        'A köşesindeki açısı dik olan BAC üçgeninde A’dan hipotenüse inen dikmenin ayağı H’dir. |AH| = 4 cm, m(ACB) = 15° ve |BC| = x’tir.',
      svg: `
          <path class="ln" d="M61.4,220 L40,300 L360,300 Z"/>
          <path class="ln" d="M61.4,220 L61.4,300"/>

          <path class="ln" d="M58.3,231.6 L69.9,234.7 L73,223.1"/>
          <path class="ln" d="M61.4,288 L73.4,288 L73.4,300"/>

          <path class="arc" d="M290,300 A70,70 0 0 1 292.4,281.9"/>
          <text class="val" x="250" y="289" text-anchor="middle">15°</text>

          <circle class="pt" cx="61.4" cy="220" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="360" cy="300" r="3.2"/>
          <circle class="pt" cx="61.4" cy="300" r="3.2"/>

          <text class="val" x="70" y="264">4</text>
          <text class="val" x="200" y="322" text-anchor="middle">x</text>

          <text x="61.4" y="212" text-anchor="middle">A</text>
          <text x="32" y="322" text-anchor="end">B</text>
          <text x="368" y="322">C</text>
          <text x="61.4" y="322" text-anchor="middle">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 204 400 128',
      caption: 'Şekil 184 — [AM] kenarortayı çizildi',
      label:
        'Aynı şekilde hipotenüsün orta noktası M işaretlenip [AM] kenarortayı çizilmiştir; |MA| = |MC| olduğundan m(AMH) = 30°’dir.',
      svg: `
          <path class="ln" d="M61.4,220 L40,300 L360,300 Z"/>
          <path class="ln" d="M61.4,220 L61.4,300"/>
          <path class="aux" d="M61.4,220 L200,300"/>

          <path class="ln" d="M58.3,231.6 L69.9,234.7 L73,223.1"/>
          <path class="ln" d="M61.4,288 L73.4,288 L73.4,300"/>

          <path class="arc" d="M290,300 A70,70 0 0 1 292.4,281.9"/>
          <text class="val" x="250" y="289" text-anchor="middle">15°</text>

          <path class="arc" d="M162,300 A38,38 0 0 1 167.1,281"/>
          <text class="val" x="140" y="284" text-anchor="middle">30°</text>

          <circle class="pt" cx="61.4" cy="220" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="360" cy="300" r="3.2"/>
          <circle class="pt" cx="61.4" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text class="val" x="70" y="264">4</text>
          <text class="val" x="118" y="250" text-anchor="end">8</text>

          <text x="61.4" y="212" text-anchor="middle">A</text>
          <text x="32" y="322" text-anchor="end">B</text>
          <text x="368" y="322">C</text>
          <text x="61.4" y="322" text-anchor="middle">H</text>
          <text x="200" y="322" text-anchor="middle">M</text>
        `,
    },
    given: ['BAC bir dik üçgen', 'm(BAC) = 90°', '[AH] ⊥ [BC]', '|AH| = 4 cm', 'm(ACB) = 15°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '8√3' },
      { key: 'C', text: '14' },
      { key: 'D', text: '16' },
      { key: 'E', text: '8√5' },
    ],
    answer: 'D',
    hint: 'Hipotenüsün orta noktasını işaretle: oraya çizilen kenarortay hipotenüsün yarısına eşittir ve 15°’yi 30°’ye çevirir.',
    solution: [
      {
        title: 'Kenarortayı çiz',
        detail:
          'Hipotenüsün orta noktası M olsun ve [AM] kenarortayını çizelim. Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısıdır: |MA| = |MB| = |MC| = x/2.',
      },
      {
        title: '30°’yi yakala',
        detail:
          '|MA| = |MC| olduğundan AMC üçgeni ikizkenardır ve m(MAC) = m(MCA) = 15°’dir. m(AMH), bu üçgenin M köşesindeki dış açısıdır: m(AMH) = 15° + 15° = 30°.',
      },
      {
        title: 'AMH üçgeni',
        detail:
          'AMH üçgeni H’de diktir ve m(AMH) = 30°’dir. 30°’lik açının karşısındaki dik kenar |AH| = 4 cm olduğundan hipotenüs |AM| = 2 · 4 = 8 cm bulunur.',
      },
      {
        title: 'Sonuç',
        detail: '|AM| = x/2 olduğundan x = 2 · 8 = 16 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 185
  {
    id: 'triangles-185',
    topic: 'Öklid bağıntısı ile alan',
    figure: {
      viewBox: '0 2 400 332',
      caption: 'Şekil 185',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde B’den hipotenüse inen dikmenin ayağı H’dir. |BH| = 6 cm, |AH| = x ve |HC| = y’dir.',
      svg: `
          <path class="ln" d="M120,18.8 L120,300 L307.5,300 Z"/>
          <path class="ln" d="M120,300 L249.8,213.5"/>

          <path class="ln" d="M120,288 L132,288 L132,300"/>
          <path class="ln" d="M240.7,219.6 L246.8,228.7 L255.9,222.6"/>

          <circle class="pt" cx="120" cy="18.8" r="3.2"/>
          <circle class="pt" cx="120" cy="300" r="3.2"/>
          <circle class="pt" cx="307.5" cy="300" r="3.2"/>
          <circle class="pt" cx="249.8" cy="213.5" r="3.2"/>

          <text class="val" x="172" y="110" text-anchor="end">x</text>
          <text class="val" x="288" y="250">y</text>
          <text class="val" x="182" y="272" text-anchor="middle">6</text>

          <text x="120" y="11" text-anchor="middle">A</text>
          <text x="112" y="322" text-anchor="end">B</text>
          <text x="315" y="322">C</text>
          <text x="258" y="206">H</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      '[BH] ⊥ [AC]',
      '|BH| = 6 cm',
      '|AH| = x',
      '|HC| = y',
      'x² + y² = 97 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde verilenlere göre, ABC üçgeninin alanı kaç cm²’dir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '36' },
      { key: 'C', text: '39' },
      { key: 'D', text: '42' },
      { key: 'E', text: '45' },
    ],
    answer: 'C',
    hint: 'Yükseklik hipotenüsün iki parçasının geometrik ortasıdır; (x + y)² açılımında x · y’yi yerine koy.',
    solution: [
      {
        title: 'Öklid bağıntısı',
        detail:
          '[BH], hipotenüse ait yüksekliktir: |BH|² = |AH| · |HC| → 6² = x · y olduğundan x · y = 36’dır.',
      },
      {
        title: 'Hipotenüsü bul',
        detail:
          '(x + y)² = x² + y² + 2xy = 97 + 2 · 36 = 97 + 72 = 169 olduğundan x + y = 13, yani |AC| = 13 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABC üçgeninin alanını [AC] tabanı ve ona ait [BH] yüksekliğiyle yazalım: Alan = |AC| · |BH| / 2 = 13 · 6 / 2 = 39 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 186
  {
    id: 'triangles-186',
    topic: 'Dış açıortayların oluşturduğu üçgen',
    figure: {
      viewBox: '0 8 400 322',
      caption: 'Şekil 186',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde [BA] ve [BC] kenarları K ve L yönünde uzatılmıştır. [AP] ile [CP], üçgenin A ve C köşelerindeki dış açıortaylarıdır; |AP| = 10 cm, |PC| = 6√2 cm ve |AC| = x’tir.',
      svg: `
          <path class="ln" d="M70,208.3 L70,300 L289.6,300 Z"/>
          <path class="ln" d="M70,208.3 L70,152"/>
          <path class="ln" d="M289.6,300 L338,300"/>
          <path class="ln" d="M70,208.3 L344.6,25.4"/>
          <path class="ln" d="M289.6,300 L344.6,25.4"/>

          <path class="ln" d="M70,288 L82,288 L82,300"/>

          <path class="arc" d="M70,170.3 A38,38 0 0 1 101.6,187.2"/>
          <path class="arc" d="M101.6,187.2 A38,38 0 0 1 105.1,223"/>

          <path class="arc" d="M258.2,286.9 A34,34 0 0 1 296.3,266.7"/>
          <path class="arc" d="M296.3,266.7 A34,34 0 0 1 323.6,300"/>

          <circle class="pt" cx="70" cy="208.3" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="289.6" cy="300" r="3.2"/>
          <circle class="pt" cx="344.6" cy="25.4" r="3.2"/>

          <text class="val" x="196" y="110" text-anchor="middle">10</text>
          <text class="val" x="326" y="160">6√2</text>
          <text class="val" x="176" y="272" text-anchor="middle">x</text>

          <text x="62" y="212" text-anchor="end">A</text>
          <text x="62" y="322" text-anchor="end">B</text>
          <text x="289.6" y="322" text-anchor="middle">C</text>
          <text x="70" y="144" text-anchor="middle">K</text>
          <text x="338" y="322" text-anchor="middle">L</text>
          <text x="352" y="20">P</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 8 400 322',
      caption: 'Şekil 186 — [CT] ⊥ [AP] çizildi',
      label:
        'Aynı şekilde C’den [AP] üzerine [CT] dikmesi indirilmiştir; m(APC) = 45° olduğundan PTC ikizkenar dik üçgendir.',
      svg: `
          <path class="ln" d="M70,208.3 L70,300 L289.6,300 Z"/>
          <path class="ln" d="M70,208.3 L70,152"/>
          <path class="ln" d="M289.6,300 L338,300"/>
          <path class="ln" d="M70,208.3 L344.6,25.4"/>
          <path class="ln" d="M289.6,300 L344.6,25.4"/>
          <path class="aux" d="M289.6,300 L179.9,135.1"/>

          <path class="ln" d="M70,288 L82,288 L82,300"/>
          <path class="aux-head" d="M172.8,139.9 L179.4,149.8 L189.3,143.2"/>

          <path class="arc" d="M70,170.3 A38,38 0 0 1 101.6,187.2"/>
          <path class="arc" d="M101.6,187.2 A38,38 0 0 1 105.1,223"/>

          <path class="arc" d="M258.2,286.9 A34,34 0 0 1 296.3,266.7"/>
          <path class="arc" d="M296.3,266.7 A34,34 0 0 1 323.6,300"/>

          <path class="arc" d="M311.3,47.6 A40,40 0 0 0 336.7,64.6"/>
          <text class="val" x="310" y="77" text-anchor="middle">45°</text>

          <circle class="pt" cx="70" cy="208.3" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="289.6" cy="300" r="3.2"/>
          <circle class="pt" cx="344.6" cy="25.4" r="3.2"/>
          <circle class="pt" cx="179.9" cy="135.1" r="3.2"/>

          <text class="val" x="116" y="166" text-anchor="end">4</text>
          <text class="val" x="270" y="74">6</text>
          <text class="val" x="244" y="222">6</text>
          <text class="val" x="176" y="272" text-anchor="middle">x</text>

          <text x="62" y="212" text-anchor="end">A</text>
          <text x="62" y="322" text-anchor="end">B</text>
          <text x="289.6" y="322" text-anchor="middle">C</text>
          <text x="70" y="144" text-anchor="middle">K</text>
          <text x="338" y="322" text-anchor="middle">L</text>
          <text x="352" y="20">P</text>
          <text x="172" y="128" text-anchor="end">T</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      'm(ABC) = 90°',
      '[AP] ve [CP], ABC üçgeninin dış açıortaylarıdır',
      '|AP| = 10 cm',
      '|PC| = 6√2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde verilenlere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '7' },
      { key: 'B', text: '2√13' },
      { key: 'C', text: '8' },
      { key: 'D', text: '5√2' },
      { key: 'E', text: '10' },
    ],
    answer: 'B',
    hint: 'Önce APC üçgeninin P köşesindeki açısını bul; dış açıortaylar A ile C’deki açıların yarılarının bütünlerini verir.',
    solution: [
      {
        title: 'P köşesindeki açı',
        detail:
          'A’daki dış açı 180° − m(A) olduğundan onun yarısı m(PAC) = 90° − m(A)/2’dir. Aynı biçimde m(PCA) = 90° − m(C)/2’dir.',
      },
      {
        title: '45°’yi bul',
        detail:
          'ABC üçgeni B’de dik olduğundan m(A) + m(C) = 90°’dir. APC üçgeninde m(APC) = 180° − [(90° − m(A)/2) + (90° − m(C)/2)] = (m(A) + m(C))/2 = 45° bulunur.',
      },
      {
        title: 'Dikmeyi indir',
        detail:
          'C’den [AP] üzerine [CT] dikmesini indirelim. PTC üçgeni T’de dik ve m(TPC) = 45° olduğundan ikizkenardır: |CT| = |TP| = |PC| / √2 = 6√2 / √2 = 6 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AT| = |AP| − |TP| = 10 − 6 = 4 cm’dir. ATC üçgeni T’de diktir: x² = |AT|² + |CT|² = 4² + 6² = 16 + 36 = 52 olduğundan x = 2√13 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 187
  {
    id: 'triangles-187',
    topic: 'Dik üçgende kenara inen çevriyan',
    figure: {
      viewBox: '0 12 400 322',
      caption: 'Şekil 187',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde D noktası [BC] kenarı üzerindedir. |AD| = 13 cm, |AC| = 15 cm, |DC| = 4 cm ve |BD| = x’tir.',
      svg: `
          <path class="ln" d="M100,36 L100,300 L298,300 Z"/>
          <path class="ln" d="M100,36 L210,300"/>

          <path class="ln" d="M100,288 L112,288 L112,300"/>

          <circle class="pt" cx="100" cy="36" r="3.2"/>
          <circle class="pt" cx="100" cy="300" r="3.2"/>
          <circle class="pt" cx="210" cy="300" r="3.2"/>
          <circle class="pt" cx="298" cy="300" r="3.2"/>

          <text class="val" x="142" y="173" text-anchor="end">13</text>
          <text class="val" x="212" y="160">15</text>
          <text class="val" x="155" y="292" text-anchor="middle">x</text>
          <text class="val" x="254" y="292" text-anchor="middle">4</text>

          <text x="100" y="28" text-anchor="middle">A</text>
          <text x="92" y="322" text-anchor="end">B</text>
          <text x="210" y="322" text-anchor="middle">D</text>
          <text x="306" y="322">C</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'D ∈ [BC]',
      '|AD| = 13 cm',
      '|AC| = 15 cm',
      '|DC| = 4 cm',
      '|BD| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '5' },
      { key: 'E', text: '6' },
    ],
    answer: 'D',
    hint: 'ABD ve ABC üçgenlerinin ikisi de B’de diktir; ortak dik kenar |AB|’yi iki Pisagor bağıntısında yazıp taraf tarafa çıkar.',
    solution: [
      {
        title: 'ABD üçgeninde Pisagor',
        detail:
          '[AB] ⊥ [BC] olduğundan ABD üçgeni B’de diktir: |AB|² + |BD|² = |AD|² → |AB|² + x² = 13² = 169.',
      },
      {
        title: 'ABC üçgeninde Pisagor',
        detail:
          'Aynı dik açıyla ABC üçgeninde |AB|² + |BC|² = |AC|² yazılır. |BC| = |BD| + |DC| = x + 4 olduğundan |AB|² + (x + 4)² = 15² = 225 olur.',
      },
      {
        title: 'İki bağıntıyı çıkar',
        detail:
          'İkinci eşitlikten birinciyi çıkarırsak |AB|² sadeleşir: (x + 4)² − x² = 225 − 169 = 56. Soldaki fark 8x + 16’dır.',
      },
      {
        title: 'Sonuç',
        detail:
          '8x + 16 = 56 → 8x = 40 → x = 5 cm bulunur. (Kontrol: |AB|² = 169 − 25 = 144, |AB| = 12 cm ve 12² + 9² = 225 = 15² olur.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 188
  {
    id: 'triangles-188',
    topic: 'Ardışık dik açılardan Pisagor',
    figure: {
      viewBox: '0 34 400 288',
      caption: 'Şekil 188',
      label:
        'B, C, D noktalarındaki açıları dik olan ABCDE kırık çizgisinde |AB| = 4 cm, |BC| = 5 cm, |CD| = 9 cm, |DE| = 7 cm’dir. A ile E uçları bir doğru parçasıyla birleştirilmiştir.',
      svg: `
          <path class="ln" d="M50,160 L50,60 L175,60 L175,285 L350,285"/>
          <path class="ln" d="M50,160 L350,285"/>

          <path class="ln" d="M50,72 L62,72 L62,60"/>
          <path class="ln" d="M163,60 L163,72 L175,72"/>
          <path class="ln" d="M175,273 L187,273 L187,285"/>

          <circle class="pt" cx="50" cy="160" r="3.2"/>
          <circle class="pt" cx="50" cy="60" r="3.2"/>
          <circle class="pt" cx="175" cy="60" r="3.2"/>
          <circle class="pt" cx="175" cy="285" r="3.2"/>
          <circle class="pt" cx="350" cy="285" r="3.2"/>

          <text class="val" x="42" y="115" text-anchor="end">4</text>
          <text class="val" x="112" y="52" text-anchor="middle">5</text>
          <text class="val" x="183" y="175">9</text>
          <text class="val" x="262" y="307" text-anchor="middle">7</text>
          <text class="val" x="206" y="210">x</text>

          <text x="42" y="166" text-anchor="end">A</text>
          <text x="42" y="56" text-anchor="end">B</text>
          <text x="175" y="50" text-anchor="middle">C</text>
          <text x="168" y="302" text-anchor="end">D</text>
          <text x="358" y="290">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 34 400 288',
      caption: 'Şekil 188 — A’dan [BC]’ye paralel, E’den [CD]’ye paralel çizildi',
      label:
        'Aynı şekilde A’dan [BC]’ye paralel bir doğru ile E’den [CD]’ye paralel bir doğru çizilmiş, kesiştikleri nokta T ile adlandırılmıştır. ATE üçgeni T’de diktir.',
      svg: `
          <path class="ln" d="M50,160 L50,60 L175,60 L175,285 L350,285"/>
          <path class="ln" d="M50,160 L350,285"/>
          <path class="aux" d="M50,160 L350,160"/>
          <path class="aux" d="M350,160 L350,285"/>

          <path class="ln" d="M50,72 L62,72 L62,60"/>
          <path class="ln" d="M163,60 L163,72 L175,72"/>
          <path class="ln" d="M175,273 L187,273 L187,285"/>
          <path class="aux-head" d="M338,160 L338,172 L350,172"/>

          <circle class="pt" cx="50" cy="160" r="3.2"/>
          <circle class="pt" cx="50" cy="60" r="3.2"/>
          <circle class="pt" cx="175" cy="60" r="3.2"/>
          <circle class="pt" cx="175" cy="285" r="3.2"/>
          <circle class="pt" cx="350" cy="285" r="3.2"/>
          <circle class="pt" cx="350" cy="160" r="3.2"/>

          <text class="val" x="42" y="115" text-anchor="end">4</text>
          <text class="val" x="112" y="52" text-anchor="middle">5</text>
          <text class="val" x="183" y="265">9</text>
          <text class="val" x="262" y="307" text-anchor="middle">7</text>
          <text class="val" x="206" y="210">x</text>
          <text class="val" x="255" y="152" text-anchor="middle">12</text>
          <text class="val" x="358" y="228">5</text>

          <text x="42" y="166" text-anchor="end">A</text>
          <text x="42" y="56" text-anchor="end">B</text>
          <text x="175" y="50" text-anchor="middle">C</text>
          <text x="168" y="302" text-anchor="end">D</text>
          <text x="358" y="296">E</text>
          <text x="358" y="156">T</text>
        `,
    },
    given: [
      'm(ABC) = 90°',
      'm(BCD) = 90°',
      'm(CDE) = 90°',
      '|AB| = 4 cm',
      '|BC| = 5 cm',
      '|CD| = 9 cm',
      '|DE| = 7 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AE| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '11' },
      { key: 'B', text: '12' },
      { key: 'C', text: '13' },
      { key: 'D', text: '14' },
      { key: 'E', text: '15' },
    ],
    answer: 'C',
    hint: 'A’dan [BC]’ye paralel, E’den [CD]’ye paralel çiz: kesişim noktası, dik kenarları yatay ve düşey olan bir dik üçgen verir.',
    solution: [
      {
        title: 'Paralelleri çiz',
        detail:
          'Üç açı da dik olduğundan [AB] ile [CD] paralel, [BC] ile [DE] paraleldir. A’dan [BC]’ye paralel çizilen doğru ile E’den [CD]’ye paralel çizilen doğru T noktasında kesişsin; ATE üçgeni T’de diktir.',
      },
      {
        title: 'Yatay dik kenar',
        detail:
          '[AT] doğrultusunda gidilen yol [BC] ile [DE] boylarının toplamıdır: |AT| = |BC| + |DE| = 5 + 7 = 12 cm.',
      },
      {
        title: 'Düşey dik kenar',
        detail:
          '[TE] doğrultusunda ise [CD] boyunca inilip [AB] boyunca çıkılan yolun farkı kalır: |TE| = |CD| − |AB| = 9 − 4 = 5 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'ATE üçgeninde Pisagor: x² = |AT|² + |TE|² = 12² + 5² = 144 + 25 = 169 olduğundan x = 13 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 189
  {
    id: 'triangles-189',
    topic: 'Simetriyle en kısa yol',
    figure: {
      viewBox: '0 10 400 250',
      caption: 'Şekil 189',
      label:
        'B ve C köşelerindeki açıları dik olan şekilde [AB] sol kenar, [BC] taban, [DC] ise sağ kenardır. |AB| = 9 cm, |DC| = 3 cm, |BC| = 16 cm’dir. [BC] üzerindeki bir P noktası A ve D ile birleştirilmiştir.',
      svg: `
          <path class="ln" d="M72,31 L72,175 L328,175 L328,127"/>
          <path class="ln" d="M72,31 L264,175 L328,127"/>

          <path class="ln" d="M72,163 L84,163 L84,175"/>
          <path class="ln" d="M328,163 L316,163 L316,175"/>

          <circle class="pt" cx="72" cy="31" r="3.2"/>
          <circle class="pt" cx="72" cy="175" r="3.2"/>
          <circle class="pt" cx="328" cy="175" r="3.2"/>
          <circle class="pt" cx="328" cy="127" r="3.2"/>
          <circle class="pt" cx="264" cy="175" r="3.2"/>

          <text class="val" x="64" y="105" text-anchor="end">9</text>
          <text class="val" x="336" y="155">3</text>
          <text class="val" x="180" y="197" text-anchor="middle">16</text>

          <text x="64" y="35" text-anchor="end">A</text>
          <text x="64" y="197" text-anchor="end">B</text>
          <text x="264" y="197" text-anchor="middle">P</text>
          <text x="336" y="197">C</text>
          <text x="336" y="123">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 10 400 250',
      caption: 'Şekil 189 — D’nin [BC]’ye göre simetriği alındı',
      label:
        'Aynı şekilde D noktasının [BC] doğrusuna göre simetriği D′ alınmış, A ile D′ bir doğru parçasıyla birleştirilmiştir; bu doğru parçası [BC]’yi P noktasında keser.',
      svg: `
          <path class="ln" d="M72,31 L72,175 L328,175 L328,127"/>
          <path class="ln" d="M72,31 L264,175 L328,127"/>
          <path class="aux" d="M328,175 L328,223"/>
          <path class="aux" d="M264,175 L328,223"/>

          <path class="ln" d="M72,163 L84,163 L84,175"/>
          <path class="ln" d="M328,163 L316,163 L316,175"/>

          <path class="tick" d="M322,151 L334,151"/>
          <path class="tick" d="M322,199 L334,199"/>

          <circle class="pt" cx="72" cy="31" r="3.2"/>
          <circle class="pt" cx="72" cy="175" r="3.2"/>
          <circle class="pt" cx="328" cy="175" r="3.2"/>
          <circle class="pt" cx="328" cy="127" r="3.2"/>
          <circle class="pt" cx="264" cy="175" r="3.2"/>
          <circle class="pt" cx="328" cy="223" r="3.2"/>

          <text class="val" x="64" y="105" text-anchor="end">9</text>
          <text class="val" x="338" y="155">3</text>
          <text class="val" x="338" y="207">3</text>
          <text class="val" x="180" y="197" text-anchor="middle">16</text>
          <text class="val" x="189" y="145" text-anchor="middle">20</text>

          <text x="64" y="35" text-anchor="end">A</text>
          <text x="64" y="197" text-anchor="end">B</text>
          <text x="256" y="197" text-anchor="end">P</text>
          <text x="318" y="197" text-anchor="end">C</text>
          <text x="338" y="123">D</text>
          <text x="338" y="240">D′</text>
        `,
    },
    given: ['[AB] ⊥ [BC]', '[DC] ⊥ [CB]', '|AB| = 9 cm', '|DC| = 3 cm', '|BC| = 16 cm', 'P ∈ [BC]'],
    stem: [],
    ask: 'Yukarıdaki şekilde P ∈ [BC] olduğuna göre, en kısa |AP| + |PD| toplamı kaç cm’dir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '22' },
      { key: 'D', text: '24' },
      { key: 'E', text: '25' },
    ],
    answer: 'B',
    hint: 'D noktasının [BC] doğrusuna göre simetriğini al; kırık yol, düz bir doğru parçasına dönüşünce en kısadır.',
    solution: [
      {
        title: 'Simetriği al',
        detail:
          'D noktasının [BC] doğrusuna göre simetriği D′ olsun. [DC] ⊥ [BC] olduğundan D′, C’nin altında ve |CD′| = |CD| = 3 cm’dir.',
      },
      {
        title: 'Yolu düzleştir',
        detail:
          '[BC] üzerindeki her P noktası için |PD| = |PD′| olduğundan |AP| + |PD| = |AP| + |PD′|’dür. İki noktayı birleştiren en kısa yol doğru parçası olduğundan bu toplam en az |AD′| kadardır; eşitlik P noktası [AD′] üzerindeyken sağlanır.',
      },
      {
        title: 'AD′ uzunluğu',
        detail:
          'A ile D′ arasındaki yatay uzaklık |BC| = 16 cm, düşey uzaklık ise |AB| + |CD′| = 9 + 3 = 12 cm’dir. Aradaki açı dik olduğundan |AD′|² = 16² + 12² = 256 + 144 = 400 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'En kısa |AP| + |PD| toplamı |AD′| = √400 = 20 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 190
  {
    id: 'triangles-190',
    topic: 'İki 120°’lik açı arasındaki kırık çizgi',
    figure: {
      viewBox: '0 62 400 268',
      caption: 'Şekil 190',
      label:
        'B ve C köşelerindeki açıları dik olan şekilde [AB] sol kenar, [BC] taban, [CD] sağ kenardır. A ile D, yukarıdaki E noktası üzerinden birleştirilmiştir. m(EAB) = 120°, m(EDC) = 120°, |BC| = 6√3 cm, |AE| = 5 cm ve |ED| = x’tir.',
      svg: `
          <path class="ln" d="M70,150 L70,300 L329.8,300 L329.8,175"/>
          <path class="ln" d="M70,150 L178.25,87.5 L329.8,175"/>

          <path class="ln" d="M70,288 L82,288 L82,300"/>
          <path class="ln" d="M329.8,288 L317.8,288 L317.8,300"/>

          <path class="arc" d="M70,180 A30,30 0 0 0 95.98,135"/>
          <path class="arc" d="M329.8,205 A30,30 0 0 1 303.8,160"/>

          <circle class="pt" cx="70" cy="150" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="329.8" cy="300" r="3.2"/>
          <circle class="pt" cx="329.8" cy="175" r="3.2"/>
          <circle class="pt" cx="178.25" cy="87.5" r="3.2"/>

          <text class="val" x="112" y="176">120°</text>
          <text class="val" x="292" y="203" text-anchor="end">120°</text>
          <text class="val" x="116" y="105" text-anchor="end">5</text>
          <text class="val" x="262" y="117">x</text>
          <text class="val" x="200" y="322" text-anchor="middle">6√3</text>

          <text x="62" y="154" text-anchor="end">A</text>
          <text x="62" y="322" text-anchor="end">B</text>
          <text x="338" y="322">C</text>
          <text x="338" y="171">D</text>
          <text x="178.25" y="80" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 62 400 268',
      caption: 'Şekil 190 — E’den [BC]’ye dikme indirildi',
      label:
        'Aynı şekilde E’den [BC]’ye [EH] dikmesi indirilmiş, A’dan ve D’den bu dikmeye sırasıyla [AK] ve [DL] yatay doğru parçaları çizilmiştir. ABHK ve DCHL birer dikdörtgendir.',
      svg: `
          <path class="ln" d="M70,150 L70,300 L329.8,300 L329.8,175"/>
          <path class="ln" d="M70,150 L178.25,87.5 L329.8,175"/>
          <path class="aux" d="M178.25,87.5 L178.25,300"/>
          <path class="aux" d="M70,150 L178.25,150"/>
          <path class="aux" d="M329.8,175 L178.25,175"/>

          <path class="ln" d="M70,288 L82,288 L82,300"/>
          <path class="ln" d="M329.8,288 L317.8,288 L317.8,300"/>
          <path class="aux-head" d="M166.25,300 L166.25,288 L178.25,288"/>

          <path class="arc" d="M100,150 A30,30 0 0 0 95.98,135"/>
          <path class="arc" d="M299.8,175 A30,30 0 0 1 303.8,160"/>

          <circle class="pt" cx="70" cy="150" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="329.8" cy="300" r="3.2"/>
          <circle class="pt" cx="329.8" cy="175" r="3.2"/>
          <circle class="pt" cx="178.25" cy="87.5" r="3.2"/>
          <circle class="pt" cx="178.25" cy="300" r="3.2"/>
          <circle class="pt" cx="178.25" cy="150" r="3.2"/>
          <circle class="pt" cx="178.25" cy="175" r="3.2"/>

          <text class="val" x="114" y="143">30°</text>
          <text class="val" x="292" y="171" text-anchor="end">30°</text>
          <text class="val" x="116" y="105" text-anchor="end">5</text>
          <text class="val" x="262" y="117">x</text>
          <text class="val" x="124" y="322" text-anchor="middle">5√3/2</text>
          <text class="val" x="254" y="322" text-anchor="middle">x√3/2</text>

          <text x="62" y="154" text-anchor="end">A</text>
          <text x="62" y="322" text-anchor="end">B</text>
          <text x="338" y="322">C</text>
          <text x="338" y="171">D</text>
          <text x="178.25" y="80" text-anchor="middle">E</text>
          <text x="186" y="292">H</text>
          <text x="186" y="145">K</text>
          <text x="170" y="190" text-anchor="end">L</text>
        `,
    },
    given: [
      '[AB] ⊥ [BC]',
      '[BC] ⊥ [CD]',
      'm(EAB) = 120°',
      'm(EDC) = 120°',
      '|BC| = 6√3 cm',
      '|AE| = 5 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |ED| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '7' },
      { key: 'B', text: '8' },
      { key: 'C', text: '9' },
      { key: 'D', text: '10' },
      { key: 'E', text: '11' },
    ],
    answer: 'A',
    hint: 'E’den [BC]’ye dikme indir: [AE] ile [ED]’nin taban üzerindeki izdüşümlerinin toplamı |BC|’ye eşittir.',
    solution: [
      {
        title: 'Dikmeyi indir',
        detail:
          'E’den [BC]’ye [EH] dikmesini indirelim. [AB] ⊥ [BC] olduğundan [AB] ile [EH] paraleldir; A’dan [EH]’ye çizilen [AK] ile ABHK bir dikdörtgen olur ve |BH| = |AK|’dir.',
      },
      {
        title: 'A’daki 30°',
        detail:
          'm(BAK) = 90° olduğundan m(KAE) = 120° − 90° = 30°’dir. AKE üçgeni K’de dik olduğundan |AK| = |AE| · cos30° = 5 · √3/2 = 5√3/2 cm bulunur.',
      },
      {
        title: 'D’deki 30°',
        detail:
          'Aynı biçimde D’den [EH]’ye çizilen [DL] ile DCHL bir dikdörtgendir ve m(LDE) = 120° − 90° = 30°’dir. Buradan |HC| = |DL| = x · √3/2 cm olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BH| + |HC| = |BC| olduğundan 5√3/2 + x√3/2 = 6√3’tür. İki tarafı 2/√3 ile çarparsak 5 + x = 12, yani x = 7 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 191
  {
    id: 'triangles-191',
    topic: '15°’lik açıda hipotenüse ait yükseklik',
    figure: {
      viewBox: '0 16 400 140',
      caption: 'Şekil 191',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde m(BAC) = 15° ve |AC| = 24 cm’dir. B’den hipotenüse inen dikmenin ayağı H, |BH| = x’tir.',
      svg: `
          <path class="ln" d="M38,120 L340.3,39 L362,120 Z"/>
          <path class="ln" d="M340.3,39 L340.3,120"/>

          <path class="ln" d="M328.7,42.1 L331.8,53.7 L343.4,50.6"/>
          <path class="ln" d="M340.3,108 L328.3,108 L328.3,120"/>

          <path class="arc" d="M78,120 A40,40 0 0 0 76.6,109.65"/>

          <circle class="pt" cx="38" cy="120" r="3.2"/>
          <circle class="pt" cx="340.3" cy="39" r="3.2"/>
          <circle class="pt" cx="362" cy="120" r="3.2"/>
          <circle class="pt" cx="340.3" cy="120" r="3.2"/>

          <text class="val" x="95" y="118">15°</text>
          <text class="val" x="185" y="142" text-anchor="middle">24</text>
          <text class="val" x="334" y="86" text-anchor="end">x</text>

          <text x="30" y="124" text-anchor="end">A</text>
          <text x="348" y="34">B</text>
          <text x="370" y="142">C</text>
          <text x="338" y="142" text-anchor="end">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 16 400 140',
      caption: 'Şekil 191 — hipotenüse ait kenarortay çizildi',
      label:
        'Aynı şekilde [AC] hipotenüsünün orta noktası M ile B birleştirilmiştir; |MA| = |MB| = 12 cm’dir ve m(BMC) = 30°’dir.',
      svg: `
          <path class="ln" d="M38,120 L340.3,39 L362,120 Z"/>
          <path class="ln" d="M340.3,39 L340.3,120"/>
          <path class="aux" d="M200,120 L340.3,39"/>

          <path class="ln" d="M328.7,42.1 L331.8,53.7 L343.4,50.6"/>
          <path class="ln" d="M340.3,108 L328.3,108 L328.3,120"/>

          <path class="arc" d="M78,120 A40,40 0 0 0 76.6,109.65"/>
          <path class="arc" d="M234,120 A34,34 0 0 0 229.4,103"/>

          <path class="tick" d="M148,114 L148,126"/>
          <path class="tick" d="M267.2,74.3 L273.2,84.7"/>

          <circle class="pt" cx="38" cy="120" r="3.2"/>
          <circle class="pt" cx="340.3" cy="39" r="3.2"/>
          <circle class="pt" cx="362" cy="120" r="3.2"/>
          <circle class="pt" cx="340.3" cy="120" r="3.2"/>
          <circle class="pt" cx="200" cy="120" r="3.2"/>

          <text class="val" x="95" y="118">15°</text>
          <text class="val" x="243" y="113">30°</text>
          <text class="val" x="148" y="142" text-anchor="middle">12</text>
          <text class="val" x="256" y="80" text-anchor="middle">12</text>
          <text class="val" x="334" y="86" text-anchor="end">x</text>

          <text x="30" y="124" text-anchor="end">A</text>
          <text x="348" y="34">B</text>
          <text x="370" y="142">C</text>
          <text x="338" y="142" text-anchor="end">H</text>
          <text x="200" y="142" text-anchor="middle">M</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'm(BAC) = 15°',
      '|AC| = 24 cm',
      '[BH] ⊥ [AC]',
      '|BH| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BH| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '5' },
      { key: 'D', text: '6' },
      { key: 'E', text: '8' },
    ],
    answer: 'D',
    hint: 'Hipotenüse ait kenarortayı çiz: 15°’lik açı, dış açı sayesinde 30°’lik bir dik üçgen doğurur.',
    solution: [
      {
        title: 'Kenarortayı çiz',
        detail:
          '[AC] hipotenüsünün orta noktası M olsun. Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısı kadardır: |MA| = |MB| = |MC| = 24/2 = 12 cm.',
      },
      {
        title: 'İkizkenar üçgen',
        detail: '|MA| = |MB| olduğundan ABM üçgeni ikizkenardır ve m(MBA) = m(MAB) = 15°’dir.',
      },
      {
        title: 'Dış açı',
        detail:
          'ABM üçgeninin M köşesindeki dış açısı, kendisine komşu olmayan iki iç açının toplamıdır: m(BMC) = 15° + 15° = 30°.',
      },
      {
        title: 'Sonuç',
        detail:
          'BHM üçgeni H’de dik ve m(BMH) = 30° olduğundan 30°’nin karşısındaki dik kenar hipotenüsün yarısıdır: x = |BM|/2 = 12/2 = 6 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 192
  {
    id: 'triangles-192',
    topic: 'İkizkenarlıkla dik üçgende uzunluk farkı',
    figure: {
      viewBox: '0 96 400 256',
      caption: 'Şekil 192',
      label:
        'B köşesindeki açısı dik olan ABC üçgeninde F noktası [BC] üzerinde, D noktası [AC] üzerindedir. E, D ve F doğrusaldır; A’dan bu doğruya inen dikmenin ayağı E’dir. |DF| = |FC| ve m(BFE) = 60°’dir.',
      svg: `
          <path class="ln" d="M55,152 L55,320 L346,320 Z"/>
          <path class="ln" d="M115.6,117 L232.8,320"/>
          <path class="ln" d="M55,152 L115.6,117"/>

          <path class="ln" d="M55,308 L67,308 L67,320"/>
          <path class="ln" d="M105.2,123 L111.2,133.4 L121.6,127.4"/>

          <path class="arc" d="M200.8,320 A32,32 0 0 1 216.8,292.3"/>

          <path class="tick" d="M199.3,274 L209.7,268"/>
          <path class="tick" d="M289.4,314 L289.4,326"/>

          <circle class="pt" cx="55" cy="152" r="3.2"/>
          <circle class="pt" cx="55" cy="320" r="3.2"/>
          <circle class="pt" cx="346" cy="320" r="3.2"/>
          <circle class="pt" cx="115.6" cy="117" r="3.2"/>
          <circle class="pt" cx="176.24" cy="222" r="3.2"/>
          <circle class="pt" cx="232.8" cy="320" r="3.2"/>

          <text class="val" x="185" y="292" text-anchor="middle">60°</text>
          <text class="val" x="269" y="257">x</text>

          <text x="47" y="156" text-anchor="end">A</text>
          <text x="47" y="342" text-anchor="end">B</text>
          <text x="354" y="342">C</text>
          <text x="184" y="216">D</text>
          <text x="108" y="110" text-anchor="end">E</text>
          <text x="232.8" y="342" text-anchor="middle">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 96 400 256',
      caption: 'Şekil 192 — B’den [EF]’ye, A’dan [BK]’ye dikme indirildi',
      label:
        'Aynı şekilde B’den [EF] doğrusuna [BK] dikmesi, A’dan [BK] üzerine [AL] dikmesi indirilmiştir; AEKL bir dikdörtgendir ve m(ABK) = 60°’dir.',
      svg: `
          <path class="ln" d="M55,152 L55,320 L346,320 Z"/>
          <path class="ln" d="M115.6,117 L232.8,320"/>
          <path class="ln" d="M55,152 L115.6,117"/>
          <path class="aux" d="M55,320 L188.35,243"/>
          <path class="aux" d="M55,152 L127.74,278"/>

          <path class="ln" d="M55,308 L67,308 L67,320"/>
          <path class="ln" d="M105.2,123 L111.2,133.4 L121.6,127.4"/>
          <path class="aux-head" d="M178.82,248.5 L184.32,258.03 L193.85,252.53"/>
          <path class="aux-head" d="M122.24,268.5 L131.77,262.97 L137.27,272.5"/>

          <path class="arc" d="M200.8,320 A32,32 0 0 1 216.8,292.3"/>
          <path class="arc" d="M55,290 A30,30 0 0 1 80.98,305"/>

          <path class="tick" d="M199.3,274 L209.7,268"/>
          <path class="tick" d="M289.4,314 L289.4,326"/>

          <circle class="pt" cx="55" cy="152" r="3.2"/>
          <circle class="pt" cx="55" cy="320" r="3.2"/>
          <circle class="pt" cx="346" cy="320" r="3.2"/>
          <circle class="pt" cx="115.6" cy="117" r="3.2"/>
          <circle class="pt" cx="176.24" cy="222" r="3.2"/>
          <circle class="pt" cx="232.8" cy="320" r="3.2"/>
          <circle class="pt" cx="188.35" cy="243" r="3.2"/>
          <circle class="pt" cx="127.74" cy="278" r="3.2"/>

          <text class="val" x="185" y="292" text-anchor="middle">60°</text>
          <text class="val" x="68" y="282">60°</text>
          <text class="val" x="269" y="257">x</text>

          <text x="47" y="156" text-anchor="end">A</text>
          <text x="47" y="342" text-anchor="end">B</text>
          <text x="354" y="342">C</text>
          <text x="184" y="216">D</text>
          <text x="108" y="110" text-anchor="end">E</text>
          <text x="232.8" y="342" text-anchor="middle">F</text>
          <text x="201" y="259">K</text>
          <text x="133" y="292">L</text>
        `,
    },
    given: [
      'ABC bir dik üçgen',
      '[AB] ⊥ [BC]',
      'F ∈ [BC], D ∈ [AC]',
      'E, D, F doğrusal',
      '[AE] ⊥ [EF]',
      '|DF| = |FC|',
      'm(BFE) = 60°',
      '|AB| − |AE| = 7 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '11' },
      { key: 'C', text: '12' },
      { key: 'D', text: '13' },
      { key: 'E', text: '14' },
    ],
    answer: 'E',
    hint: 'Önce |DF| = |FC| ikizkenarlığından C açısını bul; sonra B’den [EF]’ye dikme indirip |AE| ile bu dikmeyi karşılaştır.',
    solution: [
      {
        title: 'C köşesindeki açı',
        detail:
          'm(BFE) = 60° olduğundan m(DFC) = 180° − 60° = 120°’dir. |FD| = |FC| olduğundan FDC ikizkenar üçgeninin taban açıları m(FDC) = m(FCD) = (180° − 120°)/2 = 30°’dir. Yani m(ACB) = 30°, m(BAC) = 60° olur ve 30°-60°-90° üçgeninde |BC| = √3 · |AB|’dir.',
      },
      {
        title: 'Tabanı ikizkenardan oku',
        detail:
          'Tepe açısı 120° olan FDC ikizkenar üçgeninde tabanın yarısı |FC| · cos30°’dur: x = |DC| = 2 · |FC| · √3/2 = √3 · |FC| = √3 · (|BC| − |BF|) = 3|AB| − √3|BF|.',
      },
      {
        title: 'B’den dikme indir',
        detail:
          'B’den [EF] doğrusuna [BK] dikmesini indirelim. BKF üçgeni K’de dik ve m(BFK) = 60° olduğundan |BK| = |BF| · sin60° = √3|BF|/2 ve m(FBK) = 30°, dolayısıyla m(ABK) = 90° − 30° = 60°’dir.',
      },
      {
        title: '|AE|’yi |BK| ile bağla',
        detail:
          'A’dan [BK] üzerine [AL] dikmesini indirelim. [AE] ⊥ [EF] ve [BK] ⊥ [EF] olduğundan AEKL dörtgeninin dört açısı da diktir, yani |AE| = |LK|’dir. ABL üçgeninde m(ABL) = 60° olduğundan |BL| = |AB| · cos60° = |AB|/2 ve |AE| = |BK| − |BL| = √3|BF|/2 − |AB|/2 olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Buradan |AB| − |AE| = |AB| − √3|BF|/2 + |AB|/2 = (3|AB| − √3|BF|)/2 = x/2 bulunur. |AB| − |AE| = 7 cm verildiğinden x = 2 · 7 = 14 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 193
  {
    id: 'triangles-193',
    topic: 'İkizkenar üçgende Pisagor',
    figure: {
      viewBox: '0 20 400 180',
      caption: 'Şekil 193',
      label:
        'Tabanı [AC] olan ikizkenar ABC üçgeninde D noktası [AC] üzerindedir; [BD] ⊥ [BC], |AD| = 5 cm ve |DC| = 9 cm’dir.',
      svg: `
          <path class="ln" d="M25,60 L200,153.5 L375,60 Z"/>
          <path class="ln" d="M200,153.5 L150,60"/>

          <path class="ln" d="M194.3,142.9 L204.9,137.2 L210.6,147.8"/>

          <line class="tick" x1="115.3" y1="101.5" x2="109.7" y2="112"/>
          <line class="tick" x1="290.3" y1="112" x2="284.7" y2="101.5"/>

          <circle class="pt" cx="25" cy="60" r="3.2"/>
          <circle class="pt" cx="200" cy="153.5" r="3.2"/>
          <circle class="pt" cx="375" cy="60" r="3.2"/>
          <circle class="pt" cx="150" cy="60" r="3.2"/>

          <text class="val" x="87" y="76" text-anchor="middle">5</text>
          <text class="val" x="262" y="76" text-anchor="middle">9</text>
          <text class="val" x="163" y="110" text-anchor="end">x</text>

          <text x="17" y="56" text-anchor="end">A</text>
          <text x="200" y="176" text-anchor="middle">B</text>
          <text x="383" y="56">C</text>
          <text x="150" y="52" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 20 400 180',
      caption: 'Şekil 193 — tabana ait yükseklik çizildi',
      label:
        'Aynı şekilde B’den [AC] tabanına inen [BH] yüksekliği çizilmiştir; ikizkenar üçgende bu yükseklik tabanı ortaladığından |AH| = |HC| = 7 cm ve |DH| = 2 cm’dir.',
      svg: `
          <path class="ln" d="M25,60 L200,153.5 L375,60 Z"/>
          <path class="ln" d="M200,153.5 L150,60"/>
          <path class="aux" d="M200,153.5 L200,60"/>

          <path class="ln" d="M194.3,142.9 L204.9,137.2 L210.6,147.8"/>
          <path class="aux-head" d="M200,72 L212,72 L212,60"/>

          <line class="tick" x1="115.3" y1="101.5" x2="109.7" y2="112"/>
          <line class="tick" x1="290.3" y1="112" x2="284.7" y2="101.5"/>

          <circle class="pt" cx="25" cy="60" r="3.2"/>
          <circle class="pt" cx="200" cy="153.5" r="3.2"/>
          <circle class="pt" cx="375" cy="60" r="3.2"/>
          <circle class="pt" cx="150" cy="60" r="3.2"/>
          <circle class="pt" cx="200" cy="60" r="3.2"/>

          <text class="val" x="87" y="76" text-anchor="middle">5</text>
          <text class="val" x="175" y="76" text-anchor="middle">2</text>
          <text class="val" x="287" y="76" text-anchor="middle">7</text>
          <text class="val" x="163" y="110" text-anchor="end">x</text>

          <text x="17" y="56" text-anchor="end">A</text>
          <text x="200" y="176" text-anchor="middle">B</text>
          <text x="383" y="56">C</text>
          <text x="150" y="52" text-anchor="middle">D</text>
          <text x="200" y="52" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir ikizkenar üçgen',
      '|AB| = |BC|',
      'D ∈ [AC]',
      '[BD] ⊥ [BC]',
      '|AD| = 5 cm',
      '|DC| = 9 cm',
      '|BD| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '3√2' },
      { key: 'C', text: '√21' },
      { key: 'D', text: '2√6' },
      { key: 'E', text: '5' },
    ],
    answer: 'B',
    hint: 'B’den tabana yüksekliği indir: ikizkenar üçgende bu yükseklik tabanı ortalar, geriye iki Pisagor bağıntısı kalır.',
    solution: [
      {
        title: 'Tabana yüksekliği indir',
        detail:
          '|AB| = |BC| olduğundan ABC, tabanı [AC] olan bir ikizkenar üçgendir. B’den [AC]’ye inen [BH] yüksekliği tabanı ortalar: |AC| = 5 + 9 = 14 cm olduğundan |AH| = |HC| = 7 cm’dir.',
      },
      {
        title: 'D’nin yerini belirle',
        detail:
          '|AD| = 5 cm ve |AH| = 7 cm olduğundan D noktası A ile H arasındadır ve |DH| = 7 − 5 = 2 cm’dir.',
      },
      {
        title: 'İki Pisagor bağıntısı',
        detail:
          'BHD üçgeni H’de dik olduğundan |BD|² = |BH|² + 2², BHC üçgeni de H’de dik olduğundan |BC|² = |BH|² + 7²’dir.',
      },
      {
        title: 'Dik açıyı kullan',
        detail:
          '[BD] ⊥ [BC] olduğundan DBC üçgeni B’de diktir: |BD|² + |BC|² = |DC|² = 81. Yerine yazılırsa (|BH|² + 4) + (|BH|² + 49) = 81, yani 2|BH|² = 28 ve |BH|² = 14 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'x² = |BD|² = |BH|² + 4 = 14 + 4 = 18 olduğundan x = 3√2 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 194
  {
    id: 'triangles-194',
    topic: 'İkizkenar üçgende tabana dik doğru',
    figure: {
      viewBox: '0 -10 400 360',
      caption: 'Şekil 194',
      label:
        'Tabanı [BC] olan ikizkenar ABC üçgeninde B, A, D doğrusaldır; D’den [BC]’ye indirilen [DE] dikmesi [AC] kenarını F noktasında keser.',
      svg: `
          <path class="ln" d="M200,80 L100,320 L300,320 Z"/>
          <path class="ln" d="M200,80 L225,20"/>
          <path class="ln" d="M225,20 L225,320"/>

          <path class="ln" d="M225,308 L237,308 L237,320"/>

          <circle class="pt" cx="200" cy="80" r="3.2"/>
          <circle class="pt" cx="100" cy="320" r="3.2"/>
          <circle class="pt" cx="300" cy="320" r="3.2"/>
          <circle class="pt" cx="225" cy="20" r="3.2"/>
          <circle class="pt" cx="225" cy="320" r="3.2"/>
          <circle class="pt" cx="225" cy="140" r="3.2"/>

          <text class="val" x="140" y="196" text-anchor="end">13</text>
          <text class="val" x="160" y="344" text-anchor="middle">10</text>
          <text class="val" x="217" y="84" text-anchor="end">6</text>
          <text class="val" x="233" y="234">x</text>

          <text x="192" y="76" text-anchor="end">A</text>
          <text x="92" y="332" text-anchor="end">B</text>
          <text x="308" y="332">C</text>
          <text x="225" y="10" text-anchor="middle">D</text>
          <text x="225" y="332" text-anchor="middle">E</text>
          <text x="236" y="132">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 -10 400 360',
      caption: 'Şekil 194 — tabana ait yükseklik çizildi',
      label:
        'Aynı şekilde A’dan [BC]’ye inen [AH] yüksekliği çizilmiştir; ikizkenar üçgende bu yükseklik tabanı ortaladığından |BH| = |HC| = 5 cm ve |AH| = 12 cm’dir.',
      svg: `
          <path class="ln" d="M200,80 L100,320 L300,320 Z"/>
          <path class="ln" d="M200,80 L225,20"/>
          <path class="ln" d="M225,20 L225,320"/>
          <path class="aux" d="M200,80 L200,320"/>

          <path class="ln" d="M225,308 L237,308 L237,320"/>
          <path class="aux-head" d="M200,308 L212,308 L212,320"/>

          <circle class="pt" cx="200" cy="80" r="3.2"/>
          <circle class="pt" cx="100" cy="320" r="3.2"/>
          <circle class="pt" cx="300" cy="320" r="3.2"/>
          <circle class="pt" cx="225" cy="20" r="3.2"/>
          <circle class="pt" cx="225" cy="320" r="3.2"/>
          <circle class="pt" cx="225" cy="140" r="3.2"/>
          <circle class="pt" cx="200" cy="320" r="3.2"/>

          <text class="val" x="140" y="196" text-anchor="end">13</text>
          <text class="val" x="192" y="204" text-anchor="end">12</text>
          <text class="val" x="150" y="344" text-anchor="middle">5</text>
          <text class="val" x="217" y="84" text-anchor="end">6</text>
          <text class="val" x="233" y="234">x</text>

          <text x="192" y="76" text-anchor="end">A</text>
          <text x="92" y="332" text-anchor="end">B</text>
          <text x="308" y="332">C</text>
          <text x="225" y="10" text-anchor="middle">D</text>
          <text x="225" y="332" text-anchor="middle">E</text>
          <text x="236" y="132">F</text>
          <text x="200" y="344" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir ikizkenar üçgen',
      '|AB| = |AC| = 13 cm',
      '|BC| = 10 cm',
      'B, A, D doğrusal',
      '[DE] ⊥ [BC]',
      'F ∈ [AC]',
      '|DF| = 6 cm',
      '|FE| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |FE| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '15/2' },
      { key: 'B', text: '8' },
      { key: 'C', text: '17/2' },
      { key: 'D', text: '9' },
      { key: 'E', text: '19/2' },
    ],
    answer: 'D',
    hint: 'Taban açılarının tanjantını bul; |DE| ile |FE|’yi bu tanjant yardımıyla |BE| ve |EC| cinsinden yaz.',
    solution: [
      {
        title: 'Taban açısını tanı',
        detail:
          'A’dan [BC]’ye inen [AH] yüksekliği ikizkenar üçgende tabanı ortalar: |BH| = |HC| = 5 cm ve Pisagor bağıntısından |AH| = √(13² − 5²) = 12 cm’dir. Böylece taban açıları için tan B = tan C = 12/5 olur.',
      },
      {
        title: 'İki dik üçgen',
        detail:
          'DEB üçgeni E’de diktir ve D, B, A doğrusal olduğundan m(DBE) = m(ABC)’dir: |DE| = |BE| · 12/5. FEC üçgeni de E’de dik olduğundan |FE| = |EC| · 12/5’tir.',
      },
      {
        title: 'Farkı yaz',
        detail:
          'F noktası [DE] üzerinde olduğundan |DF| = |DE| − |FE| = (|BE| − |EC|) · 12/5 = 6, yani |BE| − |EC| = 30/12 = 5/2 cm’dir.',
      },
      {
        title: 'Parçaları bul',
        detail:
          'E ∈ [BC] olduğundan |BE| + |EC| = 10 cm’dir. |BE| − |EC| = 5/2 ile birlikte |EC| = (10 − 5/2)/2 = 15/4 cm bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = |FE| = (15/4) · (12/5) = 9 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 195
  {
    id: 'triangles-195',
    topic: 'Eşkenar üçgende dikmelerin ayırdığı parçalar',
    figure: {
      viewBox: '0 14 400 326',
      caption: 'Şekil 195',
      label:
        'Eşkenar ABC üçgeninde D noktası [AB] üzerindedir; D’den [BC]’ye [DE], [AC]’ye [DF] dikmeleri indirilmiştir.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M87.5,235.05 L87.5,300"/>
          <path class="ln" d="M87.5,235.05 L256.25,137.62"/>

          <path class="ln" d="M87.5,288 L99.5,288 L99.5,300"/>
          <path class="ln" d="M245.86,143.62 L251.86,154.02 L262.25,148.02"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="87.5" cy="235.05" r="3.2"/>
          <circle class="pt" cx="87.5" cy="300" r="3.2"/>
          <circle class="pt" cx="256.25" cy="137.62" r="3.2"/>

          <text x="200" y="28" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="79" y="232" text-anchor="end">D</text>
          <text x="87.5" y="322" text-anchor="middle">E</text>
          <text x="267" y="132">F</text>
        `,
    },
    given: ['ABC bir eşkenar üçgen', 'D ∈ [AB]', '[DE] ⊥ [BC]', '[DF] ⊥ [AC]', '|AF| = 3 · |BE|'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |EC|/|FC| oranı kaçtır?',
    choices: [
      { key: 'A', text: '6/5' },
      { key: 'B', text: '7/5' },
      { key: 'C', text: '3/2' },
      { key: 'D', text: '8/5' },
      { key: 'E', text: '5/3' },
    ],
    answer: 'B',
    hint: 'Eşkenar üçgenin açıları 60° olduğundan her iki dikme de 30° − 60° − 90° üçgeni doğurur.',
    solution: [
      {
        title: 'Eşkenar üçgenin açıları',
        detail: 'Eşkenar üçgende her iç açı 60°’dir: m(A) = m(B) = m(C) = 60°.',
      },
      {
        title: '[DE] dikmesi',
        detail:
          'DEB üçgeni E’de dik ve m(DBE) = 60° olduğundan 30° − 60° − 90° üçgenidir. 30°’nin karşısındaki dik kenar hipotenüsün yarısıdır: |BE| = |BD|/2.',
      },
      {
        title: '[DF] dikmesi',
        detail: 'Aynı biçimde DFA üçgeni F’de dik ve m(DAF) = 60° olduğundan |AF| = |AD|/2’dir.',
      },
      {
        title: 'Verilen oranı kullan',
        detail:
          '|AF| = 3|BE| eşitliğinde yerine yazılırsa |AD|/2 = 3 · |BD|/2, yani |AD| = 3|BD| olur. Kenar uzunluğuna a dersek |AD| + |BD| = a olduğundan |BD| = a/4 ve |AD| = 3a/4’tür.',
      },
      {
        title: 'Sonuç',
        detail:
          '|BE| = a/8 olduğundan |EC| = a − a/8 = 7a/8; |AF| = 3a/8 olduğundan |FC| = a − 3a/8 = 5a/8’dir. Böylece |EC|/|FC| = (7a/8)/(5a/8) = 7/5 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 196
  {
    id: 'triangles-196',
    topic: 'Eşkenar üçgen ve ikizkenar üçgende Pisagor',
    figure: {
      viewBox: '0 12 400 232',
      caption: 'Şekil 196',
      label:
        'Eşkenar ABC üçgeninde B, C, D doğrusaldır; [CD] üzerinde kurulan ECD üçgeninde |EC| = |ED| ve m(EDB) = 30°’dir, A ile E birleştirilmiştir.',
      svg: `
          <path class="ln" d="M129,38.5 L30,210 L228,210 Z"/>
          <path class="ln" d="M228,210 L371,210"/>
          <path class="ln" d="M228,210 L299.4,168.75 L371,210"/>
          <path class="ln" d="M129,38.5 L299.4,168.75"/>

          <path class="arc" d="M331,210 A40,40 0 0 1 336.36,190"/>

          <line class="tick" x1="266.7" y1="194.6" x2="260.7" y2="184.2"/>
          <line class="tick" x1="332.2" y1="194.6" x2="338.2" y2="184.2"/>

          <circle class="pt" cx="129" cy="38.5" r="3.2"/>
          <circle class="pt" cx="30" cy="210" r="3.2"/>
          <circle class="pt" cx="228" cy="210" r="3.2"/>
          <circle class="pt" cx="371" cy="210" r="3.2"/>
          <circle class="pt" cx="299.4" cy="168.75" r="3.2"/>

          <text class="val" x="314" y="200" text-anchor="middle">30°</text>
          <text class="val" x="70" y="128" text-anchor="end">12</text>
          <text class="val" x="300" y="230" text-anchor="middle">5√3</text>

          <text x="129" y="28" text-anchor="middle">A</text>
          <text x="22" y="232" text-anchor="end">B</text>
          <text x="228" y="232" text-anchor="middle">C</text>
          <text x="379" y="232">D</text>
          <text x="307" y="163">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 12 400 232',
      caption: 'Şekil 196 — E’den tabana dikme indirildi',
      label:
        'Aynı şekilde E’den [CD]’ye inen [EH] dikmesi çizilmiştir; ikizkenar ECD üçgeninde bu dikme tabanı ortaladığından m(ECD) = 30° ve |EC| = 5 cm’dir.',
      svg: `
          <path class="ln" d="M129,38.5 L30,210 L228,210 Z"/>
          <path class="ln" d="M228,210 L371,210"/>
          <path class="ln" d="M228,210 L299.4,168.75 L371,210"/>
          <path class="ln" d="M129,38.5 L299.4,168.75"/>
          <path class="aux" d="M299.4,168.75 L299.4,210"/>

          <path class="arc" d="M331,210 A40,40 0 0 1 336.36,190"/>
          <path class="arc" d="M258,210 A30,30 0 0 0 254,195"/>
          <path class="aux-head" d="M299.4,198 L311.4,198 L311.4,210"/>

          <line class="tick" x1="266.7" y1="194.6" x2="260.7" y2="184.2"/>
          <line class="tick" x1="332.2" y1="194.6" x2="338.2" y2="184.2"/>

          <circle class="pt" cx="129" cy="38.5" r="3.2"/>
          <circle class="pt" cx="30" cy="210" r="3.2"/>
          <circle class="pt" cx="228" cy="210" r="3.2"/>
          <circle class="pt" cx="371" cy="210" r="3.2"/>
          <circle class="pt" cx="299.4" cy="168.75" r="3.2"/>
          <circle class="pt" cx="299.4" cy="210" r="3.2"/>

          <text class="val" x="280" y="205" text-anchor="middle">30°</text>
          <text class="val" x="252" y="176" text-anchor="end">5</text>
          <text class="val" x="70" y="128" text-anchor="end">12</text>
          <text class="val" x="263" y="230" text-anchor="middle">5√3/2</text>
          <text class="val" x="335" y="230" text-anchor="middle">5√3/2</text>

          <text x="129" y="28" text-anchor="middle">A</text>
          <text x="22" y="232" text-anchor="end">B</text>
          <text x="228" y="232" text-anchor="middle">C</text>
          <text x="379" y="232">D</text>
          <text x="307" y="163">E</text>
          <text x="299.4" y="230" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'B, C, D doğrusal',
      '|EC| = |ED|',
      'm(EDB) = 30°',
      '|AB| = 12 cm',
      '|CD| = 5√3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AE| kaç cm’dir?',
    choices: [
      { key: 'A', text: '11' },
      { key: 'B', text: '12' },
      { key: 'C', text: '13' },
      { key: 'D', text: '5√7' },
      { key: 'E', text: '14' },
    ],
    answer: 'C',
    hint: '|EC| = |ED| ikizkenarlığı D’deki 30°’yi C’ye taşır; sonra ACE açısına bak.',
    solution: [
      {
        title: 'Taban açıları',
        detail:
          '|EC| = |ED| olduğundan ECD üçgeni tabanı [CD] olan bir ikizkenar üçgendir ve taban açıları eşittir: m(ECD) = m(EDC) = 30°.',
      },
      {
        title: '|EC| uzunluğu',
        detail:
          'E’den [CD]’ye inen dikmenin ayağı H, ikizkenar üçgende tabanın orta noktasıdır: |CH| = 5√3/2 cm. ECH üçgeni H’de dik ve m(ECH) = 30° olduğundan |EC| = |CH| : cos30° = (5√3/2) : (√3/2) = 5 cm’dir.',
      },
      {
        title: 'Dik açıyı yakala',
        detail:
          'Eşkenar üçgende m(ACB) = 60°’dir. B, C, D doğrusal olduğundan C köşesindeki üç açı doğru açıyı tamamlar: m(ACE) = 180° − 60° − 30° = 90°.',
      },
      {
        title: 'Sonuç',
        detail:
          'ACE üçgeni C’de dik olduğundan Pisagor bağıntısıyla |AE|² = |AC|² + |CE|² = 12² + 5² = 144 + 25 = 169 ve |AE| = 13 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 197
  {
    id: 'triangles-197',
    topic: 'Eşkenar üçgenin alanı',
    figure: {
      viewBox: '0 12 400 300',
      caption: 'Şekil 197',
      label:
        'Eşkenar ABC üçgeninde D noktası [AB] üzerinde, F noktası [BC] üzerindedir; E, B, F, C doğrusal olmak üzere DEF üçgeninde [DF] ⊥ [EC] ve |DF| = |EF|’dir.',
      svg: `
          <path class="ln" d="M234.2,40 L95.6,280 L372.8,280 Z"/>
          <path class="ln" d="M28,280 L95.6,280"/>
          <path class="ln" d="M28,280 L188,120"/>
          <path class="ln" d="M188,120 L188,280"/>

          <path class="ln" d="M188,268 L176,268 L176,280"/>

          <line class="tick" x1="216.3" y1="83" x2="205.9" y2="77"/>
          <line class="tick" x1="141.8" y1="274" x2="141.8" y2="286"/>

          <circle class="pt" cx="234.2" cy="40" r="3.2"/>
          <circle class="pt" cx="95.6" cy="280" r="3.2"/>
          <circle class="pt" cx="372.8" cy="280" r="3.2"/>
          <circle class="pt" cx="188" cy="120" r="3.2"/>
          <circle class="pt" cx="28" cy="280" r="3.2"/>
          <circle class="pt" cx="188" cy="280" r="3.2"/>

          <text class="val" x="96" y="188" text-anchor="end">8√2</text>

          <text x="234.2" y="28" text-anchor="middle">A</text>
          <text x="95.6" y="302" text-anchor="middle">B</text>
          <text x="380.8" y="302">C</text>
          <text x="180" y="110" text-anchor="end">D</text>
          <text x="20" y="302" text-anchor="end">E</text>
          <text x="188" y="302" text-anchor="middle">F</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'DEF bir dik üçgen',
      'E, B, F, C doğrusal',
      'D ∈ [AB], F ∈ [BC]',
      '[DF] ⊥ [EC]',
      '|DF| = |EF|',
      '|AD| = |BF|',
      '|DE| = 8√2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, eşkenar üçgenin alanı kaç cm²’dir?',
    choices: [
      { key: 'A', text: '18√3' },
      { key: 'B', text: '24√3' },
      { key: 'C', text: '27√3' },
      { key: 'D', text: '36√3' },
      { key: 'E', text: '48√3' },
    ],
    answer: 'E',
    hint: 'Önce ikizkenar dik üçgenden |DF|’yi bul; sonra |AD| = |BF| koşulunu kenar uzunluğu cinsinden yaz.',
    solution: [
      {
        title: 'İkizkenar dik üçgen',
        detail:
          'DEF üçgeni F’de dik ve |DF| = |EF| olduğundan ikizkenar dik üçgendir; hipotenüsü bir dik kenarının √2 katıdır: 8√2 = |DF| · √2, yani |DF| = |EF| = 8 cm’dir.',
      },
      {
        title: 'Eşkenar üçgende dikme',
        detail:
          'Eşkenar üçgenin kenar uzunluğu a olsun. [DF] ⊥ [BC] ve m(DBF) = 60° olduğundan DBF üçgeni 30° − 60° − 90° üçgenidir: |BF| = |BD|/2 ve |DF| = |BD| · √3/2’dir.',
      },
      {
        title: '|AD| = |BF| koşulu',
        detail:
          '|AD| = |BF| = |BD|/2’dir. D ∈ [AB] olduğundan |AD| + |BD| = a, yani |BD|/2 + |BD| = a ve |BD| = 2a/3 bulunur.',
      },
      {
        title: 'Kenarı bul',
        detail: '|DF| = (2a/3) · √3/2 = a√3/3 = 8 olduğundan a = 24/√3 = 8√3 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenarı a olan eşkenar üçgenin alanı a²√3/4’tür: Alan = (8√3)² · √3/4 = 192√3/4 = 48√3 cm².',
      },
    ],
  },

  // ---------------------------------------------------------------- 198
  {
    id: 'triangles-198',
    topic: 'Eşkenar üçgende iç noktanın kenarlara uzaklıkları',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 198',
      label:
        'Eşkenar ABC üçgeninin içindeki P noktasından kenarlara [PD], [PE] ve [PF] dikmeleri indirilmiştir; bu dikmelerin uzunlukları sırasıyla 2, 3 ve 4 cm’dir.',
      svg: `
          <path class="ln" d="M199.9,30 L44,300 L355.8,300 Z"/>
          <path class="ln" d="M182.6,240 L182.6,300"/>
          <path class="ln" d="M182.6,240 L104.6,195"/>
          <path class="ln" d="M182.6,240 L286.5,180"/>

          <path class="ln" d="M182.6,288 L194.6,288 L194.6,300"/>
          <path class="ln" d="M113.3,200 L118.3,191.3 L109.6,186.3"/>
          <path class="ln" d="M277.8,185 L282.8,193.7 L291.5,188.7"/>

          <circle class="pt" cx="199.9" cy="30" r="3.2"/>
          <circle class="pt" cx="44" cy="300" r="3.2"/>
          <circle class="pt" cx="355.8" cy="300" r="3.2"/>
          <circle class="pt" cx="182.6" cy="240" r="3.2"/>
          <circle class="pt" cx="182.6" cy="300" r="3.2"/>
          <circle class="pt" cx="104.6" cy="195" r="3.2"/>
          <circle class="pt" cx="286.5" cy="180" r="3.2"/>

          <text class="val" x="191" y="274">2</text>
          <text class="val" x="137" y="232" text-anchor="middle">3</text>
          <text class="val" x="241" y="224" text-anchor="middle">4</text>

          <text x="200" y="20" text-anchor="middle">A</text>
          <text x="36" y="322" text-anchor="end">B</text>
          <text x="364" y="322">C</text>
          <text x="170" y="245" text-anchor="end">P</text>
          <text x="182.6" y="322" text-anchor="middle">D</text>
          <text x="92" y="188" text-anchor="end">E</text>
          <text x="299" y="188">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 198 — P köşelerle birleştirildi',
      label:
        'Aynı şekilde P noktası A, B ve C köşeleriyle birleştirilmiştir; üçgen, tabanları eşkenar üçgenin kenarları olan üç küçük üçgene ayrılmıştır.',
      svg: `
          <path class="ln" d="M199.9,30 L44,300 L355.8,300 Z"/>
          <path class="ln" d="M182.6,240 L182.6,300"/>
          <path class="ln" d="M182.6,240 L104.6,195"/>
          <path class="ln" d="M182.6,240 L286.5,180"/>
          <path class="aux" d="M182.6,240 L199.9,30"/>
          <path class="aux" d="M182.6,240 L44,300"/>
          <path class="aux" d="M182.6,240 L355.8,300"/>

          <path class="ln" d="M182.6,288 L194.6,288 L194.6,300"/>
          <path class="ln" d="M113.3,200 L118.3,191.3 L109.6,186.3"/>
          <path class="ln" d="M277.8,185 L282.8,193.7 L291.5,188.7"/>

          <circle class="pt" cx="199.9" cy="30" r="3.2"/>
          <circle class="pt" cx="44" cy="300" r="3.2"/>
          <circle class="pt" cx="355.8" cy="300" r="3.2"/>
          <circle class="pt" cx="182.6" cy="240" r="3.2"/>
          <circle class="pt" cx="182.6" cy="300" r="3.2"/>
          <circle class="pt" cx="104.6" cy="195" r="3.2"/>
          <circle class="pt" cx="286.5" cy="180" r="3.2"/>

          <text class="val" x="191" y="274">2</text>
          <text class="val" x="137" y="232" text-anchor="middle">3</text>
          <text class="val" x="241" y="224" text-anchor="middle">4</text>

          <text x="200" y="20" text-anchor="middle">A</text>
          <text x="36" y="322" text-anchor="end">B</text>
          <text x="364" y="322">C</text>
          <text x="170" y="245" text-anchor="end">P</text>
          <text x="182.6" y="322" text-anchor="middle">D</text>
          <text x="92" y="188" text-anchor="end">E</text>
          <text x="299" y="188">F</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'P noktası üçgenin içindedir',
      '[PD] ⊥ [BC], [PE] ⊥ [AB], [PF] ⊥ [AC]',
      '|PD| = 2 cm',
      '|PE| = 3 cm',
      '|PF| = 4 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, eşkenar üçgenin bir kenarı kaç cm’dir?',
    choices: [
      { key: 'A', text: '5√3' },
      { key: 'B', text: '6√3' },
      { key: 'C', text: '7√3' },
      { key: 'D', text: '8√3' },
      { key: 'E', text: '9√3' },
    ],
    answer: 'B',
    hint: 'P’yi köşelerle birleştirip üç küçük üçgenin alanını topla.',
    solution: [
      {
        title: 'P’yi köşelerle birleştir',
        detail:
          'Eşkenar üçgenin kenar uzunluğu a olsun. [PA], [PB] ve [PC] çizildiğinde ABC üçgeni; tabanları [AB], [BC] ve [AC] olan PAB, PBC ve PCA üçgenlerine ayrılır.',
      },
      {
        title: 'Alanları topla',
        detail:
          'Bu üç üçgenin tabana ait yükseklikleri tam olarak P’nin kenarlara uzaklıklarıdır: Alan(ABC) = a · 3/2 + a · 2/2 + a · 4/2 = a · (2 + 3 + 4)/2 = 9a/2.',
      },
      {
        title: 'Yükseklikle karşılaştır',
        detail:
          'Eşkenar üçgenin kendi yüksekliği h ise Alan(ABC) = a · h/2’dir. İki ifade eşitlenirse h = 2 + 3 + 4 = 9 cm bulunur; yani iç bir noktanın kenarlara uzaklıkları toplamı üçgenin yüksekliğine eşittir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenarı a olan eşkenar üçgende h = a√3/2 olduğundan a√3/2 = 9, buradan a = 18/√3 = 6√3 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 199
  {
    id: 'triangles-199',
    topic: 'Eşkenar üçgende paralellik ve açıortay',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 199',
      label:
        'Eşkenar ABC üçgeninde F noktası [AB], D noktası [BC], E noktası [AC] üzerindedir; [DE] kenarı [AB]’ye paralel, [FE] ise [DE]’ye diktir ve [DE] doğrusu FDC açısını iki eş açıya böler.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M250,300 L300,213.4"/>
          <path class="ln" d="M150,126.8 L250,300"/>
          <path class="ln" d="M150,126.8 L300,213.4"/>

          <path class="ln" d="M294,223.8 L283.6,217.8 L289.6,207.4"/>

          <path class="arc" d="M234,272.3 A32,32 0 0 1 263.5,271"/>
          <path class="arc" d="M268.4,273.8 A32,32 0 0 1 282,300"/>

          <path class="par" d="M177.8,88.6 L177.5,79.2 L169.2,83.6"/>
          <path class="par" d="M277.8,261.8 L277.5,252.4 L269.2,256.8"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="250" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="213.4" r="3.2"/>
          <circle class="pt" cx="150" cy="126.8" r="3.2"/>

          <text class="val" x="88" y="217" text-anchor="end">10</text>
          <text class="val" x="266" y="244" text-anchor="end">x</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="250" y="322" text-anchor="middle">D</text>
          <text x="310" y="210">E</text>
          <text x="138" y="124" text-anchor="end">F</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'F ∈ [AB], D ∈ [BC], E ∈ [AC]',
      '[DE] // [AB]',
      '[DE] ⊥ [FE]',
      '[DE], FDC açısının açıortayı',
      '|BF| = 10 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DE| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '5' },
      { key: 'C', text: '6' },
      { key: 'D', text: '7' },
      { key: 'E', text: '8' },
    ],
    answer: 'B',
    hint: 'Paralellik D köşesindeki açılardan birini 60° yapar; açıortay bu 60°’yi bir kez daha kopyalar.',
    solution: [
      {
        title: 'Paralellikten açıyı taşı',
        detail:
          '[DE] // [AB] ve D ∈ [BC] olduğundan EDC ile ABC yöndeş açılardır: m(EDC) = m(ABC) = 60°’dir.',
      },
      {
        title: 'Açıortayı kullan',
        detail:
          '[DE], FDC açısının açıortayı olduğundan m(FDE) = m(EDC) = 60°’dir. B, D, C doğrusal olduğundan D köşesindeki üç açı doğru açıyı tamamlar: m(FDB) = 180° − 60° − 60° = 60°.',
      },
      {
        title: 'BDF üçgeni eşkenardır',
        detail:
          'BDF üçgeninde m(DBF) = 60° ve m(BDF) = 60° olduğundan üçüncü açı da 60°’dir; üçgen eşkenardır ve |DF| = |BF| = 10 cm bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'DEF üçgeni E’de diktir ve m(FDE) = 60°’dir. Bu 30°-60°-90° üçgeninde 60°’lik açıya komşu kenar hipotenüsün yarısıdır: x = |DE| = |DF| / 2 = 10 / 2 = 5 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 200
  {
    id: 'triangles-200',
    topic: 'İki eşkenar üçgen — en küçük uzunluk',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 200',
      label:
        'Eşkenar ABC üçgeninin [BC] kenarı üzerinde D ve E noktaları alınmış, [DE] kenarı üzerine üçgenin içine doğru eşkenar DEF üçgeni kurulmuş ve A ile F birleştirilmiştir.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M150,300 L214.3,188.7 L278.6,300"/>
          <path class="ln" d="M200,40.2 L214.3,188.7"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="150" cy="300" r="3.2"/>
          <circle class="pt" cx="278.6" cy="300" r="3.2"/>
          <circle class="pt" cx="214.3" cy="188.7" r="3.2"/>

          <text class="val" x="214.3" y="320" text-anchor="middle">6</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="150" y="322" text-anchor="middle">D</text>
          <text x="278.6" y="322" text-anchor="middle">E</text>
          <text x="224" y="185">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 200 — yükseklikler karşılaştırıldı',
      label:
        'Aynı şekilde A’dan aşağı doğru [BC]’ye dik bir doğru, F’den de [BC]’ye paralel bir doğru çizilmiş, bunların kesim noktası K ile adlandırılmıştır; AKF üçgeni K’de diktir.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M150,300 L214.3,188.7 L278.6,300"/>
          <path class="ln" d="M200,40.2 L214.3,188.7"/>
          <path class="aux" d="M200,40.2 L200,188.7"/>
          <path class="aux" d="M200,188.7 L214.3,188.7"/>

          <path class="aux-head" d="M200,176.7 L212,176.7 L212,188.7"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="150" cy="300" r="3.2"/>
          <circle class="pt" cx="278.6" cy="300" r="3.2"/>
          <circle class="pt" cx="214.3" cy="188.7" r="3.2"/>
          <circle class="pt" cx="200" cy="188.7" r="3.2"/>

          <text class="val" x="214.3" y="320" text-anchor="middle">6</text>
          <text class="val" x="192" y="120" text-anchor="end">4√3</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="150" y="322" text-anchor="middle">D</text>
          <text x="278.6" y="322" text-anchor="middle">E</text>
          <text x="224" y="185">F</text>
          <text x="194" y="208" text-anchor="end">K</text>
        `,
    },
    given: [
      'ABC ve DEF birer eşkenar üçgen',
      'D ve E noktaları [BC] kenarı üzerinde',
      'F noktası ABC üçgeninin içinde',
      '|BC| = 14 cm',
      '|DE| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AF| nin en küçük değeri kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√3' },
      { key: 'B', text: '3√3' },
      { key: 'C', text: '4√3' },
      { key: 'D', text: '5√3' },
      { key: 'E', text: '6√3' },
    ],
    answer: 'C',
    hint: '[DE] kenarı [BC] üzerinde kayarken F noktasının [BC]’ye uzaklığı hiç değişmez.',
    solution: [
      {
        title: 'İki yüksekliği yaz',
        detail:
          'Kenarı a olan eşkenar üçgenin yüksekliği a√3/2’dir. A noktasının [BC]’ye uzaklığı 14√3/2 = 7√3 cm, F noktasının [BC]’ye uzaklığı ise 6√3/2 = 3√3 cm’dir. [DE] kenarı [BC] üzerinde kaysa da bu iki uzaklık değişmez.',
      },
      {
        title: 'Dik üçgen kur',
        detail:
          'A’dan [BC]’ye inen dikme ile F’den geçen [BC]’ye paralel doğru K noktasında kesişsin. AKF üçgeni K’de diktir ve |AK| = 7√3 − 3√3 = 4√3 cm sabittir.',
      },
      {
        title: 'Hipotenüs dik kenardan küçük olamaz',
        detail:
          'Pisagor bağıntısına göre |AF|² = |AK|² + |KF|² olduğundan |AF| ≥ |AK| = 4√3 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Eşitlik |KF| = 0 iken, yani F noktası A’nın tam altına geldiğinde sağlanır. Bunun için [DE] kenarının orta noktası [BC]’nin orta noktasıyla çakışmalı, yani |BD| = (14 − 6)/2 = 4 cm olmalıdır; bu da mümkündür. O hâlde |AF| nin en küçük değeri 4√3 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 201
  {
    id: 'triangles-201',
    topic: 'Eşkenar üçgende dik açı ve Pisagor',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 201',
      label:
        'Eşkenar ABC üçgeninde D noktası [AB], E noktası [BC] üzerindedir; [DE] ⊥ [DC] olacak biçimde D noktası E ve C ile birleştirilmiştir, |BD| = 3 cm ve |EC| = 14 cm’dir.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M80,248 L70,300"/>
          <path class="ln" d="M80,248 L350,300"/>

          <path class="ln" d="M77.7,259.8 L89.5,262.1 L91.8,250.3"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="80" cy="248" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>

          <text class="val" x="54" y="271" text-anchor="end">3</text>
          <text class="val" x="210" y="320" text-anchor="middle">14</text>
          <text class="val" x="128" y="141" text-anchor="end">x</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="68" y="244" text-anchor="end">D</text>
          <text x="80" y="322" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 201 — D’den tabana dikme indirildi',
      label:
        'Aynı şekilde D noktasından [BC] kenarına inen [DH] dikmesi çizilmiştir; BDH üçgeni 30°-60°-90° üçgenidir.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M80,248 L70,300"/>
          <path class="ln" d="M80,248 L350,300"/>
          <path class="aux" d="M80,248 L80,300"/>

          <path class="ln" d="M77.7,259.8 L89.5,262.1 L91.8,250.3"/>
          <path class="aux-head" d="M80,288 L92,288 L92,300"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="80" cy="248" r="3.2"/>
          <circle class="pt" cx="70" cy="300" r="3.2"/>
          <circle class="pt" cx="80" cy="300" r="3.2"/>

          <text class="val" x="54" y="271" text-anchor="end">3</text>
          <text class="val" x="210" y="320" text-anchor="middle">14</text>
          <text class="val" x="128" y="141" text-anchor="end">x</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="68" y="244" text-anchor="end">D</text>
          <text x="66" y="322" text-anchor="middle">E</text>
          <text x="96" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'D ∈ [AB], E ∈ [BC]',
      '[DE] ⊥ [DC]',
      '|BD| = 3 cm',
      '|EC| = 14 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '12' },
      { key: 'E', text: '14' },
    ],
    answer: 'D',
    hint: 'Kenara a de, D’den [BC]’ye dikme indir; [DE] ⊥ [DC] olması DEC üçgeninde Pisagor bağıntısını verir.',
    solution: [
      {
        title: 'Kenarı bilinmeyenle göster',
        detail:
          'Eşkenar üçgenin kenarına a diyelim. |BD| = 3 cm olduğundan x = |AD| = a − 3’tür. |EC| = 14 cm olduğundan E noktası için |BE| = a − 14 cm’dir.',
      },
      {
        title: 'D’den tabana dikme indir',
        detail:
          'D’den [BC]’ye inen dikmenin ayağı H olsun. m(B) = 60° olduğundan BDH üçgeni 30°-60°-90° üçgenidir: |BH| = |BD| / 2 = 3/2 cm ve |DH| = 3√3/2 cm’dir.',
      },
      {
        title: 'İki dik üçgende Pisagor',
        detail:
          'DHE ve DHC üçgenleri H’de diktir: |DE|² = |DH|² + |HE|² = 27/4 + (3/2 − (a − 14))² ve |DC|² = |DH|² + |HC|² = 27/4 + (a − 3/2)²’dir.',
      },
      {
        title: 'Dik açıyı kullan',
        detail:
          '[DE] ⊥ [DC] olduğundan DEC üçgeni D’de diktir: |DE|² + |DC|² = |EC|² = 196. Yerine yazılırsa 27/2 + (31/2 − a)² + (a − 3/2)² = 196, yani 2a² − 34a + 60 = 0 ve a² − 17a + 30 = 0 bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Denklemin kökleri a = 15 ve a = 2’dir. |EC| = 14 cm bir kenardan küçük olmak zorunda olduğundan a = 15 cm alınır; buradan x = 15 − 3 = 12 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 202
  {
    id: 'triangles-202',
    topic: 'Eşkenar üçgende iç doğru parçası',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 202',
      label:
        'Eşkenar ABC üçgeninde D noktası [AB], E noktası [BC] üzerindedir; |AD| = |DE| olup |BD| = 7 cm ve |BE| = 15 cm’dir.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M102.5,209.1 L275,300"/>

          <path class="arc" d="M63,277.5 A26,26 0 0 1 76,300"/>

          <line class="tick" x1="156.4" y1="127.7" x2="146.1" y2="121.7"/>
          <line class="tick" x1="191.5" y1="249.2" x2="186" y2="259.9"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="102.5" cy="209.1" r="3.2"/>
          <circle class="pt" cx="275" cy="300" r="3.2"/>

          <text class="val" x="96" y="282" text-anchor="middle">60°</text>
          <text class="val" x="64" y="252" text-anchor="end">7</text>
          <text class="val" x="162" y="321" text-anchor="middle">15</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="90" y="205" text-anchor="end">D</text>
          <text x="275" y="322" text-anchor="middle">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 202 — D’den tabana dikme indirildi',
      label:
        'Aynı şekilde D noktasından [BC] kenarına inen [DH] dikmesi çizilmiştir; BDH üçgeni 30°-60°-90° üçgeni, DHE üçgeni ise H’de dik bir üçgendir.',
      svg: `
          <path class="ln" d="M200,40.2 L50,300 L350,300 Z"/>
          <path class="ln" d="M102.5,209.1 L275,300"/>
          <path class="aux" d="M102.5,209.1 L102.5,300"/>

          <path class="aux-head" d="M102.5,288 L114.5,288 L114.5,300"/>

          <line class="tick" x1="156.4" y1="127.7" x2="146.1" y2="121.7"/>
          <line class="tick" x1="191.5" y1="249.2" x2="186" y2="259.9"/>

          <circle class="pt" cx="200" cy="40.2" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="102.5" cy="209.1" r="3.2"/>
          <circle class="pt" cx="275" cy="300" r="3.2"/>
          <circle class="pt" cx="102.5" cy="300" r="3.2"/>

          <text class="val" x="64" y="252" text-anchor="end">7</text>
          <text class="val" x="76" y="321" text-anchor="middle">7/2</text>
          <text class="val" x="190" y="321" text-anchor="middle">23/2</text>
          <text class="val" x="112" y="272">7√3/2</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="90" y="205" text-anchor="end">D</text>
          <text x="275" y="322" text-anchor="middle">E</text>
          <text x="102.5" y="322" text-anchor="middle">H</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'D ∈ [AB], E ∈ [BC]',
      '|AD| = |DE|',
      '|BD| = 7 cm',
      '|BE| = 15 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, Çevre(ABC) kaç cm’dir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '51' },
      { key: 'C', text: '54' },
      { key: 'D', text: '57' },
      { key: 'E', text: '60' },
    ],
    answer: 'E',
    hint: 'Önce BDE üçgeninden |DE| uzunluğunu bul; |AD| de o kadardır ve kenar |AD| + |DB| eder.',
    solution: [
      {
        title: 'D’den tabana dikme indir',
        detail:
          'D’den [BC]’ye inen dikmenin ayağı H olsun. Eşkenar üçgende m(B) = 60° olduğundan BDH üçgeni 30°-60°-90° üçgenidir: |BH| = |BD| / 2 = 7/2 cm ve |DH| = 7√3/2 cm’dir.',
      },
      {
        title: '|HE| uzunluğu',
        detail: 'H noktası B ile E arasındadır: |HE| = |BE| − |BH| = 15 − 7/2 = 23/2 cm’dir.',
      },
      {
        title: 'DHE üçgeninde Pisagor',
        detail: '|DE|² = |DH|² + |HE|² = 147/4 + 529/4 = 676/4 = 169 olduğundan |DE| = 13 cm’dir.',
      },
      {
        title: 'Kenarı bul',
        detail:
          '|AD| = |DE| = 13 cm’dir. D noktası [AB] üzerinde olduğundan kenar |AB| = |AD| + |DB| = 13 + 7 = 20 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Eşkenar üçgende Çevre(ABC) = 3 · 20 = 60 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 203
  {
    id: 'triangles-203',
    topic: 'İkizkenar dik üçgende kenarlara uzaklıklar',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 203',
      label:
        'A köşesindeki açısı dik olan ikizkenar ABC üçgeninde [BC] tabanı üzerindeki P noktasından [AB] kenarına [PE], [AC] kenarına [PD] dikmeleri indirilmiştir; |PE| = 5 cm ve |PD| = 7 cm’dir.',
      svg: `
          <path class="ln" d="M200,150 L50,300 L350,300 Z"/>
          <path class="ln" d="M175,300 L112.5,237.5"/>
          <path class="ln" d="M175,300 L262.5,212.5"/>

          <path class="ln" d="M190.1,159.9 L200,169.8 L209.9,159.9"/>
          <path class="ln" d="M121,246 L112.5,254.5 L104,246"/>
          <path class="ln" d="M254,221 L262.5,229.5 L271,221"/>

          <circle class="pt" cx="200" cy="150" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="175" cy="300" r="3.2"/>
          <circle class="pt" cx="112.5" cy="237.5" r="3.2"/>
          <circle class="pt" cx="262.5" cy="212.5" r="3.2"/>

          <text class="val" x="140" y="285" text-anchor="middle">5</text>
          <text class="val" x="230" y="262" text-anchor="middle">7</text>

          <text x="200" y="142" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="175" y="322" text-anchor="middle">P</text>
          <text x="102" y="232" text-anchor="end">E</text>
          <text x="272" y="208">D</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      '|AB| = |AC|',
      'm(BAC) = 90°',
      'P ∈ [BC]',
      '[PE] ⊥ [AB], [PD] ⊥ [AC]',
      '|PE| = 5 cm',
      '|PD| = 7 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| + |AC| toplamı kaç cm’dir?',
    choices: [
      { key: 'A', text: '18' },
      { key: 'B', text: '20' },
      { key: 'C', text: '22' },
      { key: 'D', text: '24' },
      { key: 'E', text: '26' },
    ],
    answer: 'D',
    hint: 'A, E, P, D noktalarının oluşturduğu dörtgenin üç açısı diktir; bu dörtgen ne olabilir?',
    solution: [
      {
        title: 'AEPD bir dikdörtgendir',
        detail:
          'AEPD dörtgeninde m(A) = 90°, [PE] ⊥ [AB] olduğundan m(E) = 90° ve [PD] ⊥ [AC] olduğundan m(D) = 90°’dir. Üç açısı dik olan dörtgen bir dikdörtgendir; karşılıklı kenarları eşittir: |AE| = |PD| = 7 cm ve |AD| = |PE| = 5 cm’dir.',
      },
      {
        title: 'Taban açıları',
        detail:
          '|AB| = |AC| ve m(BAC) = 90° olduğundan taban açıları m(B) = m(C) = (180° − 90°) / 2 = 45°’dir.',
      },
      {
        title: 'İkizkenar dik üçgenleri yakala',
        detail:
          'BEP üçgeni E’de dik ve m(B) = 45° olduğundan m(BPE) = 45°’dir; üçgen ikizkenardır ve |BE| = |PE| = 5 cm’dir.',
      },
      {
        title: 'Kenarı topla',
        detail: 'E noktası [AB] üzerinde olduğundan |AB| = |AE| + |EB| = 7 + 5 = 12 cm bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '|AC| = |AB| = 12 cm olduğundan |AB| + |AC| = 12 + 12 = 24 cm’dir. (Aynı sonuç |PE| + |PD| = 5 + 7 = 12 toplamının kenara eşit olmasından da görülür.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 204
  {
    id: 'triangles-204',
    topic: 'İkizkenar üçgende açı avı',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 204',
      label:
        'Tabanı [BC] olan ikizkenar ABC üçgeninde D noktası [AC] üzerindedir ve B ile birleştirilmiştir; |AD|, |BD| ve |BC| uzunlukları birbirine eşittir.',
      svg: `
          <path class="ln" d="M200,40 L115.5,300 L284.5,300 Z"/>
          <path class="ln" d="M115.5,300 L252.2,200.7"/>

          <path class="arc" d="M187.6,78 A40,40 0 0 0 212.4,78"/>

          <line class="tick" x1="231.8" y1="118.5" x2="220.4" y2="122.2"/>
          <line class="tick" x1="187.4" y1="255.2" x2="180.3" y2="245.5"/>
          <line class="tick" x1="200" y1="294" x2="200" y2="306"/>

          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <circle class="pt" cx="115.5" cy="300" r="3.2"/>
          <circle class="pt" cx="284.5" cy="300" r="3.2"/>
          <circle class="pt" cx="252.2" cy="200.7" r="3.2"/>

          <text class="val" x="200" y="100" text-anchor="middle">x</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="107" y="322" text-anchor="end">B</text>
          <text x="293" y="322">C</text>
          <text x="262" y="197">D</text>
        `,
    },
    given: ['ABC bir üçgen', '|AB| = |AC|', 'D ∈ [AC]', '|AD| = |BD| = |BC|', 'm(BAC) = x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '40' },
      { key: 'C', text: '45' },
      { key: 'D', text: '50' },
      { key: 'E', text: '54' },
    ],
    answer: 'A',
    hint: 'Her ikizkenar üçgende taban açılarını x cinsinden yaz; ABD üçgeninin dış açısı zinciri başlatır.',
    solution: [
      {
        title: 'ABD üçgeni',
        detail:
          '|AD| = |BD| olduğundan ABD üçgeni tabanı [AB] olan bir ikizkenar üçgendir: m(ABD) = m(BAD) = x’tir.',
      },
      {
        title: 'Dış açı',
        detail: 'BDC açısı ABD üçgeninin D köşesindeki dış açısıdır: m(BDC) = x + x = 2x’tir.',
      },
      {
        title: 'DBC üçgeni',
        detail:
          '|BD| = |BC| olduğundan DBC üçgeni tabanı [DC] olan bir ikizkenar üçgendir: m(BCD) = m(BDC) = 2x’tir.',
      },
      {
        title: 'ABC üçgenine dön',
        detail:
          '|AB| = |AC| olduğundan m(ABC) = m(ACB)’dir. D noktası [AC] üzerinde olduğundan m(ACB) = m(BCD) = 2x, dolayısıyla m(ABC) = 2x’tir.',
      },
      {
        title: 'Sonuç',
        detail:
          'ABC üçgeninin iç açıları toplamı 180° olduğundan x + 2x + 2x = 180°, yani 5x = 180° ve x = 36°’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 205
  {
    id: 'triangles-205',
    topic: 'İkizkenar üçgende çevre',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 205',
      label:
        'İkizkenar bir üçgen; eşit uzunluktaki iki kenarı birer çentikle işaretlenmiş ve 30 ile, tabanı ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,40 L64.2,297.4 L335.8,297.4 Z"/>

          <line class="tick" x1="125.9" y1="165.4" x2="138.3" y2="172"/>
          <line class="tick" x1="261.7" y1="172" x2="274.1" y2="165.4"/>

          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <circle class="pt" cx="64.2" cy="297.4" r="3.2"/>
          <circle class="pt" cx="335.8" cy="297.4" r="3.2"/>

          <text class="val" x="118" y="172" text-anchor="end">30</text>
          <text class="val" x="282" y="172">30</text>
          <text class="val" x="200" y="322" text-anchor="middle">x</text>
        `,
    },
    stem: [
      'İkizkenar üçgen biçimindeki bir tarlanın etrafına, köşeler de birer ağaç olacak biçimde 4’er metre aralıkla ağaç dikiliyor.',
      'Üçgenin ikizkenarlarının uzunluğu 30’ar metre ve dikilen toplam ağaç sayısı 22’dir.',
    ],
    ask: 'Buna göre, üçgenin üçüncü kenarının uzunluğu x kaç metredir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '24' },
      { key: 'C', text: '28' },
      { key: 'D', text: '32' },
      { key: 'E', text: '36' },
    ],
    answer: 'C',
    hint: 'Ağaçlar kapalı bir çevre boyunca dizildiği için ağaç sayısı, çevrenin aralığa bölümüne eşittir.',
    solution: [
      {
        title: 'Ağaç sayısını çevreye çevir',
        detail:
          'Ağaçlar kapalı bir yol üzerinde eşit aralıklarla dizildiğinde, aralık sayısı ağaç sayısına eşittir: 22 ağaç, 22 aralık demektir.',
      },
      {
        title: 'Çevreyi bul',
        detail: 'Her aralık 4 metre olduğundan tarlanın çevresi 22 · 4 = 88 metredir.',
      },
      {
        title: 'İkizkenarları çıkar',
        detail: 'Üçgenin çevresi 30 + 30 + x olduğundan 60 + x = 88 yazılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'Buradan x = 88 − 60 = 28 metre bulunur. (30, 30 ve 28 üçgen eşitsizliğini sağlar, yani böyle bir üçgen gerçekten çizilebilir.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 206
  {
    id: 'triangles-206',
    topic: 'Eşit yükseklikler ve ikizkenarlık',
    figure: {
      viewBox: '0 4 400 300',
      caption: 'Şekil 206',
      label:
        'ABC üçgeninde B köşesinden [AC] kenarına inen dikmenin ayağı F, C köşesinden [AB] kenarına inen dikmenin ayağı D’dir; [AF] uzunluğu x, [FC] uzunluğu 8 ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,40 L50,265 L350,265 Z"/>
          <path class="ln" d="M50,265 L257.7,126.6"/>
          <path class="ln" d="M350,265 L142.3,126.6"/>

          <path class="ln" d="M264.4,136.6 L254.4,143.2 L247.7,133.3"/>
          <path class="ln" d="M149,116.6 L159,123.3 L152.3,133.3"/>

          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <circle class="pt" cx="50" cy="265" r="3.2"/>
          <circle class="pt" cx="350" cy="265" r="3.2"/>
          <circle class="pt" cx="257.7" cy="126.6" r="3.2"/>
          <circle class="pt" cx="142.3" cy="126.6" r="3.2"/>

          <text class="val" x="244" y="79">x</text>
          <text class="val" x="319" y="191">8</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="287" text-anchor="end">B</text>
          <text x="358" y="287">C</text>
          <text x="268" y="118">F</text>
          <text x="134" y="123" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABC bir üçgen',
      'D ∈ [AB], F ∈ [AC]',
      '[BF] ⊥ [AC]',
      '[CD] ⊥ [AB]',
      '|BF| = |CD| = 12 cm',
      '|FC| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AF| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '5' },
      { key: 'B', text: '11/2' },
      { key: 'C', text: '6' },
      { key: 'D', text: '13/2' },
      { key: 'E', text: '7' },
    ],
    answer: 'A',
    hint: 'Aynı üçgenin alanını iki farklı kenar–yükseklik çiftiyle yaz; iki yükseklik eşit olduğuna göre kenarlar da eşit olmalıdır.',
    solution: [
      {
        title: 'Alanı iki kez yaz',
        detail:
          '[BF], [AC] kenarına ait yükseklik; [CD] ise [AB] kenarına ait yüksekliktir. Aynı üçgenin alanı Alan(ABC) = |AC| · |BF| / 2 = |AB| · |CD| / 2 biçiminde yazılır.',
      },
      {
        title: 'Üçgen ikizkenardır',
        detail:
          '|BF| = |CD| = 12 cm verildiğinden eşitlikte bu çarpanlar sadeleşir ve |AC| = |AB| bulunur; yani ABC üçgeni tabanı [BC] olan bir ikizkenar üçgendir.',
      },
      {
        title: 'Kenarı x cinsinden yaz',
        detail:
          'F noktası [AC] üzerinde olduğundan |AC| = |AF| + |FC| = x + 8 cm’dir. Önceki adıma göre |AB| de x + 8 cm’dir.',
      },
      {
        title: 'ABF dik üçgeninde Pisagor',
        detail:
          'ABF üçgeni F’de diktir: |AB|² = |AF|² + |BF|², yani (x + 8)² = x² + 12². Açılırsa x² + 16x + 64 = x² + 144 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x² terimleri sadeleşir: 16x = 80 ve x = 5 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 207
  {
    id: 'triangles-207',
    topic: 'Eşkenar üçgende iç noktanın kenarlara uzaklıkları',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 207',
      label:
        'Eşkenar ABC üçgeninin içindeki P noktasından [BC] kenarına [PD], [AB] kenarına [PF], [AC] kenarına [PE] dikmeleri indirilmiş; uzunlukları sırasıyla 4, 5 ve 6 ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,40 L50.2,299.5 L349.8,299.5 Z"/>
          <path class="ln" d="M190,230.3 L190,299.5"/>
          <path class="ln" d="M190,230.3 L115.1,187.1"/>
          <path class="ln" d="M190,230.3 L279.9,178.4"/>

          <path class="ln" d="M182,299.5 L182,291.5 L190,291.5"/>
          <path class="ln" d="M123.8,192.1 L128.8,183.4 L120.1,178.4"/>
          <path class="ln" d="M271.2,183.4 L266.2,174.7 L274.9,169.7"/>

          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <circle class="pt" cx="50.2" cy="299.5" r="3.2"/>
          <circle class="pt" cx="349.8" cy="299.5" r="3.2"/>
          <circle class="pt" cx="190" cy="230.3" r="3.2"/>
          <circle class="pt" cx="190" cy="299.5" r="3.2"/>
          <circle class="pt" cx="115.1" cy="187.1" r="3.2"/>
          <circle class="pt" cx="279.9" cy="178.4" r="3.2"/>

          <text class="val" x="198" y="272">4</text>
          <text class="val" x="146" y="218" text-anchor="end">5</text>
          <text class="val" x="242" y="212">6</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="42" y="322" text-anchor="end">B</text>
          <text x="358" y="322">C</text>
          <text x="190" y="322" text-anchor="middle">D</text>
          <text x="105" y="183" text-anchor="end">F</text>
          <text x="288" y="174">E</text>
          <text x="198" y="224">P</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'P, üçgenin içinde bir nokta',
      '[PD] ⊥ [BC]',
      '[PF] ⊥ [AB]',
      '[PE] ⊥ [AC]',
      '|PD| = 4 cm, |PF| = 5 cm, |PE| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, A(ABC) kaç cm²’dir?',
    choices: [
      { key: 'A', text: '50√3' },
      { key: 'B', text: '75√3' },
      { key: 'C', text: '90√3' },
      { key: 'D', text: '100√3' },
      { key: 'E', text: '150√3' },
    ],
    answer: 'B',
    hint: 'P’yi köşelerle birleştirip üçgeni üç parçaya ayır; üç parçanın alanı toplamı bütünün alanına eşittir.',
    solution: [
      {
        title: 'Üçgeni üçe böl',
        detail:
          'Eşkenar üçgenin kenar uzunluğu a olsun. P noktası A, B ve C ile birleştirilirse ABC üçgeni PAB, PBC ve PCA üçgenlerine ayrılır. Bu üçgenlerin tabanları birer kenar, yükseklikleri ise P’nin o kenara uzaklığıdır.',
      },
      {
        title: 'Alanları topla',
        detail: 'Alan(ABC) = a · 5/2 + a · 4/2 + a · 6/2 = a · (5 + 4 + 6)/2 = a · 15/2 cm²’dir.',
      },
      {
        title: 'Yükseklikle karşılaştır',
        detail:
          'Üçgenin kendi yüksekliği h ise Alan(ABC) = a · h/2’dir. İki ifade eşitlenince h = 4 + 5 + 6 = 15 cm bulunur: iç bir noktanın kenarlara uzaklıkları toplamı eşkenar üçgenin yüksekliğine eşittir.',
      },
      {
        title: 'Kenarı bul',
        detail:
          'Kenarı a olan eşkenar üçgende h = a√3/2 olduğundan a√3/2 = 15, buradan a = 30/√3 = 10√3 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Alan(ABC) = a²√3/4 = (10√3)² · √3/4 = 300√3/4 = 75√3 cm²’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 208
  {
    id: 'triangles-208',
    topic: 'Eşkenar üçgende iç teğet çember yarıçapı',
    figure: {
      viewBox: '0 4 400 320',
      caption: 'Şekil 208',
      label:
        'Eşkenar ABC üçgeninin içine, üç kenara da teğet olan bir çember çizilmiş; çemberin merkezi O, [BC] kenarına değdiği nokta H ve [OH] yarıçapı r ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,40 L54.5,292 L345.5,292 Z"/>
          <circle class="ln" cx="200" cy="208" r="84"/>
          <path class="ln" d="M200,208 L200,292"/>

          <path class="ln" d="M192,292 L192,284 L200,284"/>

          <circle class="pt" cx="200" cy="40" r="3.2"/>
          <circle class="pt" cx="54.5" cy="292" r="3.2"/>
          <circle class="pt" cx="345.5" cy="292" r="3.2"/>
          <circle class="pt" cx="200" cy="208" r="3.2"/>
          <circle class="pt" cx="200" cy="292" r="3.2"/>

          <text class="val" x="208" y="256">r</text>

          <text x="200" y="30" text-anchor="middle">A</text>
          <text x="46" y="314" text-anchor="end">B</text>
          <text x="354" y="314">C</text>
          <text x="200" y="314" text-anchor="middle">H</text>
          <text x="208" y="203">O</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'O, iç teğet çemberin merkezi',
      'H ∈ [BC] ve [OH] ⊥ [BC]',
      'A(ABC) = 48√3 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |OH| = r kaç cm’dir?',
    choices: [
      { key: 'A', text: '2' },
      { key: 'B', text: '2√3' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4' },
      { key: 'E', text: '4√3' },
    ],
    answer: 'D',
    hint: 'Önce alandan kenarı çöz; eşkenar üçgende merkez aynı zamanda ağırlık merkezidir, yani yüksekliği 2’ye 1 oranında böler.',
    solution: [
      {
        title: 'Alandan kenarı bul',
        detail:
          'Kenarı a olan eşkenar üçgenin alanı a²√3/4’tür. a²√3/4 = 48√3 denkleminden a² = 192 ve a = 8√3 cm bulunur.',
      },
      {
        title: 'Yüksekliği yaz',
        detail: 'Eşkenar üçgende h = a√3/2 = 8√3 · √3/2 = 12 cm’dir.',
      },
      {
        title: 'Merkez yüksekliği nasıl böler',
        detail:
          'Eşkenar üçgende iç teğet çemberin merkezi, aynı zamanda ağırlık merkezidir ve her yüksekliği köşeden başlayarak 2 : 1 oranında böler. Kenara yakın olan parça yarıçaptır: r = h/3.',
      },
      {
        title: 'Sonuç',
        detail: 'r = 12/3 = 4 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 209
  {
    id: 'triangles-209',
    topic: 'Eşkenar üçgende dış noktanın kenarlara uzaklıkları',
    figure: {
      viewBox: '0 4 400 336',
      caption: 'Şekil 209',
      label:
        'Eşkenar ABC üçgeninin [BC] kenarının dışında kalan P noktasından [AB] doğrusuna [PK], [BC] doğrusuna [PL] ve [AC] doğrusuna [PM] dikmeleri indirilmiştir; K noktası [AB], L noktası [BC], M noktası [AC] üzerindedir.',
      svg: `
          <path class="ln" d="M200,30 L54.5,282 L345.5,282 Z"/>
          <path class="ln" d="M248.5,310 L90.9,219"/>
          <path class="ln" d="M248.5,310 L248.5,282"/>
          <path class="ln" d="M248.5,310 L333.4,261"/>

          <path class="ln" d="M100.4,224.5 L105.9,215 L96.4,209.5"/>
          <path class="ln" d="M238.5,282 L238.5,292 L248.5,292"/>
          <path class="ln" d="M323.9,266.5 L318.4,257 L327.9,251.5"/>

          <circle class="pt" cx="200" cy="30" r="3.2"/>
          <circle class="pt" cx="54.5" cy="282" r="3.2"/>
          <circle class="pt" cx="345.5" cy="282" r="3.2"/>
          <circle class="pt" cx="248.5" cy="310" r="3.2"/>
          <circle class="pt" cx="90.9" cy="219" r="3.2"/>
          <circle class="pt" cx="248.5" cy="282" r="3.2"/>
          <circle class="pt" cx="333.4" cy="261" r="3.2"/>

          <text x="200" y="20" text-anchor="middle">A</text>
          <text x="46" y="275" text-anchor="end">B</text>
          <text x="354" y="278">C</text>
          <text x="82" y="215" text-anchor="end">K</text>
          <text x="240" y="275" text-anchor="end">L</text>
          <text x="343" y="258">M</text>
          <text x="248" y="332" text-anchor="middle">P</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'P, üçgenin dışında ve [BC] nin öte tarafında bir nokta',
      '[PK] ⊥ [AB], [PL] ⊥ [BC], [PM] ⊥ [AC]',
      '|PK| = 13 cm',
      '|PL| = 2 cm',
      '|PM| = 7 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AB| kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '18' },
      { key: 'C', text: '24' },
      { key: 'D', text: '12√3' },
      { key: 'E', text: '18√3' },
    ],
    answer: 'D',
    hint: 'İç noktada uzaklıklar toplanıyordu; nokta bir kenarın dışına çıkınca o kenara olan uzaklık toplama değil, çıkarmaya girer.',
    solution: [
      {
        title: 'Alanları karşılaştır',
        detail:
          'Eşkenar üçgenin kenarı a olsun. P noktası A, B ve C ile birleştirilirse PAB, PAC ve PBC üçgenleri oluşur. P, [BC] doğrusunun A’ya göre öte tarafında olduğundan ABC üçgeni PAB ile PAC’nin birleşiminden PBC çıkarılarak elde edilir.',
      },
      {
        title: 'Uzaklıklar bağıntısı',
        detail:
          'Alan(ABC) = Alan(PAB) + Alan(PAC) − Alan(PBC) = a·13/2 + a·7/2 − a·2/2 = a · (13 + 7 − 2)/2 = a · 18/2’dir.',
      },
      {
        title: 'Yüksekliği yakala',
        detail:
          'Öte yandan Alan(ABC) = a · h/2 olduğundan h = 13 + 7 − 2 = 18 cm bulunur. Yani dıştaki bir nokta için, ayrı taraftaki kenara olan uzaklık diğer ikisinden çıkarılır.',
      },
      {
        title: 'Sonuç',
        detail:
          'Eşkenar üçgende h = a√3/2 olduğundan a√3/2 = 18, buradan a = 36/√3 = 12√3 cm’dir. |AB| = 12√3 cm.',
      },
    ],
  },

  // ---------------------------------------------------------------- 210
  {
    id: 'triangles-210',
    topic: 'İkizkenar üçgende dikme ve Pisagor',
    figure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 210',
      label:
        'Tabanı [BC] olan ikizkenar ABC üçgeninde H noktası [AB] üzerindedir ve [CH] ⊥ [AB] olacak biçimde C ile birleştirilmiştir; [AC] ışını C’nin ötesinde D noktasına kadar uzatılmış, B ile D birleştirilmiştir.',
      svg: `
          <path class="ln" d="M181.2,40 L87.3,227.8 L275.1,227.8 Z"/>
          <path class="ln" d="M275.1,227.8 L312.7,303"/>
          <path class="ln" d="M87.3,227.8 L312.7,303"/>
          <path class="ln" d="M124.9,152.7 L275.1,227.8"/>

          <path class="ln" d="M130.3,142 L141,147.4 L135.6,158.1"/>

          <circle class="pt" cx="181.2" cy="40" r="3.2"/>
          <circle class="pt" cx="87.3" cy="227.8" r="3.2"/>
          <circle class="pt" cx="275.1" cy="227.8" r="3.2"/>
          <circle class="pt" cx="312.7" cy="303" r="3.2"/>
          <circle class="pt" cx="124.9" cy="152.7" r="3.2"/>

          <text class="val" x="204" y="182" text-anchor="middle">8</text>

          <text x="181" y="30" text-anchor="middle">A</text>
          <text x="80" y="247" text-anchor="end">B</text>
          <text x="285" y="224">C</text>
          <text x="322" y="314">D</text>
          <text x="117" y="150" text-anchor="end">H</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 4 400 328',
      caption: 'Şekil 210 — D’den [AB] ye dikme indirildi',
      label:
        'Aynı şekilde D noktasından [AB] doğrusuna bir dikme indirilmiş, ayağı G ile adlandırılmıştır; [DG] ile [CH] paralel olduğundan AHC ve AGD üçgenleri benzerdir.',
      svg: `
          <path class="ln" d="M181.2,40 L87.3,227.8 L275.1,227.8 Z"/>
          <path class="ln" d="M275.1,227.8 L312.7,303"/>
          <path class="ln" d="M87.3,227.8 L312.7,303"/>
          <path class="ln" d="M124.9,152.7 L275.1,227.8"/>
          <path class="aux" d="M102.3,197.8 L312.7,303"/>

          <path class="ln" d="M130.3,142 L141,147.4 L135.6,158.1"/>
          <path class="aux-head" d="M113,203.2 L118.4,192.5 L107.7,187.1"/>

          <circle class="pt" cx="181.2" cy="40" r="3.2"/>
          <circle class="pt" cx="87.3" cy="227.8" r="3.2"/>
          <circle class="pt" cx="275.1" cy="227.8" r="3.2"/>
          <circle class="pt" cx="312.7" cy="303" r="3.2"/>
          <circle class="pt" cx="124.9" cy="152.7" r="3.2"/>
          <circle class="pt" cx="102.3" cy="197.8" r="3.2"/>

          <text class="val" x="204" y="182" text-anchor="middle">8</text>

          <text x="181" y="30" text-anchor="middle">A</text>
          <text x="80" y="247" text-anchor="end">B</text>
          <text x="285" y="224">C</text>
          <text x="322" y="314">D</text>
          <text x="117" y="150" text-anchor="end">H</text>
          <text x="95" y="201" text-anchor="end">G</text>
        `,
    },
    given: [
      'A, C, D doğrusal',
      '|AB| = |AC|',
      'H ∈ [AB] ve [CH] ⊥ [AB]',
      '|CH| = |BH| + |DC|',
      '|CH| = 8 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| kaç cm’dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '6√2' },
      { key: 'C', text: '8√2' },
      { key: 'D', text: '10√2' },
      { key: 'E', text: '16' },
    ],
    answer: 'C',
    hint: 'D noktasından da [AB] doğrusuna bir dikme indir; iki dikme paralel olduğu için A köşesinde bir benzerlik doğar.',
    solution: [
      {
        title: 'İkinci dikmeyi indir',
        detail:
          'D noktasından [AB] doğrusuna inen dikmenin ayağı G olsun. [CH] ⊥ [AB] ve [DG] ⊥ [AB] olduğundan [CH] // [DG]’dir. A köşesi ortak olduğundan AHC ile AGD üçgenleri benzerdir.',
      },
      {
        title: 'Benzerlikten uzunlukları yaz',
        detail:
          '|AB| = |AC| = b, |AH| = p, |BH| = m ve |DC| = n olsun. Benzerlik oranı |AD| / |AC| = (b + n)/b olduğundan |DG| = 8(b + n)/b ve |AG| = p(b + n)/b’dir.',
      },
      {
        title: 'Verilen koşulu sadeleştir',
        detail:
          '|CH| = |BH| + |DC| koşulu 8 = m + n demektir. Ayrıca p = b − m olduğundan m = b − p ve n = 8 − b + p, yani b + n = 8 + p bulunur. Böylece |DG| = 8(8 + p)/b ve |AG| = p(8 + p)/b olur.',
      },
      {
        title: 'BG parçasını bul',
        detail:
          'AHC dik üçgeninde p² + 8² = b², yani b² = p² + 64’tür. |BG| = | |AG| − |AB| | = | (p(8 + p) − b²)/b | = | (8p + p² − p² − 64)/b | = 8|p − 8| / b’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'BGD üçgeni G’de diktir: |BD|² = |BG|² + |DG|² = 64[(p − 8)² + (p + 8)²] / b² = 64(2p² + 128)/b² = 128(p² + 64)/b² = 128b²/b² = 128. Buradan |BD| = √128 = 8√2 cm’dir; sonuç üçgenin biçiminden bağımsızdır. (Şekildeki |BH| = 4, |AH| = 6, |AB| = 10 durumu da aynı değeri verir.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 211
  {
    id: 'triangles-211',
    topic: 'Eşkenar üçgenin uzantısındaki kenar',
    figure: {
      viewBox: '0 112 400 210',
      caption: 'Şekil 211',
      label:
        'B, D ve C aynı doğru üzerinde; A tepe noktası olan ABD üçgeni eşkenardır ve C, D’nin ötesindedir. [AB] kenarı 8, [AC] kenarı x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M123,137.58 L35,290 L365,290 Z"/>
          <path class="ln" d="M123,137.58 L211,290"/>

          <circle class="pt" cx="123" cy="137.58" r="3.2"/>
          <circle class="pt" cx="35" cy="290" r="3.2"/>
          <circle class="pt" cx="211" cy="290" r="3.2"/>
          <circle class="pt" cx="365" cy="290" r="3.2"/>

          <text class="val" x="67" y="214" text-anchor="end">8</text>
          <text class="val" x="256" y="208">x</text>

          <text x="123" y="128" text-anchor="middle">A</text>
          <text x="27" y="312" text-anchor="end">B</text>
          <text x="211" y="312" text-anchor="middle">D</text>
          <text x="373" y="312">C</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 112 400 210',
      caption: 'Şekil 211 — A’dan [BC] kenarına yükseklik indirildi',
      label:
        'Aynı şekle, A köşesinden [BC] doğrusuna inen dikme kesikli çizgiyle eklenmiştir; dikmenin ayağı H, [BD] kenarının orta noktasıdır ve |BH| = 4, |AH| = 4√3, |HC| = 11 olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M123,137.58 L35,290 L365,290 Z"/>
          <path class="ln" d="M123,137.58 L211,290"/>

          <path class="aux" d="M123,137.58 L123,290"/>
          <path class="aux" d="M111,290 L111,278 L123,278"/>

          <circle class="pt" cx="123" cy="137.58" r="3.2"/>
          <circle class="pt" cx="35" cy="290" r="3.2"/>
          <circle class="pt" cx="211" cy="290" r="3.2"/>
          <circle class="pt" cx="365" cy="290" r="3.2"/>
          <circle class="pt" cx="123" cy="290" r="3.2"/>

          <text class="val" x="67" y="214" text-anchor="end">8</text>
          <text class="val" x="256" y="208">x</text>
          <text class="val" x="133" y="210">4√3</text>
          <text class="val" x="79" y="284" text-anchor="middle">4</text>
          <text class="val" x="288" y="284" text-anchor="middle">11</text>

          <text x="123" y="128" text-anchor="middle">A</text>
          <text x="27" y="312" text-anchor="end">B</text>
          <text x="123" y="312" text-anchor="middle">H</text>
          <text x="211" y="312" text-anchor="middle">D</text>
          <text x="373" y="312">C</text>
        `,
    },
    given: ['ABD bir eşkenar üçgen', 'D ∈ [BC]', '|AB| = 8 cm', '|BC| = 15 cm', '|AC| = x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '11' },
      { key: 'B', text: '12' },
      { key: 'C', text: '13' },
      { key: 'D', text: '4√11' },
      { key: 'E', text: '14' },
    ],
    answer: 'C',
    hint: 'A köşesinden [BC] doğrusuna bir dikme indir; eşkenar üçgende bu dikme tabanı iki eşit parçaya ayırır.',
    solution: [
      {
        title: 'Eşkenar üçgeni oku',
        detail:
          'ABD eşkenar olduğundan |AB| = |BD| = |AD| = 8 cm’dir. D noktası [BC] üzerinde olduğu için |DC| = |BC| − |BD| = 15 − 8 = 7 cm bulunur.',
      },
      {
        title: 'Yüksekliği çiz',
        detail:
          'A köşesinden [BC] doğrusuna inen dikmenin ayağı H olsun. ABD eşkenar üçgeninde bu dikme aynı zamanda kenarortaydır, yani H noktası [BD] kenarını ortalar: |BH| = |HD| = 4 cm.',
      },
      {
        title: 'Yüksekliğin uzunluğu',
        detail:
          'ABH dik üçgeninde Pisagor bağıntısı: |AH|² = |AB|² − |BH|² = 8² − 4² = 64 − 16 = 48, yani |AH| = 4√3 cm’dir.',
      },
      {
        title: 'Taban parçasını yaz',
        detail: '|HC| = |HD| + |DC| = 4 + 7 = 11 cm’dir; AHC üçgeni de H’de diktir.',
      },
      {
        title: 'Sonuç',
        detail:
          'AHC dik üçgeninde x² = |AH|² + |HC|² = 48 + 121 = 169 olur; buradan x = 13 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 212
  {
    id: 'triangles-212',
    topic: 'Eşkenar üçgende paralel kesitin ayırdığı yamuk',
    figure: {
      viewBox: '0 28 400 306',
      caption: 'Şekil 212',
      label:
        'Eşkenar ABC üçgeninde D noktası [AB] kenarı, E noktası [BC] kenarı üzerindedir; [DE] ile [AC] paraleldir. |DE| 4, |EC| 2 ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,50.2 L50,310 L350,310 Z"/>
          <path class="ln" d="M150,136.8 L250,310"/>

          <path class="par" d="M191.3,220.3 L200,223.4 L201.7,214.3"/>
          <path class="par" d="M266.3,177 L275,180.1 L276.7,171"/>

          <circle class="pt" cx="200" cy="50.2" r="3.2"/>
          <circle class="pt" cx="50" cy="310" r="3.2"/>
          <circle class="pt" cx="350" cy="310" r="3.2"/>
          <circle class="pt" cx="150" cy="136.8" r="3.2"/>
          <circle class="pt" cx="250" cy="310" r="3.2"/>

          <text class="val" x="224" y="252">4</text>
          <text class="val" x="300" y="332" text-anchor="middle">2</text>

          <text x="200" y="42" text-anchor="middle">A</text>
          <text x="42" y="332" text-anchor="end">B</text>
          <text x="358" y="332">C</text>
          <text x="140" y="133" text-anchor="end">D</text>
          <text x="250" y="332" text-anchor="middle">E</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'D ∈ [AB], E ∈ [BC]',
      '[DE] // [AC]',
      '|DE| = 4 cm',
      '|EC| = 2 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ADEC dörtgeninin alanı kaç cm²’dir?',
    choices: [
      { key: 'A', text: '3√3' },
      { key: 'B', text: '4√3' },
      { key: 'C', text: '5√3' },
      { key: 'D', text: '6√3' },
      { key: 'E', text: '9√3' },
    ],
    answer: 'C',
    hint: 'Paralellik BDE üçgeninin açılarını ABC üçgeninkilerle aynı yapar; küçük üçgenin de eşkenar olduğunu fark et.',
    solution: [
      {
        title: 'Küçük üçgen de eşkenardır',
        detail:
          '[DE] // [AC] olduğundan yöndeş açılar eşittir: m(BDE) = m(BAC) = 60° ve m(BED) = m(BCA) = 60°. B açısı da 60° olduğuna göre BDE üçgeni eşkenardır.',
      },
      {
        title: 'Kenarı bul',
        detail:
          'BDE eşkenar olduğundan |BE| = |DE| = 4 cm’dir. E noktası [BC] üzerinde olduğundan |BC| = |BE| + |EC| = 4 + 2 = 6 cm, yani eşkenar ABC üçgeninin kenarı 6 cm’dir.',
      },
      {
        title: 'İki alanı yaz',
        detail:
          'Kenarı a olan eşkenar üçgenin alanı a²√3 / 4’tür. Alan(ABC) = 6²√3 / 4 = 9√3 cm², Alan(BDE) = 4²√3 / 4 = 4√3 cm² olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'ADEC dörtgeni, ABC üçgeninden BDE üçgeni çıkarılınca kalan parçadır: 9√3 − 4√3 = 5√3 cm².',
      },
    ],
  },

  // ---------------------------------------------------------------- 213
  {
    id: 'triangles-213',
    topic: 'İkizkenar üçgende tabana inen yükseklik',
    figure: {
      viewBox: '0 88 400 232',
      caption: 'Şekil 213',
      label:
        'B, C ve D aynı doğru üzerinde; A tepe noktasıyla birlikte ABD üçgeni çizilmiştir. [AC] ile [AD] kenarları eşit uzunlukta olduklarını gösteren birer çentikle işaretlenmiş ve 13 ile gösterilmiştir; |AB| 20, |CD| 10, |BC| ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M269,112 L45,280 L339,280 Z"/>
          <path class="ln" d="M269,112 L199,280"/>

          <line class="tick" x1="239.5" y1="198.3" x2="228.5" y2="193.7"/>
          <line class="tick" x1="298.5" y1="198.3" x2="309.5" y2="193.7"/>

          <circle class="pt" cx="269" cy="112" r="3.2"/>
          <circle class="pt" cx="45" cy="280" r="3.2"/>
          <circle class="pt" cx="199" cy="280" r="3.2"/>
          <circle class="pt" cx="339" cy="280" r="3.2"/>

          <text class="val" x="145" y="190" text-anchor="end">20</text>
          <text class="val" x="226" y="186" text-anchor="end">13</text>
          <text class="val" x="314" y="186">13</text>
          <text class="val" x="122" y="272" text-anchor="middle">x</text>
          <text class="val" x="269" y="272" text-anchor="middle">10</text>

          <text x="269" y="104" text-anchor="middle">A</text>
          <text x="37" y="302" text-anchor="end">B</text>
          <text x="199" y="302" text-anchor="middle">C</text>
          <text x="347" y="302">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 88 400 232',
      caption: 'Şekil 213 — A’dan [CD] kenarına yükseklik indirildi',
      label:
        'Aynı şekle, A köşesinden [CD] kenarına inen dikme kesikli çizgiyle eklenmiştir; dikmenin ayağı H, [CD] kenarının orta noktasıdır ve |CH| = |HD| = 5 olarak işaretlenmiştir.',
      svg: `
          <path class="ln" d="M269,112 L45,280 L339,280 Z"/>
          <path class="ln" d="M269,112 L199,280"/>

          <path class="aux" d="M269,112 L269,280"/>
          <path class="aux" d="M257,280 L257,268 L269,268"/>

          <line class="tick" x1="239.5" y1="198.3" x2="228.5" y2="193.7"/>
          <line class="tick" x1="298.5" y1="198.3" x2="309.5" y2="193.7"/>

          <circle class="pt" cx="269" cy="112" r="3.2"/>
          <circle class="pt" cx="45" cy="280" r="3.2"/>
          <circle class="pt" cx="199" cy="280" r="3.2"/>
          <circle class="pt" cx="339" cy="280" r="3.2"/>
          <circle class="pt" cx="269" cy="280" r="3.2"/>

          <text class="val" x="145" y="190" text-anchor="end">20</text>
          <text class="val" x="226" y="186" text-anchor="end">13</text>
          <text class="val" x="314" y="186">13</text>
          <text class="val" x="122" y="272" text-anchor="middle">x</text>
          <text class="val" x="234" y="272" text-anchor="middle">5</text>
          <text class="val" x="304" y="272" text-anchor="middle">5</text>

          <text x="269" y="104" text-anchor="middle">A</text>
          <text x="37" y="302" text-anchor="end">B</text>
          <text x="199" y="302" text-anchor="middle">C</text>
          <text x="269" y="302" text-anchor="middle">H</text>
          <text x="347" y="302">D</text>
        `,
    },
    given: [
      'ABD bir üçgen',
      'C ∈ [BD]',
      '|AC| = |AD| = 13 cm',
      '|AB| = 20 cm',
      '|CD| = 10 cm',
      '|BC| = x',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BC| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '10' },
      { key: 'D', text: '11' },
      { key: 'E', text: '12' },
    ],
    answer: 'D',
    hint: 'ACD üçgeni ikizkenardır; A’dan [CD]’ye inen dikme bu tabanı iki eşit parçaya böler ve iki dik üçgen doğurur.',
    solution: [
      {
        title: 'İkizkenar üçgeni kullan',
        detail:
          '|AC| = |AD| = 13 cm olduğundan ACD üçgeni ikizkenardır. A’dan [CD] kenarına inen dikmenin ayağı H olsun; ikizkenar üçgende bu dikme aynı zamanda kenarortaydır, yani |CH| = |HD| = 10 / 2 = 5 cm’dir.',
      },
      {
        title: 'Yüksekliği bul',
        detail:
          'ACH dik üçgeninde Pisagor bağıntısı: |AH|² = 13² − 5² = 169 − 25 = 144, yani |AH| = 12 cm’dir.',
      },
      {
        title: 'Büyük dik üçgene geç',
        detail:
          'H noktası [BD] doğrusu üzerinde olduğundan ABH üçgeni de H’de diktir: |BH|² = |AB|² − |AH|² = 20² − 12² = 400 − 144 = 256, yani |BH| = 16 cm.',
      },
      {
        title: 'Sonuç',
        detail: 'C noktası [BH] üzerindedir: x = |BC| = |BH| − |CH| = 16 − 5 = 11 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 214
  {
    id: 'triangles-214',
    topic: 'Eşkenar üçgeni kesen doğru',
    figure: {
      viewBox: '0 132 400 198',
      caption: 'Şekil 214',
      label:
        'Eşkenar ABC üçgeninde D noktası [CB] kenarının B tarafındaki uzantısında alınmış, D’den çizilen doğru [AB] kenarını E, [AC] kenarını F noktasında kesmiştir. |DB| 12, |BE| 6, |AF| ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M284,154.51 L200,300 L368,300 Z"/>
          <path class="ln" d="M32,300 L200,300"/>
          <path class="ln" d="M32,300 L312,203.01"/>

          <circle class="pt" cx="284" cy="154.51" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>
          <circle class="pt" cx="368" cy="300" r="3.2"/>
          <circle class="pt" cx="32" cy="300" r="3.2"/>
          <circle class="pt" cx="242" cy="227.25" r="3.2"/>
          <circle class="pt" cx="312" cy="203.01" r="3.2"/>

          <text class="val" x="116" y="290" text-anchor="middle">12</text>
          <text class="val" x="211" y="262" text-anchor="end">6</text>
          <text class="val" x="308" y="175">x</text>

          <text x="284" y="146" text-anchor="middle">A</text>
          <text x="200" y="322" text-anchor="middle">B</text>
          <text x="376" y="322">C</text>
          <text x="24" y="322" text-anchor="end">D</text>
          <text x="232" y="224" text-anchor="end">E</text>
          <text x="322" y="199">F</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 132 400 198',
      caption: 'Şekil 214 — B köşesinden [AC] kenarına paralel çizildi',
      label:
        'Aynı şekle, B köşesinden [AC] kenarına paralel olan ve [DF] doğrusunu G noktasında kesen kesikli çizgi eklenmiş; [BG] ile [AC] paralel işaretleriyle gösterilmiştir.',
      svg: `
          <path class="ln" d="M284,154.51 L200,300 L368,300 Z"/>
          <path class="ln" d="M32,300 L200,300"/>
          <path class="ln" d="M32,300 L312,203.01"/>

          <path class="aux" d="M200,300 L172,251.5"/>

          <path class="par" d="M317.3,224.2 L326,227.25 L327.7,218.2"/>
          <path class="par" d="M177.3,272.7 L186,275.75 L187.7,266.7"/>

          <circle class="pt" cx="284" cy="154.51" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>
          <circle class="pt" cx="368" cy="300" r="3.2"/>
          <circle class="pt" cx="32" cy="300" r="3.2"/>
          <circle class="pt" cx="242" cy="227.25" r="3.2"/>
          <circle class="pt" cx="312" cy="203.01" r="3.2"/>
          <circle class="pt" cx="172" cy="251.5" r="3.2"/>

          <text class="val" x="116" y="290" text-anchor="middle">12</text>
          <text class="val" x="211" y="262" text-anchor="end">6</text>
          <text class="val" x="308" y="175">x</text>

          <text x="284" y="146" text-anchor="middle">A</text>
          <text x="200" y="322" text-anchor="middle">B</text>
          <text x="376" y="322">C</text>
          <text x="24" y="322" text-anchor="end">D</text>
          <text x="232" y="224" text-anchor="end">E</text>
          <text x="322" y="199">F</text>
          <text x="162" y="248" text-anchor="end">G</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'B ∈ [DC], E ∈ [AB], F ∈ [AC]',
      'D, E ve F doğrusaldır',
      '|DB| = 12 cm, |BE| = 6 cm',
      'Alan(ABC) = 36√3 cm²',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AF| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3' },
      { key: 'B', text: '7/2' },
      { key: 'C', text: '4' },
      { key: 'D', text: '9/2' },
      { key: 'E', text: '5' },
    ],
    answer: 'C',
    hint: 'Önce alandan kenarı bul; sonra B köşesinden [AC]’ye bir paralel çizerek kesen doğru üzerinde iki benzerlik yakala.',
    solution: [
      {
        title: 'Kenarı alandan bul',
        detail:
          'Kenarı a olan eşkenar üçgenin alanı a²√3 / 4’tür. a²√3 / 4 = 36√3 eşitliğinden a² = 144, yani a = 12 cm bulunur. Böylece |AB| = |BC| = |AC| = 12 cm’dir.',
      },
      {
        title: 'E orta noktadır',
        detail:
          '|BE| = 6 cm ve |AB| = 12 cm olduğundan |AE| = 12 − 6 = 6 cm’dir; yani E noktası [AB] kenarının orta noktasıdır.',
      },
      {
        title: 'Paraleli çiz',
        detail:
          'B köşesinden [AC] kenarına paralel çizilen doğru, [DF] doğrusunu G noktasında kessin. [BG] // [CF] olduğundan DBG ile DCF üçgenleri benzerdir ve |BG| / |CF| = |DB| / |DC| = 12 / (12 + 12) = 1/2 olur.',
      },
      {
        title: 'İkinci benzerlik',
        detail:
          '[BG] // [AF] olduğundan E köşesindeki ters açılar ve iç ters açılar eşittir: EBG ile EAF üçgenleri benzerdir. |EB| = |EA| olduğundan benzerlik oranı 1’dir ve |BG| = |AF| = x bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Önceki iki adım birleşince |CF| = 2x olur. F noktası [AC] üzerinde olduğundan x + 2x = 12, yani 3x = 12 ve x = 4 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 215
  {
    id: 'triangles-215',
    topic: 'Eşkenar üçgende kenara inen dikme',
    figure: {
      viewBox: '0 28 400 300',
      caption: 'Şekil 215',
      label:
        'Eşkenar ABC üçgeninde D noktası [BC] kenarı üzerindedir ve D’den [AC] kenarına inen dikmenin ayağı H’dir. |BD| 6, |AH| 11, |AD| ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,52 L56,301.4 L344,301.4 Z"/>
          <path class="ln" d="M200,52 L164,301.4"/>
          <path class="ln" d="M164,301.4 L299,223.48"/>

          <path class="ln" d="M289.47,228.98 L283.97,219.45 L293.5,213.95"/>

          <circle class="pt" cx="200" cy="52" r="3.2"/>
          <circle class="pt" cx="56" cy="301.4" r="3.2"/>
          <circle class="pt" cx="344" cy="301.4" r="3.2"/>
          <circle class="pt" cx="164" cy="301.4" r="3.2"/>
          <circle class="pt" cx="299" cy="223.48" r="3.2"/>

          <text class="val" x="258" y="140">11</text>
          <text class="val" x="110" y="324" text-anchor="middle">6</text>
          <text class="val" x="172" y="174" text-anchor="end">x</text>

          <text x="200" y="44" text-anchor="middle">A</text>
          <text x="48" y="324" text-anchor="end">B</text>
          <text x="164" y="324" text-anchor="middle">D</text>
          <text x="352" y="324">C</text>
          <text x="309" y="220">H</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'D ∈ [BC], H ∈ [AC]',
      '[DH] ⊥ [AC]',
      '|AH| = 11 cm',
      '|BD| = 6 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '13' },
      { key: 'C', text: '14' },
      { key: 'D', text: '4√13' },
      { key: 'E', text: '15' },
    ],
    answer: 'C',
    hint: 'DHC üçgeni 30°-60°-90° üçgenidir; |HC| ile |DC| arasındaki oranı yazıp kenarı bulmaya çalış.',
    solution: [
      {
        title: '30°-60°-90° üçgenini kur',
        detail:
          'Eşkenar üçgende m(C) = 60°’dir. DHC üçgeni H’de dik olduğundan m(HDC) = 30°’dir ve 30°’nin karşısındaki kenar hipotenüsün yarısıdır: |HC| = |DC| / 2.',
      },
      {
        title: 'Kenarı iki kez yaz',
        detail:
          'Eşkenar üçgenin kenarı a olsun. Bir yandan a = |AC| = |AH| + |HC| = 11 + |DC| / 2, öte yandan a = |BC| = |BD| + |DC| = 6 + |DC|’dir.',
      },
      {
        title: 'Denklemi çöz',
        detail:
          'İki ifadeyi eşitleyelim: 11 + |DC| / 2 = 6 + |DC|. Buradan 5 = |DC| / 2, yani |DC| = 10 cm ve a = 6 + 10 = 16 cm bulunur.',
      },
      {
        title: 'Dikmenin uzunluğu',
        detail:
          'DHC dik üçgeninde |HC| = 10 / 2 = 5 cm’dir; Pisagor bağıntısıyla |DH|² = 10² − 5² = 75 olur. (|AH| = 16 − 5 = 11 cm verilenle uyuşur.)',
      },
      {
        title: 'Sonuç',
        detail:
          'AHD üçgeni H’de diktir: x² = |AH|² + |DH|² = 11² + 75 = 121 + 75 = 196 ve x = 14 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 216
  {
    id: 'triangles-216',
    topic: 'İkizkenar üçgende yükseklikler',
    figure: {
      viewBox: '0 66 400 250',
      caption: 'Şekil 216',
      label:
        'İkizkenar ABC üçgeninde A köşesinden [BC] tabanına inen dikmenin ayağı H, H’den [AC] kenarına inen dikmenin ayağı K’dir. |HK| uzunluğu x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,90 L50,290 L350,290 Z"/>
          <path class="ln" d="M200,90 L200,290"/>
          <path class="ln" d="M200,290 L296,218"/>

          <path class="ln" d="M188,290 L188,278 L200,278"/>
          <path class="ln" d="M287.2,224.6 L280.6,215.8 L289.4,209.2"/>

          <circle class="pt" cx="200" cy="90" r="3.2"/>
          <circle class="pt" cx="50" cy="290" r="3.2"/>
          <circle class="pt" cx="350" cy="290" r="3.2"/>
          <circle class="pt" cx="200" cy="290" r="3.2"/>
          <circle class="pt" cx="296" cy="218" r="3.2"/>

          <text class="val" x="257" y="269">x</text>

          <text x="200" y="82" text-anchor="middle">A</text>
          <text x="42" y="312" text-anchor="end">B</text>
          <text x="358" y="312">C</text>
          <text x="200" y="312" text-anchor="middle">H</text>
          <text x="306" y="214">K</text>
        `,
    },
    given: [
      'ABC bir ikizkenar üçgen',
      '|AB| = |AC| = 10 cm',
      '|BC| = 12 cm',
      'H ∈ [BC], K ∈ [AC]',
      '[AH] ⊥ [BC], [HK] ⊥ [AC]',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |HK| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '24/5' },
      { key: 'C', text: '5' },
      { key: 'D', text: '26/5' },
      { key: 'E', text: '6' },
    ],
    answer: 'B',
    hint: 'Önce AHC dik üçgeninin dik kenarlarını bul; [HK] bu üçgende hipotenüse ait yüksekliktir.',
    solution: [
      {
        title: 'Yükseklik tabanı ortalar',
        detail:
          'ABC ikizkenar ve |AB| = |AC| olduğundan A’dan tabana inen [AH] yüksekliği aynı zamanda kenarortaydır: |BH| = |HC| = 12 / 2 = 6 cm.',
      },
      {
        title: 'Yüksekliği bul',
        detail:
          'AHC üçgeni H’de diktir: |AH|² = |AC|² − |HC|² = 10² − 6² = 100 − 36 = 64, yani |AH| = 8 cm’dir.',
      },
      {
        title: 'Alanı iki kez yaz',
        detail:
          'AHC dik üçgeninin alanı, dik kenarlarla |AH| · |HC| / 2 = 8 · 6 / 2 = 24 cm²’dir. Aynı alan, hipotenüs [AC] ve ona ait yükseklik [HK] ile |AC| · |HK| / 2 = 10x / 2 = 5x biçiminde de yazılır.',
      },
      {
        title: 'Sonuç',
        detail: '5x = 24 denkleminden x = 24/5 = 4,8 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 217
  {
    id: 'triangles-217',
    topic: 'İkizkenar üçgende kenara inen dikme',
    figure: {
      viewBox: '0 -4 400 356',
      caption: 'Şekil 217',
      label:
        'Taban açıları 75° olan ikizkenar ABC üçgeninde C köşesinden [AB] kenarına inen dikmenin ayağı D’dir. B köşesindeki açı 75°, |BD| ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200.4,20 L120,320 L280.8,320 Z"/>
          <path class="ln" d="M130.78,279.81 L280.8,320"/>

          <path class="ln" d="M133.89,268.22 L145.48,271.33 L142.37,282.92"/>
          <path class="arc" d="M146,320 A26,26 0 0,0 126.73,294.89"/>

          <circle class="pt" cx="200.4" cy="20" r="3.2"/>
          <circle class="pt" cx="120" cy="320" r="3.2"/>
          <circle class="pt" cx="280.8" cy="320" r="3.2"/>
          <circle class="pt" cx="130.78" cy="279.81" r="3.2"/>

          <text class="val" x="158" y="308" text-anchor="middle">75°</text>
          <text class="val" x="116" y="302" text-anchor="end">x</text>

          <text x="200.4" y="12" text-anchor="middle">A</text>
          <text x="112" y="344" text-anchor="end">B</text>
          <text x="289" y="344">C</text>
          <text x="122" y="277" text-anchor="end">D</text>
        `,
    },
    given: [
      'ABC bir ikizkenar üçgen',
      '|AB| = |AC| = 6 cm',
      'm(ABC) = 75°',
      'D ∈ [AB]',
      '[CD] ⊥ [AB]',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |BD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3 − √3' },
      { key: 'B', text: '6 − 3√3' },
      { key: 'C', text: '3√3 − 3' },
      { key: 'D', text: '2√3 − 3' },
      { key: 'E', text: '3' },
    ],
    answer: 'B',
    hint: 'Önce tepe açısını bul; ADC üçgeni bir 30°-60°-90° üçgenine dönüşür.',
    solution: [
      {
        title: 'Tepe açısını bul',
        detail:
          '|AB| = |AC| olduğundan taban açıları eşittir: m(ABC) = m(ACB) = 75°. Üçgenin iç açıları toplamından m(BAC) = 180° − 75° − 75° = 30° bulunur.',
      },
      {
        title: '30°-60°-90° üçgeni',
        detail:
          'ADC üçgeninde m(ADC) = 90° ve m(DAC) = 30°’dir. 30°’nin karşısındaki dik kenar hipotenüsün yarısı olduğundan |CD| = |AC| / 2 = 3 cm’dir.',
      },
      {
        title: 'Diğer dik kenar',
        detail:
          '60°’nin karşısındaki dik kenar hipotenüsün √3/2 katıdır: |AD| = 6 · √3/2 = 3√3 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'D noktası [AB] üzerinde olduğundan x = |AB| − |AD| = 6 − 3√3 cm bulunur (yaklaşık 0,8 cm).',
      },
    ],
  },

  // ---------------------------------------------------------------- 218
  {
    id: 'triangles-218',
    topic: 'Eşkenar üçgende kenar uzantısı',
    figure: {
      viewBox: '0 152 400 186',
      caption: 'Şekil 218',
      label:
        'Eşkenar ABC üçgeninde [CB] kenarının B tarafındaki uzantısında |DB| = |BC| olacak biçimde D noktası alınmış, C köşesinden [AB] kenarına inen dikmenin ayağı E ile gösterilmiştir. |CE| 9, |AD| ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M250,178.76 L180,300 L320,300 Z"/>
          <path class="ln" d="M40,300 L180,300"/>
          <path class="ln" d="M320,300 L215,239.38"/>
          <path class="ln" d="M250,178.76 L40,300"/>

          <path class="ln" d="M225.4,245.4 L219.4,255.8 L209,249.8"/>

          <path class="tick" d="M110,294 L110,306"/>
          <path class="tick" d="M270,294 L270,306"/>

          <circle class="pt" cx="250" cy="178.76" r="3.2"/>
          <circle class="pt" cx="180" cy="300" r="3.2"/>
          <circle class="pt" cx="320" cy="300" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="215" cy="239.38" r="3.2"/>

          <text class="val" x="277" y="272">9</text>
          <text class="val" x="137" y="226" text-anchor="middle">x</text>

          <text x="250" y="170" text-anchor="middle">A</text>
          <text x="32" y="324" text-anchor="end">D</text>
          <text x="180" y="324" text-anchor="middle">B</text>
          <text x="328" y="324">C</text>
          <text x="206" y="236" text-anchor="end">E</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 152 400 186',
      caption: 'Şekil 218 — A’dan [DC] doğrusuna yükseklik indirildi',
      label:
        'Aynı şekle, A köşesinden [DC] doğrusuna indirilen ve ayağı [BC] kenarının orta noktası H olan kesikli yükseklik eklenmiştir.',
      svg: `
          <path class="ln" d="M250,178.76 L180,300 L320,300 Z"/>
          <path class="ln" d="M40,300 L180,300"/>
          <path class="ln" d="M320,300 L215,239.38"/>
          <path class="ln" d="M250,178.76 L40,300"/>

          <path class="ln" d="M225.4,245.4 L219.4,255.8 L209,249.8"/>

          <path class="aux" d="M250,178.76 L250,300"/>
          <path class="aux-head" d="M238,300 L238,288 L250,288"/>

          <path class="tick" d="M110,294 L110,306"/>
          <path class="tick" d="M270,294 L270,306"/>

          <circle class="pt" cx="250" cy="178.76" r="3.2"/>
          <circle class="pt" cx="180" cy="300" r="3.2"/>
          <circle class="pt" cx="320" cy="300" r="3.2"/>
          <circle class="pt" cx="40" cy="300" r="3.2"/>
          <circle class="pt" cx="215" cy="239.38" r="3.2"/>
          <circle class="pt" cx="250" cy="300" r="3.2"/>

          <text class="val" x="277" y="272">9</text>
          <text class="val" x="137" y="226" text-anchor="middle">x</text>

          <text x="250" y="170" text-anchor="middle">A</text>
          <text x="32" y="324" text-anchor="end">D</text>
          <text x="180" y="324" text-anchor="middle">B</text>
          <text x="328" y="324">C</text>
          <text x="206" y="236" text-anchor="end">E</text>
          <text x="252" y="324">H</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'B ∈ [DC] ve |DB| = |BC|',
      'E ∈ [AB]',
      '[CE] ⊥ [AB]',
      '|CE| = 9 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '12' },
      { key: 'B', text: '9√3' },
      { key: 'C', text: '15' },
      { key: 'D', text: '18' },
      { key: 'E', text: '12√3' },
    ],
    answer: 'D',
    hint: '[CE] eşkenar üçgenin yüksekliğidir; önce kenarı bul, sonra A’dan taban doğrusuna bir dikme indir.',
    solution: [
      {
        title: 'Kenarı bul',
        detail:
          'Eşkenar üçgende bir kenara indirilen dikme aynı zamanda yüksekliktir ve kenarı a olan eşkenar üçgenin yüksekliği a√3 / 2’dir. a√3 / 2 = 9 eşitliğinden a = 18 / √3 = 6√3 cm bulunur.',
      },
      {
        title: 'A’dan taban doğrusuna dikme indir',
        detail:
          'A köşesinden [DC] doğrusuna indirilen dikmenin ayağı H olsun. Eşkenar üçgende bu dikme [BC] kenarını ortalar: |BH| = |HC| = a / 2 = 3√3 cm ve |AH| = a√3 / 2 = 9 cm’dir.',
      },
      {
        title: 'Dik üçgenin dik kenarları',
        detail:
          'D, B ve H aynı doğru üzerindedir: |DH| = |DB| + |BH| = 6√3 + 3√3 = 9√3 cm. AHD üçgeni H’de diktir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Pisagor bağıntısıyla x² = |AH|² + |DH|² = 9² + (9√3)² = 81 + 243 = 324, yani x = 18 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 219
  {
    id: 'triangles-219',
    topic: 'Eşkenar üçgende ardışık dik açılar',
    figure: {
      viewBox: '0 68 400 268',
      caption: 'Şekil 219',
      label:
        'Eşkenar ABC üçgeninin dışında, A köşesinde ve D köşesinde dik açı oluşturan D noktası alınmıştır. D’den [BC] doğrusuna indirilen dikmenin ayağı, C’nin ötesindeki E noktasıdır. |AB| 12, |DE| ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M170,92.15 L50,300 L290,300 Z"/>
          <path class="ln" d="M170,92.15 L350,196.08"/>
          <path class="ln" d="M350,196.08 L290,300"/>
          <path class="ln" d="M350,196.08 L350,300"/>
          <path class="ln" d="M290,300 L350,300"/>

          <path class="ln" d="M164,102.55 L174.4,108.55 L180.4,98.15"/>
          <path class="ln" d="M339.6,190.08 L333.6,200.47 L344,206.48"/>
          <path class="ln" d="M350,288 L338,288 L338,300"/>

          <circle class="pt" cx="170" cy="92.15" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="290" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="196.08" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>

          <text class="val" x="102" y="198" text-anchor="end">12</text>
          <text class="val" x="358" y="252">x</text>

          <text x="170" y="84" text-anchor="middle">A</text>
          <text x="42" y="324" text-anchor="end">B</text>
          <text x="290" y="324" text-anchor="middle">C</text>
          <text x="350" y="324" text-anchor="middle">E</text>
          <text x="360" y="192">D</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      '|AB| = 12 cm',
      'B, C ve E doğrusaldır',
      '[AB] ⊥ [AD] ve [AD] ⊥ [DC]',
      '[DE] ⊥ [BE]',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DE| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '3√3' },
      { key: 'B', text: '6' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4√3' },
      { key: 'E', text: '2√3' },
    ],
    answer: 'A',
    hint: 'A köşesindeki 90°’den m(DAC)’yi çıkar; ADC bir 30°-60°-90° üçgenidir.',
    solution: [
      {
        title: 'DAC açısını bul',
        detail:
          'Eşkenar üçgende m(BAC) = 60°’dir. [AB] ⊥ [AD] olduğundan m(BAD) = 90° ve m(DAC) = 90° − 60° = 30° bulunur.',
      },
      {
        title: 'ADC üçgenini çöz',
        detail:
          'ADC üçgeninde m(ADC) = 90° ve m(DAC) = 30°’dir. 30°’nin karşısındaki dik kenar hipotenüsün yarısıdır: |DC| = |AC| / 2 = 12 / 2 = 6 cm. Ayrıca m(ACD) = 60°’dir.',
      },
      {
        title: 'DCE açısını bul',
        detail:
          'B, C ve E doğrusal olduğundan C noktasındaki doğru açı 180°’dir: m(DCE) = 180° − m(ACB) − m(ACD) = 180° − 60° − 60° = 60°.',
      },
      {
        title: 'Sonuç',
        detail:
          'DEC üçgeninde m(DEC) = 90° ve m(DCE) = 60°’dir. 60°’nin karşısındaki dik kenar hipotenüsün √3/2 katı olduğundan x = |DC| · √3/2 = 6 · √3/2 = 3√3 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 220
  {
    id: 'triangles-220',
    topic: 'Eşkenar üçgende iç noktadan paraleller',
    figure: {
      viewBox: '0 26 400 316',
      caption: 'Şekil 220',
      label:
        'Eşkenar ABC üçgeninin içindeki K noktasından [BC] kenarına paralel olan ve [AB] kenarını M, [AC] kenarını P noktasında kesen doğru ile [AB] kenarına paralel olan ve [BC] kenarını N noktasında kesen doğru çizilmiştir. |MK| 5, |KP| 4, |KN| 3 olarak verilmiştir.',
      svg: `
          <path class="ln" d="M200,50.19 L50,310 L350,310 Z"/>
          <path class="ln" d="M87.5,245.05 L312.5,245.05"/>
          <path class="ln" d="M212.5,245.05 L175,310"/>

          <circle class="pt" cx="200" cy="50.19" r="3.2"/>
          <circle class="pt" cx="50" cy="310" r="3.2"/>
          <circle class="pt" cx="350" cy="310" r="3.2"/>
          <circle class="pt" cx="87.5" cy="245.05" r="3.2"/>
          <circle class="pt" cx="212.5" cy="245.05" r="3.2"/>
          <circle class="pt" cx="312.5" cy="245.05" r="3.2"/>
          <circle class="pt" cx="175" cy="310" r="3.2"/>

          <text class="val" x="150" y="238" text-anchor="middle">5</text>
          <text class="val" x="262" y="238" text-anchor="middle">4</text>
          <text class="val" x="202" y="282">3</text>

          <text x="200" y="42" text-anchor="middle">A</text>
          <text x="42" y="334" text-anchor="end">B</text>
          <text x="358" y="334">C</text>
          <text x="79" y="242" text-anchor="end">M</text>
          <text x="222" y="260">K</text>
          <text x="322" y="242">P</text>
          <text x="175" y="334" text-anchor="middle">N</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'K noktası üçgenin içindedir',
      '[MP] // [BC], M ∈ [AB], P ∈ [AC]',
      '[KN] // [AB], N ∈ [BC]',
      '|MK| = 5 cm, |KP| = 4 cm, |KN| = 3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABC üçgeninin çevresi kaç cm’dir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '27' },
      { key: 'C', text: '30' },
      { key: 'D', text: '33' },
      { key: 'E', text: '36' },
    ],
    answer: 'E',
    hint: '[MP] // [BC] olduğundan AMP üçgeni de eşkenardır; geri kalan parça için MBNK dörtgenine bak.',
    solution: [
      {
        title: 'Üstteki eşkenar üçgen',
        detail:
          '[MP] // [BC] olduğundan m(AMP) = m(ABC) = 60° ve m(APM) = m(ACB) = 60°’dir; yani AMP üçgeni de eşkenardır.',
      },
      {
        title: '|AM| uzunluğu',
        detail:
          'M, K ve P aynı doğru üzerinde olduğundan |MP| = |MK| + |KP| = 5 + 4 = 9 cm’dir. AMP eşkenar olduğundan |AM| = |MP| = 9 cm bulunur.',
      },
      {
        title: 'Paralelkenarı yakala',
        detail:
          '[MK] // [BN] ve [KN] // [MB] olduğundan MBNK bir paralelkenardır. Karşılıklı kenarlar eşit olduğundan |MB| = |KN| = 3 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenar uzunluğu a = |AM| + |MB| = 9 + 3 = 12 cm’dir. Eşkenar üçgenin çevresi 3a = 3 · 12 = 36 cm bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 221
  {
    id: 'triangles-221',
    topic: 'Eşkenar üçgende iki dikme ve alan',
    figure: {
      viewBox: '0 16 400 316',
      caption: 'Şekil 221',
      label:
        'Eşkenar ABC üçgeninde E noktası [BC] kenarı üzerindedir. E’den çizilen ve [BC] kenarına dik olan doğru [AC] kenarını F noktasında keser; E’den [AB] kenarına inen dikmenin ayağı D’dir. |EF| 2 kök 3, |DE| 5 kök 3 olarak verilmiştir.',
      svg: `
          <path class="ln" d="M200,40.19 L50,300 L350,300 Z"/>
          <path class="ln" d="M300,300 L300,213.4"/>
          <path class="ln" d="M300,300 L112.5,191.75"/>

          <path class="ln" d="M300,288 L312,288 L312,300"/>
          <path class="ln" d="M122.9,197.75 L128.9,187.36 L118.5,181.36"/>

          <circle class="pt" cx="200" cy="40.19" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="300" r="3.2"/>
          <circle class="pt" cx="300" cy="213.4" r="3.2"/>
          <circle class="pt" cx="112.5" cy="191.75" r="3.2"/>

          <text class="val" x="292" y="262" text-anchor="end">2√3</text>
          <text class="val" x="216" y="234" text-anchor="middle">5√3</text>

          <text x="200" y="32" text-anchor="middle">A</text>
          <text x="42" y="324" text-anchor="end">B</text>
          <text x="358" y="324">C</text>
          <text x="103" y="188" text-anchor="end">D</text>
          <text x="300" y="324" text-anchor="middle">E</text>
          <text x="310" y="210">F</text>
        `,
    },
    given: [
      'ABC bir eşkenar üçgen',
      'D ∈ [AB], E ∈ [BC], F ∈ [AC]',
      '[FE] ⊥ [BC]',
      '[ED] ⊥ [AB]',
      '|EF| = 2√3 cm, |DE| = 5√3 cm',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, ABC eşkenar üçgeninin alanı kaç cm²’dir?',
    choices: [
      { key: 'A', text: '18√3' },
      { key: 'B', text: '24√3' },
      { key: 'C', text: '36√3' },
      { key: 'D', text: '48√3' },
      { key: 'E', text: '72√3' },
    ],
    answer: 'C',
    hint: 'İki dikme de 30°-60°-90° üçgeni doğurur; her birinden [BC] üzerindeki bir parçayı bul.',
    solution: [
      {
        title: 'Sağdaki dik üçgen',
        detail:
          'FEC üçgeninde m(FEC) = 90° ve m(FCE) = m(ACB) = 60°’dir; buna göre m(EFC) = 30°’dir. 30°’nin karşısındaki dik kenar |EC|, 60°’nin karşısındaki |EF| ile |EF| = |EC| · √3 bağıntısını sağlar: 2√3 = |EC| · √3, yani |EC| = 2 cm.',
      },
      {
        title: 'Soldaki dik üçgen',
        detail:
          'BDE üçgeninde m(BDE) = 90° ve m(DBE) = m(ABC) = 60°’dir; buna göre m(BED) = 30°’dir. Burada |DE|, 60°’nin karşısındaki dik kenardır ve hipotenüs [BE]’dir: |DE| = |BE| · √3/2. 5√3 = |BE| · √3/2 eşitliğinden |BE| = 10 cm bulunur.',
      },
      {
        title: 'Kenarı topla',
        detail: 'E noktası [BC] üzerinde olduğundan a = |BC| = |BE| + |EC| = 10 + 2 = 12 cm’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'Kenarı a olan eşkenar üçgenin alanı a²√3 / 4’tür: 12² · √3 / 4 = 144√3 / 4 = 36√3 cm² bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 222
  {
    id: 'triangles-222',
    topic: 'İkizkenar üçgende hipotenüse ait yükseklik',
    figure: {
      viewBox: '0 98 400 226',
      caption: 'Şekil 222',
      label:
        'İkizkenar ABC üçgeninde E noktası [BC] tabanının orta noktasıdır ve eşit parçalar çentiklerle gösterilmiştir. Üçgenin dışındaki D noktası için [AD] ile [DB] diktir; [DE] doğru parçası [AB] kenarını H noktasında dik keser. |AC| 15, |DE| ise x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M191.28,122 L65.28,290 L317.28,290 Z"/>
          <path class="ln" d="M191.28,122 L30,169.04"/>
          <path class="ln" d="M30,169.04 L191.28,290"/>
          <path class="ln" d="M191.28,122 L191.28,290"/>

          <path class="ln" d="M41.52,165.68 L44.88,177.2 L33.36,180.56"/>
          <path class="ln" d="M101.04,222.32 L108.24,212.72 L117.84,219.92"/>

          <path class="tick" d="M128.28,284 L128.28,296"/>
          <path class="tick" d="M254.28,284 L254.28,296"/>

          <circle class="pt" cx="191.28" cy="122" r="3.2"/>
          <circle class="pt" cx="65.28" cy="290" r="3.2"/>
          <circle class="pt" cx="317.28" cy="290" r="3.2"/>
          <circle class="pt" cx="191.28" cy="290" r="3.2"/>
          <circle class="pt" cx="30" cy="169.04" r="3.2"/>
          <circle class="pt" cx="110.64" cy="229.52" r="3.2"/>

          <text class="val" x="262" y="210">15</text>
          <text class="val" x="160" y="250" text-anchor="middle">x</text>

          <text x="191.28" y="114" text-anchor="middle">A</text>
          <text x="57" y="314" text-anchor="end">B</text>
          <text x="325" y="314">C</text>
          <text x="191.28" y="314" text-anchor="middle">E</text>
          <text x="22" y="166" text-anchor="end">D</text>
          <text x="100" y="240" text-anchor="end">H</text>
        `,
    },
    given: [
      'ABC bir ikizkenar üçgen',
      '|AB| = |AC| = 15 cm, |BC| = 18 cm',
      '|BE| = |EC|, H ∈ [AB]',
      '[AD] ⊥ [DB]',
      'D, H ve E doğrusaldır ve [DE] ⊥ [AB]',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |DE| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '14,4' },
      { key: 'B', text: '13,5' },
      { key: 'C', text: '12,8' },
      { key: 'D', text: '11,25' },
      { key: 'E', text: '9,6' },
    ],
    answer: 'A',
    hint: 'x’i H noktasında ikiye ayır: bir parçası BHE dik üçgeninden, diğeri ADB dik üçgeninin hipotenüse ait yüksekliğinden çıkar.',
    solution: [
      {
        title: 'Tabanın orta noktası',
        detail:
          '|AB| = |AC| ve |BE| = |EC| olduğundan [AE] hem kenarortay hem yüksekliktir: [AE] ⊥ [BC] ve |BE| = 18 / 2 = 9 cm’dir. ABE dik üçgeninde |AE|² = 15² − 9² = 225 − 81 = 144, yani |AE| = 12 cm bulunur.',
      },
      {
        title: '|EH| ve |BH|',
        detail:
          'BHE ile BEA üçgenlerinin B açısı ortaktır ve ikisi de diktir, dolayısıyla benzerdirler: |EH| / |AE| = |BH| / |BE| = |BE| / |BA|. Buradan |EH| = 9 · 12 / 15 = 7,2 cm ve |BH| = 9 · 9 / 15 = 5,4 cm’dir.',
      },
      {
        title: 'Hipotenüse ait yükseklik',
        detail:
          'ADB üçgeni D’de diktir ve [DH] hipotenüs [AB]’ye ait yüksekliktir. |AH| = |AB| − |BH| = 15 − 5,4 = 9,6 cm olduğundan |DH|² = |AH| · |HB| = 9,6 · 5,4 = 51,84 ve |DH| = 7,2 cm bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'H noktası [DE] üzerinde olduğundan x = |DH| + |HE| = 7,2 + 7,2 = 14,4 cm’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 223
  {
    id: 'triangles-223',
    topic: 'Eşkenar üçgende tabanı bölen nokta',
    figure: {
      viewBox: '0 16 400 316',
      caption: 'Şekil 223',
      label:
        'Eşkenar ABC üçgeninde D noktası [BC] kenarı üzerindedir ve tabanı 4 birimlik [BD] ile 2 birimlik [DC] parçalarına ayırır. |AD| x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M200,40.19 L50,300 L350,300 Z"/>
          <path class="ln" d="M200,40.19 L250,300"/>

          <circle class="pt" cx="200" cy="40.19" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="250" cy="300" r="3.2"/>

          <text class="val" x="150" y="292" text-anchor="middle">4</text>
          <text class="val" x="300" y="292" text-anchor="middle">2</text>
          <text class="val" x="234" y="174">x</text>

          <text x="200" y="32" text-anchor="middle">A</text>
          <text x="42" y="324" text-anchor="end">B</text>
          <text x="358" y="324">C</text>
          <text x="250" y="324" text-anchor="middle">D</text>
        `,
    },
    solutionFigure: {
      viewBox: '0 16 400 316',
      caption: 'Şekil 223 — A’dan [BC] kenarına yükseklik indirildi',
      label:
        'Aynı şekle, A köşesinden [BC] kenarına indirilen ve ayağı tabanın orta noktası H olan kesikli yükseklik eklenmiştir.',
      svg: `
          <path class="ln" d="M200,40.19 L50,300 L350,300 Z"/>
          <path class="ln" d="M200,40.19 L250,300"/>

          <path class="aux" d="M200,40.19 L200,300"/>
          <path class="aux-head" d="M188,300 L188,288 L200,288"/>

          <circle class="pt" cx="200" cy="40.19" r="3.2"/>
          <circle class="pt" cx="50" cy="300" r="3.2"/>
          <circle class="pt" cx="350" cy="300" r="3.2"/>
          <circle class="pt" cx="250" cy="300" r="3.2"/>
          <circle class="pt" cx="200" cy="300" r="3.2"/>

          <text class="val" x="150" y="292" text-anchor="middle">4</text>
          <text class="val" x="300" y="292" text-anchor="middle">2</text>
          <text class="val" x="234" y="174">x</text>

          <text x="200" y="32" text-anchor="middle">A</text>
          <text x="42" y="324" text-anchor="end">B</text>
          <text x="358" y="324">C</text>
          <text x="250" y="324" text-anchor="middle">D</text>
          <text x="196" y="324" text-anchor="end">H</text>
        `,
    },
    given: ['ABC bir eşkenar üçgen', '|AB| = 6 cm', 'D ∈ [BC]', '|BD| = 2 · |DC|'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, |AD| = x kaç cm’dir?',
    choices: [
      { key: 'A', text: '2√5' },
      { key: 'B', text: '2√6' },
      { key: 'C', text: '2√7' },
      { key: 'D', text: '3√3' },
      { key: 'E', text: '2√10' },
    ],
    answer: 'C',
    hint: 'A köşesinden tabana yükseklik indir; ayağı tabanın orta noktasıdır ve D’ye olan uzaklığı küçük bir sayı çıkar.',
    solution: [
      {
        title: 'Parçaları bul',
        detail:
          '|BD| + |DC| = |BC| = 6 cm ve |BD| = 2 · |DC| olduğundan 3 · |DC| = 6, yani |DC| = 2 cm ve |BD| = 4 cm’dir.',
      },
      {
        title: 'Yüksekliği indir',
        detail:
          'A köşesinden [BC] kenarına indirilen dikmenin ayağı H olsun. Eşkenar üçgende bu dikme tabanı ortalar: |BH| = |HC| = 3 cm ve |AH| = 6√3 / 2 = 3√3 cm’dir.',
      },
      {
        title: 'H ile D arası',
        detail: 'H ve D noktalarının ikisi de [BC] üzerindedir: |HD| = |BD| − |BH| = 4 − 3 = 1 cm.',
      },
      {
        title: 'Sonuç',
        detail:
          'AHD üçgeni H’de diktir: x² = |AH|² + |HD|² = (3√3)² + 1² = 27 + 1 = 28 ve x = √28 = 2√7 cm bulunur.',
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

/**
 * The whole bank, exported for the integrity tests: they check that the ids run
 * in sequence and that no question was left behind without a module to sit in.
 */
export const TRIANGLES_BANK: readonly Question[] = QUESTIONS;

export const UNIT_2_TRIANGLES: Unit = {
  id: 'triangles',
  order: 2,
  title: 'Üçgenler',
  subtitle: 'Ünite 2',
  description:
    'Üçgende iç ve dış açılar, ikizkenar üçgenin taban açıları, paralel doğrularla birlikte kurulan açı bağıntıları ve dik üçgende Pisagor bağıntısı.',
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
    {
      id: 'triangles-m5',
      order: 5,
      title: 'Üçgende açılar — Test 2',
      summary:
        'İç ve dış açıortayların oluşturduğu açılar, dış açı bağıntısı, dik kesen doğrularla açı avı ve iki yüksekliğin kesim noktası.',
      questions: pick(
        'triangles-25',
        'triangles-26',
        'triangles-27',
        'triangles-28',
        'triangles-29',
        'triangles-30',
      ),
    },
    {
      id: 'triangles-m6',
      order: 6,
      title: 'Üçgende açılar — Test 3',
      summary:
        'Doğrusal açılarla kurulan dış açı zincirleri, ikizkenar üçgenlerde açı avı, paralel doğrular arasındaki açıortaylar ve sonucu verilenlerden bağımsız çıkan kurulumlar.',
      questions: pick(
        'triangles-31',
        'triangles-32',
        'triangles-33',
        'triangles-34',
        'triangles-35',
        'triangles-36',
      ),
    },
    {
      id: 'triangles-m7',
      order: 7,
      title: 'Üçgende açılar — Test 4',
      summary:
        'Paralel ışınlarla kurulan ikizkenar üçgenler, dikme ve doğrusal noktalarla açı avı, üçgenin içindeki noktada oluşan açı, iç teğet çemberin merkezi ve zincirleme ikizkenar üçgenler.',
      questions: pick(
        'triangles-37',
        'triangles-38',
        'triangles-39',
        'triangles-40',
        'triangles-41',
        'triangles-42',
      ),
    },
    {
      id: 'triangles-m8',
      order: 8,
      title: 'Üçgende açılar — Test 5',
      summary:
        'Dik açılarla kurulan ikizkenar üçgenler, ikizkenar üçgende açıortay, iç noktada oluşan açı, eşkenar üçgenden çıkan eşit uzunluklar ve tabana inen ikizkenar üçgen çiftleri.',
      questions: pick(
        'triangles-43',
        'triangles-44',
        'triangles-45',
        'triangles-46',
        'triangles-47',
        'triangles-48',
      ),
    },
    {
      id: 'triangles-m9',
      order: 9,
      title: 'Üçgende açılar — Test 6',
      summary:
        'Dış açı zinciriyle sadeleşen kurulumlar, iç ve dış açıortayın kesişimi, kesişen çevriyanlar, bir noktaya eşit uzaklıktaki köşeler ve orta dikme.',
      questions: pick(
        'triangles-49',
        'triangles-50',
        'triangles-51',
        'triangles-52',
        'triangles-53',
        'triangles-54',
      ),
    },
    {
      id: 'triangles-m10',
      order: 10,
      title: 'Üçgende açılar — Test 7',
      summary:
        'İç açıortayların kesim noktası, birbirini izleyen ikizkenar üçgenler, eşit uzunluklarla kurulan açı bağıntıları ve orta dikmelerle yüksekliğin birlikte kullanıldığı sorular.',
      questions: pick(
        'triangles-55',
        'triangles-56',
        'triangles-57',
        'triangles-58',
        'triangles-59',
        'triangles-60',
      ),
    },
    {
      id: 'triangles-m11',
      order: 11,
      title: 'Üçgende açılar — Test 8',
      summary:
        'Yükseklikle açıortay arasındaki açı, ikizkenar üçgende eşit bölünen tepe açısı, tabanları aynı doğru üzerinde olan iki ikizkenar üçgen, zincirleme eşit uzunluklar ve iki yüksekliğin kesişimi.',
      questions: pick(
        'triangles-61',
        'triangles-62',
        'triangles-63',
        'triangles-64',
        'triangles-65',
        'triangles-66',
      ),
    },
    {
      id: 'triangles-m12',
      order: 12,
      title: 'Üçgende açılar — Test 9',
      summary:
        'Açıortaya inen dikme, iç açıortayla dış açıortayın kesişmesi, kesişen doğrularda eşit tepe açıları, hipotenüse ait kenarortay ve dik kesişen kenarlarla kurulan ikizkenar üçgenler.',
      questions: pick(
        'triangles-67',
        'triangles-68',
        'triangles-69',
        'triangles-70',
        'triangles-71',
        'triangles-72',
      ),
    },
    {
      id: 'triangles-m13',
      order: 13,
      title: 'Üçgende açılar — Test 10',
      summary:
        'Paralel kenarla ortaya çıkan dik üçgen, dış açıortayla iç açıortayın kesişmesi, eşkenar üçgenden doğan ikizkenar üçgen zinciri, kesişen doğrularda açıortaylar ve üçgenin içine çizilen eşkenar üçgen.',
      questions: pick(
        'triangles-73',
        'triangles-74',
        'triangles-75',
        'triangles-76',
        'triangles-77',
        'triangles-78',
      ),
    },
    {
      id: 'triangles-m14',
      order: 14,
      title: 'Üçgende açılar — Test 11',
      summary:
        'Açıortayla kenarortayın çakışması, tam sayı açılar arasındaki eşitsizlik, iki iç açıortayın kestiği açılar, paralellikle taşınan taban açısı ve iç içe geçmiş ikizkenar üçgenler.',
      questions: pick(
        'triangles-79',
        'triangles-80',
        'triangles-81',
        'triangles-82',
        'triangles-83',
        'triangles-84',
      ),
    },
    {
      id: 'triangles-m15',
      order: 15,
      title: 'Üçgende açılar — Test 12',
      summary:
        'Kesişen iki ikizkenar üçgen, hipotenüse ait kenarortay, iki yüksekliğin kestiği eşit parçalar, zincirleme ikizkenar üçgenler, eşkenar üçgen doğuran açılar ve yükseklik ayaklarından geçen çember.',
      questions: pick(
        'triangles-85',
        'triangles-86',
        'triangles-87',
        'triangles-88',
        'triangles-89',
        'triangles-90',
      ),
    },
    {
      id: 'triangles-m16',
      order: 16,
      title: 'Dik üçgende Pisagor ve yükseklik',
      summary:
        'Yüksekliğin ayırdığı iki dik üçgen, kenarlar toplamı verilen kurulumlar, hipotenüse ait yükseklik ve Pisagor bağıntısından çıkan ikinci dereceden denklemler.',
      questions: pick(
        'triangles-91',
        'triangles-92',
        'triangles-93',
        'triangles-94',
        'triangles-95',
        'triangles-96',
      ),
    },
    {
      id: 'triangles-m17',
      order: 17,
      title: 'Dik üçgenler — özel açılar ve kenarortay',
      summary:
        '30° − 60° − 90° ile 45° − 45° − 90° üçgenleri, iki dik açılı dörtgende köşegen, dik yamukta yan kenar, orta dikme ve hipotenüse ait kenarortay.',
      questions: pick(
        'triangles-97',
        'triangles-98',
        'triangles-99',
        'triangles-100',
        'triangles-101',
        'triangles-102',
      ),
    },
    {
      id: 'triangles-m18',
      order: 18,
      title: 'Dik üçgenler — karma uygulamalar',
      summary:
        'Bir üçgenin iki yüksekliği ile 45°’lik açı, iki dik açılı dörtgende ortak köşegen, 30° ile 45°’nin aynı yükseklikte buluşması, Öklid bağıntıları, hipotenüsün orta dikmesi ve köşegenle ayrılan özel açılı dik üçgenler.',
      questions: pick(
        'triangles-103',
        'triangles-104',
        'triangles-105',
        'triangles-106',
        'triangles-107',
        'triangles-108',
      ),
    },
    {
      id: 'triangles-m19',
      order: 19,
      title: 'Dik üçgenler — ikizkenar kurulumları ve Pisagor',
      summary:
        '15°’lik açıyı ikizkenar üçgen kurarak çözme, keseni olan dik üçgende iki Pisagor bağıntısı, açıortayın ayırdığı 30°’lik üçgenler, aynı verilerden çıkan iki farklı dik üçgen, merdiven problemi ve hipotenüse ait kenarortay ile yükseklik arasındaki açı.',
      questions: pick(
        'triangles-109',
        'triangles-110',
        'triangles-111',
        'triangles-112',
        'triangles-113',
        'triangles-114',
      ),
    },
    {
      id: 'triangles-m20',
      order: 20,
      title: 'Dik üçgenler — oranlı kenarlar ve Pisagor',
      summary:
        'Dik kenarları x cinsinden verilen üçgenler, aynı şekilde buluşan 45° ve 30°’lik dik üçgenler, kenarları cebirsel verilen dik üçgen, yüksekliğin ayırdığı iki dik üçgen ve ortak kenarı olan iki dik üçgen.',
      questions: pick(
        'triangles-115',
        'triangles-116',
        'triangles-117',
        'triangles-118',
        'triangles-119',
        'triangles-120',
      ),
    },
    {
      id: 'triangles-m21',
      order: 21,
      title: 'Dik üçgenler — Pisagor ve Öklid bağıntıları',
      summary:
        'Kenarları cebirsel verilen dik üçgen, iki dik açılı dörtgende köşegen, hipotenüse ait yükseklikte Öklid bağıntısı, ikizkenar dik üçgende kenarortay, verilen ilişkiden çevre ve yüksekliğin ayırdığı iki dik üçgen.',
      questions: pick(
        'triangles-121',
        'triangles-122',
        'triangles-123',
        'triangles-124',
        'triangles-125',
        'triangles-126',
      ),
    },
    {
      id: 'triangles-m22',
      order: 22,
      title: 'Dik üçgenler — Test',
      summary:
        'İkinci dereceden denkleme düşen kenar uzunlukları, ortak köşegenli dörtgen, dik kenar için Öklid bağıntısı, hipotenüs üzerindeki nokta, iki parçaya ayrılan taban ve hipotenüsü dik kenara bağlı verilen üçgen.',
      questions: pick(
        'triangles-127',
        'triangles-128',
        'triangles-129',
        'triangles-130',
        'triangles-131',
        'triangles-132',
      ),
    },
    {
      id: 'triangles-m23',
      order: 23,
      title: 'Dik üçgenler — Öklid, açıortay ve kenarortay',
      summary:
        'Hipotenüse inen yükseklikte Öklid bağıntısı, iç içe iki dik üçgende Pisagor, dik kenarı bölen doğru parçası, açıortayın doğurduğu ikizkenar üçgen, hipotenüse ait kenarortay ve çevresi verilen dik üçgen.',
      questions: pick(
        'triangles-133',
        'triangles-134',
        'triangles-135',
        'triangles-136',
        'triangles-137',
        'triangles-138',
      ),
    },
    {
      id: 'triangles-m24',
      order: 24,
      title: 'Dik üçgenler — Test 2',
      summary:
        'Öklid bağıntısıyla bulunan 30°’lik açı, ortak köşegenli iki dik üçgen, paralel dik kenarlar arasındaki 45°’lik üçgenler, eşit kenarlı dörtgen, birbirine dik yollarda uzaklık ve dik yamuğa tamamlanan dörtgen.',
      questions: pick(
        'triangles-139',
        'triangles-140',
        'triangles-141',
        'triangles-142',
        'triangles-143',
        'triangles-144',
      ),
    },
    {
      id: 'triangles-m25',
      order: 25,
      title: 'Dik üçgenler — Test 3',
      summary:
        'Dik kenarı bölen nokta, hipotenüse ait yükseklikte Öklid bağıntısı, ortak hipotenüslü 30° ve 45°’lik üçgenler, üç kenarı verilen üçgende yükseklik ve taban açıları 30° olan üçgende dikme.',
      questions: pick(
        'triangles-145',
        'triangles-146',
        'triangles-147',
        'triangles-148',
        'triangles-149',
        'triangles-150',
      ),
    },
    {
      id: 'triangles-m26',
      order: 26,
      title: 'Dik üçgenler — Test 4',
      summary:
        '45°’lik açıda indirilen dikme, hipotenüse ait yükseklikte alan bağıntısı, 75° ve 105°’lik açıları dikmeyle çözme, yüksekliğin hipotenüsü ayırdığı parçalar ve Öklid bağıntıları.',
      questions: pick(
        'triangles-151',
        'triangles-152',
        'triangles-153',
        'triangles-154',
        'triangles-155',
        'triangles-156',
      ),
    },
    {
      id: 'triangles-m27',
      order: 27,
      title: 'Dik üçgenler — Test 5',
      summary:
        'Paralel doğrular arasındaki dik uzaklık, hipotenüse ait kenarortay, ikizkenar kurulumlarıyla bulunan yükseklik, açıortayların doğurduğu dik açı ve dik açıyı üçe bölen yükseklik–kenarortay ikilisi.',
      questions: pick(
        'triangles-157',
        'triangles-158',
        'triangles-159',
        'triangles-160',
        'triangles-161',
        'triangles-162',
      ),
    },
    {
      id: 'triangles-m28',
      order: 28,
      title: 'Dik üçgenler — Test 6',
      summary:
        'Hipotenüsü oranlı bölen yükseklikte Öklid bağıntısı, köşegenleri dik kesişen dörtgen, 30°’lik açıyla kurulan iki dik üçgen, 30°-60°-90° üçgeninde Öklid, hipotenüse ait kenarortay ve dik kesen doğru parçalarında kareler farkı.',
      questions: pick(
        'triangles-163',
        'triangles-164',
        'triangles-165',
        'triangles-166',
        'triangles-167',
        'triangles-168',
      ),
    },
    {
      id: 'triangles-m29',
      order: 29,
      title: 'Dik üçgenler — Test 7',
      summary:
        'Hipotenüsün orta dikmesi, yükseklik üzerinde kurulan orta dikme, aynı doğruya dik iki kenar arasındaki uzaklık, 135°’lik açıyı dikmeyle çözme, köşegenleri dik kesişen dik yamukta Öklid bağıntısı ve hipotenüsün orta noktasından dik kenara uzaklık.',
      questions: pick(
        'triangles-169',
        'triangles-170',
        'triangles-171',
        'triangles-172',
        'triangles-173',
        'triangles-174',
      ),
    },
    {
      id: 'triangles-m30',
      order: 30,
      title: 'Dik üçgenler — Test 8',
      summary:
        'Simetriyle bulunan en kısa yol, 30° ve 45°’lik açıların paylaştığı yükseklik, iki dik üçgende Öklid bağıntısı, dik açılı dörtgende köşegen, yükseklikten çıkan 30°-60°-90° üçgeni ve hipotenüs üzerindeki noktaya uzaklık.',
      questions: pick(
        'triangles-175',
        'triangles-176',
        'triangles-177',
        'triangles-178',
        'triangles-179',
        'triangles-180',
      ),
    },
    {
      id: 'triangles-m31',
      order: 31,
      title: 'Dik üçgenler — Test 9',
      summary:
        'Yükseklik ayağından dik kenarlara inen dikmeler, 120°’lik açıyı dikmeyle çözme, 15°’lik açıyı ikizkenar kurarak 30°’ye çevirme, hipotenüse ait kenarortay, Öklid bağıntısıyla alan ve dış açıortayların oluşturduğu 45°’lik açı.',
      questions: pick(
        'triangles-181',
        'triangles-182',
        'triangles-183',
        'triangles-184',
        'triangles-185',
        'triangles-186',
      ),
    },
    {
      id: 'triangles-m32',
      order: 32,
      title: 'Dik üçgenler — Test 10',
      summary:
        'Dik kenarı bölen çevriyanda iki Pisagor, ardışık dik açılardan kurulan dik üçgen, simetriyle bulunan en kısa yol, iki 120°’lik açının paylaştığı taban, 15°’lik açıda hipotenüse ait yükseklik ve ikizkenarlıkla çözülen uzunluk farkı.',
      questions: pick(
        'triangles-187',
        'triangles-188',
        'triangles-189',
        'triangles-190',
        'triangles-191',
        'triangles-192',
      ),
    },
    {
      id: 'triangles-m33',
      order: 33,
      title: 'İkizkenar ve eşkenar üçgen — kenar uzunlukları',
      summary:
        'Tabana inen yükseklikle çözülen ikizkenar üçgenler, eşkenar üçgende kenarlara indirilen dikmeler, ikizkenarlıkla yakalanan dik açı, eşkenar üçgenin alanı ve iç bir noktanın kenarlara uzaklıkları.',
      questions: pick(
        'triangles-193',
        'triangles-194',
        'triangles-195',
        'triangles-196',
        'triangles-197',
        'triangles-198',
      ),
    },
    {
      id: 'triangles-m34',
      order: 34,
      title: 'İkizkenar ve eşkenar üçgen — karma',
      summary:
        'Paralellik ile açıortayın eşkenar üçgen doğurduğu kurulum, [BC] üzerinde kayan eşkenar üçgenin apeksine en kısa uzaklık, dik açıdan kurulan iki Pisagor bağıntısı, tabana inen dikmeyle bulunan iç doğru parçası, ikizkenar dik üçgende kenarlara uzaklıklar ve eşit kenarların zincirlediği açı avı.',
      questions: pick(
        'triangles-199',
        'triangles-200',
        'triangles-201',
        'triangles-202',
        'triangles-203',
        'triangles-204',
      ),
    },
    {
      id: 'triangles-m35',
      order: 35,
      title: 'İkizkenar ve eşkenar üçgen — dikmeler ve uzaklıklar',
      summary:
        'Çevresinden ağaç sayısı bilinen ikizkenar tarla, eşit iki yüksekliğin ele verdiği ikizkenarlık, eşkenar üçgende iç noktanın kenarlara uzaklıkları toplamı, alandan bulunan iç teğet çember yarıçapı, dıştaki bir nokta için aynı uzaklık bağıntısı ve dikmenin doğurduğu benzerlikle çözülen ikizkenar üçgen.',
      questions: pick(
        'triangles-205',
        'triangles-206',
        'triangles-207',
        'triangles-208',
        'triangles-209',
        'triangles-210',
      ),
    },
    {
      id: 'triangles-m36',
      order: 36,
      title: 'İkizkenar ve eşkenar üçgen — uzunluk ve alan',
      summary:
        'Bir kenarın uzantısına oturan eşkenar üçgen, paralel kesitin ayırdığı yamuğun alanı, ikizkenar üçgende tabana inen yükseklikle çözülen Pisagor kurulumu, eşkenar üçgeni kesen doğruda paralel yardımıyla kurulan benzerlik, kenara inen dikmenin doğurduğu 30°-60°-90° üçgeni ve hipotenüse ait yükseklik.',
      questions: pick(
        'triangles-211',
        'triangles-212',
        'triangles-213',
        'triangles-214',
        'triangles-215',
        'triangles-216',
      ),
    },
    {
      id: 'triangles-m37',
      order: 37,
      title: 'İkizkenar ve eşkenar üçgen — dikmeler ve paraleller',
      summary:
        'Taban açısı 75° olan ikizkenar üçgende dikme ayağı, kenar uzantısına taşan eşkenar üçgen, ardışık iki dik açının zincirlediği kurulum, iç noktadan çizilen paralellerle bulunan çevre, iki dikmeden çıkan alan, hipotenüse ait yükseklikle çözülen ikizkenar üçgen ve tabanı 2’ye 1 bölen nokta.',
      questions: pick(
        'triangles-217',
        'triangles-218',
        'triangles-219',
        'triangles-220',
        'triangles-221',
        'triangles-222',
        'triangles-223',
      ),
    },
  ],
};
