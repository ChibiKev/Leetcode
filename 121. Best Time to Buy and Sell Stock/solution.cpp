class Solution {
public:
  int maxProfit(vector<int>& prices) {
    int start = 0;
    int profit = 0;
    for (int index = 1; index < prices.size(); index++){
      int currentProfit = prices[index] - prices[start];
      if (prices[start] < prices[index]){
        if (profit < currentProfit){
          profit = currentProfit;
        }
      }
      else{
        start = index;
      }
    }

    return profit;
  }
};