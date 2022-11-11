export interface HangmanWordProps {
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean,
}

export type AddGuessedLetter = (letter: string) => void;

export interface KeyboardProps {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: AddGuessedLetter,
    disabled: boolean,
}

export interface HangmanDrawingProps {
    numberOfGuesses: number
}

export interface GuessedLettersState {
    guessedLetters: string[],
    addGuessedLetter: AddGuessedLetter,
    resetGuessedLetters: () => void,
}

export interface WordToGuessState {
    word: string,
    setWord: () => void,
}
