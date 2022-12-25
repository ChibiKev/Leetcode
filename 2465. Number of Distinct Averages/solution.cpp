class Solution {
public:
  int distinctAverages(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    unordered_set<double> averages;
    for (int index = 0; index < nums.size() / 2; index++){
      averages.insert((nums[index] + nums[nums.size() - index - 1]) / 2.0);
    }
    
    return averages.size();
  }
};