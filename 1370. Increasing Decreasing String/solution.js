/**
 * @param {string} s
 * @return {string}
 */
 var sortString = function(s) {
  let dictionary = {};
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }

  let result = "";
  let keys = Object.keys(dictionary);
  keys.sort();
  
  while (result.length != s.length){
    for(let index = 0; index < keys.length; index++){
      let letter = keys[index];
      if (dictionary[letter] > 0){
        result += letter;
        dictionary[letter] -= 1;
      }
    }
    
    for(let index = keys.length - 1; index > -1; index--){
      let letter = keys[index];
      if (dictionary[letter] > 0){
        result += letter;
        dictionary[letter] -= 1;
      }
    }
  }

  return result;
};