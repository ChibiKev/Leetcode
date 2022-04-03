/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let zeros = [];

  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (num === 0){
      zeros.push(index);
      continue;
    }
    if (zeros.length === 0){
      continue;
    }
    nums[zeros[0]] = num;
    zeros.shift();
    zeros.push(index);
  }

  for (let zero of zeros){
    nums[zero] = 0;
  }
};