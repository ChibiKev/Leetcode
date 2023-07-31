/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
  let result = [];
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    let splitWord = word.split(separator);
    for (let index2 = 0; index2 < splitWord.length; index2++){
      let split = splitWord[index2];
      if (split.length != 0){
        result.push(split);
      }
    }
  }
  return result;
};