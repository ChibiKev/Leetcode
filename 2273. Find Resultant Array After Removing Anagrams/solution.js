/**
 * @param {string[]} words
 * @return {string[]}
 */
 var removeAnagrams = function(words) {
  let newWords = [];
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    newWords.push(word.split('').sort().join(''));
  }

  let result = [words[0]];
  for (let index = 1; index < newWords.length; index++){
    let word = newWords[index];
    if (word != newWords[index - 1]){
      result.push(words[index]);
    }
  }
  
  return result;
};