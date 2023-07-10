class Solution {
  public int maximizeSum(int[] nums, int k) {
    int maximum = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (maximum < num){
        maximum = num;
      }
    }
    
    int total = 0;
    for (int index = 0; index < k; index++){
      total += maximum + index;
    }
    return total;
  }
}