/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
  let left = 0;
  let total = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    total += num;
  }
  
  let answer = [];
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    total -= num;
    let resultingSum = Math.abs(left - total);
    answer.push(resultingSum);
    left += num;
  }
  
  return answer;
};