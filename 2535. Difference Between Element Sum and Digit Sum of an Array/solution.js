/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let elementSum = 0;
  let digitSum = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    elementSum += num;
    while (num != 0){
      let digit = num % 10;
      num = Math.floor(num / 10);
      digitSum += digit;
    }
  }
  return Math.abs(elementSum - digitSum);
};