/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {
  let num = 0;
  while (n){
    num += n % k;
    n = Math.floor(n / k);
  }

  return num;
};