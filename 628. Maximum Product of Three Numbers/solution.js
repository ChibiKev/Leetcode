/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
  nums.sort(function(a,b){return a - b});
  let firstResult = nums[0] * nums[1] * nums[nums.length - 1];
  let secondResult = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  if (firstResult > secondResult){
    return firstResult;
  }
  return secondResult;
};