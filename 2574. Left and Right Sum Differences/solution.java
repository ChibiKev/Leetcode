class Solution {
  public int[] leftRigthDifference(int[] nums) {
    int left = 0;
    int total = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      total += num;
    }
    
    int[] answer = new int[nums.length];
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      total -= num;
      int resultingSum = Math.abs(left - total);
      answer[index] = resultingSum;
      left += num;
    }
    
    return answer;
  }
}