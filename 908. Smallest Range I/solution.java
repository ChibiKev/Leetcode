class Solution {
  public int smallestRangeI(int[] nums, int k) {
    double maximum = Double.NEGATIVE_INFINITY;
    double minimum = Double.POSITIVE_INFINITY;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num < minimum){
        minimum = num;
      }
      if (num > maximum){
        maximum = num;
      }
    }

    if (maximum - minimum > k * 2){
      return (int) (maximum - minimum) - k * 2;
    }
    return 0;
  }
}