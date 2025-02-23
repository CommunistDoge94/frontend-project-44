import { startGame, generateNumber } from '../index.js';

function isEven(number) {
  return (number % 2 === 0);
}

function generateQuestion() {
  const number = generateNumber();
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(gameDescription, generateQuestion);
