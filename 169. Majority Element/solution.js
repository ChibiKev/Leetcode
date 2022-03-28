/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let majority = nums[0];
  let count = 1;
  for (let index = 1; index < nums.length; index++){
    let num = nums[index];
    if (count === 0){
      majority = num;
      count += 1;
    }
    else if (majority === num){
      count += 1;
    }
    else{
      count -= 1;
    }
  }

  return majority;
};