/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
  let different = [];
  for (let index = 0; index < s1.length; index++){
    if (s1[index] != s2[index]){
      different.push(index);
    }
    if (different.length > 2){
      return false;
    }
  }
  return different.length == 0 || (different.length == 2 && s1[different[0]] == s2[different[1]] && s1[different[1]] == s2[different[0]]);
};