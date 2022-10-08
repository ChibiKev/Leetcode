/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {
  let result = [];
  let word = "";
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    word += letter;
    if (word.length == k){
      result.push(word);
      word = "";
    }
  }

  if (word.length != 0){
    for (let index = word.length; index < k; index++){
      word += fill;
      if (word.length == k){
        result.push(word);
      }
    }
  }

  return result;
};