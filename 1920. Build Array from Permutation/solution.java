class Solution {
  public int[] buildArray(int[] nums) {
    int[] result = new int[nums.length];
    Arrays.fill(result, 0);
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      result[index] = nums[num];
    }

    return result;
  }
}