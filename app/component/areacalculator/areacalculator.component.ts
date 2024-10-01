import { Component } from '@angular/core';

@Component({
  selector: 'app-areacalculator',
  templateUrl: './areacalculator.component.html',
  styleUrls: ['./areacalculator.component.css']
})
export class AreaCalculatorComponent {
  length: number = 0;
  width: number = 0;
  area: number | null = null;

  calculateArea() {
    this.area = this.length * this.width;
  }
}
