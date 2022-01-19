/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
  let found = new Set();
  let result = [];

  for (let num of nums){
    if (found.has(num)){
      result.push(num);
    }
    else{
      found.add(num);
    } 
  }

  for (let number in nums){
    if (!found.has(+number + 1)){
      result.push(+number + 1);
    }
  }

  return result;
};