import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessComponent } from './business.component';
import { BusinessService, Transactions } from './business.service';

// -------------------------------------------------------------------
// CHALLENGE:
// Create a BusinessServiceMock
// Inject the BusinessServiceMock using useClass
// Get a referece to the BusinessServiceMock
// Complete the test for spying on the add method
// Complete the test for spying on the subtract method
// Complete the test for spying on the save method
// -------------------------------------------------------------------
describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let fixture: ComponentFixture<BusinessComponent>;
  let de: DebugElement;
  let businessService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessComponent],
      providers: [{ provide: BusinessService, useClass: BusinessServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    businessService = de.injector.get(BusinessService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should properly call `businessService.add`', () => {
  });

  it('should properly call `businessService.subtract`', () => {
  });

  it('should call the right method on `save`', () => {
  });
});
