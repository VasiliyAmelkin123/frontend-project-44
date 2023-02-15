#!/usr/bin/env node

import game from '../src/game.js'
import { generateRandomNum } from '../src/utils.js'

const winScore = 3
let result = 0
let isGame = true

game.logWelcomeGame()
const userName = game.getUserName()
game.logGrettingUserByName(userName)
game.logGameRules('Answer "yes" if the number is even, otherwise answer "no"')

while(result < winScore && isGame) {
    const userQuestion = generateQuestion()
    game.logQuestion(`Question: ${userQuestion.question}`)
    const userAnswer = game.askQuestion('Your answer: ')
    if (userAnswer === userQuestion.answer) {
        game.logCorrectAnswer()
        result += 1
    } else {
        game.logFailedAnswer(userName, userQuestion.answer, userAnswer)
        isGame = false
    }
}

if (result === winScore) {
    game.logWin(userName)
    isGame = false
}

function generateQuestion() {
    const question = generateRandomNum()
    const answer = question % 2 === 0 ? "yes" : "no"

    return {
        question,
        answer
    }
}
