import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GreetingService } from './greeting.service';
import { GreetingComponent } from './greeting.component';

// -------------------------------------------------------------------
// CHALLENGE:
// Create a greeting service mock
// Provide the mock with useClass
// Get a reference to the service via the injector
// -------------------------------------------------------------------

class GreetingServiceMock {
  // Complete this mock
}

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;
  let de: DebugElement;
  let greetingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingComponent],
      // Provide the mock to the module
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    // Get references to the mock
  });

  it('should set the default `subject`', () => {
    expect(component.subject.title).toBe('Mock');
  });

  it('should greet the default service `subject`', () => {
    const h1 = de.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toBe('Presenting Mock!');
  });
});
