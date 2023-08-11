export interface QuizApiResponse {
    response_code: number,
    results: QuizApiItem[]
}

export interface QuizApiItem {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}