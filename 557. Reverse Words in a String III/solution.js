/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  let result = "";
  let word = "";
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (letter != " "){
      word = letter + word;
    }
    if (letter == " " || index == s.length - 1){
      result += word;
      if (index != s.length - 1){
        result += " ";
      }
      word = "";
    }
  }

  return result;
};