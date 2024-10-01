import { Component } from '@angular/core';

@Component({
  selector: 'app-emailobfuscator',
  templateUrl: './emailobfuscator.component.html',
  styleUrls: ['./emailobfuscator.component.css']
})
export class EmailObfuscatorComponent {
  email: string = '';
  obfuscatedEmail: string = '';

  obfuscateEmail() {
    this.obfuscatedEmail = this.email.replace(/@/g, '[at]').replace(/\./g, '[dot]');
  }
}
