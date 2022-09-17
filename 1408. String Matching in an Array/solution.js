/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
  words.sort(function(a, b){return a.length - b.length});
  let result = [];
  for (let index = 0; index < words.length; index++){
    for (let index2 = index + 1; index2 < words.length; index2++){
      if(words[index2].includes(words[index])){
        result.push(words[index]);
        break;
      }
    }
  }

  return result;
};