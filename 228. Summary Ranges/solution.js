/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
  let result = [];
  if (nums.length === 0){
    return result;
  }

  let lastNum = nums[0];
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    let nextNum = num;
    if (index !== nums.length - 1){
      nextNum = nums[index + 1];
      if (num + 1 === nextNum){
        continue;
      }
    }

    if (lastNum === num){
      result.push(num.toString());
    }
    else{
      result.push(lastNum.toString() + "->" + num.toString());
    }
    lastNum = nextNum;
  }

  return result;
};