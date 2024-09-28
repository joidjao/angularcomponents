import { Component } from '@angular/core';

@Component({
  selector: 'app-digitchecker',
  templateUrl: './digitchecker.component.html',
  styleUrls: ['./digitchecker.component.css']
})
export class DigitCheckerComponent {
  inputValue: string = '';
  result: string = '';

  checkDigit(): void {
    const digit = /^[0-9]$/;
    if (digit.test(this.inputValue)) {
      this.result = 'The input is a DIGIT';
    } else {
      this.result = 'The input is NOT a digit';
    }
  }
}
