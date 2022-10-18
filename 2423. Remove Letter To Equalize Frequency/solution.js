/**
 * @param {string} word
 * @return {boolean}
 */
 var equalFrequency = function(word) {
  let letters = new Array(26).fill(0);
  for (let index = 0; index < word.length; index++){
    let letter = word[index];
    letters[letter.charCodeAt(0) - 97] += 1;
  }
  
  for (let index = 0; index < word.length; index++){
    let letter = word[index];
    letters[letter.charCodeAt(0) - 97] -= 1;
    let amount = 0;
    let missing = true;
    for (let index2 = 0; index2 < letters.length; index2++){
      let value = letters[index2];
      if (value == 0){
        continue;
      }
      else if (amount == 0){
        amount = value;
      }
      else if (amount == value){
        continue;
      }
      else{
        missing = false;
        break;
      }
    }
    if (missing){
      return true;
    }
    letters[letter.charCodeAt(0) - 97] += 1;
  }

  return false;
};