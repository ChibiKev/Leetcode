/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var findSubarrays = function(nums) {
  if (nums.length < 2){
    return false;
  }

  let mySet = new Set();
  for (let index = 0; index < nums.length - 1; index++){
    let num = nums[index];
    let nextNum = nums[index + 1];
    let total = num + nextNum;
    if (mySet.has(total)){
      return true;
    }
    else{
      mySet.add(total);
    }
  }

  return false;
};