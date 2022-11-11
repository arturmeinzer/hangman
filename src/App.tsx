import React, { useCallback } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import HangmanWord from "./components/HangmanWord";
import useWordToGuess from "./store/useWordToGuess";
import useGuessedLetters from "./store/useGuessedLetters";
import useKeyboardListener from "./hooks/useKeyboardListener";

const App = () => {
    const [wordToGuess] = useWordToGuess((state) => [state.word]);
    const [
        guessedLetters,
        addGuessedLetter,
    ] = useGuessedLetters((state) => [state.guessedLetters, state.addGuessedLetter]);

    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));
    const isFinished = isLoser || isWinner;

    const addGuessedLetterCallback = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isFinished) return;
        addGuessedLetter(letter);
    }, [guessedLetters, addGuessedLetter, isFinished]);

    useKeyboardListener(addGuessedLetterCallback);

    return (
        <div
            style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: "0 auto",
                alignItems: "center",
                fontFamily: "monospace",
            }}
        >
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
                {isWinner && "Winner! - Refresh to try again"}
                {isLoser && "Nice Try - Refresh to try again"}
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord
                reveal={isLoser}
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
            />
            <Keyboard
                activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetterCallback}
                disabled={isFinished}
            />
        </div>
    );
};

export default App;
