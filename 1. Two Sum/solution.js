/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let dictionary = {};
  for (let index = 0; index < nums.length; index++){
    let value = nums[index];
    let search = target - value;
    if (dictionary[search] !== undefined) {
      return [dictionary[search], index];
    }
    else {
      dictionary[value] = index;
    }
  }
};