/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
  let bannedSet = new Set(banned);
  let dictionary = {};
  let word = "";

  for (let index = 0; index < paragraph.length; index++){
    let letter = paragraph[index];
    if (letter != "!" && letter != "?" && letter != "'" && letter != "," && letter != ";" && letter != "." && letter != " "){
      word += letter;
    }
    if (letter == "!" || letter == "?" || letter == "'" || letter == "," || letter == ";" || letter == "." || letter == " "  || index == paragraph.length - 1){
      if (word == ""){
        continue;
      }
      word = word.toLowerCase();
      if (!bannedSet.has(word)){
        dictionary[word] = (dictionary[word] || 0) + 1;
      }
      word = "";
    }
  }

  let maxKey = "";
  let maxValue = 0;

  for (let key in dictionary){
    if (dictionary[key] > maxValue){
      maxKey = key;
      maxValue = dictionary[key];
    }
  }
  
  return maxKey;
};