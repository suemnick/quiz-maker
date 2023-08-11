import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizConfigComponent } from './quiz-config.component';

describe('QuizConfigComponent', () => {
  let component: QuizConfigComponent;
  let fixture: ComponentFixture<QuizConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizConfigComponent]
    });
    fixture = TestBed.createComponent(QuizConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
