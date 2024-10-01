import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailvalidatorComponent } from './emailvalidator.component';

describe('EmailvalidatorComponent', () => {
  let component: EmailvalidatorComponent;
  let fixture: ComponentFixture<EmailvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailvalidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
