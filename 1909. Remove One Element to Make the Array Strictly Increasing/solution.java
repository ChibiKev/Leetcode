class Solution {
  public boolean canBeIncreasing(int[] nums) {
    boolean found = false;
    int last = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (last < num){
        last = num;
      }
      else{
        if (found){
          return false;
        }
        if (index == 1 || nums[index - 2] < num){
          last = num;
        }
        found = true;
      }
    }

    return true;
  }
}