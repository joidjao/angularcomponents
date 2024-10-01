import { Component } from '@angular/core';

@Component({
  selector: 'app-gradecalculator',
  templateUrl: './gradecalculator.component.html',
  styleUrls: ['./gradecalculator.component.css']
})
export class GradeCalculatorComponent {
  score: number = 0;
  grade: string = '';

  calculateGrade() {
    if (this.score >= 90) {
      this.grade = 'A';
    } else if (this.score >= 80) {
      this.grade = 'B';
    } else if (this.score >= 70) {
      this.grade = 'C';
    } else if (this.score >= 60) {
      this.grade = 'D';
    } else {
      this.grade = 'F';
    }
  }
}
