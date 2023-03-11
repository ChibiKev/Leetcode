/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  let words = sentence.split(" ");
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    let lastLetter = word[word.length - 1];
    let firstLetter = words[(index + 1) % words.length][0];
    if (lastLetter != firstLetter){
      return false;
    }
  }
  
  return true;
};