/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let dictionary = {};
  for (let letter of s){
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }

  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (dictionary[letter] == 1){
      return index;
    }
  }

  return -1;
};