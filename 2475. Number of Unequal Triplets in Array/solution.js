/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
  let dictionary = {}
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    dictionary[num] = (dictionary[num] || 0) + 1;
  }

  let result = 0;
  let left = 0;
  let right = nums.length;
  for (let num in dictionary){
    right -= dictionary[num];
    result += left * dictionary[num] * right;
    left += dictionary[num];
  }
  
  return result;
};