import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  convertToFahrenheit(): void {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
    }
  }

  convertToCelsius(): void {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }
  }
}
