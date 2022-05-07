
import { useState } from 'react';

const useLogicHandler = (solution, diff) => {
  let totalTurns = 7
  if (diff === 'medium') totalTurns = 6
  if (diff === 'hard') totalTurns = 5
  let wordLength = [...solution].length
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(totalTurns)]) // each guess is an array, an array of arrays
  const [isCorrect, setIsCorrect] = useState(false)

  // configures the guess into an array of
  // tile objects with a letter and color 
  const configureCurrentGuess = () => {
    // turn solution into array of letters
    let solutionLetters = [...solution]
    // turn current guess into array of letter objects
    let configuredGuessTiles = [...currentGuess].map((letter) => {
      return {key: letter, color: 'grey'}
    })

    // find any green letters
    configuredGuessTiles.forEach((tile, i) => {
      // if the letter matches the letter of the current guess
      if (solutionLetters[i] === tile.key) {
        // color the letter green
        configuredGuessTiles[i].color = 'green'
        // cross out the letter so subsequent letters don't accidentally match
        solutionLetters[i] = null
      }
    })
    
    // find any yellow letters
    configuredGuessTiles.forEach((tile, i) => {
      // if the letter is in the solution and it's color is not green
      // meaning basically a letter in its correct spot doesnt turn yellow
      if (solutionLetters.includes(tile.key) && tile.color !== 'green') {
        configuredGuessTiles[i].color = 'yellow'
        // find the index of the letter that is in the solution and cross it out
        solutionLetters[solutionLetters.indexOf(tile.key)] = null
      }
    })

    return configuredGuessTiles
  }

  // adds a new guess to the guesses state and
  // increases the turn by 1
  // if solution is guessed correctly, isCorrect state set to true
  const addNewGuess = (configuredGuess) => {
    // if guess is the solution, set isCorrect state to true
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    //adds the new guess to the guesses state
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = configuredGuess
      return newGuesses
    })
    // increases the turn state by 1
    setTurn((prevTurn) => {
      return prevTurn + 1
    })
    // reset the current guess
    setCurrentGuess('')
  }

  // handler for keyup events
  // handles the current guess and adds it
  // if it is the correct length and there are still turns left
  const keyupHandler = ({key}) => {

    if (key === 'Enter') {
      // only add guess if turn is less than total turn
      if (turn > totalTurns - 1) {
        console.log('used all your guesses')
        return
      }
      // checks that the current guess is correct length
      if (currentGuess.length !== wordLength) {
        console.log('word must be correct length')
        return
      }
      // configure the guess
      const configuredGuess = configureCurrentGuess()
      // and add it 
      addNewGuess(configuredGuess)
    }

    // handles deleting a letter upon backspace being pressed
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
      return
    }

    // makes sure the key is a letter and adds it to the current guess
    // as long as the current guess length is shorter than the allowed length
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < wordLength) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, keyupHandler}
}

export default useLogicHandler