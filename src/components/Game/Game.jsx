import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessesOutput from '../GuessesOutput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

    const [guesses, setGuesses] = useState([]);

    function handleNewGuess(guess) {
        if (guesses.length >= 6) {
            alert("You're out of tries!");
            return;
        }


        if (guesses.includes(guess)) {
            alert("This word is guessed already!");
            return;
        }

        setGuesses([...guesses, guess]);
    }

    return (
        <>
            <GuessesOutput guesses={guesses} />
            <GuessInput handleNewGuess={handleNewGuess} />
        </>
    );
}

export default Game;
