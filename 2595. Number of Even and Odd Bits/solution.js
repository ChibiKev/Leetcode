/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
  let even = 0;
  let odd = 0;
  for (let index = 0; index < 32; index++){
    if (n & (1 << index)){
      if (index % 2 == 0){
        even += 1;
      }
      else{
        odd += 1;
      }
    }
  }
  return [even, odd];
};