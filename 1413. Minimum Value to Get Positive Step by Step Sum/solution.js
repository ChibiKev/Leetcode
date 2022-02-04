/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
  let start = 1;
  let total = start;
  for (let num of nums){
    total += num;
    if (total < 1){
      missing = 1 - total;
      start += missing;
      total += missing;
    }
  }

  return start;
};