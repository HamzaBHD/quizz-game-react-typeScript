import React, { ReactElement, useContext } from 'react'
import { AppContext } from '../context/Context'

const StartGame = (): ReactElement => {
  const { play, setPlay } = useContext(AppContext)

  return (
    <div className='start-game'>
      <h1>5 x 5 GAME</h1>
      <p>
        Our rules are simple, You have to answer 5 questions and you have 5
        seconds to answer each question!
      </p>
      <div className='play-game play-again' onClick={() => setPlay(true)}>
        Start Game
      </div>
    </div>
  )
}

export default StartGame
