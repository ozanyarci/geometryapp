import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { LastModuleStore } from '../../core/last-module-store';
import { UNIT_1_ANGLES } from '../../core/data/unit-1-angles';
import { UnitDetail } from './unit-detail';

describe('UnitDetail', () => {
  const unit = UNIT_1_ANGLES;

  function render(): HTMLElement {
    const fixture = TestBed.createComponent(UnitDetail);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: unit.id }) } },
        },
      ],
    });
  });

  it('marks no module when the student has not opened one yet', () => {
    expect(render().querySelector('.module--last')).toBeNull();
  });

  it('marks the module the student opened last', () => {
    const target = unit.modules[2];
    TestBed.inject(LastModuleStore).remember(unit.id, target.id);

    const marked = render().querySelector('.module--last');
    expect(marked?.getAttribute('data-module-id')).toBe(target.id);
  });

  it('marks a module of this unit only', () => {
    TestBed.inject(LastModuleStore).remember('another-unit', unit.modules[1].id);

    expect(render().querySelector('.module--last')).toBeNull();
  });
});
