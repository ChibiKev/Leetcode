/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
  let words = text.split(" ");
  let result = [];
  let index = 0;

  while (index + 2 < words.length){
    if (words[index] == first){
      if (words[index + 1] == second){
        result.push(words[index + 2]);
        if (words[index + 1] == first && words[index + 2] == second){
          index += 0;
        }
        else if (words[index + 2] == first){
          index += 1;
        }
        else{
          index += 2;
        }
      }
    }
    index += 1;
  }

  return result;
};