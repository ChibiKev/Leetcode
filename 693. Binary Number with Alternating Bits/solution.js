/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let allOnes = n ^ (n >> 1);
  let powerOfTwo = allOnes + 1;
  return (powerOfTwo & allOnes) == 0;
};