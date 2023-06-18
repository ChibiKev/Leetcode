type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let val : number = init;
  for (let index = 0; index < nums.length; index++){
    val = fn(val, nums[index]);
  }
  return val;
};