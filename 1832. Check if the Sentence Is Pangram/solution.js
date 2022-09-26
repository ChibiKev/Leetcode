/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
  let mySet = new Set();
  for (let index = 0; index < sentence.length; index++){
    let letter = sentence[index];
    mySet.add(letter);
  }

  return mySet.size == 26;
};