/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
  let count = 0;
  let lessThanCount = 0;

  for (let num of nums){
    if (num === target){
      count += 1;
    }
    else if (num < target){
      lessThanCount += 1;
    }
  }

  let result = [];

  for (let amount = 0; amount < count; amount++){
    result.push(lessThanCount);
    lessThanCount += 1;
  }

  return result;
};