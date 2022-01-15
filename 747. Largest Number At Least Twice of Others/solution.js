/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
  let maxValue = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++){
    if (maxValue < nums[i]){
      maxValue = nums[i];
      maxIndex = i;
    }
  }
  
  for (let i = 0; i < nums.length; i++){
    if (maxValue < nums[i] * 2 && maxValue !== nums[i]){
      return -1;
    }
  }
  
  return maxIndex;
};