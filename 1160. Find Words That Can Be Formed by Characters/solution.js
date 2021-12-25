/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
  let result = 0
  let charDictionary = {};
  for (let char of chars){
    charDictionary[char] = (charDictionary[char] || 0) + 1;
  }

  for (let word of words){
    let charSub = {...charDictionary};
    counter = 0;
    for (let character of word){
      if (charSub[character] > 0){
        counter++;
        charSub[character]--;
      }
      else{
        counter = 0;
        break;
      }
    }
    result += counter;
  }
  
  return result;

};