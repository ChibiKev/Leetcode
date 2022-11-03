class Solution {
  public int findMaxK(int[] nums) {
    Set<Integer> mySet = new HashSet<>();
    for (int index = 0; index < nums.length; index++){
      mySet.add(nums[index]);
    }
    int maxValue = -1;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num > maxValue && mySet.contains(-num)){
        maxValue = num;
      }
    }

    return maxValue;
  }
}