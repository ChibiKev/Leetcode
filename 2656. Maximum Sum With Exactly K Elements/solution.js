/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let maximum = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (maximum < num){
      maximum = num;
    }
  }
  
  let total = 0;
  for (let index = 0; index < k; index++){
    total += maximum + index;
  }
  return total;
};