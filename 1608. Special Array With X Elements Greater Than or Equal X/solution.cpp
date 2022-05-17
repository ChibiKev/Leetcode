class Solution {
public:
  int specialArray(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int index = 0;
    while (index < nums.size() && index < nums[nums.size() - index - 1]){
      index += 1;
    }
    if (index < nums.size()){
      if (index == nums[nums.size() - index - 1]){
        return -1;
      }
    }
    return index;
  }
};