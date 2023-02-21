import React, { createContext, ReactNode, useEffect, useState } from 'react'

type ContextProps = {
  children: ReactNode
}

type ContextType = {
  isTrue?: boolean
  setIsTrue?: React.Dispatch<React.SetStateAction<boolean>>
  quizz: QuizzType[]
}

interface AnswerType {
  id: string
  question: string
  answers: string[]
  correctAnswer: string
}

interface QuizzType extends AnswerType {}

export const AppContext = createContext<ContextType>(
  null as unknown as ContextType
)

export const ContextProvider = ({ children }: ContextProps) => {
  const [quizz, setQuizz] = useState<QuizzType[]>([])
  const [isTrue, setIsTrue] = useState<boolean>(false)

  let dataHere = false

  const setQuizzGame = (data: any): QuizzType[] => {
    let quizzGameArr: AnswerType[] = []

    for (let i = 0; i < data.length; i++) {
      const answerObj: AnswerType = {
        id: data[i].id,
        question: data[i].question,
        answers: [...data[i].incorrectAnswers, data[i].correctAnswer],
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
        setQuizz(setQuizzGame(data))
      })
  }, [])

  return <AppContext.Provider value={{ quizz }}>{children}</AppContext.Provider>
}
