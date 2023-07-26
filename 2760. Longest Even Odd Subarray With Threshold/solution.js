/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
  let result = 0;
  let last = Infinity;

  let index = 0;
  while (index < nums.length){
    if (nums[index] > threshold || (index > 0 && nums[index] % 2 == nums[index - 1] % 2)){
      if (result < index - last){
        result = index - last;
      }
      last = Infinity;
    }
    if (last == Infinity && nums[index] <= threshold && nums[index] % 2 == 0){
      last = index;
    }
    index += 1;
  }
  
  if (result < index - last){
    result = index - last;
  }

  return result;
};