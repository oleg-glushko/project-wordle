import { checkGuess } from "../../game-helpers";

const emptyString = Array(5).fill({ letter: "", status: "" });

function Guess({ value, answer }) {
    const letters = value ? checkGuess(value, answer) : emptyString;

    return <p className="guess">
        {letters.map(({ letter, status }, index) => (
            <span className={`cell ${status}`} key={index}>{letter}</span>))}
    </p>
}

export default Guess;
