#!/usr/bin/env node
import { gameStopWarning, finishGame, correctAnswerMessage } from '../src/index.js';
import { askName, askQuestion } from '../src/cli.js';

function brainGcd() {
  const userName = askName();

  console.log('Find the greatest common divisor of given numbers.');

  for (let round = 0; round < 3; round += 1) {
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

    const correctAnswer = String(findGcd(number1, number2));

    const userAnswer = askQuestion([number1, number2].join(' '));

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

brainGcd();
