/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
  let sList = s.split(" ");
  let result = new Array(sList.length).fill("");

  for (let index = 0; index < sList.length; index++){
    let word = sList[index];
    let index2 = word[word.length - 1] - +1;
    result[index2] = word.slice(0, word.length - 1);
  }

  return result.join(" ");
};