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
    return this.httpClient.get<QuizApiResponse>(`${this.quizQuestionsUrl}?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple&encode=url3986`)
      .pipe(
        map((response: QuizApiResponse) => response.results.map(item => this.mapToQuizQuestion(item)))
      );
  }

  private mapToQuizQuestion(item: QuizApiItem): QuizQuestion {
    const correctAnswer = decodeURIComponent(item.correct_answer);
    const allAnswers = [...item.incorrect_answers, item.correct_answer]
      .map(answer => decodeURIComponent(answer))
      .sort(() => Math.random() - 0.5);
    return {
      question: decodeURIComponent(item.question),
      correctAnswer: allAnswers.findIndex(answer => answer === correctAnswer),
      answers: allAnswers,
      selectedAnswer: undefined
    }
  }
}
