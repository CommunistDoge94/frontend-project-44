import { greetUser, askQuestion } from './cli.js';

function startGame(gameDescription, generateQuestion) {
  const userName = greetUser();
  const roundCount = 3;
  console.log(gameDescription);

  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctAnswer] = generateQuestion();
    const userAnswer = askQuestion(question);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (round === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}

export default startGame;
