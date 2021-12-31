/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
  let result = new Set();
  let result2 = new Set();
  let banned = new Set();

  for (let word of words1){
    if (!result.has(word) && !banned.has(word)) {
      result.add(word);
    }
    else if (result.has(word)){
      result.delete(word);
      banned.add(word);
    }
  }
  
  banned.clear();
  
  for (let word of words2){
    if (!result2.has(word) && !banned.has(word)) {
      result2.add(word);
    }
    else if (result2.has(word)){
      result2.delete(word);
      banned.add(word);
    }
  }
  
  result = new Set([...result].filter(x => result2.has(x)));
  return result.size;
};