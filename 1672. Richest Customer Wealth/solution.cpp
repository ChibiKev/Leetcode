class Solution {
public:
  int maximumWealth(vector<vector<int>>& accounts) {
    int result = 0;
    for (int index = 0; index < accounts.size(); index++){
      vector<int> account = accounts[index];
      int total = 0;
      for (int index2 = 0; index2 < account.size(); index2++){
        int money = account[index2];
        total += money;
      }
      if (total > result){
        result = total;
      }
    }
    return result;
  }
};