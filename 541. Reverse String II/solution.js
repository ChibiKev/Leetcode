/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
  let result = "";
  let reversed = true;
  let start = 0;
  let end = k;
  while (start < s.length){
    if (reversed){
      result += s.slice(start, end).split("").reverse().join("");
    }
    else{
      result += s.slice(start, end);
    }
    reversed = !reversed;
    start += k;
    end += k;
  }

  return result;
};