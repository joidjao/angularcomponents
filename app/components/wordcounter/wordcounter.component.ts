import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputText: string = '';
  wordCount: number = 0;

  countWords() {
    if (this.inputText.trim().length > 0) {
      this.wordCount = this.inputText.trim().split(/\s+/).length;
    } else {
      this.wordCount = 0;
    }
  }
}
