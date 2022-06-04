class Solution {
  public int findClosestNumber(int[] nums) {
    int result = nums[0];
    for (int index = 1; index < nums.length; index++){
      int num = nums[index];
      if (Math.abs(num) < Math.abs(result)){
        result = num;
      }
      else if (Math.abs(num) == Math.abs(result)){
        if (num > result){
          result = num;
        }
      }
    }
    return result;
  }
}