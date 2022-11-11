import React, { FC } from "react";
import { HangmanWordProps } from "../types";

const HangmanWord:FC<HangmanWordProps> = ({ guessedLetters, wordToGuess, reveal = false }) => (
    <div
        style={{
            display: "flex",
            gap: ".25em",
            fontSize: "4rem",
            fontWeight: "bold",
            textTransform: "uppercase",
        }}
    >
        {wordToGuess.split("").map((letter, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index} style={{ borderBottom: ".1em solid black" }}>
                <span
                    style={{
                        visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
                    }}
                >
                    {letter}
                </span>
            </span>
        ))}
    </div>
);

export default HangmanWord;
