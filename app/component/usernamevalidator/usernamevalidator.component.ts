import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  isValid: boolean | null = null;

  validateUsername(): void {
    const minLength = 5;
    const hasNumber = /\d/;
    this.isValid = this.username.length >= minLength && hasNumber.test(this.username);
  }
}
