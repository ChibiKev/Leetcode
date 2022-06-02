/**
 * @param {number[]} nums
 * @return {number}
 */
 var subsetXORSum = function(nums) {
  let bits = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    bits = bits | num;
  }

  let result = bits * Math.pow(2, nums.length - 1);
  return result;
};