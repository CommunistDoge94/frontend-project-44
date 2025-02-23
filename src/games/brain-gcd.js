import { startGame, generateNumber } from '../index.js';

const findGcd = (num1, num2) => {
  let lesserNum;
  let biggerNum;

  if (num1 >= num2) {
    biggerNum = num1;
    lesserNum = num2;
  } else {
    biggerNum = num2;
    lesserNum = num1;
  }

  for (let divisor = lesserNum; divisor > 1; divisor -= 1) {
    if (biggerNum % divisor === 0 && lesserNum % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

const generateQuestion = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const correctAnswer = String(findGcd(number1, number2));
  const question = [number1, number2].join(' ');
  return [question, correctAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => startGame(gameDescription, generateQuestion);
