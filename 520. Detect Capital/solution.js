/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
  if (word.toUpperCase() == word){
    return true;
  }
  else if (word.toLowerCase() == word){
    return true;
  }
  let newWord = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  if (newWord == word){
    return true;
  }
  else{
    return false;
  }
};