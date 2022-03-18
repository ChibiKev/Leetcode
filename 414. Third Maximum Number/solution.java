class Solution {
  public int thirdMax(int[] nums) {
    double max1 = Double.NEGATIVE_INFINITY;
    double max2 = Double.NEGATIVE_INFINITY;
    double max3 = Double.NEGATIVE_INFINITY;
    
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num == max1 || num == max2 || num == max3){
        continue;
      }
      if (num > max1){
        max3 = max2;
        max2 = max1;
        max1 = num;
      }
      else if (num > max2){
        max3 = max2;
        max2 = num;
      }
      else if (num > max3){
        max3 = num;
      }
    }

    int result = (int) max1;
    if (max3 != Double.NEGATIVE_INFINITY){
      result = (int) max3;
    }

    return result;
  }
}