class Solution {
  public int longestAlternatingSubarray(int[] nums, int threshold) {
    int result = 0;
    int last = Integer.MAX_VALUE;

    int index = 0;
    while (index < nums.length){
      if (nums[index] > threshold || (index > 0 && nums[index] % 2 == nums[index - 1] % 2)){
        if (result < index - last){
          result = index - last;
        }
        last = Integer.MAX_VALUE;
      }
      if (last == Integer.MAX_VALUE && nums[index] <= threshold && nums[index] % 2 == 0){
        last = index;
      }
      index += 1;
    }
    
    if (result < index - last){
      result = index - last;
    }

    return result;
  }
}