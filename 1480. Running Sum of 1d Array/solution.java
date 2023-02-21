class Solution {
  public int[] runningSum(int[] nums) {
    int[] runningSum = nums;
    for (int index = 1; index < nums.length; index++){
      int num = nums[index];
      runningSum[index] = runningSum[index - 1] + num;
    }
    return runningSum;
  }
}