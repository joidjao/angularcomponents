import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  numberInput: number | null = null;
  table: number[] = [];

  generateTable(): void {
    if (this.numberInput !== null) {
      this.table = Array.from({ length: 10 }, (_, i) => this.numberInput! * (i + 1));
    }
  }
}
