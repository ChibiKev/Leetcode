class Solution {
  public int smallestEqual(int[] nums) {
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (index % 10 == num){
        return index;
      }
    }
    return -1;
  }
}