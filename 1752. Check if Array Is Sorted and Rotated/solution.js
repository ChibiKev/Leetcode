/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var check = function(nums) {
  let found = 0;
  for (let index = 0; index < nums.length; index++){
    if (nums[index] > nums[(index + 1) % nums.length]){
      found += 1;
    }
    if (found > 1){
      return false;
    }
  }
  
  return true;
};