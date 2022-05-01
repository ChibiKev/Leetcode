class Solution {
  public int findNumbers(int[] nums) {
    int count = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if ((num > 9 && num < 100) || (num > 999 && num < 10000) || num == 100000){
        count += 1;
      }
    }

    return count;
  }
}