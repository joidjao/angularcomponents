import { Component } from '@angular/core';

@Component({
  selector: 'app-emailvalidator',
  templateUrl: './emailvalidator.component.html',
  styleUrls: ['./emailvalidator.component.css']
})
export class EmailValidatorComponent {
  email: string = '';
  isValid: boolean | null = null;

  validateEmail() {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    this.isValid = regex.test(this.email);
  }
}
