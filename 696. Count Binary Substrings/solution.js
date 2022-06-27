/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
  let current = 1;
  let previous = 0;
  let result = 0;
  for (let index = 1; index < s.length; index++){
    if (s[index] == s[index - 1]){
      current += 1;
    }
    else{
      let minimum = previous;
      if (previous > current){
        minimum = current;
      }
      result += minimum;
      previous = current;
      current = 1;
    }
  }

  let minimum = previous;
  if (previous > current){
    minimum = current;
  }
  return result + minimum;
};