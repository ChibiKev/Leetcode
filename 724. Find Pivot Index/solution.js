/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
  let leftSum = 0;
  let rightSum = 0;
  for (let num of nums){
    rightSum += num;
  }

  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    rightSum -= num;
    if (leftSum === rightSum){
      return index;
    }
    leftSum += num;
  }

  return -1;
};