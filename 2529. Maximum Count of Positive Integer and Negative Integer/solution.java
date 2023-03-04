class Solution {
  public int maximumCount(int[] nums) {
    int pos = 0;
    int neg = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num > 0){
        pos += 1;
      }
      else if (num < 0){
        neg += 1;
      }
    }
    
    int result = pos;
    if (neg > result){
      result = neg;
    }
    return result;
  }
}