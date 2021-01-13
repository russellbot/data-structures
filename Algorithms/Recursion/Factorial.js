// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
let answer = 1;
function findFactorialRecursive(number) {
  let counter = number;
  
  if (counter < 2) {
    answer = answer*counter;
    return answer;
  }
  answer = answer*counter;
  counter--;
  return findFactorialRecursive(counter);
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer = i * answer;
  }

  return answer;
}

// findFactorialIterative(5);
findFactorialRecursive(6);