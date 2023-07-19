/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
  let mySet = new Set(s);
  return mySet.size;
};