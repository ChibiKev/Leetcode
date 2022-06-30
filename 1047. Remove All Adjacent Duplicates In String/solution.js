/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
  let result = s[0];
  for (let index = 1; index < s.length; index++){
    let letter = s[index];
    if (result.length > 0 && letter == result[result.length - 1]){
      result = result.slice(0, result.length - 1);
    }
    else{
      result += letter;
    }
  }
  return result;
};