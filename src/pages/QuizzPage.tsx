import React, { ReactElement, useContext, useEffect, useState } from 'react'
import Answers from '../components/Answers'
import Question from '../components/Question'
import Result from '../components/Result'
import { AppContext } from '../context/Context'

import { UserAnswerType } from '../types/Types'

const QuizzPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswerType[]>([])
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [isDone, setIsDone] = useState<boolean>(false)
  const { quizz } = useContext(AppContext)
  console.log(quizz)

  let alreadyShown = false

  useEffect(() => {
    if (alreadyShown || quizz.length === 0) return
    alreadyShown = true
    setTimeout(() => {
      if (currentQuestion >= 5) {
        return setIsDone(true)
      }
      setCurrentQuestion((prevState) => prevState + 1)
      checkUserAnswer()
    }, 5000)
  }, [currentQuestion, quizz])

  const getUserAnswer = (ans: string = ''): void => {
    setUserAnswer(ans)
    setUserAnswers((prevState) => {
      const userAnswer: UserAnswerType = {
        questionNumber: currentQuestion,
        question: quizz[currentQuestion].question,
        answer: ans,
        correct: ans === quizz[currentQuestion].correctAnswer,
        correctAnswer: quizz[currentQuestion].correctAnswer,
      }
      for (let i in prevState) {
        if (userAnswer.questionNumber === prevState[i].questionNumber) {
          prevState.splice(prevState.indexOf(prevState[i]), 1, userAnswer)
          return [...prevState]
        }
      }
      return [...prevState, userAnswer]
    })
  }

  const checkUserAnswer = (): void => {
    setUserAnswers((prevState) => {
      if (prevState && !prevState[currentQuestion]) {
        const missedAnswer: UserAnswerType = {
          questionNumber: currentQuestion,
          question: quizz[currentQuestion]?.question,
          answer: '',
          correct: false,
          correctAnswer: quizz[currentQuestion]?.correctAnswer,
        }
        return [...prevState, missedAnswer]
      } else {
        return prevState
      }
    })
  }

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

  return (
    <>
      {!isDone ? (
        <>
          {currentQuestion < 5 && <div className='timer'></div>}
          <Question question={quizz[currentQuestion]?.question} />
          <div className='answers-container'>{answers}</div>
        </>
      ) : (
        <Result answers={userAnswers} />
      )}
    </>
  )
}

export default QuizzPage
