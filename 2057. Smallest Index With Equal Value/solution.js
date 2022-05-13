/**
 * @param {number[]} nums
 * @return {number}
 */
 var smallestEqual = function(nums) {
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (index % 10 === num){
      return index;
    }
  }
  return -1;
};