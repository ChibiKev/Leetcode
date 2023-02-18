/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let result = new Array(nums.length).fill(-1);
  for (let position = 0; position < nums.length; position++){
    if (result[index[position]] != -1){
      for (let position2 = result.length - 1; position2 > index[position]; position2--){
        result[position2] = result[position2 - 1];
      }
    }
    result[index[position]] = nums[position];
  }

  return result;
};