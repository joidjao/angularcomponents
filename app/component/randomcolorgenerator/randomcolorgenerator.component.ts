import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcolorgenerator',
  templateUrl: './randomcolorgenerator.component.html',
  styleUrls: ['./randomcolorgenerator.component.css']
})
export class RandomColorGeneratorComponent {
  color: string = '#ffffff';

  generateRandomColor() {
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
