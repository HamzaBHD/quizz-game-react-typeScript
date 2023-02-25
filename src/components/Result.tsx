import { ResultPropsType } from '../types/Types'

const Result = ({
  answers,
  isNotDone,
  setCurrentQuestion,
  setUserAnswers,
  setPlay,
  setQuizz,
}: ResultPropsType) => {
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

  const generateMessage = (): string => {
    if (scoreCount === 0) {
      return 'Nice try, play again you can do better!'
    } else if (scoreCount > 0 && scoreCount < 3) {
      return `You got ${scoreCount} out of 5 You can do better!`
    } else if (scoreCount >= 3 && scoreCount < 5) {
      return `You got ${scoreCount} out of 5 That was Too close`
    }
    return 'Congratulations! 5 out of 5 answers You are a genius'
  }

  return (
    <div className='user-result'>
      <h2 className='user-message'>{generateMessage()}</h2>
      <ul>
        <li>
          <span className='user-answer title'>Your answer</span>
          <span className='correct-answer title'>Correct answer</span>
        </li>
        {listOfResult}
      </ul>
      <hr />
      <div className='score-container'>
        <h3 className='user-score'>Your Result: {scoreCount}</h3>
        <div
          className='play-again'
          onClick={() => {
            setPlay(true)
            isNotDone(false)
            setCurrentQuestion(0)
            setUserAnswers([])
            setQuizz([])
          }}
        >
          Play again
        </div>
      </div>
    </div>
  )
}

export default Result
