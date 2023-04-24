/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  let total = 0;
  for (let index = 1; index < n + 1; index++){
    if (index % 3 == 0 || index % 5 == 0 || index % 7 == 0){
      total += index;
    }
  }
  return total;
};