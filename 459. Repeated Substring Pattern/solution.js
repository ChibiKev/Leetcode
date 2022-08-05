/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
  let newS = s + s;
  return newS.slice(1, newS.length - 1).includes(s);
};