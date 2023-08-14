import { Component } from '@angular/core';
import { QuizQuestionService } from '../quiz-question.service';
import { QuizQuestion } from '../quiz-question';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent {
  fetchingQuestions = false;
  quizQuestions: QuizQuestion[] = [];
  quizComplete = false;

  constructor(
    private quizQuestionService: QuizQuestionService,
    private router: Router,
    private quizService: QuizService) { }

  createQuiz(categoryId: number, difficulty: string) {
    if (this.fetchingQuestions) {
      return;
    }
    this.fetchingQuestions = true;
    this.quizQuestionService.getQuizQuestions(categoryId, difficulty)
      .subscribe(quizQuestions => {
        this.quizQuestions = quizQuestions;
        this.fetchingQuestions = false;
      });
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
