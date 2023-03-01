/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
  let dictionary = {};
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    let wordsSet = new Set(word);
    let wordSorted = [...wordsSet].sort().join('');
    dictionary[wordSorted] = (dictionary[wordSorted] || 0) + 1;
  }

  let result = 0;
  for (let word in dictionary){
    let count = dictionary[word];
    result += Math.floor((count * (count - 1)) / 2);
  }
  return result;
};