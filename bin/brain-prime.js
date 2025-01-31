#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const userName = askName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let round = 0; round < 3; round += 1) {
  const primeNumbersList1to100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const selectedNumber = Math.floor((Math.random() * 98) + 2);
  const correctAnswer = primeNumbersList1to100.includes(selectedNumber) ? 'yes' : 'no';

  console.log(`Question: ${selectedNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    if (round === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break;
  }
}
