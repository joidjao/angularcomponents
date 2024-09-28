import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  interest: number | null = null;

  calculateInterest(): void {
    this.interest = (this.principal * this.rate * this.time) / 100;
  }
}
