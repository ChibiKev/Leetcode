class Solution {
  public int countElements(int[] nums) {
    double minimum = Double.POSITIVE_INFINITY;
    double maximum = Double.NEGATIVE_INFINITY;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num > maximum){
        maximum = num;
      }
      if (num < minimum){
        minimum = num;
      }
    }

    int count = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num < maximum && num > minimum){
        count += 1;
      }
    }

    return count;
  }
}