class Solution {
  public int alternatingSubarray(int[] nums) {
    int result = -1;
    int current = Integer.MAX_VALUE;

    int last = 0;
    int index = 1;
    while (index < nums.length){
      int difference = nums[index] - nums[index - 1];
      if (difference == current * -1){
        current *= -1;
        if (index - last + 1 > result){
          result = index - last + 1;
        }
      }
      else if (difference == 1){
        current = difference;
        last = index - 1;
        if (index - last + 1 > result){
          result = index - last + 1;
        }
      }
      else{
        current = Integer.MAX_VALUE;
      }
      index += 1;
    }

    return result;
  }
}