/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
  let total = 0;
  let last = 0;
  for (let num of nums){
    if (num <= last){
      total += (last - num) + 1;
      num = last + 1;
    }
    last = num;
  }
  return total;
};