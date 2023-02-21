import React, { ReactElement, useContext, useEffect, useState } from 'react'
import Answers from '../components/Answers'
import Question from '../components/Question'
import { AppContext } from '../context/Context'

type UserAnswerType = {
  questionNumber: number
  question: string
  answer: string
  correct: boolean
}

const QuizzPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswerType[]>([])
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const { quizz } = useContext(AppContext)

  let alreadyShown = false

  useEffect(() => {
    if (alreadyShown) return
    alreadyShown = true
    setTimeout(() => {
      if (currentQuestion >= 5) return
      setCurrentQuestion((prevState) => prevState + 1)
    }, 5000)
  }, [currentQuestion])

  // const shuffle = (array: string[]): string[] => {
  //   let newArray: string[] = array
  //   for (let i = 0; i < array?.length; i++) {
  //     let j = Math.floor(Math.random() * (i + 1))
  //     let temp = newArray[i]
  //     newArray[i] = newArray[j]
  //     newArray[j] = temp
  //   }

  //   return newArray
  // }

  const getUserAnswer = (ans: string = ''): void => {
    setUserAnswer(ans)
    setUserAnswers((prevState) => {
      if (ans === '') {
        return [
          ...prevState,
          {
            questionNumber: currentQuestion,
            question: quizz[currentQuestion].question,
            answer: ans,
            correct: false,
          },
        ]
      } else {
        return [
          ...prevState,
          {
            questionNumber: currentQuestion,
            question: quizz[currentQuestion].question,
            answer: ans,
            correct: ans === quizz[currentQuestion].correctAnswer,
          },
        ]
      }
    })
  }

  console.log(userAnswers)

  const giveClass = (ans: string): string => {
    let name = ''
    if (ans === userAnswer) {
      name = 'clicked-answer'
    } else {
      name = 'un-clicked-answer'
    }
    return name
  }

  const answers = quizz[currentQuestion]?.answers.map((item) => (
    <Answers
      key={item}
      answer={item}
      getUserAnswer={getUserAnswer}
      clickedClass={giveClass(item)}
    />
  ))

  // console.log(quizz)
  return (
    <>
      {currentQuestion < 5 && <div className='timer'></div>}
      <Question question={quizz[currentQuestion]?.question} />
      <div className='answers-container'>{answers}</div>
    </>
  )
}

export default QuizzPage
