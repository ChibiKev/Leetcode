class Solution {
  public boolean check(int[] nums) {
    int found = 0;
    for (int index = 0; index < nums.length; index++){
      if (nums[index] > nums[(index + 1) % nums.length]){
        found += 1;
      }
      if (found > 1){
        return false;
      }
    }

    return true;
  }
}