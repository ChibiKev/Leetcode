class Solution {
  public int minimumOperations(int[] nums) {
    Arrays.sort(nums);
    int total = 0;
    int count = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if( num - total == 0){
        continue;
      }
      else{
        total = num;
        count += 1;
      }
    }

    return count;
  }
}