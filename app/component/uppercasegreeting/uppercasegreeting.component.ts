import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name = '';
  uppercaseName = '';

  convertToUppercase() {
    this.uppercaseName = this.name.toUpperCase();
  }
}
