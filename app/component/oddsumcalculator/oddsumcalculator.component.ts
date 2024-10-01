import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number = 0;
  oddSum = 0;

  calculateOddSum() {
    this.oddSum = 0;
    for (let i = 1; i <= this.number; i++) {
      if (i % 2 !== 0) {
        this.oddSum += i;
      }
    }
  }
}
