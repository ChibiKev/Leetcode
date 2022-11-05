/**
 * @param {number[]} nums
 * @return {number}
 */
 var averageValue = function(nums) {
  let count = 0;
  let total = 0;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num % 2 == 0 && num % 3 == 0){
      count += 1;
      total += num;
    }
  }
  
  if (count == 0){
    return 0;
  }

  return Math.floor(total / count);
};