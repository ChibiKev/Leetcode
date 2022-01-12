class Solution {
  public int[] sortArrayByParityII(int[] nums) {
    int begin = 0;
    int end = 1;
    while(begin < nums.length && end < nums.length){
      if(nums[begin] % 2 == 0){
        begin += 2;
      }
      else if(nums[begin] % 2 != 0){
        int temp = nums[begin];
        nums[begin] = nums[end];
        nums[end] = temp;
        end += 2;
      }
    }

    return nums;
  }
}