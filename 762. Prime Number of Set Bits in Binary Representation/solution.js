/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
  let primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  let count = 0;
  for (let index = left; index < right + 1; index++){
    let binary = index.toString(2);
    let bits = 0;
    for (let index2 = 0; index2 < binary.length; index2++){
      let value = binary[index2];
      if (value == '1'){
        bits += 1;
      }
    }
    if (primes.has(bits)){
      count += 1;
    }
  }
  return count;
};