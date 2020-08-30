import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessComponent } from './business.component';
import { BusinessService, Transactions } from './business.service';

// -------------------------------------------------------------------
// CHALLENGE:
// Complete the BusinessServiceMock
// Provide the BusinessServiceMock using useClass
// Get a referece to the BusinessServiceMock
// Complete the test for spying on the add method
// Complete the test for spying on the subtract method
// Complete the test for spying on the save method
// -------------------------------------------------------------------

class BusinessServiceMock {
  // Complete this mock
}

describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let fixture: ComponentFixture<BusinessComponent>;
  let de: DebugElement;
  let businessService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessComponent],
      // Provide the mock to the module
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    // Get references to the mock
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should properly call `businessService.add`', () => {
    // Finish this test
  });

  it('should properly call `businessService.subtract`', () => {
    // Finish this test
  });

  it('should call the right method on `save`', () => {
    // Finish this test
  });
});
