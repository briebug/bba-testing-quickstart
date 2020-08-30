import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutedComponent } from './routed.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DebugElement } from '@angular/core';

// -------------------------------------------------------------------
// CHALLENGE:
// Complete the router stub
// Complete the activated router stub
// Provide both stubs to the test module
// Get a reference to both stubs via the injector
// Update both tests so they pass
// -------------------------------------------------------------------
class RouterStub {
  // Finish this stub
}

class ActivatedRouteStub {
  // Finish this stub
}

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;
  let de: DebugElement;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoutedComponent],
      // Provide the stubs to the module
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    // Get references to the stubs
  });

  it('should navigates to `/items` when `goToItems` is called', () => {
    // Finish this test
  });

  it('should set the `subject` based on route params', () => {
    // Finish this test
  });
});
