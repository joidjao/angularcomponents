import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css'
})
export class FahrenheittocelsiusComponent {
  fahrenheit: number | null = null;
  celsius: number | null = null;

  convert(): void {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }
  }
}
