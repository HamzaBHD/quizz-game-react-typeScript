import React, { ReactNode } from 'react'

export type ContextProps = {
  children: ReactNode
}

export type ContextType = {
  play: boolean
}

export interface AnswerType {
  id: string
  question: string
  answers: string[]
  correctAnswer: string
}

export interface QuizzType extends AnswerType {}

export type QuizzPagePropsType = {}

export type StartGamePropsType = {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>
}

export type UserAnswerType = {
  questionNumber: number
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

export type QuestionProps = {
  question: string
}

export type ResultPropsType = {
  answers: UserAnswerType[]
  isNotDone: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswerType[]>>
  setPlay: React.Dispatch<React.SetStateAction<boolean>>
  setQuizz: React.Dispatch<React.SetStateAction<QuizzType[]>>
}

export type AnswersProps = {
  answer: string
  getUserAnswer: (ans: string) => void
  clickedClass: string
}
