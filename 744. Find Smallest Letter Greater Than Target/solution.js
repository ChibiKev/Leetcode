/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
  if (target >= letters[letters.length - 1]){
    return letters[0];
  }

  for (let letter of letters){
    if (target < letter){
      return letter;
    }
  }
};