class Solution {
  public int[] sortArrayByParity(int[] nums) {
    int begin = 0;
    int end = nums.length - 1;

    while(begin < end){
      if (nums[begin] % 2 == 0){
        begin += 1;
      }
      else if(nums[begin] % 2 != 0){
        int temp = nums[begin];
        nums[begin] = nums[end];
        nums[end] = temp;
        end -= 1;
      }
    }

    return nums;
  }
}