class Solution {
  public int largestPerimeter(int[] nums) {
    Arrays.sort(nums);

    for (int index = nums.length - 1; index > 1; index--){
      int num = nums[index];
      if (num < nums[index - 1] + nums[index - 2]){
        return num + nums[index - 1] + nums[index - 2];
      }
    }
    return 0;
  }
}