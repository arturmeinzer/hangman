import React, { FC } from "react";
import styles from "./Keyboard.module.css";
import { KeyboardProps } from "../types";

const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard:FC<KeyboardProps> = ({
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    disabled,
}) => (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
            gap: ".5rem",
            alignSelf: "stretch",
        }}
    >
        {KEYS.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return (
                <button
                    type="button"
                    onClick={() => addGuessedLetter(key)}
                    className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                    key={key}
                    disabled={isActive || isInactive || disabled}
                >
                    {key}
                </button>
            );
        })}
    </div>
);

export default Keyboard;
