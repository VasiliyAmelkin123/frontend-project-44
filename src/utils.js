export const generateRandomNum = (symbols = 100) => {
    return Math.floor(Math.random() * symbols)
}

export const generateRandomOperation = (operationsArray = '+-*') => {
    return operationsArray[Math.floor(Math.random() * operationsArray.length)]
}

export const solveExample = (num1, num2, operation) => {
    switch (operation) {
        case '+': return num1 + num2

        case '-': return num1 - num2

        case '*': return num1 * num2
    }
}