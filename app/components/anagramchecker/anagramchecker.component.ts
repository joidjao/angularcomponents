import { Component } from '@angular/core';

@Component({
  selector: 'app-anagramchecker',
  templateUrl: './anagramchecker.component.html',
  styleUrls: ['./anagramchecker.component.css']
})
export class AnagramCheckerComponent {
  inputValue1: string = '';
  inputValue2: string = '';
  result: string = '';

  checkAnagram(): void {
    const sorted1 = this.inputValue1.split('').sort().join('');
    const sorted2 = this.inputValue2.split('').sort().join('');
    this.result = sorted1 === sorted2 ? 'The strings are anagrams' : 'The strings are not anagrams';
  }
}
