class Solution {
  public boolean kLengthApart(int[] nums, int k) {
    int count = k;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num == 1){
        if (count < k){
          return false;
        }
        count = 0;
      }
      else if (num == 0){
        count += 1;
      }
    }
    return true;
  }
}