class Solution {
public:
  int findFinalValue(vector<int>& nums, int original) {
    unordered_set<int> mySet = unordered_set<int>(nums.begin(),nums.end());
    while (mySet.count(original) != 0){
      original *= 2;
    }
    return original;
  }
};