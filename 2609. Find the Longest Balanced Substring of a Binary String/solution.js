/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
  let countZeros = 0;
  let countOnes = 0;
  let result = 0;
  for (let index = 0; index < s.length; index++){
    let character = s[index];
    if (character == '0'){
      if (countOnes > 0){
        countZeros = 1;
        countOnes = 0;
      }
      else{
        countZeros += 1;
      }
    }
    else if (character == '1'){
      countOnes += 1;
    }
    
    let lowest = countZeros;
    if (lowest > countOnes){
      lowest = countOnes;
    }
    if (result < 2 * lowest){
      result = 2 * lowest;
    }
  }
  
  return result;
};