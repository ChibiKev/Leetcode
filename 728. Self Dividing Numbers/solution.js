/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let value = left; value < right + 1; value++){
    let number = value;
    let divisible = true;
    while (number != 0){
      let digit = number % 10;
      if (digit == 0 || value % digit != 0){
        divisible = false;
        break;
      }
      number = Math.floor(number / 10);
    }
    if (divisible){
      result.push(value);
    }
  }
  
  return result;
};