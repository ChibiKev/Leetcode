class Solution {
public:
  int repeatedNTimes(vector<int>& nums) {
    unordered_set<int> recordedNums;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (recordedNums.count(num) == 1){
        return num;
      }
      recordedNums.insert(num);
    }
    return 0;
  }
};