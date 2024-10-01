import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentcalculatorComponent } from './percentcalculator.component';

describe('PercentcalculatorComponent', () => {
  let component: PercentcalculatorComponent;
  let fixture: ComponentFixture<PercentcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
