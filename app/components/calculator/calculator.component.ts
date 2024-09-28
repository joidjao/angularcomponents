import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  operation: string = 'add';
  result: number | null = null;

  calculate(): void {
    if (this.num1 !== null && this.num2 !== null) {
      switch (this.operation) {
        case 'add':
          this.result = this.num1 + this.num2;
          break;
        case 'subtract':
          this.result = this.num1 - this.num2;
          break;
        case 'multiply':
          this.result = this.num1 * this.num2;
          break;
        case 'divide':
          this.result = this.num1 / this.num2;
          break;
        default:
          this.result = null;
          break;
      }
    }
  }
}
