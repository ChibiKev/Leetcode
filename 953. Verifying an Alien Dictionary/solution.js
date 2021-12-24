/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  for (let index = 0; index < words.length - 1; index++){
    let currentWord = words[index];
    let nextWord = words[index + 1];
    for (let wordIndex = 0; wordIndex < currentWord.length; wordIndex++){
      let currentWordLetter = currentWord[wordIndex];
      let currentWordValue = order.indexOf(currentWordLetter);
      let nextWordValue = -1;
      if (wordIndex < nextWord.length) {
        let nextWordLetter = nextWord[wordIndex];
        nextWordValue = order.indexOf(nextWordLetter);
      }
      if (currentWordValue < nextWordValue) {
        break;
      }
      else if (currentWordValue === nextWordValue) {
        continue;
      }
      else {
        return false;
      }
    }
  }

  return true;
          
};