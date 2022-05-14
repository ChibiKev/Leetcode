/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
  nums.sort(function(a, b){return b-a});
  let total = 0;
  for (let num of nums){
    total += num;
  }

  let result = []
  let resultTotal = 0;
  for (let num of nums){
    result.push(num);
    resultTotal += num;
    total -= num;
    if (resultTotal > total){
      break;
    }
  }

  return result;
};