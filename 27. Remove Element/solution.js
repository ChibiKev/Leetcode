/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  nums.sort();
  let count = 0;
  for (let index = 0; index < nums.length; index++){
    if (nums[index] != val){
      nums[count] = nums[index];
      count += 1;
    }
  }
  return count;
};