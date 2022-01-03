/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
  let result = [];
  let left = 0;
  let right = s.length;

  for (let letter of s){
    if (letter === 'I'){
      result.push(left);
      left += 1;
    }
    else if (letter == 'D'){
      result.push(right);
      right -= 1;
    }
  }

  result.push(left);

  return result;
};