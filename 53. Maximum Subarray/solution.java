class Solution {
  public int maxSubArray(int[] nums) {
    int total = nums[0];
    int maxValue = nums[0];

    for (int index = 1; index < nums.length; index++){
      int num = nums[index];
      int newAddition = 0;
      if (total > 0){
        newAddition = total;
      }
      total = num + newAddition;
      if (total > maxValue){
        maxValue = total;
      }
    }

    return maxValue;
  }
}