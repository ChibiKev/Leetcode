/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  let stack = [];
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (letter == 'B' && stack.length > 0 && stack[stack.length - 1] == 'A'){
      stack.pop();
    }
    else if (letter == 'D' && stack.length > 0 && stack[stack.length - 1] == 'C'){
      stack.pop();
    }
    else{
      stack.push(letter);
    }
  }
  return stack.length;
};