class Solution {
  public int majorityElement(int[] nums) {
    int majority = nums[0];
    int count = 1;
    for (int index = 1; index < nums.length; index++){
      int num = nums[index];
      if (count == 0){
        majority = num;
        count += 1;
      }
      else if (majority == num){
        count += 1;
      }
      else{
        count -= 1;
      }
    }

    return majority;
  }
}