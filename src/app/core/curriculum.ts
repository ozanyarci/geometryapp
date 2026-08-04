import { Module, Question, Unit } from './models';
import { UNIT_1_ANGLES } from './data/unit-1-angles';
import { UNIT_2_TRIANGLES } from './data/unit-2-triangles';

/**
 * Every unit in the app. To add one, create its data file and append it here
 * in curriculum order.
 */
export const UNITS: readonly Unit[] = [UNIT_1_ANGLES, UNIT_2_TRIANGLES];

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
