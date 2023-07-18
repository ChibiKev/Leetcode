/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  let end = num.length;
  while (num[end - 1] == '0'){
    end -= 1;
  }
  return num.slice(0, end);
};