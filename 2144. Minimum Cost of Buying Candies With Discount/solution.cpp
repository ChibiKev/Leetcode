class Solution {
public:
  int minimumCost(vector<int>& cost) {
    sort(cost.begin(), cost.end());
    int count = 0;
    int total = 0;
    for (int index = cost.size() - 1; index > -1; index--){
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
};