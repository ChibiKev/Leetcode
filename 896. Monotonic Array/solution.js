/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
  let increase = false;
  let decrease = false;

  for (let index = 0; index < nums.length - 1; index++){
    if (nums[index] < nums[index + 1]){
      increase = true;
    }
    if (nums[index] > nums[index + 1]){
      decrease = true;
    }
  }

  if (increase && decrease){
    return false;
  }
  return true;
};