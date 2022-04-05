/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  this.dp = [];
  let numsSum = 0;
  for (let index = 0; index < nums.length; index++){
    numsSum += nums[index];
    this.dp.push(numsSum);
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let total = 0;
  if (left === 0){
    total = this.dp[right];
  }
  else{
    total = this.dp[right] - this.dp[left - 1];
  }
  return total;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */