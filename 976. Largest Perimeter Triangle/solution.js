/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
  let sortedNums = nums.sort(function(a, b){return b-a});

  for (let index = 0; index < sortedNums.length - 2; index++){
    let num = sortedNums[index];
    if (num < sortedNums[index + 1] + sortedNums[index + 2]){
      return num + sortedNums[index + 1] + sortedNums[index + 2];
    }
  }
  return 0;
};