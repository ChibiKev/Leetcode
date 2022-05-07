/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var minimumDifference = function(nums, k) {
  nums.sort(function(a, b){return a-b});
  let result = nums[k - 1] - nums[0];
  for (let index = k; index < nums.length; index++){
    if (nums[index] - nums[index - k + 1] < result){
      result = nums[index] - nums[index - k + 1];
    }
  }
  return result;
};