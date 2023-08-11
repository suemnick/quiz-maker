import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuizQuestionService } from '../quiz-question.service';
import { QuizQuestion } from '../quiz-question';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnChanges {
  @Input() categoryId: number | undefined;
  @Input() difficulty: string | undefined;

  quizQuestions: QuizQuestion[] = [];

  constructor(private quizQuestionService: QuizQuestionService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.categoryId !== undefined && this.difficulty !== undefined) {
      console.log(`fetching quiz questions for category-id: ${this.categoryId} and difficulty: ${this.difficulty}...`);
      this.quizQuestionService.getQuizQuestions(this.categoryId, this.difficulty)
        .subscribe(quizQuestions => this.quizQuestions = quizQuestions);
    }
  }
}
