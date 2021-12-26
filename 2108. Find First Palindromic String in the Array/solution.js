/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
  let result = "";
  for (let word of words){
    let lengthOfWord = word.length;
    let found = false;
    for (let i = 0; i < lengthOfWord/2; i++){
      if(word[i] === word[lengthOfWord - i - 1]){
        found = true;
      }
      else{
        found = false;
        break;
      }
    }
    if(found === true){
      result = word;
      break;
    }
  }
  return result;
};