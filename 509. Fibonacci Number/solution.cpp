class Solution {
public:
  int fib(int n) {
    vector<int> memo;
    for (int index = 0; index < n + 1; index++){
      if (index == 0 || index == 1){
        memo.push_back(index);
      }
      else{
        memo.push_back(memo[index - 1] + memo[index - 2]);
      }
    }
    return memo[memo.size() - 1];
  }
};