class Solution {
  public int minCostClimbingStairs(int[] cost) {
    int first = cost[0];
    int second = cost[1];
    if (cost.length <= 2){
      return Math.min(first, second);
    }

    for (int index = 2; index < cost.length; index++){
      int num = cost[index];
      int currrent = num + Math.min(first, second);
      first = second;
      second = currrent;
    }

    return Math.min(first, second);
  }
}