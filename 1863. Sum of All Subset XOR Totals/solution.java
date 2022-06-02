class Solution {
  public int subsetXORSum(int[] nums) {
    int bits = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      bits = bits | num;
    }

    int result = bits * (int) Math.pow(2, nums.length - 1);
    return result;
  }
}