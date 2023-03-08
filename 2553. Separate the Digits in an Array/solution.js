/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  let result = [];
  nums.reverse();
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    while (num != 0){
      let digit = num % 10;
      num = Math.floor(num / 10);
      result.push(digit);
    }
  }
  
  result.reverse();
  return result;
};