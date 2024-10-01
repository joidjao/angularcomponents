import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrls: ['./usergreeting.component.css'] // Use 'styleUrls' for an array
})
export class UsergreetingComponent {  
  name: string = '';
  greeting: string = '';

  generateGreeting(): void {
    if (this.name.trim()) {
      this.greeting = `Hello, ${this.name}! Welcome to my project about Angular Components.`;
    } else {
      this.greeting = 'Please enter your name.';
    }
  }
}
