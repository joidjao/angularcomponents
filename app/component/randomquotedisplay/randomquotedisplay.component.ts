import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    'The best way to predict the future is to create it.',
    'Life is what happens when you’re busy making other plans.',
    'The purpose of our lives is to be happy.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.'
  ];
  displayedQuote = '';

  displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.displayedQuote = this.quotes[randomIndex];
  }
}
