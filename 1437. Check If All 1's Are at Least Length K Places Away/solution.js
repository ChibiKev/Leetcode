/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var kLengthApart = function(nums, k) {
  let count = k;
  for (let num of nums){
    if (num === 1){
      if (count < k){
        return false;
      }
      count = 0;
    }
    else if (num === 0){
      count += 1;
    }
  }
  return true;
};