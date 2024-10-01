import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  num1 = 0;
  num2 = 1;
  isDivisible = false;

  checkDivisibility() {
    this.isDivisible = this.num1 % this.num2 === 0;
  }
}
