/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (let index = left; index < right + 1; index++){
    let word = words[index];
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])){
      count += 1;
    }
  }
  return count;
};