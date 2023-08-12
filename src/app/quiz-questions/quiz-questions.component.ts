import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuizQuestionService } from '../quiz-question.service';
import { QuizQuestion } from '../quiz-question';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnChanges {
  @Input() categoryId: number | undefined;
  @Input() difficulty: string | undefined;

  quizQuestions: QuizQuestion[] = [];
  quizComplete = false;

  constructor(
    private quizQuestionService: QuizQuestionService, 
    private router: Router, 
    private quizService: QuizService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.categoryId !== undefined && this.difficulty !== undefined) {
      this.quizQuestionService.getQuizQuestions(this.categoryId, this.difficulty)
        .subscribe(quizQuestions => this.quizQuestions = quizQuestions);
    }
  }

  selectAnswer(quizQuestionIndex: number, selectedAnswerIndex: number) {
    this.quizQuestions[quizQuestionIndex].selectedAnswer = selectedAnswerIndex;
    const index = this.quizQuestions.findIndex(question => question.selectedAnswer === undefined);
    if (index === -1) {
      this.quizComplete = true;
    }
  }

  showResults() {
    this.quizService.quizQuetions = this.quizQuestions;
    this.router.navigate(['results']);
  }
}
