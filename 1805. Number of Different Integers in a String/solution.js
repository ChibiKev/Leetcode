/**
 * @param {string} word
 * @return {number}
 */
 var numDifferentIntegers = function(word) {
  let setOfNumbers = new Set();

  for (let index = 0; index < word.length; index++){
    if (!isNaN(word[index])) {
      let number = "";
      while (word[index] == '0'){
        index += 1;          
      }
      while (!isNaN(word[index])){
        number += word[index];
        index += 1;
      }
      setOfNumbers.add(number);
    }
  }

  return setOfNumbers.size;
};