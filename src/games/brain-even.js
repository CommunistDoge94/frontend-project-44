import startGame from '../index.js';
import generateNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => {
  const number = generateNumber();
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(gameDescription, generateQuestion);
