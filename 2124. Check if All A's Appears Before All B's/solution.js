/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
  let sortedS = s.split('').sort().join('');
  return sortedS == s;
};