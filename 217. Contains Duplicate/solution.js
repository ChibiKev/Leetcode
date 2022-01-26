/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let newSet = new Set();
  for (let num of nums){
    if (newSet.has(num)){
      return true;
    }
    newSet.add(num);
  }
  return false;
};