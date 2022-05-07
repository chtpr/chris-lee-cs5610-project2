import React from 'react'

function Row({guess, currentGuess, difficulty}) {

    // five letters
    if (difficulty === 'easy') {

        // display previous guesses
        if (guess) {
            return (
                <div className="row">
                    {guess.map((tile, i) => (
                        <div key={i} className={tile.color}>{tile.key}</div>
                    )

                    )}
                </div>
            )
        }

        // display current guess in real time
        // first array is the filled tiles
        // second array is the yet to be filled tiles
        if (currentGuess) {
            let letters = currentGuess.split('')
            return (
            <div className="row">
                {letters.map((letter, i) => (
                <div key={i}>{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((_,i) => (
                <div key={i}></div>
                ))}
            </div>
            )
        }

        return (
            // empty row
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )

    // six letters
} else if (difficulty === 'medium') {
    
    if (guess) {
        return (
            <div className="row">
                {guess.map((tile, i) => (
                    <div key={i} className={tile.color}>{tile.key}</div>
                )

                )}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')
        return (
          <div className="row">
            {letters.map((letter, i) => (
              <div key={i}>{letter}</div>
            ))}
            {[...Array(6 - letters.length)].map((_,i) => (
              <div key={i}></div>
            ))}
          </div>
        )
      }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
  )

    // seven letters
} else if (difficulty === 'hard') {
    if (guess) {
        return (
            <div className="row">
                {guess.map((tile, i) => (
                    <div key={i} className={tile.color}>{tile.key}</div>
                )

                )}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')
        console.log(letters.length)
        return (
          <div className="row">
            {letters.map((letter, i) => (
              <div key={i}>{letter}</div>
            ))}
            {[...Array(7 - letters.length)].map((_,i) => (
              <div key={i}></div>
            ))}
          </div>
        )
      }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
    }
} 

export default Row