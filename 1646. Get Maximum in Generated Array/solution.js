/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
  if (n < 2){
    return n;
  }

  let nums = [0, 1];
  let maxValue = 1;
  let firstIndex = 1;
  let secondIndex = 1;
  for (let value = 2; value < n + 1; value++){
    if (value % 2 == 0){
      nums.push(nums[firstIndex]);
      firstIndex += 1;
    }
    else{
      nums.push(nums[secondIndex] + nums[secondIndex + 1]);
      secondIndex += 1;
    }
    if (nums[nums.length - 1] > maxValue){
      maxValue = nums[nums.length - 1];
    }
  }

  return maxValue;
};