class Solution {
public:
  bool findSubarrays(vector<int>& nums) {
    if (nums.size() < 2){
      return false;
    }

    unordered_set<int> mySet;
    for (int index = 0; index < nums.size() - 1; index++){
      int num = nums[index];
      int nextNum = nums[index + 1];
      int total = num + nextNum;
      if (mySet.count(total) == 1){
        return true;
      }
      else{
        mySet.insert(total);
      }
    }

    return false;
  }
};