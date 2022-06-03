class Solution {
  public List<Integer> intersection(int[][] nums) {
    Set<Integer> mySet = new HashSet<>();
    for (int index = 0; index < nums[0].length; index++){
      mySet.add(nums[0][index]);
    }
    for (int index = 1; index < nums.length; index++){
      Set<Integer> newSet = new HashSet<>();
      for (int index2 = 0; index2 < nums[index].length; index2++){
        if (mySet.contains(nums[index][index2])){
          newSet.add(nums[index][index2]);
        }
      }
      mySet = newSet;
    }
    List<Integer> result = new ArrayList<Integer>();
    for (Integer num : mySet){
      result.add(num);
    }
    Collections.sort(result);

    return result;
  }
}