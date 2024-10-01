import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';
  result: string | null = null;

  checkPalindrome(): void {
    const reversedWord = this.inputWord.split('').reverse().join('');
    this.result = this.inputWord === reversedWord ? 'It is a palindrome!' : 'It is not a palindrome.';
  }
}
