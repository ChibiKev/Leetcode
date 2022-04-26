class Solution {
  public int minOperations(int[] nums) {
    int total = 0;
    int last = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num <= last){
        total += (last - num) + 1;
        num = last + 1;
      }
      last = num;
    }
    return total;
  }
}