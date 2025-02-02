#!/usr/bin/env node

function gameStopWarning(userAnswer, correctAnswer, userName) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
}

function correctAnswerMessage() {
  console.log('Correct!');
}

function finishGame(userName) {
  console.log(`Congratulations, ${userName}!`);
}

export { gameStopWarning, finishGame, correctAnswerMessage };
