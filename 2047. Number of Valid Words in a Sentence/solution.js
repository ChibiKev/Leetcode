/**
 * @param {string} sentence
 * @return {number}
 */
 var countValidWords = function(sentence) {
  let pattern = /^(([a-z]?)|([a-z]+\-?[a-z]+))[!.,]?$/;

  let count = 0;
  
  let words = sentence.trim().split(/\s+/);
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    if (word.match(pattern)){
      count += 1;
    }
  }

  return count
};