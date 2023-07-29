/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  let total = 0;
  let numsLength = nums.length;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (numsLength % (index + 1) == 0){
      total += num * num;
    }
  }
  return total;
};