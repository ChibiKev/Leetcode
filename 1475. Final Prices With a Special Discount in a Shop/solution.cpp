class Solution {
public:
  vector<int> finalPrices(vector<int>& prices) {
    vector<int> stack;
    for(int index = 0; index < prices.size(); index++){
      int price = prices[index];
      while(stack.size() > 0) {
        int lastStackIndex = stack[stack.size() - 1];
        if (prices[lastStackIndex] < price){
          break;
        }
        prices[lastStackIndex] -= price;
        stack.pop_back();
      }
      stack.push_back(index);
    }

    return prices;
  }
};