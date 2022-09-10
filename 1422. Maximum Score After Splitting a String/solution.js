/**
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
  let ones = 0;
  for (let index = 0; index < s.length; index++){
    let number = s[index];
    if (number == '1'){
      ones += 1;
    }
  }

  let maxValue = 0;
  let zeros = 0;
  for (let index = 0; index < s.length - 1; index++){
    let number = s[index];
    if (number == '0'){
      zeros += 1;
    }
    else if (number == '1'){
      ones -= 1;
    }
    if (maxValue < zeros + ones){
      maxValue = zeros + ones;
    }
  }

  return maxValue;
};