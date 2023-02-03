/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let index = s.length - 1;
  while (index > -1){
    if (s[index] == ' ' && count > 0){
      break;
    }
    if (s[index] != ' '){
      count += 1;
    }
    index -= 1;
  }
  return count;
};