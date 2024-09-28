import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  inputText: string = '';
  shuffledText: string = '';

  shuffleWord() {
    this.shuffledText = this.inputText.split('').sort(() => 0.5 - Math.random()).join('');
  }
}
