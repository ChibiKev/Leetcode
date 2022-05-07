class Solution {
  public int minimumDifference(int[] nums, int k) {
    Arrays.sort(nums);
    int result = nums[k - 1] - nums[0];
    for (int index = k; index < nums.length; index++){
      if (nums[index] - nums[index - k + 1] < result){
        result = nums[index] - nums[index - k + 1];
      }
    }
    return result;
  }
}