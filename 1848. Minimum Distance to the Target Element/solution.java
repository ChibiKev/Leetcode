class Solution {
  public int getMinDistance(int[] nums, int target, int start) {
    double result = Double.POSITIVE_INFINITY;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num == target){
        double newResult = Math.abs(index - start);
        if (newResult < result){
          result = newResult;
          if (result == 0){
            break;
          }
        }
      }
    }

    return (int) result;
  }
}