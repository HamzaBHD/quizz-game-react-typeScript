import React, { ReactNode } from 'react'

export type ContextProps = {
  children: ReactNode
}

export type ContextType = {
  play: boolean
  setPlay: React.Dispatch<React.SetStateAction<boolean>>
  quizz: QuizzType[]
}

export interface AnswerType {
  id: string
  question: string
  answers: string[]
  correctAnswer: string
}

export interface QuizzType extends AnswerType {}

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
}
