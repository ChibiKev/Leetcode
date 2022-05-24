/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
 var findKDistantIndices = function(nums, key, k) {
  let keys = [];
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (key === num){
      keys.push(index);
    }
  }

  let keyIndex = 0;
  let result = [];
  for (let index = 0; index < nums.length; index++){
    if (keyIndex < keys.length){
      if (Math.abs(index - keys[keyIndex]) <= k){
        result.push(index);
      }
      else if (keyIndex + 1 < keys.length){
        if (Math.abs(index - keys[keyIndex + 1]) <= k){
          keyIndex += 1;
          result.push(index);
        }
      }
    }
  }

  return result;
};