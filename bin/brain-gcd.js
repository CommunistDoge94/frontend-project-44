#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const userName = askName();

for (let round = 0; round < 3; round += 1) {
  if (round === 0) {
    console.log('Find the greatest common divisor of given numbers.');
  }

  const number1 = Math.floor(Math.random() * (30 - 2 + 1)) + 2; // Диапазон от 2 до 30.
  const number2 = Math.floor(Math.random() * (15 - 2 + 1)) + 2; // Диапозон от 2 до 15.

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

  const correctAnswer = Number(findGcd(number1, number2));
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    if (round === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break;
  }
}
