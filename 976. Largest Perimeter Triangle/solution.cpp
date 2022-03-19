class Solution {
public:
  int largestPerimeter(vector<int>& nums) {
    sort(nums.begin(), nums.end());

    for (int index = nums.size() - 1; index > 1; index--){
      int num = nums[index];
      if (num < nums[index - 1] + nums[index - 2]){
        return num + nums[index - 1] + nums[index - 2];
      }
    }
    return 0;
  }
};