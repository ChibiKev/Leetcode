/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
  let letterSet = new Set(brokenLetters);
  let count = 0;
  let word = false;
  for (let index = 0; index < text.length; index++){
    let letter = text[index];
    if (word && letter != " "){
      continue;
    }
    if (letterSet.has(letter)){
      word = true;
    }
    if (letter == " " || index == text.length - 1){
      if (word == false){
        count += 1;
      }
      word = false;
    }
  }

  return count;
};