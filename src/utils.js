export const generateRandomNum = (symbols = 100) => Math.floor(Math.random() * symbols);

export const generateRandomOperation = (operationsArray = '+-*') => operationsArray[Math.floor(Math.random() * operationsArray.length)];

export const solveExample = (num1, num2, operation) => {
  let result = 0;
  switch (operation) {
    case '+': result = num1 + num2;
      break;

    case '-': result = num1 - num2;
      break;

    case '*': result = num1 * num2;
      break;

    default: break;
  }

  return result;
};

export const findGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return findGcd(num2, num1 % num2);
};

export const generateRandomProgression = (length = 5) => {
  const randomStartNum = generateRandomNum();
  const randomStepNum = generateRandomNum(10);
  let currentNum = randomStartNum;
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(currentNum);
    currentNum += randomStepNum;
  }

  return progression;
};

export const isPrime = (n) => {
  if (n < 2) {
    return false;
  } if (n === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};
