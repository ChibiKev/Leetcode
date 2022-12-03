/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
  let negative = num < 0;
  num = Math.abs(num);
  let result = 0;
  let digit = 1;
  while (num != 0){
    result += (num % 7) * digit;
    num = Math.floor(num / 7);
    digit *= 10;
  }

  if (negative){
    result = "-" + result.toString();
  }
  else{
    result = result.toString();
  }
  
  return result;
};