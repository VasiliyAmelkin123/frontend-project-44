import cli from './cli.js'

const game = {
    logWelcomeGame() {
        console.log('Welcome to the Brain Games!')
    },

    getUserName() {
        return cli.askQuestion('May I have your name? ')
    },

    logGrettingUserByName(name) {
        console.log(`Hello, ${name}!`)
    },

    logGameRules(rules) {
        console.log(`${rules}.`)
    },

    logCorrectAnswer() {
        console.log('Correct!')
    },

    logFailedAnswer(name, answer, userAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`)
    },

    askQuestion(question) {
        return cli.askQuestion(question)
    },

    logQuestion(question) {
        console.log(question)
    },

    logWin(name) {
        console.log(`Congratulations, ${name}!`)
    }
 }

export default game