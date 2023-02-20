class Solution {
  public int[] shuffle(int[] nums, int n) {
    int[] result = new int[nums.length];
    for (int index = 0; index < n; index++){
      result[index * 2] = nums[index];
      result[(index * 2) + 1] = nums[n + index];
    }
    
    return result;
  }
}