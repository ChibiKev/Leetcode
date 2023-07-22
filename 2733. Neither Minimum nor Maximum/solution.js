/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
  let sortedNums = nums.sort(function(a, b){return a - b});
  if (sortedNums.length > 2){
    return sortedNums[1];
  }
  return -1;
};