/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var intersection = function(nums) {
  let mySet = new Set(nums[0]);
  for (let index = 1; index < nums.length; index++){
    let num = nums[index];
    let newSet = new Set();
    for (let index2 = 0; index2 < num.length; index2++){
      if (mySet.has(num[index2])){
        newSet.add(num[index2]);
      }
    }
    mySet = newSet;
  }
  result = [...mySet];
  result.sort(function(a, b){return a-b});
  
  return result;
};