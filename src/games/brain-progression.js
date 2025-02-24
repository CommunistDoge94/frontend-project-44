import startGame from '../index.js';
import generateNumber from '../utils.js';

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
  const progressionLength = generateNumber(12, 8);
  const numGap = generateNumber();
  const startNum = generateNumber();
  const emptyPlace = generateNumber(progressionLength);
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
