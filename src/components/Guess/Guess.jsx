const emptyString = Array(5).fill(" ");

function Guess({ value }) {
    const letters = value?.split("") ?? emptyString;

    return <p className="guess">
        {letters.map((letter, index) => (
            <span className="cell" key={index}>{letter}</span>))}
    </p>
}

export default Guess;
