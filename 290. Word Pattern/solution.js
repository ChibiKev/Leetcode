/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  let sList = s.split(" ");
  if (sList.length != pattern.length){
    return false;    
  }

  let patternDictionary = {};
  let wordDictionary = {};

  for (let index = 0; index < sList.length; index++){
    let word = sList[index];
    let letter = pattern[index];
    if (patternDictionary[letter] != undefined){
      if (patternDictionary[letter] != word){
        return false;
      }
    }
    else{
      if (wordDictionary[word] != undefined){
        if (wordDictionary[word] != letter){
          return false;
        }
      }
      patternDictionary[letter] = word;
      wordDictionary[word] = letter;
    }
  }

  return true;
};