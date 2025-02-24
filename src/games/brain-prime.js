import startGame from '../index.js';
import generateNumber from '../utils.js';

const isPrimeNumber = (number) => {
  for (let divisor = number - 1; divisor > 1; divisor -= 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestion = () => {
  const number = generateNumber();
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  const question = number;
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(gameDescription, generateQuestion);
