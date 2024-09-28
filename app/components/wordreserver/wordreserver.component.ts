import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  styleUrls: ['./wordreverser.component.css']
})
export class WordreverserComponent {
  inputWord: string = '';
  reversedWord: string | null = null;

  reverseWord(): void {
    this.reversedWord = this.inputWord.split('').reverse().join('');
  }
}
