import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['./quiz-config.component.css']
})
export class QuizConfigComponent {
  quizConfigForm = new FormGroup({
    categorySelect: new FormControl('placeholder'),
    difficultySelect: new FormControl('placeholder')
  });

  createQuiz() {

  }
}
