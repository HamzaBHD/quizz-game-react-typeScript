import React, { ReactElement } from 'react'
import { StartGamePropsType } from '../types/Types'

const StartGame = ({ setPlay, theme }: StartGamePropsType): ReactElement => {
  return (
    <div className='start-game'>
      <h1>5 x 5 GAME</h1>
      <p>
        Our rules are simple, You have to answer 5 questions and you have 5
        seconds to answer each question!
      </p>
      <div
        className={`play-game play-again ${theme}-border`}
        onClick={() => setPlay(true)}
      >
        Start Game
      </div>
    </div>
  )
}

export default StartGame
