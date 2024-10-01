import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubecalculatorComponent } from './cubecalculator.component';

describe('CubecalculatorComponent', () => {
  let component: CubecalculatorComponent;
  let fixture: ComponentFixture<CubecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubecalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
