/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
  let left = {};
  let right = {};
  let count = {};

  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (left[num] == undefined){
      left[num] = index;
    }
    right[num] = index;
    count[num] = (count[num] || 0) + 1;
  }

  let maxCount = 0;
  for (let num in count){
    if (count[num] > maxCount){
      maxCount = count[num];
    }
  }

  result = Infinity;

  for (let num in count){
    if (count[num] === maxCount){
      newResult = right[num] - left[num] + 1;
      if (newResult < result){
        result = newResult;
      }
    }
  }

  return result;
};