class Solution {
  public int maxProduct(int[] nums) {
    int firstMax = 0;
    int secondMax = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num >= firstMax){
        secondMax = firstMax;
        firstMax = num;
        continue;
      }
      if (num > secondMax){
        secondMax = num;
      }
    }

    return (firstMax - 1) * (secondMax - 1);
  }
}