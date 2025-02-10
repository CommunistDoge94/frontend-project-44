import startGame from '../index.js';

function calculateAnswer(expression) {
  const [number1, sign, number2] = expression.split(' ');
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = String(Number(number1) + Number(number2));
      return correctAnswer;
    case '-':
      correctAnswer = String(number1 - number2);
      return correctAnswer;
    case '*':
      correctAnswer = String(number1 * number2);
      return correctAnswer;
    default:
      console.log('Your OS will be removed in 5 seconds.');
      return 0;
  }
}

function generateQuestion() {
  const number1 = Math.floor(Math.random() * (30 - 2 + 1)) + 2; // Диапазон от 2 до 30.
  const number2 = Math.floor(Math.random() * (15 - 2 + 1)) + 2; // Диапозон от 2 до 15.
  const arithmetics = ['+', '-', '*'];
  const sign = arithmetics[Math.floor(Math.random() * 3)];
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = calculateAnswer(question);
  return [question, correctAnswer];
}

const gameDescription = 'What is the result of the expression?';

export default () => startGame(gameDescription, generateQuestion);
