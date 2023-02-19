class Solution {
public:
  vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
    vector<bool> result;
    int maxCandies = 0;
    for (int index = 0; index < candies.size(); index++){
      int candy = candies[index];
      if (candy > maxCandies){
        maxCandies = candy;
      }
    }
    
    for (int index = 0; index < candies.size(); index++){
      int candy = candies[index];
      int totalCandy = candy + extraCandies;
      if (totalCandy >= maxCandies){
        result.push_back(true);
      }
      else{
        result.push_back(false);
      }
    }
    
    return result;
  }
};