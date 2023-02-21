type QuestionProps = {
  question: string
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className='question'>
      <h2>{question}</h2>
    </div>
  )
}

export default Question
