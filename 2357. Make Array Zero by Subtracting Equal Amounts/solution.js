/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
  let sortedNums = nums.sort(function(a, b){return a-b});
  let total = 0;
  let count = 0;
  for (let index = 0; index < sortedNums.length; index++){
    let num = sortedNums[index];
    if( num - total == 0){
      continue;
    }
    else{
      total = num;
      count += 1;
    }
  }

  return count;
};