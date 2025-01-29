#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const userName = askName();
console.log('What number is missing in the progression?');

for (let round = 0; round < 3; round += 1) {
  const progressionLength = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
  const numGap = Math.floor(Math.random() * 15 + 1);
  const startNum = Math.floor(Math.random() * 10 + 1);
  const progression = [];

  for (let progressionNumber = 0; progressionNumber < progressionLength; progressionNumber += 1) {
    if (progressionNumber === 0) {
      progression.push(startNum);
    }
    progression.push(startNum + (numGap * (progressionNumber + 1)));
  }

  const emptyPlace = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progression[emptyPlace];
  progression[emptyPlace] = '..';

  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

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
