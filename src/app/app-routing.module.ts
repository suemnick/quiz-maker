import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizConfigComponent } from './quiz-config/quiz-config.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';

const routes: Routes = [
  { path: '', component: QuizConfigComponent },
  { path: 'results', component: QuizResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
