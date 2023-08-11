export interface QuizQuestion {
    question: string,
    correctAnswer: number,
    answers: string[],
    selectedAnswer: number | undefined
}
