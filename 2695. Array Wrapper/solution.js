/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
  let total = 0;
  for (let index = 0; index < this.nums.length; index++){
    total += this.nums[index];
  }
  return total;
}

ArrayWrapper.prototype.toString = function() {
  return "[" + this.nums.join(",") + "]";
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */