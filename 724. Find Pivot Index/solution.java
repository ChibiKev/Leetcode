class Solution {
  public int findMiddleIndex(int[] nums) {
    int leftSum = 0;
    int rightSum = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      rightSum += num;
    }

    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      rightSum -= num;
      if (leftSum == rightSum){
        return index;
      }
      leftSum += num;
    }

    return -1;
  }
}