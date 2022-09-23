/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
  if (s.length < 2){
    return "";    
  }

  let mySet = new Set(s);

  for (let index = 0; index < s.length; index++){
    if (!mySet.has(s[index].toLowerCase()) || !mySet.has(s[index].toUpperCase())){
      let s1 = longestNiceSubstring(s.slice(0, index));
      let s2 = longestNiceSubstring(s.slice(index + 1, s.length));
      if (s2.length > s1.length){
        return s2;
      }
      else{
        return s1;
      }
    }
  }

  return s;
};