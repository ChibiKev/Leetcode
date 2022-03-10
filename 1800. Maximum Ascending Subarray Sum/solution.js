/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
  let maxValue = 0;
  let currentValue = 0;
  let lastValue = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (currentValue > maxValue){
      maxValue = currentValue;
    }
    if (num <= lastValue){
      currentValue = 0;
    }
    currentValue += num;
    lastValue = num;
  }
  if (currentValue > maxValue){
    maxValue = currentValue;
  }
  return maxValue;
};