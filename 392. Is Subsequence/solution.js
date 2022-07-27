/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let sIndex = 0;

  for (let index = 0; index < t.length; index++){
    let letter = t[index];
    if (sIndex == s.length){
      return true;
    }
    if (s[sIndex] == letter){
      sIndex += 1;
    }
  }
  
  return sIndex == s.length;
};