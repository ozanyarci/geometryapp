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
 * Question 42's corner C, where the two parallel rays point in opposite
 * directions, so the angles at B and D sit on opposite sides of the zigzag.
 */
const q42Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q42-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="166" y1="33.2" x2="15.1" y2="33.2" marker-end="url(#arrow-q42-${suffix})"/>
  <line class="ln" x1="135.9" y1="190.9" x2="384.9" y2="190.9" marker-end="url(#arrow-q42-${suffix})"/>
  <path class="ln" d="M166,33.2 L231.1,116.6 L135.9,190.9"/>

  <path class="par" d="M90.6,24.1 L101.1,33.2 L90.6,42.3"/>
  <path class="par" d="M324.5,181.9 L335,190.9 L324.5,199.9"/>

  <path class="ln" d="M220.9,103.4 L207.8,113.6 L218.1,126.8"/>

  <path class="arc" d="M120.7,33.2 A45.3,45.3 0 0 0 193.9,68.9"/>
  <text class="val" x="134" y="98" text-anchor="middle">128°</text>

  <path class="arc" d="M169.2,164.9 A42.3,42.3 0 0 1 178.2,190.9"/>
  <text class="val" x="196" y="177">α</text>

  <circle class="pt" cx="166" cy="33.2" r="3.2"/>
  <circle class="pt" cx="45.3" cy="33.2" r="3.2"/>
  <circle class="pt" cx="231.1" cy="116.6" r="3.2"/>
  <circle class="pt" cx="135.9" cy="190.9" r="3.2"/>
  <circle class="pt" cx="271.7" cy="190.9" r="3.2"/>

  <text x="45.3" y="21" text-anchor="middle">A</text>
  <text x="171" y="21">B</text>
  <text x="242" y="121">C</text>
  <text x="127" y="213" text-anchor="end">D</text>
  <text x="275" y="213">E</text>
