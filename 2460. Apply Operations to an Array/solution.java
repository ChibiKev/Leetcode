class Solution {
  public int[] applyOperations(int[] nums) {
    for (int index = 0; index < nums.length - 1; index++){
      int currentNum = nums[index];
      int nextNum = nums[index + 1];
      if (currentNum == nextNum){
        nums[index] = currentNum * 2;
        nums[index + 1] = 0;
      }
    }
    
    int[] result = new int[nums.length];
    Arrays.fill(result, 0);
    int currentIndex = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num != 0){
        result[currentIndex] = num;
        currentIndex += 1;
      }
    }
    return result;
  }
}