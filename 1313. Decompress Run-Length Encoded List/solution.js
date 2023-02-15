/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let result = [];
  for (let index = 0; index < nums.length - 1; index += 2){
    let frequency = nums[index];
    let value = nums[index + 1];
    for (let amount = 0; amount < frequency; amount++){
      result.push(value);
    }
  }

  return result;
};