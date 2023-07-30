/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
  let dictionary = {};
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    dictionary[num] = (dictionary[num] || 0) + 1;
  }
    
  let n = nums.length - 1;
  if (dictionary[n] == undefined || dictionary[n] != 2){
    return false;
  }
  
  for (let num in dictionary){
    if (num == n){
      continue;
    }
    if (dictionary[num] > 1 || num > n){
      return false;
    }
  }
  return true;
};