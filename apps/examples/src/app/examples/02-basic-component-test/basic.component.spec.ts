import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ BasicComponent ]
    })
    .createComponent(BasicComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('sets `subject` to `world` by default', () => {
    expect(component.subject).toBe('world');
  });

  it('greets the subject', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toBe('Hello world!');
  });

  it('updates the subject', () => {
    component.subject = 'developer';
    fixture.detectChanges();
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toBe('Hello developer!');
  });
});
