import { useState, useEffect } from 'react'
import { QuizzType, AnswerType } from './types/Types'
import { shuffle } from './assets/shuffle'
import './App.css'

import QuizzPage from './pages/QuizzPage'

function App() {
  const [quizz, setQuizz] = useState<QuizzType[]>([])
  const [play, setPlay] = useState<boolean>(false)
  const [dataHere, setDataHere] = useState<boolean>(false)

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
    if (dataHere && !play) return
    setDataHere(true)

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
  }, [play])
  return (
    <div className='App'>
      <QuizzPage
        quizz={quizz}
        play={play}
        setPlay={setPlay}
        setDataHere={setDataHere}
      />
    </div>
  )
}

export default App
