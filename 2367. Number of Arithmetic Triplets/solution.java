class Solution {
  public int arithmeticTriplets(int[] nums, int diff) {
    Set<Integer> mySet = new HashSet<>();
    for (int index = 0; index < nums.length; index++){
      mySet.add(nums[index]);
    }

    int count = 0;
    for (Integer num : mySet){
      if (mySet.contains(num + diff) && mySet.contains(num + diff + diff)){
        count += 1;
      }
    }

    return count;
  }
}