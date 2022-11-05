class Solution {
  public int averageValue(int[] nums) {
    int count = 0;
    int total = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num % 2 == 0 && num % 3 == 0){
        count += 1;
        total += num;
      }
    }
    
    if (count == 0){
      return 0;
    }

    return total / count;
  }
}