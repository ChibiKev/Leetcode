/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let result = new Array(nums.length).fill(0);

  let left = 0;
  let right = nums.length - 1;

  while (left <= right){
    let leftValue = Math.abs(nums[left]);
    let rightValue = Math.abs(nums[right]);
    if (leftValue < rightValue){
      result[right - left] = rightValue * rightValue;
      right -= 1;
    }
    else{
      result[right - left] = leftValue * leftValue;
      left += 1;
    }
  }

  return result;
};