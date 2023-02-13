/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0;
  let result = 0;
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (letter == 'R'){
      count += 1;
    }
    else{
      count -= 1;
    }
    if (count == 0){
      result += 1;
    }
  }
  return result;
};