class Solution {
  public int specialArray(int[] nums) {
    Arrays.sort(nums);
    int index = 0;
    while (index < nums.length && index < nums[nums.length - index - 1]){
      index += 1;
    }
    if (index < nums.length){
      if (index == nums[nums.length - index - 1]){
        return -1;
      }
    }
    return index;
  }
}