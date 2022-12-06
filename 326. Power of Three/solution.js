/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
  return n > 0 && (Math.log10(n) / Math.log10(3)) == Math.floor(Math.log10(n) / Math.log10(3));
};