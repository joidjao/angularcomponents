import { Component } from '@angular/core';

@Component({
  selector: 'app-multipleofthreechecker',
  templateUrl: './multipleofthreechecker.component.html',
  styleUrls: ['./multipleofthreechecker.component.css']
})
export class MultipleOfThreeCheckerComponent {
  inputValue: string = '';
  result: string = '';

  checkMultipleOfThree(): void {
    const number = parseInt(this.inputValue);
    if (!isNaN(number) && number % 3 === 0) {
      this.result = 'The number is a MULTIPLE of three';
    } else {
      this.result = 'The number is NOT a multiple of three';
    }
  }
}
