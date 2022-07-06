/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length != t.length){
    return false;    
  }

  let dictionary = {};
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }
  
  for (let index = 0; index < t.length; index++){
    let letter = t[index];
    if (dictionary[letter] == undefined){
      return false;
    }
    else{
      if (dictionary[letter] > 0){
        dictionary[letter] -= 1;        
      }
      else{
        return false;        
      }
    }
  }

  return true;
};