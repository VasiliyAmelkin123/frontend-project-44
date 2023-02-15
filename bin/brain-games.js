#!/usr/bin/env node

import game from '../src/game.js'

game.logWelcomeGame()
const userName = game.getUserName()
game.logGrettingUserByName(userName)