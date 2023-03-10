class Solution {
  public long findTheArrayConcVal(int[] nums) {
    long result = 0;
    for (int index = 0; index < nums.length / 2; index++){
      String concat = String.valueOf(nums[index]) + String.valueOf(nums[nums.length - 1 - index]);
      result += Integer.parseInt(concat);
    }
    
    if (nums.length % 2 == 1){
      result += nums[nums.length / 2];
    }
    
    return result;
  }
}