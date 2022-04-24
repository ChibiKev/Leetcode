/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {
  let found = false;
  let last = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (last < num){
      last = num;
    }
    else{
      if (found){
        return false;
      }
      if (index === 1 || nums[index - 2] < num){
        last = num;
      }
      found = true;
    }
  }

  return true;
};