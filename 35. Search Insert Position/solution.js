/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = low + Math.floor((high - low) / 2);
  while (low <= high){
    mid = low + Math.floor((high - low) / 2);
    let value = nums[mid];
    if (value == target){
      return mid;
    }
    else if (value < target){
      low = mid + 1;
    }
    else if (value > target){
      high = mid - 1;
    }
  }
  if (nums[mid] < target){
    return mid + 1;
  }
  return mid;
};