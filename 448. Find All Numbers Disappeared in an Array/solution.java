class Solution {
  public List<Integer> findDisappearedNumbers(int[] nums) {
    for (int index = 0; index < nums.length; index++){
      int newIndex = Math.abs(nums[index]) - 1;
      nums[newIndex] = -Math.abs(nums[newIndex]);
    }

    List<Integer> result = new ArrayList<Integer>();
    for (int index = 0; index < nums.length; index++){
      int value = nums[index];
      if (value > 0){
        result.add(index + 1);
      }
    }

    return result;
  }
}