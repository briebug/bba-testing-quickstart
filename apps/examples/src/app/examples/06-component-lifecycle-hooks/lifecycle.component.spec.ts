import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LifecycleComponent } from './lifecycle.component';

// -------------------------------------------------------------------
// CHALLENGE:
// Complete the test of the indirect execution of ngOnInit
// Complete the test of the direct execution of ngOnInit
// Complete the test of the direct execution of ngOnDestroy
// -------------------------------------------------------------------
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
  });

  it('should initialize `loaded` properly', () => {
  });

  it('should call `initData` on init', () => {
  });

  it('should call `purgeData` on destroy', () => {
  });
});
