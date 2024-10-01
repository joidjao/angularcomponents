import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  numberInput: number | null = null;
  result: number | null = null;

  calculateFactorial(): void {
    if (this.numberInput !== null && this.numberInput >= 0) {
      this.result = this.factorial(this.numberInput);
    }
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}
