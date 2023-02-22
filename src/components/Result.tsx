import React from 'react'
import { ResultPropsType } from '../types/Types'

const Result = ({ answers }: ResultPropsType) => {
  const scoreCount = answers.filter((item) => item.correct === true).length
  const listOfResult = answers.map((item) => {
    const correctClass =
      item.answer === item.correctAnswer ? 'correct' : 'error'
    return (
      <li key={item.questionNumber}>
        <span className={`user-answer ${correctClass}`}>
          {item.answer || 'Missed Answer'}
        </span>
        <span className='correct-answer'>{item.correctAnswer}</span>
      </li>
    )
  })
  return (
    <div className='user-result'>
      <ul>
        <li>
          <span className='user-answer title'>Your answer</span>
          <span className='correct-answer title'>Correct answer</span>
        </li>
        {listOfResult}
      </ul>
      <hr />
      <h3 className='user-score'>
        Your Result: <span>{scoreCount}</span>
      </h3>
    </div>
  )
}

export default Result
