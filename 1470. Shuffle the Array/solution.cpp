class Solution {
public:
  vector<int> shuffle(vector<int>& nums, int n) {
    vector<int> result;
    for (int index = 0; index < n; index++){
      result.push_back(nums[index]);
      result.push_back(nums[n + index]);
    }
    
    return result;
  }
};