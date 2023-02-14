import cli from './cli.js'

const game = {
    startGame() {
        console.log('Welcome to the Brain Games!')
    },

    getUserName() {
        return cli.askQuestion('May I have your name')
    },

    grettingUserByName(name) {
        console.log(`Hello, ${name}!`)
    },

    showGameRules(rules) {
        console.log(`${rules}.`)
    }
}

export default game