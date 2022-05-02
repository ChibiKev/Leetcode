class Solution {
  public List<Integer> targetIndices(int[] nums, int target) {
    int count = 0;
    int lessThanCount = 0;

    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num == target){
        count += 1;
      }
      else if (num < target){
        lessThanCount += 1;
      }
    }
    
    List<Integer> result = new ArrayList<Integer>();

    for (int amount = 0; amount < count; amount++){
      result.add(lessThanCount);
      lessThanCount += 1;
    }

    return result;
  }
}