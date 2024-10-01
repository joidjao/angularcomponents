import { Component } from '@angular/core';

@Component({
  selector: 'app-lengthconverter',
  templateUrl: './lengthconverter.component.html',
  styleUrls: ['./lengthconverter.component.css']
})
export class LengthConverterComponent {
  meters: number = 0;
  kilometers: number | null = null;

  convertToKilometers() {
    this.kilometers = this.meters / 1000;
  }
}
