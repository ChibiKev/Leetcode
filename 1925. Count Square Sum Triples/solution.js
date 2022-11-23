/**
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {
  let result = 0;

  for (let a = 1; a < n; a++){
    for (let b = a + 1; b < n; b++){
      let c = Math.sqrt((a * a) + (b * b));
      if (Math.floor(c) == c && c <= n){
        result += 2;
      }
    }
  }

  return result;
};