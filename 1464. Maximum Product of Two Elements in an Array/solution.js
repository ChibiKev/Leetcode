/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  let firstMax = 0;
  let secondMax = 0;
  for (let num of nums){
    if (num >= firstMax){
      secondMax = firstMax;
      firstMax = num;
      continue;
    }
    if (num > secondMax){
      secondMax = num;
    }
  }

  return (firstMax - 1) * (secondMax - 1);
};