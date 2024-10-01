import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayofweekdisplayComponent } from './dayofweekdisplay.component';

describe('DayofweekdisplayComponent', () => {
  let component: DayofweekdisplayComponent;
  let fixture: ComponentFixture<DayofweekdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayofweekdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayofweekdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
