/**
 * @param {number[]} nums
 * @return {number}
 */
 var distinctAverages = function(nums) {
  nums.sort(function(a, b){return a-b});
  let averages = new Set();
  for (let index = 0; index < nums.length / 2; index++){
    averages.add((nums[index] + nums[nums.length - index - 1]) / 2);
  }
  
  return averages.size;
};