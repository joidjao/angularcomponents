import { Component } from '@angular/core';

@Component({
  selector: 'app-agecalculator',
  templateUrl: './agecalculator.component.html',
  styleUrls: ['./agecalculator.component.css']
})
export class AgeCalculatorComponent {
  inputValue: string = '';
  result: string = '';

  calculateAge(): void {
    const birthYear = parseInt(this.inputValue, 10);
    const currentYear = new Date().getFullYear();
    this.result = `Your age is: ${currentYear - birthYear}`;
  }
}
