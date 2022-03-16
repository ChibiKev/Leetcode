/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  for (let index = 0; index < nums.length; index++){
    let newIndex = Math.abs(nums[index]) - 1;
    nums[newIndex] = -Math.abs(nums[newIndex]);
  }

  let result = [];
  for (let index = 0; index < nums.length; index++){
    let value = nums[index];
    if (value > 0){
      result.push(index + 1);
    }
  }

  return result;
};