/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
  const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  
  let result = new Set();
  
  for (let word of words){
    code = "";
    for (let letter of word){
      let value = letter.charCodeAt(0) - 97;
      code += morseCode[value];
    }
    result.add(code);
  }
  
  return result.size;
};