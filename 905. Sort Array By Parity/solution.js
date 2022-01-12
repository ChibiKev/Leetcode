/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
  let begin = 0;
  let end = nums.length - 1;

  while (begin < end){
    if (nums[begin] % 2 === 0){
      begin += 1;
    }
    else if (nums[begin] % 2 !== 0){
      let temp = nums[begin];
      nums[begin] = nums[end];
      nums[end] = temp;
      end -= 1;
    }
  }

  return nums;
};