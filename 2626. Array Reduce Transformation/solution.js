/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let val = init;
  for (let index = 0; index < nums.length; index++){
    val = fn(val, nums[index]);
  }
  return val;
};