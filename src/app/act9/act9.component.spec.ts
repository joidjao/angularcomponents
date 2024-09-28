import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Act9Component } from './act9.component';

describe('Act9Component', () => {
  let component: Act9Component;
  let fixture: ComponentFixture<Act9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Act9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Act9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
