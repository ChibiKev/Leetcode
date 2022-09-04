/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
  let result = "";
  let index = s.length - 1;
  while (index > -1){
    if (s[index] == '#'){
      let letter = String.fromCharCode(96 + +s.slice(index - 2, index));
      result += letter;
      index -= 2;
    }
    else{
      let letter = String.fromCharCode(96 + +s[index]);
      result += letter;
    }
    index -= 1;
  }
  
  return result.split("").reverse().join("");
};