/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let left = 0;

  while (left < (s.length / 2)){
    let temp = s[left];
    s[left] = s[s.length - 1 - left];
    s[s.length - 1 - left] = temp;
    left += 1;
  }

  return s;
};