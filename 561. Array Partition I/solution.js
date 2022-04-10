/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
  nums.sort(function(a, b){return a-b});
  let total = 0;

  for (let index = 0; index < nums.length; index += 2){
    total += nums[index];
  }

  return total;
};