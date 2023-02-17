/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let dictionary = {};
  let sortedNums = [...nums]
  sortedNums.sort(function(a, b){return a-b});
  for (let index = sortedNums.length - 1; index > -1; index--){
    let num = sortedNums[index];
    dictionary[num] = index;
  }
  
  let result = nums;
  for (let index = 0; index < result.length; index++){
    let num = result[index];
    result[index] = dictionary[num];
  }

  return result;
};