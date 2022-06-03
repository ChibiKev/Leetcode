class Solution {
public:
  vector<int> intersection(vector<vector<int>>& nums) {
    unordered_set<int> mySet = unordered_set<int>(nums[0].begin(),nums[0].end());
    for (int index = 1; index < nums.size(); index++){
      vector<int> num = nums[index];
      unordered_set<int> newSet;
      for (int index2 = 0; index2 < num.size(); index2++){
        if (mySet.count(num[index2]) == 1){
          newSet.insert(num[index2]);
        }
      }
      mySet = newSet;
    }
    vector<int> result(mySet.begin(), mySet.end());
    sort(result.begin(), result.end());

    return result;
  }
};