import { Injectable } from '@angular/core';
import { QuizQuestion } from './quiz-question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizQuetions: QuizQuestion[] = [];
}
