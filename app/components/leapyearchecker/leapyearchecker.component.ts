import { Component } from '@angular/core';

@Component({
  selector: 'app-leapyearchecker',
  templateUrl: './leapyearchecker.component.html',
  styleUrl: './leapyearchecker.component.css'
})
export class LeapyearcheckerComponent {
  year: number = 0;
  isLeapYearMessage: string = '';

  checkLeapYear() {
    if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
      this.isLeapYearMessage = `${this.year} is a leap year.`;
    } else {
      this.isLeapYearMessage = `${this.year} is not a leap year.`;
    }
  }
}
