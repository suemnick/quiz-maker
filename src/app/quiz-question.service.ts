import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { QuizQuestion } from './quiz-question';
import { QuizApiItem, QuizApiResponse } from './quiz-api-response';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionService {
  private readonly quizQuestionsUrl = 'https://opentdb.com/api.php'

  constructor(private httpClient: HttpClient) { }

  getQuizQuestions(categoryId: number, difficulty: string): Observable<QuizQuestion[]> {
    return this.httpClient.get<QuizApiResponse>(`${this.quizQuestionsUrl}?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple&encode=base64`)
      .pipe(
        map((response: QuizApiResponse) => response.results.map(item => this.mapToQuizQuestion(item)))
      );
  }

  private mapToQuizQuestion(item: QuizApiItem): QuizQuestion {
    const correctAnswer = atob(item.correct_answer);
    const allAnswers = [...item.incorrect_answers, item.correct_answer]
      .map(answer => atob(answer))
      .sort(() => Math.random() - 0.5);
    return {
      question: atob(item.question),
      correctAnswer: allAnswers.findIndex(answer => answer === correctAnswer),
      answers: allAnswers
    }
  }
}
