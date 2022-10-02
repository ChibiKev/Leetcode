/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var checkAlmostEquivalent = function(word1, word2) {
  let dictionary = {};
  for (let letter of word1){
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }

  for (let letter of word2){
    dictionary[letter] = (dictionary[letter] || 0) - 1;
  }

  for (let letter in dictionary){
    if (Math.abs(dictionary[letter]) > 3){
      return false;
    }
  }

  return true;
};