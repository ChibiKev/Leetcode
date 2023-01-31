/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let unique = 1;
  for (let index = 1; index < nums.length; index++){
    if (nums[index] != nums[index - 1]){
        nums[unique] = nums[index];
        unique += 1;
    }
  }
  return unique;
};