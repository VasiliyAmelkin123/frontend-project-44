import gameApi from '../game-api.js';
import { generateRandomNum } from '../utils.js';

function generateQuestion() {
  const question = generateRandomNum();
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return {
    question,
    answer,
  };
}

const evenGame = () => {
  const winScore = 3;
  let resultScore = 0;
  let isGame = true;

  gameApi.logWelcomeGame();
  const userName = gameApi.getUserName();
  gameApi.logGrettingUserByName(userName);
  gameApi.logGameRules('Answer "yes" if the number is even, otherwise answer "no"');

  while (resultScore < winScore && isGame) {
    const userQuestion = generateQuestion();
    gameApi.logQuestion(`Question: ${userQuestion.question}`);
    const userAnswer = gameApi.askQuestion('Your answer: ');
    if (userAnswer === userQuestion.answer) {
      gameApi.logCorrectAnswer();
      resultScore += 1;
    } else {
      gameApi.logFailedAnswer(userName, userQuestion.answer, userAnswer);
      isGame = false;
    }
  }

  if (resultScore === winScore) {
    gameApi.logWin(userName);
    isGame = false;
  }
};

export default evenGame;
