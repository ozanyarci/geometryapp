import { Question, Unit } from '../models';

/**
 * Unit 1 — Angles.
 * Questions, diagrams and solutions come from the "Açılar — Çözümlü Test" source.
 *
 * All learner-facing text is Turkish by design; only the code around it is English.
 *
 * The bank below is kept in id order and stays append-only; the modules at the
 * bottom of the file decide the order a student actually meets the questions in.
 *
 * Diagrams store the *contents* of the <svg> element, with viewBox and the
 * accessibility label kept as separate fields. Arrowheads use currentColor so
 * they stay visible in dark mode.
 */
/**
 * Question 4's zigzag, drawn as the student first sees it.
 *
 * The question and the solution show this same drawing side by side, so marker
 * ids are suffixed to keep them unique within the page.
 */
const q4Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q4-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="150" y1="40" x2="368" y2="40" marker-end="url(#arrow-q4-${suffix})"/>
  <line class="ln" x1="20" y1="296" x2="300" y2="296" marker-start="url(#arrow-q4-${suffix})" marker-end="url(#arrow-q4-${suffix})"/>
  <path class="ln" d="M150,40 L44,115 L128,296"/>

  <path class="par" d="M240,34 L247,40 L240,46"/>
  <path class="par" d="M79,290 L72,296 L79,302"/>

  <path class="arc" d="M180,40 A30,30 0 0 1 125.4,57.2"/>
  <text class="val" x="164" y="88">145°</text>

  <path class="arc" d="M66.8,98.8 A28,28 0 0 1 55.8,140.4"/>
  <text class="val" x="96" y="142">100°</text>

  <path class="arc" d="M115.3,268.8 A30,30 0 0 0 98,296"/>
  <text class="val" x="86" y="280" text-anchor="end">x</text>

  <circle class="pt" cx="150" cy="40" r="3.2"/>
  <circle class="pt" cx="290" cy="40" r="3.2"/>
  <circle class="pt" cx="44" cy="115" r="3.2"/>
  <circle class="pt" cx="128" cy="296" r="3.2"/>
  <circle class="pt" cx="40" cy="296" r="3.2"/>

  <text x="144" y="30" text-anchor="end">C</text>
  <text x="290" y="30" text-anchor="middle">D</text>
  <text x="34"  y="112" text-anchor="end">B</text>
  <text x="132" y="316" text-anchor="middle">A</text>
  <text x="40"  y="316" text-anchor="middle">E</text>
