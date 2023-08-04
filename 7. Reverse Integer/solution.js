/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let negative = 1;
  let result = 0;
  if (x < 0){
    negative = -1;
    x *= -1;
  }

  while (x != 0){
    result = (result * 10) + (x % 10);
    x = Math.floor(x / 10);
  }
  
  if (result < -(2**31) || result > 2**31 - 1){
    return 0;
  }
  return result * negative;
};