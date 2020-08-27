import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LifecycleComponent } from './lifecycle.component';

describe('LifecycleComponent', () => {
  let component: LifecycleComponent;
  let fixture: ComponentFixture<LifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize properly', () => {
    const spy = spyOn(component, 'initData').and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should destroy properly', () => {
    const spy = spyOn(component, 'purgeData').and.callThrough();

    component.ngOnDestroy();

    expect(spy).toHaveBeenCalled();
  });
});
