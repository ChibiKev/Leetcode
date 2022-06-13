/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = function(words, pref) {
  let count = 0;
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    let prefix = word.slice(0, pref.length);
    if (prefix === pref){
      count += 1;
    }
  }

  return count;
};