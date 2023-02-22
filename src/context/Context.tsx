import React, { createContext, ReactNode, useEffect, useState } from 'react'

import {
  ContextProps,
  ContextType,
  AnswerType,
  QuizzType,
} from '../types/Types'
import { shuffle } from '../assets/shuffle'

export const AppContext = createContext<ContextType>(
  null as unknown as ContextType
)

export const ContextProvider = ({ children }: ContextProps) => {
  const [quizz, setQuizz] = useState<QuizzType[]>([])

  let dataHere = false

  const setQuizzGame = (data: any): QuizzType[] => {
    let quizzGameArr: AnswerType[] = []

    for (let i = 0; i < data.length; i++) {
      const answerObj: AnswerType = {
        id: data[i].id,
        question: data[i].question,
        answers: shuffle([...data[i].incorrectAnswers, data[i].correctAnswer]),
        correctAnswer: data[i].correctAnswer,
      }
      quizzGameArr.push(answerObj)
    }
    return quizzGameArr
  }

  useEffect(() => {
    if (dataHere) return
    dataHere = true

    const url = 'https://the-trivia-api.com/api/questions?limit=5'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setQuizz(setQuizzGame(data))
      })
  }, [])

  return <AppContext.Provider value={{ quizz }}>{children}</AppContext.Provider>
}
