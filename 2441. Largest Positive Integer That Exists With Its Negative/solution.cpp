class Solution {
public:
  int findMaxK(vector<int>& nums) {
    unordered_set<int> mySet = unordered_set<int>(nums.begin(), nums.end());
    int maxValue = -1;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num > maxValue && mySet.count(-num) == 1){
        maxValue = num;
      }
    }

    return maxValue;
  }
};