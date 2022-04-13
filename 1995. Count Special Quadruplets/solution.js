/**
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
  let result = 0;
  let numsLength = nums.length;

  let count = {};
  count[nums[numsLength - 1] - nums[numsLength - 2]] = 1

  for (let b = numsLength - 3; b > 0; b--){
    for (let a = b - 1; a > -1; a--){
      if (count[nums[a] + nums[b]]){
        result += count[nums[a] + nums[b]];
      }
    }

    for (let x = numsLength - 1; x > b; x--){
      count[nums[x] - nums[b]] = (count[nums[x] - nums[b]] || 0) + 1;
    }
  }

  return result;
};