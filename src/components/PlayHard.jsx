import React, { useEffect, useState } from 'react';
import Board from './Board';
import useLogicHandler from './LogicHandler';

function Play() {

    const sevenLetter = [
        "abalone",
        "babbler",
        "cabbage",
        "eaglets",
        "habitat",
        "iceberg",
        "jabroni",
        "macaron",
        "pacific",
        "ukulele"
    ];

    const [solution, setSolution] = useState('')
    const difficulty = 'hard'

    useEffect(() => {
        setSolution(sevenLetter[Math.floor(Math.random()*sevenLetter.length)])
    }, [setSolution])
    
    const { currentGuess, keyupHandler, guesses, isCorrect, turn } = useLogicHandler(solution, difficulty)

    useEffect(() => {
        window.addEventListener('keyup', keyupHandler)

        if (isCorrect) {
            window.removeEventListener('keyup', keyupHandler)
          }
          // five turns
          if (turn > 4) {
            window.removeEventListener('keyup', keyupHandler)
          }

        return () => window.removeEventListener('keyup', keyupHandler) 
    }, [keyupHandler, isCorrect, turn])
    
    return (
        
      <div className="Play">
          <br></br>
          {isCorrect && <div>Congrats you won!</div>}
          <br></br>
          <Board currentGuess={currentGuess} guesses={guesses} turn={turn} difficulty={difficulty}/>
      </div>
    );
  }
  
  export default Play