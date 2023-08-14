import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { QuizCategoryService } from '../quiz-category.service';
import { QuizCategory } from '../quiz-category';
import { QuizQuestionsComponent } from '../quiz-questions/quiz-questions.component';

@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['./quiz-config.component.css']
})
export class QuizConfigComponent implements OnInit {
  quizConfigForm = new FormGroup({
    categorySelect: new FormControl('placeholder'),
    difficultySelect: new FormControl('placeholder')
  }, { validators: quizConfigValidator });

  quizCategories: QuizCategory[] = [];
  selectedCategoryId: number | undefined;
  selectedDifficulty: string | undefined;

  @ViewChild(QuizQuestionsComponent)
  private quizQuestions!: QuizQuestionsComponent;

  constructor(private quizCategoryService: QuizCategoryService) { }

  ngOnInit(): void {
    this.quizCategoryService.getQuizCategories().subscribe(quizCategories => this.quizCategories = quizCategories);
  }

  createQuiz() {
    const categorySelectNumber = Number(this.quizConfigForm.get('categorySelect')?.value);
    this.selectedCategoryId = isNaN(categorySelectNumber) ? undefined : categorySelectNumber;
    this.selectedDifficulty = this.quizConfigForm.get('difficultySelect')?.value ?? undefined;
    if (this.selectedCategoryId !== undefined && this.selectedDifficulty !== undefined) {
      this.quizQuestions.createQuiz(this.selectedCategoryId, this.selectedDifficulty);
    }
  }
}

export const quizConfigValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const categorySelect = control.get('categorySelect');
  const difficultySelect = control.get('difficultySelect');

  if (categorySelect && categorySelect.value === 'placeholder') {
    return { quizConfig: 'category' };
  }

  if (difficultySelect && difficultySelect.value === 'placeholder') {
    return { quizConfig: 'difficulty' };
  }

  return null;
};