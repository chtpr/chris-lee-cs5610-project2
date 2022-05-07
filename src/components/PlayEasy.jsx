import React, { useEffect, useState } from 'react';
import Board from './Board';
import useLogicHandler from './LogicHandler';

function PlayEasy() {

    const fiveLetter = [
        "flame",
        "homer",
        "arise",
        "radio",
        "hurry",
        "lunch",
        "money",
        "laser",
        "grain",
        "funny"
    ];

    const [solution, setSolution] = useState('')
    const difficulty = 'easy'

    useEffect(() => {
        // sets a random solution
        setSolution(fiveLetter[Math.floor(Math.random()*fiveLetter.length)])
    }, [setSolution])
    
    // manages various states
    const { currentGuess, keyupHandler, guesses, isCorrect, turn } = useLogicHandler(solution, difficulty)

    useEffect(() => {
        // listens for the keys
        window.addEventListener('keyup', keyupHandler)

        // stops listening
        if (isCorrect) {
            window.removeEventListener('keyup', keyupHandler)
          }
          // seven turns
          if (turn > 6) {
            window.removeEventListener('keyup', keyupHandler)
          }

        return () => window.removeEventListener('keyup', keyupHandler) 
    }, [keyupHandler, isCorrect, turn])
    
    return (
        
      <div className="PlayEasy">
          <br></br>
          {isCorrect && <div>Congrats you won!</div>}
          <br></br>
          <Board currentGuess={currentGuess} guesses={guesses} turn={turn} difficulty={difficulty}/>
      </div>
    );
  }
  
  export default PlayEasy