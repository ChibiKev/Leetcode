/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumDifference = function(nums) {
  let difference = -1;
  let minValue = nums[0];
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (minValue > num){
      minValue = num;
    }
    else if (minValue < num){
      let newDifference = num - minValue;
      if (difference < newDifference){
        difference = newDifference;
      }
    }
  }
  return difference;
};