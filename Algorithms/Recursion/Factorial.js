// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if (number === 2) {
      return 2;
    }
    return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
      answer = 2;
  }
  for (let i = number; i > 1; i--) {
    answer = i * answer;
  }

  return answer;
}

// findFactorialIterative(5);
findFactorialRecursive(6);