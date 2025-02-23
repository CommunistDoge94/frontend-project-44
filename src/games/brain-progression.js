import startGame from '../index.js';

const generateProgression = () => {
  const progression = [];
  const progressionLength = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
  const numGap = Math.floor(Math.random() * 15 + 1);
  const startNum = Math.floor(Math.random() * 10 + 1);
  for (let progressionNumber = 0; progressionNumber < progressionLength; progressionNumber += 1) {
    if (progressionNumber === 0) {
      progression.push(startNum);
    }
    progression.push(startNum + (numGap * (progressionNumber + 1)));
  }
  const emptyPlace = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(progression[emptyPlace]);
  progression[emptyPlace] = '..';
  return [progression.join(' '), correctAnswer];
};

const generateQuestion = () => {
  const [question, correctAnswer] = generateProgression();
  return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';

export default () => startGame(gameDescription, generateQuestion);
