/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
  let fib = [0, 1, 1];
  for (let index = 3; index < n + 1; index++){
    fib[index % 3] += fib[(index + 1) % 3] + fib[(index + 2) % 3];
  }
  return fib[n % 3];
};