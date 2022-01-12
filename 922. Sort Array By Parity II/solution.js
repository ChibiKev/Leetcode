/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
  let begin = 0;
  let end = 1;
  while (begin < nums.length && end < nums.length){
    if (nums[begin] % 2 === 0){
      begin += 2;
    }
    else if (nums[begin] % 2 !== 0){
      let temp = nums[begin];
      nums[begin] = nums[end];
      nums[end] = temp;
      end += 2;
    }
  }

  return nums;
};