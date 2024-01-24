import { checkGuess, reduceLetterState } from "../../game-helpers";

const letters = [..."QWERTYUIOPASDFGHJKLZXCVBNM".split("")];

function Keys({ start, end, allLettersStates }) {
    return (
        <div className="keyboard-row">
            {letters.slice(start, end).map(letter => {
                const letterStyle = reduceLetterState(letter, allLettersStates);
                return <p key={letter} className={`letter ${letterStyle}`}>{letter}</p>
            })}
        </div>)
}

function Keyboard({ guesses, answer }) {
    const allLettersStates = guesses
        .reduce((state, guess) => state.concat(checkGuess(guess, answer)), []);
    return (
        <div className="keyboard">
            <Keys start={0} end={10} allLettersStates={allLettersStates} />
            <Keys start={10} end={19} allLettersStates={allLettersStates} />
            <Keys start={19} end={26} allLettersStates={allLettersStates} />
        </div>
    )
}

export default Keyboard;
