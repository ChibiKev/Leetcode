/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let result = [];
  for (let index = 0; index < n; index++){
    result.push(nums[index]);
    result.push(nums[n + index]);
  }
  
  return result;
};