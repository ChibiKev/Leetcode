/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
  if (s.length < 3){
    return 0;
  }
  
  let count = 0;
  let letters = s.slice(0, 2);
  for (let index = 2; index < s.length; index++){
    letters += s[index];
    if (letters[0] != letters[1] && letters[1] != letters[2] && letters[2] != letters[0]){
      count += 1;
    }
    letters = letters.slice(1);
  }

  return count;
};