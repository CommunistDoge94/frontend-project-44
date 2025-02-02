#!/usr/bin/env node
import { gameStopWarning, finishGame, correctAnswerMessage } from '../src/index.js';
import { askName, askQuestion } from '../src/cli.js';

function brainProgression() {
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
    const correctAnswer = String(progression[emptyPlace]);
    progression[emptyPlace] = '..';

    const userAnswer = String(askQuestion(progression.join(' ')));

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

brainProgression();
