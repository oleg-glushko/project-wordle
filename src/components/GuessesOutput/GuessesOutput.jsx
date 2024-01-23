import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess/Guess";

function GuessesOutput({ guesses }) {
    const allowedGuesses = range(NUM_OF_GUESSES_ALLOWED);
    const totalGuesses = guesses.length;

    console.log({ totalGuesses, allowedGuesses })
    return (
        <div className="guess-results">
            {allowedGuesses.map(index => <Guess key={index}
                value={index <= totalGuesses ? guesses[index] : null} />)}
        </div>
    );
}

export default GuessesOutput;
