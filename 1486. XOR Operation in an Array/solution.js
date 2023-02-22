/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let result = start;
  for (let index = 1; index < n; index++){
    let value = start + 2 * index;
    result ^= value;
  }
  return result;
};