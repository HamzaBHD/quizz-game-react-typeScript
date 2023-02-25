import { AnswersProps } from '../types/Types'

const Answers = ({ answer, getUserAnswer, clickedClass }: AnswersProps) => {
  return (
    <div
      className={`button ${clickedClass}`}
      onClick={() => {
        getUserAnswer(answer)
      }}
    >
      {answer}
    </div>
  )
}

export default Answers
