import { Component } from '@angular/core';

@Component({
  selector: 'app-negativenumberchecker',
  templateUrl: './negativenumberchecker.component.html',
  styleUrls: ['./negativenumberchecker.component.css']
})
export class NegativeNumberCheckerComponent {
  inputValue: string = '';
  result: string = '';

  checkNegative(): void {
    const number = parseFloat(this.inputValue);
    if (!isNaN(number) && number < 0) {
      this.result = 'The number is NEGATIVE';
    } else {
      this.result = 'The number is NOT negative';
    }
  }
}
