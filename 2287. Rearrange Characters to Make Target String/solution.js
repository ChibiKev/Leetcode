/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
 var rearrangeCharacters = function(s, target) {
  if (target.length > s.length){
    return 0;
  }

  let sDictionary = {};
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    sDictionary[letter] = (sDictionary[letter] || 0) + 1;
  }
  
  let targetDictionary = {};
  for (let index = 0; index < target.length; index++){
    let letter = target[index];
    targetDictionary[letter] = (targetDictionary[letter] || 0) + 1;
  }

  let result = Infinity;
  for (let letter in targetDictionary){
    if (sDictionary[letter] != undefined){
      result = Math.min(result, Math.floor(sDictionary[letter] / targetDictionary[letter]));
    }
    else{
      return 0;      
    }
  }

  return result;
};