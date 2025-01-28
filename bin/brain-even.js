#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const userName = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let round = 0; round < 3; round += 1) {
  const number = Math.floor(Math.random() * 98) + 2; // Диапазон от 2 до 99.
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (correctAnswer === answer) {
    console.log('Correct!');
    if (round === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    break;
  }
}
