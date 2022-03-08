/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 var getMinDistance = function(nums, target, start) {
  let result = Infinity;
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num === target){
      let newResult = Math.abs(index - start);
      if (newResult < result){
        result = newResult;
        if (result === 0){
          break;
        }
      }
    }
  }
    
  return result;
};