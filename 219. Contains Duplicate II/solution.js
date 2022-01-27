/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
  let myDict = {};
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (myDict[num] !== undefined){
      let value = myDict[num];
      if (Math.abs(value - index) <= k){
        return true;
      }
    }
    myDict[num] = index;
  }
  
  return false;
};