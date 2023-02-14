import rs from 'readline-sync'

const cli = {
    askQuestion(question) {
        const answer = rs.question(`${question}? `)
        return answer
    }
}

export default cli
