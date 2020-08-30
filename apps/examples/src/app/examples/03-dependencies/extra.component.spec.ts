import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@bba/material';
import { ExtraComponent } from './extra.component';
import { ExtraService } from './extra.service';

// -------------------------------------------------------------------
// CHALLENGE:
// Fix the TestBed so that the tests pass
// -------------------------------------------------------------------
describe('ExtraComponent', () => {
  let component: ExtraComponent;
  let fixture: ComponentFixture<ExtraComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
