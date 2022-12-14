/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
  return n > 0 && !(n & (n-1)) && Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) == n;
};