class Solution {
  public int findLengthOfLCIS(int[] nums) {
    int maxSub = 0;
    int counter = 1;
    for (int index = 1; index < nums.length; index++){
      int prevNum = nums[index - 1];
      int num = nums[index];
      if (prevNum >= num){
        maxSub = Math.max(maxSub, counter);
        counter = 1;
      }
      else{
        counter += 1;
      }
    }

    return Math.max(maxSub, counter);
  }
}