import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['./quiz-config.component.css']
})
export class QuizConfigComponent {
  quizConfigForm = new FormGroup({
    categorySelect: new FormControl('placeholder'),
    difficultySelect: new FormControl('placeholder')
  }, { validators: quizConfigValidator });

  createQuiz() {
    console.log("createQuiz called");
  }
}

export const quizConfigValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const categorySelect = control.get('categorySelect');
  const difficultySelect = control.get('difficultySelect');
  console.log(`validating ${categorySelect} and ${difficultySelect}...`);
  if (categorySelect && categorySelect.value === 'placeholder') {
    return { quizConfig: 'category' };
  }

  if (difficultySelect && difficultySelect.value === 'placeholder') {
    return { quizConfig: 'difficulty' };
  }

  return null;
};