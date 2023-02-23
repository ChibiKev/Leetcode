/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let dictionary = {};
  let count = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (dictionary[num] > 0){
      count += dictionary[num];
      dictionary[num] += 1;
    }
    else{
      dictionary[num] = 1;
    }
  }
  return count;
};