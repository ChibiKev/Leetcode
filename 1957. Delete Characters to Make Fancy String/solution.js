/**
 * @param {string} s
 * @return {string}
 */
 var makeFancyString = function(s) {
  let result = [];
  
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (result.length > 1 && result[result.length - 2] == result[result.length - 1] && result[result.length - 1] == letter){
      continue;        
    }
    result.push(letter);
  }
  
  return result.join("");
};