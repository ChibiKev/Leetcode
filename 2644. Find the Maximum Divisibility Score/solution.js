/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
  let divisibilityValue = divisors[0];
  let maxCount = 0;
  for (let index = 0; index < divisors.length; index++){
    let divisor = divisors[index];
    let count = 0;
    for (let index2 = 0; index2 < nums.length; index2++){
      let num = nums[index2];
      if (num % divisor == 0){
        count += 1;
      }
    }
    if (count > maxCount){
      divisibilityValue = divisor;
      maxCount = count;
    }
    else if (count == maxCount && divisor < divisibilityValue){
      divisibilityValue = divisor;
    }
  }
  return divisibilityValue;
};