`;

/**
 * The [Bd ray the solution draws through the corner point B, overlaid on the
 * plain figure only after the question is answered.
 */
const Q4_AUX_SVG = `
  <defs>
    <marker id="arrow-q4-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="44" y1="115" x2="215" y2="115" marker-end="url(#arrow-q4-aux)"/>
  <path class="aux-head" d="M158,109 L165,115 L158,121"/>
  <text class="val" x="224" y="120">d</text>
`;

/** Question 7's zigzag between the [BC and [DE rays. */
const q7Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q7-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="146.1" y1="155.2" x2="25.6" y2="155.2" marker-end="url(#arrow-q7-${suffix})"/>
  <line class="ln" x1="325.8" y1="292.7" x2="116.9" y2="292.7" marker-end="url(#arrow-q7-${suffix})"/>
  <path class="ln" d="M146.1,155.2 L210,44.6 L325.8,292.7"/>

  <path class="par" d="M93.1,144.3 L80.3,155.2 L93.1,166.2"/>
  <path class="par" d="M153.4,281.8 L140.6,292.7 L153.4,303.7"/>

  <path class="arc" d="M169.8,114.1 A47.5,47.5 0 0 0 98.6,155.2"/>
  <text class="val" x="105.9" y="98.6" text-anchor="middle">α</text>

  <path class="arc" d="M188.1,82.5 A43.8,43.8 0 0 0 228.4,84.4"/>
  <text class="val" x="206.3" y="122.3" text-anchor="middle">55°</text>

  <path class="arc" d="M305.7,249.6 A47.5,47.5 0 0 0 278.3,292.7"/>
  <text class="val" x="263" y="263" text-anchor="middle">65°</text>

  <circle class="pt" cx="210" cy="44.6" r="3.2"/>
  <circle class="pt" cx="146.1" cy="155.2" r="3.2"/>
  <circle class="pt" cx="54.8" cy="155.2" r="3.2"/>
  <circle class="pt" cx="325.8" cy="292.7" r="3.2"/>
  <circle class="pt" cx="173.5" cy="292.7" r="3.2"/>

  <text x="210" y="29.2" text-anchor="middle">A</text>
  <text x="157" y="184.4">B</text>
  <text x="54.8" y="184.4" text-anchor="middle">C</text>
  <text x="336" y="323.2">D</text>
  <text x="173.5" y="323.2" text-anchor="middle">E</text>
`;

/** The [Ad ray question 7's solution draws through the top corner A. */
const Q7_AUX_SVG = `
  <defs>
    <marker id="arrow-q7-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="210" y1="44.6" x2="82.2" y2="44.6" marker-end="url(#arrow-q7-aux)"/>
  <text class="val" x="69.4" y="53" text-anchor="end">d</text>
`;

/** Question 9's [AB and [CD rays with the corner point E below them. */
const q9Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q9-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="140.7" y1="19.8" x2="14" y2="19.8" marker-end="url(#arrow-q9-${suffix})"/>
  <line class="ln" x1="271.8" y1="62.7" x2="406" y2="62.7" marker-end="url(#arrow-q9-${suffix})"/>
  <path class="ln" d="M140.7,19.8 L250,150 L271.8,62.7"/>

  <path class="par" d="M81,13.8 L74,19.8 L81,25.8"/>
  <path class="par" d="M344,56.7 L351,62.7 L344,68.7"/>

  <path class="arc" d="M110.7,19.8 A30,30 0 0 0 160,42.8"/>
  <text class="val" x="119" y="66" text-anchor="middle">5x</text>

  <path class="arc" d="M258.2,117 A34,34 0 0 0 228.1,124"/>
  <text class="val" x="238" y="103" text-anchor="middle">54°</text>

  <path class="arc" d="M299.8,62.7 A28,28 0 0 1 265,89.9"/>
  <text class="val" x="300" y="101" text-anchor="middle">4x</text>

  <circle class="pt" cx="140.7" cy="19.8" r="3.2"/>
  <circle class="pt" cx="30" cy="19.8" r="3.2"/>
  <circle class="pt" cx="271.8" cy="62.7" r="3.2"/>
  <circle class="pt" cx="390" cy="62.7" r="3.2"/>
  <circle class="pt" cx="250" cy="150" r="3.2"/>

  <text x="146" y="14">A</text>
  <text x="30" y="14" text-anchor="middle">B</text>
  <text x="266" y="55" text-anchor="end">C</text>
  <text x="390" y="55" text-anchor="middle">D</text>
  <text x="256" y="166">E</text>
`;

/** The d line question 9's solution draws through E, parallel to [AB and [CD. */
const Q9_AUX_SVG = `
  <defs>
    <marker id="arrow-q9-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="150" y1="150" x2="380" y2="150" marker-start="url(#arrow-q9-aux)" marker-end="url(#arrow-q9-aux)"/>
  <text class="val" x="388" y="155">d</text>
`;

/** Question 12's KBN angle between the parallel [AL and [CM rays. */
const q12Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q12-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="96" y1="210" x2="396" y2="210" marker-end="url(#arrow-q12-${suffix})"/>
  <line class="ln" x1="96" y1="210" x2="55.3" y2="47" marker-end="url(#arrow-q12-${suffix})"/>
  <line class="ln" x1="64.1" y1="82" x2="126.6" y2="17.2" marker-end="url(#arrow-q12-${suffix})"/>
  <line class="ln" x1="276" y1="210" x2="351" y2="132.4" marker-end="url(#arrow-q12-${suffix})"/>

  <path class="par" d="M104.3,50.8 L105.8,38.8 L94,40.7"/>
  <path class="par" d="M323.6,171.1 L325.2,159.1 L313.3,161"/>

  <path class="arc" d="M87.5,57.8 A33.6,33.6 0 0 0 55.9,49.3"/>
  <text class="val" x="76.8" y="31.2" text-anchor="middle">58°</text>

  <path class="arc" d="M312,210 A36,36 0 0 0 301,184.1"/>
  <text class="val" x="328.8" y="193.2">46°</text>

  <path class="arc" d="M141.6,210 A45.6,45.6 0 0 0 85,165.7"/>
  <text class="val" x="108" y="153" text-anchor="middle">?</text>

  <circle class="pt" cx="96" cy="210" r="3.2"/>
  <circle class="pt" cx="276" cy="210" r="3.2"/>
  <circle class="pt" cx="64.1" cy="82" r="3.2"/>

  <text x="54" y="79.2" text-anchor="end">A</text>
  <text x="88.8" y="230.4" text-anchor="end">B</text>
  <text x="273.6" y="230.4" text-anchor="middle">C</text>
  <text x="386.4" y="230.4" text-anchor="middle">N</text>
  <text x="45.6" y="40.8" text-anchor="end">K</text>
  <text x="134.4" y="14.4">L</text>
  <text x="358.8" y="127.2">M</text>
`;

/** The [Bd ray question 12's solution draws through the corner point B. */
const Q12_AUX_SVG = `
  <defs>
    <marker id="arrow-q12-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="96" y1="210" x2="196.1" y2="106.3" marker-end="url(#arrow-q12-aux)"/>
  <text class="val" x="204" y="103.2">d</text>
`;

/** Question 17's A-B-C zigzag between the [AE // [CD and [BC] // [DE] pairs. */
const q17Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q17-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="104.9" y1="22.2" x2="330" y2="22.2" marker-end="url(#arrow-q17-${suffix})"/>
  <line class="ln" x1="128.5" y1="85" x2="330" y2="85" marker-end="url(#arrow-q17-${suffix})"/>
  <path class="ln" d="M104.9,22.2 L50,140 L128.5,85"/>
  <line class="ln" x1="190.4" y1="85" x2="280" y2="22.2"/>

  <path class="par" d="M299,16.2 L306,22.2 L299,28.2"/>
  <path class="par" d="M299,79 L306,85 L299,91"/>

  <path class="par" d="M87.8,120.8 L90.1,111.9 L81,111"/>
  <path class="par" d="M94.4,116.3 L96.7,107.3 L87.6,106.5"/>
  <path class="par" d="M224.7,68.3 L227,59.3 L217.9,58.5"/>
  <path class="par" d="M231.3,63.7 L233.6,54.7 L224.5,53.9"/>

  <path class="arc" d="M134.9,22.2 A30,30 0 0 1 92.2,49.4"/>
  <text class="val" x="132" y="66" text-anchor="middle">115°</text>

  <path class="arc" d="M77.9,120.5 A34,34 0 0 0 64.4,109.2"/>
  <text class="val" x="90" y="100" text-anchor="middle">30°</text>

  <path class="arc" d="M250,22.2 A30,30 0 0 0 255.4,39.4"/>
  <text class="val" x="234" y="40" text-anchor="middle">x</text>

  <circle class="pt" cx="104.9" cy="22.2" r="3.2"/>
  <circle class="pt" cx="280" cy="22.2" r="3.2"/>
  <circle class="pt" cx="50" cy="140" r="3.2"/>
  <circle class="pt" cx="128.5" cy="85" r="3.2"/>
  <circle class="pt" cx="190.4" cy="85" r="3.2"/>

  <text x="100" y="16" text-anchor="end">A</text>
  <text x="284" y="16">E</text>
  <text x="44" y="148" text-anchor="end">B</text>
  <text x="128.5" y="107" text-anchor="middle">C</text>
  <text x="192" y="101">D</text>
`;

/** The [Bd ray question 17's solution draws through the corner point B. */
const Q17_AUX_SVG = `
  <defs>
    <marker id="arrow-q17-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="50" y1="140" x2="196" y2="140" marker-end="url(#arrow-q17-aux)"/>
  <text class="val" x="204" y="145">d</text>
`;

/** Question 21's A-B-C zigzag, with the corner B below both parallel rays. */
const q21Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q21-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="100" y1="20" x2="18" y2="20" marker-end="url(#arrow-q21-${suffix})"/>
  <line class="ln" x1="209.9" y1="45" x2="310" y2="45" marker-end="url(#arrow-q21-${suffix})"/>
  <path class="ln" d="M100,20 L199.6,103.6 L209.9,45"/>

  <path class="par" d="M61,14 L54,20 L61,26"/>
  <path class="par" d="M284,39 L291,45 L284,51"/>

  <path class="arc" d="M70,20 A30,30 0 0 0 123,39.3"/>
  <text class="val" x="80" y="66" text-anchor="middle">140°</text>

  <path class="arc" d="M205.5,70.1 A34,34 0 0 0 173.6,81.7"/>
  <text class="val" x="171" y="58" text-anchor="middle">3x</text>

  <path class="arc" d="M204.7,74.5 A30,30 0 0 0 239.9,45"/>
  <text class="val" x="247" y="82" text-anchor="middle">5x</text>

  <circle class="pt" cx="100" cy="20" r="3.2"/>
  <circle class="pt" cx="30" cy="20" r="3.2"/>
  <circle class="pt" cx="199.6" cy="103.6" r="3.2"/>
  <circle class="pt" cx="209.9" cy="45" r="3.2"/>
  <circle class="pt" cx="270" cy="45" r="3.2"/>

  <text x="30" y="12" text-anchor="middle">E</text>
  <text x="100" y="12" text-anchor="middle">A</text>
  <text x="199.6" y="126" text-anchor="middle">B</text>
  <text x="204" y="36" text-anchor="end">C</text>
  <text x="270" y="36" text-anchor="middle">D</text>
`;

/** The [Bd ray question 21's solution draws through the corner point B. */
const Q21_AUX_SVG = `
  <defs>
    <marker id="arrow-q21-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="199.6" y1="103.6" x2="278" y2="103.6" marker-end="url(#arrow-q21-aux)"/>
  <text class="val" x="286" y="108">d</text>
`;

/** Question 25's A-C-D zigzag, the one stated in grads and radians. */
const q25Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q25-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="200" y1="20" x2="70" y2="20" marker-end="url(#arrow-q25-${suffix})"/>
  <line class="ln" x1="204.6" y1="72.2" x2="305" y2="72.2" marker-end="url(#arrow-q25-${suffix})"/>
  <path class="ln" d="M200,20 L141,135.8 L204.6,72.2"/>

  <path class="par" d="M92,14 L85,20 L92,26"/>
  <path class="par" d="M274,66.2 L281,72.2 L274,78.2"/>

  <!-- The two given angles are stated in grads and radians, so the arcs only
       point at them; the values stay in the given list where the units fit. -->
  <path class="arc" d="M174,20 A26,26 0 0 0 188.2,43.2"/>
  <path class="arc" d="M162.2,114.6 A30,30 0 0 0 154.6,109.1"/>

  <path class="arc" d="M183.4,93.4 A30,30 0 0 0 234.6,72.2"/>
  <text class="val" x="228" y="112" text-anchor="middle">α</text>

  <circle class="pt" cx="200" cy="20" r="3.2"/>
  <circle class="pt" cx="100" cy="20" r="3.2"/>
  <circle class="pt" cx="141" cy="135.8" r="3.2"/>
  <circle class="pt" cx="204.6" cy="72.2" r="3.2"/>
  <circle class="pt" cx="270" cy="72.2" r="3.2"/>

  <text x="100" y="12" text-anchor="middle">B</text>
  <text x="206" y="14">A</text>
  <text x="135" y="151" text-anchor="end">C</text>
  <text x="208" y="64">D</text>
  <text x="270" y="64" text-anchor="middle">E</text>
`;

/** The [Cd ray question 25's solution draws through the corner point C. */
const Q25_AUX_SVG = `
  <defs>
    <marker id="arrow-q25-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="141" y1="135.8" x2="240" y2="135.8" marker-end="url(#arrow-q25-aux)"/>
  <text class="val" x="248" y="140">d</text>
`;

/**
 * Question 35's double zigzag. The two middle angles are only given in terms of
 * one another, so their arcs stay unlabelled and the relation lives in the stem.
 */
const q35Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q35-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="33.9" y1="115.2" x2="378.2" y2="115.2" marker-start="url(#arrow-q35-${suffix})" marker-end="url(#arrow-q35-${suffix})"/>
  <path class="ln" d="M121.2,115.2 L183.8,25.8 L245.2,157.7 L305.9,115.2"/>

  <path class="arc" d="M142.1,85.4 A36.4,36.4 0 0 0 84.8,115.2"/>
  <text class="val" x="92" y="72" text-anchor="middle">125°</text>

  <path class="arc" d="M165.7,51.6 A31.5,31.5 0 0 0 197.1,54.4"/>
  <path class="arc" d="M271,139.6 A31.5,31.5 0 0 0 231.9,129.1"/>

  <path class="arc" d="M342.3,115.2 A36.4,36.4 0 0 1 276.1,136.1"/>
  <text class="val" x="322" y="171" text-anchor="middle">α</text>

  <circle class="pt" cx="60.6" cy="115.2" r="3.2"/>
  <circle class="pt" cx="121.2" cy="115.2" r="3.2"/>
  <circle class="pt" cx="305.9" cy="115.2" r="3.2"/>
  <circle class="pt" cx="345.5" cy="115.2" r="3.2"/>
  <circle class="pt" cx="183.8" cy="25.8" r="3.2"/>
  <circle class="pt" cx="245.2" cy="157.7" r="3.2"/>

  <text x="60.6" y="136" text-anchor="middle">B</text>
  <text x="121.2" y="136" text-anchor="middle">A</text>
  <text x="300" y="105" text-anchor="end">C</text>
  <text x="345.5" y="105" text-anchor="middle">D</text>
  <text x="183.8" y="17" text-anchor="middle">E</text>
  <text x="245.2" y="177" text-anchor="middle">F</text>
`;

/** The e and f parallels question 35's solution draws through E and F. */
const Q35_AUX_SVG = `
  <line class="aux" x1="112" y1="25.8" x2="258" y2="25.8"/>
  <text class="val" x="104" y="30" text-anchor="end">e</text>

  <line class="aux" x1="180" y1="157.7" x2="322" y2="157.7"/>
  <text class="val" x="330" y="150">f</text>
`;

/** Question 36's corner C, which falls outside the two parallel rays. */
const q36Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q36-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="236.2" y1="30.5" x2="370.1" y2="30.5" marker-end="url(#arrow-q36-${suffix})"/>
  <line class="ln" x1="236.2" y1="188.4" x2="382.1" y2="188.4" marker-end="url(#arrow-q36-${suffix})"/>
  <line class="ln" x1="236.2" y1="30.5" x2="143.3" y2="95.5"/>
  <line class="ln" x1="236.2" y1="188.4" x2="96.8" y2="49.1" marker-end="url(#arrow-q36-${suffix})"/>

  <path class="par" d="M290.1,23.3 L298.5,30.5 L290.1,37.6"/>
  <path class="par" d="M296.1,181.2 L304.5,188.4 L296.1,195.6"/>

  <path class="arc" d="M272,30.5 A35.8,35.8 0 0 1 206.9,51"/>
  <text class="val" x="254" y="88" text-anchor="middle">145°</text>

  <path class="arc" d="M272,188.4 A35.8,35.8 0 0 0 210.9,163.1"/>
  <text class="val" x="259" y="143" text-anchor="middle">135°</text>

  <path class="arc" d="M172.6,75 A35.8,35.8 0 0 0 118,70.2"/>
  <text class="val" x="148" y="49" text-anchor="middle">α</text>

  <circle class="pt" cx="236.2" cy="30.5" r="3.2"/>
  <circle class="pt" cx="328.4" cy="30.5" r="3.2"/>
  <circle class="pt" cx="143.3" cy="95.5" r="3.2"/>
  <circle class="pt" cx="236.2" cy="188.4" r="3.2"/>
  <circle class="pt" cx="340.3" cy="188.4" r="3.2"/>

  <text x="229" y="24" text-anchor="end">A</text>
  <text x="328.4" y="21" text-anchor="middle">B</text>
  <text x="134" y="110" text-anchor="end">C</text>
  <text x="242" y="207">D</text>
  <text x="340.3" y="207" text-anchor="middle">E</text>
  <text x="90" y="43" text-anchor="end">F</text>
`;

/** The [Cd ray question 36's solution draws through the corner point C. */
const Q36_AUX_SVG = `
  <defs>
    <marker id="arrow-q36-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="143.3" y1="95.5" x2="255" y2="95.5" marker-end="url(#arrow-q36-aux)"/>
  <text class="val" x="263" y="104">d</text>
`;

/**
 * The question bank, in id order. Nothing here is shown to a student directly —
 * the modules at the bottom of the file choose the order and the grouping.
 */
const QUESTIONS: readonly Question[] = [
  // ---------------------------------------------------------------- 1
  {
    id: 'angles-1',
    topic: 'Açı birimleri',
    stem: ['138295″ lik açı kaç derece, kaç dakika, kaç saniyelik açıdır?'],
    choices: [
      { key: 'A', text: '38° 14′ 55″' },
      { key: 'B', text: '38° 24′ 55″' },
      { key: 'C', text: '38° 25′ 45″' },
      { key: 'D', text: '37° 24′ 55″' },
      { key: 'E', text: '39° 24′ 15″' },
    ],
    answer: 'B',
    hint: '1° = 60′ ve 1′ = 60″ olduğuna göre 1° kaç saniye eder? Önce onu bul.',
    solution: [
      {
        title: 'Birimleri hatırla',
        detail: '1° = 60′ ve 1′ = 60″ olduğundan 1° = 60 · 60 = 3600″ eder.',
      },
      {
        title: 'Önce dereceyi ayır',
        detail:
          '138295 ÷ 3600 işleminde bölüm 38, kalan 138295 − 38 · 3600 = 138295 − 136800 = 1495″ olur. Yani 38° ve geriye 1495″ kalır.',
      },
      {
        title: 'Kalanı dakikaya çevir',
        detail: '1495 ÷ 60 işleminde bölüm 24, kalan 1495 − 24 · 60 = 1495 − 1440 = 55″ olur.',
      },
      {
        title: 'Sonuç',
        detail: '138295″ = 38° 24′ 55″ bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'angles-2',
    topic: 'Tümler ve bütünler açılar',
    stem: ['Tümler iki açıdan birinin ölçüsü diğerinin ölçüsünün 5 katına eşittir.'],
    ask: 'Buna göre, bu açıların bütünleyenlerinin ölçüleri farkı kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'D',
    hint: 'İki açının bütünleyenlerinin farkı, açıların kendi farkına eşittir.',
    solution: [
      {
        title: 'Tümler açıyı yaz',
        detail: 'Ölçüleri toplamı 90° olan iki açıya tümler açı denir.',
      },
      {
        title: 'Denklemi kur',
        detail:
          'Küçük açının ölçüsü x ise diğeri 5x olur. x + 5x = 90 → 6x = 90 → x = 15°, diğer açı da 5 · 15 = 75° bulunur.',
      },
      {
        title: 'Bütünleyenleri bul',
        detail:
          'Bütünler açılarda ölçüler toplamı 180°’dir. 180 − 15 = 165° ve 180 − 75 = 105° olur.',
      },
      {
        title: 'Farkı al',
        detail: '165 − 105 = 60° bulunur.',
      },
      {
        title: 'Pratik yol',
        detail:
          'İki açının bütünleyenlerinin farkı, açıların farkına eşittir: 75 − 15 = 60°. Bütünleyeni hesaplamaya gerek kalmaz.',
      },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'angles-3',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 470 240',
      caption: 'Şekil 3',
      label:
        'B, O, A doğrusu ve O noktasından çıkan OE, OC, OD ışınları ile bunları kesen ED paralel doğrusu.',
      svg: `
          <defs>
            <marker id="arrow-q3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="34" y1="200" x2="452" y2="200" marker-start="url(#arrow-q3)" marker-end="url(#arrow-q3)"/>
          <line class="ln" x1="44" y1="60" x2="448" y2="60" marker-start="url(#arrow-q3)" marker-end="url(#arrow-q3)"/>

          <line class="ln" x1="170" y1="200" x2="411" y2="44" marker-end="url(#arrow-q3)"/>
          <line class="ln" x1="170" y1="200" x2="244" y2="33" marker-end="url(#arrow-q3)"/>
          <line class="ln" x1="170" y1="200" x2="63"  y2="35" marker-end="url(#arrow-q3)"/>

          <path class="arc" d="M200,200 A30,30 0 0 0 195.2,183.7"/>
          <line class="tick" x1="193.9" y1="192.9" x2="203.6" y2="190.1"/>
          <path class="arc" d="M195.2,183.7 A30,30 0 0 0 182.2,172.6"/>
          <line class="tick" x1="186.2" y1="181.0" x2="192.7" y2="173.4"/>

          <path class="arc" d="M187.1,161.6 A42,42 0 0 0 147.1,164.8"/>
          <line class="tick" x1="169.4" y1="163.0" x2="169.2" y2="153.0"/>
          <line class="tick" x1="164.9" y1="163.4" x2="163.5" y2="153.5"/>
          <path class="arc" d="M147.1,164.8 A42,42 0 0 0 128,200"/>
          <line class="tick" x1="138.6" y1="180.4" x2="130.1" y2="175.1"/>
          <line class="tick" x1="136.5" y1="184.4" x2="127.4" y2="180.1"/>

          <path class="arc" d="M360,60 A26,26 0 0 0 364.2,74.2"/>
          <text class="val" x="336" y="82" text-anchor="middle">x</text>
          <path class="arc" d="M93.2,81.8 A26,26 0 0 0 105,60"/>
          <text class="val" x="114" y="86" text-anchor="middle">y</text>

          <circle class="pt" cx="170" cy="200" r="3.2"/>
          <circle class="pt" cx="60"  cy="200" r="3.2"/>
          <circle class="pt" cx="420" cy="200" r="3.2"/>
          <circle class="pt" cx="79"  cy="60"  r="3.2"/>
          <circle class="pt" cx="232" cy="60"  r="3.2"/>
          <circle class="pt" cx="386" cy="60"  r="3.2"/>

          <text x="70"  y="78"  text-anchor="end">E</text>
          <text x="226" y="49"  text-anchor="end">C</text>
          <text x="392" y="49">D</text>
          <text x="54"  y="222" text-anchor="end">B</text>
          <text x="170" y="222" text-anchor="middle">O</text>
          <text x="420" y="222" text-anchor="middle">A</text>
        `,
    },
    given: [
      'ED // BA',
      '[OD, AOC açısının açıortayı',
      '[OE, BOC açısının açıortayı',
      'm(ODE) = x, m(OED) = y',
    ],
    stem: [],
    ask: 'Yukarıdaki şekilde y − x = 24° olduğuna göre, y kaç derecedir?',
    choices: [
      { key: 'A', text: '51' },
      { key: 'B', text: '54' },
      { key: 'C', text: '57' },
      { key: 'D', text: '60' },
      { key: 'E', text: '63' },
    ],
    answer: 'C',
    hint: 'Bir doğrusal açının iki parçasının açıortayları arasındaki açı her zaman 90°’dir.',
    solution: [
      {
        title: 'Doğrusal açıyı yaz',
        detail: 'B, O ve A noktaları doğrusal olduğundan m(BOC) + m(COA) = 180° olur.',
      },
      {
        title: 'Açıortayları kullan',
        detail:
          '[OE ışını BOC açısını iki eş parçaya ayırdığından m(EOC) = m(BOC) / 2, [OD ışını AOC açısını ayırdığından m(COD) = m(AOC) / 2 olur.',
      },
      {
        title: 'EOD açısını bul',
        detail:
          'm(EOD) = m(EOC) + m(COD) = [m(BOC) + m(AOC)] / 2 = 180 / 2 = 90° olur. Yani açıortaylar arasındaki açı diktir.',
      },
      {
        title: 'Üçgende açı toplamı',
        detail:
          'OED üçgeninde iç açılar toplamı 180° olduğundan x + y + 90 = 180 → x + y = 90 bulunur.',
      },
      {
        title: 'Sistemi çöz',
        detail:
          'x + y = 90 ve y − x = 24 denklemlerini taraf tarafa toplarsak 2y = 114 → y = 57° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'angles-4',
    topic: 'Paralel doğrular ve zikzak',
    figure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 4',
      label: 'CD ve AE ışınları paralel, aralarında C-B-A zikzağı bulunuyor.',
      svg: q4Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 340',
      caption: 'Şekil 4 — yardımcı çizim',
      label:
        'Aynı şekilde, kırılma noktası B’den [CD ve [AE ışınlarına paralel kesik çizgili [Bd yardımcı ışını çizilmiş; 100°’lik açı iki parçaya ayrılmıştır.',
      svg: q4Svg('s') + Q4_AUX_SVG,
    },
    given: ['[AE // [CD', 'm(DCB) = 145°', 'm(CBA) = 100°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '55' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'C',
    hint: 'Kırılma noktasından paralellere paralel bir ışın çiz; zikzak sorularının anahtarı budur.',
    solution: [
      {
        title: 'B’den paralel çiz',
        detail:
          'Kırılma noktası olan B’den, [CD ve [AE ışınlarına paralel bir [Bd ışını çizelim (çözüm şeklinde kesik çizgi ile gösterilmiştir). Böylece 100°’lik açı iki parçaya ayrılır.',
      },
      {
        title: 'Yan açıları kullan',
        detail:
          '[Bd // [CD olduğundan m(DCB) + m(CBd) = 180° olur. Buradan m(CBd) = 180 − 145 = 35° bulunur.',
      },
      {
        title: 'Açıyı parçala',
        detail: 'm(CBA) = m(CBd) + m(dBA) olduğundan 100 = 35 + m(dBA) → m(dBA) = 65° bulunur.',
      },
      {
        title: 'İç ters açı',
        detail:
          '[Bd // [AE olduğundan m(dBA) ile m(BAE) iç ters açılardır ve eşittir. Yani x = 65° olur.',
      },
      {
        title: 'Pratik yol',
        detail: 'Tek kırılmalı zikzakta: x = m(DCB) + m(CBA) − 180 = 145 + 100 − 180 = 65°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'angles-5',
    topic: 'Tümler ve bütünler açılar',
    stem: ['Bütünler iki açıdan birinin ölçüsü diğerinin ölçüsünün 4 katından 10° büyüktür.'],
    ask: 'Bu açıların ölçüleri farkı kaç derecedir?',
    choices: [
      { key: 'A', text: '106' },
      { key: 'B', text: '108' },
      { key: 'C', text: '110' },
      { key: 'D', text: '112' },
      { key: 'E', text: '114' },
    ],
    answer: 'D',
    hint: 'Küçük açıya x de, büyük açıyı x cinsinden yaz ve toplamlarının 180° olduğunu kullan.',
    solution: [
      {
        title: 'Bütünler açıyı yaz',
        detail: 'Ölçüleri toplamı 180° olan iki açıya bütünler açı denir.',
      },
      {
        title: 'Denklemi kur',
        detail:
          'Küçük açının ölçüsü x ise diğeri 4x + 10 olur. x + (4x + 10) = 180 → 5x + 10 = 180 → 5x = 170 → x = 34° bulunur.',
      },
      {
        title: 'Diğer açıyı bul',
        detail: '4 · 34 + 10 = 136 + 10 = 146° olur. Kontrol: 34 + 146 = 180 ✓',
      },
      {
        title: 'Farkı al',
        detail: '146 − 34 = 112° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'angles-6',
    topic: 'Paralel doğrular ve kesen',
    figure: {
      viewBox: '0 0 420 315',
      caption: 'Şekil 6',
      label: 'CD ile EB paralel doğruları ve bunları kesen, F noktasından geçen doğru.',
      svg: `
          <defs>
            <marker id="arrow-q6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="152" y1="50" x2="398" y2="50" marker-start="url(#arrow-q6)" marker-end="url(#arrow-q6)"/>
          <line class="ln" x1="32" y1="230" x2="392" y2="230" marker-start="url(#arrow-q6)" marker-end="url(#arrow-q6)"/>
          <line class="ln" x1="258" y1="13" x2="142" y2="302" marker-start="url(#arrow-q6)" marker-end="url(#arrow-q6)"/>

          <path class="par" d="M334,44 L341,50 L334,56"/>
          <path class="par" d="M274,224 L281,230 L274,236"/>

          <path class="arc" d="M273,50 A30,30 0 0 1 231.8,77.8"/>
          <text class="val" x="272" y="96">x + 4y</text>

          <path class="arc" d="M182,200.3 A32,32 0 0 0 138,230"/>
          <text class="val" x="128" y="184" text-anchor="middle">3x − 2y</text>

          <path class="arc" d="M140,230 A30,30 0 0 0 158.8,257.8"/>
          <text class="val" x="130" y="262" text-anchor="end">68°</text>

          <circle class="pt" cx="243" cy="50" r="3.2"/>
          <circle class="pt" cx="300" cy="50" r="3.2"/>
          <circle class="pt" cx="170" cy="230" r="3.2"/>
          <circle class="pt" cx="60"  cy="230" r="3.2"/>
          <circle class="pt" cx="330" cy="230" r="3.2"/>
          <circle class="pt" cx="150.5" cy="278" r="3.2"/>

          <text x="237" y="42" text-anchor="end">C</text>
          <text x="300" y="42" text-anchor="middle">D</text>
          <text x="186" y="250">A</text>
          <text x="54"  y="250" text-anchor="end">E</text>
          <text x="330" y="250" text-anchor="middle">B</text>
          <text x="142" y="294" text-anchor="end">F</text>
        `,
    },
    given: ['CD // EB', 'm(ACD) = x + 4y', 'm(EAC) = 3x − 2y', 'm(EAF) = 68°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x + y toplamı kaç derecedir?',
    choices: [
      { key: 'A', text: '56' },
      { key: 'B', text: '60' },
      { key: 'C', text: '64' },
      { key: 'D', text: '68' },
      { key: 'E', text: '72' },
    ],
    answer: 'C',
    hint: '68°’nin bütünleri sana 3x − 2y’yi verir; iç ters açılar da ikinci denklemi.',
    solution: [
      {
        title: 'Doğrusal açıdan birinci denklem',
        detail:
          'C, A ve F noktaları doğrusal olduğundan m(EAC) ile m(EAF) bütünler açılardır: m(EAC) = 180 − 68 = 112°. Buradan 3x − 2y = 112 elde edilir.',
      },
      {
        title: 'İç ters açılardan ikinci denklem',
        detail:
          'CD // EB ve CF kesen olduğundan m(ACD) ile m(EAC) iç ters açılardır ve eşittir: x + 4y = 3x − 2y.',
      },
      {
        title: 'İkinci denklemi sadeleştir',
        detail: 'x + 4y = 3x − 2y → 6y = 2x → x = 3y bulunur.',
      },
      {
        title: 'Yerine koy',
        detail:
          'x = 3y değerini 3x − 2y = 112 denkleminde yerine yazalım: 3 · 3y − 2y = 112 → 9y − 2y = 112 → 7y = 112 → y = 16 bulunur. Buradan x = 3 · 16 = 48 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x + y = 48 + 16 = 64° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 7
  {
    id: 'angles-7',
    topic: 'Paralel doğrular ve zikzak',
    figure: {
      viewBox: '0 0 420 356',
      caption: 'Şekil 7',
      label: 'BC ve DE paralel ışınları arasında A ve D köşeli bir zikzak.',
      svg: q7Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 420 356',
      caption: 'Şekil 7 — yardımcı çizim',
      label:
        'Aynı şekilde, A noktasından [BC ve [DE ile aynı yöne bakan kesik çizgili [Ad yardımcı ışını çizilmiştir.',
      svg: q7Svg('s') + Q7_AUX_SVG,
    },
    given: ['[BC // [DE', 'm(BAD) = 55°', 'm(EDA) = 65°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '110' },
      { key: 'B', text: '115' },
      { key: 'C', text: '120' },
      { key: 'D', text: '125' },
      { key: 'E', text: '130' },
    ],
    answer: 'C',
    hint: 'A’dan paralellerle aynı yöne bakan bir ışın çiz; kesenlerle oluşan iç açılar bütünlerdir.',
    solution: [
      {
        title: 'A’dan paralel çiz',
        detail:
          'A noktasından [BC ve [DE ile aynı yöne bakan [Ad ışınını çizelim. Böylece [Ad // [BC // [DE olur.',
      },
      {
        title: 'AD kesenini kullan',
        detail:
          '[Ad // [DE ve AD kesen olduğundan m(dAD) ile m(ADE) aynı yöndeki iç açılardır, yani bütünlerdir: m(dAD) = 180 − 65 = 115° bulunur.',
      },
      {
        title: 'BAD açısını çıkar',
        detail:
          '[AB ışını, [Ad ile [AD arasında kaldığından m(dAB) = m(dAD) − m(BAD) = 115 − 55 = 60° olur.',
      },
      {
        title: 'AB kesenini kullan',
        detail:
          '[Ad // [BC ve AB kesen olduğundan m(dAB) + m(ABC) = 180° olur. Buradan α = 180 − 60 = 120° bulunur.',
      },
      {
        title: 'Pratik yol',
        detail:
          'Bu tip tek kırılmalı şekillerde α = m(BAD) + m(EDA) = 55 + 65 = 120° kısayolu kullanılabilir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'angles-8',
    topic: 'Paralel doğrular ve zikzak',
    figure: {
      viewBox: '0 0 420 255',
      caption: 'Şekil 8',
      label:
        'BA ve CD paralel ışınları arasında K ve E tepe noktalı, iç içe geçmiş iki kırık çizgi.',
      svg: `
          <defs>
            <marker id="arrow-q8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="101.8" y1="25.5" x2="388.2" y2="25.5" marker-end="url(#arrow-q8)"/>
          <line class="ln" x1="101.8" y1="229.1" x2="388.2" y2="229.1" marker-end="url(#arrow-q8)"/>
          <path class="ln" d="M101.8,25.5 L160.6,127.3 L101.8,229.1"/>
          <path class="ln" d="M101.8,25.5 L223.1,127.3 L101.8,229.1"/>

          <path class="par" d="M353.8,17.8 L362.7,25.5 L353.8,33.1"/>
          <path class="par" d="M353.8,221.5 L362.7,229.1 L353.8,236.7"/>

          <path class="arc" d="M145.1,25.5 A43.3,43.3 0 0 1 134.9,53.3"/>
          <text class="val" x="162.9" y="52.2">2x</text>
          <path class="arc" d="M152.5,68 A66.2,66.2 0 0 1 134.9,82.7"/>
          <text class="val" x="160.4" y="96.7">x</text>

          <path class="arc" d="M152.5,186.6 A66.2,66.2 0 0 0 134.9,171.8"/>
          <text class="val" x="160.4" y="166.7">x</text>
          <path class="arc" d="M145.1,229.1 A43.3,43.3 0 0 0 134.9,201.2"/>
          <text class="val" x="162.9" y="212.5">2x</text>

          <path class="arc" d="M149.2,107.4 A22.9,22.9 0 0 0 149.2,147.1"/>
          <text class="val" x="143.8" y="133.6" text-anchor="end">120°</text>

          <path class="arc" d="M197.8,106 A33.1,33.1 0 0 0 197.8,148.5"/>
          <text class="val" x="185.8" y="134.9" text-anchor="middle">α</text>

          <circle class="pt" cx="101.8" cy="25.5" r="3.2"/>
          <circle class="pt" cx="101.8" cy="229.1" r="3.2"/>
          <circle class="pt" cx="318.2" cy="25.5" r="3.2"/>
          <circle class="pt" cx="318.2" cy="229.1" r="3.2"/>
          <circle class="pt" cx="160.6" cy="127.3" r="3.2"/>
          <circle class="pt" cx="223.1" cy="127.3" r="3.2"/>

          <text x="94.2" y="20.4" text-anchor="end">B</text>
          <text x="318.2" y="17.8" text-anchor="middle">A</text>
          <text x="94.2" y="241.8" text-anchor="end">C</text>
          <text x="318.2" y="246.9" text-anchor="middle">D</text>
          <text x="166.7" y="118.4">K</text>
          <text x="229.1" y="118.4">E</text>
        `,
    },
    given: ['[BA // [CD', 'm(ABE) = 2x, m(EBK) = x', 'm(KCE) = x, m(ECD) = 2x', 'm(BKC) = 120°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BEC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '85' },
      { key: 'C', text: '90' },
      { key: 'D', text: '95' },
      { key: 'E', text: '100' },
    ],
    answer: 'A',
    hint: 'Kırılma noktasındaki açı, paralellere bakan iki açının toplamıdır. Önce K için yaz.',
    solution: [
      {
        title: 'K için zikzak kuralı',
        detail:
          'K kırılma noktasından paralellere paralel bir ışın çizilirse m(BKC) = m(ABK) + m(KCD) olur.',
      },
      {
        title: 'Açıları x cinsinden yaz',
        detail:
          'm(ABK) = m(ABE) + m(EBK) = 2x + x = 3x ve m(KCD) = m(KCE) + m(ECD) = x + 2x = 3x olur.',
      },
      {
        title: 'x’i bul',
        detail: '3x + 3x = 120 → 6x = 120 → x = 20° bulunur.',
      },
      {
        title: 'Aynı kuralı E için yaz',
        detail: 'E de bir kırılma noktası olduğundan m(BEC) = m(ABE) + m(ECD) = 2x + 2x = 4x olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 4 · 20 = 80° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 9
  {
    id: 'angles-9',
    topic: 'Paralel doğrular ve zikzak',
    figure: {
      viewBox: '0 -3 420 183',
      caption: 'Şekil 9',
      label: 'AB ve CD paralel ışınları ile aşağıda kalan E kırılma noktası.',
      svg: q9Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 -3 420 183',
      caption: 'Şekil 9 — yardımcı çizim',
      label:
        'Aynı şekilde, E noktasından [AB ve [CD’ye paralel kesik çizgili d yardımcı doğrusu çizilmiştir.',
      svg: q9Svg('s') + Q9_AUX_SVG,
    },
    given: ['[AB // [CD', 'm(AEC) = 54°', 'm(BAE) = 5x', 'm(ECD) = 4x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '24' },
      { key: 'B', text: '26' },
      { key: 'C', text: '28' },
      { key: 'D', text: '30' },
      { key: 'E', text: '32' },
    ],
    answer: 'B',
    hint: 'E’den paralellere paralel bir doğru çiz; E’deki doğru açı üç parçaya ayrılır.',
    solution: [
      {
        title: 'E’den paralel çiz',
        detail:
          'E noktasından [AB ve [CD’ye paralel d doğrusunu çizelim. Bu doğrunun sola bakan ışınına [Ed′, sağa bakan ışınına [Ed diyelim.',
      },
      {
        title: 'Sol taraftaki açı',
        detail:
          '[Ed′ // [AB ve AE kesen olduğundan m(BAE) + m(d′EA) = 180° olur: m(d′EA) = 180 − 5x.',
      },
      {
        title: 'Sağ taraftaki açı',
        detail: '[Ed // [CD ve CE kesen olduğundan m(ECD) + m(dEC) = 180° olur: m(dEC) = 180 − 4x.',
      },
      {
        title: 'Doğru açıyı yaz',
        detail:
          'd bir doğru olduğundan m(d′EA) + m(AEC) + m(dEC) = 180° olur: (180 − 5x) + 54 + (180 − 4x) = 180.',
      },
      {
        title: 'Denklemi çöz',
        detail: '414 − 9x = 180 → 9x = 234 → x = 26° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 10
  {
    id: 'angles-10',
    topic: 'Paralel doğrular ve kesen',
    figure: {
      viewBox: '0 0 420 233',
      caption: 'Şekil 10',
      label: 'AE ve BD paralel ışınları ile B’den çıkan [BC ışını.',
      svg: `
          <defs>
            <marker id="arrow-q10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="81.7" y1="192.5" x2="315" y2="192.5"/>
          <line class="ln" x1="81.7" y1="192.5" x2="132.9" y2="35" marker-end="url(#arrow-q10)"/>
          <line class="ln" x1="315" y1="192.5" x2="366.2" y2="35" marker-end="url(#arrow-q10)"/>
          <line class="ln" x1="315" y1="192.5" x2="257.7" y2="35" marker-end="url(#arrow-q10)"/>

          <path class="par" d="M118,103.5 L114.1,92.4 L104.7,99.2"/>
          <path class="par" d="M351.3,103.5 L347.4,92.4 L338,99.2"/>

          <path class="arc" d="M116.7,192.5 A35,35 0 0 0 92.5,159.3"/>
          <text class="val" x="128.3" y="165.7">72°</text>

          <path class="arc" d="M301.5,155.3 A39.7,39.7 0 0 0 275.3,192.5"/>
          <text class="val" x="268.3" y="166.8" text-anchor="middle">α</text>

          <path class="arc" d="M332.3,139.2 A56,56 0 0 0 295.9,139.9"/>
          <text class="val" x="313.8" y="117.8" text-anchor="middle">38°</text>

          <circle class="pt" cx="81.7" cy="192.5" r="3.2"/>
          <circle class="pt" cx="315" cy="192.5" r="3.2"/>

          <text x="77" y="212.3" text-anchor="end">A</text>
          <text x="319.7" y="212.3">B</text>
          <text x="123.7" y="28" text-anchor="end">E</text>
          <text x="257.8" y="25.7" text-anchor="middle">C</text>
          <text x="375.7" y="30.3">D</text>
        `,
    },
    given: ['[AE // [BD', 'm(EAB) = 72°', 'm(CBD) = 38°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '55' },
      { key: 'B', text: '60' },
      { key: 'C', text: '65' },
      { key: 'D', text: '70' },
      { key: 'E', text: '75' },
    ],
    answer: 'D',
    hint: 'AB keseni ile oluşan iç açılar bütünlerdir; önce m(ABD)’yi bul, sonra 38°’yi çıkar.',
    solution: [
      {
        title: 'Keseni belirle',
        detail:
          '[AE // [BD ve AB doğrusu bu iki ışını kesen olduğundan m(EAB) ile m(ABD) aynı yöndeki iç açılardır, yani bütünlerdir.',
      },
      {
        title: 'ABD açısını bul',
        detail: 'm(ABD) = 180 − m(EAB) = 180 − 72 = 108° bulunur.',
      },
      {
        title: 'Açıyı parçala',
        detail:
          '[BC ışını ABD açısının içinde kaldığından m(ABD) = m(ABC) + m(CBD) yazılır: 108 = α + 38.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 108 − 38 = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 11
  {
    id: 'angles-11',
    topic: 'Paralel doğrular ve üçgen',
    figure: {
      viewBox: '0 0 420 280',
      caption: 'Şekil 11',
      label:
        'AB ile CD paralel doğruları, [AF ile [FE dik kesişiyor ve E tepe noktalı bir üçgen oluşuyor.',
      svg: `
          <defs>
            <marker id="arrow-q11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="116.7" y1="245" x2="390.8" y2="245" marker-end="url(#arrow-q11)"/>
          <line class="ln" x1="35" y1="93.3" x2="350" y2="93.3" marker-start="url(#arrow-q11)" marker-end="url(#arrow-q11)"/>
          <path class="ln" d="M116.7,245 L244,93.3 L163.6,25.8 L132.1,93.3"/>

          <path class="par" d="M368.7,238 L376.8,245 L368.7,252"/>
          <path class="par" d="M60.7,86.3 L52.5,93.3 L60.7,100.3"/>

          <path class="ln" d="M231.5,103.8 L219,93.3 L231.5,82.8"/>

          <path class="arc" d="M151.7,245 A35,35 0 0 0 139.2,218.2"/>
          <text class="val" x="163.3" y="228.7">50°</text>

          <path class="arc" d="M147.8,59.6 A37.3,37.3 0 0 0 192.2,49.8"/>
          <text class="val" x="175" y="84" text-anchor="middle">75°</text>

          <path class="arc" d="M145.8,63.7 A32.7,32.7 0 0 0 99.4,93.3"/>
          <text class="val" x="102.7" y="58.3" text-anchor="middle">x</text>

          <circle class="pt" cx="116.7" cy="245" r="3.2"/>
          <circle class="pt" cx="326.7" cy="245" r="3.2"/>
          <circle class="pt" cx="132.1" cy="93.3" r="3.2"/>
          <circle class="pt" cx="70" cy="93.3" r="3.2"/>
          <circle class="pt" cx="244" cy="93.3" r="3.2"/>
          <circle class="pt" cx="163.6" cy="25.8" r="3.2"/>

          <text x="112" y="264.8" text-anchor="end">A</text>
          <text x="326.7" y="264.8" text-anchor="middle">B</text>
          <text x="126" y="112" text-anchor="end">C</text>
          <text x="70" y="112" text-anchor="middle">D</text>
          <text x="163.3" y="16.3" text-anchor="middle">E</text>
          <text x="250.8" y="112">F</text>
        `,
    },
    given: ['[AB // [CD', '[AF ⊥ [FE', 'm(FAB) = 50°', 'm(CEF) = 75°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ECD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '105' },
      { key: 'C', text: '110' },
      { key: 'D', text: '115' },
      { key: 'E', text: '120' },
    ],
    answer: 'D',
    hint: 'F’deki dik açı, iç ters açı ile EFC açısının toplamıdır. Sonra ECF üçgenini yaz.',
    solution: [
      {
        title: 'İç ters açıyı yaz',
        detail:
          '[AB // [CD ve AF kesen olduğundan m(FAB) ile m(AFD) iç ters açılardır: m(AFD) = 50° olur.',
      },
      {
        title: 'Dik açıyı parçala',
        detail:
          '[FD ışını, [FA ile [FE arasında kaldığından m(AFD) + m(EFC) = m(AFE) = 90° olur. Buradan m(EFC) = 90 − 50 = 40° bulunur.',
      },
      {
        title: 'ECF üçgeninde topla',
        detail:
          'ECF üçgeninde iç açılar toplamı 180° olduğundan m(ECF) = 180 − m(CEF) − m(EFC) = 180 − 75 − 40 = 65° bulunur.',
      },
      {
        title: 'Bütünler açı',
        detail:
          'C noktası D ile F arasında olduğundan m(ECD) ile m(ECF) bütünlerdir: x = 180 − 65 = 115° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 12
  {
    id: 'angles-12',
    topic: 'Paralel doğrular ve zikzak',
    figure: {
      viewBox: '0 0 420 252',
      caption: 'Şekil 12',
      label: 'AL ve CM paralel ışınları ile B köşeli KBN açısı.',
      svg: q12Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 420 252',
      caption: 'Şekil 12 — yardımcı çizim',
      label:
        'Aynı şekilde, B noktasından [AL ve [CM’ye paralel kesik çizgili [Bd yardımcı ışını çizilmiştir.',
      svg: q12Svg('s') + Q12_AUX_SVG,
    },
    given: ['[AL // [CM', 'A ∈ [BK ve C ∈ [BN', 'm(KAL) = 58°', 'm(MCN) = 46°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(KBN) kaç derecedir?',
    choices: [
      { key: 'A', text: '96' },
      { key: 'B', text: '100' },
      { key: 'C', text: '104' },
      { key: 'D', text: '108' },
      { key: 'E', text: '112' },
    ],
    answer: 'C',
    hint: 'B’den paralellere paralel bir ışın çizersen aranan açı iki yöndeş açının toplamı olur.',
    solution: [
      {
        title: 'B’den paralel çiz',
        detail:
          'B noktasından [AL ve [CM ile aynı yöne bakan [Bd ışınını çizelim. Böylece [Bd // [AL // [CM olur.',
      },
      {
        title: 'Üstteki yöndeş açı',
        detail:
          '[Bd // [AL ve BK kesen olduğundan m(dBK) ile m(KAL) yöndeş açılardır: m(dBK) = 58° olur.',
      },
      {
        title: 'Alttaki yöndeş açı',
        detail:
          '[Bd // [CM ve BN kesen olduğundan m(dBN) ile m(MCN) yöndeş açılardır: m(dBN) = 46° olur.',
      },
      {
        title: 'Parçaları topla',
        detail:
          '[Bd ışını KBN açısının içinde kaldığından m(KBN) = m(dBK) + m(dBN) = 58 + 46 = 104° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 13
  {
    id: 'angles-13',
    topic: 'Dik açı ve dik üçgen',
    figure: {
      viewBox: '0 0 400 278',
      caption: 'Şekil 13',
      label:
        'K noktasından çıkan iki ışın, D’de dik kesişen AD dikmesi ve B’de dik kesişen TB doğrusu.',
      svg: `
          <defs>
            <marker id="arrow-q13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="110" y1="255" x2="300" y2="255" marker-end="url(#arrow-q13)"/>
          <line class="ln" x1="110" y1="255" x2="259.2" y2="42" marker-end="url(#arrow-q13)"/>
          <line class="ln" x1="146.8" y1="17.7" x2="265.5" y2="100.9" marker-start="url(#arrow-q13)" marker-end="url(#arrow-q13)"/>
          <line class="ln" x1="200" y1="55" x2="200" y2="255"/>

          <path class="ln" d="M188,255 L188,243 L200,243"/>
          <path class="ln" d="M224.7,72.3 L218.4,81.3 L227.4,87.6"/>

          <path class="arc" d="M144,255 A34,34 0 0 0 129.5,227.1"/>
          <text class="val" x="172" y="228" text-anchor="middle">3x − 5</text>

          <path class="arc" d="M175.4,37.8 A30,30 0 0 0 200,85"/>
          <text class="val" x="140" y="90" text-anchor="middle">5x + 25</text>

          <circle class="pt" cx="110" cy="255" r="3.2"/>
          <circle class="pt" cx="200" cy="255" r="3.2"/>
          <circle class="pt" cx="200" cy="55" r="3.2"/>
          <circle class="pt" cx="200" cy="126.6" r="3.2"/>
          <circle class="pt" cx="233.7" cy="78.6" r="3.2"/>

          <text x="134" y="22" text-anchor="end">T</text>
          <text x="207" y="50">A</text>
          <text x="249" y="78">B</text>
          <text x="192" y="131" text-anchor="end">C</text>
          <text x="106" y="272" text-anchor="end">K</text>
          <text x="203" y="272">D</text>
        `,
    },
    given: ['AB ⊥ CB', '[AD] ⊥ [KD', 'm(TAC) = 5x + 25', 'm(CKD) = 3x − 5'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(TAC) kaç derecedir?',
    choices: [
      { key: 'A', text: '125' },
      { key: 'B', text: '130' },
      { key: 'C', text: '135' },
      { key: 'D', text: '140' },
      { key: 'E', text: '145' },
    ],
    answer: 'A',
    hint: 'C noktasında ters açılar var: KDC ve ABC dik üçgenlerinin dar açılarını birbirine bağla.',
    solution: [
      {
        title: 'Şekli oku',
        detail:
          'C noktası hem [AD] hem de [KB üzerindedir. Yani KDC üçgeni D’de, ABC üçgeni de B’de dik açılıdır.',
      },
      {
        title: 'KDC dik üçgeninde',
        detail:
          'Bir dik üçgende dar açıların toplamı 90° olduğundan m(KCD) = 90 − m(CKD) = 90 − (3x − 5) = 95 − 3x bulunur.',
      },
      {
        title: 'Ters açıyı kullan',
        detail:
          'KB ile AD doğruları C’de kesiştiğinden m(ACB) ile m(KCD) ters açılardır ve eşittir: m(ACB) = 95 − 3x olur.',
      },
      {
        title: 'A köşesindeki doğru açı',
        detail:
          'T, A, B doğrusal olduğundan m(TAC) ile m(CAB) bütünlerdir: m(CAB) = 180 − (5x + 25) = 155 − 5x bulunur.',
      },
      {
        title: 'ABC dik üçgeninde',
        detail:
          'm(CAB) + m(ACB) = 90 olduğundan (155 − 5x) + (95 − 3x) = 90 → 250 − 8x = 90 → 8x = 160 → x = 20 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(TAC) = 5 · 20 + 25 = 125° bulunur.',
      },
      {
        title: 'Pratik yol',
        detail:
          'Yukarıdaki adımlar sadeleştirilirse m(TAC) + m(CKD) = 180 olur. Yani (5x + 25) + (3x − 5) = 180 → 8x + 20 = 180 → x = 20 doğrudan bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 14
  {
    id: 'angles-14',
    topic: 'Doğrusal açı',
    figure: {
      viewBox: '0 0 340 138',
      caption: 'Şekil 14',
      label: 'A, O, B doğrusu ve O noktasından çıkan OC, OD, OF, OE ışınları.',
      svg: `
          <defs>
            <marker id="arrow-q14" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="25" y1="100" x2="315" y2="100" marker-start="url(#arrow-q14)" marker-end="url(#arrow-q14)"/>
          <line class="ln" x1="170" y1="100" x2="55.2" y2="39" marker-end="url(#arrow-q14)"/>
          <line class="ln" x1="170" y1="100" x2="84.5" y2="23.1" marker-end="url(#arrow-q14)"/>
          <line class="ln" x1="170" y1="100" x2="255.5" y2="23.1" marker-end="url(#arrow-q14)"/>
          <line class="ln" x1="170" y1="100" x2="284.8" y2="39" marker-end="url(#arrow-q14)"/>

          <path class="arc" d="M136,100 A34,34 0 0 1 140,84"/>
          <text class="val" x="118" y="93" text-anchor="middle">2n</text>
          <path class="arc" d="M95,60.1 A85,85 0 0 1 106.8,43.1"/>
          <text class="val" x="82" y="45" text-anchor="middle">m</text>
          <path class="arc" d="M144.7,77.2 A34,34 0 0 1 195.3,77.2"/>
          <text class="val" x="170" y="50" text-anchor="middle">96°</text>
          <path class="arc" d="M233.2,43.1 A85,85 0 0 1 245,60.1"/>
          <text class="val" x="258" y="45" text-anchor="middle">n</text>
          <path class="arc" d="M200,84 A34,34 0 0 1 204,100"/>
          <text class="val" x="222" y="93" text-anchor="middle">2m</text>

          <circle class="pt" cx="170" cy="100" r="3.2"/>
          <circle class="pt" cx="40" cy="100" r="3.2"/>
          <circle class="pt" cx="300" cy="100" r="3.2"/>

          <text x="40" y="120" text-anchor="middle">A</text>
          <text x="170" y="122" text-anchor="middle">O</text>
          <text x="300" y="120" text-anchor="middle">B</text>
          <text x="48" y="32" text-anchor="end">C</text>
          <text x="80" y="16" text-anchor="end">D</text>
          <text x="261" y="16">F</text>
          <text x="291" y="34">E</text>
        `,
    },
    given: [
      'A, O, B doğrusal',
      'm(DOF) = 96°',
      'm(AOC) = 2n, m(COD) = m',
      'm(FOE) = n, m(EOB) = 2m',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(COE) kaç derecedir?',
    choices: [
      { key: 'A', text: '112' },
      { key: 'B', text: '118' },
      { key: 'C', text: '124' },
      { key: 'D', text: '130' },
      { key: 'E', text: '136' },
    ],
    answer: 'C',
    hint: 'm ve n’yi ayrı ayrı bulmaya çalışma; doğru açıdan yalnızca m + n toplamı gerekiyor.',
    solution: [
      {
        title: 'Doğru açıyı yaz',
        detail:
          'A, O, B doğrusal olduğundan [OA ile [OB arasındaki tüm açı parçalarının toplamı 180°’dir: m(AOC) + m(COD) + m(DOF) + m(FOE) + m(EOB) = 180.',
      },
      {
        title: 'Verileri yerine koy',
        detail: '2n + m + 96 + n + 2m = 180 → 3m + 3n = 84 bulunur.',
      },
      {
        title: 'Toplamı sadeleştir',
        detail:
          'Her iki tarafı 3’e bölersek m + n = 28 elde edilir. m ve n’nin tek tek değerine ihtiyaç yoktur.',
      },
      {
        title: 'Aranan açıyı parçala',
        detail:
          '[OD ve [OF ışınları COE açısının içinde kaldığından m(COE) = m(COD) + m(DOF) + m(FOE) = m + 96 + n olur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(COE) = (m + n) + 96 = 28 + 96 = 124° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'angles-15',
    topic: 'Saatte akrep ve yelkovan',
    stem: ['Saat 3.25’te akreple yelkovan arasındaki dar açının ölçüsü kaç derecedir?'],
    choices: [
      { key: 'A', text: '42,5' },
      { key: 'B', text: '47,5' },
      { key: 'C', text: '52,5' },
      { key: 'D', text: '57,5' },
      { key: 'E', text: '62,5' },
    ],
    answer: 'B',
    hint: 'Akrep de dakikalar boyunca ilerler: her dakikada 0,5° yol alır. Bunu unutma.',
    solution: [
      {
        title: 'Hızları belirle',
        detail:
          'Yelkovan 60 dakikada tam turu (360°) attığından dakikada 360 / 60 = 6° döner. Akrep ise 12 saatte tam tur attığından saatte 30°, dakikada 30 / 60 = 0,5° döner.',
      },
      {
        title: 'Başlangıcı seç',
        detail: 'İki kolun da 12 rakamını gösterdiği konumu 0° kabul edelim.',
      },
      {
        title: 'Akrebin konumu',
        detail:
          'Akrep 3 tam saat + 25 dakika ilerlemiştir: 3 · 30 + 25 · 0,5 = 90 + 12,5 = 102,5° olur.',
      },
      {
        title: 'Yelkovanın konumu',
        detail: 'Yelkovan 25 dakika ilerlemiştir: 25 · 6 = 150° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Aralarındaki açı 150 − 102,5 = 47,5° bulunur. 90°’den küçük olduğundan aranan dar açı budur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'angles-16',
    topic: 'Dik açı ve dik üçgen',
    figure: {
      viewBox: '0 0 350 210',
      caption: 'Şekil 16',
      label: 'B’de dik açılı ABC üçgeni, B’den çıkan dikey [BD ışını ve A’dan çıkan [AE ışını.',
      svg: `
          <defs>
            <marker id="arrow-q16" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="60" y1="180" x2="335" y2="180" marker-end="url(#arrow-q16)"/>
          <line class="ln" x1="60" y1="180" x2="60" y2="25" marker-end="url(#arrow-q16)"/>
          <line class="ln" x1="60" y1="140" x2="287" y2="180"/>
          <line class="ln" x1="60" y1="140" x2="210.4" y2="85.3" marker-end="url(#arrow-q16)"/>

          <path class="ln" d="M72,180 L72,168 L60,168"/>

          <path class="arc" d="M90.1,129.1 A32,32 0 0 0 60,108"/>
          <text class="val" x="89" y="105" text-anchor="middle">70°</text>
          <path class="arc" d="M105.3,148 A46,46 0 0 0 103.2,124.3"/>
          <text class="val" x="122" y="139">3α</text>
          <path class="arc" d="M60,170 A30,30 0 0 0 89.5,145.2"/>
          <text class="val" x="88" y="178" text-anchor="middle">x</text>
          <path class="arc" d="M251.5,173.7 A36,36 0 0 0 251,180"/>
          <text class="val" x="243" y="162" text-anchor="middle">α</text>

          <circle class="pt" cx="60" cy="180" r="3.2"/>
          <circle class="pt" cx="287" cy="180" r="3.2"/>
          <circle class="pt" cx="60" cy="140" r="3.2"/>
          <circle class="pt" cx="60" cy="40" r="3.2"/>

          <text x="54" y="196" text-anchor="end">B</text>
          <text x="287" y="198" text-anchor="middle">C</text>
          <text x="52" y="145" text-anchor="end">A</text>
          <text x="52" y="36" text-anchor="end">D</text>
          <text x="216" y="82">E</text>
        `,
    },
    given: ['m(DBC) = 90°', 'm(DAE) = 70°', 'm(BCA) = α', 'm(EAC) = 3α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '65' },
      { key: 'B', text: '70' },
      { key: 'C', text: '75' },
      { key: 'D', text: '80' },
      { key: 'E', text: '85' },
    ],
    answer: 'D',
    hint: 'A noktası [BD üzerinde: A’daki üç açı bir doğru açı oluşturur. İkinci denklemi dik üçgenden al.',
    solution: [
      {
        title: 'Dik üçgeni yaz',
        detail:
          'A noktası [BD ışını üzerinde olduğundan m(ABC) = m(DBC) = 90°’dir. Yani ABC üçgeni B’de dik açılıdır.',
      },
      {
        title: 'Birinci denklem',
        detail: 'Dik üçgende dar açıların toplamı 90° olduğundan x + α = 90 olur.',
      },
      {
        title: 'A’daki doğru açı',
        detail:
          'B, A, D doğrusal olduğundan A’da oluşan doğru açı üç parçaya ayrılır: m(DAE) + m(EAC) + m(CAB) = 180.',
      },
      {
        title: 'İkinci denklem',
        detail: 'Verileri yerine koyalım: 70 + 3α + x = 180 → 3α + x = 110 bulunur.',
      },
      {
        title: 'Sistemi çöz',
        detail:
          '3α + x = 110 denkleminden α + x = 90 denklemini çıkarırsak 2α = 20 → α = 10 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 90 − α = 90 − 10 = 80° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'angles-17',
    topic: 'Paralel doğrular ve zikzak',
    figure: {
      viewBox: '0 0 350 175',
      caption: 'Şekil 17',
      label:
        'AE ile CD paralel ışınları, BC ile DE paralel doğru parçaları ve B köşeli kırık çizgi.',
      svg: q17Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 350 175',
      caption: 'Şekil 17 — yardımcı çizim',
      label:
        'Aynı şekilde, kırılma noktası B’den [AE ve [CD ile aynı yöne bakan kesik çizgili [Bd yardımcı ışını çizilmiştir.',
      svg: q17Svg('s') + Q17_AUX_SVG,
    },
    given: ['[AE // [CD', '[BC] // [DE]', 'm(BAE) = 115°', 'm(ABC) = 30°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AED) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' },
      { key: 'E', text: '35' },
    ],
    answer: 'E',
    hint: 'B’den paralellere paralel bir ışın çiz, m(BCD)’yi bul; ikinci paralellik seni D’den E’ye taşır.',
    solution: [
      {
        title: 'B’den paralel çiz',
        detail:
          'Kırılma noktası B’den, [AE ve [CD ile aynı yöne bakan [Bd ışınını çizelim (çözüm şeklinde kesik çizgi ile gösterilmiştir). Böylece [Bd // [AE // [CD olur.',
      },
      {
        title: 'AB kesenini kullan',
        detail:
          '[Bd // [AE ve AB kesen olduğundan m(BAE) + m(ABd) = 180° olur: m(ABd) = 180 − 115 = 65° bulunur.',
      },
      {
        title: 'dBC açısını bul',
        detail:
          '[BC ışını, [BA ile [Bd arasında kaldığından m(dBC) = m(ABd) − m(ABC) = 65 − 30 = 35° olur.',
      },
      {
        title: 'BC kesenini kullan',
        detail:
          '[Bd // [CD ve BC kesen olduğundan m(dBC) ile m(BCD) aynı yöndeki iç açılardır, yani bütünlerdir: m(BCD) = 180 − 35 = 145° bulunur.',
      },
      {
        title: 'İkinci paralelliği kullan',
        detail:
          '[BC] // [DE] ve CD kesen olduğundan m(BCD) ile m(CDE) iç ters açılardır ve eşittir: m(CDE) = 145° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[AE // [CD ve DE kesen olduğundan m(CDE) + m(AED) = 180° olur: x = 180 − 145 = 35° bulunur.',
      },
      {
        title: 'Pratik yol',
        detail:
          'Bu adımlar sadeleştirilirse x = 180 − m(BAE) − m(ABC) = 180 − 115 − 30 = 35° kısayolu elde edilir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'angles-18',
    topic: 'Kenarları dik açılar',
    figure: {
      viewBox: '-85 0 400 250',
      caption: 'Şekil 18',
      label: 'AB ile CD paralel ışınları, [AB’ye dik olan [EK ve [AC]’ye dik olan [EL ışınları.',
      svg: `
          <defs>
            <marker id="arrow-q18" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="30" y1="220" x2="30" y2="45" marker-end="url(#arrow-q18)"/>
          <line class="ln" x1="203.2" y1="120" x2="203.2" y2="14" marker-end="url(#arrow-q18)"/>
          <line class="ln" x1="30" y1="220" x2="203.2" y2="120"/>
          <line class="ln" x1="30" y1="140" x2="90" y2="140"/>
          <line class="ln" x1="90" y1="140" x2="121.4" y2="194.4" marker-end="url(#arrow-q18)"/>

          <path class="ln" d="M42,140 L42,152 L30,152"/>
          <path class="ln" d="M103.6,163.6 L114,157.6 L120,168"/>

          <path class="arc" d="M59.4,203 A34,34 0 0 0 30,186"/>
          <path class="arc" d="M203.2,86 A34,34 0 0 0 173.8,137"/>
          <path class="arc" d="M58,140 A32,32 0 0 0 106,167.7"/>
          <text class="val" x="49" y="158" text-anchor="middle">x</text>

          <circle class="pt" cx="30" cy="220" r="3.2"/>
          <circle class="pt" cx="30" cy="70" r="3.2"/>
          <circle class="pt" cx="30" cy="140" r="3.2"/>
          <circle class="pt" cx="90" cy="140" r="3.2"/>
          <circle class="pt" cx="109.6" cy="174" r="3.2"/>
          <circle class="pt" cx="203.2" cy="120" r="3.2"/>
          <circle class="pt" cx="203.2" cy="30" r="3.2"/>

          <text x="24" y="236" text-anchor="end">A</text>
          <text x="24" y="66" text-anchor="end">B</text>
          <text x="24" y="136" text-anchor="end">K</text>
          <text x="86" y="132" text-anchor="end">E</text>
          <text x="124" y="185">L</text>
          <text x="211" y="126">C</text>
          <text x="211" y="26">D</text>
        `,
    },
    given: ['[AB // [CD', '[AB ⊥ [EK', '[EL ⊥ [AC]'],
    stem: [],
    ask: 'Yukarıdaki şekilde m(ACD) = 2 · m(BAC) olduğuna göre, m(KEL) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '110' },
      { key: 'C', text: '120' },
      { key: 'D', text: '130' },
      { key: 'E', text: '140' },
    ],
    answer: 'C',
    hint: 'Önce m(BAC)’yi bul. Sonra AKEL dörtgeninde iki dik açı olduğunu kullan.',
    solution: [
      {
        title: 'Paralellikten denklem kur',
        detail:
          '[AB // [CD ve AC kesen olduğundan m(BAC) ile m(ACD) aynı yöndeki iç açılardır, yani bütünlerdir: m(BAC) + m(ACD) = 180°.',
      },
      {
        title: 'BAC açısını bul',
        detail:
          'm(BAC) = a dersek m(ACD) = 2a olur. a + 2a = 180 → 3a = 180 → a = 60°, yani m(BAC) = 60° bulunur.',
      },
      {
        title: 'Dörtgeni belirle',
        detail:
          'K noktası [AB üzerinde, L noktası [AC] üzerinde olduğundan A, K, E, L noktaları bir dörtgen oluşturur ve bu dörtgenin A köşesindeki açısı m(KAL) = m(BAC) = 60°’dir.',
      },
      {
        title: 'Dik açıları yerleştir',
        detail:
          '[EK ⊥ [AB olduğundan K köşesindeki açı 90°, [EL ⊥ [AC] olduğundan L köşesindeki açı 90° olur.',
      },
      {
        title: 'Dörtgende açı toplamı',
        detail:
          'Bir dörtgenin iç açıları toplamı 360° olduğundan x = 360 − 60 − 90 − 90 = 120° bulunur.',
      },
      {
        title: 'Pratik yol',
        detail:
          'Kolları karşılıklı dik olan iki açı ya eşittir ya da bütünlerdir. KEL açısının kolları BAC açısının kollarına dik olduğundan x = 180 − 60 = 120° doğrudan yazılabilir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 19
  {
    id: 'angles-19',
    topic: 'Tümler ve bütünler açılar',
    stem: ['Bir açı tümlerinden 26° büyük ise, bu açı kaç derecedir?'],
    choices: [
      { key: 'A', text: '58' },
      { key: 'B', text: '60' },
      { key: 'C', text: '62' },
      { key: 'D', text: '64' },
      { key: 'E', text: '66' },
    ],
    answer: 'A',
    hint: 'Açıya x dersen tümleri 90 − x olur. "26° büyük" ifadesini denkleme çevir.',
    solution: [
      {
        title: 'Tümleri yaz',
        detail:
          'Aranan açının ölçüsü x ise, tümleri 90 − x olur (ölçüleri toplamı 90° olan iki açı tümlerdir).',
      },
      {
        title: 'Denklemi kur',
        detail: 'Açı, tümlerinden 26° büyük olduğundan x = (90 − x) + 26 yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'x = 116 − x → 2x = 116 → x = 58° bulunur.',
      },
      {
        title: 'Kontrol et',
        detail: 'Tümleri 90 − 58 = 32°’dir ve 58 − 32 = 26 ✓',
      },
    ],
  },

  // ---------------------------------------------------------------- 20
  {
    id: 'angles-20',
    topic: 'Tümler ve bütünler açılar',
    stem: [
      'Bir açının kendisi, bütünleri ve tümlerinin ölçüleri toplamı 214° ise bu açının ölçüsü kaç derecedir?',
    ],
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '52' },
      { key: 'C', text: '54' },
      { key: 'D', text: '56' },
      { key: 'E', text: '58' },
    ],
    answer: 'D',
    hint: 'Üç ifadeyi de x cinsinden yazıp topla; x’lerin çoğu birbirini götürür.',
    solution: [
      {
        title: 'Üç ifadeyi de yaz',
        detail: 'Açının ölçüsü x olsun. Bütünleri 180 − x, tümleri 90 − x olur.',
      },
      {
        title: 'Toplamı kur',
        detail: 'x + (180 − x) + (90 − x) = 214 yazılır.',
      },
      {
        title: 'Sadeleştir',
        detail: 'Sol tarafta x + 180 − x + 90 − x = 270 − x kalır. Yani 270 − x = 214 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 270 − 214 = 56° bulunur.',
      },
      {
        title: 'Kontrol et',
        detail: '56 + 124 + 34 = 214 ✓',
      },
    ],
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'angles-21',
    topic: 'Paralel doğrular ve zikzak',
    figure: {
      viewBox: '0 -4 330 138',
      caption: 'Şekil 21',
      label: 'AE ve CD paralel ışınları ve aşağıda kalan B kırılma noktasıyla A-B-C kırık çizgisi.',
      svg: q21Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 -4 330 138',
      caption: 'Şekil 21 — yardımcı çizim',
      label:
        'Aynı şekilde, kırılma noktası B’den [CD ile aynı yöne bakan kesik çizgili [Bd yardımcı ışını çizilmiştir.',
      svg: q21Svg('s') + Q21_AUX_SVG,
    },
    given: ['[AE // [CD', 'm(EAB) = 140°', 'm(ABC) = 3x', 'm(BCD) = 5x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '50' },
      { key: 'C', text: '60' },
      { key: 'D', text: '70' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'Kırılma noktası paralellerin arasında değil, altında. Yine de çözüm aynı: B’den paralel çiz.',
    solution: [
      {
        title: 'B’den paralel çiz',
        detail:
          'Kırılma noktası B’den, [CD ile aynı yöne bakan [Bd ışınını çizelim (çözüm şeklinde kesik çizgi ile gösterilmiştir). Böylece [Bd // [AE // [CD olur.',
      },
      {
        title: 'AB kesenini kullan',
        detail:
          '[AE sola, [Bd sağa baktığından m(EAB) ile m(ABd) iç ters açılardır ve eşittir: m(ABd) = 140° bulunur.',
      },
      {
        title: 'dBC açısını bul',
        detail:
          '[BC ışını, [Bd ile [BA arasında kaldığından m(dBC) = m(ABd) − m(ABC) = 140 − 3x olur.',
      },
      {
        title: 'BC kesenini kullan',
        detail:
          '[Bd // [CD ve BC kesen olduğundan m(dBC) ile m(BCD) aynı yöndeki iç açılardır, yani bütünlerdir: (140 − 3x) + 5x = 180.',
      },
      {
        title: 'Denklemi çöz',
        detail: '140 + 2x = 180 → 2x = 40 → x = 20 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(ABC) = 3x = 3 · 20 = 60° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 22
  {
    id: 'angles-22',
    topic: 'Açıortay',
    stem: [
      'Ölçüleri toplamı 76° olan iki komşu açının açıortaylarının oluşturduğu açının ölçüsü kaç derecedir?',
    ],
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '32' },
      { key: 'C', text: '34' },
      { key: 'D', text: '36' },
      { key: 'E', text: '38' },
    ],
    answer: 'E',
    hint: 'İki açıya a ve b de. Açıortaylar arasındaki açı hangi parçalardan oluşuyor?',
    solution: [
      {
        title: 'Açıları adlandır',
        detail:
          'Ortak kenarı olan komşu açılara m(AOB) = a ve m(BOC) = b diyelim. Verilene göre a + b = 76°’dir.',
      },
      {
        title: 'Açıortayları çiz',
        detail:
          'AOB açısının açıortayı [OK, BOC açısının açıortayı [OL olsun. Açıortay bir açıyı iki eş parçaya ayırdığından m(KOB) = a / 2 ve m(BOL) = b / 2 olur.',
      },
      {
        title: 'Aranan açıyı parçala',
        detail:
          'Ortak kenar [OB, iki açıortayın arasında kaldığından m(KOL) = m(KOB) + m(BOL) = a / 2 + b / 2 yazılır.',
      },
      {
        title: 'Sonuç',
        detail: 'm(KOL) = (a + b) / 2 = 76 / 2 = 38° bulunur.',
      },
      {
        title: 'Kuralı aklında tut',
        detail:
          'İki komşu açının açıortayları arasındaki açı, her zaman bu iki açının toplamının yarısıdır. Toplam 180° olsaydı sonuç 90° çıkardı.',
      },
    ],
  },

  // ---------------------------------------------------------------- 23
  {
    id: 'angles-23',
    topic: 'Doğrusal açı',
    figure: {
      viewBox: '0 0 340 162',
      caption: 'Şekil 23',
      label: 'A, K, B doğrusu üzerindeki K noktasından çıkan KC, KD ve KE ışınları.',
      svg: `
          <defs>
            <marker id="arrow-q23" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="30" y1="135" x2="310" y2="135" marker-start="url(#arrow-q23)" marker-end="url(#arrow-q23)"/>
          <line class="ln" x1="170" y1="135" x2="118.4" y2="37.9" marker-end="url(#arrow-q23)"/>
          <line class="ln" x1="170" y1="135" x2="199.8" y2="23.9" marker-end="url(#arrow-q23)"/>
          <line class="ln" x1="170" y1="135" x2="267.1" y2="83.4" marker-end="url(#arrow-q23)"/>

          <path class="ln" d="M163.9,123.5 L175.4,117.4 L181.5,128.9"/>

          <path class="arc" d="M153.1,103.2 A36,36 0 0 0 134,135"/>
          <text class="val" x="123" y="112" text-anchor="middle">x</text>

          <path class="arc" d="M206,135 A36,36 0 0 0 201.8,118.1"/>
          <text class="val" x="224" y="127">28°</text>

          <circle class="pt" cx="170" cy="135" r="3.2"/>
          <circle class="pt" cx="50" cy="135" r="3.2"/>
          <circle class="pt" cx="290" cy="135" r="3.2"/>

          <text x="50" y="153" text-anchor="middle">A</text>
          <text x="170" y="153" text-anchor="middle">K</text>
          <text x="290" y="153" text-anchor="middle">B</text>
          <text x="112" y="32" text-anchor="end">C</text>
          <text x="199.8" y="16" text-anchor="middle">D</text>
          <text x="275" y="79">E</text>
        `,
    },
    given: ['A, K, B doğrusal', '[KC ⊥ [KE', 'm(EKB) = 28°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AKC) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '62' },
      { key: 'C', text: '64' },
      { key: 'D', text: '66' },
      { key: 'E', text: '68' },
    ],
    answer: 'B',
    hint: 'K’de doğru açı 180°. [KA’dan [KB’ye giderken hangi üç açının üzerinden geçiyorsun?',
    solution: [
      {
        title: 'Doğru açıyı belirle',
        detail: 'A, K, B doğrusal olduğundan [KA ile [KB ters ışınlardır ve m(AKB) = 180°’dir.',
      },
      {
        title: 'Dik açıyı yerleştir',
        detail:
          '[KC ⊥ [KE verildiğinden m(CKE) = 90°’dir. Şekilde [KD ışını bu dik açının içinde kalır, yani m(CKE)’yi değiştirmez.',
      },
      {
        title: 'Doğru açıyı parçala',
        detail:
          '[KC ve [KE ışınları AKB doğru açısının içinde olduğundan m(AKC) + m(CKE) + m(EKB) = 180 yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'x + 90 + 28 = 180 → x + 118 = 180 → x = 62° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 24
  {
    id: 'angles-24',
    topic: 'Doğrusal açı',
    figure: {
      viewBox: '0 0 320 205',
      caption: 'Şekil 24',
      label: 'A noktasında dik kesişen BA ve CA doğruları ile aynı noktadan geçen E, A, D doğrusu.',
      svg: `
          <defs>
            <marker id="arrow-q24" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="30" y1="105" x2="290" y2="105" marker-start="url(#arrow-q24)" marker-end="url(#arrow-q24)"/>
          <line class="ln" x1="160" y1="15" x2="160" y2="190" marker-start="url(#arrow-q24)" marker-end="url(#arrow-q24)"/>
          <line class="ln" x1="79.1" y1="46.2" x2="240.9" y2="163.8" marker-start="url(#arrow-q24)" marker-end="url(#arrow-q24)"/>

          <path class="ln" d="M147,105 L147,118 L160,118"/>

          <path class="arc" d="M130.9,83.8 A36,36 0 0 0 124,105"/>
          <text class="val" x="106" y="93" text-anchor="middle">2x</text>

          <path class="arc" d="M160,141 A36,36 0 0 0 189.1,126.2"/>
          <text class="val" x="190" y="158" text-anchor="middle">3x</text>

          <circle class="pt" cx="160" cy="105" r="3.2"/>
          <circle class="pt" cx="60" cy="105" r="3.2"/>
          <circle class="pt" cx="160" cy="175" r="3.2"/>

          <text x="60" y="97" text-anchor="middle">B</text>
          <text x="171" y="99">A</text>
          <text x="151" y="182" text-anchor="end">C</text>
          <text x="71" y="41" text-anchor="end">E</text>
          <text x="249" y="170">D</text>
        `,
    },
    given: ['CA ⊥ AB', 'E, A, D doğrusal', 'm(BAE) = 2x', 'm(CAD) = 3x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CAD) kaç derecedir?',
    choices: [
      { key: 'A', text: '36' },
      { key: 'B', text: '42' },
      { key: 'C', text: '48' },
      { key: 'D', text: '54' },
      { key: 'E', text: '60' },
    ],
    answer: 'D',
    hint: 'ED bir doğru: [AE’den [AD’ye giderken 2x, dik açı ve 3x sırayla geçilir.',
    solution: [
      {
        title: 'Dik açıyı yaz',
        detail: 'CA ⊥ AB verildiğinden m(BAC) = 90°’dir.',
      },
      {
        title: 'Doğru açıyı belirle',
        detail: 'E, A, D doğrusal olduğundan [AE ile [AD ters ışınlardır ve m(EAD) = 180°’dir.',
      },
      {
        title: 'Doğru açıyı parçala',
        detail:
          '[AB ve [AC ışınları EAD doğru açısının içinde, üstelik bu sırada olduğundan m(EAB) + m(BAC) + m(CAD) = 180 yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: '2x + 90 + 3x = 180 → 5x = 90 → x = 18 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(CAD) = 3x = 3 · 18 = 54° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 25
  {
    id: 'angles-25',
    topic: 'Açı birimleri',
    figure: {
      viewBox: '0 -4 320 169',
      caption: 'Şekil 25',
      label: 'AB ve DE paralel ışınları ve aşağıda kalan C kırılma noktasıyla A-C-D kırık çizgisi.',
      svg: q25Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 -4 320 169',
      caption: 'Şekil 25 — yardımcı çizim',
      label:
        'Aynı şekilde, kırılma noktası C’den [DE ile aynı yöne bakan kesik çizgili [Cd yardımcı ışını çizilmiştir.',
      svg: q25Svg('s') + Q25_AUX_SVG,
    },
    given: ['[AB // [DE', 'm(BAC) = 70 grad', 'm(ACD) = π/10 radyan'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CDE) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '125' },
      { key: 'B', text: '130' },
      { key: 'C', text: '135' },
      { key: 'D', text: '140' },
      { key: 'E', text: '145' },
    ],
    answer: 'C',
    hint: 'Önce iki açıyı da dereceye çevir. Tam çember 400 grad, yarım çember π radyandır.',
    solution: [
      {
        title: 'Gradı dereceye çevir',
        detail:
          'Tam çember 360° = 400 grad olduğundan 1 grad = 360 / 400 = 0,9°’dir. Buradan 70 grad = 70 · 0,9 = 63° bulunur.',
      },
      {
        title: 'Radyanı dereceye çevir',
        detail:
          'π radyan = 180° olduğundan π/10 radyan = 180 / 10 = 18° bulunur. Yani m(BAC) = 63°, m(ACD) = 18°’dir.',
      },
      {
        title: 'C’den paralel çiz',
        detail:
          'Kırılma noktası C’den, [DE ile aynı yöne bakan [Cd ışınını çizelim. Böylece [Cd // [AB // [DE olur.',
      },
      {
        title: 'AC kesenini kullan',
        detail:
          '[AB sola, [Cd sağa baktığından m(BAC) ile m(ACd) iç ters açılardır ve eşittir: m(ACd) = 63° bulunur.',
      },
      {
        title: 'dCD açısını bul',
        detail:
          '[CD ışını, [Cd ile [CA arasında kaldığından m(dCD) = m(ACd) − m(ACD) = 63 − 18 = 45° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[Cd // [DE ve CD kesen olduğundan m(dCD) ile m(CDE) aynı yöndeki iç açılardır, yani bütünlerdir: α = 180 − 45 = 135° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 26
  {
    id: 'angles-26',
    topic: 'Tam açı',
    figure: {
      viewBox: '40 40 320 320',
      caption: 'Şekil 26',
      label:
        'Merkezinden çıkan üç ışının I, II ve III bölgelerine ayırdığı daire; merkezdeki açı ölçüleri sırasıyla x, 147° ve 128°.',
      svg: `
          <circle class="ln" cx="200" cy="200" r="140" fill="none"/>
          <line class="ln" x1="200" y1="200" x2="340" y2="200"/>
          <line class="ln" x1="200" y1="200" x2="212.2" y2="60.5"/>
          <line class="ln" x1="200" y1="200" x2="82.6" y2="276.2"/>

          <!-- One arc per sector, all at the same radius, so the three central
               angles read as a ring around the centre point. -->
          <path class="arc" d="M255,200 A55,55 0 0 0 204.8,145.2"/>
          <path class="arc" d="M204.8,145.2 A55,55 0 0 0 153.9,230"/>
          <path class="arc" d="M153.9,230 A55,55 0 0 0 255,200"/>

          <circle class="pt" cx="200" cy="200" r="3.6"/>

          <text x="303" y="167" text-anchor="middle">I</text>
          <text class="val" x="255" y="154" text-anchor="middle">x</text>
          <text x="92" y="224" text-anchor="middle">III</text>
          <text class="val" x="121" y="158" text-anchor="middle">128°</text>
          <text x="166" y="299" text-anchor="middle">II</text>
          <text class="val" x="231" y="309" text-anchor="middle">147°</text>
        `,
    },
    stem: [
      'Yukarıdaki dairesel grafikte merkezden çıkan üç ışın, daireyi I, II ve III bölgelerine ayırmıştır.',
    ],
    ask: 'Buna göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '75' },
      { key: 'B', text: '80' },
      { key: 'C', text: '85' },
      { key: 'D', text: '90' },
      { key: 'E', text: '95' },
    ],
    answer: 'C',
    hint: 'Bir noktanın çevresindeki açıların ölçüleri toplamı 360°’dir.',
    solution: [
      {
        title: 'Tam açıyı hatırla',
        detail:
          'Bir noktanın çevresini tam olarak dolaşan açıya tam açı denir ve ölçüsü 360°’dir. Dairesel grafikte bütün dilimlerin merkez açıları bu 360°’yi paylaşır.',
      },
      {
        title: 'Denklemi kur',
        detail: 'Merkezdeki üç açı I, II ve III bölgelerine aittir: x + 128 + 147 = 360 yazılır.',
      },
      {
        title: 'Sonuç',
        detail: 'x + 275 = 360 → x = 85° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 27
  {
    id: 'angles-27',
    topic: 'Tümler ve bütünler açılar',
    stem: ['Bir açının bütünleyeninin ölçüsü ile tümleyeninin ölçüsü toplamı 190°’dir.'],
    ask: 'Buna göre, bu açının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'A',
    hint: 'Açının ölçüsüne x dersen bütünleyeni 180 − x, tümleyeni 90 − x olur.',
    solution: [
      {
        title: 'Tanımları yaz',
        detail:
          'Ölçüsü x olan açının bütünleyeni 180 − x, tümleyeni ise 90 − x’tir. Tümleyeninin olabilmesi için x < 90 olmalıdır.',
      },
      {
        title: 'Denklemi kur',
        detail: 'Toplamları 190° verildiğinden (180 − x) + (90 − x) = 190 olur.',
      },
      {
        title: 'Denklemi çöz',
        detail: '270 − 2x = 190 → 2x = 80 → x = 40° bulunur.',
      },
      {
        title: 'Kontrol et',
        detail:
          'Bütünleyeni 180 − 40 = 140°, tümleyeni 90 − 40 = 50°’dir. Toplamları 140 + 50 = 190° olduğundan sonuç doğrudur.',
      },
      {
        title: 'Pratik yol',
        detail:
          'Bütünleyen ile tümleyenin toplamı her zaman 270 − 2x’tir. Yani 270’ten verilen toplamı çıkarıp yarısını almak yeterlidir: (270 − 190) / 2 = 40°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 28
  {
    id: 'angles-28',
    topic: 'Tümler ve bütünler açılar',
    stem: ['Bir açının ölçüsü, bütünleyeninin ölçüsünden 140° küçüktür.'],
    ask: 'Buna göre bu açının ölçüsü, tümleyeninin ölçüsünden kaç derece küçüktür?',
    choices: [
      { key: 'A', text: '35' },
      { key: 'B', text: '40' },
      { key: 'C', text: '45' },
      { key: 'D', text: '50' },
      { key: 'E', text: '55' },
    ],
    answer: 'D',
    hint: 'Önce açının kendi ölçüsünü bul; sorulan fark ondan sonra tek çıkarma işlemidir.',
    solution: [
      {
        title: 'Bütünleyeni yaz',
        detail: 'Açının ölçüsüne x dersek bütünleyeninin ölçüsü 180 − x olur.',
      },
      {
        title: 'Denklemi kur',
        detail: 'Açı, bütünleyeninden 140° küçük olduğundan x = (180 − x) − 140 denklemi yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'x = 40 − x → 2x = 40 → x = 20° bulunur.',
      },
      {
        title: 'Tümleyenini bul',
        detail: 'Tümleyeninin ölçüsü 90 − 20 = 70°’dir.',
      },
      {
        title: 'Sonuç',
        detail: 'Aradaki fark 70 − 20 = 50° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 29
  {
    id: 'angles-29',
    topic: 'Paralel doğrular ve kesen',
    figure: {
      viewBox: '0 0 400 183',
      caption: 'Şekil 29',
      label:
        'Paralel AB ve CD doğruları ile bunları kesen AC ve BD doğru parçaları; A, C, B ve D köşelerindeki açılar sırasıyla a, 3b, b ve 2a.',
      svg: `
          <defs>
            <marker id="arrow-q29" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="67" y1="28" x2="383" y2="28" marker-start="url(#arrow-q29)" marker-end="url(#arrow-q29)"/>
          <line class="ln" x1="61" y1="150" x2="311" y2="150" marker-start="url(#arrow-q29)" marker-end="url(#arrow-q29)"/>
          <line class="ln" x1="166.7" y1="27.8" x2="126.9" y2="150"/>
          <line class="ln" x1="333.3" y1="27.8" x2="165" y2="150"/>

          <path class="arc" d="M137.7,27.8 A29,29 0 0 0 157.7,55.4"/>
          <text class="val" x="128" y="64" text-anchor="middle">a</text>
          <path class="arc" d="M135.9,122.4 A29,29 0 0 0 97.9,150"/>
          <text class="val" x="96" y="117" text-anchor="middle">3b</text>
          <path class="arc" d="M300.3,27.8 A33,33 0 0 0 306.6,47.1"/>
          <text class="val" x="282" y="49" text-anchor="middle">b</text>
          <path class="arc" d="M188.4,132.9 A29,29 0 0 0 136,150"/>
          <text class="val" x="169" y="108">2a</text>

          <circle class="pt" cx="94" cy="28" r="3.2"/>
          <circle class="pt" cx="166.7" cy="27.8" r="3.2"/>
          <circle class="pt" cx="333.3" cy="27.8" r="3.2"/>
          <circle class="pt" cx="83" cy="150" r="3.2"/>
          <circle class="pt" cx="126.9" cy="150" r="3.2"/>
          <circle class="pt" cx="165" cy="150" r="3.2"/>

          <text x="94" y="19" text-anchor="middle">K</text>
          <text x="167" y="19" text-anchor="middle">A</text>
          <text x="333" y="19" text-anchor="middle">B</text>
          <text x="83" y="169" text-anchor="middle">L</text>
          <text x="125" y="169" text-anchor="middle">C</text>
          <text x="169" y="169" text-anchor="middle">D</text>
        `,
    },
    given: ['AB // CD', 'm(CAK) = a, m(ACL) = 3b', 'm(ABD) = b, m(CDB) = 2a'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, a / b oranı kaçtır?',
    choices: [
      { key: 'A', text: '1/3' },
      { key: 'B', text: '1/2' },
      { key: 'C', text: '2/3' },
      { key: 'D', text: '3/2' },
      { key: 'E', text: '2' },
    ],
    answer: 'E',
    hint: 'Her kesen için, paralel doğruların arasında ve kesenin aynı tarafında kalan iki açı bütünlerdir.',
    solution: [
      {
        title: 'AC kesenini kullan',
        detail:
          'AB // CD ve AC bir kesendir. m(CAK) = a ile m(ACL) = 3b açıları, kesenin aynı tarafında kalan iç açılardır (yan iç açılar); ölçüleri toplamı 180°’dir: a + 3b = 180.',
      },
      {
        title: 'BD kesenini kullan',
        detail:
          'Aynı biçimde BD keseninde m(ABD) = b ile m(CDB) = 2a yan iç açılardır: 2a + b = 180.',
      },
      {
        title: 'Sistemi çöz',
        detail:
          'İkinci denklemden b = 180 − 2a bulunur. Birincide yerine yazalım: a + 3(180 − 2a) = 180 → a + 540 − 6a = 180 → 5a = 360 → a = 72°.',
      },
      {
        title: 'b’yi bul',
        detail: 'b = 180 − 2 · 72 = 36° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'a / b = 72 / 36 = 2 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 30
  {
    id: 'angles-30',
    topic: 'Kenarları paralel açılar',
    figure: {
      viewBox: '0 0 400 244',
      caption: 'Şekil 30',
      label:
        'A ve C noktalarından çıkan, kenarları karşılıklı paralel iki açı: [AK ile [CF paralel, [AE ile [CD paraleldir.',
      svg: `
          <defs>
            <marker id="arrow-q30" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="75" y1="212.5" x2="375" y2="212.5" marker-end="url(#arrow-q30)"/>
          <line class="ln" x1="75" y1="112.5" x2="375" y2="112.5" marker-end="url(#arrow-q30)"/>
          <line class="ln" x1="75" y1="112.5" x2="166.4" y2="27.3" marker-end="url(#arrow-q30)"/>
          <line class="ln" x1="75" y1="212.5" x2="230.4" y2="67.6" marker-end="url(#arrow-q30)"/>

          <path class="par" d="M317.5,105 L326.5,112.5 L317.5,120"/>
          <path class="par" d="M317.5,205 L326.5,212.5 L317.5,220"/>

          <path class="arc" d="M110,112.5 A35,35 0 0 0 100.6,88.6"/>
          <text class="val" x="115" y="88">9x − 20</text>
          <path class="arc" d="M110,212.5 A35,35 0 0 0 100.6,188.6"/>
          <text class="val" x="115" y="188">5x + 8</text>

          <circle class="pt" cx="75" cy="112.5" r="3.2"/>
          <circle class="pt" cx="182.3" cy="112.5" r="3.2"/>
          <circle class="pt" cx="312.5" cy="112.5" r="3.2"/>
          <circle class="pt" cx="75" cy="212.5" r="3.2"/>
          <circle class="pt" cx="312.5" cy="212.5" r="3.2"/>

          <text x="67" y="119" text-anchor="end">A</text>
          <text x="176" y="106" text-anchor="end">B</text>
          <text x="312" y="104" text-anchor="middle">E</text>
          <text x="67" y="219" text-anchor="end">C</text>
          <text x="312" y="233" text-anchor="middle">D</text>
          <text x="159" y="21" text-anchor="end">K</text>
          <text x="237" y="63">F</text>
        `,
    },
    given: ['[AK // [CF', '[CD // [AE', 'm(BAK) = 9x − 20', 'm(FCD) = 5x + 8'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(FCD) kaç derecedir?',
    choices: [
      { key: 'A', text: '42' },
      { key: 'B', text: '43' },
      { key: 'C', text: '44' },
      { key: 'D', text: '45' },
      { key: 'E', text: '46' },
    ],
    answer: 'B',
    hint: 'Kenarları karşılıklı paralel ve aynı yöne bakan iki açının ölçüleri eşittir.',
    solution: [
      {
        title: 'Kenarları paralel açıları tanı',
        detail:
          'BAK açısının kenarları [AB ile [AK, FCD açısının kenarları [CD ile [CF’dir. [AE // [CD ve [AK // [CF verildiğinden bu iki açının kenarları karşılıklı paraleldir.',
      },
      {
        title: 'Eşit mi, bütünler mi?',
        detail:
          'Kenarları karşılıklı paralel açılarda, kenarlar ikişer ikişer aynı yöne bakıyorsa açılar eş; biri ters yöne bakıyorsa bütünlerdir. Burada [AB ile [CD sağa, [AK ile [CF yukarı-sağa baktığından açılar eştir.',
      },
      {
        title: 'Denklemi kur',
        detail: 'm(BAK) = m(FCD) olduğundan 9x − 20 = 5x + 8 yazılır.',
      },
      {
        title: 'Denklemi çöz',
        detail: '9x − 5x = 8 + 20 → 4x = 28 → x = 7 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'm(FCD) = 5 · 7 + 8 = 43° bulunur. (Kontrol: 9 · 7 − 20 = 43 ✓)',
      },
    ],
  },

  // ---------------------------------------------------------------- 31
  {
    id: 'angles-31',
    topic: 'Dik açı ve dik üçgen',
    figure: {
      viewBox: '0 0 400 334',
      caption: 'Şekil 31',
      label:
        'A noktasından çıkan [AL ve [AK ışınları ile B köşesi dik olan ABC üçgeni; KAL açısı 145°, BCA açısı x.',
      svg: `
          <defs>
            <marker id="arrow-q31" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="133.3" y1="146.7" x2="133.3" y2="16" marker-end="url(#arrow-q31)"/>
          <line class="ln" x1="133.3" y1="146.7" x2="56" y2="256" marker-end="url(#arrow-q31)"/>
          <path class="ln" d="M133.3,146.7 L360,146.7 L360,305.3 Z"/>

          <path class="ln" d="M146.7,146.7 L146.7,133.3 L133.3,133.3"/>
          <path class="ln" d="M124.1,159.7 L137.2,168.9 L146.4,155.9"/>
          <path class="ln" d="M344,146.7 L344,162.7 L360,162.7"/>

          <path class="arc" d="M133.3,103.7 A43,43 0 0 0 108.6,181.9"/>
          <text class="val" x="66" y="132" text-anchor="middle">145°</text>

          <path class="arc" d="M360,260.3 A45,45 0 0 0 323.1,279.5"/>
          <text class="val" x="328" y="257" text-anchor="middle">x</text>

          <circle class="pt" cx="133.3" cy="146.7" r="3.2"/>
          <circle class="pt" cx="360" cy="146.7" r="3.2"/>
          <circle class="pt" cx="360" cy="305.3" r="3.2"/>
          <circle class="pt" cx="133.3" cy="26.7" r="3.2"/>
          <circle class="pt" cx="64.5" cy="245" r="3.2"/>

          <text x="155" y="137">A</text>
          <text x="360" y="133" text-anchor="middle">B</text>
          <text x="368" y="324">C</text>
          <text x="144" y="32">L</text>
          <text x="69" y="265">K</text>
        `,
    },
    given: ['[AL ⊥ [AB', '[AK ⊥ [AC', '[CB] ⊥ [AB]', 'm(KAL) = 145°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCA) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '45' },
      { key: 'C', text: '50' },
      { key: 'D', text: '55' },
      { key: 'E', text: '60' },
    ],
    answer: 'D',
    hint: 'A noktasının çevresindeki dört açının ölçüleri toplamı 360°’dir.',
    solution: [
      {
        title: 'A’nın çevresini dolaş',
        detail:
          'A noktasının çevresinde KAL, LAB, BAC ve CAK açıları yan yana sıralanır. Bir noktanın çevresindeki açıların ölçüleri toplamı 360°’dir.',
      },
      {
        title: 'Dik açıları yerleştir',
        detail: '[AL ⊥ [AB olduğundan m(LAB) = 90°, [AK ⊥ [AC olduğundan m(CAK) = 90°’dir.',
      },
      {
        title: 'BAC açısını bul',
        detail: '145 + 90 + m(BAC) + 90 = 360 → m(BAC) = 360 − 325 = 35° bulunur.',
      },
      {
        title: 'Dik üçgeni kullan',
        detail: 'ABC üçgeninde m(ABC) = 90° olduğundan diğer iki açı tümlerdir: m(BAC) + x = 90.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 90 − 35 = 55° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 32
  {
    id: 'angles-32',
    topic: 'Açı kavramı',
    figure: {
      viewBox: '0 0 400 287',
      caption: 'Şekil 32',
      label:
        'K köşeli MKN açısı ile P köşeli MPL açısı; ışınlar M, L, T ve N noktalarında kesişiyor.',
      svg: `
          <defs>
            <marker id="arrow-q32" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="66.7" y1="220" x2="373.3" y2="220" marker-end="url(#arrow-q32)"/>
          <line class="ln" x1="66.7" y1="220" x2="200.7" y2="28.9" marker-end="url(#arrow-q32)"/>
          <line class="ln" x1="200" y1="260" x2="158.3" y2="23.6" marker-end="url(#arrow-q32)"/>
          <line class="ln" x1="200" y1="260" x2="67.2" y2="148.5" marker-end="url(#arrow-q32)"/>

          <circle class="pt" cx="66.7" cy="220" r="3.2"/>
          <circle class="pt" cx="152.3" cy="220" r="3.2"/>
          <circle class="pt" cx="192.9" cy="220" r="3.2"/>
          <circle class="pt" cx="200" cy="260" r="3.2"/>
          <circle class="pt" cx="98.4" cy="174.8" r="3.2"/>
          <circle class="pt" cx="167.5" cy="76.1" r="3.2"/>

          <text x="61" y="241" text-anchor="end">K</text>
          <text x="149" y="243" text-anchor="middle">T</text>
          <text x="203" y="211">N</text>
          <text x="208" y="279">P</text>
          <text x="88" y="171" text-anchor="end">L</text>
          <text x="175" y="69">M</text>
        `,
    },
    stem: ['Yukarıdaki şekilde K köşeli MKN açısı ile P köşeli MPL açısı verilmiştir.'],
    ask: 'Buna göre, MKN ∩ MPL kesişimi aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: '{K, P}' },
      { key: 'B', text: '{M, L, T, N}' },
      { key: 'C', text: '{L, K}' },
      { key: 'D', text: '{T, P}' },
      { key: 'E', text: 'MLTN dörtgeni' },
    ],
    answer: 'B',
    hint: 'Bir açı yalnızca iki ışının birleşimidir; ışınların arasında kalan bölge açıya dahil değildir.',
    solution: [
      {
        title: 'Açının tanımını hatırla',
        detail:
          'Bir açı, başlangıç noktaları ortak olan iki ışının birleşimidir. İç bölge açıya ait olmadığından kesişim de bir bölge değil, noktalardan oluşan bir küme olur.',
      },
      {
        title: 'Açıları ışınlarına ayır',
        detail:
          'MKN açısı [KM ile [KN ışınlarının, MPL açısı ise [PM ile [PL ışınlarının birleşimidir.',
      },
      {
        title: 'Işınları ikişer ikişer kesiştir',
        detail: '[KM ∩ [PM = {M}, [KM ∩ [PL = {L}, [KN ∩ [PM = {N}, [KN ∩ [PL = {T} bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'Bütün kesişimleri birleştirirsek MKN ∩ MPL = {M, L, T, N} olur. MLTN dörtgeni bir bölge belirttiğinden yanlıştır; kesişim yalnızca bu dört noktadır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 33
  {
    id: 'angles-33',
    topic: 'Paralel doğrular ve kesen',
    figure: {
      viewBox: '0 0 400 250',
      caption: 'Şekil 33',
      label:
        'Paralel AB ve CD doğruları ile bunları kesen KC ve AD doğruları; kesenler E noktasında kesişiyor.',
      svg: `
          <defs>
            <marker id="arrow-q33" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="50" y1="56.25" x2="350" y2="56.25" marker-start="url(#arrow-q33)" marker-end="url(#arrow-q33)"/>
          <line class="ln" x1="50" y1="206.25" x2="350" y2="206.25" marker-start="url(#arrow-q33)" marker-end="url(#arrow-q33)"/>
          <line class="ln" x1="268.9" y1="15.25" x2="122" y2="224.6" marker-start="url(#arrow-q33)" marker-end="url(#arrow-q33)"/>
          <line class="ln" x1="98.1" y1="56.25" x2="294.1" y2="220.75" marker-end="url(#arrow-q33)"/>

          <path class="par" d="M317.5,48.75 L326.25,56.25 L317.5,63.75"/>
          <path class="par" d="M317.5,198.75 L326.25,206.25 L317.5,213.75"/>

          <path class="arc" d="M275.1,56.25 A35,35 0 0 0 260.2,27.6"/>
          <text class="val" x="291" y="36" text-anchor="middle">55°</text>

          <path class="arc" d="M250.1,183.75 A35,35 0 0 0 241.9,206.25"/>
          <text class="val" x="222" y="194" text-anchor="middle">40°</text>

          <path class="arc" d="M206.1,104.6 A32.5,32.5 0 0 0 162.6,110.4"/>
          <text class="val" x="181" y="88" text-anchor="middle">α</text>

          <circle class="pt" cx="98.1" cy="56.25" r="3.2"/>
          <circle class="pt" cx="240.1" cy="56.25" r="3.2"/>
          <circle class="pt" cx="300" cy="56.25" r="3.2"/>
          <circle class="pt" cx="134.9" cy="206.25" r="3.2"/>
          <circle class="pt" cx="276.9" cy="206.25" r="3.2"/>
          <circle class="pt" cx="187.5" cy="131.25" r="3.2"/>

          <text x="98.1" y="46" text-anchor="middle">A</text>
          <text x="232" y="46" text-anchor="end">B</text>
          <text x="306" y="46">L</text>
          <text x="277" y="15">K</text>
          <text x="142" y="230">C</text>
          <text x="268" y="228" text-anchor="end">D</text>
          <text x="171" y="140" text-anchor="end">E</text>
        `,
    },
    given: ['AB // CD', 'm(KBL) = 55°', 'm(ADC) = 40°', 'm(AEB) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '85' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' },
      { key: 'E', text: '105' },
    ],
    answer: 'A',
    hint: 'AEB üçgeninin diğer iki açısını bul: biri ters açı, öteki iç ters açıyla gelir.',
    solution: [
      {
        title: 'Ters açıyı kullan',
        detail:
          'K, B, E, C noktaları doğrusal ve A, B, L noktaları doğrusaldır. Bu iki doğru B’de kesiştiğinden m(KBL) ile m(ABE) ters açılardır: m(ABE) = 55°.',
      },
      {
        title: 'İç ters açıyı kullan',
        detail:
          'AB // CD ve AD kesendir. E noktası [AD üzerinde olduğundan m(BAE) = m(BAD) olur; m(BAD) ile m(ADC) ise iç ters açılardır: m(BAE) = 40°.',
      },
      {
        title: 'Üçgende açı toplamı',
        detail: 'ABE üçgeninde m(BAE) + m(ABE) + α = 180 → 40 + 55 + α = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 180 − 95 = 85° bulunur.',
      },
      {
        title: 'Başka bir yol',
        detail:
          'E’den paralellere paralel bir doğru çizersen α, iç ters açılarla 55° ve 40°’lik iki parçaya ayrılan doğrusal açının geri kalanıdır: α = 180 − 55 − 40 = 85°.',
      },
    ],
  },

  // ---------------------------------------------------------------- 34
  {
    id: 'angles-34',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 200',
      caption: 'Şekil 34',
      label:
        'Paralel AB ve CD doğruları arasında ACE üçgeni; A ve C köşelerindeki açıortaylar eş işaretlerle gösterilmiş.',
      svg: `
          <defs>
            <marker id="arrow-q34" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="75" y1="31.25" x2="362.5" y2="31.25" marker-start="url(#arrow-q34)" marker-end="url(#arrow-q34)"/>
          <line class="ln" x1="75" y1="168.75" x2="362.5" y2="168.75" marker-start="url(#arrow-q34)" marker-end="url(#arrow-q34)"/>
          <path class="ln" d="M175,31.25 L125,168.75 L241.5,87.1 Z"/>

          <path class="par" d="M322.5,23.75 L331.25,31.25 L322.5,38.75"/>
          <path class="par" d="M322.5,161.25 L331.25,168.75 L322.5,176.25"/>

          <path class="arc" d="M137.5,31.25 A37.5,37.5 0 0 0 162.2,66.5"/>
          <line class="tick" x1="149.4" y1="49.1" x2="139.1" y2="56.4"/>
          <path class="arc" d="M162.2,66.5 A37.5,37.5 0 0 0 203.7,55.4"/>
          <line class="tick" x1="183.1" y1="61.4" x2="186.4" y2="73.5"/>

          <path class="arc" d="M217.1,66.6 A55,55 0 0 0 230,31.25"/>
          <text class="val" x="245" y="61">α</text>

          <path class="arc" d="M167.5,168.75 A42.5,42.5 0 0 0 159.8,144.35"/>
          <line class="tick" x1="160.4" y1="160.9" x2="172.6" y2="158.25"/>
          <line class="tick" x1="158.5" y1="154.9" x2="170" y2="150.1"/>
          <path class="arc" d="M159.8,144.35 A42.5,42.5 0 0 0 139.5,128.85"/>
          <line class="tick" x1="149.5" y1="142" x2="158" y2="132.75"/>
          <line class="tick" x1="144.5" y1="138.1" x2="151.25" y2="127.6"/>

          <path class="arc" d="M214.7,64.6 A35,35 0 0 0 212.8,107.2"/>
          <text class="val" x="184" y="90" text-anchor="middle">75°</text>

          <circle class="pt" cx="175" cy="31.25" r="3.2"/>
          <circle class="pt" cx="287.5" cy="31.25" r="3.2"/>
          <circle class="pt" cx="125" cy="168.75" r="3.2"/>
          <circle class="pt" cx="300" cy="168.75" r="3.2"/>
          <circle class="pt" cx="241.5" cy="87.1" r="3.2"/>

          <text x="175" y="21" text-anchor="middle">A</text>
          <text x="287.5" y="21" text-anchor="middle">B</text>
          <text x="120" y="188" text-anchor="end">C</text>
          <text x="300" y="188" text-anchor="middle">D</text>
          <text x="249" y="81">E</text>
        `,
    },
    given: [
      'AB // CD',
      '[AC ve [CE açıortaydır (şekildeki eş işaretli açılar)',
      'm(AEC) = 75°',
      'm(BAE) = α',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '25' },
      { key: 'B', text: '30' },
      { key: 'C', text: '35' },
      { key: 'D', text: '40' },
      { key: 'E', text: '45' },
    ],
    answer: 'D',
    hint: 'ACD açısına 2y de: hem [CE onu ikiye böler, hem de iç ters açıyla A köşesine taşınır.',
    solution: [
      {
        title: 'Açıortayı adlandır',
        detail:
          '[CE, ACD açısını iki eş parçaya böldüğünden m(ACE) = m(ECD) = y diyelim; buradan m(ACD) = 2y olur.',
      },
      {
        title: 'Açıyı A’ya taşı',
        detail:
          'AB // CD ve AC kesendir. m(ACD) ile A köşesinde [AC’nin sol kolla yaptığı açı iç ters açılardır; yani bu açı da 2y’dir.',
      },
      {
        title: 'İkinci açıortayı kullan',
        detail:
          '[AC bu açıyı CAE açısıyla eşitlediğinden (açıortay olduğundan) m(CAE) = 2y bulunur.',
      },
      {
        title: 'AEC üçgeninde topla',
        detail: 'm(CAE) + m(ACE) + m(AEC) = 180 → 2y + y + 75 = 180 → 3y = 105 → y = 35° bulunur.',
      },
      {
        title: 'A’daki doğrusal açıyı yaz',
        detail:
          'Sol kol, [AC, [AE ve [AB sırasıyla geldiğinden 2y + 2y + α = 180 → 4 · 35 + α = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 180 − 140 = 40° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 35
  {
    id: 'angles-35',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 188',
      caption: 'Şekil 35',
      label:
        'B, A, C, D doğrusu ile doğrunun üstünde E, altında F köşesi olan A-E-F-C kırık çizgisi.',
      svg: q35Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 188',
      caption: 'Şekil 35 — yardımcı çizim',
      label:
        'Aynı şekilde, E ve F kırılma noktalarından doğruya paralel kesik çizgili e ve f doğruları çizilmiştir.',
      svg: q35Svg('s') + Q35_AUX_SVG,
    },
    given: ['B, A, C, D doğrusal', 'm(BAE) = 125°', 'm(EFC) = m(AEF) + 20°', 'm(FCD) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '155' },
      { key: 'B', text: '150' },
      { key: 'C', text: '145' },
      { key: 'D', text: '140' },
      { key: 'E', text: '135' },
    ],
    answer: 'C',
    hint: 'm(AEF) = a de ve iki kırılma noktasından da paralel çiz; a sonunda sadeleşir.',
    solution: [
      {
        title: 'Kırılma noktalarından paralel çiz',
        detail:
          'E ve F noktalarından BD doğrusuna paralel e ve f doğrularını çizelim: BD // e // f olur.',
      },
      {
        title: 'A’daki açıyı E’ye taşı',
        detail:
          'AE keseninde m(BAE) = 125° ile e doğrusunun sol kolunun [EA ile yaptığı açı yan iç açılardır: 180 − 125 = 55° bulunur.',
      },
      {
        title: 'E’deki açıyı yaz',
        detail:
          'E, doğrunun üstünde, F ise altındadır; bu yüzden e’nin sol kolu EAF açısının dışında kalır. m(AEF) = a dersek e’nin sol kolu ile [EF arasındaki açı 55 + a olur.',
      },
      {
        title: 'Açıyı f’ye taşı',
        detail:
          'e // f ve EF kesendir. e’nin sol kolu ile [EF arasındaki açı, f’nin sağ kolu ile [FE arasındaki açıya iç ters açı olarak eşittir: yine 55 + a.',
      },
      {
        title: 'F’de farkı al',
        detail:
          'm(EFC) = a + 20 olduğundan f’nin sağ kolu ile [FC arasındaki açı (55 + a) − (a + 20) = 35° olur. Görüldüğü gibi a sadeleşti.',
      },
      {
        title: 'Sonuç',
        detail:
          'f // BD ve FC kesendir; bu 35°, C köşesinde [CF ile sol kol arasındaki açıya eşittir. Doğrusal açıdan α = 180 − 35 = 145° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 36
  {
    id: 'angles-36',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 221',
      caption: 'Şekil 36',
      label:
        'Paralel [AB ve [DE ışınları ile bunların dışında kalan C köşesi; D, C, F noktaları doğrusal.',
      svg: q36Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 221',
      caption: 'Şekil 36 — yardımcı çizim',
      label:
        'Aynı şekilde, C köşesinden [AB ile aynı yöne bakan kesik çizgili [Cd yardımcı ışını çizilmiştir.',
      svg: q36Svg('s') + Q36_AUX_SVG,
    },
    given: ['[AB // [DE', 'm(BAC) = 145°', 'm(CDE) = 135°', 'D, C, F doğrusal', 'm(ACF) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '120' },
      { key: 'B', text: '115' },
      { key: 'C', text: '110' },
      { key: 'D', text: '105' },
      { key: 'E', text: '100' },
    ],
    answer: 'E',
    hint: 'Kırılma noktası paralellerin dışında kaldığında üç açının toplamı 360°’dir.',
    solution: [
      {
        title: 'C’den paralel çiz',
        detail:
          'C noktasından [AB ile aynı yöne (sağa) bakan [Cd ışınını çizelim: [Cd // [AB // [DE olur.',
      },
      {
        title: 'Üstteki parçayı bul',
        detail:
          'AC keseninde [AB ile [Cd aynı yöne baktığından m(BAC) ile m(ACd) yan iç açılardır: m(ACd) = 180 − 145 = 35°.',
      },
      {
        title: 'Alttaki parçayı bul',
        detail:
          'CD keseninde aynı biçimde m(CDE) ile m(dCD) yan iç açılardır: m(dCD) = 180 − 135 = 45°.',
      },
      {
        title: 'ACD açısını topla',
        detail:
          '[Cd ışını ACD açısının içinde kaldığından m(ACD) = 35 + 45 = 80° bulunur. Kısayolu şudur: köşe paralellerin dışındayken m(BAC) + m(ACD) + m(CDE) = 360°’dir.',
      },
      {
        title: 'Sonuç',
        detail:
          'D, C, F doğrusal olduğundan m(ACD) ile m(ACF) bütünlerdir: α = 180 − 80 = 100° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 37
  {
    id: 'angles-37',
    topic: 'Açıortay ve üçgen',
    figure: {
      viewBox: '0 0 400 207',
      caption: 'Şekil 37',
      label:
        'D, C, E doğrusu üzerindeki C noktasından çıkan [CA, [CK, [CB ışınları ve ABC üçgeni; eş açılar işaretli.',
      svg: `
          <defs>
            <marker id="arrow-q37" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="40" y1="173.3" x2="373.3" y2="173.3" marker-start="url(#arrow-q37)" marker-end="url(#arrow-q37)"/>
          <line class="ln" x1="186.7" y1="173.3" x2="213.3" y2="22.3" marker-end="url(#arrow-q37)"/>
          <path class="ln" d="M75.2,40.5 L186.7,173.3 L290.4,86.3 Z"/>

          <path class="arc" d="M146.7,173.3 A40,40 0 0 1 161,142.7"/>
          <line class="tick" x1="156.5" y1="159.2" x2="144.4" y2="153.6"/>
          <path class="arc" d="M161,142.7 A40,40 0 0 1 193.6,133.9"/>
          <line class="tick" x1="178.1" y1="141.1" x2="174.6" y2="128.2"/>

          <path class="arc" d="M196.4,118.2 A56,56 0 0 1 229.6,137.3"/>
          <line class="tick" x1="213.4" y1="132.2" x2="221" y2="120.5"/>
          <line class="tick" x1="208.9" y1="129.6" x2="215.3" y2="117.2"/>
          <path class="arc" d="M229.6,137.3 A56,56 0 0 1 242.7,173.3"/>
          <line class="tick" x1="233.6" y1="159" x2="246.9" y2="154.9"/>
          <line class="tick" x1="231.8" y1="154.2" x2="244.7" y2="148.7"/>

          <path class="arc" d="M104.3,75.2 A45.3,45.3 0 0 0 119.5,49.9"/>
          <text class="val" x="137" y="80" text-anchor="middle">38°</text>

          <path class="arc" d="M248.6,77.4 A42.7,42.7 0 0 0 257.7,113.7"/>
          <text class="val" x="227" y="108" text-anchor="middle">α</text>

          <circle class="pt" cx="186.7" cy="173.3" r="3.2"/>
          <circle class="pt" cx="66.7" cy="173.3" r="3.2"/>
          <circle class="pt" cx="333.3" cy="173.3" r="3.2"/>
          <circle class="pt" cx="75.2" cy="40.5" r="3.2"/>
          <circle class="pt" cx="290.4" cy="86.3" r="3.2"/>

          <text x="66.7" y="34.7" text-anchor="end">A</text>
          <text x="299" y="80">B</text>
          <text x="186.7" y="194.7" text-anchor="middle">C</text>
          <text x="66.7" y="194.7" text-anchor="middle">D</text>
          <text x="333.3" y="194.7" text-anchor="middle">E</text>
          <text x="221" y="16">K</text>
        `,
    },
    given: ['D, C, E doğrusal', 'm(ECB) = m(BCK)', 'm(KCA) = m(ACD)', 'm(BAC) = 38°', 'm(ABC) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '48' },
      { key: 'B', text: '52' },
      { key: 'C', text: '56' },
      { key: 'D', text: '60' },
      { key: 'E', text: '64' },
    ],
    answer: 'B',
    hint: 'C köşesindeki dört açının toplamı 180°; eşleri kullanınca m(ACB) tek adımda çıkar.',
    solution: [
      {
        title: 'Açıları adlandır',
        detail: 'm(ACD) = m(ACK) = y ve m(KCB) = m(BCE) = x diyelim.',
      },
      {
        title: 'Doğrusal açıyı yaz',
        detail:
          'D, C, E doğrusal olduğundan C köşesindeki dört açı 180°’yi paylaşır: y + y + x + x = 180 → 2(x + y) = 180 → x + y = 90 bulunur.',
      },
      {
        title: 'ACB açısını bul',
        detail:
          '[CK ışını ACB açısının içinde kaldığından m(ACB) = m(ACK) + m(KCB) = y + x = 90° olur; yani [CA ⊥ [CB’dir.',
      },
      {
        title: 'Üçgende açı toplamı',
        detail: 'ABC üçgeninde m(BAC) + m(ACB) + α = 180 → 38 + 90 + α = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 180 − 128 = 52° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 38
  {
    id: 'angles-38',
    topic: 'Kenarları dik açılar',
    figure: {
      viewBox: '0 0 400 263',
      caption: 'Şekil 38',
      label:
        'C noktasından çıkan [CE, [CF, [CK ışınları ile C’den geçen AC doğrusu; [BD ışını [CF’ye paraleldir.',
      svg: `
          <defs>
            <marker id="arrow-q38" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="261.5" y1="16.4" x2="187.5" y2="175"/>
          <line class="ln" x1="245.6" y1="50.4" x2="387.5" y2="50.4" marker-end="url(#arrow-q38)"/>
          <line class="ln" x1="187.5" y1="175" x2="375" y2="175" marker-end="url(#arrow-q38)"/>
          <line class="ln" x1="187.5" y1="175" x2="74.25" y2="122.1" marker-end="url(#arrow-q38)"/>
          <line class="ln" x1="187.5" y1="175" x2="187.5" y2="247.5" marker-end="url(#arrow-q38)"/>

          <path class="par" d="M303.75,42.9 L312.5,50.4 L303.75,57.9"/>
          <path class="par" d="M291.25,167.5 L300,175 L291.25,182.5"/>

          <path class="ln" d="M194.4,160.25 L179.6,153.4 L172.75,168.1"/>
          <path class="ln" d="M203.75,175 L203.75,191.25 L187.5,191.25"/>

          <path class="arc" d="M280.6,50.4 A35,35 0 0 0 260.4,18.7"/>
          <text class="val" x="295" y="26">65°</text>

          <path class="arc" d="M149,157 A42.5,42.5 0 0 0 187.5,217.5"/>
          <text class="val" x="132" y="214" text-anchor="middle">α</text>

          <circle class="pt" cx="261.5" cy="16.4" r="3.2"/>
          <circle class="pt" cx="245.6" cy="50.4" r="3.2"/>
          <circle class="pt" cx="350" cy="50.4" r="3.2"/>
          <circle class="pt" cx="187.5" cy="175" r="3.2"/>
          <circle class="pt" cx="337.5" cy="175" r="3.2"/>
          <circle class="pt" cx="74.25" cy="122.1" r="3.2"/>

          <text x="269" y="14">A</text>
          <text x="238" y="45" text-anchor="end">B</text>
          <text x="350" y="41" text-anchor="middle">D</text>
          <text x="201" y="165">C</text>
          <text x="345" y="166">F</text>
          <text x="67" y="116" text-anchor="end">E</text>
          <text x="197" y="240">K</text>
        `,
    },
    given: ['[CA ⊥ [CE', '[CF ⊥ [CK', '[BD // [CF', 'm(ABD) = 65°', 'm(ECK) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '130' },
      { key: 'B', text: '125' },
      { key: 'C', text: '120' },
      { key: 'D', text: '115' },
      { key: 'E', text: '110' },
    ],
    answer: 'D',
    hint: 'Kenarları karşılıklı dik iki açı ya eşittir ya da bütündür.',
    solution: [
      {
        title: 'Yöndeş açıyı bul',
        detail:
          '[BD // [CF ve AC kesendir. B ile C aynı taraftaki köşeler olduğundan m(ABD) ile m(ACF) yöndeş açılardır: m(ACF) = 65°.',
      },
      {
        title: 'Kenarları dik açıları tanı',
        detail:
          '[CE ⊥ [CA ve [CK ⊥ [CF olduğundan ECK açısının kenarları, ACF açısının kenarlarına karşılıklı diktir. Böyle iki açı ya eşittir ya da bütündür.',
      },
      {
        title: 'Hangisi olduğunu seç',
        detail:
          'ACF dar, ECK ise geniş açı olduğundan bunlar eşit olamaz; bütündürler: α = 180 − 65 = 115° bulunur.',
      },
      {
        title: 'İstersen doğrudan hesapla',
        detail:
          'C çevresinde m(ECA) + m(ACF) + m(FCK) = 90 + 65 + 90 = 245° eder. Tam açı 360° olduğundan α = 360 − 245 = 115° bulunur.',
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

export const UNIT_1_ANGLES: Unit = {
  id: 'angles',
  order: 1,
  title: 'Açılar',
  subtitle: 'Ünite 1',
  description:
    'Açı birimleri, tümler ve bütünler açılar, açıortay ve paralel iki doğrunun bir kesenle yaptığı açılar.',
  modules: [
    {
      id: 'angles-m1',
      order: 1,
      title: 'Açı birimleri, tümler ve bütünler',
      summary:
        'Derece-dakika-saniye çevirmesi ve tümler-bütünler açı denklemleri. Şekilsiz, tamamen kurulan denklemle çözülen sorular.',
      questions: pick('angles-1', 'angles-19', 'angles-2', 'angles-20', 'angles-5'),
    },
    {
      id: 'angles-m2',
      order: 2,
      title: 'Doğrusal açı, açıortay ve saat',
      summary:
        'Bir doğru üzerindeki açı parçaları, açıortayın iki eş parçaya ayırması ve saatte akreple yelkovan arasındaki açı.',
      questions: pick('angles-23', 'angles-24', 'angles-14', 'angles-22', 'angles-15'),
    },
    {
      id: 'angles-m3',
      order: 3,
      title: 'Dik açı ve dik üçgen',
      summary:
        'Dik açının parçalanması, dik üçgende dar açıların 90°’ye tamamlanması ve kenarları karşılıklı dik açılar.',
      questions: pick('angles-3', 'angles-13', 'angles-16', 'angles-11', 'angles-18'),
    },
    {
      id: 'angles-m4',
      order: 4,
      title: 'Paralel doğrular ve kesen',
      summary:
        'Bir kesenin paralel doğrularla yaptığı yöndeş, iç ters ve yan iç açılar; ardından tek kırılmalı ilk zikzaklar.',
      questions: pick('angles-10', 'angles-6', 'angles-4', 'angles-7', 'angles-9'),
    },
    {
      id: 'angles-m5',
      order: 5,
      title: 'Paralel doğrularda zikzak',
      summary:
        'Kırılma noktasından paralel çizme yöntemi: paralellerin dışında kalan köşeler, çoklu kırılma ve grad-radyan karışımı.',
      questions: pick('angles-21', 'angles-25', 'angles-8', 'angles-12', 'angles-17'),
    },
    {
      id: 'angles-m6',
      order: 6,
      title: 'Karma tekrar',
      summary:
        'Üniteyi kapatan yedi soruluk karma set: tam açı, tümler-bütünler denklemleri, yan iç açılar, kenarları paralel açılar ve açının küme olarak kesişimi.',
      questions: pick(
        'angles-26',
        'angles-27',
        'angles-28',
        'angles-29',
        'angles-30',
        'angles-31',
        'angles-32',
      ),
    },
    {
      id: 'angles-m7',
      order: 7,
      title: 'Paralel doğrularda karma test',
      summary:
        'İki keseni olan paralel doğrular, açıortayla kurulan üçgenler, çift kırılmalı zikzaklar ve kenarları karşılıklı dik açılar.',
      questions: pick('angles-33', 'angles-34', 'angles-35', 'angles-36', 'angles-37', 'angles-38'),
    },
  ],
};
