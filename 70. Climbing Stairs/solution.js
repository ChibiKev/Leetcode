/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let result = [1, 1, 2];
  
  for (let index = 3; index < n + 1; index++){
    let nextIteration = result[index - 1] + result[index - 2];
    result.push(nextIteration);
  }
  
  return result[n];
};