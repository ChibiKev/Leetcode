/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
  let firstAddition = "";
  for (let index = 0; index < firstWord.length; index++){
    let letter = firstWord[index];
    firstAddition += (letter.charCodeAt(0) - 97).toString();
  }
  
  let secondAddition = "";
  for (let index = 0; index < secondWord.length; index++){
    let letter = secondWord[index];
    secondAddition += (letter.charCodeAt(0) - 97).toString();
  }

  let targetAddition = "";
  for (let index = 0; index < targetWord.length; index++){
    let letter = targetWord[index];
    targetAddition += (letter.charCodeAt(0) - 97).toString();
  }

  return parseInt(firstAddition) + parseInt(secondAddition) == parseInt(targetAddition);
};