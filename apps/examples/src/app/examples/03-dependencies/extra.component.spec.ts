import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtraComponent } from './extra.component';
import { MaterialModule } from '@bba/material';
// import { ExtraService } from './extra.service';

describe('ExtraComponent', () => {
  let component: ExtraComponent;
  let fixture: ComponentFixture<ExtraComponent>;
  let de: DebugElement;
  // let extraService: ExtraService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraComponent],
      // providers: [ExtraService], // Why isn't this throwing a helpful error?
      imports: [MaterialModule],
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
