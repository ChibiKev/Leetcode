/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
  let prefix = new Set();
  let suffix = {};
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    suffix[num] = (suffix[num] || 0) + 1;
  }
  
  let result = [];

  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    prefix.add(num);
    
    suffix[num] -= 1;
    if (suffix[num] == 0){
      delete suffix[num];
    }
    
    result.push(prefix.size - Object.keys(suffix).length);
  }

  return result;
};