import { Component } from '@angular/core';

@Component({
  selector: 'app-percentcalculator',
  templateUrl: './percentcalculator.component.html',
  styleUrls: ['./percentcalculator.component.css']
})
export class PercentCalculatorComponent {
  total: number = 0;
  percentage: number = 0;
  result: number | null = null;

  calculatePercentage() {
    this.result = (this.percentage / 100) * this.total;
  }
}
