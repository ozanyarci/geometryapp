import { Module, Question, Unit } from './models';
import { UNIT_1_ANGLES } from './data/unit-1-angles';
import { UNIT_2_TRIANGLES } from './data/unit-2-triangles';
import { UNIT_3_POLYGONS } from './data/unit-3-polygons';
import { UNIT_4_QUADRILATERALS } from './data/unit-4-quadrilaterals';
import { UNIT_5_CIRCLES } from './data/unit-5-circles';
import { UNIT_6_ANALYTIC } from './data/unit-6-analytic';
import { UNIT_7_LINES } from './data/unit-7-lines';
import { UNIT_8_PRISMS } from './data/unit-8-prisms';

/**
 * Every unit in the app. To add one, create its data file and append it here
 * in curriculum order.
 */
export const UNITS: readonly Unit[] = [
  UNIT_1_ANGLES,
  UNIT_2_TRIANGLES,
  UNIT_3_POLYGONS,
  UNIT_4_QUADRILATERALS,
  UNIT_5_CIRCLES,
  UNIT_6_ANALYTIC,
  UNIT_7_LINES,
  UNIT_8_PRISMS,
];

export function findUnit(id: string): Unit | undefined {
  return UNITS.find((unit) => unit.id === id);
}

/** A module together with the unit it belongs to, since pages need both. */
export interface ModuleLocation {
  unit: Unit;
  module: Module;
}

export function findModule(unitId: string, moduleId: string): ModuleLocation | undefined {
  const unit = findUnit(unitId);
  const module = unit?.modules.find((candidate) => candidate.id === moduleId);
  return unit && module ? { unit, module } : undefined;
}

/** The module that follows this one, or undefined at the end of the unit. */
export function nextModule(unit: Unit, moduleId: string): Module | undefined {
  const index = unit.modules.findIndex((module) => module.id === moduleId);
  return index === -1 ? undefined : unit.modules[index + 1];
}

/** Every question in a unit, in module order. */
export function unitQuestions(unit: Unit): readonly Question[] {
  return unit.modules.flatMap((module) => module.questions);
}

export function unitQuestionCount(unit: Unit): number {
  return unit.modules.reduce((sum, module) => sum + module.questions.length, 0);
}
