/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
 var isPrefixString = function(s, words) {
  let currentStructure = "";
  for (let word of words){
    currentStructure += word;
    if (currentStructure === s){
      return true;
    }
    if (currentStructure.length > s.length){
      break;
    }
  }

  return false;
};
