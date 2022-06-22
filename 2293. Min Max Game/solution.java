class Solution {
  public int minMaxGame(int[] nums) {
    if (nums.length == 1){
      return nums[0];
    }

    int[] newNums = new int[nums.length / 2];
    for (int index = 0; index < nums.length / 2; index++){
      if (index % 2 == 0){
        newNums[index] = Math.min(nums[2 * index], nums[2 * index + 1]);
      }
      else{
        newNums[index] = Math.max(nums[2 * index], nums[2 * index + 1]);
      }
    }

    int result = minMaxGame(newNums);
    return result;
  }
}