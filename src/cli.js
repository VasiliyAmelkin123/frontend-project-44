import rs from 'readline-sync'

const cli = {
    askQuestion(question) {
        return rs.question(question)
    }
}

export default cli
