/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let stack = [];
    
  for (let bracket of s){
    if (bracket === '(' || bracket === '[' || bracket === '{'){
      stack.push(bracket);
    }
    else if (stack.length === 0){
      return false;
    }
    else if (bracket === ')' && stack[stack.length - 1] === '('){
      stack.pop();
    }
    else if (bracket === ']' && stack[stack.length - 1] === '['){
      stack.pop();
    }
    else if (bracket === '}' && stack[stack.length - 1] === '{'){
      stack.pop();
    }
    else{
      return false;
    }
  }
  
  return stack.length == 0;
};