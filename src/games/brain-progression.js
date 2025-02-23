import { startGame, generateNumber } from '../index.js';

const generateProgression = (progressionLength, startNum, numGap, emptyPlace) => {
  const progression = [];
  for (let progressionNumber = 0; progressionNumber < progressionLength; progressionNumber += 1) {
    if (progressionNumber === 0) {
      progression.push(startNum);
    }
    progression.push(startNum + (numGap * (progressionNumber + 1)));
  }
  const correctAnswer = String(progression[emptyPlace]);
  progression[emptyPlace] = '..';
  return [progression.join(' '), correctAnswer];
};

const generateQuestion = () => {
  const progressionLength = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
  const numGap = generateNumber();
  const startNum = generateNumber();
  const emptyPlace = Math.floor(Math.random() * progressionLength);
  const [question, correctAnswer] = generateProgression(
    progressionLength,
    numGap,
    startNum,
    emptyPlace,
  );
  return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';

export default () => startGame(gameDescription, generateQuestion);
