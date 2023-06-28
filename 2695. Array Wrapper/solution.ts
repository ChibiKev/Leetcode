class ArrayWrapper {
  private nums: number[];

	constructor(nums: number[]) {
    this.nums = nums;
  }

	valueOf() {
    let total: number = 0;
    for (let index = 0; index < this.nums.length; index++){
      total += this.nums[index];
    }
    return total;
  }

	toString() {
    return "[" + this.nums.join(",") + "]";
  }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */