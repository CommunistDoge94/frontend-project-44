#!/usr/bin/env node
import { gameStopWarning, finishGame, correctAnswerMessage } from '../src/index.js';
import { askName, askQuestion } from '../src/cli.js';

function brainCalc() {
  const userName = askName();

  console.log('What is the result of the expression?');

  for (let round = 0; round < 3; round += 1) {
    const number1 = Math.floor(Math.random() * (30 - 2 + 1)) + 2; // Диапазон от 2 до 30.
    const number2 = Math.floor(Math.random() * (15 - 2 + 1)) + 2; // Диапозон от 2 до 15.
    const arithmetics = ['+', '-', '*'];
    const sign = arithmetics[Math.floor(Math.random() * 3)];
    const expression = `${number1} ${sign} ${number2}`;

    let correctAnswer;
    switch (sign) {
      case '+':
        correctAnswer = String(number1 + number2);
        break;
      case '-':
        correctAnswer = String(number1 - number2);
        break;
      case '*':
        correctAnswer = String(number1 * number2);
        break;
      default:
        console.log('Your OS will be removed in 5 seconds.');
        break;
    }

    const userAnswer = String(askQuestion(expression));

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

brainCalc();
