/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
  let occurances = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] === c) {
      occurances.push(index);
    }
  }

  let left = 0;
  let right = 0;
  let output = [];
  for (let index = 0; index < s.length; index++){
    if (index > occurances[right]) {
      left = right;
      if (right < occurances.length - 1) {
        right += 1;
      }
    }
    let distanceFromLeft = Math.abs(index - occurances[left]);
    let distanceFromRight = Math.abs(index - occurances[right]);
    let distance = Math.min(distanceFromLeft, distanceFromRight);
    output.push(distance);
  }

  return output;
};