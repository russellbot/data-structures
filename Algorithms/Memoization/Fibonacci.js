// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculations = 0;
function fibonacci() {
  let cache = {};
  return function fib(n) {    
    if (n in cache) {
      return cache[n];
    } else {
      if (n<2) {
        return n;
      } else {
        calculations++;
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

function fibonacciMaster2(n) {
    let answer = [0, 1];
    for (let i = 2; i<=n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}

const fasterFib = fibonacci();
console.log('DP', fasterFib(35));
console.log('we did ' + calculations + ' calculations');
console.log('DP2', fibonacciMaster2(35));