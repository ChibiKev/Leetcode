/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
  let result = "";
  for (let index = 0; index < s.length; index++){
    let value = s[index];
    if (index % 2 == 0){
      result += value;
    }
    else{
      result += String.fromCharCode(s[index - 1].charCodeAt() + parseInt(value));
    }
  }

  return result;
};