class Solution {
  public int sumOfSquares(int[] nums) {
    int total = 0;
    int numsLength = nums.length;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (numsLength % (index + 1) == 0){
        total += num * num;
      }
    }
    return total;
  }
}