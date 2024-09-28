import { Component } from '@angular/core';

@Component({
  selector: 'app-primenumberchecker',
  templateUrl: './primenumberchecker.component.html',
  styleUrls: ['./primenumberchecker.component.css']
})
export class PrimeNumberCheckerComponent {
  inputValue: string = '';
  result: string = '';

  checkPrime(): void {
    const number = parseInt(this.inputValue);
    if (!isNaN(number) && number > 1) {
      let isPrime = true;
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      this.result = isPrime ? 'The number is PRIME' : 'The number is NOT prime';
    } else {
      this.result = 'Invalid input';
    }
  }
}
