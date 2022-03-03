/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let maxNums = 0;
  let count = 0;
  for (let num of nums){
    if (num === 0){
      if (count > maxNums){
        maxNums = count;
      }
      count = 0;
    }
    else{
      count += 1;
    }
  }

  return Math.max(maxNums, count);
};