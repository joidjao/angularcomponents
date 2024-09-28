import { Component } from '@angular/core';

@Component({
  selector: 'app-vowelchecker',
  templateUrl: './vowelchecker.component.html',
  styleUrls: ['./vowelchecker.component.css']
})
export class VowelCheckerComponent {
  inputValue: string = '';
  result: string = '';

  checkVowel(): void {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(this.inputValue.toLowerCase())) {
      this.result = 'The input is a VOWEL';
    } else {
      this.result = 'The input is NOT a vowel';
    }
  }
}
