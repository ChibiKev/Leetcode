/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
  let indexOne = 0;
  let indexN = nums.length - 1;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num == 1){
      indexOne = index;
    }
    if (num == nums.length){
      indexN = index;
    }
  }
  
  let total = (indexOne - 0) + (nums.length - 1 - indexN);
  if (indexN < indexOne){
    total -= 1;
  }
  return total;
};