import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailobfuscatorComponent } from './emailobfuscator.component';

describe('EmailobfuscatorComponent', () => {
  let component: EmailobfuscatorComponent;
  let fixture: ComponentFixture<EmailobfuscatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailobfuscatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailobfuscatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
