import gameApi from '../game-api.js';
import { generateRandomNum, generateRandomOperation, solveExample } from '../utils.js';

function generateQuestion() {
  const operation = generateRandomOperation();
  const num1 = generateRandomNum();
  const num2 = generateRandomNum();
  const question = `${num1} ${operation} ${num2}`;
  const answer = solveExample(num1, num2, operation);

  return {
    question,
    answer,
  };
}

const calcGame = () => {
  const winScore = 3;
  let resultScore = 0;
  let isGame = true;

  gameApi.logWelcomeGame();
  const userName = gameApi.getUserName();
  gameApi.logGrettingUserByName(userName);
  gameApi.logGameRules('What is the result of the expression?');

  while (resultScore < winScore && isGame) {
    const userQuestion = generateQuestion();
    gameApi.logQuestion(`Question: ${userQuestion.question}`);
    const userAnswer = gameApi.askQuestion('Your answer: ');

    if (parseInt(userAnswer, 10) === userQuestion.answer) {
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

export default calcGame;
