/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
  let count = 1;
  let answer = 1;
  for (let index = 1; index < s.length; index++){
    if (s[index] == s[index - 1]){
      count += 1;
      if (count > answer){
        answer = count;
      }
    }
    else{
      count = 1;
    }
  }

  return answer;
};