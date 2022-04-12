class Solution {
  public int findGCD(int[] nums) {
    double smallestNumber = Double.POSITIVE_INFINITY;
    int largestNumber = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (smallestNumber > num){
        smallestNumber = num;
      }
      if (largestNumber < num){
        largestNumber = num;
      }
    }

    while (smallestNumber != 0){
      int temp = largestNumber;
      largestNumber = (int) smallestNumber;
      smallestNumber = temp % smallestNumber;
    }

    return largestNumber;
  }
}