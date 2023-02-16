#!/usr/bin/env node

import gameApi from '../src/game-api.js'

gameApi.logWelcomeGame()
const userName = gameApi.getUserName()
gameApi.logGrettingUserByName(userName)