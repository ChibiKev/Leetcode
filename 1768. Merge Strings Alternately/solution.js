/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
  let result = "";
  let word1Index = 0;
  let word2Index = 0;
  while (word1Index < word1.length || word2Index < word2.length){
    if (word1Index < word1.length){
      result += word1[word1Index];
    }
    if (word2Index < word2.length){
      result += word2[word2Index];
    }
    word1Index += 1;
    word2Index += 1;
  }

  return result;
};