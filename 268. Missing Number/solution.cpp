class Solution {
public:
  int missingNumber(vector<int>& nums) {
    int total = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      total += num;
      total -= index;
    }
    total -= nums.size();
    return abs(total);
  }
};