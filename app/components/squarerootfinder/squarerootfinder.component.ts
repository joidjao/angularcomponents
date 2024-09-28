import { Component } from '@angular/core';

@Component({
  selector: 'app-squarerootfinder',
  templateUrl: './squarerootfinder.component.html',
  styleUrl: './squarerootfinder.component.css'
})
export class SquarerootfinderComponent {
  number: number = 0;
  squareRoot: number = 0;

  findSquareRoot() {
    this.squareRoot = Math.sqrt(this.number);
  }
}
