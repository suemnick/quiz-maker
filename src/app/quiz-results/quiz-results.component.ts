import { Component, Input, OnInit } from '@angular/core';
import { QuizQuestion } from '../quiz-question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  quizQuestions: QuizQuestion[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizQuestions = this.quizService.quizQuetions;
  }

  getAnswerClass(question: QuizQuestion, answerIndex: number): string {
    let answerClass;
    switch (answerIndex) {
      case question.correctAnswer:
        answerClass = 'correct-answer';
        break;
      case question.selectedAnswer:
        answerClass = 'selected-answer';
        break;
      default:
        answerClass = 'answer';
    }
    return answerClass;
  }
}
