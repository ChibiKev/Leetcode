/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
  let letters = new Array(26).fill(0);
  let maxCount = -1;
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    let letterIndex = letter.charCodeAt(0) - 97;
    if (letters[letterIndex] > 0){
      if (maxCount < index - letters[letterIndex]){
        maxCount = index - letters[letterIndex];
      }
    }
    else{
      letters[letterIndex] = index + 1;      
    }
  }

  return maxCount;
};