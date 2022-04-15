class Solution {
  public boolean isMonotonic(int[] nums) {
    boolean increase = false;
    boolean decrease = false;

    for (int index = 0; index < nums.length - 1; index++){
      if (nums[index] < nums[index + 1]){
        increase = true;
      }
      if (nums[index] > nums[index + 1]){
        decrease = true;
      }
    }

    if (increase && decrease){
      return false;
    }
    return true;
  }
}