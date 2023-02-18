class Solution {
  public int[] createTargetArray(int[] nums, int[] index) {
    int[] result = new int[nums.length];
    Arrays.fill(result, 0);
    for (int position = 0; position < nums.length; position++){
      if (result[index[position]] != -1){
        for (int position2 = result.length - 1; position2 > index[position]; position2--){
          result[position2] = result[position2 - 1];
        }
      }
      result[index[position]] = nums[position];
    }

    return result;
  }
}