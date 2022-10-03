/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
  for (let index = 0; index < word.length; index++){
    let letter = word[index];
    if (letter == ch){
      return word.slice(0, index + 1).split("").reverse().join("") + word.slice(index + 1);      
    }
  }

  return word;
};