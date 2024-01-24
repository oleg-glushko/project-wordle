import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from '../GuessInput';
import GuessesOutput from '../GuessesOutput';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = useState([]);
    const [isWon, setWon] = useState(false);

    function handleNewGuess(guess) {
        if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
            alert("You're out of tries!");
            return;
        }


        if (guesses.includes(guess)) {
            alert("This word is guessed already!");
            return;
        }

        if (guess === answer) setWon(true);

        setGuesses([...guesses, guess]);
    }

    const isEnded = isWon || guesses.length >= NUM_OF_GUESSES_ALLOWED;

    return (
        <>
            <GuessesOutput guesses={guesses} answer={answer} />
            <GuessInput handleNewGuess={handleNewGuess} isEnded={isEnded} />
            <Keyboard guesses={guesses} answer={answer} />

            {isWon &&
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in{' '}
                        <strong>{guesses.length} guesses</strong>.
                    </p>
                </div>
            }
            {isEnded && !isWon &&
                <div className="sad banner">
                    <p>
                        Sorry, the correct answer is{' '}
                        <strong>{answer}</strong>.
                    </p>
                </div>
            }
        </>
    )
}

export default Game;
