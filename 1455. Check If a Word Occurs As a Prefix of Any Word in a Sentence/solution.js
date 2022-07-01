/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
  let word = 1;
  let search = 0;
  let jump = false;

  for (let index = 0; index < sentence.length; index++){
    let letter = sentence[index];
    if (jump && letter != " "){
      continue;
    }
    else if (letter == " "){
      jump = false;
      search = 0;
      word += 1;
      continue;
    }
    if (letter == searchWord[search]){
      search += 1;
    }
    else{
      jump = true;
      search = 0;
    }
    if (search == searchWord.length){
      return word;
    }
  }

  return -1;
};