/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMaxGame = function(nums) {
  if (nums.length === 1){
    return nums[0];
  }

  let newNums = [];
  for (let index = 0; index < nums.length / 2; index++){
    if (index % 2 === 0){
      newNums.push(Math.min(nums[2 * index], nums[2 * index + 1]));
    }
    else{
      newNums.push(Math.max(nums[2 * index], nums[2 * index + 1]));
    }
  }

  let result = minMaxGame(newNums);
  return result;
};