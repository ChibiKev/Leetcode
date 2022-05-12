class Solution {
  public int minimumCost(int[] cost) {
    Arrays.sort(cost);
    int count = 0;
    int total = 0;
    for (int index = cost.length - 1; index > -1; index--){
      int num = cost[index];
      if (count == 2){
        count = 0;
        continue;
      }
      count += 1;
      total += num;
    }
    return total;
  }
}