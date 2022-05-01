/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
  let count = 0;
  for (let num of nums){
    if ((num > 9 && num < 100) || (num > 999 && num < 10000) || num === 100000){
      count += 1;
    }
  }

  return count;
};