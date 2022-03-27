class Solution {
public:
  int singleNumber(vector<int>& nums) {
    int result = 0;
    for (int index = 0; index < nums.size(); index++){
      result ^= nums[index];
    }
    return result;
  }
};