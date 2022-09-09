/**
 * @param {string} word
 * @return {number}
 */
 var minTimeToType = function(word) {
  let result = word.length;
  let point = 'a';

  for (let index = 0; index < word.length; index++){
    let letter = word[index];
    let minimum = Math.abs((point.charCodeAt(0) - 97) - (letter.charCodeAt(0) - 97));
    if (26 - Math.abs((point.charCodeAt(0) - 97) - (letter.charCodeAt(0) - 97)) < minimum){
      minimum = 26 - Math.abs((point.charCodeAt(0) - 97) - (letter.charCodeAt(0) - 97));
    }
    result += minimum;
    point = letter;
  }

  return result;
};