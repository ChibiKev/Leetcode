class Solution {
  public int missingNumber(int[] nums) {
    int total = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      total += num;
      total -= index;
    }
    total -= nums.length;
    return Math.abs(total);
  }
}