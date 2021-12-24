/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
  let firstRow = new Set("qwertyuiop");
  let secondRow = new Set("asdfghjkl");
  let thirdRow = new Set("zxcvbnm");
  
  let output = [];
  
  for (let word of words){
    let loweredWord = word.toLowerCase();

    let firstRowMixed = new Set([...firstRow, ...loweredWord]);
    let secondRowMixed = new Set([...secondRow, ...loweredWord]);
    let thirdRowMixed = new Set([...thirdRow, ...loweredWord]);

    let checkFirstRow = firstRowMixed.size === firstRow.size;
    let checkSecondRow = secondRowMixed.size === secondRow.size;
    let checkThirdRow = thirdRowMixed.size === thirdRow.size;
    if (checkFirstRow || checkSecondRow || checkThirdRow){
      output.push(word);
    }
  }

  return output;
};