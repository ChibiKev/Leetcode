/**
 * @param {number[]} nums
 * @return {number}
 */
 var findClosestNumber = function(nums) {
  let result = nums[0];
  for (let index = 1; index < nums.length; index++){
    let num = nums[index];
    if (Math.abs(num) < Math.abs(result)){
      result = num;
    }
    else if (Math.abs(num) === Math.abs(result)){
      if (num > result){
        result = num;
      }
    }
  }
  return result;
};