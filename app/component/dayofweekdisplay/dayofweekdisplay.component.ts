import { Component } from '@angular/core';

@Component({
  selector: 'app-dayofweekdisplay',
  templateUrl: './dayofweekdisplay.component.html',
  styleUrls: ['./dayofweekdisplay.component.css']
})
export class DayOfWeekDisplayComponent {
  day: string = '';

  showDay() {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.day = days[today.getDay()];
  }
}
