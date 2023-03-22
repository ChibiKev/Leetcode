/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0;
  let index = 31;
  while (index > -1){
    result |= ((n >> index) & 1) << (31 - index);
    index -= 1;
  }
  return result >>> 0;
};