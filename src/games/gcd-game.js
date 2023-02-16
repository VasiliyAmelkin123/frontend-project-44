import gameApi from '../game-api.js';
import { findGcd, generateRandomNum } from '../utils.js';

function generateQuestion() {
  const num1 = generateRandomNum(10);
  const num2 = generateRandomNum();
  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2);

  return {
    question,
    answer,
  };
}

const gcdGame = () => {
  const winScore = 3;
  let resultScore = 0;
  let isGame = true;

  gameApi.logWelcomeGame();
  const userName = gameApi.getUserName();
  gameApi.logGrettingUserByName(userName);
  gameApi.logGameRules('Find the greatest common divisor of given numbers.');

  while (resultScore < winScore && isGame) {
    const userQuestion = generateQuestion();
    gameApi.logQuestion(`Question: ${userQuestion.question}`);
    const userAnswer = gameApi.askQuestion('Your answer: ');

    if (parseInt(userAnswer, 2) === userQuestion.answer) {
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

export default gcdGame;
