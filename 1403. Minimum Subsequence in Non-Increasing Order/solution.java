class Solution {
  public List<Integer> minSubsequence(int[] nums) {
    Arrays.sort(nums);
    int total = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      total += num;
    }
    
    List<Integer> result = new ArrayList<Integer>();
    int resultTotal = 0;
    for (int index = nums.length - 1; index > -1; index--){
      int num = nums[index];
      result.add(num);
      resultTotal += num;
      total -= num;
      if (resultTotal > total){
        break;
      }
    }

    return result;
  }
}