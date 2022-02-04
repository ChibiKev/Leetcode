/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
  let maxSum = 0;
  for (let index = 0; index < k; index++){
    maxSum += nums[index];
  }
    
  let totalSum = maxSum;
  for (let index = k; index < nums.length; index++){
    totalSum += nums[index] - nums[index - k];
    if (totalSum > maxSum){
      maxSum = totalSum;
    }
  }
  
  return maxSum / k;
};