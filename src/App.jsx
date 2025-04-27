import React, { useState } from 'react'
import {languages} from './languages'
import { clsx } from 'clsx'
import { fareWellMessage, getRandomWord } from '../utils'

const App = () => {

  const [currentWord, setCurrentWord] = useState(getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])
  
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
 
  const word = currentWord.split("")
  const alphabet = "qwertyuiopasdfghjklzxcvbnm"
  const keyboardLetters = alphabet.split("")
  let isGameOver = wrongGuessCount === languages.length - 1
  let isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  let endGame = isGameOver || isGameWon
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessWrong = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)


  function guess(key) {
    setGuessedLetters(prev => guessedLetters.includes(key) ? prev : [...prev, key])
  }

  function newGame() {
    isGameOver = false
    isGameWon = false
    guessedLetters.length = 0
    setCurrentWord(getRandomWord())
  }

  return (
    <main>

      <header>
        <h1>Assembly EndGame</h1>
        <p>Guess the word withim 8 attempts to keep the programming world safe from assembly</p>
      </header>

      <section className={`game-status ${endGame ? isGameOver ? "game-over" : "game-won" : ""}`} style={{visibility: endGame ? "visible" : wrongGuessCount ? "visible" : "hidden"}}
      >
        {
        endGame ?
          isGameOver ? <><h2>You Lose</h2><p>Better start learning Assembly 😭</p></> : 
                          <><h2>You Win</h2><p>Well Done 🎉</p></> :
                      <>{isLastGuessWrong ? <><h2>Farewell 👋🏻</h2><p>{fareWellMessage(languages[wrongGuessCount - 1].name)} 😫</p></> : 
                          <><h2>Good Job ✌️</h2><p>You doing great let's keep the coding safe 😃</p></>}</>
        }
      </section>

      <section className='languages'>
        {languages.map((lang, id) => {
          const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
          }
          const isLanguageLost = id < wrongGuessCount ? "lost" : ""
          return (
            <span 
              key={id} 
              className={`language-chip ${isLanguageLost}`}
              style={styles}
            >
                {lang.name}
            </span>
          )
        })}
      </section>

      <section className='hidden-word'>
        {word.map((letter, id) => {
          return (
            <span key={id} className='letter-box'>
              {endGame ? letter : guessedLetters.includes(letter) ? letter : ""}
            </span>
          )
        })}
      </section>

      <section className='keyboard'>
        {keyboardLetters.map((key, id) => {

          const isGuessed = guessedLetters.includes(key)
          const isCorrect = isGuessed && currentWord.includes(key)
          const isWrong = isGuessed && !isCorrect
          const classString = clsx({
            correct: isCorrect,
            incorrect: isWrong
          })

          return (
            <button 
              key={id} 
              className={`key ${classString}`}
              disabled={endGame ? true : isGuessed}
              onClick={() => guess(key)}
            >
            {key}
            </button>
          )})}
      </section>

      <button 
          className='new-game'
          style={{visibility: isGameOver || isGameWon ? "visible" : "hidden"}}
          onClick={() => newGame()}
        >
          New Game
      </button>

    </main>
  )
}

export default App