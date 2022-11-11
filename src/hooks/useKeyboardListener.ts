import { useEffect } from "react";
import useGuessedLetters from "../store/useGuessedLetters";
import useWordToGuess from "../store/useWordToGuess";
import { AddGuessedLetter } from "../types";

const useKeyboardListener = (addGuessedLetter: AddGuessedLetter): void => {
    const resetGuessedLetters = useGuessedLetters((state) => state.resetGuessedLetters);
    const setWordToGuess = useWordToGuess((state) => state.setWord);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const { key } = e;
            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        };
        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [addGuessedLetter]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const { key } = e;
            if (key !== "Enter") return;

            e.preventDefault();
            resetGuessedLetters();
            setWordToGuess();
        };
        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [resetGuessedLetters, setWordToGuess]);
};

export default useKeyboardListener;
