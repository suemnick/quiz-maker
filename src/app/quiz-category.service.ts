import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizCategory } from './quiz-category';
import { Observable, map } from 'rxjs';
import { QuizCategories } from './quiz-categories';

@Injectable({
  providedIn: 'root'
})
export class QuizCategoryService {
  private readonly categoryServiceUrl = 'https://opentdb.com/api_category.php';

  constructor(private httpClient: HttpClient) { }

  getQuizCategories(): Observable<QuizCategory[]> {
    return this.httpClient.get<QuizCategories>(this.categoryServiceUrl)
      .pipe(
        map((quizCategories: QuizCategories) => quizCategories.trivia_categories)
      );
  }
}
