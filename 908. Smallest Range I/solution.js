/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestRangeI = function(nums, k) {
  let maximum = -Infinity;
  let minimum = Infinity;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num < minimum){
      minimum = num;
    }
    if (num > maximum){
      maximum = num;
    }
  }

  if (maximum - minimum > k * 2){
    return maximum - minimum - k * 2;
  }
  return 0;
};