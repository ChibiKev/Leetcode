/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
  let result = new Array(nums.length).fill(0);
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    result[index] = nums[num];
  }

  return result;
};