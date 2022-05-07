class Solution {
public:
  int minimumDifference(vector<int>& nums, int k) {
    sort(nums.begin(), nums.end());
    int result = nums[k - 1] - nums[0];
    for (int index = k; index < nums.size(); index++){
      if (nums[index] - nums[index - k + 1] < result){
        result = nums[index] - nums[index - k + 1];
      }
    }
    return result;
  }
};