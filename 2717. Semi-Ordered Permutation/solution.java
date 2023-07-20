class Solution {
  public int semiOrderedPermutation(int[] nums) {
    int indexOne = 0;
    int indexN = nums.length - 1;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num == 1){
        indexOne = index;
      }
      if (num == nums.length){
        indexN = index;
      }
    }
    
    int total = (indexOne - 0) + (nums.length - 1 - indexN);
    if (indexN < indexOne){
      total -= 1;
    }
    return total;
  }
}