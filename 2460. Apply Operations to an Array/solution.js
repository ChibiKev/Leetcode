/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
  for (let index = 0; index < nums.length - 1; index++){
    let currentNum = nums[index];
    let nextNum = nums[index + 1];
    if (currentNum == nextNum){
      nums[index] = currentNum * 2;
      nums[index + 1] = 0;
    }
  }
  
  let result = new Array(nums.length).fill(0);
  let currentIndex = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num != 0){
      result[currentIndex] = num;
      currentIndex += 1;
    }
  }
  return result;
};