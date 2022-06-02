class Solution {
public:
  int subsetXORSum(vector<int>& nums) {
    int bits = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      bits = bits | num;
    }

    int result = bits * pow(2, nums.size() - 1);
    return result;
  }
};