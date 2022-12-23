/**
 * @param {number} n
 * @return {number}
 */
 var pivotInteger = function(n) {
  let totalSum = Math.floor(n * (n + 1) / 2);
  for (let index = 1; index < n + 1; index++){
    if (index * (index + 1) == totalSum + index){
      return index;
    }
  }
  return -1;
};