import rs from 'readline-sync'

const cli = {
    grettingUserByName() {
        const userName = rs.question('May I have your name? ')
        console.log(`Hello, ${userName}!`)
    }
}

export default cli
