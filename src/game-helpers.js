/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
    // This constant is a placeholder that indicates we've successfully
    // dealt with this character (it's correct, or misplaced).
    const SOLVED_CHAR = 'вњ“';

    if (!guess) {
        return null;
    }

    const guessChars = guess.toUpperCase().split('');
    const answerChars = answer.split('');

    const result = [];

    // Step 1: Look for correct letters.
    for (let i = 0; i < guessChars.length; i++) {
        if (guessChars[i] === answerChars[i]) {
            result[i] = {
                letter: guessChars[i],
                status: 'correct',
            };
            answerChars[i] = SOLVED_CHAR;
            guessChars[i] = SOLVED_CHAR;
        }
    }

    // Step 2: look for misplaced letters. If it's not misplaced,
    // it must be incorrect.
    for (let i = 0; i < guessChars.length; i++) {
        if (guessChars[i] === SOLVED_CHAR) {
            continue;
        }

        let status = 'incorrect';
        const misplacedIndex = answerChars.findIndex(
            (char) => char === guessChars[i]
        );
        if (misplacedIndex >= 0) {
            status = 'misplaced';
            answerChars[misplacedIndex] = SOLVED_CHAR;
        }

        result[i] = {
            letter: guessChars[i],
            status,
        };
    }

    return result;
}

export function reduceLetterState(letter, allLettersStates) {
    const thisLetterStates = allLettersStates.filter(item => item.letter === letter);
    let status = "unused";
    if (thisLetterStates.length === 0) return status;
    if (thisLetterStates.length === 1) return thisLetterStates[0].status;

    thisLetterStates.forEach(({ status: nextStatus }) => {
        switch (nextStatus) {
            case "incorrect":
                if (status === "unused")
                    status = "incorrect";
                break;
            case "misplaced":
                if (status === "unused" || status === "incorrect")
                    status = "misplaced";
                break;
            case "correct":
                status = "correct";
                break;
            default:
                throw new Error("State is invalid");
        }
    });
    return status;
}
