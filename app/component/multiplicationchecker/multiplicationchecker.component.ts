import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number1: number = 0;
  number2: number = 0;
  resultMessage: string = '';

  checkMultiplication(): void {
    if (this.number2 !== 0 && this.number1 % this.number2 === 0) {
      this.resultMessage = `${this.number1} is a multiple of ${this.number2}.`;
    } else {
      this.resultMessage = `${this.number1} is not a multiple of ${this.number2}.`;
    }
  }
}
