/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let index = digits.length - 1; index > -1; index--){
    digits[index] = (digits[index] + 1) % 10;
    if (digits[index] != 0){
      return digits;
    }
  }

  digits[0] = 1;
  digits.push(0);
  return digits;
};