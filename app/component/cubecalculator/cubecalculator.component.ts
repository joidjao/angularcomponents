import { Component } from '@angular/core';

@Component({
  selector: 'app-cubecalculator',
  templateUrl: './cubecalculator.component.html',
  styleUrls: ['./cubecalculator.component.css']
})
export class CubeCalculatorComponent {
  number: number = 0;
  cube: number | null = null;

  calculateCube() {
    this.cube = Math.pow(this.number, 3);
  }
}
