import create from "zustand";
import { GuessedLettersState } from "../types";

const useGuessedLetters = create<GuessedLettersState>((set) => ({
    guessedLetters: [],
    addGuessedLetter: (letter: string) => set(
        (state) => ({ guessedLetters: [...state.guessedLetters, letter] }),
    ),
    resetGuessedLetters: () => set(() => ({ guessedLetters: [] })),
}));

export default useGuessedLetters;
