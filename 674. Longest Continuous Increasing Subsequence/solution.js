/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
  let maxSub = 0;
  let counter = 1;
  for (let index = 1; index < nums.length; index++){
    let prevNum = nums[index - 1];
    let num = nums[index];
    if (prevNum >= num){
      maxSub = Math.max(maxSub, counter);
      counter = 1;
    }
    else{
      counter += 1;
    }
  }

  return Math.max(maxSub, counter);
};