/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let word = s.replace(/[^0-9a-zA-Z]/g, "");
  word = word.toLowerCase();
  for (let index = 0; index < word.length / 2; index++){
    let startLetter = word[index];
    let endLetter = word[word.length - index - 1];
    if (startLetter != endLetter){
      return false;
    }
  }

  return true;
};