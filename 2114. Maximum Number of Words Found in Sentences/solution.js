/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
  let max = 0;
  for (let sentence of sentences){
    let amountOfWords = sentence.split(" ").length;
    if (amountOfWords > max){
      max = amountOfWords;
    }
  }

  return max;
};