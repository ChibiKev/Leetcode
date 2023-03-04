/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  let pos = 0;
  let neg = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num > 0){
      pos += 1;
    }
    else if (num < 0){
      neg += 1;
    }
  }
  
  let result = pos;
  if (neg > result){
    result = neg;
  }
  return result;
};