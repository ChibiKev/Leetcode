/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  let memo = [];
  for (let index = 0; index < n + 1; index++){
    if (index == 0 || index == 1){
      memo.push(index);
    }
    else{
      memo.push(memo[index - 1] + memo[index - 2]);
    }
  }
  return memo[memo.length - 1];
};