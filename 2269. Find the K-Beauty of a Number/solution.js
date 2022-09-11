/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
 var divisorSubstrings = function(num, k) {
  let strNum = num.toString();
  let result = 0;

  for (let index = 0; index < strNum.length - k + 1; index++){
    let value = +strNum.slice(index, index + k);
    if (value != 0 && num % value == 0){
      result += 1;
    }
  }

  return result;
};