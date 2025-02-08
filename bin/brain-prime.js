#!/usr/bin/env node
import { gameStopWarning, finishGame, correctAnswerMessage } from '../src/index.js';
import { askName, askQuestion } from '../src/cli.js';

function brainPrime() {
  const userName = askName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let round = 0; round < 3; round += 1) {
    const primeNumbersList1to100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
      53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const selectedNumber = Math.floor((Math.random() * 98) + 2);
    const correctAnswer = primeNumbersList1to100.includes(selectedNumber) ? 'yes' : 'no';

    const userAnswer = String(askQuestion(selectedNumber));

    if (userAnswer !== correctAnswer) {
      gameStopWarning(userAnswer, correctAnswer, userName);
      break;
    }
    correctAnswerMessage();

    if (round === 2) {
      finishGame(userName);
    }
  }
}

brainPrime();
