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

          <line class="tick" x1="160.6" y1="178.4" x2="149.4" y2="174.3"/>
          <line class="tick" x1="250.6" y1="174.3" x2="239.4" y2="178.4"/>

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
  ],
};
