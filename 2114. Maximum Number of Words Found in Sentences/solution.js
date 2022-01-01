/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
  let max = 0;
  for (let sentence of sentences){
    let amountOfSpaces = sentence.split(" ").length;
    if (amountOfSpaces > max){
      max = amountOfSpaces;
    }
  }

  return max;
};