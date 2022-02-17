/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
  let result = [];
  let value = Math.floor(n/2);
  if (n % 2 === 1){
    result.push(0);
  }
  for (let number = 1; number < value + 1; number++){
    result.push(-number);
    result.push(number);
  }
  return result;
};