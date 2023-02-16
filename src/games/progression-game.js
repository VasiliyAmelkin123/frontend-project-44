import gameApi from '../game-api.js';
import { generateRandomNum, generateRandomProgression } from '../utils.js';

function generateQuestion() {
  const question = generateRandomProgression(10);
  const indexAnswer = generateRandomNum(9);
  const answer = question[indexAnswer];
  question[indexAnswer] = '..';

  return {
    question: question.join(' '),
    answer,
  };
}

const progressionGame = () => {
  const winScore = 3;
  let resultScore = 0;
  let isGame = true;

  gameApi.logWelcomeGame();
  const userName = gameApi.getUserName();
  gameApi.logGrettingUserByName(userName);
  gameApi.logGameRules('What number is missing in the progression?');

  while (resultScore < winScore && isGame) {
    const userQuestion = generateQuestion();
    gameApi.logQuestion(`Question: ${userQuestion.question}`);
    const userAnswer = gameApi.askQuestion('Your answer: ');

    if (userAnswer.toString() === userQuestion.answer.toString()) {
      gameApi.logCorrectAnswer();
      resultScore += 1;
    } else {
      gameApi.logFailedAnswer(userName, userQuestion.answer, userAnswer);
      isGame = false;
    }
  }

  if (resultScore === winScore) {
    gameApi.logWin(userName);
  }
};

export default progressionGame;
