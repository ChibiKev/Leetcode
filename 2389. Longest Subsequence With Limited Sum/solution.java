class Solution {
  public int[] answerQueries(int[] nums, int[] queries) {
    Arrays.sort(nums);
    int total = 0;
    int[] sumList = new int[nums.length];
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      total += num;
      sumList[index] = total;
    }
    
    int[] result = new int[queries.length];
    Arrays.fill(result, 0);
    for (int queriesIndex = 0; queriesIndex < queries.length; queriesIndex++){
      int query = queries[queriesIndex];
      for (int sumIndex = 0; sumIndex < sumList.length; sumIndex++){
        int sums = sumList[sumIndex];
        if (sums <= query){
          result[queriesIndex] = sumIndex + 1;
        }
      }
    }
        
    return result;
  }
}