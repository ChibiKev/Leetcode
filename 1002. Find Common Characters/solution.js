/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
  let result = [];
  for (let index in words){
    let currentSplit = words[index].split("");
    if (index == 0){
      result = currentSplit;
      console.log(result)
      continue;
    }

    if (result.length === 0){
      break;
    }
    
    let newResult = [];
    for (let letter of result){
      let indexOfLetter = currentSplit.indexOf(letter);
      if (indexOfLetter > -1) {
        newResult.push(letter);
        let newCurrentSplit = currentSplit.slice(0, indexOfLetter) + currentSplit.slice(indexOfLetter + 1, currentSplit.length);
        currentSplit = newCurrentSplit;
      }
    }
    result = newResult;
  }
  return result;
};