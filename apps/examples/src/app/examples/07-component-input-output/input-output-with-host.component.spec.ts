import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputOutputComponent } from './input-output.component';

@Component({
  template: `<bba-input-output
    [subject]="subject"
    (leave)="onLeave($event)">
  </bba-input-output>
  `
})
class TestInputOutputHostComponent {
  subject = 'galaxy';
  completeGreeting: string;
  onLeave(greeting: string) { this.completeGreeting = greeting; }
}

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

  it('greets the @Input `subject`', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toBe('Hello galaxy!');
  });

  it('says goodbye to the `subject`', () => {
    const button = de.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.completeGreeting).toBe('Ciao galaxy!');
  });
});
