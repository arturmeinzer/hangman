import words from "./wordList.json";

const getWord = () => words[Math.floor(Math.random() * words.length)];

export default getWord;
