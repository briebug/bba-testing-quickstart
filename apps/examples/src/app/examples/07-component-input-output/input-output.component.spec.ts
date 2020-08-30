import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputOutputComponent } from './input-output.component';

// -------------------------------------------------------------------
// CHALLENGE:
// Complete the test setup so that the component initializes properly
// Verify this by verifying the first test passes
// Complete the second test to verify that the Input renders
// Complete the third test to verfiy the correct event was emitted
// -------------------------------------------------------------------
describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should have `subject` as an @Input', () => {
  });

  it('should render the @Input `subject`', () => {
  });

  it('should emit the proper message on depart', () => {
  });
});
