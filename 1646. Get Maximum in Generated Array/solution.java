class Solution {
  public int getMaximumGenerated(int n) {
    if (n < 2){
      return n;
    }

    List<Integer> nums = new ArrayList<Integer>(Arrays.asList(0, 1));
    int maxValue = 1;
    int firstIndex = 1;
    int secondIndex = 1;
    for (int value = 2; value < n + 1; value++){
      if (value % 2 == 0){
        nums.add(nums.get(firstIndex));
        firstIndex += 1;
      }
      else{
        nums.add(nums.get(secondIndex) + nums.get(secondIndex + 1));
        secondIndex += 1;
      }
      if (nums.get(nums.size() - 1) > maxValue){
        maxValue = nums.get(nums.size() - 1);
      }
    }

    return maxValue;
  }
}