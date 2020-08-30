import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AsyncComponent } from './async.component';
import { AsyncService } from './async.service';

// -------------------------------------------------------------------
// CHALLENGE:
// Get the first test to pass using async and whenStable
// Get the second test to pass using fakeAsync and tick
// Get the third test to pass by testing the min max thresholds
// -------------------------------------------------------------------
describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let de: DebugElement;
  let asyncService: AsyncService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncComponent],
      providers: [AsyncService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    asyncService = de.injector.get(AsyncService);
  });

  it('should assign result if add is within threshold', async(() => {
    // Finish this test
  }));

  it('should assign max if add is greater than max', fakeAsync(() => {
    // Finish this test
  }));

  it('should properly test min and max thresholds', () => {
    // Finish this test
  })
});
