/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
  let dictionary = {};
  let count = 0;
  for (let num of nums){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }
  
  for (let num of nums){
    let search = num + k;
    if (dictionary[search]){
      count += dictionary[search];
    }
  }
  
  return count;
};