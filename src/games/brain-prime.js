import startGame from '../index.js';

function isPrimeNumber(number) {
  for (let divisor = number - 1; divisor > 1; divisor -= 1) {
    if (number % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function generateQuestion() {
  const number = Math.floor((Math.random() * 98) + 2);
  const correctAnswer = String(isPrimeNumber(number));
  const question = number;
  return [question, correctAnswer];
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(gameDescription, generateQuestion);
