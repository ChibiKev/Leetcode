/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
  let result = -1;
  let current = Infinity;

  let last = 0;
  let index = 1;
  while (index < nums.length){
    let difference = nums[index] - nums[index - 1];
    if (difference == current * -1){
      current *= -1;
      if (index - last + 1 > result){
        result = index - last + 1;
      }
    }
    else if (difference == 1){
      current = difference;
      last = index - 1;
      if (index - last + 1 > result){
        result = index - last + 1;
      }
    }
    else{
      current = Infinity;
    }
    index += 1;
  }

  return result;
};