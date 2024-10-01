import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrls: ['./compoundinterestcalculator.component.css']
})
export class CompoundInterestCalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  frequency: number = 0;
  compoundInterest: number | null = null;

  calculateCompoundInterestCalculator() {
    if (this.principal > 0 && this.rate > 0 && this.time > 0 && this.frequency > 0) {
      const r = this.rate / 100;
      const amount = this.principal * Math.pow((1 + r / this.frequency), this.frequency * this.time);
      this.compoundInterest = amount - this.principal;
    } else {
      this.compoundInterest = null; 
    }
  }
}
