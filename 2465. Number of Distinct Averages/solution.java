class Solution {
  public int distinctAverages(int[] nums) {
    Arrays.sort(nums);
    Set<Double> averages = new HashSet<>();
    for (int index = 0; index < nums.length / 2; index++){
      averages.add((nums[index] + nums[nums.length - index - 1]) / 2.0);
    }
    
    return averages.size();
  }
}