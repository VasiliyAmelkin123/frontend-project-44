#!/usr/bin/env node

import game from '../src/game.js'

game.startGame()
const userName = game.getUserName()
game.grettingUserByName(userName)