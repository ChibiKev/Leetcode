/**
 * @param {number[]} nums
 * @return {number}
 */
 var countHillValley = function(nums) {
  let newNums = [nums[0]];
  for (let index = 1; index < nums.length; index++){
    let num = nums[index];
    if (newNums[newNums.length - 1] != num){
      newNums.push(num);
    }
  }

  let count = 0;
  for (let index = 1; index < newNums.length - 1; index++){
    let before = newNums[index - 1];
    let current = newNums[index];
    let after = newNums[index + 1];
    if (before < current && current > after){
      count += 1;
    }
    else if (before > current && current < after){
      count += 1;
    }
  }
  return count;
};