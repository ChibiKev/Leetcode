/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
  let mySet = new Set();
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (mySet.has(letter)){
      return letter;
    }
    else{
      mySet.add(letter);
    }
  }
};