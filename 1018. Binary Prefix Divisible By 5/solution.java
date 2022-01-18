class Solution {
  public List<Boolean> prefixesDivBy5(int[] nums) {
    int current = 0;
    List<Boolean> result = new ArrayList<Boolean>();

    for(int i = 0; i < nums.length; i++){
      current = (current * 2 + nums[i]) % 5;
      result.add(current == 0);
    }

    return result;
  }
}