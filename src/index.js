import readlineSync from 'readline-sync';

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

const generateNumber = () => {
  return Math.floor(Math.random() * (30 - 2 + 1)) + 2;
}

const startGame = (gameDescription, generateQuestion) => {
  const userName = greetUser();
  const roundCount = 3;
  console.log(gameDescription);

  for (let round = 1; round <= roundCount; round += 1) {
    const [question, correctAnswer] = generateQuestion();
    const userAnswer = askQuestion(question);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    if (round === 3) {
      console.log(`Congratulations, ${userName}!`);
    } 
  }
}

export { startGame, generateNumber };
