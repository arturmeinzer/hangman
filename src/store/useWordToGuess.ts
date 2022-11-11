import create from "zustand";
import getWord from "../utils/getWord";
import { WordToGuessState } from "../types";

const useWordToGuess = create<WordToGuessState>((set) => ({
    word: getWord(),
    setWord: () => set(() => ({ word: getWord() })),
}));

export default useWordToGuess;
