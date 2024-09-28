import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  guess: number | null = null;
  message: string | null = null;

  checkGuess(): void {
    if (this.guess !== null) {
      if (this.guess > this.randomNumber) {
        this.message = 'Too high!';
      } else if (this.guess < this.randomNumber) {
        this.message = 'Too low!';
      } else {
        this.message = 'Correct! You guessed the number!';
      }
    }
  }

  resetGame(): void {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.guess = null;
    this.message = null;
  }
}
