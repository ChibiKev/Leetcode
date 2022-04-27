class Solution {
  public int[] sortedSquares(int[] nums) {
    int[] result = new int[nums.length];

    int left = 0;
    int right = nums.length - 1;

    while (left <= right){
      int leftValue = Math.abs(nums[left]);
      int rightValue = Math.abs(nums[right]);
      if (leftValue < rightValue){
        result[right - left] = rightValue * rightValue;
        right -= 1;
      }
      else{
        result[right - left] = leftValue * leftValue;
        left += 1;
      }
    }

    return result;
  }
}