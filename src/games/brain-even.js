import startGame from '../index.js';

function isEven(number) {
  return (number % 2 === 0) ? 'yes' : 'no';
}

function generateQuestion() {
  const number = Math.floor(Math.random() * 98) + 2; // Диапазон от 2 до 99.
  const question = number;
  const correctAnswer = isEven(number);
  return [question, correctAnswer];
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(gameDescription, generateQuestion);
