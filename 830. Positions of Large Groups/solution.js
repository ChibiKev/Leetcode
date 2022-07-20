/**
 * @param {string} s
 * @return {number[][]}
 */
 var largeGroupPositions = function(s) {
  let result = [];

  let count = 0;
  let lastLetter = '';
  let startIndex = 0;

  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (lastLetter == letter){
      count += 1;
      if (count >= 3 && index == s.length - 1){
        result.push([startIndex, index]);
      }
    }
    else{
      if (count >= 3){
        result.push([startIndex, index - 1]);
      }
      lastLetter = letter;
      count = 1;
      startIndex = index;
    }
  }

  return result;
};