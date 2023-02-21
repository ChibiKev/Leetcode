class Solution {
public:
  vector<int> runningSum(vector<int>& nums) {
    vector<int> runningSum {nums[0]};
    for (int index = 1; index < nums.size(); index++){
      int num = nums[index];
      runningSum.push_back(runningSum[runningSum.size() - 1] + num);
    }
    return runningSum;
  }
};