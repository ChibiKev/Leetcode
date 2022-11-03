/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxK = function(nums) {
  let mySet = new Set(nums);
  let maxValue = -1;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num > maxValue && mySet.has(-num)){
      maxValue = num;
    }
  }

  return maxValue;
};