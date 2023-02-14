#!/usr/bin/env node

import game from '../src/game.js'

let resultScore = 0

game.startGame()
const userName = game.getUserName()
game.grettingUserByName(userName)
game.showGameRules('Answer "yes" if the number is even, otherwise answer "no"')


const generateQuestion = () => {
    return Math.floor(Math.random() * 10)
}

console.log(generateQuestion())