`;

/** The [Cd ray question 42's solution draws through the corner point C. */
const Q42_AUX_SVG = `
  <defs>
    <marker id="arrow-q42-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="231.1" y1="116.6" x2="130" y2="116.6" marker-end="url(#arrow-q42-aux)"/>
  <text class="val" x="122" y="121" text-anchor="end">d</text>
`;

/** Question 45's two pairs of parallel rays, meeting at the corner A. */
const q45Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q45-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="91.7" y1="33.3" x2="383.3" y2="33.3" marker-end="url(#arrow-q45-${suffix})"/>
  <line class="ln" x1="83.3" y1="125" x2="383.3" y2="125" marker-start="url(#arrow-q45-${suffix})" marker-end="url(#arrow-q45-${suffix})"/>
  <line class="ln" x1="23.3" y1="221.3" x2="91.7" y2="33.3"/>
  <line class="ln" x1="23.3" y1="221.3" x2="138.2" y2="125"/>
  <line class="ln" x1="283.3" y1="125" x2="175" y2="215.8" marker-end="url(#arrow-q45-${suffix})"/>

  <path class="par" d="M283.3,23.3 L295,33.3 L283.3,43.3"/>
  <path class="par" d="M325,115 L336.7,125 L325,135"/>

  <path class="arc" d="M141.7,33.3 A50,50 0 0 1 74.6,80.3"/>
  <text class="val" x="138" y="98">110°</text>

  <path class="arc" d="M41.5,171.2 A53.3,53.3 0 0 1 64.1,187"/>
  <text class="val" x="68" y="160">x</text>

  <path class="arc" d="M233.3,125 A50,50 0 0 0 245,157.1"/>
  <text class="val" x="218" y="155" text-anchor="end">40°</text>

  <circle class="pt" cx="91.7" cy="33.3" r="3.2"/>
  <circle class="pt" cx="341.7" cy="33.3" r="3.2"/>
  <circle class="pt" cx="23.3" cy="221.3" r="3.2"/>
  <circle class="pt" cx="138.2" cy="125" r="3.2"/>
  <circle class="pt" cx="283.3" cy="125" r="3.2"/>
  <circle class="pt" cx="206.7" cy="189.3" r="3.2"/>

  <text x="81.7" y="25" text-anchor="end">E</text>
  <text x="341.7" y="21.7" text-anchor="middle">F</text>
  <text x="13.3" y="241.7" text-anchor="end">A</text>
  <text x="135" y="111.7" text-anchor="end">B</text>
  <text x="290" y="113.3">C</text>
  <text x="215" y="208.3">D</text>
`;

/** The [Ad ray question 45's solution draws through the corner point A. */
const Q45_AUX_SVG = `
  <defs>
    <marker id="arrow-q45-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="23.3" y1="221.3" x2="150" y2="221.3" marker-end="url(#arrow-q45-aux)"/>
  <text class="val" x="158" y="226">d</text>
`;

/** Question 46's corner A, which sits above both parallel rays. */
const q46Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q46-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="148.1" y1="104.9" x2="385.2" y2="104.9" marker-end="url(#arrow-q46-${suffix})"/>
  <line class="ln" x1="237" y1="187.6" x2="96.3" y2="187.6" marker-end="url(#arrow-q46-${suffix})"/>
  <line class="ln" x1="27" y1="95.7" x2="298.9" y2="22.8" marker-start="url(#arrow-q46-${suffix})" marker-end="url(#arrow-q46-${suffix})"/>
  <line class="ln" x1="163" y1="59.3" x2="288.3" y2="104.9"/>
  <line class="ln" x1="163" y1="59.3" x2="237" y2="187.6"/>

  <path class="par" d="M348.1,96 L358.5,104.9 L348.1,113.8"/>
  <path class="par" d="M136.3,178.7 L125.9,187.6 L136.3,196.4"/>

  <path class="arc" d="M332.7,104.9 A44.4,44.4 0 0 0 246.6,89.7"/>
  <text class="val" x="325" y="45" text-anchor="middle">160°</text>

  <path class="arc" d="M195.5,187.6 A41.5,41.5 0 0 1 216.2,151.7"/>
  <text class="val" x="179.3" y="164.4" text-anchor="end">60°</text>

  <path class="arc" d="M188.2,102.9 A50.4,50.4 0 0 1 114.3,72.3"/>
  <text class="val" x="133.3" y="127.4" text-anchor="middle">3x</text>

  <path class="arc" d="M220.3,44 A59.3,59.3 0 0 1 218.7,79.6"/>
  <text class="val" x="238" y="78">x</text>

  <circle class="pt" cx="163" cy="59.3" r="3.2"/>
  <circle class="pt" cx="288.3" cy="104.9" r="3.2"/>
  <circle class="pt" cx="348.1" cy="104.9" r="3.2"/>
  <circle class="pt" cx="237" cy="187.6" r="3.2"/>
  <circle class="pt" cx="140.7" cy="187.6" r="3.2"/>
  <circle class="pt" cx="27" cy="95.7" r="3.2"/>
  <circle class="pt" cx="298.9" cy="22.8" r="3.2"/>

  <text x="154.1" y="51.9" text-anchor="end">A</text>
  <text x="284.4" y="127.4" text-anchor="middle">B</text>
  <text x="352.6" y="127.4" text-anchor="middle">E</text>
  <text x="241.5" y="210.4">C</text>
  <text x="140.7" y="210.4" text-anchor="middle">D</text>
  <text x="17.8" y="102.2" text-anchor="end">K</text>
  <text x="308.1" y="16.3">L</text>
`;

/** The [Ad ray question 46's solution draws through the corner point A. */
const Q46_AUX_SVG = `
  <defs>
    <marker id="arrow-q46-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="163" y1="59.3" x2="300" y2="59.3" marker-end="url(#arrow-q46-aux)"/>
  <text class="val" x="308" y="64">d</text>
`;

/** Question 48's corner E, where the zigzag leaves the parallel rays. */
const q48Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q48-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="158.6" y1="137.9" x2="386.2" y2="137.9" marker-end="url(#arrow-q48-${suffix})"/>
  <line class="ln" x1="345.5" y1="74.6" x2="220.7" y2="74.6" marker-end="url(#arrow-q48-${suffix})"/>
  <line class="ln" x1="345.5" y1="74.6" x2="209.9" y2="169.7" marker-end="url(#arrow-q48-${suffix})"/>
  <line class="ln" x1="158.6" y1="137.9" x2="116.1" y2="21.2"/>
  <line class="ln" x1="116.1" y1="21.2" x2="14.6" y2="92.3" marker-end="url(#arrow-q48-${suffix})"/>

  <path class="arc" d="M306.9,74.6 A38.6,38.6 0 0 0 313.9,96.7"/>
  <text class="val" x="285.5" y="96.6" text-anchor="end">35°</text>

  <path class="arc" d="M200,137.9 A41.4,41.4 0 0 0 144.4,99"/>
  <text class="val" x="185" y="105">110°</text>

  <path class="arc" d="M82.2,44.9 A41.4,41.4 0 0 0 130.3,60.1"/>
  <text class="val" x="88.3" y="84.1" text-anchor="middle">α</text>

  <circle class="pt" cx="158.6" cy="137.9" r="3.2"/>
  <circle class="pt" cx="255.2" cy="137.9" r="3.2"/>
  <circle class="pt" cx="345.5" cy="74.6" r="3.2"/>
  <circle class="pt" cx="249" cy="74.6" r="3.2"/>
  <circle class="pt" cx="116.1" cy="21.2" r="3.2"/>
  <circle class="pt" cx="20.1" cy="88.6" r="3.2"/>

  <text x="158.6" y="160" text-anchor="middle">A</text>
  <text x="258" y="160" text-anchor="middle">B</text>
  <text x="353.1" y="66.2">C</text>
  <text x="244.1" y="63.4" text-anchor="end">D</text>
  <text x="107.6" y="13.8" text-anchor="end">E</text>
  <text x="12.4" y="107.6" text-anchor="end">F</text>
`;

/** The d line question 48's solution draws through the corner point E. */
const Q48_AUX_SVG = `
  <line class="aux" x1="40" y1="21.2" x2="200" y2="21.2"/>
  <text class="val" x="208" y="26">d</text>
`;

/** Question 49's E on the [AF ray, with [EC cutting the parallel [CD. */
const q49Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q49-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="51.1" y1="263.8" x2="374.5" y2="263.8" marker-end="url(#arrow-q49-${suffix})"/>
  <line class="ln" x1="17" y1="188.4" x2="374.5" y2="188.4" marker-start="url(#arrow-q49-${suffix})" marker-end="url(#arrow-q49-${suffix})"/>
  <line class="ln" x1="51.1" y1="263.8" x2="162.7" y2="24.9" marker-end="url(#arrow-q49-${suffix})"/>
  <line class="ln" x1="133.8" y1="86.4" x2="161.2" y2="188.4"/>

  <path class="par" d="M246.8,253.6 L259.6,263.8 L246.8,274"/>
  <path class="par" d="M237.2,178.2 L250,188.4 L237.2,198.6"/>

  <path class="arc" d="M102.2,263.8 A51.1,51.1 0 0 0 72.7,217.5"/>
  <text class="val" x="119.1" y="234.9">65°</text>

  <path class="arc" d="M152.5,46.3 A44.3,44.3 0 0 1 145.3,129.2"/>
  <text class="val" x="206" y="108">140°</text>

  <path class="arc" d="M208.9,188.4 A47.7,47.7 0 0 0 148.9,142.3"/>
  <text class="val" x="209.3" y="137.9">α</text>

  <circle class="pt" cx="51.1" cy="263.8" r="3.2"/>
  <circle class="pt" cx="289.4" cy="263.8" r="3.2"/>
  <circle class="pt" cx="161.2" cy="188.4" r="3.2"/>
  <circle class="pt" cx="289.4" cy="188.4" r="3.2"/>
  <circle class="pt" cx="133.8" cy="86.4" r="3.2"/>

  <text x="44.3" y="291.1" text-anchor="end">A</text>
  <text x="289.4" y="291.1" text-anchor="middle">B</text>
  <text x="151.5" y="212.8" text-anchor="end">C</text>
  <text x="289.4" y="212.8" text-anchor="middle">D</text>
  <text x="122.6" y="80" text-anchor="end">E</text>
  <text x="170.2" y="18.7">F</text>
`;

/** The [Ed ray question 49's solution draws through E. */
const Q49_AUX_SVG = `
  <defs>
    <marker id="arrow-q49-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="133.8" y1="86.4" x2="250" y2="86.4" marker-end="url(#arrow-q49-aux)"/>
  <text class="val" x="258" y="91">d</text>
`;

/** Question 50's three parallel rays cut by the bisector [AF. */
const q50Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q50-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="8.3" y1="225" x2="391.7" y2="225" marker-start="url(#arrow-q50-${suffix})" marker-end="url(#arrow-q50-${suffix})"/>
  <line class="ln" x1="182.5" y1="171.7" x2="36.7" y2="171.7" marker-end="url(#arrow-q50-${suffix})"/>
  <line class="ln" x1="250.8" y1="141.7" x2="380" y2="141.7" marker-end="url(#arrow-q50-${suffix})"/>
  <line class="ln" x1="208.3" y1="25" x2="40.3" y2="225"/>
  <line class="ln" x1="208.3" y1="25" x2="281.2" y2="225"/>
  <line class="ln" x1="208.3" y1="25" x2="172.9" y2="225"/>

  <path class="arc" d="M90.3,225 A50,50 0 0 0 72.4,186.7"/>
  <text class="val" x="111.7" y="200">50°</text>

  <path class="arc" d="M294.1,141.7 A43.3,43.3 0 0 0 236,101"/>
  <text class="val" x="293.3" y="93.3">110°</text>

  <path class="arc" d="M135.8,171.7 A46.7,46.7 0 0 1 190.6,125.7"/>
  <text class="val" x="140" y="128.3">α</text>

  <path class="arc" d="M171.9,68.4 A56.7,56.7 0 0 0 198.5,80.8"/>
  <line class="tick" x1="187.8" y1="68.8" x2="180.8" y2="83.8"/>
  <path class="arc" d="M198.5,80.8 A56.7,56.7 0 0 0 227.7,78.3"/>
  <line class="tick" x1="212.5" y1="73.2" x2="214" y2="89.8"/>

  <circle class="pt" cx="208.3" cy="25" r="3.2"/>
  <circle class="pt" cx="40.3" cy="225" r="3.2"/>
  <circle class="pt" cx="281.2" cy="225" r="3.2"/>
  <circle class="pt" cx="182.5" cy="171.7" r="3.2"/>
  <circle class="pt" cx="75" cy="171.7" r="3.2"/>
  <circle class="pt" cx="250.8" cy="141.7" r="3.2"/>
  <circle class="pt" cx="341.7" cy="141.7" r="3.2"/>

  <text x="208.3" y="11.7" text-anchor="middle">A</text>
  <text x="33.3" y="251.7" text-anchor="end">B</text>
  <text x="286.7" y="251.7">C</text>
  <text x="71.7" y="158.3" text-anchor="middle">K</text>
  <text x="170" y="161.7" text-anchor="end">F</text>
  <text x="245" y="131.7" text-anchor="end">D</text>
  <text x="341.7" y="131.7" text-anchor="middle">E</text>
`;

/** The [Ad ray question 50's solution draws through the vertex A. */
const Q50_AUX_SVG = `
  <defs>
    <marker id="arrow-q50-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="208.3" y1="25" x2="330" y2="25" marker-end="url(#arrow-q50-aux)"/>
  <text class="val" x="338" y="30">d</text>
`;

/** Question 52's two bisector pairs, meeting at the corners E and F. */
const q52Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q52-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="7.5" y1="25.7" x2="380.4" y2="25.7" marker-start="url(#arrow-q52-${suffix})" marker-end="url(#arrow-q52-${suffix})"/>
  <line class="ln" x1="22.6" y1="221.9" x2="374.3" y2="221.9" marker-start="url(#arrow-q52-${suffix})" marker-end="url(#arrow-q52-${suffix})"/>
  <path class="ln" d="M317,25.7 L40,148.9 L264.1,221.9"/>
  <path class="ln" d="M317,25.7 L189.1,167.6 L264.1,221.9"/>

  <path class="arc" d="M268.7,25.7 A48.3,48.3 0 0 0 272.9,45.3"/>
  <line class="tick" x1="277.1" y1="34.1" x2="262.3" y2="37.3"/>
  <path class="arc" d="M272.9,45.3 A48.3,48.3 0 0 0 284.7,61.6"/>
  <line class="tick" x1="284.1" y1="49.7" x2="271.9" y2="58.5"/>

  <path class="arc" d="M218.8,221.9 A45.3,45.3 0 0 1 221,207.9"/>
  <line class="tick" x1="226.6" y1="217.9" x2="211.7" y2="216.2"/>
  <line class="tick" x1="227.2" y1="214" x2="212.6" y2="210.8"/>
  <path class="arc" d="M221,207.9 A45.3,45.3 0 0 1 227.4,195.3"/>
  <line class="tick" x1="229.7" y1="206.5" x2="215.9" y2="200.4"/>
  <line class="tick" x1="231.6" y1="203" x2="218.4" y2="195.5"/>

  <path class="arc" d="M81.4,130.5 A45.3,45.3 0 0 1 83.1,162.9"/>
  <text class="val" x="118" y="137">b</text>

  <path class="arc" d="M217.4,136.2 A42.3,42.3 0 0 1 223.3,192.5"/>
  <text class="val" x="256.6" y="167.6">a</text>

  <circle class="pt" cx="90.6" cy="25.7" r="3.2"/>
  <circle class="pt" cx="317" cy="25.7" r="3.2"/>
  <circle class="pt" cx="105.7" cy="221.9" r="3.2"/>
  <circle class="pt" cx="264.1" cy="221.9" r="3.2"/>
  <circle class="pt" cx="40" cy="148.9" r="3.2"/>
  <circle class="pt" cx="189.1" cy="167.6" r="3.2"/>

  <text x="90.6" y="13.6" text-anchor="middle">A</text>
  <text x="317" y="13.6" text-anchor="middle">B</text>
  <text x="105.7" y="246" text-anchor="middle">C</text>
  <text x="268.7" y="246">D</text>
  <text x="30.2" y="155.5" text-anchor="end">E</text>
  <text x="179.6" y="173.6" text-anchor="end">F</text>
`;

/** The e and f parallels question 52's solution draws through E and F. */
const Q52_AUX_SVG = `
  <line class="aux" x1="20" y1="148.9" x2="170" y2="148.9"/>
  <text class="val" x="178" y="153">e</text>

  <line class="aux" x1="150" y1="167.6" x2="225" y2="167.6"/>
  <text class="val" x="233" y="172">f</text>
`;

/** Question 53's three parallel rays cut by the bisector [KC. */
const q53Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q53-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="151.4" y1="29.9" x2="12.8" y2="29.9" marker-end="url(#arrow-q53-${suffix})"/>
  <line class="ln" x1="195.4" y1="72" x2="368" y2="72" marker-end="url(#arrow-q53-${suffix})"/>
  <line class="ln" x1="231.4" y1="114.2" x2="384" y2="114.2" marker-end="url(#arrow-q53-${suffix})"/>
  <path class="ln" d="M72,248 L151.4,29.9"/>
  <path class="ln" d="M72,248 L231.4,114.2"/>
  <path class="ln" d="M72,248 L195.4,72"/>

  <path class="arc" d="M103.4,29.9 A48,48 0 0 0 135,75"/>
  <text class="val" x="89.6" y="75.2" text-anchor="middle">70°</text>

  <path class="arc" d="M276.2,114.2 A44.8,44.8 0 0 1 197.1,143"/>
  <text class="val" x="259.2" y="182.4">140°</text>

  <path class="arc" d="M93.9,187.9 A64,64 0 0 1 108.7,195.6"/>
  <line class="tick" x1="97.8" y1="198.2" x2="105.3" y2="184.2"/>
  <path class="arc" d="M108.7,195.6 A64,64 0 0 1 121,206.9"/>
  <line class="tick" x1="110" y1="206.7" x2="120.6" y2="194.9"/>

  <path class="arc" d="M237,72 A41.6,41.6 0 0 1 171.5,106.1"/>

  <circle class="pt" cx="151.4" cy="29.9" r="3.2"/>
  <circle class="pt" cx="56" cy="29.9" r="3.2"/>
  <circle class="pt" cx="195.4" cy="72" r="3.2"/>
  <circle class="pt" cx="304" cy="72" r="3.2"/>
  <circle class="pt" cx="231.4" cy="114.2" r="3.2"/>
  <circle class="pt" cx="336" cy="114.2" r="3.2"/>
  <circle class="pt" cx="72" cy="248" r="3.2"/>

  <text x="56" y="17.6" text-anchor="middle">B</text>
  <text x="155.2" y="17.6" text-anchor="middle">A</text>
  <text x="185.6" y="62.4" text-anchor="end">C</text>
  <text x="304" y="60.8" text-anchor="middle">D</text>
  <text x="222.4" y="105.6" text-anchor="end">E</text>
  <text x="336" y="104" text-anchor="middle">F</text>
  <text x="72" y="273.6" text-anchor="middle">K</text>
`;

/** The [Kd ray question 53's solution draws through the vertex K. */
const Q53_AUX_SVG = `
  <defs>
    <marker id="arrow-q53-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="72" y1="248" x2="200" y2="248" marker-end="url(#arrow-q53-aux)"/>
  <text class="val" x="208" y="253">d</text>
`;

/** Question 55's A-E-F-C path between the parallel [AB and [CD rays. */
const q55Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q55-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="307.7" y1="41" x2="20.5" y2="41" marker-end="url(#arrow-q55-${suffix})"/>
  <line class="ln" x1="187" y1="230.8" x2="379.5" y2="230.8" marker-end="url(#arrow-q55-${suffix})"/>
  <path class="ln" d="M307.7,41 L147.9,133.3 L61.1,319.2 L187,230.8"/>

  <path class="arc" d="M246.2,41 A61.5,61.5 0 0 0 254.4,71.8"/>
  <text class="val" x="219.5" y="73.8" text-anchor="middle">30°</text>

  <path class="arc" d="M194.1,106.6 A53.3,53.3 0 0 1 125.4,181.6"/>
  <text class="val" x="217" y="178">a</text>

  <path class="arc" d="M236.2,230.8 A49.2,49.2 0 0 1 146.7,259"/>
  <text class="val" x="215.4" y="311.8">a</text>

  <path class="arc" d="M83.6,270.9 A53.3,53.3 0 0 1 104.8,288.6"/>

  <circle class="pt" cx="307.7" cy="41" r="3.2"/>
  <circle class="pt" cx="82.1" cy="41" r="3.2"/>
  <circle class="pt" cx="147.9" cy="133.3" r="3.2"/>
  <circle class="pt" cx="187" cy="230.8" r="3.2"/>
  <circle class="pt" cx="307.7" cy="230.8" r="3.2"/>
  <circle class="pt" cx="61.1" cy="319.2" r="3.2"/>

  <text x="82.1" y="24.6" text-anchor="middle">B</text>
  <text x="320" y="30.8">A</text>
  <text x="135.4" y="125.1" text-anchor="end">E</text>
  <text x="176.4" y="217.4" text-anchor="end">C</text>
  <text x="307.7" y="215.4" text-anchor="middle">D</text>
  <text x="47.2" y="342.6" text-anchor="end">F</text>
`;

/** The e and f parallels question 55's solution draws through E and F. */
const Q55_AUX_SVG = `
  <line class="aux" x1="100" y1="133.3" x2="250" y2="133.3"/>
  <text class="val" x="258" y="138">e</text>

  <line class="aux" x1="20" y1="319.2" x2="170" y2="319.2"/>
  <text class="val" x="178" y="324">f</text>
`;

/** Question 58's four-corner zigzag between the parallels LK and PR. */
const q58Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q58-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="8.9" y1="26.7" x2="346.7" y2="26.7" marker-start="url(#arrow-q58-${suffix})" marker-end="url(#arrow-q58-${suffix})"/>
  <line class="ln" x1="35.6" y1="285.5" x2="382.2" y2="285.5" marker-start="url(#arrow-q58-${suffix})" marker-end="url(#arrow-q58-${suffix})"/>
  <path class="ln" d="M168.9,26.7 L106.7,134.4 L106.7,232.2 L199.1,285.5"/>

  <path class="arc" d="M218.7,26.7 A49.8,49.8 0 0 1 144,69.8"/>
  <text class="val" x="209.8" y="97.8">b</text>

  <path class="arc" d="M129.8,94.4 A46.2,46.2 0 0 1 106.7,180.6"/>
  <text class="val" x="179.6" y="160">a</text>

  <path class="arc" d="M106.7,186 A46.2,46.2 0 0 1 146.7,255.3"/>
  <text class="val" x="172.4" y="202.7">b</text>

  <path class="arc" d="M248.9,285.5 A49.8,49.8 0 0 0 156,260.6"/>
  <text class="val" x="222.2" y="218.7">a</text>

  <circle class="pt" cx="168.9" cy="26.7" r="3.2"/>
  <circle class="pt" cx="257.8" cy="26.7" r="3.2"/>
  <circle class="pt" cx="106.7" cy="134.4" r="3.2"/>
  <circle class="pt" cx="106.7" cy="232.2" r="3.2"/>
  <circle class="pt" cx="199.1" cy="285.5" r="3.2"/>
  <circle class="pt" cx="284.4" cy="285.5" r="3.2"/>

  <text x="161.8" y="14.2" text-anchor="end">L</text>
  <text x="257.8" y="12.4" text-anchor="middle">K</text>
  <text x="94.2" y="129.8" text-anchor="end">M</text>
  <text x="94.2" y="240" text-anchor="end">N</text>
  <text x="195.6" y="312.9" text-anchor="middle">P</text>
  <text x="284.4" y="312.9" text-anchor="middle">R</text>
`;

/** The m and n parallels question 58's solution draws through M and N. */
const Q58_AUX_SVG = `
  <line class="aux" x1="60" y1="134.4" x2="200" y2="134.4"/>
  <text class="val" x="208" y="139">m</text>

  <line class="aux" x1="60" y1="232.2" x2="200" y2="232.2"/>
  <text class="val" x="208" y="237">n</text>
`;

/** Question 60's B corner, where the unknown x cancels out. */
const q60Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q60-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="153.8" y1="23.1" x2="15.4" y2="23.1" marker-end="url(#arrow-q60-${suffix})"/>
  <line class="ln" x1="282.9" y1="153.5" x2="392.3" y2="153.5" marker-end="url(#arrow-q60-${suffix})"/>
  <line class="ln" x1="221.4" y1="260.2" x2="376.9" y2="260.2" marker-end="url(#arrow-q60-${suffix})"/>
  <path class="ln" d="M153.8,23.1 L118,156.8 L221.4,260.2 L282.9,153.5"/>

  <path class="arc" d="M107.6,23.1 A46.2,46.2 0 0 0 141.8,67.7"/>
  <text class="val" x="100" y="73.8" text-anchor="end">135° − x</text>

  <path class="arc" d="M129.2,115.2 A43.1,43.1 0 0 1 148.5,187.3"/>
  <line class="tick" x1="151.8" y1="147.7" x2="167.3" y2="143.6"/>

  <path class="arc" d="M326,153.5 A43.1,43.1 0 0 1 261.3,190.8"/>
  <line class="tick" x1="300.4" y1="183.8" x2="308.4" y2="197.7"/>

  <path class="arc" d="M267.6,260.2 A46.2,46.2 0 0 0 244.5,220.2"/>
  <text class="val" x="284.6" y="230.8">x</text>

  <circle class="pt" cx="153.8" cy="23.1" r="3.2"/>
  <circle class="pt" cx="46.2" cy="23.1" r="3.2"/>
  <circle class="pt" cx="118" cy="156.8" r="3.2"/>
  <circle class="pt" cx="221.4" cy="260.2" r="3.2"/>
  <circle class="pt" cx="323.1" cy="260.2" r="3.2"/>
  <circle class="pt" cx="282.9" cy="153.5" r="3.2"/>
  <circle class="pt" cx="353.8" cy="153.5" r="3.2"/>

  <text x="46.2" y="12.3" text-anchor="middle">K</text>
  <text x="160" y="12.3">A</text>
  <text x="107.7" y="163.1" text-anchor="end">B</text>
  <text x="212.3" y="281.5" text-anchor="end">C</text>
  <text x="323.1" y="283.1" text-anchor="middle">M</text>
  <text x="287.6" y="144.6">D</text>
  <text x="353.8" y="144.6" text-anchor="middle">L</text>
`;

/** The [Bd ray question 60's solution draws through the corner point B. */
const Q60_AUX_SVG = `
  <defs>
    <marker id="arrow-q60-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="118" y1="156.8" x2="230" y2="156.8" marker-end="url(#arrow-q60-aux)"/>
  <text class="val" x="238" y="161">d</text>
`;

/** Question 61's three parallel rays with the equal angles at A. */
const q61Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q61-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="195.6" y1="26.7" x2="17.8" y2="26.7" marker-end="url(#arrow-q61-${suffix})"/>
  <line class="ln" x1="97.8" y1="196.1" x2="302.2" y2="196.1" marker-end="url(#arrow-q61-${suffix})"/>
  <line class="ln" x1="200" y1="249.1" x2="382.2" y2="249.1" marker-end="url(#arrow-q61-${suffix})"/>
  <path class="ln" d="M195.6,26.7 L97.8,196.1"/>
  <path class="ln" d="M195.6,26.7 L87.8,88.9"/>
  <path class="ln" d="M87.8,88.9 L200,249.1"/>

  <path class="arc" d="M135.2,26.7 A60.4,60.4 0 0 0 143.3,56.9"/>
  <text class="val" x="112" y="55.1" text-anchor="middle">x</text>
  <path class="arc" d="M143.3,56.9 A60.4,60.4 0 0 0 165.4,79"/>
  <text class="val" x="131.6" y="94.2" text-anchor="middle">x</text>

  <path class="arc" d="M147.6,196.1 A49.8,49.8 0 0 0 122.7,153"/>
  <text class="val" x="167.1" y="165.3">60°</text>

  <path class="arc" d="M249.8,249.1 A49.8,49.8 0 0 0 171.4,208.3"/>
  <text class="val" x="255" y="159">125°</text>

  <path class="arc" d="M134,62.2 A53.3,53.3 0 0 1 118.4,132.6"/>
  <text class="val" x="168.9" y="112">y</text>

  <circle class="pt" cx="195.6" cy="26.7" r="3.2"/>
  <circle class="pt" cx="62.2" cy="26.7" r="3.2"/>
  <circle class="pt" cx="87.8" cy="88.9" r="3.2"/>
  <circle class="pt" cx="97.8" cy="196.1" r="3.2"/>
  <circle class="pt" cx="240" cy="196.1" r="3.2"/>
  <circle class="pt" cx="200" cy="249.1" r="3.2"/>
  <circle class="pt" cx="328.9" cy="249.1" r="3.2"/>

  <text x="62.2" y="14.2" text-anchor="middle">E</text>
  <text x="206.2" y="19.6">A</text>
  <text x="76.4" y="83.6" text-anchor="end">B</text>
  <text x="87.1" y="188.4" text-anchor="end">C</text>
  <text x="240" y="184.9" text-anchor="middle">K</text>
  <text x="190.2" y="241.9" text-anchor="end">D</text>
  <text x="328.9" y="241.9" text-anchor="middle">L</text>
`;

/** The [Bd ray question 61's solution draws through B. */
const Q61_AUX_SVG = `
  <defs>
    <marker id="arrow-q61-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="87.8" y1="88.9" x2="200" y2="88.9" marker-end="url(#arrow-q61-aux)"/>
  <text class="val" x="208" y="93">d</text>
`;

/** Question 64's two bisectors, meeting the parallels at K and crossing at L. */
const q64Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q64-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="7.3" y1="106.2" x2="320" y2="106.2" marker-start="url(#arrow-q64-${suffix})" marker-end="url(#arrow-q64-${suffix})"/>
  <line class="ln" x1="94.5" y1="208" x2="385.5" y2="208" marker-start="url(#arrow-q64-${suffix})" marker-end="url(#arrow-q64-${suffix})"/>
  <path class="ln" d="M87.3,18 L219.3,246.7"/>
  <path class="ln" d="M296.4,136.6 L219.3,246.7"/>
  <path class="ln" d="M181.8,30.5 L138.2,106.2"/>
  <path class="ln" d="M181.8,30.5 L246.4,208"/>

  <path class="arc" d="M160,68.3 A43.6,43.6 0 0 0 196.7,71.5"/>
  <text class="val" x="176" y="98" text-anchor="middle">50°</text>

  <path class="arc" d="M82.9,106.2 A55.3,55.3 0 0 1 110.5,58.3"/>
  <line class="tick" x1="96.6" y1="82.2" x2="84" y2="74.9"/>
  <path class="arc" d="M110.5,58.3 A55.3,55.3 0 0 1 165.9,58.3"/>
  <line class="tick" x1="138.2" y1="58.2" x2="138.2" y2="43.6"/>

  <path class="arc" d="M304.6,208 A58.2,58.2 0 0 0 279.8,160.3"/>
  <line class="tick" x1="291.5" y1="184.4" x2="304.4" y2="177.7"/>
  <path class="arc" d="M279.8,160.3 A58.2,58.2 0 0 0 226.5,153.3"/>
  <line class="tick" x1="253.1" y1="157.5" x2="255" y2="143.1"/>

  <path class="arc" d="M197.5,208.9 A43.6,43.6 0 0 1 244.3,211"/>
  <text class="val" x="212" y="172" text-anchor="middle">α</text>

  <circle class="pt" cx="87.3" cy="18" r="3.2"/>
  <circle class="pt" cx="181.8" cy="30.5" r="3.2"/>
  <circle class="pt" cx="138.2" cy="106.2" r="3.2"/>
  <circle class="pt" cx="58.2" cy="106.2" r="3.2"/>
  <circle class="pt" cx="246.4" cy="208" r="3.2"/>
  <circle class="pt" cx="327.3" cy="208" r="3.2"/>
  <circle class="pt" cx="296.4" cy="136.6" r="3.2"/>
  <circle class="pt" cx="219.3" cy="246.7" r="3.2"/>

  <text x="80" y="11.6" text-anchor="end">E</text>
  <text x="190.5" y="23.3">K</text>
  <text x="58.2" y="96" text-anchor="middle">B</text>
  <text x="138.2" y="129.5" text-anchor="end">A</text>
  <text x="327.3" y="197.8" text-anchor="middle">D</text>
  <text x="237.1" y="197.8" text-anchor="end">C</text>
  <text x="304" y="130.9">F</text>
  <text x="219.6" y="267.6" text-anchor="middle">L</text>
`;

/** The [Kd and [Ld rays question 64's solution draws. */
const Q64_AUX_SVG = `
  <defs>
    <marker id="arrow-q64-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="181.8" y1="30.5" x2="280" y2="30.5" marker-end="url(#arrow-q64-aux)"/>
  <text class="val" x="288" y="35">d</text>

  <line class="aux" x1="219.3" y1="246.7" x2="320" y2="246.7" marker-end="url(#arrow-q64-aux)"/>
  <text class="val" x="328" y="251">d</text>
`;

/** Question 66's two paths between the parallels: A-B-C-D and A-E-D. */
const q66Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q66-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="8" y1="28.8" x2="368" y2="28.8" marker-start="url(#arrow-q66-${suffix})" marker-end="url(#arrow-q66-${suffix})"/>
  <line class="ln" x1="72" y1="317.6" x2="392" y2="317.6" marker-start="url(#arrow-q66-${suffix})" marker-end="url(#arrow-q66-${suffix})"/>
  <path class="ln" d="M88,28.8 L46.9,141.6 L185.4,221.6 L185.4,317.6"/>
  <path class="ln" d="M88,28.8 L247.2,255.8 L185.4,317.6"/>

  <path class="arc" d="M145.6,28.8 A57.6,57.6 0 0 1 121,76"/>
  <line class="tick" x1="132" y1="51.7" x2="146.2" y2="59"/>
  <path class="arc" d="M121,76 A57.6,57.6 0 0 1 68.3,82.9"/>
  <line class="tick" x1="94.4" y1="77.9" x2="96.6" y2="93.8"/>

  <path class="arc" d="M243,317.6 A57.6,57.6 0 0 0 226.1,276.9"/>
  <line class="tick" x1="231.2" y1="298.6" x2="246.1" y2="292.5"/>
  <path class="arc" d="M226.1,276.9 A57.6,57.6 0 0 0 185.4,260"/>
  <line class="tick" x1="204.5" y1="271.8" x2="210.6" y2="257"/>

  <path class="arc" d="M63.3,96.5 A48,48 0 0 1 88.5,165.6"/>
  <text class="val" x="116.8" y="123.2">α</text>

  <path class="arc" d="M185.4,266.4 A44.8,44.8 0 0 1 146.6,199.2"/>
  <text class="val" x="123.2" y="260.8" text-anchor="middle">120°</text>

  <circle class="pt" cx="88" cy="28.8" r="3.2"/>
  <circle class="pt" cx="280" cy="28.8" r="3.2"/>
  <circle class="pt" cx="46.9" cy="141.6" r="3.2"/>
  <circle class="pt" cx="185.4" cy="221.6" r="3.2"/>
  <circle class="pt" cx="185.4" cy="317.6" r="3.2"/>
  <circle class="pt" cx="320" cy="317.6" r="3.2"/>
  <circle class="pt" cx="247.2" cy="255.8" r="3.2"/>

  <text x="80" y="17.6" text-anchor="end">A</text>
  <text x="280" y="17.6" text-anchor="middle">P</text>
  <text x="36.8" y="136" text-anchor="end">B</text>
  <text x="174.4" y="216" text-anchor="end">C</text>
  <text x="177.6" y="342.4" text-anchor="end">D</text>
  <text x="320" y="342.4" text-anchor="middle">K</text>
  <text x="256" y="249.6">E</text>
`;

/** The m and n parallels question 66's solution draws through B and C. */
const Q66_AUX_SVG = `
  <line class="aux" x1="46.9" y1="141.6" x2="160" y2="141.6"/>
  <text class="val" x="168" y="146">m</text>

  <line class="aux" x1="185.4" y1="221.6" x2="320" y2="221.6"/>
  <text class="val" x="328" y="226">n</text>
`;

/** Question 67's two paths with [EC] // [BF]. */
const q67Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q67-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="8" y1="32" x2="392" y2="32" marker-start="url(#arrow-q67-${suffix})" marker-end="url(#arrow-q67-${suffix})"/>
  <line class="ln" x1="32" y1="248" x2="392" y2="248" marker-start="url(#arrow-q67-${suffix})" marker-end="url(#arrow-q67-${suffix})"/>
  <path class="ln" d="M104,32 L214.2,124.6 L127.8,248"/>
  <path class="ln" d="M312,32 L247.7,123.7 L258.6,248"/>

  <path class="par" d="M182.6,186.6 L165.6,194.2 L166.9,175.7"/>
  <path class="par" d="M291.4,78.1 L274.4,85.8 L275.7,67.2"/>

  <path class="arc" d="M152,32 A48,48 0 0 1 140.8,62.9"/>
  <text class="val" x="174.4" y="62.4">40°</text>

  <path class="arc" d="M188.5,161.3 A44.8,44.8 0 0 1 179.9,95.8"/>
  <text class="val" x="145.6" y="146" text-anchor="middle">x</text>

  <path class="arc" d="M273.4,87 A44.8,44.8 0 0 1 251.6,168.3"/>
  <text class="val" x="316.8" y="147.2">y</text>

  <path class="arc" d="M306.6,248 A48,48 0 0 0 254.4,200.2"/>
  <text class="val" x="310.4" y="201.6">95°</text>

  <circle class="pt" cx="104" cy="32" r="3.2"/>
  <circle class="pt" cx="312" cy="32" r="3.2"/>
  <circle class="pt" cx="214.2" cy="124.6" r="3.2"/>
  <circle class="pt" cx="247.7" cy="123.7" r="3.2"/>
  <circle class="pt" cx="127.8" cy="248" r="3.2"/>
  <circle class="pt" cx="258.6" cy="248" r="3.2"/>
  <circle class="pt" cx="352" cy="248" r="3.2"/>

  <text x="96" y="20.8" text-anchor="end">A</text>
  <text x="312" y="20.8" text-anchor="middle">B</text>
  <text x="204.8" y="116.8" text-anchor="end">E</text>
  <text x="254.4" y="116.8">F</text>
  <text x="120" y="273.6" text-anchor="end">C</text>
  <text x="252.8" y="273.6" text-anchor="end">D</text>
  <text x="352" y="273.6" text-anchor="middle">T</text>
`;

/** The e and f parallels question 67's solution draws through E and F. */
const Q67_AUX_SVG = `
  <line class="aux" x1="120" y1="124.6" x2="214.2" y2="124.6"/>
  <text class="val" x="112" y="129" text-anchor="end">e</text>

  <line class="aux" x1="247.7" y1="123.7" x2="340" y2="123.7"/>
  <text class="val" x="348" y="128">f</text>
`;

/** Question 68's A-C-D-E zigzag between the parallel [AB and [EF rays. */
const q68Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q68-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="110" y1="30" x2="370" y2="30" marker-end="url(#arrow-q68-${suffix})"/>
  <line class="ln" x1="30.6" y1="263" x2="230" y2="263" marker-end="url(#arrow-q68-${suffix})"/>
  <path class="ln" d="M110,30 L279.8,199.8 L203.8,363 L30.6,263"/>

  <path class="par" d="M250,18 L264,30 L250,42"/>
  <path class="par" d="M126,251 L140,263 L126,275"/>

  <path class="arc" d="M170,30 A60,60 0 0 1 152.4,72.4"/>
  <text class="val" x="198" y="70">45°</text>

  <path class="arc" d="M240.2,160.2 A56,56 0 0 0 256.1,250.5"/>
  <text class="val" x="194" y="222" text-anchor="middle">110°</text>

  <path class="arc" d="M155.3,335 A56,56 0 0 1 227.5,312.3"/>
  <text class="val" x="186" y="302" text-anchor="middle">85°</text>

  <path class="arc" d="M90.6,263 A60,60 0 0 1 82.6,293"/>
  <text class="val" x="120" y="292">α</text>

  <circle class="pt" cx="110" cy="30" r="3.2"/>
  <circle class="pt" cx="320" cy="30" r="3.2"/>
  <circle class="pt" cx="279.8" cy="199.8" r="3.2"/>
  <circle class="pt" cx="203.8" cy="363" r="3.2"/>
  <circle class="pt" cx="30.6" cy="263" r="3.2"/>
  <circle class="pt" cx="180.6" cy="263" r="3.2"/>

  <text x="100" y="18" text-anchor="end">A</text>
  <text x="320" y="16" text-anchor="middle">B</text>
  <text x="292" y="190">C</text>
  <text x="194" y="392" text-anchor="end">D</text>
  <text x="20" y="254" text-anchor="end">E</text>
  <text x="180" y="250" text-anchor="middle">F</text>
`;

/** The c and d parallels question 68's solution draws through C and D. */
const Q68_AUX_SVG = `
  <line class="aux" x1="180" y1="199.8" x2="340" y2="199.8"/>
  <text class="val" x="348" y="204">c</text>

  <line class="aux" x1="120" y1="363" x2="290" y2="363"/>
  <text class="val" x="298" y="368">d</text>
`;

/** Question 70's three-corner zigzag between the parallel [AK and [EF rays. */
const q70Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q70-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="80" y1="21.8" x2="363.6" y2="21.8" marker-end="url(#arrow-q70-${suffix})"/>
  <line class="ln" x1="183.4" y1="305.9" x2="385.5" y2="305.9" marker-end="url(#arrow-q70-${suffix})"/>
  <path class="ln" d="M80,21.8 L130.9,109.9 L52.9,175.4 L148.7,210.2 L183.4,305.9"/>

  <path class="par" d="M218.2,13.1 L228.4,21.8 L218.2,30.5"/>
  <path class="par" d="M280.7,297.2 L290.9,305.9 L280.7,314.6"/>

  <path class="arc" d="M123.6,21.8 A43.6,43.6 0 0 1 101.8,59.6"/>
  <text class="val" x="139.6" y="59.6">α</text>

  <path class="arc" d="M99.7,136.1 A40.7,40.7 0 0 1 110.5,74.7"/>
  <text class="val" x="66.9" y="104.7" text-anchor="end">100°</text>

  <path class="arc" d="M81.9,151.1 A37.8,37.8 0 0 1 88.4,188.3"/>
  <text class="val" x="113.5" y="170.2">α</text>

  <path class="arc" d="M161.6,245.7 A37.8,37.8 0 0 1 113.2,197.3"/>
  <text class="val" x="103.3" y="257.5" text-anchor="end">130°</text>

  <path class="arc" d="M227,305.9 A43.6,43.6 0 0 0 168.5,264.9"/>
  <text class="val" x="224" y="258.9">β</text>

  <circle class="pt" cx="80" cy="21.8" r="3.2"/>
  <circle class="pt" cx="283.6" cy="21.8" r="3.2"/>
  <circle class="pt" cx="130.9" cy="109.9" r="3.2"/>
  <circle class="pt" cx="52.9" cy="175.4" r="3.2"/>
  <circle class="pt" cx="148.7" cy="210.2" r="3.2"/>
  <circle class="pt" cx="183.4" cy="305.9" r="3.2"/>
  <circle class="pt" cx="312.7" cy="305.9" r="3.2"/>

  <text x="72.7" y="13.1" text-anchor="end">A</text>
  <text x="283.6" y="11.6" text-anchor="middle">K</text>
  <text x="139.6" y="103.3">B</text>
  <text x="43.6" y="170.2" text-anchor="end">C</text>
  <text x="157.1" y="205.1">D</text>
  <text x="176.1" y="328.7" text-anchor="end">E</text>
  <text x="312.7" y="328.7" text-anchor="middle">F</text>
`;

/** The m, n and p parallels question 70's solution draws through B, C and D. */
const Q70_AUX_SVG = `
  <line class="aux" x1="75" y1="109.9" x2="200" y2="109.9"/>
  <text class="val" x="208" y="114">m</text>

  <line class="aux" x1="20" y1="175.4" x2="160" y2="175.4"/>
  <text class="val" x="168" y="180">n</text>

  <line class="aux" x1="90" y1="210.2" x2="240" y2="210.2"/>
  <text class="val" x="248" y="215">p</text>
`;

/** Question 71's two bisectors meeting at E between the parallels. */
const q71Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q71-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="324.3" y1="47.6" x2="17.3" y2="47.6" marker-end="url(#arrow-q71-${suffix})"/>
  <line class="ln" x1="345.9" y1="220.5" x2="28.1" y2="220.5" marker-end="url(#arrow-q71-${suffix})"/>
  <path class="ln" d="M324.3,47.6 L173.4,174.3 L345.9,220.5"/>
  <path class="ln" d="M324.3,47.6 L298.6,193.1 L345.9,220.5"/>

  <path class="par" d="M140.5,34.6 L125.4,47.6 L140.5,60.5"/>
  <path class="par" d="M151.4,207.6 L136.2,220.5 L151.4,233.5"/>

  <path class="arc" d="M246.5,47.6 A77.8,77.8 0 0 0 264.7,97.6"/>
  <line class="tick" x1="261.4" y1="70.5" x2="241.1" y2="77.9"/>
  <path class="arc" d="M264.7,97.6 A77.8,77.8 0 0 0 310.8,124.2"/>
  <line class="tick" x1="290.8" y1="105.6" x2="280" y2="124.4"/>
  <path class="arc" d="M211.9,47.6 A112.4,112.4 0 0 0 304.8,158.3"/>
  <text class="val" x="205" y="147" text-anchor="end">a</text>

  <path class="arc" d="M289.7,220.5 A56.2,56.2 0 0 1 291.6,206"/>
  <line class="tick" x1="300.8" y1="216.6" x2="279.2" y2="214.6"/>
  <line class="tick" x1="301.2" y1="212.5" x2="280" y2="208.8"/>
  <path class="arc" d="M291.6,206 A56.2,56.2 0 0 1 297.2,192.4"/>
  <line class="tick" x1="303.4" y1="204.9" x2="283" y2="197.5"/>
  <line class="tick" x1="304.9" y1="201.2" x2="285.2" y2="192.1"/>
  <path class="arc" d="M259.4,220.5 A86.5,86.5 0 0 1 271,177.2"/>
  <text class="val" x="231.4" y="210" text-anchor="end">b</text>

  <path class="arc" d="M223.1,132.6 A64.9,64.9 0 0 1 236.1,191.1"/>
  <text class="val" x="295" y="162" text-anchor="end">55°</text>

  <circle class="pt" cx="324.3" cy="47.6" r="3.2"/>
  <circle class="pt" cx="129.7" cy="47.6" r="3.2"/>
  <circle class="pt" cx="345.9" cy="220.5" r="3.2"/>
  <circle class="pt" cx="129.7" cy="220.5" r="3.2"/>
  <circle class="pt" cx="173.4" cy="174.3" r="3.2"/>
  <circle class="pt" cx="298.6" cy="193.1" r="3.2"/>

  <text x="324.3" y="30.3" text-anchor="middle">A</text>
  <text x="129.7" y="30.3" text-anchor="middle">B</text>
  <text x="358.9" y="246.5">C</text>
  <text x="129.7" y="255.1" text-anchor="middle">D</text>
  <text x="160" y="164.3" text-anchor="end">E</text>
  <text x="311.4" y="205.4">K</text>
`;

/** The d line question 71's solution draws through the corner E. */
const Q71_AUX_SVG = `
  <line class="aux" x1="100" y1="174.3" x2="280" y2="174.3"/>
  <text class="val" x="288" y="179">d</text>
`;

/** Question 72's corner B, which sits above both parallel rays. */
const q72Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q72-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="186.7" y1="141.9" x2="376" y2="141.9" marker-end="url(#arrow-q72-${suffix})"/>
  <line class="ln" x1="145.8" y1="260.5" x2="16" y2="260.5" marker-end="url(#arrow-q72-${suffix})"/>
  <path class="ln" d="M186.7,141.9 L104,24 L145.8,260.5"/>

  <path class="par" d="M276.8,132.3 L288,141.9 L276.8,151.5"/>
  <path class="par" d="M92.8,250.9 L81.6,260.5 L92.8,270.1"/>

  <path class="arc" d="M135.2,68.6 A54.4,54.4 0 0 1 113.4,77.6"/>
  <text class="val" x="112" y="110" text-anchor="end">25°</text>

  <path class="arc" d="M97.8,260.5 A48,48 0 0 1 137.5,213.2"/>
  <text class="val" x="86.4" y="220.8" text-anchor="end">80°</text>

  <path class="arc" d="M231.5,141.9 A44.8,44.8 0 0 0 161,105.2"/>
  <text class="val" x="224" y="84.8">α</text>

  <circle class="pt" cx="104" cy="24" r="3.2"/>
  <circle class="pt" cx="186.7" cy="141.9" r="3.2"/>
  <circle class="pt" cx="312" cy="141.9" r="3.2"/>
  <circle class="pt" cx="145.8" cy="260.5" r="3.2"/>
  <circle class="pt" cx="56" cy="260.5" r="3.2"/>

  <text x="94.4" y="17.6" text-anchor="end">B</text>
  <text x="177.6" y="134.4" text-anchor="end">C</text>
  <text x="312" y="131.2" text-anchor="middle">D</text>
  <text x="155.2" y="267.2">E</text>
  <text x="56" y="284.8" text-anchor="middle">F</text>
`;

/** The [Bd ray question 72's solution draws through the corner B. */
const Q72_AUX_SVG = `
  <defs>
    <marker id="arrow-q72-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="104" y1="24" x2="220" y2="24" marker-end="url(#arrow-q72-aux)"/>
  <text class="val" x="228" y="29">d</text>
`;

/** Question 74's bisector [CD, with C between the parallel [BA and [KL. */
const q74Svg = (suffix: string) => `
  <defs>
    <marker id="arrow-q74-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </marker>
  </defs>

  <line class="ln" x1="255.3" y1="25.5" x2="25.5" y2="25.5" marker-end="url(#arrow-q74-${suffix})"/>
  <line class="ln" x1="8.5" y1="341.5" x2="374.5" y2="341.5" marker-start="url(#arrow-q74-${suffix})" marker-end="url(#arrow-q74-${suffix})"/>
  <path class="ln" d="M255.3,25.5 L98.8,157.1 L131.3,341.5"/>
  <path class="ln" d="M98.8,157.1 L339.1,244.6 L131.3,341.5"/>

  <path class="par" d="M153.2,15.3 L141.3,25.5 L153.2,35.7"/>
  <path class="par" d="M224.7,331.3 L212.8,341.5 L224.7,351.7"/>

  <path class="arc" d="M204.2,25.5 A51.1,51.1 0 0 0 216.2,58.3"/>
  <text class="val" x="180.4" y="57.9" text-anchor="end">40°</text>

  <path class="arc" d="M143.2,119.9 A57.9,57.9 0 0 1 153.2,176.9"/>
  <line class="tick" x1="147.4" y1="148.4" x2="164.1" y2="145.3"/>
  <path class="arc" d="M153.2,176.9 A57.9,57.9 0 0 1 108.9,214.1"/>
  <line class="tick" x1="130.4" y1="194.6" x2="141.4" y2="207.7"/>

  <path class="arc" d="M80.2,341.5 A51.1,51.1 0 0 1 122.4,291.2"/>
  <text class="val" x="68.1" y="299.6" text-anchor="end">80°</text>

  <path class="arc" d="M118.3,267.7 A74.9,74.9 0 0 1 199.2,309.8"/>

  <path class="arc" d="M185.8,341.5 A54.5,54.5 0 0 0 180.7,318.5"/>
  <text class="val" x="212.8" y="330.3">α</text>

  <circle class="pt" cx="255.3" cy="25.5" r="3.2"/>
  <circle class="pt" cx="68.1" cy="25.5" r="3.2"/>
  <circle class="pt" cx="98.8" cy="157.1" r="3.2"/>
  <circle class="pt" cx="339.1" cy="244.6" r="3.2"/>
  <circle class="pt" cx="51.1" cy="341.5" r="3.2"/>
  <circle class="pt" cx="131.3" cy="341.5" r="3.2"/>
  <circle class="pt" cx="314.9" cy="341.5" r="3.2"/>

  <text x="68.1" y="13.6" text-anchor="middle">A</text>
  <text x="262.1" y="13.6">B</text>
  <text x="88.5" y="149.8" text-anchor="end">C</text>
  <text x="348.9" y="238.3">D</text>
  <text x="51.1" y="367.7" text-anchor="middle">K</text>
  <text x="122.6" y="367.7" text-anchor="end">E</text>
  <text x="314.9" y="367.7" text-anchor="middle">L</text>
`;

/** The [Cd ray question 74's solution draws through the corner C. */
const Q74_AUX_SVG = `
  <defs>
    <marker id="arrow-q74-aux" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path class="aux-head" d="M0,1 L9,5 L0,9"/>
    </marker>
  </defs>

  <line class="aux" x1="98.8" y1="157.1" x2="20" y2="157.1" marker-end="url(#arrow-q74-aux)"/>
  <text class="val" x="12" y="162" text-anchor="end">d</text>
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

  // ---------------------------------------------------------------- 39
  {
    id: 'angles-39',
    topic: 'Kenarları dik açılar',
    figure: {
      viewBox: '0 0 400 249',
      caption: 'Şekil 39',
      label:
        'AC doğrusu, ona dik olan BD doğrusu ve birbirine dik [BA ile DC doğruları; A ve D köşelerindeki açılar işaretli.',
      svg: `
          <defs>
            <marker id="arrow-q39" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="60.4" y1="188.7" x2="392.5" y2="188.7" marker-end="url(#arrow-q39)"/>
          <line class="ln" x1="14.2" y1="227.5" x2="222.2" y2="52.8" marker-start="url(#arrow-q39)"/>
          <line class="ln" x1="222.2" y1="15.1" x2="222.2" y2="234" marker-start="url(#arrow-q39)" marker-end="url(#arrow-q39)"/>
          <line class="ln" x1="222.2" y1="135.8" x2="295.7" y2="223.4" marker-end="url(#arrow-q39)"/>

          <path class="ln" d="M240.3,188.7 L240.3,170.5 L222.2,170.5"/>

          <path class="arc" d="M105.4,188.7 A45,45 0 0 0 94.9,159.8"/>
          <text class="val" x="150" y="161" text-anchor="middle">3x + 10</text>

          <path class="arc" d="M222.2,96.6 A39.2,39.2 0 0 1 247.4,165.8"/>
          <text class="val" x="285" y="119">12x + 20</text>

          <circle class="pt" cx="60.4" cy="188.7" r="3.2"/>
          <circle class="pt" cx="222.2" cy="52.8" r="3.2"/>
          <circle class="pt" cx="222.2" cy="135.8" r="3.2"/>
          <circle class="pt" cx="266.6" cy="188.7" r="3.2"/>

          <text x="51" y="205" text-anchor="end">A</text>
          <text x="211" y="48" text-anchor="end">B</text>
          <text x="211" y="133" text-anchor="end">D</text>
          <text x="273" y="178">C</text>
        `,
    },
    given: ['BD ⊥ [AC]', '[BA ⊥ DC', 'm(BDC) = 12x + 20', 'm(BAC) = 3x + 10'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAC) kaç derecedir?',
    choices: [
      { key: 'A', text: '30' },
      { key: 'B', text: '35' },
      { key: 'C', text: '40' },
      { key: 'D', text: '45' },
      { key: 'E', text: '50' },
    ],
    answer: 'C',
    hint: 'Kenarları karşılıklı dik iki açı ya eşittir ya da bütündür; şekilde biri dar, öteki geniştir.',
    solution: [
      {
        title: 'Kenarları dik açıları tanı',
        detail:
          'BAC açısının kenarları [AB ile [AC, BDC açısının kenarları ise [DB ile [DC’dir. BD ⊥ AC ve [BA ⊥ DC verildiğinden bu iki açının kenarları karşılıklı diktir.',
      },
      {
        title: 'Eşit mi, bütünler mi?',
        detail:
          'Kenarları karşılıklı dik açılar ya eşittir ya da bütündür. Şekilde BAC dar, BDC ise geniş açı olduğundan eşit olamazlar; bütündürler.',
      },
      {
        title: 'Denklemi kur',
        detail: '(12x + 20) + (3x + 10) = 180 → 15x + 30 = 180 → 15x = 150 → x = 10 bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'm(BAC) = 3 · 10 + 10 = 40° bulunur. Kontrol: m(BDC) = 12 · 10 + 20 = 140° ve 40 + 140 = 180 ✓',
      },
    ],
  },

  // ---------------------------------------------------------------- 40
  {
    id: 'angles-40',
    topic: 'Dik açı ve dik üçgen',
    figure: {
      viewBox: '0 0 400 206',
      caption: 'Şekil 40',
      label:
        'Paralel [AB ve [CE ışınları, onlara dik AC doğru parçası ve A’dan çıkıp F’de kırılarak D’ye giden çizgi; A ile F köşeleri dik.',
      svg: `
          <defs>
            <marker id="arrow-q40" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="50.9" y1="171.6" x2="378.2" y2="171.6" marker-start="url(#arrow-q40)" marker-end="url(#arrow-q40)"/>
          <line class="ln" x1="50.9" y1="26.2" x2="382.5" y2="26.2" marker-end="url(#arrow-q40)"/>
          <path class="ln" d="M50.9,171.6 L50.9,26.2 L109.4,109.5 L228.2,26.2"/>

          <path class="ln" d="M68.4,171.6 L68.4,154.2 L50.9,154.2"/>
          <path class="ln" d="M100.2,96.4 L113.3,87.3 L122.5,100.4"/>

          <path class="arc" d="M50.9,69.8 A43.6,43.6 0 0 0 75.9,61.9"/>
          <text class="val" x="74" y="99" text-anchor="middle">35°</text>

          <path class="arc" d="M266,26.2 A37.8,37.8 0 0 1 197.2,47.9"/>

          <circle class="pt" cx="50.9" cy="26.2" r="3.2"/>
          <circle class="pt" cx="228.2" cy="26.2" r="3.2"/>
          <circle class="pt" cx="276.4" cy="26.2" r="3.2"/>
          <circle class="pt" cx="50.9" cy="171.6" r="3.2"/>
          <circle class="pt" cx="210.9" cy="171.6" r="3.2"/>
          <circle class="pt" cx="109.4" cy="109.5" r="3.2"/>

          <text x="42" y="18" text-anchor="end">C</text>
          <text x="222" y="15" text-anchor="end">D</text>
          <text x="281" y="15">E</text>
          <text x="45" y="196" text-anchor="end">A</text>
          <text x="210.9" y="196" text-anchor="middle">B</text>
          <text x="109" y="134" text-anchor="middle">F</text>
        `,
    },
    given: ['[AB // [CE', 'm(CAB) = m(CFD) = 90°', 'm(ACF) = 35°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, FDE açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '135' },
      { key: 'B', text: '140' },
      { key: 'C', text: '145' },
      { key: 'D', text: '150' },
      { key: 'E', text: '155' },
    ],
    answer: 'C',
    hint: 'AC her iki paralele de diktir; C’deki 90°’yi 35° ile parçala, sonra CFD üçgenini kur.',
    solution: [
      {
        title: 'AC iki paralele de dik',
        detail:
          '[AB // [CE ve m(CAB) = 90° olduğundan AC doğru parçası [CE ışınına da diktir: m(ACE) = 90°.',
      },
      {
        title: 'FCD açısını bul',
        detail: 'D noktası [CE üzerinde olduğundan m(FCD) = m(ACE) − m(ACF) = 90 − 35 = 55° olur.',
      },
      {
        title: 'CFD üçgeninde topla',
        detail: 'm(CFD) = 90° verildiğinden 55 + 90 + m(FDC) = 180 → m(FDC) = 35° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'C, D, E doğrusal olduğundan m(FDC) ile m(FDE) bütünlerdir: m(FDE) = 180 − 35 = 145° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 41
  {
    id: 'angles-41',
    topic: 'Kenarları dik açılar',
    figure: {
      viewBox: '0 0 400 360',
      caption: 'Şekil 41',
      label:
        'Paralel [BA ve [FL ışınları arasındaki B-D-F kırık çizgisi ve K noktasından [BD ile [DF üzerine inen [KC ve [KE dikmeleri.',
      svg: `
          <defs>
            <marker id="arrow-q41" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="256" y1="46" x2="20" y2="46" marker-end="url(#arrow-q41)"/>
          <line class="ln" x1="204.6" y1="309.6" x2="20" y2="309.6" marker-end="url(#arrow-q41)"/>
          <path class="ln" d="M256,46 L307.4,187 L204.6,309.6"/>
          <line class="ln" x1="146" y1="196" x2="291.4" y2="143.2"/>
          <line class="ln" x1="146" y1="196" x2="236.4" y2="271.8"/>

          <path class="par" d="M148,34 L134,46 L148,58"/>
          <path class="par" d="M114,297.6 L100,309.6 L114,321.6"/>

          <path class="ln" d="M270.8,150.8 L263.2,130.2 L283.8,122.6"/>
          <path class="ln" d="M219.6,257.6 L205.4,274.4 L222.2,288.6"/>

          <path class="arc" d="M196,46 A60,60 0 0 0 276.5,102.4"/>
          <text class="val" x="208" y="120" text-anchor="middle">110°</text>

          <path class="arc" d="M144.6,309.6 A60,60 0 0 1 243.2,263.6"/>
          <text class="val" x="162" y="258" text-anchor="middle">130°</text>

          <path class="arc" d="M198.6,176.8 A56,56 0 0 1 188.9,232"/>
          <text class="val" x="224" y="216" text-anchor="middle">α</text>

          <circle class="pt" cx="256" cy="46" r="3.2"/>
          <circle class="pt" cx="66" cy="46" r="3.2"/>
          <circle class="pt" cx="307.4" cy="187" r="3.2"/>
          <circle class="pt" cx="204.6" cy="309.6" r="3.2"/>
          <circle class="pt" cx="56" cy="309.6" r="3.2"/>
          <circle class="pt" cx="146" cy="196" r="3.2"/>
          <circle class="pt" cx="291.4" cy="143.2" r="3.2"/>
          <circle class="pt" cx="236.4" cy="271.8" r="3.2"/>

          <text x="66" y="32" text-anchor="middle">A</text>
          <text x="260" y="30">B</text>
          <text x="132" y="204" text-anchor="end">K</text>
          <text x="302" y="132">C</text>
          <text x="318" y="180">D</text>
          <text x="248" y="288">E</text>
          <text x="192" y="330" text-anchor="end">F</text>
          <text x="56" y="342" text-anchor="middle">L</text>
        `,
    },
    given: ['[BA // [FL', '[KC ⊥ [BD]', '[KE ⊥ [DF]', 'm(ABD) = 110°', 'm(DFL) = 130°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EKC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '50' },
      { key: 'C', text: '60' },
      { key: 'D', text: '70' },
      { key: 'E', text: '80' },
    ],
    answer: 'C',
    hint: 'Önce D köşesindeki açıyı zikzak kuralıyla bul; ardından kenarları dik açıları kullan.',
    solution: [
      {
        title: 'D paralellerin dışında',
        detail:
          '[BA ve [FL ışınları sola bakarken D noktası sağda, yani paralellerin dışında kalıyor. Bu durumda m(ABD) + m(BDF) + m(DFL) = 360° olur.',
      },
      {
        title: 'BDF açısını bul',
        detail: 'm(BDF) = 360 − 110 − 130 = 120° bulunur.',
      },
      {
        title: 'Kenarları dik açıları tanı',
        detail:
          '[KC ⊥ [DB ve [KE ⊥ [DF olduğundan EKC açısının kenarları, BDF açısının kenarlarına karşılıklı diktir. Böyle iki açı ya eşittir ya da bütündür.',
      },
      {
        title: 'Sonuç',
        detail:
          'Şekilde BDF geniş, EKC ise dar açı olduğundan bütündürler: α = 180 − 120 = 60° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 42
  {
    id: 'angles-42',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 229',
      caption: 'Şekil 42',
      label:
        'Ters yönlere bakan paralel [BA ve [DE ışınları ile aralarındaki dik C köşesi; B’deki açı 128°, D’deki açı α.',
      svg: q42Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 229',
      caption: 'Şekil 42 — yardımcı çizim',
      label:
        'Aynı şekilde, C köşesinden [BA ile aynı yöne bakan kesik çizgili [Cd yardımcı ışını çizilmiştir.',
      svg: q42Svg('s') + Q42_AUX_SVG,
    },
    given: ['[BA // [DE', '[DC] ⊥ [BC]', 'm(ABC) = 128°', 'm(CDE) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '34' },
      { key: 'B', text: '36' },
      { key: 'C', text: '38' },
      { key: 'D', text: '40' },
      { key: 'E', text: '42' },
    ],
    answer: 'C',
    hint: 'C’den [BA ile aynı yöne (sola) bakan bir ışın çiz; bu ışın 90°’lik açıyı ikiye böler.',
    solution: [
      {
        title: 'C’den paralel çiz',
        detail:
          'C köşesinden [BA ile aynı yöne (sola) bakan [Cd ışınını çizelim: [Cd // [BA // [DE olur.',
      },
      {
        title: 'Üstteki parçayı bul',
        detail:
          'BC keseninde [BA ile [Cd aynı yöne baktığından m(ABC) ile m(BCd) yan iç açılardır: m(BCd) = 180 − 128 = 52°.',
      },
      {
        title: 'Alttaki parçayı bul',
        detail: '[Cd ışını 90°’lik BCD açısının içinde kaldığından m(dCD) = 90 − 52 = 38° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[Cd sola, [DE ise sağa baktığından CD keseninde m(dCD) ile m(CDE) iç ters açılardır: α = 38° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 43
  {
    id: 'angles-43',
    topic: 'Dik açı ve dik üçgen',
    figure: {
      viewBox: '0 0 400 408',
      caption: 'Şekil 43',
      label:
        'H, C, E doğrusu, ona dik [AH] doğru parçası ve C noktasından çıkan birbirine dik [CA ile [CB ışınları.',
      svg: `
          <defs>
            <marker id="arrow-q43" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="16.3" y1="89.8" x2="367.3" y2="89.8" marker-start="url(#arrow-q43)" marker-end="url(#arrow-q43)"/>
          <line class="ln" x1="220.4" y1="89.8" x2="93.2" y2="16.3" marker-end="url(#arrow-q43)"/>
          <path class="ln" d="M57.1,372.1 L57.1,89.8"/>
          <path class="ln" d="M57.1,372.1 L220.4,89.8"/>

          <path class="ln" d="M76.7,89.8 L76.7,109.4 L57.1,109.4"/>
          <path class="ln" d="M210.6,106.8 L193.6,97 L203.4,80"/>

          <path class="arc" d="M57.1,316.6 A55.5,55.5 0 0 1 84.9,324"/>
          <text class="val" x="76" y="305">x</text>

          <path class="arc" d="M171.4,89.8 A49,49 0 0 0 195.9,132.2"/>
          <text class="val" x="165" y="132" text-anchor="middle">2x</text>

          <path class="arc" d="M262.8,89.8 A42.4,42.4 0 0 0 183.7,68.6"/>
          <text class="val" x="242" y="36">α</text>

          <circle class="pt" cx="57.1" cy="89.8" r="3.2"/>
          <circle class="pt" cx="220.4" cy="89.8" r="3.2"/>
          <circle class="pt" cx="318.4" cy="89.8" r="3.2"/>
          <circle class="pt" cx="57.1" cy="372.1" r="3.2"/>

          <text x="47" y="77" text-anchor="end">H</text>
          <text x="234" y="116">C</text>
          <text x="318.4" y="77" text-anchor="middle">E</text>
          <text x="47" y="392" text-anchor="end">A</text>
          <text x="83" y="15" text-anchor="end">B</text>
        `,
    },
    given: ['[AH] ⊥ HE', '[AC] ⊥ [CB', 'm(HCA) = 2 · m(HAC)', 'm(BCE) = α'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α kaç derecedir?',
    choices: [
      { key: 'A', text: '130' },
      { key: 'B', text: '140' },
      { key: 'C', text: '150' },
      { key: 'D', text: '160' },
      { key: 'E', text: '170' },
    ],
    answer: 'C',
    hint: 'AHC dik üçgeninde dar açılar tümlerdir; sonra C çevresindeki üç açıyı 360°’ye tamamla.',
    solution: [
      {
        title: 'Dik üçgende tümler açılar',
        detail:
          '[AH] ⊥ HE olduğundan AHC üçgeninde m(AHC) = 90°’dir. Bir dik üçgende dar açılar tümlerdir: m(HAC) + m(HCA) = 90.',
      },
      {
        title: 'Denklemi kur',
        detail:
          'm(HAC) = x dersek m(HCA) = 2x olur: x + 2x = 90 → 3x = 90 → x = 30°, yani m(HCA) = 60° bulunur.',
      },
      {
        title: 'ACE açısını bul',
        detail:
          'H, C, E doğrusal olduğundan m(HCA) ile m(ACE) bütünlerdir: m(ACE) = 180 − 60 = 120°.',
      },
      {
        title: 'C çevresini topla',
        detail:
          'C noktasının çevresinde ACE, ACB ve BCE açıları sıralanır; toplamları tam açıdır: 120 + 90 + α = 360.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 360 − 210 = 150° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 44
  {
    id: 'angles-44',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 175',
      caption: 'Şekil 44',
      label:
        'Paralel EF ve KL doğruları ile A noktasından çıkan [AB, [AD, [AC ışınları; A’daki dört açı ikişer ikişer eş.',
      svg: `
          <defs>
            <marker id="arrow-q44" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="21.1" y1="28.1" x2="365" y2="28.1" marker-start="url(#arrow-q44)" marker-end="url(#arrow-q44)"/>
          <line class="ln" x1="21.1" y1="140.4" x2="369.2" y2="140.4" marker-start="url(#arrow-q44)" marker-end="url(#arrow-q44)"/>
          <line class="ln" x1="133.3" y1="28.1" x2="68.5" y2="140.4"/>
          <line class="ln" x1="133.3" y1="28.1" x2="198.1" y2="140.4"/>
          <line class="ln" x1="133.3" y1="28.1" x2="327.9" y2="140.4"/>

          <path class="arc" d="M99.6,28.1 A33.7,33.7 0 0 0 116.4,57.3"/>
          <line class="tick" x1="110.2" y1="41.4" x2="98.1" y2="48.4"/>
          <path class="arc" d="M116.4,57.3 A33.7,33.7 0 0 0 150.2,57.3"/>
          <line class="tick" x1="133.3" y1="54.7" x2="133.3" y2="68.8"/>

          <path class="arc" d="M158.6,71.8 A50.5,50.5 0 0 0 177,53.4"/>
          <line class="tick" x1="161.3" y1="61.4" x2="170.4" y2="72.2"/>
          <line class="tick" x1="166.6" y1="56" x2="177.4" y2="65.1"/>
          <path class="arc" d="M177,53.4 A50.5,50.5 0 0 0 183.8,28.1"/>
          <line class="tick" x1="174.2" y1="42.9" x2="187.4" y2="47.7"/>
          <line class="tick" x1="176.1" y1="35.6" x2="190" y2="38"/>

          <path class="arc" d="M29.2,140.4 A39.3,39.3 0 0 1 88.2,106.4"/>
          <text class="val" x="35" y="97" text-anchor="middle">120°</text>

          <path class="arc" d="M370,140.4 A42.1,42.1 0 0 0 291.4,119.3"/>
          <text class="val" x="347" y="88" text-anchor="middle">x</text>

          <circle class="pt" cx="133.3" cy="28.1" r="3.2"/>
          <circle class="pt" cx="63.2" cy="28.1" r="3.2"/>
          <circle class="pt" cx="301.8" cy="28.1" r="3.2"/>
          <circle class="pt" cx="42.1" cy="140.4" r="3.2"/>
          <circle class="pt" cx="68.5" cy="140.4" r="3.2"/>
          <circle class="pt" cx="198.1" cy="140.4" r="3.2"/>
          <circle class="pt" cx="327.9" cy="140.4" r="3.2"/>
          <circle class="pt" cx="350.9" cy="140.4" r="3.2"/>

          <text x="63.2" y="18" text-anchor="middle">E</text>
          <text x="133.3" y="17" text-anchor="middle">A</text>
          <text x="301.8" y="18" text-anchor="middle">F</text>
          <text x="38" y="163" text-anchor="end">K</text>
          <text x="71.6" y="163" text-anchor="middle">B</text>
          <text x="198.1" y="163" text-anchor="middle">D</text>
          <text x="321.4" y="163" text-anchor="end">C</text>
          <text x="355" y="163">L</text>
        `,
    },
    given: ['EF // KL', 'm(EAB) = m(BAD)', 'm(DAC) = m(CAF)', 'm(KBA) = 120°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACL) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '130' },
      { key: 'B', text: '140' },
      { key: 'C', text: '150' },
      { key: 'D', text: '160' },
      { key: 'E', text: '170' },
    ],
    answer: 'C',
    hint: 'A köşesindeki dört açı bir doğrusal açıyı paylaşır: 2a + 2b = 180.',
    solution: [
      {
        title: 'EAB açısını bul',
        detail:
          'EF // KL ve AB kesendir. m(KBA) ile m(EAB) kesenin aynı tarafındaki iç açılardır (yan iç açılar): m(EAB) = 180 − 120 = 60°.',
      },
      {
        title: 'Açıları adlandır',
        detail: 'm(EAB) = m(BAD) = a = 60° ve m(DAC) = m(CAF) = b diyelim.',
      },
      {
        title: 'Doğrusal açıyı yaz',
        detail:
          'E, A, F doğrusal olduğundan A köşesindeki dört açının toplamı 180°’dir: 2a + 2b = 180 → a + b = 90 → b = 90 − 60 = 30°.',
      },
      {
        title: 'Açıyı C’ye taşı',
        detail:
          'AC keseninde [AF ile [CL aynı yöne (sağa) baktığından m(CAF) ile m(ACL) yan iç açılardır.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 180 − m(CAF) = 180 − 30 = 150° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 45
  {
    id: 'angles-45',
    topic: 'Kenarları paralel açılar',
    figure: {
      viewBox: '0 0 400 258',
      caption: 'Şekil 45',
      label:
        'Paralel [EF ile [BC] ve paralel [AB] ile [CD ışınları; E’deki açı 110°, C’deki açı 40°, A’daki açı x.',
      svg: q45Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 258',
      caption: 'Şekil 45 — yardımcı çizim',
      label:
        'Aynı şekilde, A köşesinden [EF ile aynı yöne bakan kesik çizgili [Ad yardımcı ışını çizilmiştir.',
      svg: q45Svg('s') + Q45_AUX_SVG,
    },
    given: ['[EF // [BC]', '[AB] // [CD', 'm(AEF) = 110°', 'm(BCD) = 40°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(EAB) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '20' },
      { key: 'B', text: '30' },
      { key: 'C', text: '40' },
      { key: 'D', text: '50' },
      { key: 'E', text: '60' },
    ],
    answer: 'B',
    hint: 'A’dan [EF ile aynı yöne bakan bir ışın çiz; iki açıyı da bu ışına göre ölç.',
    solution: [
      {
        title: 'A’dan paralel çiz',
        detail:
          'A noktasından [EF ile aynı yöne bakan [Ad ışınını çizelim: [Ad // [EF // [BC] olur.',
      },
      {
        title: 'EAd açısını bul',
        detail:
          'AE keseninde [EF ile [Ad aynı yöne baktığından m(AEF) ile m(EAd) yan iç açılardır: m(EAd) = 180 − 110 = 70°.',
      },
      {
        title: 'BAd açısını bul',
        detail:
          '[Ad // [BC] ve [AB] // [CD olduğundan BAd açısı ile BCD açısının kenarları karşılıklı paraleldir. İkisi de dar açı olduğundan eşittirler: m(BAd) = 40°.',
      },
      {
        title: 'Sonuç',
        detail: '[AB ışını [Ad ile [AE arasında kaldığından x = 70 − 40 = 30° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 46
  {
    id: 'angles-46',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 222',
      caption: 'Şekil 46',
      label:
        'Ters yönlere bakan paralel [BE ve [CD ışınları, ikisinin de üstünde kalan A köşesi ve A’dan geçen K-L doğrusu.',
      svg: q46Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 222',
      caption: 'Şekil 46 — yardımcı çizim',
      label:
        'Aynı şekilde, A köşesinden [BE ile aynı yöne bakan kesik çizgili [Ad yardımcı ışını çizilmiştir.',
      svg: q46Svg('s') + Q46_AUX_SVG,
    },
    given: ['[BE // [CD', 'm(ABE) = 160°', 'm(ACD) = 60°', 'm(CAK) = 3x', 'K, A, L doğrusal'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAL) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '35' },
      { key: 'B', text: '40' },
      { key: 'C', text: '45' },
      { key: 'D', text: '50' },
      { key: 'E', text: '55' },
    ],
    answer: 'A',
    hint: 'Önce BAC açısını bul; sonra K, A, L doğrusallığından 3x + m(BAC) + x = 180 yaz.',
    solution: [
      {
        title: 'A’dan paralel çiz',
        detail:
          'A noktasından [BE ile aynı yöne (sağa) bakan [Ad ışınını çizelim: [Ad // [BE // [CD olur.',
      },
      {
        title: 'BAd açısını bul',
        detail:
          'AB keseninde [BE ile [Ad aynı yöne baktığından m(ABE) ile m(BAd) yan iç açılardır: m(BAd) = 180 − 160 = 20°.',
      },
      {
        title: 'CAd açısını bul',
        detail:
          'AC keseninde [CD sola, [Ad sağa baktığından m(ACD) ile m(CAd) iç ters açılardır: m(CAd) = 60°.',
      },
      {
        title: 'BAC açısını bul',
        detail: '[AB ışını [Ad ile [AC arasında kaldığından m(BAC) = 60 − 20 = 40° olur.',
      },
      {
        title: 'Doğrusal açıyı yaz',
        detail:
          'K, A, L doğrusal olduğundan m(KAC) + m(CAB) + m(BAL) = 180 → 3x + 40 + x = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: '4x = 140 → x = 35° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 47
  {
    id: 'angles-47',
    topic: 'Kenarları paralel açılar',
    figure: {
      viewBox: '0 0 400 284',
      caption: 'Şekil 47',
      label:
        'C’den çıkan [CD ışını ve C-A-B kırık çizgisi; B’den [BE ile [BF ışınları çıkıyor, [BF // [AC ve [BE // [CD.',
      svg: `
          <defs>
            <marker id="arrow-q47" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="130.9" y1="145.5" x2="11.6" y2="145.5" marker-end="url(#arrow-q47)"/>
          <line class="ln" x1="130.9" y1="145.5" x2="206.1" y2="252.7"/>
          <line class="ln" x1="206.1" y1="252.7" x2="243.8" y2="112.1"/>
          <line class="ln" x1="243.8" y1="112.1" x2="389.8" y2="112.1" marker-end="url(#arrow-q47)"/>
          <line class="ln" x1="243.8" y1="112.1" x2="168.7" y2="5.1" marker-end="url(#arrow-q47)"/>

          <path class="arc" d="M87.3,145.5 A43.6,43.6 0 0 0 155.9,181.2"/>
          <text class="val" x="94.5" y="208" text-anchor="middle">125°</text>

          <path class="arc" d="M284.5,112.1 A40.7,40.7 0 0 1 233.3,151.4"/>
          <text class="val" x="288" y="166">105°</text>

          <path class="arc" d="M228.7,168.3 A58.2,58.2 0 0 1 210.4,64.4"/>
          <text class="val" x="165.8" y="130.9" text-anchor="middle">x</text>

          <circle class="pt" cx="130.9" cy="145.5" r="3.2"/>
          <circle class="pt" cx="36.4" cy="145.5" r="3.2"/>
          <circle class="pt" cx="206.1" cy="252.7" r="3.2"/>
          <circle class="pt" cx="243.8" cy="112.1" r="3.2"/>
          <circle class="pt" cx="353.2" cy="112.1" r="3.2"/>
          <circle class="pt" cx="177" cy="16.9" r="3.2"/>

          <text x="36.4" y="135.3" text-anchor="middle">D</text>
          <text x="123.6" y="136.7" text-anchor="end">C</text>
          <text x="206.1" y="276.4" text-anchor="middle">A</text>
          <text x="250.2" y="103.3">B</text>
          <text x="355" y="101.8">E</text>
          <text x="184.7" y="13.1">F</text>
        `,
    },
    given: ['[BF // [AC', '[CD // [BE', 'm(DCA) = 125°', 'm(ABE) = 105°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABF) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '100' },
      { key: 'B', text: '110' },
      { key: 'C', text: '120' },
      { key: 'D', text: '130' },
      { key: 'E', text: '140' },
    ],
    answer: 'D',
    hint: 'FBE açısı ile DCA açısının kenarları karşılıklı paralel; sonra B çevresini 360°’ye tamamla.',
    solution: [
      {
        title: 'Kenarları paralel açıları tanı',
        detail:
          'FBE açısının kenarları [BF ile [BE, DCA açısının kenarları ise [CD ile [CA’dır. [BF // [AC ve [BE // [CD verildiğinden kenarlar karşılıklı paraleldir.',
      },
      {
        title: 'Eşit mi, bütünler mi?',
        detail:
          '[BF ile [CA ters yönlere, [BE ile [CD de ters yönlere baktığından iki kenar da çevrilmiştir; böyle açılar eştir: m(FBE) = m(DCA) = 125°.',
      },
      {
        title: 'B çevresini topla',
        detail:
          'B noktasının çevresinde ABE, FBE ve ABF açıları sıralanır; toplamları tam açıdır: 105 + 125 + x = 360.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 360 − 230 = 130° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 48
  {
    id: 'angles-48',
    topic: 'Kenarları paralel açılar',
    figure: {
      viewBox: '0 0 400 186',
      caption: 'Şekil 48',
      label:
        'A-B-C ve A-E kolları; [BC // [EF ve [AB // [CD olacak biçimde C’den [CD, E’den [EF ışınları çıkıyor.',
      svg: q48Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 186',
      caption: 'Şekil 48 — yardımcı çizim',
      label:
        'Aynı şekilde, E köşesinden [AB’ye paralel kesik çizgili d yardımcı doğrusu çizilmiştir.',
      svg: q48Svg('s') + Q48_AUX_SVG,
    },
    given: ['[BC // [EF', '[AB // [CD', 'm(DCB) = 35°', 'm(EAB) = 110°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(FEA) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '70' },
      { key: 'B', text: '75' },
      { key: 'C', text: '80' },
      { key: 'D', text: '85' },
      { key: 'E', text: '90' },
    ],
    answer: 'B',
    hint: 'E’den [AB’ye paralel bir doğru çiz; E’deki doğrusal açı 35°, α ve 70°’ye ayrılır.',
    solution: [
      {
        title: 'E’den paralel çiz',
        detail: 'E noktasından [AB ile aynı doğrultuda d doğrusunu çizelim: d // [AB // [CD olur.',
      },
      {
        title: 'dEA açısını bul',
        detail:
          'AE keseninde m(EAB) ile d’nin sağ kolunun [EA ile yaptığı açı yan iç açılardır: 180 − 110 = 70°.',
      },
      {
        title: 'FEd açısını bul',
        detail:
          '[EF // [CB ve d’nin sol kolu [CD ile aynı yöne baktığından, FEd açısı ile BCD açısının kenarları karşılıklı paraleldir ve aynı yöne bakar: bu açı 35°’dir.',
      },
      {
        title: 'Doğrusal açıyı yaz',
        detail:
          'E noktasında sol kol, [EF, [EA ve sağ kol sırayla geldiğinden 35 + α + 70 = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 180 − 105 = 75° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 49
  {
    id: 'angles-49',
    topic: 'Paralel doğrular ve kesen',
    figure: {
      viewBox: '0 0 400 306',
      caption: 'Şekil 49',
      label:
        'Paralel [CD ve [AB ışınları, A’dan çıkan [AF ışını, üzerindeki E noktası ve [EC doğru parçası.',
      svg: q49Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 306',
      caption: 'Şekil 49 — yardımcı çizim',
      label:
        'Aynı şekilde, E noktasından [AB ile aynı yöne bakan kesik çizgili [Ed yardımcı ışını çizilmiştir.',
      svg: q49Svg('s') + Q49_AUX_SVG,
    },
    given: ['[CD // [AB', 'A, E, F doğrusal', 'm(FEC) = 140°', 'm(FAB) = 65°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ECD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '85' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' },
      { key: 'E', text: '105' },
    ],
    answer: 'E',
    hint: 'E’den paralel çiz: 65°’lik açı yöndeş açıyla E’ye taşınır.',
    solution: [
      {
        title: 'E’den paralel çiz',
        detail:
          'E noktasından [AB ile aynı yöne bakan [Ed ışınını çizelim: [Ed // [AB // [CD olur.',
      },
      {
        title: 'FEd açısını bul',
        detail:
          'A, E, F doğrusal ve [Ed // [AB olduğundan AF keseninde m(FEd) ile m(FAB) yöndeş açılardır: m(FEd) = 65°.',
      },
      {
        title: 'CEd açısını bul',
        detail:
          '[Ed ışını FEC açısının içinde kaldığından m(CEd) = m(FEC) − m(FEd) = 140 − 65 = 75° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'EC keseninde [Ed ile [CD aynı yöne baktığından m(CEd) ile m(ECD) yan iç açılardır: α = 180 − 75 = 105° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 50
  {
    id: 'angles-50',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 267',
      caption: 'Şekil 50',
      label:
        'A noktasından çıkan [AB, [AF ve [AD kolları ile [DE, [FK, [BC paralel ışınları; [AF, BAD açısının açıortayı.',
      svg: q50Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 267',
      caption: 'Şekil 50 — yardımcı çizim',
      label:
        'Aynı şekilde, A köşesinden [BC ile aynı yöne bakan kesik çizgili [Ad yardımcı ışını çizilmiştir.',
      svg: q50Svg('s') + Q50_AUX_SVG,
    },
    given: ['[DE // [FK // [BC', 'm(BAF) = m(FAD)', 'm(ADE) = 110°', 'm(ABC) = 50°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AFK) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '85' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' },
      { key: 'E', text: '105' },
    ],
    answer: 'D',
    hint: 'A’dan paralel çiz; hem 50° hem 110° oradan ölçülür, sonra açıortayı kullan.',
    solution: [
      {
        title: 'A’dan paralel çiz',
        detail:
          'A noktasından [BC ile aynı yöne (sağa) bakan [Ad ışınını çizelim: [Ad // [BC // [DE // [FK olur.',
      },
      {
        title: 'BAd açısını bul',
        detail: 'AB keseninde m(ABC) ile m(BAd) yan iç açılardır: m(BAd) = 180 − 50 = 130°.',
      },
      {
        title: 'DAd açısını bul',
        detail: 'AD keseninde m(ADE) ile m(DAd) yan iç açılardır: m(DAd) = 180 − 110 = 70°.',
      },
      {
        title: 'BAD açısını bul',
        detail: '[AD ışını [Ad ile [AB arasında kaldığından m(BAD) = 130 − 70 = 60° olur.',
      },
      {
        title: 'Açıortayı kullan',
        detail:
          '[AF, BAD açısını iki eş parçaya böldüğünden m(FAD) = 30°, buradan m(FAd) = 70 + 30 = 100° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'AF keseninde [FK sola, [Ad sağa baktığından m(FAd) ile m(AFK) iç ters açılardır: α = 100° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 51
  {
    id: 'angles-51',
    topic: 'Kenarları dik açılar',
    figure: {
      viewBox: '0 0 400 245',
      caption: 'Şekil 51',
      label:
        'Paralel [AB ve [CD doğruları, A’dan C’ye inen doğru ve E noktasından [AB ile [AC üzerine çizilen [EL, [EK dikmeleri.',
      svg: `
          <defs>
            <marker id="arrow-q51" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="13.1" y1="24.5" x2="378.8" y2="24.5" marker-start="url(#arrow-q51)" marker-end="url(#arrow-q51)"/>
          <line class="ln" x1="13.1" y1="204.2" x2="342.9" y2="204.2" marker-start="url(#arrow-q51)" marker-end="url(#arrow-q51)"/>
          <line class="ln" x1="98" y1="24.5" x2="49.8" y2="204.2"/>
          <line class="ln" x1="179.6" y1="114.3" x2="179.6" y2="24.5"/>
          <line class="ln" x1="179.6" y1="114.3" x2="81" y2="87.8"/>

          <path class="ln" d="M199.2,24.5 L199.2,44.1 L179.6,44.1"/>
          <path class="ln" d="M98.3,92.4 L103,75.1 L85.5,70.5"/>

          <path class="arc" d="M138.5,103.3 A42.5,42.5 0 0 1 179.6,71.8"/>
          <text class="val" x="172" y="67" text-anchor="end">75°</text>

          <path class="arc" d="M98.8,204.2 A49,49 0 0 0 62.5,156.9"/>
          <text class="val" x="111" y="166.5">α</text>

          <circle class="pt" cx="98" cy="24.5" r="3.2"/>
          <circle class="pt" cx="179.6" cy="24.5" r="3.2"/>
          <circle class="pt" cx="293.9" cy="24.5" r="3.2"/>
          <circle class="pt" cx="49.8" cy="204.2" r="3.2"/>
          <circle class="pt" cx="228.6" cy="204.2" r="3.2"/>
          <circle class="pt" cx="179.6" cy="114.3" r="3.2"/>
          <circle class="pt" cx="81" cy="87.8" r="3.2"/>

          <text x="91.4" y="13.1" text-anchor="end">A</text>
          <text x="179.6" y="11.4" text-anchor="middle">L</text>
          <text x="293.9" y="11.4" text-anchor="middle">B</text>
          <text x="39.2" y="226.9" text-anchor="end">C</text>
          <text x="228.6" y="226.9" text-anchor="middle">D</text>
          <text x="189.4" y="122.4">E</text>
          <text x="70.2" y="83.3" text-anchor="end">K</text>
        `,
    },
    given: ['[AB // [CD', '[EL ⊥ [AB', '[EK ⊥ [AC', 'm(KEL) = 75°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ACD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '65' },
      { key: 'B', text: '70' },
      { key: 'C', text: '75' },
      { key: 'D', text: '80' },
      { key: 'E', text: '85' },
    ],
    answer: 'C',
    hint: 'KEL açısı ile A köşesindeki açının kenarları karşılıklı diktir.',
    solution: [
      {
        title: 'Kenarları dik açıları tanı',
        detail:
          'KAL açısının kenarları [AK (yani [AC) ile [AL (yani [AB)’dir. [EK ⊥ [AC ve [EL ⊥ [AB olduğundan KEL açısının kenarları bunlara karşılıklı diktir.',
      },
      {
        title: 'Eşit mi, bütünler mi?',
        detail:
          'Böyle iki açı ya eşittir ya da bütündür. Şekilde KEL dar, KAL ise geniş açı olduğundan bütündürler: m(KAL) = 180 − 75 = 105°.',
      },
      {
        title: 'Paralellere taşı',
        detail:
          '[AB // [CD ve AC kesendir. m(KAL) yani m(CAB) ile m(ACD), kesenin aynı tarafında kalan iç açılardır (yan iç açılar).',
      },
      {
        title: 'Sonuç',
        detail: 'α = 180 − 105 = 75° bulunur.',
      },
      {
        title: 'Başka bir yol',
        detail:
          'AKEL dörtgeninde K ve L köşeleri dik olduğundan iç açılar toplamından m(KAL) = 360 − 90 − 90 − 75 = 105° de bulunabilir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 52
  {
    id: 'angles-52',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 257',
      caption: 'Şekil 52',
      label:
        'Paralel AB ve CD doğruları arasında B’den D’ye giden iki kırık çizgi; kırılma noktaları E ve F, B ile D köşelerindeki açılar eş işaretli.',
      svg: q52Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 257',
      caption: 'Şekil 52 — yardımcı çizim',
      label:
        'Aynı şekilde, E ve F kırılma noktalarından AB’ye paralel kesik çizgili e ve f doğruları çizilmiştir.',
      svg: q52Svg('s') + Q52_AUX_SVG,
    },
    given: [
      'AB // CD',
      '[BE ve [DE açıortaydır (şekildeki eş işaretli açılar)',
      'm(BFD) = a, m(BED) = b',
      'a + b = 126°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, a kaç derecedir?',
    choices: [
      { key: 'A', text: '80' },
      { key: 'B', text: '84' },
      { key: 'C', text: '88' },
      { key: 'D', text: '92' },
      { key: 'E', text: '96' },
    ],
    answer: 'B',
    hint: 'Her kırılma noktasında oluşan açı, üstteki ve alttaki açıların toplamıdır; açıortaylar a ile b arasında kat ilişkisi kurar.',
    solution: [
      {
        title: 'Açıları adlandır',
        detail:
          'm(ABE) = m(EBF) = y ve m(CDE) = m(EDF) = x diyelim. Böylece m(ABF) = 2y ve m(CDF) = 2x olur.',
      },
      {
        title: 'Kırılma noktasından paralel çiz',
        detail:
          'E noktasından AB’ye paralel e doğrusunu çizersek, [EB ile e’nin sağ kolu arasındaki açı m(ABE)’ye, [ED ile e’nin sağ kolu arasındaki açı da m(CDE)’ye iç ters açı olarak eşittir.',
      },
      {
        title: 'b’yi yaz',
        detail: 'e doğrusu BED açısını ikiye böldüğünden b = m(BED) = y + x olur.',
      },
      {
        title: 'a’yı yaz',
        detail: 'Aynı çizimi F için yaparsak a = m(BFD) = 2y + 2x = 2(x + y) = 2b bulunur.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'a + b = 126 ve a = 2b → 3b = 126 → b = 42° olur.',
      },
      {
        title: 'Sonuç',
        detail: 'a = 2 · 42 = 84° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 53
  {
    id: 'angles-53',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 296',
      caption: 'Şekil 53',
      label:
        'K noktasından çıkan [KA, [KC, [KE kolları ve uçlarındaki paralel [AB, [CD, [EF ışınları; [KC açıortay.',
      svg: q53Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 296',
      caption: 'Şekil 53 — yardımcı çizim',
      label:
        'Aynı şekilde, K noktasından [CD ile aynı yöne bakan kesik çizgili [Kd yardımcı ışını çizilmiştir.',
      svg: q53Svg('s') + Q53_AUX_SVG,
    },
    given: ['[AB // [CD // [EF', '[KC] açıortaydır', 'm(BAK) = 70°', 'm(KEF) = 140°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(KCD) kaç derecedir?',
    choices: [
      { key: 'A', text: '110' },
      { key: 'B', text: '115' },
      { key: 'C', text: '120' },
      { key: 'D', text: '125' },
      { key: 'E', text: '130' },
    ],
    answer: 'D',
    hint: 'K’den paralel çiz: [KA ile [KE’nin bu paralelle yaptığı açıları bulup farkını al.',
    solution: [
      {
        title: 'K’den paralel çiz',
        detail:
          'K noktasından [CD ile aynı yöne (sağa) bakan [Kd ışınını çizelim: [Kd // [AB // [CD // [EF olur.',
      },
      {
        title: 'AKd açısını bul',
        detail:
          'AK keseninde [AB sola, [Kd sağa baktığından m(BAK) ile m(AKd) iç ters açılardır: m(AKd) = 70°.',
      },
      {
        title: 'EKd açısını bul',
        detail:
          'EK keseninde [EF ile [Kd aynı yöne baktığından m(KEF) ile m(EKd) yan iç açılardır: m(EKd) = 180 − 140 = 40°.',
      },
      {
        title: 'AKE açısını bul',
        detail: '[KE ışını [Kd ile [KA arasında kaldığından m(AKE) = 70 − 40 = 30° olur.',
      },
      {
        title: 'Açıortayı kullan',
        detail:
          '[KC, AKE açısını iki eş parçaya böldüğünden m(EKC) = 15°, buradan m(CKd) = 40 + 15 = 55° bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          'KC keseninde [Kd ile [CD aynı yöne baktığından m(CKd) ile m(KCD) yan iç açılardır: m(KCD) = 180 − 55 = 125° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 54
  {
    id: 'angles-54',
    topic: 'Açıortay ve üçgen',
    figure: {
      viewBox: '0 0 400 500',
      caption: 'Şekil 54',
      label:
        'O noktasından çıkan [OA, [OF, [OB ışınları ve bunları K, L, M noktalarında kesen C-T doğrusu; [OF açıortay.',
      svg: `
          <defs>
            <marker id="arrow-q54" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="25" y1="295" x2="197.3" y2="49.3" marker-end="url(#arrow-q54)"/>
          <line class="ln" x1="25" y1="295" x2="270.8" y2="467.3" marker-end="url(#arrow-q54)"/>
          <line class="ln" x1="25" y1="295" x2="357.5" y2="236.5" marker-end="url(#arrow-q54)"/>
          <line class="ln" x1="91" y1="33" x2="128" y2="456.5" marker-start="url(#arrow-q54)" marker-end="url(#arrow-q54)"/>

          <path class="arc" d="M98.3,117.7 A65,65 0 0 1 141.3,129.3"/>
          <text class="val" x="127" y="96" text-anchor="middle">40°</text>

          <path class="arc" d="M117.7,339.3 A60,60 0 0 0 171.6,269.1"/>
          <text class="val" x="180" y="336">95°</text>

          <path class="arc" d="M125.2,426.1 A65,65 0 0 1 66.3,324"/>
          <text class="val" x="40" y="412.5" text-anchor="end">α</text>

          <path class="arc" d="M68,233.6 A75,75 0 0 1 98.9,282"/>
          <line class="tick" x1="77.8" y1="261.5" x2="98.8" y2="248"/>
          <path class="arc" d="M98.9,282 A75,75 0 0 1 86.4,338"/>
          <line class="tick" x1="86" y1="308.5" x2="110.5" y2="313.9"/>

          <circle class="pt" cx="25" cy="295" r="3.2"/>
          <circle class="pt" cx="104" cy="182.5" r="3.2"/>
          <circle class="pt" cx="112.5" cy="279.5" r="3.2"/>
          <circle class="pt" cx="119.5" cy="361.3" r="3.2"/>

          <text x="10" y="305" text-anchor="end">O</text>
          <text x="210" y="37.5">A</text>
          <text x="282.5" y="482.5">B</text>
          <text x="370" y="227.5">F</text>
          <text x="77.5" y="20" text-anchor="end">C</text>
          <text x="85" y="170" text-anchor="end">K</text>
          <text x="95" y="270" text-anchor="end">L</text>
          <text x="135" y="350">M</text>
          <text x="140" y="477.5">T</text>
        `,
    },
    given: [
      '[OF, AOB açısının açıortayıdır',
      'C, K, L, M, T doğrusal',
      'm(CKA) = 40°',
      'm(TLF) = 95°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(OMT) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '130' },
      { key: 'B', text: '135' },
      { key: 'C', text: '140' },
      { key: 'D', text: '145' },
      { key: 'E', text: '150' },
    ],
    answer: 'A',
    hint: 'α hem OKM hem de OLM üçgeninin M köşesindeki dış açısıdır; iki kere yazıp eşitle.',
    solution: [
      {
        title: 'Açıortayı adlandır',
        detail: '[OF açıortay olduğundan m(AOF) = m(FOB) = t dersek m(AOB) = 2t olur.',
      },
      {
        title: 'K’deki açıyı taşı',
        detail:
          'C, K, M noktaları doğrusal ve K, [OA üzerindedir. m(CKA) ile m(OKM) ters açılardır: m(OKM) = 40°.',
      },
      {
        title: 'L’deki açıyı taşı',
        detail:
          '[LO ile [LF ters ışınlar olduğundan m(TLF) ile m(OLM) bütünlerdir: m(OLM) = 180 − 95 = 85°.',
      },
      {
        title: 'Dış açıyı iki kez yaz',
        detail:
          'Bir üçgenin dış açısı, komşu olmayan iki iç açının toplamına eşittir. α, OKM üçgeninin M’deki dış açısıdır: α = 2t + 40. Aynı α, OLM üçgeninin de M’deki dış açısıdır: α = t + 85.',
      },
      {
        title: 'Denklemi çöz',
        detail: '2t + 40 = t + 85 → t = 45° bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = t + 85 = 45 + 85 = 130° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 55
  {
    id: 'angles-55',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 369',
      caption: 'Şekil 55',
      label:
        'Paralel [AB ve [CD ışınları ile A’dan E ve F üzerinden C’ye giden kırık çizgi; E ve C köşelerindeki açılar eşit.',
      svg: q55Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 369',
      caption: 'Şekil 55 — yardımcı çizim',
      label:
        'Aynı şekilde, E ve F noktalarından [AB’ye paralel kesik çizgili e ve f doğruları çizilmiştir.',
      svg: q55Svg('s') + Q55_AUX_SVG,
    },
    given: ['[AB // [CD', 'm(AEF) = m(DCF) = a', 'm(BAE) = 30°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, EFC açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '40' },
      { key: 'B', text: '35' },
      { key: 'C', text: '30' },
      { key: 'D', text: '25' },
      { key: 'E', text: '20' },
    ],
    answer: 'C',
    hint: 'E ve F’den paralel çiz; a bilinmese de sadeleşir.',
    solution: [
      {
        title: 'E ve F’den paralel çiz',
        detail:
          'E ve F noktalarından [AB’ye paralel e ve f doğrularını çizelim: e // f // [AB // [CD.',
      },
      {
        title: 'A’daki açıyı E’ye taşı',
        detail:
          'AE keseninde [AB sola, e’nin sağ kolu sağa baktığından m(BAE) ile bu kolun [EA ile yaptığı açı iç ters açılardır: 30°.',
      },
      {
        title: 'E’deki kalan parçayı bul',
        detail:
          'e’nin sağ kolu AEF açısının içinde kaldığından, bu kol ile [EF arasındaki açı a − 30 olur.',
      },
      {
        title: 'Açıyı f’ye taşı',
        detail:
          'EF keseninde e // f olduğundan f’nin sol kolu ile [FE arasındaki açı da iç ters açı olarak a − 30’dur.',
      },
      {
        title: 'C’deki açıyı F’ye taşı',
        detail:
          'CF keseninde [CD ile f’nin sağ kolu aynı yöne baktığından m(DCF) ile f’nin sağ kolunun [FC ile yaptığı açı yan iç açılardır: 180 − a.',
      },
      {
        title: 'Sonuç',
        detail:
          'f doğrusunda sol kol, [FE, [FC ve sağ kol sırayla geldiğinden (a − 30) + m(EFC) + (180 − a) = 180 olur. a sadeleşir ve m(EFC) = 30° bulunur; sonuç a’dan bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 56
  {
    id: 'angles-56',
    topic: 'Saatte akrep ve yelkovan',
    stem: ['Saat 4’ü 24 dakika geçe akreple yelkovan arasındaki açının ölçüsü kaç derecedir?'],
    choices: [
      { key: 'A', text: '4' },
      { key: 'B', text: '6' },
      { key: 'C', text: '8' },
      { key: 'D', text: '10' },
      { key: 'E', text: '12' },
    ],
    answer: 'E',
    hint: 'Akrep dakikada 0,5°, yelkovan dakikada 6° döner; ikisinin de 12 rakamına göre konumunu yaz.',
    solution: [
      {
        title: 'Dönme hızlarını hatırla',
        detail:
          'Akrep 12 saatte 360° döndüğünden saatte 30°, dakikada 0,5° ilerler. Yelkovan ise 1 saatte 360° döndüğünden dakikada 6° ilerler.',
      },
      {
        title: 'Akrebin yerini bul',
        detail:
          '12 rakamından başlayarak akrep 4 tam saat ve 24 dakika ilerlemiştir: 4 · 30 + 24 · 0,5 = 120 + 12 = 132°.',
      },
      {
        title: 'Yelkovanın yerini bul',
        detail: 'Yelkovan 24 dakikada 24 · 6 = 144° ilerler.',
      },
      {
        title: 'Sonuç',
        detail: 'Aradaki açı 144 − 132 = 12° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 57
  {
    id: 'angles-57',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 264',
      caption: 'Şekil 57',
      label:
        'Paralel [AD ışını ile EF doğrusu, A’dan çıkan [AB ve [AE kolları ve C’de dik açı yapan [BC doğru parçası.',
      svg: `
          <defs>
            <marker id="arrow-q57" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="70.6" y1="24.2" x2="360" y2="24.2" marker-end="url(#arrow-q57)"/>
          <line class="ln" x1="8" y1="224" x2="384" y2="224" marker-start="url(#arrow-q57)" marker-end="url(#arrow-q57)"/>
          <line class="ln" x1="70.6" y1="24.2" x2="128" y2="224"/>
          <line class="ln" x1="70.6" y1="24.2" x2="335.8" y2="224"/>
          <line class="ln" x1="128" y1="224" x2="203.4" y2="124.2"/>

          <path class="ln" d="M189.3,113.6 L178.7,127.7 L192.8,138.2"/>

          <path class="arc" d="M80,224 A48,48 0 0 1 114.8,177.9"/>
          <text class="val" x="72" y="188.8" text-anchor="middle">74°</text>

          <path class="arc" d="M125,24.2 A54.4,54.4 0 0 1 114,56.9"/>
          <line class="tick" x1="114.6" y1="38.9" x2="129.8" y2="44"/>
          <path class="arc" d="M114,56.9 A54.4,54.4 0 0 1 85.6,76.5"/>
          <line class="tick" x1="96.8" y1="62.4" x2="105.9" y2="75.7"/>

          <path class="arc" d="M179.2,224 A51.2,51.2 0 0 0 158.8,183.1"/>
          <text class="val" x="196.8" y="196.8">x</text>

          <circle class="pt" cx="70.6" cy="24.2" r="3.2"/>
          <circle class="pt" cx="304" cy="24.2" r="3.2"/>
          <circle class="pt" cx="32" cy="224" r="3.2"/>
          <circle class="pt" cx="128" cy="224" r="3.2"/>
          <circle class="pt" cx="335.8" cy="224" r="3.2"/>
          <circle class="pt" cx="203.4" cy="124.2" r="3.2"/>

          <text x="60.8" y="19.2" text-anchor="end">A</text>
          <text x="304" y="12.8" text-anchor="middle">D</text>
          <text x="32" y="249.6" text-anchor="middle">F</text>
          <text x="128" y="249.6" text-anchor="middle">B</text>
          <text x="339" y="249.6" text-anchor="middle">E</text>
          <text x="212.8" y="118.4">C</text>
        `,
    },
    given: ['[AD // EF', '[AC] ⊥ [CB]', 'm(BAC) = m(CAD)', 'm(ABF) = 74°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(CBE) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '38' },
      { key: 'B', text: '43' },
      { key: 'C', text: '48' },
      { key: 'D', text: '53' },
      { key: 'E', text: '58' },
    ],
    answer: 'D',
    hint: 'Önce DAB açısını iç ters açıyla taşı, sonra açıortay ve dik üçgeni kullan.',
    solution: [
      {
        title: 'Açıyı A’ya taşı',
        detail:
          '[AD // EF ve AB kesendir. [AD sağa, [BF sola baktığından m(ABF) ile m(DAB) iç ters açılardır: m(DAB) = 74°.',
      },
      {
        title: 'Açıortayı kullan',
        detail: '[AC, DAB açısını iki eş parçaya böldüğünden m(BAC) = m(CAD) = 37° olur.',
      },
      {
        title: 'Dik üçgende tümler açılar',
        detail:
          'ABC üçgeninde [AC] ⊥ [CB] olduğundan m(ACB) = 90°; dar açılar tümlerdir: m(ABC) = 90 − 37 = 53°.',
      },
      {
        title: 'Doğrusal açıyı yaz',
        detail: 'F, B, E doğrusal olduğundan m(ABF) + m(ABC) + x = 180 → 74 + 53 + x = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 180 − 127 = 53° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 58
  {
    id: 'angles-58',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 338',
      caption: 'Şekil 58',
      label:
        'Paralel LK ve PR doğruları arasında L-M-N-P kırık çizgisi; L ve N köşelerindeki açılar b, M ve P köşelerindekiler a.',
      svg: q58Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 338',
      caption: 'Şekil 58 — yardımcı çizim',
      label:
        'Aynı şekilde, M ve N kırılma noktalarından LK’ye paralel kesik çizgili m ve n doğruları çizilmiştir.',
      svg: q58Svg('s') + Q58_AUX_SVG,
    },
    given: ['LK // PR', 'm(KLM) = m(MNP) = b', 'm(LMN) = m(NPR) = a', 'a − b = 30°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, a kaç derecedir?',
    choices: [
      { key: 'A', text: '140' },
      { key: 'B', text: '150' },
      { key: 'C', text: '160' },
      { key: 'D', text: '170' },
      { key: 'E', text: '180' },
    ],
    answer: 'B',
    hint: 'Her kesen bir yan iç açı çifti verir; üç kesen olduğundan dört açının toplamı 3 · 180°’dir.',
    solution: [
      {
        title: 'Kırılma noktalarından paralel çiz',
        detail:
          'M ve N noktalarından LK’ye paralel m ve n doğrularını çizelim: LK // m // n // PR olur.',
      },
      {
        title: 'Yan iç açı çiftlerini kur',
        detail:
          'LM keseni, b ile M’deki açının üst parçasını; MN keseni, M’deki alt parça ile N’deki üst parçayı; NP keseni de N’deki alt parça ile a’yı eşler. Her çiftin ölçüleri toplamı 180°’dir.',
      },
      {
        title: 'Toplamı bul',
        detail:
          'Üç çift olduğundan dört açının toplamı 3 · 180 = 540° eder: b + a + b + a = 540 → a + b = 270.',
      },
      {
        title: 'Sistemi çöz',
        detail: 'a + b = 270 ve a − b = 30 denklemlerini taraf tarafa toplarsak 2a = 300 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'a = 150° bulunur. (b = 120°)',
      },
    ],
  },

  // ---------------------------------------------------------------- 59
  {
    id: 'angles-59',
    topic: 'Kenarları dik açılar',
    figure: {
      viewBox: '0 0 400 438',
      caption: 'Şekil 59',
      label:
        'A’dan çıkan [AC, [AE, [AB kolları; C ve B köşelerinde dik açılar, [AE ile [BK kesişimi F, [CE ile [BK kesişimi K.',
      svg: `
          <defs>
            <marker id="arrow-q59" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M28.6,28.6 L341.9,142.7"/>
          <path class="ln" d="M28.6,28.6 L155.6,377.7"/>
          <path class="ln" d="M28.6,28.6 L318.5,318.5"/>
          <path class="ln" d="M341.9,142.7 L271.8,335.4"/>
          <path class="ln" d="M155.6,377.7 L318.5,318.5"/>

          <path class="ln" d="M147.8,356.2 L169.3,348.4 L177.1,369.9"/>
          <path class="ln" d="M320.4,135 L312.6,156.4 L334.1,164.2"/>

          <path class="arc" d="M100.2,54.7 A76.2,76.2 0 0 1 82.5,82.5"/>
          <line class="tick" x1="84.8" y1="64.4" x2="100.8" y2="74.7"/>
          <path class="arc" d="M82.5,82.5 A76.2,76.2 0 0 1 54.7,100.2"/>
          <line class="tick" x1="64.4" y1="84.8" x2="74.7" y2="100.8"/>

          <path class="arc" d="M284.8,299.6 A38.1,38.1 0 0 1 307.6,322.4"/>
          <text class="val" x="325.7" y="281.9">50°</text>

          <path class="arc" d="M253.8,253.8 A49.5,49.5 0 0 1 305.7,242.3"/>

          <circle class="pt" cx="28.6" cy="28.6" r="3.2"/>
          <circle class="pt" cx="341.9" cy="142.7" r="3.2"/>
          <circle class="pt" cx="155.6" cy="377.7" r="3.2"/>
          <circle class="pt" cx="318.5" cy="318.5" r="3.2"/>
          <circle class="pt" cx="288.8" cy="288.8" r="3.2"/>
          <circle class="pt" cx="271.8" cy="335.4" r="3.2"/>

          <text x="17.1" y="22.9" text-anchor="end">A</text>
          <text x="354.3" y="133.3">B</text>
          <text x="142.9" y="403.8" text-anchor="end">C</text>
          <text x="329.5" y="323.8">E</text>
          <text x="276.2" y="278.1" text-anchor="end">F</text>
          <text x="259" y="352.4" text-anchor="end">K</text>
        `,
    },
    given: ['m(CAE) = m(EAB)', '[AC] ⊥ [CE]', '[AB] ⊥ [BK]', 'm(FKE) = 50°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AFB) kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'E',
    hint: 'FKE açısı ile BAC açısının kenarları karşılıklı diktir; ikisi de dar açıdır.',
    solution: [
      {
        title: 'Kenarları dik açıları tanı',
        detail:
          '[KF ışını [BK üzerindedir ve [AB]’ye diktir; [KE ışını [CE üzerindedir ve [AC]’ye diktir. Böylece FKE açısının kenarları, BAC açısının kenarlarına karşılıklı diktir.',
      },
      {
        title: 'Eşit mi, bütünler mi?',
        detail:
          'Böyle iki açı ya eşittir ya da bütündür. Şekilde ikisi de dar açı olduğundan eşittirler: m(BAC) = m(FKE) = 50°.',
      },
      {
        title: 'Açıortayı kullan',
        detail:
          '[AE, BAC açısını iki eş parçaya böldüğünden m(BAF) = m(BAE) = 25° olur (F noktası [AE üzerindedir).',
      },
      {
        title: 'Dik üçgende tümler açılar',
        detail:
          'ABF üçgeninde F noktası [BK üzerinde olduğundan m(ABF) = 90°’dir; dar açılar tümlerdir.',
      },
      {
        title: 'Sonuç',
        detail: 'm(AFB) = 90 − 25 = 65° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 60
  {
    id: 'angles-60',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 60',
      label:
        'Paralel [AK, [DL, [CM ışınları ve A’dan B, C üzerinden D’ye giden kırık çizgi; B ile D köşelerindeki açılar eş işaretli.',
      svg: q60Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 300',
      caption: 'Şekil 60 — yardımcı çizim',
      label:
        'Aynı şekilde, B köşesinden [CM ile aynı yöne bakan kesik çizgili [Bd yardımcı ışını çizilmiştir.',
      svg: q60Svg('s') + Q60_AUX_SVG,
    },
    given: ['[AK // [DL // [CM', 'm(ABC) = m(CDL)', 'm(KAB) = 135° − x', 'm(DCM) = x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, BCM açısının ölçüsü kaç derecedir?',
    choices: [
      { key: 'A', text: '125' },
      { key: 'B', text: '130' },
      { key: 'C', text: '135' },
      { key: 'D', text: '140' },
      { key: 'E', text: '145' },
    ],
    answer: 'C',
    hint: 'B’den paralel çiz; m(ABC)’yi x cinsinden yazınca x sadeleşir.',
    solution: [
      {
        title: 'B’den paralel çiz',
        detail:
          'B noktasından [CM ile aynı yöne (sağa) bakan [Bd ışınını çizelim: [Bd // [AK // [DL // [CM olur.',
      },
      {
        title: 'ABd açısını bul',
        detail:
          'AB keseninde [AK sola, [Bd sağa baktığından m(KAB) ile m(ABd) iç ters açılardır: m(ABd) = 135 − x.',
      },
      {
        title: 'CDL açısını bul',
        detail:
          'CD keseninde [CM ile [DL aynı yöne baktığından m(DCM) ile m(CDL) yan iç açılardır: m(CDL) = 180 − x. Verilenden m(ABC) = m(CDL) = 180 − x olur.',
      },
      {
        title: 'dBC açısını bul',
        detail:
          '[Bd ışını ABC açısının içinde kaldığından m(dBC) = m(ABC) − m(ABd) = (180 − x) − (135 − x) = 45°. Görüldüğü gibi x sadeleşti.',
      },
      {
        title: 'Sonuç',
        detail:
          'BC keseninde [Bd ile [CM aynı yöne baktığından m(dBC) ile m(BCM) yan iç açılardır: m(BCM) = 180 − 45 = 135° bulunur; sonuç x’ten bağımsızdır.',
      },
    ],
  },

  // ---------------------------------------------------------------- 61
  {
    id: 'angles-61',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 276',
      caption: 'Şekil 61',
      label:
        'Paralel [AE, [CK, [DL ışınları; A’dan çıkan [AB ve [AC kolları eşit açılar yapıyor, [BD doğru parçası D’ye iniyor.',
      svg: q61Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 276',
      caption: 'Şekil 61 — yardımcı çizim',
      label:
        'Aynı şekilde, B noktasından [CK ile aynı yöne bakan kesik çizgili [Bd yardımcı ışını çizilmiştir.',
      svg: q61Svg('s') + Q61_AUX_SVG,
    },
    given: ['[AE // [CK // [DL', 'm(EAB) = m(BAC) = x', 'm(ACK) = 60°', 'm(BDL) = 125°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABD) = y kaç derecedir?',
    choices: [
      { key: 'A', text: '85' },
      { key: 'B', text: '90' },
      { key: 'C', text: '95' },
      { key: 'D', text: '100' },
      { key: 'E', text: '105' },
    ],
    answer: 'A',
    hint: 'Önce 60°’yi A’ya taşıyıp x’i bul; sonra B’den paralel çiz.',
    solution: [
      {
        title: 'x’i bul',
        detail:
          '[AE // [CK ve AC kesendir. [AE sola, [CK sağa baktığından m(EAC) ile m(ACK) iç ters açılardır: m(EAC) = 60°. m(EAB) = m(BAC) = x olduğundan 2x = 60 → x = 30° bulunur.',
      },
      {
        title: 'B’den paralel çiz',
        detail: 'B noktasından [CK ile aynı yöne (sağa) bakan [Bd ışınını çizelim.',
      },
      {
        title: 'ABd açısını bul',
        detail:
          'AB keseninde [AE sola, [Bd sağa baktığından m(EAB) ile m(ABd) iç ters açılardır: m(ABd) = x = 30°.',
      },
      {
        title: 'dBD açısını bul',
        detail:
          'BD keseninde [Bd ile [DL aynı yöne baktığından m(dBD) ile m(BDL) yan iç açılardır: m(dBD) = 180 − 125 = 55°.',
      },
      {
        title: 'Sonuç',
        detail: '[Bd ışını ABD açısının içinde kaldığından y = 30 + 55 = 85° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 62
  {
    id: 'angles-62',
    topic: 'Açıortay ve üçgen',
    figure: {
      viewBox: '0 0 400 335',
      caption: 'Şekil 62',
      label:
        'B ve P köşelerinde dik açılar; A ile C’den çıkan [AF ve [CF açıortayları F noktasında kesişiyor.',
      svg: `
          <defs>
            <marker id="arrow-q62" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <path class="ln" d="M195.3,27.9 L195.3,288.4"/>
          <path class="ln" d="M27.9,288.4 L195.3,288.4"/>
          <path class="ln" d="M195.3,27.9 L27.9,288.4"/>
          <line class="ln" x1="195.3" y1="27.9" x2="297.7" y2="205.2" marker-end="url(#arrow-q62)"/>
          <line class="ln" x1="27.9" y1="288.4" x2="317.9" y2="120.9" marker-end="url(#arrow-q62)"/>
          <line class="ln" x1="195.3" y1="27.9" x2="269.8" y2="305.7" marker-end="url(#arrow-q62)"/>
          <line class="ln" x1="27.9" y1="288.4" x2="387.5" y2="192" marker-end="url(#arrow-q62)"/>

          <path class="ln" d="M217.7,288.4 L217.7,266.1 L195.3,266.1"/>
          <path class="ln" d="M255,131.3 L235.7,142.5 L246.9,161.9"/>

          <path class="arc" d="M238.1,102 A85.6,85.6 0 0 1 217.5,110.6"/>
          <line class="tick" x1="224.6" y1="98.4" x2="231.7" y2="115.5"/>
          <path class="arc" d="M217.5,110.6 A85.6,85.6 0 0 1 195.3,113.5"/>
          <line class="tick" x1="205.2" y1="103.6" x2="207.8" y2="122"/>

          <path class="arc" d="M108.4,241.9 A93,93 0 0 1 117.7,264.3"/>
          <line class="tick" x1="105.4" y1="256.2" x2="122.5" y2="249"/>
          <path class="arc" d="M117.7,264.3 A93,93 0 0 1 120.9,288.4"/>
          <line class="tick" x1="110.9" y1="277.2" x2="129.3" y2="274.8"/>

          <path class="arc" d="M210.7,239.4 A40,40 0 0 1 238.9,190.4"/>
          <text class="val" x="208" y="212" text-anchor="middle">α</text>

          <circle class="pt" cx="195.3" cy="27.9" r="3.2"/>
          <circle class="pt" cx="195.3" cy="288.4" r="3.2"/>
          <circle class="pt" cx="27.9" cy="288.4" r="3.2"/>
          <circle class="pt" cx="266.2" cy="150.7" r="3.2"/>
          <circle class="pt" cx="249.3" cy="229" r="3.2"/>

          <text x="195.3" y="14.9" text-anchor="middle">A</text>
          <text x="199.1" y="318.1">B</text>
          <text x="20.5" y="318.1" text-anchor="middle">C</text>
          <text x="277.2" y="143.3">P</text>
          <text x="260.5" y="254.9">F</text>
        `,
    },
    given: ['[AF ve [CF açıortaydır', '[AP] ⊥ [CP]', '[AB] ⊥ [CB]'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(AFC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '75' },
      { key: 'B', text: '80' },
      { key: 'C', text: '85' },
      { key: 'D', text: '90' },
      { key: 'E', text: '95' },
    ],
    answer: 'D',
    hint: 'PAB ile PCB açılarının kenarları karşılıklı diktir; yarıları da eşit olur ve toplamda birbirini götürür.',
    solution: [
      {
        title: 'Kenarları dik açıları tanı',
        detail:
          '[AP] ⊥ [CP] ve [AB] ⊥ [CB] olduğundan PAB açısı ile PCB açısının kenarları karşılıklı diktir. İkisi de dar açı olduğundan eşittirler: m(PAB) = m(PCB).',
      },
      {
        title: 'Açıortayların yarıları',
        detail:
          '[AF ile [CF bu eş açıları ikiye böldüğünden m(FAB) = m(FCB) olur; bu ortak ölçüye t diyelim.',
      },
      {
        title: 'Dik üçgeni kullan',
        detail: 'ABC üçgeninde m(ABC) = 90° olduğundan m(BAC) + m(BCA) = 90°’dir.',
      },
      {
        title: 'AFC üçgeninin açılarını yaz',
        detail:
          '[AB ışını FAC açısının içinde kaldığından m(FAC) = m(BAC) + t; [CF ışını ise BCA açısının içinde kaldığından m(FCA) = m(BCA) − t olur.',
      },
      {
        title: 'Topla',
        detail: 'm(FAC) + m(FCA) = m(BAC) + m(BCA) + t − t = 90°. Görüldüğü gibi t sadeleşir.',
      },
      {
        title: 'Sonuç',
        detail:
          'AFC üçgeninde α = 180 − 90 = 90° bulunur; sonuç açıların ölçüsünden bağımsız olarak hep 90°’dir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 63
  {
    id: 'angles-63',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 288',
      caption: 'Şekil 63',
      label:
        'Paralel [BA ve [DE ışınları ile BDC üçgeni; [BC, ABD açısının açıortayı, D köşesindeki açı α.',
      svg: `
          <defs>
            <marker id="arrow-q63" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="164.9" y1="20.8" x2="9.8" y2="20.8" marker-end="url(#arrow-q63)"/>
          <line class="ln" x1="245.6" y1="88.4" x2="386" y2="88.4" marker-end="url(#arrow-q63)"/>
          <path class="ln" d="M164.9,20.8 L245.6,88.4 L79.9,254.2 Z"/>

          <path class="par" d="M89.8,12.3 L80,20.8 L89.8,29.2"/>
          <path class="par" d="M325.6,80 L335.4,88.4 L325.6,96.8"/>

          <path class="arc" d="M287.7,88.4 A42.1,42.1 0 0 1 215.8,118.2"/>
          <text class="val" x="275.1" y="153">135°</text>

          <path class="arc" d="M201.9,132.1 A61.8,61.8 0 0 1 198.3,48.7"/>
          <text class="val" x="164.2" y="96.8" text-anchor="middle">α</text>

          <path class="arc" d="M96.2,209.4 A47.7,47.7 0 0 1 113.6,220.5"/>
          <text class="val" x="122" y="167">25°</text>

          <path class="arc" d="M114.4,20.8 A50.5,50.5 0 0 0 147.6,68.3"/>
          <line class="tick" x1="129.3" y1="45.8" x2="117.8" y2="53.8"/>
          <path class="arc" d="M147.6,68.3 A50.5,50.5 0 0 0 203.6,53.3"/>
          <line class="tick" x1="176.2" y1="62.8" x2="179.8" y2="76.4"/>

          <circle class="pt" cx="164.9" cy="20.8" r="3.2"/>
          <circle class="pt" cx="42.1" cy="20.8" r="3.2"/>
          <circle class="pt" cx="245.6" cy="88.4" r="3.2"/>
          <circle class="pt" cx="350.9" cy="88.4" r="3.2"/>
          <circle class="pt" cx="79.9" cy="254.2" r="3.2"/>

          <text x="42.1" y="14" text-anchor="middle">A</text>
          <text x="164.2" y="14" text-anchor="middle">B</text>
          <text x="254" y="78.6">D</text>
          <text x="350.9" y="78.6" text-anchor="middle">E</text>
          <text x="71.6" y="275.1" text-anchor="end">C</text>
        `,
    },
    given: ['[BA // [DE', '[BC] açıortaydır', 'm(BCD) = 25°', 'm(CDE) = 135°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BDC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '70' },
      { key: 'B', text: '75' },
      { key: 'C', text: '80' },
      { key: 'D', text: '85' },
      { key: 'E', text: '90' },
    ],
    answer: 'D',
    hint: 'Önce D çevresindeki üç açıyı 360°’ye tamamla; ABD açısı iç ters açıyla oradan gelir.',
    solution: [
      {
        title: 'D çevresini yaz',
        detail:
          'D noktasının çevresinde BDE, BDC ve CDE açıları sıralanır; toplamları tam açıdır: m(BDE) + α + 135 = 360 → m(BDE) = 225 − α.',
      },
      {
        title: 'İç ters açı',
        detail:
          '[BA // [DE ve BD kesendir. [BA sola, [DE sağa baktığından m(ABD) ile m(BDE) iç ters açılardır: m(ABD) = 225 − α.',
      },
      {
        title: 'Açıortayı kullan',
        detail: '[BC, ABD açısını iki eş parçaya böldüğünden m(DBC) = (225 − α) / 2 olur.',
      },
      {
        title: 'BCD üçgeninde topla',
        detail: 'm(DBC) + m(BCD) + m(BDC) = 180 → (225 − α) / 2 + 25 + α = 180 olur.',
      },
      {
        title: 'Denklemi çöz',
        detail: 'Her iki tarafı 2 ile çarpalım: 225 − α + 50 + 2α = 360 → α + 275 = 360.',
      },
      {
        title: 'Sonuç',
        detail:
          'α = 85° bulunur. Kontrol: m(ABD) = 140°, m(DBC) = 70° ve üçgende 70 + 25 + 85 = 180 ✓',
      },
    ],
  },

  // ---------------------------------------------------------------- 64
  {
    id: 'angles-64',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 276',
      caption: 'Şekil 64',
      label:
        'Paralel [AB ve [CD ışınları, K noktasında kesişen AK ve CK doğruları ile A’dan ve C’den çıkan açıortayların L’de kesişmesi.',
      svg: q64Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 276',
      caption: 'Şekil 64 — yardımcı çizim',
      label:
        'Aynı şekilde, K ve L noktalarından [CD ile aynı yöne bakan kesik çizgili d yardımcı ışınları çizilmiştir.',
      svg: q64Svg('s') + Q64_AUX_SVG,
    },
    given: ['[AB // [CD', 'm(AKC) = 50°', '[AE ve [CF açıortaydır'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ELF) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '60' },
      { key: 'B', text: '65' },
      { key: 'C', text: '70' },
      { key: 'D', text: '75' },
      { key: 'E', text: '80' },
    ],
    answer: 'B',
    hint: 'Yarım açılara a ve b de; K’den ve L’den paralel çizince ikisi de a + b cinsinden yazılır.',
    solution: [
      {
        title: 'Yarım açıları adlandır',
        detail:
          'm(BAE) = m(EAK) = a ve m(DCF) = m(FCK) = b diyelim. Böylece m(BAK) = 2a ve m(DCK) = 2b olur.',
      },
      {
        title: 'K’den paralel çiz',
        detail:
          'K noktasından [CD ile aynı yöne bakan [Kd ışınını çizelim. AK keseninde [AB ile [Kd ters yönlere baktığından m(BAK) ile m(AKd) iç ters açılardır: m(AKd) = 2a. CK keseninde [CD ile [Kd aynı yöne baktığından m(DCK) ile m(CKd) yan iç açılardır: m(CKd) = 180 − 2b.',
      },
      {
        title: 'a + b’yi bul',
        detail:
          '[KC ışını AKd açısının içinde kaldığından m(AKC) = m(AKd) − m(CKd) = 2a − (180 − 2b) = 50 → 2a + 2b = 230 → a + b = 115° bulunur.',
      },
      {
        title: 'L’de aynı çizimi yap',
        detail:
          'E, A, L doğrusal olduğundan m(BAL) = 180 − a; L’den çizilen [Ld ile iç ters açı olarak m(ALd) = 180 − a olur. F, C, L doğrusal olduğundan m(DCL) = 180 − b; yan iç açıdan m(CLd) = b bulunur.',
      },
      {
        title: 'Sonuç',
        detail:
          '[LC ışını ALd açısının içinde kaldığından α = m(ALd) − m(CLd) = (180 − a) − b = 180 − 115 = 65° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 65
  {
    id: 'angles-65',
    topic: 'Paralel doğrular ve kesen',
    figure: {
      viewBox: '0 0 400 367',
      caption: 'Şekil 65',
      label: 'Paralel [AB, [EF ve [CD ışınları; E noktasından geçen T-A-E ve E-C-K doğruları.',
      svg: `
          <defs>
            <marker id="arrow-q65" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="73.5" y1="98" x2="359.2" y2="98" marker-start="url(#arrow-q65)" marker-end="url(#arrow-q65)"/>
          <line class="ln" x1="11.4" y1="187.8" x2="318.4" y2="187.8" marker-start="url(#arrow-q65)" marker-end="url(#arrow-q65)"/>
          <line class="ln" x1="65.3" y1="285.7" x2="383.7" y2="285.7" marker-start="url(#arrow-q65)" marker-end="url(#arrow-q65)"/>
          <line class="ln" x1="144.1" y1="187.8" x2="248.2" y2="10.6" marker-end="url(#arrow-q65)"/>
          <line class="ln" x1="144.1" y1="187.8" x2="280" y2="349.6" marker-end="url(#arrow-q65)"/>

          <path class="arc" d="M244.9,98 A49,49 0 0 0 220.4,55.6"/>
          <text class="val" x="262.9" y="68.6">x</text>

          <path class="arc" d="M167,148.2 A45.7,45.7 0 0 1 173.5,222.8"/>
          <text class="val" x="218.8" y="156.7">110°</text>

          <path class="arc" d="M78.8,187.8 A65.3,65.3 0 0 0 186.1,237.8"/>
          <text class="val" x="102.9" y="274.3">y</text>

          <path class="arc" d="M274.9,285.7 A49,49 0 0 1 257.4,323.2"/>
          <text class="val" x="295.5" y="321.6">50°</text>

          <circle class="pt" cx="195.9" cy="98" r="3.2"/>
          <circle class="pt" cx="318.4" cy="98" r="3.2"/>
          <circle class="pt" cx="144.1" cy="187.8" r="3.2"/>
          <circle class="pt" cx="57.1" cy="187.8" r="3.2"/>
          <circle class="pt" cx="225.9" cy="285.7" r="3.2"/>
          <circle class="pt" cx="326.5" cy="285.7" r="3.2"/>

          <text x="254.7" y="16.3">T</text>
          <text x="187.8" y="86.5" text-anchor="end">A</text>
          <text x="318.4" y="86.5" text-anchor="middle">B</text>
          <text x="57.1" y="176.3" text-anchor="middle">F</text>
          <text x="133.9" y="179.6" text-anchor="end">E</text>
          <text x="217.1" y="277.6" text-anchor="end">C</text>
          <text x="326.5" y="274.3" text-anchor="middle">D</text>
          <text x="287.4" y="357.6">K</text>
        `,
    },
    given: [
      '[AB // [EF // [CD',
      'T, A, E doğrusal ve E, C, K doğrusal',
      'm(TEK) = 110°',
      'm(DCK) = 50°',
      'm(TAB) = x, m(FEK) = y',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, y − x farkı kaç derecedir?',
    choices: [
      { key: 'A', text: '50' },
      { key: 'B', text: '55' },
      { key: 'C', text: '60' },
      { key: 'D', text: '65' },
      { key: 'E', text: '70' },
    ],
    answer: 'E',
    hint: 'Önce y’yi 50°’den, sonra E çevresindeki üç açıdan m(AEF)’yi ve oradan x’i bul.',
    solution: [
      {
        title: 'y’yi bul',
        detail:
          'E, C, K doğrusal olduğundan [EK ile [EC aynı ışındır. [EF // [CD ve EC kesendir; [EF sola, [CD sağa baktığından m(FEC) ile m(DCE) iç ters açılardır. m(DCE) = 180 − 50 = 130° olduğundan y = m(FEK) = 130°.',
      },
      {
        title: 'E çevresini topla',
        detail:
          'E noktasının çevresinde AEF, FEK ve KEA açıları sıralanır. m(KEA) = m(TEK) = 110° olduğundan m(AEF) + 130 + 110 = 360 → m(AEF) = 120°.',
      },
      {
        title: 'x’i bul',
        detail:
          '[AB // [EF ve AE kesendir. [AB sağa, [EF sola baktığından m(BAE) ile m(AEF) iç ters açılardır: m(BAE) = 120°. T, A, E doğrusal olduğundan x = m(TAB) = 180 − 120 = 60°.',
      },
      {
        title: 'Sonuç',
        detail: 'y − x = 130 − 60 = 70° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 66
  {
    id: 'angles-66',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 360',
      caption: 'Şekil 66',
      label:
        'Paralel AP ve DK ışınları arasında A-B-C-D kırık çizgisi ve A ile D’den çıkan açıortayların kesiştiği E noktası.',
      svg: q66Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 360',
      caption: 'Şekil 66 — yardımcı çizim',
      label:
        'Aynı şekilde, B ve C kırılma noktalarından AP’ye paralel kesik çizgili m ve n doğruları çizilmiştir.',
      svg: q66Svg('s') + Q66_AUX_SVG,
    },
    given: ['AP // DK', '[AE ve [DE açıortaydır', 'm(AED) = 100°', 'm(BCD) = 120°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(ABC) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '90' },
      { key: 'B', text: '95' },
      { key: 'C', text: '100' },
      { key: 'D', text: '105' },
      { key: 'E', text: '110' },
    ],
    answer: 'C',
    hint: 'Önce E kırılma noktasından m(PAB) + m(KDC) toplamını bul; sonra B ve C’den paralel çiz.',
    solution: [
      {
        title: 'E kırılma noktasını kullan',
        detail:
          'E, paralellerin arasında bir kırılma noktasıdır: m(AED) = m(PAE) + m(EDK) olur. Açıortaylardan m(PAE) = m(PAB) / 2 ve m(EDK) = m(KDC) / 2 olduğundan m(PAB) + m(KDC) = 2 · 100 = 200°.',
      },
      {
        title: 'B ve C’den paralel çiz',
        detail: 'B ve C noktalarından AP’ye paralel m ve n doğrularını çizelim.',
      },
      {
        title: 'B’deki parçaları yaz',
        detail:
          'AB keseninde m(PAB) ile m’nin sağ kolunun [BA ile yaptığı açı yan iç açılardır: 180 − m(PAB). Buradan m’nin sağ kolu ile [BC arasındaki açı α − (180 − m(PAB)) olur.',
      },
      {
        title: 'C’ye taşı',
        detail:
          'BC keseninde m // n olduğundan yan iç açıdan n’nin sağ kolu ile [CB arasındaki açı 180 − [α − 180 + m(PAB)] = 360 − α − m(PAB) bulunur.',
      },
      {
        title: 'C çevresini topla',
        detail:
          'C noktasının çevresinde BCD, DCn ve nCB açıları tam açıyı verir: m(DCn) = 360 − 120 − (360 − α − m(PAB)) = α + m(PAB) − 120.',
      },
      {
        title: 'D’ye taşı ve çöz',
        detail:
          'CD keseninde n’nin sağ kolu ile [DK aynı yöne baktığından m(DCn) ile m(KDC) yan iç açılardır: [α + m(PAB) − 120] + m(KDC) = 180. Buradan α + 200 − 120 = 180 → α = 100° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 67
  {
    id: 'angles-67',
    topic: 'Kenarları paralel açılar',
    figure: {
      viewBox: '0 0 400 288',
      caption: 'Şekil 67',
      label:
        'Paralel AB ve CD doğruları arasında A-E-C ve B-F-D kırık çizgileri; [EC] ile [BF] paraleldir.',
      svg: q67Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 288',
      caption: 'Şekil 67 — yardımcı çizim',
      label:
        'Aynı şekilde, E ve F noktalarından AB’ye paralel kesik çizgili e ve f yardımcı kolları çizilmiştir.',
      svg: q67Svg('s') + Q67_AUX_SVG,
    },
    given: ['AB // CD', '[EC] // [BF]', 'm(EAB) = 40°', 'm(FDT) = 95°', 'm(AEC) = x, m(BFD) = y'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, y − x farkı kaç derecedir?',
    choices: [
      { key: 'A', text: '45' },
      { key: 'B', text: '50' },
      { key: 'C', text: '55' },
      { key: 'D', text: '60' },
      { key: 'E', text: '65' },
    ],
    answer: 'A',
    hint: 'E ve F’den paralel çiz; [EC] // [BF] olduğu için artan parçalar birbirine eşit çıkar.',
    solution: [
      {
        title: 'E ve F’den paralel çiz',
        detail:
          'E noktasından AB’ye paralel e kolunu (sola), F noktasından da f kolunu (sağa) çizelim: e // f // AB // CD.',
      },
      {
        title: 'E’deki parçayı ayır',
        detail:
          'AE keseninde [AB sağa, e sola baktığından m(EAB) ile e kolunun [EA ile yaptığı açı iç ters açılardır: 40°. e kolu AEC açısının içinde kaldığından, e ile [EC arasındaki açı x − 40 olur.',
      },
      {
        title: 'F’deki parçayı ayır',
        detail:
          'FD keseninde [DT ile f kolu aynı yöne baktığından m(FDT) ile f kolunun [FD ile yaptığı açı yan iç açılardır: 180 − 95 = 85°. f kolu BFD açısının içinde kaldığından, [FB ile f arasındaki açı y − 85 olur.',
      },
      {
        title: 'İki parçayı eşitle',
        detail:
          '[EC] // [BF] ve e // f olduğundan bu iki açının kenarları karşılıklı paraleldir; her iki kenar da ters yöne baktığından açılar eştir: x − 40 = y − 85.',
      },
      {
        title: 'Sonuç',
        detail: 'y − x = 85 − 40 = 45° bulunur. Görüldüğü gibi x ile y ayrı ayrı belli değildir.',
      },
    ],
  },

  // ---------------------------------------------------------------- 68
  {
    id: 'angles-68',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 410',
      caption: 'Şekil 68',
      label:
        'Paralel [AB ve [EF ışınları arasında A-C-D-E kırık çizgisi; C ve D kırılma noktalarındaki açılar 110° ve 85°.',
      svg: q68Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 410',
      caption: 'Şekil 68 — yardımcı çizim',
      label:
        'Aynı şekilde, C ve D kırılma noktalarından [AB’ye paralel kesik çizgili c ve d doğruları çizilmiştir.',
      svg: q68Svg('s') + Q68_AUX_SVG,
    },
    given: ['[AB // [EF', 'm(BAC) = 45°', 'm(ACD) = 110°', 'm(EDC) = 85°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DEF) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' },
      { key: 'E', text: '35' },
    ],
    answer: 'D',
    hint: 'İki kırılma noktası var: C ve D’den paralel çizip açıları sırayla aşağı taşı.',
    solution: [
      {
        title: 'C ve D’den paralel çiz',
        detail:
          'C ve D noktalarından [AB’ye paralel c ve d doğrularını çizelim: c // d // [AB // [EF olur.',
      },
      {
        title: 'A’daki açıyı C’ye taşı',
        detail:
          'AC keseninde [AB ile c’nin sağ kolu aynı yöne baktığından m(BAC) ile bu kolun [CA ile yaptığı açı yan iç açılardır: 180 − 45 = 135°. Doğrusal açıdan c’nin sol kolu ile [CA arasındaki açı 45° olur.',
      },
      {
        title: 'C’deki kalan parçayı bul',
        detail:
          'c’nin sol kolu ACD açısının içinde kaldığından, sol kol ile [CD arasındaki açı 110 − 45 = 65° olur.',
      },
      {
        title: 'D’ye taşı',
        detail:
          'CD keseninde c // d ve kollar ters yönlere baktığından, d’nin sağ kolu ile [DC arasındaki açı iç ters açı olarak 65°’dir.',
      },
      {
        title: 'D’deki toplamı yaz',
        detail:
          '[DC ışını, d’nin sağ kolu ile [DE arasında kaldığından d’nin sağ kolu ile [DE arasındaki açı 65 + 85 = 150° olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'DE keseninde d ile [EF aynı yöne baktığından bu 150° ile α yan iç açılardır: α = 180 − 150 = 30° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 69
  {
    id: 'angles-69',
    topic: 'Çokgende iç açılar',
    figure: {
      viewBox: '0 0 400 438',
      caption: 'Şekil 69',
      label:
        'A, F, E, D, C, B köşeli altıgen; E ve C köşeleri içbükeydir ve bu köşelerde dışta kalan açılar x ile gösterilmiştir.',
      svg: `
          <path class="ln" d="M28.6,213.3 L181.7,31 L139.4,147.4 L336.4,182.3 L157.3,247.4 L240.2,390.9 Z"/>

          <path class="arc" d="M67.8,166.6 A61,61 0 0 1 75.3,252.5"/>
          <text class="val" x="140" y="213" text-anchor="end">90°</text>

          <path class="arc" d="M145,74.7 A57.1,57.1 0 0 0 162.2,84.7"/>
          <text class="val" x="110" y="116" text-anchor="end">20°</text>

          <path class="arc" d="M156.3,100.9 A49.5,49.5 0 0 1 188.2,156"/>
          <text class="val" x="209.5" y="116.2">x</text>

          <path class="arc" d="M280.2,172.4 A57.1,57.1 0 0 0 282.8,201.8"/>
          <text class="val" x="247.6" y="196.2" text-anchor="end">30°</text>

          <path class="arc" d="M207.4,229.2 A53.3,53.3 0 0 1 184,293.6"/>
          <text class="val" x="238.1" y="281.9">x</text>

          <path class="arc" d="M190.6,349.2 A64.8,64.8 0 0 1 207.8,334.8"/>
          <text class="val" x="160" y="336" text-anchor="end">20°</text>

          <circle class="pt" cx="28.6" cy="213.3" r="3.2"/>
          <circle class="pt" cx="181.7" cy="31" r="3.2"/>
          <circle class="pt" cx="139.4" cy="147.4" r="3.2"/>
          <circle class="pt" cx="336.4" cy="182.3" r="3.2"/>
          <circle class="pt" cx="157.3" cy="247.4" r="3.2"/>
          <circle class="pt" cx="240.2" cy="390.9" r="3.2"/>

          <text x="17.1" y="221" text-anchor="end">A</text>
          <text x="188.6" y="19">F</text>
          <text x="127.6" y="141" text-anchor="end">E</text>
          <text x="348.6" y="175.2">D</text>
          <text x="146.7" y="259.1" text-anchor="end">C</text>
          <text x="249.5" y="417.1">B</text>
        `,
    },
    given: ['m(FAB) = 90°', 'm(ABC) = 20°', 'm(EDC) = 30°', 'm(AFE) = 20°', 'm(FED) = m(DCB) = x'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, x kaç derecedir?',
    choices: [
      { key: 'A', text: '75' },
      { key: 'B', text: '80' },
      { key: 'C', text: '85' },
      { key: 'D', text: '90' },
      { key: 'E', text: '95' },
    ],
    answer: 'B',
    hint: 'E ve C içbükey köşelerdir; oralarda iç açı 360 − x’tir.',
    solution: [
      {
        title: 'İçbükey köşeleri gör',
        detail:
          'Altıgende E ve C köşeleri içeri girmiştir (içbükey). Şekilde işaretlenen x açıları bu köşelerin dış tarafında kalan açılardır; iç açılar 360 − x olur.',
      },
      {
        title: 'İç açılar toplamını yaz',
        detail:
          'n kenarlı bir çokgende iç açılar toplamı (n − 2) · 180°’dir: altıgende 4 · 180 = 720°.',
      },
      {
        title: 'Denklemi kur',
        detail: '90 + 20 + (360 − x) + 30 + (360 − x) + 20 = 720 olur.',
      },
      {
        title: 'Denklemi çöz',
        detail: '880 − 2x = 720 → 2x = 160 bulunur.',
      },
      {
        title: 'Sonuç',
        detail: 'x = 80° bulunur. (İçbükey köşelerdeki iç açılar 280°’dir.)',
      },
    ],
  },

  // ---------------------------------------------------------------- 70
  {
    id: 'angles-70',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 349',
      caption: 'Şekil 70',
      label:
        'Paralel [AK ve [EF ışınları arasında A-B-C-D-E kırık çizgisi; A ve C köşelerindeki açılar α, E’deki açı β.',
      svg: q70Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 349',
      caption: 'Şekil 70 — yardımcı çizim',
      label:
        'Aynı şekilde, B, C ve D kırılma noktalarından [AK’ye paralel kesik çizgili m, n ve p doğruları çizilmiştir.',
      svg: q70Svg('s') + Q70_AUX_SVG,
    },
    given: ['[AK // [EF', 'm(KAB) = m(BCD) = α', 'm(ABC) = 100°', 'm(CDE) = 130°', 'm(DEF) = β'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, α ile β arasındaki bağıntı aşağıdakilerden hangisidir?',
    choices: [
      { key: 'A', text: 'α = β' },
      { key: 'B', text: 'α + β = 230' },
      { key: 'C', text: '2α − β = 230' },
      { key: 'D', text: '2α + β = 230' },
      { key: 'E', text: 'α + 2β = 230' },
    ],
    answer: 'D',
    hint: 'Üç kırılma noktasından da paralel çiz ve açıları sırayla aşağı taşı.',
    solution: [
      {
        title: 'Kırılma noktalarından paralel çiz',
        detail:
          'B, C ve D noktalarından [AK’ye paralel m, n ve p doğrularını çizelim: [AK // m // n // p // [EF olur.',
      },
      {
        title: 'B’de böl',
        detail:
          'AB keseninde m(KAB) = α ile m’nin sol kolunun [BA ile yaptığı açı iç ters açılardır: bu parça α’dır. m(ABC) = 100 olduğundan m’nin sol kolu ile [BC arasındaki parça 100 − α olur.',
      },
      {
        title: 'C’ye taşı',
        detail:
          'BC keseninde m // n olduğundan, n’nin sağ kolu ile [CB arasındaki açı iç ters açı olarak 100 − α’dır.',
      },
      {
        title: 'C’de kalanı bul',
        detail:
          'n’nin sağ kolu m(BCD) = α açısının içinde kaldığından, sağ kol ile [CD arasındaki açı α − (100 − α) = 2α − 100 olur.',
      },
      {
        title: 'D’ye taşı ve böl',
        detail:
          'CD keseninde iç ters açıdan p’nin sol kolu ile [DC arasındaki açı 2α − 100’dür. m(CDE) = 130 olduğundan p’nin sol kolu ile [DE arasındaki açı 130 − (2α − 100) = 230 − 2α olur.',
      },
      {
        title: 'Sonuç',
        detail:
          'DE keseninde p’nin sol kolu ile [EF ters yönlere baktığından bu açı ile β iç ters açılardır: β = 230 − 2α, yani 2α + β = 230 bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 71
  {
    id: 'angles-71',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 357',
      caption: 'Şekil 71',
      label:
        'Paralel [AB ve [CD ışınları; A ile C’den çıkan açıortaylar E noktasında kesişiyor, K noktası ise A ve C’yi birleştiren ikinci yoldur.',
      svg: q71Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 357',
      caption: 'Şekil 71 — yardımcı çizim',
      label:
        'Aynı şekilde, E kırılma noktasından [AB’ye paralel kesik çizgili d doğrusu çizilmiştir.',
      svg: q71Svg('s') + Q71_AUX_SVG,
    },
    given: ['[AB // [CD', '[AE ve [CE açıortaydır', 'm(BAK) = a', 'm(DCK) = b', 'm(AEC) = 55°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, a + b kaç derecedir?',
    choices: [
      { key: 'A', text: '90' },
      { key: 'B', text: '95' },
      { key: 'C', text: '100' },
      { key: 'D', text: '105' },
      { key: 'E', text: '110' },
    ],
    answer: 'E',
    hint: 'E kırılma noktasında oluşan açı, üstteki ve alttaki yarım açıların toplamıdır.',
    solution: [
      {
        title: 'Yarım açıları adlandır',
        detail:
          '[AE, BAK açısını iki eş parçaya böldüğünden m(BAE) = a / 2; [CE de DCK açısını böldüğünden m(DCE) = b / 2 olur.',
      },
      {
        title: 'E’den paralel çiz',
        detail:
          'E noktası paralellerin arasındadır ve [AB ile [CD ışınlarının ikisi de sola bakar. E’den çizilen d doğrusu AEC açısını iki parçaya ayırır.',
      },
      {
        title: 'Parçaları taşı',
        detail:
          'AE keseninde m(BAE) ile d’nin sol kolu-[EA açısı iç ters açılardır; CE keseninde de m(DCE) ile d’nin sol kolu-[EC açısı iç ters açılardır. Yani m(AEC) = m(BAE) + m(DCE).',
      },
      {
        title: 'Denklemi kur',
        detail: 'a / 2 + b / 2 = 55 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'Her iki tarafı 2 ile çarparsak a + b = 110° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 72
  {
    id: 'angles-72',
    topic: 'Paralel doğrularda zikzak',
    figure: {
      viewBox: '0 0 400 304',
      caption: 'Şekil 72',
      label:
        'Ters yönlere bakan paralel [CD ve [EF ışınları ile ikisinin de üstünde kalan B köşesi.',
      svg: q72Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 304',
      caption: 'Şekil 72 — yardımcı çizim',
      label:
        'Aynı şekilde, B köşesinden [CD ile aynı yöne bakan kesik çizgili [Bd yardımcı ışını çizilmiştir.',
      svg: q72Svg('s') + Q72_AUX_SVG,
    },
    given: ['[CD // [EF', 'm(CBE) = 25°', 'm(FEB) = 80°'],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BCD) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '115' },
      { key: 'B', text: '120' },
      { key: 'C', text: '125' },
      { key: 'D', text: '130' },
      { key: 'E', text: '135' },
    ],
    answer: 'C',
    hint: 'B iki ışının da dışında; B’den paralel çizip iki açıyı da oraya taşı.',
    solution: [
      {
        title: 'B’den paralel çiz',
        detail:
          'B noktasından [CD ile aynı yöne (sağa) bakan [Bd ışınını çizelim: [Bd // [CD // [EF olur.',
      },
      {
        title: 'C’deki açıyı taşı',
        detail:
          'BC keseninde [CD ile [Bd aynı yöne baktığından m(BCD) ile m(CBd) yan iç açılardır: m(CBd) = 180 − α.',
      },
      {
        title: 'E’deki açıyı taşı',
        detail:
          'BE keseninde [EF sola, [Bd sağa baktığından m(FEB) ile m(EBd) iç ters açılardır: m(EBd) = 80°.',
      },
      {
        title: 'B’de farkı al',
        detail:
          '[BC ışını [Bd ile [BE arasında kaldığından m(CBE) = m(EBd) − m(CBd) → 25 = 80 − (180 − α) olur.',
      },
      {
        title: 'Sonuç',
        detail: '25 = α − 100 → α = 125° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 73
  {
    id: 'angles-73',
    topic: 'İkizkenar üçgen ve paralellik',
    figure: {
      viewBox: '0 0 400 248',
      caption: 'Şekil 73',
      label:
        'Paralel BC, [DK] ve LE doğruları; A’dan E’ye giden doğru üzerinde orta nokta K, ayrıca A-D-E kırık çizgisi ve E’deki açıortay.',
      svg: `
          <defs>
            <marker id="arrow-q73" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
          </defs>

          <line class="ln" x1="13.8" y1="27.6" x2="344.8" y2="27.6" marker-start="url(#arrow-q73)" marker-end="url(#arrow-q73)"/>
          <line class="ln" x1="62.1" y1="209.8" x2="386.2" y2="209.8" marker-start="url(#arrow-q73)" marker-end="url(#arrow-q73)"/>
          <line class="ln" x1="87.4" y1="118.8" x2="218.3" y2="118.8"/>
          <path class="ln" d="M124.1,27.6 L312.6,209.8"/>
          <path class="ln" d="M124.1,27.6 L87.4,118.8 L312.6,209.8"/>

          <path class="par" d="M211,19.3 L220.7,27.6 L211,35.9"/>
          <path class="par" d="M149,110.5 L158.6,118.8 L149,127.1"/>
          <path class="par" d="M211,201.5 L220.7,209.8 L211,218.1"/>

          <line class="tick" x1="166.5" y1="78.2" x2="176.1" y2="68.3"/>
          <line class="tick" x1="260.7" y1="169.2" x2="270.3" y2="159.3"/>

          <path class="arc" d="M168.2,27.6 A44.1,44.1 0 0 1 155.8,58.2"/>
          <text class="val" x="187.6" y="56.6">44°</text>

          <path class="arc" d="M80,27.6 A44.1,44.1 0 0 0 107.6,68.5"/>
          <text class="val" x="67.6" y="67.6" text-anchor="end">x</text>

          <path class="arc" d="M278.9,177.2 A46.9,46.9 0 0 0 269.1,192.2"/>
          <line class="tick" x1="279.1" y1="188.1" x2="267.5" y2="180.6"/>
          <path class="arc" d="M269.1,192.2 A46.9,46.9 0 0 0 265.7,209.8"/>
          <line class="tick" x1="273.2" y1="202.1" x2="259.7" y2="199.3"/>

          <circle class="pt" cx="124.1" cy="27.6" r="3.2"/>
          <circle class="pt" cx="48.3" cy="27.6" r="3.2"/>
          <circle class="pt" cx="282.8" cy="27.6" r="3.2"/>
          <circle class="pt" cx="87.4" cy="118.8" r="3.2"/>
          <circle class="pt" cx="218.3" cy="118.8" r="3.2"/>
          <circle class="pt" cx="312.6" cy="209.8" r="3.2"/>
          <circle class="pt" cx="96.6" cy="209.8" r="3.2"/>

          <text x="48.3" y="17.9" text-anchor="middle">B</text>
          <text x="124.1" y="15.2" text-anchor="middle">A</text>
          <text x="282.8" y="17.9" text-anchor="middle">C</text>
          <text x="78.6" y="113.1" text-anchor="end">D</text>
          <text x="223.4" y="110.3">K</text>
          <text x="96.6" y="231.7" text-anchor="middle">L</text>
          <text x="320.1" y="231.7">E</text>
        `,
    },
    given: [
      'BC // [DK] // LE',
      'A, K, E doğrusal ve |AK| = |KE|',
      'm(AED) = m(DEL)',
      'm(EAC) = 44°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(BAD) = x kaç derecedir?',
    choices: [
      { key: 'A', text: '68' },
      { key: 'B', text: '70' },
      { key: 'C', text: '72' },
      { key: 'D', text: '74' },
      { key: 'E', text: '76' },
    ],
    answer: 'A',
    hint: 'Önce KDE üçgeninin ikizkenar olduğunu göster; böylece |KD| = |KE| = |KA| olur.',
    solution: [
      {
        title: 'İç ters açı',
        detail:
          '[DK] // LE ve DE kesendir. [DK sağa, [EL sola baktığından m(KDE) ile m(DEL) iç ters açılardır: m(KDE) = m(DEL).',
      },
      {
        title: 'İkizkenar üçgeni bul',
        detail:
          'K noktası [EA üzerinde olduğundan m(KED) = m(AED); verilenden m(AED) = m(DEL) olduğundan DKE üçgeninde m(KDE) = m(KED) olur. Taban açıları eşit olan üçgen ikizkenardır: |KD| = |KE|.',
      },
      {
        title: 'Üç uzunluğu eşitle',
        detail:
          '|AK| = |KE| verildiğinden |KA| = |KD| = |KE| olur; yani AKD üçgeni de ikizkenardır.',
      },
      {
        title: 'DKA açısını bul',
        detail:
          '[DK] // BC ve AE kesendir. [KD sola, [AC sağa baktığından m(DKA) ile m(EAC) iç ters açılardır: m(DKA) = 44°.',
      },
      {
        title: 'Taban açılarını bul',
        detail:
          'AKD üçgeninde |KA| = |KD| olduğundan taban açıları eşittir: m(KAD) = m(KDA) = (180 − 44) / 2 = 68°.',
      },
      {
        title: 'Sonuç',
        detail:
          'B, A, C doğrusal olduğundan m(BAD) + m(DAK) + m(KAC) = 180 → x + 68 + 44 = 180 → x = 68° bulunur.',
      },
    ],
  },

  // ---------------------------------------------------------------- 74
  {
    id: 'angles-74',
    topic: 'Açıortay ve paralel doğrular',
    figure: {
      viewBox: '0 0 400 391',
      caption: 'Şekil 74',
      label:
        'Paralel [BA ışını ve KL doğrusu arasında C köşesi; [CD, BCE açısının açıortayı ve D noktası E ile birleştirilmiş.',
      svg: q74Svg('q'),
    },
    solutionFigure: {
      viewBox: '0 0 400 391',
      caption: 'Şekil 74 — yardımcı çizim',
      label:
        'Aynı şekilde, C köşesinden [BA ile aynı yöne bakan kesik çizgili [Cd yardımcı ışını çizilmiştir.',
      svg: q74Svg('s') + Q74_AUX_SVG,
    },
    given: [
      '[BA // KL',
      'm(BCD) = m(DCE)',
      'm(ABC) = 40°',
      'm(CEK) = 80°',
      'm(CED) = m(ECD) + 15°',
    ],
    stem: [],
    ask: 'Yukarıdaki verilere göre, m(DEL) = α kaç derecedir?',
    choices: [
      { key: 'A', text: '10' },
      { key: 'B', text: '15' },
      { key: 'C', text: '20' },
      { key: 'D', text: '25' },
      { key: 'E', text: '30' },
    ],
    answer: 'D',
    hint: 'Önce C kırılma noktasındaki açıyı bul; açıortay onu ikiye böler.',
    solution: [
      {
        title: 'C kırılma noktası',
        detail:
          'C noktası paralellerin arasındadır ve [BA ile [EK ışınlarının ikisi de sola bakar. C’den paralel çizersek iki iç ters açının toplamı çıkar: m(BCE) = m(ABC) + m(CEK) = 40 + 80 = 120°.',
      },
      {
        title: 'Açıortayı kullan',
        detail: '[CD, BCE açısını iki eş parçaya böldüğünden m(ECD) = 120 / 2 = 60° olur.',
      },
      {
        title: 'CED açısını bul',
        detail: 'm(CED) = m(ECD) + 15 = 60 + 15 = 75° bulunur.',
      },
      {
        title: 'E’deki doğrusal açıyı yaz',
        detail:
          'K, E, L doğrusal olduğundan m(CEK) + m(CED) + m(DEL) = 180 → 80 + 75 + α = 180 olur.',
      },
      {
        title: 'Sonuç',
        detail: 'α = 180 − 155 = 25° bulunur.',
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
    {
      id: 'angles-m8',
      order: 8,
      title: 'Dik ve paralel kenarlar',
      summary:
        'Kenarları karşılıklı dik açılar, paralellere inen dikmeler ve dik açının yardımcı paralelle parçalanması.',
      questions: pick('angles-39', 'angles-40', 'angles-41', 'angles-42', 'angles-43', 'angles-44'),
    },
    {
      id: 'angles-m9',
      order: 9,
      title: 'Paralel ışınlar',
      summary:
        'Kenarları karşılıklı paralel açılar ve köşeden paralel çizme yöntemi; sonunda açıortayla birlikte kullanılan paralel ışın demeti.',
      questions: pick('angles-45', 'angles-46', 'angles-47', 'angles-48', 'angles-49', 'angles-50'),
    },
    {
      id: 'angles-m10',
      order: 10,
      title: 'Dikme ve açıortay',
      summary:
        'Paralellere inen dikmeler, açıortayların kırılma noktalarında kurduğu kat ilişkileri, üçgende dış açı ve saatte akreple yelkovan.',
      questions: pick('angles-51', 'angles-52', 'angles-53', 'angles-54', 'angles-55', 'angles-56'),
    },
    {
      id: 'angles-m11',
      order: 11,
      title: 'Açıortay ve dikme',
      summary:
        'Açıortayın dik üçgenle birlikte kullanımı, dört köşeli zikzakta 540° kuralı ve sonucu verilenlerden bağımsız çıkan kurulumlar.',
      questions: pick('angles-57', 'angles-58', 'angles-59', 'angles-60', 'angles-61', 'angles-62'),
    },
    {
      id: 'angles-m12',
      order: 12,
      title: 'Zikzak ve açıortay',
      summary:
        'Açıortayların paralel doğrular arasında kurduğu bağıntılar, iki kırılmalı zikzaklar ve yalnızca farkı bulunabilen açı çiftleri.',
      questions: pick('angles-63', 'angles-64', 'angles-65', 'angles-66', 'angles-67', 'angles-68'),
    },
    {
      id: 'angles-m13',
      order: 13,
      title: 'Çokgen ve bağıntı',
      summary:
        'İçbükey köşeli çokgende iç açılar, üç kırılmalı zikzakta α–β bağıntısı, ikizkenar üçgenle çözülen paralellik ve açıortay kurulumları.',
      questions: pick('angles-69', 'angles-70', 'angles-71', 'angles-72', 'angles-73', 'angles-74'),
    },
  ],
};
