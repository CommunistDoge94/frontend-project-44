import readlineSync from 'readline-sync';

function askName() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function askQuestion(question) {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

export { askName, askQuestion };
