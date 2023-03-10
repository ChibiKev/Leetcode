/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
  let result = 0;
  for (let index = 0; index < Math.floor(nums.length / 2); index++){
    let concat = nums[index].toString() + nums[nums.length - 1 - index].toString();
    result += parseInt(concat);
  }
  
  if (nums.length % 2 == 1){
    result += nums[Math.floor(nums.length / 2)];
  }
  
  return result;
};