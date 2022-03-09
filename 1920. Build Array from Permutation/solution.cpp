class Solution {
public:
  vector<int> buildArray(vector<int>& nums) {
    vector<int> result(nums.size(), 0);
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      result[index] = nums[num];
    }

    return result;
  }
};