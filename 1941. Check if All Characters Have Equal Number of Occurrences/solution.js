/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
  let dictionary = {};
  for (let letter of s){
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }

  let amount = dictionary[s[0]];
  for (let letter in dictionary){
    if (dictionary[letter] != amount){
      return false;
    }
  }

  return true;
};