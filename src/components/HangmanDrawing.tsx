import React, { FC } from "react";
import { HangmanDrawingProps } from "../types";

const HEAD = (
    <div
        key="head"
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-30px",
        }}
    />
);

const BODY = (
    <div
        key="body"
        style={{
            width: "10px",
            height: "100px",
            background: "black",
            position: "absolute",
            top: "120px",
            right: 0,
        }}
    />
);

const ARM_RIGHT = (
    <div
        key="armRight"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "150px",
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }}
    />
);

const ARM_LEFT = (
    <div
        key="armLeft"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "150px",
            right: "10px",
            rotate: "30deg",
            transformOrigin: "right bottom",
        }}
    />
);

const LEG_RIGHT = (
    <div
        key="legRight"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "210px",
            right: "-90px",
            rotate: "60deg",
            transformOrigin: "left bottom",
        }}
    />
);

const LEG_LEFT = (
    <div
        key="legLeft"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "210px",
            right: 0,
            rotate: "-60deg",
            transformOrigin: "right bottom",
        }}
    />
);

const BODY_PARTS = [HEAD, BODY, ARM_RIGHT, ARM_LEFT, LEG_RIGHT, LEG_LEFT];

const HangmanDrawing:FC<HangmanDrawingProps> = ({ numberOfGuesses }) => (
    <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0,
        }}
        />
        <div style={{
            height: "10px",
            width: "120px",
            background: "black",
            marginLeft: "80px",
        }}
        />
        <div style={{
            height: "350px",
            width: "10px",
            background: "black",
            marginLeft: "80px",
        }}
        />
        <div style={{
            height: "10px",
            width: "170px",
            background: "black",
        }}
        />
    </div>
);

export default HangmanDrawing;
