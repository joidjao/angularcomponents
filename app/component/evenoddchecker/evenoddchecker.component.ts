import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  numberInput: number | null = null;
  result: string = '';

  checkEvenOdd(): void {
    if (this.numberInput !== null) {
      this.result = this.numberInput % 2 === 0 ? 'Even' : 'Odd';
    }
  }
}
