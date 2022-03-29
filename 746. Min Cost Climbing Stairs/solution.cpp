class Solution {
public:
  int minCostClimbingStairs(vector<int>& cost) {
    int first = cost[0];
    int second = cost[1];
    if (cost.size() <= 2){
      return min(first, second);
    }

    for (int index = 2; index < cost.size(); index++){
      int num = cost[index];
      int currrent = num + min(first, second);
      first = second;
      second = currrent;
    }

    return min(first, second);
  }
};