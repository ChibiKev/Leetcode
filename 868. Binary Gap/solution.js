/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  let lastOne = 32;
  let result = 0;
  for (let index = 0; index < 32; index++){
    if (n & (1 << index)){
      if (index - lastOne > result){
        result = index - lastOne;
      }
      lastOne = index;
    }
  }
  return result;
};