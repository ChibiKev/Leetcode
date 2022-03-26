/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let total = nums[0];
  let maxValue = nums[0];

  for (let index = 1; index < nums.length; index++){
    let num = nums[index];
    let newAddition = 0;
    if (total > 0){
      newAddition = total;
    }
    total = num + newAddition
    if (total > maxValue){
      maxValue = total;
    }
  }
  
  return maxValue;
};