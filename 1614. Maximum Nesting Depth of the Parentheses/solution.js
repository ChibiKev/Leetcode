/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let count = 0;
  let stack = 0;
  for (let index = 0; index < s.length; index++){
    let character = s[index];
    if (character == '('){
      stack += 1;
    }
    else if (character == ')'){
      stack -= 1;
    }
    if (stack > count){
      count = stack;
    }
  }
  return count;
};