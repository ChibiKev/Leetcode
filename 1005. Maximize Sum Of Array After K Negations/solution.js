/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  let sortedNums = nums.sort(function(a, b){return Math.abs(b)-Math.abs(a)});
  
  for (let index = 0; index < sortedNums.length; index++){
    let num = sortedNums[index];
    if (num < 0){
      sortedNums[index] *= -1;
      k -= 1;
      if (k === 0){
        break;
      }
    }
  }

  if (k > 0 && k & 1 == 1){
    sortedNums[sortedNums.length - 1] *= -1;
  }
  
  let totalSum = 0;
  
  for (let num of sortedNums){
    totalSum += num;
  }

  return totalSum;
};