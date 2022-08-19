/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end){
    if (s[start] != s[end]){
      let firstCheck = s.slice(start, end);
      let secondCheck = s.slice(start + 1, end + 1);
      return firstCheck == firstCheck.split("").reverse().join("") || secondCheck == secondCheck.split("").reverse().join("");
    }
    start += 1;
    end -= 1;
  }

  return true;
};