class Solution {
  public int removeDuplicates(int[] nums) {
    int unique = 1;
    for (int index = 1; index < nums.length; index++){
      if (nums[index] != nums[index - 1]){
        nums[unique] = nums[index];
        unique += 1;
      }
    }
    return unique;
  }
}