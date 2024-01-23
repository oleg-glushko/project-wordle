import { useState } from "react";

function GuessInput({ handleNewGuess }) {
    const [guess, setGuess] = useState("");

    function submitGuess(event) {
        event.preventDefault();
        if (!guess.match(/^[A-Z]{5}$/)) {
            alert("The guess must have exactly 5 English letters!");
            return;
        }

        console.log(guess);
        handleNewGuess(guess);
        setGuess("");
    }

    function handleInput(event) {
        const nextGuess = event.target.value.toUpperCase();
        if (!nextGuess.match(/^[A-Z]{0,5}$/)) return;
        setGuess(nextGuess);
    }

    return (
        <form className="guess-input-wrapper" onSubmit={submitGuess}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" required
                value={guess} onChange={handleInput} />
        </form>
    );
}

export default GuessInput;
