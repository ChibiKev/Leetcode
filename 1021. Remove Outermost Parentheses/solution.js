/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
  let stack = [];
  let result = "";
  for (let index = 0; index < s.length; index++){
    let character = s[index];
    if (stack.length == 0){
      stack.push(character);
    }
    else{
      if (character == "("){
        stack.push("(");
        result += "(";
      }
      else{
        stack.pop();
        if (stack.length != 0){
          result += ")";
        }
      }
    }
  }
  return result;
};