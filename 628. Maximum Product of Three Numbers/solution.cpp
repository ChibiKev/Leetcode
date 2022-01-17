class Solution {
public:
  int maximumProduct(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int firstResult = nums[0] * nums[1] * nums[nums.size() - 1];
    int secondResult = nums[nums.size() - 1] * nums[nums.size() - 2] * nums[nums.size() - 3];
    if (firstResult > secondResult){
      return firstResult;
    }
    return secondResult;
  }
};