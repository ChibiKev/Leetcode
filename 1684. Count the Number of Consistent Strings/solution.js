/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
  let allowedWords = new Set(allowed);

  let count = words.length;

  for (let word of words){
    for (let letter of word){
      if (!allowedWords.has(letter)){
        count -= 1;
        break;
      }
    }
  }

  return count;
};