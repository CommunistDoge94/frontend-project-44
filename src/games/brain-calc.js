import { startGame, generateNumber } from '../index.js';

function calculateAnswer(number1, number2, sign) {
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = (Number(number1) + Number(number2));
      return correctAnswer;
    case '-':
      correctAnswer = (number1 - number2);
      return correctAnswer;
    case '*':
      correctAnswer = (number1 * number2);
      return correctAnswer;
    default:
      console.log('Your OS will be removed in 5 seconds.');
      return 0;
  }
}

function generateQuestion() {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const arithmetics = ['+', '-', '*'];
  const sign = arithmetics[Math.floor(Math.random() * arithmetics.length)];
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(calculateAnswer(number1, number2, sign));
  return [question, correctAnswer];
}

const gameDescription = 'What is the result of the expression?';

export default () => startGame(gameDescription, generateQuestion);
