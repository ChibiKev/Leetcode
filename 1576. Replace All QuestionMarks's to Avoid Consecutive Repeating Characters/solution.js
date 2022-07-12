/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
  for (let index = 0; index < s.length; index++){
    if (s[index] == "?"){
      let word = "abc";
      for (let index2 = 0; index2 < word.length; index2++){
        let character = word[index2];
        if ((index == 0 || s[index - 1] != character) && (index + 1 == s.length || s[index + 1] != character)){
          s = s.slice(0, index) + character + s.slice(index + 1, s.length);
          break;
        }
      }
    }
  }
  return s;
};