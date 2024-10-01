import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthconverterComponent } from './lengthconverter.component';

describe('LengthconverterComponent', () => {
  let component: LengthconverterComponent;
  let fixture: ComponentFixture<LengthconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LengthconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LengthconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
