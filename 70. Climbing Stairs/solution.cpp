class Solution {
public:
  int climbStairs(int n) {
    vector<int> result = {1, 1, 2};
    
    for (int index = 3; index < n + 1; index++){
      int nextIteration = result[index - 1] + result[index - 2];
      result.push_back(nextIteration);
    }
    
    return result[n];
  }
};