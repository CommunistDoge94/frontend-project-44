#!/usr/bin/env node
import { gameStopWarning, finishGame, correctAnswerMessage } from '../../src/index.js';
import { askName, askQuestion } from '../../src/cli.js';

function brainEven() {
  const userName = askName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < 3; round += 1) {
    const number = Math.floor(Math.random() * 98) + 2; // Диапазон от 2 до 99.
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    const userAnswer = askQuestion(number);

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

brainEven();
