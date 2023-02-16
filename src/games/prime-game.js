import gameApi from '../game-api.js'
import { generateRandomNum, isPrime } from '../utils.js'

const primeGame = () => {
    const winScore = 3
    let resultScore = 0
    let isGame = true

    gameApi.logWelcomeGame()
    const userName = gameApi.getUserName()
    gameApi.logGrettingUserByName(userName)
    gameApi.logGameRules('Answer "yes" if given number is prime. Otherwise answer "no"')

    while (resultScore < winScore && isGame) {
        const userQuestion = generateQuestion()
        gameApi.logQuestion(`Question: ${userQuestion.question}`)
        const userAnswer = gameApi.askQuestion('Your answer: ')

        if (userAnswer == userQuestion.answer) {
            gameApi.logCorrectAnswer()
            resultScore += 1
        } else {
            gameApi.logFailedAnswer(userName, userQuestion.answer, userAnswer)
            isGame = false
        }
    }

    if (resultScore === winScore) {
        gameApi.logWin(userName)
    }

    function generateQuestion() {
        const question = generateRandomNum()
        const answer = isPrime(question) ? 'yes' : 'no'

        return {
            question,
            answer
        }
    }
}

export default primeGame