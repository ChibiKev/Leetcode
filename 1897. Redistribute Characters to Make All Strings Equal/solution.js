/**
 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
  let dictionary = {};
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    for (let index2 = 0; index2 < word.length; index2++){
      let letter = word[index2];
      dictionary[letter] = (dictionary[letter] || 0) + 1;
    }
  }

  for (let letter in dictionary){
    if (dictionary[letter] % words.length != 0){
      return false;
    }
  }

  return true;
};