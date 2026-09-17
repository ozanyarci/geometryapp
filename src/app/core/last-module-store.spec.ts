import { TestBed } from '@angular/core/testing';
import { LastModuleStore } from './last-module-store';
import { UNIT_1_ANGLES } from './data/unit-1-angles';

describe('LastModuleStore', () => {
  const unitId = UNIT_1_ANGLES.id;
  const [first, second] = UNIT_1_ANGLES.modules;

  let store: LastModuleStore;

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    store = TestBed.inject(LastModuleStore);
  });

  it('remembers nothing before a module is opened', () => {
    expect(store.lastModuleId(unitId)).toBeUndefined();
  });

  it('remembers the module the student opened last', () => {
    store.remember(unitId, first.id);
    expect(store.lastModuleId(unitId)).toBe(first.id);

    store.remember(unitId, second.id);
    expect(store.lastModuleId(unitId)).toBe(second.id);
  });

  it('keeps one module per unit', () => {
    store.remember(unitId, first.id);
    store.remember('other-unit', second.id);

    expect(store.lastModuleId(unitId)).toBe(first.id);
    expect(store.lastModuleId('other-unit')).toBe(second.id);
  });

  it('survives a restart', () => {
    store.remember(unitId, second.id);

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    expect(TestBed.inject(LastModuleStore).lastModuleId(unitId)).toBe(second.id);
  });

  it('ignores corrupted storage', () => {
    localStorage.setItem('geometry.last-module.v1', '{"unit-1": 42');

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    expect(TestBed.inject(LastModuleStore).lastModuleId(unitId)).toBeUndefined();
  });
});
