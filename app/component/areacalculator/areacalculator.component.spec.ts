import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacalculatorComponent } from './areacalculator.component';

describe('AreacalculatorComponent', () => {
  let component: AreacalculatorComponent;
  let fixture: ComponentFixture<AreacalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreacalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreacalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
