import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string | null = null;

  login(): void {
    this.loginMessage = `Logged in as: ${this.email}`;
  }
}
