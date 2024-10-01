import { Component } from '@angular/core';

@Component({
  selector: 'app-primechecker',
  templateUrl: './primechecker.component.html',
  styleUrls: ['./primechecker.component.css']
})
export class PrimeCheckerComponent {
  number: number = 0;
  isPrime: boolean | null = null;

  checkPrime() {
    if (this.number <= 1) {
      this.isPrime = false;
      return;
    }
    for (let i = 2; i < this.number; i++) {
      if (this.number % i === 0) {
        this.isPrime = false;
        return;
      }
    }
    this.isPrime = true;
  }
}
