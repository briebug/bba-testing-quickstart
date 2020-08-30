import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputOutputComponent } from './input-output.component';

class TestInputOutputHostComponent {

}

// -------------------------------------------------------------------
// CHALLENGE:
// Write a host component to contain the child component
// Make sure the host component initializes child component properly
// Verify the child input is rendering correctly based on its input
// Verify the child output is emitting the proper value
// -------------------------------------------------------------------
describe('HostComponent', () => {
  let component: TestInputOutputHostComponent;
  let fixture: ComponentFixture<TestInputOutputHostComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutputComponent, TestInputOutputHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputOutputHostComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should render the @Input `subject`', () => {
  });

  it('should emit the proper message on leaving', () => {
  });
});
