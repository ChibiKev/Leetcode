/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
  nums.sort(function(a, b){return b-a});
  let index = 0;
  while (index < nums.length && index < nums[index]){
    index += 1;
  }
  if (index < nums.length){
    if (index === nums[index]){
      return -1;
    }
  }
  return index;
};