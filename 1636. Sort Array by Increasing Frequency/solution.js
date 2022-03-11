/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
  let dictionary = {};
  for (let num of nums){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }
  let reverseNums = [...nums];
  reverseNums.sort(function(a, b){return b-a});
  let result = [...reverseNums];
  result.sort(function(a, b){return dictionary[a]-dictionary[b]});
  return result;
};