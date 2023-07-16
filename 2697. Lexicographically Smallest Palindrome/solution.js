/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  let result = s.split('');
  for (let index = 0; index < result.length / 2; index++){
    let left = result[index];
    let right = result[result.length - 1 - index];
    if (left < right){
      result[result.length - 1 - index] = left;
    }
    else if (right < left){
      result[index] = right;
    }
  }
  return result.join('');
};