class Solution {
  public int maximumProduct(int[] nums) {
    Arrays.sort(nums);
    int firstResult = nums[0] * nums[1] * nums[nums.length - 1];
    int secondResult = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    if (firstResult > secondResult){
      return firstResult;
    }
    return secondResult;
  }
}