/**
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
  if (n % 2 == 1){
    return ''.padStart(n, 'a');
  }
  return ''.padStart(n - 1, 'a') + 'b';
};