class Solution {
  public int repeatedNTimes(int[] nums) {
    Set<Integer> recordedNums = new HashSet<>();
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (recordedNums.contains(num)){
        return num;
      }
      recordedNums.add(num);
    }
    return 0;
  }
}