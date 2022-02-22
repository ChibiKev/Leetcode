/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  let total = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    total += num;
    total -= index;
  }
  total -= nums.length;
  return Math.abs(total);
};