class Solution {
public:
  int distributeCandies(vector<int>& candyType) {
    unordered_set<int> candyTypeSet = unordered_set<int>(candyType.begin(),candyType.end());
    int maximumCandy = candyType.size() / 2;
    return min(maximumCandy, (int) candyTypeSet.size());
  }
};