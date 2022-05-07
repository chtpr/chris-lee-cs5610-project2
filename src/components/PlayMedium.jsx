import React, { useEffect, useState } from 'react';
import Board from './Board';
import useLogicHandler from './LogicHandler';

function Play() {

    const sixLetter = [
        "dinner",
        "aghast",
        "frizzy",
        "horror",
        "combat",
        "soccer",
        "hockey",
        "attack",
        "health",
        "lebron"
    ];

    const [solution, setSolution] = useState('')
    const difficulty = 'medium'
    useEffect(() => {
        setSolution(sixLetter[Math.floor(Math.random()*sixLetter.length)]);
    }, [setSolution])
    
    const { currentGuess, keyupHandler, guesses, isCorrect, turn } = useLogicHandler(solution, difficulty)

    useEffect(() => {
        window.addEventListener('keyup', keyupHandler)

        if (isCorrect) {
            window.removeEventListener('keyup', keyupHandler)
          }
          if (turn > 5) {
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