class Solution {
  public boolean findSubarrays(int[] nums) {
    if (nums.length < 2){
      return false;
    }

    Set<Integer> mySet = new HashSet<Integer>();
    for (int index = 0; index < nums.length - 1; index++){
      int num = nums[index];
      int nextNum = nums[index + 1];
      int total = num + nextNum;
      if (mySet.contains(total)){
        return true;
      }
      else{
        mySet.add(total);
      }
    }

    return false;
  }
}