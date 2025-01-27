#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const arithmetics = ['+', '-', '*'];

const userName = askName();
console.log('What is the result of the expression?');

for (let round = 0; round < 3; round += 1) {
  const number1 = Math.floor(Math.random() * (30 - 2 + 1)) + 2; // Диапазон от 2 до 30.
  const number2 = Math.floor(Math.random() * (15 - 2 + 1)) + 2; // Диапозон от 2 до 15.
  const sign = arithmetics[Math.floor(Math.random() * 3)];
  const expression = `${number1} ${sign} ${number2}`;

  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      console.log('Your OS will be removed in 5 seconds.');
      break;
  }

  console.log(`Question: ${expression}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    if (round === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    break;
  }
}
