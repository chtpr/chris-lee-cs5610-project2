import React from 'react'
import Row from './Row'

function Board({currentGuess, guesses, turn, difficulty}) {
  return (
    <div>
        {guesses.map((guess, index) => {
            // allows the current row to be dynamic
            if (turn === index) {
                return <Row key={index} currentGuess={currentGuess} difficulty={difficulty}/>
              }
            // remaining rows  
            return <Row key={index} guess={guess} difficulty={difficulty}/>
        })}
    </div>
  )
}

export default Board