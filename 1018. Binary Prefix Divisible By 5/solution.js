/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
 var prefixesDivBy5 = function(nums) {
  let current = 0;
  let result = [];
  
  for (let num of nums){
    current = (current * 2 + num) % 5;
    result.push(current === 0);
  }

  return result;
};