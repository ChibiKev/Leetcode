/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let runningSum = [nums[0]];
  for (let index = 1; index < nums.length; index++){
    let num = nums[index];
    runningSum.push(runningSum[runningSum.length - 1] + num);
  }
  return runningSum;
};