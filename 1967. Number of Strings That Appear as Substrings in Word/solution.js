/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
  let count = 0;
  for (let index = 0; index < patterns.length; index++){
    let pattern = patterns[index];
    if (word.includes(pattern)){
      count += 1;
    }
  }

  return count;
};