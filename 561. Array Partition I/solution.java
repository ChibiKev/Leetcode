class Solution {
  public int arrayPairSum(int[] nums) {
    Arrays.sort(nums);
    int total = 0;

    for (int index = 0; index < nums.length; index += 2){
      total += nums[index];
    }

    return total;
  }
}