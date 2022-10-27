class Solution {
public:
  int arithmeticTriplets(vector<int>& nums, int diff) {
    unordered_set<int> mySet = unordered_set<int>(nums.begin(), nums.end());
    int count = 0;
    for (auto num : mySet) {
      if (mySet.count(num + diff) == 1 && mySet.count(num + diff + diff) == 1){
        count += 1;
      }
    }

    return count;
  }
};