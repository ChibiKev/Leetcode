class Solution {
  public int findFinalValue(int[] nums, int original) {
    Set<Integer> mySet = new HashSet<>();
    for (int index = 0; index < nums.length; index++){
      mySet.add(nums[index]);
    }
    while (mySet.contains(original)){
      original *= 2;
    }
    return original;
  }
}