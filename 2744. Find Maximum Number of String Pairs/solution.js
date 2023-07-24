/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  let mySet = new Set();
  let count = 0;

  for (let index = 0; index < words.length; index++){
    let word = words[index];
    if (mySet.has(word)){
      count += 1;
    }
    else{
      mySet.add(word.split("").reverse().join(""));
    }
  }

  return count;
};