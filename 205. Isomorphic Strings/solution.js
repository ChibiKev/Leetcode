/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  let sDictionary = {};
  let tDictionary = {};

  for (let index = 0; index < s.length; index++){
    let sLetter = s[index];
    let tLetter = t[index];
    if (sDictionary[sLetter]){
      if (sDictionary[sLetter] != tLetter){
        return false;        
      }
    }
    else{
      sDictionary[sLetter] = tLetter;
    }
    if (tDictionary[tLetter]){
      if (tDictionary[tLetter] != sLetter){
        return false;        
      }
    }
    else{
      tDictionary[tLetter] = sLetter;      
    }
  }

  return true;
};