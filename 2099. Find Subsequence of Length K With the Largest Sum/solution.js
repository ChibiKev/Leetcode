/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSubsequence = function(nums, k) {
  let result = [];
  let sortedNums = [...nums];
  sortedNums.sort(function(a, b){return b-a});
  let highestNums = sortedNums.slice(0, k);
  for (let num of nums){
    if (highestNums.includes(num)){
      result.push(num);
      highestNums.splice(highestNums.indexOf(num), 1);
    }
  }

  return result;
};