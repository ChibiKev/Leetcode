class Solution {
  public int maxProductDifference(int[] nums) {
    int max1 = 0;
    int max2 = 0;
    double min1 = Double.POSITIVE_INFINITY;
    double min2 = Double.POSITIVE_INFINITY;

    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num > max1){
        max2 = max1;
        max1 = num;
      }
      else if (num > max2){
        max2 = num;
      }
      if (num < min1){
        min2 = min1;
        min1 = num;
      }
      else if (num < min2){
        min2 = num;
      }
    }

    return (max1 * max2) - (int) (min1 * min2);
  }
}